# Plugin Docker Management

# Description

Ce plugin permet d'installer et de gérer et de créer des conteneurs Docker directement depuis Jeedom.

>**IMPORTANT**
>
>Ce plugin n'a pas vocation à remplacer un logiciel dédié type Portainer, il est juste fait pour exécuter des commandes simples et gérer Docker en restant basique.

# Configuration

Une fois les dépendances installées, il faut activer "Docker 1" en local (pour le moment il est possible qu'on rajoute la connexion sur un docker distant). Vous pouvez aussi configurer le cron pour la fréquence de mise à jour, nous vous conseillons de mettre ``*/5 * * * *``.

# Equipements

Si vous avez déjà des Dockers sur Jeedom, vous pouvez cliquer sur le bouton "Synchroniser" pour récupérer les dockers existants et créer les équipements Jeedom correspondant.

Vous pouvez aussi, depuis Jeedom, créer de nouveau Dockers. Pour cela il suffit de créer un équipement Jeedom.

## Paramêtres généraux

- **Nom de l'équipement** : Nom de votre équipement dans Jeedom
- **Objet parent** : Objet parent de l'équipement
- **Catégorie** : categorie de l'équipement
- **Activer** : activer ou non l'équipement
- **Visible** : rend l'équipement visible sur le dashboard
- **Docker host** : docker qui execute l'équipement *(seul le local est disponible pour le moment)*
- **Nom du conteneur** : si vous passez par la création via Jeedom, il est important que le nom du conteneur soit le même que celui mentionné dans ``docker compose`` ou ``docker run`` sinon le conteneur Docker ne pourra pas être rattaché à l'équipmement Jeedom.
- **Sauvegarder les mount** : indique a Jeedom s'il doit sauvegarder les dossiers montés du conteneur Docker. Attention de ne pas activer l'option sur tous les Dockers, en particulier si la taille de ceux-ci est importante.
- **Mode de création** : peut être soit ``Manuel``, soit ``Jeedom Docker run`` *(création a l'aide d'une commande docker run fait par Jeedom)*, soit ``Jeedom docker composer`` *(création à l'aide d'un docker composer fait par Jeedom)*.
- **Commande de création** : n'apparait que si vous êtes en mode ``Jeedom Docker run``. La commande à renseigner concerne tout ce qu'il y a après ``docker run``.
- **Docker compose** : n'apparait que si vous êtes en mode ``Jeedom Docker composer``. il faut indiquer ici le contenu de votre ``Docker compose``.

## Action

- **Sauvegarder le docker** : lance une sauvegarde du Docker. Attention Jeedom ne conserve que la derniere sauvegarde *(une sauvegarde est effectuée automatiquement en même temps que la sauvegarde Jeedom)*
- **Restaurer le docker** : permet de restaurer la dernière sauvegarde du Docker
- **Télécharger sauvegarde** : permet de télécharger la dernière sauvegarde du Docker
- **Envoyer sauvegarde** : permet d'envoyer une sauvegarde du Docker *(récupérée depuis une sauvegarde Jeedom dans ``plugins/dockers/data/backup`` par exemple)*
- **Logs docker** : affiche les logs du Docker

## Informations

Affiche diverses informations sur le conteneur Docker :

- ID
- Commande
- Date de création
- Taille
- Ports mappés sur le host
- Réseaux
- Montage
- Image

## Commandes

Vous avez ici accès aux commandes suivantes :

- **Démarrer**
- **Arrêter**
- **Redémarrer**
- **Recréer** *(uniquement si la création a été faite par Jeedom)*
- **Supprimer**
- **CPU** : charge CPU
- **Mémoire** : charge mémoire
- **IO in** : écriture disque
- **IO out** : lecture disque
- **Réseaux in** : utilisation réseau en connexion entrante
- **Réseaux out** : utilisation réseau en connexion sortante
- **Statut** : état du docker


# Assistant

Vous avez la possibilité, suite à la création d'un équipement, d'appeler un **Assistant** *(bouton en haut à droite)* qui vous permettra, à travers quelques questions, de générer un conteneur Docker spécifique. La liste s'étoffera au cours du temps mais sont d'ores et déjà disponibles la création des conteneurs suivants :

- **AdGuard Home**
- **Nodered**
- **Vaultwarden**
- **Wireguard** *(wg-easy)*

# Code

Sur la page générale du plugin regroupant tous les équipements Docker, vous avez accès un bouton **Code** qui vous amènera directement dans un répertoire Jeedom prévus pour recevoire les fichiers de configuration de vos Dockers si cela était nécessaire.
