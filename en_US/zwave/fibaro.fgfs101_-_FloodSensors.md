# Fibaro FGFS-101 "Flood Sensor"

**The module**

![module](images/fibaro.fgfs101/module.jpg)

**The jeedom visual**

![vuedefaut1](images/fibaro.fgfs101/vuedefaut1.jpg)

## Summary

The FGFS-101 sensor is compact and has a wide variety of functions. With its state-of-the-art and precision technology, the Fibaro Flood Sensor alerts you to a threatening flood, or a rapid rise or fall in temperature.

It is equipped with a tilt sensor that sends an alert immediately to the Z-Wave network if the detector is moved or stolen (feeds back to the Z-Wave controller the tilt or movement information).

This universal flood and temperature detector can be powered by battery or by an external 12 or 24 VDC power supply. When connected to an external power source, the battery serves as a backup power source.

Thanks to its temperature sensor you can control the temperature of your floor. It is waterproof, in case of flooding it floats on the surface of the water.

It also has a siren alarm that can sound if something goes wrong. You can connect the dry contact output to an existing alarm system. A front LED to check the status of the FGFS-101.

This sensor incorporates a Z-Wave network range tester, which assures you of the proper functioning of the sensor during its installation.

## Fonctions

-   Flood detector (presence of water via contacts)
-   Temperature detector
-   Tilt sensor
-   Audible and visual alarm
-   Z-Wave Range Tester
-   Z-Wave repeater ?? (see section "Good to know")

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Module can be powered externally : 12 – 24 VDC
-   Battery Type : CR123A
-   Battery life : 2 years
-   Consumption on external power supply : 0,4W
-   Maximum current supported at output (ALARM NC, TAMP NC) :25mA
-   Maximum supported output voltage : 40V (AC or DC)
-   Frequency : 868.42MHz
-   Transmission distance : 50m open field, 30m indoors
-   Dimensions : 72 x 28 mm (diameter x height)
-   Operating temperature : 0-40°C (-20°C to 70°C if external power supply)
-   Temperature measurement range : -20 to 100°C
-   Measurement accuracy : 0.5°C (in a range of 0 to 40°C)
-   Standards : EMC 2004/108/EC and R&TTE 199/5/WE

## Module data

-   Mark : Fibar Group
-   Model : FGFS101 Flood Sensor
-   Maker : FIBARO System
-   Manufacturer ID : 271
-   Type Product : 2816
-   Product ID : 4097

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the central inclusion button 3 times, marked TMP, in accordance with its paper documentation (the black tab).

![Vue interieur](images/fibaro.fgfs101/Vue_interieur.jpg)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgfs101/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/fibaro.fgfs101/commandes.jpg)

Here is the list of commands :

-   Leak : this is the module's alert command (for the presence of water, flooding, etc)
-   Temperature : this is the temperature measurement command
-   Sabotage : this is the sabotage command. It signals the opening of the box
-   Battery : this is the battery command

### Module configuration

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then it is necessary to configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/fibaro.fgfs101/config1.jpg)

![Config2](images/fibaro.fgfs101/config2.jpg)

Parameter details :

-   Wakeup : this is the module wake-up interval (recommended value 21600)
-   1\. Alarm cancellation delay after flood detection : valeur de 0 à 3600 s (0 par défaut/ dès qu‘il n'y a plus de détection il s'arrête instantanément)
-   2\. Choice of alarm type. Value :
  - 0 : Audible and visual alarm deactivated
  - 1 : Audible alarm off and visual alarm on
  - 2 : Audible alarm on and visual alarm off
  - 3 : Audible and visual alarm activated.
-   10\. Delay time between two temperature readings : from 1 to 65535 s (300 by default). Be careful not to put a transfer value too close, otherwise the module's battery will melt at full speed ! (1800 is recommended)
-   12\. Temperature difference between two reports : from 1 to 1000 (50 by default = 0.5°). In accordance with parameter 10, it is also possible to manage the report of the temperatures according to the variation of the latter.
-   50\. Set low temperature alarm : from -10000 to + 10000 (1500 by default = 15°C) Used to trigger an alarm when the temperature drops below a certain threshold.
-   51.Setting the high temperature alarm : from -10000 to + 10000 (3500 by default = 35°C) Used to trigger an alarm when the temperature goes above a certain threshold.
-   73\. Temperature compensated : from -10000 to + 10000 (0 by default = 0°C) Used to define an offset between the sensor temperature and the actual temperature
-   75\. Setting the alarm duration : from 0 to 65535s (0 by default, The alarm stops as soon as it no longer detects a fault.)

### Groupes

For optimum operation of your module. Jeedom must be associated at least with groups 1, 4 and 5:

![Groupe](images/fibaro.fgfs101/groupe.jpg)

## Good to know

Powered from the outside, this module can act as a Z-wave repeater (information not currently confirmed)

Wiring for an external power supply.

![Alim Exterieur](images/fibaro.fgfs101/Alim_Exterieur.jpg)

## Wakeup

To wake up this module, press the central button 3 times

## FAQs.

This module wakes up by pressing its include button 3 times.

This module is, by default, a module on battery, the new configuration will be taken into account at the next wakeup.

## Important note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups


Usage details [here](http://blog.domadoo.fr/2014/12/18/jeedom-guide-dutilisation-du-detecteur-dinondation-fibaro-fgfs-001/)
Fibaro documentation [English](http://www.fibaro.com/manuals/en/FGFS-101-Flood-Sensor/FGFS-101-Flood-Sensor-en-2.1-2.3.pdf)
