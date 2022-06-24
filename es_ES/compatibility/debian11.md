# Debian 11 `Bullseye`

## Introduction

Aquí encontrará un informe de nuestras pruebas de Jeedom bajo Debian 11. Como recordatorio, Debian 11 se lanzó oficialmente el 15 de agosto de 2021 y trae muchos cambios, en particular :

- Cambiar de PHP 7.3 a 7.4.
- Empezar a eliminar python 2.
- Actualizado muchos paquetes.

## Core

### 4.1.X

Todavía no hemos detectado ningún impacto.

### 4.2.X

~~Hay un problema con el nuevo sistema de instalación de dependencias para el que usa pip3 (pip3 ya no existe y es reemplazado por pip)~~ => Solucionado

## Plugins

No podemos probar todos los complementos, por lo que solo estamos poniendo los comentarios de los probados por el momento (esta lista se actualizará a medida que avancen nuestras pruebas)).

### Compatible

- Openvpn (Jeedom DNS)
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
- Gestión de luces
- Gestión del termostato
- Gestión de persianas
- Hogar inteligente de Google
- Alexa casa inteligente
- IPX800v4
- Mode
- Migo Termostato
- Monitoring
- Neato
- Netatmo
- Administrador de notificaciones
- Tono philips
- Presencia de simulación
- Controlador de Sonos
- Sonido y TTS
- Spotify
- Telegrama
- Ubiquiti Unifi Proteger
- Virtuel
- Weather


### Incompatible

Todos los complementos que usan python2 son incompatibles con Debian 11. Por el momento no tenemos solución para remediar esto (forzar la instalación de python2 y pip2 rompe pip3 y por lo tanto hace que todos los complementos de python3 sean incompatibles).

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
> Estas pruebas se realizaron en un entorno virtual sin equipo detrás, por el momento solo hemos comprobado que las dependencias están bien instaladas y que los demonios logran iniciar.
