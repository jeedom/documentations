Secure SES 302 "Temperature" 
============================

\

-   **The module**

\

![module](images/secure.ses302/module.jpg)

\

-   **The jeedom visual**

\

![vuedefaut1](images/secure.ses302/vuedefaut1.jpg)

\

Summary 
------

\

The SES302 probe allows the measurement of the ambient temperature
interior. It is powered by 2 AA batteries and is Z-Wave certified
More. In addition to its main function, it is possible to wire
various SECURE external probes on the module, i.e.:

-   An external NTC temperature sensor (SES001)

-   4 wired temperature sensors for hose or tank (SES002)
    connected by 1m cables

-   1 wired temperature sensor for hose or tank (SES003)
    connected by a 4m cable

These modules are ideal for temperature measurement in
central heating control applications or any other
similar application. Its user interface is simple, with a
local push button and an indication LED on the rear panel. We
can easily include / exclude it in a Z-Wave network.

\

Functions 
---------

\

-   Accurate temperature measurement

-   Application in dynamic control systems
    tanks / tubes / heated floors /…

-   Possibility to connect external sensors

-   Interoperable with Z-Wave certified products and systems

-   Quick and easy installation

-   Low battery report

\

Technical characteristics 
---------------------------

\

-   Type: Portable / wall mount

-   Temperature measurement range: ± 0.5 ° C for 0 ° C to 40 ° C

-   Z-Wave Plus chip

-   Frequency : 868.42 Mhz

-   Food: 2x AA batteries (LR6)

-   Scope : up to 100 m in free field

-   Protection sign : 

-    : 

\

Module data 
-----------------

\

-   Mark : 

-   Name : 

-   Manufacturer ID : 89

-   Product Type : 13

-   Product ID : 2

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/Documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, press 1 second on
> the button on the back and release, according to its paper Documentation.

\

![inclusion](images/secure.ses302/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/secure.ses302/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/secure.ses302/commandes.jpg)

\

Here is the list of commands :

\

-   Temperature : it is the temperature measurement command

-   Drums : it's the battery command

Several non visible temperatures are also available and will be
useful if you have connected external probes

\

### Setup of the module 

\

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after
> inclusion.

\

Then it is necessary to configure the module in
depending on your installation. This requires going through the button
"Setup "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/secure.ses302/config1.jpg)

\

Parameter details :

\

-   1: Adjusts how much the temperature must vary for
    the module sends it to Jeedom (in steps of 0.1)

-   2: Allows you to set the temperature sending time interval
    in Jeedom (in minutes)

All other parameters are identical and correspond to all
external probes possibly connected

\

### Groups 

\

This module has only one association group, it is essential

\

![Groupe](images/secure.ses302/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

\

### Alternative visual 

\

![widget1](images/secure.ses302/widget1.jpg)

\

 
------

\

To wake up this module, press the button on the back once

\

Faq. 
------

\

This module wakes up by pressing once on its inclusion button.

\

This module is a battery module, the new configuration will be
taken into account at the next wake up.

\

IMPORTANT note 
---------------

\

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wake up, after a
> change of association groups

\

**@sarakha63**
