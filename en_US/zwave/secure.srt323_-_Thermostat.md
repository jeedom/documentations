Secure SRT 323 "Thermostat" 
===========================

\

-   **The module**

\

![module](images/secure.srt323/module.jpg)

\

-   **The jeedom visual**

\

![vuedefaut1](images/secure.srt323/vuedefaut1.jpg)

\

Summary 
------

\

The SRT323 is a wall-mounted battery-operated thermostat. He has
a rotary knob allowing the user to adjust the temperature
in the room. This thermostat incorporates a control relay
dump. There is therefore no need to install an actuator near
of the boiler.

By checking the set temperature with the actual temperature
measured, the thermostat decides to activate the boiler. What's more
thermostat incorporates a TPI (time-proportional integral) algorithm,
allowing a more accurate optimization and adjustment of the temperature
of your environment.

Thermostat can receive setpoint temperature from another
Z-Wave controller, and can also be used as a
temperature. The thermostat itself does not have a built-in timer but
execute Z-Wave commands and local commands.

It can be used as a direct replacement for thermostats
existing, without having to make any wiring changes. The algorithm
TPI will optimize the switching on and off of the boiler
in order to best maintain the set temperature, without
"overshoot "of it. It has been shown that TPI controllers
can provide considerable energy savings compared to
traditional heating controllers.

The SRT323 is an ideal partner for use with a gateway
home automation, allowing you to remotely control your system
heater. You will no longer have to worry about going home in
a cold house, as long as you have a smartphone, tablet or
PC at hand and connected to the internet.

\

Functions 
---------

\

-   Thermostat for domestic application

-   Replaces an existing thermostat

-   Z-Wave wireless technology

-   Backlit LCD display

-   Easy to use

-   Compatible with other Z-Wave products

-   One button

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave controller

-   Integrated TPI algorithm

-   Relai: 3 (1) A 230V AC

-   Adjustable temperature range: 5 ° C to 30 ° C

-   Food : 2x AAA batteries (LR3)

-   Battery life : 2 years

-   Frequency : 868.42 Mhz

-   Scope : up to 50 m in open field

-   Protection sign : IP30

-   Operating temperature : 0 ° C to 40 ° C

-   Dimensions : 86 x 86 x 36.25 mm

\

Module data 
-----------------

\

-   Mark : Horstmann

-   Name : SRT 323 Electronic Room Thermostat and Temperature

-   Manufacturer ID : 89

-   Product Type : 1

-   Product ID : 4

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **Important**
>
> To put this module in inclusion mode, you must put switch 1 in
> position ON then with the dial display L and press the dial,
> according to its paper Documentation.

\

![inclusion](images/secure.srt323/inclusion.jpg)

\

> **Important**
>
> This module is finicky at inclusion. During a first inclusion
> always wake up the module immediately after inclusion. To do this
> leave the switch 1 in the ON position then with the thumb wheel set
> position "n" and press the button. Press a second time after
> 10 seconds to be sure. Once done, click on the button
> Synchronize (visible in expert view) next to the buttons
> Inclusion / Exclusion. Then on the page of your module click on
> magnifying glass top right.

\

Once included you should get this :

\

![Plugin Zwave](images/secure.srt323/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/secure.srt323/commandes.jpg)

\

Here is the list of commands :

\

-   Temperature : it is the temperature measurement command

-   State : it is the command which gives the current instruction

-   Instructions : it is the command which makes it possible to adjust the setpoint

-   Heating State : it is the command which makes it possible to know if the
    thermostat is in heating mode or not

-   Drums : it's the battery command

\

### Setup of the module 

\

Then it is necessary to configure the module in
depending on your installation. This requires going through the button
"Setup "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/secure.srt323/config1.jpg)

\

Parameter details :

\

-   1: allows to activate or not the internal temperature sensor

-   2: allows to choose the temperature unit

-   3: allows to define the temperature variation level for
    the module back up (in units of 0.1 ° C)

\

### Groups 

\

For optimal functioning of your module, Jeedom must be
associated with the 5 groups

\

![Groupe](images/secure.srt323/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

\

> **Important**
>
> This module is on battery. So it’s important to note that
> change of setpoint will only be taken into account upon awakening. By
> default the wake up is at 86400 seconds. It is highly recommended to
> decrease it to about 10 minutes. Thus a change of setpoint will be
> taken into account by the module at most after 10 minutes

\

Wakeup 
------

\

To wake up this module you must put switch 1 in the ON position and
with the wheel choose n and press the wheel.

\

Faq. 
------

\

\

This module is a battery module, the new configuration will be
taken into account at the next wake up.

\

IMPORTANT note 
---------------

\

> **Important**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wakeup, after a
> change of association groups

\

**@sarakha63**
