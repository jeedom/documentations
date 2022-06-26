# 

**The module**

![module](images/greenwave.Powernode1/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)

## Summary

.

.

. .

. For example " blue for the bedroom ". . You can also adjust this wheel on a padlock. .

 : sockets on or off, limited radio range, inclusion and exclusion mode.

. . .

## Fonctions

-   
-   
-   
-   ON/OFF function
-   Possibility of assigning a number and a color to it in order to differentiate the different PowerNodes of the same installation
-   
-   Overcurrent protection
-   Bright status indicator

## Technical characteristics

-   Feed : 250V\~AC, 50Hz
-   Max charge current : 10A
-   Maximum load power : 2400W (@240V)
-   Standby consumption : 0.4W
-   Measurement accuracy : ±0.1W
-   Overcurrent protection : 10A internal fuse
-   Plug type : DIN49440 / CEE 7/7 (Schuko)
-   Radio Frequency Z-Wave : 868.42MHz
-   Maximum Z-Wave Range : 30m
-   Operating temperature : 0°C to +25°C
-   Storage temperature : -20°C to +60°C
-   Maximum humidity : 5% to 90%
-   IP class (Humidity tolerance) : IP20

## Module data

-   Mark : GreenWave
-   Last name : ]
-   Manufacturer ID : 153
-   Type Product : 2
-   Product ID : 2

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> .

![inclusion](images/greenwave.Powernode1/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/greenwave.Powernode1/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/greenwave.Powernode1/commandes.jpg)

Here is the list of commands :

-   State : 
-   We : This is the command that allows you to turn on the socket
-   Off : This is the command that allows you to turn off the socket
-    : 
-    : 

Note that on the dashboard the ON/OFF/STATUS commands are grouped together in a single button.

### Module Setup

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/greenwave.Powernode1/config1.jpg)

As you can see there is not much configuration for this module.

Parameter details :

-   1 :  : minimum number of seconds between two communications (if this time is exceeded the socket button will flash)
-   2 : Selected wheel color (detected automatically)

### Groupes

.

![Groupe](images/greenwave.Powernode1/groupe.jpg)

## Good to know

.

### Reset

![Config2](images/greenwave.Powernode1/config2.jpg)

You can reset your consumption counter by clicking on this button available in the System tab. You have to choose PressButton.

### Specificities

## Wakeup

No notion of wakeup on this module.
