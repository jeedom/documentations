# IPX800v4 plugin

This plugin allows you to manage an IPX 800 v4

# Plugin configuration

After downloading the plugin, you just need to activate it and check the boxes that apply to you for requests to IPX800v4 (example check X-Dimmer if you have an X-dimmer). You can also choose the frequency of requests to lighten the load on ipx800v4

> **Important**
>
> After each modification of the frequency or requests you have to restart the daemon so that it is taken into account

> **Important**
>
> To lighten the load, it is recommended to uncheck ALL type requests and just check the APIs that concern you (you will find details in the API documentation for IPX800v4)

> **NOTE**
>
> You can see on this page the status of the daemon monitoring the IPX800

# Equipment configuration

The configuration of IPX800 devices is accessible from the menu
plugin then home automation protocol :

Here you find all the configuration of your equipment :

-   **Name of the equipment IPX800** : IPX800 Equipment Name,
-   **Parent object** : indicates the parent object to which the equipment belongs,
-   **Activate** : makes your equipment active,
-   **Visible** : makes your equipment visible on the dashboard,
-   **Category** : equipment categories (it can belong to several categories),
-   **IP** : IPX800 Ip,
-   **API key** : API key of the IPX800 (by default the API key is apikey)

The default plugin does not create anything, it will be up to you to do so by
depending on your configuration but you will be guide.

# Commande

## Action

You have the types of action :

- We : allows you to set an output (or virtual input) to 1, or to assign a value to an analog input (or counter)
- Off : allows to set to 0 an output (or virtual input)
- Toggle : allows to reverse the state of an output (or virtual input)
- ...

You have the types of actuators :

- Relais
- Virtual output
- Virtual entrance
- Virtual analog input
- Compteur
- Pilot wire
- ...

> **NOTE**
>
> Certain type of actuator can be hidden depending on the type of action

Then depending on the type of action and the actuator you have several parameters which can be :

- relay number
- virtual output number
- virtual entry number
- analog input number and value to assign (leave blank if you want to choose with the slider)
- counter number and operation (ex +200 or -100)
- pilot wire number and order value (0 comfort, 1 eco, 2 frost-free, 3 off, 4 comfort-1, 5 comfort-2)
- ...

## Info

You have different types (depending on your extensions) :

- Relais
- Digital input
- Virtual entrance
- Virtual output
- Watchdog
- EnOcean
- Analog input
- Virtual analog input
- Compteur
- Roller shutter : option in form 1-3 for part 3 of extension VR 1
- THL : in the form 1-TEMP for the temperature of the sensor 1, 3-HUM for the humidity of the sensor 3 or 2-LUM for the brightness of the sensor 2
- 0-10v extension
- Pilot wire
- Dimmer
- PWM
- Thermostat
- EnOcean
- ...

For each type jeedom will ask you the number of the desired information

# Push information from IPX to Jeedom

To avoid making information refresh in Jeedom or too frequent interrogations (which can harm the ipx800) it is possible to ask the IPX800 to push the information towards Jeedom (attention it is not possible for all input / output types)

Here is the syntax to use in an IPX push to :

- Update of all digital inputs : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allD&data=$D``
- Update of all relays : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allR&data=$R``
- Update of all virtual outputs : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allVO&data=$VO``

Then it will make you a scene by type (entry, relay ...) with :

- Event : ``ON EVENT`` and choose the desired type (for example Physical outputs)
- Action : ``ON``
- Result : ``PUSH`` and choose the corresponding push (for example Jeedom Relais)

# Template

To help you there is a template that allows you to create certain types of orders at once and faster.
