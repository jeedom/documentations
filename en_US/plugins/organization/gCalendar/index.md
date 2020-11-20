# Google Calendar plugin

The plugin **Google calendar** allows you to retrieve events from your Google calendars. It can also trigger an interaction during an event.

# Configuration

## Create a Google Calendar device

On the Jeedom side, you need to create a Google Calendar device and retrieve the redirect URL.

> **Important**
>
> The url for external access to your Jeedom must absolutely be in https, Google does not allow unencrypted connections.

## Create a Google Developer Account

You need to create a developer account with Google to access the API. To do, [follow this link](https://console.developers.google.com/apis/credentials), Create a new project if necessary then click on "**+ Create identifiers**" and select "**Oauth client ID**".     
 Then choose "**Web application**" in the drop-down menu then add the'"*Return url*" given on the Jeedom equipment page in "**Allowed redirect URIs**".

> **Important**
>
>When you enter "Authorized redirection URIs" you must pay attention to :
> - have authorized the domain before [here](https://console.developers.google.com/apis/credentials/consent). Google will signal you normally
> - press the enter key after copying / pasting the redirect url from jeedom to the Google configuration page (*pressing save button directly after copy / collar without pressing enter key does not work!*)     

Collect the'**Customer ID**' and the **client's secret code** (you will need to enter them in the Jeedom side equipment)

You must then add the Google Calendar API by going [here](https://console.developers.google.com/apis/dashboard). Click on "**+ Activate APIs and services**" then search for "Google Calendar API" and add the.

> **To know**
>
>The above procedure may change over time. We recommend that you follow the directions given on the site.

## Link the Google account to jeedom

Copy it **Client ID** and the **Secret key** Jeedom side then click on the button "**Bind**". Don't forget to save the equipment.

>**Important**
>
>Attention to link the 2 accounts (Google and Jeedom) it is ABSOLUTELY necessary to be connected to Jeedom by its external url (you can see it in the configuration center Jeedom part networks)

# Commandes

The plugin only includes commands giving the title of events.

# Interaction

Jeedom can interpret the title of an event as an interaction and therefore trigger an action. To do this, you must activate the interactions on the equipment configuration page.

You can also indicate a return command by which jeedom will respond following the execution of the interaction.    
