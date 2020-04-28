Greenwave PowerNode - 6 sockets 
==============================

\

-   **The module**

\

![module](images/greenwave.powernode/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/greenwave.powernode/vuedefaut1.jpg)

\

Summary 
------

\

The GreenWave PowerNode power strip is a smart device that
connects to your home appliances and electronics for you
allow you to monitor and control the electrical consumption of your
devices remotely via web browser or smartphone. Using
Z-Wave technology, the PowerNode power strip is compatible with the
most home automation boxes on the market such as Fibaro Home Center 2, eedomus
or Zipabox. Equipped with 6 ports, it can independently control 6
different electrical appliances with a total power of 10A.

PowerNode power strip collects consumption data
of energy from connected devices and transmits them to the home automation box.
You can then control the energy consumption of each device
connected. This power strip also allows you to activate or deactivate
devices remotely via a web browser or smartphone or
set a schedule to automatically activate or deactivate your
devices at preset times. A small wheel on the side of the
multi-socket allows you to choose a color that will represent the part to
which is affected the power strip. For example "blue for the bedroom
". This tip will allow you to differentiate your different
PowerNode power strip. You can also set this dial to a
padlock. This function allows you to lock the power strip so
avoid accidentally switching it off, but control from the box
home automation will no longer be possible.

The PowerNode power strip also has a light status indicator
which gives different information depending on its color : Taken
on or off, limited radio range, inclusion and exclusion mode.

The PowerNode power strip is equipped with protection against
overcurrents to protect connected devices. The PowerNode
will disable ports in the event of a device malfunction
defective or short circuit. Additional protection is
ensured by the internal fuse located in the power strip.

This power strip is ideal for controlling multimedia devices in
a TV cabinet or to control computer equipment located
in an office and thus avoid having to use 6 Z-Wave sockets
individual. \

Functions 
---------

\

-   6-port Z-Wave power strip

-   Enables monitoring of consumption of connected devices

-   ON / OFF function

-   Possibility of assigning it a number and a color in order to
    differentiate between the different PowerNodes of the same installation.

-   On / Off button directly on the power strip

-   Overcurrent protection

-   Light status indicator

\

Technical characteristics 
---------------------------

\

-   Food : 250V AC, 50Hz

-   Maximum charge current : 10A

-   Maximum load power : 2400W (@ 240V)

-   Standby consumption : 0.4 W

-   Measurement accuracy : ± 0.1W

-   Overcurrent protection : 10A internal fuse

-   Plug type : DIN49440 / EEC 7/7 (Schuko)

-   Z-Wave Radio Frequency : 868.42MHz

-   Maximum range Z-Wave : 30m

-   Operating temperature : 0 ° C to + 25 ° C

-   Storage temperature : -20 ° C to + 60 ° C

-   Maximum humidity : 5% to 90%

-   IP class (Humidity tolerance) : IP20

\

Module data 
-----------------

\

-   Mark : GreenWave

-   Name : GreenWave \ [6 x sockets \]

-   Manufacturer ID : 153

-   Product Type : 3

-   Product ID : 4

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, press the button
> inclusion present on the socket.

\

![inclusion](images/greenwave.powernode/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/greenwave.powernode/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/greenwave.powernode/commandes.jpg)

![Commands](images/greenwave.powernode/commandes2.jpg)

![Commands](images/greenwave.powernode/commandes3.jpg)

![Commands](images/greenwave.powernode/commandes4.jpg)

![Commands](images/greenwave.powernode/commandes5.jpg)

\

Here is the list of commands :

\

-   State-1 : It is the command which allows to know the status of the
    take 1

-   On-1 : This is the command that turns on socket 1

-   Off-1 : It is the command which switches off socket 1

-   Power-1 : This is the command that brings up the instantaneous power
    taken from intake 1

-   Conso-1 : It is the command which reports the total consumption of the
    take 1

-   State-2 : It is the command which allows to know the status of the
    taken 2

-   On-2 : It is the command which turns on socket 2

-   Off-2 : It is the command which switches off socket 2

-   Power-2 : This is the command that brings up the instantaneous power
    taken from intake 2

-   Conso-2 : It is the command which reports the total consumption of the
    taken 2

-   State-3 : It is the command which allows to know the status of the
    take 3

-   On-3 : This is the command that turns on socket 3

-   Off-3 : It is the command which switches off socket 3

-   Power-3 : This is the command that brings up the instantaneous power
    taken from intake 3

-   Conso-3 : It is the command which reports the total consumption of the
    take 3

-   State-4 : It is the command which allows to know the status of the
    take 4

-   On-4 : It is the command which turns on socket 4

-   Off-4 : It is the command which switches off socket 4

-   Power 4 : This is the command that brings up the instantaneous power
    taken from intake 4

-   Conso-4 : It is the command which reports the total consumption of the
    take 4

-   State-5 : It is the command which allows to know the status of the
    take 5

-   On-5 : It is the command which turns on socket 5

-   Off-5 : It is the command which switches off socket 5

-   Power-5 : This is the command that brings up the instantaneous power
    taken from intake 5

-   Conso-5 : It is the command which reports the total consumption of the
    take 5

-   State-6 : It is the command which allows to know the status of the
    take 6

-   On-6 : It is the command which turns on socket 6

-   Off-6 : It is the command which switches off socket 6

-   Power-6 : This is the command that brings up the instantaneous power
    taken from intake 6

-   Conso-6 : It is the command which reports the total consumption of the
    take 6

\

Note that on the dashboard the ON / OFF / STATUS commands are grouped together
in one button.

\

### Setup of the module 

\

You can configure the module according to your
installation. This requires going through the "Setup" button of the
Jeedom OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
Settings)

\

![Config1](images/greenwave.powernode/config1.jpg)

\

As you can see there is not a lot of configuration
for this module.

\

Parameter details :

\

-   1 : Delays before the button flashes : number of seconds
    minimum between two communications (if this delay is exceeded the button
    of the socket will flash)

-   2 : Selected wheel color (automatically detected)

\

### Groups 

\

This module has four association groups, only the 1st group is
essential.

\

![Groupe](images/greenwave.powernode/groupe.jpg)

\

Good to know 
------------

\

### Specificities / Polling 

\

Unlike its little sister "Une prize", this power strip requires
polling to boost consumption.

\

![Config2](images/greenwave.powernode/config2.jpg)

\

It is just necessary to activate it for the Power command of each
taken. This will have the effect of raising the two (consumption and power)

\

### Overall consumption 

\

![consocumul](images/greenwave.powernode/consocumul.jpg)

\

You can use a virtual to create a cumulative consumption
of 6 takes.

\

![consocumul2](images/greenwave.powernode/consocumul2.jpg)

\

### Reset 

\

![Config3](images/greenwave.powernode/config3.jpg)

\

You can reset your consumption meter by clicking
on this button available in the System tab. (There is a reset by
taken). Choose PressButton.

\

Wakeup 
------

\

No notion of wakeup on this module.

\

Faq. 
------

\

Did you pay for a CRON.

\

No. The module does not allow it. Put a piece of black tape
above.

\
**@sarakha63**
