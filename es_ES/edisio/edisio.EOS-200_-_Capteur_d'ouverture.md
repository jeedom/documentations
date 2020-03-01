-   **Le module**

![eos200.module](images/eos200/eos200.module.jpg)

-   **Le visuel jeedom**

![eos200.vue defaut](images/eos200/eos200.vue-defaut.jpg)

Resumen 
======

Placé sur une porte, fenêtre, porte de garage, tiroir, tous ouvrants, ce
capteur compact et discret vous permettra de connaitre l'état
d'ouverture ou de fermeture de ce dernier.

Suivant l'état, le capteur contrôle l'allumage ou l'extinction de vos
éclairages, fermeture ou ouverture des volets, ou encore le
déclenchement d'une alarme via un scénario.

Le signal est uniquement envoyé à la séparation du capteur de son
élément magnétique. L'indicateur LED intégré signale tous changements
d'état. Niveau de batterie faible signalé par 3 "bip" sonores sur le
recepteur

funciones 
=========

-   Capteur magnétique sans fil alimenté par piles

-   Détecte les ouvertures/fermetures

-   Ultra compact

-   Installation facile et en toute liberté

-   Signal transmis instantanément lors d'une ouverture/fermeture

-   Auto-protection à l'arrachage

-   información sur le niveau de la batterie

-   Montage au mur par des vis ou par un adhésif double face

Caractéristiques techniques 
===========================

-   Type de module : émetteur Edisio

-   Alimentation : 3VDC (Pile Lithium ER14250)

-   fréquence : 868,3 MHz

-   Température de fonctionnement : 0°C +45°C

-   Portée en champs libre : 100M

-   Dimensions : 25x79x19mm

-   Degré de protection : IP20

-   Uso : En intérieur

Données du module 
=================

-   Marque : Edisio Smart Home

-   Nombre : EOS-200

Configuración general 
======================

Pour configurer le plugin Edisio et associer un module à Jeedom,
référez-vous à cette
[documentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/fr_FR/edisio.html).

> **importante**
>
> Pour que Jeedom crée automatiquement vos modules émetteurs, n'oubliez
> pas d'activer l'option dans la configuration du plugin.

Bouton "E" 
----------

Vous trouverez dessous le bouton "E" qui est le bouton d'association du
Capteur de température.

![eos200.bouton e](images/eos200/eos200.bouton-e.jpg)

configuración 
-------------

Par défaut, le capteur est configuré en NO (Normalement Ouvert)

![eos200.nf no](images/eos200/eos200.nf-no.jpg)

> **nota**
>
> Il faudra donc configurer votre capteur, si vous souhaitez avoir un
> widget avec une porte fermée lorsque celle-ci l'est.

![eos200.mode](images/eos200/eos200.mode.jpg)

Association du capteur à Jeedom 
===============================

L'association du capteur de mouvement est simple comme bonjour. Il
suffit d'appuyer sur le bouton "E", situé sous le capteur. Celui-ci sera
reconnu automatiquement par Jeedom. Il suffira de se rendre dans le
plugin Edisio. Vous pourrez ainsi le placer dans un objet, lui donner un
nom et sauvegarder.

Une fois votre équipement associé, vous devriez obtenir ceci :

![eos200.general](images/eos200/eos200.general.jpg)

> **punta**
>
> Afin que le widget soit présent sur le dashboard, pensez à placer
> votre équipement dans un objet.

comandos 
---------

Une fois votre équipement créé, vous devriez obtenir les commandes
associées au module :

![comandos](images/eos200/eos200.commandes.jpg)

Voici la liste des commandes :

-   Porte : C'est la commande qui indique si la porte est ouverte ou
    fermée

-   batería : Indique l'état de la batterie

información 
------------

Une fois votre équipement associé à Jeedom, diverses informations seront
disponible :

![comandos](images/eos200/eos200.informations.jpg)

-   creación : Indique la date à laquelle l'équipement à été créé

-   Communication : Indique la dernière communication enregistrée entre
    Jeedom et le module

-   batería : Indique l'état de la batterie des modules à piles

-   STATUS : Retourne le status du module

Visuel Alternatif 
=================

![eos200.vue alternative](images/eos200/eos200.vue-alternative.jpg)

F.A.Q. 
======

Comment piloter un recepteur Z-Wave?

:   Avec le plugin Scénario de Jeedom.

Comment puis-je avoir le même visuel ?

:   Avec le plugin Widgets de Jeedom.

**@Jamsta**
