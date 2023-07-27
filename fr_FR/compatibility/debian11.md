# Debian 11 `Bullseye`

## Introduction

Vous trouverez ici un compte-rendu de nos tests Jeedom sous Debian 11. Pour rappel Debian 11 est sortie officiellement en stable le 15 août 2021 et implique de nombreux changements, notamment :
- Passage de PHP 7.3 à 7.4.
- Supression de python 2.
- Mise à jour de beaucoup de paquets.

## Core

### 4.1.X

Nous n'avons pas encore détecté d'impact.

### 4.2.X

~~ Il y a un problème avec le nouveau système d'installation des dépendances pour celui utilisant pip3 (pip3 n'existe plus et est remplacé par pip) ~~ => Fixé

## Plugins

Nous ne pouvons pas tester tous les plugins, nous ne mettons donc que les retours de ceux testés pour le moment (cette liste sera mise à jour au fur et à mesure de nos tests).

### Compatible

- Openvpn (DNS jeedom)
- Camera
- Zigbee
- mobile
- gcast
- network
- rfxcom
- Agenda
- Alarme
- Ajax System
- Arrosage
- Bestway
- Comptage
- Denon
- EcoRT2
- Fitbit (new)
- Light management
- Thermostat management
- Shutter management
- Google Smarthome
- Alexa smarthome
- IPX800v4
- Mode
- Migo Thermostat
- Monitoring
- Neato
- Netatmo
- Notification Manager
- Philips hue
- Presence simulation
- Sonos controller
- Sound and TTS
- Spotify
- Telegram
- Ubiquiti Unifi Protect
- Virtuel
- Weather


### Incompatible

Tous les plugins utilisant python2 sont incompatibles avec Debian 11. Pour le moment nous n'avons pas de solution pour y remédier (forcer l'installation de python2 et pip2 casse pip3 et rend donc tous les plugins python3 incompatibles).

- Openzwave
- sms
- appkorian
- barcodescanner
- dali
- wemo
- lifx
- entrkey
- bluetooth
- blescanner


> **IMPORTANT**
>
> Ces tests ont été effectués dans un environnement virtuel sans aucun matériel derrière, pour le moment nous venons de vérifier que les dépendances sont bien installées et que les démons arrivent à se lancer.
