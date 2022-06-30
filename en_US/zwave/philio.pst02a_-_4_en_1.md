# Philio PST02 A - 4 in 1

**The module**

![module](images/philio.pst02a/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

## Summary

The ZIP-PSM02-EU detector offers 4 different functions : motion detection, opening detection, temperature sensor and light sensor. It consists of two parts : a detector and a magnet. They are designed to be placed on a door or window with the magnet fixed on the part that opens and the detector on the fixed part.

Opening the door or window will move the magnet away from the detector, which will trigger the detector which will send a Z-Wave alarm signal, if the system is armed (this signal can be operated by a siren or by a home automation box for example). This detector can be used for security or for automation. When paired with security devices, the detector serves as an alert trigger by detecting changes in infrared radiation levels or door/window openings. If a person moves within the detector's field of view or opens a door/window, a radio signal is transmitted, which triggers an alarm to deter intruders.

The detector can also be used in conjunction with a Z-Wave controller for home automation purposes, detecting both changes in levels of infrared radiation (presence) or door/window opening and changes in the level of brightness. Thus, lighting can be triggered when motion detection or door opening in the dark.

The detector will also raise the brightness and the temperature, either in the event of a significant change, and each time a movement or opening/closing are detected. A Z-Wave controller (remote control, dongle, etc.) is required to integrate this detector into your network if you already have an existing network.

## Fonctions

-   4 in 1 detector: movement, opening, temperature, light
-   Adopts recent Z-Wave 400series chip to support multi-channel operation and higher data rate (9.6/40/100kbps)
-   Uses Z-Wave SDK 6.02
-   Optimized antenna range
-   Use for home automation or security applications
-   Button to include/exclude the detector
-   Autoprotection
-   Low battery indication
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Feed : 1 x 3V CR123A battery
-   Battery life : 2 years
-   Frequency : 868.42MHz
-   Transmission distance : 30m indoors
-   Temperature sensor : -10 to 70°C
-   Light sensor : 0 to 500 lux
-   PIR detection angle : 90°
-   PIR detection range : 8 to 10m
-   Dimensions :
  -   Detector : 28 x 96 x 23mm
  -   Magnet : 10 x 50 x 12mm
-   Weight : 52g
-   Operating temperature : -10 to 40°C
-   Operating humidity : 85%RH max
-   CE standard : EN300 220-1
-   Z-Wave certified : ZC08-13050003

## Module data

-   Mark : Philio Technology Corporation
-   Last name : PST02-A 4 in 1 Multi-Sensor
-   Manufacturer ID : 316
-   Type Product : 2
-   Product ID : 12

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the inclusion button 3 times, in accordance with its paper documentation.

![inclusion](images/philio.pst02a/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/philio.pst02a/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/philio.pst02a/commandes.jpg)

Here is the list of commands :

-   Presence : this is the command that will report a presence detection
-   Opening : this is the command that will report an opening detection
-   Temperature : this is the command that allows you to raise the temperature
-   Brightness : this is the command that allows you to increase the brightness
-   Sabotage : this is the sabotage command (it is triggered in the event of tearing)
-   Battery : this is the battery command

### Module configuration

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/philio.pst02a/config1.jpg)

![Config2](images/philio.pst02a/config2.jpg)

![Config3](images/philio.pst02a/config3.jpg)

Parameter details :

-   2: adjusts the signal sent to the modules in association group 2
-   3: adjusts the sensitivity of the presence sensor (0 : disabled 99: max sensitivity)
-   4: allows you to set the level of brightness from which the signal defined in parameter 2 will be sent to the modules associated with group 2
-   5: operating mode (refer to the manufacturer's documentation) Recommended value : 8
-   6: multi-sensor operating mode (refer to the manufacturer's documentation) Recommended value : 4
-   7: personalized operating mode of the multi-sensor (refer to the manufacturer's documentation) Recommended value : 6 (to have a return to OFF of the presence)
-   8: allows you to define the duration in steps of 8 seconds of motion redetection
-   9: allows you to define after how long the OFF signal will be sent to the modules associated with group 2
-   10: allows you to define the duration between two battery reports (one unit = parameter 20)
-   11: allows you to define the duration between two auto opening ratios (one unit = parameter 20)
-   12: allows you to define the duration between two auto brightness reports (one unit = parameter 20) Recommended value : 3
-   13: used to define the duration between two automatic temperature reports (one unit = parameter 20) Recommended value : 2
-   20: duration of an interval for parameters 10 to 13 Recommended value : 10
-   21: variation value in °F of temperature to trigger a report
-   22: value in % of brightness variation to trigger a report Recommended value : 10

### Groupes

This module has two association groups, only the first is essential.

![Groupe](images/philio.pst02a/groupe.jpg)

## Wakeup

To wake up this module there is only one way to proceed :

-   release the tamper button and press it again

## Important Note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
