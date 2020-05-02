Fibaro Dimmer - FGD-211 
=======================

\

-   **The module**

\

![module](images/fibaro.fgd211/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/fibaro.fgd211/vuedefaut1.jpg)

\

Summary 
------

\

The FGD-211 dimmer module will allow you to control a
lamp or ceiling lamp remotely thanks to the Z-Wave protocol while
keeping your existing switch.

You will therefore be able to activate the connected lamp and vary its
intensity using the existing switch, a Z-Wave transmitter or
directly from the button on the micromodule. It is
compatible with any type of lamp supporting variation
(incandescence, fluo-compact, LED,…). The Fibaro dimmer module
is a concentrate of technology, it automatically detects the type of
connected load and is protected against overvoltage.

For fluorescent bulbs that do not support variation, the
module then acts automatically as a switch module (ON / OFF
uniquement).

It can be used in 2-wire mode (without neutral), replacing a
existing switch, or three wires with conventional power supply from
module (Phase + Neutral).

For lamps with very low consumption (LED lamp by
example), you can use the FGB-001 load (bypass) which allows
correct operation of the module. A Z-Wave controller (remote control,
dongle…) is necessary in order to integrate this detector into your network
if you already have an existing network. Each Z-Wave module works
as a wireless repeater with the other modules, to ensure
total coverage of your home.

\

Functions 
---------

\

-   Remote lighting control

-   Installs behind an existing switch

-   ON / OFF and Variation function

-   Use in 2-wire mode (neutral not necessary)

-   Automatic load detection

-   Protected against overloads

-   Small, discreet and aesthetic

-   Ease of use and installation

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave receiver

-   Food : 230V, 50 Hz

-   Wiring : neutral not required

-   Max load : 25-500W (resistive load) or 1.5A (inductive load)

-   Compatible lamp type (dimmable) : Incandescent, Fluocompact,
    Halogen (230VAC and 12VDC with electronic transformer), LED

-   Compatible lamp type (not dimmable) : Compact fluorescent, LED

-   Fuse : 2.5A

-   Frequency : 868.42 Mhz

-   Transmission distance : 50m free field, 30m indoors

-   Dimensions: 15 x 42 x 36 mm

-   Operating temperature : 0-40 ° C

-   Limit temperature : 105°C

-   Standards : EN 55015 and EN 60669-2-1

\

Module data 
-----------------

\

-   Mark : Fibar Group

-   Name : Fibaro FGMS-001 \ [Motion Sensor \]

-   Manufacturer ID : 271

-   Product Type : 256

-   Product ID : 4106

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
> To put this module in inclusion mode, press the button 3 times
> inclusion button, according to its paper Documentation.

\

![inclusion](images/fibaro.fgd211/inclusion.jpg)

\

> **Tip**
>
> If you have already integrated your module on the wall, you can include it
> by doing many back and forth on the switch or many
> press if you have a push button switch.

\

Once included you should get this :

\

![Plugin Zwave](images/fibaro.fgd211/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/fibaro.fgd211/commandes.jpg)

\

Here is the list of commands :

\

-   Intensity : This is the command that allows you to adjust the intensity of the
    Light

-   We : It is the control that turns on the light

-   Off : It is the command that turns off the light

-   State : It is the command which allows to know the status of the
    Light

Note that on the dashboard all the information is found on the same
icone

\

### Setup of the module 

\

You can configure the module according to your
installation. This requires going through the "Configuration" button of the
Jeedom OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
Settings)

\

![Config1](images/fibaro.fgd211/config1.jpg)

![Config2](images/fibaro.fgd211/config2.jpg)

![Config3](images/fibaro.fgd211/config3.jpg)

\

Parameter details :

\

-   1: ALL ON / ALL OFF functions : used only if you have associated the
    FGD-211 to another module

-   6: lets say how information is sent to the group
    association 1

-   7: allows to check or not the status of the associated module before
    to send an order

-   8: allows to define the percentage of variation (auto)

-   9: duration of the variation between the two extremes (manual)

-   10: duration of the variation between the two extremes (auto)

-   11: allows to define the percentage of variation (manual)

-   12: allows to define the maximum authorized level

-   13: allows to define the minimum authorized level

-   14: IMPORTANT ADJUSTMENT : allows to choose between switch
    BISTABLE or MONOSTABLE (push button)

-   15: activates the option allowing to set the brightness to the maximum
    on double press (or go back on bistable)

-   16: option to activate the memorization of the last state

-   17: allows you to choose between back and forth mode and
    remote control switch

-   18: allows to synchronize the level of variation to others
    associated drives

-   19: operating mode of the bistable switch (reversing
    or not)

-   20: allows to adjust the minimum level for LEDS bulbs
    dimmable for example

-   30: allows to define the operating mode of the module in case of
    reception of a broadcast alarm signal

-   39: alarm duration defined in parameter 30

-   41: allows to activate or not the Scene Activation function

\

### Groups 

\

This module has three association groups, only the third is
indispensable.

\

![Groupe](images/fibaro.fgd211/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

\

> **Caution**
>
> The most important parameter of the configuration is 14. It
> allows to choose the type of switch used. Default type
> is set to monostable.

\

If you want to exclude / include the module without dismantling your
switch you can press your switch multiple times
(or go back and forth in the event of a bi-stable switch)

\

### Alternative visual 

\

![vuewidget](images/fibaro.fgd211/vuewidget.jpg)

\

Wakeup 
------

\

No notion of wakeup on this module.

\

Faq. 
------

\

No. this module can be included or excluded by pressing several times
on the switch.

\
**@sarakha63**
