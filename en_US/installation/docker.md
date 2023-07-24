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

``docker pull jeedom/jeedom:latest``

Then launch the :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest``

With :

-   ``jeedom-server`` : name of the desired jeedom container
-   ``/opt/jeedom/www`` and ``/opt/jeedom/db`` : directory where Jeedom data is put on the host (be careful to create it before)
-  `` -p 80:80``: the container port (80) is forwarded to the host port (by default 80 too)

### List of available images
- `jeedom/jeedom:latest` : last version **steady**
- `jeedom/jeedom:beta` : last version **beta**
- `jeedom/jeedom:4.x` : versions are kept from 4.3
- `jeedom/jeedom:4.x-buster` : A variant based on Debian Buster
- `jeedom/jeedom:4.x-bookworm` : A variant based on Debian bookworm (beta)
- `jeedom/jeedom:4.x-http-bookworm` : A variant based on Debian bookworm containing only Jeedom, no mariadb. Used for docker composer (beta)

The full list is available at [Docker Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

> **TIPS**
>
> With the `-d` option Docker gives you back control immediately ('detach' option) but installs in the background. It is possible to follow the logs with the command `docker logs jeedom-server -f` (option f = follow)

Then you need to install Jeedom by going to : ``IP_DOCKER:80``

> **TIPS**
>
> You can see the dockers turning ``docker ps`` to stop your container, jeedom-server for example, you just have to do ``docker stop jeedom-server``, to revive it ``docker start jeedom-server``

For the rest, you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)


# Docker compose

You too can install jeedom using docker compose : 

## In 1 service mode

```
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
      - 51001:51001
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


## In 2-service mode (experimental)

```
services:
  db:
    image: mariadb:latest
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
  http:
    image: jeedom/jeedom:4.4-http-bookworm
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
    depends_on:
      - db
volumes:
  db:
  http:
```

>**TIPS**
>
>Do not forget to complete the `TODO` with the desired passwords
