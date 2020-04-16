Swiid Interrupteur - Swiidinter 
===============================

 \

-   **The module**

 \

![module](images/swiid.inter/module.jpg)

 \

-   **Le visuel Jeedom**

 \

![vuedefaut1](images/swiid.inter/vuedefaut1.jpg)

 \

Summary 
------

 \

SwiidInter est le premier interrupteur sur cordon dans l'environnement
domotique Z-Wave qui soit suffisamment petit et discret pour être
comparable à un interrupteur sur cordon ordinaire.

Il peut être utilisé à la fois manuellement comme n'importe quel
interrupteur sur cordon ordinaire et à Range via un contrôleur
Z-Wave.

L'interrupteur SwiidInter offre également des possibilités d'association
et ce à double sens. Ainsi, il peut être actionné automatiquement par un
autre périphérique Z-Wave du même réseau, comme par exemple par le
déclenchement d'un détecteur de présence. Inversement avec un appui
court ou avec un appui long il peut commander deux groupes séparés de
périphériques Z-Wave qui lui auront été associés : par exemple tous les
autres éclairages de la pièce où se trouve votre interrupteur
SwiidInter.

L'interrupteur SwiidInter s'installe exactement comme un interrupteur
sur cordon ordinaire : c'est donc une installation simple et rapide qui
ne nécessite aucun outil spécialisé. Il doit ensuite être configuré pour
s'intégrer dans un "réseau" Z-Wave, ce réseau pouvant être aussi simple
qu'une seule télécommande qui commande votre interrupteur SwiidInter à
Range.

 \

Functions 
---------

 \

-   Interrupteur sur cordon utilisable à la fois manuellement
    (appui court) et par radio à Range (Z-Wave)

-   Utilisation en remplacement d'un interrupteur à cordon standard
    d'une lampe de chevet, de table ou de bureau

-   Fonction We/Off

-   Activation d'un scénario domotique sur appui long
    (association Z-Wave)

-   Dimensions comparables à un interrupteur sur cordon ordinaire

-   S'installe comme un interrupteur sur cordon ordinaire

-   Convient pour tous types d'ampoules de lampe

 \

Caractéristiques techniques 
---------------------------

 \

-   Type de module : Récepteur Z-Wave

-   Color : noire

-   Alimentation: 230V ± 10% - 50Hz

-   Puissance maxi : 660W

-   Consumption : &lt; 0,08W

-   Indice de protection: IP20

-   Protocole radio: Z-Wave® (SDK 4.55)

-   Fréquence radio : 868,42 MHz (EU)

-   Dist. transmission: Jusqu'à 30m en intérieur (dépend des matériaux)

-   Temp. fonctionnement : 0 – 40°C

-   Affichage marche/arrêt : LEDs bleues

-   Dimensions : 84 x 32 x 29 mm

-   Normes UE : EN 61058-2-1:2011 EN 55015

 \

Données du module 
-----------------

 \

-   Marque : Swiid

-   Name : Swiidinter

-   Fabricant ID : 358

-   Type Produit : 256

-   Produit ID : 256

 \

Setup 
-------------

 \

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en
inclusion référez-vous à cette
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 \

> **IMPORTANT**
>
> Pour mettre ce module en mode inclusion il faut appuyer sur le bouton
> à l'arrière, conformément à sa documentation papier

 \

![inclusion](images/swiid.inter/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](images/swiid.inter/information.jpg)

 \

### Commands 

 \

Une fois le module reconnu, les commandes associées au module seront
available.

 \

![Commands](images/swiid.inter/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   State : C'est la commande qui permet de connaître le statut de la
    Light

-   We : C'est la commande qui permet d'allumer la Light

-   Off : C'est la commande qui permet d'éteindre la Light

 \

A noter que sur le dashboard toutes les infos se retrouvent sur le même
Icon

 \

### Setup of the module 

 \

Vous pouvez effectuer la configuration du module en fonction de votre
installation. Il faut pour cela passer par le bouton "Setup" du
plugin OpenZwave de Jeedom.

 \

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l'onglet
paramètres)

 \

![Config1](images/swiid.inter/config1.jpg)

 \

Détails du paramètre :

 \

Ce paramètre permet de choisir le comportement lorsque vous associez le
swiidinter à un autre module (appui long)

 \

-   Inactive : n'aura aucun effet sur les autres Lights

-   Uniquement Off : sera effectif uniquement pour éteindre les autres
    Lights

-   Uniquement We : sera effectif uniquement pour allumer les autres
    Lights

-   We et Off (fully) : sera effectif pour allumer et éteindre les
    autres Lights

 \

### Groups 

 \

Ce module possède deux groupes d'association.

 \

![Groupe](images/swiid.inter/groupe.jpg)

 \

> **IMPORTANT**
>
> Pour un fonctionnement optimum de votre module. Il faut que Jeedom
> soit associé à minima au groupe 2.

 \

Associer à une autre Light 
----------------------------

 \

Pour associer le swiidinter à une autre Light et pouvoir bénéficier de
l'allumage d'une autre Light, il suffit de la rajouter au groupe
d'association 1 via l'écran cité au-dessus.

 \

Bon à savoir 
------------

 \

### Visuel alternatif 

 \

![vuewidget](images/swiid.inter/vuewidget.jpg)

 \

Wake up 
-------

 \

Pas de notion de wake up sur ce module.

 \

F.A.Q. 
------

 \

Avez-vous associé les deux modules et avez-vous bien configuré la partie
Specific.

 \

Non. The module ne le permet pas.

 \

**@sarakha63**
