# Matériels

Hardware | Etat | Remarques
--- | --- | ---
Jeedomboard             | Stable                  |
Hummingboard            | Stable                  |
Odroid C2               | Stable                  |                          
Smart                   | Stable                  |                          
RPI1                    | Stable                  |                          
RPI2                    | Stable                  |                          
RPI3                    | Stable                  | Attention si vous utilisez un Razberry le wifi/bluetooth ne pourra marcher
RPI4                    | Stable                  | Attention si vous utilisez un Razberry le wifi/bluetooth ne pourra marcher
64 bits                 | Stable                  |                          
32 bits                 | Non supporté            |                          
Vmware                  | Stable                  | Pas de support pour VMware, seulement pour Jeedom.

L’équipe jeedom vous recommande (en fonction de votre budget) :

- Jeedom Smart (tout est préinstallé, vous n’avez rien à faire)
- Odroid C2 (meilleur rapport performance/prix)
- Intel Nuc gen (des performances extrêmes, voir la catégorie tuto pour le choix dans les differents modèles et l’installation)
- RPI4

#  Images

Vous pouvez retrouver toutes les images Jeedom [ici](https://images.jeedom.com/)

| Images         | Hardware       | Etat           | Accès SSH      | Remarques      | Documentations      |
|----------------|----------------|----------------|----------------|----------------|---------------------|
| Jeedomboard    | Jeedomboard et Hummingboard | Stable         | root/Mjeedom96 |                | [Jeedomboard](https://doc.jeedom.com/fr_FR/installation/mini) |
| Smart          | Jeedom Smart   | Stable           | root/Mjeedom96 |                | [Smart](https://doc.jeedom.com/fr_FR/installation/smart) |
| RPI            | RPI1/2/3/4     | Beta           | root/Mjeedom96 |  Pour rpi il est conseillé de prendre la version rpi-64 pour les RPI 2/3/4 (l'image est 20% plus performantes)              | [RPI](https://doc.jeedom.com/fr_FR/installation/rpi) |
| x86_64         | Tout systeme x86_64 (Intel, AMD, VM...)               | Stable           | root/Mjeedom96 |                | [x86_64](https://doc.jeedom.com/fr_FR/installation/vm) |
| Docker         |                | Beta           | root/Mjeedom96 |                | [Docker](https://doc.jeedom.com/fr_FR/installation/docker) |
| Freebox        | Freebox Delta  | Stable         | root/Mjeedom96 | A installer directement depuis la Freebox               | [Freebox](https://doc.jeedom.com/fr_FR/installation/freeboxdelta) |
| Synology (Docker)| Nas Synology | Beta          | root/Mjeedom96  |                | [Synology](https://doc.jeedom.com/fr_FR/installation/synology) |

> **Informations**
>
> Vous pouvez aussi installer manuellement Jeedom sur tout système Debian en suivant cette [documentation](https://doc.jeedom.com/fr_FR/installation/cli)

#  Logiciel

> **Important**
>
> Jeedom ne supporte que Debian Stretch (non recommandé) et Buster (stable). Toute autre version (Wheezy, Jessie…​) ou distribution (Ubuntu…​) n’est pas supportée par Jeedom.

| Nom                     | Etat                    | Remarques                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 ou moins        | Non supporté            |                          |
| PHP 5.6                 | Fin de support (en 4.1) |                          |
| PHP 7.X                 | Stable                  |                          |
| Mysql 5.5/5.6           | Stable                  |                          |
| Mysql 5.7               | Stable                  |                          |
| MariaBD                 | Stable                  |                          |


# Bluetooth

Vous trouverez la liste [ici](https://doc.jeedom.com/fr_FR/blea/equipement.compatible) des modules Bluetooth compatibles Jeedom

# Caméras

Vous trouverez la liste [ici](https://doc.jeedom.com/fr_FR/camera/equipement.compatible) des caméras compatibles Jeedom

# Edisio

Vous trouverez la liste [ici](https://doc.jeedom.com/fr_FR/edisio/equipement.compatible) des modules Edisio compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/edisio/) la documentation pour certains modules

# EnOcean

Contrôleur EnOcean :

-   Clef USB EnOcean USB300
-   Clef USB EnOcean USB310 (Recommandé)

Vous trouverez la liste [ici](https://doc.jeedom.com/fr_FR/enocean/equipement.compatible) des modules EnOcean compatibles Jeedom

# RFXcom

Contrôleur RFXcom :

-   RFXtrx433 USB
-   RFXtrx433E USB (Recommandé)

Vous trouverez la liste [ici](https://doc.jeedom.com/fr_FR/rfxcom/equipement.compatible) des modules Rfxcom compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/rfxcom/) la documentation pour certains modules

# SMS (GSM)

-   HUAWEI E220 (Recommandé)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G Wireless

# Zigbee

Contrôleur Zigbee :

- [Phoscon Conbee I/II](http://bit.ly/2n4VyWc)

Vous trouverez la liste [ici](https://phoscon.de/en/conbee/compatible) des modules Zigbee compatibles Jeedom

# Zwave

Contrôleur Z-WAVE :

-   SIGMA DESIGNS Contrôleur Z-Wave Plus USB
-   Z-WAVE.ME - Mini contrôleur USB Z-Wave Plus UZB1
-   AEON LABS Contrôleur Z-Wave Aeon Labs Z-Stick S2
-   AEON LABS - Contrôleur USB Z-Wave Plus Z-Stick GEN5 (Recommandé)

Vous trouverez la liste [ici](https://doc.jeedom.com/fr_FR/zwave/equipement.compatible) des modules Z-wave compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/zwave/) la documentation pour certains modules
