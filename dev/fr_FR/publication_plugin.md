# Publier un plugin sur le market

## Pré-requis

- Etre inscrit en tant que developpeur sur le market, voir [Développement de plugin > Compte développeur](index#Compte%20développeur),
- Avoir déposé son plugin sur GitHub *(dépôt privé ou non)*.
- Présenter son plugin sur le forum dans le [**Salon des développeurs**, catégorie **Présentation Plugin**](https://community.jeedom.com/c/developpeur-developpeurs/presentation-plugin/20){:target="_blank"}.

>**INFORMATION**
>
>Si vous êtes bien inscrit en tant que développeur sur le market mais que vous n'avez pas accès en écriture au Salon des développeurs du forum pour pouvoir publier un message, il faut ouvrir une demande de support.

## Présentation du plugin

Il est indispensable d'avoir rédigé la présentation de son plugin sur le forum pour soumettre une demande de passage en version stable.

Nous conseillons de rédiger cette présentation dès sa première publication en bêta voire même dès que celui-ci est fonctionnel via un simple lien GitHub. Il y a en effet plusieurs avantages à présenter son plugin rapidement :
- éviter de voir un autre développeur proposer le même plugin,
- obtenir de l’aide pour la conception,
- permettre à l’équipe Jeedom de savoir à quoi sert le plugin et comment il est codé,
- comparer ses idées et remarques avec celles des utilisateurs.

### Format de la présentation

A chaque développeur de voir les informations qu'il veut fournir, officiellement seuls les champs suivants sont requis :
- **Nom** et **id**
- **Description des fonctionnalités**
- **Langages utilisés** *(PHP, Javascript, Python, Node.js, C, etc.)*
- Utilise-t-il un **démon** ? des **dépendances** ? des **crons** ? des **listeners** ?
- Possède-t-il un **panel** *(dashboard et/ou mobile)* ?
- Est-il **gratuit** ou **payant** ?
- **Lien GitHub** *(sauf si le dépôt est privé)*
- **Lien vers la documentation** *(si disponible)*

### Étiquettes

Différentes étiquettes *(ou tags)* sont disponibles sur le forum pour pouvoir catégoriser votre plugin :
- **dependance_intall** : installe des dépendances
- **demon** : utilise un démon
- **nodejs** ou **python** : language utilisé par le démon
- **jsonrpc** : utilise API JSON-RPC de Jeedom
- **panel-dash** : genère un panel dédié
- **beta** ou **stable** : statut du plugin
- **gratuit** ou **payant** : tarification du plugin

Une fois le plugin validé en stable, une étiquette dédiée doit lui être attribuée sous la forme `plugin-ID_PLUGIN` afin de pouvoir facilement retrouver les sujets le concernant. Si ce tag n'était pas créé pour une raison ou une autre, vous pouvez ouvrir un sujet sur le forum ou une demande de support.

## Publication

Pour publier un nouveau plugin, il faut se connecter au market avec son compte développeur puis cliquer sur le menu **Market** et **Ajouter**. Il ne reste plus qu'à renseigner les informations sur le plugin :
- Général :
  - Prix
  - ID
  - Nom

- Source du dépot
  - Token *(permet l'accès aux dépôts privés)*. Pour créer un token il suffit de se rendre à cette [page Github](https://github.com/settings/tokens){:target="_blank"}, choisir `token classic` ou `fine-grained`, `aucune expiration` et cocher la partie `repo`
  - Nom d'utilisateur du dépôt GitHub
  - Nom du dépôt GitHub

Une fois ces informations renseignées vous pouvez cliquer sur le bouton **VALIDER**. Si tout est bien configuré, le market devrait effectuer une première synchronisation du plugin. Il ne reste ensuite qu'à éditer la fiche du plugin pour renseigner les différentes branches *(pensez à cliquer sur **VALIDER** avant de faire un **TEST**)* :
  - **Beta** : `beta` par exemple
  - **Stable** : `master` par exemple

>**INFORMATION**
>
>Par défaut, votre nom d'auteur de plugin est votre identifiant Market. Pour le changer, rendez vous sur votre **Profil** Market et renseignez la case **Auteur** de la section **Pour les développeurs**.

### Synchronisation

Les plugins sont tous synchronisés automatiquement avec le Market chaque jour à partir d'1 heure du matin. Il est également possible de procéder à une synchronisation manuelle d'une branche précise en cliquant sur le bouton **GitHub beta** ou **Github stable** depuis la fiche Market du plugin.

C'est cette étape de synchronisation *(quotidienne automatiquement ou manuelle)* qui déclenche une alerte de mise à jour du plugin chez les utilisateurs et la mise à jour de la fiche Market.
