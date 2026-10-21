# Z-Wave JS plugin

The Z-Wave JS plugin provides **full control over the Z-Wave home automation protocol in Jeedom**, building on the work done with the highly regarded **Z-Wave JS UI** library.

The Z-Wave JS plugin ensures reliable and secure transmissions by using the **MQTT protocol**, while also offering advanced Z-Wave network management capabilities to the most experienced users.

>**IMPORTANT**
>
>This plugin is compatible with Debian 11 "Bullseye" and is, therefore, the official plugin of choice for managing your Z-Wave network in Jeedom.

# Setup

After installing and activating the plugin, the installation of dependencies should begin unless automatic management has been disabled beforehand. In that case, you’ll need to click the **Restart** button to begin this installation phase. Since the official **MQTT Manager** plugin is one of the required dependencies, it will be automatically installed and activated during the process if it isn’t already.

The remaining steps involve downloading, compiling, and configuring the **Z-Wave JS UI** library.

>**INFORMATION**
>
>Since the initial installation of dependencies includes a compilation phase, it may take several tens of minutes depending on your hardware configuration. Subsequent updates to dependencies are much faster to install.

## Plugin Setup

When configuring the plugin, the most important step is to correctly select the **Z-Wave controller port** that corresponds to the physical interface to which the controller is connected.

Other possible settings are:

- **Apply the recommended configuration**: directly applies the configuration set recommended by the Jeedom team when adding a new module *(recommended)*.

- **Remove Excluded Devices**: When checked, this option automatically removes excluded devices from the Z-Wave network. Otherwise, the devices remain in Jeedom even if they have been excluded from the network. The device must then be removed manually or reused by assigning it a new Z-Wave identifier.

- **MQTT prefix**: allows you to specify the prefix to use in MQTT *(`zwave` (by default)*.

### Security keys

Security keys must be kept in a safe place. If you lose these keys, the devices in secure mode will need to be re-paired. You can specify the keys; if the fields are empty or invalid, the plugin will generate them, and you can view them later.

>**IMPORTANT**
>
>If your controller has been used with the Openzwave plugin and you included modules in secure mode, the S0 key is: `0102030405060708090A0B0C0D0E0F10`.

## MQTT Manager

As explained in the introduction, the Z-Wave JS plugin requires support for the MQTT protocol to communicate; therefore, the official **MQTT Manager** plugin will facilitate these communications.

Several scenarios are possible:

- **You're not using an MQTT broker yet**: In this case, you don't need to do anything. The **Z-Wave JS** and **MQTT Manager** plugins will automatically exchange the necessary information and configurations *(a broker `Mosquitto` (will be installed locally on the machine, among other things)*.

- **If you're already using the MQTT Manager plugin**: No action is required; the Z-Wave JS plugin will automatically retrieve the connection information for the MQTT broker.

<!-- - **You are already using an MQTT broker via a plugin other than MQTT Manager**: In this case, you must select **remote broker** mode and enter the connection information *(address and authentication)* in the MQTT Manager plugin configuration.

- **If you want to use an MQTT broker running in Docker**: Simply select the **local Docker broker** mode in the MQTT Manager plugin configuration before installing `Mosquitto`. -->

In any case, the MQTT Manager plugin daemon must be started before you can proceed. Otherwise, a message will appear warning you, which will also prevent the Z-Wave JS daemon from starting.

## Open Zwave Plugin

It is also important to address the scenario where the OpenZwave plugin is running alongside the Z-Wave JS plugin, such as when switching from one to the other *(See paragraph [**Migration from OpenZwave**](#Migration%20depuis%20OpenZwave))*.

First of all, it’s important to know that there is absolutely no risk involved in using the Z-Wave JS and OpenZwave plugins simultaneously. Even if you encounter an issue with the Z-Wave JS plugin, all you need to do is stop its daemon and restart the OpenZwave plugin’s daemon to restore a Z-Wave network that is exactly the same and fully functional.

You must therefore disable automatic management and then stop the OpenZwave plugin daemon in order to start the Z-Wave JS plugin daemon. Again, if you do not do this, a message will warn you, preventing the Z-Wave JS daemon from starting.

>**IMPORTANT**
>
>Do not remove any devices from the OpenZwave plugin prematurely, even if they are disabled during testing!

## 1st start of the daemon

Unless otherwise indicated, the Z-Wave JS daemon can now be started. Otherwise, a message should appear on the plugin's configuration page to identify the reason for the blockage.

If you use the Z-Wave JS plugin with a blank controller, the Z-Wave network is immediately started and available, ready for module additions.

When using a controller that is already part of a Z-Wave network, let the plugin do its job; it will automatically add the devices to Jeedom as it polls the modules. The initial full discovery of a Z-Wave network may therefore take some time, depending on the type of modules used and their communication frequency.

The modules are being introduced in two phases:
- First of all, with their `node id` no image and no identification.
- They are then identified in a subsequent step.

Once all AC-powered modules have been initialized and thus identified, it is important to wake up the battery-powered modules or wait for them to wake up on their own. Only then can the network be considered fully up and running.

>**INFORMATION**
>
>Unlike the OpenZwave plugin, after this initial setup phase, network restarts are instantaneous thereafter.

If, at the end of this phase *(which, as a reminder, can be lengthy)*, you find that a module that was supported by the Openzwave plugin is not supported by the Z-Wave JS plugin, please refer to the section [**Module not recognized or recognized incorrectly**](#Module%20non%20ou%20mal%20reconnu).

## Module configuration

Unlike the Openzwave plugin, there is no dedicated section for configuring modules. Instead, modules are configured using the Configuration class command. This command is therefore listed among the module’s other class commands under **Values**.

### Node

This button on a device's page allows you to view the module's information across several tabs:

- **Summary**: Displays all module identification information as well as status information.

- **Actions**: Allows you to perform technical actions on a node. Each action is briefly described here.
>**INFORMATION**
>
>You should normally never have to change these settings; the plugin handles them automatically.

- **Statistics**: As the name suggests, this feature allows you to view the module's communication statistics.

- **Tree**: groups all the preceding information into a technical JSON format.

### Values

This button, located on a device's page, displays a list of all Z-Wave class commands managed by the module.

Each one can be expanded by clicking on it to view all the commands *(useful or otherwise)* related to that command class.

This window offers many possibilities:

- View the data values,
- Change the value of an action,
- Change the module settings,
- Automatically create an "info" command in Jeedom *(if you need it or if it's missing from your Jeedom configuration)*,
- Automatically create an action command in Jeedom *(if you need one or if it's missing from the Jeedom configuration)*,
- Configure polling *(forced communication)*. Use this only if the module's default behavior does not allow for any other option—which is to say, almost never.

### Band

This button, located on a device's page, lets you manage the module's associations and allows you to:

- View currently active associations,
- Delete them,
- Add more.

## Inclusions/Exclusions

The **Inclusions** button on the page listing all JS Z-Wave devices allows you to switch the controller to **Inclusion** mode *(default, S0, S2)* or **Exclusion** mode.

>**INFORMATION**
>
>At this time, S2 inclusions are not possible directly from the plugin. This feature will be implemented in a future update, as the plugin's engine is already fully S2-compatible.

## To sychronize

Remember, in Z-Wave, all the modules that make up the network are directly connected to the controller. Some controllers with a battery *(such as the Aeon-labs Z-Stick GEN5)* even allow you to add modules without being plugged into a power outlet.

The **Synchronize** button will then automatically create the devices detected by the controller in Jeedom. Similarly, devices corresponding to peripherals excluded from the controller will be automatically deleted if the **Delete Excluded Peripherals** option is enabled in the plugin’s general settings.

## Z-Wave network

### Summary

### Shares

### Statistics

### Network graph

### Routing table

## Health

## Statistics

# Compatibility

# Troubleshooting and diagnostics

## Migration from OpenZwave

Before considering a permanent switch from the OpenZwave plugin to the Z-Wave JS plugin, it is essential to ensure that all modules in the network are fully supported. This step can easily take several days to validate all possibilities and scenarios.

Next, once you're certain that the OpenZwave plugin is no longer necessary, you can use the [**Replacement of equipment and commands**](https://doc.jeedom.com/en_US/core/4.3/replace){:target="\_blank"} Core to quickly and easily migrate your existing devices to the new plugin.

## Module not or badly recognized

If you find that a module is not recognized or is recognized incorrectly by the Z-Wave JS plugin **even though it was supported by the OpenZwave plugin**, you should first make sure that the data in the **Values** window *(accessible from the device page)* updates correctly when the module is physically activated.

Next, once you are certain that the module itself is recognized and that its values are updating, if certain commands still do not work, you will need to[open a Jeedom support request](https://doc.jeedom.com/en_US/premiers-pas/#Les%20demandes%20de%20support%20(ou%20tickets)){:target="\_blank"} Be sure to include the following information:
- Manufacturer and exact model number of the module in question,
- Description of non-functional commands,
- Screenshot of **Node Information** in the window of the same name,
- Screenshots of **each block** in the **Node Values** window

To take it a step further, you can physically activate the module and take screenshots of the subsequent changes in values, still within the node's Values window.

>**INFORMATION**
>
>Processing a support request may take some time.
If you want to create the integration file on your own, you can follow the detailed instructions in the [Integration Guide](procedure_integration.md).


>**IMPORTANT**
>
>We would like to emphasize that, initially, the team will only process requests for module configurations that include all of the elements listed above and are already functional with the Openzwave plugin. You may not be able to attach your screenshots when creating the ticket, but don’t worry—you’ll be able to submit them later in response to your request.

>**INFORMATION**
>
>By physically activating the module, you will be able to identify the line whose values change accordingly in the Node Values window and for which the command has not been created or is not functional. At the end of the line is a button with a pen icon that allows you to automatically create the corresponding command, thereby enabling you to use your module even if the configuration is missing or incorrect.

<!-- ## Remplacer un module défaillant -->

# FAQs

>**Is it possible to use Z-Wave JS UI in remote mode?**
>
>The Jeedom team’s roadmap for the Z-Wave JS plugin does indeed call for adding this feature in the coming months, though there is no sense of urgency since it is not essential to the plugin’s proper functioning.

>**Is it possible to enable the Z-Wave JS UI WebSocket server?**
>
>To ensure the plugin and Jeedom in general function properly, it is not possible to enable the Z-Wave JS UI WebSocket server; however, the upcoming remote mode will support the same use cases.
