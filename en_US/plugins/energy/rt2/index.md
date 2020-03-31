This plugin allows you to manage an IPX 800 v4

Plugin configuration
=======================

After downloading the plugin, you just need to activate it,
there is no configuration at this level.

> **NOTE**
>
> You can see on this page the state of the daemon that monitors ecoRT2

Equipment configuration
=============================

The configuration of ecoRT2 equipment is accessible from the menu
plugin then home automation protocol :

Here you find all the configuration of your equipment :

-   **EcoRT2 equipment name** : name of your ecoRT2 equipment,

-   **Parent object** : indicates the parent object to which belongs
    equipment,

-   **Activate** : makes your equipment active,

-   **Visible** : makes your equipment visible on the dashboard,

-   **Category** : equipment categories (it may belong to
    multiple categories),

-   **IP** : The ecoRT2 ip,

-   **API key** : ecoRT2 API key (by default API key
    is apikey)

-   **Extension** : here you must indicate the extensions present on
    ecoRT2 so that jeedom can interrogate them. EnOcean example
    you must put ENO (if you have several you must separate them
    by ,). All extensions are normally supported, for
    the code of the extension to put you must refer to the
    documentation thereof.

The default plugin does not create anything, it will be up to you to do so by
depending on your configuration but you will be guide.

Command
========

Action
------

You have the types of action :

-   **We** : allows you to set an output (or virtual input) to 1, or
    assign a value to an analog input (or counter)

-   **Off** : allows you to set an output (or virtual input) to 0

-   **Toggle** : allows to reverse the state of an output (or
    virtual entrance)

You have the types of actuators :

-   **Relay**

-   **Virtual output**

-   **Counter**

-   **Pilot wire**

> **NOTE**
>
> Certain type of actuator can be hidden depending on the type
> Action

Then depending on the type of action and the actuator you have
several parameters which can be :

-   relay number

-   virtual output number

-   counter number and operation (ex +200 or -100)

-   pilot wire number and order value (0 comfort, 1 eco, 2 frost-free, 3 off, 4 comfort-1, 5 comfort-2)

Info
----

You have different types :

-   Instant post
-   Relay
-   Virtual output
-   Digital input
-   Counter
-   EnOcean
-   Counter index
-   Torus index
-   Toro consumption index
-   Distribution torus index
-   Tele-information index
-   Position index
-   Index / Post day
-   Total counter price
-   Total torus price
-   Total consumption torus price
-   Total distribution toroid price
-   Combination of tele-information prices
-   Cumulative post price
-   Price accumulation / Post day
-   Pilot wire

For each type jeedom will ask you the number of the desired information
