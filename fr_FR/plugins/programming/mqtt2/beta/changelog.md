# Changelog MQTT Manager

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 03/01/2024

- Préparation pour jeedom 4.4
- Amélioration de la gestion de mosquitto sous Docker

# 27/10/2023

- Correction d'un bug sur l'état du démon (démarré alors que non)

# 05/10/2023

- Correction d'un bug sur l'état du brocker

# 02/10/2023

- Possibilité de corriger le QOS par defaut
- Correction de bugs
- Début d'ajout du systeme de découverte auto
- Amélioration de la gestion de mosquitto en mode local

# 22/03/2023

- Correction de bugs

# 07/03/2023

- Ajout d'un systeme d'autodecouverte pour certain module en beta (esphome, tasmota et shelly)
- Ajout de l'image des modules
- Correction d'un bug sur le client ID (si plusieurs jeedom sur le meme broker)
- Support d'un sous niveau dans les topics d'équipement
- Correction de bug

# 23/12/2022

- Correction d'un bug sur le temps maximum autorisé pour l'installation des dépendances
- Ajout d'un système de template d'équipement (beta)

# 18/11/2022

- Ajout d'un message invitant à rétablir les droits sur les dossiers avant d'installer Mosquitto en cas d'erreur **Aucun dossier SSL trouvé**

# 13/11/2022

- Ajout d'un bouton permettant de désinstaller un broker Mosquitto local sur la page de configuration générale du plugin
