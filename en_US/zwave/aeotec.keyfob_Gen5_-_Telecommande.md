# 

**The module**

![module](images/aeotec.keyfob-gen5/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/aeotec.keyfob-gen5/vuedefaut1.jpg)

## Summary

.

With its very small dimensions, you can easily put it in your pocket. Easy to use and elegant, it is equipped with a ring to attach it to keys, which makes it available when leaving the house or when returning to your home.

. .

. .

## Fonctions

-   Key fob remote control
-   Main or secondary controller
-   Ultra compact and ultra design
-   
-   
-   
-   Part of the Gen5 line from Aeon Labs
-   Security of radio communication via AES-128 encryption
-   Integrates the Z-Wave 500 series chip
-   
-   
-   Ease of use and installation

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Feed : 1 CR2450 3V lithium battery
-   Battery life : 
-   Frequency: 868.42MHz
-   Transmission distance : 
-    : -
-   Dimensions : )

## Module data

-   Mark : Aeotec
-   Last name : 
-   Manufacturer ID : 134
-   Type Product : 1
-   Product ID : 88

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press the LEARN button, in accordance with its paper documentation.

![inclusion](images/aeotec.keyfob-gen5/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/aeotec.keyfob-gen5/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/aeotec.keyfob-gen5/commandes.jpg)

Here is the list of commands :

-   Buttons : this is the command that will raise the button pressed
  - 1 : Button 1 short press
  - 2 : Button 1 long press
  - 3 : Button 2 short presses
  - 4 : Button 2 long presses
  - 5 : Button 3 short presses
  - 6 : Button 3 long presses
  - 7 : Button 4 short presses
  - 8 : Button 4 long presses

### Module configuration

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/aeotec.keyfob-gen5/config1.jpg)

Parameter details :

-   250: mode of operation of the remote control (absolutely put Scene to use it as a remote control)
-   255 : allows to factory reset the Keyfob

### Groupes

This module has two association groups, the first is the only essential.

![Groupe](images/aeotec.keyfob-gen5/groupe.jpg)

##  Good to know

### Specificities

To use this module as a remote control, proceed as follows :

-   1 : Include remote control
-   2 : Wake up remote control
-   3 : 
-   4 : 
-   5 : .

## Wakeup

To wake up this module there is only one way to proceed :

-   keep the LEARN button pressed for 3 seconds

## FAQs.

This module wakes up by pressing the LEARN button for 3 seconds.

This module is a battery-powered module, the new configuration will only be taken into account if you wake up the remote control.

## Important note

You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
