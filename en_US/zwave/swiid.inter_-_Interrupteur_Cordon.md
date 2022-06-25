# Swiid Switch - Swiidinter

**The module**

![module](images/swiid.inter/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

## Summary

SwiidInter is the first on-cord switch in the Z-Wave home automation environment that is small and discreet enough to be comparable to an ordinary on-cord switch.

It can be operated both manually like any regular corded switch and remotely via a Z-Wave controller.

The SwiidInter switch also offers two-way association possibilities. Thus, it can be activated automatically by another Z-Wave device in the same network, such as by the triggering of a presence detector. Conversely with a short press or with a long press it can control two separate groups of Z-Wave devices that have been associated with it : for example all the other lights in the room where your SwiidInter switch is located.

The SwiidInter switch installs just like a regular cord switch : it is therefore a simple and quick installation that does not require any specialized tools. It must then be configured to integrate into a Z-Wave "network", this network can be as simple as a single remote control which controls your SwiidInter switch remotely.

## Fonctions

-   Cord switch usable both manually (short press) and by remote radio (Z-Wave)
-   Use as a replacement for a standard cord switch on a bedside, table or desk lamp
-   ON/OFF function
-   Activation of a home automation scenario on a long press (Z-Wave association)
-   Dimensions comparable to an ordinary cord switch
-   Installs like a regular cord switch
-   Suitable for all types of lamp bulbs

## Technical characteristics

-   Mod type : Z-Wave Receiver
-   Color : noire
-   Alimentation: 230V ± 10% - 50Hz
-   Maximum power : 660W
-   Consumption : &lt; 0,08W
-   Protection sign: IP20
-   Radio protocol: Z-Wave® (SDK 4.55)
-   Radio frequency : 868.42 MHz (US)
-   Dist. transmission: Up to 30m indoor (depends on materials)
-   Temp. functioning : 0 – 40°C
-   Display on/off : Blue LEDs
-   Dimensions : 84 x 32 x 29mm
-   EU standards : EN 61058-2-1:2011 EN 55015

## Module data

-   Mark : Swiid
-   Last name : Swiidinter
-   Manufacturer ID : 358
-   Type Product : 256
-   Product ID : 256

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the button on the back, in accordance with its paper documentation

![inclusion](images/swiid.inter/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/swiid.inter/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/swiid.inter/commandes.jpg)

Here is the list of commands :

-   State : This is the command that lets you know the status of the light
-   WE : This is the command that turns on the light
-   OFF : This is the command that turns off the light

Note that on the dashboard all the information is found on the same icon

### Module configuration

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/swiid.inter/config1.jpg)

Parameter details :

This parameter allows you to choose the behavior when you associate the swiidinter with another module (long press)

-   Idle : will have no effect on other lights
-   Only OFF : will be effective only to turn off the other lights
-   Only ON : will be effective only to turn on the other lights
-   ON and OFF (fully) : will be effective to turn on and off the other lights

### Groupes

This module has two association groups.

![Groupe](images/swiid.inter/groupe.jpg)

> **Important**
>
> For optimum operation of your module. Jeedom must be associated at least with group 2.

## Associate with another light

To associate the swiidinter with another light and be able to benefit from the switching on of another light, simply add it to association group 1 via the screen mentioned above.

## Wake-up

No concept of wake up on this module.
