Plugin for interfacing with broadlink equipment

Plugin configuration 
=======================

After installing the plugin, you must activate it and make sure that
good installation of outbuildings.

> **Important**
>
> It is not recommended to change the port

Inclusion of equipment 
=========================

Aller dans le menu Plugins &gt; Protocole Domotique &gt; Broadlink. Une
Once on the page click on INCLUSION MODE. Logically the whole
Broadlink products in your network will be recognized.

Equipment configuration 
=============================

Select one of your equipment. If these are type products
Infrared, a button to learn a command appears at the top. There you
just click on it, you then have 5 seconds to learn
an infrared or 433 command to your broadlink. Following this the plugin
will confirm the success of the operation and create the associated order
you just need to name.

> **Tip**
>
> To avoid learning what could come from the environment
> (remote control of a neighbor or other), the broadlink in mode
> learning VOLUNTARILY goes into a very reception level
> weak, so you have to be VERY close to the broadlink to learn a
> order especially if it is a 433Mhz order.

Synchronize 
============

On the Equipment controls tab you find the button
Synchronize. If you have more than one broadlink you can
transfer learned commands from one broadlink to another.

> **Tip**
>
> It works from a rm-pro to a mini or vice versa.

You can choose the orders to transfer as well as the broadlinks
to which you want to transfer them. (The name of the order will be
obviously convervé (ON television, fan off, etc.)

> **Tip**
>
> If you manually added your device because not auto-detected. The MAC to inform is 
> reverse MAC address in packet of two in lower case without : example AA:BB:CC:DD:EE
> becomes eeddccbbaa

Changelog detailed :
<https://github.com/jeedom/plugin-broadlink/commits/stable>
