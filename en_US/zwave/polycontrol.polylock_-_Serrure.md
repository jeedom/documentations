# PolyLock

**The module**

![module](images/polycontrol.polylock/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/polycontrol.polylock/vuedefaut1.jpg)

## Summary

Secure your home using the Z-Wave electronic lock from Poly-Control !

Poly-Lock electronic lock is designed to fit almost any door in the world. It mounts very easily in 5 minutes, you just have to change the cylinder of your door.

Once paired with your Z-Wave controller (such as Vera systems by VeraControl), you can have complete control of your lock from any computer or smartphone, no matter where you are in the world. It is also possible to use the lock with the Poly-Pad wireless keyboard to open or lock the door.

So it's possible to lock your house in a similar way to locking your car - with a remote control, at the push of a button and your house is secure. The Poly-Control lock can also work with other Z-Wave scenes, where the lights come on, and the alarm system is deactivated when unlocked via your remote control.

The Poly-Control system can be used in a home or work environment. The Poly-Lock lock is battery powered, and has been tested to work for 1 year, without replacing the battery.

## Fonctions

-   Control your front door remotely
-   Fits most doors
-   Can be integrated into Z-Wave scenes, for example for an alarm system
-   Suitable for home or business use
-   Wheel for manual closing
-   Easy installation

## Technical characteristics

-   Food : 3.6V Lithium-Chloride battery
-   Frequency : 868.42 Mhz
-   Scope : up to 100 m outdoors, up to 30 m in buildings
-   Dimensions : 120 x 52 x 60 mm (L x W x H)
-   Weight : 370g

## Module data

-   Mark : Poly-Control
-   Name : Polylock
-   Manufacturer ID : 270
-   Product Type : 1
-   Product ID : 1

## Configuration

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put this module in inclusion mode, press the inclusion button once, according to its paper documentation.

![inclusion](images/polycontrol.polylock/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/polycontrol.polylock/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/polycontrol.polylock/commandes.jpg)

Here is the list of commands :

-   Status : it is the command which will go back to the last action executed (open / close)
-   Open : it is the command which opens the lock
-   To close : it is the command which makes it possible to close the lock
-   Drums : it's the battery command

### Configuration of the module

> **Warning**
>
> Although this module is on battery it uses Flirs technology. That means that he has no concept of wake up and awakening. It will retrieve any configuration changes in near real time like a mains module.

If you want to configure the module according to your installation, you have to go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the parameters tab)

![Config1](images/polycontrol.polylock/config1.jpg)

Parameter details :

-   0: allows to change the direction of rotation for the open / close commands
-   1: allows you to define how long the lock will turn to open (0 to 15 s)
-   2: allows you to define how long the lock will turn to close (0 to 15 s)
-   3: used to define the speed of rotation of the lock (0 to 15, 15 being the slowest)
-   4: allows you to choose from different operating modes (torque, force, power, etc.))

### Groupes

This module has only one association group.

![Groupe](images/polycontrol.polylock/groupe.jpg)

## Examples of use

![exemple](images/polycontrol.polylock/exemple.jpg)

The trigger is the event command on a zipato keyboard (it can be anything else). If the value is 6 (home) we lock the door. We have just returned so we can lock the door. Otherwise (necessarily 5) we open the door with a key and 2 minutes after we close it. Indeed, we want to go out, the door opens and will close again shortly after.

## Good to know

### Specificities

> **Tip**
>
> Although this module is on battery it uses Flirs technology. That means that he has no concept of wake up and awakening. It will retrieve any configuration changes in near real time like a mains module.

> **Tip**
>
> This module does not return its state, if you operate the lock by hand the state will remain the same.

## Wake up

There is no concept of wake up for this module.
