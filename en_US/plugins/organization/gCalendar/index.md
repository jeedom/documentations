Description 
===========

The agenda plugin allows you to retrieve events from your Google
Diary. He can also initiate an interaction during an event

Setup 
=============

Create a Google Calendar device 
=================================

On the Jeedom side, you need to create a Google Calendar device and retrieve the redirect URL. 

> **Important**
>
> The url of external access to your Jeedom must absolutely be in https. Google doesn't allow unencrypted connections.

Create a developer account at Google 
=======================================

You need to create a developer account with google to have access
API, go
[ici](https://console.developers.google.com/apis/credentials) puis
do "Create identifiers" and "Oauth customer ID", select
"Web application "and in" Authorized redirect URIs "put the one
given on the jeedom equipment configuration page.

> **Important**
>
> Be careful when you enter "Authorized redirect URIs" you must pay attention to : 
> - having authorized the domain here before [here] (https://console.developers.google.com/apis/credentials/consent). Google will signal you normally
> - well press the enter key after copying / pasting the redirect url from jeedom to the Google configuration page (pressing the save button directly after copying / coltheting without pressing the enter key does not work !!!)

Get the client key and client secret (you will need to put them
Jeedom side in the equipment)

Then you need to add the Google Calendar API by going
[ici](https://console.developers.google.com/apis/dashboard), puis en
doing "Activate the API" and search for "Google Calendar API" then add
the.

Linked the Google account to jeedom 
==============================

Copy the customer key and the customer secrey on the Jeedom side then click on
the Link button, validate all.

>**Important**
>
>Be careful to link the 2 accounts (Google and Jeedom) you MUST be connected to Jeedom by its external url (you can see it in the Jeedom configuration center in the network section)

Command 
========

The plugin only has one command that gives you the title of
the current event

Interaction 
===========

Jeedom can interpret the title of an event as an interaction and
so trigger an action. For this you need to activate the
equipment configuration page interactions.

You can also indicate a return order by which jeedom will
respond following the execution of the interaction.

Faq 
===
