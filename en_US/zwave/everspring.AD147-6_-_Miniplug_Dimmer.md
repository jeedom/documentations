# Everspring Miniplug Dimmer - AD147-6

 **The module**

![module](images/everspring.AD147-6/module.jpg)

 **The Jeedom visual**

![vuedefaut1](images/everspring.AD147-6/vuedefaut1.jpg)

## Summary

The Mini Dimmer Plug is designed to control the switching on and off of lights and electrical equipment in your home. It also allows a dimmer function which is only compatible with light bulbs. With a voltage of 220 - 240 V, this Dimmer Socket can support a load of 6 W to 250 W.

The Dimmer Mini Plug is a Z-Wave™ enabled device that is intended to work with all Z-Wave™ enabled networks. It can be controlled by a remote control, PC software, or any Z-Wave controller on your network.

## Fonctions

-   Control a lamp remotely
-   Plug module integrating directly between an electrical outlet and the load to be controlled
-   ON / OFF and Dimmer function to control lamps
-   Local load control via integrated button
-   Z-Wave Plus Technology
-   Reduced dimensions to go almost unnoticed
-   Status LED on integrated button
-   Z-Wave repeater function

## Technical characteristics

-   Mod type : Z-Wave Receiver
-   Feed : 230V, 50Hz
-   Consumption : 0.6W
-   Max power : Resistive load : 250W, Incandescent bulb : 250W, Led bulb (not dimmable) : 6W
-   Frequency : 868.42Mhz
-   Scope : up to 70 m outdoors, up to 30 m indoors
-   Affichage: LED on the button
-   Dimensions : Length (including plug) : 74mm Diameter : 52mm

## Module data

-   Mark : Everspring
-   Last name : Dimmer mini-plug
-   Manufacturer ID : 96
-   Type Product : 3
-   Product ID : 3

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press its button 3 times, in accordance with its paper documentation. It is important to note that this module goes directly into inclusion when it does not belong to any network and is powered

![inclusion](images/everspring.AD147-6/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/everspring.AD147-6/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/everspring.AD147-6/commandes.jpg)

Here is the list of commands :

-   Intensity : This is the control to adjust the intensity of the hold
-   We : This is the command that allows you to turn on the socket
-   Off : This is the command that allows you to turn off the socket
-   State : This is the command that allows you to know the status of the socket

Note that on the dashboard, the Status, ON/OFF, Intensity information is found on the same icon.

### Module configuration

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/everspring.AD147-6/config1.jpg)

Parameter details :

-   1 : This parameter deﬁnes the status value command, it is not advisable to change this value.
-   2 : This parameter defines the delay for sending the status change to group 1 (value between 3 and 25 seconds)
-   3 : This parameter is used to define whether the socket will resume its status (ON or OFF) after a power recovery.
-   4 : This parameter is used to define whether the socket will operate in dimming mode or in on/off mode

### Groupes

This module has 2 association groups.
![Groupe](images/everspring.AD147-6/groupe.jpg)

> **Important**
>
> At least Jeedom should end up in group 1

## Good to know

### Specificities

-   Status feedback cannot be configured under 3 seconds.

## Wakeup

No concept of wakeup on this module.
