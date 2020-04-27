Ce plugin permet la gestion de liens et d’évènements sur l’interface de
Jeedom. Vous pourrez par exemple avec celui-ci créer une commande qui
ouvre une modale (fenêtre de dialogue) avec une vue contenant vos
caméras. Cela permet par exemple lorsque quelqu’un sonne chez vous
d’afficher directement la caméra de l’entrée sur votre Jeedom.

Configuration du plugin 
=======================

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci,
il n’y a aucune configuration à ce niveau.

![clink1](../images/clink1.PNG)

Configuration des équipements 
=============================

La configuration des équipements Clink est accessible à partir du menu
Plugins :

![clink2](../images/clink2.PNG)

Voilà à quoi ressemble la page du plugin Clink (ici avec déjà 1
équipement) :

![clink3](../images/clink3.PNG)

> **Tip**
>
> Comme à beaucoup d’endroits sur Jeedom, placer la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez, à
> partir de votre profil, le laisser toujours visible).

Une fois que vous cliquez sur l’un d’eux, vous obtenez :

![clink4](../images/clink4.PNG)

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement Clink** : nom de votre équipement Clink,

-   **Objet parent** : indique l’objet parent auquel appartient
    l’équipement,

-   **Activer** : permet de rendre votre équipement actif,

-   **Visible** : rend votre équipement visible sur le dashboard.

En-dessous vous retrouvez la liste des commandes :

-   **Nom** : le nom affiché sur le dashboard,

-   **Mode** : le mode d’affichage de l’élément (dans une modale, dans
    une nouvelle fenêtre ou dans la fenêtre courante)

    > **Note**
    >
    > En mobile "nouvelle fenêtre" et "fenêtre courante" font la même
    > chose : ouverture du lien dans la fenêtre courante

-   **Type** : type d’élément à ouvrir (vue, design, panel ou URL)

-   **Nom** : option en fonction de l’élément choisi à ouvrir

-   **Filtre utilisateur** : permet de filtrer pour n’ouvrir l’élément
    que si c’est cet utilisateur qui est connecté

-   **Filtre page** : permet de filtrer pour n’ouvrir l’élément que si
    on est sur la page mentionnée

    > **Note**
    >
    > En version mobile cette option ne fait rien

-   **Filtre interface** : permet de filtrer pour n’ouvrir l’élément
    qu’en version mobile/desktop ou sur les 2

-   **Afficher** : permet d’afficher la donnée sur le dashboard

-   **Tester** : permet de tester la commande,

-   **Supprimer** (signe -) : permet de supprimer la commande.

> **Important**
>
> Il ne faut surtout pas ouvrir la même vue sur elle-même, idem pour les
> designs !

> **Important**
>
> En mobile l’ouverture d’une URL ne peut pas être faite dans une modale
> comme pour les designs.

> **Important**
>
> Toutes les URLs ne peuvent être ouvertes en modale, cela dépend du
> site (ex : google.fr ne peut être ouvert dans une modale). Attention
> aussi si vous êtes en https, il faut absolument que le site à ouvrir
> dans la modale soit en https.
