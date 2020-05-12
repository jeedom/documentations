# Plugin Energie

Ce plugin permet d’établir un bilan énergétique de son habitation en fournissant un panel donnant les postes de consommation

# Configuration du plugin 

Après téléchargement du plugin, il vous faut l’activer. Vous avez ensuite accès à la configuration de base du plugin :

![energy1](./images/energy1.PNG)

Vous retrouvez ici la configuration de base :

-   **Tarification** : cette partie permet de configurer les paramètres de tarification
    -   **Devise** : permet de configurer votre devise (par défaut €)
-   **Eau** : configuration de la gestion de l’eau
    -   **Activer** : active ou non la gestion de l’eau
    -   **Tarif** : tarif de l’eau par L
-   **Gaz** : configuration de la gestion du gaz
    -   **Activer** : active ou non la gestion du gaz
    -   **Tarif** : tarif du gaz par kWh
-   **Electricité** : configuration de la gestion de l’électricité
    -   **Activer** : active ou non la gestion de l’électricité
    -   **Tarification** : choix du mode de tarification, fixe ou heures pleines/heures creuses
    -   **Tarif** : tarif de l’électricité par kWh

Si vous êtes en heures pleines/heures creuses :

![energy2](./images/energy2.PNG)

Vous pouvez ici entrer le tarif en heures pleines et heures creuses ainsi que les heures de bascule (3 zones maximum).

> **Tip**
>
> Il est possible en mode tarification fixe de mettre des formules de calcul, par exemple 0.05 + 0.05 \* \#\[ma\]\[commande\]\[mode\]\#, ainsi si \#\[ma\]\[commande\]\[mode\]\# vaut 1 alors le prix sera de 0.1 sinon de 0.05. Cela permet si vous avez l’information de la tarification en cours de gérer tous les cas.

# Configuration des équipements 

La configuration des équipements "énergie" est accessible à partir du menu plugin :

![energy3](./images/energy3.PNG)

Voilà à quoi ressemble la page du plugin énergie (ici avec déjà 5 équipements) :

![energy4](./images/energy4.PNG)

Une fois que vous cliquez sur l’un des équipements, vous obtenez :

![energy5](./images/energy5.PNG)

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement** : nom de votre équipement énergie
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement
-   **Activer** : permet de rendre votre équipement actif
-   **Visible** : le rend visible sur le dashboard
-   **Type** : permet de choisir le type "d’énergie" (électricité, eau ou gaz)
-   **Ce compteur donne un total** : indique à jeedom que cet équipement donne le total de la consommation pour l’objet affecté. Par exemple si vous avez un compteur téléinfo ou un compteur d’eau qui vous remonte la consommation totale de votre domocile, vous cochez cette case et affectez le compteur à l’objet qui représente le domocile (et donc certainement l’objet père de tous les autres).
-   **Historique** : permet d’effacer totalement l’historique de votre compteur. Il est recommandé de faire cela après configuration de l’équipement pour éviter de repartir avec l’historique de consommation des modules et donc d’avoir la première journée totalement faussée.

> **Important**
>
> Attention lorsque un équipement energie est en total il n’apparaitra que sur l’objet auxquel il appartient et non sur ses parents

Sur la droite vous retrouvez aussi des sélecteurs qui vous permettent de choisir ce qu’il faut afficher sur le widget.

En dessous vous retrouvez la configuration de l’équipement. Un bouton à droite permet d’en ajouter :

-   **Catégorie** : la catégorie de la consommation de l’équipement (les catégories sont fixes, vous ne pouvez pas en ajouter). En mode compteur total, il n’y a que la catégorie Autre de possible.
-   **Puissance** : comment avoir la puissance de cet équipement ? c’est ici que vous pouvez simuler une consommation. Par exemple ici il y a \#\[Chambre\]\[Lumière\]\[Etat\]\# \* 0.6 : l’état de ma lumière varie de 0 à 100, donc quand ma lampe est allumée j’ai bien 100 \* 0.6 = 60 soit une puissance de 60 watt qui correspond à la puissance de mon ampoule.
-   **Consommation** : commande donnant la consommation de l’équipement, si vous laissez vide et que le champs puissance est rempli alors le plugin va automatiquement calculer la consommation.
-   **Supprimer** (petit bouton moins) : pour supprimer la ligne.

# Compteur d’eau ou de gaz 

![energy6](./images/energy6.PNG)

Deux possibilités :

-   soit vous avez une commande qui vous indique la consommation, et là     vous avez juste à indiquer la consommation.
-   soit il est aussi possible d’indiquer les index à la main puis     de sauvegarder.

# Téléinfo 

Pour la téléinfo, il faut juste mettre les différents index de votre téléinfo dans le champs consommation de l’équipement (soit tous dans le même champ avec des + au milieu, soit créer un champ par index).

# Panel 

Une fois vos différents équipements énergie configurés, vous avez un panel accessible à partir du menu accueil :

![energy7](./images/energy7.PNG)

Voilà le résultat :

![energy8](./images/energy8.PNG)

Ici vous pouvez choisir, la période d’affichage du panel, le groupement des données (jour ou mois) et le type d’énergie que vous voulez afficher (en fonction des données actives ou non).

Le panel est aussi accessible en mobile par Plugins → Energie :

![energy9](./images/energy9.PNG)

Une fois dessus vous obtenez :

![energy10](./images/energy10.PNG)

# FAQ 

**Mes compteurs ne semblent pas être en temps réel.**

Le plugin énergie n’est pas là pour faire du temps réel, il fait un relevé toutes les 15 min. Donc dans le cas de la simulation de
consommation, il faut 15 min pour qu’un changement d’état soit pris en compte, si votre lampe ne reste allumée que 10 min sa
consommation ne sera donc pas pris en compte.


