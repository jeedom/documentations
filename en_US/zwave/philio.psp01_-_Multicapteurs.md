 
============

\

-   **The module**

\

![module](images/philio.psp01/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/philio.psp01/vuedefaut1.jpg)

\

Summary 
------

\

 : 
.




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

-   Weight : 

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

-   Product ID : 2

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

![inclusion](images/philio.psp01/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/philio.psp01/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/philio.psp01/commandes.jpg)

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


.

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
Settings)

\

![Config1](images/philio.psp01/config1.jpg)

![Config2](images/philio.psp01/config2.jpg)

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

-   5:  : 
    

-   6: 
    : 

-   9: allows to define after how long the OFF signal will be
    sent to modules associated with group 2

-   10: allows you to define the duration between two battery reports (one
    

-   12: 
    

-   13: 
    

\

### Groups 

\

This module has two association groups, only the first is
essential.

\

![Groupe](images/philio.psp01/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

\

> **Tip**
>
> 
> 
> . 
> . 
> 
> .

\

### Alternative visual 

\

![vuewidget](images/philio.psp01/vuewidget.jpg)

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

".

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
