# Actualización de Jeedom mediante la línea de comandos

Vamos a ver cómo actualizar manualmente tu Jeedom *(por ejemplo, si ya no puedes acceder a la interfaz)*

## Requisitos previos

-   Cómo conectarse por SSH a Jeedom
-   Conocer las credenciales SSH *(véase la documentación de instalación)*
-   tener acceso a Internet desde el router Jeedom

> **Importante**
>
> Asegúrate de exportar la copia de seguridad funcional más reciente de Jeedom fuera del dispositivo antes de realizar cualquier actualización manual.

## Descarga y descompresión

En SSH, ejecuta:

````bash
su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
unzip master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## Actualización

Siguiendo con SSH:

````bash
su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Importante**
>
> Si tu instalación de Jeedom es un poco antigua, hay que sustituir todos los ``/var/www/html`` por ``/usr/share/nginx/www/jeedom``
