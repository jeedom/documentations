# MQTT Manager plugin

## Description

The plug-in **MQTT Manager** allows you to connect Jeedom to an existing MQTT broker or to install one locally or under Docker using the plugin **Docker Management**.

This plugin is able to combine several features :

- Serve as a base for other plugins for everything related to MQTT.

- Serve in "standalone" mode by creating action/info commands for sending/receiving messages on MQTT.

- Control Jeedom from another MQTT equipment *(Nodered for example)*. The plugin can both drive commands and retransmit all Jeedom events on MQTT.

# Configuration

After installing and activating the plugin, the installation of dependencies should start unless automatic management has been disabled beforehand. In this case, you will have to click on the button **Revive** to initiate this installation phase.

## Plugin Setup

To start configuring the plugin, it is necessary to select the connection mode to the broker from the 3 possible choices :

- **Local broker** : The Mosquitto broker is installed directly on the machine that hosts Jeedom *(default mode)*.

- **Docker local broker** : The Mosquitto broker is automatically installed and configured in a Docker container using the official plugin **Docker Management**.

  >**INFORMATION**
  >
  >In this mode, the installation can take several minutes.

- **Remote broker** : In the case of the use of an already existing broker, it is enough to fill in its address *(example : ``mqtt://192.168.1.10:1883`)*.

Once the Mosquitto broker is installed *(if necessary)*, you can continue with the configuration :

- **Authentication**: You can specify users / password for connection :

  - in local mode you can enter a `username:password` per line, each pair of identifiers will have valid access to the broker. If there is no identifier, Jeedom creates one automatically.

  - in standalone mode it is enough to put on the first line the couple ` identifier:password` for Jeedom (example : if the username is `jeedom` and the password `mqtt`, you must enter `jeedom`:mqtt``).

  >**IMPORTANT**
  >
  >Authentication is mandatory in local mode. Following the addition, Jeedom must be restarted for this to take effect.

- **Jeedom root topic** : Root topic to send a command to Jeedom or on which it sends the events. Attention it is only possible to put 1 or 2 levels maximum.

- **Transmit all events** : Check the box to send all Jeedom command events on MQTT.

- **Post template** : Formatting the publication of Jeedom events * (possible tags : ``#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#``)*.

- **Subscriber plugins** : List of plugins subscribed to the MQTT Manager plugin in the form `plugin(topic)`.

## Equipment configuration

It is possible to create MQTT equipment directly in the plugin.

You must indicate the root topic of the equipment *(`test` for example)*, then according to the type of commands :

- **Info commands** : just indicate the full topic.
  >For example, if you put `toto/1`, all the messages on the topic `test/toto/1` will be automatically written on the command in question. The system is able to manage json type fields, in this case you have to put `toto/1/key1` or `toto/1/key1/key2` to go down one level.

- **Action commands** : just indicate the topic and the message.
  >For example, if you put `toto/2` with the message `plop`, each click on the command will send the message `plop` to the topic `test/toto/2`.

  >**INFORMATION**
  >
  >In action type commands you can use the tags `#slider#`, `#color#`, `#message#` or `#select#` which will be automatically replaced by their value when executing the command *(according to its subtype)*. On the other hand, if the message is of the `json` type, you must add the `json` prefix to it::``.

>**IMPORTANT**
>
>The `jeedom` topic is reserved (this can be changed in the configuration), so do not send anything other than commands to drive jeedom


# Jeedom via MQTT

It is possible to pilot Jeedom through MQTT. Here are the different possible topics assuming that the root topic is `jeedom` *(to adapt if you have modified the default configuration)* :

- `jeedom / cmd / set /#cmd_id#`` : allows you to execute the command with the id `#cmd_id#`. You can pass the parameters in the message as `json` fields depending on the subtype of the command, for example:
  - **defect** : no parameters.
  - **cursor** : `{slider : 50}`.
  - **message** : `{title : "hello "message : "Hi, how are you ?"}``.
  - **color** : `{color : "#96c927"}``.
  - **listing** : `{select : 1}`.
  - **Info commands** : you can directly send a value or also specify an update date *(facultatif)* `{value : "cuckoo ", datetime : "2021-12-12 10:30:00" }`.

- `jeedom / cmd / get /#cmd_id#`` : request value of command with id `#cmd_id#`. Jeedom will return `jeedom/cmd/value/#cmd_id#`with the command value in message.

- `jeedom / cmd / event /#cmd_id#`` : event on command with id `#cmd_id#` with a `json` message containing different information including the value of the command.

# Uninstall the Mosquitto broker

2 possible options to uninstall the Mosquitto broker present locally on the machine :

- **Broker under Docker** : First, use the command **To delete** `mqtt2_mosquitto` equipment from the plugin **Docker Management** *(Plugins > Programming > Docker Management)*. You can then delete this entire equipment.

- **Local broker** : You must then use the red button **Uninstall Mosquitto** from the general configuration page of the plugin.


# Self-Discovery)

The plugin can auto-discover several types of modules. To do this, you just need to authorize auto discovery on the main page of the plugin and restart the demon.

>**IMPORTANT**
>
>For tasmota type modules it is absolutely necessary that the full topic configuration be `%topic%/%prefix%/`

# FAQ

>**Following an update of the system packages (apt) or an unattended upgrades, nothing works anymore**
>
>Updating the mosquitto package resets the service file to default and therefore mosquitto no longer points to the correct configuration file. To correct this, it's very simple, just restart the installation of mosquitto from the plugin configuration page.
