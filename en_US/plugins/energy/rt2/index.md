# EcoRT2 plugin

This plugin allows you to manage an IPX 800 v4.

# Plugin configuration

After downloading the plugin, you just need to activate it, there is no configuration at this level.

> **NOTE**
>
> You can see on this page the state of the daemon that monitors ecoRT2.

# Equipment configuration

The configuration of ecoRT2 equipment is accessible from the plugin menu then home automation protocol :

Here you find all the configuration of your equipment :

-   **EcoRT2 equipment name** : name of your ecoRT2 equipment.
-   **Parent object** : indicates the parent object to which the equipment belongs.
-   **Activate** : makes your equipment active.
-   **Visible** : makes your equipment visible on the dashboard.
-   **Category** : equipment categories (it can belong to several categories).
-   **IP** : The ecoRT2 ip.
-   **API key** : ecoRT2 API key (by default the API key is apikey).
-   **Extension** : here you have to indicate the extensions present on the ecoRT2 so that jeedom can query them. Example for enOcean you must put ENO (if you have several, you must separate them with commas (``,``)). All extensions are normally supported, for the code of the extension to put it is necessary to refer to the documentation of this one.

The default plugin does not create anything. It will be up to you to do this according to your configuration, but you will be guided.

# Commandes

## Action

You have the types of action :

-   **We** : allows you to set an output (or virtual input) to 1, or to assign a value to an analog input (or counter).
-   **Off** : allows to set to 0 an output (or virtual input).
-   **Toggle** : allows to reverse the state of an output (or virtual input).

You have the types of actuators :

-   **Relay**
-   **Virtual output**
-   **Counter**
-   **Pilot wire**

> **NOTE**
>
> Some types of actuators may be hidden depending on the type of action.

Then depending on the type of action and the actuator you have several parameters which can be :

-   relay number
-   virtual output number
-   counter number and operation (ex +200 or -100)
-   pilot wire number and order value (0 comfort, 1 eco, 2 frost-free, 3 off, 4 comfort-1, 5 comfort-2)

## Info

You have different types :

-   Instant post
-   Relais
-   Virtual output
-   Digital input
-   Compteur
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

For each type jeedom will ask you the number of the desired information.
