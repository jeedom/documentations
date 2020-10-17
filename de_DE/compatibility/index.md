# Materialien

Hardware | Zustand | Remarques
--- | --- | ---
Jeedomboard             | Stabil                  |
Brummbrett            | Stabil                  |
Odroid C2               | Stabil                  |                          
SMART                   | Stabil                  |                          
RPI1                    | Stabil                  |                          
RPI2                    | Stabil                  |                          
RPI3                    | Stabil                  | Achtung, wenn Sie ein Razberry Wifi / Bluetooth verwenden, funktioniert nicht
RPI4                    | Stabil                  | Achtung, wenn Sie ein Razberry Wifi / Bluetooth verwenden, funktioniert nicht
64 Bit                 | Stabil                  |                          
32 Bit                 | Wird nicht unterstützt            |                          
VMware                  | Stabil                  | Keine Unterstützung für VMware, nur für Jeedom.

Das Jeedom-Team empfiehlt Sie (abhängig von Ihrem Budget) :

- Jeedom Smart (alles ist vorinstalliert, Sie müssen nichts tun)
- Odroid C2 (bestes Leistungs- / Preisverhältnis)
- Intel Nuc gen (extreme Leistung, siehe die Tutorial-Kategorie für die Auswahl in den verschiedenen Modellen und Installation)
- RPI4

#  Images

Sie finden alle Jeedom-Bilder [hier](https://images.jeedom.com/)

| Bilder         | Hardware       | Zustand           | SSH-Zugang      | Bemerkungen      | Dokumentation      |
|----------------|----------------|----------------|----------------|----------------|---------------------|
| Jeedomboard    | Jeedomboard und Hummingboard | Stabil         | root / Mjeedom96 |                | [Jeedomboard](https://doc.jeedom.com/de_DE/installation/mini) |
| SMART          | Jeedom Smart   | Stabil           | root / Mjeedom96 |                | [SMART](https://doc.jeedom.com/de_DE/installation/smart) |
| RPI            | RPI1 / 2/3/4     | Beta           | root / Mjeedom96 |  Für RPI ist es ratsam, die RPI-64-Version für RPI 2/3/4 zu verwenden (das Bild ist 20% effizienter)              | [RPI](https://doc.jeedom.com/de_DE/installation/rpi) |
| x86_64         | Beliebiges x86_64-System (Intel, AMD, VM...)               | Stabil           | root / Mjeedom96 |                | [x86_64](https://doc.jeedom.com/de_DE/installation/vm) |
| Docker         |                | Beta           | root / Mjeedom96 |                | [Docker](https://doc.jeedom.com/de_DE/installation/docker) |
| Freebox        | Freebox Delta  | Stabil         | root / Mjeedom96 | So installieren Sie direkt von der Freebox               | [Freebox](https://doc.jeedom.com/de_DE/installation/freeboxdelta) |
| Synologie (Docker)| NAS-Synologie | Beta          | root / Mjeedom96  |                | [Synologie](https://doc.jeedom.com/de_DE/installation/synology) |

> **Information**
>
> Sie können Jeedom auch manuell auf jedem Debian-System installieren, indem Sie diesen Anweisungen folgen [Dokumentation](https://doc.jeedom.com/de_DE/installation/cli)

#  Logiciel

> **Wichtig**
>
> Jeedom unterstützt nur Debian Jessie (nicht empfohlen), Stretch (nicht empfohlen) und Buster (stabil)). Jede andere Version (Wheezy…) oder Distribution (Ubuntu…) wird von Jeedom nicht unterstützt.

| Name                     | Zustand                    | Bemerkungen                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 oder weniger        | Wird nicht unterstützt            |                          |
| PHP 5.6                 | Ende der Unterstützung (in 4.1) |                          |
| PHP 7.X                 | Stabil                  |                          |
| MySQL 5.5 / 5.6           | Stabil                  |                          |
| MySQL 5.7               | Stabil                  |                          |
| MariaBD                 | Stabil                  |                          |


# Bluetooth

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/blea/equipement.compatible) Jeedom-kompatible Bluetooth-Module

# Kameras

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/camera/equipement.compatible) Jeedom-kompatible Kameras

# Edisio

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/edisio/equipement.compatible) Jeedom kompatible Edisio Module und [hier](https://doc.jeedom.com/de_DE/edisio/) Dokumentation für einige Module

# EnOcean

ENOCEAN-Controller :

-   EnOcean USB300 USB-Stick
-   EnOcean USB310 USB-Stick (empfohlen)

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/enocean/equipement.compatible) Jeedom-kompatible EnOcean-Module

# RFXcom

RFXcom-Controller :

-   RFXtrx433 USB
-   RFXtrx433E USB (empfohlen)

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/rfxcom/equipement.compatible) Jef-kompatible Rfxcom-Module und [hier](https://doc.jeedom.com/de_DE/rfxcom/) Dokumentation für einige Module

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

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/zwave/equipement.compatible) Jeedom-kompatible Z-Wave-Module und [hier](https://doc.jeedom.com/de_DE/zwave/) Dokumentation für einige Module
