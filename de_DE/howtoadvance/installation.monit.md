# Installation überwachen

Monit ist ein Serviceüberwachungsdienst. Es ist dafür verantwortlich, zu überprüfen, ob ein Dienst immer gestartet wird.

Hierzu geben wir die Bewertungskriterien und die zu ergreifenden Maßnahmen an.

# Installation von Monit

Hier sind die Befehle, die gestartet werden müssen, um monit zu installieren :

``sudo apt-get -y monit``

# Beispiele für conf

Hier sind Konfigurationsbeispiele für Monit with Jeedom.

## Apache Aufsicht

````
# Apache (test sur port 80)
check process apache2 with pidfile /var/run/apache2/apache2.pid
    start program = "/etc/init.d/apache2 start"
    stop  program = "/etc/init.d/apache2 stop"
       if failed port 80 for 2 cycles then restart
````

## Nginx-Aufsicht (einschließlich Php-fpm)

````
# Php-fpm
check process php5-fpm with pidfile /var/run/php5-fpm.pid
   start program = "/etc/init.d/php5-fpm start"
   stop  program = "/etc/init.d/php5-fpm stop"
   if failed unixsocket /var/run/php5-fpm.sock
          for 2 cycles
          then restart

# Nginx (test sur port 80)
check process nginx with pidfile /var/run/nginx.pid
   start program = "/etc/init.d/nginx start"
   stop  program = "/etc/init.d/nginx stop"
      if failed port 80 for 2 cycles then restart
````

## MySQL-Überwachung

````
# MySQL (connexion)
check process mysqld with pidfile /var/run/mysqld/mysqld.pid
   start program = "/etc/init.d/mysql start"
   stop  program = "/etc/init.d/mysql stop"
       if failed
       unixsocket /var/run/mysqld/mysqld.sock
       then alert
````

## APCupsd Aufsicht

````
# apcups (si vous disposez d'un onduleur avec ce service, sinon supprimer/adapter)
check process apcupsd with pidfile /var/run/apcupsd.pid
   start program = "/etc/init.d/apcupsd start"
   stop  program = "/etc/init.d/apcupsd stop"
      if failed port 3551 for 2 cycles then alert
````
