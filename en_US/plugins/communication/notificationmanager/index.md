# Notification Manager plugin

This plugin is used to manage notifications (recovery in case of error, generation of text, etc...).

# Plugin configuration

After downloading the plugin, all you have to do is activate the plugin, no other configuration is necessary.

# Equipment configuration

## Equipement

Equipment configuration **Notification Manager** is accessible from the Plugins → Communication menu. You will find here the configuration of your equipment :

- **Name of the notifier** : Name of equipment.
- **Parent object** : indicates the parent object to which the equipment belongs.
- **Activate** : makes your equipment active.
- **Visible** : makes your equipment visible on the dashboard.

## Commande

This is where you will be able to add notification commands. For each notification command, you will be able to define the message type commands to use in order of priority.

![Notification Manager présentation](./images/notifmanager1.png)

You have options :

- **Execution test** : allows to add a test before the execution of the notification. If the test is false the plugin will do nothing, if it is true then it will execute the notifications in order of priority until it finds a functional one. If the field is empty then the test is ignored.

> **NOTE**
>
> You also have a test per order in the notification.

> **Important**
>
> The plugin does not support renaming of notification commands. If you want to change the name of a notification command, you will have to switch to all the scenarios / equipment that uses it to update


**Simple example**

*You can put a Slack type command first, then an SMS type command. If sending by Slack does not work then it will send the message by SMS.*

**More complex example**

*You can put a Slack type command and an SMS command first (in the same box, separated by ``&&``), then Mail. The plugin will first send the message by Slack and SMS, if both don't work then it will send the notification by email.*

# Text generation

The plugin also offers a possibility of text generation so that the messages are not always identical. The system is the same as for interactions :

- ``[Coucou|Salut] ca va ?`` will return either "*Hi, how are you ?*" or  "*Hi, how are you ?*"

# Conditional text

It is also possible to insert conditional text in the form ``{(test) ? vrai : faux}``.

> **Important**
>
> It is absolutely necessary to put the test (the condition) in parentheses.

Here is an example for the morning weather with conditional text and text generation :

``[Bonjour|Salut|Coucou] [j'espères que tu as bien dormi ?|bien dormi ?|ça va ?]. [Aujourd'hui il fera|Aujourd'hui le temps sera|La météo annonce] #[Maison][Météo][Condition]# [et la température sera de|avec] {(#[Maison][Météo][Température Max]# < 6) ? [oula il va faire froid|oula il caille]: } #[Maison][Météo][Température Max]# degrés.``

# FAQ

>**Does the plugin manage ask ?**
>
>Yes the plugin manages the ask.
