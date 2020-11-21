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
you just need to name. There is also an advanced mode 
to possibly detect slightly different Rf frequencies.
This mode works in two stages, one frequency detection stage 
(or you have to keep pressing the button or pressing it several times).
And a second step similar to classic mode.

> **Tip**
>
> To avoid learning what could come from the environment
> (remote control from a neighbor or other), the broadlink in
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
obviously convervated (TV ON, fan off, etc.)

> **Tip**
>
> If you manually added your device because not auto-detected. The MAC to inform is 
> reverse MAC address in packet of two in lower case without : example AA:BB:CC:DD:EE
> becomes eeddccbbaa

> **Tip**
>
> For some RM Pro including versions 4. The device must not be linked to the cloud.
> Otherwise it is no longer controllable locally. To do this you have to add the device using the application.
> But don't continue once it's added to your wifi (don't add it to a room or anything). It has to stop
> at this moment.

Changelog detailed :
<https://github.com/jeedom/plugin-broadlink/commits/stable>
