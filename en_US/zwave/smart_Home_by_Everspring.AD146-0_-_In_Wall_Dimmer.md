# SmartHome by Everspring In Wall Dimmer - AD146-0

**The module**

![module](images/smarthomebyeverspring.AD146-0/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

## Summary

This Wall Dimmer Micromodule from SmartHome Europe by Everspring is designed to control the switching on and off of lights and electrical equipment in your home. It can also provide dimmer function which is only compatible with light bulbs. At a voltage of 230V, this module can support up to 300 Watts in resistive or incandescent load, or 200 Watts of fluorescent load.

It can be used in 2-wire mode (without neutral), replacing an existing switch, or three-wire with a conventional module power supply (Phase + Neutral).

The Wall Dimmer Module is a Z-Wave™ enabled device that is intended to work with all Z-Wave™ enabled networks. It can be controlled by remote control, PC software, or any Z-Wave controller on your network.

## Fonctions

-   Control a light/appliance remotely
-   Installs behind an existing switch
-   ON/OFF function and dimming
-   Low power consumption
-   Very small, reduced dimensions
-   Long range antenna
-   Z-Wave Plus Technology
-   Easily installs in a standard backbox
-   Use in 2-wire mode (neutral not necessary)
-   Compatible with Dimmable LED bulbs
-   Button to include/exclude/associate the module
-   Z-Wave repeater function

## Technical characteristics

-   Mod type : Z-Wave Receiver
-   Feed : 230V, 50Hz
-   Consumption : 0.5W
-   Max power :
-   Resistive load : 300W
-   Incandescent bulb : 300W
-   Fluocompact bulb : 200W
-   Frequency : 868.42Mhz
-   Scope : up to 70 m outdoors, up to 30 m indoors
-   Affichage: LED on the button
-   Dimensions : 42mmx43mmx16mm

## Module data

-   Mark : SmartHome by Everspring
-   Last name : In Wall Dimmer
-   Manufacturer ID : 96
-   Type Product : 3
-   Product ID : 2

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press its button 3 times, in accordance with its paper documentation. It is important to note that this module goes directly into inclusion when it does not belong to any network and is powered

![inclusion](images/smarthomebyeverspring.AD146-0/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/smarthomebyeverspring.AD146-0/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/smarthomebyeverspring.AD146-0/commandes.jpg)

Here is the list of commands :

-   Intensity : This is the control to adjust the intensity of the light
-   We : This is the command that turns on the light
-   Off : This is the command that turns off the light
-   State : This is the command that lets you know the status of the light

Note that on the dashboard, the Status, ON/OFF, intensity information is found on the same icon.

### Module Setup

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/smarthomebyeverspring.AD146-0/config1.jpg)

Parameter details :

-   1 : This parameter deﬁnes the status value command, it is not advisable to change this value.
-   2 : This parameter defines the delay for sending the status change to group 1 (value between 3 and 25 seconds)
-   3 : This parameter is used to define whether the switch will resume its status (ON or OFF) after a power recovery.
-   4 : This parameter is used to define the type of switch (push-button/bistable)
-   5 : This parameter is used to define whether the switch will operate in dimming mode or in on/off mode

### Groupes

This module has 2 association groups.

![Groupe](images/smarthomebyeverspring.AD146-0/groupe.jpg)

> **Important**
>
> At least Jeedom should end up in group 1

## Good to know

### Specificities

-   Status feedback cannot be configured under 3 seconds.

## Wakeup

No concept of wake up on this module.
