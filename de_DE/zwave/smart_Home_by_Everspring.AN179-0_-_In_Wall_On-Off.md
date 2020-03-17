SmartHome by Everspring In Wall Ein Aus - AN179-0 
================================================

 \

-   **Das Modul**

 \

![module](images/smarthomebyeverspring.AN179-0/module.jpg)

 \

-   **Le visuel Jeedom**

 \

![vuedefaut1](images/smarthomebyeverspring.AN179-0/vuedefaut1.jpg)

 \

Zusammenfassung 
------

 \

Le Micromodule Mural ON/OFF de la marque SmartHome Europe by Everspring,
est conçu pour contrôler l'allumage et l'extinction des luminaires et
des appareils électriques de votre maison. Deux jeux de contacts secs
permettent le raccordement de deux interrupteurs.

À des fins de sécurité, l'unité peut détecter la surchauffe et éteindra
directement le relais afin d'éviter tout dommage. À une tension de 230
V, ce module peut supporter jusqu'à 11 A en charge résistive, 1200 Watts
en incandescence, 700 Watts de moteur, ou 320 Watts (8 x 40 Watts) de
charge fluorescente.

Le Micromodule Mural ON/OFF est un appareil compatible Z-Wave™ qui est
destiné pour fonctionner avec tous les réseaux compatibles Z-Wave™. Il
peut être contrôlé par une télécommande, un logiciel PC, ou n'importe
quel contrôleur Z-Wave de votre réseau.

 \

Funktionen 
---------

 \

-   Commandez un éclairage/appareil à distance

-   S'installe derrière un interrupteur existant

-   Fonction ON/OFF

-   Faible consommation d'énergie

-   Très petit, dimensions réduites

-   Antenne longue portée

-   Technologie Z-Wave Plus

-   S'installe facilement dans une boîte d'encastrement standard

-   Bouton pour inclure/exclure/associer le module

-   Fonction répéteur Z-Wave

 \

Caractéristiques techniques 
---------------------------

 \

-   Type de module : Récepteur Z-Wave

-   Alimentation : 230 V, 50 Hz

-   Verbrauch : 0.5W

-   Puissance maximum : Charge résistive : 2500W Ampoule à incandesence
    : 1200W Ampoule Fluocompacte : 320W

-   Fréquence : 868,42 Mhz

-   Portée : jusqu'à 70 m à l'extérieur, jusqu'à 30 m dans les bâtiments

-   Anzeigen: LED sur le bouton

-   Dimensions : 42mm x 43mm x 16mm

 \

Données du module 
-----------------

 \

-   Marque : SmartHome by Everspring

-   Name : In Wall Ein Aus

-   Fabricant ID : 96

-   Type Produit : 4

-   Produit ID : 8

 \

Konfiguration 
-------------

 \

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en
inclusion référez-vous à cette
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 \

> **Wichtig**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur son
> bouton, conformément à sa documentation papier. Il est important de
> noter que ce module se met directement en inclusion lorsqu'il
> n'appartient à aucun réseau et qu'il est alimenté

 \

![inclusion](images/smarthomebyeverspring.AN179-0/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](images/smarthomebyeverspring.AN179-0/information.jpg)

 \

### Befehle 

 \

Une fois le module reconnu, les commandes associées au module seront
verfügbar.

 \

![Befehle](images/smarthomebyeverspring.AN179-0/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Ein : C'est la commande qui permet d'allumer la Licht

-   Aus : C'est la commande qui permet d'éteindre la Licht

-   Zustand : C'est la commande qui permet de connaitre le statut de la
    Licht

 \

A noter que sur le dashboard, les infos Zustand, ON/OFF se retrouvent sur
le même icone.

 \

### Konfiguration des Moduls 

 \

Vous pouvez effectuer la configuration du module en fonction de votre
installation. Il faut pour cela passer par le bouton "Konfiguration" du
plugin OpenZwave de Jeedom.

 \

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l'onglet
paramètres)

 \

![Config1](images/smarthomebyeverspring.AN179-0/config1.jpg)

 \

Détails des paramètres :

 \

-   1 : Ce paramètre déﬁnit la commande de valeur d'état, il n'est pas
    conseillé de changer cette valeur.

-   2 : Ce paramètre définit le délai d'envoi du changement d'état au
    groupe 1 (valeur comprise entre 3 et 25 secondes)

-   3 : Ce paramètre permet de définir si l'interrupteur reprendra son
    statut (ON ou OFF) après une reprise de courant.

-   4 : Ce paramètre permet de définir le type
    d'interrupteur (poussoir/bistable)

### Gruppen 

 \

Ce module possède 2 groupes d'association.

 \

![Groupe](images/smarthomebyeverspring.AN179-0/groupe.jpg)

 \

> **Wichtig**
>
> A minima Jeedom devrait se retrouver dans le groupe 1  \

Bon à savoir 
------------

 \

### Spécificités 

 \

-   Le retour d'état ne peut pas être configuré en dessous de 3
    secondes.  \

### Visuel alternatif 

 \

![vuewidget](images//smarthomebyeverspring.AN179-0/vuewidget.jpg)

 \

Wake up 
-------

 \

Pas de notion de wake up sur ce module.

 \

F.A.Q. 
------

 \

Oui c'est le paramètre 2 et il ne peut pas être réglé en dessous de 3
secondes.

 \

Non. ce module peut s'inclure ou s'exclure en appuyant plusieurs fois
sur l'interrupteur.

 \

**@sarakha63**
