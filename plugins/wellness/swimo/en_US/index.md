# Swimo plugin

This plugin allows you to connect Swimo pool controllers with Jeedom.
The plugin makes it possible to recover the values of the various sensors as well as to control the actuators. (change of modes, On / Off, change of setpoints)

# Plugin configuration

After downloading the plugin, you just need to activate it, then configure some elements :

- the swimo IP address
- swimo serial
- The apikey of swimo

![swimo](../images/swimo1.png)

# Equipment configuration

The synchronization of the equipment makes it possible to recover the probes and actuators configured on the Swimo.

![swimo2](../images/swimo2.png)

Once configured in an object, you will get your elements in the dashboard :

![swimo3](../images/swimo3.png)

> **NOTE**
>
> - Data is updated every 5 minutes or during an action.
> - Setpoints are not displayed by default.
> They are fully usable via the scenarios.
