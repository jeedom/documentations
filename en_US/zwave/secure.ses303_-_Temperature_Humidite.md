# "

**The module**

![module](images/secure.ses303/module.jpg)

**The jeedom visual**

![vuedefaut1](images/secure.ses303/vuedefaut1.jpg)

## Summary

. . :

-   )
-   
-   

. . .

## Fonctions

-   
-   
-   
-   
-   
-   

## Technical characteristics

-   Type: 
-   : .
-   Z-Wave Plus chip
-   Frequency : 868.42Mhz
-   Alimentation: 2x AA batteries (LR6)
-   Scope : up to 100 m in free field
-   Protection sign : IP30
-   Dimensions : 86 x 85 x 30mm

## Module data

-   Mark : Horstmann
-   Last name : SES 303 Temperature and Humidity Sensor
-   Manufacturer ID : 89
-   Type Product : 13
-   Product ID : 3

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the button on the back for 1 second and release it, in accordance with its paper documentation.

![inclusion](images/secure.ses303/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/secure.ses303/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/secure.ses303/commandes.jpg)

Here is the list of commands :

-   Temperature : this is the temperature measurement command
-   Humidity : this is the humidity measurement command
-   Battery : this is the battery command

Several non-visible temperatures are also available and will be useful if you have connected external probes

### Module configuration

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then it is necessary to configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/secure.ses303/config1.jpg)

Parameter details :

-   1: Allows you to set how much the temperature must vary for the module to send it to Jeedom (in steps of 0.1)
-   2: Allows you to set the time interval for sending the temperature to Jeedom (in minutes)
-   3: Allows you to set how much the humidity must vary for the module to send it to Jeedom (by %)
-   4: Allows you to set the time interval for sending humidity to Jeedom (in minutes)

All other parameters are identical and correspond to all external probes that may be connected

### Groupes

This module has only one association group, it is essential

![Groupe](images/secure.ses303/groupe.jpg)

## Wakeup

To wake up this module, press the button on the back once

Important note
---------------

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wake up, after a change of association groups
