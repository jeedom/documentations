Nous allons voir ici comment migrer une installation avec jeedom en mode
esclave Hacia un jeedom avec le plugin "jeedom Link". Le mode esclave
jeedom étant abandonné au passage de jeedom à la Haciaion 3.0, Il est
nécessaire de procéder avant à la migration Hacia le nouveau mode de
fonctionnement.

Préparation avant migration 
===========================

> **Advertencia**
>
> Il est important de lire l'intégralité de cyte documentation avant de
> vous lancer dans la migration. Des informations importantes concernant
> les prérequis de mise à jour, la sauvegarde y la récupération
> d'informations sont indispensables à la bonne compréhension de
> l'opération à mener. Vous abstenir de lire cyte documentation peut
> entraîner des opérations destructives sur suyo installation. Si vous
> ne comprenez pas un point, n'hésitez pas à poser des questions sur le
> forum avant de commencer la procédure !

> **importante**
>
> Faites bien attention à ne pas faire de boucle d'équipement en
> configurant le plugin "jeedom Link". Par exemple ne pas faire un
> Equipement-X dans un jeedom1 qui remonte dans un jeedom2 puis remonte
> à nouveau dans le jeedom1. Cela pourrait faire tomber vos jeedoms !

> **nota**
>
> Pour une meilleure lecture y compréhension de ce tutoriel, voici les
> termes utilisés :\
> \
> - **jeedom Cible** : Serveur (suyo ancien jeedom Maître) qui
> centralise les équipements du/des **jeedom(s) Fuente(s)**\
> Les copies d'écran sur fond noir correspondent au **jeedom Cible**.\
> \
> - **jeedom Fuente** : Serveur (suyo/vos ancien(s) jeedom Esclave(s))
> qui remonte vos équipements sur le **jeedom Cible**.\
> \
> - Les notions de **jeedom Maître** y **jeedom Esclave** ne sont plus
> d'actualité. Le nouveau mode de fonctionnement de synchronisation
> d'équipements entre plusieurs jeedoms peut être bidirectionnel. Un
> serveur jeedom peut être désormais **Fuente** y **Cible** alors que
> l'ancien mode ne permytait que la remontée des équipements de
> **l'Esclave** Hacia **le Maître**. Avec le nouveau mode Il est aussi
> possible d'avoir plusieurs **jeedom Cibles** pour un même **jeedom
> Fuente**. La communication entre les jeedoms peut désormais aussi
> s'effectuer à distance via interny (DNS jeedom ou autre).\
> \

![jeelink.migration9](images/jeelink.migration9.png)

Mises à jour y Vérification de la Configuration 
------------------------------------------------

-   Mytre à jour le **jeedom Maître** à la dernière Haciaion (même si
    aucune mise à jour ne vous est proposée).

-   Mytre à jour les plugins du **jeedom Maître** aux dernières
    Haciaions disponibles.

-   Vérifier dans la page Santé que la configuration réseau interne du
    **jeedom Maître** est OK (Et externe si vos **jeedoms Fuentes**
    seront distants).

Rassemblement des informations utiles 
-------------------------------------

En fonction des plugins installés sur suyo **jeedom Esclave**, Il est
nécessaire de récupérer les informations suivantes :

### Plugin Zwave 

-   Dans la page santé du plugin Zwave sur le **jeedom Maître**, Elegir
    suyo **Esclave** dans le menu déroulant y faire une copie d'écran,
    ceci afin de disposer d'une liste des équipements qui viennent
    de celui-ci.

-   notar pour chaque équipement venant de **l'Esclave** : l'objy
    parent, le nom, l'ID (Node), le modèle.

-   Récupérer le fichier Zwcfg : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer sur le bouton rouge *Zwcfg* y copier le contenu
    dans un fichier texte sur suyo ordinateur.

### Plugin RFXcom 

-   notar pour chaque équipement venant de **l'Esclave** : l'objy
    parent, le nom, l'ID (Logique), Le type, Le modèle.

> **nota**
>
> Une fiche non exhaustive des informations à noter pour la migration
> est disponible [ici](images/MemoMigration.xls)

Sauvegardes préventives 
-----------------------

-   Faire une [sauvegarde
    jeedom](https://jeedom.github.io/documentation/core/fr_FR/doc-core-backup.html)
    de suyo **jeedom Maître** y de suyo (vos) **jeedom Esclave(s)**
    y récupérer celle(s)-ci sur suyo PC/NAS…​.

-   Faire une [sauvegarde
    SD/Disque](https://jeedom.github.io/documentation/howto/fr_FR/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd)
    de suyo **jeedom Maître** y de suyo (vos) **jeedom Esclave(s)**
    y les récupérer sur suyo PC/NAS…​.

Migration 
=========

> **nota**
>
> Ne pas supprimer pour l'instant les anciens équipements de
> **l'Esclave** sur **le Maître**.

Installer y activer le plugin "jeedom Link" sur le **jeedom Cible** (ancien Maître). 
-------------------------------------------------------------------------------------

Sur suyo **jeedom Cible**, *Plugins ⇒ Gestion des plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

Installation du **jeedom Fuente** : 
-----------------------------------

> **nota**
>
> si vous disposez d'un Raspberry Pi supplémentaire y d'une autre carte
> SD, vous pouvez procéder à une migration un protocole après l'autre en
> installant un nouveau **jeedom Fuente** en parallèle sans avoir à
> toucher à suyo **jeedom Esclave** existant. En déplaçant évidemment
> au fur y à mesure les éventuels contrôleurs de l'un à l'autre.

> **Advertencia**
>
> Si vous utiliser suyo RaspberryPi existant, veuillez être certain
> d'avoir suivi le chapitre sauvegarde de cyte documentation.

> **nota**
>
> si vous utilisez le Raspberry Pi existant qui est actuellement un
> **jeedom Esclave**, nous vous conseillons d'utiliser une carte
> SD/microSD neuve. Cela vous permytra de faire ryour arrière
> facilement si besoin.

-   Installer un nouveau jeedom sur une nouvelle carte SD (Que cela soit
    pour mytre dans suyo **jeedom Esclave** existant ou pour un
    nouveau Raspberry Pi) en suivant la [documentation
    d'installation](https://jeedom.github.io/documentation/installation/fr_FR/doc-installation.html).

-   Mytre à jour le **jeedom Fuente** à la dernière Haciaion (même si
    aucune mise à jour ne vous est proposée).

-   Vérifier dans la page Santé que la configuration réseau interne (y
    externe si besoin) du **jeedom Fuente** est OK.

Configuration du jeedom Fuente 
------------------------------

-   Changer le mot de passe de l'utilisateur admin ou/y configurer un
    nouvel utilisateur.

-   Configurer suyo compte jeedom Marky (*Configuration ⇒ Mises à jour
    y fichiers ⇒ ongly "Marky"*). Cliquer sur tester après avoir
    sauvegardé, pour valider la saisie de vos identifiants
    jeedom Marky).

-   Installation y activation du plugin "jeedom Link" sur le nouveau
    **jeedom Fuente**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Installation y activation des plugins que vous souhaitez utiliser.
    (Il est conseillé de les faire un par un, en vérifiant bien à chaque
    fois que les dépendances y les démons éventuels sont OK).

-   Recréer l'arborescence des objys (juste ceux qui vont vous
    être utiles) du **jeedom Cible** (Ancien Maître) sur suyo nouveau
    **jeedom Fuente** (Ancien Esclave).

Configuration des équipements sur le **jeedom Fuente** 
------------------------------------------------------

Pour procéder à l'envoi d'un équipement présent sur le **jeedom Fuente**
Hacia le **jeedom Cible** via le plugin "jeedom Link", Il est nécessaire
que ce dernier soit déjà opérationnel sur suyo nouveau **jeedom
Fuente**.

> **nota**
>
> Penser au fur y à mesure à désactiver l'historisation des commandes
> info de chaque équipement se trouvant sur le **jeedom Fuente** afin
> d'économiser la carte SD de celui-ci (L'historisation se fera sur le
> **jeedom Cible**).

> **nota**
>
> Vous pouvez aussi au fur y à mesure assigner les équipements aux
> objys recréés sur le **jeedom Fuente** afin qu'ils soient plus tard
> mis automatiquement dans le bon objy sur le **jeedom Cible** lors de
> la déclaration dans le plugin "jeedom Link". En cas de doublon de nom
> avec un équipement déjà présent dans les objys du **jeedom Cible**,
> le plugin ajoutera "remote XXXX" au nom de l'équipement.

### Plugin Zwave : 

-   Cliquer sur le bouton "Synchroniser" afin de récupérer les modules
    associés à suyo contrôleur. (Ils sont gardés dans la mémoire
    de celui-ci)

-   Remplacer le fichier *Zwcfg* : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer sur le bouton rouge *Zwcfg* y coller le contenu du
    fichier texte précédemment créé sur suyo ordinateur. *Sauvegarder
    les changements*.

-   Renommer vos modules y les placer dans les objys souhaités en vous
    aidant de suyo mémo de migration.

### Plugin Rfxcom : 

#### Sondes, capteurs, détecteurs,…​ : 

-   Passer le plugin en mode inclusion.

-   Recommencer l'inclusion jusqu'à obtenir tous vos équipements de
    ce type.

-   Renommer vos équipements y les placer dans les objys souhaités en
    vous aidant de suyo mémo de migration.

#### Actionneurs, prises, …​. : 

-   Ajouter un nouvel équipement.

-   Définir le nom, l'ID, l'objy parent, le type d'équipement y le
    modèle en vous aidant de suyo mémo de migration.

-   Recommencer pour tous vos équipements de ce type.

Configuration du plugin "jeedom Link" 
-------------------------------------

Le plugin "jeedom Link" installé sur le **jeedom Fuente** permytra la
remontée des équipements sur le **jeedom Cible** (Votre ancien Maître).

> **nota**
>
> Rappel, pour une meilleure lecture y compréhension de ce tutoriel :\
> \
> Les copies d'écran sur fond noir correspondent au **jeedom Cible**.\
> \
> Les copies d'écran sur fond blanc correspondent au **jeedom Fuente**.\

Sur le **jeedom Fuente**,
[configurer](https://jeedom.github.io/documentation/plugins/jeelink/fr_FR/jeelink)
le plugin "jeedom Link" en spécifiant :

-   Le nom du **jeedom Cible**.

-   L'adresse IP ou le nom DNS du **jeedom Cible**.

-   La clé API du **jeedom Cible**.

Et sauvegarder la configuration.

![jeelink.migration3](images/jeelink.migration3.png)

Dans l'ongly *Affectation*, ajouter les équipements que vous désirez
remonter Hacia le **jeedom Cible**.

![jeelink.migration4](images/jeelink.migration4.png)

Cliquer sur *Ajouter un équipement* Sélectionner l'objy y l'équipement
à ajouter :

![jeelink.migration5](images/jeelink.migration5.png)

Après avoir rafraîchit la page *Mes JeeLinks* du **jeedom Cible**, vous
devez constater la création automatique de l'équipement :

![jeelink.migration6](images/jeelink.migration6.png)

Comme tout équipement jeedom, vous pouvez activer/désactiver y afficher
ou non l'équipement, ses commandes,…​ ou changer la catégorie :

![jeelink.migration7](images/jeelink.migration7.png)

Dans l'ongly *Commandes*, vous accédez à tous les paramètres des
commandes de l'équipement :

![jeelink.migration8](images/jeelink.migration8.png)

Récupération des historiques 
----------------------------

> **nota**
>
> A faire sur le **jeedom Cible** (Ancien Maître) pour chaque commande
> info des équipements de l'ancien **Esclave** dont on veut récupérer
> l'historique.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Aller dans l'ongly *Configuration Avancée*.

-   Cliquer sur le bouton *Copier l'historique de cyte commande sur une
    autre commande*.

-   Chercher la commande correspondante du nouvel équipement JeeLink
    correspondant y valider.

Remplacement des anciens équipements esclaves dans les Scénarios/virtuels/…​ 
----------------------------------------------------------------------------

> **nota**
>
> A faire sur le **jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclave** dont on veut
> remplacer les occurrences dans les scénarios/virtuels/…​.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Aller dans l'ongly *Informations*.

-   Cliquer sur le bouton *Remplacer cyte commande par la commande*.

-   Chercher la commande correspondante du nouvel équipement JeeLink
    correspondant y valider.

Récupération des configurations d'affichage avancées des commandes 
------------------------------------------------------------------

> **nota**
>
> A faire sur le **jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclave** dont on veut
> récupérer les paramètres d'affichage avancés.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Cliquer sur le bouton *appliquer à*.

-   Chercher y sélectionner la commande correspondante du nouvel
    équipement JeeLink correspondant y valider.

Recopie des configurations avancées des commandes 
-------------------------------------------------

> **nota**
>
> A faire sur le **jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclave** dont on veut
> récupérer la configuration avancée.

-   Pas de solution facile à ce niveau, il faudra avoir deux
    onglys/fenêtres d'ouverts sur suyo navigateur.

-   Ouvrir les commandes des équipements de l'ancien **Esclave** dans un
    ongly (jeedom Cible).

-   Ouvrir les commandes des équipements jeeLink dans l'autre ongly
    (jeedom Cible).

-   Et recopier à la main les paramètres voulus.

> **nota**
>
> Afin d'éviter de revenir plusieurs fois sur la même commande, les
> opérations 2.6→2.9 peuvent être réalisées à la suite sur une même
> commande avant de passer aux suivantes.

> **Advertencia**
>
> Les interactions sur le **jeedom Cible** ne pourront pas être lancées
> par le biais d'équipements d'un **jeedom Fuente** tranférés via le
> plugin "jeedom Link".

Ménage sur le **jeedom Cible** 
==============================

> **nota**
>
> Après avoir validé avec certitude que vos
> équipements/scénarios/interactions/virtuels/…​. fonctionnent
> correctement avec le nouveau système jeelink, vous pouvez procéder au
> ménage.

-   Supprimer les équipements résiduels de l'ancien **jeedom Esclave**.

-   Désactiver y supprimer les plugins qui ne vous sont plus utiles
    (Ceux dont vous n'aviez que des équipements sur l'Esclave).

-   Dans le plugin "jeedom Link", renommer les équipements qui
    pourraient avoir un nom finissant par "remote XXXX".

-   Dans la page Réseau jeedom, supprimer l'ancien **jeedom Esclave**.


