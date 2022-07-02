# Fibaro Dimmer - FGD-211

**The module**

![module](images/fibaro.fgd211/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/fibaro.fgd211/vuedefaut1.jpg)

## Summary

The FGD-211 dimmer micromodule will allow you to control a lamp or ceiling light remotely using the Z-Wave protocol while keeping your existing switch.

You will therefore be able to operate the connected lamp and vary its intensity using the existing switch, a Z-Wave transmitter or directly from the button on the micromodule. It is compatible with any type of lamp supporting dimming (incandescent, compact fluorescent, LED, etc.)). The Fibaro dimmer micromodule is a concentrate of technology, it automatically detects the type of load connected and is protected against overvoltages.

For fluorescent bulbs that do not support dimming, the module then automatically acts as a switch module (ON/OFF only).

It can be used in 2-wire mode (without neutral), replacing an existing switch, or three-wire with a conventional module power supply (Phase + Neutral).

For lamps with very low power consumption (LED lamp for example), you can use the load (bypass) FGB-001 which allows correct operation of the module. A Z-Wave controller (remote control, dongle, etc.) is required to integrate this detector into your network if you already have an existing network. Each Z-Wave module works as a wireless repeater with the other modules, to ensure total coverage of your home.

## Fonctions

-   Control lighting remotely
-   Installs behind an existing switch
-   ON/OFF and Dimming function
-   Use in 2-wire mode (neutral not necessary)
-   Automatic load detection
-   Protected against overload
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Mod type : Z-Wave Receiver
-   Feed : 230V, 50Hz
-   Wiring : neutral not necessary
-   Max load : 25-500W (resistive load) or 1.5A (inductive load)
-   Compatible lamp type (dimmable) : Incandescent, Fluocompact, Halogen (230VAC and 12VDC with electronic transformer), LED
-   Compatible lamp type (not dimmable) : Compact fluorescent, LED
-   Fuse : 2.5A
-   Frequency : 868.42Mhz
-   Transmission distance : 50m open field, 30m indoors
-   Dimensions: 15 x 42 x 36mm
-   Operating temperature : 0-40°C
-   Limit temperature : 105°C
-   Standards : EN 55015 and EN 60669-2-1

## Module data

-   Mark : Fibar Group
-   Last name : Fibaro FGMS-001 \[Motion Sensor\]
-   Manufacturer ID : 271
-   Type Product : 256
-   Product ID : 4106

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the inclusion button 3 times, in accordance with its paper documentation.

![inclusion](images/fibaro.fgd211/inclusion.jpg)

> **Tip**
>
> If you have already integrated your module into the wall, you can include it by making many round trips on the switch or many presses if you have a push-button switch.

Once included you should get this :

![Plugin Zwave](images/fibaro.fgd211/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/fibaro.fgd211/commandes.jpg)

Here is the list of commands :

-   Intensity : This is the control that allows you to adjust the intensity of the light
-   We : This is the command that turns on the light
-   Off : This is the command that turns off the light
-   State : This is the command that allows you to know the status of the light

Note that on the dashboard all the information is found on the same icon

### Module Setup

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/fibaro.fgd211/config1.jpg)

![Config2](images/fibaro.fgd211/config2.jpg)

![Config3](images/fibaro.fgd211/config3.jpg)

Parameter details :

-   1: ALL ON / ALL OFF functions : used only if you have associated the FGD-211 with another module
-   6: lets say how information is sent to association group 1
-   7: allows to check or not the status of the associated module before sending a command
-   8: allows you to define the percentage of variation (auto)
-   9: duration of the variation between the two extremes (manual)
-   10: duration of the variation between the two extremes (auto)
-   11: allows you to define the percentage of variation (manual)
-   12: allows you to define the maximum level allowed
-   13: allows you to define the minimum level allowed
-   14: IMPORTANT SETTING : allows you to choose between a BISTABLE or MONOSTABLE switch (push button)
-   15: activates the option to set the brightness to maximum on double press (or back and forth on bistable)
-   16: option to enable last state remembering
-   17: allows you to choose between back and forth mode and remote control mode
-   18: allows the dimming level to be synchronized with the other associated dimmers
-   19: operating mode of the bistable switch (inversion or not)
-   20: allows you to adjust the minimum level for dimmable LED bulbs for example
-   30: allows you to define the operating mode of the module in case of reception of a broadcast Alarm signal
-   39: alarm duration defined in parameter 30
-   41: allows you to activate or not the Scene Activations function

### Groupes

This module has three association groups, only the third is essential.

![Groupe](images/fibaro.fgd211/groupe.jpg)

## Good to know

### Specificities

> **Bail**
>
> The most important parameter of the configuration is the 14. It allows to choose the type of switch used. By default the type is set to monostable.

If you want to exclude/include the module without disassembling your switch, you can press your switch several times (or go back and forth in the case of a bi-stable switch)

### Alternative visual

![vuewidget](images/fibaro.fgd211/vuewidget.jpg)

## Wakeup

No concept of wakeup on this module.

## FAQs.

No. this module can be included or excluded by pressing the switch several times.
