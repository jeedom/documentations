# Apache-Migration

-   Apache wird mit Jeedom nach und nach zum Standard
-   Ermöglicht Ihnen die neuesten Sicherheitsupdates in Bezug auf den Dateizugriff (dank der .htaccess) während Jeedom-Updates
-   Behebt einige Zugriffs- und Stabilitätsprobleme (insbesondere für diejenigen mit vielen Kameras)
-   Verbessert die Gesamtleistung von Jeedom.

# Voraussetzungen

-   Wissen, wie man sich in SSH auf der Box verbindet (Sie finden die Kennungen in der Installationsdokumentation)
-   Mit dem Internet verbunden sein.

> **Wichtig**
>
> Im Falle eines Problems kann das Jeedom-Team nicht haftbar gemacht werden und kann jede Supportanfrage ablehnen. Die Handhabung erfolgt auf eigene Gefahr.

> **Wichtig**
>
> Bitte beachten Sie, dass einige inoffizielle Plugins nicht Apache-kompatibel sind, informieren Sie sich vorher.

# Wie macht man

## Deaktivieren von Jeedom- und Nginx-Diensten

In Jeedom müssen Sie zu jedem Plugin gehen, das einen Daemon hat, dann die automatische Verwaltung des Daemons deaktivieren und ihn schneiden. Deaktivieren Sie dann in der Aufgaben-Engine alle Aufgaben (es gibt eine allgemeine Deaktivierungsschaltfläche) und in den Szenarien alle Szenarien (es gibt eine allgemeine Deaktivierungsschaltfläche)).

````
systemctl stop cron
systemctl stop nginx
systemctl stop mysql
````

## Apache installieren und konfigurieren

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
> Wenn Sie während der Installation vom System gefragt werden, ob Sie eine geänderte Version einer Datei behalten möchten oder nicht, tun Sie dies : "Behalten Sie die aktuell installierte lokale Version bei".

## Kopie von Jeedom

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## Zulassungsprüfung

``systemctl start mysql``

Sie sollten jetzt über dieselbe URL wie zuvor auf Jeedom zugreifen können. Wenn es gut ist, können Sie fortfahren. SONST DÜRFEN SIE FOLGENDES NICHT TUN.

## Crontab-Update

Tun :

``crontab -e``

Aktualisieren Sie dann den Pfad zu Jeedom, ersetzen Sie :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

Durch :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## Nginx bereinigen und entfernen

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

Verbinden Sie sich dann mit Ihrem Jeedom und reaktivieren Sie die Task-Engine und Szenarien. Du kannst auch Dämonen wiederbeleben.

> **Wichtig**
>
> Es ist ratsam, nach der Migration ein Update von Jeedom zu starten (auch wenn es Ihnen nichts bietet).
