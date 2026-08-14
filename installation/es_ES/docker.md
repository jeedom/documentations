# Instalación en Docker

El siguiente procedimiento está dirigido a usuarios con conocimientos avanzados de entornos Docker.

>**IMPORTANTE**
>
>Las instancias de Jeedom en Docker no están cubiertas por el servicio de asistencia oficial.

## Instalación de Docker

Docker está disponible en todas las distribuciones recientes.
Para instalarlo en una distribución

- basada en ``rpm`` :
````sh
yum install docker
````

- basada en ``deb`` :
````sh
sudo apt update && sudo apt install docker.io
````

## Instalación de una imagen de Jeedom

Instalación de la imagen:
````sh
docker pull jeedom/jeedom:latest
````

A continuación, ejecútala:
````sh
sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest
````

Con:

- ``jeedom-server`` : nombre del contenedor de Jeedom deseado
- ``/opt/jeedom/www`` y ``/opt/jeedom/db`` : directorio en el que se almacenan los datos de Jeedom en el servidor *(asegúrate de crearlos antes)*
- ``-p 80:80``: el puerto del contenedor *(80)* se redirige al puerto del host *(por defecto, también el 80)*

> **INFORMACIÓN**
>
> Con la opción `-d` *(``detach``)*, Docker te devuelve inmediatamente el control, pero la instalación se realiza en segundo plano. Es posible seguir los registros con el comando `docker logs jeedom-server -f` (opción f = seguir)

A continuación, debes instalar Jeedom accediendo a: ``IP_DOCKER:80``

> **INFORMACIÓN**
>
> Puedes ver los contenedores que se están ejecutando ``docker ps`` Para detener tu contenedor, por ejemplo, jeedom-server, solo tienes que hacer lo siguiente: ``docker stop jeedom-server``, para volver a ponerla en marcha ``docker start jeedom-server``

## Docker Compose

Tú también puedes instalar Jeedom con Docker Compose:

### En modo de un servicio

```dockerfile
services:
  jeedom:
    image: jeedom/jeedom:latest
    volumes:
      - http:/var/www/html
      - db:/var/lib/mysql
    tmpfs:
      - /tmp/jeedom
    ports:
      - 40080:80
    restart: always
    network_mode: bridge
    healthcheck:
      test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 5
volumes:
  db:
  http:
```

### En modo de 2 servicios *(experimental)*

```dockerfile
services:
  jeedom_db:
    image: mariadb:latest
    container_name: jeedom_db
    command:
      - "--default-authentication-plugin=mysql_native_password"
      - "--skip-name-resolve"
      - "--key_buffer_size=16M"
      - "--thread_cache_size=16"
      - "--tmp_table_size=48M"
      - "--max_heap_table_size=48M"
      - "--query_cache_type=1"
      - "--query_cache_size=32M"
      - "--query_cache_limit=2M"
      - "--query_cache_min_res_unit=3K"
      - "--innodb_flush_method=O_DIRECT"
      - "--innodb_flush_log_at_trx_commit=2"
      - "--innodb_log_file_size=32M"
      - "--innodb_large_prefix=on"
      - "--connect_timeout=600"
      - "--wait_timeout=600"
      - "--interactive_timeout=600"
    volumes:
      - db:/var/lib/mysql
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=TODO
      - MYSQL_DATABASE=jeedom
      - MYSQL_USER=jeedom
      - MYSQL_PASSWORD=TODO
    expose:
      - 3306
  jeedom_http:
    image: jeedom/jeedom:4.4-http-bookworm
    container_name: jeedom_http
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
    depends_on:
      - jeedom_db
volumes:
  db:
  http:
```

>**INFORMACIÓN**
>
>No olvides rellenar los `TODO` con las contraseñas deseadas
>
>Es posible especificar el puerto de escucha de Apache mediante la variable de entorno `APACHE_PORT`, asegúrate de actualizar bien el `healthcheck` con el nuevo puerto. Atención: esto solo es posible a partir de Jeedom 4.5

## Lista de imágenes disponibles

- `jeedom/jeedom:latest` : última versión **estable** en Debian Bookworm (beta)
- `jeedom/jeedom:beta` : última versión **beta**
- `jeedom/jeedom:4.x` : las versiones se conservan desde la 4.3
- `jeedom/jeedom:4.x-bullseye` : Una variante basada en Debian Bullseye, la más recomendable
- `jeedom/jeedom:4.x-buster` : Una variante basada en Debian Buster (obsoleta)
- `jeedom/jeedom:4.x-bookworm` : Una variante basada en Debian Bookworm (beta)
- `jeedom/jeedom:4.x-http-bookworm` : Una variante basada en Debian Bookworm que solo contiene Jeedom, sin MariaDB. Se utiliza para Docker Compose (beta)

La lista completa está disponible en la [Docker Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

## Primera conexión

Consulta la documentación relativa a la [**Primera conexión**](/premiers-pas/#Première%20connexion) para acceder a la interfaz de Jeedom tras la instalación.
