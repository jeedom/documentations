# Installation in Docker

The following procedure is intended for users who are familiar with Docker environments.

>**IMPORTANT**
>
>Jeedom instances running in Docker are not supported by official support.

## Installing Docker

Docker is available on all recent distributions.
To install it on a distribution

- based on ``rpm`` :
````sh
yum install docker
````

- based on ``deb`` :
````sh
sudo apt update && sudo apt install docker.io
````

## Installing a Jeedom image

Installing the image:
````sh
docker pull jeedom/jeedom:latest
````

Then run it:
````sh
sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest
````

Featuring:

- ``jeedom-server`` : name of the desired Jeedom container
- ``/opt/jeedom/www`` and ``/opt/jeedom/db`` : directory where Jeedom data is stored on the host *(be sure to create it first)*
- ``-p 80:80``: Port *(80)* on the container is forwarded to the host port *(also 80 by default)*

> **INFORMATION**
>
> With the option `-d` *(``detach``)*, Docker immediately returns control to you but continues installing in the background. You can monitor the logs using the command `docker logs jeedom-server -f` (option f = follow)

Next, you'll need to install Jeedom by going to: ``IP_DOCKER:80``

> **INFORMATION**
>
> You can see the Docker containers that are running ``docker ps`` To stop your container—jeedom-server, for example—simply do the following: ``docker stop jeedom-server``, to revive it ``docker start jeedom-server``

## Docker Compose

You, too, can install Jeedom using Docker Compose:

### In 1-service mode

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

### In 2-service mode *(experimental)*

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

>**INFORMATION**
>
>Don't forget to fill out the `TODO` with the desired passwords
>
>You can specify the port Apache listens on using the environment variable `APACHE_PORT`, be sure to update the `healthcheck` with the new port. Please note that this is only available starting with Jeedom 4.5.

## List of available images

- `jeedom/jeedom:latest` : latest **stable** version on Debian Bookworm (beta)
- `jeedom/jeedom:beta` : latest **beta** version
- `jeedom/jeedom:4.x` : Versions have been retained since 4.3
- `jeedom/jeedom:4.x-bullseye` : A Debian Bullseye-based variant, recommended
- `jeedom/jeedom:4.x-buster` : A variant based on Debian Buster (deprecated)
- `jeedom/jeedom:4.x-bookworm` : A variant based on Debian Bookworm (beta)
- `jeedom/jeedom:4.x-http-bookworm` : A variant based on Debian Bookworm that contains only Jeedom, no MariaDB. Used for Docker Compose (beta)

The complete list is available at the [Docker Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

## First connection

View the documentation related to [**First login**](/premiers-pas/#Première%20connexion) to access the Jeedom interface after installation.
