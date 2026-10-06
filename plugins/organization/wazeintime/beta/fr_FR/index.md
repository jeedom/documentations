# Plugin Waze in Time

Ce plugin permet d’avoir les infos de trajet (trafic pris en compte) via Waze. Ce plugin peut ne plus marcher si Waze n’accepte plus qu’on interroge son site

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

# Configuration

## Configuration du plugin

Afin d’utiliser le plugin, vous devez le télécharger, l’installer et l’activer comme tout plugin Jeedom.

Suite à cela il vous faudra créer votre ou vos trajets. Rendez vous dans le menu plugins/organisation, vous y trouverez le plugin Waze in Time :

![configuration1](../images/configuration1.jpg)

Ensuite vous arriverez sur la page qui listera vos équipements (vous pouvez avoir plusieurs Trajets) et qui vous permettra d’en créer en cliquant le bouton "Ajouter":

![wazeintime screenshot2](../images/eqlogic_list.png)

Vous arriverez ensuite sur la page de configuration de votre Trajet:

![wazeintime screenshot3](../images/eqlogic_config.png)

Sur cette page vous trouverez trois sections :

### Paramètres généraux

Vous trouverez dans cette section toutes les configurations Jeedom. A savoir le nom de votre équipement, l’objet auquel vous voulez l’associer, la catégorie, si vous voulez que l’équipement soit actif ou non, et si vous voulez qu’il soit visible sur le dashboard.

Pour finir, il vous reste à configurer, si vous le désirez, l'auto-actualisation. Si vous ne configurez rien, les informations sur les trajets ne seront pas actualisée automatiquement.

### Paramètres du trajet

Cette section est une des plus importantes elle permet de régler le point de départ et d’arrivée.

- Ces infos doivent être les latitudes et longitudes des positions
- Elles peuvent être retrouvées en utilisant le site fourni en cliquant sur le lien de la page (il vous suffit de rentrer une adresse et de cliquer sur obtenir les coordonnées GPS)

Il est possible de les fournir par plusieurs moyen:

- manuellement, vous devez alors encoder directement la latitude et la longitude
- via une commande info d'un autre plugin Jeedom, vous devez alors sélectionner la commande qui doit retourner l'information au format 'latitude,longitude'
- via la config Jeedom (voir menu configuration de Jeedom)
- en sélectionnant directement une commande du plugin geoloc ou geoloc_ios si ces plugins existent (cette option ne devrait plus être utilisée pour les nouveaux équipements, préférez l'option de sélection de la commande expliquée ci-dessus)

Vous pouvez également définir les options de calcul du trajet :

- **Type de véhicule** : choisissez « Particulier » (valeur par défaut), « Taxi » ou « Moto ».
- **Éviter les routes à péage** : lorsque cette option est cochée, Waze essaie de calculer un itinéraire sans péage.
- **Éviter les routes nécessitant une vignette** : demande un itinéraire qui évite les routes soumises à une vignette ou à un abonnement.
- **Éviter les ferries** : demande un itinéraire sans traversée en ferry.

Ces options s’appliquent au calcul des trajets aller et retour.

### Paramètres d'affichage

Cette configuration permet simplement de masquer les trajets sélectionnés dans le widget sur le dashboard, ceux-ci seront tout de même mis à jour lors du rafraîchissement de l'équipement.

# Le widget

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

- Le bouton en haut à droite permet de rafraîchir les infos.
- Toutes les infos sont visibles (pour les trajets, si le trajet est long, il peut être tronqué mais la version complète est visible en laissant la souris dessus)

# Comment les trajets sont-ils actualisés?

Les infos sont rafraîchies selon la configuration d'auto-actualisation de l'équipement. Si rien n'est configuré, les trajets ne seront jamais actualisé automatiquement.
Vous pouvez les rafraîchir à la demande via scénario avec la commande rafraîchir, ou via le dashboard avec les doubles flèches.
