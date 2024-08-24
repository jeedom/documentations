# JeeDashboardPublish plugin

## Introduction

The JeeDashboardPublish Plugin allows you to publish values from Jeedom using the jMQTT plugin.

## Plugin setup

It is necessary to enter the MQTT Broker parameters.

![Plugin setup](./images/configuration_plugin.png)

## Equipment configuration

It is possible to create as much equipment as you want : 

![Liste des équipements](./images/liste_equipement.png)

It is recommended to enter a prefix in order to have unique names with two methods :

![Equipment configuration - 1](./images/configuration_equipement_1.png)

1. A hard prefix.

2. Using a Jeedom variable. It is necessary to check the box “Is a Jeedom variable” and enter the name of the variable : variable(xxx)

## Utilisation

![Equipment configuration - 2](./images/configuration_equipement_2.png)

It is possible to enter the names of the commands to be published by selecting a list of commands with the "Choose commands" button or by adding manually with the "Add telemetry" button".

It is possible to export the histories of one or more orders by specifying a start date.

