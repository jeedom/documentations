# Fibaro Opening detector - FGK-101

**The module**

![module](images/fibaro.fgk101-DS18B20/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

# Summary

This battery-powered and Z-Wave compatible detector has a reed sensor, a proximity switch with magnetic operation, which detects the opening of a door or window when the two elements are distant.

The device consists of a part with a magnet (the mobile part), fixed on the door or window, as well as the main unit positioned on the fixed part of the window / door with screws or adhesive. When the two parts are no longer opposite, a Z-Wave radio signal is automatically sent.

In addition, this detector has an analog input for connecting a 1-Wire DS18B20 temperature probe. This detector also has a wired input, so it can be used as a universal transmitter : leave aside its magnetic contact, and connect its screw inputs to any detector (normally closed) of your choice such as a smoke, gas or carbon monoxide detector, etc.

A Z-Wave controller (remote control, dongle…) is necessary in order to integrate this detector into your network if you already have an existing network.

## Fonctions

-   Opening detector
-   Button to include / exclude the detector
-   Low battery detection
-   Tamper protection
-   1 potential-free wired input
-   1 analog 1-Wire input (to connect a DS18B20 temperature probe)
-   Very small, reduced dimensions
-   Ease of use and installation

## Technical characteristics

-   Type of module : Z-Wave transmitter
-   Color : White (FGK-101/102/103/104/105/106/107 depending on color)
-   Food : ER14250 (1 / 2AA) 3.6V battery
-   Frequency : 868.42 Mhz
-   Transmission distance : 50m free field, 30m indoors
-   Dimensions: 76 x 17 x 19 mm
-   Operating temperature : 0-40 ° C

## Module data

-   Mark : Fibar Group
-   Name : Fibaro FGK-101 with temperature probe (DS18B20)
-   Manufacturer ID : 271
-   Product Type : 1792
-   Product ID : 4096

## Configuration

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press the inclusion button 3 times, according to its paper documentation.

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/fibaro.fgk101-DS18B20/commandes.jpg)

Here is the list of commands :

-   State : it is the command which will raise the open or closed state of the module
-   Drums : it is the command which allows to go back up the state of the battery

You can hide or show these commands as you wish.

### Configuration of the module

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

Parameter details :

-   Wakeup : this is the module wake-up interval (recommended value 7200)
-   1: sets the delay for canceling the IN input alarm (dry contact)
-   2: allows you to choose if the blue led should flash when opening and closing your door for example
-   3: used to define the contact type connected to the terminal block (IN)
-   5: not recommended to change this parameter unless you know why (defines the type of signal sent to the association group 1)
-   7: value sent to association group 1
-   9: allows you to set the sending of the cancellation signal between the IN input and association group 1
-   12: allows to adjust the sensitivity to temperature change (if a 1 wire probe is connected to the module)
-   13: allows to set the broadcast mode sending of temperature signals and to buffer
-   14: activates the scene activation feature

### Groupes

This module has three association groups, only the third is essential.

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

## Good to know

### Specificities

> **Tip**
>
> This module is very finicky on wakeup and requires very close proximity to the controller when it is included

### Alternative visual

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

## Wakeup

To wake up this module there is only one way :

-   press the inclusion button 3/4 times. It may be necessary to do this several times in succession (2 or 3)

## Faq.

This module wakes up by pressing 3 times on one of the tamper buttons. But the other tamper button must be pressed.

This module has a very low range. It is advisable to include as close to your box.

This module is a battery module, the new configuration will be taken into account at the next wakeup.

## Important note

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change in configuration, after a change in wakeup, after a change in association groups
