Plugin permettant de créer un agenda et de déclencher des actions
(commande ou scénario).

Plugin configuration
=======================

La configuration est très simple, après téléchargement du plugin, il
vous suffit de l'activer et c'est tout.

Equipment configuration
=============================

La configuration des équipements Agenda est accessible à partir du menu
Plugins puis Organisation.

Une fois dessus vous retrouvez alors la liste de vos Agenda.

Here you find all the configuration of your equipment :

-   **Name of equipment** : nom de votre agenda.

-   **Parent object** : indique l'objet parent auquel
    appartient l'équipement.

-   **Category** : equipment categories (it may belong to
    plusieurs catégories).

-   **Activate** : permet de rendre votre équipement actif.

-   **Visible** : le rend visible sur le dashboard.

-   **Widget, number of days** : définit le nombre de jours
    d'événements à afficher sur le widget.

-   **Maximum number of events** : défini le nombre maximum
    d'événements à afficher sur le dashboard.

-   **Ne pas afficher le statut et les commandes
    d'activation/désactivation** : permet de masquer le statut de
    l'agenda ainsi que les commandes d'activation ou non de celui-ci.

-   **List of calendar events** : affichage en dessous de la
    liste de tous les événements de l'agenda (un clic dessus permet
    d'éditer l'événement directement).

-   **Add event** : permet d'ajouter un événement à l'agenda.

-   **Agenda** : Affichage d'une vue type agenda avec tous les
    événements vous pouvez vous déplacer dedans, choisir de l'afficher
    par semaine ou jour, déplacer des événements (glisser/déposer) et un
    clic sur un événement vous ouvrira sa fenêtre d'édition.

Edition d'un événement
======================

Partie la plus importante du plugin, c'est ici que vous allez pouvoir
configurer votre événement.

Event
---------

Ici vous retrouvez :

-   **Name of the event** : Nom de votre événement.

-   **Icon** : permet d'ajouter une icône devant le nom de votre
    équipement (pour ce faire il faut cliquer sur "Choisir une icône").

-   **Color** : permet de choisir la couleur de votre événement (une
    coche vous permet aussi de le rendre transparent).

-   **Text color** : permet de choisir la couleur du texte de
    votre événement.

-   **Ne pas afficher dans le dashboard** : permet de ne pas afficher
    cet événement sur le widget.

Action de début
---------------

Permet de choisir la ou les actions à faire lors du lancement de
l'événement.

Pour ajouter une action il suffit de cliquer sur le bouton + au bout de
la ligne puis vous allez avoir un bouton pour chercher une commande une
fois this one trouvée vous aurez le choix des options si elle en a. Vous
pouvez ajouter autant d'action que vous le voulez.

> **Tip**
>
> Il est possible de modifier l'ordre des actions en maintenant/glissant
> this one


> **Tip**
>
>Il est possible de faire les memes action que dans les scénarios (voir [ici](https://jeedom.github.io/core/fr_FR/scenario))

Action de fin
-------------

Idem à l'action de début mais cette fois ci c'est la ou les action(s) à
effectuer à la fin de l'événement.

Programming
-------------

C'est ici que se trouve toute la gestion temporelle de votre événement :

-   **Start** : Date de début de l'événement.

-   **End** : Date de fin de l'événement.

-   **All day** : permet de définir l'événement sur toute
    la journée.

-   **Include by another calendar** : Permet d'inclure un autre
    événement dans votre événement courant. Par exemple, si vous avez un
    événement A répété tous les lundis, et que vous incluez cet
    événement A dans votre événement courant, alors celui-ci sera
    automatiquement répété tous les lundis.

-   **Inclure** : permet de forcer une date d'occurence, vous pouvez en
    mettre plusieurs en les séparant par des , (virgules), vous pouvez
    aussi définir une plage avec des : (deux points).

-   **Répété** : permet de dire que votre événement est répété (si cette
    case n'est pas cochée vous n'aurez pas les options qui suivent).

-   **Repeat mode** : permet de spécifier le mode de répétition,
    soit simple : tous les jours, tous les X jours…​ ou répétition tous
    les 1er, 2ème…​ pour répéter un événement tous les 3ème lundis du
    mois For example (les options qui suivent peuvent être différentes
    en fonction de ce choix).

-   **Repeat every** : \[mode répétition simple seulement\] permet
    de définir la fréquence de répétition de l'événement (ex tous les 3
    jours ou tous les 2 mois…​).

-   **The** : \[mode répétition le premier, le deuxième…​ seulement\] :
    permet de choisir une répetition tous les 2ème lundis du mois
    For example.

-   **Only the** : permet de restreindre la répétition à certains
    jours de la semaine.

-   **Restriction** : permet de restreindre l'événement seulement les
    jours fériés ou d'exclure les jours fériés.

-   **Until** : donne la date de fin d'occurence de l'événement.

-   **Exclude by another calendar** : permet de mettre en exclusion cet
    événement en fonction d'un autre agenda (pour éviter For example que
    2 événements contradictoires se retrouvent ensemble).

-   **Exclure** : idem que "Inclure" mais cette fois pour exclure
    des dates.

> **NOTE**
>
> Thes jours feriés sont ceux Francais et uniquement les Francais cela ne
> marche donc pas pour les autres pays

> **NOTE**
>
> En haut à droite vous avez 3 boutons, un pour supprimer, un pour
> sauvegarder et un pour dupliquer. Lors du clic sur ce dernier jeedom
> vous affiche l'evenement resultant de la duplication pour que vous
> puissiez changer le nom For example.Il ne faut donc pas oublier de
> sauvegarder suite à un clic sur le bouton dupliquer

Agenda, commandes et scénario
=============================

Un agenda possède les commandes :

-   **Running** : donne la liste des événements en cours séparés par
    des virgules, pour l'utiliser dans un scénario le plus simple et
    d'utiliser l'opérateur contient ( matches ) ou ne contient pas ( not
    matches ), For example *\[Appartement\]\[test\]\[Running\]* matches
    "/Anniv/", sera vrai si dans la liste des événements en cours il y a
    un "Anniv"

- **Add a date** : permet depuis un scénario d'ajouter une date à un évenement (attention si vous changez le nom de l'évenement il vous faudra le corriger dans le scénario aussi). Vous pouvez mettre plusieurs évenement séparé par des ,

- **Remove a date** : permet depuis un scénario d'exclure une date à un évenement (attention si vous changez le nom de l'évenement il vous faudra le corriger dans le scénario aussi). Vous pouvez mettre plusieurs évenement séparé par des ,

> **NOTE**
>
> Il est possible d'utiliser la commande "Running" comme déclencheur
> dans un scénario, chaque mise à jour de l'information déclenchera
> l'éxecution du scénario. Cependant, Il est préférable d'utiliser cette
> commande dans un scénario programmé avec un test sur la valeur.
