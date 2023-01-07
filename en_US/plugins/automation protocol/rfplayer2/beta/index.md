# Rfplayer 2 plugin

Plugin to use the RFPLAYER 1000. This plugin will eventually replace the first plugin. It will be made available to all owners of the first plugin.

This will allow everyone to migrate quietly. Because the philosophy of the plugin having changed and the ids too, you will have to include your devices on this new plugin.

# Configuration of the RFPlayer plugin 

After installing the plugin, you just need to activate it :

**Setup**

To configure the plugin, you just have to auto, or choose the RFPlayer.

# Add a Module 

The RFPlayer is compatible with many Modules. The RFPlayer2 plugin completely changes its philosophy.
It reasons generically to ensure fair compatibility with the RFplayer itself.

To include a module, simply click on Inclusion and follow the step by step. This one will ask you to choose
the protocol, then the type (actuator / transmitter) in the case of a transmitter the configuration created will contain all the raw data transmitted by the rfplayer (some may be useless for your use, you can hide them). The advantage of this method is to be aligned with the Rfplayer (some devices giving the info in one place, others in another) and also to allow during the inclusion to finely filter the protocol to be included.

You won't have to worry about including Oregon probes when you want to include an X2D sensor.
 
The same principle applies to actuators. You will also have to choose the type of actuator according to the protocol. Once done, the equipment will be created in Jeedom. And you will have to enter a program ID consistent with the protocol (usually this field is pre-filled intelligently) and then go to the control panel and click on "Test" on the association command.
Obviously it is necessary beforehand that you have put the module in learning according to the documentation of the manufacturer of the module.
 
Some peculiarities :

**Oregon**

Changing the batteries changes the product ID. So when changing batteries, add a new module, then click on "Recover ID" opposite "Change battery". This action must be carried out on the new module and choose the name of the appropriate module (the old name of the module whose batteries have just been replaced).

**Parrot**

For parrot mode equipment will be created. This one will have a button allowing to put the Rfplayer in training and will create the associated command. There is a status command which allows you to ask the Rfplayer to log into log debug, all of the parrot commands learned.

You will be notified in the Changelog of the plugin when it is updated.
