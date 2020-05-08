Nodon Smart Plug - Smartplug 
====================================

\

-   **The module**

\

![module](images/nodon.smartplug/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/nodon.smartplug/vuedefaut1.jpg)

\

Summary 
------

\

The NodOn® remote-controlled socket can be controlled via a home automation system
Z-Wave® or Z-Wave Plus® compatible or directly via other
Z-Wave® or Z-Wave Plus® controllers such as the Soft Remote,
the wall switch or the Octan Remote NodOn®. German standard
(Schuko) or French (Type E), the plug can be connected in 2
sense, head up or head down. Associated with its fine design, these 2
features allow easy integration without clogging up
neighboring barrels on a power strip. Learning to take with sound
controller only takes a few seconds. A local button allows
turn the plug on or off directly.

\

Functions 
---------

\

-   Detection of mains current loss

-   Ergonomique: Possibility to connect the head-up / head-up socket
    bas

-   Intelligent alarm management

-   Improved radio range

-   Maximum amperage: 16A

\

Technical characteristics 
---------------------------

\

-   Food : 230V AC +/- 10% - 50Hz

-   Maximum power : 3000W continuous / 3500W cyclic
    (Resistive load) Intrinsic consumption : &lt;1W

-   Operating temperature : 0 ° C to 40 ° C - Altitude : 2000m

-   Z-Wave® radio protocol : 868.4MHz - 500 Series - Z-Wave compatible
    Plus® SDK 06.51.01

-   Scope: 40m indoor / 80m outdoor

-   Dimensions: 104 \*51 \*36mm

-   2 years warranty

-   EU type

\

Module data 
-----------------

\

-   Mark : Nodon

-   Last name : Smartplug

-   Manufacturer ID : 357

-   Product Type : 1

-   Product ID : 1

\

Configuration 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **Important**
>
> To put this module in inclusion mode, press the button
> until the light turns red, according to its documentation
> paper.

\

![inclusion](images/nodon.smartplug/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/nodon.smartplug/information.jpg)

\

### Orders 

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Orders](images/nodon.smartplug/commandes.jpg)

\

Here is the list of commands :

\

-   State : It is the command which allows to know the status of the
    socket (On / Off)

-   We : This is the command that turns on the outlet

-   Off : It is the command which makes it possible to extinguish the catch

-   Status : Used to find out whether the outlet is powered or not
    

\

Note that on the dashboard, the status information, ON / OFF can be found on
the same icon.

\

### Configuration of the module 

\

You can configure the module according to your
installation. To do this, go to the "Configuration" button of the
.

\

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/nodon.smartplug/config1.jpg)

![Config1](images/nodon.smartplug/config2.jpg)

\

Parameter details :

\

-   1 : 
    

-   2 : 
    
    . 
    . It is
    .

-   3 : .

-   4 : Le paramètre force l'état de la Smart Plug à « ON » (Smart
    . 
    

-    : 
    .
    :
    

### Groups 

\

.

\

![Groupe](images/nodon.smartplug/groupe.jpg)

\

-   Group 1 - Lifeline : This group is generally used for
    transfer information from the Smart Plug to the main controller
    of the network.

-   
    ,
    
    
    
    

-   
    ,
    
    
    
    .

-   
    
    . 
    est un « Notiﬁcation Report : 
    .

-   
    .

-   
    
    

-   
    .

-   
    

\

> **Important**
>
> 

Good to know 
------------

\

### Specificities 

\

-   
    . 
    
    .

\

Wakeup 
------

\

No notion of wakeup on this module.

\

Faq. 
------

\



 : .

\

 ? 
 ? 
 ?

\

**@sarakha63**
