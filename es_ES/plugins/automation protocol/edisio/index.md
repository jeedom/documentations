Plugin permettant d’utiliser le protocole Edisio avec Jeedom

Configuration 
=============

Le plugin edisio permet de dialoguer avec l’ensemble des périphériques
compatibles avec le module edisio USB.

Configuration du plugin 
-----------------------

Après téléchargement du plugin, il vous suffit de l’activer et de mettre
le port sur auto. Après sauvegarde le démon devrait se lancer. Le plugin
est déjà configuré par défaut ; vous n’avez donc rien à faire de plus.
Cependant vous pouvez modifier cette configuration. Voici le détail
(certains paramètres peuvent n’être visibles qu’en mode expert) :

![edisio1](../images/edisio1.JPG)

-   **Dépendances** : cette partie vous donne le statut des dépendances,
    si elles ne sont pas OK vous pouvez soit les lancer à la main soit
    attendre 5min, Jeedom les lancera de lui même.

-   **Démon** : cette partie vous donne le statut du démon (aussi bien
    en local qu’en déporté), si il n’est pas OK vous pouvez soit le
    lancer à la main soit attendre 5min, Jeedom le lancera de lui même.

> **Tip**
>
> Si vous êtes en mode déporté, le démon local peut être arrêté, c’est
> tout à fait normal.

-   **Configuration** : cette partie permet de configurer les paramètres
    généraux du plugin.

    -   *Bannir les IDs suivants* : permet de donner une liste
        d’identifiants edisio à Jeedom pour que celui-ci ne crée pas les
        équipements correspondants. Les identifiants doivent être
        séparés par des espaces. Exemple : "1356AD87 DB54AF".

-   **Démon local**ou**Démon XXX** : paramètres de configuration
    locale (ou déportée, en fonction de l’intitulé) du démon.

    -   *Port edisio* : le port USB sur lequel votre interface edisio
        est connectée.

        > **Tip**
        >
        > Si vous ne savez pas quel port USB est utilisé, vous pouvez
        > simplement indiquer "Auto".

    -   *Port socket interne (modification dangereuse, doit être la même
        valeur sur tous les Jeedom déportés edisio)* : permet de
        modifier le port de communication interne du démon.

> **Important**
>
> A ne changer que si vous savez ce que vous faites.

Pour lancer le démon en debug il suffit au niveau de la configuration
des logs du plugin de mettre en debug, de sauvegarder et de relancer le
démon.

> **Important**
>
> Dans ce mode, le démon est très bavard. Une fois le debug terminé, il
> ne faut pas oublier de cliquer sur "Redémarrer" pour sortir du mode
> debug !! :

Configuration des équipements 
-----------------------------

La configuration des équipements edisio est accessible à partir du menu
plugin :

![edisio10](../images/edisio10.JPG)

Voilà à quoi ressemble la page du plugin edisio (ici avec déjà 4
équipements) :

![edisio2](../images/edisio2.JPG)

> **Tip**
>
> Comme à beaucoup d’endroit sur Jeedom, mettre la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez à
> partir de votre profils le laisser toujours visible)

Vous retrouvez ici :

-   un bouton pour créer un équipement manuellement

-   un bouton pour passer en inclusion

-   un bouton pour afficher la configuration du plugin

-   un bouton qui vous donne l’état de santé de tous vos équipements
    Edisio

-   enfin en dessous vous retrouvez la liste de vos équipements

Une fois que vous cliquez sur l’un d’eux, vous obtenez :

![edisio3](../images/edisio3.JPG)

Aquí encontrará toda la configuración de su dispositivo:

-   Nom de l’équipement edisio : nom de votre équipement edisio

-   ID : l’id de votre sonde (à ne modifier qu’en connaissance de cause)

-   Activer : permet de rendre votre équipement actif

-   Visible : le rend visible sur le dashboard

-   Objet parent : indique l’objet parent auquel appartient l’équipement

-   Catégorie : les catégories de l’équipement (il peut appartenir à
    plusieurs catégories)

-   Ne pas vérifier la batterie : indique à Jeedom de ne pas vous
    alerter si l’équipement envoie une trame de batterie faible
    (certains modules ne gèrent pas correctement cette info et génèrent
    de fausses alertes)

-   Délai maximum autorisé entre 2 messages (min) : le délai maximum
    autorisé entre 2 messages avant que Jeedom ne déclare l’équipement
    en "timeout". Attention ce paramètre nécessite d’avoir configuré
    l’option "Forcer la répétition des messages toutes les (min)" et il
    doit être supérieur à cette valeur

-   Commentaire : vous permet de mettre des commentaires sur
    l’équipement (ex : pile changée le XX/XX/XXXX)

-   Equipement : permet de définir le modèle de votre équipement (à ne
    configurer que pour une création manuelle d’un équipement, en
    automatique Jeedom configure ce champ tout seul)

-   Création : vous donne la date de création de l’équipement

-   Communication : vous donne la date de dernière communication avec
    l’équipement (peut être vide dans le cas d’une prise par exemple)

-   Batterie : niveau de batterie de l’équipement

-   Statut : statut de l’équipement (peut être timeout par exemple)

A continuación encontrará la lista de ordenes :

-   le nom affiché sur le dashboard

-   le type et le sous-type

-   la clef de l’information si c’est une info, ou alors le code
    hexadécimal à envoyer lorsque c’est une action. Les configurations
    permettent de remplir ces champs automatiquement (il faut créer
    l’équipement, choisir la configuration puis sauvegarder)

-   "Valeur de retour d’état" et "Durée avant retour d’état" : permet
    d’indiquer à Jeedom qu’après un changement sur l’information sa
    valeur doit revenir à Y, X min après le changement. Exemple : dans
    le cas d’un détecteur de présence qui n’émet que lors d’une
    détection de présence, il est utile de mettre par exemple 0 en
    valeur et 4 en durée, pour que 4 min après une détection de
    mouvement (et s’il n’y a en pas eu de nouvelles depuis) Jeedom
    remette la valeur de l’information à 0 (plus de mouvement détecté)

-   historiser : permet d’historiser la donnée

-   afficher : permet d’afficher la donnée sur le dashboard

-   évènement : dans le cas du edisio cette case doit toujours être
    cochée car on ne peut pas interroger un module edisio

-   unité : unité de la donnée (peut être vide)

-   min/max : bornes de la donnée (peuvent être vides)

-   configuration avancée (petites roues crantées) : permet d’afficher
    la configuration avancée de la commande (méthode
    d’historisation, widget…​)

-   Prueba: prueba el comando

-   supprimer (signe -) : permet de supprimer la commande

Opération sur les équipements edisio 
------------------------------------

En haut de votre page de configuration pour l’équipement, vous avez 3
boutons qui permettent de réaliser certaines options :

-   Dupliquer : permet de dupliquer l’équipement

-   configurer (petites roues crantées) : même principe que pour les
    commandes, ça permet une configuration avancée de l’équipement

Inclusion d’un équipement edisio 
--------------------------------

L’ajout d’un équipement Edisio est très simple, il faut juste passer en
mode inclusion et attendre que l’équipement envoi un message, quand ca
sera le cas Jeedom vous indiquera qu’il a inclus un nouvel équipement et
creera celui-ci automatiquement.

Liste des modules compatible 
============================

Vous trouverez la liste des modules compatibles
[ici](https://jeedom.fr/doc/documentation/edisio-modules/fr_FR/doc-edisio-modules-equipement.compatible.html)

Unresolved directive in index.asciidoc - include::faq.asciidoc\[\]
