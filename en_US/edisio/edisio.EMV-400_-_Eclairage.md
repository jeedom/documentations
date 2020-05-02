-   **The module**

![module](images/emv.400/module.jpg)

-   **The Jeedom visual**

![vue default eclairage](images/emv.400/vue_default_eclairage.jpg)

Summary 
======

The EMV-400 micromodule will allow you to manage an engine
bidirectional or electrical equipment. It allows control
2 Start / Stop outputs or an Open / Stop / Close shutter.

In addition, interaction with other protocols is possible, it is
controllable by brand switches and / or remote controls
Edisio, directly from Jeedom, but also by any
Z-Wave transmitter in your network.

Each Edisio module on the electrical network, with the possibility of
work as a wireless repeater with the other modules, so
ensure total coverage of your home.

Finally, each module can be used in remote mode, it's very
practical because it allows to associate a transmitter without having to access the
receiver.

> **Important**
>
> Neutral is only necessary for "Shutter" mode"

Functions 
=========

-   2 relay outputs supplied

-   Installs in a 55mm flush-mounted box or directly in
    the opening boxes

-   Mode of use: We / Off, Open / Stop / Close

-   Compatible with electronic limit switches and
    mechanical

-   Remote mode

-   Timer function: We / Off mode: 30min or 60min

-   Signal replica (repeater)

-   Bidirectional micromodule

-   Low transmitter battery level

-   Small, discreet and aesthetic

-   Ease of use and installation

Technical characteristics 
===========================

-   Type of module: Edisio receiver

-   Alimentation: 230VAC, 50Hz

-   Wiring: 4 wires, 2 for controls and 2 for power

-   Frequency: 868.3 MHz

-   Powered outputs: 2 relays

-   Maximum power: 2A per output

-   Resistive load: 460W

-   Other expenses: 100W

-   Operating temperature: -10 ° C + 45 ° C

-   Dimensions: 48x46x26mm

-   Degree of protection: IP20

Module data 
=================

-   Mark : Edisio Smart Home

-   Name : EMV-400

General configuration 
======================

To configure the Edisio plugin and associate a module with Jeedom,
refer to this
[Documentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/en_US/edisio.html).

> **Important**
>
> To have Jeedom automatically create your transmitter modules, remember
> not activate the option in the plugin configuration.

> **Important**
>
> Conversely, Edisio receivers must be created manually in
> Jeedom.

DIP Switch and button "R" : 
--------------------------

![bouton association](images/emv.400/bouton_association.jpg)

-   The DIP Switch will allow you to adjust the parameters
    (Repeater / Shutter mode / lighting / Timer) of the module:

![dip switch](images/emv.400/dip_switch.jpg)

> **Note**
>
> To avoid unnecessary redundancies, never activate the mode
> "Repeater "on all receivers, maximum 5 receivers per
> Setup.

-   The button "R", will allow to associate a transmitter to the receiver,
    activate or deactivate the timer function and activate the mode
    deported :

![bouton r](images/emv.400/bouton_r.jpg)

> **Note**
>
> Pressing R 3x activates the remote mode.

Function diagram 
---------------------------

Next if your transmitter is configured in "1 key" or "2 mode
keys ", this is how the module works:

> **Note**
>
> Refer to the manufacturer's Documentation in order to be able to
> configure your transmitter.

![diagramme](images/emv.400/diagramme.jpg)

Timer function 
------------------

The timer function automatically switches off the relays at the end
30 or 60 minutes.

-   Activate : Press 4x "R" on the receiver, confirmation with a simple
    continuous beep

-   Deactivate: Press 5x "R" on the receiver, confirmation by 3 simple
    beep.

-   30 minute timer: DIP Switch 3 above

-   60-minute timer: DIP Switch 3 down

"Lighting" mode" 
===================

The "Lighting" mode allows you to control 2 electrical devices to
distance.

> **Important**
>
> Neutral is not necessary

Electrical configuration and connections : 
--------------------------------------------

![mode eclairage](images/emv.400/mode_eclairage.jpg)

> **Important**
>
> In order for the module to be in "Lighting" mode the DIP Switch 2 must be
> up

> **Important**
>
> NEVER CONNECT UNDER VOLTAGE

Creation of the module in Jeedom 
------------------------------

To associate an Edisio receiver module with Jeedom, you must create
equipment manually.

![ajout equip](images/emv.400/ajout_equip.jpg)

Once your equipment is created, you should get this :

![crea equip](images/emv.400/crea_equip.jpg)

> **Note**
>
> Remember to activate your new equipment.

In the equipment list, on the right, select "Micro-module
Light" :

![infos equip eclairage](images/emv.400/infos_equip_eclairage.jpg)

Commands 
---------

Once your equipment is saved, you should get the orders
associated with the module :

![Commands](images/emv.400/commande_eclairage.jpg)

Here is the list of commands :

-   We : It is the command which activates relay 1

-   Off : It is the command which makes it possible to deactivate relay 1

-   We 2 : It is the command which activates relay 2

-   Off 2: It is the command which deactivates relay 2

-   E : This is the command that allows you to use the remote mode

> **Important**
>
> STATUS feedback is simulated by Jeedom. Therefore, if you
> use another transmitter, Jeedom will not be able to update the status
> of the receiver.

Information 
------------

Once your equipment is associated with Jeedom, various information will be
available :

![Commands](images/emv.400/infos_eclairage.jpg)

-   Creation : Indicates the date on which the equipment was created

-   Communication : Indicates the last communication recorded between
    Jeedom and the micro-module

-   Drums : Indicates the battery status for battery modules

-   STATUS : Returns the status of the module

Association of the micromodule with Jeedom 
===================================

So that you can interact with Jeedom, as if it were a
Edisio transmitter.

> **Note**
>
> One of the big advantages of Edisio is that a receiver can have
> several associated issuers

Standard method 
----------------

Each output must be associated with a Jeedom command:

-   Associate output 1 :

    -   Press 1x on the "R" of the receiver, single beep (short
        in repetition) signals the programming of output 1 activated.

    -   Within 10 seconds, press "Test" on the "Open" command"
        in Jeedom, a continuous beep signals the association of
        exit 1 at Jeedom.

    -   Within 10 sec, press "R" again on the receiver, to
        confirm the association, the beep stops.

-   Associate output 2 :

    -   Press 2x on the "R" of the receiver, double beep sound (short
        in repetition) signals the programming of output 2 activated.

    -   Within 10 seconds, press "Test" on the "Close" command"
        in Jeedom, a continuous beep signals the association of
        exit 2 at Jeedom.

    -   Within 10 sec, press "R" again on the receiver, to
        confirm the association, the beep stops.

Remote method 
----------------

We talked about it at the beginning of this Documentation. In the case of
modules already built in, in false ceilings or even attics.
This method allows the addition of a new transmitter without accessing the "R" of the
receiver.

-   Associate the button "R" :

    -   Press 3x on "R" on the receiver, triple beep (short
        in repetition) indicates the active programming mode.

    -   Within 10 seconds, press "Test" on the "E" command in
        Jeedom, a continuous beep signals the association with Jeedom.

    -   Within 10 sec, press "E" again on the receiver, to
        confirm the association, the beep stops.

It's done, your Jeedom is now associated and its command "E"
now replaces the "R" button on the receiver.

-   Associate a new transmitter with a receiver with Jeedom already associated
    :

    -   Exit 1 :

        -   Press 1x on "Test" the command "E" in Jeedom, simple
            beep (short in repetition) signals the programming of
            output 1 activated.

        -   Within 10 seconds, press one of the "C" keys on the new
            transmitter to be associated, a continuous beep signals
            the association of exit 1.

        -   Within 10 seconds, press "Test" again on the
            command "E" in Jeedom, to validate the association, the beep
            sound stops.

    -   Exit 2 :

        -   Press 2x on "Test" of the command "E" in Jeedom,
            double beep (short in repetition) signals the
            programming of output 2 activated.

        -   Within 10 seconds, press one of the "C" keys on the new
            transmitter to be associated, a continuous beep signals
            the association of exit 2.

        -   Within 10 seconds, press "Test" again on the
            command "E" in Jeedom, to validate the association, the beep
            sound stops.

> **Note**
>
> You can start again as many times as you want to associate
> from transmitters to receiver

Alternative visual 
=================

![Commands](images/emv.400/vue_alt_eclairage.jpg)

Faq. 
======

How to clear receiver memory ?

:   Press and hold the "R" for 10 seconds, until the continuous beep sound.

How to control the receiver via a Z-Wave transmitter?

:   With the Jeedom Scenario plugin.

How can i have the same visual ?

:   With the Jeedom Widgets plugin.

**@Jamsta**
