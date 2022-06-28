# Danalock V2 BTZE

**The module**

![module](images/polycontrol.danalock/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/polycontrol.danalock/vuedefaut1.jpg)

## Summary

**Secure your home using the Z-Wave electronic lock from Poly-Control !**

No more keys, use your smartphone to lock and unlock your door ! Danalock is a new solution that will allow you to reliably and intelligently secure your interior. Without having a key, you can open your lock using your tablet or smartphone. You will thus control the access of your guests or workers and will be able to monitor your interior effectively. Different settings will allow you to control access to your home. Danalock has an Autolock function allowing automatic locking of the front door. Ideal when you don't have your hands free, for example. In addition, 5 keys are provided. You can use them outside. Installation is simple and quick to perform regardless of the type of door. The corresponding app is compatible for iPhone 4S, Android 4.4 and smartphone. The Danalock does not require an external power source. Power is supplied by batteries with a lifespan of two years. You will receive an audible signal if the battery charge level is too low.

**Easy to put in place**

The Danalock is a smart lock that mounts to almost any door in minutes.

**Easy to install**

Install the Danalock app on your phone in seconds. A wizard then guides you through the installation and calibration of your Danalock.

**Easy to use**

Lock and unlock with the button, the TwistAssist function or using your smartphone. And with the auto-unlock function, the Danalock lock automatically unlocks the door when you approach your home and locks it right after you get back.

**Long battery life**

The Danalock has an average battery life of up to one year, and does not require an external power supply. Be aware that using a Z-Wave home automation controller or box can reduce battery life. Battery status is easily visible in the App. When the battery reaches 30, 20, 15 and 10 percent, a notification is sent by SMS and email.

**Limited or permanent access**

No more hiding keys under the doormat. Give your family quick and easy access with their Smartphones. To your housekeeper or your guests, a time-limited or recurring access and receive notifications when your lock is used and by whom.

**Full home control**

Expand your smart home control with a Danalock, the perfect initiator for all your home controls. The Danalock works seamlessly with other smart home devices, and all communication is strongly encrypted - no one can hack their way into your home.

**Discreet, durable and Danish**

Danalock combines the elegance and minimalism of Scandinavian design - with an anodized solid aluminum bezel and state-of-the-art Bluetooth and Z-Wave technologies. An understated Danish design built to last.

## Fonctions

-   Control your front door remotely
-   Connected lock
-   1 cylinder adaptable to different lengths supplied
-   5 physical keys are provided to open the door from the outside
-   Connection via Bluetooth Smart and Z-Wave
-   Integration into compatible Z-Wave controllers (eedomus, Vera, …​)
-   Activity history
-   Different setting options for closing and opening
-   Access sharing : give access to your housekeeper or a friend for a limited period of time
-   Automatic Calibration
-   Easy to install
-   Operation with batteries
-   Compatible with iOS (iPhone 4s or later), but also Android (from 4.4).

## Technical characteristics

-   Feed : 4 x 3V CR123 batteries
-   Versions : V2
-   Material : Solid anodized aluminum
-   Communication : Bluetooth and Z-Wave
-   Dimensions : 79mm x 49mm (diameter x height)
-   Weight : 363g

## Module data

-   Mark : Poly-Control
-   Last name : Danalock V2 BTZE
-   Manufacturer ID : 010e
-   Type Product : 1
-   Product ID : 1

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> It is absolutely necessary to include this module in secure mode..

To put the Z-Wave plugin (openzwave) in Jeedom in secure inclusion mode : just go to the Z-wave modules management page and click on the "Zwave Network" icon"

![inclusion securise jeedom 1](images/polycontrol.danalock/inclusion-securise-jeedom-1.jpg)

Then in the "Actions" tab click on : "ADD MODULE IN SECURE MODE (INCLUDING)"

![inclusion securise jeedom 2](images/polycontrol.danalock/inclusion-securise-jeedom-2.jpg)

> **Important**
>
> We assume that you have installed the application on your smartphone or iphone and created an account. If you haven't already, you can refer to this page.

![inclusion](images/polycontrol.danalock/inclusion.jpg)

![inclusion1](images/polycontrol.danalock/inclusion1.jpg)

![inclusion2](images/polycontrol.danalock/inclusion2.jpg)

In the application click on "Smart home" then on "Z-wave" and finally on "CONNECT".

Once included you should get this :

![Plugin Zwave](images/polycontrol.danalock/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/polycontrol.danalock/commandes.jpg)

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

![Config1](images/polycontrol.danalock/bouton_configuration.jpg)

Parameter details :

-   1 : Direction 0-1 : 0 = Motor goes clockwise locked, 1 = Motor goes counterclockwise when locked
-   2 : Speed 1=slowest, 2=slow, 3=Normal, 4=Fast, 5=fastest
-   3 : Mode 1 = Motor Drive (Power Saving), 2 = Full Drive Mode (Normal)
-   4 : Number of turns (1 = 10 degrees, 9 = 90 degrees, etc.)
-   5 : Auto Lock 0-60 How many seconds from when the lock was unlocked to automatically close again. If 0, it is disabled.
-   6 : Disable or enable the locking or unlocking sound signal (0 = Disable, 1 = Enable.)
-   7 : Battery Type : Set the type of battery that powers the device.
-   8 : Battery alarm : When the battery level is lower than this value, the device will inform the user with a sound signal after locking or unlocking.
-   9 : Turn & Go 0 = Turn & Go off, 1 = Turn & Go On. Latch & Go will turn the handle automatically when operated manually.
-   10 : Brake & GoBack 0 = Disabled. 1⇒15 seconds to brake. When used the lock brakes for x amount of seconds, then rolls back 75 degrees. Designed for special doors without levers. (Only when unlocking).
-   11 : Async 0 = Async off, 1 = Async On. When async is enabled the lock will automatically calibrate if it is already unlocked and unlock again (used for special door locks).
-   12 : operation report

### Groupes

This module has only one association group.

![Groupe](images/polycontrol.danalock/groupe.jpg)

## Good to know

### Specificities

> **Tip**
>
> Although this module is battery operated it uses Flirs technology. This means that he has no notion of wake up and waking up. It will retrieve all configuration changes in near real time like a sector module.

> **Tip**
>
> This module returns its state if you activate the lock by hand the state will be updated.

## Wakeup

There is no notion of wake up for this module.
