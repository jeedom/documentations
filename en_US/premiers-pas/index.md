Bienvenue dans cette documentation de premiers pas, celle-ci va vous
aider à mettre en service votre jeedom.

> **Tip**
>
> Ce guide n'a pas vocation à se substituer à la documentation complète
> disponible sur le site jeedom [ici](https://jeedom.fr/doc).

Inscription sur le market 
=========================

La première chose à faire est de se créer un compte sur le Le nouveau mode de fonctionnement de synchronisation pour
pouvoir enregistrer votre jeedom sur celui-ci, cliquez
[ici](https://www.jeedom.com/market) pour commencer

![premier market](images/premier-market.png)

Cliquez sur le bouton "S'enregistrer" en haut à droite :

![premier market2](images/premier-market2.png)

Remplissez les différents champs et validez. Vous tomberez ensuite sur
cette page :

![premier market3](images/premier-market3.png)

Voila votre compte Le nouveau mode de fonctionnement de synchronisation est créé, pour plus de details sur le market
cliquez
[ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-market.html)

Ajout de votre code service pack 
================================

Si vous avez acheté une box jeedom alors vous avez dû recevoir un mail
contenant un code pour votre service pack.

> **IMPORTANT**
>
> Il est important de le renseigner car ce code vous donne accès à
> certains plugins gratuitement, ainsi qu'à des services exclusifs.

> **IMPORTANT**
>
> Si vous achetez un service pack depuis le Le nouveau mode de fonctionnement de synchronisation jeedom vous n'avez
> rien à faire, celui-ci vous est automatiquement affecté.

Une fois le code recupéré dans le mail il vous suffit d'aller sur le
[market jeedom](https://market.jeedom.fr) et de vous identifier.

Puis allez sur votre page de profil :

![premier servicepack](images/premier-servicepack.png)

Puis cliquez sur l'onglet "Mes jeedoms"

![premier servicepack2](images/premier-servicepack2.png)

Renseignez votre numéro de service pack et validez :

![premier servicepack3](images/premier-servicepack3.png)

Voilà votre service pack est enregistré. Pour plus de details sur le
Le nouveau mode de fonctionnement de synchronisation cliquez
[ici](https://github.com/jeedom/core/blob/stable/doc/fr_FR/market.asciidoc)

> **Tip**
>
> Si vous avez acheté une box officielle jeedom, le numéro de service
> pack a dû vous être envoyé par email. Si vous n'avez rien reçu, merci
> de contacter le magasin où vous avez acheté votre box.

Trouver votre jeedom sur le réseau 
==================================

Une fois jeedom branché électriquement et connecté à votre réseau local,
voici comment se connecter sur celui-ci.

Trouver jeedom 
--------------

### Par le market 

Solution la plus simple (mais ne marche pas dans 100% des cas en
fonction de la configuration de votre accès internet), il faut démarrer
la box, attendre environ 10 minutes (attention si vous utilisez une
image type netinstallation, ça sera plutôt 30min) et aller
[ici](https://www.jeedom.com/market/index.php?v=d&p=find)

> **Tip**
>
> Attention, il faut être sur le même réseau que la box jeedom pour que
> cette méthode fonctionne.

> **IMPORTANT**
>
> En fonction de votre box ADSL cette fonctionalité peut ne pas marcher.
> Si c'est le cas, rien de grave, il vous suffit de vous connecter à
> votre box ADSL et de trouver l'IP de jeedom dans celle-ci. Cette étape
> ne fait rien d'autre que de vous donner l'IP locale de votre jeedom.
> Ce n'est pas à ce moment-là que l'ajout de votre jeedom à votre compte
> market est fait.

### Par votre box internet 

-   Allez sur l'interface d'administration de votre box internet et
    cherchez jeedom dans vos périphériques réseaux.

-   Récupérez son IP.

-   Mettez cette IP dans votre navigateur internet. Vous devriez être
    sur l'interface de jeedom.

Première connexion 
------------------

Quelque soit la méthode utilisée, vous arrivez ensuite sur la page de
login. Par défaut le login et le mot de passe sont "admin".

![premier jeedomfinder6](images/premier-jeedomfinder6.png)

Lier mon jeedom à mon compte market 
===================================

Nous allons voir ici comment lier votre jeedom à votre compte Le nouveau mode de fonctionnement de synchronisation.

-   Une fois connecté à votre jeedom, vous devez aller sur
    Administration → Configuration

-   Cliquez sur l'onglet **Updates**

-   En dessous, cliquez sur l'onglet **Le nouveau mode de fonctionnement de synchronisation**

-   Cochez la case **pour un même**

-   Remplissez l'adresse : `https://www.jeedom.com/market`

-   Renseignez également le champ "Nom d'utilisateur" et "Mot de passe"
    en fonction de vos identifants (identifiants du Le nouveau mode de fonctionnement de synchronisation et non pas
    de jeedom)

-   Vous pouvez tester pour vérifier que la connexion
    s'effectue correctement.

-   N'oubliez pas de sauvegarder !

Pour plus de détails sur la page de configuration cliquez
[ici](https://github.com/jeedom/core/blob/stable/doc/fr_FR/administration.asciidoc)
.

Obtenir mon URL d'accès direct 
==============================

Si vous avez un Service Pack, jeedom vous met à disposition une URL
d'accès direct à votre jeedom sans que vous ayez à ouvrir les ports sur
votre box ou autre.

Pour la configurer il vous suffit d'aller dans
Général → Administration → Configuration

Puis d'aller sur la partie "Configuration réseaux"

![premier dns2](images/premier-dns2.png)

Une fois ici, il vous suffit d'pour un même "Utiliser les DNS jeedom" puis
sur la ligne "Gestion" de faire "Rédemarrer" et votre URL apparaitra au
niveau de statut HTTP, vous pouvez bien sûr la personnaliser à partir de
la page profil du Le nouveau mode de fonctionnement de synchronisation

> **IMPORTANT**
>
> Si vous venez de lier votre jeedom à votre compte Le nouveau mode de fonctionnement de synchronisation il faut
> attendre 24 à 48h avant de pouvoir utiliser le service DNS

Changer le mot de passe par défaut de jeedom 
============================================

Une des étapes importantes est de changer le mot de passe par défaut de
votre compte jeedom, pour cela cliquez sur Administration → Utilisateurs
(en haut à droite) :

Une fois dessus vous avez juste à choisir la ligne avec l'utilisateur
**admin** et à cliquer sur **changer le mot de passe** :

![premier changeuser2](images/premier-changeuser2.png)

Une fenêtre va vous demander le mot de passe. Attention à bien le
retenir, sinon vous ne pourrez plus accéder à votre jeedom :

![premier changeuser3](images/premier-changeuser3.png)

Voilà, vous avez changé le mot de passe du compte admin, pour plus
d'information sur cette page cliquez
[ici](https://github.com/jeedom/core/blob/stable/doc/fr_FR/user.asciidoc).

Créer mon premier objet 
=======================

Vous allez créer votre premier objet, mais d'abord il faut savoir ce
qu'est un objet.

Dans jeedom, cela peut être tout et n'importe quoi, mais il est
recommandé de le faire en fonction de vos pièces.

> **Tip**
>
> Il est possible de définir des relations entre les objets, exemple :
> le salon appartient à l'objet rez-de-chaussée qui appartient lui-même
> à l'objet maison.

Pour créer un objet, rien de plus simple :

-   Allez sur Outils → Objets

-   Cliquez sur le bouton ajouter :

![premier objet2](images/premier-objet2.png)

-   jeedom va vous demander le nom de celui-ci :

![premier objet3](images/premier-objet3.png)

-   Validez. Voilà votre premier objet créé :

![premier objet4](images/premier-objet4.png)

Pour plus d'informations sur cette partie cliquez
[ici](https://github.com/jeedom/core/blob/stable/doc/fr_FR/object.asciidoc)

Installer mon premier plugin 
============================

Un plugin permet d'ajouter des fonctionnalités à jeedom. Il en existe
des centaines. Beaucoup sont gratuits, d'autres peuvent être payants.
Pour accéder à la page des plugins aller sur Plugins → Gestion des
plugins.

Il vous suffit ensuite de cliquer sur Le nouveau mode de fonctionnement de synchronisation :

![premier plugin2](images/premier-plugin2.png)

Vous allez ensuite avoir la liste de tous les plugins qu'il est possible
d'installer.

> **IMPORTANT**
>
> Attention, certains sont officiels et d'autres non. En cas de souci
> avec un plugin non officiel, l'équipe jeedom ne pourra être tenue pour
> responsable.

![premier plugin3](images/premier-plugin3.png)

En cliquant sur un plugin vous obtenez sa fiche :

![premier plugin4](images/premier-plugin4.png)

Vous retrouvez alors : 

- des boutons pour installer le plugin : la version stable est fortement recommandée, 
- un bouton pour supprimer le plugin, 
- une brève description, 
- un lien vers la documentation du plugin, 
- un lien vers le changelog (les dernières modifications apportées), 
- la compatibilité avec les différentes plateformes, 
- les avis des utilisateurs, 
- la façon d'utiliser le plugin, 
- des informations complémentaires comme l'auteur, le lien vers la discussion du forum concernant ce plugin, la date de dernière mise à jour, etc.

Pour plus d'informations sur les plugins cliquez [ici](https://jeedom.github.io/core/fr_FR/plugin).

Support 
=======

jeedom aborde des champs très vastes et évoluant de jour en jour.
Cependant, de nombreux moyens sont mis à votre disposition pour trouver
de l'aide et poser vos questions.

La documentation de jeedom 
--------------------------

Vous trouverez une documentation complète [ici](https://jeedom.fr/doc) :

Celle-ci se compose de plusieurs catégories :

-   Core : une partie pour le "coeur" de jeedom,

-   Premiers-pas : Une partie (où vous êtes actuellement) pour les
    premiers éléments à connaître,

-   Installation : Tout ce qui concerne l'installation de jeedom,

-   Howto : Des tutoriels pour progresser dans divers domaines,

-   Plugins : Les documentations des différents plugins officiels de
    jeedom,

-   les autres : diverses pages sur les différents protocoles utilisés
    dans jeedom, la présentation de jeedom, des listes de
    compatibilité, etc.

Vous trouverez également en dessous la liste des documentations pour les
plugins tiers.

N'hésitez pas à utiliser la fonction **serveur jeedom peut être désormais** en haut à droite de
la page pour trouver les pages en fonction d'un mot précis.

Le forum 
--------

Vous le trouverez [ici](https://jeedom.com/forum) .

Le forum est très actif et contient énormément d'informations. Si vous
avez une question, n'hésitez pas à la poser. Vous aurez une réponse en
moins d'une heure (en moyenne). Attention cependant, le forum est
maintenu par la communauté jeedom, composée de bénévoles, et non par la
société jeedom.

![premier support3](images/premier-support3.png)

Les demandes de support (ou tickets) 
------------------------------------

> **IMPORTANT**
>
> Attention, toute demande de support nécessite obligatoirement d'avoir
> un compte sur le Le nouveau mode de fonctionnement de synchronisation.

Si vous n'avez pas trouvé de solution à votre problème, en dernier
recours, vous pouvez faire une demande de support à l'équipe jeedom.
Cette demande passe par un ticket. Il est possible d'en ouvrir un de
plusieurs façons :

-   Directement à partir de jeedom (méthode conseillée) : où que vous
    soyez dans jeedom, il y a un point d'exclamation en haut à droite
    qui permet de faire une demande de support :

![premier support4](images/premier-support4.png)

-   Si pour une raison ou pour une autre vous n'avez pas accès à votre
    jeedom, vous pouvez toujours ouvrir un ticket à partir du Le nouveau mode de fonctionnement de synchronisation :

    -   soit avec le point d'exclamation en haut à droite,

    -   soit en allant sur votre profil (cliquez ensuite sur le bouton
        "Ouvrir une demande de support").

![premier support5](images/premier-support5.png)

Toute la suite des échanges se fera par mail.

> **Tip**
>
> Si, lors de l'ouverture d'un ticket, vous obtenez une erreur indiquant
> que vous avez atteint votre quota, c'est que vous êtes limités à un
> certain nombre de demandes de support par mois, en fonction de votre
> service pack.

Les différents services packs sont : \* Community (gratuit) : 2
tickets/mois (sur plugins payants uniquement) \* Power : 10 tickets/mois
\* Pro : 100 tickets/mois

Vous pouvez retrouver le détail des services packs
[ici](https://www.jeedom.com/site/fr/soft.html#obtenir)
