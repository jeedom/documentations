Aeotec Minimote 
===============

\

-   **The module**

\

![module](images/aeotec.minimote/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/aeotec.minimote/vuedefaut1.jpg)

\

Summary 
------

\

This Aeon Labs mini controller is compatible with a wide variety of
Z-Wave modules such as switches, dimmers,
movement, switches for blinds ... So you can order at
distance your lights, devices or roller shutters. With this
remote control, you can also include / exclude
your Z-Wave network and associate scenes with the buttons on the
remote control. A sliding flap conceals the buttons for
configure the Z-Wave network.

\

Functions 
---------

\

-   Z-Wave network configuration (inclusion / exclusion of modules)

-   Allows you to control up to 4 scenes

-   8 keys : 4 for scenes, 4 for network settings

-   Start / stop and dimming functions

-   ALL ON / ALL OFF function

-   Internal rechargeable battery on USB

-   Firmware update via USB

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave controller

-   Color : White

-   Food : internal rechargeable battery via USB

-   Viewing: Blue and red LED

-   Frequency : 868.42MHz

-   Scope : up to 30 m

-   Dimensions : 0.8cm x 3.3cm x 9.3cm

-   Operating temperature : -35 to +85 ° C

\

Module data 
-----------------

\

-   Mark : Aeotec

-   Name : Minimote

-   Manufacturer ID : 134

-   Product Type : 1

-   Product ID : 3

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **Important**
>
> To put this module in inclusion mode, press the button
> LEARN, in accordance with its paper Documentation.

\

![inclusion](images/aeotec.minimote/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/aeotec.minimote/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/aeotec.minimote/commandes.jpg)

\

Here is the list of commands :

\

-   Buttons : it is the command which will push the button up

1 : Button 1 short press

2 : Button 1 long press

3 : Button 2 short presses

4 : Button 2 long presses

5 : Button 3 short presses

6 : Button 3 long presses

7 : Button 4 short presses

8 : Button 4 long presses

\

### Setup of the module 

\

> **Important**
>
> During a first inclusion always wake up the module just after
> inclusion.

\

Then if you want to configure the module according to
of your installation, you have to go through the button
"Setup "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/aeotec.minimote/config1.jpg)

\

Parameter details :

\

-   241: button 1 operating mode (leave by default)

-   242: button 2 operating mode (leave by default)

-   243: button 3 operating mode (leave by default)

-   244: button 4 operating mode (leave by default)

-   250: operating mode of the remote control (absolutely leave
    Scene for remote control)

\

### Groups 

\

This module has four association groups, none is necessary
to use it as a remote control in Jeedom.

\

![Groupe](images/aeotec.minimote/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

Wakeup 
------

\

To wake up this module there is only one way :

-   press and hold the LEARN button for 3 seconds

\

Faq. 
------

\

This module wakes up by pressing and holding the LEARN button for 3 seconds.

\

This module is a battery module, the new configuration will not be
take into account that if you wake up the remote control.

\

IMPORTANT note 
---------------

\

> **Important**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wakeup, after a
> change of association groups

\

**@sarakha63**
