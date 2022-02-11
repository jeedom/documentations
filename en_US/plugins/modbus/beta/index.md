# Modbus

#Description

Plugin for reading and writing on your ModbusTCP/IP and RTU devices



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




# Use of the plug-in


IMPORTANT :

To use the plugin, you need to know the parameters of your inputs / outputs of your modbus peripherals (data format, bit order, etc...)

For commands, there are parameters to select :

Parameter details :
- Negative value : for LONG/INT type formats, you must specify whether the write/read value will be negative
- Offset : this is whether or not the offset is taken into account in the register numbers on certain Modbus devices
- Choose the slider pitch : This is to choose the step of the slider in the case of an Action/Slider type command if you want to send non-integer values.




PLAYBACK CONTROLS :

For Coils inputs :  
  - You add a New I/O ModbusTCP, and you name the command. You choose an Info type command, under Binary or Numeric type.
  - Choose the appropriate code function : in this case, choose Fc1 read Coils
  - It is then necessary to choose the starting register as well as the number of bytes to read (the number of registers)
  When you save, the command created will be deleted, to create as many Coils commands as the specified number of bytes.
  Ex: If you choose a start register of 1 and a number of bytes of 4, the commands will be created : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - You can of course rename the ReadCoils to your liking.



  For Holdings Registers :
  - You add a New I/O ModbusTCP, and you name the command. You choose an Info type command, under Numeric type.
  - Choose the corresponding format : Float or Long/Integer
  - The starting register as well as the number of bytes : for floats, the maximum number of encoded registers is 4 registers (64 bits)



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
    -  ex : 01110111 So this will send from the configured starting register the values True(1) or False(0) to the registers




    - Write Bit : in the configuration of the command, you must enter the starting register, as well as the order of the bytes and word.
    By default, the functionCode is fc03, because this command will give the value of the register set in binary to the command info "infobitbinary".

    Please leave this configuration as default.

    On the info "infobitbinary" command, you will have the binary value of the parameter register at the Write Bit command.
    To change the bit on the register

    - valuetosend&PositionBit :   Ex:  1&4 We send the value 1 to the bit of position 4 starting from the right
    On the info command "infobitbinary", you see the value 10000101, which corresponds to the binary value of the parameter register.
    By writing 1&6, you will now have the value : 10100101 on the configured register.








To write on a Coil :

  Example for register 1 On:
  - You add a New I/O ModbusTCP, and you name the command. You choose an Action type command, under Default type.
  - Choose Fc5 Write Single Coil
  - Departure register : 1
  - Number of bytes : 1
  - Put 1 in value to send

  Example for register 1 Off:
  - You add a New I/O ModbusTCP, and you name the command. You choose an Action type command, under Default type.
  - Choose Fc5 Write Single Coil
  - Departure register : 1
  - Number of bytes : 1
  - Put 0 in value to send


By acting on these action commands on your dashboard, you will therefore send True or False to your Coils.




To Write to a Holding Register :

 - You add a New I/O ModbusTCP, and you name the command. You choose an Action type command, under Slider type.
 - Choose Fc5 Write Single Register
 - Choose the format to send to the registry (this will change the type of slider on your dashboard, depending on whether it is float or long/integer)
 - Choose the step of the slider (for decimals, write with a .   ex: 0.2)
 - Also choose a Min and Max value for this slider
