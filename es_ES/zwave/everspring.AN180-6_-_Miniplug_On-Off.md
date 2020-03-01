Everspring Miniplug ON/OFF - AN180-6 
====================================

 \

-   **Le module**

 \

![module](images/everspring.AN180-6/module.jpg)

 \

-   **Le visuel jeedom**

 \

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

 \

Resumen 
------

 \

La Mini Prise ON/OFF est conçue pour contrôler l'allumage et
l'extinction des luminaires et des équipements électriques de votre
maison. Avec une tension de 220 - 240 V, cette Prise peut supporter une
charge jusqu'à 1500W (résistance), 800W (incandescence), 200W (moteur,
fluorescent, Led).

La Mini Prise ON/OFF est un appareil compatible Z-Wave™ qui est destiné
pour fonctionner avec tous les réseaux compatibles Z-Wave™. Elle peut
être contrôlée par une télécommande, un logiciel PC, ou n'importe quel
contrôleur Z-Wave de votre réseau.

 \

Fonctions 
---------

 \

-   Commander une lampe ou un appareil à distance

-   Module prise s'intégrant directement entre une prise électrique et
    la charge à commander

-   Fonction ON / OFF pour piloter des lampes ou des appareils (pas
    de variation)

-   Contrôle de la charge en local via le bouton intégré

-   Technologie Z-Wave Plus

-   Dimensions réduites pour passer presque inaperçu

-   LED de statut sur le bouton intégré

-   Fonction répéteur Z-Wave

 \

Caractéristiques techniques 
---------------------------

 \

-   Type de module : Récepteur Z-Wave

-   Alimentation : 230 V, 50 Hz

-   Consommation : 0.6W

-   Puissance maximum : Charge résistive : 1500W, Ampoule à incandesence
    : 800W, Ampoule Fluocompacte : 200W, Ampoule Led (non dimmable) :
    200W

-   fréquence : 868,42 MHz

-   Portée : jusqu'à 70 m à l'extérieur, jusqu'à 30 m dans les bâtiments

-   Visualización: LED sur le bouton

-   Dimensions : Longueur (prise incluse) : 74mm Diamètre : 52mm

 \

Données du module 
-----------------

 \

-   Marque : Everspring

-   Nombre : Miniplug ON/OFF

-   Fabricant ID : 96

-   Type produit : 4

-   Produit ID : 7

 \

configuración 
-------------

 \

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en
inclusion référez-vous à cette
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 \

> **importante**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur son
> bouton, conformément à sa documentation papier. Il est important de
> noter que ce module se met directement en inclusion lorsqu'il
> n'appartient à aucun réseau et qu'il est alimenté

 \

![inclusion](images/everspring.AN180-6/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

 \

### comandos 

 \

Une fois le module reconnu, les commandes associées aux modules seront
disponibles.

 \

![comandos](images/everspring.AN180-6/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   état : C'est la commande qui permet de connaître le statut de la
    prise (Allumée/Eteinte)

-   ON : C'est la commande qui permet d'allumer la prise

-   OFF : C'est la commande qui permet d'éteindre la prise

 \

A noter que sur le dashboard, les infos état, ON/OFF se retrouvent sur
la même icône.

 \

### configuración du module 

 \

Vous pouvez effectuer la configuration du module en fonction de votre
installation. Il faut pour cela passer par le bouton "configuración" du
plugin OpenZwave de Jeedom.

 \

![configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l'onglet
Paramètres)

 \

![Config1](images/everspring.AN180-6/config1.jpg)

 \

Détails des paramètres :

 \

-   1 : Ce paramètre déﬁnit la commande de valeur d'état, il n'est pas
    conseillé de changer cette valeur.

-   2 : Ce paramètre définit le délai d'envoit du changement d'état au
    groupe 1 (valeur comprise entre 3 et 25 secondes)

-   3 : Ce paramètre permet de définir si la prise reprendra son statut
    (ON ou OFF) après une reprise de courant.

### Groupes 

 \

Ce module possède 2 groupes d'association.

 \

![Groupe](images/everspring.AN180-6/groupe.jpg)

 \

> **importante**
>
> A minima Jeedom devrait se retrouver dans le groupe 1  \

Bon à savoir 
------------

 \

### Spécificités 

 \

-   Le retour d'état ne peut pas être configuré en dessous de 3
    secondes.  \

Wakeup 
------

 \

Pas de notion de wakeup sur ce module.

 \

F.A.Q. 
------

 \

Oui c'est le paramètre 2 et il ne peut pas être réglé en dessous de 3
secondes.

 \

**@sarakha63**
