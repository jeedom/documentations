# Danalock V2 BTZE

**The module**

![module](images/polycontrol.danalock/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/polycontrol.danalock/vuedefaut1.jpg)

## Summary

**Secure your home using the Z-Wave electronic lock from Poly-Control !**

No more keys, use your smartphone to lock and unlock your door ! Danalock is a new solution that will allow you to reliably and intelligently secure your interior. Without having a key, you can open your lock using your tablet or smartphone. You will thus control the access of your guests or workers and will be able to effectively monitor your interior. Different settings will allow you to control access to your home. Danalock has an Autolock function allowing automatic locking of the front door. Ideal when you don't have your hands free, for example. In addition, 5 keys are provided. You can use them from outside. Installation is simple and quick to perform regardless of the type of door. The corresponding application is compatible for iPhone 4S, Android 4.4 and Smartphone. Danalock does not require an external power source. Power is supplied by two-year batteries. You will receive an audible signal in case the battery charge level is too low.

**Easy to put in place**

Danalock is a smart lock that mounts on almost any door in minutes.

**Easy to install**

Install the Danalock app on your phone in seconds. An assistant then guides you through the installation and calibration of your Danalock.

**Easy to use**

Lock and unlock with the button, TwistAssist function or using your smartphone. And with the auto-unlock feature, the Danalock lock automatically unlocks the door when you approach your home and locks it right after you get home.

**Long battery life**

Danalock has an average battery life of up to one year, and does not require external power. Please be aware that the use of a Z-Wave home automation controller or box can reduce battery life. The battery status is easily visible in the App. When the battery reaches 30, 20, 15 and 10 percent, a notification is sent by SMS and email.

**Limited or permanent access**

No more hiding the keys under the doormat. Give your family quick and easy access with their Smartphones. To your cleaning lady or your guests, limited time or recurring access and receive notifications when your lock is used and by whom.

**Full house control**

Develop control of your smart home with a Danalock, the perfect initiator for all your home orders. Danalock works seamlessly with other smart home devices, and all communication is highly encrypted - no one can hack their way into your home.

**Discreet, durable and Danish**

Danalock combines the elegance and minimalism of Scandinavian design - with a solid anodized aluminum bezel and advanced Bluetooth and Z-Wave technologies. A discreet Danish design built to last.

## Functions

-   Control your front door remotely
-   Connected lock
-   1 cylinder adaptable to different lengths supplied
-   5 physical keys are provided to open the door from the outside
-   Connection via Bluetooth Smart and Z-Wave
-   Integration in compatible Z-Wave controllers (eedomus, Vera,…)
-   Activity history
-   Different setting options for closing and opening
-   Access sharing : give access to your housekeeper or a friend for a limited period
-   Automatic calibration
-   Easy to install
-   Battery operation
-   Compatible with iOS (iPhone 4s or later), but also Android (from 4.4).

## Technical characteristics

-   Food : 4 CR123 3V batteries
-   Versions : V2
-   Material : Solid anodized aluminum
-   Communication : Bluetooth and Z-Wave
-   Dimensions : 79 mm x 49 mm (diameter x height)
-   Weight : 363g

## Module data

-   Mark : Poly-Control
-   Name : Danalock V2 BTZE
-   Manufacturer ID : 010e
-   Product Type : 1
-   Product ID : 1

## Setup

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> It is essential to include this module in secure mode..

To put the Z-Wave plugin (openzwave) in Jeedom in secure inclusion mode : just go to the Z-wave module management page and click on the "Zwave Network" icon"

![inclusion securise jeedom 1](images/polycontrol.danalock/inclusion-securise-jeedom-1.jpg)

Then in the "Actions" tab click on : "ADD MODULE IN SECURE MODE (INCLUSION)"

![inclusion securise jeedom 2](images/polycontrol.danalock/inclusion-securise-jeedom-2.jpg)

> **IMPORTANT**
>
> We assume that you have installed the application on your smartphone or iPhone and created an account. If not already done, you can refer to this page.

![inclusion](images/polycontrol.danalock/inclusion.jpg)

![inclusion1](images/polycontrol.danalock/inclusion1.jpg)

![inclusion2](images/polycontrol.danalock/inclusion2.jpg)

In the application click on "Smart home" then on "Z-wave" and finally on "CONNECT".

Once included you should get this :

![Plugin Zwave](images/polycontrol.danalock/information.jpg)

### Commands

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/polycontrol.danalock/commandes.jpg)

Here is the list of commands :

-   Status : it is the command which will go back to the last action executed (open / close)
-   Open : it is the command which opens the lock
-   To close : it is the command which makes it possible to close the lock
-   Drums : it's the battery command

### Setup du module

> **Warning**
>
> Although this module is on battery it uses Flirs technology. That means that he has no concept of wake up and awakening. It will recover all configuration changes in near real time as a sector module.

If you want to configure the module according to your installation, you have to go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the parameters tab)

![Config1](images/polycontrol.danalock/bouton_configuration.jpg)

Parameter details :

-   1 : Direction 0-1 : 0 = Motor goes clockwise locked, 1 = Motor goes counterclockwise when locked
-   2 : Speed 1 = slowest, 2 = slow, 3 = Normal, 4 = Fast, 5 = fastest
-   3 : Mode 1 = Motor drive (energy saving), 2 = full drive mode (Normal)
-   4 : Number of turns (1 = 10 degrees, 9 = 90 degrees, etc.)
-   5 : Auto lock 0-60 How many seconds from the moment the lock was unlocked to automatically close again. If 0, it is disabled.
-   6 : Deactivate or activate the locking or unlocking acoustic signal (0 = Deactivate, 1 = Activate.)
-   7 : Battery type : Set the type of battery that powers the device.
-   8 : Battery alarm : When the battery level is lower than this value, the device will inform the user with an audible signal after locking or unlocking.
-   9 : Turn & Go 0 = Turn & Go off, 1 = Turn & Go On. Latch & Go will turn the handle automatically when manually operated.
-   10 : Brake & GoBack 0 = Disabled. 1⇒15 seconds to brake. When used the lock brakes for x amount of seconds, then back 75 degrees back. Designed for special doors without lever. (Only when unlocking).
-   11 : Async 0 = Async off, 1 = Async On. When async is activated the lock will be automatically calibrated if it is already unlocked and Unlock again (used for special door locks).
-   12 : operation report

### Groups

This module has only one association group.

![Groupe](images/polycontrol.danalock/groupe.jpg)

## Good to know

### Specificities

> **Tip**
>
> Although this module is on battery it uses Flirs technology. That means that he has no concept of wake up and awakening. It will recover all configuration changes in near real time as a sector module.

> **Tip**
>
> This module returns its status if you operate the lock by hand the status will be updated.

## Wakeup

There is no concept of wake up for this module.
