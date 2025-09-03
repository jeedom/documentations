# Everspring Miniplug Dimmer - AD147-6

 **Le module**

![module](images/everspring.AD147-6/module.jpg)

 **Le visuel Jeedom**

![vuedefaut1](images/everspring.AD147-6/vuedefaut1.jpg)

## Résumé

La Mini Prise Variateur est conçue pour contrôler l’allumage et l’extinction des luminaires et des équipements électriques de votre maison. Elle permet aussi une fonction de variateur qui est compatible uniquement avec les ampoules. Avec une tension de 220 - 240 V, cette Prise Variateur peut supporter une charge de 6 W à 250 W.

La Mini Prise Variateur est un appareil compatible Z-Wave™ qui est destiné pour fonctionner avec tous les réseaux compatibles Z-Wave™. Elle peut être contrôlée par une télécommande, un logiciel PC, ou n’importe quel contrôleur Z-Wave de votre réseau.

## Fonctions

-   Commander une lampe à distance
-   Module prise s’intégrant directement entre une prise électrique et la charge à commander
-   Fonction ON / OFF et Variateur pour piloter des lampes
-   Contrôle de la charge en local via le bouton intégré
-   Technologie Z-Wave Plus
-   Dimensions réduites pour passer presque inaperçue
-   LED de statut sur le bouton intégré
-   Fonction répéteur Z-Wave

## Caractéristiques techniques

-   Type de module : Récepteur Z-Wave
-   Alimentation : 230 V, 50 Hz
-   Consommation : 0.6W
-   Puissance maximum : Charge résistive : 250W, Ampoule à incandesence : 250W, Ampoule Led (non dimmable) : 6W
-   Fréquence : 868,42 Mhz
-   Portée : jusqu’à 70 m à l’extérieur, jusqu’à 30 m dans les bâtiments
-   Affichage: LED sur le bouton
-   Dimensions : Longueur (prise incluse) : 74mm Diamètre : 52mm

## Données du module

-   Marque : Everspring
-   Nom : Miniplug Dimmer
-   Fabricant ID : 96
-   Type Produit : 3
-   Produit ID : 3

## Configuration

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](../plugins/automation%20protocol/openzwave/).

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur son bouton, conformément à sa documentation papier. Il est important de noter que ce module se met directement en inclusion lorsqu’il n’appartient à aucun réseau et qu’il est alimenté

![inclusion](images/everspring.AD147-6/inclusion.jpg)

Une fois inclus vous devriez obtenir ceci :

![Plugin Zwave](images/everspring.AD147-6/information.jpg)

### Commandes

Une fois le module reconnu, les commandes associées au module seront disponibles.

![Commandes](images/everspring.AD147-6/commandes.jpg)

Voici la liste des commandes :

-   Intensité : C’est la commande permettant de régler l’intensité de la prise
-   On : C’est la commande qui permet d’allumer la prise
-   Off : C’est la commande qui permet d’éteindre la prise
-   Etat : C’est la commande qui permet de connaitre le statut de la prise

A noter que sur le dashboard, les infos Etat, ON/OFF, Intensité se retrouvent sur la même icône.

### Configuration du module

Vous pouvez effectuer la configuration du module en fonction de votre installation. Il faut pour cela passer par le bouton "Configuration" du plugin OpenZwave de Jeedom.

![Configuration plugin Zwave](images/plugin/bouton_configuration.jpg)

Vous arriverez sur cette page (après avoir cliqué sur l’onglet Paramètres)

![Config1](images/everspring.AD147-6/config1.jpg)

Détails des paramètres :

-   1 : Ce paramètre déﬁnit la commande de valeur d’état, il n’est pas conseillé de changer cette valeur.
-   2 : Ce paramètre définit le délai d’envoit du changement d’état au groupe 1 (valeur comprise entre 3 et 25 secondes)
-   3 : Ce paramètre permet de définir si la prise reprendra son statut (ON ou OFF) après une reprise de courant.
-   4 : Ce paramètre permet de définir si la prise fontionnera en mode variation ou en mode on/off

### Groupes

Ce module possède 2 groupes d’association.
![Groupe](images/everspring.AD147-6/groupe.jpg)

> **Important**
>
> A minima Jeedom devrait se retrouver dans le groupe 1

## Bon à savoir

### Spécificités

-   Le retour d’état ne peut pas être configuré en dessous de 3   secondes.

## Wakeup

Pas de notion de wakeup sur ce module.
