Nodered es una herramienta escrita en Nodejs para administrar flujos orientados a IoT o
domótica Ofrece una interfaz gráfica para editar flujos. El
tuto describe su instalación, una configuración de proxy inverso y un
inicio del servicio

Instalación de Nodered 
=======================

Estos son los comandos para iniciar la instalación con noder al tener un nodejs
funcional :

    sudo apt-get -y install libavahi-compat-libdnssd-dev libusb-1.0-0-dev build-essential
    sudo npm install -g nodo-rojo

Para obtener Nodejs, puede instalar uno de los complementos jeedom que
charge.

Inicio automático de Nodered 
================================

Es posible declarar Nodered como un servicio para que sea
se inicia automáticamente cuando comienza la caja. Un ejemplo aqui :

<https://gist.github.com/bigmonkeyboy/9962293>

Configuración de Apache 
======================

Aquí hay un ejemplo de un archivo para acceder a Nodered a través de un reverso
proxy.

    <Location /jeedom/nodered>
    ProxyPass ws://localhost:1880 / libertad / nodado /
    ProxyPass http://localhost:1880 / libertad / nodado /
    #ProxyPassReverse ws://localhost:1880 / libertad / nodado /
    #ProxyPassReverse http://localhost:1880 / libertad / nodado /
    </Location>

Configuración de Nginx 
======================

Aquí hay un ejemplo de un archivo para acceder a Nodered a través de un reverso
proxy.

    ubicación / libertad / noded / {
      proxy_pass http://127.0.0.1:1880;
      proxy_set_header Host $ host;
      proxy_buffering desactivado;
      tcp_nodelay on;
      acceso_log desactivado;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $ http_upgrade;
      proxy_set_header Conexión 'Actualizar';
      proxy_redirect desactivado;
      proxy_read_timeout 6000;
    }

Módulos existentes para Nodered 
==============================

Aquí hay ejemplos de extensiones disponibles para Nodered.

Módulo de descubrimiento Avahi / Hello 
==============================

sudo npm install node-red-node-discovery -g \# google module sudo npm
instalar node-red-node-google -g \# módulo de eventos sun sudo npm install
node-red-contrib-sunevents -g \# Ruta Json sudo npm install
módulo de geofence node-red-contrib-jsonpath -g \#, verifique si la localización
está en la zona sudo npm install node-red-node-geofence -g \# geohas, decode
latitud longitud desde la cadena sudo npm install node-red-node-geohash -g
\# Foursquare, recomendación sobre la ubicación sudo npm install
node-red-node-foursquare -g \# Ping sudo npm install
nodo-red-contrib-advanced-ping -g sudo npm install node-red-node-ping -g
\# WOL sudo npm install node-red-node-wol -g \# SNMP sudo npm install
node-red-node-snmp -g \# Weather sudo npm install
node-red-node-Forecastio -g sudo npm install
node-red-node-openweathermap -g sudo npm install
node-red-node-weather-underground -g \# General GPIO sudo npm install
nodo-rojo-contrib-gpio -g \# Electirc Imp sudo npm install imp-io -g \#
Spark Core sudo npm install spark-io -g \# Arduino / Firmata sudo npm
instalar firmata -g \# Pushover sudo npm instalar node-red-node-pushover
-g \# Notify My Android sudo npm install node-red-node-nma -g \#
Pushbullet sudo npm install node-red-node-pushbullet -g \# Prowl sudo
npm install node-red-node-prowl -g \# XMPP sudo npm install
nodo-rojo-nodo-xmpp -g \# IRC sudo npm install node-red-node-irc -g \#
Slack sudo npm install node-red-contrib-slack -g \# Pusher sudo npm
install node-red-node-pusher -g \# Almacenamiento sudo npm install
node-red-node-dropbox -g sudo npm install node-red-node-flickr -g sudo
npm install node-red-node-aws -g sudo npm install node-red-node-box -g
\# Music sudo npm install node-red-contrib-mpd -g sudo npm install
node-red-contrib-mopidy -g \# Actividades sudo npm install
node-red-node-fitbit -g sudo npm install node-red-node-jawboneup -g sudo
npm install node-red-node-strava -g \# KNX / EIBD sudo npm install
node-red-contrib-eibd -g \# OpenZwave sudo npm install
node-red-contrib-openzwave -g \# RFXcom sudo npm install
node-red-contrib-rfxcom -g \# OWFS sudo npm install
node-red-contrib-owfs -g \# Nest sudo npm install node-red-contrib-nest
-g \# Hue sudo npm install node-red-contrib-hue -g \# Sudo Spark-Core
npm install node-red-contrib-sparkcore -g \# Wemo sudo npm install
node-red-node-wemo -g \# Zibase sudo npm install node-red-contrib-zibase
-g \# SensorTag sudo npm install node-red-node-sensortag -g \#
Blinkstick sudo npm install node-red-node-blinkstick -g \# Blink1 sudo
npm install node-red-node-blink1 -g \# Tellstick * sudo npm install
nodo-rojo-contrib-tellstick -g \# PiTFT \#sudo npm install
nodo-rojo-contrib-pitft-touch -g \# Pibrella \#sudo npm install
nodo-nodo-rojo-pibrella -g \#sudo apt-get -y install python-rpi.gpio \#
PiBord \#sudo npm install node-red-node-ledborg -g \# Sensores \#sudo npm
instalar node-red-contrib-bmp085 -g \#sudo npm install
node-red-contrib-ds18b20-sensor -g \#sudo npm install
nodo-red-contrib-dht-sensor -g \# GPIO \# HummingBoard \#sudo npm
instalar nodo-nodo-rojo-hbgpio -g \#sudo cp
nodo\_módulos / nodo-nodo-rojo-hbgpio / gpiohb / usr / local / bin / \#sudo chmod
4755 / usr / lcoal / bin / gpiohb \# Raspberry Pi \#sudo npm install raspi-io
-g \#* BeagleBone Black \#sudo npm install beaglebone-io -g \#
Galileo / Edison \#sudo npm install galileo-io -g \# Mezcla Micro \#sudo
npm install blend-micro-io -g \# LightBlue Bean \#sudo npm install
bean-io -g
