# Wiederherstellen einer Sicherung

Das Verfahren ermöglicht es Ihnen, sich über SFTP mit Ihrer Box zu verbinden, um die von ihr erstellten täglichen Sicherungen abzurufen.

> **Tipp**
>
> Bitte beachten Sie, dass für dieses Verfahren der SSH-Server der Box noch funktionsfähig sein muss.

## Filezilla installieren

Filezilla ist Freeware und auf allen Plattformen verfügbar. Es ermöglicht die Übertragung von Dateien über verschiedene Protokolle (FTP, FTPS, SFTP etc.) und kann darüber heruntergeladen werden [Verknüpfung](https://filezilla-project.org/download.php?type=client)

## Anschluss an die Kiste

Um sich mit Ihrer Box zu verbinden, füllen Sie einfach die Informationsfelder oben im Filezilla-Fenster aus :

![restore filezilla01](images/restore-filezilla01.jpg)

-   Gastgeber : Jeedom-IP-Adresse (``sftp://`` wird automatisch hinzugefügt)
-   ICH WÜRDE : ``jeedom``
-   Passwort : ``Mjeedom96``
-   Hafen : 22

Klicken Sie dann auf „Schnellverbindung“"

## Navigieren zum Sicherungsverzeichnis

Sobald die Verbindung hergestellt ist, ist es notwendig, in das Jeedom-Sicherungsverzeichnis zu wechseln.

2 Szenarien :

-   Apache-Server (Jeedom Smart Box) : ``/var/www/html/backup``
-   Nginx-Server :  ``/usr/share/nginx/www/jeedom/backup``

Der Zugriffspfad wird im Abschnitt Gegenstelle eingetragen.

![restore filezilla02](images/restore-filezilla02.jpg)

## Backup-Download

In der Liste der Backups ist es durch Rechtsklick möglich, den Download zu starten.

![restore filezilla03](images/restore-filezilla03.jpg)
