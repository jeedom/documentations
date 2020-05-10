Plugin for using the Jeedom Mobile application.

The Jeedom mobile application requires the installation of this plugin in order to
the box can communicate with the Mobile application.

Mobile plugin configuration 
==============================

After installing the plugin, you just need to activate it :

![mobile1](../images/mobile1.png)

**Setup**

To configure the plugin, you must add the phones that
will be able to access Jeedom.

To Add a phone : **Plugins** → **Communication** → **App
Mobile** → **Add**

![mobile2](../images/mobile2.png)

Here are the parameters to enter :

-   **Name of mobile equipment** : Phone name

-   **Activate** : Enabling access for this mobile

-   **Mobile Type** : Phone OS selection (iOS, Android)

-   **User** : User associated with this access

> **Tip**
>
> The choice of the user is important because it determines the
> equipment to which the latter will have access according to his rights.

![mobile3](../images/mobile3.png)

After saving, you will get a QRCode allowing
the application to configure itself.

Setup of plugins and commands received by the app 
=======================================================

After initializing the Mobile Plugin you have the option of
rework generic types of controls, plugins and parts.

![mobile10](../images/mobile10.png)

By clicking on a plugin, you can authorize it or not to chat
with the mobile app, and configure each of the generic types
associated with his orders.

![mobile11](../images/mobile11.png)

By clicking on a part, you can authorize it or not to be
present in the mobile application, and configure each of the types
generics associated with his orders.

![mobile12](../images/mobile12.png)

Mobile app configuration 
=====================================

You will find the applications on the mobile blinds :

**Android Google Play**

![Google Play FR](../images/Google_Play_FR.png)

**Apple App Store**

![App Store FR](../images/App_Store_FR.png)

First launch of the app 
--------------------------

On the 1st launch of the Mobile application, a tutorial will be offered
in order to assist you in configuring it.

After downloading and installing your Jeedom mobile app,
launch the application on your smartphone.

You then arrive in a configuration tutorial that we
advise to follow. Some steps have been done previously.

You will then have the choice between a manual configuration or
automatic by QRcode. If you choose the configuration by QRcode,
just flash the QRcode on the Mobile App plugin in
smartphone equipment created previously. In this case, the application will
automatically retrieve the entire configuration of your Jeedom and
connect automatically. When it is connected to your home via Wifi,
the application will automatically use the Jeedom ethernet address
internal to your network. When you are connected in 4G or 3G, there
will use your external address to connect to your Jeedom (by
example via Jeedom DNS service if you use it). If you choose
for manual configuration, in this case you will have to enter the
hand the internal and external IP addresses of your Jeedom. This option
is reserved for an informed public.

The application will synchronize and you will arrive on its home page
(preceded by a mini presentation guide).

Jeedom mobile app is now ready to work.

Favorites 
-----------

On the application you can have Favorites (shortcuts of
commands, plugins, scenarios).

Here is the procedure for creating them :

Click on one of the + on the home screen of the application :

![mobile dashboard 1](../images/mobile_dashboard_1.PNG)

You will arrive on the shortcut type selection page :

![mobile dashboard 2](../images/mobile_dashboard_2.PNG)

For example, we are going to take Action, so it offers us
Rooms / Objects :

![mobile dashboard 3](../images/mobile_dashboard_3.PNG)

You just need to select the action you want in
shortcut :

![mobile dashboard 4](../images/mobile_dashboard_4.PNG)

It is then possible to customize the color of it (for the
three colors are available) :

![mobile dashboard 5](../images/mobile_dashboard_5.PNG)

As well as the two associated texts :

![mobile dashboard 6](../images/mobile_dashboard_6.PNG) ![mobile
dashboard 7] (../ images / mobile_dashboard_7.PNG)

Here, you have now a shortcut of your order (in the
version 1.1 On / Off commands are expected to appear on the
same key).

![mobile dashboard 8](../images/mobile_dashboard_8.PNG)

How to properly configure generic types 
============================================

Generic Types in the Mobile plugin 
------------------------------------------

Better than words, here is an example of typical generics for a
light with all its controls (see also the table Light plus
low) :

![generic type in plugin](../images/generic_type_in_plugin.jpg)

Application template tables 
---------------------------------------

### The lights #

Picture                           | Type generic               | Dev plugin part            | Description          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LIGHT](../images/LIGHT_1.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off` | `LIGHT_ON`<br/>`LIGHT_OFF`| présence de deux boutons "ON" et "Off" pas de retour d'état. |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat` | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton Toggle`<br/>`Lumière Etat` | `LIGHT_TOGGLE`<br/>`LIGHT_STATE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off |
![LIGHT](../images/LIGHT_3.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat`<br/>`Lumière Slider` | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité |
![LIGHT](../images/LIGHT_4.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat`<br/>`Lumière Slider`<br/>`Lumière Couleur (info)`<br/>`Lumière Couleur (action)`<br/>`Lumière Mode` (optionnel, il sert à avoir des mode de lumière,par exemple arc-en-ciel sur les philips Hue) | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`<br/>`LIGHT_COLOR`<br/>`LIGHT_SET_COLOR`<br/>`LIGHT_MODE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité. Dans le cercle la couleur de la lampe est présente et lors d'un cloc dans celui-ci vous pouvez changer la couleur et activer un mode |

### The plugs #

Picture                           | Type generic               | Dev plugin part            | Description          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ENERGY](../images/ENERGY_1.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`| `ENERGY_ON`<br/>`ENERGY_OFF`| présence de deux boutons "ON" et "Off" pas de retour d'état. |
![ENERGY](../images/ENERGY_2.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`<br/>`Prise Etat` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off |
![ENERGY](../images/ENERGY_3.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`<br/>`Prise Etat`<br/>`Prise Slider` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`<br/>`ENERGY_SLIDER` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité |

### Shutters #

Picture                           | Type generic               | Dev plugin part            | Description          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLAP](../images/FLAP_1.jpg)   | `Volet Bouton Monter`<br/>`Volet Bouton Descendre`<br/>`Volet Bouton Stop`<br/>`Volet Etat`(optionnel) | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`(optionnel) | Presence de trois boutons "Monter", "Descendre", "Stop", retour d'état optionnel. |
![FLAP](../images/FLAP_2.jpg)   | `Volet Bouton Monter`<br/>`Volet Bouton Descendre`<br/>`Volet Bouton Stop`<br/>`Volet Etat`<br/>`Volet Bouton Slider` | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`<br/>`FLAP_SLIDER` | Presence d'un slider, avec un bouton Monter/Descendre en Toggle (avec icône d'état) |

### Flood #

Picture                           | Type generic               | Dev plugin part            | Description          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLOOD](../images/FLOOD.jpg)   | `Innondation`<br/>`Temperature`(optionnel)<br/>`Humidité`(optionnel)<br/>`Sabotage`(optionnel)|`FLOOD`<br/>`TEMPERATURE`(optionnel)<br/>`HUMIDITY`(optionnel)<br/>`HUMIDITY`(optionnel) | Permet d'avoir son capteur d'inondation complet sur une seule ligne.

### Lock #

Picture                         | Type generic               | Dev plugin part            | Description          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LOCK](../images/LOCK.jpg)   | `Lock Etat`<br/>`Lock Bouton Ouvrir`<br/>`Lock Bouton Fermer` | `LOCK_STATE`<br/>`LOCK_OPEN`<br/>`LOCK_CLOSE` | Retour d'état présent, le bouton de gauche permet de switcher entre on et off |

### Mermaid #

Picture                         | Type generic               | Dev plugin part            | Description          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SIREN](../images/SIREN.jpg)   | `Mermaid Etat`<br/>`Mermaid Bouton On`<br/>`Mermaid Bouton Off` | `SIREN_STATE`<br/>`SIREN_ON`<br/>`SIREN_OFF` | Retour d'état présent, le bouton de gauche permet de switcher entre on et off |

### Smoke #

Picture                           | Type generic               | Dev plugin part            | Description          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SMOKE](../images/SMOKE.jpg)   | `Smoke`<br/>`Temperature`(optionnel)|`SMOKE`<br/>`TEMPERATURE`(optionnel) | Permet d'avoir son capteur de fumée complet sur une seule ligne.

### Temperature #

Picture                                       | Type generic               | Dev plugin part            | Description          |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![TEMPERATURE](../images/TEMPERATURE.jpg)   | `Temperature`<br/>`Humidité`(optionnel)|`TEMPERATURE`<br/>`HUMIDITY`(optionnel) | Voir Picture.

### Presence #

Picture                                 | Type generic               | Dev plugin part            | Description          |
:-----------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![PRESENCE](../images/PRESENCE.jpg)   | `Presence`<br/>`Temperature`(optionnel)<br/>`Luminosité`(optionnel)<br/>`Humidité`(optionnel)<br/>`UV`(optionnel)<br/>`Sabotage`(optionnel)|`PRESENCE`<br/>`TEMPERATURE`(optionnel)<br/>`BRIGHTNESS`(optionnel)<br/>`HUMIDITY`(optionnel)<br/>`UV`(optionnel)<br/>`SABOTAGE`(optionnel) | Voir image.

### Opening #

Picture                                       | Type generic               | Dev plugin part            | Description          |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![OPENING](../images/OPENING.jpg)   | `Porte / Fenêtre`<br/>`Temperature`(optionnel)|`OPENING / OPENING_WINDOW`<br/>`TEMPERATURE`(optionnel) | Voir Picture (à savoir que vous pouvez choisir entre fenêtre et porte).

### Pilot wire #

Picture                               | Type generic               | Dev plugin part            | Description          |
:---------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![HEATING](../images/HEATING.jpg)   | `Chauffage fil pilote Bouton ON`<br/>`Chauffage fil pilote bouton OFF`<br/>`Chauffage fil pilote Etat`<br/>`Chauffage fil pilote bouton`(optionnel) | `HEATING_ON`<br/>`HEATING_OFF`<br/>`HEATING_STATE`<br/>`HEATING_OTHER`|Les boutons ON/OFF et Etat permette de créer le bouton tout à gauche du template et les `chauffage fil pilote Bouton`sont là pour rajouter des boutons (5 max)

THE JOKERS 
----------

### Generic Action #

Picture                             | Type generic               | Dev plugin part            | Description          |
:-------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ACTION](../images/ACTION.jpg)   | `Action Générique`           | `GENERIC_ACTION`             | Le bouton prend la forme du type de l'action. Par défaut c'est un toggle, si c'est un message alors vous avez une enveloppe, si slider vous avez un slider etc...

### Generic Info #

Picture                         | Type generic               | Dev plugin part            | Description          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![INFO](../images/INFO.jpg)   | `Information Générique`           | `GENERIC_INFO`             | Le bouton prend la forme du type de l'info.


Troubleshooting 
===============

Mobile Help 
-----------

**→ I'm on Android version of the app (1.0.1 or 1.0.0) i can't
no access to my rooms or even to the configuration of the app.**

> **Bail**
>
> You had a popup warning you of a concern about the parameters
> accessibility, you just need to go to the
> accessibility settings of your mobile and uncheck them
> applications using this option. (A fix will be made
> soon on the app)

**→ I have a message in one of the lines of my modules telling me that it
missing a Generic Type !**

> **Tip**
>
> By reading this message, it tells you which generic type is missing for
> create a compatible template. Just apply it.
> Refer to [doc chapter Type
> Generic] (https://www.jeedom.com/doc/documentation/plugins/mobile/fr_FR/mobile#_configuration_des_plugins_et_commandes_que_reçoit_l_app).

**→ I have a problem with one of the so-called fully integrated plugins (weather,
thermostat, alarm, camera) !**

> **Tip**
>
> Do not hesitate to access your module and to click on
> save again, this will re-include the types
> credits associated with the module.

**→ Impossible to put an info on the welcome of the app !**

> **Tip**
>
> This is normal, it will be available on version 1.1.

**→ I have the application which takes up a lot of memory in my
Phone !**

> **Tip**
>
> There was a bug on versions 1.0.0 and 1.0.1 on the game
> Camera. The problem will not happen again with 1.0.2, to delete
> hide it without overpricing the app, just go to the configuration
> from your Mobile App and click on "delete cache".

**→ I have a concern of first synchronization on the app or of sql on the mobile plugin !**

> **Tip**
>
> you have to put generic types and authorize the plugin to send generics see the doc a little higher.
