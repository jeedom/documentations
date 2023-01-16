# 

> ****
>
> 

## 

.


-    ``rpm``

````
yum install docker
````

-    ``deb``

````
apt-g update
apt-g install docker.io
````

## 

 :

``docker pull jeedom/jeedom:V4-stable``

 :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 9080:80 jeedom/jeedom:V4-stable``

 :

-   ``jeedom-server`` : 
-   ``/opt/jeedom/www``  ``/opt/jeedom/db`` : )

> ****
>
> 

 : ``IP_DOCKER:9080``

> ****
>
>  ``docker ps``  ``docker stop jeedom-server``,  ``docker start jeedom-server``

 [](https://doc.jeedom.com/en_US/premiers-pas/index)
