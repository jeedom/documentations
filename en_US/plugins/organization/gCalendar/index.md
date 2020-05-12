# Google Calendar plugin

The agenda plugin allows you to retrieve events from your Google Calendar. He can also initiate an interaction during an event

# Setup 

## Create a Google Calendar device 

On the Jeedom side, you need to create a Google Calendar device and retrieve the redirect URL. 

> **Important**
>
> The url of external access to your Jeedom must absolutely be in https. Google doesn't allow unencrypted connections.

## Create a developer account at Google 

You need to create a developer account with google to access the APIs, go [here](https://console.developers.google.com/apis/credentials) then do "Create identifiers" and "Oauth client ID", select "Web Application" and in "Authorized redirect URI" put the one given on the configuration page of the jeedom equipment.

> **Important**
>
> Be careful when you enter "Authorized redirect URIs" you must pay attention to : 
> - having authorized the domain here before [here](https://console.developers.google.com/apis/credentials/consent). Google will signal you normally
> - well press the enter key after copying / pasting the redirect url from jeedom to the Google configuration page (pressing the save button directly after copying / collating without pressing the enter key does not work !!!)

Recover the client key and client secret (you will have to put them on the Jeedom side in the equipment)

Then you need to add the Google Calendar API by going [here](https://console.developers.google.com/apis/dashboard), then by "Activate the API" and search for "Google Calendar API" then add the.

## Linked the Google account to jeedom 

Copy the client key and the secrey client on the Jeedom side then click on the Link button, validate everything.

>**Important**
>
>Be careful to link the 2 accounts (Google and Jeedom) you MUST be connected to Jeedom by its external url (you can see it in the Jeedom configuration center in the network section)

# Command 

The plugin only includes commands that give you the title of the event

# Interaction 

Jeedom can interpret the title of an event as an interaction and therefore trigger an action. For this you must activate the interactions on the equipment configuration page.

You can also indicate a return command by which jeedom will respond following the execution of the interaction.
