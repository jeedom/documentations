# Modbus

#Description

Plugin for reading and writing on your ModbusTCP/IP and RTU devices
Not compatible Wago al current time



# Plugin Setup

After downloading the plugin, you must first activate it, like any Jeedom plugin :

![config](./images/ModbusActiv.png)

Then, you have to start the installation of the dependencies (even if they appear OK) :

![dependances](./images/ModbusDep.png)

Finally, start the daemon :

![demon](./images/ModbusDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](./images/ModbusConfig.png)

In this same tab, you must choose the rest value between updating your equipment (by default 5 sec)

You can also choose to put a Retry to re-execute the request on a command/equipment that would be in error (by default False)
You can also choose the number of attempts and the delay between these attempts.




# Use of the plug-in


IMPORTANT :

To use the plugin, you need to know the parameters of your inputs / outputs of your modbus peripherals (data format, bit order, etc...)

For commands, there are parameters to select :

Parameter details :
- Negative value : for LONG/INT type formats, you must specify whether the write/read value will be negative
- Offset : this is whether or not the offset is taken into account in the register numbers on certain Modbus devices
- Choose the slider pitch : This is to choose the step of the slider in the case of an Action/Slider type command if you want to send non-integer values.




IMPORTANT :

Given the time spent having to sometimes configure certain equipment, it is possible to export the commands of an equipment already created, to download it locally in .json.

You can therefore import it either on another box easily on a new equipment of the same type (just to change what differs in terms of its connection)


On the equipment page, at the bottom right, you have this insert : 

![dependances](./images/exportFunction.png)


Click on List of orders to export; a window opens with the existing commands on this equipment:

![dependances](./images/choiceCmds.png)

You can select them all if necessary using the button at the top of the window. 
When the commands are chosen, click on Validate.



You will now see the orders chosen and ready to be exported in this box :

![dependances](./images/exportCmds.png)

You just have to click on Download Config of the orders which has just appeared.



To import commands to equipment : click at the top right of the equipment on the Import Json button :

![dependances](./images/importFunction.png)





You can also choose directly an equipment model available in the configuration of the plugin, to load commands provided in this model; 
Choose the chosen model, then Validate. Then you can Save. 






PLAYBACK CONTROLS :

For Coils and Discrete Inputs :  
  - You add a New Modbus Command, and you name the command. You choose an Info type command, under Binary or Numeric type.
  - Choose the corresponding function code : FC01 or FC02
  - It is then necessary to choose the starting register as well as the number of bytes to read (the number of registers)
  When you save, the command created will be deleted, to create as many commands as the specified number of bytes.
  Ex: If you choose a start register of 1 and a number of bytes of 4, the commands will be created : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - You can of course then rename the ReadCoils/Discretes to your liking.



  For Holdings Registers and Inputs Registers:
  - You add a New Modbus Command, and you name the command. You choose an Info type command, under Numeric type.
  - Choose the corresponding format : Float , Long/Integer or Bits
  - Choose the corresponding function code : FC04 or FC03
  - The starting register as well as the number of bytes : for floats, the maximum number of encoded registers is 4 registers.
  
  
Some registers can only be read by reading several registers at the same time on the same command :

example : We create a command, choose Info and other subtype, specifying 10 bytes (10 registers); by checking LectureMultiRegistres, this will automatically create 10 new orders, using the name of the original order, plus the id of the order in iteration. You can of course rename the commands; when reading the original command, its value will contain a character string of the 10 register values, and will update the 10 corresponding commands.



Some registers may require to be split into several bytes :
example : a register 17, according to the documentation of the device, must return a value FF or 00 (to know if a fan works or not) on the first byte of the register, as well as a numerical value on the second byte of the register.
It is then necessary to create a command in fc3, and to specify in the nbOctets field the figure 2; this will create 2 additional commands, based on the name of the initial command; these 2 commands each correspond to a byte. The values returned above will be in hexadecimal; if you need the numerical value, then you have to check Hexa2dec on this same command.



WRITE COMMANDS:

 On your equipment, by default there will be 3 Action/message type commands created; MultiRegister Write, Bit Write and Multicoil Write


IMPORTANT :


 Their principle of operation:



![cmdEcritures](./images/modbusCmdsEcritures.png)




  - MultiRegister Write : in the configuration of the command, you must enter the starting register, as well as the order of the bytes and word.
  By default, the functionCode is FC16. Please leave this configuration as default.

  To change the values on the registers, use this syntax:
  - valuetosend&nbofregister, separated by | :   Ex:  120&1|214.5&4 We send the integer 120 to a register, starting from the starting register configured,
  then 214.5 in float on 4 registers following the previous one.

  For float types, write the value as above, with a .


  - MultiCoil Writing : in the configuration of the command, you must enter the starting register
  By default, the functionCode is fc15. Please leave this configuration as default.

  To change the values on the registers, use this syntax:
  -  Ex : 01110111 So this will send from the configured starting register the values True(1) or False(0) to the registers




  - Write Bit : in the configuration of the command, you must enter the starting register, as well as the order of the bytes and word.
  By default, the functionCode is fc03, because this command will give the value of the register set in binary to the command info "infobitbinary".

  Please leave this configuration as default.

  On the info "infobitbinary" command, you will have the binary value of the parameter register at the Write Bit command.
  To change the bit on the register

  - valuetosend&PositionBit :   Ex:  1&4 We send the value 1 to the bit of position 4 starting from the right
  On the info command "infobitbinary", you see the value 10000101, which corresponds to the binary value of the parameter register.
  By writing 1&6, you will now have the value : 10100101 on the configured register.



IMPORTANT :


Some PLCs do not have the fc06 function
You can create an Action command, under Message type, and choose fc16
Check Fc16 Register Not Tracked
In the dashboard, you must use this syntax :
departure register ! value & nbregisters separated by a |

Ex: 7!122.5&2|10!22&2

We will write from register 7, the value 122.5 on 2 registers and also from register 10, the value 22, on 2 registers



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




To Write to a Holding Register :

- You add a New Modbus Command, and you name the command. You choose an Action type command, under Slider type.
- Also choose a Min and Max value for this slider (remember to take a min value to send a negative value)
- Choose Bc6 Write Single Register
- Choose the number of registers : 1
- Choose the step of the slider (for decimals, write with a .   ex: 0.2)



When a write is done, whether it succeeds or not, a message appears on Jeedom. 
You can disable/enable this message from the plugin configuration.
