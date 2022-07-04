# Edison EMV 400 Lighting

**The module**

![module](images/emv.400/module.jpg)

**The Jeedom visual**

![vue default eclairage](images/emv.400/vue_default_eclairage.jpg)

## Summary

The EMV-400 micromodule will allow you to manage a bidirectional motor or electrical equipment. It allows the control of 2 On/Off outputs or an Open/Stop/Close roller shutter.

In addition, interaction with other protocols is possible, it is controllable by Edisio brand switches and/or remote controls, directly from Jeedom, but also by any Z-Wave transmitter in your network.

Each Edisio module on the electrical network has the possibility of functioning as a wireless repeater with the other modules, in order to ensure total coverage of your home.

Finally, each module can be used in remote mode, it is very practical because it allows you to associate a transmitter without having to access the receiver.

> **Important**
>
> The neutral is only necessary for the "Shutter" mode"

## Fonctions

-   2 powered relay outputs
-   Can be installed in a 55mm recessed box or directly in the opening boxes
-   Mode of use: Start/Stop, Open/Stop/Close
-   Compatible with electronic and mechanical limit switch motors
-   Remote mode
-   Timer function: On/Off mode: 30min or 60min
-   Replica of the signal (repeater)
-   Bidirectional micromodule
-   Transmitter low battery level
-   Small, discreet and aesthetic
-   Ease of use and installation

## Technical characteristics

-   Mod type: Edisio receiver
-   Alimentation: 230VAC, 50Hz
-   Wiring: 4 wires, 2 for controls and 2 for power
-   Frequency: 868.3MHz
-   Powered Outputs: 2 relays
-   Max power: 2A per output
-   Resistive load: 460W
-   Other expenses: 100W
-   Operating temperature: -10°C +45°C
-   Dimensions: 48x46x26mm
-   Degree of protection: IP20

## Module data

-   Mark : Edisio Smart Home
-   Last name : EMV-400

## General Setup

To configure the Edisio plugin and associate a module with Jeedom, refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/edisio/).

> **Important**
>
> For Jeedom to automatically create your transmitter modules, don't forget to activate the option in the plugin configuration.

> **Important**
>
> Conversely, Edisio receivers must be created manually in Jeedom.

### DIP Switch and "R" button"

![bouton association](images/emv.400/bouton_association.jpg)

-   The DIP Switch will allow you to adjust the parameters (Repeater / Shutter Mode / Lighting / Timer) of the module:

![dip switch](images/emv.400/dip_switch.jpg)

> **Note**
>
> To avoid unnecessary redundancy, never activate "Repeater" mode on all receivers, 5 receivers maximum per installation.

-   The "R" button will make it possible to associate a transmitter with the receiver, to activate or deactivate the timer function and to activate the remote mode :

![bouton r](images/emv.400/bouton_r.jpg)

> **Note**
>
> Pressing R 3x activates remote mode.

### Operation diagram

 Depending on whether your transmitter is configured in "1 key" or "2 keys" mode, here is how the module works:

> **Note**
>
> Refer to the manufacturer's documentation, in order to be able to configure your transmitter.

![diagramme](images/emv.400/diagramme.jpg)

### Timer function

The timer function allows the automatic switching off of the relays after 30 or 60 minutes.

-   Enable : Press 4x "R" on the receiver, confirmation by a single continuous beep
-   Disable: Press 5x "R" on the receiver, confirmation by 3 simple beeps.
-   30 minute timer: DIP Switch 3 up
-   60 minute timer: DIP Switch 3 bottom

## The "Lighting" mode"

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
> NEVER PLUG IN ON

### Creation of the module in Jeedom

To associate an Edisio receiver module with Jeedom, you must manually create a device.

![ajout equip](images/emv.400/ajout_equip.jpg)

Once your equipment is created, you should get this :

![crea equip](images/emv.400/crea_equip.jpg)

> **Note**
>
> Remember to activate your new equipment.

In the list of equipment, on the right, select "Micro-light module" :

![infos equip eclairage](images/emv.400/infos_equip_eclairage.jpg)

### Commandes

Once your gear is saved, you should get the commands associated with the mod :

![Orders](images/emv.400/commande_eclairage.jpg)

Here is the list of commands :

-   We : This is the command that activates relay 1
-   Off : This is the command that deactivates relay 1
-   On 2 : This is the command that activates relay 2
-   Off 2: This is the command that deactivates relay 2
-   E : This is the command that allows you to use the remote mode

> **Important**
>
> The state return is simulated by Jeedom. Therefore, if you use another transmitter, Jeedom will not be able to update the status of the receiver.

### Informations

Once your equipment is associated with Jeedom, various information will be available :

![Orders](images/emv.400/infos_eclairage.jpg)

-   Creation : Indicates the date on which the equipment was created
-   Communication : Indicates the last communication recorded between Jeedom and the micro-module
-   Battery : Indicates battery status for battery-operated modules
-   Status : Returns the status of the module

## Association of the micromodule with Jeedom

So that you can interact with Jeedom, as if it were an Edisio transmitter.

> **Note**
>
> One of the big advantages of Edisio is that a receiver can have several associated transmitters

### Standard method

Each output is to be associated with a Jeedom command:

-   Associate output 1 :
    -   Press 1x on the "R" of the receiver, single beep (short in repetition) signals the programming of output 1 activated.
    -   Within 10 sec, press "Test" of the "Open" command in Jeedom, a continuous beep signals the association of output 1 to Jeedom.
    -   Within 10 seconds, press "R" on the receiver again, to validate the association, the beep stops.
-   Associate output 2 :
    -   Press twice on the "R" of the receiver, double beep (short in repetition) signals the programming of output 2 activated.
    -   Within 10 sec, press "Test" of the "Close" command in Jeedom, a continuous beep signals the association of output 2 to Jeedom.
    -   Within 10 seconds, press "R" on the receiver again, to validate the association, the beep stops.

### Remote method

We talked about it at the beginning of this documentation. In the case of already built-in modules, in false ceilings or even attics. This method allows the addition of a new transmitter without accessing the "R" of the receiver.

-   Associate the "R" button" :
    -   Press "R" on the receiver 3x, triple beep (short repeating) signals programming mode activated.
    -   Within 10 sec, press "Test" of the "E" command in Jeedom, a continuous beep signals the association to Jeedom.
    -   Within 10 seconds, press "E" on the receiver again to validate the association, the beep stops.

It's done, your Jeedom is now associated and its "E" command now replaces the "R" button on the receiver.

-   Associate a new transmitter with a receiver with Jeedom already associated :
    -   Output 1 :
        -   Press 1x on "Test" the "E" command in Jeedom, single beep (short in repetition) signals the programming of output 1 activated.
        -   Within 10 seconds, press one of the "C" keys of the new transmitter to associate, a continuous beep signals the association of output 1.
        -   Within 10 sec, press "Test" again on the "E" command in Jeedom, to validate the association, the beep stops.
    -   Output 2 :
        -   Press 2x on "Test" of the "E" command in Jeedom, double beep (short in repetition) signals the programming of output 2 activated.
        -   Within 10 seconds, press one of the "C" keys of the new transmitter to associate, a continuous beep signals the association of output 2.
        -   Within 10 sec, press "Test" again on the "E" command in Jeedom, to validate the association, the beep stops.

> **Note**
>
> You can start again as many times as you want to associate transmitters to the receiver

## Alternative visual

![Orders](images/emv.400/vue_alt_eclairage.jpg)

## FAQs.

**How to Clear Receiver Memory ?**

Press and hold 10 sec on the "R", until the continuous beep.
