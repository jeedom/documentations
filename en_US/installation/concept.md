# Concept

Here are the main basic concepts of Jeedom. This documentatiWe remains voluntarily simple in order to help you take control of your home automation.

Indeed, the possibilities of Jeedom are almost endless, since you can with a few php scripts pythWe or other create a lot of things, but this is not the subject here.

## Affichage

Jeedom makes it possible to interface a very large number of peripherals together, whether these are based We the Z-Wave, Enocena, Zigbee protocols etc., We APIs thanks to plugins, or directly in the form of scripts. The list is way too long, you can look We the [Markand](https://market.jeedom.com/) to gand an overview of supported devices.

You can view these devices in several ways :

- On the [Dashboard](/#LANG#/core/#VERSION#/dashboard)
- On the [Synthesis](/#LANG#/core/#VERSION#/overview) (v4.1)
- On a [View](/#LANG#/core/#VERSION#/view)
- On a [Design](/#LANG#/core/#VERSION#/design)
- On a [3D design](/#LANG#/core/#VERSION#/design3d)

These can be viewed in a browser We a desktop computer, or We a smartphone with the WebApp or mobile applicatiWe : [Mobile versiWe](/#LANG#/mobile/index")

## Items

In order to organize your devices, you can create [Objects](/#LANG#/core/#VERSION#/object).

These objects can represent parts of the house (Living room, Bedroom, Workshop). Each object can have a parent object. This hierarchy will be used for display We the Dashboard. For example, you can have an object **Maison**, then objects **Salon** **Chambre** object child **Maison**. Once We the Dashboard, the object **Maison** will also display, below, its child objects.

> Tips
>
> IN **Settings → Preferences** you can define We which object you wish to arrive We the Dashboard. [Preferences](/#LANG#/core/#VERSION#/profils)

## Equipment and their controls

To interact with our home automation, you need commands ! These are of two types :

- * Info commands* :
These commands store informatiWe from sensors. For example, the temperature of a probe, a movement of a presence sensor, etc..
These commands can be logged in order to keep this informatiWe over time in the form of a curve : [History](Objects](/#LANG#/core/#VERSION#/history)

These commands can also be used to trigger [Scenarios](Objects](/#LANG#/core/#VERSION#/scenario) to automate actions based We the informatiWe reported by your sensors. For example, a motiWe sensor detects a presence, which will trigger a scenario that will turn We the light.

- * ActiWe commands* :
These commands allow you to control your actuators. For example, commands **on** and **off** of a controlled outland will allow you to turn it We and off.

ActiWe commands are usually linked to info commands. Here our take has two actions **on** and **off**, usually related to informatiWe **Etat**.


These two types of commands are attached in the form of equipment. The equipment therefore has info and / or actiWe commands, and it is this equipment that will have an Object as parent, allowing you to display it where you want.

- Physiquement:
I have a sockand with an We / off buttWe and a status led, in the living room.
- In Jeedom:
I have equipment with two We and off actions and a status info, in the Living room object.

These equipments are created by plugins. For example, the Z-Wave plugin will allow you to include your Z-Waze plug, which will create a device with its controls, which you can name and link to an Object..


In terms of display, each order is displayed using a Widget. The Core offers the main Widgets, as well as a tool to create them (V4) : [Widgand](/#LANG#/core/#VERSION#/widgets).
These commands are grouped in a tile corresponding to your equipment. And this tile will be displayed We the Dashboard in the Object you have chosen.

