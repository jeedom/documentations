Fibaro Dimmer2 - FGD-212 
========================

\

-   **The module**

\

![module](images/fibaro.fgd212/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/fibaro.fgd212/vuedefaut1.jpg)

\

Summary 
------

\

The FGD-212 dimmer module will allow you to control a
lamp or ceiling lamp remotely thanks to the Z-Wave protocol while
keeping your existing switch.

You will therefore be able to activate the connected lamp and vary its
intensity using the existing switch, a Z-Wave transmitter or
directly from the button on the micromodule.

The new Fibaro FGD-212 drive is equipped with an
intelligent light source detection which facilitates
configuration and ensures high compatibility of the device. he
has self-protection against overload and the function of
soft start. In the case of non-dimmable light sources,
only the ON / OFF function is possible (in 3-wire connection).

It is compatible with all types of lamps supporting variation or
no. In addition to the variation function, this micromodule can also
measure the electrical consumption of the connected load. Values
instantaneous consumption (in W) and total electrical consumption
(in kWh) can be viewed.

\

Functions 
---------

\

-   Remote lighting control

-   Installs behind an existing switch

-   ON / OFF and Variation function

-   Use in 2-wire mode (neutral not necessary)

-   Integrates the Z-Wave 500 series chip

-   250% faster communication compared to Z-Wave devices
    standard

-   Automatic load detection

-   Protected against overloads

-   Compatible with all Z-Wave and Z-Wave + controllers

-   Active power and energy measurement function

-   Works with different types of push button switches,
    rocker, three-way, etc..

-   Soft-start function

-   LED for indication of inclusion status, calibration and
    MENU levels

-   Integrated Z-Wave range tester

-   Automatically detects wiring faults, high temperature,
    burnt out bulb, overvoltages and overloads

-   Advanced configuration options

-   Small, discreet and aesthetic

-   Ease of use and installation

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave receiver

-   Food : 230V +/- 10%, 50Hz

-   Consumption : 1.3W

-   Wiring : neutral not required

-   Max load : 50-250W (resistive load) or 0.25-1.1A
    (inductive load)

-   Compatible lamp type (dimmable) : Incandescent, Fluocompact,
    Halogen (230VAC and 12VDC with electronic transformer), LED

-   Compatible lamp type (not dimmable) : Compact fluorescent, LED

-   Frequency : 868.42 Mhz

-   Signal strength : 1mW

-   Transmission distance : 50m free field, 30m indoors

-   Dimensions : 42.5 x 38.25 x 20.3mm

-   Operating temperature : 0-35 ° C

-   Limit temperature : 105°C

-   Standards : RoHS 2011/65 / EU, LVD 2006/95 / EC, EMC 2004/108 / EC, R & TTE
    1999/5/EC

\

Module data 
-----------------

\

-   Mark : Fibar Group

-   Name : FGD212 Dimmer 2

-   Manufacturer ID : 271

-   Product Type : 258

-   Product ID : 4096

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
> inclusion button, according to its paper documentation. If the
> module is not already included, it will be included
> automatically when powered up.

\

![inclusion](images/fibaro.fgd212/inclusion.jpg)

\

> **Tip**
>
> If you have already integrated your module on the wall, you can include it
> by making many round trips on the switch or
> many presses if you have a push button switch.

\

Once included you should get this :

\

![Plugin Zwave](images/fibaro.fgd212/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the modules will be
disponibles.

\

![Commands](images/fibaro.fgd212/commandes.jpg)

\

Here is the list of commands :

\

-   Intensity : This is the command that allows you to adjust the intensity of the
    Light

-   We : It is the control that turns on the light

-   Off : It is the command that turns off the light

-   State : It is the command which allows to know the status of the
    Light

-   Consumption : It is the command which allows to go up the
    module consumption

-   Power : It is the command which allows to raise the power
    module instant

Note that on the dashboard all the information is found on the same
icone

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

![Config1](images/fibaro.fgd212/config1.jpg)

![Config2](images/fibaro.fgd212/config2.jpg)

![Config3](images/fibaro.fgd212/config3.jpg)

![Config3](images/fibaro.fgd212/config4.jpg)

![Config3](images/fibaro.fgd212/config5.jpg)

\

Parameter details :

\

ON GOING REDACTION

\

### Groups 

\

This module has five association groups, only the first is
indispensable.

\

![Groupe](images/fibaro.fgd212/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

\

> **Caution**
>
> The most important parameter of the configuration is 20. It
> allows to choose the type of switch used. Default type
> is set to monostable.

\

If you want to exclude / include the module without dismantling your
switch you can press your switch multiple times
(or go back and forth in the event of a bistable switch)

\

### Alternative visual 

\

![vuewidget](images/fibaro.fgd212/vuewidget.jpg)

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
