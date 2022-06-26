# MCO MH-S412 Dual

**The module**

![module](images/mco.mhs412/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/mco.mhs412/vuedefaut1.jpg)

## Summary

The MH-S412-EU switch allows the 2 connected loads to be switched, either manually like a conventional switch, or remotely via the Z-Wave wireless protocol.

Its glass finish and its design brings a modern style.

The MH-S412-EU switch can control any type of load, lighting or electrical device.

The switch is also equipped with an LED indicator which indicates its status.

## Fonctions

-   Control two lamps or devices remotely
-   Installs in place of an existing switch (fits perfectly into a 40mm flush-mounting box)
-   ON/OFF function
-   Supports association commands (Group 1 and Group 2)
-   Control of both loads locally
-   Status LEDs
-   Glass finish, modern design
-   Tactile buttons

## Technical characteristics

-   Mod type : Z-Wave Receiver
-   Color : Blanc
-   Feed : 230V, 50Hz
-   Wiring : 3 wires, neutral required
-   Max power : 5A (1100W) for each channel
-   Frequency : 868.42Mhz
-   Scope : up to 30m
-   Dimensions : 86 x 86 x 43mm
-   Affichage: Blue/red LED

## Module data

-   Mark : MC HOME
-   Last name : MH-S412 Dual
-   Manufacturer ID : 351
-   Type Product : 16642
-   Product ID : 514

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press only one of the 2 buttons on the front panel for 3 seconds, in accordance with its paper documentation.

Once included you should get this :

![Plugin Zwave](images/mco.mhs412/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/mco.mhs412/commandes.jpg)

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/mco.mhs412/config1.jpg)

Parameter details :

-   1: Saving state before power failure : enable (allows you to find the last state of the switches just before the power failure) disable (the switches will be in the OFF state when the power returns )

### Groupes

This module has 3 association groups. Only the third is essential.

![Groupe](images/mco.mhs412/groupe.jpg)

## Good to know

### Specificities

- the touch buttons have a blue colored halo when the load is driven
- the touch buttons have an orange colored halo when the load is not driven
- the touch is rather pleasant and the controls are responsive
- this switch can control its load in autonomous mode (not attached to a z-wave controller)

## Wakeup

This module being connected to the mains (220v), the alarm clock is instantaneous and therefore does not require any particular action when changing parameters

## FAQs.

To exclude this model, put Openzwave in exclusion mode and press only one of the 2 buttons on the front panel for 3 seconds, in accordance with its paper documentation.

To restore the factory settings, press only one of the 2 buttons on the front panel for 10 seconds, in accordance with its paper documentation.
