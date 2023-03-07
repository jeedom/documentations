# Installation sur Docker

> **Important**
>
> Attention, nous partons ici du principe que vous maîtrisez déjà Docker

## Installation de docker

Docker est maintenant disponible sur toutes les distributions récentes.
Pour l’installer sur une distribution

-   à base de ``rpm``

````
yum install docker
````

-   à base de ``deb``

````
apt-get update
apt-get install docker.io
````

## Installation d’une image Jeedom

Installation de l’image :

``docker pull jeedom/jeedom:latest``

Puis lancez la :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest``

Avec :

-   ``jeedom-server`` : nom du container jeedom voulu
-   ``/opt/jeedom/www`` et ``/opt/jeedom/db`` : répertoire où les données de Jeedom sont mises sur l’hôte (attention a bien les créer avant)
-  `` -p 80:80``: le port du container (80) est redirigé vers le port de l'hôte (par défaut 80 aussi)

### Liste des images disponibles
- `jeedom/jeedom:latest` : dernière version **stable**
- `jeedom/jeedom:beta` : dernière version **beta**
- `jeedom/jeedom:4.x` : les versions sont conservées depuis 4.3
- `jeedom/jeedom:4.x-buster` : Une variante basée sur Debian Buster

La liste complète est disponible sur le [Docker Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

> **TIPS**
>
> Avec l'option `-d` Docker vous rend immédiatement la main (option 'detach') mais installe en tâche de fond. Il est possible de suivre les logs avec la commande `docker logs jeedom-server -f` (option f = follow)

Il vous faut ensuite installer Jeedom en allant sur : ``IP_DOCKER:80``

> **TIPS**
>
> Vous pouvez voir les dockers qui tournent ``docker ps`` pour arreter votre container, jeedom-server par exemple, il vous suffit de faire ``docker stop jeedom-server``, pour le relancer ``docker start jeedom-server``

Pour la suite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/index)
