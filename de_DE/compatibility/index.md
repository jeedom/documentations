# Materialien

Hardware | Zustand | Remarques
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

Das Jeedom-Team empfiehlt Sie (abhängig von Ihrem Budget) :

- Jeedom SMART (alles ist vorinstalliert, Sie müssen nichts tun)
- Odroid C2 (bestes Leistungs- / Preisverhältnis)
- Intel Nuc gen (extreme Leistung, siehe Tutorial-Kategorie für die Auswahl in verschiedenen Modellen und Installation)
- RPI4

#  Images

Sie finden alle Jeedom-Bilder [hier](https://images.jeedom.com/)

| Bilder         | Hardware       | Zustand           | SSH-Zugang      | Bemerkungen      |
|----------------|----------------|----------------|----------------|----------------|
| Jeedomboard    | Jeedomboard und | Stabil         | root / Mjeedom96 |                |
|                | Brummbrett   |                |                |                |
| Docker         |                | Beta           | root / Mjeedom96 |                |


Alle anderen zuvor herunterladbaren Bilder werden nicht mehr gepflegt. Es ist besser, die manuelle Installation von Jeedom durchzuführen [Doc](https://doc.jeedom.com/de_DE/installation/index) nach der Installation einer Linux-Distribution, die Ihrer Hardware entspricht : Debian (vm, pc,…), Raspbian Lite (Raspberry pi), Armbian (Ordoid,…)

#  Logiciel

> **Important**
>
> Jeedom unterstützt nur Debian Jessie (nicht empfohlen), Stretch (nicht empfohlen) und Buster (stabil). Jede andere Version (Wheezy…) oder Distribution (Ubuntu…) wird von Jeedom nicht unterstützt.

| Name                     | Zustand                    | Bemerkungen                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 oder weniger        | Wird nicht unterstützt            |                          |
| PHP 5.6                 | Stabil                  |                          |
| PHP 7.X                 | Stabil                  |                          |
| MySQL 5.5 / 5.6           | Stabil                  |                          |
| MySQL 5.7               | Stabil                  |                          |
| MariaBD                 | Stabil                  |                          |


# Bluetooth

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/blea/equipement.compatible) Jeedom-kompatible Bluetooth-Module

# Kameras

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/camera/equipement.compatible) Jeedom-kompatible Kameras

# Edisio

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/edisio/equipement.compatible) Jeedom-kompatible Edisio-Module

# EnOcean

ENOCEAN-Controller :

-   EnOcean USB300 USB-Stick
-   EnOcean USB310 USB-Stick (empfohlen)

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/enocean/equipement.compatible) Jeedom-kompatible EnOcean-Module

# RFXcom

RFXcom-Controller :

-   RFXtrx433 USB
-   RFXtrx433E USB (empfohlen)

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/rfxcom/equipement.compatible) Jef-kompatible Rfxcom-Module

# SMS (GSM)

-   HUAWEI E220 (empfohlen)
-   Alcatel One Touch X220L
-   HSDPA 7.2MBPS 3G Wireless

# Zigbee

ZigBee-Controller :

- [Phoscon Conbee I / II](http://bit.ly/2n4VyWc)

Sie finden die Liste [hier](https://phoscon.de/en/conbee/compatible) Jeedom-kompatible ZigBee-Module

# Zwave

Z-Wave-Controller :

-   SIGMA DESIGNS Z-Wave Plus USB-Controller
-   Z-WAVE.ME - Z-Wave Plus UZB1 Mini-USB-Controller
-   AEON LABS Z-Wellen-Controller Aeon Labs Z-Stick S2
-   AEON LABS - Z-Wave Plus Z-Stick GEN5 USB-Controller (empfohlen)

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/zwave/equipement.compatible) Jeedom-kompatible Z-Wave-Module
