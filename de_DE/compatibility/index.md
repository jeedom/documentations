Hardware
========

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
VMware                  | Stabil                  | Keine Unterstützung für VMware, nur für Jeedom. ACHTUNG VmWare 6.5 erfordert die Installation eines VMWare-Patches für die Zwave-Unterstützung.         

Bilder
======

Sie finden alle Jeedom-Bilder
[hier](https://images.jeedom.com/),
dann im Ordner Bilder

> **Notiz**
>
> Ein Netinstall-Image installiert das
> neueste stabile Version von Jeedom, also ist dieses Startup ein bisschen mehr
> lang und erfordert Internetzugang. Du kannst folgen
> den Fortschritt davon, indem Sie mit Ihrem auf die IP Ihres Jeedom gehen
> Browser

| Bilder         | Hardware       | Zustand           | SSH-Zugang      | Bemerkungen      |
|----------------|----------------|----------------|----------------|----------------|
| Jeedomboard    | Jeedomboard und | Beta           | root / Mjeedom96 |                |
| netinstall     | Brummbrett   |                |                |                |
| Jeedomboard    | Jeedomboard und | Stabil         | root / Mjeedom96 |                |
|                | Brummbrett   |                |                |                |
| Docker         |                | Beta           | root / Mjeedom96 |                |


Alle anderen zuvor herunterladbaren Bilder sind nicht mehr vorhanden
gewartet, ist es besser, die manuelle Installation von Jeedom durchzugehen
[Doc](https://github.com/jeedom/documentation/blob/master/installation/de_DE/other.asciidoc)
nach der Installation einer Linux-Distribution entsprechend Ihrer
Material : Debian (vm, pc,…), Raspbian Lite (Raspberry pi), Armbian
(Ordoid,…),…

Software
========

> **Wichtig**
>
> Jeedom unterstützt nur Debian Jessie (stabil) und Stretch (stabil).
> Eine andere Version (Wheezy…) oder Distribution (Ubuntu…) ist dies nicht
> unterstützt von Jeedom.


| Name                     | Zustand                    | Bemerkungen                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 oder weniger        | Wird nicht unterstützt            |                          |
| PHP 5.6                 | Stabil                  |                          |
| PHP 7.X                 | Stabil                  |                          |
| MySQL 5.5 / 5.6           | Stabil                  |                          |
| MySQL 5.7               | Beta                    |                          |
| MariaBD                 | Stabil                  |                          |

Andere
=====

USB-Stick / Erweiterungsmodul
---------------------------

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

- [Phoscon Conbee I/II](http://bit.ly/2n4VyWc)

Zwave Module
-------------

Sie finden die Liste
[hier](https://doc.jeedom.com/de_DE/zwave/equipement.compatible)

EnOcean-Module
---------------

Sie finden die Liste
[hier](https://doc.jeedom.com/de_DE/enocean/equipement.compatible)

Edisio-Module
--------------

Sie finden die Liste
[hier](https://doc.jeedom.com/de_DE/edisio/equipement.compatible)

RFXcom-Module
--------------

Sie finden die Liste
[hier](https://doc.jeedom.com/de_DE/rfxcom/equipement.compatible)

Kameras
-------

Sie finden die Liste
[hier](https://doc.jeedom.com/de_DE/camera/equipement.compatible)

Empfohlene Hardwareplattform
---------------------------------

Das Jeedom-Team empfiehlt Sie (abhängig von Ihrem Budget) :

-   Jeedom SMART (alles ist vorinstalliert, Sie müssen nichts tun)

-   Odroid C2 (bestes Leistungs- / Preisverhältnis)

-   Intel Nuc gen6 (extreme Leistung, siehe Tutorial-Kategorie
    für die Auswahl in den verschiedenen Modellen und die Installation)
