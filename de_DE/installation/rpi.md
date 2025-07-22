# Installation auf Raspberry Pi

Hier finden Sie die Dokumentation zur Installation von Jeedom auf einem Himbeer-PI **mit einer MiroSD-Karte.**. 

# Befehlszeileninstallation

## Laden Sie das neueste "lite" -Bild herunter"

[Raspberry Pi Imager](https://www.raspberrypi.com/software/)  ermöglicht es Ihnen, das Raspberry Pi OS-Installationsimage in seiner neuesten Version direkt herunterzuladen und das Image direkt auf die SD-Karte zu brennen. Bitte beachten Sie, dass Sie eine Debian 11-Version (Bullseye) verwenden müssen. Jeedom ist noch nicht mit Debian 12 kompatibel (wir arbeiten jedoch daran)).

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

„
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
„

**Das Sudo-Passwort lautet ebenfalls Himbeere**

> **Notiz**
>
> Abhängig von Ihrer Internetgeschwindigkeit kann die Installation 45 bis 90 Minuten dauern. Sie dürfen den Vorgang nicht vor dem Ende unterbrechen. Andernfalls müssen Sie den gesamten Vorgang wiederholen.

Dann gehen Sie einfach zu IP\_MACHINE\_JEEDOM

> **Notiz**
>
> Die Standardanmeldeinformationen sind admin / admin

Weitere Informationen zur Installation von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/installation/cli)

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
