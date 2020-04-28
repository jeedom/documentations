 
==============

 :

-   **** : 
    .

-   **** : 
    .

-   **** : 

-   **** : 

<!-- -->

    


:

    

 
====================

 :

    
    wget https:.
    

 
==================================

 :

    

Por :

    

> **Importante**
>
>  ! 
> .

 
=======================



    

 :

    

> **Nota**
>
> 



    

> **Nota**
>
> 
> Contraseña

 
===========================



.

-   ** :  :** 
    .

-   ** :  :** 
    .

 :  
-----------------------------------------------------------------



medio de almacenamiento.

> **Punta**
>
> Descargue la copia de seguridad que no sea a través de la interfaz web (SSH, FTP,
> SAMBA, otros de su elección), porque si su archivo es grande
> se puede corromper fácilmente a través de la descarga HTTP.
> Sin embargo, si es inferior a 100 MB, es jugable.

-   Instale Debian Stretch en su caja.

-   Reconfigure su red local, verifique que su máquina esté
    operacional y actualizado.

-   Instala Jeedom siguiendo el documento :
    <https://github.com/jeedom/documentation/blob/master/installation/es_ES/other.asciidoc>

\ [ATENCIÓN \] MariaDB ya no permite el acceso al perfil 'raíz', que
puede bloquear la restauración de una base de datos que tiene
cambió el nombre (como yo) para que no restauremos inmediatamente
copia de seguridad Si el usuario 'jeedom' no tiene los permisos correctos, el
la restauración fallará.

Referencia :
<http://jc.etiemble.free.fr/abc/index.php/realisations/trucs-astuces/deb9php7>
(capítulo 5a)

En resumen, 2 líneas de comando para autorizar al usuario 'root' en
MYSQL, bajo Estiramiento :

    $ mysql -u root -p mysql
    Ingrese contraseña:
    Bienvenido al monitor MariaDB.  Los comandos terminan con; o \ g.
    Su ID de conexión MariaDB es 2
    Versión del servidor: 10.1.21-MariaDB-5 Debian 9.0
    Copyright (c) 2000, 2016, Oracle, MariaDB Corporation Ab y otros.
    Escriba "ayuda"; o '\ h' para ayuda. Escriba '\ c' para borrar la declaración de entrada actual.

    MariaDB [mysql]>
    MariaDB [mysql]> OTORGA TODOS LOS PRIVILEGIOS EN *.* TO root @ 'localhost' IDENTIFICADO POR 'monpass';
    Consulta OK, 0 filas afectadas (0.00 segundos)
    MariaDB [mysql]> salir;
    Adios

> **Punta**
>
> Reemplace 'monpass' con su contraseña MYSQL utilizada para
> cuenta raíz bajo "Debian 8 - Jessie". Doy derechos de root
> especialmente para administrar mis bases de datos con 'PHPMYADMIN', pero darles a
> el usuario MYSQL 'jeedom' debería ser suficiente.

> **Punta**
>
> Encontrará la contraseña para el usuario de MYSQL jeedom aquí :
> Administración → Configuración → OS / DB → Base de datos

Depende de usted adaptar este comando de acuerdo con su configuración
anterior :

    OTORGA TODOS LOS PRIVILEGIOS EN *.* TO root @ 'localhost' IDENTIFICADO POR 'monpass';

o

    OTORGA TODOS LOS PRIVILEGIOS EN *.* TO jeedom @ 'localhost' IDENTIFICADO POR 'monpass';

-   Copiez votre sauvegarde dans le dossier `/var/www/html/backup`

-   Dar los derechos a www-data :
    `chown -R www-data: /var/www/html/backup/*`

-   Inicie la restauración a través de la interfaz Jeedom (Administración →
    Copias de seguridad → Copias de seguridad locales : Elija la copia de seguridad correcta
    y haga clic **Restaurar** justo debajo)

-   Esperar durante la restauración

-   Restaurar los derechos de www-data en todos los Jeedom :
    `chown -R www-data: /var/www/html/`

-   Reinicia la caja : `reboot`

-   Conéctese a Jeedom con sus antiguos identificadores a través de
    interfaz web

-   Cambie a cada complemento para reinstalar las dependencias (en particular
    en aquellos donde el demonio es "NOK" KO).

 : Actualización (menos posibilidades de éxito) 
-----------------------------------------------

Actualización del sistema operativo en la versión Jessie.

    apt-get -y update
    actualización de apt-get -y
    apt-get -y dist-upgrade

Edite el archivo / etc / apt / sorces.enumerar y reemplazar todo
Jessie by Stretch, con copia de seguridad de archivos previa, haciendo :

    cp / etc / apt / sorces.list /etc/apt/sorces.list_backup
    sed -i 's / jessie / stretch / g' /etc/apt/sorces.list

Actualización del sistema operativo en la versión Stretch.

    apt-get -y update
    actualización de apt-get -y
    apt-get -y dist-upgrade

Cambiar a MariaDB.

    apt-get -y install mariadb-server mariadb-client mariadb-common

Actualización de Jeedom

    sh / var / www / html / install / install.sh -s 2
    sh / var / www / html / install / install.sh -s 5
    sh / var / www / html / install / install.sh -s 7
    sh / var / www / html / install / install.sh -s 10

Eliminación de bibliotecas innecesarias.

    ' | grep -E -v ^lib`
    '`----

Nota : Si cuando abres tu página de Jeedom obtienes un código php, actívalo ejecutando los siguientes comandos :

    a2enmod php7.0 
    systemctl restart apache2.service

