# Aeotec Minimote

**The module**

![module](images/aeotec.minimote/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/aeotec.minimote/vuedefaut1.jpg)

## Summary

This mini Aeon Labs controller is compatible with a wide variety of Z-Wave modules such as switches, dimmers, motion detectors, switches for blinds ... So you can remotely control your lights, devices or shutters. With this remote control, you can also include / exclude modules from your Z-Wave network and associate scenes with the buttons on the remote control. A sliding flap conceals the buttons used to configure the Z-Wave network.

## Fonctions

-   Z-Wave network configuration (inclusion / exclusion of modules)
-   Allows you to control up to 4 scenes
-   8 keys : 4 for scenes, 4 for network settings
-   Start / stop and dimming functions
-   ALL ON / ALL OFF function
-   Internal rechargeable battery on USB
-   Firmware update via USB

## Technical characteristics

-   Type of module : Z-Wave controller
-   Color : Blanc
-   Food : internal rechargeable battery via USB
-   Affichage: Blue and red LED
-   Frequency : 868,42MHz
-   Scope : up to 30 m
-   Dimensions : 0.8cm x 3.3cm x 9.3cm
-   Operating temperature : -35 to +85 ° C

## Module data
 
-   Mark : Aeotec
-   Name : Minimote
-   Manufacturer ID : 134
-   Product Type : 1
-   Product ID : 3

## Configuration

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press the LEARN button, in accordance with its paper documentation.

![inclusion](images/aeotec.minimote/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/aeotec.minimote/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/aeotec.minimote/commandes.jpg)

Here is the list of commands :

-   Buttons : it is the command which will push the button up
  - 1 : Button 1 short press
  - 2 : Button 1 long press
  - 3 : Button 2 short presses
  - 4 : Button 2 long presses
  - 5 : Button 3 short presses
  - 6 : Button 3 long presses
  - 7 : Button 4 short presses
  - 8 : Button 4 long presses

### Configuration of the module

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the parameters tab)
 
![Config1](images/aeotec.minimote/config1.jpg)

Parameter details :

-   241: button 1 operating mode (leave by default)
-   242: button 2 operating mode (leave by default)
-   243: button 3 operating mode (leave by default)
-   244: button 4 operating mode (leave by default)
-   250: operating mode of the remote control (absolutely leave Scene to use it as a remote control)

### Groupes

This module has four association groups, none is necessary to use it as a remote control in Jeedom.

![Groupe](images/aeotec.minimote/groupe.jpg)

## Wakeup

 

To wake up this module there is only one way :

-   press and hold the LEARN button for 3 seconds

## Faq.

This module wakes up by pressing and holding the LEARN button for 3 seconds.

This module is a battery module, the new configuration will only be taken into account if you wake up the remote control.

## Important note

You have to wake up the module : after its inclusion, after a change in configuration, after a change in wakeup, after a change in association groups
