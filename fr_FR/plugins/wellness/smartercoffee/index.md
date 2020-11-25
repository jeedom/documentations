# Plugin Smartcoffee

# Description

Ce plugin permet de gérer vos cafetières de Smarter (uniquement V1, pas la version compatible ifttt).

# Configuration du plugin

Après installation du plugin, il suffit de l’activer. Si les dépendances sont OK, renseignez l'ip de votre cafetière et sauvegarder. Logiquement l'équipement se créera tout seul.

# Configuration des équipements

La configuration des équipements Smarter Coffee est accessible à partir du menu plugins puis Confort. Vous retrouvez ici :

-   un bouton pour afficher la configuration du plugin
-   un bouton qui vous donne une vue d'ensemble de tous vos équipements
-   enfin en dessous vous retrouvez la liste de vos équipements

En cliquant sur un de vos équipements vous arrivez sur la page configuration de votre équipement comprenant 2 onglets, équipement et commandes.

-   **Onglet Equipement** :
-   **Nom de l’équipement** : nom de votre équipement.
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement.
-   **Catégorie** : pour sélectionner la catégorie de l'équipement.
-   **Activer** : permet de rendre votre équipement actif.
-   **Visible** : le rend visible sur le dashboard.
-   **Onglet Commandes** :
    -  Ici vous retrouverez l'ensemble des commandes (certaines étant dédiées uniquement au scénario).

#  Pour la commande Faire couler mode perso pour scénario :

Le champ force doit contenir une valeur de 1 à 3 qui correspond à la force L'autre champ quand à lui a besoin de  :
- Nombre de tasses (1-12);
- ``g`` pour grains ou ``f`` pour filtre;
- durée de chauffe

>**EXEMPLE**
> ``12;f;30``
