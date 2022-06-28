# Fibaro FGSD-002 "Smoke Sensor 2"

**The module**

![module](images/fibaro.fgsd102/module.jpg)

**The jeedom visual**

![vuedefaut1](images/fibaro.fgsd102/vuedefaut1.jpg)

## Summary

Featuring smooth lines, a polished surface and a small size, this smoke detector will allow you to be alerted to a threat with multi-color RGB Leds and a built-in siren. The large format of the grid allows to detect the smallest quantity of smoke in order to obtain a fast reaction. It will easily find its place in your home to preserve the safety of the whole family.

The Fibaro FGSD-002 smoke detector is an Autonomous Smoke Alarm Detector (DAAF) compliant with standard EN 14604:2005. Although autonomous, it is also communicating thanks to Z-Wave Plus technology.

Some materials burn without smoking. That's why Fibaro engineers decided to include additional protection in their smoke detector in the form of a temperature sensor. If the amount of smoke is not enough to trigger the alarm, the device will still be able to detect a threat by detecting a rapid change in temperature caused by the fire. A rapid change in temperature or an increase up to 54°C is enough for the smoke sensor to detect a threat and signal it to the inhabitants of the house. Only this type of smoke sensor offers high efficiency, regardless of what is burning.

## Fonctions

-   Z-Wave Smoke Detector
-   Battery powered
-   Adjustable sensor sensitivity (3 levels)
-   Protection against sabotage
-   Alarm signaled by sound, LED light and Z-Wave signal
-   Fire detection by air temperature measurement
-   Automatic efficiency test, performed every 5 seconds
-   Integrated Z-Wave network coverage tester
-   Complies with EN 14604:2005
-   Z-Wave Plus compatible
-   Very simple installation - just install it in a place where there is a risk of fire

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Feed : 3V CR123A lithium battery
-   Battery life : 3 years
-   Frequency : 868.42MHz
-   Transmission distance : 50m open field, 30m indoors
-   Dimensions : 65 x 28 mm (diameter x height)
-   Operating temperature : 0-55°C
-   Operating humidity : 0% - 93%
-   Temperature measurement range : -20 to 100°C
-   Sensitivity to smoke : 1st level - 1.20 +/- 0.5% obs/m; 2nd level - 1.80 +/- 0.5% obs/m; 3rd level - 2.80 +/- 0.5% obs/m
-   Sound level: 85dB at 3m
-   Measurement accuracy : 0.5°C (in a range of 0 to 55°C)
-   Standards : EMC 2004/108/EC and R&TTE 199/5/WE
-   Certificates : EN 14604:2005

## Module data

-   Mark : Fibar Group
-   Last name : Fibaro Smoke Sensor FGSD-002
-   Manufacturer ID : 271
-   Type Product : 3074
-   Product ID : 4098

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press the central inclusion button 3 times, in accordance with its paper documentation.

![inclusion](images/fibaro.fgsd102/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgsd102/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/fibaro.fgsd102/commandes.jpg)

Here is the list of commands :

-   Fumes : this is the module's alert command (for smoke, heat)
-   Temperature : this is the temperature measurement command
-   Sabotage : this is the sabotage command. It signals the opening of the box
-   Test Alert : this is the command that will report the fact that the module is in test mode
-   Heat Alert : this is the command that will raise a heat alert (not reliable yet)
-   Battery : this is the battery command

### Module configuration

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then it is necessary to configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/fibaro.fgsd102/config1.jpg)

![Config2](images/fibaro.fgsd102/config2.jpg)

Parameter details :

-   Wakeup : this is the module wake-up interval (recommended value 21600)
-   1: allows you to adjust the sensitivity of the smoke detection
-   2: allows you to choose the notifications that will be sent to Jeedom (advice : toutes)
-   3: allows you to choose which notifications will be accompanied by a visual indication
-   4: allows you to choose which notifications will be accompanied by an audible indication (in all cases, heat and fire detections will make the module sound)
-   10: do not change this setting unless you know what you are doing
-   11: idem
-   12: idem
-   13: allows to notify other zwave modules (disable unless you know why you enable it)
-   20: time between two temperature ratios
-   21: temperature difference from which, even if the above duration is not reached, the temperature will be sent to Jeedom
-   30: Heat alarm trigger temperature
-   31: temperature peak reporting interval
-   32: signal interval if Zwave loss

### Groupes

For optimum operation of your module. Jeedom must be associated at least with groups 1 4 and 5:

![Groupe](images/fibaro.fgsd102/groupe.jpg)

## Good to know

### Specificities

## Wakeup

To wake up this module, press the central button 3 times

## Important note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
