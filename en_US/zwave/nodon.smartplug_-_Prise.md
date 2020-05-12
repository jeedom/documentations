# Nodon Smart Plug - Smartplug

**The module**

![module](images/nodon.smartplug/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/nodon.smartplug/vuedefaut1.jpg)

## Summary

The NodOn® remote-controlled socket can be controlled via a Z-Wave® or Z-Wave Plus® compatible home automation system or directly via other Z-Wave® or Z-Wave Plus® controllers such as the Soft Remote, the wall switch or the Octan Remote NodOn®. German standard (Schuko) or French (Type E), the plug can be plugged in 2 directions, head up or head down. Associated with its fine design, these 2 characteristics allow easier integration, without clogging neighboring barrels on a power strip. Learning the socket with its controller requires only a few seconds. A local button allows you to switch the socket on or off directly.

## Fonctions

-   Line current loss detection
-   Ergonomique: Possibility of plugging the head up / head down socket
-   Intelligent alarm management
-   Improved radio range
-   Maximum amperage: 16A

## Technical characteristics

-   Food : 230V AC +/- 10% - 50Hz
-   Maximum power : 3000W continuous / 3500W cyclic (Resistive load) Intrinsic consumption : &lt;1W
-   Operating temperature : 0 ° C to 40 ° C - Altitude : 2000m
-   Z-Wave® radio protocol : 868.4MHz - 500 Series - Z-Wave Plus® SDK 06.51.01 compatible
-   Scope: 40m indoor / 80m outdoor
-   Dimensions: 104 \*51 \*36mm
-   2 years warranty
-   EU type

## Module data

-   Mark : Nodon
-   Name : Smartplug
-   Manufacturer ID : 357
-   Product Type : 1
-   Product ID : 1

## Configuration

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press the button until the light turns red, according to its paper documentation.

![inclusion](images/nodon.smartplug/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/nodon.smartplug/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/nodon.smartplug/commandes.jpg)

Here is the list of commands :

-   State : It is the command which makes it possible to know the status of the socket (On / Off)
-   We : This is the command that turns on the outlet
-   Off : It is the command which makes it possible to extinguish the catch
-   Status : Used to find out whether the outlet is powered or not (Power cut / disconnection detection)

Note that on the dashboard, the State, ON / OFF information is found on the same icon.

### Configuration of the module

You can configure the module according to your installation. To do this, go through the "Configuration" button of the Zwave plugin from Jeedom.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/nodon.smartplug/config1.jpg)

![Config1](images/nodon.smartplug/config2.jpg)

Parameter details :

-   1 : This parameter defines the state (ON / OFF) of the Smart Plug after a power failure or after connection
-   2 : This parameter allows you to configure the reports of power cut / return notification, as well as the associated groups (Groups 4, 5, 6, 7, 8). Several combinations are possible (refer to the paper documentation or the help bubble in jeedom). It is recommended to set this parameter to 1.
-   3 : This parameter enables groups 2 and 3 to be activated or deactivated.
-   4 : Le paramètre force l'état de la Smart Plug à « ON » (Smart Plug activée). When the parameter is activated, it is not possible to switch off the Smart Plug (local or radio)
-   Parameters 5 to 20 : Through configuration parameters \#5 à \#20, it is possible to configure up to 8 different alarms. In order to properly configure your alarms, the online form: www.nodon.en / support / asp3 / alarm will guide you

### Groupes

This module has 8 association groups.

![Groupe](images/nodon.smartplug/groupe.jpg)

-   Group 1 - Lifeline : This group is generally used to report information from the Smart Plug to the main network controller.
-   Group 2 - Monitoring the status of the Smart Plug When the Smart Plug is activated (respectively deactivated) via the local button, it sends an activation (respectively deactivation) command to the associated devices. No command is sent if the change of state of the Smart Plug was caused by a radio command
-   Group 3 - Follow-up of the complementary status When the Smart Plug is activated (respectively deactivated) via the local button, this sends a deactivation (respectively activation) command to the associated devices. No command is sent if the change of state of the Smart Plug was caused by a radio command.
-   Group 4 - Notification of power failure When the Smart Plug detects a power failure or a return of power, a notification report is sent to the associated devices. Le rapport envoyé est un « Notiﬁcation Report : Power Management - AC disconnected / Re-connected).
-   Group 5 - Activation on power failure When the Smart Plug detects a power failure, it activates the associated devices.
-   Group 6 - Deactivation on power failure When the Smart Plug detects a power failure, it deactivates the associated devices
-   Group 7 - Activation on current return When the Smart Plug detects a current return, it activates the associated devices.
-   Group 8 - Deactivation on return of current When the Smart Plug detects a return of current, it deactivates the associated devices

> **IMPORTANT**
>
> At a minimum Jeedom should be found in groups 1 and 4

## Good to know

### Specificities

-   It is useless to have fun plugging / unplugging the socket to observe the alarm. This will only work about 3 times. Beyond the plug must remain powered for a while to recharge the internal battery.

## Wakeup

No notion of wakeup on this module.
