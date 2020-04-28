Beschreibung 
===========

Das Verfahren ermöglicht es Ihnen, eine Verbindung zu Ihrer Box in SFTP herzustellen, um
die täglichen Backups, die von ihm erstellt wurden, wiederherzustellen.

> **Spitze**
>
> Achtung, damit dieses Verfahren funktioniert, ist es notwendig, dass
> Der SSH-Server der Box ist weiterhin funktionsfähig.

Installation von Filezilla 
=========================

Filezilla ist freie Software und für alle verfügbar
Plattformen. Es ermöglicht Ihnen, Dateien über verschiedene zu übertragen
Protokolle (FTP, FTPS, SFTP…) Es kann über diesen Link heruntergeladen werden :
<https://filezilla-project.org/download.php?type=client>

Verbindung zur Box 
==================

Um eine Verbindung zu Ihrer Box herzustellen, füllen Sie einfach die Felder aus
Informationen oben im Filezilla-Fenster :

![restore filezilla01](images/restore-filezilla01.jpg)

-   Host : Jeedom IP-Adresse (sftp:// wird automatisch hinzugefügt)

-   Login : Jeedom

-   Passwort : MJeedom96

-   Hafen : 22

Klicken Sie dann auf "Schnellverbindung""

Navigation zum Sicherungsverzeichnis 
===========================================

Sobald die Verbindung hergestellt ist, müssen Sie zum gehen
Jeedom Backup-Verzeichnis.

2 Szenarien :

-   Apache Server (Jeedom Smart Box) : / var / www / html / backup

-   Nginx Server (Jeedom Mini + Box) :
    / usr / share / nginx / www / Jeedom / backup

Der Pfad wird im Abschnitt "Remote-Standort" angezeigt.

![restore filezilla02](images/restore-filezilla02.jpg)

Backup herunterladen 
===============================

Wenn Sie in der Liste der Sicherungen mit der rechten Maustaste klicken, ist dies möglich
um den Download zu starten.

![restore filezilla03](images/restore-filezilla03.jpg)
