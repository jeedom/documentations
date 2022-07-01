# Secure SIR 321 "Timer"

**The module**

![module](images/secure.sir321/module.jpg)

**The jeedom visual**

![vuedefaut1](images/secure.sir321/vuedefaut1.jpg)

## Summary

The SIR321 digital timer is a simple push-button switch that remembers to turn off your electrical appliances for you. Big energy savings are possible by adding this simple device to any high power electrical appliance, with loads up to 3kW (resistive).

These units are perfect for use on panel heaters, immersion heaters, heated towel rails and oil radiators. The boost ranges from 30 to 120 minutes.

The SIR 321 supports the external temperature sensors SES001, SES002 and SES003.

## Fonctions

-   Booster for immersion heater, panel radiator, heated towel rail, oil-filled radiator
-   Boiler timer
-   Forced ventilation in conference rooms
-   Underfloor heating temperature measurement (with optional sensors))
-   Simple to use and reliable
-   Achieve energy savings

## Technical characteristics

-   Type: Electronic timer
-   Relais: 13(3)A, 230V AC, suitable for loads up to 3kW
-   Alimentation: 230V AC, 50Hz
-   Dimensions 85x85x44mm
-   Protection sign : IP30
-   Operating temperature: 0°C to 35°C

## Module data

-   Mark : Horstmann
-   Last name : SIR 321 RF Countdown Timer
-   Manufacturer ID : 89
-   Type Product : 1/2 (depending on whether it is included with a temperature probe or not)

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).
> **Important**
>
> To put this module in inclusion mode, press the button for 1 second (until rapid flashing) and release, in accordance with its paper documentation.

![inclusion](images/secure.sir321/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/secure.sir321/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/secure.sir321/commandes.jpg)

Here is the list of commands :

-   We : this is the command to turn on the relay
-   Off : this is the command to turn off the relay
-   Temperature : this is the temperature measurement command if an external probe is present

### Module configuration

If you want to configure the module you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/secure.sir321/config1.jpg)

Parameter details :

-   1: Enables or disables the fail safe timer function (refer to module documentation)
-   2: Allows you to set the temperature unit
-   3: Allows you to set the time interval for sending the temperature to Jeedom (in seconds)
-   4: Allows you to set how much the temperature must vary for the module to send it to Jeedom (in steps of 0.1 10-→0.1)
-   5: Allows you to set a cut off temperature beyond which the module will cut the relay

### Groupes

This module has two association groups. If the first is essential, the second is active and is essential if a temperature sensor is connected.

![Groupe](images/secure.sir321/groupe.jpg)
