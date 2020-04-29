Monit es un servicio de supervisión de servicio. El cuida
compruebe que todavía se ha iniciado un servicio.

Para ello indicamos los criterios de evaluación y las acciones para
prendre.

Instalación de Monit 
=====================

Aquí están los comandos para iniciar la instalación de monit :

    sudo apt-get -y monit

Ejemplos de conf 
================

Aquí hay ejemplos de configuración para Monit con Jeedom.

Supervisión Apache 
==================

    # Apache (prueba en el puerto 80)
    compruebe el proceso apache2 con pidfile /var/run/apache2/apache2.pid
        programa de inicio = "/ etc / init.d / apache2 inicio"
        detener programa = "/ etc / init.d / apache2 stop"
           si falla el puerto 80 durante 2 ciclos, reinicie

Supervisión Nginx (incluido Php-fpm) 
=====================================

    # Php-fpm
    compruebe el proceso php5-fpm con pidfile /var/run/php5-fpm.pid
       programa de inicio = "/ etc / init.inicio d / php5-fpm"
       detener programa = "/ etc / init.parada d / php5-fpm"
       si falla unixsocket /var/run/php5-fpm.sock
              por 2 ciclos
              luego reiniciar

    # Nginx (prueba en el puerto 80)
    compruebe el proceso nginx con pidfile /var/run/nginx.pid
       programa de inicio = "/ etc / init.d / nginx start"
       detener programa = "/ etc / init.d / nginx stop"
          si falla el puerto 80 durante 2 ciclos, reinicie

Supervisión MySQL 
=================

    # MySQL (conexión)
    compruebe el proceso mysqld con pidfile /var/run/mysqld/mysqld.pid
       programa de inicio = "/ etc / init.d / mysql start"
       detener programa = "/ etc / init.d / mysql stop"
           si falla
           unixsocket /var/run/mysqld/mysqld.sock
           luego alerta

Supervisión APCupsd 
===================

    # apcups (si tiene un inversor con este servicio, de lo contrario, elimine / adapte)
    compruebe el proceso apcupsd con pidfile /var/run/apcupsd.pid
       programa de inicio = "/ etc / init.d / apcupsd start"
       detener programa = "/ etc / init.d / apcupsd stop"
          si falla el puerto 3551 durante 2 ciclos, entonces alerta
