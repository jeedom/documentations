# Aeotec Panic Button

**The module**

![module](images/aeotec.panicbutton/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/aeotec.panicbutton/vuedefaut1.jpg)

## Summary

This keychain remote with a modern and pleasant design has a button to control all types of Z-Wave devices such as lamps, blinds, etc.

With its very small dimensions, you can easily put it in your pocket. Easy to use and elegant, it is equipped with a ring to attach it to keys, which makes it available when leaving the house or when returning to your home.

The button allows you to control two devices or scenes thanks to the management of short and long presses. This remote control can be used as both main and secondary controller.

This remote can also be used as an emergency or panic button. In case of distress or when its holder is faced with another emergency situation, it is enough for him to press the button and a Z-Wave signal will be emitted. In this case, this device can also be used as a medallion around the neck.

## Fonctions

-   Key fob remote control
-   Main or secondary controller
-   Ultra compact and ultra design
-   1 configurable button
-   Manages up to 2 devices/scenes
-   Can be used as an emergency/panic button
-   Use around the neck as an emergency medallion

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Feed : 1 CR2450 3V lithium battery
-   Battery life : 2 to 3 months for 10 to 20 uses per day
-   Frequency: 868.42MHz
-   Transmission distance : 30m indoors
-   Dimensions : 55 x 30 x 11mm (L x W x H)

## Module data

-   Mark : Aeotec
-   Last name : Panic button
-   Manufacturer ID : 134
-   Type Product : 1
-   Product ID : 38

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press the LEARN button, in accordance with its paper documentation.

![inclusion](images/aeotec.panicbutton/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/aeotec.panicbutton/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/aeotec.panicbutton/commandes.jpg)

Here is the list of commands :

-   Buttons : this is the command that will raise the button pressed
  - 1 : Short press button
  - 2 : Long press button

### Module Setup

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/aeotec.panicbutton/config1.jpg)

Parameter details :

-   250: mode of operation of the remote control (absolutely put Scene to use it as a remote control)
-   255 : allows to factory reset the Keyfob

### Groupes

This module has a single association group. It is essential.

![Groupe](images/aeotec.panicbutton/groupe.jpg)

## Good to know

### Specificities

To use this module as a remote control, proceed as follows :

-   1 : Include remote control
-   2 : Wake up remote control
-   3 : Change the parameter 250 to true (do it well even if it already appears to be true)
-   4 : Wake up the remote control and ensure that the change has been taken into account
-   5 : Change the operating mode of the remote control by pressing and holding the two buttons on the back for 3 seconds.

##Wakeup

To wake up this module there is only one way to proceed :

-   keep the LEARN button pressed for 3 seconds

## FAQs.
 
This module wakes up by pressing the LEARN button for 3 seconds.

This module is a battery-powered module, the new configuration will only be
taken into account only if you wake up the remote control.

## Important note

You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
