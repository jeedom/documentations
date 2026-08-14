# Wiederherstellung aus einem Backup

Mit dieser Anleitung können Sie eine SFTP-Verbindung zu Ihrer Box herstellen, um die von dieser erstellten täglichen Sicherungen abzurufen.

> **Tipp**
>
> Bitte beachten Sie: Damit dieser Vorgang funktioniert, muss der SSH-Server der Box stets betriebsbereit sein.

## Installation von FileZilla

FileZilla ist eine kostenlose Software, die auf allen Plattformen verfügbar ist. Sie ermöglicht die Übertragung von Dateien über verschiedene Protokolle (FTP, FTPS, SFTP…​). Sie kann über diesen Link heruntergeladen werden [Link](https://filezilla-project.org/download.php?type=client)

## Verbindung zur Box

Um eine Verbindung zu Ihrer Box herzustellen, müssen Sie lediglich die Eingabefelder oben im FileZilla-Fenster ausfüllen:

![Datei „filezilla01“ wiederherstellen](../images/restore-filezilla01.jpg)

-   Host: IP-Adresse von Jeedom (``sftp://`` wird automatisch hinzugefügt)
-   Benutzername: ``jeedom``
-   Passwort: ``Mjeedom96``
-   Port: 22

Klicken Sie anschließend auf „Schnellverbindung“

## Navigation zum Speicherverzeichnis

Sobald die Verbindung hergestellt ist, muss man zum Speicherverzeichnis von Jeedom wechseln.

2 Anwendungsfälle:

-   Apache-Server (Jeedom Smart Box): ``/var/www/html/backup``
-   Nginx-Server:  ``/usr/share/nginx/www/jeedom/backup``

Der Pfad wird im Bereich „Remote-Standort“ abgefragt.

![Datei „filezilla02“ wiederherstellen](../images/restore-filezilla02.jpg)

## Sicherung herunterladen

In der Liste der Backups kann man durch einen Rechtsklick den Download starten.

![Datei „filezilla03“ wiederherstellen](../images/restore-filezilla03.jpg)
