# Broadlink plug-in

Plugin to interface Jeedom with Broadlink equipment.

# Plugin configuration

After installing the plugin, it must be activated and ensure the correct installation of dependencies.

>**IMPORTANT**
>
>It is not recommended to change the internal socket port.

# Inclusion of equipment

Go to the Plugins menu => Home automation protocol => Broadlink. Once on the page, click on the INCLUDE button. Logically, all the Broadlink products in your network will be recognized.

# Equipment configuration

Select one of your equipment. If these are Infrared type products, a learn a command button appears at the top. Just click on it, then you have 5 seconds to learn an infrared command or 433 to your broadlink. Following this, the plugin will confirm the success of the operation and will create the associated command that you simply need to name.

>**INFORMATION**
>
>To avoid learning what might come from the environment *(remote control from a neighbor or other)*, the Broadlink in learning mode VOLUNTARILY goes to a very low reception level, so you have to be VERY close to the Broadlink to learn a command, especially if it is a 433Mhz command.

# Synchroniser

On the Commands tab of an equipment you find the Synchronize button. If you have several broadlinks you can transfer the commands learned from one broadlink to another.

>**INFORMATION**
>
>It works from a rm-pro to a mini or vice versa.

You can choose the orders to transfer as well as the broadlinks to which you want to transfer them. (The name of the command will of course be converted (TV ON, fan off, etc.)

>**INFORMATION**
>
>If you manually add your device because not autodetected. The MAC address to be entered is the reverse MAC address per packet of two in lowercase without the colons *(example AA:BB:CC:DD:EE becomes eeddccbbaa)*.
