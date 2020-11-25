# Changelog Caméra

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 24/11/2020

- Nouvelle présentation de la liste des objets
- Ajout du tag "Compatibilité V4"

# 30/08/2020

- Ajout de la caméra Foscam FI9926P

# 07/07/2020

- Correction d'un soucis sur le port par default de l'url de flux pour les caméras Foscam merci @nebz
- Ajout de la camera Reolink RLC-410-5MP merci @Dorsad
- Ajout de RocketCam (Freebox) merci @JAG

# 26/06/2020

- Ajout de caméra Dahua
- Ajout de camera Foscam
- Supression de la detection de mouvements
- Ajout de panasonic wc np502 merci @Flobul
- Ajout de camera IOS merci @Flobul

# 16/06/2020

- Correction du soucis d'ouverture de l'historique en mode flux

# 14/06/2020

- Amélioration du systeme de nettoyage des fichiers de flux video (attention la fonction est toujours en beta il est possible que notre reglage soit un peu trop agressif)
- Correction d'un bug sur la recuperation des informations de mouvement des camera foscam HD
- Correction d'un soucis si un utilisateur non admin voulait visionner le flux video
- Correction de bug d'affichage sur les design en mode "flux only"
- Correction de bugs

# 11/0/2020

- Ajout de configuration
- Possibilité de voir la camera en flux video (et non plus image par image) - Beta
- Refonte du systeme de pre-configuration des cameras

# 11/05/2020

- Retour de la fonction de decouverte ONVIF (merci @Aidom)
- Possibilité d'utiliser des commandes (type script) pour le controle des cameras

# 17/10/2019

- Optimisation de la fonction de nettoyage des dossiers de capture des cameras

# 10/10/2019

- Correction d'un bug sur la prise de video sous debian 10

# 25/09/2019

- Correction de bug sur le rtsp en debian 10

# 23/09/2019

- Correction de bugs
- Ajout d'un champs pour mettre des options flux video (rtsp)

# 20/09/2019

- Correction de bugs

# 14/09/2019

 - Correction d'un bug ou la tache cronHourly du plugin camera n'arrivait pas a finir
 - Correction d'un bug sur la prévisualisation de l'historique des captures

# 28/08/2019

- Amélioration du support du rtsp
- Correction de bugs

# 06/06/2019

- Correction d'un soucis si il y a des & dans l'url de stream rtsp
- Amélioration de la securité sur le flux video
- Correction d'un soucis si il y a des espaces dans l'url de flux video

# 21/01/2019

- Mise à jour de la doc
- Correction d'un bug sur le panel

# 17/01/2019

- Mise à jour de la doc
- Correction d'un soucis sur la configuration de Wanscam q3(s)

# 15/01/2019

- Ajout de la camera Wanscam q3(s)
- Selection du mode automatiquement en fonction de l'url de capture et du flux vidéo (RTSP)
- Correction de bugs
- Ajout du remplacement de #username# et #password# dans les commandes
- Correction d'un soucis sur les dépendance

# 01/06/2018

- Refonte du panel, on choisi maintenant le nombre de camera par ligne dans la configuration du plugin, leur dimension est calculé automatiquement
- Amélioration du widget en mobile
- Support des flux video RTSP/MJPEG... Attention vu qu'il y a une conversion de faite ce n'est à utiliser que si vous n'avez pas le choix, il faut priviliegé les snapshot (plus rapide et moins de charge sur Jeedom)

# 03/04/2018

- Mise à jour documentation

# 10/03/2018

- Mise à jour de la doc
- Optimisation du code

# 05/03/2018

- Correction de bugs

# 12/02/2018

- Correction de bugs
- Ajout d'une option pour désactiver toute compression d'image coté Jeedom
