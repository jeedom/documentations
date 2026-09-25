# Consejos y trucos de Debian

# Paquetes útiles

A continuación te indicamos algunos paquetes útiles que puedes instalar en un sistema nuevo:

-   **fail2ban**: Permite bloquear las direcciones IP que intentan conectarse al equipo.
-   **vim**: es un editor de texto de línea de comandos; también se puede sustituir por nano o por muchos otros.
-   **net-tools**: colección de programas para gestionar la red
-   **dos2unix**: herramienta de conversión de texto

``apt-get install -y vim fail2ban net-tools dos2unix``

Si utilizas VMware, puedes añadir herramientas adicionales:

``apt-get install -y open-vm-tools``

# Aplicar color a la consola

Si quieres que tu consola (bash) utilice colores:

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Permitir la conexión como usuario root por SSH

Hay que editar el archivo ``/etc/ssh/sshd_config`` y cambiarlo por:

``PermitRootLogin without-password``

Por:

``PermitRootLogin yes``

> **Importante**
>
> ¡Asegúrate de utilizar una contraseña de root segura! También se recomienda el uso de fail2ban.

# Configurar un recurso compartido de Samba

Instalación del paquete cifs

``apt-get install -y cifs-utils``

Crear el punto de montaje:

``mkdir /mnt/mon_partage``

> **Nota**
>
> Hay que adaptar mi_recurso compartido a tus necesidades

Añadir el montaje en /etc/fstab

//IP_SERVER_SAMBA/mi_carpeta_compartida /mnt/mi_carpeta_compartida cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Nota**
>
> Debes sustituir «TODO» por tu nombre de usuario de Linux y tu contraseña.

# Cambio de Jessie a Stretch

Tras haber probado la actualización y la instalación de Stretch restaurando una copia de seguridad, puedo confirmar que instalar Stretch sobrescribiendo el sistema te ahorrará tiempo.

-   **Método 1: instalación de Stretch:** entre 1 y 2 horas como máximo, y, sobre todo, un sistema operativo limpio.
-   **Método 2: actualización de Jessie a Stretch:** medio día solucionando errores.

## Método 1: Instalación de Stretch y restauración de una copia de seguridad

Antes de empezar, realiza una copia de seguridad completa a través de Jeedom de tu instalación en Jessie y, a continuación, exporta la copia de seguridad a otro soporte de almacenamiento.

> **Consejo**
>
> Descarga la copia de seguridad por un método distinto al de la interfaz web (SSH, FTP, SAMBA u otros de tu elección), ya que, si el archivo es muy grande, puede dañarse fácilmente al descargarlo mediante HTTP. Sin embargo, si ocupa menos de 100 MB, no hay problema.

-   Instala Debian Stretch en tu dispositivo.
-   Reconfigura tu red local y comprueba que tu equipo funciona correctamente y está actualizado.
-   Instala Jeedom siguiendo las instrucciones de la [doc](https://github.com/jeedom/documentation/blob/master/installation/fr_FR/other.asciidoc)

>**ATENCIÓN**
>
>MariaDB ya no permite el acceso al perfil «root», lo que puede impedir la restauración de una base de datos cuyo nombre hayas cambiado (como me pasó a mí), por lo que no restaures la copia de seguridad de inmediato. Si el usuario «jeedom» no tiene los permisos adecuados, la restauración fallará.

Referencia: <http://jc.etiemble.free.fr/abc/index.php/realisations/trucs-astuces/deb9php7> (capítulo 5a)

En resumen, dos líneas de comando para autorizar al usuario «root» en MySQL, en Stretch:

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
> Sustituye «monpass» por tu contraseña de MySQL utilizada para la cuenta de root en «Debian 8 - Jessie». Yo le concedo permisos a root, sobre todo para gestionar mis bases de datos con «PHPMYADMIN», pero debería bastar con concedérselos al usuario de MySQL «jeedom».

> **Consejo**
>
> Aquí encontrarás el modo de contraseña del usuario MYSQL de Jeedom: Administración → Configuración → SO/BD → Base de datos

Depende de ti adaptar este comando en función de tu configuración anterior:

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

o

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Copia tu copia de seguridad en la carpeta ``/var/www/html/backup``
-   Otorga los permisos a www-data: ``chown -R www-data: /var/www/html/backup/*``
-   Inicia la restauración a través de la interfaz de Jeedom (Administración → Copias de seguridad → Copias de seguridad locales: selecciona la copia de seguridad adecuada y haz clic en **Restaurar** justo debajo).
-   Por favor, espera mientras se realiza la restauración
-   Restablece los permisos de www-data en todo Jeedom: ``chown -R www-data: /var/www/html/``
-   Reinicia el router: `reboot`
-   Inicia sesión en Jeedom con tus datos de acceso habituales a través de la interfaz web
-   Revisa cada plugin para reinstalar las dependencias (especialmente aquellos en los que el daemon está «NOK» o «KO»).

## Método 1: Actualización (menor probabilidad de éxito)

Actualización del sistema operativo a la versión Jessie.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Hay que editar el archivo /etc/apt/sources.list y sustituir todos los «Jessie» por «Stretch», tras haber guardado previamente el archivo, de la siguiente manera:

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

Actualización del sistema operativo a la versión Stretch.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Cambio a MariaDB.

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

Nota: Si al abrir tu página de Jeedom aparece un código PHP, actívalo ejecutando los siguientes comandos:

````
a2enmod php7.0
systemctl restart apache2.service
````
