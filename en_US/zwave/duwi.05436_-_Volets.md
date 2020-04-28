DUWI 05436 "Roller shutter" 
==========================

\

-   **The module**

\

![1 Module](images/duwi.05436/1-Module.PNG)

\

-   **The Jeedom visual**

\

![Visuel defaut](images/duwi.05436/Visuel_defaut.PNG)

\

Summary 
------

\

The DUWI 05436 roller shutter module is used to control shutters
rolling in two directions.

Its main features are :

-   The possibility of using a 'Common' on which to switch the climb
    or the descent. So it is possible to order both
    directions with any type of voltage, even a neutral.

-   The ability to send a continuous up / down signal without
    time limit.

Be careful: this module does not send its status to the z-wave controller when
the user presses the buttons directly. You have to make a
'Refresh 'on its position to update, or adjust the Poll (see
further).

\

Functions 
---------

\

-   Down up

-   A common wire which will be switched on ascent or descent

-   Requires neutral to operate

-   Fuse protection

-   Rise and fall times adjustable by setting or by
    module learning

-   The switch is supplied with the module, not interchangeable

\

Technical characteristics 
---------------------------

\

-   Type of module : Z-Wave receiver / actuator

-   230V, 50Hz power supply

-   Neutral required

-   Max load : 1800W (resistive), 460VA (inductive)

-   Fuse : 

-   Frequency : 868.42 Mhz

-    : 

-   Temperature range : 0 ° C / + 40 ° C

\

Module data 
-----------------

\

-   Mark : Popp / Duwi

-   Name : 

-   Manufacturer ID : 100

-   Product type : 16385

-   Product ID : 0

\

Connection 
---------

![2 Montage](images/duwi.05436/2-Montage.PNG)

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
> To put the module in inclusion mode, press three times
> on the ascent or descent. Exclusion is done the same way.

\

Once included you should get this :

\

![Plugin Zwave](images/duwi.05436/3-Inclusion.PNG)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![Commands](images/duwi.05436/4-Commands.PNG)

\

Here is the list of commands :

\

-   State : this is the current position of the shutter, in percentage from 0 to 99

-   Go down : command to descend completely

-   Ascend : command to mount completely

-   STOP : immediate movement stop

-   Refresh : refresh the current state of the module

-   Level : slider to position a partial opening

\

#### Setting the rise and fall times : 

The switch must be removed to access the two buttons
"ascent "and" descent".

Position the flap at the very top if you want to adjust the
descent, and vice versa.

Press at least 2s on both buttons (up and down)
simultaneously. The LED should start to flash green.

Then press and hold the down or up button,
until reaching the desired position. When you let go of the button, the
LED lights up solid green for a few seconds. Time is memorized.

Repeat the operation in the other direction.

\

### Setup of the module 

\

Then if you want to configure the module according to
of your installation, you have to go through the button
"Setup "of Jeedom's OpenZwave plugin.

\

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
settings)

\

![Config1](images/duwi.05436/5-Paramètres.PNG)

\

Parameter details :

\

-   0 :  :

These are the rise and fall times. You should find your
learning.

Coding is done by two pairs of bytes : the first for the climb
and the second for the descent.

The values are coded in hexadecimal in the module and reset
decimal in Jeedom display.

For example : for 4626, this gives in hexadecimal : . Either 0x12
for ascent and 0x12 for descent. Or, brought back again in
decimal : 18s for ascent and descent.

To note : forcing a value to zero for this parameter will imply that the
module will switch on ascent or descent without time limit. It will take
then send a 'STOP' to interrupt.

-   1 :  : Enabled or Disabled :

Used to indicate whether pressing in the opposite direction during a
displacement stops the shutter or immediately returns it in the direction
opposite.

\

### Groups 

\

This module has only one association group in which must be
find your Z-Wave controller.

\

![Groupe](images/duwi.05436/6-Groups.PNG)

\

Good to know 
------------

\

-   As specified at the beginning, the module does not report changes in
    positions made by the user by pressing directly
    on the switch. To have a return of state, it is thus necessary :

        o either configure a poll at 5 minutes in the configuration, tab 'values'

![Groupe](images/duwi.05436/7-Poll.PNG)

    o either create a scenario which launches the 'Refresh' command every x minutes (at least 1 minute)

-   Setting an operation without time limit may prove to be
    useful for VMC commands

\

### Alternative visual 

\

![Visuel custom](images/duwi.05436/Visuel_custom.PNG)

> **Tip**
>
> The "Store \ _2 \ _IMG" Widget used on the "Status" info command. This
> widget is nice because it shows 'partially open' states'.

**@Theduck38**
