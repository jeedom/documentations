# Changelog JeeZigbee

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.


- Correction d'un soucis de traduction

# 18/11/2025

- Retour de la mise à jour du firmware zigbee pour la Luna

>**IMPORTANT**
>
>Il est maintenant possible de mettre zigbee2mqtt 2.X (2.6.0 actuellement) sur une Luna maintenant mais il faut bien mettre le firmware a jour avant (depuis la configuration du plugin puis le bouton de mise à jour du firmware) et ensuite il faut passer de ezsp en ember (toujours depuis la configuration du plugin jeezigbee). En cas de soucis ne pas hésiter à contacter le support.

# 22/10/2025

- Correction d'un soucis de mise à jour du firmware pour certaine Luna

# 17/09/2025

- Correction d'un soucis lors de la mise à jour du firmware de la luna

# 16/09/2025

- Meilleurs gestion des droits lors du lancement du demon
- Ajout d'un nouveau firmware (8.0.3.0) pour la Luna

>**IMPORTANT**
>
>Il est maintenant possible de mettre zigbee2mqtt 2.X (2.6.0 actuellement) sur une Luna maintenant mais il faut bien mettre le firmware a jour avant (depuis la configuration du plugin puis le bouton de mise à jour du firmware) et ensuite il faut passer de ezsp en ember (toujours depuis la configuration du plugin jeezigbee)

# 24/06/2025

- Version de zigbee2mqtt par defaut 2.4 (sauf pour les luna)
- Correction d'un soucis visuel sur l'inclusion en z2m 2.3 ou plus

# 14/01/2025

- Mise à jour de la doc

# 07/01/2025

- La version par defaut de zigbee2mqtt est maintenant 1.42.0
- Support de l'installation de la version de zigbee2mqtt 2.0.X (attention pour l'instant l'installation est possible mais on ne garantie pas que tout marche meme si les 1er tests sont encourageant)
- Correction de bug

# 16/12/2024

- Mise à jour de la documentation
- Le bouton de mise à jour du firmware est masqué si vous etes en mode distant
- Amélioration du démarrage du demon
- Par defaut le plugin est en mode local (au lieu d'etre en attente de configuration)
- La version de zigbee2mqtt est par défaut la 1.41 (temporaire le temps de la sortie de la 2.0)
- Suppression du bouton de mise à jour du firmware sur les Luna (temporaire)

# 27/09/2024

- Changement des versions minimum, core 4.4 et OS Debian 11 minimum

# 24/09/2024

- Ajout d'un lien sur la page de l'équipement qui renvoi sur la page zigbee2mqtt de l'équipement pour avoir plus d'informations

# 10/09/2024

- Possibilité sur les box ayant des dongle elelabs de flasher le firmware Ember (experimental cela peut completement casser votre dongle et ne sera ni couvert par la garantie ni le support)
- Correction d'un bug si le topic racine n'est pas zigbee2mqtt

# 05/08/2024

- Amélioration de la gestion des images
- Correction du baudrate sur deconz
- Correction d'un bug d'affichage de la fenetre de configuration d'un noeud si un équipement est supprimé alors qu'il est utilisé en binding dans un autre

# 16/07/2024

- Correction d'une erreur indiquant une mise à jour de zigbee2mqtt alors que la version est deja à jour
- Ajout du type de clef Ember
- Correction d'un soucis au premier démarrage du démon sur les droits sur le fichier de log
- Correction d'un soucis sur quelques images

# 22/04/2024

- Correction d'un bug sur duplication de commande (sur les scenes)
- Correction d'un bug sur les slider avec valeur negative

# 03/04/2024

- Correction d'un bug sur l'image de la derniere version de zigbee2mqtt

# 20/03/2024

- Correction d'un bug avec la commande refresh

# 13/03/2024

- Limitation de la mise à jour du firmware zigbee à Luna sur les box Luna (évite de casser la puce Zigbee en cas de mauvais choix)

# 26/02/2024

- Correction d'un soucis sur l'installation de mqtt
- Modification sur le sous-topic (c'est maintenant un champs de configuration propre à la commande), attention a bien mettre a jour vos commandes si vous vous en etes servi.
- Modification de la syntaxe du champs logicalId pour les actions (passage en mode json::). Pour connaitre la nouvelle merci de consulter la documentation du plugin.
- Rajout du port /dev/ttyAMA0 pour raspbee2 sur rpi
- Correction de bug
- Ajout d'un bouton pour désactiver le mode inclusion
- Amélioration de la detection du mode inclusion
- Correction de bug (le plugin ignore maintenant les valeurs vide pour les commandes)

# 19/02/2024

- Correction d'un soucis sur l'installation de mqtt


# 17/01/2024

- Amélioration de la mise à jour du firmware sur Luna
- Meilleure gestion du port sur Luna
- Simplification de la liste des ports
- Possibilité d'envoyer un message sur un sous topic de la commande set : arm_mode/mode::arming_stay
- Correction de bugs
- Gestion du retour d'état sur les groupes

# 26/12/2023

- Amélioration de l'arrêt du démon Zigbee2MQTT
- Correction de bugs

# 21/12/2023

- Suppression de la notion d'instance
- Possibilité de lancer une inclusion directement sur un module routeur
- Ajout du support de la conbee 3
- Ajout du support de la raspbee 2

# 08/12/2023

- Ajout d'une option "Ne pas autoriser les messages si l'équipement n'a pas été vu depuis plus de (s)" (Réservé aux utilisateurs avancés)

# 05/12/2023

- Support de la mise à jour du firmware zigbee sur Luna (beta)
- Support de logicalId long sur les commandes
- Possibilité de créer une commande refresh (il faut ajouter une commande puis type action/defaut et dans le champs logical id mettre refresh)
- Possibilité d'ajouter un cron qui demande l'actualisation des valeurs (attention rien ne garanti que le module va vraiment les mettres à jour il faut qu'il le supporte)
- Correction d'un bug avec la dernière version de Zigbee2MQTT


# 06/11/2023

- Correction d'un bug sur la gestion des groupes
- Optimisation du code
- Correction de bugs lors de l'installation du plugin (erreur 500)

# 22/09/2023

- Possibilité de choisir la version de Zigbee2MQTT

>**IMPORTANT**
>
>Pour ceux ayant des soucis de module injoignable suites aux précedentes mises à jours il faut restaurer un backup jeedom d'avant la mise à jour puis refaire la mise à jour. Je m'excuse sincèrement pour ce bug qui se produit chez certain d'entre vous il vient d'un fonction innatendue de Zigbee2MQTT que je n'ai pas sur mes différents labo.

# 20/09/2023

- Correction d'un bug sur la version de Zigbee2MQTT

# 19/09/2023

- Correction d'un bug sur la mise a jour des dépendances (Zigbee2MQTT) si vous avez fait une restauration de jeedom

# 08/09/2023

- Correction d'un bug qui empêchait la création correcte des commandes

# 04/09/2023

- Possibilité de configurer le port d'écoute de Zigbee2MQTT
- Correction d'un soucis sur les commandes de type couleur
- Correction sur la génération des commandes qui pouvait ne pas marcher dans certain cas
- Amélioration du nommage des commandes
- Possibilité pour les box Atlas avec les contrôleurs de type Elelabs de faire la mise à jour du firmware depuis jeedom

# 03/07/2023

- Correction d'un soucis lors de l'envoi d'une commande de positionnement (type volet)

# 27/06/2023

- Correction d'un soucis de detection de certain module (dont profalux)

# 30/05/2023

- Version initiale
