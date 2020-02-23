Aeotec Keyfob Gen5 
==================

 \

-   **Le module**

 \

![module](../images/aeotec.keyfob-gen5/module.jpg)

 \

-   **Le visuel Jeedom**

 \

![vuedefaut1](../images/aeotec.keyfob-gen5/vuedefaut1.jpg)

 \

Résumé 
------

 \

La télécommande porte-clés Aeon Labs au design moderne et agréable
dispose de 4 boutons permettant de contrôler tout type de dispositifs
Z-Wave tels que des lampes, stores, etc.

Avec ses dimensions très réduites, vous pourrez facilement la mettre
dans votre poche. Facile à utiliser et élégante, elle est équipée d’un
anneau permettant de l’attacher à des clés, ce qui la rend disponible au
moment de quitter la maison ou lors du retour à votre domicile.

Chaque bouton permet de contrôler deux dispositifs ou scènes grâce à la
gestion des appuis courts et longs. Cette télécommande peut être aussi
bien utilisée comme contrôleur principal ou secondaire.

Et parce que la télécommande porte-clés Keyfob Gen5 fait partie de la
gamme Gen5 de Aeotec, elle surpasse tout ce qui existait auparavant.
Elle utilise la dernière puce Z-Wave série 500, offrant une augmentation
de la portée radio de 50% et une vitesse de communication de 250% plus
rapide par rapport aux précédents produits Z-Wave.

 \

Fonctions 
---------

 \

-   Télécommande porte-clés

-   Contrôleur principal ou secondaire

-   Ultra compacte et ultra design

-   4 boutons configurables

-   Gère jusqu’à 8 périphériques/scènes

-   Volet de protection coulissant

-   Fait partie de la gamme Gen5 de Aeon Labs

-   Sécurité de la communication radio via le chiffrement AES-128

-   Intègre la puce Z-Wave série 500

-   Communication 250% plus rapide comparée à des périphériques Z-Wave
    standard

-   Optimisation de l’antenne, portée 100 mètres

-   Facilité d’utilisation et d’installation

 \

Caractéristiques techniques 
---------------------------

 \

-   Type de module : Emetteur Z-Wave

-   Alimentation : 1 pile Lithium 3V CR2450

-   Durée de vie de la batterie : 1 an

-   Fréquence: 868.42 MHz

-   Distance de transmission : 100m en champ libre

-   Température d’utilisation : -10°C à 50°C

-   Dimensions : 55 x 30 x 13mm (L x l x h)

 \

Données du module 
-----------------

 \

-   Marque : Aeotec

-   Nom : ZW088 Key Fob Gen5

-   Fabricant ID : 134

-   Type Produit : 1

-   Produit ID : 88

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
> Pour mettre ce module en mode inclusion il faut appuyer sur le bouton
> LEARN, conformément à sa documentation papier.

 \

![inclusion](../images/aeotec.keyfob-gen5/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](../images/aeotec.keyfob-gen5/information.jpg)

 \

### Commandes 

 \

Une fois le module reconnu, les commandes associées au module seront
disponibles.

 \

![Commandes](../images/aeotec.keyfob-gen5/commandes.jpg)

 \

Voici la liste des commandes :

 \

-   Boutons : c’est la commande qui remontera le bouton appuyé

1 : Bouton 1 appui court

2 : Bouton 1 appui long

3 : Bouton 2 appuis courts

4 : Bouton 2 appuis longs

5 : Bouton 3 appuis courts

6 : Bouton 3 appuis longs

7 : Bouton 4 appuis courts

8 : Bouton 4 appuis longs

 \

### Configuration du module 

 \

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après
> l’inclusion.

 \

Ensuite si vous voulez effectuer la configuration du module en fonction
de votre installation, il faut pour cela passer par la bouton
"Configuration" du plugin OpenZwave de Jeedom.

 \

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l’onglet
Paramètres)

 \

![Config1](../images/aeotec.keyfob-gen5/config1.jpg)

 \

Détails des paramètres :

 \

-   250: mode de fonctionnement de la télécommande (absolument mettre
    Scene pour s’en servir en télécommande)

-   255 : permet de resetter d’usine le Keyfob

 \

### Groupes 

 \

Ce module possède deux groupes d’association, le premier est le seul
indispensable.

 \

![Groupe](../images/aeotec.keyfob-gen5/groupe.jpg)

 \

Bon à savoir 
------------

 \

### Spécificités 

Pour utiliser ce module en télécommande il faut procéder comme suit :

-   1 : Inclure la télécommande

-   2 : Réveiller la télécommande

-   3 : Changer le paramètre 250 à Scene

-   4 : Réveiller la télécommande et s’assurer que le changement à été
    pris en compte

-   5 : Changer le mode de focntionnement de la télécommande en restant
    appuyer sur les deux boutons au dos pendant 3 secondes.

Wakeup 
------

 \

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   rester appuyé 3 secondes sur le bouton LEARN

 \

F.A.Q. 
------

 \

Ce module se réveille en restant appuyer 3 secondes sur le bouton LEARN.

 \

Ce module est un module sur batterie, la nouvelle configuration ne sera
prise en compte que si vous réveillez la télécommande.

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

**@sarakha63**
