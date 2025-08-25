# Compatibilité

Cette page recense les différentes compatibilités et incompatibilités identifiées, aussi bien matérielles que logicielles.

>**INFORMATION**
>
>L’équipe Jeedom s’efforce de maintenir ces informations à jour, parfois au détriment d’autres développements. L’assistance de la communauté est précieuse à tous les niveaux de la documentation — cette page étant une priorité.

## Matérielle

Nos recommandations vont dépendre de différents facteurs :

- **Jeedom Atlas ou Luna** : l'alliance de la simplicité, de l'optimisation et d'une compatibilité avancée.
- **Nano-ordinateur** *(Odroid C2, Rock Pi, Rasperry Pi, etc.)* : le meilleur rapport performance/prix.
- **Mini-pc** *(NUC)* : des performances extrêmes pour un budget plus conséquent *(voir [le tutoriel avancé dédié](https://doc.jeedom.com/fr_FR/howtoadvance/vmware.installation_sur_nuc) pour plus de détails)*.

### Matériels supportés

>**IMPORTANT**
>
>Le support officiel concerne uniquement l’instance Jeedom. Seules les boxes officielles bénéficient également du support système.

Liste, par catégorie et non exhaustive, des **matériels identifiés comme supportés** par Jeedom en version stable :

| Boxes officielles      | ARM64                  | AMD64                  | Hyperviseur (AMD64)    |
|------------------------|------------------------|------------------------|------------------------|
| Smart, Atlas, Luna     | Odroid C2, Rock Pi Série 4, Raspberry Pi3/4 | Systèmes 64 bits, Mini-pcs *(NUC)*, Processeur Intel® N100 | Systèmes 64 bits, VMware, Proxmox |

### Matériels non supportés

Liste, par catégorie et non exhaustive, des **matériels identifiés comme non suppportés** par Jeedom en version stable :

| Boxes officielles      | ARM64                  | AMD64                  | Hyperviseur (AMD64)    |
|------------------------|------------------------|------------------------|------------------------|
| Jeedomboard, Mini+     | Hummingboard, Raspberry Pi1/2 | Systèmes 32 bits | Systèmes 32 bits      |

## Logicielle

### Debian

| Version            | Statut             |
|--------------------|--------------------|
| Debian 11 Bullseye | Recommandé         |
| Debian 12 Bookworm | Supporté *(4.5)*   |
| Debian 13 Trixie   | En cours de validation |
| Debian 10 Buster et antérieur | Non supporté |

### PHP

| Version            | Statut             |
|--------------------|--------------------|
| PHP 7              | Recommandé         |
| PHP 8              | Supporté *(4.5)*   |
| PHP 5.6            | Fin de support *(4.1)* |
| PHP 5.5 et antérieur | Non supporté     |

### MySQL

| Version            | Statut             |
|--------------------|--------------------|
| MySQL 7.4          | Recommandé         |
| MySQL 5.5/5.6/5.7  | Supporté           |

### MariaDB

| Version            | Statut             |
|--------------------|--------------------|
| MariaDB 10         | Recommandé         |

## Images système officielles

L'équipe Jeedom développe des images sur-mesure, à destination de nombreux matériels différents, et, régulièrement mises à jour :

| Image système      | Documentation      |
|--------------------|--------------------|
| [Jeedom Luna](https://images.jeedom.com/luna/) | [Documentation système Luna](https://doc.jeedom.com/fr_FR/plugins/home%20automation%20protocol/luna) |
| [Jeedom Atlas](https://images.jeedom.com/atlas/) | [Documentation système Atlas](https://doc.jeedom.com/fr_FR/installation/recovery) |
| [Jeedom Smart](https://images.jeedom.com/smart/) | [Documentation système Smart](https://doc.jeedom.com/fr_FR/installation/recovery) |
| [Jeedom AMD64](https://images.jeedom.com/x86-64/) | [Documentation système mini-pc](https://doc.jeedom.com/fr_FR/installation/baremetal) ou [Documentation système machine virtuelle](https://doc.jeedom.com/fr_FR/installation/vm) |
| [Jeedom Freebox](https://images.jeedom.com/x86-64/) | [Documentation système Freebox](https://doc.jeedom.com/fr_FR/installation/freeboxdelta) |

>**Accès SSH**
>
>Identifiants par défaut : `jeedom/Mjeedom96` — mot de passe `root` identique.

## Equipements compatibles

Vous trouverez ici pour les protocoles principaux les liens vers les équipements compatibles.
Pour les autres nous vous invitons à regarder directement la documentation du plugin.

### Bluetooth

Vous trouverez [ici](https://compatibility.jeedom.com/index.php?p=home&plugin=blea) la liste des modules Bluetooth compatibles Jeedom.

### Caméras

Vous trouverez [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=camera) la liste des caméras compatibles Jeedom.

### Edisio

Vous trouverez [ici](https://doc.jeedom.com/fr_FR/edisio/equipement.compatible) la liste des modules Edisio compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/edisio/) la documentation pour certains modules.

### EnOcean

Contrôleur EnOcean :

-   [clé USB EnOcean USB300](https://www.domadoo.fr/fr/interface-domotique/3206-enocean-controleur-usb-enocean-avec-connecteur-sma-3700527400280.html)
-   [clé USB EnOcean USB310 (Recommandé)](https://www.domadoo.fr/fr/interface-domotique/2433-enocean-controleur-usb-enocean-3700527400273.html)

Vous trouverez [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openenocean) la liste des modules EnOcean compatibles Jeedom.

### RFXcom

Contrôleur RFXcom :

-   RFXtrx433 USB
-   [RFXtrx433E USB (Recommandé)](https://www.domadoo.fr/fr/interface-domotique/4659-rfxcom-interface-radio-recepteuremetteur-xl-43392mhz-usb-chacon-somfy-rts-oregon-et-autres.html)

Vous trouverez [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=rfxcom) la liste des modules Rfxcom compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/rfxcom/) la documentation pour certains modules.

### SMS (GSM)

-   HUAWEI E220 (Recommandé)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G Wireless

### Zigbee

Contrôleur Zigbee :

- [Phoscon Conbee I/II](https://www.domadoo.fr/fr/interface-domotique/4974-phoscon-passerelle-universelle-zigbee-usb-conbee-ii-4260350821328.html)
- [Zigate (beta)](https://www.domadoo.fr/fr/interface-domotique/5734-lixee-dongle-usb-zigbee-zigate-v2-compatible-jeedom-eedomus-domoticz-3770014375094.html?search_query=zigate&results=106)
- [Popp (Elelabs) - Recommandée](https://www.domadoo.fr/fr/interface-domotique/5431-popp-dongle-usb-zigbee-zb-stick-chipset-efr32mg13-4251295701554.html)

Vous trouverez [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) la liste des modules Zigbee compatibles Jeedom.

### Z-wave

Contrôleur Z-WAVE :

-   SIGMA DESIGNS Contrôleur Z-Wave Plus USB
-   Z-WAVE.ME - Mini contrôleur USB Z-Wave Plus UZB1
-   AEON LABS Contrôleur Z-Wave Aeon Labs Z-Stick S2
-   [AEON LABS - Contrôleur USB Z-Wave Plus Z-Stick GEN5 (Recommandé)](https://www.domadoo.fr/fr/interface-domotique/2917-aeotec-controleur-usb-z-wave-plus-z-stick-gen5-1220000012813.html?search_query=sigma&results=4)

Vous trouverez [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=openzwave) la liste des modules Z-Wave compatibles Jeedom et [ici](https://doc.jeedom.com/fr_FR/zwave/) la documentation pour certains modules.

## Exemple de montage DIY

En montage DIY (Do It Yourself), voici une configuration "type" pour bien débuter avec Jeedom en Z-Wave :

1.  Raspberry Pi 4 :

    -   Un raspberry+boitier \~ 50 €
    -   Une clé Aeotec Gen 5 \~ 60 €
    -   Une micro carte microSD \~ 7 €
    -   Une alimentation USB \~ 8 €

Soit un total de 125 € pour une box domotique open source avec une maîtrise complète de son installation.

>**INFORMATION**
>
>Il est possible d’ajouter ou de changer par une antenne Rfxcom, ou une clé enOcean, etc. En principe, il faut une clé USB par protocole supplémentaire. En fonction de leur nombre et de leur consommation cumulée, sur un Raspberry Pi vous pouvez avoir besoin d'un hub USB complémentaire avec son alimentation dédiée.\
>Pour la clé Z-Wave Aeotec Gen 5 en utilisation cumulée avec un Raspberry Pi 4 (modèles antérieurs non concernés), il faut en utliser une récente si vous souhaitez vous affranchir d'un hub USB. Se renseigner et se fournir chez un vendeur d'équipements domotiques.\
>RPi 4, il est vivement conseillé de remplacer la carte microSD par un disque dur mSATA USB3, directement relié au port USB3 avec boot natif. Les cartes microSD ont une durée de vie très limitée en échange de données intensif: à ne réserver que pour de courtes périodes de tests.
