# Consejos y trucos de Debian

# Paquetes útiles

Aquí hay algunos paquetes útiles para realizar una instalación limpia :

-   **fail2ban** : Le permite prohibir las IP que intentan conectarse a la máquina.
-   **empuje** : Es un editor de texto de línea de comandos, también podemos reemplazarlo por nano o muchos otros.
-   **herramientas de red** : colección de programas para gestionar la red
-   **dos2unix** : herramienta de conversión de texto

``apt-get install -y empuje fail2ban herramientas de red dos2unix``

Si está en VMware, puede agregar herramientas adicionales:

``apt-get install -y open-vm-tools``

# Colorear la consola

Si quieres que tu consola (bash) use los colores :

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Permitir inicio de sesión raíz en SSH

Tienes que editar el archivo ``/etc/ssh/sshd_config`` y cambio :

``PermitRootLogin without-password``

Por :

``PermitRootLogin yes``

> **Importante**
>
> Asegúrese de usar una contraseña de root segura ! También se recomienda usar fail2ban.

# Montar un recurso compartido de Samba

Instalación del paquete cifs

``apt-get install -y cifs-utils``

Crear el punto de montaje :

``mkdir /mnt/mon_partage``

> **Nota**
>
> Tienes que adaptar mi compartir de acuerdo a tus necesidades

Montaje añadido en /etc/fstab

    //IP_SERVER_SAMBA/my_share /mnt/my_share cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Nota**
>
> Debe cambiar TODOs a su nombre de usuario y contraseña de Linux

# Pasando de Jessie a Stretch

Después de probar la actualización e instalar Stretch con restauración desde una copia de seguridad, confirmo que instalar Stretch sobrescribiendo le ahorrará tiempo.

-   **Método 1 : instalando estiramiento :** 1 a 2 horas máximo, y sobre todo un sistema operativo limpio.
-   **Método 2 : Jessie actualizada para estirar :** medio día limpiando bichos.

## Método 1 : Instalar Stretch y restaurar la copia de seguridad

Antes de comenzar, haga una copia de seguridad completa a través de Jeedom de su instalación bajo Jessie, luego exporte la copia de seguridad a otro medio de almacenamiento.

> **Consejo**
>
> Descargue la copia de seguridad de otra manera que no sea a través de la interfaz web (SSH, FTP, SAMBA, otros de su elección), porque si su archivo es grande, puede corromperse fácilmente a través de una descarga HTTP. Sin embargo, si tiene menos de 100 MB, se puede reproducir.

-   Instale Debian Stretch en su caja.
-   Reconfigure su red local, verifique que su máquina esté operativa y actualizada.
-   Instale Jeedom siguiendo las [documento](https://github.com/jeedom/documentation/blob/master/installation/es_ES/other.asciidoc)

>**ATENCIÓN**
>
>MariaDB ya no permite el acceso al perfil 'raíz', lo que puede bloquear la restauración de una base de datos cuyo nombre haya cambiado (como yo) por lo que la copia de seguridad no se restaura de inmediato. Si el usuario 'jeedom' no tiene los permisos correctos, la restauración fallará.

Référence : <http://jc.etiemble.free.fr/abc/index.php/realizations/tips-tricks/deb9php7> (capítulo 5a)

Brevemente, 2 líneas de comandos para permitir al usuario 'root' en MYSQL, en Stretch :

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

> **Consejo**
>
> Reemplace 'mypass' con su contraseña MYSQL utilizada para la cuenta raíz en "Debian 8 - Jessie". Otorgo los derechos de root en particular para administrar mis bases de datos con 'PHPMYADMIN', pero dárselos al usuario MYSQL 'jeedom' debe ser suficiente.

> **Consejo**
>
> Encontrará el modo de contraseña del usuario MYSQL jeedom aquí : Administración → Configuración → OS/DB → Base de datos

Depende de usted adaptar este comando de acuerdo con su configuración anterior :

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

ou

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Copie su copia de seguridad en la carpeta ``/var/www/html/backup``
-   Dar derechos a www-data : ``chown -R www-data: /var/www/html/backup/*``
-   Inicie la restauración a través de la interfaz de Jeedom (Administración → Copias de seguridad → Copias de seguridad locales : Elija la copia de seguridad correcta y haga clic en **Restaurar** justo debajo)
-   Esperar mientras restaura
-   Restaurar los derechos de www-data en todo Jeedom : ``chown -R www-data: /var/www/html/``
-   Reiniciar la caja : `reboot`
-   Conéctese a Jeedom con sus credenciales anteriores a través de la interfaz web
-   Pase cada complemento para reinstalar las dependencias (especialmente en aquellos donde el daemon es "NOK" KO).

## Método 1 : Actualizar (menos posibilidades de éxito)

Actualización del sistema operativo a la versión de Jessie.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Tienes que editar el archivo /etc/apt/sources.enumere y reemplace todos los Jessie con Stretch, guardando previamente el archivo, haciendo :

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

Actualización del SO en versión Stretch.

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

Nota : Si cuando abre su página Jeedom obtiene un código php, actívelo ejecutando los siguientes comandos :

````
a2enmod php7.0
systemctl restart apache2.service
````
