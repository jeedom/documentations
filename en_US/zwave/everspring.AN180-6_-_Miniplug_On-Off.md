 
====================================

\

-   **The module**

\

![module](images/everspring.AN180-6/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

\

Summary 
------

\


switching off the lights and electrical equipment of your

,
.


. 

.

\

Functions 
---------

\

-   

-   
    

-   
    

-   

-   Z-Wave Plus technology

-   

-   

-   Z-Wave repeater function

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave receiver

-   Food : 230 V, 50 Hz

-   Consumption : 

-   Maximum power : Resistive load : 
    :  :  :
    200W

-   Frequency : 868.42 Mhz

-   Scope : up to 70 m outdoors, up to 30 m in buildings

-   Viewing: LED on the button

-   Dimensions :  :  : 

\

Module data 
-----------------

\

-   Mark : 

-   Name : Miniplug We / Off

-   Manufacturer ID : 96

-   Product Type : 4

-   Product ID : 7

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

![inclusion](images/everspring.AN180-6/inclusion.jpg)

\

Wece included you should get this :

\

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

\

### Commands 

\


available.

\

![Commands](images/everspring.AN180-6/commandes.jpg)

\

Here is the list of commands :

\

-   State : It is the command which allows to know the status of the
    

-   We : This is the command that turns on the outlet

-   Off : It is the command which makes it possible to extinguish the catch

\

Note that on the dashboard, the status information, ON / OFF can be found on
.

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
settings)

\

![Config1](images/everspring.AN180-6/config1.jpg)

\

Parameter details :

\

-   1 : This parameter defines the status value command, it is not
    advised to change this value.

-   2 : 
    group 1 (value between 3 and 25 seconds)

-   3 : 
    .

### Groups 

\

This module has 2 association groups.

\

![Groupe](images/everspring.AN180-6/groupe.jpg)

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
