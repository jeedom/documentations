# Debian 11 `Bullseye`

## Introduction

You will find here a report of our tests of Jeedom under Debian 11. As a reminder, Debian 11 was officially released on August 15, 2021 and brings many changes, in particular :

- Switching from PHP 7.3 to 7.4.
- Start removing python 2.
- Updated many packages.

## Core

### 4.1.X

We have not yet detected any impact.

### 4.2.X

~~There is a problem with the new dependencies installation system for the one using pip3 (pip3 no longer exists and is replaced by pip)~~ => Fixed

## Plugins

We can't test all the plugins, so we're just putting the feedback from those tested for the moment (this list will be updated as our tests progress)).

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
- Lights management
- Thermostat management
- Shutter management
- Google Smart Home
- Alexa smart home
- IPX800v4
- Mode
- Migo Thermostat
- Monitoring
- Neato
- Netatmo
- Notification Manager
- Philips hue
- Simulation Presence
- Sonos controller
- Sound and TTS
- Spotify
- Telegram
- Ubiquiti Unifi Protect
- Virtuel
- Weather


### Incompatible

All plugins using python2 are incompatible with Debian 11. For the moment we have no solution to remedy this (forcing the installation of python2 and pip2 breaks pip3 and therefore makes all python3 plugins incompatible).

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
> These tests were done in a virtual environment without equipment behind, we have for the moment just checked that the dependencies are installed well and that the demons manage to launch.
