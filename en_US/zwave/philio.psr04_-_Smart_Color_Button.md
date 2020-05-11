Philio Smart Color Button 
=========================

\

-   **The module**

\

![Module](images/philio.psr04/Module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/philio.psr04/vuedefaut1.jpg)

\

Summary 
------

\

This unique design switch offers several functions. You
can use it to turn on, off or dim the lighting, adjust
the position of your shutters, adjust the temperature of the thermostat or
use it as a timer.

Once included in your Z-Wave network, the Philio PSR04 switch
must be associated with the device (s) you wish to control.
It can only operate by direct association with
devices, and cannot launch scenes created in your controller
Z-Wave home automation.

Used as a drive, it has the same behavior as a drive
traditional. Turn the knob to the right to increase the
light, and to the left to decrease it.

In addition, you can easily move and position this switch
at the location of your choice thanks to its magnetic support. Its conception
waterproof allows it to be installed in a place with high humidity such as
bathroom.

It uses the latest Z-Wave 500 series chip, providing an increase
50% radio range and 250% faster communication speed
fast compared to previous Z-Wave products, as well as a plus
low energy consumption allowing greater autonomy.

\

Functions 
---------

\

-   Multifunction switch

-   Z-Wave + technology

-   ON / OFF and dimming function (lighting or shutters)

-   Integrated timer function

-   Waterproof

-   Adapts to any decoration style

-   Rechargeable battery

-   Very low energy consumption

-   Long battery life (6 months per charge)

-   Magnetic holder

-   RGBW indication LED

-   Easy to install

\

Technical characteristics 
---------------------------

\

-   Food : Lithium Polymer 3 Battery.7V, 220mA v
    battery : 6 months for 2 hours charge

-   Standby consumption : 18µA

-   Consumption in operation : 45mA

-   Frequency : 868.42 MHz

-   Transmission distance : 100m outdoors, 40m indoors

-   Dimensions :

Support : 71.16 x 10.94 mm (diameter x thickness) Button : 59.99 x 14.89
mm (diameter x thickness) Support + Button : 71.16 x 17.22 mm (diameter
x thickness) \ * Certifications :

EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950
FCC Part 15 B, FCC Part 15 C

\

Module data 
-----------------

\

-   Mark : Philio

-   Name : PSR04 Smart Color Button

-   Manufacturer ID : 316

-   Product Type : 9

-   Product ID : 34

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/Documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, put it in position
> low (inclusion) and press the button in accordance with its
> paper documentation.

\

![inclusion](images/philio.psr04/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/philio.psr04/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/philio.psr04/commandes.jpg)

\

Here is the list of commands :

\

-   State : it is the command which will move the button position from 0 to
    100%

-   Drums : this is the command that reports the battery status of the
    Module

\

### Configuration of the module 

\

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after
> inclusion.

\

Then if you want to configure the module according to
of your installation, you have to go through the button
"Configuration "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/philio.psr04/config1.jpg)

\

Parameter details :

\

-   1: defines the lowest bound (position completely left)

-   2 : defines the highest terminal (position completely right)

-   10 : battery ascent time interval

-   25 : allows to define if the module sends its position
    automatically after rotation (1s delay) or if it is necessary to press
    on the button to validate the sending

-   26 : activates the sending of scene or not on pressing of the central button
    (parameter not taken into account in Jeedom)

\

### Groups 

\

This module has two association groups, the first is the only one
essential. The second allows to go up the position to Jeedom

\

![Groupe](images/philio.psr04/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

To use this module as a remote control, proceed as follows :

-   Add the controller in group 2

Indeed this type of module is not made to interact directly
with a box but directly with other modules. However in
adding Jeedom to group 2, this allows to receive the position of the
button and therefore use it to control a scenario (set a
volume for example)

Wakeup 
------

\

To wake up this module there is only one way :

-   put the module in the low position and press the button

\

Faq. 
------

\

\

This module is a battery module, the new configuration will not be
take into account that if you wake up the module.

\

Important note 
---------------

\

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wakeup, after a
> change of association groups

\

**@sarakha63**
