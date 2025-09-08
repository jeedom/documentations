# 

.

>**Wichtig**
>
>.

## Docker-Installation

.
So installieren Sie es auf einer Distribution

- gemacht aus ``rpm`` :
„`sh

„`

- gemacht aus ``deb`` :
„`sh
sudo apt update && sudo apt install docker.io
„`

## Installieren eines Jeedom-Images

Image-Installation :
„`sh
:latest
„`

Puis lancez la :
„`sh
sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest
„`

Mit :

- ``jeedom-server`` : Name des gewünschten Jeedom-Containers
- ``/opt/jeedom/www`` und ``/opt/jeedom/db`` :  *()*
- ``-p 80:80``:  *(80)*  *()*

> ****
>
>  *(``detach``)*, . Es ist möglich, den Protokollen mit dem Befehl `docker logs jeedom-server -f` zu folgen (Option f = follow)

Dann müssen Sie Jeedom installieren, indem Sie zu gehen : ``IP_DOCKER:80``

> ****
>
> Sie können sehen, wie sich die Hafenarbeiter drehen ``docker ps`` Um Ihren Container, beispielsweise den Jeedom-Server, zu stoppen, müssen Sie nur tun ``docker stop jeedom-server``, um es wiederzubeleben ``docker start jeedom-server``

## Docker komponieren

Auch Sie können Jeedom mit Docker Compose installieren :

### 

„dockerfile
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
    Netzwerkmodus: bridge
    healthcheck:
      test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 5
volumes:
  db:
  http:
„

###  *(experimental)*

„dockerfile
services:
  jeedom_db:
    image: mariadb:latest
    Containername: jeedom_db
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
      - "--Interactive_timeout=600"
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
    image: jeedom/jeedom:4.4-http-Bücherwurm
    Containername: jeedom_http
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
    kommt drauf an:
      - jeedom_db
volumes:
  db:
  http:
„

>****
>
>Vergessen Sie nicht, das „TODO“ mit den gewünschten Passwörtern zu vervollständigen
>
>Es ist möglich, den Apache-Listening-Port mit der Umgebungsvariablen „APACHE_PORT“ anzugeben. Achten Sie darauf, den „Healthcheck“ mit dem neuen Port zu aktualisieren. Bitte beachten Sie, dass dies erst ab Jeedom 4.5 möglich ist

## Liste der verfügbaren Bilder

- `jeedom / jeedom:neuste` : Letzte Version **stetig** auf Debian Bookworm (Beta)
- `jeedom / jeedom:beta` : Letzte Version **Beta**
- `jeedom / jeedom:4.x` : Versionen ab 4.3 beibehalten
- `jeedom / jeedom:4.x-bullseye` : Eine auf Debian Bullseye basierende Variante, die bevorzugt werden sollte
- `jeedom / jeedom:4.x-buster‘ : Eine Variante basierend auf Debian Buster (veraltet)
- `jeedom / jeedom:4.x-bücherwurm` : Eine Variante basierend auf Debian Bookworm (Beta)
- `jeedom / jeedom:4.x-http-bookworm` : Eine auf Debian Bookworm basierende Variante, die nur Jeedom, keine Mariadb enthält. Wird für Docker Composer (Beta) verwendet)

Die vollständige Liste finden Sie unter [Docker-Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

## 

 [****](../premiers-pas/#Première%20connexion) .
