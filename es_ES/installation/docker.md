# Instalación de Docker

> **Importante**
>
> Tenga en cuenta que aquí asumimos que ya está familiarizado con Docker

## Instalación de Docker

Docker ahora está disponible en todas las distribuciones recientes.
Para instalarlo en una distribución

-   a base de ``rpm``

````
yum install docker
````

-   a base de ``deb``

````
apt-gy update
apt-gy install docker.io
````

## Instalar una imagen Jeedom

Instalación de imagen :

``docker pull jeedom/jeedom:latest``

Luego inicie el :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 9080:80 jeedom/jeedom``

Con :

-   ``jeedom-server`` : Se busca el nombre de Jeedom Docker
-   ``/opt/jeedom/www`` y ``/opt/jeedom/db`` : directorio donde los datos de Jeedom se colocan en el host (tenga cuidado de crearlos antes)

> **Consejos**
>
> Es posible que después de iniciar Docker no le devuelva la mano, nada serio puede cerrar todo, la libertad continuará ejecutándose

Entonces necesita instalar Jeedom yendo a : ``IP_DOCKER:9080``

> **Consejos**
>
> Puedes ver a los estibadores girando ``docker ps`` para detener jeedom-server, por ejemplo, solo tienes que hacer ``docker stop jeedom-server``, revivirlo ``docker start jeedom-server``

Por lo demás, puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
