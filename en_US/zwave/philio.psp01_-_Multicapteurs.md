# 

**The module**

![module](images/philio.psp01/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/philio.psp01/vuedefaut1.jpg)

## Summary

 : .

. . .

. .

. A Z-Wave controller (remote control, dongle, etc.) is required to integrate this detector into your network if you already have an existing network.

## Fonctions

-   3 in 1 detector: 
-   )
-   
-   Optimized antenna range
-   Use for home automation or security applications
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
-    : 39g
-   Operating temperature : -
-   Operating humidity : 
-    : 
-    : 

## Module data

-   Mark : 
-   Last name : 
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

.

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
-   3:  : : )
-   4: allows you to adjust the level of brightness from which the signal defined in parameter 2 will be sent to the modules associated with group 2
-   5:  : )
-   6:  : )
-   9: allows you to define after how long the OFF signal will be sent to the modules associated with group 2
-   10: )
-   12: )
-   13: )

### Groupes

This module has two association groups, only the first is essential.

![Groupe](images/philio.psp01/groupe.jpg)

## Good to know

### Specificities

> **Tip**
>
> . . .

## Wakeup

To wake up this module there is only one way to proceed :

-   

## Important note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
