# Debian – Tipps und Tricks

# Nützliche Pakete

Hier sind einige nützliche Pakete, die Sie auf einem leeren System installieren sollten:

-   **fail2ban**: Ermöglicht es, IP-Adressen zu sperren, die versuchen, eine Verbindung zum Rechner herzustellen.
-   **vim**: Das ist ein Texteditor für die Befehlszeile; man kann ihn auch durch „nano“ oder viele andere ersetzen.
-   **net-tools**: Eine Sammlung von Programmen zur Netzwerkverwaltung
-   **dos2unix**: Tool zur Textkonvertierung

``apt-get install -y vim fail2ban net-tools dos2unix``

Wenn Sie VMware verwenden, können Sie zusätzliche Tools hinzufügen:

``apt-get install -y open-vm-tools``

# Die Konsole einfärben

Wenn Sie möchten, dass Ihre Konsole (bash) Farben verwendet:

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Root-Anmeldung über SSH zulassen

Die Datei muss bearbeitet werden ``/etc/ssh/sshd_config`` und ändern:

``PermitRootLogin without-password``

Von:

``PermitRootLogin yes``

> **Wichtig**
>
> Achten Sie darauf, ein starkes Root-Passwort zu verwenden! Die Verwendung von fail2ban wird ebenfalls empfohlen.

# Ein Samba-Freigabe einrichten

Installation des cifs-Pakets

``apt-get install -y cifs-utils``

Montagepunkt erstellen:

``mkdir /mnt/mon_partage``

> **Hinweis**
>
> Sie müssen meine_Freigabe an Ihre Bedürfnisse anpassen

Eintrag in /etc/fstab hinzufügen

//IP_SERVER_SAMBA/meine_Freigabe /mnt/meine_Freigabe cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Hinweis**
>
> Sie müssen die „TODO“-Einträge durch Ihren Linux-Benutzernamen und Ihr Passwort ersetzen.

# Umstellung von Jessie auf Stretch

Nachdem ich das Upgrade und die Installation von Stretch mit Wiederherstellung aus einem Backup getestet habe, kann ich bestätigen, dass Sie durch eine Überschreibinstallation von Stretch Zeit sparen werden.

-   **Methode 1: Installation von Stretch:** Maximal 1 bis 2 Stunden, und vor allem ein sauberes Betriebssystem.
-   **Methode 2: Update von Jessie auf Stretch:** Ein halber Tag, um die Fehler zu beheben.

## Methode 1: Installation von Stretch und Wiederherstellung aus dem Backup

Bevor Sie beginnen, erstellen Sie über Jeedom ein vollständiges Backup Ihrer Installation unter Jessie und exportieren Sie das Backup anschließend auf ein anderes Speichermedium.

> **Tipp**
>
> Laden Sie das Backup nicht über die Weboberfläche herunter (sondern über SSH, FTP, SAMBA oder ein anderes Verfahren Ihrer Wahl), denn wenn Ihr Archiv sehr groß ist, kann es bei einem HTTP-Download leicht beschädigt werden. Wenn es jedoch weniger als 100 MB groß ist, ist dies kein Problem.

-   Installieren Sie Debian Stretch auf Ihrer Box.
-   Konfigurieren Sie Ihr lokales Netzwerk neu und stellen Sie sicher, dass Ihr Gerät betriebsbereit und auf dem neuesten Stand ist.
-   Installieren Sie Jeedom, indem Sie die [doc](https://github.com/jeedom/documentation/blob/master/installation/fr_FR/other.asciidoc)

>**ACHTUNG**
>
>MariaDB erlaubt keinen Zugriff mehr über das „root“-Profil, was die Wiederherstellung einer Datenbank verhindern kann, deren Namen Sie (wie ich) geändert haben. Daher sollten Sie die Sicherung nicht sofort wiederherstellen. Wenn der Benutzer „jeedom“ nicht über die erforderlichen Berechtigungen verfügt, schlägt die Wiederherstellung fehl.

Referenz: <http://jc.etiemble.free.fr/abc/index.php/realisations/trucs-astuces/deb9php7> (Kapitel 5a)

Kurz gesagt: Zwei Befehlszeilen, um den Benutzer „root“ in MySQL unter Stretch zu autorisieren:

````
$ mysql -u root -p mysql
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 2
Server version: 10.1.21-MariaDB-5 Debian 9.0
Copyright (c) 2000, 2016, Oracle, MariaDB Corporation Ab and others.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [mysql]>
MariaDB [mysql]> GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';
Query OK, 0 rows affected (0.00 sec)
MariaDB [mysql]> exit;
Bye
````

> **Tipp**
>
> Ersetzen Sie „monpass“ durch Ihr MySQL-Passwort, das Sie für das Root-Konto unter „Debian 8 – Jessie“ verwenden. Ich erteile Root insbesondere die Berechtigungen, um meine Datenbanken mit „PHPMyAdmin“ zu verwalten, aber es sollte ausreichen, diese Berechtigungen dem MySQL-Benutzer „jeedom“ zu erteilen.

> **Tipp**
>
> Den Passwortmodus für den MYSQL-Benutzer „jeedom“ finden Sie hier: Verwaltung → Konfiguration → OS/DB → Datenbank

Passen Sie diesen Befehl bitte entsprechend Ihrer bisherigen Konfiguration an:

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

oder

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Kopieren Sie Ihr Backup in den Ordner ``/var/www/html/backup``
-   Weisen Sie www-data die Berechtigungen zu: ``chown -R www-data: /var/www/html/backup/*``
-   Starten Sie die Wiederherstellung über die Jeedom-Benutzeroberfläche (Verwaltung → Backups → Lokale Backups: Wählen Sie das richtige Backup aus und klicken Sie direkt darunter auf **Wiederherstellen**)
-   Bitte haben Sie etwas Geduld während der Wiederherstellung
-   Erteilen Sie www-data wieder die Berechtigungen für das gesamte Jeedom-System: ``chown -R www-data: /var/www/html/``
-   Starten Sie die Box neu: `reboot`
-   Melden Sie sich über die Weboberfläche mit Ihren bisherigen Zugangsdaten bei Jeedom an
-   Gehen Sie jedes Plugin durch, um die Abhängigkeiten neu zu installieren (insbesondere bei denen, bei denen der Daemon „NOK“ (KO) ist).

## Methode 1: Upgrade (geringere Erfolgschancen)

Aktualisierung des Betriebssystems auf die Version Jessie.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Bearbeiten Sie die Datei /etc/apt/sources.list und ersetzen Sie alle Vorkommen von „Jessie“ durch „Stretch“, nachdem Sie die Datei zuvor gesichert haben. Führen Sie dazu folgenden Befehl aus:

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

Aktualisierung des Betriebssystems auf die Version „Stretch“.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Umstellung auf MariaDB.

``apt-get -y install mariadb-server mariadb-client mariadb-common``

Jeedom-Update

````
sh /var/www/html/install/install.sh -s 2
sh /var/www/html/install/install.sh -s 5
sh /var/www/html/install/install.sh -s 7
sh /var/www/html/install/install.sh -s 10
````

Entfernen nicht benötigter Bibliotheken

````
apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
apt -y remove `aptitude -F %p search '~o'`----
````

Hinweis: Wenn beim Öffnen Ihrer Jeedom-Seite ein PHP-Code angezeigt wird, aktivieren Sie diesen, indem Sie die folgenden Befehle ausführen:

````
a2enmod php7.0
systemctl restart apache2.service
````
