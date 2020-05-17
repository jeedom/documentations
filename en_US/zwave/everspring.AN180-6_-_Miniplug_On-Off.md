# Everspring Miniplug On / Off - AN180-6

**The module**

![module](images/everspring.AN180-6/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

## Summary

The Mini On / Off Plug is designed to control the switching on and off of lights and electrical equipment in your home. With a voltage of 220 - 240 V, this Plug can support a load up to 1500W (resistance), 800W (incandescent), 200W (motor, fluorescent, Led).

The Mini On / Off Plug is a Z-Wave ™ compatible device that is intended to work with all Z-Wave ™ compatible networks. It can be controlled by a remote control, PC software, or any Z-Wave controller on your network.

## Functions

-   Control a lamp or device remotely
-   Plug module integrating directly between an electrical outlet and the load to be controlled
-   ON / OFF function to control lamps or devices (no variation)
-   Local charge control via integrated button
-   Z-Wave Plus technology
-   Reduced dimensions to go almost unnoticed
-   Status LED on the integrated button
-   Z-Wave repeater function

## Technical characteristics

-   Type of module : Z-Wave receiver
-   Food : 230 V, 50 Hz
-   Consumption : 0.6W
-   Maximum power : Resistive load : 1500W, Incandescent bulb : 800W, Compact fluorescent bulb : 200W, Led bulb (not dimmable) 200W
-   Frequency : 868.42 Mhz
-   Scope : up to 70 m outdoors, up to 30 m in buildings
-   Affichage: LED on the button
-   Dimensions : Length (plug included) : 74mm Diameter : 52mm

## Module data

-   Mark : Everspring
-   Name : Miniplug On / Off
-   Manufacturer ID : 96
-   Product Type : 4
-   Product ID : 7

## Setup

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press its button 3 times, in accordance with its paper documentation. It is important to note that this module goes directly into inclusion when it does not belong to any network and it is powered

![inclusion](images/everspring.AN180-6/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

### Commands

Once the module is recognized, the commands associated with the modules will be available.

![Commands](images/everspring.AN180-6/commandes.jpg)

Here is the list of commands :

-   State : It is the command which makes it possible to know the status of the socket (On / Off)
-   We : This is the command that turns on the outlet
-   Off : It is the command which makes it possible to extinguish the catch

Note that on the dashboard, the State, ON / OFF information is found on the same icon.

### Setup du module

You can configure the module according to your installation. To do this, go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/everspring.AN180-6/config1.jpg)

Parameter details :

-   1 : This parameter defines the status value command, it is not advisable to change this value.
-   2 : This parameter defines the delay for sending the change of state to group 1 (value between 3 and 25 seconds)
-   3 : This parameter is used to define whether the socket will resume its status (ON or OFF) after a power recovery.

### Groups

This module has 2 association groups.

![Groupe](images/everspring.AN180-6/groupe.jpg)

> **IMPORTANT**
>
> At least Jeedom should end up in group 1

## Good to know

### Specificities

-   Status feedback cannot be configured within 3 seconds.

## Wakeup

No notion of wakeup on this module.
