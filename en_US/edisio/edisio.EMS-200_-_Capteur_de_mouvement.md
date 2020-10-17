# Edisio EMS 200

**The module**

![ems200.module](images/ems200/ems200.module.jpg)

## Summary

Placed in a hallway, living room, garage of your house for example, the motion sensor detects a presence, the change of state is instantaneous.

Thanks to its wide viewing angle and range, it secures a wide perimeter. Integrated LED indicator signals any change of state.

## Fonctions

-   Detects movement, even in complete darkness
-   Ultra compact
-   Signal transmitted instantly upon detection
-   Self-protection when pulling
-   Ease of use and installation
-   Wall mounting with screws or double sided
-   Battery level information

## Technical characteristics

-   Type of module : Edisio transmitter
-   Food : 3VDC (Lithium battery ER14250)
-   Frequency : 868.3 MHz
-   Operating temperature : 0 ° C + 45 ° C
-   Scope in free field : 100M
-   Detection range : 6M
-   Dimensions : 25x79x19mm
-   Degree of protection : IP20
-   Use : Indoors

## Module data

-   Mark : Edisio Smart Home
-   Last name : EMS-200

## General configuration

To configure the Edisio plugin and associate a module with Jeedom, refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/edisio/).

> **Important**
>
> So that Jeedom automatically creates your transmitter modules, don't forget to activate the option in the plugin configuration.

> **Tip**
>
> Placement is recommended at a height of 150 cm and close to the desired felt temperature.

### Button "E"

You will find the "E" button which is the temperature sensor association button.

![ems200.bouton e](images/ems200/ems200.bouton-e.jpg)

### Detection

The sensor detects the slightest movement within a radius of about 6m

![ems200.detection](images/ems200/ems200.detection.jpg)

### Setting the timer

By default, the timer is disabled. This parameter is used to configure the delay :

![ems200.minuterie](images/ems200/ems200.minuterie.jpg)

## Association of the sensor with Jeedom

The association of the motion sensor is as easy as pie. Just press the "E" button, located under the sensor. This will be recognized automatically by Jeedom. You just have to go to the Edisio plugin. You can then place it in an object, give it a name and save.

Once you've paired your gear, you should get this :

![ems200.general](images/ems200/ems200.general.jpg)

> **Tip**
>
> So that the widget is present on the dashboard, remember to place your equipment in an object.

### Commandes

Once your equipment is created, you should get the commands associated with the module :

![Orders](images/ems200/ems200.commande.jpg)

Here is the list of commands :

-   Presence : This is the command that indicates whether a presence is detected
-   Drums : Indicates battery status

### Informations

Once your equipment is associated with Jeedom, various information will be available :

![Orders](images/ems200/ems200.informations.jpg)

-   Creation : Indicates the date on which the equipment to was created
-   Communication : Indicates the last communication recorded between Jeedom and the module
-   Drums : Indicates the battery status of battery modules
-   Status : Returns the status of the module
