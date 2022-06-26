# Nodon Remote Control - Soft Remote

**The module**

![module](images/nodon.softremote/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/nodon.softremote/vuedefaut1.png)

## Summary

The NodOn® Soft Remote can directly control any Z-Wave® or Z-Wave Plus® compatible device such as the NodOn® Smart Plug.

It can also trigger scenes via a compatible home automation unit.

## Fonctions

-   Controls any Z-Wave enabled device
-   Shock and splash resistant
-   Can be attached anywhere thanks to its integrated magnet
-   6 colors available

## Technical characteristics

-   Feed : CR2032 battery – Autonomy 1.5 - 2 years
-   4 buttons
-   Built-in magnet for attachment to metal surface
-   Shock and splash resistant
-   Operating temperature : 0°C to 40°C - Altitude : 2000m
-   Z-Wave® wireless protocol : 868.4MHz – 500 Series – Compatible Z-Wave Plus® SDK 06.51.06
-   Scope : 40m indoors / 80m outdoors
-   Dimensions 56\*56\*20mm
-   2 years warranty

## Module data

-   Mark : Nodon
-   Last name : CRC-3-6-0x Soft Remote
-   Manufacturer ID : 357
-   Type Product : 2
-   Product ID : 2

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the two buttons (+ and 0 full) until the light turns pink then press the + button, in accordance with its paper documentation.

![inclusion](images/nodon.softremote/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/nodon.softremote/information.png)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/nodon.softremote/commandes.png)

Here is the list of commands :

-   Buttons : this is the command that will raise the button pressed

+----------------+----------------+--------------- -+----------------+----------------+
| Buttons        | Support          | Long press     | Release    | Double support   |
+================+================+=============== =+================+================+
| **1 (0         | 10             | 12             | 11             | 13             |
| plein)**       |                |                |                |                |
+----------------+----------------+--------------- -+----------------+----------------+
| **2 (+)**      | 20             | 22             | 21             | 23             |
+----------------+----------------+--------------- -+----------------+----------------+
| **3 (0 empty)** | 30             | 32             | 31             | 33             |
+----------------+----------------+--------------- -+----------------+----------------+
| **4 (-)**      | 40             | 42             | 41             | 43             |
+----------------+----------------+--------------- -+----------------+----------------+

-   Battery : this is the command that raises the battery level

### Module Setup

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/nodon.softremote/config1.png)

Parameter details :

-   1-2 : Allows you to choose the profile of the buttons in case of central use (useless for use in Jeedom)
-   3 : Important parameter to say if the switch should work in Scene or Central Scene mode (Absolutely put Scene)
-   4-7 : Choose the operating mode of the buttons (in case of group associations)
-   8 : Allows you to choose the operating mode of the LED

### Groupes

This module has 7 association groups.

![Groupe](images/nodon.softremote/groupe.png)

-   Group 1 – Lifeline : This group is generally used to report information from the Smart Plug to the main network controller.
-   Group 2 to 5 – Devices in these groups are controlled by the corresponding button according to the MONO profile
-   Group 6 to 7 – Devices in these groups are controlled by the corresponding buttons according to the DUO profile

> **Important**
>
> At least Jeedom should end up in group 1

## Good to know

### Specificities

-   This module can be temperamental when included. Do not hesitate to wake him up once or twice after inclusion. Well check the association group.

## Wakeup

To wake up this module, just press one of the buttons

## Important Note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
