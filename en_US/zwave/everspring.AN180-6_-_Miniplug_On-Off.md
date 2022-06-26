# 

**The module**

![module](images/everspring.AN180-6/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

## Summary

. ).

. .

## Fonctions

-   
-   
-   )
-   
-   Z-Wave Plus Technology
-   
-   
-   Z-Wave repeater function

## Technical characteristics

-   Mod type : Z-Wave Receiver
-   Feed : 230V, 50Hz
-   Consumption : 
-   Max power : Resistive load :  :  : 
-   Frequency : 868.42Mhz
-   Scope : up to 70 m outdoors, up to 30 m indoors
-   Affichage: LED on the button
-   Dimensions : ) :  : 52mm

## Module data

-   Mark : Everspring
-   Last name : 
-   Manufacturer ID : 96
-   Type Product : 4
-   Product ID : 7

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press its button 3 times, in accordance with its paper documentation. It is important to note that this module goes directly into inclusion when it does not belong to any network and is powered

![inclusion](images/everspring.AN180-6/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the modules will be available.

![Orders](images/everspring.AN180-6/commandes.jpg)

Here is the list of commands :

-   State : )
-   We : This is the command that allows you to turn on the socket
-   Off : This is the command that allows you to turn off the socket

.

### Module Setup

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/everspring.AN180-6/config1.jpg)

Parameter details :

-   1 : This parameter deﬁnes the status value command, it is not advisable to change this value.
-   2 : )
-   3 : .

### Groupes

This module has 2 association groups.

![Groupe](images/everspring.AN180-6/groupe.jpg)

> **Important**
>
> At least Jeedom should end up in group 1

## Good to know

### Specificities

-   Status feedback cannot be configured under 3 seconds.

## Wakeup

No notion of wakeup on this module.
