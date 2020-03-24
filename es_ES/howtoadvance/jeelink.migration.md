Nous allons voir ici comment migrer une installation avec Jeedom en mode
esclave Hacia un Jeedom avec le plugin "Jeedom Link". Le mode esclave
Jeedom étant abandonné au passage de Jeedom à la Haciaion 3.0, El es
nécessaire de procéder avant à la migration Hacia le nouveau mode de
fonctionnement.

Préparation avant migration 
===========================

> **Advertencia**
>
> Il est important de lire l'intégralité de cyte documentation avant de
> Vosotras lancer dans la migration. Des informations importantes concernant
> les prérequis de mise à jour, la sauvegarde y la récupération
> d'informations sont indispensables à la bonne compréhension de
> l'opération à mener. Vous abstenir de lire cyte documentation peut
> entraîner des opérations destructives sobre votre installation. Si usted
> ne comprenez pas un point, n'hésitez pas à poser des questions sobre le
> forum avant de commencer la procédure !

> **Importante**
>
> Faites bien attention à ne pas faire de boucle d'équipement en
> configurant le plugin "Jeedom Link". Par exemple ne pas faire un
> Equipement-X dans un Jeedom1 qui remonte dans un Jeedom2 puis remonte
> à nouveau dans le Jeedom1. Cela pourrait faire tomber vos Jeedoms !

> **Nota**
>
> Pour une meilleure lecture y compréhension de ce tutoriel, voici les
> termes utilisés :\
> \
> - **Jeedom Cible** : Serveur (votre ancien Jeedom Maître) qui
> centralise les équipements du/des **Jeedom(s) Fuente(s)**\
> Les copies d'écran sobre fond noir correspondent au **Jeedom Cible**.\
> \
> - **Jeedom Fuente** : Serveur (votre/vos ancien(s) Jeedom Esclavo(s))
> qui remonte vos équipements sobre le **Jeedom Cible**.\
> \
> - Les notions de **Jeedom Maître** y **Jeedom Esclavo** ne sont plus
> d'actualité. Le nouveau mode de fonctionnement de synchronisation
> d'équipements entre plusieurs Jeedoms peut être bidirectionnel. Un
> serveur Jeedom peut être désormais **Fuente** y **Cible** alors que
> l'ancien mode ne permytait que la remontée des équipements de
> **l'Esclavo** Hacia **le Maître**. Avec le nouveau mode El es aussi
> possible d'avoir plusieurs **Jeedom Cibles** pour un même **Jeedom
> Fuente**. La communication entre les Jeedoms peut désormais aussi
> s'effectuer à distance via interny (DNS Jeedom ou autre).\
> \

![jeelink.migration9](images/jeelink.migration9.png)

Mises à jour y Vérification de la Configuration 
------------------------------------------------

-   Mytre à jour le **Jeedom Maître** à la dernière Haciaion (même si
    aucune mise à jour ne Vosotras est proposée).

-   Mytre à jour les plugins du **Jeedom Maître** aux dernières
    Haciaions disponibles.

-   Vérifier dans la page Santé que la configuration réseau interne du
    **Jeedom Maître** est OK (Et externe si vos **Jeedoms Fuentes**
    seront distants).

Rassemblement des informations utiles 
-------------------------------------

En fonction des plugins installés sobre votre **Jeedom Esclavo**, El es
nécessaire de récupérer les informations suivantes :

### Plugin Zwave 

-   Dans la page santé du plugin Zwave sobre le **Jeedom Maître**, Elegir
    votre **Esclavo** dans le menu déroulant y faire une copie d'écran,
    ceci afin de disposer d'une liste des équipements qui viennent
    de celui-ci.

-   Notar pour chaque équipement venant de **l'Esclavo** : l'objy
    parent, le nom, l'ID (Node), le modèle.

-   Récupérer le fichier Zwcfg : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer sobre le bouton rouge *Zwcfg* y copier le contenu
    dans un fichier texte sobre votre ordinateur.

### Plugin RFXcom 

-   Notar pour chaque équipement venant de **l'Esclavo** : l'objy
    parent, le nom, l'ID (Logique), Le type, Le modèle.

> **Nota**
>
> Une fiche non exhaustive des informations à noter pour la migration
> est disponible [ici](images/MemoMigration.xls)

Sauvegardes préventives 
-----------------------

-   Faire une [sauvegarde
    Jeedom](https://jeedom.github.io/documentation/core/fr_FR/doc-core-backup.html)
    de votre **Jeedom Maître** y de votre (vos) **Jeedom Esclavo(s)**
    y récupérer celle(s)-ci sobre votre PC/NAS…​.

-   Faire une [sauvegarde
    SD/Disque](https://jeedom.github.io/documentation/howto/fr_FR/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd)
    de votre **Jeedom Maître** y de votre (vos) **Jeedom Esclavo(s)**
    y les récupérer sobre votre PC/NAS…​.

Migration 
=========

> **Nota**
>
> Ne pas supprimer pour l'instant les anciens équipements de
> **l'Esclavo** sobre **le Maître**.

Installer y activer le plugin "Jeedom Link" sobre le **Jeedom Cible** (ancien Maître). 
-------------------------------------------------------------------------------------

Sur votre **Jeedom Cible**, *Plugins ⇒ Gestion des plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

Installation du **Jeedom Fuente** : 
-----------------------------------

> **Nota**
>
> si Vosotras disposez d'un Raspberry Pi supplémentaire y d'une autre carte
> SD, Vosotras pouvez procéder à une migration un protocole après l'autre en
> installant un nouveau **Jeedom Fuente** en parallèle sans avoir à
> toucher à votre **Jeedom Esclavo** existant. En déplaçant évidemment
> au fur y à mesobree les éventuels contrôleurs de l'un à l'autre.

> **Advertencia**
>
> Si usted utiliser votre RaspberryPi existant, veuillez être certain
> d'avoir suivi le chapitre sauvegarde de cyte documentation.

> **Nota**
>
> si Vosotras utilisez le Raspberry Pi existant qui est actuellement un
> **Jeedom Esclavo**, nous Vosotras conseillons d'utiliser une carte
> SD/microSD neuve. Cela Vosotras permytra de faire ryour arrière
> facilement si besoin.

-   Installer un nouveau Jeedom sobre une nouvelle carte SD (Que cela soit
    pour mytre dans votre **Jeedom Esclavo** existant ou pour un
    nouveau Raspberry Pi) en suivant la [documentation
    d'installation](https://jeedom.github.io/documentation/installation/fr_FR/doc-installation.html).

-   Mytre à jour le **Jeedom Fuente** à la dernière Haciaion (même si
    aucune mise à jour ne Vosotras est proposée).

-   Vérifier dans la page Santé que la configuration réseau interne (y
    externe si besoin) du **Jeedom Fuente** est OK.

Configuration du Jeedom Fuente 
------------------------------

-   Changer le mot de passe de l'utilisateur admin ou/y configurer un
    nouvel utilisateur.

-   Configurer votre compte Jeedom Marky (*Configuration ⇒ Mises à jour
    y fichiers ⇒ ongly "Marky"*). Cliquer sobre tester après avoir
    sauvegardé, pour valider la saisie de vos identifiants
    Jeedom Marky).

-   Installation y activation du plugin "Jeedom Link" sobre le nouveau
    **Jeedom Fuente**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Installation y activation des plugins que Vosotras souhaitez utiliser.
    (Il est conseillé de les faire un par un, en vérifiant bien à chaque
    fois que les dépendances y les démons éventuels sont OK).

-   Recréer l'arborescence des objys (juste ceux qui vont Vosotras
    être utiles) du **Jeedom Cible** (Ancien Maître) sobre votre nouveau
    **Jeedom Fuente** (Ancien Esclavo).

Configuration des équipements sobre le **Jeedom Fuente** 
------------------------------------------------------

Pour procéder à l'envoi d'un équipement présent sobre le **Jeedom Fuente**
Hacia le **Jeedom Cible** via le plugin "Jeedom Link", El es nécessaire
que ce dernier soit déjà opérationnel sobre votre nouveau **Jeedom
Fuente**.

> **Nota**
>
> Penser au fur y à mesobree à désactiver l'historisation des commandes
> info de chaque équipement se trouvant sobre le **Jeedom Fuente** afin
> d'économiser la carte SD de celui-ci (L'historisation se fera sobre le
> **Jeedom Cible**).

> **Nota**
>
> Vous pouvez aussi au fur y à mesobree assigner les équipements aux
> objys recréés sobre le **Jeedom Fuente** afin qu'ils soient plus tard
> mis automatiquement dans le bon objy sobre le **Jeedom Cible** lors de
> la déclaration dans le plugin "Jeedom Link". En cas de doublon de nom
> avec un équipement déjà présent dans les objys du **Jeedom Cible**,
> le plugin ajoutera "remote XXXX" au nom de l'équipement.

### Plugin Zwave : 

-   Cliquer sobre le bouton "Synchroniser" afin de récupérer les modules
    associés à votre contrôleur. (Ils sont gardés dans la mémoire
    de celui-ci)

-   Remplacer le fichier *Zwcfg* : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer sobre le bouton rouge *Zwcfg* y coller le contenu du
    fichier texte précédemment créé sobre votre ordinateur. *Sauvegarder
    les changements*.

-   Renommer vos modules y les placer dans les objys souhaités en Vosotras
    aidant de votre mémo de migration.

### Plugin Rfxcom : 

#### Sondes, capteurs, détecteurs,…​ : 

-   Passer le plugin en mode inclusion.

-   Recommencer l'inclusion jusqu'à obtenir tous vos équipements de
    ce type.

-   Renommer vos équipements y les placer dans les objys souhaités en
    Vosotras aidant de votre mémo de migration.

#### Actionneurs, prises, …​. : 

-   Ajouter un nouvel équipement.

-   Définir le nom, l'ID, l'objy parent, le type d'équipement y le
    modèle en Vosotras aidant de votre mémo de migration.

-   Recommencer pour tous vos équipements de ce type.

Configuration du plugin "Jeedom Link" 
-------------------------------------

Le plugin "Jeedom Link" installé sobre le **Jeedom Fuente** permytra la
remontée des équipements sobre le **Jeedom Cible** (Votre ancien Maître).

> **Nota**
>
> Rappel, pour une meilleure lecture y compréhension de ce tutoriel :\
> \
> Les copies d'écran sobre fond noir correspondent au **Jeedom Cible**.\
> \
> Les copies d'écran sobre fond blanc correspondent au **Jeedom Fuente**.\

Sobre **Jeedom Fuente**,
[configurer](https://jeedom.github.io/documentation/plugins/jeelink/fr_FR/jeelink)
le plugin "Jeedom Link" en spécifiant :

-   Le nom du **Jeedom Cible**.

-   L'adresse IP ou le nom DNS du **Jeedom Cible**.

-   La clé API du **Jeedom Cible**.

Et sauvegarder la configuration.

![jeelink.migration3](images/jeelink.migration3.png)

Dans l'ongly *Affectation*, ajouter les équipements que Vosotras désirez
remonter Hacia le **Jeedom Cible**.

![jeelink.migration4](images/jeelink.migration4.png)

Cliquer sobre *Ajouter un équipement* Sélectionner l'objy y l'équipement
à ajouter :

![jeelink.migration5](images/jeelink.migration5.png)

Après avoir rafraîchit la page *Mes JeeLinks* du **Jeedom Cible**, Vosotras
devez constater la création automatique de l'équipement :

![jeelink.migration6](images/jeelink.migration6.png)

Comme tout équipement Jeedom, Vosotras pouvez activer/désactiver y afficher
ou non l'équipement, ses commandes,…​ ou changer la catégorie :

![jeelink.migration7](images/jeelink.migration7.png)

Dans l'ongly *Commandes*, Vosotras accédez à tous les paramètres des
commandes de l'équipement :

![jeelink.migration8](images/jeelink.migration8.png)

Récupération des historiques 
----------------------------

> **Nota**
>
> A faire sobre le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info des équipements de l'ancien **Esclavo** dont on veut récupérer
> l'historique.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Aller dans l'ongly *Configuration Avancée*.

-   Cliquer sobre le bouton *Copier l'historique de cyte commande sobre une
    autre commande*.

-   Chercher la commande correspondante du nouvel équipement JeeLink
    correspondant y valider.

Remplacement des anciens équipements esclaves dans les Scénarios/virtuels/…​ 
----------------------------------------------------------------------------

> **Nota**
>
> A faire sobre le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclavo** dont on veut
> remplacer les occurrences dans les scénarios/virtuels/…​.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Aller dans l'ongly *Informations*.

-   Cliquer sobre le bouton *Remplacer cyte commande par la commande*.

-   Chercher la commande correspondante du nouvel équipement JeeLink
    correspondant y valider.

Récupération des configurations d'affichage avancées des commandes 
------------------------------------------------------------------

> **Nota**
>
> A faire sobre le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclavo** dont on veut
> récupérer les paramètres d'affichage avancés.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Cliquer sobre le bouton *appliquer à*.

-   Chercher y sélectionner la commande correspondante du nouvel
    équipement JeeLink correspondant y valider.

Recopie des configurations avancées des commandes 
-------------------------------------------------

> **Nota**
>
> A faire sobre le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Esclavo** dont on veut
> récupérer la configuration avancée.

-   Pas de solution facile à ce niveau, il faudra avoir deux
    onglys/fenêtres d'ouverts sobre votre navigateur.

-   Ouvrir les commandes des équipements de l'ancien **Esclavo** dans un
    ongly (Jeedom Cible).

-   Ouvrir les commandes des équipements jeeLink dans l'autre ongly
    (Jeedom Cible).

-   Et recopier à la main les paramètres voulus.

> **Nota**
>
> Afin d'éviter de revenir plusieurs fois sobre la même commande, les
> opérations 2.6→2.9 peuvent être réalisées à la suite sobre une même
> commande avant de passer aux suivantes.

> **Advertencia**
>
> Les interactions sobre le **Jeedom Cible** ne pourront pas être lancées
> par le biais d'équipements d'un **Jeedom Fuente** tranférés via le
> plugin "Jeedom Link".

Ménage sobre le **Jeedom Cible** 
==============================

> **Nota**
>
> Après avoir validé avec certitude que vos
> équipements/scénarios/interactions/virtuels/…​. fonctionnent
> correctement avec le nouveau système jeelink, Vosotras pouvez procéder au
> ménage.

-   Supprimer les équipements résiduels de l'ancien **Jeedom Esclavo**.

-   Désactiver y supprimer les plugins qui ne Vosotras sont plus utiles
    (Ceux dont Vosotras n'aviez que des équipements sobre l'Esclavo).

-   Dans le plugin "Jeedom Link", renommer les équipements qui
    pourraient avoir un nom finissant par "remote XXXX".

-   Dans la page Réseau Jeedom, supprimer l'ancien **Jeedom Esclavo**.


