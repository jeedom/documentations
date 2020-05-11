Nodon Remote Control - Soft Remote 
================================

\

-   **The module**

\

![module](images/nodon.softremote/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/nodon.softremote/vuedefaut1.png)

\

Summary 
------

\

The Soft Remote NodOn® can directly control any device
Z-Wave® or Z-Wave Plus® compatible such as the NodOn® smart plug.

It can also trigger scenes via a home automation system
compatible.

\

Functions
---------

\

-   Control any Z-Wave compatible device

-   Impact and splash resistant

-   Attaches everywhere thanks to its integrated magnet

-   6 colors available

\

Technical characteristics 
---------------------------

\

-   Food: CR2032 battery - Autonomy 1,5 - 2 years

-   4 buttons

-   Integrated magnet for fixing to metal surface

-   Impact and splash resistant

-   Operating temperature : 0 ° C to 40 ° C - Altitude : 2000m

-   Z-Wave® radio protocol : 868.4MHz - 500 Series - Z-Wave compatible
    Plus® SDK 06.51.06

-   Scope : 40m indoors / 80m outdoors

-   Dimensions 56 \*56 \*20mm

-   2 years warranty

\

Module data 
-----------------

\

-   Mark: Nodon

-   Name: CRC-3-6-0x Soft Remote

-   Manufacturer ID : 357

-   Product Type : 2

-   Product ID : 2

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
> To put this module in inclusion mode, press the two
> button (+ and 0 full) until the light turns pink then
> press the + button, in accordance with its paper documentation.

\

![inclusion](images/nodon.softremote/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/nodon.softremote/information.png)

\

### Commands

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/nodon.softremote/commandes.png)

\

Here is the list of commands :

\

-   Buttons: it is the command which will push the button up

+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| Buttons       | Support         | Long press     | Relaxation   | Double support   |
+ ================ + ================ + ================ = + ================ + ================= +
| **1 (0         | 10             | 12             | 11             | 13             |
| plein)**       |                |                |                |                |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **2 (+)**      | 20             | 22             | 21             | 23             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **3 (0 empty)** | 30             | 32             | 31             | 33             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **4 (-)**      | 40             | 42             | 41             | 43             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +

-   Drums: it is the command which raises the level of the batteries

\

### Configuration of the module 

\

> **Important**
>
> During a first inclusion always wake up the module just after
>inclusion

\

Then if you want to configure the module according to
of your installation, you have to go through the button
"Configuration "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/nodon.softremote/config1.png)

\

Parameter details :

\

-   1-2: Allows you to choose the profile of the buttons when used in
    central (not necessary for use in Jeedom)

-   3 : Important parameter to say if the switch should work
    in Scene or Central Scene mode (Absolutely set Scene)

-   4-7: Choose the button operating mode (in case
    group associations)

-   8 : Allows you to choose the operating mode of the LED

### Groups

\

This module has 7 association groups.

\

![Groupe](images/nodon.softremote/groupe.png)

\

-   Group 1 - Lifeline : This group is generally used for
    transfer information from the Smart Plug to the main controller
    of the network.

-   Group 2 to 5 - The devices in these groups are controlled by the
    corresponding button according to MONO profile

-   Group 6 to 7 - The devices in these groups are controlled by the
    corresponding buttons according to DUO profile

\

> **Important**
>
> At a minimum Jeedom should end up in group 1 \

Good to know 
------------

\

### Specificities 

\

-   This module can be finicky on inclusion. Do not hesitate to
    wake up 1 or 2 times after inclusion. And check the
    association group.

\

Wakeup
------

\

To wake up this module, just press one of the buttons

\

Faq. 
------

\

This module is a battery module, the new configuration will not be
take into account that if you wake up the remote control.

\

Important note 
---------------

\

> **Important**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wakeup, after a
> change of association groups

\

**@lunarok**
