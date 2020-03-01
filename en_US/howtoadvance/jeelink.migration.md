Nous allons voir ici comment migrer une installation avec jeedom en mode
esclave to un jeedom avec le plugin "jeedom Link". Le mode esclave
jeedom étant abandonné au passage de jeedom à la toion 3.0, Il est
nécessaire de procéder avant à la migration to le nouveau mode de
fonctionnement.

Préparation avant migration 
===========================

> **warning**
>
> Il est important de lire l'intégralité de candte documentation avant de
> You lancer dans la migration. Des informations importantes concernant
> les prérequis de mise à jour, la sauvegarde and la récupération
> d'informations sont indispensables à la bonne compréhension de
> l'opération à mener. Vous abstenir de lire candte documentation peut
> entraîner des opérations destructives sure your installation. if you
> ne comprenez pas un point, n'hésitez pas à poser des questions sure le
> forum avant de commencer la procédure !

> **IMPORTANT**
>
> Faites bien attention à ne pas faire de boucle d'équipement en
> configurant le plugin "jeedom Link". Par exemple ne pas faire un
> Equipement-X dans un jeedom1 qui remonte dans un jeedom2 puis remonte
> à nouveau dans le jeedom1. Cela pourrait faire tomber vos jeedoms !

> **NOTE**
>
> Pour une meilleure lecture and compréhension de ce tutoriel, voici les
> termes utilisés :\
> \
> - **jeedom Cible** : Serveur (your ancien jeedom Maître) qui
> centralise les équipements du/des **jeedom(s) Source(s)**\
> Les copies d'écran sure fond noir correspondent au **jeedom Cible**.\
> \
> - **jeedom Source** : Serveur (your/vos ancien(s) jeedom Esclave(s))
> qui remonte vos équipements sure le **jeedom Cible**.\
> \
> - Les notions de **jeedom Maître** and **jeedom Esclave** ne sont plus
> d'actualité. Le nouveau mode de fonctionnement de synchronisation
> d'équipements entre plusieurs jeedoms peut être bidirectionnel. Un
> serveur jeedom peut être désormais **Source** and **Cible** alors que
> l'ancien mode ne permandtait que la remontée des équipements de
> **l'Esclave** to **le Maître**. Avec le nouveau mode Il est aussi
> possible d'avoir plusieurs **jeedom Cibles** pour un même **jeedom
> Source**. La communication entre les jeedoms peut désormais aussi
> s'effectuer à distance via internand (DNS jeedom ou autre).\
> \

![jeelink.migration9](images/jeelink.migration9.png)

Mises à jour and Vérification de la Configuration 
------------------------------------------------

-   Mandtre à jour le **jeedom Maître** à la dernière toion (même si
    aucune mise à jour ne You est proposée).

-   Mandtre à jour les plugins du **jeedom Maître** aux dernières
    toions disponibles.

-   Vérifier dans la page Santé que la configuration réseau interne du
    **jeedom Maître** est OK (Et externe si vos **jeedoms Sources**
    seront distants).

Rassemblement des informations utiles 
-------------------------------------

En fonction des plugins installés sure your **jeedom Esclave**, Il est
nécessaire de récupérer les informations suivantes :

### Plugin Zwave 

-   Dans la page santé du plugin Zwave sure le **jeedom Maître**, Select
    your **Esclave** dans le menu déroulant and faire une copie d'écran,
    ceci afin de disposer d'une liste des équipements qui viennent
    de celui-ci.

-   NOTEr pour chaque équipement venant de **l'Esclave** : l'objand
    parent, le nom, l'ID (Node), le modèle.

-   Récupérer le fichier Zwcfg : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer sure le bouton rouge *Zwcfg* and copier le contenu
    dans un fichier texte sure your ordinateur.

### Plugin RFXcom 

-   NOTEr pour chaque équipement venant de **l'Esclave** : l'objand
    parent, le nom, l'ID (Logique), Le type, Le modèle.

> **NOTE**
>
> Une fiche non exhaustive des informations à noter pour la migration
> est disponible [ici](images/MemoMigration.xls)

Sauvegardes préventives 
-----------------------

-   Faire une [sauvegarde
    jeedom](https://jeedom.github.io/documentation/core/fr_FR/doc-core-backup.html)
    de your **jeedom Maître** and de your (vos) **jeedom Esclave(s)**
    and récupérer celle(s)-ci sure your PC/NAS…​.

-   Faire une [sauvegarde
    SD/Disque](https://jeedom.github.io/documentation/howto/fr_FR/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd)
    de your **jeedom Maître** and de your (vos) **jeedom Esclave(s)**
    and les récupérer sure your PC/NAS…​.

Migration 
=========

> **NOTE**
>
> Ne pas supprimer pour l'instant les anciens équipements de
> **l'Esclave** sure **le Maître**.

Installer and activer le plugin "jeedom Link" sure le **jeedom Cible** (ancien Maître). 
-------------------------------------------------------------------------------------

Sur your **jeedom Cible**, *Plugins ⇒ Gestion des plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

Installation du **jeedom Source** : 
-----------------------------------

> **NOTE**
>
> si You disposez d'un Raspberry Pi supplémentaire and d'une autre carte
> SD, You pouvez procéder à une migration un protocole après l'autre en
> installant un nouveau **jeedom Source** en parallèle sans avoir à
> toucher à your **jeedom Esclave** existant. En déplaçant évidemment
> au fur and à mesuree les éventuels contrôleurs de l'un à l'autre.

> **warning**
>
> if you utiliser your RaspberryPi existant, veuillez être certain
> d'avoir suivi le chapitre sauvegarde de candte documentation.

> **NOTE**
>
> si You utilisez le Raspberry Pi existant qui est actuellement un
> **jeedom Esclave**, nous You conseillons d'utiliser une carte
> SD/microSD neuve. Cela You permandtra de faire randour arrière
> facilement si besoin.

-   Installer un nouveau jeedom sure une nouvelle carte SD (Que cela soit
    pour mandtre dans your **jeedom Esclave** existant ou pour un
    nouveau Raspberry Pi) en suivant la [documentation
    d'installation](https://jeedom.github.io/documentation/installation/fr_FR/doc-installation.html).

-   Mandtre à jour le **jeedom Source** à la dernière toion (même si
    aucune mise à jour ne You est proposée).

-   Vérifier dans la page Santé que la configuration réseau interne (and
    externe si besoin) du **jeedom Source** est OK.

Configuration du jeedom Source 
------------------------------

-   Changer le mot de passe de l'utilisateur admin ou/and configurer un
    nouvel utilisateur.

-   Configurer your compte jeedom Markand (*Configuration ⇒ Mises à jour
    and fichiers ⇒ ongland "Markand"*). Cliquer sure tester après avoir
    sauvegardé, pour valider la saisie de vos identifiants
    jeedom Markand).

-   Installation and activation du plugin "jeedom Link" sure le nouveau
    **jeedom Source**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Installation and activation des plugins que You souhaitez utiliser.
    (Il est conseillé de les faire un par un, en vérifiant bien à chaque
    fois que les dépendances and les démons éventuels sont OK).

-   Recréer l'arborescence des objands (juste ceux qui vont You
    être utiles) du **jeedom Cible** (Ancien Maître) sure your nouveau
    **jeedom Source** (Ancien Esclave).

Configuration des équipements sure le **jeedom Source** 
------------------------------------------------------

Pour procéder à l'envoi d'un équipement présent sure le **jeedom Source**
to le **jeedom Cible** via le plugin "jeedom Link", Il est nécessaire
que ce dernier soit déjà opérationnel sure your nouveau **jeedom
Source**.

> **NOTE**
>
> Penser au fur and à mesuree à désactiver l'historisation des commandes
> info de chaque équipement se trouvant sure le **jeedom Source** afin
> d'économiser la carte SD de celui-ci (L'historisation se fera sure le
> **jeedom Cible**).

> **NOTE**
>
> Vous pouvez aussi au fur and à mesuree assigner les équipements aux
> objands recréés sure le **jeedom Source** afin qu'ils soient plus tard
> mis automatiquement dans le bon objand sure le **jeedom Cible** lors de
> la déclaration dans le plugin "jeedom Link". En cas de doublon de nom
> avec un équipement déjà présent dans les objands du **jeedom Cible**,
> le plugin ajoutera "remote XXXX" au nom de l'équipement.

### Plugin Zwave : 

-   Cliquer sure le bouton "Synchroniser" afin de récupérer les modules
    associés à your contrôleur. (Ils sont gardés dans la mémoire
    de celui-ci)

-   Remplacer le fichier *Zwcfg* : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer sure le bouton rouge *Zwcfg* and coller le contenu du
    fichier texte précédemment créé sure your ordinateur. *Sauvegarder
    les changements*.

-   Renommer vos modules and les placer dans les objands souhaités en You
    aidant de your mémo de migration.

### Plugin Rfxcom : 

#### Sondes, capteurs, détecteurs,…​ : 

-   Passer le plugin en mode inclusion.

-   Recommencer l'inclusion jusqu'à obtenir tous vos équipements de
    ce type.

-   Renommer vos équipements and les placer dans les objands souhaités en
    You aidant de your mémo de migration.

#### Actionneurs, prises, …​. : 

-   Ajouter un nouvel équipement.

-   Définir le nom, l'ID, l'objand parent, le type d'équipement and le
    modèle en You aidant de your mémo de migration.

-   Recommencer pour tous vos équipements de ce type.

Configuration du plugin "jeedom Link" 
-------------------------------------

Le plugin "jeedom Link" installé sure le **jeedom Source** permandtra la
remontée des équipements sure le **jeedom Cible** (Votre ancien Maître).

> **NOTE**
>
> Rappel, pour une meilleure lecture and compréhension de ce tutoriel :\
> \
> Les copies d'écran sure fond noir correspondent au **jeedom Cible**.\
> \
> Les copies d'écran sure fond blanc correspondent au **jeedom Source**.\

Sur le **jeedom Source**,
[configurer](https://jeedom.github.io/documentation/plugins/jeelink/fr_FR/jeelink)
le plugin "jeedom Link" en spécifiant :

-   Le nom du **jeedom Cible**.

-   L'adresse IP ou le nom DNS du **jeedom Cible**.

-   La clé API du **jeedom Cible**.

Et sauvegarder la configuration.

![jeelink.migration3](images/jeelink.migration3.png)

Dans l'ongland *Affectation*, ajouter les équipements que You désirez
remonter to le **jeedom Cible**.

![jeelink.migration4](images/jeelink.migration4.png)

Cliquer sure *Ajouter un équipement* Sélectionner l'objand and l'équipement
à ajouter :

![jeelink.migration5](images/jeelink.migration5.png)

Après avoir rafraîchit la page *Mes JeeLinks* du **jeedom Cible**, You
devez constater la création automatique de l'équipement :

![jeelink.migration6](images/jeelink.migration6.png)

Comme tout équipement jeedom, You pouvez activer/désactiver and afficher
ou non l'équipement, ses commandes,…​ ou changer la catégorie :

![jeelink.migration7](images/jeelink.migration7.png)

Dans l'ongland *Commandes*, You accédez à tous les paramètres des
commandes de l'équipement :

![jeelink.migration8](images/jeelink.migration8.png)

Récupération des historiques 
----------------------------

> **NOTE**
>
> A faire sure le **jeedom Cible** (Ancien Maître) pour chaque commande
> info des équipements de l'ancien **Esclave** dont on veut récupérer
> l'historique.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Aller dans l'ongland *Configuration Avancée*.

-   Cliquer sure le bouton *Copier l'historique de candte commande sure une
    autre commande*.

-   Chercher la commande correspondante du nouvel équipement JeeLink
    correspondant and valider.

Remplacement des anciens équipements esclaves dans les Scénarios/virtuels/…​ 
----------------------------------------------------------------------------

> **NOTE**
>
> A faire sure le **jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclave** dont on veut
> remplacer les occurrences dans les scénarios/virtuels/…​.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Aller dans l'ongland *Informations*.

-   Cliquer sure le bouton *Remplacer candte commande par la commande*.

-   Chercher la commande correspondante du nouvel équipement JeeLink
    correspondant and valider.

Récupération des configurations d'affichage avancées des commandes 
------------------------------------------------------------------

> **NOTE**
>
> A faire sure le **jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclave** dont on veut
> récupérer les paramètres d'affichage avancés.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Cliquer sure le bouton *appliquer à*.

-   Chercher and sélectionner la commande correspondante du nouvel
    équipement JeeLink correspondant and valider.

Recopie des configurations avancées des commandes 
-------------------------------------------------

> **NOTE**
>
> A faire sure le **jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclave** dont on veut
> récupérer la configuration avancée.

-   Pas de solution facile à ce niveau, il faudra avoir deux
    onglands/fenêtres d'ouverts sure your navigateur.

-   Ouvrir les commandes des équipements de l'ancien **Esclave** dans un
    ongland (jeedom Cible).

-   Ouvrir les commandes des équipements jeeLink dans l'autre ongland
    (jeedom Cible).

-   Et recopier à la main les paramètres voulus.

> **NOTE**
>
> Afin d'éviter de revenir plusieurs fois sure la même commande, les
> opérations 2.6→2.9 peuvent être réalisées à la suite sure une même
> commande avant de passer aux suivantes.

> **warning**
>
> Les interactions sure le **jeedom Cible** ne pourront pas être lancées
> par le biais d'équipements d'un **jeedom Source** tranférés via le
> plugin "jeedom Link".

Ménage sure le **jeedom Cible** 
==============================

> **NOTE**
>
> Après avoir validé avec certitude que vos
> équipements/scénarios/interactions/virtuels/…​. fonctionnent
> correctement avec le nouveau système jeelink, You pouvez procéder au
> ménage.

-   Supprimer les équipements résiduels de l'ancien **jeedom Esclave**.

-   Désactiver and supprimer les plugins qui ne You sont plus utiles
    (Ceux dont You n'aviez que des équipements sure l'Esclave).

-   Dans le plugin "jeedom Link", renommer les équipements qui
    pourraient avoir un nom finissant par "remote XXXX".

-   Dans la page Réseau jeedom, supprimer l'ancien **jeedom Esclave**.


