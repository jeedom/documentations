# Apache-Migration

-   Apache wird sich mit Jeedom nach und nach zum Standard entwickeln
-   Stellt sicher, dass bei Jeedom-Updates die neuesten Sicherheitsupdates hinsichtlich des Dateizugriffs (dank .htaccess) berücksichtigt werden
-   Behebt einige Probleme beim Zugriff und bei der Stabilität (insbesondere für Nutzer mit vielen Kameras)
-   Verbessert die Gesamtleistung von Jeedom.

# Voraussetzungen

-   So stellen Sie eine SSH-Verbindung zur Box her (die Anmeldedaten finden Sie in der Installationsanleitung)
-   Mit dem Internet verbunden sein.

> **Wichtig**
>
> Bei Problemen kann das Jeedom-Team nicht haftbar gemacht werden und behält sich das Recht vor, Supportanfragen abzulehnen. Die Nutzung erfolgt auf eigene Gefahr.

> **Wichtig**
>
> Achtung: Einige inoffizielle Plugins sind nicht mit Apache kompatibel. Informieren Sie sich daher vorher gründlich.

# So geht's

## Deaktivierung der Dienste Jeedom und nginx

In Jeedom müssen Sie jedes Plugin mit einem Daemon aufrufen, dort die automatische Verwaltung des Daemons deaktivieren und den Daemon selbst beenden. Anschließend müssen Sie in der Aufgaben-Engine alle Aufgaben deaktivieren (es gibt eine Schaltfläche zum allgemeinen Deaktivieren) und in den Szenarien alle Szenarien deaktivieren (es gibt eine Schaltfläche zum allgemeinen Deaktivieren).

````
systemctl stop cron
systemctl stop nginx
systemctl stop mysql
````

## Installation und Konfiguration von Apache

````
mkdir -p /var/www/html/log
apt-get -y install ntp ca-certificates unzip curl sudo
apt-get -y install apache2 php5 mysql-client mysql-server libapache2-mod-php5
apt-get -y install php5-cli php5-common php5-curl php5-fpm php5-json php5-mysql php5-gd
wget https://raw.githubusercontent.com/jeedom/core/stable/install/apache_security -O /etc/apache2/conf-available/security.conf
rm /etc/apache2/conf-enabled/security.conf
ln -s /etc/apache2/conf-available/security.conf /etc/apache2/conf-enabled/
rm /etc/apache2/conf-available/other-vhosts-access-log.conf
rm /etc/apache2/conf-enabled/other-vhosts-access-log.conf
systemctl restart apache2
rm /var/www/html/index.html
````

> **Hinweis**
>
> Wenn Sie während der Installation gefragt werden, ob Sie eine geänderte Version einer Datei beibehalten möchten oder nicht, wählen Sie: „Die derzeit installierte lokale Version beibehalten“.

## Kopie von Jeedom

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## Zugriffstest

``systemctl start mysql``

Sie sollten nun über dieselbe URL wie zuvor auf Jeedom zugreifen können. Wenn alles in Ordnung ist, können Sie fortfahren. ANDERNFALLS DÜRFEN SIE AUF KEINEN FALL WEITERMACHEN.

## Aktualisierung der crontab

Zu tun:

``crontab -e``

Anschließend den Pfad zu Jeedom aktualisieren und Folgendes ersetzen:

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

Von:

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## Reinigung und Entfernung von nginx

````
apt-get remove nginx*
rm -rf cp -R /usr/share/nginx
apt-get autoremove
systemctl disable nginx
````

## Neustart der Dienste

````
systemctl enable apache2
systemctl start cron
````

Melden Sie sich anschließend bei Ihrem Jeedom an und aktivieren Sie die Aufgaben-Engine und die Szenarien wieder. Sie können auch die Daemons neu starten.

> **Wichtig**
>
> Es wird empfohlen, nach der Migration ein Update von Jeedom durchzuführen (auch wenn Ihnen kein Update vorgeschlagen wird).
