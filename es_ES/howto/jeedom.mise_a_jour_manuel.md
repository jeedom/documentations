# Actualización de la línea de comandos de jeedom

Veremos aquí cómo actualizar manualmente en

## Requisitos previos

-   saber cómo conectarse en SSH a Jeedom
-   conocer los identificadores SSH (ver documentación de instalación)
-   tener acceso a Internet desde la caja Jeedom

> **Importante**
>
> Recuerde hacer y exportar una copia de seguridad antes de cualquier actualización manual.

## Descargar y descomprimir

En SSH, haz :

````
sudo su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
unzip master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## Actualización

Siempre en SSH:

````
sudo su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Importante**
>
> Si su instalación de Jeedom es un poco antigua, debe reemplazar todos los ``/var/www/html`` por ``/usr/share/nginx/www/jeedom``
