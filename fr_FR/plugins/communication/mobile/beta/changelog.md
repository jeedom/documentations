# Changelog App Mobile

> **IMPORTANT**
>
> Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# xx/08/2024

> **App V1**
>
> Attention, à partir de cette version, l'appV1 n'est plus prise en charge.
> Il sera toujours possible d'accéder à votre équipement, pour éventuellement, remplacer vos commandes de géolocalisation et de notification.

- Suppression des fichiers concernant l'AppV1.
- Nettoyage des infos stockées en BDD (config).

# 20/08/2024

- Déplacement des infos notifications dans l'onglet "Mobile"

# 04/08/2024

- Prise en compte rétention des notifications pour suppression des images


# 22/07/2024

- Prise en compte rétention des notifications
- Target Sdk 34 pour Android

# 28/05/2024

- Modification Géolocalisation pour prochaine version App
- Stockage Notifications dans le plugin
- Nouvelles Api pour l'application

# 05/04/2024

- Compatible uniquement avec la 4.4 du Core ou supérieur.

# 15/12/2023

- Attention : Refactorisation importante du code : le menu Custom préalablement enregistré sur l'appV2 est susceptible de ne plus être enregistré.
- Une fonction pour enregistrer les menus dans le plugin est en cours d'ajout


# 22/10/2023

- Fix mise à jour géolocalisation de l'app v2

# 12/10/2023

- Mise à jour pour prendre en compte la nouvelle Application mobile

# 09/06/2023

- Fix Notifications
- Ajout Affichage Équipements par Tableau

# 19/05/2023

- PR by PhpVarious
- Fix bugs mineurs

# 10/05/2023

- Commandes GeoLoc V2
- Suppression partie ARN mobile AppV2
- MAJ mobile.api

# 10/01/2023

- FUTURE APPV2 ALPHA INTEGRATION DANS PLUGIN MOBILE
- Nouvelle Interface Future AppV2
- Modale Custom Menu Future AppV2
- Modale QR Code Future AppV2

# 13/12/2021

- Mode offline pour le QR Code (création du QR Code sans internet).
- Compatibilité 4.2 Jeedom Core

# 11/10/2021

- Ajout du plugin Zigbee dans les plugins compatible.

# 21/06/2021

- Nouveau timeout pour les notifications et renvoi en cas de souci avec le serveur.

# 24/02/2021

- Nouveau moteur de Notification pour Android.
- Ajout des images (Cameras, Rapports etc...) pour Android.
- Prise en charge de la version 1.4.1 de l'app Android.
- Prise en charge des émoticons et des retour a la ligne avec la nouvelle version Android 1.4.1

# 17/02/2021

- Ajout de l'id de groupe pour les notifications Android.
- Icones présentes pour les pièces dans la présentation.

# 15/04/2020

- Ajouts des Commandes de chaque mobile.

# 31/03/2020

- Correction d'un bug sur l'envoi de notification sur certain Jeedom

# 19/02/2020

- Fix http.error ligne 39 si téléphone non authentifier à la première connexion.

# v1.3.0

- Notification ASK
- Historique des notifications
- Slider avec pourcentage
- Modification de la synchronisation
- Suppression du push to refresh
