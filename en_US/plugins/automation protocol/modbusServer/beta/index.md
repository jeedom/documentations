# ModbusServer plugin


# Plugin Setup

After downloading the plugin, you must first activate it, like any Jeedom plugin :

![config](../images/ModbusServerActiv.png)

Then, you have to start the installation of the dependencies (even if they appear OK) :

![dependances](../images/ModbusServerDep.png)

Finally, start the daemon :

![demon](../images/ModbusServerDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusServerConfig.png)

By default the ModbusServer port is 1048; it is this port that must be entered on the client side to query the server
You can change this port as needed

You can also set the cron of the plugin, which will take care of updating the orders registered on the server. 



# Use of the plug-in

When we go to the plugin, there is the jeeModbusServer equipment which is created; it is on this equipment that we add the Jeedom commands that we want to add to the server

![jeeServer](../images/ModbusServerEqLogicServer.png)


When you enter the equipment, you can see the Command Mapping button, which will be used to 'transform' the added commands into registers readable by a Modbus client


First, we go to the Commands tab to add commands from our Jeedom

![addCmdInfo](../images/ModbusServerAddCmdInfo.png)


We add for example an Info command :

We name the command, and we search on our Jeedom via the objects for the command we want added to the jeeModbusServer. 

![cmdAdded](../images/ModbusServerCmdAdded.png)


Once done, you can save the equipment.



From there, we can map the command to a 'modbus' command'.

We go back to the Equipment tab, and we can click on Order mapping :
![btnServer](../images/ModbusServerBtnMapping.png)

When you click on Order Mapping, if no order has been added to the server, you will see this error message :
![noCmd](../images/ModbusServerNoCmd.png)


If commands exist, we end up with an interface like this:
![cmdMapped](../images/ModbusServerCmdMapped.png)

You can find the Jeedom object where the order is located, its equipment, as well as its current value. 

The selector menus are used to configure the Modbus register : 

- The Type of Input to choose the type of Modbus register (holding, coil)
- Start Register : Starting register of this Modbus command
- Number of bytes : in Modbus, a register can be written on several bytes (a register is equal to 16 bits, i.e. 1 byte).
- Data Format : the type of the value (Integer(integer), Float(Decimal) or Bit(0 or 1))
- ByteOrder and WordOrder : in general, these settings are in Big on the Modbus PLCs. You can optionally put the value Little


Once the commands have been configured, you can click on Validate. 

The commands will be injected on the serverModbus, and therefore accessible via a clientModbus, on the port chosen in configuration


When configuring and adding a command to the Modbus server, via the modal, then a Jeedom Listener will be created on the plugin, to monitor changes in the status of the initial command, and thus update the alias command on the jeeModbusServer




