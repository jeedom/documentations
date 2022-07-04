# Migración de Apache

-   Apache se convertirá gradualmente en el estándar con Jeedom
-   Permite disponer de las últimas actualizaciones de seguridad en cuanto a acceso a archivos (gracias a la .htaccess) durante las actualizaciones de Jeedom
-   Soluciona algunos problemas de acceso y estabilidad (especialmente para aquellos con muchas cámaras))
-   Mejora el rendimiento general de Jeedom.

# Requisitos previos

-   Sepa cómo conectarse en SSH en la caja (encontrará los identificadores en la documentación de instalación)
-   Estar conectado a internet.

> **Importante**
>
> En caso de problema, el equipo de Jeedom no se hace responsable y puede rechazar cualquier solicitud de soporte. El manejo es bajo su propio riesgo.

> **Importante**
>
> Tenga en cuenta que algunos complementos no oficiales no son compatibles con Apache, infórmese de antemano.

# Como hacer

## Deshabilitar los servicios de Jeedom y nginx

En Jeedom, debe ir a cada complemento que tenga un demonio, luego desactivar la administración automática del demonio y cortarlo. Luego, en el motor de tareas, desactive todas las tareas (hay un botón de desactivación general) y en los escenarios, desactive todos los escenarios (hay un botón de desactivación general).

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
> Si durante la instalación el sistema le pregunta si desea o no conservar una versión modificada de un archivo, hágalo : "Mantener la versión local actualmente instalada".

## Copia de Jeedom

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## Examen de admision

``systemctl start mysql``

Ahora debería poder acceder a Jeedom desde la misma URL que antes. Si es bueno puedes continuar DE LO CONTRARIO NO DEBES HACER LO SIGUIENTE.

## Actualización crontab

Hacer :

``crontab -e``

Luego actualice la ruta a Jeedom, reemplace :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

Por :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## Limpieza y eliminación de nginx

````
apt-get remove nginx*
rm -rf cp -R /usr/share/nginx
apt-get autoremove
systemctl disable nginx
````

## Reinicio de servicios

````
systemctl enable apache2
systemctl start cron
````

Luego, conéctese a su Jeedom y reactive el motor de tareas y los escenarios. También puedes revivir demonios.

> **Importante**
>
> Es recomendable después de la migración lanzar una actualización de Jeedom (aunque no te ofrezca nada).
