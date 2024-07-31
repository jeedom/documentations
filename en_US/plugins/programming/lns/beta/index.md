# LNS plugin

## Description

This plugin allows you to install and configure a Chirpstack V3 on the Jeedom box.

## Fonctionnement
1- Launch dependencies - in order to install the necessary packages.

2- The default port is 8081. It is possible to change it via the LNS plugin interface.

3- Import the MQTT2 configuration - as long as the four fields broker IP address, broker port, connection identifier, MQTT password are not filled then the MQTT2 dependencies are still being installed.

4- Install Gateway Bridge (optional) - check then save if installation of the Gateway Bridge is necessary.

5- Modify the CS configuration - once the four fields are completed, you can modify the configuration files.

6- Check the status of services.

7- Open Chirpstack.

8- Automatic creation in CS - enter the CS identifiers in order to create in Chirpstack the Network Server, Service Profile, Gateway, Device Profile (class A and class C).
