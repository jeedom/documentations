# Debian Tipps und Tricks

# Nützliche Pakete

Hier sind einige nützliche Pakete, um eine leere Installation durchzuführen :

-   **fail2ban** : Ermöglicht das Sperren von IP-Adressen, die versuchen, eine Verbindung zum Computer herzustellen.
-   **vim** : Es ist ein Befehlszeilentexteditor, wir können ihn auch durch Nano oder viele andere ersetzen.
-   **Netzwerkzeuge** : Sammlung von Programmen zur Verwaltung des Netzwerks
-   **dos2unix** : Textkonvertierungswerkzeug

``apt-get install -y vim fail2ban Netzwerkzeuge dos2unix``

Wenn Sie mit VMware arbeiten, können Sie zusätzliche Tools hinzufügen:

``apt-get install -y open-vm-tools``

# Färben Sie die Konsole

Wenn Sie möchten, dass Ihre Konsole (Bash) Farben verwendet :

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Root-Login in SSH zulassen

Bearbeiten Sie die Datei ``/etc/ssh/sshd_config`` und ändern :

``PermitRootLogin without-password``

Von :

``PermitRootLogin yes``

> **Wichtig**
>
> Stellen Sie sicher, dass Sie ein sicheres Root-Passwort verwenden ! Die Verwendung von fail2ban wird ebenfalls empfohlen.

# Montieren Sie eine Samba-Freigabe

Installation des cifs-Pakets

``apt-get install -y cifs-utils``

Erstellen Sie den Einhängepunkt :

``mkdir /mnt/mon_partage``

> **Notiz**
>
> Sie müssen meinen Anteil an Ihre Bedürfnisse anpassen

Mount in / etc / fstab hinzugefügt

    // IP_SERVER_SAMBA / mon_partage / mnt / mon_partage cifs uid = 0, rw, user = TODO, password = TODO 0 0

> **Notiz**
>
> Sie müssen die TODOs mit Ihrem Linux-Benutzernamen und Passwort ändern

# Übergang von Jessie zu Stretch

Nachdem Sie das Upgrade und die Stretch-Installation mit Wiederherstellung eines Backups getestet haben, bestätige ich, dass Sie durch die Installation von Stretch durch Überschreiben Zeit sparen.

-   **Methode 1 : Stretch-Installation :** Maximal 1 bis 2 Stunden und vor allem ein sauberes Betriebssystem.
-   **Methode 2 : Update von Jessie auf Stretch :** einen halben Tag, um die Käfer abzuwischen.

## Methode 1 : Installation von Stretch und Backup Restore

Bevor Sie beginnen, erstellen Sie über Jeedom eine vollständige Sicherung Ihrer Installation unter Jessie und exportieren Sie die Sicherung auf ein anderes Speichermedium.

> **Spitze**
>
> Laden Sie das Backup nicht über die Weboberfläche herunter (SSH, FTP, SAMBA, andere Ihrer Wahl), denn wenn Ihr Archiv groß ist, kann es leicht durch einen HTTP-Download beschädigt werden. Wenn es jedoch weniger als 100 MB beträgt, ist es spielbar.

-   Installieren Sie Debian Stretch auf Ihrer Box.
-   Konfigurieren Sie Ihr lokales Netzwerk neu, überprüfen Sie, ob Ihr Computer betriebsbereit und auf dem neuesten Stand ist.
-   Installieren Sie Jeedom, indem Sie den Anweisungen folgen [Doc](https://github.com/jeedom/documentation/blob/master/installation/de_DE/other.asciidoc)

>**Achtung**
>
>MariaDB erlaubt keinen Zugriff mehr auf das 'root'-Profil, wodurch die Wiederherstellung einer Datenbank blockiert werden kann, deren Namen Sie geändert hätten (wie ich), sodass wir die Sicherung nicht sofort wiederherstellen. Wenn der Benutzer 'jeedom' nicht über die richtigen Berechtigungen verfügt, schlägt die Wiederherstellung fehl.

Référence : <http://jc.etiemble.free.fr/abc/index.PHP / Realisierungen / Tipps-Tricks / deb9php7> (Kapitel 5a)

Kurz gesagt, 2 Befehlszeilen, um den Benutzer 'root' in MYSQL unter Stretch zu autorisieren :

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

> **Spitze**
>
> Ersetzen Sie 'monpass' durch Ihr MYSQL-Passwort, das für das Root-Konto unter "Debian 8 - Jessie" verwendet wird". Ich erteile insbesondere Root-Rechte, um meine Datenbanken mit 'PHPMYADMIN' zu verwalten, aber es sollte ausreichen, sie dem MYSQL-Benutzer 'jeedom' zu geben.

> **Spitze**
>
> Das Passwort für den MYSQL jeedom-Benutzer finden Sie hier : Administration → Konfiguration → OS / DB → Datenbank

Es liegt an Ihnen, diesen Befehl an Ihre vorherige Konfiguration anzupassen :

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

ou

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Kopieren Sie Ihr Backup in den Ordner ``/var/www/html/backup``
-   Geben Sie die Rechte an www-Daten : ``chown -R www-data: /var/www/html/backup/*``
-   Starten Sie die Wiederherstellung über die Jeedom-Oberfläche (Administration → Backups → Local Backups) : Wählen Sie das richtige Backup und klicken Sie auf **Wiederherstellen** knapp unter)
-   Warten Sie während der Wiederherstellung
-   Stellen Sie die Rechte an www-Daten auf allen Jeedom wieder her : ``chown -R www-data: /var/www/html/``
-   Starten Sie die Box neu : `reboot`
-   Stellen Sie mit Ihren alten Kennungen über die Weboberfläche eine Verbindung zu Jeedom her
-   Gehen Sie zu jedem Plugin, um die Abhängigkeiten neu zu installieren (insbesondere diejenigen, bei denen der Daemon "NOK" KO ist).

## Methode 1 : Upgrade (weniger Erfolgschancen)

Betriebssystem-Update in der Jessie-Version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Bearbeiten Sie die Datei / etc / apt / sources.Listen Sie alle Jessie auf und ersetzen Sie sie durch Stretch, indem Sie die Datei vorher speichern :

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

Betriebssystem-Update in der Stretch-Version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Wechseln Sie zu MariaDB.

``apt-get -y install mariadb-server mariadb-client mariadb-common``

Jeedom Update

````
sh /var/www/html/install/install.sh -s 2
sh /var/www/html/install/install.sh -s 5
sh /var/www/html/install/install.sh -s 7
sh /var/www/html/install/install.sh -s 10
````

Entfernen unnötiger Bibliotheken

````
apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
apt -y remove `aptitude -F %p search '~o'`----
````

Notiz : Wenn Sie beim Öffnen Ihrer Jeedom-Seite einen PHP-Code erhalten, aktivieren Sie diesen, indem Sie die folgenden Befehle ausführen :

````
a2enmod php7.0
systemctl restart apache2.service
````
