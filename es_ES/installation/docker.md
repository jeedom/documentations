# Instalación en Docker

> **Importante**
>
> Atención, asumimos aquí que ya dominas Docker

## Instalación de la ventana acoplable

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

## Instalación de una imagen de Jeedom

Instalando la imagen :

``docker pull jeedom/jeedom:V4-stable``

Luego ejecuta el :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 9080:80 jeedom/jeedom:V4-stable``

Con :

-   ``jeedom-server`` : nombre del buscado jeedom Docker
-   ``/opt/jeedom/www`` y ``/opt/jeedom/db`` : directorio donde se colocan los datos de Jeedom en el host (tenga cuidado de crearlos antes)

> **PUNTAS**
>
> Es posible que después de lanzar docker no lo tengas en tus manos, nada grave puedes cerrar todo jeedom seguirá funcionando

Luego debe instalar Jeedom yendo a : ``IP_DOCKER:9080``

> **PUNTAS**
>
> Puedes ver los muelles giratorios ``docker ps`` para detener jeedom-server, por ejemplo, solo tienes que hacer ``docker stop jeedom-server``, para reiniciarlo ``docker start jeedom-server``

Para el resto, puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
