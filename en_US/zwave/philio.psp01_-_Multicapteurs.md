# Philio PSP01

**The module**

![module](images/philio.psp01/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/philio.psp01/vuedefaut1.jpg)

## Summary

The PSP01 detector offers 3 different functions : motion detection, temperature sensor and light sensor.

This detector can be used for security or for automation. When paired with security devices, the detector serves as an alert trigger by detecting changes in infrared radiation levels. If a person moves within the detector's field of view, a radio signal is transmitted, which triggers an alarm to deter intruders.

The detector can also be used in conjunction with a Z-Wave controller for home automation purposes, detecting both changes in infrared radiation levels (presence) and changes in light level. Thus, lighting can be triggered when motion is detected in the dark.

The detector will also raise the brightness and the temperature, either in the event of a significant change, and each time a movement is detected. A Z-Wave controller (remote control, dongle, etc.) is required to integrate this detector into your network if you already have an existing network.

## Fonctions

-   3 in 1 detector: movement, temperature, light
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
-   Dimensions : 28 x 96 x 23mm
-   Weight : 39g
-   Operating temperature : -10 to 40°C
-   Operating humidity : 85%RH max
-   CE standard : EN300 220-1
-   Z-Wave certified : ZC08-13050003

## Module data

-   Mark : Philio Technology Corporation
-   Last name : Philio PSP01
-   Manufacturer ID : 316
-   Type Product : 2
-   Product ID : 2

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the inclusion button 3 times, in accordance with its paper documentation.

![inclusion](images/philio.psp01/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/philio.psp01/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/philio.psp01/commandes.jpg)

Here is the list of commands :

-   Presence : this is the command that will report a presence detection
-   Opening : this is the command that will report an opening detection
-   Temperature : this is the command that allows you to raise the temperature
-   Brightness : this is the command that allows you to increase the brightness
-   Sabotage : this is the sabotage command (it is triggered in the event of tearing)
-   Battery : this is the battery command

All the modules of the range having the same ids, it's up to you to display those corresponding to your module.

### Module Setup

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/philio.psp01/config1.jpg)

![Config2](images/philio.psp01/config2.jpg)

Parameter details :

-   2: adjusts the signal sent to the modules in association group 2
-   3: adjusts the sensitivity of the presence sensor (0 : disabled 99: max sensitivity)
-   4: allows you to adjust the level of brightness from which the signal defined in parameter 2 will be sent to the modules associated with group 2
-   5: operating mode (not recommended to change it : refer to the manufacturer's documentation)
-   6: mode of operation of the multi-sensor (not recommended to change it : refer to the manufacturer's documentation)
-   9: allows you to define after how long the OFF signal will be sent to the modules associated with group 2
-   10: allows you to define the duration between two battery reports (one unit = 30 minutes)
-   12: allows you to define the duration between two luminosity reports (one unit = 30 minutes)
-   13: allows you to define the duration between two temperature reports (one unit = 30 minutes)

### Groupes

This module has two association groups, only the first is essential.

![Groupe](images/philio.psp01/groupe.jpg)

## Good to know

### Specificities

> **Tip**
>
> This module has a particularity, having no report based on variations but only on duration, it sends all its information at each detection. It also sends the presence detection signal several times after. It is therefore advisable to check the "Event on change" box on the presence if you use this command as a scenario trigger.

## Wakeup

To wake up this module there is only one way to proceed :

-   release the tamper button and press it again

## Important Note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
