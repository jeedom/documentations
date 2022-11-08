# Z-Wave JS plugin

The Z-wave JS plugin allows **full control of the Z-Wave home automation protocol in Jeedom** based on the work carried out around the very famous bookstore **Z-Wave JS UI**.

The Z-wave JS plugin makes transmissions more reliable and secure by using the **MQTT protocol**, offering, at the same time, advanced management possibilities of their Z-Wave network to the most expert users.

>**IMPORTANT**
>
>This plugin is compatible with Debian 11 "Bullseye" and is therefore the official plugin to be preferred to manage your Z-Wave network in Jeedom.

# Configuration

After installing and activating the plugin, the installation of dependencies should start unless automatic management has been disabled beforehand. In this case, you will have to click on the button **Revive** to initiate this installation phase. The official plugin **MQTT Manager** being part of the necessary dependencies, it will be automatically installed and activated during the operation if it is not already the case.

The rest of the dependencies consist of downloading, compiling and configuring the library **Z-Wave JS UI**.

>**IMPORTANT**
>
>The first installation of dependencies including a compilation phase, it is likely to last several tens of minutes depending on your hardware configuration. Dependency updates will be much faster to install later.

## Plugin Setup

Regarding the configuration of the plugin, the essential point is the correct selection of the **Z-Wave controller port** corresponding to the physical interface on which the controller is connected.

Other possible settings are :

- **Apply the recommended configuration set when including** : directly applies the configuration set recommended by the Jeedom team when including a new module *(conseillé)*.

- **Automatic removal of excluded devices** : automatically removes devices excluded from the Z-Wave network if checked. Otherwise, the equipment is kept in Jeedom even if it has been excluded from the network. The equipment will then have to be deleted manually or reused by assigning it a new Z-Wave identifier.

- **Prefix** : allows to specify the prefix to use in MQTT *(default `zwave`)*.

### Security keys

Security keys must be kept in a safe place. If you lose these keys, devices included in secure mode will need to be paired again. The keys can be specified, if the fields are empty or invalid the plugin will generate them and you can view them later.

>**INFORMATION**
>
>If your controller was used with the Openzwave plugin and you had included modules in secure mode, the S0 key is : `0102030405060708090A0B0C0D0E0F10`.

## MQTT Manager

As explained in the preamble, the Z-Wave JS plugin requires support for the MQTT protocol to communicate, the official plugin **MQTT Manager** will therefore serve as a support for these communications.

Several scenarios are possible :

- **You are not yet using an MQTT broker** : In this case you have nothing to do. Plug-ins **Z-Wave JS** and **MQTT Manager** will exchange the necessary information and configurations automatically *(a `Mosquitto` broker will be installed locally on the machine)*.

- **You are already using the Z-Wave JS plugin** : No intervention is necessary, the Z-Wave JS plugin will automatically retrieve the connection information to the MQTT broker.

- **You are already using an MQTT broker via a plugin other than MQTT Manager** : In this situation, you must select the mode **remote broker** and provide login information *(address and authentication)* in the MQTT Manager plugin configuration.

- **You want to use an MQTT broker under Docker** : All you have to do is select the mode **local broker docker** in MQTT Manager plugin configuration before installing `Mosquitto`.

In any case, the MQTT Manager plugin daemon must be started before you can move on. Otherwise a message will warn you, preventing the start of the Z-Wave JS daemon.

## Open Zwave Plugin

It is also important to address the case of the presence of the OpenZwave plugin in parallel with the Z-Wave JS plugin, the time to switch from one to the other for example *(See paragraph [**Migration from OpenZwave**](#migration-depuis-openzwave))*.

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

## Module configuration

### Noeud

### Valeurs

### Groupe

# Outils

## Inclusion

## Exclusion

## Synchroniser

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

## Replace a faulty module
