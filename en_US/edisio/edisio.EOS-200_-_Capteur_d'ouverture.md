# Edisio EOS 200

**The module**

![eos200.module](images/eos200/eos200.module.jpg)

**The Jeedom visual**

![eos200.vue defaut](images/eos200/eos200.vue-defaut.jpg)

## Summary

Placed on a door, window, garage door, drawer, all opening, this compact and discreet sensor will allow you to know the opening or closing state of the latter.

Depending on the state, the sensor controls the switching on or off of your lights, closing or opening of the shutters, or even the triggering of an alarm via a scenario.

The signal is only sent when the sensor is separated from its magnetic element. Integrated LED indicator signals any changes in state. Low battery level signaled by 3 audible "beeps" on the receiver

## Fonctions

-   Wireless magnetic sensor powered by batteries
-   Detects openings / closings
-   Ultra compact
-   Easy and free installation
-   Signal transmitted instantly during opening / closing
-   Self-protection against lifting
-   Battery level information
-   Wall mounting with screws or double-sided tape

## Technical characteristics

-   Type of module : Edisio transmitter
-   Food : 3VDC (Lithium battery ER14250)
-   Frequency : 868.3 MHz
-   Operating temperature : 0 ° C + 45 ° C
-   Range in free field : 100M
-   Dimensions : 25x79x19mm
-   Degree of protection : IP20
-   Use : Indoors

## Module data

-   Mark : Edisio Smart Home
-   Name : EOS-200

## General configuration

To configure the Edisio plugin and associate a module with Jeedom, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/edisio/).

> **IMPORTANT**
>
> For Jeedom to automatically create your transmitter modules, don't forget to activate the option in the plugin configuration.

### "E" button"

You will find below the button "E" which is the association button of the temperature sensor.

![eos200.bouton e](images/eos200/eos200.bouton-e.jpg)

### Configuration

By default, the sensor is configured in NO (Normally Open)

![eos200.nf no](images/eos200/eos200.nf-no.jpg)

> **NOTE**
>
> You will therefore have to configure your sensor, if you want to have a widget with a door closed when it is.

![eos200.mode](images/eos200/eos200.mode.jpg)

## Association of the sensor with Jeedom

Pairing the motion sensor is easy. Just press the "E" button, located under the sensor. This will be recognized automatically by Jeedom. Just go to the Edisio plugin. You will be able to place it in an object, give it a name and save.

Once your equipment is paired, you should get this :

![eos200.general](images/eos200/eos200.general.jpg)

> **Tip**
>
> So that the widget is present on the dashboard, remember to place your equipment in an object.

### Commands 

Once your equipment is created, you should get the commands associated with the module :

![Commands](images/eos200/eos200.commandes.jpg)

Here is the list of commands :

-   Door : It is the command which indicates if the door is open or closed
-   Drums : Indicates the battery status

### Informations

Once your equipment is associated with Jeedom, various information will be available :

![Commands](images/eos200/eos200.informations.jpg)

-   Creation : Indicates the date on which the equipment was created
-   Communication : Indicates the last communication recorded between Jeedom and the module
-   Drums : Indicates the battery status of the battery modules
-   STATUS : Returns the status of the module

## Alternative visual

![eos200.vue alternative](images/eos200/eos200.vue-alternative.jpg)
