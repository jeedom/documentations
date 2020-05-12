# Nodon Remote Control - Octan

**The module**

![module](images/nodon.octan/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/nodon.octan/vuedefaut1.jpg)

## Summary

The Octan Remote NodOn® allows you to control any Z-Wave® or Z-Wave Plus® compatible receiver such as the NodOn® remote control socket (Main Controller mode - Standalone), or even trigger scenes / actions via a home automation system compatible (Gateway mode)

Its integrated magnet allows it to be fixed everywhere, from the radiator to the refrigerator door, via its wall support. Between remote control and switch, the Octan Remote revolutionizes the control of household objects

## Fonctions

-   Control alone or with a home automation system
-   Integrated magnet
-   Colored led
-   Wall plate
-   2 years of battery

## Technical characteristics

-   Food : CR2032 battery - Autonomy 1,5 - 2 years
-   4 buttons
-   Wall support fixed with double-sided adhesive (included) or screws (not included)
-   Integrated magnet for fixing to metal surface
-   Operating temperature : 0 ° C to 40 ° C - Altitude : 2000m
-   Z-Wave® radio protocol : 868.4MHz - 500 Series - Z-Wave Plus® SDK 06.51 compatible.01 Scope: 40m indoor / 80m outdoor
-   Dimensions : 80 \*80 \*15mm
-   2 years warranty

## Module data

-   Mark : Nodon
-   Name : CRC-3-1-00 Octan Remote
-   Manufacturer ID : 357
-   Product Type : 2
-   Product ID : 1

## Configuration

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press the two buttons (1 and 2) until the light turns pink, then press button 1, in accordance with its paper documentation.

![inclusion](images/nodon.octan/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/nodon.octan/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/nodon.octan/commandes.jpg)

Here is the list of commands :

-   Buttons : it is the command which will push the button up

+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| Buttons        | Support          | Long press     | Relaxation    | Double support   |
+ ================ + ================ + ================ = + ================ + ================= +
| **1**          | 10             | 12             | 11             | 13             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **2**          | 20             | 22             | 21             | 23             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **3**          | 30             | 32             | 31             | 33             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **4**          | 40             | 42             | 41             | 43             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +

### Configuration of the module

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/nodon.octan/config1.jpg)

Parameter details :

-   1-2 : Allows you to choose the button profiles when used centrally (useless for use in Jeedom)
-   3 : Important parameter to say if the switch should operate in Scene or Central Scene mode (Absolutely set Scene)
-   4-7 : Choose the button operating mode (in case of group associations)
-   8 : Allows you to choose the operating mode of the LED

### Groupes

This module has 7 association groups.

![Groupe](images/nodon.octan/groupe.jpg)

![Groupe](images/nodon.octan/groupe2.jpg)

-   Group 1 - Lifeline : This group is generally used to report information from the Smart Plug to the main network controller.
-   Group 2 to 5 - The devices in these groups are controlled by the corresponding button according to the MONO profile
-   Group 6 to 7 - The devices in these groups are controlled by the corresponding button according to the DUO profile

> **IMPORTANT**
>
> At least Jeedom should end up in group 1

## Good to know

### Specificities

-   This module can be finicky on inclusion. Do not hesitate to wake it up 1 or 2 times after inclusion, and check the association group carefully.

## Wakeup

To wake up this module, just press one of the buttons

## Important note

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change in configuration, after a change in wakeup, after a change in association groups
