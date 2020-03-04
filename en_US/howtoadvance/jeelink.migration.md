Nous allons voir ici comment migrer une installation avec Jeedom en mode
esclave to un Jeedom avec le plugin "Jeedom Link". Le mode esclave
Jeedom étant abandonné au passage de Jeedom à la toion 3.0, It is
nécessaire de procéder avant à la migration to le nouveau mode de
fonctionnement.

Préparation avant migration 
===========================

> **Warning**
>
> Il est important de lire l'intégralité de candte documentation avant de
> You lancer dans la migration. Des informations importantes concernant
> les prérequis de mise à jour, la sauvegarde and la récupération
> d'informations sont indispensables à la bonne compréhension de
> l'opération à mener. Vous abstenir de lire candte documentation peut
> entraîner des opérations destructives sure votre installation. If you
> ne comprenez pas un point, n'hésitez pas à poser des questions sure le
> forum avant de commencer la procédure !

> **IMPORTANT**
>
> Faites bien attention à ne pas faire de boucle d'équipement en
> configurant le plugin "Jeedom Link". Par exemple ne pas faire un
> Equipement-X dans un Jeedom1 qui remonte dans un Jeedom2 puis remonte
> à nouveau dans le Jeedom1. Cela pourrait faire tomber vos Jeedoms !

> **NOTE**
>
> Pour une meilleure lecture and compréhension de ce tutoriel, voici les
> termes utilisés :\
> \
> - **Jeedom Cible** : Serveur (votre ancien Jeedom Maître) qui
> centralise les équipements du/des **Jeedom(s) Source(s)**\
> Les copies d'écran sure fond noir correspondent au **Jeedom Cible**.\
> \
> - **Jeedom Source** : Serveur (votre/vos ancien(s) Jeedom Esclave(s))
> qui remonte vos équipements sure le **Jeedom Cible**.\
> \
> - Les notions de **Jeedom Maître** and **Jeedom Esclave** ne sont plus
> d'actualité. Le nouveau mode de fonctionnement de synchronisation
> d'équipements entre plusieurs Jeedoms peut être bidirectionnel. Un
> serveur Jeedom peut être désormais **Source** and **Cible** alors que
> l'ancien mode ne permandtait que la remontée des équipements de
> **l'Esclave** to **le Maître**. Avec le nouveau mode It is aussi
> possible d'avoir plusieurs **Jeedom Cibles** pour un même **Jeedom
> Source**. La communication entre les Jeedoms peut désormais aussi
> s'effectuer à distance via internand (DNS Jeedom ou autre).\
> \

![jeelink.migration9](images/jeelink.migration9.png)

Mises à jour and Vérification de la Configuration 
------------------------------------------------

-   Mandtre à jour le **Jeedom Maître** à la dernière toion (même si
    aucune mise à jour ne You est proposée).

-   Mandtre à jour les plugins du **Jeedom Maître** aux dernières
    toions disponibles.

-   Vérifier dans la page Santé que la configuration réseau interne du
    **Jeedom Maître** est OK (Et externe si vos **Jeedoms Sources**
    seront distants).

Rassemblement des informations utiles 
-------------------------------------

En fonction des plugins installés sure votre **Jeedom Esclave**, It is
nécessaire de récupérer les informations suivantes :

### Plugin Zwave 

-   Dans la page santé du plugin Zwave sure le **Jeedom Maître**, Select
    votre **Esclave** dans le menu déroulant and faire une copie d'écran,
    ceci afin de disposer d'une liste des équipements qui viennent
    de celui-ci.

-   NOTEr pour chaque équipement venant de **l'Esclave** : l'objand
    parent, le nom, l'ID (Node), le modèle.

-   Récupérer le fichier Zwcfg : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer sure le bouton rouge *Zwcfg* and copier le contenu
    dans un fichier texte sure votre ordinateur.

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
    Jeedom](https://jeedom.github.io/documentation/core/fr_FR/doc-core-backup.html)
    de votre **Jeedom Maître** and de votre (vos) **Jeedom Esclave(s)**
    and récupérer celle(s)-ci sure votre PC/NAS…​.

-   Faire une [sauvegarde
    SD/Disque](https://jeedom.github.io/documentation/howto/fr_FR/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd)
    de votre **Jeedom Maître** and de votre (vos) **Jeedom Esclave(s)**
    and les récupérer sure votre PC/NAS…​.

Migration 
=========

> **NOTE**
>
> Ne pas supprimer pour l'instant les anciens équipements de
> **l'Esclave** sure **le Maître**.

Installer and activer le plugin "Jeedom Link" sure le **Jeedom Cible** (ancien Maître). 
-------------------------------------------------------------------------------------

Sur votre **Jeedom Cible**, *Plugins ⇒ Gestion des plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

Installation du **Jeedom Source** : 
-----------------------------------

> **NOTE**
>
> si You disposez d'un Raspberry Pi supplémentaire and d'une autre carte
> SD, You pouvez procéder à une migration un protocole après l'autre en
> installant un nouveau **Jeedom Source** en parallèle sans avoir à
> toucher à votre **Jeedom Esclave** existant. En déplaçant évidemment
> au fur and à mesuree les éventuels contrôleurs de l'un à l'autre.

> **Warning**
>
> If you utiliser votre RaspberryPi existant, veuillez être certain
> d'avoir suivi le chapitre sauvegarde de candte documentation.

> **NOTE**
>
> si You utilisez le Raspberry Pi existant qui est actuellement un
> **Jeedom Esclave**, nous You conseillons d'utiliser une carte
> SD/microSD neuve. Cela You permandtra de faire randour arrière
> facilement si besoin.

-   Installer un nouveau Jeedom sure une nouvelle carte SD (Que cela soit
    pour mandtre dans votre **Jeedom Esclave** existant ou pour un
    nouveau Raspberry Pi) en suivant la [documentation
    d'installation](https://jeedom.github.io/documentation/installation/fr_FR/doc-installation.html).

-   Mandtre à jour le **Jeedom Source** à la dernière toion (même si
    aucune mise à jour ne You est proposée).

-   Vérifier dans la page Santé que la configuration réseau interne (and
    externe si besoin) du **Jeedom Source** est OK.

Configuration du Jeedom Source 
------------------------------

-   Changer le mot de passe de l'utilisateur admin ou/and configurer un
    nouvel utilisateur.

-   Configurer votre compte Jeedom Markand (*Configuration ⇒ Mises à jour
    and fichiers ⇒ ongland "Markand"*). Cliquer sure tester après avoir
    sauvegardé, pour valider la saisie de vos identifiants
    Jeedom Markand).

-   Installation and activation du plugin "Jeedom Link" sure le nouveau
    **Jeedom Source**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Installation and activation des plugins que You souhaitez utiliser.
    (Il est conseillé de les faire un par un, en vérifiant bien à chaque
    fois que les dépendances and les démons éventuels sont OK).

-   Recréer l'arborescence des objands (juste ceux qui vont You
    être utiles) du **Jeedom Cible** (Ancien Maître) sure votre nouveau
    **Jeedom Source** (Ancien Esclave).

Configuration des équipements sure le **Jeedom Source** 
------------------------------------------------------

Pour procéder à l'envoi d'un équipement présent sure le **Jeedom Source**
to le **Jeedom Cible** via le plugin "Jeedom Link", It is nécessaire
que ce dernier soit déjà opérationnel sure votre nouveau **Jeedom
Source**.

> **NOTE**
>
> Penser au fur and à mesuree à désactiver l'historisation des commandes
> info de chaque équipement se trouvant sure le **Jeedom Source** afin
> d'économiser la carte SD de celui-ci (L'historisation se fera sure le
> **Jeedom Cible**).

> **NOTE**
>
> Vous pouvez aussi au fur and à mesuree assigner les équipements aux
> objands recréés sure le **Jeedom Source** afin qu'ils soient plus tard
> mis automatiquement dans le bon objand sure le **Jeedom Cible** lors de
> la déclaration dans le plugin "Jeedom Link". En cas de doublon de nom
> avec un équipement déjà présent dans les objands du **Jeedom Cible**,
> le plugin ajoutera "remote XXXX" au nom de l'équipement.

### Plugin Zwave : 

-   Cliquer sure le bouton "Synchroniser" afin de récupérer les modules
    associés à votre contrôleur. (Ils sont gardés dans la mémoire
    de celui-ci)

-   Remplacer le fichier *Zwcfg* : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer sure le bouton rouge *Zwcfg* and coller le contenu du
    fichier texte précédemment créé sure votre ordinateur. *Sauvegarder
    les changements*.

-   Renommer vos modules and les placer dans les objands souhaités en You
    aidant de votre mémo de migration.

### Plugin Rfxcom : 

#### Sondes, capteurs, détecteurs,…​ : 

-   Passer le plugin en mode inclusion.

-   Recommencer l'inclusion jusqu'à obtenir tous vos équipements de
    ce type.

-   Renommer vos équipements and les placer dans les objands souhaités en
    You aidant de votre mémo de migration.

#### Actionneurs, prises, …​. : 

-   Ajouter un nouvel équipement.

-   Définir le nom, l'ID, l'objand parent, le type d'équipement and le
    modèle en You aidant de votre mémo de migration.

-   Recommencer pour tous vos équipements de ce type.

Configuration du plugin "Jeedom Link" 
-------------------------------------

Le plugin "Jeedom Link" installé sure le **Jeedom Source** permandtra la
remontée des équipements sure le **Jeedom Cible** (Votre ancien Maître).

> **NOTE**
>
> Rappel, pour une meilleure lecture and compréhension de ce tutoriel :\
> \
> Les copies d'écran sure fond noir correspondent au **Jeedom Cible**.\
> \
> Les copies d'écran sure fond blanc correspondent au **Jeedom Source**.\

On the **Jeedom Source**,
[configurer](https://jeedom.github.io/documentation/plugins/jeelink/fr_FR/jeelink)
le plugin "Jeedom Link" en spécifiant :

-   Le nom du **Jeedom Cible**.

-   L'adresse IP ou le nom DNS du **Jeedom Cible**.

-   La clé API du **Jeedom Cible**.

Et sauvegarder la configuration.

![jeelink.migration3](images/jeelink.migration3.png)

Dans l'ongland *Affectation*, ajouter les équipements que You désirez
remonter to le **Jeedom Cible**.

![jeelink.migration4](images/jeelink.migration4.png)

Cliquer sure *Ajouter un équipement* Sélectionner l'objand and l'équipement
à ajouter :

![jeelink.migration5](images/jeelink.migration5.png)

Après avoir rafraîchit la page *Mes JeeLinks* du **Jeedom Cible**, You
devez constater la création automatique de l'équipement :

![jeelink.migration6](images/jeelink.migration6.png)

Comme tout équipement Jeedom, You pouvez activer/désactiver and afficher
ou non l'équipement, ses commandes,…​ ou changer la catégorie :

![jeelink.migration7](images/jeelink.migration7.png)

Dans l'ongland *Commandes*, You accédez à tous les paramètres des
commandes de l'équipement :

![jeelink.migration8](images/jeelink.migration8.png)

Récupération des historiques 
----------------------------

> **NOTE**
>
> A faire sure le **Jeedom Cible** (Ancien Maître) pour chaque commande
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
> A faire sure le **Jeedom Cible** (Ancien Maître) pour chaque commande
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
> A faire sure le **Jeedom Cible** (Ancien Maître) pour chaque commande
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
> A faire sure le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclave** dont on veut
> récupérer la configuration avancée.

-   Pas de solution facile à ce niveau, il faudra avoir deux
    onglands/fenêtres d'ouverts sure votre navigateur.

-   Ouvrir les commandes des équipements de l'ancien **Esclave** dans un
    ongland (Jeedom Cible).

-   Ouvrir les commandes des équipements jeeLink dans l'autre ongland
    (Jeedom Cible).

-   Et recopier à la main les paramètres voulus.

> **NOTE**
>
> Afin d'éviter de revenir plusieurs fois sure la même commande, les
> opérations 2.6→2.9 peuvent être réalisées à la suite sure une même
> commande avant de passer aux suivantes.

> **Warning**
>
> Les interactions sure le **Jeedom Cible** ne pourront pas être lancées
> par le biais d'équipements d'un **Jeedom Source** tranférés via le
> plugin "Jeedom Link".

Ménage sure le **Jeedom Cible** 
==============================

> **NOTE**
>
> Après avoir validé avec certitude que vos
> équipements/scénarios/interactions/virtuels/…​. fonctionnent
> correctement avec le nouveau système jeelink, You pouvez procéder au
> ménage.

-   Supprimer les équipements résiduels de l'ancien **Jeedom Esclave**.

-   Désactiver and supprimer les plugins qui ne You sont plus utiles
    (Ceux dont You n'aviez que des équipements sure l'Esclave).

-   Dans le plugin "Jeedom Link", renommer les équipements qui
    pourraient avoir un nom finissant par "remote XXXX".

-   Dans la page Réseau Jeedom, supprimer l'ancien **Jeedom Esclave**.


