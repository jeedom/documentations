Nodered ist ein in Nodejs geschriebenes Tool zum Verwalten von IoT-orientierten Flows oder
Hausautomation. Es bietet eine grafische Oberfläche zum Bearbeiten von Flows. Die
tuto beschreibt die Installation, eine Reverse-Proxy-Konfiguration und a
Service starten

Installation von Nodered 
=======================

Hier sind die Befehle, die gestartet werden müssen, um Nodered mit einem NodeJS zu installieren
funktional :

    sudo apt-get -y installiere libavahi-compatible-libdnssd-dev libusb-1.0-0-dev Build-Essential
    sudo npm installieren -g knotenrot

Um Nodejs zu bekommen, können Sie eines der jeedom Plugins installieren, die
charge.

Automatischer Start von Nodered 
================================

Es ist möglich, Nodered als Service zu deklarieren
automatisch gestartet, wenn die Box startet. Ein Beispiel hier :

<https://gist.github.com/bigmonkeyboy/9962293>

Apache-Konfiguration 
======================

Hier ist ein Beispiel für eine Datei, mit der über eine Umkehrung auf Nodered zugegriffen werden kann
proxy.

    <Location /jeedom/nodered>
    ProxyPass ws://localhost:1880 / jeedom / nodered /
    ProxyPass http://localhost:1880 / jeedom / nodered /
    #ProxyPassReverse ws://localhost:1880 / jeedom / nodered /
    #ProxyPassReverse http://localhost:1880 / jeedom / nodered /
    </Location>

Konfiguration von Nginx 
======================

Hier ist ein Beispiel für eine Datei, mit der über eine Umkehrung auf Nodered zugegriffen werden kann
proxy.

    Ort / Jeedom / Nodered / {
      proxy_pass http://127.0.0.1:1880;
      proxy_set_header Host $ host;
      proxy_buffering off;
      tcp_nodelay on;
      access_log off;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $ http_upgrade;
      proxy_set_header Verbindung 'Upgrade';
      proxy_redirect off;
      proxy_read_timeout 6000;
    }

Bestehende Module für Nodered 
==============================

Hier finden Sie Beispiele für Erweiterungen, die für Nodered verfügbar sind.

Avahi / Hello-Erkennungsmodul 
==============================

sudo npm installiereniere Node-Red-Node-Discovery -g \.# Google-Modul sudo npm
installiere node-red-node-google -g \.# sonnenereignismodul sudo npm installieren
node-red-contrib-sunevents -g \.# Json-Pfad sudo npm installieren
Knoten-Rot-Contrib-Jsonpath -g \.# Geofence-Modul, überprüfen Sie, ob die Lokalisierung erfolgt
ist in der Zone sudo npm installieren node-red-node-geofence -g \.# geohas, decodiere
Breitengrad Längengrad vom String sudo npm installieren node-red-node-geohash -g
\.# Foursquare, Empfehlung zum Standort sudo npm installieren
node-red-node-foursquare -g \.# Ping sudo npm installierenieren
Node-Red-Contrib-Advanced-Ping -g sudo npm installiereniere Node-Red-Node-Ping -g
\.# WOL sudo npm installieren node-red-node-wol -g \.# SNMP sudo npm installierenieren
node-red-node-snmp -g \.# Wetter sudo npm installierenieren
Node-Red-Node-Forecastio -g sudo npm installierenieren
node-red-node-openweathermap -g sudo npm installierenieren
Node-Red-Node-Weather-Underground -g \.# Allgemeine GPIO-Sudo-Npm-Installation
node-red-contrib-gpio -g \.# Electirc Imp sudo npm installieren imp-io -g \.#
Spark Core sudo npm installiereniere spark-io -g \.# Arduino / Firmata sudo npm
installiere firmata -g \.# Pushover sudo npm installiereniere node-red-node-pushover
-g \.# Notify My Android sudo npm installieren node-red-node-nma -g \.#
Pushbullet sudo npm installiereniere node-red-node-pushbullet -g \.# Prowl sudo
npm install node-red-node-prowl -g \.# XMPP sudo npm installieren
node-red-node-xmpp -g \.# IRC sudo npm installieren node-red-node-irc -g \.#
Slack sudo npm installiereniere node-red-contrib-slack -g \.# Pusher sudo npm
installiere node-red-node-pusher -g \.# Storage sudo npm installieren
node-red-node-dropbox -g sudo npm installiereniere node-red-node-flickr -g sudo
npm install knoten-rot-knoten-aws -g sudo npm installieren knoten-rot-knoten-box -g
\.# Musik sudo npm installierenieren node-red-contrib-mpd -g sudo npm installierenieren
node-red-contrib-mopidy -g \.# Aktivitäten sudo npm installieren
node-red-node-fitbit -g sudo npm installiereniere node-red-node-jawboneup -g sudo
npm install knoten-rot-knoten-strava -g \.# KNX / EIBD sudo npm installierenieren
node-red-contrib-eibd -g \.# OpenZwave sudo npm installierenieren
node-red-contrib-openzwave -g \.# RFXcom sudo npm installierenieren
node-red-contrib-rfxcom -g \.# OWFS sudo npm installierenieren
Node-Red-Contrib-Owfs -g \.# Nest sudo npm installiereniere Node-Red-Contrib-Nest
-g \.# Hue sudo npm installieren node-red-contrib-hue -g \.# Spark-Core Sudo
npm install node-red-contrib-sparkcore -g \.# Wemo sudo npm installieren
node-red-node-wemo -g \.# Zibase sudo npm installiereniere node-red-contrib-zibase
-g \.# SensorTag sudo npm installieren node-red-node-sensortag -g \.#
Blinkstick sudo npm installiereniere node-red-node-blinkstick -g \.# Blink1 sudo
npm install node-red-node-blink1 -g \.# Tellstick * sudo npm installieren
Node-Red-Contrib-Tellstick -g \.# PiTFT \.#sudo npm installieren
Node-Red-Contrib-Pitft-Touch -g \.# Pibrella \.#sudo npm installieren
Knoten-Rot-Knoten-Pibrella -g \.#sudo apt-get -y install python-rpi.gpio \.#
PiBord \.#sudo npm installieren node-red-node-ledborg -g \.# Sensoren \.#sudo npm
install node-red-contrib-bmp085 -g \.#sudo npm installieren
node-red-contrib-ds18b20-sensor -g \.#sudo npm installierenieren
Node-Red-Contrib-Dht-Sensor -g \.# GPIO \.# HummingBoard \.#sudo npm
installiere node-red-node-hbgpio -g \.#sudo cp
node\._modules / node-red-node-hbgpio / gpiohb / usr / local / bin / \.#sudo chmod
4755 / usr / lcoal / bin / gpiohb \.# Raspberry Pi \.#sudo npm installiereniere raspi-io
-g \.#* BeagleBone Black \.#sudo npm installieren beaglebone-io -g \.#
Galileo / Edison \.#sudo npm installieren galileo-io -g \.# Mischen Sie Micro \.#sudo
npm install mix-micro-io -g \.# LightBlue Bean \.#sudo npm installieren
bean-io -g
