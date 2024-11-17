# Materiales

Hardware | Estado | Remarques
--- | --- | ---
Jeedomboard      | Estable        |
Colibrí     | Estable        |
Odroid C2        | Estable        |                          
INTELIGENTE            | Estable        |                          
RPI1             | Estable        |                          
RPI2             | Estable        |                          
RPI3             | Estable        | Ten cuidado si usas una Raspberry, el wifi/bluetooth no funcionará
RPI4             | Estable        | Ten cuidado si usas una Raspberry, el wifi/bluetooth no funcionará
64 bit          | Estable        |                          
32 bit          | No compatible  |                          
VMware           | Estable        | No hay soporte para VMware, solo para Jeedom.

El equipo de jeedom te recomienda (dependiendo de tu presupuesto) :

- Jeedom Atlas o Luna (todo está preinstalado, no tienes que hacer nada))
- Odroid C2 (mejor relación rendimiento / precio)
- Intel Nuc gen (rendimiento extremo, consulte la categoría de tutoriales para la elección en los diferentes modelos e instalación)
- RPI4

#  Images

Puedes encontrar todas las imágenes de Jeedom [aquí](https://images.jeedom.com/)

| Imágenes         | Hardware       | Estado           | Acceso SSH      | Observaciones      | Documentación      |
|----------------|----------------|----------------|----------------|----------------|---------------------|
| Jeedomboard    | Jeedomboard y Hummingboard | Estable         | root / Mjeedom96 |                | [Jeedomboard](https://doc.jeedom.com/es_ES/installation/mini) |
| INTELIGENTE          | Jeedom Smart   | Estable           | root / Mjeedom96 |                | [INTELIGENTE](https://doc.jeedom.com/es_ES/installation/smart) |
| RPI            | RPI1 / 2/3/4     | Beta           | root / Mjeedom96 |  Para RPI, es aconsejable tomar la versión rpi-64 solo para RPI 4              | [RPI](https://doc.jeedom.com/es_ES/installation/rpi) |
| x86_64         | Cualquier sistema x86_64 (Intel, AMD, VM...)*               | Estable           | root / Mjeedom96 |                | [x86_64](https://doc.jeedom.com/es_ES/installation/vm) |
| Estibador         |                | Beta           | root / Mjeedom96 |                | [Estibador](https://doc.jeedom.com/es_ES/installation/docker) |
| Caja libre        | Freebox Delta  | Estable         | root / Mjeedom96 | Para instalar directamente desde Freebox               | [Caja libre](https://doc.jeedom.com/es_ES/installation/freeboxdelta) |
| Synology (Docker)| NAS Synology | Beta          | root / Mjeedom96  |                | [Synology](https://doc.jeedom.com/es_ES/installation/synology) |

> **Información**
>
> También puede instalar manualmente Jeedom en cualquier sistema Debian siguiendo esto [Documentación](https://doc.jeedom.com/es_ES/installation/cli).

#  Logiciel

> **Importante**
>
> Jeedom solo es compatible con Debian Stretch (no recomendado), Buster (final de la vida útil) y Bullseye (recomendado). Jeedom no admite ninguna otra versión (Wheezy, Jessie...) o distribución (Ubuntu...).

| Nombre                     | Estado                    | Observaciones                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 o menos        | No compatible            |                          |
| PHP 5.6                 | Fin del soporte (en 4.1) |                          |
| PHP 7.0 / 7.1 / 7.2 / 7.3 / 7.4 | Estable                  |                          |
| PHP 8.0 y superior         | No compatible (actualmente)|                          |
| Mysql 7.4               | Beta                    |                          |
| Mysql 5.5 / 5.6           | Estable                  |                          |
| Mysql 5.7               | Estable                  |                          |
| MariaBD                 | Estable                  |                          |


# Equipos compatibles

Encontrará aquí para los principales protocolos los enlaces a los equipos compatibles.
Para los demás te invitamos a mirar directamente la documentación del plugin.


## Bluetooth

Tu encontraras [aquí](https://compatibility.jeedom.com/index.php?p=home&plugin=blea) la lista de módulos Bluetooth compatibles con Jeedom.

## Cámaras

Tu encontraras [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=camera) la lista de cámaras compatibles con Jeedom.

## Edisio

Tu encontraras [aquí](https://doc.jeedom.com/es_ES/edisio/equipement.compatible) la lista de módulos Edisio compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/edisio/) documentación para algunos módulos.

## EnOcean

Controlador ENOCEAN :

-   [Llave USB EnOcean USB300](https://www.domadoo.fr/fr/interface-domotique/3206-enocean-controleur-usb-enocean-avec-connecteur-sma-3700527400280.html)
-   [Memoria USB EnOcean USB310 (recomendada)](https://www.domadoo.fr/fr/interface-domotique/2433-enocean-controleur-usb-enocean-3700527400273.html)

Tu encontraras [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) la lista de módulos EnOcean compatibles con Jeedom.

## RFXcom

Controlador RFXcom :

-   RFXtrx433 USB
-   [RFXtrx433E USB (recomendado)](https://www.domadoo.fr/fr/interface-domotique/4659-rfxcom-interface-radio-recepteuremetteur-xl-43392mhz-usb-chacon-somfy-rts-oregon-et-autres.html)

Tu encontraras [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=rfxcom) la lista de módulos Rfxcom compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/rfxcom/) documentación para algunos módulos.

## SMS (GSM)

-   HUAWEI E220 (Recomendado)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G inalámbrico

## Zigbee

Controlador Zigbee :

- [Phoscon Conbee I / II](https://www.domadoo.fr/fr/interface-domotique/4974-phoscon-passerelle-universelle-zigbee-usb-conbee-ii-4260350821328.html)
- [Zigate (beta)](https://www.domadoo.fr/fr/interface-domotique/5734-lixee-dongle-usb-zigbee-zigate-v2-compatible-jeedom-eedomus-domoticz-3770014375094.html?search_query=zigate&results=106)
- [Popp (Elelabs) - Recomendado](https://www.domadoo.fr/fr/interface-domotique/5431-popp-dongle-usb-zigbee-zb-stick-chipset-efr32mg13-4251295701554.html)

Tu encontraras [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) la lista de módulos Zigbee compatibles con Jeedom.

## Zwave

Controlador Z-Wave :

-   DISEÑOS SIGMA Controlador USB Z-Wave Plus
-   Onda Z.ME - Mini controlador USB Z-Wave Plus UZB1
-   Controlador AEON LABS Z-Wave Aeon Labs Z-Stick S2
-   [AEON LABS - Controlador USB Z-Wave Plus Z-Stick GEN5 (recomendado)](https://www.domadoo.fr/fr/interface-domotique/2917-aeotec-controleur-usb-z-wave-plus-z-stick-gen5-1220000012813.html?search_query=sigma&results=4)

Tu encontraras [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openzwave) la lista de módulos Z-Wave compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/zwave/) documentación para algunos módulos.
