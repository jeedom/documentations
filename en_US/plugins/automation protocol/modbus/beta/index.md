# Modbus

#Description

Plugin for reading and writing on your ModbusTCP/IP and RTU devices
Not compatible Wago al current time



# Plugin Setup

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

![dependances](../images/exportFunction.png)


Click on List of orders to export; a window opens with the existing commands on this equipment:

![dependances](../images/choiceCmds.png)

You can select them all if necessary using the button at the top of the window.
When the commands are chosen, click on Validate.



You will now see the orders chosen and ready to be exported in this box :

![dependances](../images/exportCmds.png)

You just have to click on Download Config of the orders which has just appeared.



To import commands to equipment : click at the top right of the equipment on the Import Json button :

![dependances](../images/importFunction.png)





You can also choose directly an equipment model available in the configuration of the plugin, to load commands provided in this model;
Choose the chosen model, then Validate. Then you can Save.


MODBUS DETAILS :


The size of a Modbus register is 2bytes (2 bytes), i.e. 16bits



PLAYBACK CONTROLS :

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

 :warning: NEW ONE-BIT WRITING METHOD :

 To change a specific bit on a register : you can create an Action type command, and choose the Code Function 'Write Bit'. This will only show you the 2 fields to fill out : Starting register and bit position. 
 When saving, this will create 2 action commands : one to send 0, and one to send 1, and this will delete the one you have configured.
 The two new commands will have their type name :

 WriteBit_Register(RegisterNum)_Position(BitPosition)_1 and WriteBit_Register(RegisterNum)_Position(BitPosition)_0

 


  CHANGE OF BITS OF A REGISTER (Old method):

  To change the bit of a register, you must use the message WriteBit command; in the configuration of the command, in the Start register field, you must choose the number of the register to write. No other configuration needed
  Then, on the message body of the command on the dashboard, you must use the following syntax : bitValue&indexbit
  Possible bit value 0 or 1
  indexBit is the value between 0 and 15 (values included)
  Please refer to the documentation of your equipment for the index of the bit to change




   NEW WRITE ON SEVERAL REGISTERS TO A REQUEST:

      - By creating an Action -> Other subtype command, then choosing Fc16, and filling in the Start Register and the new Register Table line in the Command Parameters, we can execute this command to write from the start register the entered values :

      Ex : Start Register : 10
      Line Table Register : 10-45-22-25.6-2360
      We will send on registers 10,11,12,13 and 14, the values 10,45,22,22.6 and 2360
      Values must be separated by a - , and for decimal numbers, put a .


  - MultiRegister Write : in the configuration of the command, you must enter the starting register, as well as the order of the bytes and word.
  By default, the functionCode is FC16. Please leave this configuration as default.

  To change the values on the registers, use this syntax:
  - valuetosend&nbofregister, separated by | :   Ex:  120&1|214.5&4 We send the integer 120 to a register, starting from the starting register configured,
  then 214.5 in float on 4 registers following the previous one.

  For float types, write the value as above, with a .


  - MultiCoil Writing : in the configuration of the command, you must enter the starting register
      By default, the functionCode is fc15. Please leave this configuration as default.

      To change the values on the registers, use this syntax:
      Ex : 01110111 So this will send from the configured starting register the values True(1) or False(0) to the registers



  - Write Bit : in the command configuration, you need the order of bytes and word.
     By default, the functionCode is fc03, because this command will give the value of the register set in binary to the command info "infobitbinary".

     Please leave this configuration as default.

     On the info "infobitbinary" command, you will have the binary value of the parameter register at the Write Bit command.
     To change the bit on the register :

        valuetosend&PositionBit&Register :   Ex:  1&4 We send the value 1 to the bit in position 4 from the right, to the specified register
        On the info command "infobitbinary", you see the value 10000101, which corresponds to the binary value of the parameter register.
        By writing 1&6, you will now have the value : 10100101 on the configured register.



IMPORTANT :


Some PLCs do not have the fc06 function
  See Specific Parameters at the end of the documentation



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





# Specific Parameters

HEX RETURN :
  To have a command that returns the value of the register in HexaDecimal (for a command that reports the errors of an equipment for example), you create your command, configure it as usual,
  and tick Return Hexa.

  This will create a new command on return that will have the name of the original command, followed by _HEXAVALUE



MULTI-REGISTER READING :
  by checking LectureMultiRegistres, this will automatically create as many new commands as the number specified in Number of registers, using the name of the original command, plus the id of the command in iteration. You can of course rename the commands; when reading the original command, its value will contain a character string of the 10 register values, and will update the 10 corresponding commands.



Fc16 UNTRACKED REGISTERS :
  Some PLCs do not have the fc06 function
  You can create an Action command, under Message type, and choose fc16
  Check Fc16 Register Not Tracked
  In the dashboard, you must use this syntax :
  departure register ! value & nbregisters separated by a |

  Ex: 7!122.5&2|10!22&2

  We will write from register 7, the value 122.5 on 2 registers and also from register 10, the value 22, on 2 registers



OPERATION ON ORDER :
  For an operation on the return of value : in the Operation field on the order, you can fill in a mathematical operation by putting the tag #value# to indicate the value of this command :
  example : (#value# / 10 ) * 2
  The calculation will be performed on the return of data from this command.
  Make good use of * for multiplications


Read Register Bits :
By choosing this on an Info command, this will create an info type command, representing the 16 bits of this register; this new command is created when the values are reported for the first time, and is then updated with each new report.






# Import/Export XLS CommandsX

After the creation of an equipment, you can import an xlsx file for the creation of your orders
The template file can be found in plugins/modbus/data/templateXlsx/exportModbus.xls
You can access it and download it via your Jeedom -> Settings-> System-> File editor
