# Docker installation

> **Important**
>
> Please note, we assume here that you are already familiar with Docker

To discover Jeedom, you can also rotate it in a Docker container :

## Docker installation

Docker is now available on all recent distributions.
To install it on a distribution

-   rpm based

````
yum install docker
````

-   deb based

````
apt-gand update
apt-gand install docker
apt-gand install docker.io
````

## Installing a Jeedom image

Image installation :

``docker pull jeedom/jeedom``

Then launch the :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/mysql:/var/lib/mysql -e ROOT_PASSWORD=your-root-password -p 9080:80 jeedom/jeedom``

With :

-   ``jeedom-server`` : jeedom Docker name wanted
-   ``/opt/jeedom/www`` and ``/opt/jeedom/mysql`` : directory where Jeedom data is put on the host
-   ``your-root-password`` : root password to access Jeedom in SSH

Then you need to install Jeedom by going to : IP \ _DOCKER:9080

For the rest, you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
