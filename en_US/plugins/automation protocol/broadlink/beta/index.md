# Broadlink

Plugin for interfacing with broadlink equipment

# Plugin configuration

After installing the plugin, it must be activated and ensure the correct installation of dependencies.

> **Important**
>
> It is not recommended to change the port

# Inclusion of equipment

Go to the Plugins menu => Home automation protocol => Broadlink. Once on the page click on INCLUSION MODE. Logically, all the Broadlink products in your network will be recognized.

# Equipment configuration

Select one of your equipment. If these are Infrared type products, a learn a command button appears at the top. Just click on it, then you have 5 seconds to learn an infrared command or 433 to your broadlink. Following this, the plugin will confirm the success of the operation and will create the associated command that you simply need to name.

> **Tip**
>
> To avoid learning what could come from the environment (a neighbour's remote control or other), the broadlink in learning mode VOLUNTARILY goes into a very low level of reception, you must therefore be VERY close to the broadlink to learn a command especially if it is a 433Mhz command.

# Synchroniser

On the Commands tab of an equipment you find the Synchronize button. If you have several broadlinks you can transfer the commands learned from one broadlink to another.

> **Tip**
>
> It works from a rm-pro to a mini or vice versa.

You can choose the orders to transfer as well as the broadlinks to which you want to transfer them. (The name of the command will of course be converted (TV ON, fan off, etc.)

> **Tip**
>
> If you manually added your device because not auto-detected. The MAC to be entered is the reverse MAC address in packets of two in lowercase without the : example AA:BB:CC:DD:EE becomes eeddccbbaa
