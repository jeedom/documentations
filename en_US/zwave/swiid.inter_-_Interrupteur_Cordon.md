Swiid Switch - Swiidinter 
===============================

\

-   **The module**

\

![module](images/swiid.inter/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

\

Summary 
------

\

SwiidInter is the first cord switch in the environment
Z-Wave home automation that is small and discreet enough to be
comparable to an ordinary cord switch.

It can be used both manually like any
ordinary and remote cord switch via controller
Z-WAVE.

The SwiidInter switch also offers association possibilities
and this two-way. Thus, it can be operated automatically by a
other Z-Wave device on the same network, such as the
presence detector triggered. Conversely with support
short or with a long press it can control two separate groups of
Z-Wave devices associated with it : for example every
other lights in the room where your switch is located
SwiidInter.

The SwiidInter switch is installed exactly like a switch
on ordinary cord : so it's a quick and easy installation that
requires no specialized tools. It must then be configured to
integrate into a Z-Wave "network", this network can be as simple
only one remote control that controls your SwiidInter switch to
Range.

\

Functions 
---------

\

-   Cord switch usable both manually
    (short press) and by remote radio (Z-Wave)

-   Use as a replacement for a standard cord switch
    a bedside, table or desk lamp

-   ON / OFF function

-   Activation of a home automation scenario on long press
    (Z-Wave association)

-   Dimensions comparable to an ordinary cord switch

-   Installs like an ordinary cord switch

-   Suitable for all types of lamp bulbs

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave receiver

-   Color : black

-   Food: 230V ± 10% - 50Hz

-   Max power : 660W

-   Consumption : &lt; 0,08W

-   Protection sign: IP20

-   Radio protocol: Z-Wave® (SDK 4.55)

-   Radio frequency : 868.42 MHz (EU)

-   Dist. transmission: Up to 30m indoors (depends on materials)

-   Temp. operation : 0 - 40 ° C

-   On / off display : Blue LEDs

-   Dimensions : 84 x 32 x 29 mm

-   EU standards : EN 61058-2-1:2011 EN 55015

\

Module data 
-----------------

\

-   Mark : Swiid

-   Name : SwiidInter

-   Manufacturer ID : 358

-   Product Type : 256

-   Product ID : 256

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/Documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, press the button
> on the back, in accordance with its paper documentation

\

![inclusion](images/swiid.inter/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/swiid.inter/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/swiid.inter/commandes.jpg)

\

Here is the list of commands :

\

-   State : It is the command which allows to know the status of the
    Light

-   We : It is the control that turns on the light

-   Off : It is the command that turns off the light

\

Note that on the dashboard all the information is found on the same
Icon

\

### Configuration of the module 

\

You can configure the module according to your
installation. This requires going through the "Configuration" button of the
Jeedom OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/swiid.inter/config1.jpg)

\

Parameter details :

\

This parameter allows you to choose the behavior when you associate the
swiidinter to another module (long press)

\

-   Inactive : will have no effect on other lights

-   Only OFF : will be effective only to turn off others
    Lights

-   ON ONLY : will be effective only to turn on the others
    Lights

-   ON and OFF (fully) : will be effective to turn on and off the
    other lights

\

### Groups 

\

This module has two association groups.

\

![Groupe](images/swiid.inter/groupe.jpg)

\

> **IMPORTANT**
>
> For optimum operation of your module. Jeedom must
> be associated at least with group 2.

\

Associate with another light 
----------------------------

\

To associate the swiidinter with another light and be able to benefit from
switching on another light, just add it to the group
of association 1 via the screen cited above.

\

Good to know 
------------

\

### Alternative visual 

\

![vuewidget](images/swiid.inter/vuewidget.jpg)

\

Wake up 
-------

\

No notion of wake up on this module.

\

Faq. 
------

\

Have you combined the two modules and have you configured the part correctly?
Specific.

\

No. The module does not allow it.

\

**@sarakha63**
