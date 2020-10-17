# Edisio ETC4

**The module**

![module](images/etc4/module.jpg)

**The Jeedom visual**

![vue default](images/etc4/vue_default.jpg)

## Summary

The 4-channel e-Trendy mini remote control is simple, robust and design, it was created to please. It is easily connected to receivers and can control your On / Off and dimmable lighting, motors, blinds, shutters, gates, garage doors. It has two programming modes.

In addition, interaction with other protocols is possible, it can interact with Edisio brand receivers, with Jeedom, but also with any Z-Wave receiver in your network.

## Functions 

-   Mode of use : Start / Stop, Open / Stop / Close, Variator, Motorization, Blinds, Shutters, Gates, Garage doors
-   2 programming modes
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Type of module : Edisio transmitter
-   Food : 3VDC (Lithium battery CR2430)
-   Canals : 4
-   Frequency : 868.3 MHz
-   Operating temperature : -10 ° C + 50 ° C
-   Dimensions : 52x28x12mm
-   Degree of protection : IP40

## Module data

-   Mark : Edisio Smart Home
-   Last name : ETC4

## General configuration

To configure the Edisio plugin and associate a module with Jeedom,
refer to this
[documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/edisio/).

> **Important**
>
> For Jeedom to automatically create your transmitter modules, forget
> no activate the option in the plugin configuration.

### The trends

Control and centralize your On / Off lighting and dimmers, doors, motors, on the same button or on 2 separate buttons. E-Trendy remote controls have 2 operating modes, MODE 1 and MODE 2 :

-   MODE 1 : 1-key control : On / Off, Open / Close, Variation + / Variation-, Pulse
-   MODE 2 : 2-button control :
    -   UP Keys: Stop, Close, Variation-, Pulse
    -   Bottom keys: On, Open, Variation +, Pulse

## Operating diagram

Depending on whether your transmitter is configured in "1-button" or "2-button" mode, here is how the remote works :

![diagramme](images/etc4/diagramme.jpg)

## Change mode

-   MODE 1 :
    -   Press and hold the "C4"
    -   Press the "C1" key once, always holding down the "C4" key, the LED will flash once

![mode1](images/etc4/mode1.jpg)

-   MODE 2 :
    -   Press and hold the "C4"
    -   Press twice the "C1" key, always holding the "C4" key, the LED will flash twice

![mode2](images/etc4/mode2.jpg)

## Association of the remote control with Jeedom

The association of an Edisio transmitter is done simply and automatically. You just have to press each key you want to have in your Jeedom.

Once, your associated equipment, you should get this :

![asso equip](images/etc4/asso_equip.jpg)

### Commandes

Once your equipment is created, you should get the commands associated with the module :

![Orders](images/etc4/commandes.jpg)

Here is the list of commands :

-   bt01 : This is the command that allows you to interact with button 1
-   bt02 : This is the command that allows you to interact with button 2
-   bt03 : This is the command that allows you to interact with button 3
-   bt04 : This is the command that allows you to interact with button 4
-   Drums : Indicates battery status

### Informations

Once your equipment is associated with Jeedom, various information will be available :

![Orders](images/etc4/infos.jpg)

-   Creation : Indicates the date on which the equipment was created
-   Communication : Indicates the last communication recorded between Jeedom and the micro-module
-   Drums : Indicates battery status for battery modules
-   Status : Returns the status of the module

### Utilisation

Once your remote control is configured, you can with the Jeedom Scenario plugin interact with your remote control on Jeedom.

> **Note**
>
> Each key has a binary status return.

## Faq.

**How to delete the association of a button with a receiver ?**

Press 5 sec on the "R" of the receiver, a simple beep signals the activated deprogramming mode. Press the "C" key to clear. Repeat this operation for all the keys to be deleted.
