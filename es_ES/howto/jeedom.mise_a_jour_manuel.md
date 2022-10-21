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

```bash
supo -
cd /raíz
wget https://github.com/jeedom/core/archive/V4-stable.zip
descomprimir V4-estable.zip
cp -R core-4-stable/* /var/www/html
cp -R core-4-stable/.[^.]* /var/www/html
```

## Actualización

Todavía en SSH:

```bash
supo -
php /var/www/html/instalar/actualizar.phpmode=fuerza
chmod 775 -R /var/www/html
chown www-datos:www-datos -R /var/www/html
```

> **Importante**
>
> Si su instalación de Jeedom es un poco vieja, debe reemplazar todas ``/var/www/html`` por ``/usr/share/nginx/www/jeedom``
