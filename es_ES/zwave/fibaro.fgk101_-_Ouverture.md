Fibaro Détecteur d'ouverture - FGK-101 
======================================

 \

-   **El módulo**

 \

![Modulo](images/fibaro.fgk101-DS18B20/Modulo.jpg)

 \

-   **Le visuel Jeedom**

 \

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

 \

Resumen 
------

 \

Ce détecteur alimenté par pile et compatible Z-Wave dispose d'un capteur
reed, un interrupteur de proximité à fonctionnement magnétique, qui
permet de détecter l'ouverture d'une porte ou d'une fenêtre lorsque les
deux éléments sont éloignés.

Le dispositif est constitué d'une partie avec un aimant (la partie
mobile), fixée sur la porte ou la fenêtre, ainsi que de l'unité
principale positionnée sur la partie fixe de la fenêtre/porte avec des
vis ou un adhésif. Lorsque les deux parties ne sont plus en face, un
signal radio Z-Wave est automatiquement envoyé.

De plus, ce détecteur dispose d'une entrée analogique permettant d'y
connecter une sonde de température 1-Wire DS18B20. Ce détecteur dispose
aussi d'une entrée filaire, il peut ainsi être utilisé comme un
transmetteur universel : laissez de côté son contact magnétique, et
reliez ses entrées à vis à tout détecteur (normalement fermé) de votre
choix tel qu'un détecteur de fumée, de gaz ou de monoxyde de carbone,
Etcétera.

Un contrôleur Z-Wave (télécommande, dongle …​) est nécessaire afin
d'intégrer ce détecteur dans votre réseau si vous avez déjà un réseau
existant.

 \

Funciones 
---------

 \

-   Détecteur d'ouverture

-   Bouton pour inclure/exclure le détecteur

-   Détection pile faible

-   Protection anti-sabotage

-   1 entrée filaire sans potentiel

-   1 entrée analogique 1-Wire (pour connecter une sonde de
    température DS18B20)

-   Très petit, dimensions réduites

-   Facilité d'utilisation et d'installation

 \

Caractéristiques techniques 
---------------------------

 \

-   Type de Modulo : Emetteur Z-Wave

-   Color : Blanc (FGK-101/102/103/104/105/106/107 selon couleur)

-   Suministro : Pile ER14250 (1/2AA) 3,6V

-   Fréquence : 868,42 Mhz

-   Distance de transmission : 50m champ libre, 30m en intérieur

-   Dimensions: 76 x 17 x 19 mm

-   Température de fonctionnement : 0-40°C

 \

Données du Modulo 
-----------------

 \

-   Marque : Fibar Group

-   Nombre : Fibaro FGK-101 avec sonde de température (DS18B20)

-   Fabricant ID : 271

-   Type Produit : 1792

-   Produit ID : 4096

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
> Pour mettre ce Modulo en mode inclusion il faut appuyer 3 fois sur le
> bouton d'inclusion, conformément à sa documentation papier.

 \

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

 \

### Comandos 

 \

Une fois le Modulo reconnu, les commandes associées au Modulo seront
disponible.

 \

![Comandos](images/fibaro.fgk101-DS18B20/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Estado : c'est la commande qui remontera l'état ouvert ou fermé du
    Modulo

-   Batería : c'est la commande qui permet de remonter l'état de la
    batería

 \

Vous pouvez masquer ou afficher ces commandes comme vous le souhaitez.

 \

### Configuracion del modulo 

 \

> **Importante**
>
> Lors d'une première inclusion réveillez toujours le Modulo juste après
> l'inclusion.

 \

Ensuite si vous voulez effectuer la configuration du Modulo en fonction
de votre installation, il faut pour cela passer par la bouton
"Configuración" du plugin OpenZwave de Jeedom.

 \

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l'onglet
Paramètres)

 \

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

 \

Détails des paramètres :

 \

-   Wakeup : c'est l'interval de réveil du Modulo (valeur
    recommandée 7200)

-   1: permet de régler le délai d'annulation de l'alarme de l'entrée IN
    (contact sec)

-   2: permet de choisir si la led bleue doit clignoter à l'ouverture et
    la fermeture de votre porte par exemple

-   3: permet de définir le type contact relié au bornier (IN)

-   5: déconseillé de changer ce paramètre sauf si vous savez pourquoi
    (définit le type de signal envoyé au groupe d'association 1)

-   7: valeur envoyée au groupe d'association 1

-   9: permet de régler l'envoi du signal d'annulation entre l'entrée IN
    et le groupe d'association 1

-   12: permet de régler la sensibilité au changement de température (si
    une sonde 1 wire est reliée au Modulo)

-   13: permet de régler l'envoi en mode broadcast des signaux de
    température et de tamper

-   14: permet d'activer la fonctionnalité d'activation de scènes

 \

### Grupos 

 \

Ce Modulo possède trois groupes d'association, seul le troisième est
indispensable.

 \

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

 \

> **Punta**
>
> Ce Modulo est très capricieux sur les wakeup et nécessite une très
> forte proximité avec le contrôleur lors de son inclusion

 \

### Visuel alternatif 

 \

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

 \

Wakeup 
------

 \

Pour réveiller ce Modulo il y a une seule et unique façon de procéder :

-   appuyer 3/4 fois sur le bouton d'inclusion. Il peut être nécessaire
    de le faire plusieurs fois de suite (2 ou 3)

 \

F.A.Q. 
------

 \

Ce Modulo se réveille en appuyant 3 fois sur un des boutons tamper. Mais
il faut que l'autre bouton tamper soit enfoncé.

 \

Ce Modulo à une portée très faible. Il est conseillé de faire
l'inclusion au plus proche de votre box.

 \

Ce Modulo est un Modulo sur batería, la nouvelle configuration sera
prise en compte au prochain wakeup.

 \

Note importante 
---------------

 \

> **Importante**
>
> Il faut réveiller le Modulo : après son inclusion, après un changement
> de la configuration , après un changement de wakeup, après un
> changement des groupes d'association

 \

**@sarakha63**
