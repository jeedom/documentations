Por qué ? 
==========

-   Apache se convertirá gradualmente en la norma con Jeedom

-   Le permite tener las últimas actualizaciones de seguridad en
    acceso a archivos (gracias a .htaccess) durante las actualizaciones de
    Jeedom

-   Corrige algunos problemas de acceso y estabilidad (especialmente para aquellos
    que tienen muchas cámaras)

-   Mejora el rendimiento general de Jeedom.

Prerrequisitos 
=========

-   Sepa cómo conectarse en SSH en la caja (encontrará el
    identificadores en la documentación de instalación)

-   Estar conectado a internet.

> **Important**
>
> En caso de inquietud, el equipo de Jeedom no puede ser considerado responsable y
> puede rechazar cualquier solicitud de soporte. El manejo es tuyo
> riesgos y peligros.

> **Important**
>
> Tenga en cuenta que algunos complementos no oficiales no son compatibles
> Apache, averígualo mucho antes.

Como hacer 
=============

Desactivación de los servicios Jeedom y nginx 
------------------------------------------

En Jeedom, debes ir a cada plugin con un demonio, luego
desactivar la gestión automática del demonio y cortarlo. Hay que
luego, en el motor de tareas, desactive todas las tareas (hay un
botón de desactivación general) y en los escenarios desactivar todos
los escenarios (hay un botón de desactivación general).

    systemctl stop cron
    systemctl stop nginx
    systemctl stop mysql

Instalación y configuración de Apache 
--------------------------------------

    mkdir -p / var / www / html / log
    apt-get -y instalar ntp ca-certificados descomprimir curl sudo
    apt-get -y instalar apache2 php5 mysql-client mysql-server libapache2-mod-php5
    apt-get -y install php5-cli php5-common php5-curl php5-fpm php5-json php5-mysql php5-gd
    wget https://raw.githubusercontent.com / jeedom / core / stable / install / apache_security -O /etc/apache2/conf-available/security.conf
    rm /etc/apache2/conf-enabled/security.conf
    ln -s / etc / apache2 / conf-available / security.conf / etc / apache2 / conf-enabled /
    rm /etc/apache2/conf-available/other-vhosts-access-log.conf
    rm /etc/apache2/conf-enabled/other-vhosts-access-log.conf
    systemctl reiniciar apache2
    rm / var / www / html /index.html

> **Note**
>
> Si durante la instalación el sistema te pregunta si quieres o
> no mantener una versión modificada de un archivo, hacer : "Mantener el local
> versión instalada actualmente".

Copia de Jeedom 
---------------

    cp -R / usr / share / nginx / www / jeedom / * / var / www / html /
    cp -R /usr/share/nginx/www/jeedom/.[^.]* / var / www / html /
    rm / var / www / html /log/nginx.error
    chmod 775 -R / var / www / html
    www-data chown:www-data -R / var / www / html

Prueba de acceso 
------------

    systemctl iniciar mysql

Ahora debería poder acceder a Jeedom desde la misma URL
que antes Si es bueno, puede continuar. OTRO NO ES ESENCIAL
NO CONTINUAR.

Actualización de Crontab 
-------------------------

HACER :

    crontab -e

Luego actualice la ruta a Jeedom, reemplace :

    * * * * * su --shell = / bin / bash - www-data -c '/ usr / bin / php / usr / share / nginx / www / jeedom / core / php / jeeCron.php '>> / dev / null 2> & 1

Por :

    * * * * * su --shell = / bin / bash - www-data -c '/ usr / bin / php / var / www / html / core / php / jeeCron.php '>> / dev / null 2> & 1

Limpieza y eliminación de nginx 
---------------------------------

    apt-get remove nginx*
    rm -rf cp -R / usr / share / nginx
    apt-get autoremove
    systemctl deshabilita nginx

Reiniciar servicios 
------------------------

    systemctl habilita apache2
    systemctl start cron

Luego conéctese a su Jeedom y reactive el motor de tareas
y los escenarios. También puedes revivir a los demonios..

> **Important**
>
> Se recomienda después de la migración iniciar una actualización de
> Jeedom (incluso si no te ofrece nada).
