# Secure SIR 321 "Timer"

**The module**

![module](images/secure.sir321/module.jpg)

**The jeedom visual**

![vuedefaut1](images/secure.sir321/vuedefaut1.jpg)

## Summary

The SIR321 digital timer is a simple push-button switch that remembers turning off your electrical devices for you. Big energy savings are possible by adding this simple device on any high power electrical device, with loads going up to 3kW (resistive).

These units are perfect for use on heating panels, immersion heaters, towel warmers and oil coolers. The boost ranges from 30 to 120 minutes.

The SIR 321 supports the external temperature sensors SES001, SES002 and SES003.

## Functions

-   Booster for immersion heater, panel radiator, towel radiator, oil bath radiator
-   Boiler timer
-   Forced ventilation in conference rooms
-   Floor heating temperature measurement (with optional sensors)
-   Simple to use and reliable
-   Save energy

## Technical characteristics

-   Type: Electronic timer
-   Relais: 13 (3) A, 230V AC, suitable for loads up to 3kW
-   Alimentation: 230V AC, 50Hz
-   Dimensions 85x85x44mm
-   Protection sign : IP30
-   Operating temperature: 0 ° C to 35 ° C

## Module data

-   Mark : Horstmann
-   Name : SIR 321 RF Countdown Timer
-   Manufacturer ID : 89
-   Product Type : 1/2 (depending on whether it is included with a temperature probe or not)

## Setup

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).
> **IMPORTANT**
>
> To put this module in inclusion mode, press the button for 1 second (until rapid flashing) and release, according to its paper documentation.

![inclusion](images/secure.sir321/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/secure.sir321/information.jpg)

### Commands

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/secure.sir321/commandes.jpg)

Here is the list of commands :

-   We : this is the command to turn on the relay
-   Off : it is the command to switch off the relay
-   Temperature : it is the temperature measurement command if an external probe is present

### Setup du module

If you want to configure the module you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/secure.sir321/config1.jpg)

Parameter details :

-   1: Allows you to activate or not the fail safe timer function (refer to the module documentation)
-   2: Adjusts the temperature unit
-   3: Set the time interval for sending the temperature to Jeedom (in seconds)
-   4: Allows you to set how much the temperature must vary for the module to send it to Jeedom (in steps of 0.1 10- → 0.1)
-   5: Allows you to set a cut off temperature above which the module will cut off the relay

### Groups

This module has two association groups. If the first is essential, the second is active and is essential if a temperature sensor is connected.

![Groupe](images/secure.sir321/groupe.jpg)
