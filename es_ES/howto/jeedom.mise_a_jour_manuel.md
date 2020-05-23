# Actualización de línea de comando de Jeedom

Veremos aquí cómo actualizar manualmente en

## Prerrequisitos

-   saber cómo conectarse en SSH a Jeedom
-   Conocer los identificadores SSH (ver documentación de instalación)
-   tener acceso a Internet desde el cuadro Jeedom

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

Todavía en SSH:

````
sudo su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Importante**
>
> Si su instalación de Jeedom es un poco vieja, debe reemplazar todas ``/var/www/html`` por ``/usr/share/nginx/www/jeedom``
