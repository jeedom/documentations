# Installation dans Docker

La procédure suivante s'adresse aux utilisateurs maitrisant les environnements Docker.

>**Importante**
>
>Les instances Jeedom sous Docker ne sont pas prises en charge par le support officiel.

## Instalación de Docker

Docker est disponible sur toutes les distributions récentes.
Para instalarlo en una distribución

- a base de ``rpm`` :
````sh
yum install docker
````

- a base de ``deb`` :
````sh
sudo apt update && sudo apt install docker.io
````

## Instalar una imagen Jeedom

Instalación de imagen :
````sh
docker pull jeedom/jeedom:latest
````

Puis lancez la :
````sh
sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom / jeedom:latest
````

Con :

- ``jeedom-server`` : nombre del contenedor de jeedom deseado
- ``/opt/jeedom/www`` y ``/opt/jeedom/db`` : répertoire où les données de Jeedom sont mises sur l'hôte *(attention a bien les créer avant)*
- ``-p 80:80``: le port du container *(80)* est redirigé vers le port de l'hôte *(par défaut 80 aussi)*

> **INFORMATION**
>
> Avec l'option `-d` *(``detach``)*, Docker vous rend immédiatement la main mais installe en tâche de fond. Es posible seguir los registros con el comando `docker logs jeedom-server -f` (opción f = seguir)

Entonces necesita instalar Jeedom yendo a : ``IP_DOCKER:80``

> **INFORMATION**
>
> Puedes ver a los estibadores girando ``docker ps`` para detener su contenedor, jeedom-server por ejemplo, solo tiene que hacer ``docker stop jeedom-server``, revivirlo ``docker start jeedom-server``

## Componer ventana acoplable

Usted también puede instalar jeedom usando docker compose :

### En mode 1 service

```dockerfile
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

### En mode 2 services *(experimental)*

```dockerfile
services:
  jeedom_db:
    image: mariadb:latest
    nombre_contenedor: jeedom_db
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
      - "--conectar_tiempo de espera = 600"
      - "--tiempo de espera = 600"
      - "--tiempo_espera_interactivo=600"
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
  jeedom_http:
    image: jeedom / jeedom:4.4-http-ratón de biblioteca
    nombre_contenedor: jeedom_http
    volumes:
      - http:/var/www/html
    tmpfs:
      - /tmp/jeedom
    ports:
      - 52080:80
    restart: always
    environment:
      - DB_HOST=jeedom_db
      - DB_USERNAME=jeedom
      - DB_PASSWORD=TODO
      - DB_NAME=jeedom
    healthcheck:
      test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 5
    depende de:
      - jeedom_db
volumes:
  db:
  http:
```

>**INFORMATION**
>
>No olvides completar el `TODO` con las contraseñas deseadas
>
>Es posible especificar el puerto de escucha de Apache con la variable de entorno `APACHE_PORT`, tenga cuidado de actualizar `healthcheck` con el nuevo puerto. Tenga en cuenta que esto solo es posible desde Jeedom 4.5

## Lista de imágenes disponibles

- `jeedom/jeedom:último` : última versión **estable** en el ratón de biblioteca Debian (beta)
- `jeedom/jeedom:beta` : última versión **beta**
- `jeedom/jeedom:4.x` : Se mantienen versiones desde la 4.3
- `jeedom/jeedom:4.x-diana` : Se prefiere una variante basada en Debian Bullseye
- `jeedom/jeedom:4.x-buster` : Una variante basada en Debian Buster (en desuso)
- `jeedom/jeedom:4.x-ratón de biblioteca` : Una variante basada en Debian bookworm (beta)
- `jeedom/jeedom:4.x-http-ratón de biblioteca` : Una variante basada en el ratón de biblioteca de Debian que contiene solo Jeedom, sin mariadb. Utilizado para docker composer (beta)

La lista completa está disponible en [Centro acoplable](https://hub.docker.com/r/jeedom / jeedom/tags)

## Première connexion

Consulter la documentation relative à la [**Première connexion**](../premiers-pas/#Première%20connexion) pour accéder à l'interface Jeedom suite à l'installation.
