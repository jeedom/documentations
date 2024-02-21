# Changelog JeeZigbee

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.


- Correction d'un soucis sur l'installation de mqtt
- Modification sur le sous-topic (c'est maintenant un champs de configuration propre à la commande), attention a bien mettre a jour vos commandes si vous vous en etes servi.
- Modification de la syntaxe du champs logicalId pour les actions (passage en mode json::). Pour connaitre la nouvelle merci de consulter la documentation du plugin.
- Rajout du port /dev/ttyAMA0 pour raspbee2 sur rpi
- Correction de bug
- Ajout d'un bouton pour désactiver le mode inclusion
- Amélioration de la detection du mode inclusion

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
