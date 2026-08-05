# Actualización de línea de comando de Jeedom

Veremos cómo actualizar manualmente su Jeedom *(si ya no puede acceder a la interfaz, por ejemplo)*

## Prerrequisitos

-   saber cómo conectarse en SSH a Jeedom
-   conocer las credenciales ssh *(ver documentación de instalación)*
-   tener acceso a Internet desde el cuadro Jeedom

> **Importante**
>
> Recuerde exportar la copia de seguridad Jeedom funcional más reciente fuera de la caja antes de cualquier actualización manual.

## Descargar y descomprimir

En SSH, haz :

````bash
su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
descomprimir master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## Mise à jour

Toujours en SSH:

````bash
su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Importante**
>
> Si su instalación de Jeedom es un poco vieja, debe reemplazar todas ``/var/www/html`` por ``/usr/share/nginx/www/jeedom``
