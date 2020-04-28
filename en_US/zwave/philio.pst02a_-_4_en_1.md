 
=======================

\

-   **The module**

\

![module](images/philio.pst02a/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

\

Summary 
------

\

 : 

 : a detector and a magnet.


.

Opening the door or window will keep the magnet away from
detector, which will trigger the detector which will send a Z-Wave signal
alarm, if the system is armed (this signal can be used by a
. 
. 


. 


.






.



. ,



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

-   Battery life : 2 years

-   Frequency : 868.42 MHz

-   Transmission distance : 

-    : -

-   Brightness sensor : 

-    : 

-    : 

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

-   Name : PST02-A 4 in 1 Multi-Sensor

-   Manufacturer ID : 316

-   Product Type : 2

-   Product ID : 12

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

![inclusion](images/philio.pst02a/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/philio.pst02a/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/philio.pst02a/commandes.jpg)

\

Here is the list of commands :

\

-   Presence : it is the command which will detect a presence detection

-   Opening : it is the command which will raise a detection
    opening

-   Temperature : it is the command which allows to go up the
    Temperature

-   Brightness : it is the command which makes it possible to raise the brightness

-   Sabotage : this is the sabotage command (it is triggered in
    tearing out)

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

![Config1](images/philio.pst02a/config1.jpg)

![Config2](images/philio.pst02a/config2.jpg)

![Config3](images/philio.pst02a/config3.jpg)

\

Parameter details :

\

-   2: allows to adjust the signal sent to the modules in the group
    association 2

-   3: adjusts the sensitivity of the presence sensor (0 :
    disabled 99: maximum sensitivity)

-   4: adjusts the brightness level from which the
    signal defined in parameter 2 will be sent to the modules associated with the
    group 2

-   5: operating mode (see the
    manufacturer documentation) Recommended value : 8

-   6: multi-sensor operating mode (see the
    manufacturer documentation) Recommended value : 4

-   7: personalized multi-sensor operating mode (see
    on the manufacturer's documentation) Recommended value : 6 (for
    have a return to OFF of the presence)

-   8: allows to define the duration in steps of 8 seconds of redetection
    of movement

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

![Groupe](images/philio.pst02a/groupe.jpg)

\

Good to know 
------------

\

### Alternative visual 

\

![vuewidget](images/philio.pst02a/vuewidget.jpg)

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
