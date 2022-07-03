# Restaurar una copia de seguridad

El procedimiento le permitirá conectarse en SFTP a su caja para recuperar las copias de seguridad diarias realizadas por ella.

> **Consejo**
>
> Tenga en cuenta que para que este procedimiento funcione, el servidor SSH de la caja aún debe funcionar.

## Instalación de Filezilla

Filezilla es gratuito y está disponible en todas las plataformas. Permite transferir archivos a través de diferentes protocolos (FTP, FTPS, SFTP, etc.) Se puede descargar a través de este [Enlace](https://filezilla-project.org/download.php?type=client)

## Conexión a la caja

Para conectarse a su caja, simplemente complete los campos de información en la parte superior de la ventana de Filezilla :

![restore filezilla01](images/restore-filezilla01.jpg)

-   Anfitrión : Dirección IP de Jeedom (``sftp://`` se añade automáticamente)
-   IDENTIFICACIÓN : ``jeedom``
-   Contraseña : ``Mjeedom96``
-   Puerto : 22

Luego haga clic en "Conexión rápida"

## Navegación al directorio de copia de seguridad

Una vez establecida la conexión, es necesario ir al directorio de respaldo de Jeedom.

2 escenarios :

-   Servidor Apache (Caja inteligente Jeedom) : ``/var/www/html/backup``
-   Servidor Nginx :  ``/usr/share/nginx/www/jeedom/backup``

La ruta de acceso se ingresa en la sección del sitio remoto.

![restore filezilla02](images/restore-filezilla02.jpg)

## Descarga de copia de seguridad

En la lista de copias de seguridad, haciendo clic derecho, es posible comenzar a descargarlo.

![restore filezilla03](images/restore-filezilla03.jpg)
