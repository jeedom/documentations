# Description

This plugin allows you to :

- use the native implementation of Google for the management of connected objects

It can work in 2 ways :

- Standalone : you create the applications in dev mode on the Google side then connect your Jeedom to the Google service
- Cloud : via a cloud service provided by Jeedom

> **Important**
>
> Cloud mode requires a subscription to voice services (3 months free when purchasing the plugin). You can manage your subscription [here](https://market.jeedom.com/index.php?v=d&p=profils#services)

> **Important**
>
> Whatever mode you use, you MUST ABSOLUTELY have your Jeedom accessible in HTTPS (the plugin does not work in HTTP)

> **Important**
>
> The plugin does not support equipment with dual functions (2 outputs as certain zwave Fibaro module). You absolutely have to go through 2 virtual ones to break it down.

# Cloud mode

> **IMPORTANT**
>
> It is important to do the following steps in the order listed !!!

> **IMPORTANT**
>
> If you have an error message telling you that your user password or not is not correct you must :
> - check that Amazon Alexa is active in the market
> - if this is the case, be sure of your credentials (attention you must respect upper / lower case) ?
> - if this is the case change your password on the market and on the configuration of the voice assistant service (market profiles page tab my services) have it saved

After installing the plugin, you just need to go to the configuration of the plugin, select the Cloud mode then click on "Send" (this will send the connection information to the plugin API on the market)

Then in Jeedom in Communication / Google Smarthome you must click on save to send your initial configuration, you need at least one device in OK (otherwise when connecting Google Home <-> Jeedom you will have an error)

Then on the Google home application you have to go to the first tab click on Add (the +) :

![gsh](../images/gsh29.png)

Then configure a device :

![gsh](../images/gsh30.png)

On "Works with Google" :

![gsh](../images/gsh31.png)

Then in the list with the search button (magnifying glass at the top right), search for "Jeedom Smarthome" and click on it :

![gsh](../images/gsh32.png)

Fill it in your market identifiers (well those market not those of your Jeedom).

![gsh](../images/gsh6.png)

In plugin -> communication -> Google Smarthome you can configure your different equipment (see chapter Configuration of the plugin)

>**NOTE**
>
>To switch from standalone mode to cloud mode you must :
>- in the plugin go to cloud then save
>- wait 24h
>- in the Google home application you must dissociate testsmarthome (your standalone application)
>- in Communication / Google Smarthome click on save to send your initial configuration
>- Link Jeedom Smarthome in Google Home


> **IMPORTANT**
>
>Any modification to the configuration of the equipment sent to Google Home (addition of equipment, deletion of equipment, change of a generic order type) necessarily requires going to Plugin -> Communication -> Googme Smarthome then save

# Standalone mode

> **IMPORTANT**
>
> If you have used cloud mode you should not do this part !!! Go directly to the chapter "Plugin configuration"

> **IMPORTANT**
>
> Standalone mode is a "scam" because it makes you create an application at Google in development mode which allows synchronization only for 3 days after activation of test mode. So when adding or modifying equipment, reactivate the test mode every 3 days to be able to synchronize. Attention we are talking about a modification of the configuration if you do not add or modify equipment there is nothing to do the application will work without time limit

> **IMPORTANT**
>
> Since the application is a dev application on the Google side, they can cut it, delete it or change the rules at any time.. In this case Jeedom cannot be held responsible in the event of a malfunction..

> **IMPORTANT**
>
> For the application (s) to work, it is essential that your jeedom is in https with a valid certificate (if you have a service pack, DNS access is there for that)

As a reminder, the plugin allows you to :

- use the native implementation of Google for the management of connected objects
- use jeedom interactions using "Talk to ..."

There are therefore 2 applications listed on Google : one for the Google Smarthome part and one for the interaction part (you can of course do only one of the 2)

## Google Smarthome app

Come on [here](https://console.actions.google.com) then click on "Add / import project"

![gsh](../images/gsh7.png)

Give a name to the project change the default language and region and validate :

![gsh](../images/gsh8.png)

Select "Home control" :

![gsh](../images/gsh9.png)

Click on "Smarthome" :

![gsh](../images/gsh10.png)

Click on "Name your Smart Home action" :

![gsh](../images/gsh11.png)

Put "smarthome test" and validate (Save button at the top right) :

![gsh](../images/gsh12.png)

Then on the left click on "Actions" :

![gsh](../images/gsh13.png)

Then "Add your first action" :

![gsh](../images/gsh14.png)

We will have to give here the url to arrive from Jeedom. To get it it's very simple, in Jeedom you have to go to the plugin management page, choose the "Standalone" mode (and save in passing), the url is the one called "Fulfillment URL"

![gsh](../images/gsh15.png)

Then go to "Account linking" (left menu) :

![gsh](../images/gsh13.png)

Select "No, I only want to allow account creation on my website" and do "Next" :

![gsh](../images/gsh16.png)


Select "OAuth" then "Authorization code" and do "Next" :

![gsh](../images/gsh17.png)

Then fill in the 4 fields according to the plugin configuration page, then click "Next" :

![gsh](../images/gsh18.png)

> **NOTE**
>
> The fields are :
> - client ID first
> - then the secret client
> - then "Authorization URL" (be careful to take the one from the "Smarthome" section)
> - then "Token URL" (be careful to take the one from the "Smarthome" section)

There is nothing to do simply "Next" :

![gsh](../images/gsh19.png)

Write "Toto" then do "Save" :

![gsh](../images/gsh20.png)

Now configure the homegraph API key, for that go [here](https://console.developers.google.com/apis/dashboard), then right click on "Library" :

![gsh](../images/gsh21.png)

> **NOTE**
>
> If you don't have a project you need to create one

And look for "Homegraph" :

![gsh](../images/gsh22.png)

Click on homegraphapi then activate the API and click on manage :

![gsh](../images/gsh23.png)

Click on identifier on the left :

![gsh](../images/gsh24.png)

Then on "Identifiers of APIs and services" :

![gsh](../images/gsh25.png)

Click on "Create identifiers" then on "API key" :

![gsh](../images/gsh26.png)

Copy the API key generated and paste it on the Google Smarthome plugin management page in "Google API Homegraph"

Last step to give Jeedom the project id to manage the connection, go [here](https://console.actions.google.com) then click on your project. Recuperez l'url de la forme "https://console.actions.google.com / u / 0 / project / myproject-31023 / overview ", the project id is between project / and / overview, in the example here it is" myproject-31023 ", copy this id on the management page the Google Smarthome plugin in "Smarthome Project ID".

Here you can now click on the left on "Action" :

![gsh](../images/gsh27.png)

Then on test :

![gsh](../images/gsh28.png)

Then you need on a smartphone **android** (must not work on an iphone) connect to your Jeedom by **the external url** of it. Then go to the home application then "configure or add" then "Configure a device" and finally click on "Works with Google" and add your service created above (it starts with [test])

## Jwt configuration

JWT allows you to automatically report any change in the status of an item of equipment sent to Google, which therefore allows you to have the status more quickly when you request it from Google Home or the Google Home app.. It is not compulsory to configure it however if you check the box "Go back to the state" it is absolutely necessary to have done so for it to work.

To make the configuration you need

* go [here](https://console.developers.google.com/iam-admin/serviceaccounts), if Google asks you to choose the project (the one created just above).
* Click on create a service account
  * Give it a name (you can put whatever you want, avoid)
  * Recover the generated email just below to copy it into the configuration of the plugin on Jeedom (fields : Customer Mail (JWT))
  * Click on create
  * Click on continue without modifying anything
  * Click on "Create a key"
    * Leave JSON and click OK
  * Click on OK
  * Open the downloaded file and copy the 'private_key' part (starts with "----- BEGIN PRIVATE KEY -----", included and ends with "----- END PRIVATE KEY ----- \ n ", included without") in the configuration of the plugin on Jeedom (fields : Private key (JWT))

# Plugin configuration

On your Jeedom, go to Plugin -> Communication -> Google Smarthome and in the equipment section select the equipment to be transmitted to Google as well as the type of equipment.

![gsh](../images/gsh2.png)

> **IMPORTANT**
>
> The plugin is based on the generic Jeedom types of commands to control your home automation. It is therefore very important to configure these correctly.

> **NOTE**
>
> For the "camera" type you must absolutely configure the URL of the stream (we tested only the RTSP) so that it works.
> Note that camera support is currently in beta and consumes a lot of resources

## Equipement

On equipment you can configure :

* Options :
  * Transmit : send the equipment to Google Home so that it can control it (please note that the configuration of the generic credits is OK)
  * Raise the state : send any change of state information to Google directly (this avoids that during a request for information Google Home questions Jeedom). See section "JWT Configuration"
  * Challenge [None, Code] : if in code mode then Google will ask you for a Code (the one indicated just below) for each action on the equipment
* Status : indicates if the transmission is OK, if it is NOK then it comes from Generic type. If you click on NOK you can have the information about the generic type needed
* Type : indicates the type of equipment
* Pseudo : device nickname, if empty then the device name is used
* Action :
  * Allows advanced configuration of equipment for Google Home (depends on the type used)
  * Advanced configuration of equipment, allows access to advanced configuration of commands and therefore to modify generic types
  * Allows you to go directly to the equipment configuration page

### Type

The types of equipment are important this allows Google to react according to the sentences you say.

> **IMPORTANT**
>
> Jeedom support for "beta" types not yet documented at Google so that may or may not work depending on updates at google

* Light : supports switching on / off, color change, dimming....
* Thermostat : support setpoint change and modes (in a limited way only certain mode names are authorized by Google, be careful to do the advanced configuration)
* Outlet : On Off
* Camera : in beta, can display the stream on an Android TV on the local network
* Store : allows to open / close a blind (you can reverse the direction in the advanced configuration)
* Shutter : opens / closes a shutter (you can reverse the direction in the advanced configuration)
* [Beta window] : normally support the open / closed status of a window (for information only if I ask the question in English that it works)
* Door [beta] : normally supports the open / closed status of a door (for information only if I ask the question in English that it works)
* Alarm [beta] : allows you to arm / disarm the alarm (be careful you must use the term weapon / disarm for Google to do the action)
* Lock [beta] : close / open equipment
* TV [beta] : allows you to change the volume and channels
* Pregnant [beta] : allows you to change the volume and stop, pause, next, previous, resume

## Scenario

You can also create scenes in the scene tab, with input and output actions.

![gsh](../images/gsh3.png)

> **NOTE**
>
> To launch a scenario, just say "Activate #name of scenario #" or "Deactivate #name of scenario"#

> **NOTE**
>
> When saving Jeedom will automatically request synchronization with Google. Attention in standalone mode if you have an error (type "Requested entity was not found") try to reactivate the test of the application ([here](https://console.actions.google.com)) then click again on the connection button on the page the plugin configuration page. Also check the configuration (especially the oauth part) of your google application (sometimes the fields are cleared by Google)

All you have to do is assign the equipment to the rooms in the Google Home app

# FAQ

>**I can't make the association in cloud mode ?**
>
> We must verify that :
> - you are fine in https (if you have a service pack, use jeeodm DNS these are secure by default)
> - you have activated Google assistant on the market (profiles page, my services tab then configuration in the voice assistant section)
> - you have subscribed to the voice services subscription and it is still valid (necessary from 01/06/2019). This can be seen on your market profiles page, tab my services
> - it is necessary in plugin -> communication -> Google Smarthome select "transmit" equipment and set the type and finally save
> - use your market credentials well

>**During the association I have an error (but not on a problem of password / username)**
>
>If you have an error during the association with Jeedom it probably comes from the fact that you did not add / transmit equipment before making the association. To correct go to Plugins -> Communication -> Alexa then ticked at least one piece of equipment to transmit and save (check that the piece of equipment is in OK, if it is in NOK click on the NOK to see why or ask about generic type in jeedom). Then redo the association

>**What are the possible orders ?**
>
>Voice commands (as well as returns) are managed only by Google, here is the [Documentation](https://support.google.com/googlehome/answer/7073578?hl=fr)

>**The assistant asks me to assign the parts but I don't know what the equipment corresponds to.**
>
>Yes the assistant does not display the real name of the equipment, just the nickname. You must therefore quit the assistant and return to the home control home page.. By clicking on the equipment you will have its name you can then assign it to a room

>**Why do you need to assign parts to each piece of equipment ?**
>
>Because Google doesn't allow you to do it through the API so you absolutely must do it manually.

>**I get the error message "OpenSSL unable to sign data"**
>
>You have to check the "Raise the report" box without doing the JWT configuration

>**I get the error message "Cant find resource 404" when saving**
>
>So no worries everything is saved, it's just automatic synchronization that is not done. To make it say "Synchronize my devices" to your assistant. To try to correct this concern :
> go to the next page [here](https://console.cloud.google.com/cloud-resource-manager). On this page you will see the list of all projects even those invisible on the google actions page. Delete all unused projects.
> Then redo the tutorial from the step configure the API Homegraph key (activation, generation of key, then dissociate jeedom from your google account and redo the link)


>**You have a link error or Unable to update the parameter, check your connection in cloud mode**
>
>It is necessary in jeedom, on the plugin to add equipment, save and redo the association of Jeedom Smarthome in the Google Home application

>**I get the error "Apparently Jeedom Smart Home is unavailable at the moment." or "Sorry I can't connect to Jeedom Smart Home."**
>
>Try to un-associate / re-associate the Google smarthome app. Be careful to take the official application and not a [TEST] application if you have used standalone mode before.

>**When adding equipment I have NOK**
>
>Just click on the NOK a window will tell you the generic type to have on the equipment controls for it to work
