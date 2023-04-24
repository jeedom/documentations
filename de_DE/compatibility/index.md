# Materialien

Hardware | Zustand | Remarques
--- | --- | ---
Jeedomboard             | Stabil                  |
Brummbrett            | Stabil                  |
Odroid C2               | Stabil                  |                          
SMART                   | Stabil                  |                          
RPI1                    | Stabil                  |                          
RPI2                    | Stabil                  |                          
RPI3                    | Stabil                  | Seien Sie vorsichtig, wenn Sie ein Razberry verwenden, das WLAN / Bluetooth wird nicht funktionieren
RPI4                    | Stabil                  | Seien Sie vorsichtig, wenn Sie ein Razberry verwenden, das WLAN / Bluetooth wird nicht funktionieren
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
| RPI            | RPI1 / 2/3/4     | Beta           | root / Mjeedom96 |  Für RPI ist es ratsam, nur die rpi-64-Version für RPI 4 zu verwenden              | [RPI](https://doc.jeedom.com/de_DE/installation/rpi) |
| x86_64         | Beliebiges x86_64-System (Intel, AMD, VM...)*               | Stabil           | root / Mjeedom96 |                | [x86_64](https://doc.jeedom.com/de_DE/installation/vm) |
| Docker         |                | Beta           | root / Mjeedom96 |                | [Docker](https://doc.jeedom.com/de_DE/installation/docker) |
| Freebox        | Freebox Delta  | Stabil         | root / Mjeedom96 | So installieren Sie direkt von der Freebox               | [Freebox](https://doc.jeedom.com/de_DE/installation/freeboxdelta) |
| Synologie (Docker)| NAS-Synologie | Beta          | root / Mjeedom96  |                | [Synologie](https://doc.jeedom.com/de_DE/installation/synology) |

> **Information**
>
> Sie können Jeedom auch manuell auf jedem Debian-System installieren, indem Sie diesen Anweisungen folgen [Dokumentation](https://doc.jeedom.com/de_DE/installation/cli).

#  Logiciel

> **Wichtig**
>
> Jeedom unterstützt nur Debian Stretch (nicht empfohlen), Buster (Ende der Lebensdauer) und Bullseye (empfohlen). Jede andere Version (Wheezy, Jessie…) oder Distribution (Ubuntu…) wird von Jeedom nicht unterstützt.

| Name                     | Zustand                    | Bemerkungen                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 oder weniger        | Wird nicht unterstützt            |                          |
| PHP 5.6                 | Ende der Unterstützung (in 4.1) |                          |
| PHP 7.0 / 7.1 / 7.2 / 7.3 / 7.4 | Stabil                  |                          |
| PHP 8.0 und höher         | Nicht unterstützt (derzeit)|                          |
| MySQL 7.4               | Beta                    |                          |
| MySQL 5.5 / 5.6           | Stabil                  |                          |
| MySQL 5.7               | Stabil                  |                          |
| MariaBD                 | Stabil                  |                          |


# Kompatible Geräte

Hier finden Sie für die wichtigsten Protokolle die Links zu den kompatiblen Geräten.
Für die anderen laden wir Sie ein, direkt in die Dokumentation des Plugins zu schauen.


## Bluetooth

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?p=home&plugin=blea) Jeedom-kompatible Bluetooth-Module.

## Kameras

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=camera) Jeedom-kompatible Kameras.

## Edisio

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/edisio/equipement.compatible) Jeedom kompatible Edisio Module und [hier](https://doc.jeedom.com/de_DE/edisio/) Dokumentation für einige Module.

## EnOcean

ENOCEAN-Controller :

-   [EnOcean USB300 USB-Stick](https://www.domadoo.fr/fr/interface-domotique/3206-enocean-controleur-usb-enocean-avec-connecteur-sma-3700527400280.html)
-   [EnOcean USB310 USB-Stick (empfohlen)](https://www.domadoo.fr/fr/interface-domotique/2433-enocean-controleur-usb-enocean-3700527400273.html)

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) Jeedom-kompatible EnOcean-Module.

## RFXcom

RFXcom-Controller :

-   RFXtrx433 USB
-   [RFXtrx433E USB (empfohlen)](https://www.domadoo.fr/fr/interface-domotique/4659-rfxcom-interface-radio-recepteuremetteur-xl-43392mhz-usb-chacon-somfy-rts-oregon-et-autres.html)

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=rfxcom) Jef-kompatible Rfxcom-Module und [hier](https://doc.jeedom.com/de_DE/rfxcom/) Dokumentation für einige Module.

## SMS (GSM)

-   HUAWEI E220 (empfohlen)
-   Alcatel One Touch X220L
-   HSDPA 7.2MBPS 3G Wireless

## Zigbee

ZigBee-Controller :

- [Phoscon Conbee I / II](https://www.domadoo.fr/fr/interface-domotique/4974-phoscon-passerelle-universelle-zigbee-usb-conbee-ii-4260350821328.html)
- [Zigate (Beta)](https://www.domadoo.fr/fr/interface-domotique/5734-lixee-dongle-usb-zigbee-zigate-v2-compatible-jeedom-eedomus-domoticz-3770014375094.html?search_query=zigate&results=106)
- [Popp (Elelabs) - Empfohlen](https://www.domadoo.fr/fr/interface-domotique/5431-popp-dongle-usb-zigbee-zb-stick-chipset-efr32mg13-4251295701554.html)

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) Jeedom-kompatible ZigBee-Module.

## Zwave

Z-Wave-Controller :

-   SIGMA DESIGNS Z-Wave Plus USB-Controller
-   Z-WAVE.ME - Z-Wave Plus UZB1 Mini-USB-Controller
-   AEON LABS Z-Wellen-Controller Aeon Labs Z-Stick S2
-   [AEON LABS - Z-Wave Plus Z-Stick GEN5 USB-Controller (empfohlen)](https://www.domadoo.fr/fr/interface-domotique/2917-aeotec-controleur-usb-z-wave-plus-z-stick-gen5-1220000012813.html?search_query=sigma&results=4)

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openzwave) Jeedom-kompatible Z-Wave-Module und [hier](https://doc.jeedom.com/de_DE/zwave/) Dokumentation für einige Module.
