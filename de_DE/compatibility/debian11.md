# Debian 11 „Bullseye“

## Introduction

Hier finden Sie einen Bericht unserer Tests von Jeedom unter Debian 11. Zur Erinnerung: Debian 11 wurde offiziell am 15. August 2021 veröffentlicht und bringt insbesondere viele Änderungen mit sich :

- Umstellung von PHP 7.3 bis 7.4.
- Beginnen Sie mit dem Entfernen von Python 2.
- Viele Pakete aktualisiert.

## Core

### 4.1.X

Wir haben noch keine Auswirkungen festgestellt.

### 4.2.X

~~Es gibt ein Problem mit dem neuen Installationssystem für Abhängigkeiten für dasjenige, das pip3 verwendet (pip3 existiert nicht mehr und wird durch pip ersetzt)~~ => Behoben

## Plugins

Wir können nicht alle Plugins testen, daher veröffentlichen wir im Moment nur das Feedback der getesteten (diese Liste wird im Laufe unserer Tests aktualisiert)).

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
- Ajax-System
- Arrosage
- Bestway
- Comptage
- Denon
- EcoRT2
- Fitbit (neu)
- Lichtmanagement
- Thermostatverwaltung
- Shutter-Management
- Google Smarthome
- Alexa-Smarthome
- IPX800v4
- Mode
- Migo-Thermostat
- Monitoring
- Neato
- Netatmo
- Benachrichtigungsmanager
- Philips Farbton
- Simulationspräsenz
- Sonos-Controller
- Ton und TTS
- Spotify
- Telegramm
- Ubiquiti Unifi Protect
- Virtuel
- Weather


### Incompatible

Alle Plugins, die Python2 verwenden, sind mit Debian 11 nicht kompatibel. Im Moment haben wir keine Lösung, um dies zu beheben (das Erzwingen der Installation von python2 und pip2 bricht pip3 und macht daher alle python3-Plugins inkompatibel).

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


> **WICHTIG**
>
> Diese Tests wurden in einer virtuellen Umgebung ohne Geräte dahinter durchgeführt, wir haben im Moment nur überprüft, ob die Abhängigkeiten gut installiert sind und ob die Dämonen starten können.
