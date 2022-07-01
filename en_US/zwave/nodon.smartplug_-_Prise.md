# Nodon Smart Plug - Smartplug

**The module**

![module](images/nodon.smartplug/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/nodon.smartplug/vuedefaut1.jpg)

## Summary

The NodOn® remote-controlled socket can be controlled via a Z-Wave® or Z-Wave Plus® compatible home automation unit or directly via other Z-Wave® or Z-Wave Plus® controllers such as the Soft Remote, the wall switch or the Octan Remote NodOn®. German (Schuko) or French (Type E) standard, the plug can be plugged in both directions, upside down or upside down. Combined with its slim design, these 2 characteristics allow easy integration, without blocking the neighboring barrels on a power strip. Learning the socket with its controller only takes a few seconds. A local button allows the socket to be switched on or off directly.

## Fonctions

-   Mains power loss detection
-   Ergonomique: Possibility to connect the plug head up / head down
-   Intelligent alarm management
-   Improved radio range
-   Max Amperage: 16A

## Technical characteristics

-   Feed : 230V AC +/-10% - 50Hz
-   Max power : 3000W continuous / 3500W cyclic (Resistive load) Intrinsic consumption : &lt;1W
-   Operating temperature : 0°C to 40°C - Altitude : 2000m
-   Z-Wave® wireless protocol : 868.4MHz – 500 Series – Compatible Z-Wave Plus® SDK 06.51.01
-   Scope: 40m indoor / 80m outdoor
-   Dimensions: 104\*51\*36mm
-   2 years warranty
-   EU-type

## Module data

-   Mark : Nodon
-   Last name : Smartplug
-   Manufacturer ID : 357
-   Type Product : 1
-   Product ID : 1

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press the button until the light turns red, in accordance with its paper documentation.

![inclusion](images/nodon.smartplug/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/nodon.smartplug/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/nodon.smartplug/commandes.jpg)

Here is the list of commands :

-   State : This is the command that allows you to know the status of the socket (On/Off)
-   We : This is the command that allows you to turn on the socket
-   Off : This is the command that allows you to turn off the socket
-   Status : Allows you to know if the socket is powered or not (power cut detection / disconnection)

Note that on the dashboard, the Status, ON/OFF information is found on the same icon.

### Module configuration

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the Jeedom Zwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/nodon.smartplug/config1.jpg)

![Config1](images/nodon.smartplug/config2.jpg)

Parameter details :

-   1 : This parameter deﬁnes the status (ON/OFF) of the Smart Plug after a power outage or after plugging in
-   2 : This parameter is used to configure the power failure/return notification reports, as well as the associated groups (Groups 4, 5, 6, 7, 8). Several combinations are possible (refer to the paper documentation or the help bubble in jeedom). It is recommended to set this parameter to 1.
-   3 : This parameter enables or disables groups 2 and 3.
-   4 : Le paramètre force l'état de la Smart Plug à « ON » (Smart Plug activée). When the parameter is activated, it is not possible to turn off the Smart Plug (local or radio)
-   Parameters 5 to 20 : Through the configuration parameters \#5 à \#20, it is possible to conﬁgure up to 8 different alarms. In order to properly configure your alarms, the online form: www.nodon.en/support/asp3/alarm will guide you

### Groupes

This module has 8 association groups.

![Groupe](images/nodon.smartplug/groupe.jpg)

-   Group 1 – Lifeline : This group is generally used to report information from the Smart Plug to the main network controller.
-   Group 2 – Smart Plug status monitoring When the Smart Plug is activated (respectively deactivated) via the local button, it sends an activation (respectively deactivation) command to the associated devices. No command is sent if the change of state of the Smart Plug was caused by a radio command
-   Group 3 – Complementary status monitoring When the Smart Plug is activated (respectively deactivated) via the local button, it sends a deactivation (respectively activation) command to the associated devices. No command is sent if the change of state of the Smart Plug was caused by a radio command.
-   Group 4 – Power Failure Notiﬁcation When the Smart Plug detects a power failure or power return, a notiﬁcation report is sent to associated devices. Le rapport envoyé est un « Notiﬁcation Report : Power Management - AC disconnected / Re-connected).
-   Group 5 – Activation on power failure When the Smart Plug detects a power failure, it activates the associated devices.
-   Group 6 – Deactivation on power failure When the Smart Plug detects a power failure, it deactivates the associated devices
-   Group 7 – Activation on power return When the Smart Plug detects a power return, it activates the associated devices.
-   Group 8 – Deactivation on power return When the Smart Plug detects a power return, it deactivates the associated devices

> **Important**
>
> At least Jeedom should be in groups 1 and 4

## Good to know

### Specificities

-   No need to mess about plugging/unplugging the plug to observe the alarm. This one will only work about 3 times. Beyond that, the socket must remain powered for a short time to recharge the internal battery.

## Wakeup

No notion of wakeup on this module.
