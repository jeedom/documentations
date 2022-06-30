# Everspring Miniplug On/Off - AN180-6

**The module**

![module](images/everspring.AN180-6/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

## Summary

The Mini On/Off Socket is designed to control the switching on and off of lights and electrical equipment in your home. With a voltage of 220 - 240 V, this Socket can support a load of up to 1500W (resistance), 800W (incandescent), 200W (motor, fluorescent, Led).

The Mini On/Off Plug is a Z-Wave™ enabled device that is intended to work with all Z-Wave™ enabled networks. It can be controlled by a remote control, PC software, or any Z-Wave controller on your network.

## Fonctions

-   Control a lamp or a device remotely
-   Plug module integrating directly between an electrical outlet and the load to be controlled
-   ON / OFF function to control lamps or appliances (no dimming)
-   Local load control via integrated button
-   Z-Wave Plus Technology
-   Reduced dimensions to go almost unnoticed
-   Status LED on integrated button
-   Z-Wave repeater function

## Technical characteristics

-   Mod type : Z-Wave Receiver
-   Feed : 230V, 50Hz
-   Consumption : 0.6W
-   Max power : Resistive load : 1500W, Incandescent bulb : 800W, Compact Fluorescent Bulb : 200W, Led bulb (not dimmable) 200W
-   Frequency : 868.42Mhz
-   Scope : up to 70 m outdoors, up to 30 m indoors
-   Affichage: LED on the button
-   Dimensions : Length (including plug) : 74mm Diameter : 52mm

## Module data

-   Mark : Everspring
-   Last name : Mini-plug On/Off
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

-   State : This is the command that allows you to know the status of the socket (On/Off)
-   We : This is the command that allows you to turn on the socket
-   Off : This is the command that allows you to turn off the socket

Note that on the dashboard, the Status, ON/OFF information is found on the same icon.

### Module configuration

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/everspring.AN180-6/config1.jpg)

Parameter details :

-   1 : This parameter deﬁnes the status value command, it is not advisable to change this value.
-   2 : This parameter defines the delay for sending the status change to group 1 (value between 3 and 25 seconds)
-   3 : This parameter is used to define whether the socket will resume its status (ON or OFF) after a power recovery.

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
