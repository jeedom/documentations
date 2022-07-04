# Debian-Tipps und Tricks

# Nützliche Pakete

Hier sind einige nützliche Pakete für eine Neuinstallation :

-   **fail2ban** : Ermöglicht Ihnen, IPs zu sperren, die versuchen, sich mit dem Computer zu verbinden.
-   **vim** : Es ist ein Befehlszeilen-Texteditor, wir können ihn auch durch Nano oder viele andere ersetzen.
-   **net-tools** : Sammlung von Programmen zur Verwaltung des Netzwerks
-   **dos2unix** : Textkonverter-Tool

``apt-get install -y vim fail2ban net-tools dos2unix``

Wenn Sie VMware verwenden, können Sie zusätzliche Tools hinzufügen:

``apt-get install -y open-vm-tools``

# Färben Sie die Konsole ein

Wenn Sie möchten, dass Ihre Konsole (bash) die Farben verwendet :

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Root-Anmeldung in SSH zulassen

Sie müssen die Datei bearbeiten ``/etc/ssh/sshd_config`` und ändern :

``PermitRootLogin without-password``

Durch :

``PermitRootLogin yes``

> **Wichtig**
>
> Achten Sie darauf, ein sicheres Root-Passwort zu verwenden ! Die Verwendung von fail2ban wird ebenfalls empfohlen.

# Mounten Sie eine Samba-Freigabe

Installieren des cifs-Pakets

``apt-get install -y cifs-utils``

Erstellen Sie den Bereitstellungspunkt :

``mkdir /mnt/mon_partage``

> **Notiz**
>
> Du musst mein Teilen an deine Bedürfnisse anpassen

Mounten in /etc/fstab hinzugefügt

    //IP_SERVER_SAMBA/my_share /mnt/my_share cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Notiz**
>
> Sie müssen die TODOs in Ihren Linux-Benutzernamen und Ihr Passwort ändern

# Von Jessie zu Stretch

Nachdem ich das Upgrade getestet und Stretch mit Wiederherstellung aus einem Backup installiert habe, bestätige ich, dass die Installation von Stretch durch Überschreiben Zeit spart.

-   **Methode 1 : Stretch installieren :** 1 bis 2 Stunden max, und vor allem ein sauberes Betriebssystem.
-   **Methode 2 : aktualisierte Jessie zu Stretch :** einen halben Tag, um Käfer zu beseitigen.

## Methode 1 : Stretch installieren und Backup wiederherstellen

Erstellen Sie vor dem Start über Jeedom eine vollständige Sicherung Ihrer Installation unter Jessie und exportieren Sie die Sicherung anschließend auf ein anderes Speichermedium.

> **Tipp**
>
> Laden Sie das Backup anders als über die Webschnittstelle herunter (SSH, FTP, SAMBA, andere Ihrer Wahl), denn wenn Ihr Archiv groß ist, kann es leicht über einen HTTP-Download beschädigt werden. Wenn es jedoch weniger als 100 MB beträgt, ist es spielbar.

-   Installieren Sie Debian Stretch auf Ihrer Box.
-   Konfigurieren Sie Ihr lokales Netzwerk neu, überprüfen Sie, ob Ihr Computer betriebsbereit und auf dem neuesten Stand ist.
-   Installieren Sie Jeedom, indem Sie den Anweisungen folgen [dokumentieren](https://github.com/jeedom/documentation/blob/master/installation/de_DE/other.asciidoc)

>**WARNUNG**
>
>MariaDB erlaubt keinen Zugriff mehr auf das „Root“-Profil, das die Wiederherstellung einer Datenbank blockieren kann, deren Name Sie (wie ich) geändert haben, sodass die Sicherung nicht sofort wiederhergestellt wird. Wenn der Benutzer „jeedom“ nicht über die richtigen Berechtigungen verfügt, schlägt die Wiederherstellung fehl.

Référence : <http://jc.etiemble.free.fr/abc/index.php/realizations/tips-tricks/deb9php7> (Kapitel 5a)

Kurz gesagt, 2 Befehlszeilen, um dem Benutzer „root“ in MYSQL unter Stretch zu ermöglichen :

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
> Ersetzen Sie „mypass“ durch Ihr MYSQL-Passwort, das Sie für das Root-Konto unter „Debian 8 – Jessie". Ich gebe root insbesondere die Rechte, meine Datenbanken mit 'PHPMYADMIN' zu verwalten, aber es muss ausreichen, sie dem MYSQL-Benutzer 'jeedom' zu geben.

> **Tipp**
>
> Den Passwortmodus des MYSQL jeedom-Benutzers finden Sie hier : Verwaltung → Konfiguration → OS/DB → Datenbank

Es liegt an Ihnen, diesen Befehl entsprechend Ihrer bisherigen Konfiguration anzupassen :

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

ou

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Kopieren Sie Ihr Backup in den Ordner ``/var/www/html/backup``
-   Geben Sie Rechte an www-Daten : ``chown -R www-data: /var/www/html/backup/*``
-   Starten Sie die Wiederherstellung über die Jeedom-Oberfläche (Administration → Backups → Local Backups : Wählen Sie das richtige Backup und klicken Sie auf **Wiederherstellen** knapp unter)
-   Warten Sie während der Wiederherstellung
-   Stellen Sie die Rechte an www-Daten auf allen Jeedom wieder her : ``chown -R www-data: /var/www/html/``
-   Starten Sie die Kiste neu : `reboot`
-   Verbinden Sie sich mit Ihren alten Zugangsdaten über die Weboberfläche mit Jeedom
-   Übergeben Sie jedes Plugin, um die Abhängigkeiten neu zu installieren (insbesondere diejenigen, bei denen der Daemon "NOK" KO ist).

## Methode 1 : Upgrade (geringere Erfolgsaussichten)

OS-Update auf Jessie-Version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Sie müssen die Datei /etc/apt/sources bearbeiten.listen Sie auf und ersetzen Sie alle Jessie durch Stretch, mit vorherigem Speichern der Datei, indem Sie dies tun :

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

Aktualisierung des Betriebssystems in der Stretch-Version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Wechseln Sie zu MariaDB.

``apt-get -y install mariadb-server mariadb-client mariadb-common``

Jeedom-Update

````
sh /var/www/html/install/install.sh -s 2
sh /var/www/html/install/install.sh -s 5
sh /var/www/html/install/install.sh -s 7
sh /var/www/html/install/install.sh -s 10
````

Entfernung unnötiger Bibliotheken

````
apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
apt -y remove `aptitude -F %p search '~o'`----
````

Notiz : Wenn Sie beim Öffnen Ihrer Jeedom-Seite einen PHP-Code erhalten, aktivieren Sie ihn, indem Sie die folgenden Befehle ausführen :

````
a2enmod php7.0
systemctl restart apache2.service
````
