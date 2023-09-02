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

``docker pull jeedom / jeedom:latest``

Luego inicie el :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom / jeedom:latest``

Con :

-   ``jeedom-server`` : nombre del contenedor de jeedom deseado
-   ``/opt/jeedom/www`` y ``/opt/jeedom/db`` : directorio donde los datos de Jeedom se colocan en el host (tenga cuidado de crearlos antes)
-  `` -p 80:80``: el puerto del contenedor (80) se reenvía al puerto del host (por defecto 80 también)

### Lista de imágenes disponibles
- `jeedom/jeedom:último` : última versión **estable**
- `jeedom/jeedom:beta` : última versión **beta**
- `jeedom/jeedom:4.x` : Se mantienen versiones desde la 4.3
- `jeedom/jeedom:4.x-buster` : Una variante basada en Debian Buster
- `jeedom/jeedom:4.x-ratón de biblioteca` : Una variante basada en Debian bookworm (beta)
- `jeedom/jeedom:4.x-http-ratón de biblioteca` : Una variante basada en el ratón de biblioteca de Debian que contiene solo Jeedom, sin mariadb. Utilizado para docker composer (beta)

La lista completa está disponible en [Centro acoplable](https://hub.docker.com/r/jeedom / jeedom/tags)

> **Consejos**
>
> Con la opción `-d` Docker le devuelve el control inmediatamente (opción 'separar') pero se instala en segundo plano. Es posible seguir los registros con el comando `docker logs jeedom-server -f` (opción f = seguir)

Entonces necesita instalar Jeedom yendo a : ``IP_DOCKER:80``

> **Consejos**
>
> Puedes ver a los estibadores girando ``docker ps`` para detener su contenedor, jeedom-server por ejemplo, solo tiene que hacer ``docker stop jeedom-server``, revivirlo ``docker start jeedom-server``

Por lo demás, puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)


# Componer ventana acoplable

Usted también puede instalar jeedom usando docker compose : 

## En 1 modo de servicio

```
services:
  jeedom:
    image: jeedom / jeedom:latest
    volumes:
      - http:/var/www/html
      - db:/var/lib/mysql
    tmpfs:
      - /tmp/jeedom
    ports:
      - 40080:80
      - 51001:51001
    restart: always
    Modo de red: bridge
    healthcheck:
      test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 5
volumes:
  db:
  http:
```


## En modo 2 servicios (experimental)

```
services:
  db:
    image: mariadb:latest
    command: 
      - "--plugin de autenticación por defecto=mysql_native_password"
      - "--skip-name-resolve"
      - "--tamaño_búfer_clave=16M"
      - "--thread_cache_size=16"
      - "--tmp_table_size=48M"
      - "--max_heap_table_size=48M"
      - "--consulta_caché_tipo=1"
      - "--tamaño_caché_consulta=32M"
      - "--query_cache_limit=2M"
      - "--query_cache_min_res_unit=3K"
      - "--innodb_flush_method=O_DIRECTO"
      - "--innodb_flush_log_at_trx_commit=2"
      - "--innodb_log_file_size=32M"
      - "--innodb_large_prefix=activado"
    volumes:
      - db:/var/lib/mysql
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=POR HACER
      - MYSQL_DATABASE=jeedom
      - MYSQL_USER=jeedom
      - MYSQL_PASSWORD=TODO
    expose:
      - 3306
  http:
    image: jeedom / jeedom:4.4-http-ratón de biblioteca
    volumes:
      - http:/var/www/html
    tmpfs:
      - /tmp/jeedom
    ports:
      - 52080:80
    restart: always
    environment:
      - DB_HOST=db
      - DB_USERNAME=jeedom
      - DB_PASSWORD=TODO
      - DB_NAME=jeedom
    healthcheck:
      test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 5
    depende de:
      - db
volumes:
  db:
  http:
```

>**Consejos**
>
>No olvides completar el `TODO` con las contraseñas deseadas
