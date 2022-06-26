# Zipato miniKeypad RFID

**The module**

![module](images/zipato.minikeypad/module.jpg)

**The Jeedom visual**

![vuedefaut1](images/zipato.minikeypad/vuedefaut1.jpg)

## Summary

Control your security system with this Zipato mini wall keypad !

With this Z-Wave compatible RFID keypad, you will be able to easily activate or deactivate your alarm system. The "Home" and "Away" keys allow you to arm/disarm the security system and/or run home automation scenarios quickly. In addition to using the numeric keypad, you can also swipe an RFID tag in front of the keypad to arm/disarm the system. The keyboard transmits to your home automation controller the identifier of the badge that has been recognized. You can easily create scenarios based on the person who used their badge.

## Fonctions

-   Keypad and RFID
-   Support Z-Wave technology
-   Arm/disarm your security system
-   Access control by reading RFID badges
-   Code keypad access control
-   Tamper protection
-   LED indicator to confirm each action
-   Built-in buzzer for audible indication of alarm arming/disarming, for example

## Technical characteristics

-   Kind : Z-Wave slave
-   Feed : 2x AA 1.5V batteries
-   Frequency : 868.42MHz
-   Wireless range : 30m in open field
-   RFID protocol : ISO15693, ISO18000-3, Tag-it™, RFID
-   Buzzer : 60dBa at 10cm distance
-   Storage temperature : -5°C to +65°C
-   Humidity for storage : 10% to 70%
-   Operating temperature : 10°C to 40°C
-   Operating humidity : 30% to 80%
-   Dimensions : 62 x 62 x 20mm
-   Certificates : Security : UL EMC : FCC, CE RoHS

## Module data

-   Mark : Zipato
-   Last name : Zipato Mini RFID Keypad
-   Manufacturer ID : 151
-   Type Product : 24881
-   Product ID : 17665

## Configuration

To configure the OpenZwave plugin and know how to include Jeedom refer to this [documentation](https://doc.jeedom.com/en_US/plugins/automation%20protocol/openzwave/).

> **Important**
>
> To put this module in inclusion mode, simply press the metal tab for two seconds (the red LED on the front panel should flash twice) and release the tab for the inclusion to take place.

![inclusion](images/zipato.minikeypad//inclusion.jpg)

Once included you should get this :

![information](images/zipato.minikeypad/information.jpg)

### Commandes

Once the module is recognized, the commands associated with the module will be available.

![commandes](images/zipato.minikeypad/commandes.jpg)

Here is the list of commands :

-   Stock : this is the command that will raise the home/away (5 for away 6 for home)
-   Sabotage : this is the sabotage command (it is triggered in the event of tearing)
-   Coded : displays the badge or keypad code when the code entered is not in one of the memories
-   Battery : this is the battery command

### Module Setup

> **Important**
>
> During a first inclusion always wake up the module right after the inclusion.

Then if you want to configure the module according to your installation, you have to go through the "Configuration" button of the Jeedom OpenZwave plugin.

![bouton configuration](images/plugin/bouton_configuration.jpg)

You will arrive on this page (after clicking on the Settings tab)

![config1](images/zipato.minikeypad/config1.jpg)

Parameter details :

-   1: allows you to restore the default config (not recommended)
-   2: cancellation period (not to be modified)
-   3: return by beep : allows you to activate or not a series of 8 beeps after recognition of a badge/code
-   4: number of beeps per second (leaving it unchanged has no effect)
-   5: operating mode : normal or always awake mode (not recommended because very very consumer of batteries)

### Groupes

This module has two association groups.

![groupe](images/zipato.minikeypad/groupe.jpg)

> **Important**
>
> For optimum operation of your module. Jeedom must be associated at least with group 1.

### Badges / codes

In the equipment page there is an Assistant tab.

![bouton assistant](images/plugin/bouton_assistant.jpg)

This allows you to add codes. You will see a table there.

![config2](images/zipato.minikeypad/config2.jpg)

-   This table allows you to view the memories occupied on your keyboard
-   To register a new code click on the green button on the desired memory and follow the steps
-   To delete a code, just click on the red button.
-   It is impossible to save the same code/badge on two different memories
-   It is impossible (for security reasons) to read the value of a registered code

> **Important**
>
> Remember to wake up the module after adding a code or badge.

## Examples of use

![exemple](images/zipato.minikeypad/exemple.jpg)

The trigger is the event command, in fact it is updated only when a valid code/badge has been presented. If the value is 6 (home) the alarm is deactivated (for example), or the power strip is switched on, the light is switched on according to the brightness, a notification is sent to indicate that someone has returned, a summary is launched voice to make a weather report for example. Otherwise (necessarily 5) we activate the alarm, we cut the power strip, we send a notification to indicate that the house is empty.

## Good to know

### Specificities

The keypad reads codes/badges in two ways :

-   when you press home/away for the first 1-2 seconds if you start typing a code, it will read that code
-   if nothing is done in the first 1-2 seconds, it goes into RFID badge reading mode (red light on). At this moment he can read a badge, not before.

## Wakeup

To wake up this module there are two ways to proceed :

-   press the tamper button then release after 1 to 2 seconds
-   press Home, a random number and Enter

## Important Note

> **Important**
>
> You have to wake up the module : after its inclusion, after a change of configuration, after a change of wake up, after a change of association groups
