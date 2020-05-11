SmartHome by Everspring In Wall Dimmer - AD146-0 
================================================

\

-   **The module**

\

![module](images/smarthomebyeverspring.AD146-0/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

\

Summary 
------

\

This Wall Dimmer Micromodule from SmartHome Europe by
Everspring, is designed to control the switching on and off of
light fixtures and electrical equipment in your home. He can
also provide a dimmer function which is only
compatible with bulbs. At a voltage of 230V, this module can
support up to 300 Watts in resistive or incandescent load, or 200
Watts of fluorescent charge.

It can be used in 2-wire mode (without neutral), replacing a
existing switch, or three wires with conventional power supply from
module (Phase + Neutral).

The Wall Dimmer Module is a Z-Wave ™ compatible device which is
designed to work with all Z-Wave ™ compatible networks. he
can be controlled by remote control, PC software, or any
which Z-Wave controller in your network.

\

Functions
---------

\

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

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave receiver

-   Food: 230 V, 50 Hz

-   Consumption: 0.5W

-   Maximum power :

-   Resistive load : 300W

-   Incandescent bulb : 300W

-   Compact fluorescent bulb : 200W

-   Frequency : 868.42 Mhz

-   Scope : up to 70 m outdoors, up to 30 m in buildings

-   Affichage: LED on the button

-   Dimensions: 42mm x 43mm x 16mm

\

Module data 
-----------------

\

-   Mark: SmartHome by Everspring

-   Name: In Wall Dimmer

-   Manufacturer ID : 96

-   Product Type : 3

-   Product ID : 2

\

Setup
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **Important**
>
> To put this module in inclusion mode, press 3 times on its
> button, according to its paper documentation. It's important to
> note that this module goes directly to inclusion when
> does not belong to any network and is powered

\

![inclusion](images/smarthomebyeverspring.AD146-0/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/smarthomebyeverspring.AD146-0/information.jpg)

\

### Commands

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/smarthomebyeverspring.AD146-0/commandes.jpg)

\

Here is the list of commands :

\

-   Intensity: This is the command used to adjust the intensity of the
    Light

-   We: It is the control that turns on the light

-   Off: It is the command that turns off the light

-   State: It is the command which allows to know the status of the
    Light

\

Note that on the dashboard, the status information, ON / OFF, intensity is
found on the same icon.

\

### Configuration of the module 

\

You can configure the module according to your
installation. This requires going through the "Configuration" button of the
Jeedom OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/smarthomebyeverspring.AD146-0/config1.jpg)

\

Parameter details :

\

-   1 : This parameter defines the status value command, it is not
    advised to change this value.

-   2 : This parameter defines the delay in sending the change of state to
    group 1 (value between 3 and 25 seconds)

-   3 : This parameter allows you to define whether the switch will resume its
    status (ON or OFF) after a power recovery.

-   4 : This parameter defines the type
    switch (push / bistable)

-   5 : This parameter defines whether the switch will operate in
    variation mode or on / off mode

### Groups

\

This module has 2 association groups.

\

![Groupe](images/smarthomebyeverspring.AD146-0/groupe.jpg)

\

> **Important**
>
> At a minimum Jeedom should end up in group 1 \

Good to know 
------------

\

### Specificities 

\

-   Status feedback cannot be configured below 3
   seconds \

### Alternative visual 

\

![vuewidget](images//smarthomebyeverspring.AD146-0/vuewidget.jpg)

\

Wakeup
------

\

No notion of wake up on this module.

\

Faq. 
------

\

Yes it is parameter 2 and it cannot be set below 3
secondes.

\

No. this module can be included or excluded by pressing several times
on the switch.

\

**@sarakha63**
