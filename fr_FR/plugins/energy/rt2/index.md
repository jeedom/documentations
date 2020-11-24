# Plugin EcoRT2

Ce plugin permet de gérer un IPX 800 v4.

# Configuration du plugin

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci, il n’y a aucune configuration à ce niveau.

> **NOTE**
>
> Vous pouvez voir sur cette page l’état du démon qui surveille l’ecoRT2.

# Configuration des équipements

La configuration des équipements ecoRT2 est accessible à partir du menu plugin puis protocole domotique :

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement ecoRT2** : nom de votre équipement ecoRT2.
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement.
-   **Activer** : permet de rendre votre équipement actif.
-   **Visible** : rend votre équipement visible sur le dashboard.
-   **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories).
-   **IP** : L’ip de l’ecoRT2.
-   **Clef API** : clef api de l’ecoRT2 (par default la clef API est apikey).
-   **Extension** : il faut ici indiquer les extensions présentes sur l’ecoRT2 pour que jeedom puisse les interroger. Exemple pour enOcean il faut mettre ENO (si vous en avez plusieurs, il faut les séparer par des virgules (``,``)). Toutes les extensions sont normalement supportées, pour le code de l’extension à mettre il faut se reporter à la documentation de celle-ci.

Le plugin par defaut ne créé rien. Ce sera à vous de le faire en fonction de votre configuration, mais vous serez guidé.

# Commandes

## Action

Vous avez les types d’action :

-   **On** : permet de mettre à 1 une sortie (ou entrée virtuelle), ou d’affecter une valeur à une entrée analogique (ou compteur).
-   **Off** : permet de mettre à 0 une sortie (ou entrée virtuelle).
-   **Bascule** : permet d’inverser l’état d’une sortie (ou entrée virtuelle).

Vous avez les types d’actionneurs :

-   **Relais**
-   **Sortie virtuelle**
-   **Compteur**
-   **Fil pilote**

> **NOTE**
>
> Certains types d’actionneurs peuvent etre masqués en fonction du type d’action.

Ensuite en fonction du type d’action et de l’actionneur vous avez plusieurs paramètres qui peuvent être :

-   numéro du relais
-   numéro de la sortie virtuelle
-   numéro du compteur et opération (ex +200 ou -100)
-   numéro du fil pilote ainsi que valeur de la commande (0 confort, 1 eco, 2 hors gel, 3 arrêt, 4 confort-1, 5 confort-2)

## Info

Vous avez les types différents :

-   Instantané poste
-   Relais
-   Sortie virtuelle
-   Entrée digitale
-   Compteur
-   EnOcean
-   Index compteur
-   Index tore
-   Index tore consommation
-   Index tore distribution
-   Index télé-information
-   Index poste
-   Index/Jour poste
-   Cumul prix compteur
-   Cumul prix tore
-   Cumul prix tore consommation
-   Cumul prix tore distribution
-   Cumul prix télé-information
-   Cumul prix poste
-   Cumul prix/Jour poste
-   Fil pilote

Pour chaque type jeedom vous demandera le numéro de l’information voulue.
