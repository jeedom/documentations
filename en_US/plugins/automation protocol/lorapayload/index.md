# LoraPayload plugin

This plugin is a plugin allowing to link LoraWan payload commands and to create a device with commands while parsing the values.

# Configuration

## Plugin configuration

You can check the state of dependencies here and relaunch them. In case of problems with the plugin always restart the dependencies even if OK in doubt.


# The plugin

Go to the plugins / protocol menu to find the plugin.

On this page you can see the modules already included.

On the upper part of this page you have several buttons

-   Add button : Allows you to add equipment
-   Configuation button : This button opens the plugin configuration window

# Equipement

When you click on one of your modules, you arrive on its configuration page :

-   Give a name to the module
-   Activate / make it visible or not
-   Choose its parent object
-   Assign it a category

On the right side you will find :

-   The equipment profile (to be chosen manually by the user when creating)
-   See the visual

You also have two additional tabs:

-   A Payload tab (described in the next paragraph)
-   An Orders tab (this is where you will find the controls corresponding to your equipment - this tab is standard at Jeedom)

# Adding equipment

Just click on the Add button and choose a name.

Then you can configure the Parent object, activate the device, choose one or more categories, and make the device visible or not.

It is important on the right side to choose the type of equipment. This is what will allow us to know how to parse the frame.

The Payload tab is very important :

-   You must choose the info command which receives the payload (whether it is MQTT or others)
-   You must choose whether the payload format is in Hexadecimal or Base64


Once done you can save. Following this, the next time you receive a frame, the commands for your equipment will update

# Envoyer des commandes

Certains modules Lorawan possèdent des commandes de type Action qui permettent d'envoyer des consignes aux modules via l'interface Jeedom.

Dans l'onglet Equipement du plugin LoraPayload :

- Vous devez choisir la commande d'envoi (que ce soit MQTT ou autres)
- Vous devez choisir si voulez avoir une confirmation (Ack). C'est une information remontée dans MQTT sur un topic dédié qui n'influence pas les données remontées.

Concernant la commande d'envoi, dans le cas d'utilisation de MQTT, c'est une commande dans MQTT de type Action et de sous-type Message. Le topic est le topic dédié aux downlinks et la valeur de la commande est #message#.

# FAQ

-   Some commands do not update at the same time as others : yes indeed some Lorawan modules do not necessarily send all the information at the same time and with the same frequency
