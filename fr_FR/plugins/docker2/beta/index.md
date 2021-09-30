# Plugin Docker Management

## Description

Ce plugin permet d'installer et de gerer docker directement depuis Jeedom

>**IMPORTANT**
>
>Ce plugin n'a pas vocation a remplacer un logiciel dédié type Portainer, il est juste la pour lancer des commandes bascique et gerer (de maniere basic) Docker

>**IMPORTANT**
>
>De pars les pré-requis pour installer Docker il n'est pas compatible avec tous les hardware (dont la Smart). Pour qu'il marche il faut absolument une plateforme x86-64, rpi (3 ou 4) ou une box Atlas

## Configuration

Une fois les dépendances installé il faut activer "Docker 1" en local (pour le moment il est possible qu'on rajoute la connexion sur un docker distant). Vous pouvez aussi configurer le cron pour la fréquence de mise à jour, nous vous conseillons de mettre "*/5 * * * *"

## Equipement

Si vous avez deja des Docker sur Jeedom vous pouvez cliquer sur le bouton synchroniser qui recupere les dockers existant et créer les équipements Jeedom qui correspondent.

Vous pouvez aussi depuis Jeedom creer de nouveau de docker, pour cela il vous faut simplement creer un équipement Jeedom.

### Parametres généraux

- Nom de l'équipement : Nom de votre équipement dans Jeedom
- Objet parent : Objet parent de l'équipement
- Catégorie : categorie de l'équipement
- Activer : activer ou non l'équipement
- Visible : rend l'équipement visible sur le dashboard
- Docker host : docker qui execute l'équipement (seul le local est disponible pour le moment)
- Nom du conteneur : nom du conteneur dans docker. Il est trés important que ca soit le meme que celui du docker compose ou docker run si vous passer par la création à travers Jeedom. Sinon celui si ne pourra pas rattacher votre équipement au docker qu'il crée
- Sauvegarder les mount : indique a Jeedom si il doit sauvegarder les dossiers monté du docker. Attention a ne pas l'activer sur tous les dockers en particulier si la taille de ceux-ci est importante
- Mode de création : mode de création cela peut etre soit manuel, soit "Jeedom Docker run" (création a l'aide d'une commande docker run fait par Jeedom), "Jeedom docker composer" (création à l'aide d'un docker composer fait par Jeedom)
- Commande de création : n'apparait que si vous etes en "Jeedom Docker run", la commande a donner est tous ce qu'il y a après "docker run"
- Docker compose : n'apparait que si vous etes en "Jeedom Docker composer", il faut mettre ici votre Docker compose

### Action

- Sauvegarder le docker : lance une sauvegarde du Docker, attention Jeedom ne garde que la derniere sauvegarde (une sauvegarde est faite automatiquement en meme temps que la sauvegarde Jeedom)
- Restaurer le docker : permet de restaurer la derniere sauvegarde du Docker
- Télécharger sauvegarde : permet de télécharger la derniere sauvegarde du Docker
- Envoyer sauvegarde : permet de renvoyer une sauvegarde du Docker (récuperer depuis une sauvegarde Jeedom dans plugins/dockers/data/backup par exemple)
- Logs docker : afficher les logs du Docker

### Informations

Affiche divers information sur votre docker : 

- ID
- Commande
- Date de création
- Taille
- Ports mappé sur le host
- Réseaux
- Montage
- Image

## Commande

Vous avez ici les commandes suivantes : 

- Démarrer
- Arreter
- Redémarrer
- Recreer (disponible uniquement si la création a été faite par Jeedom)
- Supprimer
- CPU : utilisation CPU du Docker
- Mémoire : utilisation mémoire du Docker
- IO in : utilisation disque entrante
- IO out : utilisation disque sortante
- Réseaux in : utilisation réseaux entrante
- Réseaux out : utilisation réseaux sortante
- Statut : état du docker


## Assistant

Vous avez aussi la possibilité suite à la création d'un équipement d'appeller un assistant (en haut a droite) qui vous contient quelque Docker type (la liste s'étoffera au cours du temps) et vous posera seulement quelques questions pour mettre en route votre Docker

## Code

Sur la page principal du plugin vous avez aussi un bouton code qui vous emenera directmeent dans un repertoire Jeedom, c'est ici que nous vous conseillons de mettre les fichiers de configuration de vos Dockers (si necessaire).