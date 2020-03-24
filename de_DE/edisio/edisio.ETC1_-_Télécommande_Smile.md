-   **Das Modul**

![etc1.module 1](images/etc1/etc1.module-1.jpg)

![etc1.module 2](images/etc1/etc1.module-2.png)

-   **Le visuel Jeedom**

![etc1.vue default](images/etc1/etc1.vue-default.jpg)

Zusammenfassung 
======

Les Fernbedienungs “Smile” ont un canal, elles sont idéales pour la table
de chevet, salle de bain et surtout pour les enfants, car celles-ci sont
très robustes grâce au matériau utilisé. Ultra simples et à la fois
“fun” elles ont pour but d'être pratiques dans l'habitat. Elles existent
en trois coloris différents.

Elles se relient facilement aux différents récepteurs et peuvent donc
contrôler les éclairages Marche/Arrêt, les éclairages variables, les
volets, portails, portes de garage. Disponibles en 3 coloris.

De plus, l'interaction avec d'autres protocoles est possible, il peut
interagir avec les récepteurs de la marque Edisio, avec Jeedom, mais
aussi par n'importe quel récepteur Z-Wave de votre réseau.

Funktionen 
=========

-   Mode d'usage : Eclairage, Variateur

-   Petit, discret et esthétique

-   Facilité d'utilisation et d'installation

Caractéristiques techniques 
===========================

-   Type de module : Emetteur Edisio

-   Alimentation : 3VDC (Pile Lithium CR2032)

-   Canaux : 1

-   Protocole radio : 868,3 MHz

-   Portée en champs libre : 100 M

-   Température de fonctionnement : -10°C +50°C

-   Dimensions : 65x18mm

-   Degré de protection : IP64

![etc1.dimmension](images/etc1/etc1.dimmension.png)

Données du module 
=================

-   Marque : Edisio Smart Home

-   Name : ETC1

-   Référence : P01 / Y01 / L01

Allgemeine Konfiguration 
======================

Pour configurer le plugin Edisio et associer un module à Jeedom,
référez-vous à cette
[documentation](https://www.jeedom.fr/doc/documentation/plugins/edisio/fr_FR/edisio.html).

> **Wichtig**
>
> Pour que Jeedom crée automatiquement vos modules émetteurs, n'oubliez
> pas d'activer l'option dans la configuration du plugin.

Diagramme de fonctionnement 
---------------------------

Voici le fonctionnement de la Fernbedienung :

![etc1.diagramme](images/etc1/etc1.diagramme.jpg)

Remplacement de la pile 
-----------------------

Pour remplacer la pile de votre Fernbedienung, voici la démarche à suivre
:

![etc1.remplacement pile](images/etc1/etc1.remplacement-pile.jpg)

Association de la Fernbedienung à Jeedom 
=======================================

L'association d'un émetteur Edisio, se fait simplement et
automatiquement. Il suffit juste d'appuyer sur la touche de votre
Fernbedienung.

![Befehle](images/etc1/etc1.touche-c.jpg)

Une fois, votre équipement associé, vous devriez obtenir ceci :

![etc1.general](images/etc1/etc1.general.jpg)

Befehle 
---------

Une fois votre équipement créé, vous devriez obtenir les commandes
associées au module :

![Befehle](images/etc1/etc1.commandes.jpg)

Voici la liste des commandes :

-   bt01 : C'est la commande qui permet d'interagir avec le bouton 1

-   Batterie : Indique l'état de la batterie

Information 
------------

Une fois votre équipement associé à Jeedom, diverses informations seront
verfügbar :

![Befehle](images/etc1/etc1.informations.jpg)

-   Schaffung : Indique la date à laquelle l'équipement à était créé

-   Kommunikation : Indique la dernière communication enregistrée entre
    Jeedom et le micro-module

-   Batterie : Indique l'état de la batterie des modules à piles

-   STATUS : Retourne le status du module

Verwendung 
-----------

Une fois que votre Fernbedienung est configurée, vous pouvez avec le
plugin Scénario de Jeedom, interagir avec votre Fernbedienung sur Jeedom
et ses équipements.

> **Notiz**
>
> La Fernbedienung à un retour d'état binaire.

**@Jamsta**
