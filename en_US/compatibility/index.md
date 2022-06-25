# Materials

Hardware |  | Remarques
--- | --- | ---
Jeedom board             |                   |
Hummingboard            |                   |
Android C2               |                   |                          
Smart                   |                   |                          
RPI1                    |                   |                          
RPI2                    |                   |                          
RPI3                    |                   | Be careful if you use a Razberry the wifi/bluetooth will not be able to work
RPI4                    |                   | Be careful if you use a Razberry the wifi/bluetooth will not be able to work
64 bit                 |                   |                          
32 bit                 |             |                          
Vmware                  |                   | No support for VMware, only for Jeedom.

The jeedom team recommends you (depending on your budget) :

- Jeedom Smart (everything is pre-installed, you don't have to do anything)
- Odroid C2 (best price/performance ratio)
- Intel Nuc gen (extreme performance, see the tutorial category for the choice in the different models and the installation)
- RPI4

#  Images

You can find all the Jeedom images [here](https://images.jeedom.com/)

| Pictures         | Hardware       |            | SSH access      |       | Documentation      |
|----------------|----------------|----------------|----------------|----------------|---------------------|
| Jeedom board    | Jeedomboard and Hummingboard |          |  |                | [Jeedom board](https://doc.jeedom.com/en_US/installation/mini) |
| Smart          | Jeedom Smart   |            |  |                | [Smart](https://doc.jeedom.com/en_US/installation/smart) |
|             |      |            |  |                | [](https://doc.jeedom.com/en_US/installation/rpi) |
|          | ...)*               |            |  |                | [](https://doc.jeedom.com/en_US/installation/vm) |
|          |                |            |  |                | [](https://doc.jeedom.com/en_US/installation/docker) |
|         |   |          |  |                | [](https://doc.jeedom.com/en_US/installation/freeboxdelta) |
| )|  |           |   |                | [Synology](https://doc.jeedom.com/en_US/installation/synology) |

\* Jeedom only officially supports the Debian distribution. Debian 10 is fully supported, Debian 11 is in testing, see [here](https://doc.jeedom.com/en_US/compatibility/debian11)

> **Information**
>
> You can also manually install Jeedom on any Debian system by following this [documentation](https://doc.jeedom.com/en_US/installation/cli)

#  Logiciel

> **Important**
>
> Jeedom only supports Debian Stretch (not recommended) and Buster (stable). Any other version (Wheezy, Jessie…) or distribution (Ubuntu…​) is not supported by Jeedom.

|                      |                     |                 |
|-------------------------|-------------------------|--------------------------|
| .        |             |                          |
| .6                 | .1) |                          |
| .4 |                   |                          |
| .         | )|                          |
| .4               |                     |                          |
| .6           |                   |                          |
| .7               |                   |                          |
|                  |                   |                          |


# Compatible equipment

You will find here for the main protocols the links to the compatible equipment for the others we invite you to look directly at the documentation of the plugin


## Bluetooth

You will find the list [here](https://compatibility.jeedom.com/index.php?p=home&plugin=blea) Jeedom-compatible Bluetooth modules

## Cameras

You will find the list [here](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=camera) Jeedom compatible cameras

## Edisio

You will find the list [here](https://doc.jeedom.com/en_US/edisio/equipement.compatible) Jeedom-compatible Edisio modules and [here](https://doc.jeedom.com/en_US/edisio/) documentation for some modules

## EnOcean

EnOcean Controller :

-   [EnOcean USB300 USB Key](https://www.domadoo.fr/fr/interface-domotique/3206-enocean-controleur-usb-enocean-avec-connecteur-sma-3700527400280.html)
-   [EnOcean USB310 USB Key (Recommended)](https://www.domadoo.fr/fr/interface-domotique/2433-enocean-controleur-usb-enocean-3700527400273.html)

You will find the list [here](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) Jeedom-compatible EnOcean modules 

## RFXcom

RFXcom Controller :

-   RFXtrx433 USB
-   [RFXtrx433E USB (Recommended)](https://www.domadoo.fr/fr/interface-domotique/4659-rfxcom-interface-radio-recepteuremetteur-xl-43392mhz-usb-chacon-somfy-rts-oregon-et-autres.html)

You will find the list [here](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=rfxcom) Jeedom compatible Rfxcom modules and [here](https://doc.jeedom.com/en_US/rfxcom/) documentation for some modules

## SMS (GSM)

-   HUAWEI E220 (Recommended)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G Wireless

## Zigbee

Zigbee Controller :

- [Phoscon Conbee I/II](https://www.domadoo.fr/fr/interface-domotique/4974-phoscon-passerelle-universelle-zigbee-usb-conbee-ii-4260350821328.html)
- [Zigate (beta))](https://www.domadoo.fr/fr/interface-domotique/5734-lixee-dongle-usb-zigbee-zigate-v2-compatible-jeedom-eedomus-domoticz-3770014375094.html?search_query=zigate&results=106)
- [Popp (Elelabs) - Recommended](https://www.domadoo.fr/fr/interface-domotique/5431-popp-dongle-usb-zigbee-zb-stick-chipset-efr32mg13-4251295701554.html)

You will find the list [here](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) Jeedom-compatible Zigbee modules

## Zwave

Z-WAVE Controller :

-   SIGMA DESIGNS Z-Wave Plus USB Controller
-   Z-WAVE.ME - Z-Wave Plus UZB1 Mini USB Controller
-   AEON LABS Aeon Labs Z-Stick S2 Z-Wave Controller
-   [AEON LABS - Z-Wave Plus Z-Stick GEN5 USB Controller (Recommended)](https://www.domadoo.fr/fr/interface-domotique/2917-aeotec-controleur-usb-z-wave-plus-z-stick-gen5-1220000012813.html?search_query=sigma&results=4)

You will find the list [here](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openzwave) Jeedom compatible Z-wave modules and [here](https://doc.jeedom.com/en_US/zwave/) documentation for some modules
