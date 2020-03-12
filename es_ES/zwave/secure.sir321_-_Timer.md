Secure SIR 321 "Timer" 
======================

 \

-   **El módulo**

 \

![module](images/secure.sir321/module.jpg)

 \

-   **Le visuel jeedom**

 \

![vuedefaut1](images/secure.sir321/vuedefaut1.jpg)

 \

Resumen 
------

 \

Le minuteur numérique SIR321 est un simple interrupteur à
bouton-poussoir qui se souvient d'éteindre, à votre place, vos appareils
électriques. De grosses économies d'énergie sont possibles en ajoutant
ce dispositif simple sur tout appareil électrique de grande puissance,
avec des charges allants jusqu'à 3kW (résistif).

Ces unités sont parfaites pour être utilisées sur les panneaux
chauffants, thermoplongeurs, sèche-serviettes et radiateurs d'huile. Le
boost va de 30 à 120 minutes.

Le SIR 321 prend en charge les capteurs de température externe SES001,
SES002 et SES003.

 \

Funciones 
---------

 \

-   Booster pour thermoplongeur, radiateur panneau, sèche-serviettes,
    radiateur à bain d'huile

-   Minuterie pour chaudière

-   Ventilation forcée dans les salles de conférence

-   Mesure de la température de chauffage au sol (avec sondes en option)

-   Simple à utiliser et fiable

-   Réalise des économies d'énergie

 \

Caractéristiques Techniques 
---------------------------

 \

-   Tipo: Minuteur électronique

-   Relais: 13(3)A, 230V AC, approprié pour des charges allants jusqu'à
    3kW

-   Alimentation: 230V AC, 50Hz

-   Dimensions 85x85x44mm

-   Indice de protection : IP30

-   Température de fonctionnement: 0°C à 35°C

 \

Données du module 
-----------------

 \

-   Marque : Horstmann

-   Nombre : SIR 321 RF Countdown Timer

-   Fabricant ID : 89

-   Tipo Produit : 1/2 (en fonction de si il est inclus avec une sonde
    de température ou non)

 \

Configuración 
-------------

 \

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en
inclusion référez-vous à cette
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 \

> **Importante**
>
> Pour mettre ce module en mode inclusion il faut appuyer 1 seconde sur
> le bouton (jusqu'au clignotement rapide) et relacher, conformément à
> sa documentation papier.

 \

![inclusion](images/secure.sir321/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](images/secure.sir321/information.jpg)

 \

### Comandos 

 \

Une fois le module reconnu, les commandes associées au module seront
disponible.

 \

![Comandos](images/secure.sir321/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Uno : c'est la commande permettant d'allumer le relais

-   Apagado : c'est la commande permettant d'éteindre le relais

-   Température : c'est la commande de mesure de la température si une
    sonde externe est présente

 \

### Configuracion del modulo 

 \

Si vous voulez configurer le module il faut passer par le bouton
"Configuración" du plugin OpenZwave de Jeedom.

 \

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l'onglet
paramètres)

 \

![Config1](images/secure.sir321/config1.jpg)

 \

Détails des paramètres :

 \

-   1: Permet d'activer ou non la fonction fail safe timer (se référer à
    la documentation du module)

-   2: Permet de régler l'unité de la température

-   3: Permet de régler l'intervalle de temps d'envoi de la température
    à Jeedom (en secondes)

-   4: Permet de régler de combien doit varier la température pour que
    le module l'envoie à Jeedom (par pas de 0.1 10-→0.1)

-   5: Permet de régler une température de cut off au delà de laquelle
    le module coupera le relais

 \

### Grupos 

 \

Ce module possède deux groupes d'association. Si le premier est
indispensable, le deuxième est actif et est indispensable si une sonde
de température est reliée.

 \

![Groupe](images/secure.sir321/groupe.jpg)

F.A.Q. 
------

 \

**@sarakha63**
