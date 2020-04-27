Plugin permettant d’accéder aux informations de ses appareils Fitbit
(nombre de pas, calories, distance…​)

Configuration 
=============

Une fois le plugin Fitbit installé, allez sur :

![fitbit 1](../images/fitbit-1.JPG)

Création d’un équipement et association au compte Fitbit 
--------------------------------------------------------

> **Tip**
>
> Comme à beaucoup d’endroit sur Jeedom, mettre la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez à
> partir de votre profils le laisser toujours visible)

Cliquez sur ajouter une personne pour ajouter quelqu’un :

![fitbit 2](../images/fitbit-2.JPG)

Donnez un nom à cette personne (cet équipement) et validez :

![fitbit 3](../images/fitbit-3.JPG)

Vous devez ensuite avoir cette page :

![fitbit 4](../images/fitbit-4.JPG)

> **Important**
>
> Le premier truc à vérifier est "URL de retour". Celle-ci doit être
> validée et accessible de l’extérieure sinon vous ne pourrez pas
> associer Jeedom à votre compte Fitbit. Si ce n’est pas le cas, mettez
> à jour vos paramètres de configuration réseaux dans Général →
> Administration → Configuration puis partie "réseaux", voir
> [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-administration.html.html#administration)

> **Note**
>
> Il est recommandé lors du lien entre Jeedom et Fitbit d’etre connecté
> à Jeedom par l’ip externe

Pour lieer votre compte Fitbit à Jeedom il vous tout d’abord vous creez
un compte developpeur chez Fitbit en allant
[ici](https://dev.fitbit.com/fr), ensuite il vous faut vous connecter
puis faire : "Register an app". Il faut ensuite remplir les informations
:

-   Application Name : Jeedom

-   Description : Jeedom

-   Application Website : <https://jeedom.com>

-   Organization : jeedom

-   Organization Website : <https://jeedom.com>

-   OAuth 2.0 Application Type : Server

-   Callback URL : Il faut mettre celle que jeedom vous donne lors de la
    création d’un équipement Fitbit, attention si vous ne mettez pas la
    bonne la connexion ne pourra se faire

-   Default Access Type : Read & Write

Vous pouvez aussi ajouter une subscription, cela permet à Fitbit de
pousser une mise à jour directement dans Jeedom (au lieu d’attendre que
Jeedom mette à jour les informations) :

-   Default : oui

-   Endpoint URL : celle donnée par jeedom

-   Type : JSON body

-   Subscriber ID : ne rien mettre

Si vous avez mis une subscription il faut (attention a bien faire toute
ces étapes dans l’ordre) :

-   Mettre le numéro de subscription dans l’équipement Fitbit sur Jeedom

-   Mettre le code de subscription dans l’équipement Fitbit sur Jeedom

-   Sauvegarder l’équipement

-   Sur le site Fitbit lancer la vérification de la subscription

-   Puis "Lier à un utilisateur" l’équipement jeedom, comme ci-dessous

> **Important**
>
> Actuellement Fitbit support mal le https, donc si vous êtes en https
> il y peu de chance que cela marche

Cliquez sur "Lier à un utilisateur" pour lier cet équipement à votre
compte Fitbit :

![fitbit 5](../images/fitbit-5.JPG)

Indiquez vos identifiants de votre compte Fitbit, puis validez la
demande d’autorisation :

Si vous obtenez une page blanche ou une erreur, c’est que votre
configuration réseaux n’est pas bonne, sinon vous devez retomber sur
cette page :

![fitbit 6](../images/fitbit-6.JPG)

Pour la subscription il faut en

Configuration 
-------------

Voici les détails de la configuration du plugin :

![fitbit 6](../images/fitbit-6.JPG)

-   Nom de la personne : nom de l’équipement Fitbit

-   Objet parent : nom de l’objet auquel ratacher l’équipement

-   Activer/Visible : permet d’activer l’équipement (ne pas oublier de
    le faire sinon vous n’aurez aucune donnée) et de le rendre visible
    sur le dashboard

-   Pour chaque commande :

    -   Historiser : permet d’historiser la commande

    -   Afficher : permet de la rendre visible ou non sur le dashboard

    -   Avancée (petites roues crantées) : permet d’afficher la
        configuration avancée de la commande

    -   Tester : permet de tester la commande pour voir sa valeur

    -   Supprimer (bouton "-") : pour supprimer la commande

Widget 
------

Voila le widget fitbit :

![fitbit 7](../images/fitbit-7.JPG)
