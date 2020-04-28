 
================================

\

-   **The module**

\

![module](images/nodon.wallswitch/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/nodon.wallswitch/vuedefaut1.jpg)

\

Summary 
------

\




.


: 

.

\

Functions 
---------

\

-   Control alone or with a home automation system

-   

-   

-   

-   2 years of battery

\

Technical characteristics 
---------------------------

\

-   Food : CR2032 battery - Autonomy 1,5 - 2 years

-   4 buttons

-   

-   Operating temperature : 

-   Altitude : 2000m

-   Z-Wave® radio protocol : 868.4MHz - 500 Series - Z-Wave compatible
    Plus® SDK 06.51.06

-   Scope : 

-   Dimensions : 80 \ * 80 \ * 15mm

-   2 years warranty

-   :::::2013

-   

-   

-   

-   :2010

\

Module data 
-----------------

\

-   Mark : Nodon

-   Name : 

-   Manufacturer ID : 357

-   Product Type : 2

-   Product ID : 3

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, press the two
> button (1 and 2) until the light turns pink then press
> button 1, according to its paper documentation.

\

![inclusion](images/nodon.wallswitch/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/nodon.wallswitch/information.jpg)

\

### Commands 

\


available.

\

![Commands](images/nodon.wallswitch/commandes.jpg)

\

Here is the list of commands :

\

-   Buttons : it is the command which will push the button up

+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| Buttons        | Support          | Long press     | Relaxation    | Double support   |
+ ================ + ================ + ================ = + ================ + ================= +
| **1**          | 10             | 12             | 11             | 13             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **2**          | 20             | 22             | 21             | 23             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **3**          | 30             | 32             | 31             | 33             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **4**          | 40             | 42             | 41             | 43             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +

\

### Setup of the module 

\

> **IMPORTANT**
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

![Config1](images/nodon.wallswitch/config1.jpg)

\

Parameter details :

\

-   1-2 : Allows you to choose the profile of the buttons when used in
    central (not necessary for use in Jeedom)

-   3 : IMPORTANT parameter to say if the switch should work
    in Scene or Central Scene mode (Absolutely set Scene)

-   4-7 : Choose the button operating mode (in case
    group associations)

-   8 : Allows you to choose the operating mode of the LED

### Groups 

\

This module has 7 association groups.

\

![Groupe](images/nodon.wallswitch/groupe.jpg)

![Groupe](images/nodon.wallswitch/groupe2.jpg)

\

-   Group 1 - Lifeline : This group is generally used for
    transfer information from the Smart Plug to the main controller
    of the network.

-   Group 2 to 5 - The devices in these groups are controlled by the
    corresponding button according to MONO profile

-   Group 6 to 7 - The devices in these groups are controlled by the
    corresponding button according to DUO profile

\

> **IMPORTANT**
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



\

Faq. 
------

\

This module is a battery module, the new configuration will not be
take into account that if you wake up the remote control.

\

IMPORTANT note 
---------------

\

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wakeup, after a
> change of association groups

\

**@sarakha63**
