# "

**The module**

![module](images/fibaro.fgsd102/module.jpg)

**The jeedom visual**

![vuedefaut1](images/fibaro.fgsd102/vuedefaut1.jpg)

## Summary

. . .

:2005. .

. . . . .

## Fonctions

-   
-   
-   )
-   
-   
-   
-   
-   
-   :2005
-   
-   

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Feed : 
-   Battery life : 
-   Frequency : 868.42MHz
-   Transmission distance : 50m open field, 30m indoors
-   Dimensions : )
-   Operating temperature : 
-   Operating humidity : 
-   Temperature measurement range : -20 to 100°C
-    : 
-   : 
-   Measurement accuracy : )
-   Standards : EMC 2004/108/EC and R&TTE 199/5/WE
-   Certificates : :2005

## Module data

-   Mark : Fibar Group
-   Last name : 
-   Manufacturer ID : 271
-   Type Product : 3074
-   Product ID : 4098

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> .

![inclusion](images/fibaro.fgsd102/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgsd102/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/fibaro.fgsd102/commandes.jpg)

Here is the list of commands :

-    : )
-   Temperature : this is the temperature measurement command
-   Sabotage : this is the sabotage command. It signals the opening of the box
-    : 
-    : )
-   Battery : this is the battery command

### Module Setup

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
-   1: 
-   2:  : toutes)
-   3: 
-   4: )
-   10: 
-   11: idem
-   12: idem
-   13: )
-   20: 
-   21: 
-   30: 
-   31: 
-   32: 

### Groupes

For optimum operation of your module. :

![Groupe](images/fibaro.fgsd102/groupe.jpg)

## Good to know

### Specificities

## Wakeup

To wake up this module, press the central button 3 times

## Important note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
