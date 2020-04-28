Everspring Miniplug Dimmer - AD147-6 
====================================

\

-   **The module**

\

![module](images/everspring.AD147-6/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/everspring.AD147-6/vuedefaut1.jpg)

\

Summary 
------

\

The Mini Dimmer Plug is designed to control ignition and
switching off the lights and electrical equipment of your
House. It also allows a dimmer function which is compatible
only with bulbs. With a voltage of 220 - 240 V, this
Dimmer socket can support a load from 6 W to 250 W.

The Mini Dimmer Plug is a Z-Wave ™ compatible device that is
designed to work with all Z-Wave ™ compatible networks. She
can be controlled by a remote control, PC software, or any
which Z-Wave controller in your network.

\

Functions 
---------

\

-   Control a lamp remotely

-   Plug module integrating directly between an electrical outlet and
    the load to order

-   ON / OFF and Dimmer function to control lamps

-   Local charge control via integrated button

-   Z-Wave Plus technology

-   Reduced dimensions to go almost unnoticed

-   Status LED on the integrated button

-   Z-Wave repeater function

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave receiver

-   Food : 230 V, 50 Hz

-   Consumption : 0.6W

-   Maximum power : Resistive load : 250W, Incandescent bulb
    : 250W, Led bulb (not dimmable) : 6W

-   Frequency : 868.42 Mhz

-   Scope : up to 70 m outdoors, up to 30 m in buildings

-   Viewing: LED on the button

-   Dimensions : Length (plug included) : 74mm Diameter : 52mm

\

Module data 
-----------------

\

-   Mark : Everspring

-   Name : Miniplug Dimmer

-   Manufacturer ID : 96

-   Product Type : 3

-   Product ID : 3

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, press 3 times on its
> button, according to its paper documentation. It's important to
> note that this module goes directly to inclusion when
> does not belong to any network and is powered

\

![inclusion](images/everspring.AD147-6/inclusion.jpg)

\

Wece included you should get this :

\

![Plugin Zwave](images/everspring.AD147-6/information.jpg)

\

### Commands 

\

Wece the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/everspring.AD147-6/commandes.jpg)

\

Here is the list of commands :

\

-   Intensity : This is the command used to adjust the intensity of the
    Outlet

-   We : This is the command that turns on the outlet

-   Off : It is the command which makes it possible to extinguish the catch

-   State : It is the command which allows to know the status of the
    Outlet

\

Note that on the dashboard, the status information, ON / OFF, intensity is
found on the same icon.

\

### Setup of the module 

\

You can configure the module according to your
installation. This requires going through the "Setup" button of the
Jeedom OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
Settings)

\

![Config1](images/everspring.AD147-6/config1.jpg)

\

Parameter details :

\

-   1 : This parameter defines the status value command, it is not
    advised to change this value.

-   2 : This parameter defines the delay in sending the change of state to
    group 1 (value between 3 and 25 seconds)

-   3 : This parameter is used to define whether the socket will resume its status
    (ON or OFF) after a power recovery.

-   4 : This parameter allows you to define whether the outlet will operate in
    variation or in on / off mode

### Groups 

\

This module has 2 association groups.

\

![Groupe](images/everspring.AD147-6/groupe.jpg)

\

> **IMPORTANT**
>
> At a minimum Jeedom should end up in group 1 \

Good to know 
------------

\

### Specificities 

\

-   Status feedback cannot be configured below 3
    seconds. \

Wakeup 
------

\

No notion of wakeup on this module.

\

Faq. 
------

\

Yes it is parameter 2 and it cannot be set below 3
seconds.

\

**@sarakha63**
