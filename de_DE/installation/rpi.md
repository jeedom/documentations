# Installation auf RaspberryPi

Hier finden Sie die Dokumentation zur Installation von Jeedom auf einem Raspberry Pi **mit einer MiroSD-Karte.**. Es gibt 2 Modi :

- Automatisch (beta) : Verwendung des von Jeedom erstellten Images für Raspberry Pi mit darauf vorinstalliertem Jeedom
- Befehlszeile : manuelle Installation von Jeedom von Raspberry Pi OS

> **Wichtig**
>
> Debian 10 (Buster) ist die offiziell unterstützte Distribution.

# Automatische Installation

## Neuestes Bild herunterladen

Sie finden die Bilder [hier](https://images.jeedom.com/rpi/)

> **WICHTIG**
>
>Es gibt 2 Bilder : jeedom-debian-XXXX-rpi-X.X.XX.zip, das in 32 Bit vorliegt, ist es mit Raspberry PI-Modellen der Generation 2 und 3 und jeedom-debian-XXXX-rpi-64 kompatibel-X.X.XX.zip, das in 64 Bit vorliegt, ist es nur mit Raspberry Pi4 kompatibel und befindet sich in Alpha (nicht empfohlen).

Mit Raspberry Pi Imager können Sie das Installations-Image von Raspberry Pi OS in seiner neuesten Version direkt herunterladen.

## Brennen Sie dieses Image zum Beispiel mit Raspberry Pi Imager auf eine MicroSD-Karte

Sie können es herunterladen [hier](https://www.raspberrypi.org/downloads/)

## PI starten

Legen Sie Ihre MicroSD-Karte ein, schließen Sie das Netzwerkkabel an und schließen Sie die Stromversorgung an.

> **Wichtig**
>
> Beim ersten Start kann der Raspberry Pi langsam sein, da er die Größe der Partition an die Größe Ihrer MicroSD-Karte anpasst. Außerdem ist es ratsam, nach dem 1. Start erneut neu zu starten, damit der Swap die richtige Größe hat.

Il vous suffit ensuite, dedann votre navigateur, de saisir : http://IP_RPI/ (en remplaçant IP_RPI par l'ip de votre Raspberry Pi).

> **Information**
>
> Die standardmäßigen SSH-Anmeldeinformationen sind : jeedom und Mjeedom96 für das Passwort 

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)

# Befehlszeileninstallation

## Laden Sie das neueste Lite-Image herunter"

[hier](https://downloads.raspberrypi.org/raspbian_lite_latest)

Mit Raspberry Pi Imager können Sie das Installations-Image von Raspberry Pi OS in seiner neuesten Version direkt herunterladen.

## Brennen Sie dieses Image beispielsweise mit dem Raspberry Pi Imager auf eine MiroSD-Karte

[hier](https://www.raspberrypi.org/downloads/)

> **Notiz**
>
> Wenn Sie Ihr Image mit Etcher brennen, entfällt der Dekomprimierungsschritt (Zip-Format wird direkt bei der Auswahl der Image-Datei erkannt).

## Aktivieren Sie den SSH-Zugriff

> **Warnung**
>
> Aus Sicherheitsgründen ist der SSH-Zugriff bei dieser Distribution standardmäßig nicht mehr aktiviert. Sie müssen es also aktivieren.

Sie müssen auf der Boot-Partition (die einzige, die unter Windows zugänglich ist) eine leere ssh-Datei erstellen.

Einfach Rechtsklick : new / text document und benenne es in „ssh" **ohne Verlängerung**

> **Wichtig**
>
> Unter Windows müssen Sie daher im Explorer Ihre Einstellungen unter Anzeige / Optionen / Ordner- und Suchoptionen ändern /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Starten Sie den RaspberryPi

Legen Sie Ihre MicroSD-Karte ein, schließen Sie das Netzwerkkabel an und schließen Sie die Stromversorgung an.

## Melden Sie sich in SSH an

Identifizieren Sie Ihren Raspberry Pi im Netzwerk

Sie müssen die IP-Adresse Ihres Raspberry PI kennen. Viele Lösungen :

-   Überprüfen Sie die DHCP-Konfiguration in Ihrem Router
-   Verwenden Sie einen Port-Scanner vom Typ "Angry IP Scanner"" [hier](http://angryip.org/download/#windows)

Verbindung herstellen

Verwenden Sie dann beispielsweise PuTTY, um Ihre Verbindung herzustellen [Hier](http://www.putty.org/)

Geben Sie die IP-Adresse Ihres Raspberry Pi ein (hier 192.168.0.10) und klicken Sie auf Öffnen. Akzeptieren Sie die Standardsicherheitsmeldung bei der ersten Anmeldung.

Melden Sie sich mit Anmeldeinformationen an **Pi / Himbeere**

> **Wichtig**
>
> Aus Sicherheitsgründen ist es zwingend erforderlich, das Standardpasswort zu ändern. Besonders weit verbreitet sind Hacking-Fälle, die auf der Ausnutzung des Standard-Login/Passwort-Paares des Raspberry Pi basieren. (bestellt : passwd und sudo passwd)

## Starten Sie das Jeedom-Installationsskript

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

**Das sudo-Passwort ist ebenfalls himbeere**

> **Notiz**
>
> Abhängig von Ihrer Internetgeschwindigkeit kann die Installation zwischen 45 und 90 Minuten dauern. Sie dürfen den Vorgang nicht vor dem Ende unterbrechen. Andernfalls müssen Sie den gesamten Vorgang wiederholen.

Gehen Sie dann einfach zu IP\_MACHINE\_JEEDOM

> **Notiz**
>
> Standardanmeldeinformationen sind admin/admin

> **Notiz**
>
> Die folgenden Argumente können verwendet werden : -w = Webserver-Ordner -z = Z-Wave-Abhängigkeiten installieren -m = gewünschtes MySQL-Root-Passwort

````
./install.sh -w /var/www/html -z
````

## Systemoptimierung

Wenn Sie Ihren Raspberry Pi für Jeedom ohne angeschlossenen Bildschirm verwenden, wird empfohlen, dem Videoteil den minimalen Arbeitsspeicher zuzuweisen.

Melden Sie sich einfach an **SSH** und die Konfigurationsdatei ändern : ``sudo nano /boot/config.txt``

Hinzufügen **und oder** Entkommentieren (Löschen der #) **und oder** Bearbeiten Sie die Zeilen :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Beenden durch Speichern : ``CTRL+X`` dann ``O`` dann ``ENTER``

Starten Sie Ihren Raspberry Pi neu

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
