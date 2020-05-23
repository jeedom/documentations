# Materials

Hardware | State | Remarques
--- | --- | ---
Jeedomboard             | Stable                  |
Hummingboard            | Stable                  |
Odroid C2               | Stable                  |                          
SMART                   | Stable                  |                          
RPI1                    | Stable                  |                          
RPI2                    | Unofficial / Stable     |                          
RPI3                    | Unofficial / Stable     | Attention if you use a Razberry wifi / bluetooth will not work
RPI4                    | Unofficial / Stable     | Attention if you use a Razberry wifi / bluetooth will not work
64 bit                 | Stable                  |                          
32 bit                 | Unsupported            |                          
Vmware                  | Stable                  | No support for VMware, only for Jeedom.

The jeedom team recommends you (depending on your budget) :

- Jeedom Smart (everything is pre-installed, you don't have to do anything)
- Odroid C2 (best performance / price ratio)
- Intel Nuc gen (extreme performance, see the tutorial category for the choice in the different models and installation)
- RPI4

#  Images

You can find all Jeedom images [here](https://images.jeedom.com/)

| Pictures         | Hardware       | State           | SSH access      | Remarks      |
|----------------|----------------|----------------|----------------|----------------|
| Jeedomboard    | jeedomboard and | Stable         | root / Mjeedom96 |                |
|                | hummingboard   |                |                |                |
| Docker         |                | Beta           | root / Mjeedom96 |                |


All other previously downloadable images are no longer maintained, it is better to go through the manual installation of Jeedom [Doc](https://doc.jeedom.com/en_US/installation/index) after installing a linux distribution corresponding to your hardware : Debian (vm, pc,…), Raspbian Lite (Raspberry pi), Armbian (Ordoid,…)

#  Logiciel

> **IMPORTANT**
>
> Jeedom only supports Debian Jessie (not recommended), Stretch (not recommended) and Buster (stable). Any other version (Wheezy…) or distribution (Ubuntu…) is not supported by Jeedom.

| Name                     | State                    | Remarks                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 or less        | Unsupported            |                          |
| PHP 5.6                 | Stable                  |                          |
| PHP 7.X                 | Stable                  |                          |
| Mysql 5.5 / 5.6           | Stable                  |                          |
| Mysql 5.7               | Stable                  |                          |
| MariaBD                 | Stable                  |                          |


# Bluetooth

You will find the list [here](https://doc.jeedom.com/en_US/blea/equipement.compatible) Jeedom compatible Bluetooth modules

# Cameras

You will find the list [here](https://doc.jeedom.com/en_US/camera/equipement.compatible) Jeedom compatible cameras

# Edisio

You will find the list [here](https://doc.jeedom.com/en_US/edisio/equipement.compatible) Jeedom compatible Edisio modules and [here](https://doc.jeedom.com/en_US/edisio/) documentation for some modules

# EnOcean

ENOCEAN controller :

-   EnOcean USB300 USB key
-   EnOcean USB310 USB stick (Recommended)

You will find the list [here](https://doc.jeedom.com/en_US/enocean/equipement.compatible) Jeedom compatible EnOcean modules

# RFXcom

RFXcom controller :

-   RFXtrx433 USB
-   RFXtrx433E USB (Recommended)

You will find the list [here](https://doc.jeedom.com/en_US/rfxcom/equipement.compatible) Jef compatible Rfxcom modules and [here](https://doc.jeedom.com/en_US/rfxcom/) documentation for some modules

# SMS (GSM)

-   HUAWEI E220 (Recommended)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G Wireless

# Zigbee

Zigbee controller :

- [Phoscon Conbee I / II](http://bit.ly/2n4VyWc)

You will find the list [here](https://phoscon.de/en/conbee/compatible) Jeedom compatible Zigbee modules

# Zwave

Z-Wave controller :

-   SIGMA DESIGNS Z-Wave Plus USB controller
-   Z-WAVE.ME - Z-Wave Plus UZB1 Mini USB Controller
-   AEON LABS Z-Wave Controller Aeon Labs Z-Stick S2
-   AEON LABS - Z-Wave Plus Z-Stick GEN5 USB Controller (Recommended)

You will find the list [here](https://doc.jeedom.com/en_US/zwave/equipement.compatible) Jeedom compatible Z-wave modules and [here](https://doc.jeedom.com/en_US/zwave/) documentation for some modules
