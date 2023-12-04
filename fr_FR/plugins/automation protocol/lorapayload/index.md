# Plugin LoraPayload

Ce plugin est un plugin permettant de lier des commandes de payload LoraWan et d'en créer un équipement avec des commandes tout en parsant les valeurs.

# Configuration

## Configuration du plugin

Vous pouvez vérifier ici l’état des dépendances et les relancer. En cas de soucis avec le plugin toujours relancer les dépendances même si OK dans le doute.


# Le plugin

Rendez vous dans le menu plugins/protocole pour retrouver le plugin.

Sur cette page vous pourrez voir les modules déjà inclus.

Sur la partie haute de cette page vous avez plusieurs boutons

-   Bouton ajouter : Permet d’ajouter les équipements
-   Bouton Configuation : Ce bouton permet d’ouvrir la fenêtre de configuration du plugin

# Equipement

Lorsque que vous cliquez sur un de vos modules, vous arrivez sur la page de configuration de celui-ci :

-   Donner un nom au module
-   L’activer/le rendre visible ou non
-   Choisir son objet parent
-   Lui attribuer une catégorie

Sur la partie droite vous trouverez :

-   Le profil de l’équipement (a choisir manuellement par l'utilisateur à la création)
-   Voir le visuel

Vous avez aussi deux onglets supplémentaires:

-   Un onglet Payload (décrit dans le prochain paragraphe)
-   Un onglet Commandes (c'est ici que vous trouverez les commandes correspondantes à votre équipement - cet onglet est standard à Jeedom)

# Ajout d'un équipement

Il suffit de cliquer sur le bouton Ajouter et de choisir un nom.

Ensuite vous pouvez configurer l'objet Parent, activer l'équipement, choisir une ou des catégories, et rendre l'équipement visible ou non.

Il est important sur la partie droite de choisir le type de l'équipement. C'est ce qui permettra de savoir comment parser la trame.

L'onglet Payload est très important :

-   Vous devez choisir la commande info qui reçoit le payload (que ce soit MQTT ou autres)
-   Vous devez choisir si le format du payload est en Hexadécimal ou Base64


Une fois fait vous pouvez sauver. Suite à cela lors de la prochaine réception de trame les commandes de votre équipement se mettront à jour

# Envoyer des commandes

Certains modules Lorawan possèdent des commandes de type Action qui permettent d'envoyer des consignes aux modules via l'interface Jeedom.

Dans l'onglet Equipement du plugin LoraPayload :

- Vous devez choisir la commande d'envoi (que ce soit MQTT ou autres)
- Vous devez choisir si voulez avoir une confirmation (Ack). C'est une information remontée dans MQTT sur un topic dédié qui n'influence pas les données remontées.

Concernant la commande d'envoi, dans le cas d'utilisation de MQTT, c'est une commande dans MQTT de type Action et de sous-type Message. Le topic est le topic dédié aux downlinks et la valeur de la commande est #message#.

# FAQ

-   Certaines commandes ne se mettent pas à jour en même temps que les autres : oui en effet certains modules Lorawan n'envoient pas forcément toutes les informations en même temps et avec la même fréquence
