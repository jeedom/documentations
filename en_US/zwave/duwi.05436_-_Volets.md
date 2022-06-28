# DUWI 05436 "Roller shutter"

 **The module**

![1 Module](images/duwi.05436/1-Module.PNG)

**The Jeedom visual**

![Visuel defaut](images/duwi.05436/Visuel_defaut.PNG)

## Summary 

The roller shutter module DUWI 05436 allows roller shutters to be controlled in two directions.

Its main characteristics are :

-   The ability to use a 'Common' to switch up or down. As a result, it is possible to control both directions with any type of voltage, even a neutral.
-   The ability to send a continuous up/down signal with no time limit.

Attention: this module does not send its state to the z-wave controller when the user directly presses the buttons. It is necessary to do a 'Refresh' on its position to update, or to adjust the Poll (see below).

## Fonctions

-   Down up
-   A common wire that will be switched up or down
-   Requires neutral to operate
-   Fuse protection
-   Rise and fall times adjustable by setting or by learning on the module
-   The switch is supplied with the module, not interchangeable

## Technical characteristics

-   Mod type : Z-Wave receiver / actuator
-   Power supply 230V, 50Hz
-   Neutral required
-   Max load : 1800W (resistive), 460VA (inductive)
-   Fuse : T8AH
-   Frequency : 868.42Mhz
-   Dimensions : 52x52x31mm
-   Temperature range : 0°C / +40°C

## Module data

-   Mark : Popp/Duwi
-   Last name : ZW ESJ Blind Control
-   Manufacturer ID : 100
-   Product type : 16385
-   Product ID : 0

## Connexion

![2 Montage](images/duwi.05436/2-Montage.PNG)

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put the module in inclusion mode, press up or down three times. The exclusion is done in the same way.

Once included you should get this :

![Plugin Zwave](images/duwi.05436/3-Inclusion.PNG)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![Orders](images/duwi.05436/4-Commandes.PNG)

Here is the list of commands :

-   State : this is the current position of the pane, in percentage from 0 to 99
-   To come down : command to descend completely
-   To go up : command to fully mount
-   Stop : immediate stop of the movement
-   Refresh : refresh the current state of the module
-   Level : slider to position a partial opening

#### Adjusting the rise and fall times :

You have to remove the switch to have access to the two "up" and "down" buttons".

Position the flap at the very top if you want to adjust the descent time, and vice versa.

Press at least 2s on the two buttons (up and down) simultaneously. The LED should start flashing green.

Then continuously press the down or up button until you reach the desired position. When you release the button, the LED lights up in fixed green for a few seconds. The time is memorized.

Repeat the operation in the other direction.

### Module configuration

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the settings tab)

![Config1](images/duwi.05436/5-Paramètres.PNG)

Parameter details :

-   0 : Running Time :
These are the rise and fall times. You should find your learning there.
The coding is done by two pairs of bytes : the first for the ascent and the second for the descent.
The values are coded in hexadecimal in the module and returned to decimal in the Jeedom display.
For instance : for 4626, this gives in hexadecimal : 0x1212. Either 0x12 for up and 0x12 for down. Either, brought back again in decimal : 18s for up and down.
To note : forcing a value to zero for this parameter will imply that the module will switch to rise or fall without time limit. It will then be necessary to send a 'Stop' to interrupt.
-   1 : Stop-functionality : Enabled or Disabled :
Used to indicate whether pressing in the opposite direction during a movement stops the shutter or sends it back immediately in the opposite direction.

### Groupes

This module has only one association group in which your Z-Wave controller must be located.

![Groupe](images/duwi.05436/6-Groupes.PNG)

## Good to know

-   As specified at the beginning, the module does not report the changes of positions made by the user by pressing the switch directly. To have a status feedback, it is therefore necessary :
    - either configure a poll at 5 minutes in the configuration, 'values' tab'
![Groupe](images/duwi.05436/7-Poll.PNG)
  - either create a scenario that launches the 'Refresh' command every x minutes (at least 1 minute)
-   Setting an operation without time limit can be useful for VMC controls
