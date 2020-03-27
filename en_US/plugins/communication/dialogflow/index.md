# Presentation

The dialogflow plugin makes it possible to connect Jeedom to Google Home / Assistant by a native application and interactions

> **NOTE**
>
> There is also the Google Smarthome plugin which allows you to connect Jeedom to Google Home / Assistant but this time for the sake of Google’s Smarthome integration, it therefore does not use interactions.

> **Important**
>
> The plugin requires a subscription to voice services. You can manage your subscription [here] (https://www.jeedom.com/market/index.php?v=d&p=profils#services)

## Synchronization and delay

In cloud mode (and only in cloud mode), there are synchronization delays during the following actions :

- Account activation
- Purchase of year on the Voice Assistant service
- Change of API smarthome plugin API key
- Jeedom url change
- Change password market

# Setup

Install the plugin and activate it. Then always on the plugin configuration page click on "Send" to send your configuration to the market.

![dialogflow](../images/dialogflow1.png)

> **Important**
>
> You don't have to create any equipment for this plugin. Just follow the instructions below.

On the market, you must activate "Google Smarthome" in the "My Services" tab then "Configure" on the "Voice assistant" line from your profiles and wait until the status changes to active (it takes about 6 hours).

> **Important**
>
> The access url of your jeedom must absolutely be in https

> **NOTE**
>
> You can only connect one Jeedom to Google per market account

> **Important**
>
> Following the activation and / or modification of information for Google Smarthome you must **wait 24h** for this to be taken into account

On a phone with Google Assistant, say "Speak with Jeedom", Google will tell you to link your Jeedom account and Google click on yes : 

![dialogflow](../images/dialogflow2.png)

Indicate your market identifiers : 

![dialogflow](../images/dialogflow3.png)

Google will tell you that the configuration is successfully created / updated : 

![dialogflow](../images/dialogflow4.png)

Here, the link between your Jeedom and Google Home / Assistant is made.

You can now talk to your Jeedom and use all the interactions of your Jeedom directly from your Google Home / Assistant.
From your Google Home / Assistant, just say "Talk to Jeedom", "Ask Jeedom" or even "Say to Jeedom" to start interaction with Jeedom and "Thank you" when you're done to end the conversation.

# Safe mode

Secure mode adds an authorization layer at Jeedom. By default only the API key is necessary in secure mode there is a 2nd unique character string per user (not stored completely in the database) which must be valid.

To use it nothing simpler you must go to the plugin configuration page and activate the secure mode, then make a request to Google for Jeedom. Finally go to the Plugin -> Communication -> Dialogflow page. You will see a request for acceptance of an identifier, just validate it..

> **NOTE**
>
> The secure mode is not active by default to be able to pass the Google validation but it is strongly advised to activate it

# Reset configuration

If you have put a wrong URL or API key or a change of URL or API key, you must reset the configuration and redo the connection procedure..

Then on the Google Assistant application, say "Talk to Jeedom" then "Delete configuration". The application should tell you that the configuration is deleted successfully. Then repeat the connection procedure.

# Faq

>**I have the error ESOCKETTIMEDOUT**
>
>Is that your URL or API key configured on the market is not good. Also pay attention to the response time defined in the interactions, Google imposes a response time before timeout of 4 seconds.

>**During a "talk to jeedom" you IMMEDIATELY receive an "Error your configuration server did not respond correctly. Please go to the documentation code 500"**
>
>Go to this [url] (https://gala-demo.appspot.com), on this page select your Google account (the one used by Google Home / Assistant) in "Service ID" put jeedom-183212 and click on "Unlink my account" (button on the right). Then in Google Assistant redo the configuration (except market part)

>**Error your Jeedom did not answer correctly ETIMEDOUT code. Something else**
>
>This comes from your Jeedom which did not respond within the time limit (imposed by Google). It can come from 2 things, a slow internet connection, or actions that take too long..

>**At each request Google indicates that your configuration has been updated**
>
>Is that Google does not recognize your voice so it considers you as a new user. To correct you can try to reconfigure voice match.
