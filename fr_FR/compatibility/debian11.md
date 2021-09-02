# Debian 11 `Bullseye`

## Introduction

Vous retrouverez ici un compte rendu de nos tests de Jeedom sous Debian 11. Pour rappels Debian 11 est sortie officiellement le en stable le 15 août 2021 et entraîne de nombreux changement, en particulier :

- Passage de PHP 7.3 à 7.4.
- Début de la suppression de python 2.
- Mise à jour de nombreux packages.

## Core

### 4.1.X

Nous n'avons pour le moment détecté aucun impact.

### 4.2.X

~~Il y a un soucis avec le nouveau système d'installation des dépendances pour celle utilisant pip3 (pip3 n'existe plus et est remplacé par pip)~~ => Corrigé

## Plugins

Nous ne pouvons tester tous les plugins, nous mettons donc juste le retour de ceux testé pour le moment (cette liste sera mise à jour au fils de nos tests).

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
- Gestion lumières
- Gestion thermostat
- Gestion volets
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
- Simulation Présence
- Sonos controller
- Son et TTS
- Spotify
- Télégram
- Ubiquiti Unifi Protect
- Virtuel
- Weather


### Incompatible

Tous les plugins utilisant python2 sont incompatibles avec Debian 11. Pour l'instant nous n'avons pas de solution pour remédier à cela (forcer l'installation de python2 et pip2 casse pip3 et donc rend tous les plugins python3 incompatible).

- Openzwave
- modbus
- sms
- appkorian
- barcodescanner
- dali
- wemo
- heos
- lifx
- smart
- modbusrtu
- entrkey
- bluetooth
- aruba
- blescanner


> **IMPORTANT**
>
> Ces tests ont été fait en environnement virtuel sans équipements derrière, nous avons pour le moment juste vérifié que les dépendances s'installent bien et que les demons arrivent à se lancer.
