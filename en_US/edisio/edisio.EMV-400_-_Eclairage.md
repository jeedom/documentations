# Edision EMV 400 Lighting

**The module**

![module](images/emv.400/module.jpg)

**The Jeedom visual**

![vue default eclairage](images/emv.400/vue_default_eclairage.jpg)

## Summary

The EMV-400 micromodule will allow you to manage a bidirectional motor or electrical equipment. It allows the control of 2 Start / Stop outputs or an Open / Stop / Close roller shutter.

In addition, interaction with other protocols is possible, it can be controlled by Edisio brand switches and / or remote controls, directly from Jeedom, but also by any Z-Wave transmitter in your network.

Each Edisio module on an electrical network, has the possibility of functioning as a wireless repeater with the other modules, in order to ensure total coverage of your home.

Finally, each module can be used in remote mode, which is very practical because it allows a transmitter to be associated without having to access the receiver.

> **Important**
>
> Neutral is only necessary for "Shutter mode"

## Fonctions

-   2 relay outputs powered
-   Installs in a 55mm flush-mounting box or directly in the opening boxes
-   Mode of use: On / Off, Open / Stop / Close
-   Compatible with electronic and mechanical limit switch motors
-   Remote mode
-   Timer function: On / Off mode: 30min or 60min
-   Signal replica (repeater)
-   Bidirectional micromodule
-   Transmitter low battery level
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Type of module: Edisio Receiver
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

## Module data

-   Mark : Edisio Smart Home
-   Last name : EMV-400

## General configuration

To configure the Edisio plugin and associate a module with Jeedom, refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/edisio/).

> **Important**
>
> So that Jeedom automatically creates your transmitter modules, don't forget to activate the option in the plugin configuration.

> **Important**
>
> Conversely, Edisio receivers must be created manually in Jeedom.

### DIP Switch and "R" button"

![bouton association](images/emv.400/bouton_association.jpg)

-   The DIP Switch will allow you to adjust the parameters (Repeater / Shutter mode / Lighting / Timer) of the module:

![dip switch](images/emv.400/dip_switch.jpg)

> **Note**
>
> In order to avoid unnecessary redundancies, never activate the "Repeater" mode on all the receivers, 5 receivers at most per installation.

-   The "R" button will allow you to associate a transmitter with the receiver, to activate or deactivate the timer function and to activate the remote mode :

![bouton r](images/emv.400/bouton_r.jpg)

> **Note**
>
> Pressing R 3x activates the remote mode.

### Operating diagram

 Depending on whether your transmitter is configured in "1-button" or "2-button" mode, this is how the module works:

> **Note**
>
> Refer to the manufacturer's documentation, in order to configure your transmitter.

![diagramme](images/emv.400/diagramme.jpg)

### Timer function

The timer function allows the relays to switch off automatically after 30 or 60 minutes.

-   Activate : Press 4x "R" on the receiver, confirmation by a single continuous beep
-   Deactivate: Press 5x "R" on the receiver, confirmation by 3 simple beeps.
-   30 minute timer: DIP Switch 3 up
-   60 minute timer: DIP Switch 3 at the bottom

## The "Lighting"

The "Lighting" mode allows you to control 2 electrical devices remotely.

> **Important**
>
> Neutral is not necessary

### Configuration and electrical connections

![mode eclairage](images/emv.400/mode_eclairage.jpg)

> **Important**
>
> In order for the module to be in "Lighting" mode, DIP Switch 2 must be up

> **Important**
>
> NEVER CONNECT WITH LIVE

### Creation of the module in Jeedom

To associate an Edisio receiver module with Jeedom, you must manually create a device.

![ajout equip](images/emv.400/ajout_equip.jpg)

Once you've created your gear, you should get this :

![crea equip](images/emv.400/crea_equip.jpg)

> **Note**
>
> Remember to activate your new equipment.

In the list of equipment, on the right, select "Light micro-module" :

![infos equip eclairage](images/emv.400/infos_equip_eclairage.jpg)

### Commandes

Once your equipment is saved, you should get the commands associated with the module :

![Orders](images/emv.400/commande_eclairage.jpg)

Here is the list of commands :

-   We : This is the command that activates relay 1
-   Off : This is the command which deactivates relay 1
-   On 2 : This is the command which activates relay 2
-   Off 2: This is the command which deactivates relay 2
-   E : This is the command that allows you to use the remote mode

> **Important**
>
> Status feedback is simulated by Jeedom. Therefore, if you use another transmitter, Jeedom will not be able to update the status of the receiver.

### Informations

Once your equipment is associated with Jeedom, various information will be available :

![Orders](images/emv.400/infos_eclairage.jpg)

-   Creation : Indicates the date on which the equipment was created
-   Communication : Indicates the last communication recorded between Jeedom and the micro-module
-   Drums : Indicates battery status for battery modules
-   Status : Returns the status of the module

## Association of the micromodule with Jeedom

So that you can interact with Jeedom, as if it was an Edisio transmitter.

> **Note**
>
> One of the big advantages of Edisio is that a receiver can have several associated transmitters

### Standard method

Each output is associated with a Jeedom command:

-   Associate output 1 :
    -   Press 1x on the "R" of the receiver, a single beep (short in repetition) indicates the programming of output 1 activated.
    -   Within 10 seconds, press "Test" on the "Open" command in Jeedom, a continuous beep indicates the association of output 1 with Jeedom.
    -   Within 10 seconds, press "R" on the receiver again, to validate the association, the beep stops.
-   Associate output 2 :
    -   Press twice on the "R" of the receiver, double beep (short in repetition) indicates the programming of output 2 activated.
    -   Within 10 seconds, press "Test" on the "Close" command in Jeedom, a continuous beep signals the association of output 2 to Jeedom.
    -   Within 10 seconds, press "R" on the receiver again, to validate the association, the beep stops.

### Remote method

We talked about it at the start of this documentation. In the case of modules already recessed, in false ceilings or even attics. This method allows the addition of a new transmitter without accessing the "R" of the receiver.

-   Associate the button "R" :
    -   Press 3x on "R" on the receiver, triple beep sound (short in repetition) indicates the programming mode activated.
    -   Within 10 sec, press "Test" of the "E" command in Jeedom, a continuous beep signals the association to Jeedom.
    -   Within 10 sec, press "E" on the receiver again, to validate the association, the beep stops.

It's done, your Jeedom is now associated and its "E" command now replaces the "R" button on the receiver.

-   Associate a new transmitter with a receiver with Jeedom already associated :
    -   Exit 1 :
        -   Press 1x on "Test" the "E" command in Jeedom, a single beep (short in repetition) indicates the programming of output 1 activated.
        -   Within 10 seconds, press one of the "C" keys of the new transmitter to be associated, a continuous beep indicates the association of output 1.
        -   Within 10 seconds, press again on "Test" of the "E" command in Jeedom, to validate the association, the beep stops.
    -   Exit 2 :
        -   Press 2x on "Test" of the "E" command in Jeedom, double beep sound (short in repetition) indicates the programming of output 2 activated.
        -   Within 10 seconds, press one of the "C" keys of the new transmitter to be associated, a continuous beep indicates the association of output 2.
        -   Within 10 seconds, press again on "Test" of the "E" command in Jeedom, to validate the association, the beep stops.

> **Note**
>
> You can start over as many times as you want to associate transmitters with the receiver

## Alternative visual

![Orders](images/emv.400/vue_alt_eclairage.jpg)

## Faq.

**How to clear the receiver's memory ?**

Press and hold 10 sec on the "R", until the continuous beep.
