# Materialien

Hardware | Bundesland | Remarques
--- | --- | ---
Jeedom-Board             | Stetig                  |
Hummingboard            | Stetig                  |
Android C2               | Stetig                  |                          
Clever                   | Stetig                  |                          
RPI1                    | Stetig                  |                          
RPI2                    | Stetig                  |                          
RPI3                    | Stetig                  | Seien Sie vorsichtig, wenn Sie ein Razberry verwenden, wird WLAN/Bluetooth nicht funktionieren
RPI4                    | Stetig                  | Seien Sie vorsichtig, wenn Sie ein Razberry verwenden, wird WLAN/Bluetooth nicht funktionieren
64-Bit                 | Stetig                  |                          
32-Bit                 | Nicht unterstützt            |                          
VMware                  | Stetig                  | Keine Unterstützung für VMware, nur für Jeedom.

Das jeedom Team empfiehlt dir (abhängig von deinem Budget) :

- Jeedom Smart (alles ist vorinstalliert, Sie müssen nichts tun)
- Odroid C2 (bestes Preis-/Leistungsverhältnis)
- Intel Nuc Gen (extreme Leistung, siehe die Tutorial-Kategorie für die Auswahl in den verschiedenen Modellen und die Installation)
- RPI4

#  Images

Sie können alle Jeedom-Bilder finden [hier](https://images.jeedom.com/)

| Bilder         | Hardware       | Bundesland           | SSH-Zugriff      | Bemerkungen      | Dokumentation      |
|----------------|----------------|----------------|----------------|----------------|---------------------|
| Jeedom-Board    | Jeedomboard und Hummingboard | Stetig         | root/Mjeedom96 |                | [Jeedom-Board](https://doc.jeedom.com/de_DE/installation/mini) |
| Clever          | Jeedom Smart   | Stetig           | root/Mjeedom96 |                | [Clever](https://doc.jeedom.com/de_DE/installation/smart) |
| RPI            | RPI1/2/3/4     | Beta           | root/Mjeedom96 |  Für RPI ist es ratsam, die rpi-64-Version nur für RPI 4 zu nehmen              | [RPI](https://doc.jeedom.com/de_DE/installation/rpi) |
| x86_64         | Jedes x86_64-System (Intel, AMD, VM...)*               | Stetig           | root/Mjeedom96 |                | [x86_64](https://doc.jeedom.com/de_DE/installation/vm) |
| Docker         |                | Beta           | root/Mjeedom96 |                | [Docker](https://doc.jeedom.com/de_DE/installation/docker) |
| Freebox        | Freebox-Delta  | Stetig         | root/Mjeedom96 | Direkt aus der Freebox zu installieren               | [Freebox](https://doc.jeedom.com/de_DE/installation/freeboxdelta) |
| Synology (Docker)| Nas-Synologie | Beta          | root/Mjeedom96  |                | [Synologie](https://doc.jeedom.com/de_DE/installation/synology) |

\* Jeedom unterstützt offiziell nur die Debian-Distribution. Debian 10 wird vollständig unterstützt, Debian 11 befindet sich im Test, siehe [hier](https://doc.jeedom.com/de_DE/compatibility/debian11)

> **Information**
>
> Sie können Jeedom auch manuell auf jedem Debian-System installieren, indem Sie diesen Anweisungen folgen [Dokumentation](https://doc.jeedom.com/de_DE/installation/cli)

#  Logiciel

> **Wichtig**
>
> Jeedom unterstützt nur Debian Stretch (nicht empfohlen) und Buster (stable). Jede andere Version (Wheezy, Jessie…) oder Distribution (Ubuntu…​) wird von Jeedom nicht unterstützt.

| Nachname                     | Bundesland                    | Bemerkungen                |
|-------------------------|-------------------------|--------------------------|
| PHP5.5 oder weniger        | Nicht unterstützt            |                          |
| PHP5.6                 | Ende der Förderung (im 4.1) |                          |
| PHP7.0/7.1/7.2/7.3/7.4 | Stetig                  |                          |
| PHP8.0 und mehr         | Nicht unterstützt (im Moment)|                          |
| MySQL7.4               | Beta                    |                          |
| MySQL 5.5/5.6           | Stetig                  |                          |
| MySQL5.7               | Stetig                  |                          |
| MariaBD                 | Stetig                  |                          |


# Kompatible Geräte

Hier finden Sie für die wichtigsten Protokolle die Links zu den kompatiblen Geräten, für die anderen laden wir Sie ein, direkt in die Dokumentation des Plugins zu schauen


## Bluetooth

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?p=home&plugin=blea) Jeedom-kompatible Bluetooth-Module

## Kameras

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=camera) Jeedom-kompatible Kameras

## Edisio

Sie finden die Liste [hier](https://doc.jeedom.com/de_DE/edisio/equipement.compatible) Jeedom-kompatible Edisio-Module und [hier](https://doc.jeedom.com/de_DE/edisio/) Dokumentation für einige Module

## EnOcean

EnOcean-Controller :

-   [EnOcean USB300 USB-Schlüssel](https://www.domadoo.fr/fr/interface-domotique/3206-enocean-controleur-usb-enocean-avec-connecteur-sma-3700527400280.html)
-   [EnOcean USB310 USB Key (empfohlen)](https://www.domadoo.fr/fr/interface-domotique/2433-enocean-controleur-usb-enocean-3700527400273.html)

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) Jeedom-kompatible EnOcean-Module 

## RFXcom

RFXcom-Controller :

-   RFXtrx433 USB
-   [RFXtrx433E USB (empfohlen)](https://www.domadoo.fr/fr/interface-domotique/4659-rfxcom-interface-radio-recepteuremetteur-xl-43392mhz-usb-chacon-somfy-rts-oregon-et-autres.html)

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=rfxcom) Jeedom-kompatible Rfxcom-Module und [hier](https://doc.jeedom.com/de_DE/rfxcom/) Dokumentation für einige Module

## SMS (GSM)

-   HUAWEI E220 (Empfohlen)
-   Alcatel One-Touch-X220L
-   HSDPA7.2 MBit/s 3G-WLAN

## Zigbee

Zigbee-Controller :

- [Phoscon Conbee I/II](https://www.domadoo.fr/fr/interface-domotique/4974-phoscon-passerelle-universelle-zigbee-usb-conbee-ii-4260350821328.html)
- [Zigate (Beta))](https://www.domadoo.fr/fr/interface-domotique/5734-lixee-dongle-usb-zigbee-zigate-v2-compatible-jeedom-eedomus-domoticz-3770014375094.html?search_query=zigate&results=106)
- [Popp (Elelabs) - Empfohlen](https://www.domadoo.fr/fr/interface-domotique/5431-popp-dongle-usb-zigbee-zb-stick-chipset-efr32mg13-4251295701554.html)

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) Jeedom-kompatible Zigbee-Module

## Zwave

Z-WAVE-Controller :

-   SIGMA DESIGNS Z-Wave Plus USB-Controller
-   Z-WAVE.ME - Z-Wave Plus UZB1 Mini-USB-Controller
-   AEON LABS Aeon Labs Z-Stick S2 Z-Wave-Controller
-   [AEON LABS – Z-Wave Plus Z-Stick GEN5 USB-Controller (empfohlen)](https://www.domadoo.fr/fr/interface-domotique/2917-aeotec-controleur-usb-z-wave-plus-z-stick-gen5-1220000012813.html?search_query=sigma&results=4)

Sie finden die Liste [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openzwave) Jeedom-kompatible Z-Wave-Module und [hier](https://doc.jeedom.com/de_DE/zwave/) Dokumentation für einige Module
