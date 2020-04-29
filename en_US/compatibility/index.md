Hardware
========

Hardware | State | Remarks
--- | --- | ---
Jeedomboard             | Stable                  |
Hummingboard            | Stable                  |
Odroid C2               | Stable                  |                          
SMART                   | Stable                  |                          
RPI1                    | Stable                  |                          
RPI2                    | Unofficial / Stable     |                          
RPI3                    | Unofficial / Stable     | Attention if you use a Razberry wifi / bluetooth will not work
64 bit                 | Stable                  |                          
32 bit                 | Unsupported            |                          
Vmware                  | Stable                  | No support for VMware, only for Jeedom. ATTENTION VmWare 6.5 requires installation of a VMWare patch for Zwave support.         

Images
======

You can find all Jeedom images
[here](https://images.jeedom.com/),
then in the Pictures folder

> **Note**
>
> A netinstall image will install the
> latest stable version of Jeedom, so this startup is a little more
> long and requires internet access. You can follow
> the progress of it by going on the IP of your Jeedom with your
> Navigator

| Pictures         | Hardware       | State           | SSH access      | Remarks      |
|----------------|----------------|----------------|----------------|----------------|
| Jeedomboard    | jeedomboard and | Beta           | root / Mjeedom96 |                |
| netinstall     | hummingboard   |                |                |                |
| Jeedomboard    | jeedomboard and | Stable         | root / Mjeedom96 |                |
|                | hummingboard   |                |                |                |
| Docker         |                | Beta           | root / Mjeedom96 |                |


All other previously downloadable images are no longer
maintained, it is better to go through the manual installation of Jeedom
[Doc](https://github.com/jeedom/documentation/blob/master/installation/en_US/other.asciidoc)
after installing a linux distribution corresponding to your
equipment : Debian (vm, pc,…), Raspbian Lite (Raspberry pi), Armbian
(Ordoid,…),…

Logiciel
========

> **Important**
>
> Jeedom only supports Debian Jessie (stable) and Stretch (stable).
> Any other version (Wheezy…) or distribution (Ubuntu…) is not
> supported by Jeedom.


| Name                     | State                    | Remarks                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 or less        | Unsupported            |                          |
| PHP 5.6                 | Stable                  |                          |
| PHP 7.X                 | Stable                  |                          |
| Mysql 5.5 / 5.6           | Stable                  |                          |
| Mysql 5.7               | Beta                    |                          |
| MariaBD                 | Stable                  |                          |

Autre
=====

USB stick / Expansion module
---------------------------

ENOCEAN controller :

-   EnOcean USB300 USB key
-   EnOcean USB310 USB stick (Recommended)

RFXCOM interface :

-   RFXtrx433 USB
-   RFXtrx433E USB (Recommended)

EDISIO gateway :

-   Edisio Dongle (Recommended)

Led indicator :

-   blink (1) mk2 (Recommended)

GSM dongle :

-   HUAWEI E220 (Recommended)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G Wireless

Z-Wave controller :

-   SIGMA DESIGNS Z-Wave Plus USB controller
-   Z-WAVE.ME - Z-Wave Plus UZB1 Mini USB Controller
-   AEON LABS Z-Wave Controller Aeon Labs Z-Stick S2
-   AEON LABS - Z-Wave Plus Z-Stick GEN5 USB Controller (Recommended)


Zigbee controller :

- [Phoscon Conbee I / II](http://bit.ly/2n4VyWc)

Zwave modules
-------------

You will find the list
[here](https://doc.jeedom.com/en_US/zwave/equipement.compatible)

EnOcean modules
---------------

You will find the list
[here](https://doc.jeedom.com/en_US/enocean/equipement.compatible)

Edisio modules
--------------

You will find the list
[here](https://doc.jeedom.com/en_US/edisio/equipement.compatible)

RFXcom modules
--------------

You will find the list
[here](https://doc.jeedom.com/en_US/rfxcom/equipement.compatible)

Cameras
-------

You will find the list
[here](https://doc.jeedom.com/en_US/camera/equipement.compatible)

Recommended hardware platform
---------------------------------

The jeedom team recommends you (depending on your budget) :

-   Jeedom SMART (everything is preinstalled, you don't have to do anything)

-   Odroid C2 (best performance / price ratio)

-   Intel Nuc gen6 (extreme performance, see the tutorial category
    for the choice in the different models and the installation)
