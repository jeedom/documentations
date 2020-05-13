# SmartHome by Everspring In Wall Dimmer - AD146-0

**The module**

![module](images/smarthomebyeverspring.AD146-0/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

Summary
------

This Wall Dimmer Micromodule from SmartHome Europe by Everspring, is designed to control the switching on and off of lights and electrical equipment in your home. It can also provide a dimmer function which is only compatible with bulbs. At a voltage of 230V, this module can support up to 300 Watts in resistive or incandescent charge, or 200 Watts in fluorescent charge.

It can be used in 2-wire mode (without neutral), replacing an existing switch, or three-wire with a conventional module supply (Phase + Neutral).

The Wall Dimmer Module is a Z-Wave ™ compatible device which is intended to work with all Z-Wave ™ compatible networks. It can be controlled by a remote control, PC software, or any Z-Wave controller on your network.

Fonctions
---------

-   Control a light / device remotely
-   Installs behind an existing switch
-   ON / OFF function and variation
-   Low energy consumption
-   Very small, reduced dimensions
-   Long range antenna
-   Z-Wave Plus technology
-   Easily installs in a standard flush-mount box
-   Use in 2-wire mode (neutral not necessary)
-   Compatible with Led Dimmable bulbs
-   Button to include / exclude / associate the module
-   Z-Wave repeater function

Technical characteristics
---------------------------

-   Type of module : Z-Wave receiver
-   Food : 230 V, 50 Hz
-   Consumption : 0.5W
-   Maximum power :
-   Resistive load : 300W
-   Incandescent bulb : 300W
-   Compact fluorescent bulb : 200W
-   Frequency : 868.42 Mhz
-   Scope : up to 70 m outdoors, up to 30 m in buildings
-   Affichage: LED on the button
-   Dimensions : 42mm x 43mm x 16mm

Module data
-----------------

-   Mark : SmartHome by Everspring
-   Name : In Wall Dimmer
-   Manufacturer ID : 96
-   Product Type : 3
-   Product ID : 2

Configuration
-------------

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press its button 3 times, in accordance with its paper documentation. It is important to note that this module goes directly into inclusion when it does not belong to any network and it is powered

![inclusion](images/smarthomebyeverspring.AD146-0/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/smarthomebyeverspring.AD146-0/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/smarthomebyeverspring.AD146-0/commandes.jpg)

Here is the list of commands :

-   Intensity : This is the command for adjusting the intensity of the light
-   We : It is the control that turns on the light
-   Off : It is the command that turns off the light
-   State : It is the command which allows to know the status of the light

Note that on the dashboard, the State, ON / OFF, intensity information is found on the same icon.

### Configuration of the module

You can configure the module according to your installation. To do this, go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/smarthomebyeverspring.AD146-0/config1.jpg)

Parameter details :

-   1 : This parameter defines the status value command, it is not advisable to change this value.
-   2 : This parameter defines the delay for sending the change of state to group 1 (value between 3 and 25 seconds)
-   3 : This parameter is used to define whether the switch will resume its status (ON or OFF) after a power recovery.
-   4 : This parameter defines the type of switch (push / bistable)
-   5 : This parameter defines whether the switch will operate in dimming mode or on / off mode

### Groupes

This module has 2 association groups.

![Groupe](images/smarthomebyeverspring.AD146-0/groupe.jpg)

> **IMPORTANT**
>
> At least Jeedom should end up in group 1

Good to know
------------

### Specificities

-   Status feedback cannot be configured within 3 seconds.

Wakeup
------

No notion of wake up on this module.
