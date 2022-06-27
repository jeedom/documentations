# Greenwave PowerNode - 1 socket

**The module**

![module](images/greenwave.Powernode1/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)

## Summary

The GreenWave PowerNode socket module is a smart device that connects to one of your household appliances and electronics to allow you to monitor and control power consumption remotely via a web browser or smartphone.

Using Z-Wave technology, the PowerNode controlled socket is compatible with most home automation boxes on the market such as Fibaro Home Center 2, eedomus or Zipabox.

The PowerNode socket module collects data on the energy consumption of the connected device and transmits it to the home automation box. This controlled outlet also allows you to turn the device on or off remotely via a web browser or smartphone or set a schedule to automatically turn your device on or off at predefined times.

A small wheel on the side of the socket allows you to choose a color that will represent the room to which it is assigned. For example " blue for the bedroom ". This trick will allow you to differentiate your different PowerNode sockets and power strips. You can also adjust this wheel on a padlock. This function makes it possible to lock the socket in order to avoid switching it off by accident, but control from the home automation box will no longer be possible.

The PowerNode controlled outlet also has a light status indicator that gives different information depending on its color : sockets on or off, limited radio range, inclusion and exclusion mode.

The PowerNode socket module is equipped with overcurrent protection to protect the connected device. The PowerNode socket will be disabled in the event of a faulty device malfunction or a short circuit. Additional protection is provided by the internal fuse located in the socket.

## Fonctions

-   Control a lamp or a device remotely
-   Plug module integrating directly between an electrical outlet and the load to be controlled
-   Allows consumption monitoring of the connected device
-   ON/OFF function
-   Possibility of assigning a number and a color to it in order to differentiate the different PowerNodes of the same installation
-   On/Off button directly on the socket
-   Overcurrent protection
-   Bright status indicator

## Technical characteristics

-   Feed : 250V\~AC, 50Hz
-   Max charge current : 10A
-   Maximum load power : 2400W (@240V)
-   Standby consumption : 0.4W
-   Measurement accuracy : ±0.1W
-   Overcurrent protection : 10A internal fuse
-   Plug type : DIN49440 / CEE 7/7 (Schuko)
-   Radio Frequency Z-Wave : 868.42MHz
-   Maximum Z-Wave range : 30m
-   Operating temperature : 0°C to +25°C
-   Storage temperature : -20°C to +60°C
-   Maximum humidity : 5% to 90%
-   IP class (Humidity tolerance) : IP20

## Module data

-   Mark : GreenWave
-   Last name : GreenWave\[1 x socket\]
-   Manufacturer ID : 153
-   Type Product : 2
-   Product ID : 2

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press the inclusion button under the socket.

![inclusion](images/greenwave.Powernode1/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/greenwave.Powernode1/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/greenwave.Powernode1/commandes.jpg)

Here is the list of commands :

-   State : This is the command that lets you know the status of the socket
-   We : This is the command that allows you to turn on the socket
-   Off : This is the command that allows you to turn off the socket
-   Powerful : This is the command that returns the instantaneous power consumed
-   Consumption : It is the command that returns the total consumption

Note that on the dashboard the ON/OFF/STATUS commands are grouped together in a single button.

### Module configuration

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/greenwave.Powernode1/config1.jpg)

As you can see there is not much configuration for this module.

Parameter details :

-   1 : Delay before button flashing : minimum number of seconds between two communications (if this time is exceeded the socket button will flash)
-   2 : Selected wheel color (detected automatically)

### Groupes

This module has four association groups, only the 3rd group is essential.

![Groupe](images/greenwave.Powernode1/groupe.jpg)

## Good to know

Unlike its big sister multi-socket, this socket does not require polling to increase consumption.

### Reset

![Config2](images/greenwave.Powernode1/config2.jpg)

You can reset your consumption counter by clicking on this button available in the System tab. You have to choose PressButton.

### Specificities

## Wakeup

No concept of wakeup on this module.
