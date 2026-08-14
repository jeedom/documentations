# Restauración de una copia de seguridad

Este procedimiento te permitirá conectarte mediante SFTP a tu router para recuperar las copias de seguridad diarias que este realiza.

> **Consejo**
>
> Atención: para que este procedimiento funcione, es necesario que el servidor SSH del router esté siempre operativo.

## Instalación de FileZilla

FileZilla es un programa gratuito disponible para todas las plataformas. Permite transferir archivos a través de diferentes protocolos (FTP, FTPS, SFTP…​). Se puede descargar desde este [enlace](https://filezilla-project.org/download.php?type=client)

## Conexión al router

Para conectarte a tu router, solo tienes que rellenar los campos de información que aparecen en la parte superior de la ventana de FileZilla:

![Restaurar filezilla01](../images/restore-filezilla01.jpg)

-   Host: Dirección IP de Jeedom (``sftp://`` se añade automáticamente)
-   Nombre de usuario: ``jeedom``
-   Contraseña: ``Mjeedom96``
-   Puerto: 22

A continuación, haz clic en «Conexión rápida»

## Navegación al directorio de copias de seguridad

Una vez establecida la conexión, hay que ir a la carpeta de copias de seguridad de Jeedom.

Dos casos posibles:

-   Servidor Apache (Box Jeedom Smart): ``/var/www/html/backup``
-   Servidor Nginx:  ``/usr/share/nginx/www/jeedom/backup``

La ruta de acceso se indica en la sección «sitio remoto».

![Restaurar filezilla02](../images/restore-filezilla02.jpg)

## Descarga de la copia de seguridad

En la lista de copias de seguridad, al hacer clic con el botón derecho del ratón, se puede iniciar la descarga.

![Restaurar filezilla03](../images/restore-filezilla03.jpg)
