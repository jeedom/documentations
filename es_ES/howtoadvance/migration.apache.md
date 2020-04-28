Por qué ? 
==========

-   

-   
     .
    Jeedom

-   
    

-   .

 
=========

-   
    

-   .

> **Importante**
>
> 
> . 
> .

> **Importante**
>
> 
> .

Como hacer 
=============

 
------------------------------------------


. Hay que


.

    
    
    

 
--------------------------------------

    
    
    
    
    wget https:.com / jeedom / core / stable / install / apache_security -O /etc/apache2/conf-available/security.conf
    rm /etc/apache2/conf-enabled/security.conf
    ln -s / etc / apache2 / conf-available / security.conf / etc / apache2 / conf-enabled /
    rm /etc/apache2/conf-available/other-vhosts-access-log.conf
    rm /etc/apache2/conf-enabled/other-vhosts-access-log.conf
    systemctl reiniciar apache2
    rm / var / www / html /index.html

> **Nota**
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

> **Importante**
>
> Se recomienda después de la migración iniciar una actualización de
> Jeedom (incluso si no te ofrece nada).
