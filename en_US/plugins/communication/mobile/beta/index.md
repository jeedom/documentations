# Mobile Plugin

Plugin for using the Jeedom Mobile application.

The Jeedom mobile application requires the installation of this plugin so that the box can communicate with the Mobile application.

# Mobile plugin configuration

After installing the plugin, you just need to activate it :

![mobile1](../images/mobile1.png)

****

To configure the plugin, you must add the phones that will be able to access Jeedom.

To Add a phone : ****  ****  **App
Mobile**  ****

![mobile2](../images/mobile2.png)

Here are the parameters to enter :

-   **Name of mobile equipment** : Phone name
-   **** : Enabling access for this mobile
-   **Mobile Type** : Phone OS selection (iOS, Android)
-   **** : User associated with this access

> ****
>
> The choice of the user is important because it determines the equipment to which he will have access according to his rights.

![mobile3](../images/mobile3.png)

After saving, you will get a QRCode allowing the application to configure itself.

# Configuration of plugins and commands received by the app

After the initialization of the Mobile Plugin you have the possibility to modify the generic types of orders, plugins and parts.

![mobile10](../images/mobile10.png)

By clicking on a plugin, you can authorize it or not to chat with the mobile application, and configure each of the generic types associated with its commands.

![mobile11](../images/mobile11.png)

By clicking on a part, you can authorize it or not to be present in the mobile application, and configure each of the generic types associated with its orders.

![mobile12](../images/mobile12.png)

# Mobile app configuration

You will find the applications on the mobile blinds :

****

![Google Play FR](../images/Google_Play_FR.png)

****

![ Store FR](../images/App_Store_FR.png)

## First launch of the app

When you launch the Mobile application for the first time, you will be offered a tutorial to help you configure it.

After downloading and installing your Jeedom mobile application, launch the application on your smartphone.

You then arrive in a configuration tutorial which we advise you to follow. Some steps have been done previously.

You will then have the choice between a manual or automatic configuration by QRcode. If you choose to configure by QRcode, just flash the QRcode present on the Mobile App plugin in the smartphone equipment created previously. In this case, the application will automatically recover all the configuration of your Jeedom and connect automatically. When it is connected to your home via Wifi, the application will automatically use the Jeedom ethernet address internal to your network. When you are connected in 4G or 3G, it will use your external address to connect to your Jeedom (for example via the Jeedom DNS service if you use it). If you choose manual configuration, in this case you will need to manually enter the internal and external IP addresses of your Jeedom. This option is reserved for an informed public.

The application will synchronize and you will arrive on its home page (preceded by a mini presentation guide).

Jeedom mobile app is now ready to work.

## Favorites

On the application you can have Favorites (shortcuts of commands, plugins, scenarios).

Here is the procedure for creating them :

Click on one of the + on the home screen of the application :

![mobile dashboard 1](../images/mobile_dashboard_1.PNG)

You will arrive on the shortcut type selection page :

![mobile dashboard 2](../images/mobile_dashboard_2.PNG)

For example, we are going to take Action, so it offers us Coins / Objects :

![mobile dashboard 3](../images/mobile_dashboard_3.PNG)

Then simply select the action you want as a shortcut :

![mobile dashboard 4](../images/mobile_dashboard_4.PNG)

It is then possible to personalize the color of this one (for the moment three colors are proposed) :

![mobile dashboard 5](../images/mobile_dashboard_5.PNG)

As well as the two associated texts :

![mobile dashboard 6](../images/mobile_dashboard_6.PNG)
![mobile dashboard 7](../images/mobile_dashboard_7.PNG)

Here, you have now a shortcut of your order (in version 1.1 On / Off commands are expected to appear on the same key).

![mobile dashboard 8](../images/mobile_dashboard_8.PNG)

# How to properly configure generic types

## Generic Types in the Mobile plugin

Better than words, here is an example of the generic credits for a light with all its controls (see also the Light table below) :

![generic type in plugin](../images/generic_type_in_plugin.jpg)

## Application template tables

### The lights

                           | Type generic               | Dev plugin part            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LIGHT](../images/LIGHT_1.jpg) | `Lumière Bouton On`<br/>`Button Off Light` | <br/>| presence of two buttons "ON" and "Off" no status feedback. |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light` | <br/><br/> | Status feedback present, the left button toggles between on and off |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton Toggle`<br/>`State Light` | <br/> | Status feedback present, the left button toggles between on and off |
![LIGHT](../images/LIGHT_3.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light`<br/>`Light Slider` | <br/><br/><br/> | Status feedback present, the left button allows to switch between On and Off and the slider allows to control the intensity |
![LIGHT](../images/LIGHT_4.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light`<br/>`Light Slider`<br/>`Light Color (info)`<br/>`Light Color (action)`<br/>`Light Mode` (optional, it is used to have light modes, for example rainbow on Hue philips) | <br/><br/><br/><br/><br/><br/> | Status feedback present, the left button allows to switch between On and Off and the slider allows to control the intensity. In the circle the color of the lamp is present and when you click it you can change the color and activate a mode |

### The plugs

                           | Type generic               | Dev plugin part            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ENERGY](../images/ENERGY_1.jpg) | `Prise Bouton On`<br/>`Button Off socket`| <br/>| presence of two buttons "ON" and "Off" no status feedback. |
![ENERGY](../images/ENERGY_2.jpg) | `Prise Bouton On`<br/>`Button Off socket`<br/>`State Taking` | <br/><br/> | Status feedback present, the left button toggles between on and off |
![ENERGY](../images/ENERGY_3.jpg) | `Prise Bouton On`<br/>`Button Off socket`<br/>`State Taking`<br/>`Slider socket` | <br/><br/><br/> | Status feedback present, the left button allows to switch between On and Off and the slider allows to control the intensity |

### Shutters

                           | Type generic               | Dev plugin part            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLAP](../images/FLAP_1.jpg)   | `Volet Bouton Monter`<br/>`Down button pane`<br/>`Stop Button Pane`<br/>`State pane` (optional) | <br/><br/><br/>`FLAP_STATE` (optional) | Presence of three buttons "Up", "Down", "Stop", optional status feedback. |
![FLAP](../images/FLAP_2.jpg)   | `Volet Bouton Monter`<br/>`Down button pane`<br/>`Stop Button Pane`<br/>`State pane`<br/>`Slider Button Pane` | <br/><br/><br/><br/> | Presence of a slider, with an Up / Down button in Toggle (with status icon) |

### Inondation

                           | Type generic               | Dev plugin part            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLOOD](../images/FLOOD.jpg)   | `Innondation`<br/>`TEMPERATURE` (optional)<br/>`Humidity` (optional)<br/>`SABOTAGE` (optional)|`FLOOD`<br/>`TEMPERATURE` (optional)<br/>`HUMIDITY` (optional)<br/>`HUMIDITY` (optional) | Allows you to have your complete flood sensor on a single line.

### Serrure

                         | Type generic               | Dev plugin part            |           |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LOCK](../images/LOCK.jpg)   | ` Etat`<br/>`Open Button Lock`<br/>`Lock Button Close` | <br/><br/> | Status feedback present, the left button toggles between on and off |

### Mermaid

                         | Type generic               | Dev plugin part            |           |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SIREN](../images/SIREN.jpg)   | `Mermaid Etat`<br/>`Siren Button On`<br/>`Siren Button Off` | <br/><br/> | Status feedback present, the left button toggles between on and off |

### Smoke

                           | Type generic               | Dev plugin part            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SMOKE](../images/SMOKE.jpg)   | `Smoke`<br/>`TEMPERATURE` (optional)|`SMOKE`<br/>`TEMPERATURE` (optional) | Allows you to have your complete smoke sensor on a single line.

### Temperature

                                       | Type generic               | Dev plugin part            |           |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![TEMPERATURE](../images/TEMPERATURE.jpg)   | `Temperature`<br/>`Humidity` (optional)|`TEMPERATURE`<br/>`HUMIDITY` (optional) | See picture.

### Presence

                                 | Type generic               | Dev plugin part            |           |
:-----------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![PRESENCE](../images/PRESENCE.jpg)   | `Presence`<br/>`TEMPERATURE` (optional)<br/>`Brightness` (optional)<br/>`Humidity` (optional)<br/>`UV` (optional)<br/>`SABOTAGE` (optional)|`PRESENCE`<br/>`TEMPERATURE` (optional)<br/>`BRIGHTNESS` (optional)<br/>`HUMIDITY` (optional)<br/>`UV` (optional)<br/>`SABOTAGE` (optional) | See picture.

### Ouvrant

                                       | Type generic               | Dev plugin part            |           |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![OPENING](../images/OPENING.jpg)   | `Porte / Fenêtre`<br/>`TEMPERATURE` (optional)|<br/>`TEMPERATURE` (optional) | See Image (i.e. you can choose between window and door).

### Pilot wire

                               | Type generic               | Dev plugin part            |           |
:---------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![HEATING](../images/HEATING.jpg)   | `Chauffage fil pilote Bouton ON`<br/>`Heating pilot wire OFF button`<br/>`Heating pilot wire State`<br/>`Button pilot wire heating` (optional) | <br/><br/><br/>|The ON / OFF and Status buttons allow you to create the button on the far left of the template and the `button pilot wire heating` are there to add buttons (5 max)

## THE JOKERS

### Generic Action

                             | Type generic               | Dev plugin part            |           |
:-------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ACTION](../images/ACTION.jpg)   | `Action Générique`           | `GENERIC_ACTION`             | Le bouton prend la forme du type de l'action. Par défaut c'est un toggle, si c'est un message alors vous avez une enveloppe, si slider vous avez un slider etc...

### Generic Info

                         | Type generic               | Dev plugin part            |           |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![INFO](../images/INFO.jpg)   | `Information Générique`           | `GENERIC_INFO`             | Le bouton prend la forme du type de l'info.


# Troubleshooting

**I am on Android version of the app (1.0.1 or 1.0.0) I cannot access my parts or even the configuration of the app.**

You had a popup warning you of a concern about the accessibility settings, so you just have to go to the accessibility settings of your mobile and uncheck the applications using this option. (A fix will be brought soon on the app)

**I have a message in one of the lines of my modules telling me that it
missing a Generic Type !**

By reading this message, it tells you what generic type is missing to create a compatible template. Just apply it.Refer to the [doc chapter Generic Type](https://www.jeedom.com/doc/documentation/plugins/mobile/en_US/mobile#_configuration_des_plugins_et_commandes_que_reçoit_l_app).

**I have a problem with one of the plugins called fully integrated (weather,
thermostat, alarm, camera) !**

Do not hesitate to access your module and click on save again, this will re-include the generic types associated with the module.

**Unable to put an info on the welcome of the app !**

This is normal, it will be available on version 1.1.

**I have the application which takes up a lot of memory in my
 !**

There was a bug on versions 1.0.0 and 1.0.1 on the Camera part. The problem will not happen again with 1.0.2, to delete the cache without overpricing the app, simply go to the configuration of your Mobile App and click on "delete the cache".

**I have a concern of first synchronization on the app or of sql on the mobile plugin !**

You have to put generic types and authorize the plugin to send generics see the doc a little higher.
