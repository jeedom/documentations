# Fibaro Dimmer2 - FGD-212

-   **The module**

![module](images/fibaro.fgd212/module.jpg)

-   **The Jeedom visual**

![vuedefaut1](images/fibaro.fgd212/vuedefaut1.jpg)

Summary 
------

The FGD-212 dimmer micromodule will allow you to control a
remote lamp or ceiling light thanks to the Z-Wave protocol while
retaining your existing switch.

You will therefore be able to operate the connected lamp and vary its
intensity using the existing switch, a Z-Wave transmitter or
directly from the button on the micromodule.

The new Fibaro FGD-212 dimmer is equipped with an algorithm of
intelligent detection of the light source which facilitates the
configuration and ensures high device compatibility. He
has self-overload protection and the function of
soft start. For non-dimmable light sources,
only the ON/OFF function is possible (in 3-wire connection).

It is compatible with all types of lamps supporting dimming or
nope. In addition to the dimming function, this micromodule can also
measure the electrical consumption of the connected load. Values
instantaneous consumption (in W) and the total electricity consumption
(in kWh) can be viewed.

Fonctions
---------

-   Control lighting remotely

-   Installs behind an existing switch

-   ON/OFF and Dimming function

-   Use in 2-wire mode (neutral not necessary)

-   Integrates the Z-Wave 500 series chip

-   250% faster communication compared to Z-Wave devices
    standard

-   Automatic load detection

-   Protected against overload

-   Compatible with all Z-Wave and Z-Wave+ controllers

-   Active power and energy measurement function

-   Works with different types of switches - push button,
    toggle, three-way, etc.

-   Soft-start function)

-   Status indication LED diode of inclusion, calibration and
    MENU levels

-   Integrated Z-Wave range tester

-   Automatically detects wiring faults, high temperature,
    bulb burnt out, power surges and overloads

-   Advanced Setup Options

-   Small, discreet and aesthetic

-   Ease of use and installation

Technical characteristics
---------------------------

-   Mod type : Z-Wave Receiver

-   Feed : 230V +/- 10%, 50Hz

-   Consumption : 1.3W

-   Wiring : neutral not necessary

-   Max load : 50-250W (resistive load) or 0.25-1.1A
    (inductive load)

-   Compatible lamp type (dimmable) : Incandescent, Compact fluorescent,
    Halogen (230VAC and 12VDC with electronic transformer), LED

-   Compatible lamp type (not dimmable) : Compact fluorescent, LED

-   Frequency : 868.42Mhz

-   Signal strength : 1mW

-   Transmission distance : 50m open field, 30m indoors

-   Dimensions : 42.5x38.25x20.3mm

-   Operating temperature : 0-35°C

-   Limit temperature : 105°C

-   Standards : RoHS 2011/65/EU, LVD 2006/95/EC, EMC 2004/108/EC, R&TTE
    1999/5/EC

Module data
-----------------

-   Mark : Fibar Group

-   Last name : FGD212 Dimmer 2

-   Manufacturer ID : 271

-   Type Product : 258

-   Product ID : 4096

Configuration
-------------

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode you have to press 3 times on the
> opt-in button, as per its paper documentation. If the
> module is not already included, it will be included
> automatically when powered on.

![inclusion](images/fibaro.fgd212/inclusion.jpg)

> **Tip**
>
> If you have already integrated your module into the wall, you can include it
> by making many round trips on the switch or
> many presses if you have a push button switch.

Once included you should get this :

![Plugin Zwave](images/fibaro.fgd212/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the modules will be
disponibles.

![Orders](images/fibaro.fgd212/commandes.jpg)

Here is the list of commands :

-   Intensity : This is the control that allows you to adjust the intensity of the
    light

-   We : This is the command that turns on the light

-   Off : This is the command that turns off the light

-   State : This is the command that lets you know the status of the
    light

-   Consumption : This is the command that allows you to raise the
    module consumption

-   Powerful : This is the command that allows the power to be increased
    module snapshot

Note that on the dashboard all the information is found on the same
icone

### Module Setup

You can do the module configuration according to your
facility. To do this, go through the "Configuration" button on the
OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the tab
settings)

![Config1](images/fibaro.fgd212/config1.jpg)

![Config2](images/fibaro.fgd212/config2.jpg)

![Config3](images/fibaro.fgd212/config3.jpg)

![Config3](images/fibaro.fgd212/config4.jpg)

![Config3](images/fibaro.fgd212/config5.jpg)

Parameter details :

ON GOING REDACTION

### Groupes

This module has five association groups, only the first is
indispensable.

![Groupe](images/fibaro.fgd212/groupe.jpg)

Good to know
------------

### Specificities

> **Bail**
>
> The most important parameter of the configuration is 20. It
> allows you to choose the type of switch used. By default the type
> is set to monostable.

If you want to exclude/include the module without unmounting your
switch, you can press your switch multiple times
(or go back and forth in the event of a bistable switch)

### Alternative visual

![vuewidget](images/fibaro.fgd212/vuewidget.jpg)

Wakeup
------

No concept of wakeup on this module.

FAQs.
------

No. this module can be included or excluded by pressing several times
on the switch.


**@sarakha63**
