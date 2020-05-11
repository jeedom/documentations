Greenwave PowerNode - 1 plug 
=============================

\

-   **The module**

\

![module](images/greenwave.Powernode1/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)

\

Summary 
------

\

GreenWave's PowerNode plug module is a smart device that
connects to one of your home appliances and electronics to
allow you to monitor and control power consumption at
distance via web browser or smartphone.

Using Z-Wave technology, the PowerNode controlled outlet is
compatible with most home automation boxes on the market such as Fibaro
Home Center 2, eedomus or Zipabox.

PowerNode plug module collects consumption data
of energy from the connected device and transmits them to the home automation box.
This controlled outlet also allows you to activate or deactivate
the device remotely via a web browser or smartphone or set
a calendar to automatically activate or deactivate your device
at predefined times.

A small wheel on the side of the socket allows you to choose a color
which will represent the room to which it is assigned. For example "
blue for the bedroom ". This tip will allow you to differentiate your
different PowerNode sockets and multiple sockets. We can also adjust
this wheel on a padlock. This function allows you to lock the
taken to avoid accidentally turning it off, but control from
home automation boxing will no longer be possible.

PowerNode controlled outlet also has a status indicator
bright which gives different information depending on its color :
sockets on or off, limited radio range, inclusion mode and
Exclusion.

The PowerNode plug module is equipped with protection against
overcurrents to protect the connected device. The PowerNode socket will
deactivated in the event of a faulty device or
short circuit. Additional protection is provided by the fuse
internal located in the socket.

\

Functions 
---------

\

-   Control a lamp or device remotely

-   Plug module integrating directly between an electrical outlet and
    the load to order

-   Enables monitoring of consumption of the connected device

-   ON / OFF function

-   Possibility of assigning it a number and a color in order to
    differentiate between the different PowerNodes of the same installation

-   On / Off button directly on the socket

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

-   Name : GreenWave \ [1 x plug \]

-   Manufacturer ID : 153

-   Product Type : 2

-   Product ID : 2

\

Setup 
-------------

\

To configure the OpenZwave plugin and know how to put Jeedom in
inclusion refer to this
[Documentation](https://jeedom.fr/doc/Documentation/plugins/openzwave/en_US/openzwave.html).

\

> **IMPORTANT**
>
> To put this module in inclusion mode, press the button
> inclusion present under the socket.

\

![inclusion](images/greenwave.Powernode1/inclusion.jpg)

\

Once included you should get this :

\

![Plugin Zwave](images/greenwave.Powernode1/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/greenwave.Powernode1/commandes.jpg)

\

Here is the list of commands :

\

-   State : It is the command which allows to know the status of the
    Outlet

-   We : This is the command that turns on the outlet

-   Off : It is the command which makes it possible to extinguish the catch

-   Power : It is the control which brings up the instantaneous power
    consumed

-   Consumption : It is the order which reports the total consumption

\

Note that on the dashboard the ON / OFF / STATUS commands are grouped together
in one button.

\

### Configuration of the module 

\

You can configure the module according to your
installation. This requires going through the "Configuration" button of the
Jeedom OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
Settings)

\

![Config1](images/greenwave.Powernode1/config1.jpg)

\

As you can see there is not a lot of configuration
for this module.

\

Parameter details :

\

-   1 : Delay before the button flashes : number of seconds
    minimum between two communications (if this delay is exceeded the button
    of the socket will flash)

-   2 : Selected wheel color (automatically detected)

\

### Groups 

\

This module has four association groups, only the 3rd group is
essential.

\

![Groupe](images/greenwave.Powernode1/groupe.jpg)

\

Good to know 
------------

\

Unlike its big sister multiple socket, this socket does not require
polling to boost consumption.

\

### Reset 

\

![Config2](images/greenwave.Powernode1/config2.jpg)

\

You can reset your consumption meter by clicking
on this button available in the System tab. It's necessary to choose
PressButton.

\

### Specificities 

\

Wakeup 
------

\

No notion of wakeup on this module.

\

Faq. 
------

\

Have you associated group 3 of the module with Jeedom ?

\

No. The module does not allow it. Put a small piece of ribbon on it
black adhesive.

\

**@sarakha63**
