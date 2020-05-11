# Concept

Here are the main basic concepts of Jeedom. This documentation remains voluntarily simple in order to help you take control of your home automation.

The possibilities of Jeedom are almost endless, since you can create a lot of things with a few python or other php scripts, but that's not the point here.

> Tip
>
> The links below point to the Core v4.1. Once on the documentation page (User manual or configuration) you can change version in the menu at the top left to switch to the version corresponding to the Core you want.

## Affichage

Jeedom allows to interface a very large number of devices together, whether these are based on the Z-Wave, Enocean, Zigbee protocols, etc., on APIs using plugins, or directly in the form of scripts. You can look on the [Market](https://market.jeedom.com/) to get an overview of supported devices.

You can view these devices in several ways :

- On the [Dashboard](/en_US/core/4.1/dashboard)
- On the [Synthesis](/en_US/core/4.1/overview) (v4.1)
- On a [View](/en_US/core/4.1/view)
- On a [Design](/en_US/core/4.1/design)
- On a [Design 3D](/en_US/core/4.1/design3d)

![Synthese](images/concept-synthese.jpg)

These can be viewed in a browser on a desktop computer, or on a smartphone with the WebApp or mobile application : [Mobile version](/en_US/mobile/index")

## Items

In order to organize your devices, you can create [Objects](/en_US/core/4.1/object).

These objects can represent parts of the house (Living room, Bedroom, Workshop). Each object can have a parent object. This hierarchy will be used for display on the Dashboard. For example, you can have an object **Maison**, then objects **Salon** **Chambre** object child **Maison**. Once on the Dashboard, the object **Maison** will also display, below, its child objects.

![Objand](images/concept-objet.jpg)

> Tips
>
> IN**Settings → Preferences** you can define on which object you wish to arrive on the Dashboard. [Preferences](/en_US/core/4.1/profils)

![Dashboard](images/concept-dashboard.jpg)

## Equipment and their controls

### Commandes

To interact with our home automation, you need commands ! These are of two types :

> Note
>
> Rest assured, orders are normally created automatically ! These explanations are for a better understanding.

- The orders *info* :
These commands store information from sensors. For example, the temperature of a probe, a movement of a presence sensor, etc.
These commands can be logged in order to keep this information over time in the form of a curve : [History](/en_US/core/4.1/history)

These commands can also be used to trigger [Scenarios](/en_US/core/4.1/scenario) to automate actions based on the information reported by your sensors. For example, a motion sensor detects a presence, which will trigger a scenario that will turn on the light.

- The orders *action* :
These commands allow you to control your actuators. For example, commands **on** and**off** of a controlled outlet will allow you to turn it on and off.

Action commands are usually linked to info commands. Here our take has two actions **on** and**off**, usually related to information **Etat**.

![Commands](images/concept-commands.jpg)

These two types of commands are attached in the form of equipment. The equipment therefore has info and / or action commands, and it is this equipment that will have an Object as parent, allowing you to display it where you want.

### Équipement

- Physiquement: I have a socket with an on / off button and a status led, in the living room.
- In Jeedom: I have equipment with two on and off actions and a status info, in the Salon object.

These equipments are created by plugins. For example, the Z-Wave plugin will allow you to include your Z-Waze plug, which will create a device with its controls, which you can name and link to an Object.

In terms of display, each order is displayed using a Widget. The Core offers the main Widgets, as well as a tool to create them (V4) : [Widget](/en_US/core/4.1/widgets).

These commands are grouped in a tile corresponding to your equipment. And this tile will be displayed on the Dashboard in the Object you have chosen.

![Commands](images/concept-equipment.jpg)

## Conclusion

Whatever your device, it will be created in the form of equipment, from a [Plugin](/en_US/core/4.1/plugin).

This device will have its own commands *info* or*action*. These commands will be displayed as Widgets forming the equipment tile, in its parent object.

You will then see that each Object, Equipment, Order has many options, in terms of functionality or display. But everything in its time, by now you should have understood the basic concepts of Jeedom, and thus be able to start organizing your home automation knowing where to look.


