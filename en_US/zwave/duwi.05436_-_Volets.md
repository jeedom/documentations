# DUWI 05436 "Roller shutter"

 **The module**

![1 Module](images/duwi.05436/1-Module.PNG)

**The Jeedom visual**

![Visuel defaut](images/duwi.05436/Visuel_defaut.PNG)

## Summary 

The DUWI 05436 roller shutter module allows you to control roller shutters in two directions.

Its main features are :

-   The possibility of using a 'Common' on which to switch the ascent or descent. Suddenly it is possible to control both directions with any type of voltage, even a neutral.
-   The possibility of sending a continuous ascent / descent signal without time limit.

Attention: this module does not send its status to the z-wave controller when the user presses the buttons directly. You have to do a 'Refresh' on its position to update, or adjust the Poll (see below).

## Functions

-   Down up
-   A common wire which will be switched on ascent or descent
-   Requires neutral to operate
-   Fuse protection
-   Rise and fall times adjustable by parameter setting or by learning on the module
-   The switch is supplied with the module, not interchangeable

## Technical characteristics

-   Type of module : Z-Wave receiver / actuator
-   230V, 50Hz power supply
-   Neutral required
-   Max load : 1800W (resistive), 460VA (inductive)
-   Fuse : T8AH
-   Frequency : 868.42 Mhz
-   Dimensions : 52 x 52 x 31mm
-   Temperature range : 0 ° C / + 40 ° C

## Module data

-   Mark : Popp / Duwi
-   Name : ZW ESJ Blind Control
-   Manufacturer ID : 100
-   Product type : 16385
-   Product ID : 0

## Connection

![2 Montage](images/duwi.05436/2-Montage.PNG)

## Setup

To configure the OpenZwave plugin and know how to put Jeedom in inclusion, refer to this [Documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **IMPORTANT**
>
> To put the module in inclusion mode, press the up or down button three times. Exclusion is done the same way.

Once included you should get this :

![Plugin Zwave](images/duwi.05436/3-Inclusion.PNG)

### Commands

Once the module is recognized, the commands associated with the module will be available.

![Commands](images/duwi.05436/4-Commandes.PNG)

Here is the list of commands :

-   State : this is the current position of the shutter, in percentage from 0 to 99
-   Go down : command to descend completely
-   Ascend : command to mount completely
-   STOP : immediate movement stop
-   Refresh : refresh the current state of the module
-   Level : slider to position a partial opening

#### Setting the rise and fall times :

The switch must be removed to have access to the two "up" and "down" buttons".

Position the flap at the very top if you want to adjust the descent time, and vice versa.

Press at least 2s on both buttons (up and down) simultaneously. The LED should start to flash green.

Then press and hold the down or up button until you reach the desired position. When you release the button, the LED lights up solid green for a few seconds. Time is memorized.

Repeat the operation in the other direction.

### Setup du module

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of Jeedom's OpenZwave plugin.

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![Config1](images/duwi.05436/5-Paramètres.PNG)

Parameter details :

-   0 : Running Time :
These are the rise and fall times. You should find your learning there.
Coding is done by two pairs of bytes : the first for the ascent and the second for the descent.
The values are coded in hexadecimal in the module and reset in decimal in the display of Jeedom.
For example : for 4626, this gives in hexadecimal : 0x1212. Either 0x12 for the ascent and 0x12 for the descent. Either, brought back to decimal : 18s for ascent and descent.
To note : forcing a value to zero for this parameter will imply that the module will switch up or down without time limit. It will then be necessary to send a 'Stop' to interrupt.
-   1 : Stop-functionnality : Enabled or Disabled :
Used to indicate whether pressing in the opposite direction during movement stops the shutter or immediately returns it in the opposite direction.

### Groups

This module has only one association group in which your Z-Wave controller must be.

![Groupe](images/duwi.05436/6-Groupes.PNG)

## Good to know

-   As specified at the beginning, the module does not report the position changes made by the user by pressing the switch directly. To have a return of state, it is thus necessary :
    - either configure a poll at 5 minutes in the configuration, tab 'values'
![Groupe](images/duwi.05436/7-Poll.PNG)
  - either create a scenario which launches the 'Refresh' command every x minutes (at least 1 minute)
-   Setting operation without time limit can be useful for VMC commands
