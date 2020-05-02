# Hardware

Hardware | Zustand | Bemerkungen
--- | --- | ---
Jeedomboard             | Stabil                  |
Brummbrett            | Stabil                  |
Odroid C2               | Stabil                  |                          
SMART                   | Stabil                  |                          
RPI1                    | Stabil                  |                          
RPI2                    | Inoffiziell / stabil     |                          
RPI3                    | Inoffiziell / stabil     | Achtung, wenn Sie ein Razberry Wifi / Bluetooth verwenden, funktioniert nicht
64 Bit                 | Stabil                  |                          
32 Bit                 | Wird nicht unterstützt            |                          
VMware                  | Stabil                  | Keine Unterstützung für VMware, nur für Jeedom.

#  Bilder

Sie finden alle Jeedom-Bilder [hier](https://images.jeedom.com/),dann im Ordner Bilder

| Bilder         | Hardware       | Zustand           | SSH-Zugang      | Bemerkungen      |
|----------------|----------------|----------------|----------------|----------------|
| Jeedomboard    | Jeedomboard und | Beta           | root / Mjeedom96 |                |
| netinstall     | Brummbrett   |                |                |                |
| Jeedomboard    | Jeedomboard und | Stabil         | root / Mjeedom96 |                |
|                | Brummbrett   |                |                |                |
| Docker         |                | Beta           | root / Mjeedom96 |                |


Alle anderen zuvor herunterladbaren Bilder werden nicht mehr gepflegt. Es ist besser, die manuelle Installation von Jeedom durchzuführen [Doc](https://doc.jeedom.com/de_DE/installation/index) nach der Installation einer Linux-Distribution, die Ihrer Hardware entspricht : Debian (vm, pc,…), Raspbian Lite (Raspberry pi), Armbian (Ordoid,…)

#  Software

> **Important**
>
> Jeedom unterstützt nur Debian Jessie (nicht empfohlen), Stretch (nicht empfohlen) und Buster (stabil). Jede andere Version (Wheezy…) oder Distribution (Ubuntu…) wird von Jeedom nicht unterstützt.


| Name                     | Zustand                    | Bemerkungen                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 oder weniger        | Wird nicht unterstützt            |                          |
| PHP 5.6                 | Stabil                  |                          |
| PHP 7.X                 | Stabil                  |                          |
| MySQL 5.5 / 5.6           | Stabil                  |                          |
| MySQL 5.7               | Stabil                    |                          |
| MariaBD                 | Stabil                  |                          |

#  Andere

## USB-Stick / Erweiterungsmodul

ENOCEAN-Controller :

-   EnOcean USB300 USB-Stick
-   EnOcean USB310 USB-Stick (empfohlen)

RFXCOM-Schnittstelle :

-   RFXtrx433 USB
-   RFXtrx433E USB (empfohlen)

EDISIO-Gateway :

-   Edisio Dongle (empfohlen)

LED-Anzeige :

-   blink (1) mk2 (empfohlen)

GSM-Dongle :

-   HUAWEI E220 (empfohlen)
-   Alcatel One Touch X220L
-   HSDPA 7.2MBPS 3G Wireless

Z-Wave-Controller :

-   SIGMA DESIGNS Z-Wave Plus USB-Controller
-   Z-WAVE.ME - Z-Wave Plus UZB1 Mini-USB-Controller
-   AEON LABS Z-Wellen-Controller Aeon Labs Z-Stick S2
-   AEON LABS - Z-Wave Plus Z-Stick GEN5 USB-Controller (empfohlen)


ZigBee-Controller :

- [Phoscon Conbee I / II](http://bit.ly/2n4VyWc)

## Zwave Module

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/zwave/equipement.compatible)

## EnOcean-Module

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/enocean/equipement.compatible)

## Edisio-Module

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/edisio/equipement.compatible)

## RFXcom-Module

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/rfxcom/equipement.compatible)

## Kameras

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/camera/equipement.compatible)

## Bluetooth

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/blea/equipement.compatible)

# Empfohlene Hardwareplattform

Das Jeedom-Team empfiehlt Sie (abhängig von Ihrem Budget) :

-   Jeedom SMART (alles ist vorinstalliert, Sie müssen nichts tun)
-   Odroid C2 (bestes Leistungs- / Preisverhältnis)
-   Intel Nuc gen (extreme Leistung, siehe Tutorial-Kategorie für die Auswahl in verschiedenen Modellen und Installation)
