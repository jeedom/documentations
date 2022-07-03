# Installation on Docker

> **Important**
>
> Attention, we assume here that you already master Docker

## Installing docker

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

Installing the image :

``docker pull jeedom/jeedom:V4-stable``

Then run the :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 9080:80 jeedom/jeedom:V4-stable``

With :

-   ``jeedom-server`` : name of the wanted jeedom Docker
-   ``/opt/jeedom/www`` and ``/opt/jeedom/db`` : directory where Jeedom data is put on the host (be careful to create them before)

> **TIPS**
>
> It is possible that following the launch docker will not give you back control, nothing serious you can close everything jeedom will continue to run

You then need to install Jeedom by going to : ``IP_DOCKER:9080``

> **TIPS**
>
> You can see the spinning dockers ``docker ps`` to stop jeedom-server for example you just have to do ``docker stop jeedom-server``, to restart it ``docker start jeedom-server``

For the rest, you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
