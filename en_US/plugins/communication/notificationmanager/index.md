# Notification Manager plugin

This plugin allows you to manage notifications (recovery in case of error, generation of text ...)

# Plugin configuration

After downloading the plugin, you will simply need to activate the plugin.

# Equipment configuration

## Equipement

The configuration of the Notification Manager devices is accessible from the Plugins menu then Communication. You will find here the configuration of your equipment :

- Name of the equipment to notify : Name of equipment
- Parent object : its parent object
- Activer
- Visible

## Commande

This is where you will be able to add notification commands. Once add for each command you will be able to define the message type commands to use in order of priority.

You have options :

- Execution test : allows to add a test before the execution of the notification, if the test is false the plugin will do nothing, if it is true then it will execute the notifications in the order of priorities until finding one that works. If the field is empty then the test is ignored.

> **NOTE**
>
> You also have a test per order in the notification.


**Simple example**

Example you can put a Slack type command first and then an SMS type command. If sending by Slack does not work then it will send the message by SMS.

**More complex example**

Example you can put a Slack type command and an SMS command first (in the same box separated by &&), then email. When using the plugin will first send the message on Slack and SMS, if the two do not work then it will send by email.

# Text generation

The plugin also offers a possibility of text generation so that the messages are not always the same. The system is the same as for interactions :

- [Hello\|Hi, how are you ? => Will give either "Hi, how are you?" or "Hi how are you ?"

# Conditional text

You can also put conditional text in the form {(test) ? True : faux}.

> **Important**
>
> It is absolutely necessary to put the test (the condition) in parenthesis

Here is an example for the morning weather with conditional text and text generation :

\[Hello\|Salut\|Hi \] \ [I hope you slept well ?\|sleep well ?\|It's okay ?\] . \ [Today it will be \|Today the weather will be \|Weather forecast \] \#[Maison\]\[Météo\]\[Condition\]\# \ [and the temperature will be \|with \] {(\#\[Maison\]\[Météo\]\[Température Max\]\# < 6) ? \ [oula it will be cold \|oula it curdles \]: } \#\[Maison\]\[Météo\]\[Température Max\]\# degrees.

# FAQ

>**Does the plugin manage ask ?**
>
>Yes the plugin manages the ask.
