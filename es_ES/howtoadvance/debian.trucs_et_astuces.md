Paquetes utiles 
==============

Aquí hay algunos paquetes útiles para instalar en blanco :

-   **fail2ban** : Le permite prohibir las IP que intentan conectarse
    maquina.

-   **vim** : Es un editor de texto de línea de comando, puedes
    también reemplazarlo con nano o muchos otros.

-   **herramientas de red** : colección de programas para administrar la red

-   **dos2unix** : herramienta de conversión de texto

<!-- -->

    apt-get install -y vim fail2ban net-tools dos2unix

Si está en VMware, puede agregar herramientas adicionales
:

    apt-get install -y open-vm-tools

Colorea la consola 
====================

Si quieres que tu consola (bash) use colores :

    rm -rf /root/.bashrc
    wget https://raw.githubusercontent.com / jeedom / core / stable / install / bashrc -O /root/.bashrc
    dos2unix /root/.bashrc

Permitir inicio de sesión raíz en SSH 
==================================

Edite el archivo / etc / ssh / sshd\_config y cambie :

    PermitRootLogin sin contraseña

Por :

    PermitRootLogin yes

> **Importante**
>
> Asegúrese de usar una contraseña de root segura ! El uso de
> fail2ban también se recomienda.

Monta una parte de Samba 
=======================

Instalación del paquete cifs

    apt-get install -y cifs-utils

Crea el punto de montaje :

    mkdir / mnt / my_share

> **Nota**
>
> Tienes que adaptar mi parte de acuerdo a tus necesidades

Montaje agregado en / etc / fstab

    // IP_SERVER_SAMBA / my_sharing / mnt / my_sharing cifs uid = 0, rw, usuario = TODO, contraseña = TODO 0 0

> **Nota**
>
> Debe cambiar los TODO con su nombre de usuario de Linux y su
> Contraseña

Transición de Jessie a Stretch 
===========================

Por haber probado la actualización y la instalación de Stretch con restauración
una copia de seguridad, confirmo que la instalación de Stretch por
sobrescribir le ahorrará tiempo.

-   **Método 1 : Instalación de estiramiento :** 1 a 2 horas máximo, y
    especialmente un sistema operativo limpio.

-   **Método 2 : actualización de Jessie a Stretch :** medio día a las
    limpiar errores.

Método 1 : Instalación de Stretch y restauración de respaldo 
-----------------------------------------------------------------

Antes de comenzar, haga una copia de seguridad completa a través de Jeedom de su
instalación bajo Jessie, luego exportar la copia de seguridad a otro
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
    Bye

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

ou

    OTORGA TODOS LOS PRIVILEGIOS EN *.* TO jeedom @ 'localhost' IDENTIFICADO POR 'monpass';

-   Copie su copia de seguridad en la carpeta `/ var / www / html / backup`

-   Dar los derechos a www-data :
    `chown -R www-data: / var / www / html / backup / * `

-   Inicie la restauración a través de la interfaz Jeedom (Administración →
    Copias de seguridad → Copias de seguridad locales : Elija la copia de seguridad correcta
    y haga clic **Restaurar** justo debajo)

-   Esperar durante la restauración

-   Restaurar los derechos de www-data en todos los Jeedom :
    `chown -R www-data: / var / www / html / `

-   Reinicia la caja : `reboot`

-   Conéctese a Jeedom con sus antiguos identificadores a través de
    interfaz web

-   Cambie a cada complemento para reinstalar las dependencias (en particular
    en aquellos donde el demonio es "NOK" KO).

Método 1 : Actualización (menos posibilidades de éxito) 
-----------------------------------------------

Actualización del sistema operativo en la versión Jessie.

    apt-get -y update
    actualización de apt-get -y
    apt-get -y dist-upgrade

Edite el archivo / etc / apt / sources.enumerar y reemplazar todo
Jessie by Stretch, con copia de seguridad de archivos previa, haciendo :

    cp / etc / apt / sources.list /etc/apt/sources.list_backup
    sed -i 's / jessie / stretch / g' /etc/apt/sources.list

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

Eliminación de bibliotecas innecesarias

    apt -y remove `aptitude -F% p search '~ o' | grep -E -v ^ lib`
    apt -y remove `aptitude -F% p search '~ o'`----

Nota : Si cuando abres tu página de Jeedom obtienes un código php, actívalo ejecutando los siguientes comandos :

    a2enmod php7.0 
    systemctl restart apache2.service

