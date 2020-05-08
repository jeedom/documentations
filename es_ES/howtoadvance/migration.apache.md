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

 
--------------------------------------

    
    
    
    
    wget https://raw.githubusercontent.
    
    .
    
    
    
    

> **Note**
>
> 
>  : "
> ".

 
---------------

    
    .]* 
    
    
    :

 
------------

    



.

 
-------------------------

 :

    crontab -e

 :

    * * * * * .

Por :

    * * * * * .

 
---------------------------------

    *
    
    
    

 
------------------------

    
    


. .

> **Important**
>
> 
> .
