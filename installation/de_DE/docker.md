# Installation in Docker

Die folgende Anleitung richtet sich an Benutzer, die mit Docker-Umgebungen vertraut sind.

>**WICHTIG**
>
>Jeedom-Instanzen unter Docker werden vom offiziellen Support nicht unterstützt.

## Docker-Installation

Docker ist auf allen neueren Distributionen verfügbar.
So installieren Sie es auf einer Distribution

- auf Basis von ``rpm`` :
````sh
yum install docker
````

- auf Basis von ``deb`` :
````sh
sudo apt update && sudo apt install docker.io
````

## Installation eines Jeedom-Images

Installation des Images:
````sh
docker pull jeedom/jeedom:latest
````

Starten Sie sie anschließend:
````sh
sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest
````

Mit:

- ``jeedom-server`` : Name des gewünschten Jeedom-Containers
- ``/opt/jeedom/www`` und ``/opt/jeedom/db`` : Verzeichnis, in dem die Jeedom-Daten auf dem Host abgelegt werden *(bitte darauf achten, diese vorher anzulegen)*
- ``-p 80:80``: Der Port des Containers *(80)* wird auf den Port des Hosts *(standardmäßig ebenfalls 80)* umgeleitet

> **INFORMATION**
>
> Mit der Option `-d` *(``detach``)*, Docker gibt die Kontrolle sofort wieder an Sie zurück, führt die Installation jedoch im Hintergrund durch. Die Protokolle können mit dem Befehl `docker logs jeedom-server -f` (Option f = follow)

Anschließend müssen Sie Jeedom installieren, indem Sie folgende Seite aufrufen: ``IP_DOCKER:80``

> **INFORMATION**
>
> Sie können die laufenden Docker-Container sehen ``docker ps`` Um Ihren Container, zum Beispiel den Jeedom-Server, anzuhalten, müssen Sie lediglich Folgendes tun: ``docker stop jeedom-server``, um es wieder in Gang zu bringen ``docker start jeedom-server``

## Docker Compose

Auch Sie können Jeedom mit Docker Compose installieren:

### Im 1-Dienst-Modus

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

### Im 2-Dienste-Modus *(experimentell)*

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
>Vergessen Sie nicht, die `TODO` mit den gewünschten Passwörtern
>
>Der Port, auf dem Apache lauscht, kann mit der Umgebungsvariable festgelegt werden `APACHE_PORT`, bitte achten Sie darauf, das `healthcheck` mit dem neuen Port. Achtung: Dies ist erst ab Jeedom 4.5 möglich.

## Liste der verfügbaren Bilder

- `jeedom/jeedom:latest` : Neueste **stabile** Version auf Debian Bookworm (Beta)
- `jeedom/jeedom:beta` : Neueste **Beta**-Version
- `jeedom/jeedom:4.x` : Die Versionen werden seit 4.3 beibehalten
- `jeedom/jeedom:4.x-bullseye` : Eine auf Debian Bullseye basierende Variante, die vorzuziehen ist
- `jeedom/jeedom:4.x-buster` : Eine auf Debian Buster basierende Variante (veraltet)
- `jeedom/jeedom:4.x-bookworm` : Eine auf Debian Bookworm basierende Variante (Beta)
- `jeedom/jeedom:4.x-http-bookworm` : Eine auf Debian Bookworm basierende Variante, die nur Jeedom enthält, jedoch kein MariaDB. Wird für Docker Compose (Beta) verwendet.

Die vollständige Liste finden Sie auf der [Docker Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

## Erste Anmeldung

Die Dokumentation zur [**Erste Anmeldung**](/premiers-pas/#Première%20connexion) um nach der Installation auf die Jeedom-Benutzeroberfläche zuzugreifen.
