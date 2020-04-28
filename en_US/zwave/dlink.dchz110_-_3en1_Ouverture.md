" 
====================================

\

-   **The module**

\

![module](images/dlink.dchz110/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

\

Summary 
------

\

 : detection
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

.

\

Functions 
---------

\

-   : 

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

 :
<http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf>

 :
<http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF>

![caracteristiques


\

Module data 
-----------------

\

-   Mark : 

-   Model : 
    

-   Maker : 

-   Manufacturer ID : ]

-   Product Type : ]

-   Product ID : ]

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
> 
> 
> .
> 
> 
> . 
> 

\

![config inclusion](images/dlink.dchz110/config-inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/dlink.dchz110/apres_inclusion.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/dlink.dchz110/commandes.jpg)

\

Here is the list of commands :

\

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
> 
> .
> .

\

Then it is necessary to configure the module in
depending on your installation. This requires going through the button
"Setup "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
Settings)

\

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

\

Parameter details :

\

-   2: allows to adjust the signal sent to the modules in the group
    association 2

-   4: adjusts the brightness level from which the
    signal defined in parameter 2 will be sent to the modules associated with the
    group 2

-   5: operating mode (see the
    

-   6: multi-sensor operating mode (see the
    .  : 7

-   7: 
    .  : 
    

-   9: allows to define after how long the OFF signal will be
    sent to modules associated with group 2

-   10: allows you to define the duration between two battery reports (one
    unit = parameter 20)

-   11: allows you to define the duration between two self-opening reports
    (one unit = parameter 20)

-   12: allows you to define the duration between two auto
    .  : 6

-   13: allows you to define the duration between two auto
    .  : 2

-   20: 
    recommended : 10

-   21: temperature variation value in ° F to trigger a
    Report

-   22: 
    .  : 10

\

### Groups 

\

This module has two association groups, only the first is
essential.

\

![Groupe](images/dlink.dchz110/groupe.jpg)

\

Good to know 
------------

: Mermaid


\

Alternative visual 
-----------------

\

![Groupe](images/dlink.dchz110/autre_visuel_jeedom.jpg)

\

Wakeup 
------

\

To wake up this module there is only one way :

-   Release the association button and press it again

-   Lower the wake-up interval in the module configuration / system
    (in seconds)

\

Faq. 
------

\

This module wakes up by pressing its association button.

\

This module is a battery module, the new configuration will be
taken into account at the next wakeup. (association button for
force, hence the interest of not installing the module before its
good configuration)

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

