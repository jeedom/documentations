# MQTT plugin

## Description

The plugin allows you to connect Jeedom to an existing MQTT brocker or to install one (in docker using the Docker plugin). This plugin can : 
- serve as a base for another plugin for all that goes through MQTT
- serve in "standalone" mode" : you can create commands (info / action) to send / receive messages on MQTT
- be used to drive jeedom from another MQTT equipment (such as Nodered for example) : the plugin can control Jeedom commands as well as broadcast all Jeedom events on MQTT

## Installation

There are 2 installation modes : 
- local mode : Jeedom will install Mosquitto using the docker plugin (in a container therefore), it takes care of the configuration (in particular the authentication). Please note the installation can take several tens of minutes
- remote mode : you just have to indicate to Jeedom the address of the brocker MQTT (ex : mqtt://192.168.1.10:1883)

You can specify users / password for connection :
- in local mode you can put a username:password per line, each identifier pair will have valid access to the brocker. By default if there is no identifier jeedom automatically adds an identifier
- in standalone mode, just put on the first line the username / password pair for jeedom, separated by : (ex if the username is `jeedom` and the password` mqtt` you have to put `jeedom:mqtt``)

>**IMPORTANT**
>
>In local mode it is not possible not to have authentication

- "Jeedom root topic" : root topic to send an order to Jeedom or to which it sends events
- "Transmit all order events" : indicates whether Jeedom should send all the command events on the MQTT bus 

## Equipement

It is possible to create MQTT equipment directly from the plugin, be careful in this case no automation or template provided you have to do everything by hand.

It is necessary to indicate the root topic (ex `test`) for the equipment then in the commands it is enough to : 
- info type commands : indicate the complete topic, eg if you put `toto / 1`, all messages on the topic` test / toto / 1` will be automatically written on the command in question
- action type commands : to indicate the topic and the message, ex if you put `foo / 2` with as message` plop` each click on the command will send the message `plop` on the topic` test / foo / 2`

>**NOTE**
>
>In action type commands you can use tags #slider#, #title#, #message# Where #select# which will be automatically replaced according to the type of the command by their value during the execution of the command

## Using Jeedom through MQTT

It is possible to drive Jeedom through MQTT, here are the topics (the examples assume that the root topic is equal to `jeedom`, so you have to adapt if you have changed it) : 
- `jeedom / cmd / set /#cmd_id#`` : allows to execute the command `#cmd_id#`, you can pass the parameters in the message as json fields depending on the subtype of the command, for example : 
    - defect : no parameters
    - cursor : `{slider : 50} `
    - message : `{title : "hello "message : "Hi, how are you ?" }``
    - color : `{color : "#96c927 "}`
    - listing : `{select : 1} `
- `jeedom / cmd / get /#cmd_id#`` : request the value of the command `#cmd_id#`to jeedom, this will return` jeedom / cmd / value /#cmd_id#`with the command value in message
- `jeedom / cmd / event /#cmd_id#`` : event on the command#cmd_id#`with the value