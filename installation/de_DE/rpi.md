# Installation auf Raspberry Pi

Hier finden Sie die Anleitung zur Installation von Jeedom auf einem Raspberry Pi **mit einer microSD-Karte**.

# Installation über die Befehlszeile

## Das neueste „Lite“-Image herunterladen

[Raspberry Pi Imager](https://www.raspberrypi.com/software/)  ermöglicht es, das Installations-Image von Raspberry Pi OS herunterzuladen und direkt auf die SD-Karte zu brennen.

## SSH-Zugriff aktivieren

> **Warnung**
>
> Aus Sicherheitsgründen ist der SSH-Zugriff bei dieser Distribution standardmäßig nicht mehr aktiviert. Er muss daher über die erweiterten Optionen des Raspberry Pi Imager aktiviert werden.

## Den Raspberry Pi starten

Legen Sie Ihre MicroSD-Karte ein, schließen Sie das Netzwerkkabel an und schließen Sie das Netzteil an.

## Per SSH verbinden

Identifizieren Sie Ihren Raspberry Pi im Netzwerk

Sie müssen die IP-Adresse Ihres Raspberry Pi kennen. Dazu gibt es mehrere Möglichkeiten:

-   Überprüfen Sie die DHCP-Einstellungen in Ihrem Router
-   Verwenden Sie einen Port-Scanner wie „Angry IP Scanner“ [hier](http://angryip.org/download/#windows)

Verbindung herstellen

Verwenden Sie anschließend beispielsweise PuTTY, um Ihre Verbindung herzustellen [Hier](http://www.putty.org/)

Geben Sie die IP-Adresse Ihres Raspberry Pi ein (hier 192.168.0.10) und klicken Sie auf „Öffnen“. Bestätigen Sie bei der ersten Verbindung die Standardmeldung zur Sicherheit.

Melden Sie sich mit den Zugangsdaten an, die Sie beim Brennen im Raspberry Pi Imager festgelegt haben.

> **Wichtig**
>
> Aus Sicherheitsgründen ist es unbedingt erforderlich, das Standardpasswort zu ändern. Hackerangriffe, bei denen die Standard-Anmelde- und Passwortkombination des Raspberry Pi ausgenutzt wird, sind besonders verbreitet. (Befehl: passwd und sudo passwd)

## Das Jeedom-Installationsskript starten

```
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
```

> **Hinweis**
>
> Je nach Ihrer Internetgeschwindigkeit kann die Installation zwischen 45 und 90 Minuten dauern. Unterbrechen Sie den Vorgang auf keinen Fall vorzeitig. Andernfalls müssen Sie den gesamten Vorgang von vorne beginnen.

Anschließend müssen Sie lediglich zu IP\_MACHINE\_JEEDOM navigieren

> **Hinweis**
>
> Die Standard-Anmeldedaten lauten admin/admin

Weitere Informationen zur Installation von Jeedom finden Sie hier [Dokumentation](cli)

Anschließend können Sie der Dokumentation folgen [Erste Schritte mit Jeedom](/premiers-pas)
