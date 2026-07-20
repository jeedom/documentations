# Backup wiederherstellen

Mit diesem Verfahren können Sie eine Verbindung zu Ihrer Box in SFTP herstellen, um die von ihr erstellten täglichen Sicherungen abzurufen.

> **Spitze**
>
> Achtung, damit dieses Verfahren funktioniert, muss der SSH-Server der Box noch funktionsfähig sein.

## Installation von Filezilla

Filezilla ist freie Software und auf allen Plattformen verfügbar. Sie können Dateien über verschiedene Protokolle (FTP, FTPS, SFTP…) übertragen. Über diese Protokolle können Sie sie herunterladen [Link](https://filezilla-project.org/download.php?type=client)

## Verbindung zur Box

Um eine Verbindung zu Ihrer Box herzustellen, füllen Sie einfach die Informationsfelder oben im Filezilla-Fenster aus :

![restore filezilla01](images/restore-filezilla01.jpg)

-   Host : Jeedom IP-Adresse (``sftp://`` wird automatisch hinzugefügt)
-   Login : ``jeedom``
-   Passwort : ``Mjeedom96``
-   Hafen : 22

Klicken Sie dann auf "Schnellverbindung""

## Navigation zum Sicherungsverzeichnis

Sobald die Verbindung hergestellt ist, muss das Sicherungsverzeichnis von Jeedom aufgerufen werden.

2 Szenarien :

-   Apache Server (Jeedom Smart Box) : ``/var/www/html/backup``
-   Nginx-Server :  ``/usr/share/nginx/www/jeedom/backup``

Der Pfad wird im Abschnitt "Remote-Standort" angezeigt.

![restore filezilla02](images/restore-filezilla02.jpg)

## Backup herunterladen

Wenn Sie in der Liste der Sicherungen mit der rechten Maustaste klicken, können Sie den Download starten.

![restore filezilla03](images/restore-filezilla03.jpg)
