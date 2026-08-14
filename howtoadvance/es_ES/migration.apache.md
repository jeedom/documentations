# Migración de Apache

-   Apache se irá convirtiendo poco a poco en el estándar con Jeedom
-   Permite disponer de las últimas actualizaciones de seguridad en lo que respecta al acceso a los archivos (gracias al archivo .htaccess) durante las actualizaciones de Jeedom
-   Corrige algunos problemas de acceso y estabilidad (especialmente para quienes tienen muchas cámaras)
-   Mejora el rendimiento general de Jeedom.

# Requisitos previos

-   Saber cómo conectarse por SSH al router (encontrarás los datos de acceso en la documentación de instalación)
-   Estar conectado a Internet.

> **Importante**
>
> En caso de problemas, el equipo de Jeedom no se hará responsable y podrá rechazar cualquier solicitud de asistencia técnica. El uso es bajo tu propia responsabilidad.

> **Importante**
>
> Atención: algunos complementos no oficiales no son compatibles con Apache, así que infórmate bien antes de instalarlos.

# Cómo hacerlo

## Desactivación de los servicios Jeedom y nginx

En Jeedom, hay que ir a cada plugin que tenga un demonio, desactivar la gestión automática del demonio y detenerlo. A continuación, en el gestor de tareas, hay que desactivar todas las tareas (hay un botón de desactivación general) y, en los escenarios, desactivar todos los escenarios (hay un botón de desactivación general).

````
systemctl stop cron
systemctl stop nginx
systemctl stop mysql
````

## Instalación y configuración de Apache

````
mkdir -p /var/www/html/log
apt-get -y install ntp ca-certificates unzip curl sudo
apt-get -y install apache2 php5 mysql-client mysql-server libapache2-mod-php5
apt-get -y install php5-cli php5-common php5-curl php5-fpm php5-json php5-mysql php5-gd
wget https://raw.githubusercontent.com/jeedom/core/stable/install/apache_security -O /etc/apache2/conf-available/security.conf
rm /etc/apache2/conf-enabled/security.conf
ln -s /etc/apache2/conf-available/security.conf /etc/apache2/conf-enabled/
rm /etc/apache2/conf-available/other-vhosts-access-log.conf
rm /etc/apache2/conf-enabled/other-vhosts-access-log.conf
systemctl restart apache2
rm /var/www/html/index.html
````

> **Nota**
>
> Si durante la instalación el sistema te pregunta si quieres conservar o no una versión modificada de un archivo, selecciona: «Keep the local version currently installed».

## Copia de Jeedom

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## Prueba de acceso

``systemctl start mysql``

Ahora deberías poder acceder a Jeedom desde la misma URL que antes. Si todo va bien, puedes continuar; DE LO CONTRARIO, NO SIGAS CON EL PROCEDIMIENTO BAJO NINGÚN CONCEPTO.

## Actualización del crontab

Hacer:

``crontab -e``

A continuación, actualiza la ruta de acceso a Jeedom, sustituyendo:

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

Por:

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## Limpieza y eliminación de nginx

````
apt-get remove nginx*
rm -rf cp -R /usr/share/nginx
apt-get autoremove
systemctl disable nginx
````

## Reinicio de los servicios

````
systemctl enable apache2
systemctl start cron
````

A continuación, inicia sesión en tu Jeedom y reactiva el motor de tareas y los escenarios. También puedes reiniciar los demonios.

> **Importante**
>
> Se recomienda, tras la migración, ejecutar una actualización de Jeedom (aunque no te lo proponga).
