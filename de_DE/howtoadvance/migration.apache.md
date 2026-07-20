# Apache-Migration

-   Apache wird mit Jeedom allmählich zur Norm
-   Ermöglicht Ihnen die neuesten Sicherheitsupdates beim Dateizugriff (dank .htaccess) während Jeedom-Updates
-   Korrigiert einige Zugriffs- und Stabilitätsprobleme (insbesondere für diejenigen, die viele Kameras haben)
-   Verbessert die Gesamtleistung von Jeedom.

# Voraussetzungen

-   Informationen zum Herstellen einer Verbindung in SSH auf der Box (die Kennungen finden Sie in der Installationsdokumentation)
-   Mit dem Internet verbunden sein.

> **Wichtig**
>
> Im Falle von Bedenken kann das Jeedom-Team nicht zur Verantwortung gezogen werden und kann jede Bitte um Unterstützung ablehnen. Die Handhabung erfolgt auf eigenes Risiko.

> **Wichtig**
>
> Bitte beachten Sie, dass einige inoffizielle Plugins nicht Apache-kompatibel sind. Bitte erkundigen Sie sich vorher.

# Wie es geht

## Deaktivierung von Jeedom- und Nginx-Diensten

In Jeedom müssen Sie zu jedem Plugin mit einem Daemon gehen, dann die automatische Verwaltung des Daemons deaktivieren und ihn ausschneiden. Deaktivieren Sie dann in der Task-Engine alle Aufgaben (es gibt eine allgemeine Deaktivierungsschaltfläche) und in den Szenarien alle Szenarien (es gibt eine allgemeine Deaktivierungsschaltfläche)).

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

> **Notiz**
>
> Wenn Sie während der Installation gefragt werden, ob Sie eine geänderte Version einer Datei behalten möchten, tun Sie dies : "Behalten Sie die aktuell installierte lokale Version bei".

## Jeedom Kopie

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## Zugriffstest

``systemctl start mysql``

Sie sollten jetzt über dieselbe URL wie zuvor auf Jeedom zugreifen können. Wenn es gut ist, können Sie fortfahren. Andernfalls dürfen Sie das Follow-up nicht durchführen.

## Crontab-Update

MAKE :

``crontab -e``

Aktualisieren Sie dann den Pfad zu Jeedom und ersetzen Sie ihn :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

Von :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## Nginx reinigen und entfernen

````
apt-get remove nginx*
rm -rf cp -R /usr/share/nginx
apt-get autoremove
systemctl disable nginx
````

## Dienste neu starten

````
systemctl enable apache2
systemctl start cron
````

Stellen Sie dann eine Verbindung zu Ihrem Jeedom her und reaktivieren Sie die Task-Engine und die Szenarien. Sie können auch die Dämonen wiederbeleben.

> **Wichtig**
>
> Nach der Migration ist es ratsam, ein Update von Jeedom zu starten (auch wenn es nichts bietet).
