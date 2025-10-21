# Changelog Luna

# Changelog plugin luna

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 20/10/2025

- Ajout de la gestion du kernel panic après l'installation ou la mise à jour du plugin Luna

- Ajout du bouton "Reconfigurer le packet forwarder" dans la partie Lora

# 08/10/2025 (Beta)

- Ajout de l'onglet Avancé afin de pouvoir changer le mot de passe root SSH, configuration la rotation des logs, activer/désactiver le “factory reset” par bouton, activer/désactiver le script de failover réseau et planifier un redémarrage automatique de la box

# 26/08/2024

- Mise en place une configuration pour limiter l'espace disque utilisé par les journaux, en ajustant les paramètres de rotation et de rétention. 

# 11/07/2024

- Ajout Outils Administration

# 09/07/2024

- Mise en place d'un service LTE pour reconnecter le modem
- Reprise de l'UI sur la partie LTE
- Ajout de plusieurs paramètres pour l'auto connecte des connexions wifi et hotspot (il faut supprimer la connexion wifi et la recréer)

# 25/06/2024

- Fix Js
- Optimisation UI priorites des connexions


# 19/06/2024

- Activation de la batterie a la mise a jour et installation du plugin
- Correction Syntaxe sur l'onglet Batterie pour plus de précision
- Ajout d'un templateWidget sur la tuile du dashboard

# 02/05/2024

- Ajout des commandes pour allumer et éteindre la batterie

# 05/02/2024

- Correction double Ip
- Ajout des inforamtions APN pour une meilleur connexion 4G

# 19/12/2023

- correction de l'erreur (The stream or file "/var/www/html/core/class/../../log/" could not be opened in append mode: failed to open stream: Is a directory)

# 07/12/2023

- Nouveau module pour le hotspot avec dhcp.


# 18/11/2023

- Divers correctifs et améliorations du code

# 29/10/2023

- Fix batterie status.

# 20/10/2023

- Ajout LiXee-GSM dans les regles usb (debrancher puis rebrancher l'equipement pour le voir avec la nouvelle laision usb)

# 14/09/2023

- Nouvelle interface pour le plugin mobile.
- Hotspot
- 2 wifis disponibles.
- LTE avec prise en charge du plugin sms
- Nouveau formatage de la carte SD
- Priorisation des connexion.
- Fixer une adresse ip (Wifi et Ethernet)

# 06/09/2023

- Changement du scenario du bouton Alimentation a l'arriere de la box. (voir documentation)
- Mise à jour LTE pour erreur de demande LTE alors que box non compatible.

# 02/05/2023

- Patch LocalHost (changement des droits).
- Patch done fonction (clignotement de la led verte de la box résolu).
- Ajout de la fonction LTE pour les boxs avec option LTE.
- Ajout de la fonction LORA pour les box avec option LORA.
- Ajout des usb Fixe (ttyUSBLUNA-Zigbee a utiliser dnas le plugin Zigbee pour ne plus avoir de souci d'usb qui change.)

# 27/03/2023

- Nouvelle image Luna
- Patch Localhost
- Patch Batterie
- Patch USB fixed (LORA-zigbee fixed)

# 21/02/2023

- Partitionnage SD.
- Activation Lora pour les Luna avec Lora integré (Pro).
- Fix souci de Localhost sur la box.

# 19/11/2022

- SD (gestion)
- Fix Batterie Luna (gestion de l'arrêt de Linux ainsi que de la batterie dans le systeme).
- Corrections orthographiques (merci FuraxWorld)

# 3/11/2022

Ajout des nouveautés :

- Wifi connexion
- Led (gestion)
- Batterie (gestion)

# 20/10/2022

- Debut du plugin
