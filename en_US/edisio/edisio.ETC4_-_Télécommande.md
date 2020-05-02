-   **The module**

![module](images/etc4/module.jpg)

-   **The Jeedom visual**

![vue default](images/etc4/vue_default.jpg)

Summary 
======

The 4-channel e-Trendy mini remote control is simple, robust and stylish,
it was created to please. It easily connects to receivers and
can control your On / Off and dimmable lights, motorizations,
blinds, shutters, gates, garage doors. It has two modes of
programmation.

In addition, interaction with other protocols is possible, it can
interact with the Edisio brand receptors, with Jeedom, but
also by any Z-Wave receiver on your network.

Functions 
=========

-   Mode of use : On / Off, Open / Stop / Close, Dimmer,
    Motorization, Blinds, Shutters, Gates, Garage doors

-   2 programming modes

-   Small, discreet and aesthetic

-   Ease of use and installation

Technical characteristics 
===========================

-   Type of module : Edisio transmitter

-   Food : 3VDC (CR2430 Lithium Battery)

-   Canals : 4

-   Frequency : 868.3 MHz

-   Operating temperature : -10 ° C + 50 ° C

-   Dimensions : 52x28x12mm

-   Degree of protection : IP40

Module data 
=================

-   Mark : Edisio Smart Home

-   Name : ETC4

General configuration 
======================

To configure the Edisio plugin and associate a module with Jeedom,
refer to this
[Documentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/en_US/edisio.html).

> **Important**
>
> To have Jeedom automatically create your transmitter modules, remember
> not activate the option in the plugin configuration.

The trends 
---------

Control and centralize your On / Off lights and dimmers,
opening, motors, on the same key or on 2 separate buttons. The
e-Trendy remote controls have 2 operating modes, MODE 1 and MODE 2
:

-   MODE 1 : 1-button control : On / Off, Open / Close,
    Variation + / Variation-, Impulse

-   MODE 2 : Control on 2 keys :

    -   UP keys: Stop, Close, Variation-, Impulse

    -   Bottom keys: Walk, Open, Variation +, Pulse

Function diagram 
===========================

Depending on whether your transmitter is configured in "1 key" or "2 mode
keys ", this is how the remote control works :

![diagramme](images/etc4/diagramme.jpg)

Change mode 
===============

-   MODE 1 :

    -   Press and hold the "C4 key"

    -   Press the "C1" key 1x, still holding the key
        "C4 ", the LED will flash 1 time

![mode1](images/etc4/mode1.jpg)

-   MODE 2 :

    -   Press and hold the "C4 key"

    -   Press the "C1" key twice, still holding the key
        "C4 ", the LED will flash 2 times

![mode2](images/etc4/mode2.jpg)

Association of the remote control with Jeedom 
=======================================

The association of an Edisio transmitter is simple and
automatically. You just have to press each key you
wish to have in your Jeedom.

Once, your associated equipment, you should get this :

![asso equip](images/etc4/asso_equip.jpg)

Commands 
---------

Once your equipment is created, you should get the orders
associated with the module :

![Commands](images/etc4/commandes.jpg)

Here is the list of commands :

-   bt01 : It is the command that allows you to interact with button 1

-   bt02 : It is the command which allows to interact with button 2

-   bt03 : It is the command which allows to interact with the button 3

-   bt04 : It is the command that allows you to interact with button 4

-   Drums : Indicates the battery status

Information 
------------

Once your equipment is associated with Jeedom, various information will be
available :

![Commands](images/etc4/infos.jpg)

-   Creation : Indicates the date on which the equipment was created

-   Communication : Indicates the last communication recorded between
    Jeedom and the micro-module

-   Drums : Indicates the battery status for battery modules

-   STATUS : Returns the status of the module

Use 
-----------

Once your remote control is configured, you can with the
Jeedom Scenario plugin interact with your remote on Jeedom.

> **Note**
>
> Each key to a binary status return.

Faq. 
======

How to delete the association of a key with a receiver ?

:   Press 5 seconds on the "R" of the receiver, a simple beep signals
    deprogramming mode activated. Press the "C" key to delete.
    Repeat this operation for all the keys to be erased.

**@Jamsta**
