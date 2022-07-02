# Aeotec Minimote

**The module**

![module](images/aeotec.minimote/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/aeotec.minimote/vuedefaut1.jpg)

## Summary

This Aeon Labs mini controller is compatible with a wide variety of Z-Wave modules such as switches, dimmers, motion detectors, switches for blinds, etc. So you can remotely control your lights, appliances or roller shutters. With this remote control you can also include/exclude modules from your Z-Wave network and associate scenes with the buttons on the remote control. A sliding flap hides the buttons for setting up the Z-Wave network.

## Fonctions

-   Z-Wave network configuration (inclusion/exclusion of modules)
-   Allows you to control up to 4 scenes
-   8 keys : 4 for scenes, 4 for network setting
-   On/off and dimming functions
-   ALL ON/ALL OFF function
-   Internal rechargeable battery via USB
-   Firmware update via USB

## Technical characteristics

-   Mod type : Z-Wave Controller
-   Color : Blanc
-   Feed : internal rechargeable battery via USB
-   Affichage: Blue and red LEDs
-   Frequency : 868,42MHz
-   Scope : up to 30m
-   Dimensions : 0.8cm x 3.3cm x 9.3cm
-   Operating temperature : -35 to +85 °C

## Module data
 
-   Mark : Aeotec
-   Last name : Minimote
-   Manufacturer ID : 134
-   Type Product : 1
-   Product ID : 3

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press the LEARN button, in accordance with its paper documentation.

![inclusion](images/aeotec.minimote/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/aeotec.minimote/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/aeotec.minimote/commandes.jpg)

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

### Module Setup

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)
 
![Config1](images/aeotec.minimote/config1.jpg)

Parameter details :

-   241: operating mode of button 1 (leave default)
-   242: button 2 operating mode (leave default)
-   243: operating mode of button 3 (leave default)
-   244: operating mode of button 4 (leave default)
-   250: mode of operation of the remote control (absolutely leave Scene to use it as a remote control)

### Groupes

This module has four association groups, none is necessary to use it as a remote control in Jeedom.

![Groupe](images/aeotec.minimote/groupe.jpg)

## Wakeup

 

To wake up this module there is only one way to proceed :

-   keep the LEARN button pressed for 3 seconds

## FAQs.

This module wakes up by pressing the LEARN button for 3 seconds.

This module is a battery-powered module, the new configuration will only be taken into account if you wake up the remote control.

## Important note

You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
