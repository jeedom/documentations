# Nodon Switch - Wall Switch

**The module**

![module](images/nodon.wallswitch/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/nodon.wallswitch/vuedefaut1.jpg)

## Summary

The NodOn® wall switch can directly control any Z-Wave® or Z-Wave Plus® compatible device such as the NodOn® smart plug or even trigger scenes via a compatible home automation center.

The switch has a mounting plate for easy mounting in the house: by using the screws of a flush-mounting box, by screwing it to the wall, or quite simply by sticking it using the double-sided adhesive tape present on the back of the plate.

## Fonctions

-   Control alone or with a home automation unit
-   Easy to assemble and disassemble
-   Pleasant support feeling
-   Wireless
-   2 years of battery

## Technical characteristics

-   Feed : CR2032 battery – Autonomy 1.5 - 2 years
-   4 buttons
-   Wall mounting by double-sided adhesive (included) or screws (not included))
-   Operating temperature : 0°C to 40°C
-   Altitude : 2000m
-   Z-Wave® wireless protocol : 868.4MHz – 500 Series – Compatible Z-Wave Plus® SDK 06.51.06
-   Scope : 40m indoor / 70m outdoor
-   Dimensions : 80\*80\*15mm
-   2 years warranty
-   EN 60950-1:2006 +A11:2009 + A1:2010+A12:2011 + A2:2013
-   EN 300 220-2 V2.4.1
-   EN301 489-1 V1.9.2
-   EN301 489-3 V1.6.1
-   EN 62479:2010

## Module data

-   Mark : Nodon
-   Last name : CWS-3-1-01 Wall Switch
-   Manufacturer ID : 357
-   Type Product : 2
-   Product ID : 3

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press the two buttons (1 and 2) until the light turns pink then press button 1, in accordance with its paper documentation.

![inclusion](images/nodon.wallswitch/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/nodon.wallswitch/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the modules will be available.

![Orders](images/nodon.wallswitch/commandes.jpg)

Here is the list of commands :

-   Buttons : this is the command that will raise the button pressed

+----------------+----------------+--------------- -+----------------+----------------+
| Buttons        | Support          | Long press     | Release    | Double support   |
+================+================+=============== =+================+================+
| **1**          | 10             | 12             | 11             | 13             |
+----------------+----------------+--------------- -+----------------+----------------+
| **2**          | 20             | 22             | 21             | 23             |
+----------------+----------------+--------------- -+----------------+----------------+
| **3**          | 30             | 32             | 31             | 33             |
+----------------+----------------+--------------- -+----------------+----------------+
| **4**          | 40             | 42             | 41             | 43             |
+----------------+----------------+--------------- -+----------------+----------------+

### Module configuration

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)
![Config1](images/nodon.wallswitch/config1.jpg)

Parameter details :

-   1-2 : Allows you to choose the profile of the buttons in case of central use (useless for use in Jeedom)
-   3 : Important parameter to say if the switch should work in Scene or Central Scene mode (Absolutely put Scene)
-   4-7 : Choose the operating mode of the buttons (in case of group associations)
-   8 : Allows you to choose the operating mode of the LED

### Groupes

This module has 7 association groups.

![Groupe](images/nodon.wallswitch/groupe.jpg)

![Groupe](images/nodon.wallswitch/groupe2.jpg)

-   Group 1 – Lifeline : This group is generally used to report information from the Smart Plug to the main network controller.
-   Group 2 to 5 – Devices in these groups are controlled by the corresponding button according to the MONO profile
-   Group 6 to 7 – Devices in these groups are controlled by the corresponding button according to the DUO profile

> **Important**
>
> At least Jeedom should end up in group 1

## Good to know

### Specificities

-   This module can be temperamental when included. Do not hesitate to wake him up once or twice after inclusion. Well check the association group.

## Wakeup

To wake up this module just press one of these buttons

## Important note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
