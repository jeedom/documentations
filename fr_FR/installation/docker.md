# Installation sur Docker

> **Important**
>
> Attention, nous partons ici du principe que vous maîtrisez déjà Docker

Pour découvrir Jeedom, vous pouvez aussi le faire tourner dans un conteneur Docker :

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

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/mysql:/var/lib/mysql -e ROOT_PASSWORD=your-root-password -p 9080:80 jeedom/jeedom``

Avec :

-   ``jeedom-server`` : nom du Docker jeedom voulu
-   ``/opt/jeedom/www`` et ``/opt/jeedom/mysql`` : répertoire où les données de Jeedom sont mises sur l’hôte
-   ``your-root-password`` : mot de passe root pour accéder à Jeedom en SSH

Il vous faut ensuite installer Jeedom en allant sur : ``IP_DOCKER:9080``

Pour la suite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/index)
