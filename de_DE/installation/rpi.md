# Installation auf Raspberry Pi

Hier finden Sie die Dokumentation zur Installation von Jeedom auf einem Himbeer-PI **mit einer MiroSD-Karte.**. Es gibt 2 Modi :

- Automatisch (Beta) : Verwendung des Bildes für Raspberry Pi von Jeedom mit vorinstalliertem Jeedom
- Befehlszeile : manuelle Installation von Jeedom von Raspberry Pi OS

> **Wichtig**
>
> Debian 10 (Buster) ist die offiziell unterstützte Distribution.

# Automatische Installation

## Laden Sie das neueste Bild herunter

Sie finden die Bilder [hier](https://images.jeedom.com/rpi/)

> **WICHTIG**
>
>Es gibt 2 Bilder : jeedom-debian-XXXX-rpi-X.X.XX.Der 32-Bit-Reißverschluss ist kompatibel mit Raspberry PI-Modellen der Generationen 2 und 3 und jeedom-debian-XXXX-rpi-64-X.X.XX.zip, das in 64bits ist, ist es nur für Raspberry Pi4 kompatibel und ist in Alpha (nicht empfohlen)).

Mit dem Raspberry Pi Imager können Sie das Installationsimage von Raspberry Pi OS in der neuesten Version direkt herunterladen.

## Brennen Sie dieses Bild beispielsweise mit dem Raspberry Pi Imager auf eine MicroSD-Karte

Sie können es herunterladen [hier](https://www.raspberrypi.org/downloads/)

## Starten Sie den PI

Legen Sie Ihre MicroSD-Karte ein, schließen Sie das Netzwerkkabel an und schließen Sie die Stromversorgung an.

> **Wichtig**
>
> Beim ersten Start ist der Raspberry Pi möglicherweise langsam, da die Größe der Partition an die Größe Ihrer MicroSD-Karte angepasst wird. Darüber hinaus ist es ratsam, nach dem ersten Start erneut zu starten, damit der Swap die richtige Größe hat.

Il vous suffit ensuite, dedann votre navigateur, de saisir : http://IP_RPI/ (en remplaçant IP_RPI par l'ip de votre Raspberry Pi).

> **Informationen**
>
> Die Standard-SSH-Anmeldeinformationen sind : jeedom und Mjeedom96 für das Passwort 

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)

# Befehlszeileninstallation

## Laden Sie das neueste "lite" -Bild herunter"

[hier](https://downloads.raspberrypi.org/raspbian_lite_latest)

Mit dem Raspberry Pi Imager können Sie das Installationsimage von Raspberry Pi OS in der neuesten Version direkt herunterladen.

## Brennen Sie dieses Bild beispielsweise mit dem Raspberry Pi Imager auf eine MiroSD-Karte

[hier](https://www.raspberrypi.org/downloads/)

> **Notiz**
>
> Wenn Sie Ihr Bild mit Etcher brennen, ist der Dekomprimierungsschritt nutzlos (das Zip-Format wird direkt bei der Auswahl der Bilddatei erkannt).

## Aktivieren Sie den SSH-Zugriff

> **Warnung**
>
> Aus Sicherheitsgründen ist der SSH-Zugriff für diese Distribution standardmäßig nicht mehr aktiviert. Also musst du es aktivieren.

Auf der Boot-Partition muss eine leere SSH-Datei erstellt werden (die einzige, auf die unter Windows zugegriffen werden kann).

Klicken Sie einfach mit der rechten Maustaste : neues / Textdokument und benenne es in "ssh" um" **ohne Verlängerung**

> **Wichtig**
>
> Unter Windows müssen Sie daher im Explorer Ihre Einstellungen in Anzeige / Optionen / Ordner ändern und Suchoptionen ändern /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Starten Sie den Raspberry Pi

Legen Sie Ihre MicroSD-Karte ein, schließen Sie das Netzwerkkabel an und schließen Sie die Stromversorgung an.

## Verbinden Sie sich in SSH

Identifizieren Sie Ihren Raspberry Pi im Netzwerk

Sie müssen die IP-Adresse Ihres Raspberry PI kennen. Viele Lösungen :

-   Konsultieren Sie die DHCP-Konfiguration in Ihrem Router
-   Verwenden Sie einen Port-Scanner wie "Angry IP Scanner"" [hier](http://angryip.org/download/#windows)

Verbindung herstellen

Verwenden Sie dann beispielsweise PuTTY, um Ihre Verbindung herzustellen [Hier](http://www.putty.org/)

Geben Sie die IP-Adresse Ihres Raspberry Pi ein (hier 192.168.0.10) und klicken Sie auf Öffnen. Akzeptieren Sie die Standardsicherheitsmeldung bei der ersten Anmeldung.

Melden Sie sich mit Anmeldeinformationen an **Pi / Himbeere**

> **Wichtig**
>
> Aus Sicherheitsgründen muss das Standardkennwort unbedingt geändert werden. Besonders häufig sind Fälle von Hacking, die auf der Verwendung des Standard-Login / Passwort-Paares des Raspberry Pi basieren. (Befehl : passwd und sudo passwd)

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

Wenn Sie Ihren Raspberry Pi für Jeedom ohne angeschlossenen Bildschirm verwenden, wird empfohlen, dem Videoteil mindestens RAM zuzuweisen.

Einfach einloggen **SSH** und ändern Sie die Konfigurationsdatei : ``sudo nano /boot/config.txt``

Hinzufügen **und / oder** Kommentar entfernen (durch Entfernen des #) **und / oder** Bearbeiten Sie die Zeilen :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Beenden Sie durch Speichern : ``CTRL+X`` dann ``O`` dann ``ENTER``

Starten Sie Ihren Raspberry Pi neu

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
