-   **Le module**

![module](images/emv.400/module.jpg)

-   **Le visuel jeedom**

![vue default eclairage](images/emv.400/vue_default_eclairage.jpg)

Résumé 
======

Le micromodule EMV-400 va vous permettre de gérer un moteur
bidirectionnel ou des appareillages électriques. Il permet le contrôle
de 2 sorties Marche/Arrêt ou d'un volet roulant Ouvrir/Stop/Fermer.

De plus, l'interaction avec d'autres protocoles est possible, il est
contrôlable par des interrupteurs et/ou télécommandes de la marque
Edisio, directement depuis jeedom, mais aussi par n'importe quel
émetteur Z-Wave de votre réseau.

Chaque module Edisio sur réseau électrique, à la possibilité de
fonctionner comme un répéteur sans fil avec les autres modules, afin
d'assurer une couverture totale de votre habitation.

Pour finir, chaque module peut être utilisé en mode déporté, c'est très
pratique car cela permet d'associer un émetteur sans devoir accéder au
recepteur.

> **wichtig**
>
> Le neutre est nécessaire que pour le mode "Volet"

Fonctions 
=========

-   2 sorties par relais alimentées

-   S'installe dans une boite d'encastrement de 55mm ou directement dans
    les caissons des ouvrants

-   Mode d'usage: Marche/Arrêt, Ouvrir/Stop/Fermer

-   Compatible avec les moteurs à fin de course électronique et
    mécanique

-   Mode déporté

-   Fonction minuterie: Mode Marche/Arrêt: 30min ou 60min

-   Réplique du signal (répéteur)

-   Micromodule bidirectionnel

-   Niveau de batterie faible de l'émetteur

-   Petit, discret et esthétique

-   Facilité d'utilisation et d'Installation

Caractéristiques techniques 
===========================

-   Type de module: Récepteur Edisio

-   Alimentation: 230VAC, 50Hz

-   Câblage: 4 fils, 2 pour les commandes et 2 pour l'alimentation

-   fréquence: 868,3 MHz

-   Sorties alimentées: 2 relais

-   Puissance maximum: 2A par sortie

-   Charge résistive: 460W

-   Autres charges: 100W

-   Température de fonctionnement: -10°C +45°C

-   Dimensions: 48x46x26mm

-   Degré de protection: IP20

Données du module 
=================

-   Marque : Edisio Smart Home

-   Name : EMV-400

Configuration générale 
======================

Pour configurer le plugin Edisio et associer un module à jeedom,
référez-vous à cette
[documentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/fr_FR/edisio.html).

> **wichtig**
>
> Pour que jeedom crée automatiquement vos modules émetteurs, n'oubliez
> pas d'activer l'option dans la configuration du plugin.

> **wichtig**
>
> A l'inverse, les recepteurs Edisio sont à créer manuellement dans
> jeedom.

DIP Switch et bouton "R" : 
--------------------------

![bouton association](images/emv.400/bouton_association.jpg)

-   Le DIP Switch va vous permettre de régler les paramètres
    (Répéteur/Mode volet/éclairage/Minuterie) du module:

![dip switch](images/emv.400/dip_switch.jpg)

> **Notiz**
>
> Afin d'éviter des redondances inutiles, ne jamais activer le mode
> "Répéteur" sur tous les recepteurs, 5 recepteurs au maximum par
> Installation.

-   Le bouton "R", va permettre d'associer un émetteur au recepteur,
    d'activer ou désactiver la fonction minuterie et d'activer le mode
    déporté :

![bouton r](images/emv.400/bouton_r.jpg)

> **Notiz**
>
> Appuyer R 3x permet d'activer le mode déporté.

Diagramme de fonctionnement 
---------------------------

Suivant si votre émetteur est configuré en mode "1 touche" ou "2
touches", voici le fonctionnement du module:

> **Notiz**
>
> Référez-vous à la documentation du fabricant, afin de pouvoir
> configurer votre émetteur.

![diagramme](images/emv.400/diagramme.jpg)

Fonction minuterie 
------------------

La fonction minuterie permet l'extinction automatique des relais au bout
de 30 ou 60 minutes.

-   activate : Appuyer 4x "R" du recepteur, confirmation par un simple
    bip sonore en continu

-   Désactiver: Appuyer 5x "R" du recepteur , confirmation par 3 simples
    bip sonores.

-   Minuterie de 30 minutes: DIP Switch 3 en haut

-   Minuterie de 60 minutes: DIP Switch 3 en bas

Le mode "Eclairage" 
===================

Le mode "Eclairage" permet de piloter 2 appareils électriques à
distance.

> **wichtig**
>
> Le neutre n'est pas nécessaire

Configuration et raccordements électriques : 
--------------------------------------------

![mode eclairage](images/emv.400/mode_eclairage.jpg)

> **wichtig**
>
> Afin que le module soit en mode "Eclairage" le DIP Switch 2 doit être
> en haut

> **wichtig**
>
> NE JAMAIS BRANCHER SOUS TENSION

Création du module dans jeedom 
------------------------------

Pour associer un module recepteur Edisio à jeedom, il faut créer
manuellement un équipement.

![ajout equip](images/emv.400/ajout_equip.jpg)

Une fois, votre équipement créé, vous devriez obtenir ceci :

![crea equip](images/emv.400/crea_equip.jpg)

> **Notiz**
>
> Pensez à activer votre nouvel équipement.

Dans la liste d'équipements, à droite, sélectionner "Micro-module
lumière" :

![infos equip eclairage](images/emv.400/infos_equip_eclairage.jpg)

Befehle 
---------

Une fois votre équipement sauvegardé, vous devriez obtenir les commandes
associées au module :

![Befehle](images/emv.400/commande_eclairage.jpg)

Voici la liste des commandes :

-   ON : C'est la commande qui permet d'activer le relais 1

-   OFF : C'est la commande qui permet de désactiver le relais 1

-   ON 2 : C'est la commande qui permet d'activer le relais 2

-   OFF 2: C'est la commande qui permet de désactiver le relais 2

-   E : C'est la commande qui permet de se servir du mode déporté

> **wichtig**
>
> Le retour d'état est simulé par jeedom. Par conséquent, si vous
> utilisez un autre émetteur, jeedom ne pourra pas mettre à jour l'état
> du recepteur.

Informations 
------------

Une fois votre équipement associé à jeedom, diverses informations seront
disponibles :

![Befehle](images/emv.400/infos_eclairage.jpg)

-   Création : Indique la date à laquelle l'équipement à été créé

-   Communication : Indique la dernière communication enregistrée entre
    jeedom et le micro-module

-   Batterie : Indique l'état de la batterie pour les modules à piles

-   STATUS : Retourne le statut du module

Association du micromodule à jeedom 
===================================

Afin que vous puissiez interagir avec jeedom, comme si c'était un
Emetteur Edisio.

> **Notiz**
>
> Un des gros avantages d'Edisio, c'est qu'un recepteur peut avoir
> plusieurs émetteurs associés

Méthode standard 
----------------

Chaque sortie est à associer à une commande jeedom:

-   Associer la sortie 1 :

    -   Appuyez 1x sur le "R" du recepteur, simple bip sonore (court
        en répétition) signale la programmation de la sortie 1 activée.

    -   Dans les 10 sec, appuyez sur "Tester" de la commande "Ouvrir"
        dans jeedom, un bip sonore en continu signale l'association de
        la sortie 1 à jeedom.

    -   Dans les 10 sec, appuyez à nouveau sur "R" du recepteur, pour
        valider l'association, le bip sonore s'arrête.

-   Associer la sortie 2 :

    -   Appuyez 2x sur le "R" du recepteur, double bip sonore (court
        en répétition) signale la programmation de la sortie 2 activée.

    -   Dans les 10 sec, appuyez sur "Tester" de la commande "Fermer"
        dans jeedom, un bip sonore en continu signale l'association de
        la sortie 2 à jeedom.

    -   Dans les 10 sec, appuyez à nouveau sur "R" du recepteur, pour
        valider l'association, le bip sonore s'arrête.

Méthode déportée 
----------------

Nous en avons parlé au début de cette documentation. Dans le cas, de
modules déjà encastrés, dans les faux plafonds ou même les combles.
Cette méthode permet l'ajout d'un nouvel émetteur sans accéder au "R" du
recepteur.

-   Associer le bouton "R" :

    -   Appuyez 3x sur "R" du recepteur, triple bip sonore (court
        en répétition) signale le mode de programmation activé.

    -   Dans les 10 sec, appuyez sur "Tester" de la commande "E" dans
        jeedom, un bip sonore en continu signale l'association à jeedom.

    -   Dans les 10 sec, appuyez à nouveau sur "E" du recepteur, pour
        valider l'association, le bip sonore s'arrête.

C'est fait, votre jeedom est à présent associé et sa commande "E"
remplace désormais le bouton "R" du recepteur.

-   Associer un nouvel émetteur à un recepteur avec jeedom déjà associé
    :

    -   Sortie 1 :

        -   Appuyez 1x sur "Tester" la commande "E" dans jeedom, simple
            bip sonore (court en répétition) signale la programmation de
            la sortie 1 activée.

        -   Dans les 10 sec, appuyez sur une des touches "C" du nouvel
            émetteur à associer, un bip sonore en continu signale
            l'association de la sortie 1.

        -   Dans les 10 sec, appuyez à nouveau sur "Tester" de la
            commande "E" dans jeedom, pour valider l'association, le bip
            sonore s'arrête.

    -   Sortie 2 :

        -   Appuyez 2x sur "Tester" de la commande "E" dans jeedom,
            double bip sonore (court en répétition) signale la
            programmation de la sortie 2 activée.

        -   Dans les 10 sec, appuyez sur une des touches "C" du nouvel
            émetteur à associer, un bip sonore en continu signale
            l'association de la sortie 2.

        -   Dans les 10 sec, appuyez à nouveau sur "Tester" de la
            commande "E" dans jeedom, pour valider l'association, le bip
            sonore s'arrête.

> **Notiz**
>
> Vous pouvez recommencer autant de fois que vous voulez associer
> d'émetteurs au recepteur

Visuel Alternatif 
=================

![Befehle](images/emv.400/vue_alt_eclairage.jpg)

F.A.Q. 
======

Comment effacer la mémoire du recepteur ?

:   Appuyez et maintenez 10 sec sur le "R", jusqu'au bip sonore continu.

Comment piloter le recepteur via un émetteur Z-Wave?

:   Avec le plugin Scénario de jeedom.

Comment puis-je avoir le même visuel ?

:   Avec le plugin Widgets de jeedom.

**@Jamsta**
