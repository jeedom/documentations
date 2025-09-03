# Migration Jeelink

Nous allons voir ici comment migrer une installation avec Jeedom en mode esclave vers un Jeedom avec le plugin "Jeedom Link". Le mode esclave Jeedom étant abandonné au passage de Jeedom à la version 3.0, il est nécessaire de procéder avant à la migration vers le nouveau mode de fonctionnement.

# Préparation avant migration

> **Warning**
>
> Il est important de lire l’intégralité de cette documentation avant de  vous lancer dans la migration. Des informations importantes concernant  les prérequis de mise à jour, la sauvegarde et la récupération  d’informations sont indispensables à la bonne compréhension de  l’opération à mener. Vous abstenir de lire cette documentation peut  entraîner des opérations destructives sur votre installation. Si vous  ne comprenez pas un point, n’hésitez pas à poser des questions sur le  forum avant de commencer la procédure !

> **Important**
>
> Faites bien attention à ne pas faire de boucle d’équipement en  configurant le plugin "Jeedom Link". Par exemple ne pas faire un  Equipement-X dans un Jeedom1 qui remonte dans un Jeedom2 puis remonte  à nouveau dans le Jeedom1. Cela pourrait faire tomber vos Jeedoms !

> **Note**
>
> Pour une meilleure lecture et compréhension de ce tutoriel, voici les  termes utilisés :
>
> - **Jeedom Cible** : Serveur (votre ancien Jeedom Maître) qui  centralise les équipements du/des **Jeedom(s) Source(s)**  Les copies d’écran sur fond noir correspondent au **Jeedom Cible**.
>
> - **Jeedom Source** : Serveur (votre/vos ancien(s) Jeedom Esclave(s))  qui remonte vos équipements sur le **Jeedom Cible**.
>
> - Les notions de **Jeedom Maître** et **Jeedom Esclave** ne sont plus  d’actualité. Le nouveau mode de fonctionnement de synchronisation  d’équipements entre plusieurs Jeedoms peut être bidirectionnel. Un  serveur Jeedom peut être désormais **Source** et **Cible** alors que  l’ancien mode ne permettait que la remontée des équipements de  **l’Esclave** vers **le Maître**. Avec le nouveau mode il est aussi  possible d’avoir plusieurs **Jeedom Cibles** pour un même **Jeedom  Source**. La communication entre les Jeedoms peut désormais aussi  s’effectuer à distance via internet (DNS Jeedom ou autre).

![jeelink.migration9](images/jeelink.migration9.png)

## Mises à jour et Vérification de la Configuration

-   Mettre à jour le **Jeedom Maître** à la dernière version (même si aucune mise à jour ne vous est proposée).
-   Mettre à jour les plugins du **Jeedom Maître** aux dernières versions disponibles.
-   Vérifier dans la page Santé que la configuration réseau interne du **Jeedom Maître** est OK (Et externe si vos **Jeedoms Sources** seront distants).

## Rassemblement des informations utiles

En fonction des plugins installés sur votre **Jeedom Esclave**, il est nécessaire de récupérer les informations suivantes :

### Plugin Zwave

-   Dans la page santé du plugin Zwave sur le **Jeedom Maître**, choisir votre **Esclave** dans le menu déroulant et faire une copie d’écran, ceci afin de disposer d’une liste des équipements qui viennent de celui-ci.
-   Noter pour chaque équipement venant de **l’Esclave** : l’objet parent, le nom, l’ID (Node), le modèle.
-   Récupérer le fichier Zwcfg : *Plugins ⇒ Gestion des Plugins ⇒ Z-wave*. Cliquer sur le bouton rouge *Zwcfg* et copier le contenu dans un fichier texte sur votre ordinateur.

### Plugin RFXcom

-   Noter pour chaque équipement venant de **l’Esclave** : l’objet parent, le nom, l’ID (Logique), Le type, Le modèle.

> **Note**
>
> Une fiche non exhaustive des informations à noter pour la migration  est disponible [ici](images/MemoMigration.xls)

## Sauvegardes préventives

-   Faire une [sauvegarde Jeedom](../core/doc-core-backup.html) de votre **Jeedom Maître** et de votre (vos) **Jeedom Esclave(s)** et récupérer celle(s)-ci sur votre PC/NAS…​.
-   Faire une [sauvegarde SD/Disque](../howto/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd) de votre **Jeedom Maître** et de votre (vos) **Jeedom Esclave(s)** et les récupérer sur votre PC/NAS…​.

# Migration

> **Note**
>
> Ne pas supprimer pour l’instant les anciens équipements de  **l’Esclave** sur **le Maître**.

## Installer et activer le plugin "Jeedom Link" sur le **Jeedom Cible** (ancien Maître).

Sur votre **Jeedom Cible**, *Plugins ⇒ Gestion des plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

## Installation du **Jeedom Source**

> **Note**
>
> si vous disposez d’un Raspberry Pi supplémentaire et d’une autre carte  SD, vous pouvez procéder à une migration un protocole après l’autre en  installant un nouveau **Jeedom Source** en parallèle sans avoir à  toucher à votre **Jeedom Esclave** existant. En déplaçant évidemment  au fur et à mesure les éventuels contrôleurs de l’un à l’autre.

> **Warning**
>
> Si vous utiliser votre RaspberryPi existant, veuillez être certain  d’avoir suivi le chapitre sauvegarde de cette documentation.

> **Note**
>
> si vous utilisez le Raspberry Pi existant qui est actuellement un  **Jeedom Esclave**, nous vous conseillons d’utiliser une carte  SD/microSD neuve. Cela vous permettra de faire retour arrière  facilement si besoin.

-   Installer un nouveau Jeedom sur une nouvelle carte SD (Que cela soit pour mettre dans votre **Jeedom Esclave** existant ou pour un nouveau Raspberry Pi) en suivant la [documentation d’installation](../installation/doc-installation.html).
-   Mettre à jour le **Jeedom Source** à la dernière version (même si aucune mise à jour ne vous est proposée).
-   Vérifier dans la page Santé que la configuration réseau interne (et externe si besoin) du **Jeedom Source** est OK.

## Configuration du Jeedom Source

-   Changer le mot de passe de l’utilisateur admin ou/et configurer un nouvel utilisateur.
-   Configurer votre compte Jeedom Market (*Configuration ⇒ Mises à jour et fichiers ⇒ onglet "Market"*). Cliquer sur tester après avoir sauvegardé, pour valider la saisie de vos identifiants Jeedom Market).
-   Installation et activation du plugin "Jeedom Link" sur le nouveau **Jeedom Source**.
![jeelink.migration2](images/jeelink.migration2.png)
-   Installation et activation des plugins que vous souhaitez utiliser. (Il est conseillé de les faire un par un, en vérifiant bien à chaque fois que les dépendances et les démons éventuels sont OK).
-   Recréer l’arborescence des objets (juste ceux qui vont vous être utiles) du **Jeedom Cible** (Ancien Maître) sur votre nouveau **Jeedom Source** (Ancien Esclave).

## Configuration des équipements sur le **Jeedom Source**

Pour procéder à l’envoi d’un équipement présent sur le **Jeedom Source** vers le **Jeedom Cible** via le plugin "Jeedom Link", il est nécessaire que ce dernier soit déjà opérationnel sur votre nouveau **Jeedom Source**.

> **Note**
>
> Penser au fur et à mesure à désactiver l’historisation des commandes  info de chaque équipement se trouvant sur le **Jeedom Source** afin  d’économiser la carte SD de celui-ci (L’historisation se fera sur le  **Jeedom Cible**).

> **Note**
>
> Vous pouvez aussi au fur et à mesure assigner les équipements aux  objets recréés sur le **Jeedom Source** afin qu’ils soient plus tard  mis automatiquement dans le bon objet sur le **Jeedom Cible** lors de  la déclaration dans le plugin "Jeedom Link". En cas de doublon de nom  avec un équipement déjà présent dans les objets du **Jeedom Cible**,  le plugin ajoutera "remote XXXX" au nom de l’équipement.

### Plugin Zwave

-   Cliquer sur le bouton "Synchroniser" afin de récupérer les modules associés à votre contrôleur. (Ils sont gardés dans la mémoire de celui-ci)
-   Remplacer le fichier *Zwcfg* : *Plugins ⇒ Gestion des Plugins ⇒ Z-wave*. Cliquer sur le bouton rouge *Zwcfg* et coller le contenu du fichier texte précédemment créé sur votre ordinateur. *Sauvegarder les changements*.
-   Renommer vos modules et les placer dans les objets souhaités en vous aidant de votre mémo de migration.

### Plugin Rfxcom :

#### Sondes, capteurs, détecteurs,…​

-   Passer le plugin en mode inclusion.
-   Recommencer l’inclusion jusqu’à obtenir tous vos équipements de ce type.
-   Renommer vos équipements et les placer dans les objets souhaités en vous aidant de votre mémo de migration.

#### Actionneurs, prises, …​

-   Ajouter un nouvel équipement.
-   Définir le nom, l’ID, l’objet parent, le type d’équipement et le modèle en vous aidant de votre mémo de migration.
-   Recommencer pour tous vos équipements de ce type.

## Configuration du plugin "Jeedom Link"

Le plugin "Jeedom Link" installé sur le **Jeedom Source** permettra la remontée des équipements sur le **Jeedom Cible** (Votre ancien Maître).

> **Note**
>
> Rappel, pour une meilleure lecture et compréhension de ce tutoriel :
>
> - Les copies d’écran sur fond noir correspondent au **Jeedom Cible**.
> - Les copies d’écran sur fond blanc correspondent au **Jeedom Source**.

Sur le **Jeedom Source**,
[configurer](../plugins/jeelink/jeelink)
le plugin "Jeedom Link" en spécifiant :

-   Le nom du **Jeedom Cible**.
-   L’adresse IP ou le nom DNS du **Jeedom Cible**.
-   La clé API du **Jeedom Cible**.

Et sauvegarder la configuration.

![jeelink.migration3](images/jeelink.migration3.png)

Dans l’onglet *Affectation*, ajouter les équipements que vous désirez remonter vers le **Jeedom Cible**.

![jeelink.migration4](images/jeelink.migration4.png)

Cliquer sur *Ajouter un équipement* Sélectionner l’objet et l’équipement à ajouter :

![jeelink.migration5](images/jeelink.migration5.png)

Après avoir rafraîchit la page *Mes JeeLinks* du **Jeedom Cible**, vous devez constater la création automatique de l’équipement :

![jeelink.migration6](images/jeelink.migration6.png)

Comme tout équipement Jeedom, vous pouvez activer/désactiver et afficher ou non l’équipement, ses commandes,…​ ou changer la catégorie :

![jeelink.migration7](images/jeelink.migration7.png)

Dans l’onglet *Commandes*, vous accédez à tous les paramètres des commandes de l’équipement :

![jeelink.migration8](images/jeelink.migration8.png)

## Récupération des historiques

> **Note**
>
> A faire sur le **Jeedom Cible** (Ancien Maître) pour chaque commande  info des équipements de l’ancien **Esclave** dont on veut récupérer  l’historique.

-   Aller dans la configuration de la commande (*Roue crantée à droite*).
-   Aller dans l’onglet *Configuration Avancée*.
-   Cliquer sur le bouton *Copier l’historique de cette commande sur une autre commande*.
-   Chercher la commande correspondante du nouvel équipement JeeLink correspondant et valider.

## Remplacement des anciens équipements esclaves dans les Scénarios/virtuels/…​

> **Note**
>
> A faire sur le **Jeedom Cible** (Ancien Maître) pour chaque commande  info/action des équipements de l’ancien **Esclave** dont on veut  remplacer les occurrences dans les scénarios/virtuels/…

-   Aller dans la configuration de la commande (*Roue crantée à droite*).
-   Aller dans l’onglet *Informations*.
-   Cliquer sur le bouton *Remplacer cette commande par la commande*.
-   Chercher la commande correspondante du nouvel équipement JeeLink correspondant et valider.

## Récupération des configurations d’affichage avancées des commandes

> **Note**
>
> A faire sur le **Jeedom Cible** (Ancien Maître) pour chaque commande  info/action des équipements de l’ancien **Esclave** dont on veut  récupérer les paramètres d’affichage avancés.

-   Aller dans la configuration de la commande (*Roue crantée à droite*).
-   Cliquer sur le bouton *appliquer à*.
-   Chercher et sélectionner la commande correspondante du nouvel équipement JeeLink correspondant et valider.

## Recopie des configurations avancées des commandes

> **Note**
>
> A faire sur le **Jeedom Cible** (Ancien Maître) pour chaque commande  info/action des équipements de l’ancien **Esclave** dont on veut  récupérer la configuration avancée.

-   Pas de solution facile à ce niveau, il faudra avoir deux onglets/fenêtres d’ouverts sur votre navigateur.
-   Ouvrir les commandes des équipements de l’ancien **Esclave** dans un onglet (Jeedom Cible).
-   Ouvrir les commandes des équipements jeeLink dans l’autre onglet (Jeedom Cible).
-   Et recopier à la main les paramètres voulus.

> **Note**
>
> Afin d’éviter de revenir plusieurs fois sur la même commande, les  opérations 2.6→2.9 peuvent être réalisées à la suite sur une même  commande avant de passer aux suivantes.

> **Warning**
>
> Les interactions sur le **Jeedom Cible** ne pourront pas être lancées  par le biais d’équipements d’un **Jeedom Source** tranférés via le  plugin "Jeedom Link".

# Ménage sur le **Jeedom Cible**

> **Note**
>
> Après avoir validé avec certitude que vos  équipements/scénarios/interactions/virtuels/…​. fonctionnent  correctement avec le nouveau système jeelink, vous pouvez procéder au  ménage.

-   Supprimer les équipements résiduels de l’ancien **Jeedom Esclave**.
-   Désactiver et supprimer les plugins qui ne vous sont plus utiles (Ceux dont vous n’aviez que des équipements sur l’Esclave).
-   Dans le plugin "Jeedom Link", renommer les équipements qui pourraient avoir un nom finissant par "remote XXXX".
-   Dans la page Réseau Jeedom, supprimer l’ancien **Jeedom Esclave**.
