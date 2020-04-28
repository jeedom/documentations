Philio PST02 C - 3 in 1 Opening 
=================================

\

-   **The module**

\

![module](images/philio.pst02c/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/philio.pst02c/vuedefaut1.jpg)

\

Summary 
------

\

The ZIP-PSM01 detector offers 3 different functions : detection
opening, temperature sensor and light detector. It is
consists of two parts : a detector and a magnet. They are designed
to be placed on a door or window with the magnet fixed on the
opening part and the detector on the fixed part.

Opening the door or window will keep the magnet away from
detector, which will trigger the detector which will send a Z-Wave signal
alarm, if the system is armed (this signal can be used by a
. 

. 

.



.

A Z-Wave controller (remote control, dongle, etc.) is required in order to

existing.

\

Functions 
---------

\

-   : 

-   
    
    

-   

-   

-   

-   Button to include / exclude the detector

-   

-   

-   Small, discreet and aesthetic

-   Ease of use and installation

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave transmitter

-   Food : 

-   Battery life : 

-   Frequency : 868.42 MHz

-   Transmission distance : 

-    : -

-   Brightness sensor : 

-   Dimensions :

-    : 

-    : 

-   Weight : 52g

-   Operating temperature : -10 to 40 ° C

-   Operating humidity : 85% RH max

-   CE standard : EN300 220-1

-   Z-Wave certification : ZC08-13050003

\

Module data 
-----------------

\

-   Mark : Philio Technology Corporation

-   Name : 

-   Manufacturer ID : 316

-   Product Type : 2

-   Product ID : 14

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, press the button 3 times
> inclusion button, according to its paper documentation.

\

![inclusion](images/philio.pst02c/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/philio.pst02c/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/philio.pst02c/commandes.jpg)

\

Here is the list of commands :

\

-   Opening : it is the command which will raise a detection
    opening

-   Temperature : it is the command which allows to go up the
    Temperature

-   Brightness : it is the command which makes it possible to raise the brightness

-   Drums : it's the battery command

\

### Setup of the module 

\

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after
> inclusion.

\

Then if you want to configure the module according to
of your installation, you have to go through the button
"Setup "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/philio.pst02c/config1.jpg)

![Config2](images/philio.pst02c/config2.jpg)

![Config3](images/philio.pst02c/config3.jpg)

\

Parameter details :

\

-   2: allows to adjust the signal sent to the modules in the group
    association 2

-   4: adjusts the brightness level from which the
    signal defined in parameter 2 will be sent to the modules associated with the
    group 2

-   5: operating mode (see the
    manufacturer documentation) Recommended value : 8

-   6: multi-sensor operating mode (see the
    manufacturer documentation) Recommended value : 4

-   7: personalized multi-sensor operating mode (see
    on the manufacturer's documentation) Recommended value : 
    

-   9: allows to define after how long the OFF signal will be
    sent to modules associated with group 2

-   10: allows you to define the duration between two battery reports (one
    unit = parameter 20)

-   11: allows you to define the duration between two self-opening reports
    (one unit = parameter 20)

-   12: allows you to define the duration between two auto
    brightness (one unit = parameter 20) Recommended value : 3

-   13: allows you to define the duration between two auto
    temperature (one unit = parameter 20) Recommended value : 2

-   20: duration of an interval for parameters 10 to 13 Value
    recommended : 10

-   21: temperature variation value in ° F to trigger a
    Report

-   22: value in% of brightness variation to trigger a
    Report Recommended value : 10

\

### Groups 

\

This module has two association groups, only the first is
essential.

\

![Groupe](images/philio.pst02c/groupe.jpg)

\

Good to know 
------------

\

### Alternative visual 

\

![vuewidget](images/philio.pst02c/vuewidget.jpg)

\

Wakeup 
------

\

To wake up this module there is only one way :

-   release the tamper button and press it again

\

Faq. 
------

\

This module wakes up by pressing its tamper button.

\

This module is a battery module, the new configuration will be
taken into account at the next wakeup.

\

IMPORTANT note 
---------------

\

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wakeup, after a
> change of association groups

\

**@sarakha63**
