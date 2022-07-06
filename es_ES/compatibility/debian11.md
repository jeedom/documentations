# Debian 11 `Bullseye`

## Introduction

Aquí encontrará un informe de nuestras pruebas de Jeedom en Debian 11. Como recordatorio, Debian 11 se lanzó oficialmente en versión estable el 15 de agosto de 2021 e implica muchos cambios, en particular :

- Pasaje de PHP 7.3 hasta 7,4.
- Inicio de la eliminación de Python 2.
- Actualización de muchos paquetes.

## Core

### 4.1.X

Aún no hemos detectado ningún impacto.

### 4.2.X

~~ Hay un problema con el nuevo sistema de instalación de dependencias para el que usa pip3 (pip3 ya no existe y es reemplazado por pip) ~~ => Corregido

## Plugins

No podemos probar todos los complementos, por lo que solo estamos poniendo los comentarios de los probados por el momento (esta lista se actualizará a medida que avancemos en nuestras pruebas).

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
- Sistema Ajax
- Arrosage
- Bestway
- Comptage
- Denon
- EcoRT2
- Fitbit (nuevo)
- Gestión de la luz
- Gestión de termostato
- Gestión de persianas
- Google Smarthome
- Alexa smarthome
- IPX800v4
- Mode
- Termostato Migo
- Monitoring
- Neato
- Netatmo
- Administrador de notificaciones
- Philips tono
- Simulación de presencia
- Controlador de Sonos
- Sonido y TTS
- Spotify
- Telegrama
- Ubiquiti Unifi Protect
- Virtuel
- Weather


### Incompatible

Todos los complementos que usan python2 son incompatibles con Debian 11. Por el momento, no tenemos una solución para remediar esto (forzar la instalación de python2 y pip2 rompe pip3 y, por lo tanto, hace que todos los complementos de python3 sean incompatibles).

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


> **IMPORTANTE**
>
> Estas pruebas se realizaron en un entorno virtual sin ningún equipo detrás, por el momento acabamos de comprobar que las dependencias están bien instaladas y que los demonios logran lanzarse.
