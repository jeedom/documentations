# Installation auf Raspberry Pi

Hier finden Sie die Dokumentation zur Installation von Jeedom auf einem Himbeer-PI **mit einer SD-Karte.**

> **Wichtig**
>
> Debian 10 (Buster) ist die offiziell unterstützte Distribution.

## Laden Sie das neueste "lite" -Bild herunter"

[hier](https://downloads.raspberrypi.org/raspbian_lite_latest)

## Brennen Sie dieses Bild beispielsweise mit einem Radierer auf eine SD

[hier](https://etcher.io/)

> **Notiz**
>
> Wenn Sie Ihr Bild mit Etcher brennen, ist der Dekomprimierungsschritt nutzlos (Zip-Format wird direkt bei der Auswahl der Bilddatei erkannt).

## Aktivieren Sie den SSH-Zugriff

> **Warnung**
>
> Aus Sicherheitsgründen ist der SSH-Zugriff für diese Distribution standardmäßig nicht mehr aktiviert. Also musst du es aktivieren.

Auf der Boot-Partition muss eine leere SSH-Datei erstellt werden (die einzige, auf die unter Windows zugegriffen werden kann).

Klicken Sie einfach mit der rechten Maustaste : neues / Textdokument und benenne es in "ssh" um" **ohne Verlängerung**

> **Wichtig**
>
> Unter Windows müssen Sie daher im Explorer Ihre Konfiguration in Anzeige / Optionen / Ordner ändern und Suchoptionen ändern /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Starten Sie den PI

Legen Sie Ihre SD-Karte ein, schließen Sie das Netzwerkkabel an und schließen Sie die Stromversorgung an.

## Verbinden Sie sich in SSH

Identifizieren Sie Ihren Pi im Netzwerk

Sie müssen die IP-Adresse Ihres PI kennen. Mehrere Lösungen :

-   Konsultieren Sie die DHCP-Konfiguration in Ihrem Router
-   Verwenden Sie einen Port-Scanner vom Typ Angyipscanner" [hier](http://angryip.org/download/#windows)

Verbindung herstellen

Verwenden Sie dann beispielsweise Kitt, um Ihre Verbindung herzustellen [Hier](http://www.putty.org/)

Geben Sie die IP-Adresse Ihres PI ein (hier 192.168.0.10) und klicken Sie auf Öffnen. Akzeptieren Sie die Standardsicherheitsmeldung, wenn Sie sich zum ersten Mal anmelden.

Melden Sie sich mit Anmeldeinformationen an **Pi / Himbeere**

> **Wichtig**
>
> Aus Sicherheitsgründen muss das Standardkennwort unbedingt geändert werden. Besonders häufig sind Fälle von Hacking, die auf der Verwendung des Standard-Login / Passwort-Paares der Himbeere basieren. (Befehl passwd und sudo passwd)

## Starten Sie das Installationsskript jeedom

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

**Das Sudo-Passwort lautet ebenfalls Himbeere**

> **Notiz**
>
> Abhängig von Ihrer Internetgeschwindigkeit kann die Installation 45 bis 90 Minuten dauern. Sie dürfen den Vorgang nicht vor dem Ende unterbrechen. Andernfalls müssen Sie den gesamten Vorgang wiederholen.

Dann gehen Sie einfach zu IP\_MACHINE\_JEEDOM

> **Notiz**
>
> Die Standardanmeldeinformationen sind admin / admin

> **Notiz**
>
> Die folgenden Argumente können verwendet werden : -w = Webserver-Ordner -z = Installationsabhängigkeiten z-Wave -m = gewünschtes MySQL-Root-Passwort

````
./install.sh -w /var/www/html -z
````

## Systemoptimierung

Wenn Sie Ihre Raspberry for Jeedom ohne angeschlossenen Bildschirm verwenden, wird empfohlen, den minimalen Arbeitsspeicher im Videoteil mitzuführen.

Einfach einloggen **SSH** und ändern Sie die Konfigurationsdatei : ``sudo nano /boot/config.txt``

Hinzufügen **und / oder** Kommentar entfernen (durch Entfernen des #) **und / oder** Bearbeiten Sie die Zeilen :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Beenden Sie durch Speichern : ``CTRL+X`` dann ``O`` dann ``ENTER``

Starten Sie Ihr RPI neu

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
