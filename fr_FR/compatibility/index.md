# Matériels

Hardware | Etat | Remarques
--- | --- | ---
Jeedomboard             | Stable                  |
Hummingboard            | Stable                  |
Odroid C2               | Stable                  |                          
Smart                   | Stable                  |                          
RPI1                    | Stable                  |                          
RPI2                    | Stable                  |                          
RPI3                    | Stable                  | Attention si vous utilisez un Razberry le wifi/bluetooth ne pourra pas fonctionner
RPI4                    | Stable                  | Attention si vous utilisez un Razberry le wifi/bluetooth ne pourra pas fonctionner
64 bits                 | Stable                  |                          
32 bits                 | Non supporté            |                          
Vmware                  | Stable                  | Pas de support pour VMware, seulement pour Jeedom.

L’équipe Jeedom vous recommande (en fonction de votre budget) :

- Jeedom Atlas ou Luna (tout est préinstallé, vous n’avez rien à faire)
- Odroid C2 (meilleur rapport performance/prix)
- Intel Nuc gen (des performances extrêmes, voir la catégorie tuto pour le choix dans les différents modèles et l’installation)
- RPI4

#  Images

Vous pouvez retrouver toutes les images Jeedom [ici](https://images.jeedom.com/)

| Images         | Hardware       | Etat           | Accès SSH      | Remarques      | Documentations      |
|----------------|----------------|----------------|----------------|----------------|---------------------|
| Jeedomboard    | Jeedomboard et Hummingboard | Stable         | root/Mjeedom96 |                | [Jeedomboard](https://doc.jeedom.com/fr_FR/installation/mini) |
| Smart          | Jeedom Smart   | Stable           | root/Mjeedom96 |                | [Smart](https://doc.jeedom.com/fr_FR/installation/smart) |
| RPI            | RPI1/2/3/4     | Beta           | root/Mjeedom96 |  Pour RPI il est conseillé de prendre la version rpi-64 pour les RPI 4 uniquement              | [RPI](https://doc.jeedom.com/fr_FR/installation/rpi) |
| x86_64         | Tout systeme x86_64 (Intel, AMD, VM...)*               | Stable           | root/Mjeedom96 |                | [x86_64](https://doc.jeedom.com/fr_FR/installation/vm) |
| Docker         |                | Beta           | root/Mjeedom96 |                | [Docker](https://doc.jeedom.com/fr_FR/installation/docker) |
| Freebox        | Freebox Delta  | Stable         | root/Mjeedom96 | A installer directement depuis la Freebox               | [Freebox](https://doc.jeedom.com/fr_FR/installation/freeboxdelta) |
| Synology (Docker)| Nas Synology | Beta          | root/Mjeedom96  |                | [Synology](https://doc.jeedom.com/fr_FR/installation/synology) |

> **Informations**
>
> Vous pouvez aussi installer manuellement Jeedom sur tout système Debian en suivant cette [documentation](https://doc.jeedom.com/fr_FR/installation/cli).

#  Logiciel

> **Important**
>
> Jeedom ne prend en charge que Debian Stretch (non recommandé),Buster (en fin de vie) et Bullseye (recommandé). Toute autre version (Wheezy, Jessie…) ou distribution (Ubuntu…) n’est pas prise en charge par Jeedom.

| Nom                     | Etat                    | Remarques                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 ou moins        | Non supporté            |                          |
| PHP 5.6                 | Fin de support (en 4.1) |                          |
| PHP 7.0/7.1/7.2/7.3/7.4 | Stable                  |                          |
| PHP 8.0 et plus         | Non supporté (pour le moment)|                          |
| Mysql 7.4               | Beta                    |                          |
| Mysql 5.5/5.6           | Stable                  |                          |
| Mysql 5.7               | Stable                  |                          |
| MariaBD                 | Stable                  |                          |


# Equipements compatibles

Vous trouverez ici pour les protocoles principaux les liens vers les équipements compatibles.
Pour les autres nous vous invitons à regarder directement la documentation du plugin.


## Bluetooth

Vous trouverez la liste [ici](https://compatibility.jeedom.com/index.php?p=home&plugin=blea) des modules Bluetooth compatibles Jeedom.

## Caméras

Vous trouverez la liste [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=camera) des caméras compatibles Jeedom.

## Edisio

Vous trouverez la liste [ici](https://doc.jeedom.com/fr_FR/edisio/equipement.compatible) des modules Edisio compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/edisio/) la documentation pour certains modules.

## EnOcean

Contrôleur EnOcean :

-   [Clef USB EnOcean USB300](https://www.domadoo.fr/fr/interface-domotique/3206-enocean-controleur-usb-enocean-avec-connecteur-sma-3700527400280.html)
-   [Clef USB EnOcean USB310 (Recommandé)](https://www.domadoo.fr/fr/interface-domotique/2433-enocean-controleur-usb-enocean-3700527400273.html)

Vous trouverez la liste [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) des modules EnOcean compatibles Jeedom.

## RFXcom

Contrôleur RFXcom :

-   RFXtrx433 USB
-   [RFXtrx433E USB (Recommandé)](https://www.domadoo.fr/fr/interface-domotique/4659-rfxcom-interface-radio-recepteuremetteur-xl-43392mhz-usb-chacon-somfy-rts-oregon-et-autres.html)

Vous trouverez la liste [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=rfxcom) des modules Rfxcom compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/rfxcom/) la documentation pour certains modules.

## SMS (GSM)

-   HUAWEI E220 (Recommandé)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G Wireless

## Zigbee

Contrôleur Zigbee :

- [Phoscon Conbee I/II](https://www.domadoo.fr/fr/interface-domotique/4974-phoscon-passerelle-universelle-zigbee-usb-conbee-ii-4260350821328.html)
- [Zigate (beta)](https://www.domadoo.fr/fr/interface-domotique/5734-lixee-dongle-usb-zigbee-zigate-v2-compatible-jeedom-eedomus-domoticz-3770014375094.html?search_query=zigate&results=106)
- [Popp (Elelabs) - Recommandée](https://www.domadoo.fr/fr/interface-domotique/5431-popp-dongle-usb-zigbee-zb-stick-chipset-efr32mg13-4251295701554.html)

Vous trouverez la liste [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) des modules Zigbee compatibles Jeedom.

## Zwave

Contrôleur Z-WAVE :

-   SIGMA DESIGNS Contrôleur Z-Wave Plus USB
-   Z-WAVE.ME - Mini contrôleur USB Z-Wave Plus UZB1
-   AEON LABS Contrôleur Z-Wave Aeon Labs Z-Stick S2
-   [AEON LABS - Contrôleur USB Z-Wave Plus Z-Stick GEN5 (Recommandé)](https://www.domadoo.fr/fr/interface-domotique/2917-aeotec-controleur-usb-z-wave-plus-z-stick-gen5-1220000012813.html?search_query=sigma&results=4)

Vous trouverez la liste [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openzwave) des modules Z-Wave compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/zwave/) la documentation pour certains modules.
