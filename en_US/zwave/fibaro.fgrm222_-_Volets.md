# Fibaro FGRM-222 "Roller shutter"

**The module**

![module](images/fibaro.fgrm222/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/fibaro.fgrm222/vuedefaut1.jpg)

## Summary

The FGRM-222 micromodule will allow you to manage motorized shutters with electronic stops, Venetian blinds or even garage doors using the Z-Wave protocol while keeping your existing switch. You will therefore be able to operate the connected motor using the existing switch, a Z-Wave transmitter or directly from the button on the micromodule.

In addition, this micromodule is able to transmit the instantaneous (W) and cumulative (KWh) electricity consumption of the equipment attached to it.

A Z-Wave controller (remote control, dongle, etc.) is required to integrate this module into your network if you already have an existing network.

Each Z-Wave module works as a wireless repeater with the other modules, to ensure total coverage of your home.

Note : This module requires the neutral to operate.

## Fonctions

-   Control your blinds or roller shutters remotely
-   Compatible with BSO and Venetian blind with slat positioning
-   Installs behind an existing switch
-   Raise/lower function and positioning
-   Compatible with motors with mechanical or electronic stop
-   Measurement of instantaneous and cumulative consumption
-   Wireless update with the Fibaro Home Center 2 box
-   Z-Wave network coverage test function
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Mod type : Z-Wave Receiver
-   Feed : 230V, 50Hz
-   Power consumption : &lt; 0,8W
-   Wiring : 3 wires, neutral required
-   Max load : 1000W
-   Frequency : 868.42Mhz
-   Signal strength : 1mW
-   Transmission distance : 50m open field, 30m indoors
-   Dimensions: 17 x 42 x 37mm
-   Operating temperature : 0-40°C
-   Limit temperature : 105°C
-   Standards : LVD (2006/95/EC), EMC (2004/10B/EC), R&TTE(1999/5/EC)

## Module data

-   Mark : Fibar Group
-   Last name : Fibaro FGRM-222
-   Manufacturer ID : 271
-   Type Product : 769
-   Product ID : 4097

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the inclusion button 3 times, in accordance with its paper documentation.

![inclusion](images/fibaro.fgrm222/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgrm222/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/fibaro.fgrm222/commandes.jpg)

![Orders](images/fibaro.fgrm222/commandes2.jpg)

Here is the list of commands :

-   State : This is the command that lets you know the position of your shutter
-   Positioning : This is the command that allows you to define the opening percentage
-   Up : This is the command that allows you to fully open the shutter
-   Down : This is the command that allows you to completely close the shutter
-   Refresh : This is the command that allows you to request the position of the shutter again
-   Powerful : Command to get the consumption of the module
-   Consumption : Command used to find out the instantaneous power used by the module
-   STOP : Command to stop the movement of the shutter
-   STOP BSO : Command to stop the movement (in adjustable slat mode)
-   Tilt : Allows the slats to be tilted (adjustable slat mode)
-   Decline : Allows you to decline the slats (adjustable slat mode)
-   Not : Allows you to define the step for a press on Decline or Incline

### Module configuration

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/fibaro.fgrm222/config1.jpg)

![Config2](images/fibaro.fgrm222/config2.jpg)

![Config3](images/fibaro.fgrm222/config3.jpg)

![Config4](images/fibaro.fgrm222/config4.jpg)

Parameter details :

-   1: allows you to block the module (to freeze a shutter) (in the case of pressing a switch)
-   2: same but for zwave commands
-   3: type of reports (classic or fibar)
-   10: mode of operation (Venetian blind, shutter, etc.))
-   12: duration of a complete turn (in Venetian blind mode)
-   13: allows you to choose when the slats should return to their previous position
-   14: allows you to choose the type of switch
-   17: allows you to choose how long after the limit defined in 18 the shutter stops
-   18: safety power for the motor
-   22: NA
-   29: allows you to calibrate the shutter
-   30 to 35: allows to define the behavior of the module in front of the different zwave alarms
-   40: power delta to trigger feedback (even outside the period defined in 42)
-   42: feedback period
-   43: energy delta to trigger feedback (even outside the period defined in 42)
-   44: allows you to choose whether or not the consumption and power must take into account that of the module itself
-   50: allows you to choose whether the module should send the information to the nodes in association in scene mode or in association mode

### Groupes

This module has 3 association groups, only the third is essential.

![Groupe](images/fibaro.fgrm222/groupe.jpg)

## Good to know

### Reset

![Config5](images/fibaro.fgrm222/config5.jpg)

You can reset your consumption counter by clicking on this button available in the System tab.

### Important

> **Important**
>
> For the status feedback to work in Jeedom, it is necessary to force the calibration of the equipment (parameter 29 to "Yes") and the positioning must be active (parameter 10 to the values "Active direct", "Active Venetian " or "Activate door").


## Wakeup

No concept of wakeup on this module.
