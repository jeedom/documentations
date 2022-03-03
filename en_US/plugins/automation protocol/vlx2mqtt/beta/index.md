# Velux MQTT plugin

The plug-in **Velux MQTT** will allow you to control your skylights and/or your "io-homecontrol" shutters in Jeedom via the VELUX KLF 200 interface and to control their position, raising or lowering, and stopping.

The openings must first be paired with the VELUX KLF 200 interface and it must be connected in ethernet on the same local network as Jeedom *([see KLF200 documentation](https://www.domadoo.fr/fr/index.php?controller=attachment&id_attachment=2287){:target="\_blank"})*.

# Configuration

Like any Jeedom plugin, the plugin **Velux MQTT** must be activated after installation.

## Dependency management

The plug-in **Velux MQTT** relies on official plugins **Docker Management** and **MQTT Manager** to work. If it was not already the case, these 2 plugins will be installed during the installation of the dependencies.

>**INFORMATION**
>
>The installation of dependencies is likely to take several minutes depending on the configurations.

## MQTT Manager

An MQTT broker must be configured and active in the plugin **MQTT Manager** in order to transmit and retrieve the positions of the flaps. Refer to [plugin documentation](https://doc.jeedom.com/en_US/plugins/programming/mqtt2/beta/){:target="\_blank"} to use an existing broker or to create one locally in Jeedom.

As soon as the plugin daemon **MQTT Manager** will be active, the plugin **Velux MQTT** will be able to automatically retrieve MQTT broker connection information.

## Plugin Setup

The configuration of the plugin consists of filling in the connection information to the VELUX KLF 200 interface :

- **IP adress** : The KLF200 ip address on the local network.
- **Wi-Fi Password** : The KLF200 WiFi password *(inscribed on the back)*.

## Installing the Velux MQTT container

Once the connection information for the VELUX KLF 200 interface has been entered and saved, click on the button **Install VELUX MQTT** to check that everything is in order and proceed with the creation of the container **Velux MQTT** in plugin **Docker Management**.

At the end of the procedure, the statutes of the docker **Velux MQTT** must be displayed in green with the words *"running"* and *"CONNECTED"*. If not, check the device logs **Velux MQTT** in plugin **Docker Management**.

# Equipements

To access the various equipment **Velux MQTT**, head to the menu **Plugins → Home automation protocol → Velux MQTT**.

The button **To sychronize** automatically creates the equipment corresponding to the openings listed on the KLF 200 interface in Jeedom.

# Commandes

Each equipment **Velux MQTT** has these commands :

- **State** : current flap position.

>**TRICK**
>
>By default, the KLF 200 interface provides a closing percentage *(100% = closed)* that the plugin transforms into open percentage. If you want to return to default operation, just uncheck the box **Reverse** of the order **State**.

- **Position** : Shutter positioning control.
- **Open** : Shutter opening command.
- **Stop** : Shutter stop command.
- **Close** : Shutter close command.
- **Refresh** : Sends a stop message to the shutter to force the refresh of the position.
