# Consejos y trucos de Debian

# Paquetes utiles

Aquí hay algunos paquetes útiles para instalar en blanco :

-   **fail2ban** : Le permite prohibir las IP que intentan conectarse a la máquina.
-   **vim** : Es un editor de texto de línea de comando, también podemos reemplazarlo con nano o muchos otros.
-   **herramientas de red** : colección de programas para administrar la red
-   **dos2unix** : herramienta de conversión de texto

``apt-get install -y vim fail2ban herramientas de red dos2unix``

Si está en VMware, puede agregar herramientas adicionales:

``apt-get install -y open-vm-tools``

# Colorea la consola

Si quieres que tu consola (bash) use colores :

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Permitir inicio de sesión raíz en SSH

Edite el archivo ``/etc/ssh/sshd_config`` y cambiar :

``PermitRootLogin without-password``

Por :

``PermitRootLogin yes``

> **Importante**
>
> Asegúrese de usar una contraseña de root segura ! También se recomienda el uso de fail2ban.

# Monta una parte de Samba

Instalación del paquete cifs

``apt-get install -y cifs-utils``

Crea el punto de montaje :

``mkdir /mnt/mon_partage``

> **Nota**
>
> Tienes que adaptar mi parte de acuerdo a tus necesidades

Montaje agregado en / etc / fstab

    // IP_SERVER_SAMBA / my_sharing / mnt / my_sharing cifs uid = 0, rw, usuario = TODO, contraseña = TODO 0 0

> **Nota**
>
> Debe cambiar los TODO con su nombre de usuario y contraseña de Linux

# Transición de Jessie a Stretch

Por haber probado la actualización y la instalación de Stretch con la restauración de una copia de seguridad, confirmo que la instalación de Stretch al sobrescribir le ahorrará tiempo.

-   **Método 1 : Instalación de estiramiento :** 1 a 2 horas como máximo, y sobre todo un sistema operativo limpio.
-   **Método 2 : actualización de Jessie a Stretch :** medio día para limpiar los errores.

## Método 1 : Instalación de Stretch y restauración de respaldo

Antes de comenzar, realice una copia de seguridad completa a través de Jeedom de su instalación bajo Jessie, luego exporte la copia de seguridad a otro medio de almacenamiento.

> **Punta**
>
> Descargue la copia de seguridad que no sea a través de la interfaz web (SSH, FTP, SAMBA, otras de su elección), porque si su archivo es grande, puede dañarse fácilmente a través de una descarga HTTP. Sin embargo, si es inferior a 100 MB, es jugable.

-   Instale Debian Stretch en su caja.
-   Reconfigure su red local, verifique que su máquina esté operativa y actualizada.
-   Instale Jeedom siguiendo las [Doctor](https://github.com/jeedom/documentation/blob/master/installation/es_ES/other.asciidoc)

>**Atención**
>
>MariaDB ya no permite el acceso al perfil 'raíz', que puede bloquear la restauración de una base de datos cuyo nombre habría cambiado (como yo), por lo que no restauramos la copia de seguridad de inmediato. Si el usuario 'jeedom' no tiene los permisos correctos, la restauración fallará.

Référence : <http://jc.etiemble.free.fr/abc/index.php / realizaciones / tips-tricks / deb9php7> (capítulo 5a)

En resumen, 2 líneas de comando para autorizar al usuario 'root' en MYSQL, en Estirar :

````
$ mysql -u root -p mysql
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 2
Server version: 10.1.21-MariaDB-5 Debian 9.0
Copyright (c) 2000, 2016, Oracle, MariaDB Corporation Ab and others.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [mysql]>
MariaDB [mysql]> GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';
Query OK, 0 rows affected (0.00 sec)
MariaDB [mysql]> exit;
Bye
````

> **Punta**
>
> Reemplace 'monpass' con su contraseña MYSQL utilizada para la cuenta raíz en "Debian 8 - Jessie". En particular, otorgo derechos de root para administrar mis bases de datos con 'PHPMYADMIN', pero debería ser suficiente otorgarle al usuario MYSQL 'jeedom'.

> **Punta**
>
> Encontrará la contraseña para el usuario de MYSQL jeedom aquí : Administración → Configuración → OS / DB → Base de datos

Depende de usted adaptar este comando de acuerdo con su configuración anterior :

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

ou

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Copie su copia de seguridad a la carpeta ``/var/www/html/backup``
-   Dar los derechos a www-data : ``chown -R www-data: /var/www/html/backup/*``
-   Inicie la restauración a través de la interfaz Jeedom (Administración → Copias de seguridad → Copias de seguridad locales : Elija la copia de seguridad correcta y haga clic **Restaurar** justo debajo)
-   Esperar durante la restauración
-   Restaurar los derechos de www-data en todos los Jeedom : ``chown -R www-data: /var/www/html/``
-   Reinicia la caja : `reboot`
-   Conéctese a Jeedom con sus antiguos identificadores a través de la interfaz web
-   Vaya a cada complemento para reinstalar las dependencias (especialmente aquellas en las que el demonio es "NOK" KO).

## Método 1 : Actualización (menos posibilidades de éxito)

Actualización del sistema operativo en la versión Jessie.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Edite el archivo / etc / apt / sources.enumere y reemplace todos los Jessie con Stretch, con el almacenamiento previo del archivo, haciendo :

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

Actualización del sistema operativo en la versión Stretch.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Cambiar a MariaDB.

``apt-get -y install mariadb-server mariadb-client mariadb-common``

Actualización de Jeedom

````
sh /var/www/html/install/install.sh -s 2
sh /var/www/html/install/install.sh -s 5
sh /var/www/html/install/install.sh -s 7
sh /var/www/html/install/install.sh -s 10
````

Eliminación de bibliotecas innecesarias

````
apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
apt -y remove `aptitude -F %p search '~o'`----
````

Nota : Si cuando abres tu página de Jeedom obtienes un código php, actívalo ejecutando los siguientes comandos :

````
a2enmod php7.0
systemctl restart apache2.service
````
