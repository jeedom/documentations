# Fibaro Opening Detector - FGK-101

**The module**

![module](images/fibaro.fgk101-DS18B20/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

# Summary

This battery-powered, Z-Wave compatible detector features a reed sensor, a magnetically operated proximity switch, which detects the opening of a door or window when the two elements are far apart.

The device consists of a part with a magnet (the moving part), fixed on the door or window, and the main unit positioned on the fixed part of the window/door with screws or adhesive. When the two parties are no longer facing each other, a Z-Wave radio signal is automatically sent.

In addition, this detector has an analog input for connecting a 1-Wire DS18B20 temperature probe. This detector also has a wired input, so it can be used as a universal transmitter : leave aside its magnetic contact, and connect its screw inputs to any detector (normally closed) of your choice such as a smoke, gas or carbon monoxide detector, etc.

A Z-Wave controller (remote control, dongle, etc.) is required to integrate this detector into your network if you already have an existing network.

## Fonctions

-   Opening detector
-   Button to include/exclude the detector
-   Low battery detection
-   Tamper protection
-   1 potential-free wired input
-   1 analog input 1-Wire (to connect a DS18B20 temperature sensor)
-   Very small, reduced dimensions
-   Ease of use and installation

## Technical characteristics

-   Mod type : Z-Wave transmitter
-   Color : White (FGK-101/102/103/104/105/106/107 depending on color)
-   Feed : Battery ER14250 (1/2AA) 3.6V
-   Frequency : 868.42Mhz
-   Transmission distance : 50m open field, 30m indoors
-   Dimensions: 76 x 17 x 19mm
-   Operating temperature : 0-40°C

## Module data

-   Mark : Fibar Group
-   Last name : Fibaro FGK-101 with temperature probe (DS18B20)
-   Manufacturer ID : 271
-   Type Product : 1792
-   Product ID : 4096

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the inclusion button 3 times, in accordance with its paper documentation.

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/fibaro.fgk101-DS18B20/commandes.jpg)

Here is the list of commands :

-   State : this is the command that will report the open or closed state of the module
-   Battery : this is the command that allows you to report the status of the battery

You can hide or show these commands as you wish.

### Module Setup

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

Parameter details :

-   Wakeup : this is the module wake-up interval (recommended value 7200)
-   1: allows you to set the delay for canceling the alarm of the IN input (dry contact)
-   2: allows you to choose whether the blue LED should flash when opening and closing your door, for example
-   3: is used to define the type of contact connected to the terminal block (IN)
-   5: not recommended to change this setting unless you know why (sets the type of signal sent to association group 1)
-   7: value sent to association group 1
-   9: allows you to set the sending of the cancellation signal between the IN input and the association group 1
-   12: allows you to adjust the sensitivity to temperature changes (if a 1-wire probe is connected to the module)
-   13: allows you to set the sending in broadcast mode of the temperature and tamper signals
-   14: allows you to activate the scene activation feature

### Groupes

This module has three association groups, only the third is essential.

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

## Good to know

### Specificities

> **Tip**
>
> This module is very capricious on wakeups and requires very close proximity to the controller when it is included

### Alternative visual

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

## Wakeup

To wake up this module there is only one way to proceed :

-   press the inclusion button 3/4 times. It may be necessary to do this several times in a row (2 or 3)

## FAQs.

This module wakes up by pressing 3 times on one of the tamper buttons. But the other tamper button must be pressed.

This module has a very low range. It is advisable to make the inclusion as close as possible to your box.

This module is a battery-powered module, the new configuration will be taken into account at the next wakeup.

## Important note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
