# Greenwave PowerNode - 6 outlets

**The module**

![module](images/greenwave.powernode/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/greenwave.powernode/vuedefaut1.jpg)

## Summary

GreenWave's PowerNode power strip is a smart device that connects to your home appliances and electronics to allow you to monitor and control the power consumption of your appliances remotely via a web browser or smartphone. Using Z-Wave technology, the PowerNode power strip is compatible with most home automation boxes on the market such as Fibaro Home Center 2, eedomus or Zipabox. Equipped with 6 ports, it can independently control 6 different electrical devices with a total power of 10A.

The PowerNode power strip collects data on the energy consumption of connected devices and transmits it to the home automation box. You can then control the energy consumption of each connected device. This power strip also allows you to turn devices on or off remotely via web browser or smartphone or set a schedule to automatically turn your devices on or off at pre-set times. A small wheel on the side of the power strip allows you to choose a color that will represent the room to which the power strip is assigned. For example " blue for the bedroom ". This trick will allow you to differentiate your different PowerNode power strips. You can also adjust this wheel on a padlock. This function allows you to lock the power strip in order to avoid switching it off by accident, but control from the home automation box will no longer be possible.

The PowerNode power strip also has a light status indicator that gives different information depending on its color : sockets on or off, limited radio range, inclusion and exclusion mode.

The PowerNode power strip is equipped with overcurrent protection to protect connected devices. The PowerNode will disable ports in the event of a faulty device malfunction or short circuit. Additional protection is provided by the internal fuse located in the power strip.

This power strip is ideal for controlling multimedia devices in a TV cabinet or for controlling computer equipment located in an office and thus avoiding the need to use 6 individual Z-Wave sockets.

## Fonctions

-   6-Port Z-Wave Power Strip
-   Allows monitoring of the consumption of connected devices
-   ON/OFF function
-   Possibility of assigning a number and a color to it in order to differentiate the different PowerNodes of the same installation.
-   On/Off button directly on the power strip
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
-   Maximum Z-Wave Range : 30m
-   Operating temperature : 0°C to +25°C
-   Storage temperature : -20°C to +60°C
-   Maximum humidity : 5% to 90%
-   IP class (Humidity tolerance) : IP20

## Module data

-   Mark : GreenWave
-   Last name : GreenWave\[6 x sockets\]
-   Manufacturer ID : 153
-   Type Product : 3
-   Product ID : 4

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, press the inclusion button on the socket.

![inclusion](images/greenwave.powernode/inclusion.jpg)

Once included you should get this :

![Plugin Zwave](images/greenwave.powernode/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/greenwave.powernode/commandes.jpg)

![Orders](images/greenwave.powernode/commandes2.jpg)

![Orders](images/greenwave.powernode/commandes3.jpg)

![Orders](images/greenwave.powernode/commandes4.jpg)

![Orders](images/greenwave.powernode/commandes5.jpg)

Here is the list of commands :

-   State-1 : This is the command that lets you know the status of socket 1
-   On-1 : This is the command that turns on socket 1
-   Off-1 : This is the command that turns off socket 1
-   Power-1 : This is the command that reports the instantaneous power consumed by socket 1
-   Conso-1 : This is the command that reports the total consumption of socket 1
-   State-2 : This is the command that lets you know the status of socket 2
-   On-2 : This is the command that turns on socket 2
-   Off-2 : This is the command that turns off socket 2
-   Power-2 : This is the command that reports the instantaneous power consumed by socket 2
-   Conso-2 : This is the command that reports the total consumption of socket 2
-   State-3 : This is the command that lets you know the status of socket 3
-   On-3 : This is the command that turns on socket 3
-   Off-3 : This is the command that turns off socket 3
-   Power-3 : This is the command that reports the instantaneous power consumed by socket 3
-   Conso-3 : This is the command that reports the total consumption of socket 3
-   State-4 : This is the command that lets you know the status of socket 4
-   On-4 : This is the command that turns on socket 4
-   Off-4 : This is the command that turns off socket 4
-   Power 4 : This is the command that reports the instantaneous power consumed by socket 4
-   Conso-4 : This is the command that reports the total consumption of socket 4
-   State-5 : This is the command that lets you know the status of socket 5
-   On-5 : This is the command that turns on socket 5
-   Off-5 : This is the command that turns off socket 5
-   Power-5 : This is the command that reports the instantaneous power consumed by socket 5
-   Conso-5 : This is the command that returns the total consumption of socket 5
-   State-6 : This is the command that lets you know the status of socket 6
-   On-6 : This is the command that turns on socket 6
-   Off-6 : This is the command that turns off socket 6
-   Power-6 : This is the command that reports the instantaneous power consumed by socket 6
-   Conso-6 : This is the command that reports the total consumption of socket 6

Note that on the dashboard the ON/OFF/STATUS commands are grouped together in a single button.

### Module configuration

You can configure the module according to your installation. To do this, you must go through the "Configuration" button of the OpenZwave plugin from Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/greenwave.powernode/config1.jpg)

As you can see there is not much configuration for this module.

Parameter details :

-   1 : Delays before the button flashes : minimum number of seconds between two communications (if this time is exceeded the socket button will flash)
-   2 : Selected wheel color (detected automatically)

### Groupes

This module has four association groups, only the 1st group is essential.

![Groupe](images/greenwave.powernode/groupe.jpg)

## Good to know

### Specificities / Polling

Unlike its little sister "One socket", this power strip requires polling to increase consumption.
![Config2](images/greenwave.powernode/config2.jpg)

It is just necessary to activate it for the Power command of each outlet. This will have the effect of raising the two (consumption and power)

### Global Consumption

![consocumul](images/greenwave.powernode/consocumul.jpg)

You can use a virtual to create a cumulative consumption of the 6 sockets.

![consocumul2](images/greenwave.powernode/consocumul2.jpg)

### Reset

![Config3](images/greenwave.powernode/config3.jpg)

You can reset your consumption counter by clicking on this button available in the System tab. (There is one reset per socket). You have to choose PressButton.

## Wakeup

No concept of wakeup on this module.
