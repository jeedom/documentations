# Edisio ETS 200

**The module**

![ets200.module](images/ets200/ets200.module.jpg)

**The Jeedom visual**

![ets200.vue defaut](images/ets200/ets200.vue-defaut.jpg)

## Summary

Placed in a room, the desired room temperature will automatically rise. In addition, associated with an EMR-2000 or EDR-B4 type receiver (4 outputs) you will have a thermostat connected and controllable from anywhere in the world through the internet.

The signal is only sent after detecting a temperature difference of 0.5 ° C or 1 ° C or every 5 minutes. In addition, the sensor is compact and discreet.

Integrated LED indicator signals any change of state.

## Fonctions

-   Battery-powered wireless temperature sensor
-   Ultra compact
-   Signal transmitted instantly when the temperature rises or falls
-   Ease of use and installation
-   Wall mounting with screws or double sided
-   Battery level information

## Technical characteristics

-   Type of module : Edisio transmitter
-   Use : Indoors
-   Food : 3VDC (Lithium battery ER14250)
-   Autonomy : Up to 3 years
-   Frequency : 868.3 MHz
-   Operating temperature : 0 ° C + 45 ° C
-   Scope in free field : 100M
-   Dimensions : 25x79x19mm
-   Degree of protection : IP20

## Module data

-   Mark : Edisio Smart Home
-   Last name : ETS-200

## General configuration

To configure the Edisio plugin and associate a module with Jeedom, refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/edisio/).

> **Important**
>
> So that Jeedom automatically creates your transmitter modules, don't forget to activate the option in the plugin configuration.

> **Tip**
>
> Placement is recommended at a height of 150 cm and close to the desired felt temperature.

### Button "E"

You will find below the button "E" which is the button of association of the temperature sensor.

![ets200.bouton e](images/ets200/ets200.bouton-e.jpg)

### Setting the temperature delta

By default, the temperature delta is programmed at 1 ° C (+/- 10%) to optimize battery life. You have the possibility to adjust this parameter:

![ets200.delta](images/ets200/ets200.delta.jpg)

## Association of the sensor with Jeedom

The association of the temperature sensor is child's play. Just press the "E" button, located under the sensor. This will be recognized automatically. Place it in an object, give it a name and save.

![ets200.association](images/ets200/ets200.association.jpg)

Once, your associated equipment, you should get this :

![ets200.general](images/ets200/ets200.general.jpg)

### Commandes

Once your equipment is created, you should get the commands associated with the module :

![Orders](images/ets200/ets200.commandes.jpg)

Here is the list of commands :

-   Temperature : This is the command that indicates the temperature measured
-   Drums : Indicates battery status

### Informations

Once your equipment is associated with Jeedom, various information will be available :

![Orders](images/ets200/ets200.informations.jpg)

-   Creation : Indicates the date on which the equipment was created
-   Communication : Indicates the last communication recorded between Jeedom and the micro-module
-   Drums : Indicates the battery status of battery modules
-   Status : Returns the status of the module
