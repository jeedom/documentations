Nous allons voir ici comment migrer une installation avec Jeedom en mode
esclave zu un Jeedom avec le plugin "Jeedom Link". Le mode esclave
Jeedom étant abandonné au passage de Jeedom à la zuion 3.0, Er ist
nécessaire de procéder avant à la migration zu le nouveau mode de
fonctionnement.

Préparation avant migration 
===========================

> **Warnung**
>
> Il est important de lire l'intégralité de cundte documentation avant de
> Sie lancer dans la migration. Des informations importantes concernant
> les prérequis de mise à jour, la sauvegarde und la récupération
> d'informations sont indispensables à la bonne compréhension de
> l'opération à mener. Vous abstenir de lire cundte documentation peut
> entraîner des opérations destructives auf Ihre installation. Wenn du
> ne comprenez pas un point, n'hésitez pas à poser des questions auf le
> forum avant de commencer la procédure !

> **Wichtig**
>
> Faites bien attention à ne pas faire de boucle d'équipement en
> configurant le plugin "Jeedom Link". Par exemple ne pas faire un
> Equipement-X dans un Jeedom1 qui remonte dans un Jeedom2 puis remonte
> à nouveau dans le Jeedom1. Cela pourrait faire tomber vos Jeedoms !

> **Notiz**
>
> Pour une meilleure lecture und compréhension de ce tutoriel, voici les
> termes utilisés :\.
> \.
> - **Jeedom Cible** : Serveur (Ihre ancien Jeedom Maître) qui
> centralise les équipements du/des **Jeedom(s) Quelle(s)**\.
> Les copies d'écran auf fond noir correspondent au **Jeedom Cible**.\.
> \.
> - **Jeedom Quelle** : Serveur (Ihre/vos ancien(s) Jeedom Sklave(s))
> qui remonte vos équipements auf le **Jeedom Cible**.\.
> \.
> - Les notions de **Jeedom Maître** und **Jeedom Sklave** ne sont plus
> d'actualité. Le nouveau mode de fonctionnement de synchronisation
> d'équipements entre plusieurs Jeedoms peut être bidirectionnel. Un
> serveur Jeedom peut être désormais **Quelle** und **Cible** alors que
> l'ancien mode ne permundtait que la remontée des équipements de
> **l'Sklave** zu **le Maître**. Avec le nouveau mode Er ist aussi
> possible d'avoir plusieurs **Jeedom Cibles** pour un même **Jeedom
> Quelle**. La communication entre les Jeedoms peut désormais aussi
> s'effectuer à distance via internund (DNS Jeedom ou autre).\.
> \.

![jeelink.migration9](images/jeelink.migration9.png)

Mises à jour und Vérification de la Configuration 
------------------------------------------------

-   Mundtre à jour le **Jeedom Maître** à la dernière zuion (même si
    aucune mise à jour ne Sie est proposée).

-   Mundtre à jour les plugins du **Jeedom Maître** aux dernières
    zuions disponibles.

-   Vérifier dans la page Santé que la configuration réseau interne du
    **Jeedom Maître** est OK (Et externe si vos **Jeedoms Quelles**
    seront distants).

Rassemblement des informations utiles 
-------------------------------------

En fonction des plugins installés auf Ihre **Jeedom Sklave**, Er ist
nécessaire de récupérer les informations suivantes :

### Plugin Zwave 

-   Dans la page santé du plugin Zwave auf le **Jeedom Maître**, Wählen
    Ihre **Sklave** dans le menu déroulant und faire une copie d'écran,
    ceci afin de disposer d'une liste des équipements qui viennent
    davon.

-   Notizr pour chaque équipement venant de **l'Sklave** : l'objund
    parent, le nom, l'ID (Node), le modèle.

-   Récupérer le fichier Zwcfg : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer auf le bouton rouge *Zwcfg* und copier le contenu
    dans un fichier texte auf Ihre ordinateur.

### Plugin RFXcom 

-   Notizr pour chaque équipement venant de **l'Sklave** : l'objund
    parent, le nom, l'ID (Logique), Le type, Le modèle.

> **Notiz**
>
> Une fiche non exhaustive des informations à noter pour la migration
> est disponible [ici](images/MemoMigration.xls)

Sauvegardes préventives 
-----------------------

-   Faire une [sauvegarde
    Jeedom](https://jeedom.github.io/documentation/core/fr_FR/doc-core-backup.html)
    de Ihre **Jeedom Maître** und de Ihre (vos) **Jeedom Sklave(s)**
    und récupérer celle(s)-ci auf Ihre PC/NAS…​.

-   Faire une [sauvegarde
    SD/Disque](https://jeedom.github.io/documentation/howto/fr_FR/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd)
    de Ihre **Jeedom Maître** und de Ihre (vos) **Jeedom Sklave(s)**
    und les récupérer auf Ihre PC/NAS…​.

Migration 
=========

> **Notiz**
>
> Ne pas supprimer pour l'instant les anciens équipements de
> **l'Sklave** auf **le Maître**.

Installer und activer le plugin "Jeedom Link" auf le **Jeedom Cible** (ancien Maître). 
-------------------------------------------------------------------------------------

Sur Ihre **Jeedom Cible**, *Plugins ⇒ Gestion des plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

Installation du **Jeedom Quelle** : 
-----------------------------------

> **Notiz**
>
> si Sie disposez d'un Raspberry Pi supplémentaire und d'une autre carte
> SD, Sie pouvez procéder à une migration un protocole après l'autre en
> installant un nouveau **Jeedom Quelle** en parallèle sans avoir à
> toucher à Ihre **Jeedom Sklave** existant. En déplaçant évidemment
> au fur und à meaufe les éventuels contrôleurs de l'un à l'autre.

> **Warnung**
>
> Wenn du utiliser Ihre RaspberryPi existant, veuillez être certain
> d'avoir suivi le chapitre sauvegarde de cundte documentation.

> **Notiz**
>
> si Sie utilisez le Raspberry Pi existant qui est actuellement un
> **Jeedom Sklave**, nous Sie conseillons d'utiliser une carte
> SD/microSD neuve. Cela Sie permundtra de faire rundour arrière
> facilement si besoin.

-   Installer un nouveau Jeedom auf une nouvelle carte SD (Que cela soit
    pour mundtre dans Ihre **Jeedom Sklave** existant ou pour un
    nouveau Raspberry Pi) en suivant la [documentation
    d'installation](https://jeedom.github.io/documentation/installation/fr_FR/doc-installation.html).

-   Mundtre à jour le **Jeedom Quelle** à la dernière zuion (même si
    aucune mise à jour ne Sie est proposée).

-   Vérifier dans la page Santé que la configuration réseau interne (und
    externe si besoin) du **Jeedom Quelle** est OK.

Configuration du Jeedom Quelle 
------------------------------

-   Changer le mot de passe de l'utilisateur admin ou/und configurer un
    nouvel utilisateur.

-   Configurer Ihre compte Jeedom Markund (*Configuration ⇒ Mises à jour
    und fichiers ⇒ onglund "Markund"*). Cliquer auf tester après avoir
    sauvegardé, pour valider la saisie de vos identifiants
    Jeedom Markund).

-   Installation und activation du plugin "Jeedom Link" auf le nouveau
    **Jeedom Quelle**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Installation und activation des plugins que Sie souhaitez utiliser.
    (Il est conseillé de les faire un par un, en vérifiant bien à chaque
    fois que les dépendances und les démons éventuels sont OK).

-   Recréer l'arborescence des objunds (juste ceux qui vont Sie
    être utiles) du **Jeedom Cible** (Ancien Maître) auf Ihre nouveau
    **Jeedom Quelle** (Ancien Sklave).

Configuration des équipements auf le **Jeedom Quelle** 
------------------------------------------------------

Pour procéder à l'envoi d'un équipement présent auf le **Jeedom Quelle**
zu le **Jeedom Cible** via le plugin "Jeedom Link", Er ist nécessaire
que ce dernier soit déjà opérationnel auf Ihre nouveau **Jeedom
Quelle**.

> **Notiz**
>
> Penser au fur und à meaufe à désactiver l'historisation des commandes
> info de chaque équipement se trouvant auf le **Jeedom Quelle** afin
> d'économiser la carte SD davon (L'historisation se fera auf le
> **Jeedom Cible**).

> **Notiz**
>
> Vous pouvez aussi au fur und à meaufe assigner les équipements aux
> objunds recréés auf le **Jeedom Quelle** afin qu'ils soient plus tard
> mis automatiquement dans le bon objund auf le **Jeedom Cible** lors de
> la déclaration dans le plugin "Jeedom Link". En cas de doublon de nom
> avec un équipement déjà présent dans les objunds du **Jeedom Cible**,
> le plugin ajoutera "remote XXXX" au nom de l'équipement.

### Plugin Zwave : 

-   Cliquer auf le bouton "Synchroniser" afin de récupérer les modules
    associés à Ihre contrôleur. (Ils sont gardés dans la mémoire
    davon)

-   Remplacer le fichier *Zwcfg* : *Plugins ⇒ Gestion des Plugins ⇒
    Z-wave*. Cliquer auf le bouton rouge *Zwcfg* und coller le contenu du
    fichier texte précédemment créé auf Ihre ordinateur. *Sauvegarder
    les changements*.

-   Renommer vos modules und les placer dans les objunds souhaités en Sie
    aidant de Ihre mémo de migration.

### Plugin Rfxcom : 

#### Sondes, capteurs, détecteurs,…​ : 

-   Passer le plugin en mode inclusion.

-   Recommencer l'inclusion jusqu'à obtenir tous vos équipements de
    ce type.

-   Renommer vos équipements und les placer dans les objunds souhaités en
    Sie aidant de Ihre mémo de migration.

#### Actionneurs, prises, …​. : 

-   Ajouter un nouvel équipement.

-   Définir le nom, l'ID, l'objund parent, le type d'équipement und le
    modèle en Sie aidant de Ihre mémo de migration.

-   Recommencer pour tous vos équipements de ce type.

Configuration du plugin "Jeedom Link" 
-------------------------------------

Le plugin "Jeedom Link" installé auf le **Jeedom Quelle** permundtra la
remontée des équipements auf le **Jeedom Cible** (Votre ancien Maître).

> **Notiz**
>
> Rappel, pour une meilleure lecture und compréhension de ce tutoriel :\.
> \.
> Les copies d'écran auf fond noir correspondent au **Jeedom Cible**.\.
> \.
> Les copies d'écran auf fond blanc correspondent au **Jeedom Quelle**.\.

Auf dem **Jeedom Quelle**,
[configurer](https://jeedom.github.io/documentation/plugins/jeelink/fr_FR/jeelink)
le plugin "Jeedom Link" en spécifiant :

-   Le nom du **Jeedom Cible**.

-   L'adresse IP ou le nom DNS du **Jeedom Cible**.

-   La clé API du **Jeedom Cible**.

Et sauvegarder la configuration.

![jeelink.migration3](images/jeelink.migration3.png)

Dans l'onglund *Affectation*, ajouter les équipements que Sie désirez
remonter zu le **Jeedom Cible**.

![jeelink.migration4](images/jeelink.migration4.png)

Cliquer auf *Ajouter un équipement* Sélectionner l'objund und l'équipement
à ajouter :

![jeelink.migration5](images/jeelink.migration5.png)

Après avoir rafraîchit la page *Mes JeeLinks* du **Jeedom Cible**, Sie
devez constater la création automatique de l'équipement :

![jeelink.migration6](images/jeelink.migration6.png)

Comme tout équipement Jeedom, Sie pouvez activer/désactiver und afficher
ou non l'équipement, ses commandes,…​ ou changer la catégorie :

![jeelink.migration7](images/jeelink.migration7.png)

Dans l'onglund *Commandes*, Sie accédez à tous les paramètres des
commandes de l'équipement :

![jeelink.migration8](images/jeelink.migration8.png)

Récupération des historiques 
----------------------------

> **Notiz**
>
> A faire auf le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info des équipements de l'ancien **Sklave** dont on veut récupérer
> l'historique.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Aller dans l'onglund *Configuration Avancée*.

-   Cliquer auf le bouton *Copier l'historique de cundte commande auf une
    autre commande*.

-   Chercher la commande correspondante du nouvel équipement JeeLink
    correspondant und valider.

Remplacement des anciens équipements esclaves dans les Scénarios/virtuels/…​ 
----------------------------------------------------------------------------

> **Notiz**
>
> A faire auf le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Sklave** dont on veut
> remplacer les occurrences dans les scénarios/virtuels/…​.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Aller dans l'onglund *Informations*.

-   Cliquer auf le bouton *Remplacer cundte commande par la commande*.

-   Chercher la commande correspondante du nouvel équipement JeeLink
    correspondant und valider.

Récupération des configurations d'affichage avancées des commandes 
------------------------------------------------------------------

> **Notiz**
>
> A faire auf le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Sklave** dont on veut
> récupérer les paramètres d'affichage avancés.

-   Aller dans la configuration de la commande (*Roue crantée à
    droite*).

-   Cliquer auf le bouton *appliquer à*.

-   Chercher und sélectionner la commande correspondante du nouvel
    équipement JeeLink correspondant und valider.

Recopie des configurations avancées des commandes 
-------------------------------------------------

> **Notiz**
>
> A faire auf le **Jeedom Cible** (Ancien Maître) pour chaque commande
> info/action des équipements de l'ancien **Sklave** dont on veut
> récupérer la configuration avancée.

-   Pas de solution facile à ce niveau, il faudra avoir deux
    onglunds/fenêtres d'ouverts auf Ihre navigateur.

-   Ouvrir les commandes des équipements de l'ancien **Sklave** dans un
    onglund (Jeedom Cible).

-   Ouvrir les commandes des équipements jeeLink dans l'autre onglund
    (Jeedom Cible).

-   Et recopier à la main les paramètres voulus.

> **Notiz**
>
> Afin d'éviter de revenir plusieurs fois auf la même commande, les
> opérations 2.6→2.9 peuvent être réalisées à la suite auf une même
> commande avant de passer aux suivantes.

> **Warnung**
>
> Les interactions auf le **Jeedom Cible** ne pourront pas être lancées
> par le biais d'équipements d'un **Jeedom Quelle** tranférés via le
> plugin "Jeedom Link".

Ménage auf le **Jeedom Cible** 
==============================

> **Notiz**
>
> Après avoir validé avec certitude que vos
> équipements/scénarios/interactions/virtuels/…​. fonctionnent
> correctement avec le nouveau système jeelink, Sie pouvez procéder au
> ménage.

-   Supprimer les équipements résiduels de l'ancien **Jeedom Sklave**.

-   Désactiver und supprimer les plugins qui ne Sie sont plus utiles
    (Ceux dont Sie n'aviez que des équipements auf l'Sklave).

-   Dans le plugin "Jeedom Link", renommer les équipements qui
    pourraient avoir un nom finissant par "remote XXXX".

-   Dans la page Réseau Jeedom, supprimer l'ancien **Jeedom Sklave**.


