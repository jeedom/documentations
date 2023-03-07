# Docker-Installation

> **Wichtig**
>
> Bitte beachten Sie, dass wir hier davon ausgehen, dass Sie mit Docker bereits vertraut sind

## Docker-Installation

Docker ist jetzt für alle aktuellen Distributionen verfügbar.
So installieren Sie es auf einer Distribution

-   gemacht aus ``rpm``

````
yum install docker
````

-   gemacht aus ``deb``

````
apt-gund update
apt-gund install docker.io
````

## Installieren eines Jeedom-Images

Image-Installation :

``docker pull jeedom/jeedom:latest``

Starten Sie dann die :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 80:80 -d jeedom/jeedom:latest``

Mit :

-   ``jeedom-server`` : Name des gewünschten Jeedom-Containers
-   ``/opt/jeedom/www`` und ``/opt/jeedom/db`` : Verzeichnis, in dem Jeedom-Daten auf dem Host abgelegt werden (achten Sie darauf, sie vorher zu erstellen)
-  `` -p 80:80``: der Container-Port (80) wird an den Host-Port weitergeleitet (standardmäßig ebenfalls 80))

### Liste der verfügbaren Bilder
- `jeedom / jeedom:neuste` : Letzte Version **stetig**
- `jeedom / jeedom:beta` : Letzte Version **Beta**
- `jeedom / jeedom:4.x` : Versionen ab 4.3 beibehalten
- `jeedom / jeedom:4.x-buster‘ : Eine auf Debian Buster basierende Variante

Die vollständige Liste finden Sie unter [Docker-Hub](https://hub.docker.com/r/jeedom/jeedom/tags)

> **Tipps**
>
> Mit der Option `-d` gibt Ihnen Docker sofort die Kontrolle zurück (Option 'detach'), installiert aber im Hintergrund. Es ist möglich, den Protokollen mit dem Befehl `docker logs jeedom-server -f` zu folgen (Option f = follow)

Dann müssen Sie Jeedom installieren, indem Sie zu gehen : ``IP_DOCKER:80``

> **Tipps**
>
> Sie können sehen, wie sich die Hafenarbeiter drehen ``docker ps`` Um Ihren Container, beispielsweise den Jeedom-Server, zu stoppen, müssen Sie nur tun ``docker stop jeedom-server``, um es wiederzubeleben ``docker start jeedom-server``

Im Übrigen können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
