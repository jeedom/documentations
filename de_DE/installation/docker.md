# Installation auf Docker

> **Wichtig**
>
> Achtung, wir gehen hier davon aus, dass Sie Docker bereits beherrschen

## Docker installieren

Docker ist jetzt in allen aktuellen Distributionen verfügbar.
Um es auf einer Distribution zu installieren

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

Bild installieren :

``docker pull jeedom/jeedom:V4-stable``

Führen Sie dann die aus :

``sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www:/var/www/html -v /opt/jeedom/db:/var/lib/mysql -p 9080:80 jeedom/jeedom:V4-stable``

Mit :

-   ``jeedom-server`` : Name des gesuchten jeedom Docker
-   ``/opt/jeedom/www`` und ``/opt/jeedom/db`` : Verzeichnis, in dem Jeedom-Daten auf dem Host abgelegt werden (achten Sie darauf, diese vorher zu erstellen)

> **TIPPS**
>
> Es ist möglich, dass Sie nach dem Start von Docker es nicht in die Hände bekommen, nichts Ernstes, Sie können alles schließen, jeedom wird weiter ausgeführt

Sie müssen dann Jeedom installieren, indem Sie zu gehen : ``IP_DOCKER:9080``

> **TIPPS**
>
> Sie können die sich drehenden Docker sehen ``docker ps`` Um zum Beispiel den Jeedom-Server zu stoppen, müssen Sie nur tun ``docker stop jeedom-server``, um es neu zu starten ``docker start jeedom-server``

Für den Rest können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
