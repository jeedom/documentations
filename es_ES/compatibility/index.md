# Materiales

Hardware | Estado | Remarques
--- | --- | ---
Jeedomboard             | Estable                  |
Colibrí            | Estable                  |
Odroid C2               | Estable                  |                          
Inteligente                   | Estable                  |                          
RPI1                    | Estable                  |                          
RPI2                    | Estable                  |                          
RPI3                    | Estable                  | Tenga cuidado si usa un Razberry, el wifi / bluetooth no podrá funcionar
RPI4                    | Estable                  | Tenga cuidado si usa un Razberry, el wifi / bluetooth no podrá funcionar
64 bits                 | Estable                  |                          
32 bits                 | No admitido            |                          
VMware                  | Estable                  | Sin soporte para VMware, solo para Jeedom.

El equipo de jeedom te recomienda (según tu presupuesto) :

- Jeedom Smart (todo está preinstalado, no tienes que hacer nada)
- Odroid C2 (mejor relación rendimiento / precio)
- Intel Nuc gen (rendimiento extremo, consulte la categoría tutorial para la elección en los diferentes modelos y la instalación)
- RPI4

#  Images

Puedes encontrar todas las imágenes de Jeedom [aquí](https://images.jeedom.com/)

| Imágenes         | Hardware       | Estado           | Acceso SSH      | Notas      | Documentación      |
|----------------|----------------|----------------|----------------|----------------|---------------------|
| Jeedomboard    | Jeedomboard y Hummingboard | Estable         | root / Mjeedom96 |                | [Jeedomboard](https://doc.jeedom.com/es_ES/installation/mini) |
| Inteligente          | Jeedom Smart   | Estable           | root / Mjeedom96 |                | [Inteligente](https://doc.jeedom.com/es_ES/installation/smart) |
| RPI            | RPI1 / 2/3/4     | Beta           | root / Mjeedom96 |  Para rpi es recomendable tomar la versión rpi-64 para RPI 2/3/4 (la imagen es un 20% más eficiente)              | [RPI](https://doc.jeedom.com/es_ES/installation/rpi) |
| x86_64         | Cualquier sistema x86_64 (Intel, AMD, VM...)               | Estable           | root / Mjeedom96 |                | [x86_64](https://doc.jeedom.com/es_ES/installation/vm) |
| Estibador         |                | Beta           | root / Mjeedom96 |                | [Estibador](https://doc.jeedom.com/es_ES/installation/docker) |
| Caja libre        | Freebox Delta  | Estable         | root / Mjeedom96 | Para instalar directamente desde Freebox               | [Caja libre](https://doc.jeedom.com/es_ES/installation/freeboxdelta) |
| Synology (Docker)| Nas Synology | Beta          | root / Mjeedom96  |                | [Synology](https://doc.jeedom.com/es_ES/installation/synology) |

> **Información**
>
> También puede instalar Jeedom manualmente en cualquier sistema Debian siguiendo este [documentación](https://doc.jeedom.com/es_ES/installation/cli)

#  Logiciel

> **Importante**
>
> Jeedom solo es compatible con Debian Jessie (no recomendado), Stretch (no recomendado) y Buster (estable). Jeedom no admite ninguna otra versión (Wheezy ...) o distribución (Ubuntu ...).

| Apellido                     | Estado                    | Notas                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 o menos        | No admitido            |                          |
| PHP 5.6                 | Fin del soporte (en 4.1) |                          |
| PHP 7.X                 | Estable                  |                          |
| Mysql 5.5 / 5.6           | Estable                  |                          |
| Mysql 5.7               | Estable                  |                          |
| MariaBD                 | Estable                  |                          |


# Bluetooth

Encontraras la lista [aquí](https://doc.jeedom.com/es_ES/blea/equipement.compatible) Módulos Bluetooth compatibles con Jeedom

# Cámaras

Encontraras la lista [aquí](https://doc.jeedom.com/es_ES/camera/equipement.compatible) Cámaras compatibles con Jeedom

# Edisio

Encontraras la lista [aquí](https://doc.jeedom.com/es_ES/edisio/equipement.compatible) Módulos Edisio compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/edisio/) documentación para algunos módulos

# EnOcean

Controlador EnOcean :

-   Memoria USB EnOcean USB300
-   Memoria USB EnOcean USB310 (recomendado)

Encontraras la lista [aquí](https://doc.jeedom.com/es_ES/enocean/equipement.compatible) Módulos EnOcean compatibles con Jeedom

# RFXcom

Controlador RFXcom :

-   RFXtrx433 USB
-   RFXtrx433E USB (recomendado)

Encontraras la lista [aquí](https://doc.jeedom.com/es_ES/rfxcom/equipement.compatible) Módulos Rfxcom compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/rfxcom/) documentación para algunos módulos

# SMS (GSM)

-   HUAWEI E220 (recomendado)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G inalámbrico

# Zigbee

Controlador Zigbee :

- [Phoscon Conbee I / II](http://bit.ly/2n4VyWc)

Encontraras la lista [aquí](https://phoscon.de/en/conbee/compatible) Módulos Zigbee compatibles con Jeedom

# Zwave

Controlador Z-WAVE :

-   Controlador USB SIGMA DESIGNS Z-Wave Plus
-   Z-WAVE.ME - Controlador Mini USB Z-Wave Plus UZB1
-   AEON LABS Aeon Labs Z-Stick S2 Controlador Z-Wave
-   AEON LABS - Controlador USB Z-Wave Plus Z-Stick GEN5 (recomendado)

Encontraras la lista [aquí](https://doc.jeedom.com/es_ES/zwave/equipement.compatible) Módulos Z-wave compatibles con Jeedom y [aquí](https://doc.jeedom.com/es_ES/zwave/) documentación para algunos módulos
