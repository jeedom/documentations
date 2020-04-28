# Cloud voice assistants

## Description

This service allows you to connect your Jeedom with voice assistants from Google and Amazon.

It can be used with 
- le plugin Dialogflow, [documentation](https://jeedom.github.io/plugin-dialogflow/en_US/)
- ou le plugin Google Smarthome, [documentation](https://jeedom.github.io/plugin-gsh/en_US/)
- ou le plugin Alexa, [documentation](https://jeedom.github.io/plugin-ash//en_US/)

Ce service est payant et peut être souscrit sur le Market Jeedom, dans la page [Mes Services](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

You will find in the respective documentation of the plugins their differences.

Then once the subscription is subscribed you must wait for synchronization (see next chapter). You can configure by following the documentation of the plugin

## Synchronization and delay

There are synchronization delays during the following actions :

- Account activation
- Purchase of year on the Voice Assistant service
- Change of API smarthome plugin API key
- Jeedom url change
- Change password market

Synchronization takes place every 6 hours (at 12.10 a.m. 6.60.10.12.12.10.18.10). This synchronization is due to our desire to make the third-party server that bridges your Jeedom and the Google / Amazon infrastructure independent and autonomous (it avoids during a problem on the market for example also losing the voice assistant service). During synchronization there is a restart of the service (interruption of less than 1s), which explains the limitation to once every 6 hours.
