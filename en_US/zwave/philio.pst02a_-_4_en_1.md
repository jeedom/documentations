# 

**The module**

![module](images/philio.pst02a/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

## Summary

 : . It consists of two parts : a detector and a magnet. They are designed to be placed on a door or window with the magnet fixed on the part that opens and the detector on the fixed part.

Opening the door or window will move the magnet away from the detector, which will trigger the detector which will send a Z-Wave alarm signal, if the system is armed (this signal can be operated by a siren or by a home automation box for example). . . .

. .

. A Z-Wave controller (remote control, dongle, etc.) is required to integrate this detector into your network if you already have an existing network.

## Fonctions

-   : 
-   )
-   
-   Optimized antenna range
-   
-   Button to include/exclude the detector
-   Autoprotection
-   Low battery indication
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Feed : 
-    : 2 years
-   Frequency : 868.42MHz
-   Transmission distance : 30m indoors
-    : -
-    : 
-    : 
-    : 
-   Dimensions :
  -    : 
  -    : 
-    : 52g
-   Operating temperature : -
-   Operating humidity : 
-    : 
-    : 

## Module data

-   Mark : 
-   Last name : 
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

### Module Setup

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
-   3:  : : )
-   4: allows you to adjust the level of brightness from which the signal defined in parameter 2 will be sent to the modules associated with group 2
-   5:  : 8
-   6:  : 4
-   7:  : )
-   8: 
-   9: allows you to define after how long the OFF signal will be sent to the modules associated with group 2
-   10: allows you to define the duration between two battery reports (one unit = parameter 20)
-   11: allows you to define the duration between two auto opening ratios (one unit = parameter 20)
-   12:  : 3
-   13:  : 2
-   20:  : 10
-   21: variation value in °F of temperature to trigger a report
-   22:  : 10

### Groupes

This module has two association groups, only the first is essential.

![Groupe](images/philio.pst02a/groupe.jpg)

## Wakeup

To wake up this module there is only one way to proceed :

-   

## Important note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
