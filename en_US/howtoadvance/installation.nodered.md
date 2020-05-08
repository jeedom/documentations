Nodered is a tool written in Nodejs to manage IoT oriented flows or
Automation. It offers a graphical interface for editing flows. The
tuto describes its installation, a reverse proxy configuration and a
service start

Installation of Nodered 
=======================

Here are the commands to launch to install nodered by having a nodejs
functional :

    sudo apt-get -y install libavahi-compat-libdnssd-dev libusb-1.0-0-dev build-essential
    sudo npm install -g node-red

To get Nodejs you can install one of the jeedom plugins which
charge.

Automatic start of Nodered 
================================

It is possible to declare Nodered as a service so that it is
automatically started when the box starts. An example here :

<https://gist.github.com/bigmonkeyboy/9962293>

Apache configuration 
======================

Here is an example of a file to access Nodered via a reverse
proxy.

    <Location /jeedom/nodered>
    ProxyPass ws://localhost:1880 / jeedom / nodered /
    ProxyPass http://localhost:1880 / jeedom / nodered /
    #ProxyPassReverse ws://localhost:1880 / jeedom / nodered /
    #ProxyPassReverse http://localhost:1880 / jeedom / nodered /
    </Location>

Configuration of Nginx 
======================

Here is an example of a file to access Nodered via a reverse
proxy.

    location / jeedom / nodered / {
      proxy_pass http://127.0.0.1:1880;
      proxy_set_header Host $ host;
      proxy_buffering off;
      tcp_nodelay on;
      access_log off;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $ http_upgrade;
      proxy_set_header Connection 'Upgrade';
      proxy_redirect off;
      proxy_read_timeout 6000;
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
latitude longitude from string sudo npm install node-red-node-geohash -g
\# Foursquare, recommendation on location sudo npm install
node-red-node-foursquare -g \# Ping sudo npm install
node-red-contrib-advanced-ping -g sudo npm install node-red-node-ping -g
\# WOL  node-red-node-wol -# SNMP sudo npm install
node-red-node-snmp -g \# Weather sudo npm install
node-red-node-forecastio -g sudo npm install
node-red-node-openweathermap -g sudo npm install
node-red-node-weather-underground -g \# General GPIO sudo npm install
node-red-contrib-gpio -g \# Electirc Imp  imp-io -#
Spark Core sudo npm install spark-io -g \# Arduino / Firmata sudo npm
install firmata -g \# Pushover sudo npm install node-red-node-pushover
-# Notify My Android  node-red-node-nma -#


# IRC  node-red-node-irc -#












-# Hue  node-red-contrib-hue -# 


-# SensorTag  node-red-node-sensortag -#


# PiTFT \#
# Pibrella \#
#sudo apt-get -y install python-rpi.gpio \#
# node-red-node-ledborg -# 


# GPIO \# 


# Raspberry Pi \#
-#* BeagleBone Black \##
# galileo-io -# 
# LightBlue Bean \#

