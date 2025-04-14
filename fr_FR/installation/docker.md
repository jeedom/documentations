# Installation sur Docker

> **Important**
>
> Attention, nous partons ici du principe que vous maîtrisez déjà Docker.

## Installation de docker

Docker est maintenant disponible sur toutes les distributions récentes.
Pour l’installer sur une distribution :

- à base de ``rpm``

````
yum install docker
````

- à base de ``deb``

````
apt-get update
apt-get install docker.io
````

## Installation d’une image Jeedom

Installation de l’image :

``docker pull jeedom/jeedom:latest``

Puis lancez la :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest``

Avec :

- ``jeedom-server`` : nom du container jeedom voulu
- ``/opt/jeedom/www`` et ``/opt/jeedom/db`` : répertoire où les données de Jeedom sont mises sur l’hôte (attention a bien les créer avant)
-  `` -p 80:80``: le port du container (80) est redirigé vers le port de l'hôte (par défaut 80 aussi)

### Liste des images disponibles
- `jeedom/jeedom:latest` : dernière version **stable** sur Debian bookworm (beta)
- `jeedom/jeedom:beta` : dernière version **beta**
- `jeedom/jeedom:4.x` : les versions sont conservées depuis 4.3
- `jeedom/jeedom:4.x-bullseye` : Une variante basée sur Debian Bullseye, à privilégier
- `jeedom/jeedom:4.x-buster` : Une variante basée sur Debian Buster (deprecated)
- `jeedom/jeedom:4.x-bookworm` : Une variante basée sur Debian bookworm (beta)
- `jeedom/jeedom:4.x-http-bookworm` : Une variante basée sur Debian bookworm ne contenant que Jeedom, pas de mariadb. Utilisée pour docker composer (beta)

La liste complète est disponible sur le [Docker Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

> **Note**
>
> Avec l'option `-d` Docker vous rend immédiatement la main (option 'detach') mais installe en tâche de fond. Il est possible de suivre les logs avec la commande `docker logs jeedom-server -f` (option f = follow)

Il vous faut ensuite installer Jeedom en allant sur : ``IP_DOCKER:80``

> **Note**
>
> Vous pouvez voir les dockers qui tournent ``docker ps`` pour arrêter votre container, jeedom-server par exemple, il vous suffit de faire ``docker stop jeedom-server``, pour le relancer ``docker start jeedom-server``

Pour la suite, vous pouvez suivre la documentation [Premier pas avec Jeedom](../premiers-pas/index)

# Docker compose

Vous pouvez vous aussi installer jeedom à l'aide de docker compose : 

## En mode 1 service

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

## En mode 2 services (experimental)

```
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

> **Attention**
>
> N'oubliez pas completer les `TODO` avec les mots de passe voulu

> **Note**
>
> Il est possible de spécifier le port d'écoute d'Apache avec la variable d'environnement `APACHE_PORT`, attention à bien mettre à jour le `healthcheck` avec le nouveau port. Attention cela n'est possible qu'à partir de Jeedom 4.5
