Monit ist ein Serviceüberwachungsdienst. Er kümmert sich darum
Überprüfen Sie, ob ein Dienst noch gestartet ist.

Hierzu geben wir die Bewertungskriterien und die Maßnahmen an
prendre.

Installation von Monit 
=====================

Hier sind die Befehle, die gestartet werden müssen, um monit zu installieren :

    sudo apt-get -y monit

Beispiele für conf 
================

Hier sind Konfigurationsbeispiele für Monit with Jeedom.

Apache Aufsicht 
==================

    # Apache (Test auf Port 80)
    Überprüfen Sie den Prozess apache2 mit pidfile /var/run/apache2/apache2.pid
        start program = "/ etc / init.d / apache2 start"
        stop program = "/ etc / init.d / apache2 stop"
           Wenn Port 80 für 2 Zyklen ausgefallen ist, starten Sie ihn neu

Nginx-Aufsicht (einschließlich Php-fpm?) 
=====================================

    # Php-fpm?
    Überprüfen Sie den Prozess php5-fpm mit pidfile /var/run/php5-fpm.pid
       start program = "/ etc / init.d / php5-fpm start"
       stop program = "/ etc / init.d / php5-fpm stop"
       Wenn dies fehlschlägt, unixsocket /var/run/php5-fpm.sock
              für 2 Zyklen
              dann neu starten

    # Nginx (Test an Port 80)
    Überprüfen Sie den Prozess Nginx mit pidfile /var/run/nginx.pid
       start program = "/ etc / init.d / nginx start"
       stop program = "/ etc / init.d / nginx stop"
          Wenn Port 80 für 2 Zyklen ausgefallen ist, starten Sie ihn neu

MySQL-Überwachung 
=================

    # MySQL (Verbindung)
    Überprüfen Sie den Prozess mysqld mit pidfile /var/run/mysqld/mysqld.pid
       start program = "/ etc / init.d / mysql starten"
       stop program = "/ etc / init.d / mysql halt"
           wenn fehlgeschlagen
           unixsocket /var/run/mysqld/mysqld.sock
           dann alarmieren

APCupsd Aufsicht 
===================

    # apcups (wenn Sie einen Wechselrichter mit diesem Dienst haben, andernfalls löschen / anpassen)
    Überprüfen Sie den Prozess apcupsd mit pidfile /var/run/apcupsd.pid
       start program = "/ etc / init.d / apcupsd starten"
       stop program = "/ etc / init.d / apcupsd stop"
          Wenn Port 3551 für 2 Zyklen ausgefallen ist, dann Alarm
