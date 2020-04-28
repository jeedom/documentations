Nodered is a tool written in Nodejs to manage IoT oriented flows or
Automation. It offers a graphical interface for editing flows. The
tuto describes its installation, a reverse  configuration and a
service start

Installation of Nodered 
=======================

Here are the commands to launch to install nodered with a nodejs
functional :

    .
    

To get Nodejs you can install one of the jeedom plugins which
Charge.

Automatic start of Nodered 
================================

It is possible to declare Nodered as a service so that it is
automatically started when the box starts. An example here :

<https://gist.github.com/bigmonkeyboy/9962293>

Apache configuration 
======================

Here is an example of a file to access Nodered via a reverse
.

    <Location /jeedom/nodered>
    :// localhost:1880 / jeedom / nodered /
    ProxyPass http:// localhost:1880 / jeedom / nodered /
    #:// localhost:1880 / jeedom / nodered /
    #ProxyPassReverse http:// localhost:1880 / jeedom / nodered /
    </Location>

Configuration of Nginx 
======================

Here is an example of a file to access Nodered via a reverse
.

    location / jeedom / nodered / {
      _pass http://127.0.0.1:1880;
      _set_header Host $ host;
      
      
      
      
      _set_header Upgrade $ http_upgrade;
      
      
      
    }

Existing modules for Nodered 
==============================

Here are examples of extensions available for Nodered.

Avahi / Hello discovery module 
==============================

sudo npm install node-red-node-discovery -g \# google module sudo npm
install node-red-node-google -g \# sun events module sudo npm install
node-red-contrib-sunevents -g \# Json path sudo npm install
node-red-contrib-jsonpath -g \# geofence module, check if localization
is in zone sudo npm install node-red-node-geofence -g \# geohas, decode

\# Foursquare, recommendation on location sudo npm install
node-red-node-foursquare -g \# Ping sudo npm install

\# WOL sudo npm install node-red-node-wol -g \# SNMP sudo npm install
node-red-node-snmp -g \# Weather sudo npm install


node-red-node-weather-underground -g \# General GPIO sudo npm install
node-red-contrib-gpio -g \# Electirc Imp sudo npm install imp-io -g \#
Spark Core sudo npm install spark-io -g \# Arduino / Firmata sudo npm
install firmata -g \# Pushover sudo npm install node-red-node-pushover
-g \# Notify My Android sudo npm install node-red-node-nma -g \#
Pushbullet sudo npm install node-red-node-pushbullet -g \# Prowl sudo
npm install node-red-node-prowl -g \# XMPP sudo npm install
node-red-node-xmpp -g \# IRC sudo npm install node-red-node-irc -g \#
Slack sudo npm install node-red-contrib-slack -g \# Pusher sudo npm
install node-red-node-pusher -g \# Storage sudo npm install


\# Music sudo npm install node-red-contrib-mpd -g sudo npm install
node-red-contrib-mopidy -g \# Activities sudo npm install

npm install node-red-node-strava -g \# KNX / EIBD sudo npm install
node-red-contrib-eibd -g \# OpenZwave sudo npm install
node-red-contrib-openzwave -g \# RFXcom sudo npm install
node-red-contrib-rfxcom -g \# OWFS sudo npm install
node-red-contrib-owfs -g \# Nest sudo npm install node-red-contrib-nest
-g \# Hue sudo npm install node-red-contrib-hue -g \# Spark-Core sudo
npm install node-red-contrib-sparkcore -g \# Wemo sudo npm install
node-red-node-wemo -g \# Zibase sudo npm install node-red-contrib-zibase
-g \# SensorTag sudo npm install node-red-node-sensortag -g \#
Blinkstick sudo npm install node-red-node-blinkstick -g \# Blink1 sudo
npm install node-red-node-blink1 -g \# Tellstick * sudo npm install
node-red-contrib-tellstick -g \# PiTFT \#sudo npm install
node-red-contrib-pitft-touch -g \# Pibrella \#sudo npm install
node-red-node-pibrella -g \#sudo apt-get -y install python-rpi.#
PiBord \#sudo npm install node-red-node-ledborg -g \# Sensors \#sudo npm
install node-red-contrib-bmp085 -g \#sudo npm install
node-red-contrib-ds18b20-sensor -g \#sudo npm install
node-red-contrib-dht-sensor -g \# GPIO \# HummingBoard \#sudo npm
install node-red-node-hbgpio -g \#sudo cp
node \ _modules / node-red-node-hbgpio / gpiohb / usr / local / bin / \#sudo chmod
4755 / usr / lcoal / bin / gpiohb \# Raspberry Pi \#sudo npm install raspi-io
-g \# * BeagleBone Black \#sudo npm install beaglebone-io -g \#
Galileo / Edison \#sudo npm install galileo-io -g \# Blend Micro \#sudo
npm install blend-micro-io -g \# LightBlue Bean \#sudo npm install

