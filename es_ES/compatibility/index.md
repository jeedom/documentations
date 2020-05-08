# Materiales

Hardware | Estado | Remarques
--- | --- | ---
Jeedomboard             | Estable                  |
Colibrí            | Estable                  |
Odroid C2               | Estable                  |                          
INTELIGENTE                   | Estable                  |                          
RPI1                    | Estable                  |                          
RPI2                    | No oficial / estable     |                          
RPI3                    | No oficial / estable     | Atención si usas un wifi / bluetooth Razberry no funcionará
RPI4                    | No oficial / estable     | Atención si usas un wifi / bluetooth Razberry no funcionará
64 bit                 | Estable                  |                          
32 bit                 | No compatible            |                          
VMware                  | Estable                  | No hay soporte para VMware, solo para Jeedom.

El equipo de jeedom lo recomienda (según su presupuesto) :

- Jeedom Smart (todo está preinstalado, no tiene que hacer nada)
- Odroid C2 (mejor relación rendimiento / precio)
- Intel Nuc gen (rendimiento extremo, consulte la categoría de tutoriales para la elección en diferentes modelos e instalación)
- RPI4

#  Images

Puedes encontrar todas las imágenes de Jeedom [aquí](https://images.jeedom.com/)

| Imágenes         | Hardware       | Estado           | Acceso SSH      | Observaciones      |
|----------------|----------------|----------------|----------------|----------------|
| Jeedomboard    | Jeedomboard y | Estable         | root / Mjeedom96 |                |
|                | colibrí   |                |                |                |
| Estibador         |                | Beta           | root / Mjeedom96 |                |


Todas las demás imágenes descargables anteriormente ya no se mantienen, es mejor pasar por la instalación manual de Jeedom [Doctor](https://doc.jeedom.com/es_ES/installation/index) después de instalar una distribución de Linux correspondiente a su hardware : Debian (vm, pc, ...), Raspbian Lite (Raspberry pi), Armbian (Ordoid, ...)

#  Logiciel

> **Important**
>
> Jeedom solo es compatible con Debian Jessie (no recomendado), Stretch (no recomendado) y Buster (estable). Jeedom no admite ninguna otra versión (Wheezy ...) o distribución (Ubuntu ...)..

| Nombre                     | Estado                    | Observaciones                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 o menos        | No compatible            |                          |
| PHP 5.6                 | Estable                  |                          |
| PHP 7.X                 | Estable                  |                          |
| Mysql 5.5 / 5.6           | Estable                  |                          |
| Mysql 5.7               | Estable                  |                          |
| MariaBD                 | Estable                  |                          |


# Bluetooth

Encontrarás la lista [aquí](https://doc.jeedom.com/es_ES/blea/equipement.compatible) Módulos Bluetooth compatibles con Jeedom

# Cámaras

Encontrarás la lista [aquí](https://doc.jeedom.com/es_ES/camera/equipement.compatible) Cámaras compatibles con Jeedom

# Edisio

Encontrarás la lista [aquí](https://doc.jeedom.com/es_ES/edisio/equipement.compatible) Módulos Edisio compatibles con Jeedom

# EnOcean

Controlador ENOCEAN :

-   Llave USB EnOcean USB300
-   Memoria USB EnOcean USB310 (recomendada)

Encontrarás la lista [aquí](https://doc.jeedom.com/es_ES/enocean/equipement.compatible) Módulos EnOcean compatibles con Jeedom

# RFXcom

Controlador RFXcom :

-   RFXtrx433 USB
-   RFXtrx433E USB (recomendado)

Encontrarás la lista [aquí](https://doc.jeedom.com/es_ES/rfxcom/equipement.compatible) Módulos Rfxcom compatibles con Jef

# SMS (GSM)

-   HUAWEI E220 (Recomendado)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G inalámbrico

# Zigbee

Controlador Zigbee :

- [Phoscon Conbee I / II](http://bit.ly/2n4VyWc)

Encontrarás la lista [aquí](https://phoscon.de/en/conbee/compatible) Módulos Zigbee compatibles con Jeedom

# Zwave

Controlador Z-Wave :

-   DISEÑOS SIGMA Controlador USB Z-Wave Plus
-   Onda Z.ME - Mini controlador USB Z-Wave Plus UZB1
-   Controlador AEON LABS Z-Wave Aeon Labs Z-Stick S2
-   AEON LABS - Controlador USB Z-Wave Plus Z-Stick GEN5 (recomendado)

Encontrarás la lista [aquí](https://doc.jeedom.com/es_ES/zwave/equipement.compatible) Módulos de onda Z compatibles con Jeedom
