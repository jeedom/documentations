# PolyLock

**The module**

![module](images/polycontrol.polylock/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/polycontrol.polylock/vuedefaut1.jpg)

## Summary

Secure your home using the Z-Wave electronic lock from Poly-Control !

The Poly-Lock electronic door lock is designed to fit almost any door in the world. It mounts very easily in 5 minutes, you just have to change the cylinder of your door.

Once paired with your Z-Wave controller (such as Vera Systems from VeraControl), you can have complete control of your lock from any computer or smartphone, no matter where you are in the world. It is also possible to use the lock with the Poly-Pad wireless keypad to open or lock the door.

It is therefore possible to lock your house in a similar way to locking your car - with a remote control, just press a button and your house is secure. The Poly-Control lock can also work with other Z-Wave scenes, where the lights turn on, and the alarm system is deactivated when unlocked via your remote.

The Poly-Control system can be used in a home or work environment. The Poly-Lock is battery powered, and has been tested to operate for 1 year, without battery replacement.

## Fonctions

-   Control your front door remotely
-   Fits most doors
-   Can be integrated into Z-Wave scenes, for example for an alarm system
-   Suitable for home or business use
-   Knob for manual closing
-   Easy setup

## Technical characteristics

-   Feed : 3.6V Lithium-Chloride Battery
-   Frequency : 868.42Mhz
-   Scope : up to 100 m outdoors, up to 30 m indoors
-   Dimensions : 120 x 52 x 60 mm (L x W x H)
-   Weight : 370g

## Module data

-   Mark : Poly-Control
-   Last name : Polylock
-   Manufacturer ID : 270
-   Type Product : 1
-   Product ID : 1

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, you must press the inclusion button once, in accordance with its paper documentation.

![inclusion](images/polycontrol.polylock/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/polycontrol.polylock/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/polycontrol.polylock/commandes.jpg)

Here is the list of commands :

-   Status : this is the command that will report the last action performed (open/close)
-   Open : this is the command to open the lock
-   Close : this is the command that closes the lock
-   Battery : this is the battery command

### Module configuration

> **Warning**
>
> Although this module is battery operated it uses Flirs technology. This means that he has no notion of wake up and waking up. It will retrieve all configuration changes in near real time like a sector module.

If you want to configure the module according to your installation, you must go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/polycontrol.polylock/config1.jpg)

Parameter details :

-   0: allows you to change the direction of rotation for the open/close commands
-   1: allows you to define how long the lock will turn to open (0 to 15 s)
-   2: allows you to define how long the lock will turn to close (0 to 15 s)
-   3: allows you to set the rotation speed of the lock (0 to 15, 15 being the slowest)
-   4: allows you to choose from different operating modes (torque, force, power, etc.))

### Groupes

This module has only one association group.

![Groupe](images/polycontrol.polylock/groupe.jpg)

## Examples of use

![exemple](images/polycontrol.polylock/exemple.jpg)

The trigger is the event command of a zipato keyboard (it can be anything else). If the value is 6 (home) the door is locked. Indeed we have just returned so we can lock the door. Otherwise (necessarily 5) we open the door with the key and 2 minutes later we close it. Indeed, we want to go out, the door opens and will close shortly after.

## Good to know

### Specificities

> **Tip**
>
> Although this module is battery operated it uses Flirs technology. This means that he has no notion of wake up and waking up. It will retrieve all configuration changes in near real time like a sector module.

> **Tip**
>
> This module does not return its state, if you activate the lock by hand the state will remain the same.

## Wake-up

There is no notion of wake up for this module.
