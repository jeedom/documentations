This plugin allows to manage the notifications (recovery in case of error, generation of text ...)

# Plugin configuration

After downloading the plugin, you will only have to activate the
plugin

# Device configuration

## Device

The configuration of the Notification Manager devices is accessible from the menu
Plugins then Communication

Vous retrouverez ici la configuration de votre équipement :

- Notify device name: name of the device
- Parent object: its parent object
- Enable
- Visible

## Command

This is where you will be able to add notifications commands. Once added for each command you will be able to define the message commands to be used in the order of precedence.

Vous avez comme options :

- Test d'éxécution : permet d'ajouter un test avant l'execution de la notification, si le test est faux le plugin ne fera rien, si il est vrai alors il executera les notification dans l'ordre de prioritées jusqu'a trouver une qui marche. Si le champs est vide alors le test est ignoré.

> **NOTE**
>
> Vous avez aussi un test par commande dans la notification


**Simple example**

Example you can put first a Slack command and then an SMS command. If sending by Slack does not work then it will send the message via SMS

**More complex example**

Example you can put first a Slack command and an SMS command (in the same box separated by &&), then mail. When used the plugin will first send the message on Slack and SMS, if both do not work then it will send it by email

# Text generation

Le plugin offre aussi une possibilité de generation de texte pour que les messages ne soit pas toujours les meme. Le systeme est le meme que pour les interactions :
- [Hey\|Hi] how are you? => Will give either "Hey how are you?" or "Hi how are you?"

# Conditional text

You can also put conditional text as {(test)? true : false}.

> **IMPORTANT**
>
> It is absolutely necessary to put the test (the condition) between brackets

Voici un exemple pour la méteo du matin avec texte conditionnel et génération de texte :

\[Hello\|Hi\|Hey\] \[I hope you slept well?\|Did you get a good night?\|How are you?\]. \[Today it will be\|Today the weather will be\|Weather forecast\]\#[House\]\[Weather\]\[Condition\]\#\[and the temperature will be\|\] {(\#\[House\]\[Weather\]\[Temperature Max\]\#<6)?\[gonna be cold\it is freezing outside\]:} \#\[House\]\[Weather\]\[Temperature Max\]\# degrees.

FAQ
===

> **Does the plugin handle ask feature?**
>
> Yes the plugin handles ask feature.
