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

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 9080:80 jeedom/jeedom``

Avec :

-   ``jeedom-server`` : nom du Docker jeedom voulu
-   ``/opt/jeedom/www`` et ``/opt/jeedom/db`` : répertoire où les données de Jeedom sont mises sur l’hôte (attention a bien les créer avant)

> **TIPS**
>
> Il est possible que suite au lancement docker ne vous rende pas la main, rien de grave vous pouvez tout fermer jeedom continuera de tourner

Il vous faut ensuite installer Jeedom en allant sur : ``IP_DOCKER:9080``

> **TIPS**
>
> Vous pouvez voir les dockers qui tournent ``docker ps`` pour arreter jeedom-server par exemple il vous suffit de faire ``docker stop jeedom-server``, pour le relancer ``docker start jeedom-server``

Pour la suite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/index)
