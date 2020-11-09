# Alexa Smarthome plugin

This plugin makes it possible to make the link between your Jeedom and Alexa

It can operate through a cloud service provided by Jeedom.

> **Important**
>
> The plugin requires a subscription to voice services. You can manage your subscription [here](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

> **Important**
>
> AMAZON requires that your Jeedom be accessible in HTTPS (the plugin does not work in HTTP) with a valid certificate (therefore no self-signed certificate)
>
> Thanks to the Power or Ultimate Service Packs, your Jeedom is accessible via HTTPS.
> If you have a Community Service Pack, you must install yourself an SSL certificate issued by a certification authority (ex: Let's encrypt, ...).

> **Important**
>
> The plugin does not support equipment with dual functions (2 output as certain zwave Fibaro module). You absolutely have to go through 2 virtual ones to break it down.

# Establishing the connection to Alexa

> **Important**
>
> It is important to do the following steps in the order listed !!!

## Configuration Market

After installing the plugin, you just need to go to the configuration part of the plugin then click on send the configuration to the market.

## Alexa configuration

Once the service is active, you have to on the Alexa app or on the [website](https://alexa.amazon.fr/spa/index.html) go to the skill part and look for the Jeedom skill then activate it, there it will ask you for identifiers you must put those from the market (be careful to put your market identifiers and not those of your Jeedom)

> **Important**
>
> If you have an error message telling you that your user password or not is not correct you must :
> - check that Amazon Alexa is active in the market
> - if this is the case, be sure of your identifiers (attention you must respect upper / lower case) ?
> - if this is the case change your password on the market and on the configuration of the voice assistant service (market profiles page tab my services) have it saved

> **Important**
>
>Any modification to the configuration of the equipment transmitted to Alexa (addition of equipment, deletion of equipment, change of a generic type of an order) necessarily requires going to Plugin -> Communication -> Alexa and then saving and in the Alexa application to redo a discovery

## Plugin configuration

On your Jeedom, go to Plugin -> Communication -> Alexa and in the equipment section select the equipment to be transmitted to Alexa as well as the type of equipment.

> **Important**
>
> The plugin is based on the generic Jeedom types of commands to control your home automation. It is therefore very important to configure these correctly. You can see [here](https://doc.jeedom.com/en_US/concept/generic_type) explanations on generic generics

> **Important**
>
> For the modes you need MINIMUM two otherwise Amazon refuses the configuration and nothing will synchronize

You can also create scenes in the scene tab, with input and output actions.

> **Important**
>
> If you do not send any equipment (no OK in the equipment list on the Alexa plugin), Amazon considers that it is an error and uses the last known configuration. So if you forget everything and do not send any equipment amazon will take the last known configuration and therefore will make everything reappear.

# FAQ

>**I read that the plugin would require a subscription, why ?**
>
> It's quite simple, Jeedom is a non-cloud solution (hear everything is at home there is no server on our side for your Jeedom) but Alexa can only send requests to a single server for a skill. So we had to make a server that receives all requests from Alexa and retransmits them to your Jeedom. Unfortunately server (in addition to the cost of development and maintenance) at a rental cost on our side. This is why there will be a subscription for the service "Voice Assistant" which will cover both Amazon and Google (don't worry for the price it will be minimal, the goal is just to amortize the cost of the server)

>**To open / close the shutters I must say turn on / off ?**
>
> This is normal Alexa does not support opening type equipment (for security reasons) so you have to make it believe that it is a light. By cons thanks to the routines you can say open / close

>**Alexa tells me "the device does not respond" while the action is well done**
>
> Look at your generic types, Alexa absolutely requires a status return otherwise it will tell you that the device is not responding. Also pay attention to the delay to do the action if it is too long you will get the message the device does not respond.

>**During the association I have an error (but not on a problem of password / username)**
>
>If you have an error during the association with Jeedom it probably comes from the fact that you did not add / transmit equipment before making the association. To correct go to Plugins -> Communication -> Alexa then ticked at least one piece of equipment to transmit and save (check that the piece of equipment is in OK, if it is in NOK click on the NOK to see why or ask about generic type in jeedom). Then redo the association

>**When adding equipment I have NOK**
>
>Just click on the NOK a window will tell you the generic type to have on the equipment controls for it to work. You can see [here](https://doc.jeedom.com/en_US/concept/generic_type) the documentation on generic type

>**Adding equipment / scene does not appear in the alexa application**
>
> It is necessary :
> - deleted all my transmitted equipment (green OK) from the Alexa plugin
> - save well
> - “oublié” tous mes équipement jeedom visibles dans la rubrique Maison connectée de Alexa.amazon.com (or the app)
> - in plugin -> plugin management then alexa click on "send the configuration to the market"
> - do a detection from Alexa
> - return equipment
> - redo detection from Alexa
