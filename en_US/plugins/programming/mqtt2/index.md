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

  - In local mode you can enter a `username:password` per line, each pair of identifiers will have valid access to the broker. If there is no identifier, Jeedom creates one automatically.

  - In standalone mode it is enough to put on the first line the couple ` identifier:password` for Jeedom (example : if the username is `jeedom` and the password `mqtt`, you must enter `jeedom`:mqtt``).

  >**IMPORTANT**
  >
  > Authentication is mandatory in local mode. Following the addition, Jeedom must be restarted for this to take effect.

- **Jeedom root topic** : Root subject to send a command to Jeedom or to which it returns events. Attention it is only possible to put 1 or 2 levels maximum.

- **Transmit all events** : Check the box to send all Jeedom command events on MQTT.

- **Post template** : Formatting the publication of Jeedom events * (possible tags : ``#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#``)*.

- **Subscriber plugins** : List of plugins subscribed to the MQTT Manager plugin in the form `plugin(topic)`.

## Equipment configuration

It is possible to create MQTT equipment directly in the plugin.

You must indicate the root topic of the equipment *(`test` for example)*, Be careful the root topic cannot have more than 2 levels (exe `level1/level2`) then depending on the type of commands :

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


# Transmit information between two jeedoms by MQTT

It is possible thanks to the plugin to transmit commands between two Jeedom (this system is dedicated to replacing jeelink), here is how to configure it : 

- **On the jeedom source you need** :
  - In the configuration of the mqtt manager plugin, configure the "Jeedom root topic" field, by default it is jeedom, it is recommended to put a unique value per Jeedom (e.g : jeedom_salon)
  - Then you can either check the "Transmit all events" box (still in the configuration of the mqtt manager plugin), this is not the most recommended because it will send all the equipment to the target jeedom. The best thing is to go to the equipment you want to transmit, in the advanced configuration of the equipment (button at the top right on the equipment configuration page) then in "Additional information" to check "Transmit the MQTT equipment"
- **On the target jeedom it is necessary** : 
  - Without configuring the mqtt manager plugin, configure the “Linked Jeedom Topic” field by setting the value of “Jeedom root topic” of the source jeedom. You can put several Jeedom sources by separating them with ,. Be careful, you have to be very careful here, you should definitely not have the same thing for "Jeedom root topic" on jeedoms. This field is the unique identifier of the jeedom so it is absolutely necessary to have different values.
  - In plugin -> programming -> Mqtt manager activate auto-discovery (inactive by default)

Then you just have to return to the jeedom still on the plugin configuration and do "Send discovery"

>**IMPORTANT**
>
>This configuration assumes that the jeedoms are connected to the same brocker mosquitto. If you cannot do this, you must then configure one of the two mosquittos so that it sends the values of the desired topics to another mosquitto (see next chapter)

>**IMPORTANT**
>
>If you change the value of the "Publication template" field (empty by default) then auto discovery will not create the correct orders, it is up to you to adapt the configuration in this case


# Linked two different mosquitto 

It is possible to link topics between several mosquitto, here is the configuration to add in mosquitto. The configuration only needs to be done on one of the brocker mosquitto :

````````
connection #NOM_CONNEXION#
address #REMOTE_ADDRESS#:#REMOTE_PORT#
topic # both 0 #LOCAL_TOPIC#/ #REMOTE_TOPIC#/
cleansession true
notifications false
remote_clientid #REMOTE_CLIENT_ID#
remote_username #REMOTE_USERNAME#
remote_password #REMOTE_PASSWORD#
local_username #LOCAL_USERNAME#
local_password #LOCAL_PASSWORD#
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
````````

Example you want to send equipment from jeedom_2 to jeedom_1 by having : 
- jeedom_1 : 
  - ip : 192.168.1.45
  - root topic : jeedom_1
  - related topic : jeedom_2
  - Authentication : jeedom:password_1
- jeedom_2
  - root topic : jeedom_1
  - Authentication : jeedom:password_2

Here is the configuration that must be added in jeedom_2 (mosquito parameter) : 

````````
connection jeedom_1
address 192.168.1.45:1883
topic # both 0 jeedom_2/ jeedom_2/
cleansession true
notifications false
remote_clientid jeedom_2
remote_username jeedom
remote_password password_1
local_username jeedom
local_password password_2
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
````````

>**NOTE**
>
> - ``#NOM_CONNEXION#`` : can be whatever you want and it doesn't matter. You can for example do name_jeedom_source-name_jeedom_target
> - ``#REMOTE_CLIENT_ID#`` : doesn't matter either, you just have to put a unique string
> - ``#LOCAL_TOPIC#`` : name of the local topic often it will be "Jeedom root topic" of the local jeedom
> - ``#REMOTE_TOPIC#`` : name of the local topic often it will be "Jeedom root topic" of the remote jeedom

>**IMPORTANT**
>
> In jeedom the identifiers (`username` and `password`) are available on the plugin configuration page in "Authentication" in the form `username`:``password``

# FAQ

>**Following an update of the system packages (apt) or an unattended upgrades, nothing works anymore**
>
>Updating the mosquitto package resets the service file to default and therefore mosquitto no longer points to the correct configuration file. To correct this, it's very simple, just restart the installation of mosquitto from the plugin configuration page.
