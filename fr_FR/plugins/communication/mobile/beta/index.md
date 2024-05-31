# Plugin Mobile

Plugin permettant d’utiliser l’application Mobile Jeedom.

L’application mobile Jeedom nécessite l’installation de ce plugin afin que la Box puisse dialoguer avec l’application Mobile.

# Configuration du plugin Mobile pour Application V2

Après installation du plugin, il vous suffit de l’activer :

![mobile1](./images/mobile1.png)

# Première connexion à l'application V2

Pour connecter votre téléphone : il y a 2 méthodes possible;
Sur le premier écran de l'application, il vous est proposé de connecter votre compte Market, et ainsi de retrouver toutes les Boxs associées à ce compte, ou bien simplement ajouter une Box.

![v2ConnectMarket](./images/v2firstConnect.jpeg)

> **IMPORTANT**
>
> Pour profiter des fonctionnalités de l'application, le Core de votre Jeedom doit être en 4.4.0 minimum

#### **CONNEXION VIA LE COMPTE MARKET** :

![v2ConnectMarket](./images/v2connectMarket.PNG)

Il vous faut simplement rentrer votre identifiant Market ainsi que votre mot de passe.

#### **CONNEXION VIA Box ID** :

![v22methods](./images/v22methods.PNG)

Plusieurs choix sur cet écran :

- Vous entrez l'url de votre Jeedom (interne ou externe), ainsi que les identifiants d'accès à celle-ci et vous confirmez avec le bouton CONNEXION

- Vous cliquez sur QR Code : un nouvel écran apparait; vous pourrez scanner un QR Code depuis le plugin Mobile de la Box que vous souhaitez ajoutée, via l'onglet QR Code du plugin.

![v2ModalQrApp](./images/v2QRCodeConnect.PNG)

> Onglet QR Code du plugin Mobile

> > ![v2ModalPlugin](./images/v2ModalQrCode.png)

Une fois cette première étape passée, vous êtes enregistré dans l'application: si vous possédez le plugin Mobile, vous aurez accès via le menu aux Notifications, aux QR Codes, la customisation du Menu ....

Dans le menu, vous aurez un onglet Boxs, qui regroupe toutes les Box présentes sur ce compte Market

![v2MenuBoxs](./images/v2Menuboxs.PNG)

![v2floutedBoxs](./images/v2floutedboxs.png)

Il vous suffit de cliquer sur la Box où le plugin Mobile est installé, puis de vous identifier pour accéder à la Box.

La Box passera en haut de la liste, ayant validée son authentification.
Vous pouvez faire ainsi pour plusieurs Boxs.

Vous pouvez aussi cliquer sur le bouton + en bas à droite pour accéder à différentes options;

- QR Code pour ajouter une Box à la liste via le plugin Mobile,
- Manuel pour ajouter manuellement une Box
- Détection Atlas et Luna (si vous êtes en Wifi, détectera les Boxs sur le réseau)
- Synchronisation Market pour actualiser les informations du compte Market configuré

![v2greenBtnAdd](./images/v2greenBtnAdd.PNG)

Pour accéder aux fonctionnalités comme les Notifications, la Personnalisation du Menu ou la Géolocalisation, il faut au préalable avoir sélectionné au moins une Box 'actuelle'

![v2ActualBoxFlouted](./images/v2ActualboxFlouted.jpeg)

# Fonctionnement de la Géolocalisation

Nous ajoutons une zone de Géolocalisation en cliquant sur l'icône +

![v2AddZone](./images/v2AddZone.jpeg)

Nous tapons l'adresse recherchée, nous validons avec Entrée sur son téléphone; le curseur va alors se positionner sur l'adresse recherchée.
Nous pouvons ensuite ajouter un nom et sauvegarder la zone.

Cela créera une nouvelle commande sur votre équipement mobile, de type binaire, qui correspondra aux entrées et sorties de la zone si la géolocalisation est activée sur votre téléphone mobile.

Nous pouvons également changer le radius de la zone, pour étendre la détection de la zone.

![v2ModifyBigRadius](./images/v2ModifyBigRadius.jpeg)

# FAQ

> **J'ai des soucis avec les notifications**
>
> Cette partie est actuellement en cours d'amélioration et d'optimisation sur l'application beta.

> **J'ai des soucis d'affichage de ma webview**
>
> Sur votre Jeedom, dans les Préférences, vérifiez que la page d'accueil du mobile soit bien ACCUEIL.

# Configuration du plugin Mobile V1

Après installation du plugin, il vous suffit de l’activer :

![mobile1](../images/mobile1.png)

**Configuration**

Pour configurer le plugin, vous devez ajouter les téléphones qui pourront accéder à Jeedom.

Pour Ajouter un téléphone : **Plugins** → **Communication** → **App
Mobile** → **Ajouter**

![mobile2](../images/mobile2.png)

Voici les paramètres à renseigner :

- **Nom de l’équipement mobile** : Nom du téléphone
- **Activer** : Activation de l’accès pour ce mobile
- **Type de Mobile** : Sélection de l’OS du téléphone (iOS, Android)
- **Utilisateur** : Utilisateur associé à cet accès

> **Tip**
>
> Le choix de l’utilisateur est important car il détermine les équipements auxquels celui-ci aura accès en fonction de ses droits.

![mobile3](../images/mobile3.png)

Après avoir sauvegardé, vous obtiendrez un QR Code permettant à l’application de se configurer toute seule.

# Configuration des plugins et commandes que reçoit l’app

Après l’initialisation du Plugin Mobile vous avez la possibilité de remanier les types génériques des commandes, des plugins et des pièces.

![mobile10](../images/mobile10.png)

En cliquant sur un plugin, vous pouvez l’autoriser ou non à dialoguer avec l’application mobile, et configurer chacun des types génériques associés à ses commandes.

![mobile11](../images/mobile11.png)

En cliquant sur une pièce, vous pouvez l’autoriser ou non à être présente dans l’application mobile, et configurer chacun des types génériques associés à ses commandes.

![mobile12](../images/mobile12.png)

# Configuration de l’application Mobile

Vous trouverez les applications sur les stores mobiles :

**Android Google Play**

![Google Play FR](../images/Google_Play_FR.png)

**Apple App Store**

![App Store FR](../images/App_Store_FR.png)

## Premier lancement de l’app

Au 1er lancement de l’application Mobile, un tutorial vous sera proposé afin de vous accompagner dans la configuration de celle-ci.

Après avoir téléchargé et installé votre application mobile Jeedom, lancez l’application sur votre smartphone.

Vous arrivez alors dans un didacticiel de configuration que nous vous conseillons de suivre. Certaines étapes ont été faites précédemment.

Vous aurez ensuite le choix entre une configuration manuelle ou automatique par QR Code. Si vous optez pour la configuration par QR Code, il suffit de flasher le QR Code présent sur le plugin App Mobile dans l’équipement smartphone créé précédemment. Dans ce cas, l’application va récupérer automatiquement toute la configuration de votre Jeedom et se connecter automatiquement. Lorsqu’il sera connecté chez vous en Wifi, l’application utilisera automatiquement l’adresse Jeedom Ethernet interne à votre réseau. Lorsque vous serez connecté en 4G ou 3G, il utilisera votre adresse externe pour se connecter à votre Jeedom (par exemple via le service DNS Jeedom si vous l’utilisez). Si vous optez pour la configuration manuelle, dans ce cas il vous faudra entrer à la main les adresses IP interne et externe de votre Jeedom. Cette option est réservée à un public averti.

L’application va se synchroniser et vous arrivez sur sa page d’accueil (précédée par un mini guide de présentation).

L’application mobile Jeedom est maintenant prête à fonctionner.

## Les Favoris

Sur l’application vous pouvez avoir des Favoris (raccourcis de commandes, plugins, scénarios).

Voici donc la marche à suivre pour en créer :

Cliquez sur un des + sur l’écran d’accueil de l’application :

![mobile dashboard 1](../images/mobile_dashboard_1.PNG)

Vous arriverez sur la page de sélection du type de raccourci :

![mobile dashboard 2](../images/mobile_dashboard_2.PNG)

Par exemple, nous allons prendre Action, il nous propose donc des Pièces/Objets :

![mobile dashboard 3](../images/mobile_dashboard_3.PNG)

Il vous suffit alors de sélectionner l’action que vous souhaitez en raccourci :

![mobile dashboard 4](../images/mobile_dashboard_4.PNG)

Il est ensuite possible de personnaliser la couleur de celle-ci (pour le moment trois couleurs sont proposées) :

![mobile dashboard 5](../images/mobile_dashboard_5.PNG)

Ainsi que les deux textes associés :

![mobile dashboard 6](../images/mobile_dashboard_6.PNG)
![mobile dashboard 7](../images/mobile_dashboard_7.PNG)

Voilà, vous avez maintenant un raccourci de votre commande (dans la version 1.1 il est prévu que les commandes On/Off apparaissent sur la même touche).

![mobile dashboard 8](../images/mobile_dashboard_8.PNG)

# Comment bien configurer ses types génériques

## Les Génériques Types dans le plugin Mobile

Mieux que des mots, voici un exemple des génériques types pour une lumière avec toutes ses commandes (voir aussi le tableau Lumière plus bas) :

![generic type in plugin](../images/generic_type_in_plugin.jpg)

## Tableaux des templates de l’application

### Les Lumières

|              Image              | type générique                                                                                                                                                                                                                                                   | Partie Dev plugin                                                                                                        |                                                                                                                           Description                                                                                                                            |
| :-----------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![LIGHT](../images/LIGHT_1.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`                                                                                                                                                                                                                     | `LIGHT_ON`<br/>`LIGHT_OFF`                                                                                               |                                                                                                   présence de deux boutons "ON" et "Off" pas de retour d'état.                                                                                                   |
| ![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat`                                                                                                                                                                                                  | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`                                                                             |                                                                                          Retour d'état présent, le bouton de gauche permet de switcher entre On et Off                                                                                           |
| ![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton Toggle`<br/>`Lumière Etat`                                                                                                                                                                                                                       | `LIGHT_TOGGLE`<br/>`LIGHT_STATE`                                                                                         |                                                                                          Retour d'état présent, le bouton de gauche permet de switcher entre On et Off                                                                                           |
| ![LIGHT](../images/LIGHT_3.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat`<br/>`Lumière Slider`                                                                                                                                                                             | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`                                                          |                                                                    Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité                                                                    |
| ![LIGHT](../images/LIGHT_4.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat`<br/>`Lumière Slider`<br/>`Lumière Couleur (info)`<br/>`Lumière Couleur (action)`<br/>`Lumière Mode` (optionnel, il sert à avoir des mode de lumière, par exemple arc-en-ciel sur les Philips Hue) | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`<br/>`LIGHT_COLOR`<br/>`LIGHT_SET_COLOR`<br/>`LIGHT_MODE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité. Dans le cercle la couleur de la lampe est présente et lors d'un cloc dans celui-ci vous pouvez changer la couleur et activer un mode |

### Les Prises

|               Image               | type générique                                                               | Partie Dev plugin                                                   |                                                        Description                                                         |
| :-------------------------------: | :--------------------------------------------------------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------: |
| ![ENERGY](../images/ENERGY_1.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`                                     | `ENERGY_ON`<br/>`ENERGY_OFF`                                        |                                présence de deux boutons "ON" et "Off" pas de retour d'état.                                |
| ![ENERGY](../images/ENERGY_2.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`<br/>`Prise Etat`                    | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`                     |                       Retour d'état présent, le bouton de gauche permet de switcher entre On et Off                        |
| ![ENERGY](../images/ENERGY_3.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`<br/>`Prise Etat`<br/>`Prise Slider` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`<br/>`ENERGY_SLIDER` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité |

### Les Volets

|              Image              | type générique                                                                                                        | Partie Dev plugin                                                            |                                     Description                                     |
| :-----------------------------: | :-------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------: |
| ![FLAP](../images/FLAP_1.jpg)   | `Volet Bouton Monter`<br/>`Volet Bouton Descendre`<br/>`Volet Bouton Stop`<br/>`Volet Etat`(optionnel)                | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`(optionnel)        |  Présence de trois boutons "Monter", "Descendre", "Stop", retour d'état optionnel.  |
| ![FLAP](../images/FLAP_2.jpg)   | `Volet Bouton Monter`<br/>`Volet Bouton Descendre`<br/>`Volet Bouton Stop`<br/>`Volet Etat`<br/>`Volet Bouton Slider` | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`<br/>`FLAP_SLIDER` | Présence d'un slider, avec un bouton Monter/Descendre en Toggle (avec icône d'état) |

### Inondation

|              Image              | type générique                                                                                 | Partie Dev plugin                                                                        |                             Description                              |
| :-----------------------------: | :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------: |
| ![FLOOD](../images/FLOOD.jpg)   | `Innondation`<br/>`Température`(optionnel)<br/>`Humidité`(optionnel)<br/>`Sabotage`(optionnel) | `FLOOD`<br/>`TEMPERATURE`(optionnel)<br/>`HUMIDITY`(optionnel)<br/>`HUMIDITY`(optionnel) | Permet d'avoir son capteur d'inondation complet sur une seule ligne. |

### Serrure

|             Image             | type générique                                                         | Partie Dev plugin                             |                                  Description                                  |
| :---------------------------: | :--------------------------------------------------------------------- | :-------------------------------------------- | :---------------------------------------------------------------------------: |
| ![LOCK](../images/LOCK.jpg)   | `Serrure Etat`<br/>`Serrure Bouton Ouvrir`<br/>`Serrure Bouton Fermer` | `LOCK_STATE`<br/>`LOCK_OPEN`<br/>`LOCK_CLOSE` | Retour d'état présent, le bouton de gauche permet de switcher entre on et off |

### Sirène

|              Image              | type générique                                               | Partie Dev plugin                            |                                  Description                                  |
| :-----------------------------: | :----------------------------------------------------------- | :------------------------------------------- | :---------------------------------------------------------------------------: |
| ![SIREN](../images/SIREN.jpg)   | `Sirène Etat`<br/>`Sirène Bouton On`<br/>`Sirène Bouton Off` | `SIREN_STATE`<br/>`SIREN_ON`<br/>`SIREN_OFF` | Retour d'état présent, le bouton de gauche permet de switcher entre on et off |

### Fumée

|              Image              | type générique                       | Partie Dev plugin                    |                           Description                            |
| :-----------------------------: | :----------------------------------- | :----------------------------------- | :--------------------------------------------------------------: |
| ![SMOKE](../images/SMOKE.jpg)   | `Fumée`<br/>`Température`(optionnel) | `SMOKE`<br/>`TEMPERATURE`(optionnel) | Permet d'avoir son capteur de fumée complet sur une seule ligne. |

### Température

|                    Image                    | type générique                          | Partie Dev plugin                       | Description |
| :-----------------------------------------: | :-------------------------------------- | :-------------------------------------- | :---------: |
| ![TEMPERATURE](../images/TEMPERATURE.jpg)   | `Température`<br/>`Humidité`(optionnel) | `TEMPERATURE`<br/>`HUMIDITY`(optionnel) | Voir Image. |

### Présence

|                 Image                 | type générique                                                                                                                              | Partie Dev plugin                                                                                                                           | Description |
| :-----------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ | :---------: |
| ![PRESENCE](../images/PRESENCE.jpg)   | `Présence`<br/>`Température`(optionnel)<br/>`Luminosité`(optionnel)<br/>`Humidité`(optionnel)<br/>`UV`(optionnel)<br/>`Sabotage`(optionnel) | `PRESENCE`<br/>`TEMPERATURE`(optionnel)<br/>`BRIGHTNESS`(optionnel)<br/>`HUMIDITY`(optionnel)<br/>`UV`(optionnel)<br/>`SABOTAGE`(optionnel) | Voir image. |

### Ouvrant

|                Image                | type générique                                 | Partie Dev plugin                                       |                              Description                              |
| :---------------------------------: | :--------------------------------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------: |
| ![OPENING](../images/OPENING.jpg)   | `Porte / Fenêtre`<br/>`Température`(optionnel) | `OPENING / OPENING_WINDOW`<br/>`TEMPERATURE`(optionnel) | Voir Image (à savoir que vous pouvez choisir entre fenêtre et porte). |

### Fil pilote

|                Image                | type générique                                                                                                                                      | Partie Dev plugin                                                      |                                                                          Description                                                                           |
| :---------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![HEATING](../images/HEATING.jpg)   | `Chauffage fil pilote Bouton ON`<br/>`Chauffage fil pilote bouton OFF`<br/>`Chauffage fil pilote Etat`<br/>`Chauffage fil pilote bouton`(optionnel) | `HEATING_ON`<br/>`HEATING_OFF`<br/>`HEATING_STATE`<br/>`HEATING_OTHER` | Les boutons ON/OFF et Etat permette de créer le bouton tout à gauche du template et les `chauffage fil pilote Bouton`sont là pour rajouter des boutons (5 max) |

## LES JOKERS

### Générique Action

|               Image               | type générique               | Partie Dev plugin |                                                                            Description                                                                            |
| :-------------------------------: | :--------------------------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![ACTION](../images/ACTION.jpg)   | `Action Générique`           | `GENERIC_ACTION`  | Le bouton prend la forme du type de l'action. Par défaut c'est un toggle, si c'est un message alors vous avez une enveloppe, si slider vous avez un slider etc... |

### Générique Info

|             Image             | type générique                    | Partie Dev plugin |                 Description                 |
| :---------------------------: | :-------------------------------- | :---------------- | :-----------------------------------------: |
| ![INFO](../images/INFO.jpg)   | `Information Générique`           | `GENERIC_INFO`    | Le bouton prend la forme du type de l'info. |

# Troubleshooting

**Je suis sur Android version de l’app (1.0.1 ou 1.0.0) je n’arrive pas à accéder à mes pièces ni même à la configuration de l’app.**

Vous avez eu un popup vous avertissant d’un souci sur les paramètres d’accessibilité, il vous suffit donc de vous rendre dans les paramètres d’accessibilité de votre mobile et de décocher les applications utilisant cette option. (Un correctif sera apporté prochainement sur l’app)

**J’ai un message dans une des lignes de mes modules me disant qu’il manque un Type Générique !**

En lisant ce message, il vous dit quel type générique manque pour créer un Template compatible. Il suffit juste de l’appliquer. Reportez-vous à la [doc chapitre Type Générique](https://www.jeedom.com/doc/documentation/plugins/mobile/fr_FR/mobile#_configuration_des_plugins_et_commandes_que_reçoit_l_app).

**J’ai un souci sur un des plugins dit complètement intégré (Météo, Thermostat, Alarme, Caméra) !**

N’hésitez pas à accéder à votre module et de bien cliquer sur sauvegarder à nouveau, cela permettra de réinclure les types génériques associés au module.

**Impossible de mettre une info sur l’accueil de l’app !**

Cela est normal, ça sera disponible sur la version 1.1.

**J’ai l’application qui prend énormément de mémoire dans mon téléphone !**

Il y avait un bug sur les versions 1.0.0 et 1.0.1 sur la partie Camera. Le souci ne ce reproduira plus avec la 1.0.2, pour supprimer le cache sans supprimer l’app, il suffit d’aller dans la configuration de votre App Mobile et de cliquer sur "supprimer le cache".

**J'ai un souci de première synchronisation sur l'app ou de SQL sur le plugin mobile !**

Il faut bien mettre des types génériques et autoriser le plugin a envoyer les génériques voir la doc un peux plus haut.
