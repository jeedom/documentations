Monit est un service de supervision de services. Il se charge de
vérifier qu’un service est toujours démarré.

Pour cela on lui indique les critères d’évaluation et les actions à
prendre.

Installation de Monit 
=====================

Voici les commandes à lancer pour installer monit :

    sudo apt-get -y monit

Exemples de conf 
================

Voici des exemples de configuration pour Monit avec Jeedom.

Supervision Apache 
==================

    # Apache (test sur port 80)
    check process apache2 with pidfile /var/run/apache2/apache2.pid
        start program = "/etc/init.d/apache2 start"
        stop  program = "/etc/init.d/apache2 stop"
           if failed port 80 for 2 cycles then restart

Supervision Nginx (y compris Php-fpm) 
=====================================

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

Supervision MySQL 
=================

    # MySQL (connexion)
    check process mysqld with pidfile /var/run/mysqld/mysqld.pid
       start program = "/etc/init.d/mysql start"
       stop  program = "/etc/init.d/mysql stop"
           if failed
           unixsocket /var/run/mysqld/mysqld.sock
           then alert

Supervision APCupsd 
===================

    # apcups (si vous disposez d'un onduleur avec ce service, sinon supprimer/adapter)
    check process apcupsd with pidfile /var/run/apcupsd.pid
       start program = "/etc/init.d/apcupsd start"
       stop  program = "/etc/init.d/apcupsd stop"
          if failed port 3551 for 2 cycles then alert
