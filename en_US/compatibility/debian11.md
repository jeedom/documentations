# Debian 11 `Bullseye`

## Introduction

You will find here a report of our Jeedom tests under Debian 11. As a reminder Debian 11 officially released in stable on August 15, 2021 and involves many changes, in particular :

- Passage from PHP 7.3 to 7.4.
- Start of python 2 removal.
- Update of many packages.

## Core

### 4.1.X

We have not yet detected any impact.

### 4.2.X

~~ There is a problem with the new dependency installation system for the one using pip3 (pip3 no longer exists and is replaced by pip) ~~ => Fixed in alpha.

## Plugins

We cannot test all the plugins, so we are just putting the feedback of those tested for the moment (this list will be updated as we go through our tests).

### Compatible

- Openvpn (DNS jeedom)
- Camera
- Zigbee
- mobile
- gcast
- network
- rfxcom
- sonos

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
> These tests were done in a virtual environment without any equipment behind, for the moment we have just checked that the dependencies are installed well and that the demons manage to launch.
