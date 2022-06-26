# Secure SRT 323" Thermostat"

**The module**

![module](images/secure.srt323/module.jpg)

**The jeedom visual**

![vuedefaut1](images/secure.srt323/vuedefaut1.jpg)

## Summary

The SRT323 is a battery operated wall thermostat. It has a rotary knob allowing the user to adjust the set temperature in the room. This thermostat incorporates a load control relay. It is therefore not necessary to install an actuator near the boiler.

By checking the setpoint temperature with the actual measured temperature, the thermostat decides to operate the boiler. In addition, this thermostat incorporates a TPI (time-proportional integral) algorithm, allowing optimization and more accurate adjustment of the temperature of your environment.

The thermostat can receive the set temperature from another Z-Wave controller, and can also be used as a temperature sensor. The thermostat itself does not have a built-in timer but performs Z-Wave commands and local commands.

It can be used as a direct replacement for existing thermostats, without having to make any wiring changes. The TPI algorithm will make it possible to optimize the switching on and off of the boiler in order to best maintain the set temperature, without "overshooting" it. It has been shown that TPI controllers can provide considerable energy savings compared to traditional heating controllers.

The SRT323 is an ideal partner for use with home automation gateway, allowing you to remotely control your heating system. You won't have to worry about coming home to a cold house anymore, as long as you have a smartphone, tablet or PC handy and connected to the internet.

## Fonctions

-   Thermostat for domestic application
-   Replaces an existing thermostat
-   Z-Wave wireless technology
-   Backlit LCD screen
-   Easy to use
-   Compatible with other Z-Wave products
-   One button

## Technical characteristics

-   Mod type : Z-Wave Controller
-   Integrated TPI algorithm
-   Relai: 3(1)A 230V AC
-   Adjustable temperature range: 5°C to 30°C
-   Feed : 2x AAA (LR3) batteries)
-   Battery life : 2 years
-   Frequency : 868.42Mhz
-   Scope : up to 50 m in free field
-   Protection sign : IP30
-   Operating temperature : 0°C to 40°C
-   Dimensions : 86 x 86 x 36.25mm

## Module data

-   Mark : Horstmann
-   Last name : SRT 323 Electronic Room Thermostat and Temperature
-   Manufacturer ID : 89
-   Type Product : 1
-   Product ID : 4

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode you must put switch 1 in the ON position then with the wheel display L and press the wheel, in accordance with its paper documentation.

![inclusion](images/secure.srt323/inclusion.jpg)

> **Important**
>
> This module is capricious at inclusion. During a first inclusion always wake up the module right after the inclusion. To do this, leave switch 1 in the ON position then with the dial turn to position "n" and press the button. Press a second time after 10 seconds to be sure. Once done, click on the Synchronize button (visible in expert view) next to the Include/Exclude buttons. Then on the page of your module click on the magnifying glass at the top right.

Once included you should get this :

![Plugin Zwave](images/secure.srt323/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/secure.srt323/commandes.jpg)

Here is the list of commands :

-   Temperature : this is the temperature measurement command
-   SetpointState : it is the command that gives the current instruction
-   Order : this is the command that adjusts the setpoint
-   Heating state : this is the command that lets you know if the thermostat is in heating mode or not
-   Battery : this is the battery command

### Module Setup

Then it is necessary to configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.
![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/secure.srt323/config1.jpg)

Parameter details :

-   1: allows to activate or not the internal temperature sensor
-   2: allows you to choose the temperature unit
-   3: allows you to define the temperature variation level for the module to raise it (per unit of 0.1°C)

### Groupes

For optimum operation of your module, Jeedom must be associated with the 5 groups
![Groupe](images/secure.srt323/groupe.jpg)

## Good to know

### Specificities

> **Important**
>
> This module is battery operated. So it is important to note that a change of set point will only be taken into account when you wake up. By default the wake up is at 86400 seconds. It is strongly recommended to reduce it to about 10 minutes. Thus a change of setpoint will be taken into account by the module after a maximum of 10 minutes

## Wakeup

To wake up this module, you must put switch 1 in the ON position and
with the wheel choose n and press the wheel.

## Important Note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wakeup, after a change of association groups
