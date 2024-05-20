# Z-Wave JS plugin

The Z-wave JS plugin allows **full control of the Z-Wave home automation protocol in Jeedom** based on the work carried out around the very famous library **Z-Wave JS UI**.

The Z-wave JS plugin makes transmissions more reliable and secure by using the **MQTT protocol**, offering, at the same time, advanced management possibilities of their Z-Wave network to the most expert users.

>**IMPORTANT**
>
>This plugin is compatible with Debian 11 "Bullseye" and is therefore the official plugin to be preferred to manage your Z-Wave network in Jeedom.

# Configuration

After installing and activating the plugin, the installation of dependencies should start unless automatic management has been disabled beforehand. In this case, you will have to click on the button **Revive** to initiate this installation phase. The official plugin **MQTT Manager** being part of the necessary dependencies, it will be automatically installed and activated during the operation if it is not already the case.

The rest of the dependencies consist of downloading, compiling and configuring the library **Z-Wave JS UI**.

>**INFORMATION**
>
>The first installation of dependencies including a compilation phase, it is likely to last several tens of minutes depending on your hardware configuration. Dependency updates are much faster to install afterwards.

## Plugin Setup

Regarding the configuration of the plugin, the essential point is the correct selection of the **Z-Wave controller port** corresponding to the physical interface on which the controller is connected.

Other possible settings are :

- **Apply the recommended configuration** : directly applies the configuration set recommended by the Jeedom team when including a new module *(conseillé)*.

- **Deleting excluded devices** : automatically removes devices excluded from the Z-Wave network if checked. Otherwise, the equipment is kept in Jeedom even if it has been excluded from the network. The equipment will then have to be deleted manually or reused by assigning it a new Z-Wave identifier.

- **MQTT prefix** : allows to specify the prefix to use in MQTT *(default `zwave`)*.

### Security keys

Security keys must be kept in a safe place. If you lose these keys, devices included in secure mode will need to be paired again. The keys can be specified, if the fields are empty or invalid the plugin will generate them and you can view them later.

>**IMPORTANT**
>
>If your controller was used with the Openzwave plugin and you had included modules in secure mode, the S0 key is : `0102030405060708090A0B0C0D0E0F10`.

## MQTT Manager

As explained in the preamble, the Z-Wave JS plugin requires support for the MQTT protocol to communicate, the official plugin **MQTT Manager** will therefore serve as a support for these communications.

Several scenarios are possible :

- **You are not yet using an MQTT broker** : In this case you have nothing to do. Plug-ins **Z-Wave JS** and **MQTT Manager** will exchange the necessary information and configurations automatically *(a `Mosquitto` broker will be installed locally on the machine)*.

- **You are already using the MQTT Manager plugin** : No intervention is necessary, the Z-Wave JS plugin will automatically retrieve the connection information to the MQTT broker.

- **You are already using an MQTT broker via a plugin other than MQTT Manager** : In this situation, you must select the mode **remote broker** and provide login information *(address and authentication)* in the MQTT Manager plugin configuration.

- **You want to use an MQTT broker under Docker** : All you have to do is select the mode **local broker docker** in MQTT Manager plugin configuration before installing `Mosquitto`.

In any case, the MQTT Manager plugin daemon must be started before you can move on. Otherwise a message will warn you, preventing the start of the Z-Wave JS daemon.

## Open Zwave Plugin

It is also important to address the case of the presence of the OpenZwave plugin in parallel with the Z-Wave JS plugin, the time to switch from one to the other for example *(See paragraph [**Migration from OpenZwave**](#Migration%20depuis%20OpenZwave))*.

First of all, you should know that there is absolutely no risk in using the Z-Wave JS and OpenZwave plugins in parallel. Even in case of difficulty with the Z-Wave JS plugin, it will suffice to stop its daemon and restart that of the OpenZwave plugin to find an exactly identical and functional Z-Wave network.

It is therefore necessary to stop the automatic management then stop the OpenZwave plugin daemon to be able to start the Z-Wave JS plugin daemon. Again, if not, a message will warn you, preventing the start of the Z-Wave JS daemon.

>**IMPORTANT**
>
>Do not delete any equipment from the OpenZwave plugin prematurely even if it is disabled during testing!

## 1st start of the daemon

Unless otherwise instructed, the Z-Wave JS daemon can now be started. Otherwise, a message should appear on the plugin configuration page to identify the reason for the blockage.

If you use the Z-Wave JS plugin with a blank controller, the Z-Wave network is immediately started and available, ready for module inclusions.

In the case of use with a controller already included in a Z-Wave network, the plugin must be left to work, which will automatically upload the equipment in Jeedom as the modules are interviewed. The first total discovery of a Z-Wave network is therefore likely to take a long time depending on the type of modules used and their communication frequency.

The modules appear in two stages :
- First with their `node id` without image and without identification.
- They are then identified in a second time.

Once all the modules on mains are initiated and therefore identified, it is important to wake up the modules on batteries or wait for them to wake up. It is only from this moment that we can consider the network as being fully started.

>**INFORMATION**
>
>Unlike the OpenZwave plugin, after this first interview phase, network restarts are instantaneous thereafter.

If, at the end of this phase *(which can be long let's remember)*, you find that a module which was well supported by the Openzwave plugin would not be supported by the Z-Wave JS plugin, we invite you to refer to the paragraph [**Module not or badly recognized**](#Module%20non%20ou%20mal%20reconnu).

## Module configuration

Unlike the Openzwave plugin, there is no dedicated section for configuring modules. Indeed the configuration of a module is made through the command class Configuration. This is therefore visible among the other class commands of the module in **Values**.

### Node

This button present on the page of a device allows you to view the information of the module through several tabs :

- **Summary** : Displays all module identification information as well as status information.

- **Shares** : Allows performing technical actions on a node. Each action is described succinctly.
	>**INFORMATION**
	>
	>You should normally never have to touch these functions, the plugin handles this on its own.

- **Statistics** : as its name suggests, it allows you to see the communication statistics of the module.

- **Tree** : gathers all the previous information in the form of a technical json.

### Valeurs

This button on the equipment page allows you to obtain the list of all the Z-Wave class commands managed by the module.

Each can be unfolded by clicking on it to see all the controls *(useful or not)* related to this class command.

Many possibilities are offered by this window :

- View Information Values,
- Changing the value of a stock,
- Change module settings,
- Automatically create an info command in Jeedom *(if you need it or if it is missing from the Jeedom configuration)*,
- Automatically create an action command in Jeedom *(if you need it or if it is missing from the Jeedom configuration)*,
- Configure polling *(forced communication)*. To be used only in the case where the default behavior of the module does not allow to do otherwise, i.e. almost never.

### Groupe

This button on the page of a device is used to manage the associations of the module and to :

- See currently active associations,
- Delete them,
- Add more.

## Inclusions/Exclusions

The button **Inclusions** present on the page grouping all the Z-Wave equipment JS allows you to switch the controller to mode **Inclusion** *(default, S0, S2)* or in mode **Exclusion**.

>**INFORMATION**
>
>For the moment S2 inclusions are not possible directly from the plugin. This feature will be implemented in a future update, the plugin engine being already well S2 compatible.

## Synchroniser

Remember, in Z-Wave, all the modules that make up the network are directly associated with the controller. Some controllers with battery *(like the Aeon-labs Z-Stick GEN5)* even allow you to include modules without being plugged into a box.

The button **To sychronize** will then make it possible to automatically create in Jeedom the equipment identified by the controller. In the same idea, the equipment corresponding to peripherals excluded from the controller will be automatically deleted if the option **Deleting excluded devices** is activated in the general configuration of the plugin.

## Z-Wave network

### Summary

### Actions

### Statistiques

### Network graph

### Routing table

## Santé

## Statistiques

# Compatibilité

# Troubleshooting and diagnostics

## Migration from OpenZwave

Before considering switching permanently from the OpenZwave plugin to the Z-Wave JS plugin, it is essential to ensure that all the network modules are fully supported. This step can easily take several days to validate all the possibilities and scenarios.

Then, once certain that the OpenZwave plugin is no longer essential, you can use the [**replacement of equipment and controls**](https://doc.jeedom.com/en_US/core/4.3/replace){:target="\_blank"} of the core to quickly and easily migrate your existing equipment to the new plugin.

## Module not or badly recognized

If you find that a module is not or is poorly recognized by the Z-Wave JS plugin **while it was well supported by OpenZwave plugin**, you must first ensure that the data present in the window **Values** *(accessible from the equipment page)* update well when the module is physically actuated.

Then, once certain that the module itself is well recognized and that its values are updated, if certain commands remain non-functional it will be necessary to'[open a Jeedom support request](https://doc.jeedom.com/en_US/premiers-pas/#Les%20demandes%20de%20support%20(ou%20tickets)){:target="\_blank"} by imperatively providing the following elements :
- Manufacturer and exact reference of the module concerned,
- Description of non-functional commands,
- Screenshot of **Node information** in the window of the same name,
- Screenshots of **each block** from the window of **Node values**

To go further, you can physically activate the module and take screenshots of the consecutive value changes, still in the Values window of the node.

>**IMPORTANT**
>
>We insist on the fact that the team will initially only process requests for module configurations including all the elements requested above and already functional with the Openzwave plugin. You may not be able to add your screenshots when creating the ticket, don't worry you will be able to send them later in response to your request.

>**INFORMATION**
>
>By physically operating the module, you will be able to identify the line whose values change accordingly in the Node Values window and whose command would not be created or functional. At the end of the line is a button with a pen-shaped icon allowing you to automatically create the corresponding command, thereby giving you the possibility of being able to use your module despite an absent or erroneous configuration.

<!-- ## Remplacer un module défaillant -->

# FAQ

>**Is it possible to use Z-Wave JS UI in remote mode ?**
>
>The Jeedom team's roadmap concerning the Z-wave JS plugin actually provides for the addition of this possibility in the coming months without any sense of urgency because it is not an essential functionality for the proper functioning of the plugin.

>**Is it possible to enable Z-Wave JS UI websocket server ?**
>
>For the proper functioning of the plugin and Jeedom in general, it is not possible to activate the Z-Wave JS UI websocket server, however the upcoming remote mode will allow the same use cases.
