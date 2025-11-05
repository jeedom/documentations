## Plugin Modbus

### Description

Plugin for reading and writing on your ModbusTCP/IP and RTU devices



### Plugin Setup

After downloading the plugin, you must first activate it, like any Jeedom plugin :

![config](../images/ModbusActiv.png)

Then, you have to start the installation of the dependencies (even if they appear OK) :

![dependances](../images/ModbusDep.png)

Finally, start the daemon :

![demon](../images/ModbusDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusConfig.png)

In this same tab, you must choose the rest value between updating your equipment (by default 5 sec)

You can also choose to put a Retry to re-execute the request on a command/equipment that would be in error (by default False)
You can also choose the number of attempts and the delay between these attempts.





 :warning: Modbus library Log Level choice :

 By default, it is configured to ERROR, the library being verbose
 You can change its level : you will need to save and restart the daemon




### Use of the plug-in


IMPORTANT :

To use the plugin, you need to know the parameters of your inputs / outputs of your modbus peripherals (data format, bit order, etc...)

For commands, there are parameters to select :

Parameter details :
- Offset : this is whether or not the offset is taken into account in the register numbers on certain Modbus devices
- Choose the slider pitch : This is to choose the step of the slider in the case of an Action/Slider type command if you want to send non-integer values.




IMPORTANT :

Given the time spent having to sometimes configure certain equipment, it is possible to export the commands of an equipment already created, to download it locally in .json.

You can therefore import it either on another box easily on a new equipment of the same type (just to change what differs in terms of its connection)


Sur la page d'un équipement, sur la droite, vous avez boutons :

![dependances](../images/importJson.png)





### PLAYBACK CONTROLS :

For Coils inputs  :  
  - You add a New Modbus Command, and you name the command. You choose an Info type command, under Binary or Numeric type.
  - Choose the corresponding function code : FC01
  - It is then necessary to choose the starting register as well as the number of registers to read
  When you save, the command created will be deleted, to create as many commands as the number of registers specified.
  Ex: If you choose a start register of 1 and a number of registers of 4, the commands will be created : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - You can of course then rename the ReadCoils to your liking.

For Fc2 Read Discrete :

- Create an Info type order, under other type
- Choose fc02
- Choose Bits, Big Endian, Big Word format
- Complete the register
- And fill in the field : Number of bits to read (0 to 15)

When you return from reading, you will have a string type command with the value of the requested bits


  For Holdings Registers and Inputs Registers:
  - You add a New Modbus Command, and you name the command. You choose an Info type command, under Numeric type.
  - Choose the corresponding format : Float , Long/Integer or Bits
  - Choose the corresponding function code : FC04 or FC03
  - The starting register as well as the number of registers : for floats, the value is encoded on a maximum of 4 registers, the minimum is 2.



Some registers can only be read by reading several registers at the same time on the same command :

example : We create a command, choose Info and other subtype, specifying 10 registers;
See Specific Parameters at the end of the documentation


WRITE COMMANDS:

 On your equipment, by default there will be 3 Action/message type commands created; MultiRegister Write, Bit Write and Multicoil Write


IMPORTANT :


 Their principle of operation:


![cmdEcritures](../images/modbusCmdsEcritures.png)






   #### ECRITURE MULTI REGISTRES:

  ###### Ecriture FC16 : registres suivis
        
  En Modbus, la fonction FC16 sert à écrire sur plusieurs registres consécutifs, pour cela :
  En créant une commande puis en choisissant Fc16, la commande sera parametrée en action/defaut et un bouton Configuer Fc16 apparaitra. 

 ![cmdEcritures](../images/configFc16.png)

  Il suffit de cliquer dessus, et on entre ici la valeur à attribuée à chaque registre ainsi que le format de la donnée.

  ![cmdEcritures](../images/bootboxFc16.png)
 
  

  Vous pouvez ajouter ou enlever des valeurs

  Il faut parametrer le registre de départ sur la commande. 
  Et de ce registre de départ que les valeurs seront écrites. 
  Les formats de données entrent en compte également, et si le registre de départ est 10, et que la premiere valeur a envoyée est 15 en int32, alors cela écrira 15 sur le registre 10 et 11. Et l'ecriture suivante si renseignée, sera sur le registre 12 à minima

  Vous pouvez également créer cette commande fc16, et venir changer les valeurs via scenario par exemple, sans repasser par l'UI du plugin :

  ```php
  $cmd = cmd::byId(iddevotrecommande);
  if(is_object($cmd)){
      $cmd->setConfiguration('arrayRegisters', [['value' => '10', 'format' => 'intformat16'],['value' => '12', 'format' => 'intformat16']]);
      $cmd->save();
  }
  ```

  ###### Ecriture FC6 : écriture simple ou registres non-suivis

  En créant une commande puis en choisissant Fc6, sur une commande Action/Curseur, vous n'avez qu'a renseigner le registre, le format de données, et c'est en actionnant ce curseur que la valeur choisie sera envoyée sur le registre


  Pour une écriture multiple, 2 choix possibles :
  En crééant une commmande Action/Défaut, il faut cocher Ecriture Registres non suivis : un bouton Configurer Fc6 apparaitra: vous pouvez cliquez dessus, pour configurer les registres d'ecritures (numero du registre, la valeur à envoyer, et le format). 
  En crééant une commande Action/Message, c'est via le dashboard que l'on entre les valeurs et registres dans le corps du message, avec la syntaxe suivante :

          adresseRegistre|valeur|format;adresseRegistre2|valeur|format;etccc

          Pour le format, vous disposez de :
          int16, int32, uint16, uint32, int64, uint64










  ###### Write Bit : in the command configuration, you need the order of bytes and word.

  Une commande Ecriture Bit est incluse sur vos équipements et doit etre utilisée pour venir changer un bit sur un registre.

  Par défaut, le fonctionCode est de fc03, car cette commande sert à donner la valeur du registre parametré en binaire à la commande info "infobitbinary".

  Please leave this configuration as default.

  On the info "infobitbinary" command, you will have the binary value of the parameter register at the Write Bit command.
  
  Pour changer le bit sur le registre , on utilise sur le corps du message de la commande Ecriture Bit :

  valuetosend&PositionBit&Register :   Ex:  1&4 We send the value 1 to the bit in position 4 from the right, to the specified register
  On the info command "infobitbinary", you see the value 10000101, which corresponds to the binary value of the parameter register.
  By writing 1&6, you will now have the value : 10100101 on the configured register.





To write on a Coil :

Example for register 1 On:
- You add a New Modbus Command, and you name the command. You choose an Action type command, under Default type.
- Choose Fc5 Write Single Coil
- Departure register : 1
- Number of bytes : 1
- Put 1 in value to send

Example for register 1 Off:
- You add a New Modbus Command, and you name the command. You choose an Action type command, under Default type.
- Choose Fc5 Write Single Coil
- Departure register : 1
- Number of bytes : 1
- Put 0 in value to send


By acting on these action commands on your dashboard, you will therefore send True or False to your Coils.




# Specific Parameters

###### HEX RETURN :
  To have a command that returns the value of the register in HexaDecimal (for a command that reports the errors of an equipment for example), you create your command, configure it as usual,
  and tick Return Hexa.
  Au changement de valeur, la commande passera en sous type String,et prendra le retour hexa  



###### MULTI-REGISTER READING :
  by checking LectureMultiRegistres, this will automatically create as many new commands as the number specified in Number of registers, using the name of the original command, plus the id of the command in iteration. You can of course rename the commands; when reading the original command, its value will contain a character string of the 10 register values, and will update the 10 corresponding commands.


###### OPERATION ON ORDER :
  For an operation on the return of value : in the Operation field on the order, you can fill in a mathematical operation by putting the tag #value# to indicate the value of this command :
  example : (#value# / 10 ) * 2
  The calculation will be performed on the return of data from this command.
  Make good use of * for multiplications


###### Read Register Bits :
By choosing this on an Info command, this will create an info type command, representing the 16 bits of this register; this new command is created when the values are reported for the first time, and is then updated with each new report.




# Import/Export XLS CommandsX

After the creation of an equipment, you can import an xlsx file for the creation of your orders
The template file can be found in plugins/modbus/data/templateXlsx/exportModbus.xls
You can access it and download it via your Jeedom -> Settings-> System-> File editor



# MQTT

Dans la configuration du plugin, vous pouvez cocher Utilisation de MQTT
Si le plugin officiel MQTT est installé et configuré, alors au demarrage du demon de Modbus, un topic sera créé sur le broker, et à la mise à jour des valeurs via le cron, les informations des registres seront également publiés sur le broker via le topic suivant :

jeeModbusMQTT/nomDeL'equipement/dataCmds


Sur la page d'un équipement, vous pouvez changer le topic par défaut (nom de l'équipement), par ce que vous désirez :

![renammeTopic](../images/renammeTopic.png)




