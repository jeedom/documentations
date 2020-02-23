Fibaro FGFS-101 "Flood Sensor" 
==============================

 \

-   **Le module**

 \

![module](../images/fibaro.fgfs101/module.jpg)

 \

-   **Le visuel jeedom**

 \

![vuedefaut1](../images/fibaro.fgfs101/vuedefaut1.jpg)

 \

Résumé 
------

 \

Le capteur FGFS-101 est compact et possède une grande variété de
fonctions. Avec sa technologie de pointe et de précision, le capteur
Flood Fibaro vous alerte d’une inondation menaçante, ou une augmentation
ou baisse rapide de la température.

Il est équipé d’un capteur d’inclinaison qui envoie une alerte
immédiatement au réseau Z-Wave si le détecteur est déplacé ou volé
(remonte au contrôleur Z-Wave l’information d’inclinaison ou de
mouvement).

Ce détecteur d’inondation et de température universel peut être alimenté
par batterie ou par une alimentation externe 12 ou 24 VDC. Lorsqu’il est
connecté à une source d’alimentation externe, la batterie sert de source
d’alimentation de secours.

Grâce à sa sonde de température vous pouvez contrôler la température de
votre sol. Il est étanche, en cas d’inondation il flotte à la surface de
l’eau.

Il dispose également d’une alarme sirène qui peut retentir en cas de
problème. Vous pouvez raccorder la sortie contact sec à un système
d’alarme existant. Une LED en façade permettant de vérifier l’état du
FGFS-101.

Ce capteur intègre un testeur de portée de réseau Z-Wave,ce qui vous
assure du bon fonctionnement du capteur lors de son installation.

 \

Fonctions 
---------

 \

-   Détecteur d’inondation (présence d’eau via contacts)

-   Détecteur de température

-   Détecteur d’inclinaison

-   Alarme sonore et visuelle

-   Testeur de portée Z-Wave

-   Répeteur Z-Wave ?? (voir rubrique "Bon à savoir")

 \

Caractéristiques techniques 
---------------------------

 \

-   Type de module : Emetteur Z-Wave

-   Module pouvant être alimenté en externe : 12 – 24 VDC

-   Type de batterie : CR123A

-   Autonomie de la batterie : 2 ans

-   Consommation sur alimentation externe : 0,4W

-   Courant maximal supporté en sortie (ALARM NC, TAMP NC) :25mA

-   Tension maximale supportée en sortie : 40V (AC ou DC)

-   Fréquence : 868,42 MHz

-   Distance de transmission : 50m champ libre, 30m en intérieur

-   Dimensions : 72 x 28 mm (diamètre x hauteur)

-   Température de fonctionnement : 0-40°C (-20°C à 70°C si
    alimentation externe)

-   Gamme de mesure de la température : -20 à 100°C

-   Précision de la mesure : 0,5°C (dans une gamme de 0 à 40°C)

-   Normes : EMC 2004/108/EC et R&TTE 199/5/WE

 \

Données du module 
-----------------

 \

-   Marque : Fibar Group

-   Modèle : FGFS101 Flood Sensor

-   Fabricant : FIBARO System

-   Fabricant ID : 271

-   Type Produit : 2816

-   Produit ID : 4097

 \

Configuration 
-------------

 \

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en
inclusion référez-vous à cette
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 \

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur le
> bouton central d’inclusion,repéré TMP, conformément à sa documentation
> papier (la languette noir).

 \

![Vue interieur](../images/fibaro.fgfs101/Vue_interieur.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/fibaro.fgfs101/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/fibaro.fgfs101/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Fuite : c’est la commande d’alerte du module (pour la présence
    d’eau, inondation …​)

-   Température : c’est la commande de mesure de la température

-   Sabotage : c’est la commande de sabotage. Elle signale l’ouverture
    du boitier

-   Batterie : c’est la commande batterie

 \

### Configuration du module 

 \

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après
> l’inclusion.

 \

Ensuite il est nécessaire d’effectuer la configuration du module en
fonction de votre installation. Il faut pour cela passer par le bouton
"Configuration" du plugin OpenZwave de Jeedom.

 \

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l’onglet
Paramètres)

 \

![Config1](../images/fibaro.fgfs101/config1.jpg)

![Config2](../images/fibaro.fgfs101/config2.jpg)

 \

Détails des paramètres :

 \

-   Wakeup : c’est l’intervalle de réveil du module (valeur
    recommandée 21600)

-   1\. Délai d’annulation de l’alarme après détection d’une inondation :
    valeur de 0 à 3600 s (0 par défaut/ dès qu‘il n’y a plus de détection il
    s’arrête instantanément)

-   2\. Choix du type d’alarme. Valeur :

        0 : Alarme sonore et visuelle désactivée
        1 : Alarme sonore désactivée et visuelle activée
        2 : Alarme sonore activée et visuelle désactivée
        3 : Alarme sonore et visuelle activée.

-   10\. Temps de report entre deux relevés de température : de 1 à 65535 s
    (300 par défaut). Attention à ne pas mettre une valeur de report trop
    rapprochée sous peine de voir la batterie du module fondre à toute
    vitesse ! (1800 est recommandé)

-   12\. Écart de température entre deux reports : de 1 à 1000 (50 par défaut
    = 0,5°). En accord avec le paramètre 10, il est également possible de
    gérer le report des températures en fonction de la variation de
    ces dernières.

-   50\. Définition de l’alarme de température basse : de -10000 à + 10000
    (1500 par défaut = 15°C) Permet de déclencher une alarme lorsque la
    température descend en dessous d’un certain seuil.

-   51.Définition de l’alarme de température haute : de -10000 à + 10000
    (3500 par défaut = 35°C) Permet de déclencher une alarme lorsque la
    température passe au dessus d’un certain seuil.

-   73\. Compensation de température : de -10000 à + 10000 (0 par défaut
    = 0°C) Permet de définir un décalage entre la température du capteur et
    la température réelle

-   75\. Définition de la durée de l’alarme : de 0 à 65535s (0 par défaut,
    L’alarme s’arrête dès quelle ne détecte plus de défaut.)

 \

### Groupes 

 \

Pour un fonctionnement optimum de votre module. Il faut que Jeedom soit
associé à minima aux groupes 1, 4 et 5:

 \

![Groupe](../images/fibaro.fgfs101/groupe.jpg)

 \

Bon à savoir 
------------

Alimenté par l’extérieur ce module permet de faire office de répéteur
Z-wave (information non confirmée actuellement)

Le cablage pour une alimentation extérieure.  \

![Alim Exterieur](../images/fibaro.fgfs101/Alim_Exterieur.jpg)

 \

Wakeup 
------

 \

Pour réveiller ce module il faut appuyer 3 fois sur le bouton central

 \

F.A.Q. 
------

 \

Ce module se réveille en appuyant 3 fois sur son bouton d’inclusion.

 \

Ce module est, par défaut, un module sur batterie, la nouvelle
configuration sera prise en compte au prochain wakeup.

 \

Note importante 
---------------

 \

> **Important**
>
> Il faut réveiller le module : après son inclusion, après un changement
> de la configuration , après un changement de wakeup, après un
> changement des groupes d’association

 \

 \
Detail d’utilsation :
<http://blog.domadoo.fr/2014/12/18/jeedom-guide-dutilisation-du-detecteur-dinondation-fibaro-fgfs-001/>
Documentation fibaro (en) :
<http://www.fibaro.com/manuals/en/FGFS-101-Flood-Sensor/FGFS-101-Flood-Sensor-en-2.1-2.3.pdf>

 \

