# Philio PST02 A - 4 in 1

**The module**

![module](images/philio.pst02a/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

## Summary

The ZIP-PSM02-EU detector offers 4 different functions : motion detection, aperture detection, temperature sensor and light sensor. It consists of two parts : a detector and a magnet. They are designed to be placed on a door or window with the magnet fixed on the opening part and the detector on the fixed part.

Opening the door or window will move the magnet away from the detector, which will trigger the detector which will send a Z-Wave alarm signal, if the system is armed (this signal can be operated by a siren or by a home automation box for example). This detector can be used for security or for automation. When the detector is associated with security devices, it serves as an alert trigger by detecting changes in infrared radiation levels or door / window opening. If a person moves in the detector's field of vision or opens a door / window, a radio signal is transmitted, which triggers an alarm to deter intruders.

The detector can also be used in combination with a Z-Wave controller for home automation purposes, by detecting both changes in infrared radiation (presence) or door / window opening levels and changes in the level of brightness. Thus, we can trigger a light upon detection of movement or door opening in the dark.

The detector will also raise the brightness and the temperature, either in the event of a significant change, and each time a movement or opening / closing is detected. A Z-Wave controller (remote control, dongle…) is necessary in order to integrate this detector into your network if you already have an existing network.

## Fonctions

-   4 in 1 detector: movement, aperture, temperature, light
-   Adopts the recent Z-Wave 400series chip to support multi-channel operations and higher data throughput (9.6 / 40 / 100kbps)
-   Uses the Z-Wave 6.02 SDK
-   Optimized antenna range
-   Use for home automation or security applications
-   Button to include / exclude the detector
-   Autoprotection
-   Low battery indication
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Type of module : Z-Wave transmitter
-   Food : 1 CR123A 3V battery
-   Battery life : 2 years
-   Frequency : 868.42 MHz
-   Transmission distance : 30m indoors
-   Temperature sensor : -10 to 70 ° C
-   Brightness sensor : 0 to 500 lux
-   PIR detection angle : 90 °
-   PIR detection range : 8 to 10m
-   Dimensions :
  -   Detector : 28 x 96 x 23 mm
  -   Magnet : 10 x 50 x 12 mm
-   Weight : 52g
-   Operating temperature : -10 to 40 ° C
-   Operating humidity : 85% RH max
-   CE standard : EN300 220-1
-   Z-Wave certification : ZC08-13050003

## Module data

-   Mark : Philio Technology Corporation
-   Name : PST02-A 4 in 1 Multi-Sensor
-   Manufacturer ID : 316
-   Product Type : 2
-   Product ID : 12

## Configuration

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press the inclusion button 3 times, according to its paper documentation.

![inclusion](images/philio.pst02a/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/philio.pst02a/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/philio.pst02a/commandes.jpg)

Here is the list of commands :

-   Presence : it is the command which will detect a presence detection
-   Opening : it is the command which will raise an opening detection
-   Temperature : it is the command which makes it possible to raise the temperature
-   Brightness : it is the command which makes it possible to raise the brightness
-   Sabotage : this is the sabotage command (it is triggered in the event of tearing)
-   Drums : it's the battery command

### Configuration of the module

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/philio.pst02a/config1.jpg)

![Config2](images/philio.pst02a/config2.jpg)

![Config3](images/philio.pst02a/config3.jpg)

Parameter details :

-   2: sets the signal sent to the modules in association group 2
-   3: adjusts the sensitivity of the presence sensor (0 : disabled 99: maximum sensitivity)
-   4: adjusts the brightness level from which the signal defined in parameter 2 will be sent to the modules associated with group 2
-   5: operating mode (refer to the manufacturer's documentation) Recommended value : 8
-   6: multi-sensor operating mode (refer to the manufacturer's documentation) Recommended value : 4
-   7: personalized operating mode of the multi-sensor (refer to the manufacturer's documentation) Recommended value : 6 (to have a return to OFF of the presence)
-   8: allows to define the duration in steps of 8 seconds of motion redetection
-   9: allows to define after how long the OFF signal will be sent to the modules associated with group 2
-   10: used to define the duration between two battery reports (one unit = parameter 20)
-   11: allows you to define the duration between two automatic opening reports (one unit = parameter 20)
-   12: allows you to define the duration between two auto brightness reports (one unit = parameter 20) Recommended value : 3
-   13: allows to define the time between two auto temperature reports (one unit = parameter 20) Recommended value : 2
-   20: duration of an interval for parameters 10 to 13 Recommended value : 10
-   21: temperature variation value in ° F to trigger a report
-   22: value in% of brightness variation to trigger a report Recommended value : 10

### Groupes

This module has two association groups, only the first is essential.

![Groupe](images/philio.pst02a/groupe.jpg)

## Wakeup

To wake up this module there is only one way :

-   release the tamper button and press it again

## Important note

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change in configuration, after a change in wakeup, after a change in association groups
