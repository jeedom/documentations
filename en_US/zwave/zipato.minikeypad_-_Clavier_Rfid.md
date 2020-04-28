Zipato miniKeypad RFID 
======================

\

-   **The module**

\

![module](images/zipato.minikeypad/module.jpg)

\

-   **The Jeedom visual**

\

![vuedefaut1](images/zipato.minikeypad/vuedefaut1.jpg)

\

Summary 
------

\

Control your security system with this mini Zipato wall keypad
!

With this Z-Wave compatible RFID keyboard, you will be able to activate or
easily deactivate your alarm system. The "Home" and
"Away "allow you to arm / disarm the security system and / or
execute home automation scenarios quickly. In addition to using the
numeric keypad, you can also pass an RFID badge in front of the
keyboard to arm / disarm the system. The keyboard transmits to your
home automation controller the identifier of the badge which has been recognized. You
can easily create scenarios based on the person
who used his badge.

\

Functions 
---------

\

-   CODED and RFID keypad

-   Supports Z-Wave technology

-   Arm / disarm your security system

-   Access control by reading RFID badges

-   Access control by code keypad

-   Tamper protection

-   LED indicator to confirm each action

-   Integrated buzzer for audible indication of arming / disarming
    the alarm for example

\

Technical characteristics 
---------------------------

\

-   Type : Z-Wave slave

-   Food : 2x AA 1.5V batteries

-   Frequency : 868.42 MHz

-   Radio range : 30m in open field

-   RFID protocol : ISO15693, ISO18000-3, Tag-it ™, RFID

-   Buzzer : 60dBa at 10 cm distance

-   Storage temperature : -5 ° C to + 65 ° C

-   Humidity for storage : 10% to 70%

-   Operating temperature : 10 ° C to 40 ° C

-   Operating humidity : 30% to 80%

-   Dimensions : 62 x 62 x 20 mm

-   Certifications : Security : UL EMC : FCC, CE RoHS

\

Module data 
-----------------

\

-   Mark : Zipato

-   Name : Zipato Mini Keypad RFID

-   Manufacturer ID : 151

-   Product Type : 24881

-   Product ID : 17665

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
> To put this module in inclusion mode, just press two
> seconds on the metal tab (the red LED on the front panel
> flash twice) and release the tab so that
> inclusion takes place.

\

![inclusion](images/zipato.minikeypad//inclusion.jpg)

\

Once included you should get this :

\

![information](images/zipato.minikeypad/information.jpg)

\

### Commands 

\

Once the module has been recognized, the commands associated with the module will be
available.

\

![commandes](images/zipato.minikeypad/commandes.jpg)

\

Here is the list of commands :

\

-   ACTION : it is the command which will go up the home / away (5 for away 6
    for home)

-   Sabotage : this is the sabotage command (it is triggered in
    tearing out)

-   CODED : displays the badge or keypad code when the code entered
    is not in one of the memories

-   Drums : it's the battery command

\

### Setup of the module 

\

> **IMPORTANT**
>
> During a first inclusion always wake up the module just after
> inclusion.

\

Then if you want to configure the module according to
of your installation, you have to go through the button
"Setup "of Jeedom's OpenZwave plugin.

\

![bouton configuration](images/plugin/bouton_configuration.jpg)

\

You will arrive on this page (after clicking on the tab
Settings)

\

![config1](images/zipato.minikeypad/config1.jpg)

\

Parameter details :

\

-   1: allows to reset the default config (not recommended)

-   2: cancellation period (not to be changed)

-   3: return by beep : allows to activate or not a series of 8 beeps
    after recognition of a badge / code

-   4: number of beeps per second (do not change has no effect)

-   5: operating mode : normal or always awake mode
    (not recommended because very very battery consuming)

\

### Groups 

\

This module has two association groups.

\

![groupe](images/zipato.minikeypad/groupe.jpg)

\

> **IMPORTANT**
>
> For optimum operation of your module. Jeedom must
> be associated at least with group 1.

### Badges / codes 

\

In the equipment page there is an Assistant tab.

\

![bouton assistant](images/plugin/bouton_assistant.jpg)

\

This allows you to add codes. You will see a table there.

\

![config2](images/zipato.minikeypad/config2.jpg)

\

-   This table allows you to view the memories occupied on your
    keyboard

-   To register a new code click on the green button on the
    desired memory and follow the steps

-   To delete a code just click on the red button.

-   It is impossible to save the same code / badge on two memories
    different

-   It is impossible (for security reasons) to read the value of a
    registered code

\

> **IMPORTANT**
>
> Remember to wake up the module after adding a code or badge.

\

Examples of use 
----------------------

\

![exemple](images/zipato.minikeypad/exemple.jpg)

\

The trigger is the event command, in fact this is
updated only when a valid code / badge has been presented. If the
value is 6 (home) we deactivate the alarm (for example), or turn on the
multiple socket, we turn on the light depending on the brightness, we send
a notification to report that someone has returned, we launch a
voice synthesis to make a weather report for example. Otherwise (necessarily
5) we activate the alarm, we cut the power strip, we send a
notification to report that the house is empty.

\

Good to know 
------------

\

### Specificities 

\

The keypad reads codes / badges in two ways :

\

-   when you press home / away for the first 1 to 2
    seconds if you start typing a code it will read that code

-   if nothing is done within the first 1 to 2 seconds, it starts
    RFID badge reading mode (red light on). At this moment
    he can read a badge, not before.

\

Wakeup 
------

\

To wake up this module there are two ways to proceed :

\

-   press the tamper button then release after 1 to 2 seconds

-   press Home, a random number and Enter

\

Faq. 
------

\

This module wakes up by pressing the tamper button and
relaxing. He can also wake up by pressing Home then 1 then
Enter.

\

This module is a battery module, the new configuration will be
taken into account at the next wake up.

\

IMPORTANT note 
---------------

\

> **IMPORTANT**
>
> You have to wake up the module : after its inclusion, after a change
> of the configuration, after a change of wake up, after a
> change of association groups

\

**@sarakha63**
