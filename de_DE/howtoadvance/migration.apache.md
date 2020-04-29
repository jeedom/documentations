Warum ? 
==========

-   Apache wird mit Jeedom allmählich zur Norm

-   Ermöglicht Ihnen die neuesten Sicherheitsupdates unter
    Zugriff auf Dateien (dank .htaccess) bei Updates von
    Jeedom

-   Korrigiert einige Zugangs- und Stabilitätsprobleme (insbesondere für diese
    die viele Kameras haben)

-   Verbessert die Gesamtleistung von Jeedom.

Voraussetzungen 
=========

-   Wissen, wie man in SSH auf der Box verbindet (Sie finden die
    Kennungen in der Installationsdokumentation)

-   Mit dem Internet verbunden sein.

> **Wichtig**
>
> Bei Bedenken kann das Jeedom-Team nicht zur Verantwortung gezogen werden und
> kann jede Supportanfrage ablehnen. Die Handhabung liegt bei Ihnen
> Risiken und Gefahren.

> **Wichtig**
>
> Bitte beachten Sie, dass einige inoffizielle Plugins nicht kompatibel sind
> Apache, finde es schon lange heraus.

Wie es geht 
=============

Deaktivierung von Jeedom- und Nginx-Diensten 
------------------------------------------

In Jeedom müssen Sie dann mit einem Daemon zu jedem Plugin gehen
Deaktivieren Sie die automatische Verwaltung des Dämons und schneiden Sie ihn ab. Du musst
Deaktivieren Sie dann in der Task-Engine alle Aufgaben (es gibt eine
allgemeine Deaktivierungsschaltfläche) und in den Szenarien alle deaktivieren
die Szenarien (es gibt eine allgemeine Deaktivierungsschaltfläche).

    systemctl stop cron
    systemctl stop nginx
    systemctl stop mysql

Installation und Konfiguration von Apache 
--------------------------------------

    mkdir -p / var / www / html / log
    apt-get -y install ntp ca-zertifikate entpacken curl sudo
    apt-get -y installiere apache2 php5 mysql-client mysql-server libapache2-mod-php5
    apt-get -y installiere php5-cli php5-common php5-curl php5-fpm php5-json php5-mysql php5-gd
    wget https://raw.githubusercontent.com / jeedom / core / stabile / install / apache_security -O /etc/apache2/conf-available/security.conf
    rm /etc/apache2/conf-enabled/security.conf
    In -s / etc / apache2 / conf-available / security.conf / etc / apache2 / conf-enabled /
    rm /etc/apache2/conf-available/other-vhosts-access-log.conf
    rm /etc/apache2/conf-enabled/other-vhosts-access-log.conf
    systemctl starte apache2 neu
    rm / var / www / html /index.html

> **Notiz**
>
> Wenn Sie während der Installation vom System gefragt werden, ob Sie oder möchten
> Behalten Sie keine geänderte Version einer Datei bei : "Halten Sie die lokale
> aktuell installierte Version".

Jeedom Kopie 
---------------

    cp -R / usr / share / nginx / www / jeedom / * / var / www / html /
    cp -R /usr/share/nginx/www/jeedom/.[^.]* / var / www / html /
    rm / var / www / html /log/nginx.error
    chmod 775 -R / var / www / html
    www-data chown:www-data -R / var / www / html

Zugriffstest 
------------

    systemctl starte mysql

Sie sollten jetzt über dieselbe URL auf Jeedom zugreifen können
als zuvor. Wenn es gut ist, können Sie fortfahren, sonst ist es nicht wesentlich
NICHT WEITER.

Crontab-Update 
-------------------------

MAKE :

    crontab -e

Aktualisieren Sie dann den Pfad zu Jeedom und ersetzen Sie ihn :

    * * * * * su --shell = / bin / bash - www-data -c '/ usr / bin / php / usr / share / nginx / www / jeedom / core / php / jeeCron.php '>> / dev / null 2> & 1

Von :

    * * * * * su --shell = / bin / bash - www-data -c '/ usr / bin / php / var / www / html / core / php / jeeCron.php '>> / dev / null 2> & 1

Nginx reinigen und entfernen 
---------------------------------

    apt-get entferne Nginx*
    rm -rf cp -R / usr / share / nginx
    apt-get autoremove
    systemctl deaktiviere nginx

Dienste neu starten 
------------------------

    systemctl aktiviere apache2
    systemctl start cron

Stellen Sie dann eine Verbindung zu Ihrem Jeedom her und aktivieren Sie die Task-Engine erneut
und die Szenarien. Sie können auch die Dämonen wiederbeleben.

> **Wichtig**
>
> Es wird empfohlen, nach der Migration ein Update von zu starten
> Jeedom (auch wenn es dir nichts bietet).
