Danalock V2 BTZE 
================

\

-   **The module**

\

![module](images/polycontrol.danalock/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/polycontrol.danalock/vuedefaut1.jpg)

\

Summary 
------

 

**Secure your home using the Z-Wave electronic lock from
Poly-Control!**

No more keys, use your smartphone to lock and
unlock your door ! Danalock is a new solution that
will reliably and intelligently secure your interior.
Without having a key, you can open your lock using your
tablet or smartphone. You will thus control the access of your guests or
of workers and can effectively monitor your interior.
Different settings will allow you to control access to your
House. Danalock has an Autolock function allowing
automatic door lock. Ideal when you don't
not hands free, for example. In addition, 5 keys are provided. You
can use them from outside. Installation is quick and easy
to be carried out regardless of the type of door. The corresponding application
is compatible for iPhone 4S, Android 4.4 and Smartphone. The Danalock does
no external power source required. Food
is carried out using batteries with a two-year lifespan. You
receive an audible signal in case the battery charge level
is too weak.

**Easy to put in place**

The Danalock is a smart lock that mounts on almost
all doors in minutes.

**Easy to install**

Install the Danalock app on your phone in just a few
seconds. An assistant then guides you through the installation and
the calibration of your Danalock.

 **Easy to use**

Lock and unlock with the button, the TwistAssist function or
using your smartphone. And with the auto-unlock function,
Danalock lock automatically unlocks the door when you
approach your house and lock it right after you are
rentré.

**Long battery life**

The Danalock has an average battery life of up to one year, and
does not require external power. Please be advised that use
of a Z-Wave home automation controller or box can reduce the service life of
battery. The battery status is easily visible in the App.
When the battery reaches 30, 20, 15 and 10 percent, a notification
is sent by SMS and email.

**Limited or permanent access**

No more hiding the keys under the doormat. Give your
family quick and easy access with their Smartphones. To your wife
cleaning or your guests, time-limited or recurring access and
receive notifications when your lock is in use and by whom.

**Full control of the house**

Develop control of your smart home with a Danalock,
the perfect initiator for all your home orders. Danalock
works seamlessly with other home devices
intelligent, and all communication is highly encrypted - nobody
can't hack their way into your house.

**Discreet, sustainable and Danish**

Danalock combines the elegance and minimalism of Scandinavian design - with
solid anodized aluminum bezel and advanced technologies
Bluetooth and Z-Wave. A discreet Danish design built to last.
\

Functions
---------

\

-   Control your front door remotely

-   Connected lock

-   1 cylinder adaptable to different lengths supplied

-   5 physical keys are provided to open the door from the outside

-   Connection via Bluetooth Smart and Z-Wave

-   Integration in compatible Z-Wave controllers (eedomus,
    Vera,…)

-   Activity history

-   Different setting options for closing and opening

-   Access sharing : give access to your cleaning lady or a friend
    for a limited time

-   Automatic calibration

-   Easy to install

-   Battery operation

-   Compatible with iOS (iPhone 4s or later), but
    also Android (from 4.4).

\

Technical characteristics 
---------------------------

\

-   Food: 4 CR123 3V batteries

-   Versions: V2

-   Material : Solid anodized aluminum

-   Communication: Bluetooth and Z-Wave

-   Dimensions: 79 mm x 49 mm (diameter x height)

-   Weight: 363g

\

Module data 
-----------------

\

-   Mark: Poly-Control

-   Name: Danalock V2 BTZE

-   Manufacturer ID : 010e

-   Product Type : 1

-   Product ID : 1

\

Setup
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **Important**
>
> It is essential to include this module in secure mode..

\

To put the Z-Wave plugin (openzwave) in Jeedom in inclusion mode
secure : just go to the Z-wave module management page
and click on the icon "Zwave Network"

![inclusion securise jeedom
1](images / polycontrol.danalock / inclusion-securise-jeedom-1.jpg)

\

Then in the "Actions" tab click on : "ADD MODULE IN MODE
SECURE (INCLUSION)"

![inclusion securise jeedom
2](images / polycontrol.danalock / inclusion-securise-jeedom-2.jpg)

\

> **Important**
>
> We assume that you have installed the application on
> your smartphone or iphone and created an account. If it is not already
> done you can refer to this page.

![inclusion](images/polycontrol.danalock/inclusion.jpg)

![inclusion1](images/polycontrol.danalock/inclusion1.jpg)

![inclusion2](images/polycontrol.danalock/inclusion2.jpg)

In the application click on "Smart home" then on "Z-wave" and finally
on "CONNECT".

Once included you should get this :

\

![Plugin Zwave](images/polycontrol.danalock/information.jpg)

\

### Commands

\

Once the module has been recognized, the commands associated with the module will be
disponibles.

\

![Commands](images/polycontrol.danalock/commandes.jpg)

\

Here is the list of commands :

\

-   Status: it is the command which will go up the last action
    executed (open / close)

-   Open: it is the command which opens the lock

-   To close: it is the command which makes it possible to close the lock

-   Drums: it's the battery command

\

### Configuration of the module 

\

> **Warning**
>
> Although this module is on battery it uses Flirs technology.
> This means that he has no concept of wake up and awakening. he
> will recover any configuration changes in near real time
> as a sector module.

\

If you want to configure the module according to your
installation, you have to go through the "Configuration" button of the
Jeedom OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/polycontrol.danalock/bouton_configuration.jpg)

\

Parameter details :

\

-   1 : Direction 0-1 : 0 = Motor goes clockwise
    locked, 1 = Motor goes counterclockwise when
    verrouillé

-   2 : Speed 1 = slowest, 2 = slow, 3 = Normal, 4 = Fast, 5 = the
    faster

-   3 : Mode 1 = Motor drive (energy saving), 2 = mode
    full training (Normal)

-   4 : Number of turns (1 = 10 degrees, 9 = 90 degrees, etc.)

-   5 : Auto lock 0-60 How many seconds from the moment
    the lock has been unlocked to automatically close
    again. If 0, it is disabled.

-   6 : Deactivate or activate the lock signal or
    unlocking (0 = Deactivate, 1 = Activate.)

-   7 : Battery type : Set the type of battery that
    powers the device.

-   8 : Battery alarm : When the battery level is lower
    at this value, the device will inform the user with a signal
    sound after locking or unlocking.

-   9 : Turn & Go 0 = Turn & Go off, 1 = Turn & Go On. Latch & Go
    will turn the handle automatically when
    operate it manually.

-   10 : Brake & GoBack 0 = Disabled. 1⇒15 seconds to brake. When
    it is used the lock brakes for x amount of seconds, then
    go back 75 degrees. Designed for special doors
    without lever. (Only when unlocking).

-   11 : Async 0 = Async off, 1 = Async On. When async is activated the
    lock will be automatically calibrated if it is already unlocked and
    Unlocks again (used for door locks
    special door).

-   12 : operation report

\

### Groups

\

This module has only one association group.

\

![Groupe](images/polycontrol.danalock/groupe.jpg)

\

Good to know 
------------

\

### Specificities 

\

> **Tip**
>
> Although this module is on battery it uses Flirs technology.
> This means that he has no concept of wake up and awakening. he
> will recover any configuration changes in near real time
> as a sector module.

\

> **Tip**
>
> This module returns its status if you operate the lock by hand
> the status will be updated. \

### Alternative visual 

\

![vuewidget](images/polycontrol.danalock/vuewidget.jpg)

\

Wakeup
------

\

There is no concept of wake up for this module.

\

Faq. 
------

\

No notion of wake up on this module; read the Specificities paragraph.

\

**@noumea**
