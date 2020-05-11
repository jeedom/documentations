# Docker-Installation

> **Important**
>
> Bitte beachten Sie, dass wir hier davon ausgehen, dass Sie mit Docker bereits vertraut sind

Um Jeedom zu entdecken, können Sie es auch in einem Docker-Container drehen :

## Docker-Installation

Docker ist jetzt für alle aktuellen Distributionen verfügbar.
So installieren Sie es auf einer Distribution

-   Drehzahl basiert

````
yum install docker
````

-   deb basiert

````
apt-gundupdate
apt-gundinstall docker
apt-gundinstall docker.io
````

## Installieren eines Jeedom-Images

Image-Installation :

``docker pull jeedom/jeedom``

Starten Sie dann die :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/mysql:/var/lib/mysql -e ROOT_PASSWORD=your-root-password -p 9080:80 jeedom/jeedom``

Mit:

-   ``jeedom-server`` : Jeedom Docker Name gesucht
-   ``/opt/jeedom/www`` und``/opt/jeedom/mysql`` : Verzeichnis, in dem Jeedom-Daten auf dem Host abgelegt werden
-   ``your-root-password`` : Root-Passwort für den Zugriff auf Jeedom in SSH

Dann müssen Sie Jeedom installieren, indem Sie zu gehen : IP\_DOCKER:9080

Im Übrigen können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
