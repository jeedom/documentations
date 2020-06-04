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

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 9080:80 jeedom/jeedom``

Mit :

-   ``jeedom-server`` : Jeedom Docker Name gesucht
-   ``/opt/jeedom/www`` und ``/opt/jeedom/db`` : Verzeichnis, in dem Jeedom-Daten auf dem Host abgelegt werden (achten Sie darauf, sie vorher zu erstellen)

> **Tipps**
>
> Es ist möglich, dass nach dem Start von Docker Ihre Hand nicht zurückkehrt, nichts Ernstes können Sie alles schließen, was jeedom weiterläuft

Dann müssen Sie Jeedom installieren, indem Sie zu gehen : ``IP_DOCKER:9080``

> **Tipps**
>
> Sie können sehen, wie sich die Hafenarbeiter drehen ``docker ps`` Um zum Beispiel Jeedom-Server zu stoppen, müssen Sie nur tun ``docker stop jeedom-server``, um es wiederzubeleben ``docker start jeedom-server``

Im Übrigen können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
