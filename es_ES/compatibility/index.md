# Materiales

Hardware | Estado | Remarques
--- | --- | ---
Tablero de jeedom             | Firme                  |
Colibrí            | Firme                  |
Android c2               | Firme                  |                          
Inteligente                   | Firme                  |                          
RPI1                    | Firme                  |                          
RPI2                    | Firme                  |                          
RPI3                    | Firme                  | Tenga cuidado si usa un Razberry, el wifi/bluetooth no podrá funcionar
RPI4                    | Firme                  | Tenga cuidado si usa un Razberry, el wifi/bluetooth no podrá funcionar
64 bits                 | Firme                  |                          
32 bits                 | No soportado            |                          
Vmware                  | Firme                  | Sin soporte para VMware, solo para Jeedom.

El equipo de jeedom te recomienda (dependiendo de tu presupuesto)) :

- Jeedom Smart (todo está preinstalado, no tienes que hacer nada)
- Odroid C2 (mejor relación precio/rendimiento)
- Intel Nuc gen (rendimiento extremo, consulte la categoría de tutoriales para la elección en los diferentes modelos y la instalación)
- RPI4

#  Images

Puedes encontrar todas las imágenes de Jeedom [aquí](https://images.jeedom.com/)

| Fotos         | Hardware       | Estado           | Acceso SSH      | Observaciones      | Documentación      |
|----------------|----------------|----------------|----------------|----------------|---------------------|
| Tablero de jeedom    | Jeedomboard y Hummingboard | Firme         | raíz/Mjeedom96 |                | [Tablero de jeedom](https://doc.jeedom.com/es_ES/installation/mini) |
| Inteligente          | Jeedom inteligente   | Firme           | raíz/Mjeedom96 |                | [Inteligente](https://doc.jeedom.com/es_ES/installation/smart) |
| RPI            | RPI1/2/3/4     | Beta           | raíz/Mjeedom96 |  Para RPI es recomendable llevar la versión rpi-64 solo para RPI 4              | [RPI](https://doc.jeedom.com/es_ES/installation/rpi) |
| x86_64         | Cualquier sistema x86_64 (Intel, AMD, VM...)*               | Firme           | raíz/Mjeedom96 |                | [x86_64](https://doc.jeedom.com/es_ES/installation/vm) |
| Estibador         |                | Beta           | raíz/Mjeedom96 |                | [Estibador](https://doc.jeedom.com/es_ES/installation/docker) |
| Caja libre        | Delta de caja libre  | Firme         | raíz/Mjeedom96 | Para ser instalado directamente desde el Freebox               | [Caja libre](https://doc.jeedom.com/es_ES/installation/freeboxdelta) |
| Synology (Docker))| Sinología de Nas | Beta          | raíz/Mjeedom96  |                | [Synology](https://doc.jeedom.com/es_ES/installation/synology) |

\* Jeedom solo admite oficialmente la distribución Debian. Debian 10 es totalmente compatible, Debian 11 está en pruebas, consulte [aquí](https://doc.jeedom.com/es_ES/compatibility/debian11)

> **Información**
>
> También puede instalar Jeedom manualmente en cualquier sistema Debian siguiendo este [documentación](https://doc.jeedom.com/es_ES/installation/cli)

#  Logiciel

> **Importante**
>
> Jeedom solo es compatible con Debian Stretch (no recomendado) y Buster (estable). Jeedom no admite ninguna otra versión (Wheezy, Jessie...) o distribución (Ubuntu...).

| Apellido                     | Estado                    | Observaciones                |
|-------------------------|-------------------------|--------------------------|
| PHP5.5 o menos        | No soportado            |                          |
| PHP5.6                 | Fin del soporte (en 4.1) |                          |
| PHP7.0/7.1/7.2/7.3/7.4 | Firme                  |                          |
| PHP 8.0 y más         | No soportado (por el momento)|                          |
| Mysql 7.4               | Beta                    |                          |
| MySQL 5.5/5.6           | Firme                  |                          |
| Mysql 5.7               | Firme                  |                          |
| MariaBD                 | Firme                  |                          |


# Equipos compatibles

Encontrarás aquí para los principales protocolos los enlaces a los equipos compatibles para los demás te invitamos a mirar directamente la documentación del plugin


## Bluetooth

Encontrarás la lista [aquí](https://compatibility.jeedom.com/index.php?p=home&plugin=blea) Módulos Bluetooth compatibles con Jeedom

## Cámaras

Encontrarás la lista [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=camera) Cámaras compatibles con Jeedom

## Edisio

Encontrarás la lista [aquí](https://doc.jeedom.com/es_ES/edisio/equipement.compatible) Módulos Edisio compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/edisio/) documentación para algunos módulos

## EnOcean

Controlador EnOcean :

-   [Llave USB EnOcean USB300](https://www.domadoo.fr/fr/interface-domotique/3206-enocean-controleur-usb-enocean-avec-connecteur-sma-3700527400280.html)
-   [Llave USB EnOcean USB310 (Recomendada)](https://www.domadoo.fr/fr/interface-domotique/2433-enocean-controleur-usb-enocean-3700527400273.html)

Encontrarás la lista [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) Módulos EnOcean compatibles con Jeedom 

## RFXcom

Controlador RFXcom :

-   RFXtrx433 USB
-   [RFXtrx433E USB (Recomendado)](https://www.domadoo.fr/fr/interface-domotique/4659-rfxcom-interface-radio-recepteuremetteur-xl-43392mhz-usb-chacon-somfy-rts-oregon-et-autres.html)

Encontrarás la lista [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=rfxcom) Módulos Rfxcom compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/rfxcom/) documentación para algunos módulos

## SMS (GSM))

-   HUAWEI E220 (Recomendado)
-   Alcatel un toque X220L
-   HSDPA 7.2MBPS 3G Inalámbrico

## Zigbee

Controlador Zigbee :

- [Phoscon Conbee I/II](https://www.domadoo.fr/fr/interface-domotique/4974-phoscon-passerelle-universelle-zigbee-usb-conbee-ii-4260350821328.html)
- [Zigate (beta))](https://www.domadoo.fr/fr/interface-domotique/5734-lixee-dongle-usb-zigbee-zigate-v2-compatible-jeedom-eedomus-domoticz-3770014375094.html?search_query=zigate&results=106)
- [Popp (Elelabs) - Recomendado](https://www.domadoo.fr/fr/interface-domotique/5431-popp-dongle-usb-zigbee-zb-stick-chipset-efr32mg13-4251295701554.html)

Encontrarás la lista [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) Módulos Zigbee compatibles con Jeedom

## Zwave

Controlador Z-WAVE :

-   Controlador USB SIGMA DESIGNS Z-Wave Plus
-   ONDA Z.ME - Controlador Mini USB Z-Wave Plus UZB1
-   AEON LABS Aeon Labs Z-Stick S2 Controlador Z-Wave
-   [AEON LABS - Controlador USB Z-Wave Plus Z-Stick GEN5 (recomendado)](https://www.domadoo.fr/fr/interface-domotique/2917-aeotec-controleur-usb-z-wave-plus-z-stick-gen5-1220000012813.html?search_query=sigma&results=4)

Encontrarás la lista [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openzwave) Módulos de onda Z compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/zwave/) documentación para algunos módulos
