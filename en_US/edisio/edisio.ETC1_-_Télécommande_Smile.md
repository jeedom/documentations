# Edisio ETC1

**The module**

![etc1.module 1](images/etc1/etc1.module-1.jpg)

![etc1.module 2](images/etc1/etc1.module-2.png)

**The Jeedom visual**

![etc1.vue default](images/etc1/etc1.vue-default.jpg)

## Summary 

Les télécommandes “Smile” ont un canal, elles sont idéales pour la table de chevet, salle de bain et surtout pour les enfants, car celles-ci sont très robustes grâce au matériau utilisé. Ultra simples et à la fois “fun” elles ont pour but d'être pratiques dans l'habitat. They come in three different colors.

They are easily connected to different receivers and can therefore control On/Off lighting, variable lighting, shutters, gates, garage doors. Available in 3 colors.

In addition, interaction with other protocols is possible, it can interact with Edisio brand receivers, with Jeedom, but also by any Z-Wave receiver in your network.

## Fonctions

-   Mode of use : Lighting, Dimmer
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Mod type : Edisio transmitter
-   Feed : 3VDC (Lithium Battery CR2032)
-   Canals : 1
-   Radio protocol : 868.3MHz
-   Range in open fields : 100M
-   Operating temperature : -10°C +50°C
-   Dimensions : 65x18mm
-   Degree of protection : IP64

![etc1.dimmension](images/etc1/etc1.dimmension.png)

## Module data

-   Mark : Edisio Smart Home
-   Last name : ETC1
-   Reference : P01/Y01/L01

## General Setup

To configure the Edisio plugin and associate a module with Jeedom, refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/edisio/).

> **Important**
>
> For Jeedom to automatically create your transmitter modules, don't forget to activate the option in the plugin configuration.

### Operation diagram

Here is how the remote works :

![etc1.diagramme](images/etc1/etc1.diagramme.jpg)

### Battery replacement

To replace the battery in your remote control, here is the procedure to follow :

![etc1.remplacement pile](images/etc1/etc1.remplacement-pile.jpg)

## Association of the remote control to Jeedom

The association of an Edisio transmitter is done simply and automatically. Just press the button on your remote.

![Orders](images/etc1/etc1.touche-c.jpg)

Once, your gear is associated, you should get this :

![etc1.general](images/etc1/etc1.general.jpg)

### Commandes

Once your equipment is created, you should get the commands associated with the module :

![Orders](images/etc1/etc1.commandes.jpg)

Here is the list of commands :

-   bt01 : This is the command that allows you to interact with button 1
-   Battery : Indicates battery status

### Informations

Once your equipment is associated with Jeedom, various information will be available :

![Orders](images/etc1/etc1.informations.jpg)

-   Creation : Indicates the date on which the equipment was created
-   Communication : Indicates the last communication recorded between Jeedom and the micro-module
-   Battery : Indicates battery status of battery modules
-   Status : Returns the status of the module

### Utilisation

Once your remote control is configured, you can with the Jeedom Scenario plugin, interact with your remote control on Jeedom and its equipment.

> **Note**
>
> The remote control has a binary status feedback.
