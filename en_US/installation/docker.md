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

``docker pull jeedom/jeedom:V4-stable``

Then launch the :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 9080:80 jeedom/jeedom:V4-stable``

With :

-   ``jeedom-server`` : jeedom Docker name wanted
-   ``/opt/jeedom/www`` and ``/opt/jeedom/db`` : directory where Jeedom data is put on the host (be careful to create it before)

> **TIPS**
>
> It is possible that after launching docker does not return your hand, nothing serious you can close everything jeedom will continue to run

Then you need to install Jeedom by going to : ``IP_DOCKER:9080``

> **TIPS**
>
> You can see the dockers turning ``docker ps`` to stop jeedom-server for example you just have to do ``docker stop jeedom-server``, to revive it ``docker start jeedom-server``

For the rest, you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
