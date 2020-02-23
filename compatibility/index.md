Hardware
========

Hardware | Etat | Remarques
--- | --- | ---
Jeedomboard             | Stable                  |
Hummingboard            | Stable                  |
Odroid C2               | Stable                  |                          
Smart                   | Stable                  |                          
RPI1                    | Stable                  |                          
RPI2                    | Non officiel/Stable     |                          
RPI3                    | Non officiel/Stable     | Attention si vous utilisez un Razberry le wifi/bluetooth ne pourra marcher
64 bits                 | Stable                  |                          
32 bits                 | Non supporté            |                          
Vmware                  | Stable                  | Pas de support pour VMware, seulement pour Jeedom. ATTENTION VmWare 6.5 nécessite l’installation d’un correctif VMWare pour le support des Zwave.         

Images
======

Vous pouvez retrouver toutes les images Jeedom
[ici](https://images.jeedom.com/),
puis dans le dossier Images

> **Note**
>
> Une image netinstall va lors du premier démarrage installer la
> dernière version stable de Jeedom, ce démarrage est donc un peu plus
> long et nécessite d’avoir accès à internet. Vous pouvez suivre
> l’avancement de celui-ci en allant sur l’IP de votre Jeedom avec votre
> navigateur

| Images         | Hardware       | Etat           | Accès SSH      | Remarques      |
|----------------|----------------|----------------|----------------|----------------|
| Jeedomboard    | jeedomboard et | Beta           | root/Mjeedom96 |                |
| netinstall     | hummingboard   |                |                |                |
| Jeedomboard    | jeedomboard et | Stable         | root/Mjeedom96 |                |
|                | hummingboard   |                |                |                |
| Docker         |                | Beta           | root/Mjeedom96 |                |


Toutes les autres images téléchargeables précédemment ne sont plus
maintenues, il vaut mieux passer par l’installation manuelle de Jeedom
[Doc](https://github.com/jeedom/documentation/blob/master/installation/fr_FR/other.asciidoc)
après avoir installé une distribution linux correspondant à votre
matériel : Debian (vm, pc,…​), Raspbian Lite (Raspberry pi), Armbian
(Ordoid,…​), …​

Logiciel
========

> **Important**
>
> Jeedom ne supporte que Debian Jessie (stable) et Stretch (stable).
> Toute autre version (Wheezy…​) ou distribution (Ubuntu…​) n’est pas
> supportée par Jeedom.


| Nom                     | Etat                    | Remarques                |
|-------------------------|-------------------------|--------------------------|
| PHP 5.5 ou moins        | Non supporté            |                          |
| PHP 5.6                 | Stable                  |                          |
| PHP 7.X                 | Stable                  |                          |
| Mysql 5.5/5.6           | Stable                  |                          |
| Mysql 5.7               | Beta                    |                          |
| MariaBD                 | Stable                  |                          |

Autre
=====

Clef USB/Module d’extension
---------------------------

Contrôleur ENOCEAN :

-   Clef USB EnOcean USB300
-   Clef USB EnOcean USB310 (Recommandé)

Interface RFXCOM :

-   RFXtrx433 USB
-   RFXtrx433E USB (Recommandé)

Passerelle EDISIO :

-   Dongle Edisio (Recommandé)

Indicateur Led :

-   blink(1) mk2 (Recommandé)

Dongle GSM :

-   HUAWEI E220 (Recommandé)
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G Wireless

Contrôleur Z-WAVE :

-   SIGMA DESIGNS Contrôleur Z-Wave Plus USB
-   Z-WAVE.ME - Mini contrôleur USB Z-Wave Plus UZB1
-   AEON LABS Contrôleur Z-Wave Aeon Labs Z-Stick S2
-   AEON LABS - Contrôleur USB Z-Wave Plus Z-Stick GEN5 (Recommandé)


Contrôleur Zigbee :

- [Phoscon Conbee I/II](http://bit.ly/2n4VyWc)

Modules Zwave
-------------

Vous trouverez la liste
[ici](https://jeedom.github.io/documentation/zwave/fr_FR/equipement.compatible)

Modules EnOcean
---------------

Vous trouverez la liste
[ici](https://jeedom.github.io/documentation/enocean/fr_FR/equipement.compatible)

Modules Edisio
--------------

Vous trouverez la liste
[ici](https://jeedom.github.io/documentation/edisio/fr_FR/equipement.compatible)

Modules RFXcom
--------------

Vous trouverez la liste
[ici](https://jeedom.github.io/documentation/rfxcom/fr_FR/equipement.compatible)

Caméras
-------

Vous trouverez la liste
[ici](https://jeedom.github.io/documentation/camera/fr_FR/equipement.compatible)

Plateforme matérielle recommandée
---------------------------------

L’équipe jeedom vous recommande (en fonction de votre budget) :

-   Jeedom Smart (tout est préinstallé, vous n’avez rien à faire)

-   Odroid C2 (meilleur rapport performance/prix)

-   Intel Nuc gen6 (des performances extrêmes, voir la catégorie tuto
    pour le choix dans les differents modèles et l’installation)
