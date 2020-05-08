-   **The module**

![etc1.module 1](images/etc1/etc1.module-1.jpg)

![etc1.module 2](images/etc1/etc1.module-2.png)

-   **The Jeedom visual**

![etc1.vue default](images/etc1/etc1.vue-default.jpg)

Summary 
======

Les remote controls “Smile” ont un canal, elles sont idéales pour la table
bedside, bathroom and especially for children, because they are
very robust thanks to the material used. Ultra simple and at the same time
“fun” elles ont pour but d'être pratiques dans l'habitat. They exist
in three different colors.

They easily connect to different receivers and can therefore
control the On / Off lights, variable lights,
shutters, gates, garage doors. Available in 3 colors.

In addition, interaction with other protocols is possible, it can
interact with the Edisio brand receptors, with Jeedom, but
also by any Z-Wave receiver on your network.

Functions 
=========

-   Mode of use : Lighting, Dimmer

-   Small, discreet and aesthetic

-   Ease of use and installation

Technical characteristics 
===========================

-   Type of module : Edisio transmitter

-   Food : 3VDC (CR2032 Lithium Battery)

-   Canals : 1

-   Radio protocol : 868.3 MHz

-   Range in free field : 100M

-   Operating temperature : -10 ° C + 50 ° C

-   Dimensions : 65x18mm

-   Degree of protection : IP64

![etc1.dimmension](images/etc1/etc1.dimmension.png)

Module data 
=================

-   Mark : Edisio Smart Home

-   Last name : ETC1

-   Reference : P01 / Y01 / L01

General configuration 
======================

To configure the Edisio plugin and associate a module with Jeedom,
refer to this
[documentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/en_US/edisio.html).

> **Important**
>
> To have Jeedom automatically create your transmitter modules, remember
> not activate the option in the plugin configuration.

Function diagram 
---------------------------

Here is how the remote control works :

![etc1.diagramme](images/etc1/etc1.diagramme.jpg)

Battery replacement 
-----------------------

To replace the battery of your remote control, here is the procedure to follow
:

![etc1.remplacement pile](images/etc1/etc1.remplacement-pile.jpg)

Association of the remote control with Jeedom 
=======================================

The association of an Edisio transmitter is simple and
automatically. Just press the button on your
remote control.

![Orders](images/etc1/etc1.touche-c.jpg)

Once, your associated equipment, you should get this :

![etc1.general](images/etc1/etc1.general.jpg)

Orders 
---------

Once your equipment is created, you should get the orders
associated with the module :

![Orders](images/etc1/etc1.commandes.jpg)

Here is the list of commands :

-   bt01 : It is the command that allows you to interact with button 1

-   Drums : Indicates the battery status

Information 
------------

Once your equipment is associated with Jeedom, various information will be
available :

![Orders](images/etc1/etc1.informations.jpg)

-   Creation : Indicates the date on which the equipment was created

-   Communication : Indicates the last communication recorded between
    Jeedom and the micro-module

-   Drums : Indicates the battery status of the battery modules

-   Status : Returns the status of the module

Use 
-----------

Once your remote control is configured, you can with the
Jeedom Scenario plugin, interact with your remote control on Jeedom
and its equipment.

> **Note**
>
> The remote control with binary status feedback.

**@Jamsta**
