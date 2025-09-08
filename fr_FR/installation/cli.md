# Installation en ligne de commande

La procédure suivante s'adresse aux utilisateurs avancés, elle permet d'installer Jeedom sur un système Linux Debian server.

>**INFORMATION**
>
>En cas d'interrogation concernant l'installation de Debian, l'équipe Jeedom propose également des images systèmes incluant Debian et Jeedom préinstallé. Consulter [**la documentation dédiée**](../compatibility/#Images%20système%20officielles) pour plus de détails.

## Version de Debian

Jeedom est un logiciel Linux prévu pour fonctionner de manière optimale sur [un système Debian server](https://www.debian.org/){:target="_blank"}.

Pensez à vérifier que [**votre version de Debian est prise en charge par Jeedom**](../compatibility/#Debian) avant de procéder à l'installation.

## Installation manuelle

>**IMPORTANT**
>
>Chaque instance Jeedom est censée être exécutée sur un serveur dédié. Partant de ce fait, il est possible d'observer des effets de bord avec d'éventuels services hébergés parallèlement. Dans la même idée, les systèmes Debian desktop ne sont pas couverts par le support officiel.

### Exécution

Afin de procéder à l'installation de Jeedom, il est nécessaire de se connecter à la console système selon la méthode la plus adaptée à votre situation *(ssh, clavier/écran, écran virtuel)*.

Une fois connecté au système avec un utilisateur bénéficiant des droits d'administration `sudo`, il suffit d'entrer ces 3 commandes :

1. Télécharger le script d'installation :
    ```sh
    wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
    ```

2. Donner les droits d'exécution :
    ```sh
    chmod +x install.sh
    ```

3. Exécuter le script :
    ```sh
    sudo ./install.sh
    ```
	>**INFORMATION**
	>
	>Si connecté en tant que `root`, il faut exécuter le script `./install.sh` sans la commande `sudo` au préalable.

### Options

>**IMPORTANT**
>
>Cette section est réservée aux utilisateurs bénéficiant d'une certaine expertise.

Le script d'installation Jeedom dispose de différentes options permettant de personnaliser chaque instance :

- **Base de donnée** (`-d`) : installe ou non la base de données gérée par Jeedom *(`1` par défaut)*
- **Type d'installation** (`-i`) : Définit le type d'installation *(`standard` par défaut)*
- **Etape** (`-s`) : exécute une étape spécifique *(`0` par défaut)*
- **Version** (`-v`) : sélectionne une branche de développement Jeedom *(`master` par défaut)*
- **Dossier d'installation** (`-w`) : répertoire où installer Jeedom *(`/var/www/html` par défaut)*

## Compatibilité matérielle

La liste, non exhaustive, des matériels supportés par Jeedom est visible dans [la documentation **Compatibilité**](../compatibility/#Matériels%20supportés)

## Première connexion

Consulter la documentation relative à la [**première connexion**](../premiers-pas/#Première%20connexion) pour accéder à l'interface Jeedom suite à l'installation.
