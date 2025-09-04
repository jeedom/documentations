# Installation sur PC/mini-PC

La procédure suivante est basée sur l'utilisation d'un fichier d'image système incluant Debian et Jeedom préinstallé.

>**INFORMATION**
>
>Pour installer Jeedom manuellement sur un sytème Debian, se référer à la documentation concernant [l'installation en ligne de commande](cli).

## Téléchargement de l'image système

L'équipe Jeedom fournit des images système optimisées à destination des ordinateurs 64 bits.

La première étape consiste à télécharger l'image système que vous souhaitez installer :

- [**Image(s) système Jeedom x86-64**](https://images.jeedom.com/x86-64/){:target="_blank"}

>**INFORMATION**
>
>Consulter [**la documentation dédiée**](../compatibility/#Images%20système%20officielles) pour plus de détails sur les images système Jeedom.

## Gravure de l'image système

Le fichier précédemment téléchargé doit être gravé sur un support à partir duquel la machine est apte à démarrer, comme une clé USB par exemple.

>**INFORMATION**
>
>Si vous ne connaissez pas de logiciel de gravure, vous pouvez utiliser [balenaEtcher](https://etcher.balena.io/){:target="_blank"}.

Pour procéder à la gravure, il suffit de suivre la procédure décrite par l'éditeur du logiciel que vous utilisez.

Une fois l'image système gravée sur le support de démarrage, il n'y a plus qu'à démarrer dessus.

>**IMPORTANT**
>
>En cas de difficulté pour démarrer sur la clé USB, consultez la documentation de votre matériel relative aux options de boot du BIOS.

## Options d'installation

Différentes options d'installation sont affichées à l'écran après avoir démarré l'ordinateur sur le support contenant l'image système :

{% include lightbox.html src="images/install-menu-amd64.jpg" data="InstallMenuAMD64" title="Menu d'installation Jeedom (AMD64)" imgstyle="width:75%;display:block;margin:0 auto;" %}

- **Install Jeedom (automatic mode)** : **installe le système automatiquement** sans aucune intervention nécessaire. La machine est éteinte à la fin de l'opération.
  >**IMPORTANT**
	>
	>Ce mode est exécuté par défaut au bout de 60 secondes, **l'installation peut donc être réalisée sans brancher d'écran**.

- **Install Jeedom (manual mode)** : dans ce mode, vous devez **renseigner manuellement la configuration du système à installer** *(langue, pays, réseau, support de stockage, etc.)*.

- **Jeedom Live** : permet de **tester Jeedom dans un environnement non persistant** sans installer le système.
  >**INFORMATION**
	>
	>Cette fonctionnalité est accessible à partir de Debian 12 Bookworm.

## Compatibilité matérielle

La liste, non exhaustive, des ordinateurs supportés par Jeedom est visible dans [la documentation **Compatibilité**](../compatibility/#Matériels%20supportés)

## Première connexion

Consulter la documentation relative à la [**première connexion**](../premiers-pas/#Première%20connexion) pour accéder à l'interface Jeedom suite à l'installation.
