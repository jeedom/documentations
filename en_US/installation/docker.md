# Docker installation

> **Important**
>
> Please note, we assume here that you are already familiar with Docker

## Docker installation

Docker is now available on all recent distributions.
To install it on a distribution

-   made of ``rpm``

````
yum install docker
````

-   made of ``deb``

````
apt-gand update
apt-gand install docker.io
````

## Installing a Jeedom image

Image installation :

``docker pull jeedom/jeedom:latest``

Then launch the :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest``

With :

-   ``jeedom-server`` : name of the desired jeedom container
-   ``/opt/jeedom/www`` and ``/opt/jeedom/db`` : directory where Jeedom data is put on the host (be careful to create it before)
-  `` -p 80:80``: the container port (80) is forwarded to the host port (by default 80 too)

### List of available images
- `jeedom/jeedom:latest` : last version **steady**
- `jeedom/jeedom:beta` : last version **beta**
- `jeedom/jeedom:4.x` : versions are kept from 4.3
- `jeedom/jeedom:4.x-buster` : A variant based on Debian Buster

The full list is available at [Docker Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

> **TIPS**
>
> With the `-d` option Docker gives you back control immediately ('detach' option) but installs in the background. It is possible to follow the logs with the command `docker logs jeedom-server -f` (option f = follow)

Then you need to install Jeedom by going to : ``IP_DOCKER:80``

> **TIPS**
>
> You can see the dockers turning ``docker ps`` to stop your container, jeedom-server for example, you just have to do ``docker stop jeedom-server``, to revive it ``docker start jeedom-server``

For the rest, you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
