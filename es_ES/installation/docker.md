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

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest``

Con :

-   ``jeedom-server`` : nombre del contenedor de jeedom deseado
-   ``/opt/jeedom/www`` y ``/opt/jeedom/db`` : directorio donde los datos de Jeedom se colocan en el host (tenga cuidado de crearlos antes)
-  `` -p 80:80``: el puerto del contenedor (80) se reenvía al puerto del host (por defecto 80 también)

### Lista de imágenes disponibles
- `jeedom/jeedom:último` : última versión **estable**
- `jeedom/jeedom:beta` : última versión **beta**
- `jeedom/jeedom:4.x` : Se mantienen versiones desde la 4.3
- `jeedom/jeedom:4.x-buster` : Una variante basada en Debian Buster

La lista completa está disponible en [Centro acoplable](https://hub.docker.com/r/jeedom/jeedom/tags)

> **Consejos**
>
> Con la opción `-d` Docker le devuelve el control inmediatamente (opción 'separar') pero se instala en segundo plano. Es posible seguir los registros con el comando `docker logs jeedom-server -f` (opción f = seguir)

Entonces necesita instalar Jeedom yendo a : ``IP_DOCKER:80``

> **Consejos**
>
> Puedes ver a los estibadores girando ``docker ps`` para detener su contenedor, jeedom-server por ejemplo, solo tiene que hacer ``docker stop jeedom-server``, revivirlo ``docker start jeedom-server``

Por lo demás, puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
