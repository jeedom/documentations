Instalación de Letsencrypt 
===========================

Estos son los comandos para iniciar la instalación de letsencrypt antes de
generación :

    
    cd / opt
    git clone https://github.com/letsencrypt/letsencrypt
    
    ./ letsencrypt-auto --help

Para solicitar un certificado, debe tener un nombre de
dominio para el que se generará.

Configuración de Apache 
======================

Para que el proceso letsEncrypt se complete con éxito, es
necesario realizar los tres pasos a continuación de antemano :

Atención, es necesario abrir el puerto 80 en el enrutador (ISP) ! 

-   Active el módulo apache SSL del cuadro Jeedom.

-   Active el Apache VirtualHost HTTPS desde el cuadro Jeedom .

-   Configure un puerto Reenvío de solicitudes HTTPS en su Box
    Internet para redirigirlos a su Jeedom Box.

Activación del módulo virtualHost y SSL 
------------------------------------------

> **Nota**
>
> Conéctese en SSH en el cuadro Jeedom.

    
    
    servicio de reinicio apache2

> **Nota**
>
> LetsEncrypt no emitirá ningún certificado mientras su sitio
> en HTTPS no será accesible desde el exterior.

    / opt / letsencrypt / letsencrypt-auto --apache --email email @ domaine.

Necesita reemplazar la iguración <email@domaine.com> y domaine.com
por tus valores. Normalmente los parámetros para agregar el protocolo HTTPS
son agregados por el script en Apache.

> **Nota**
>
> Si usa el método de renovación automática a continuación,
> puedes deshabilitar virtualHost **.** con el
> Comando **.** Recuerde informar el código por
> predeterminado a continuación en el VirtualHost creado por el script
> renovación :
> /etc/apache2/sites-available/000-default-le-ssl.\`

    <FilesMatch "\.(cgi|shtml|phtml|php)$">
       SSLOptions + StdEnvVars
    </FilesMatch>
    <Directory /usr/lib/cgi-bin>
       SSLOptions + StdEnvVars
    </Directory>
    </VirtualHost>

Configuración de  
======================

Este comando solo se debe usar si tiene un servidor web
.

    ./ letsencrypt-auto certonly - correo electrónico correo electrónico @ dominio. -a webroot --webroot-path / usr / share / nginx / www /

Debe reemplazar los parámetros de correo electrónico y dominio con sus valores,
así como la ruta a la raíz del servidor. Debes agregar el
dos líneas de iguración HTTPS en la iguración nginx :

    vi / etc / nginx / sites-enabled / default

Agregue las siguientes líneas, entre las líneas `server {` y
`root /usr/share/nginx/www ;` :

    escucha 80;

    escuchar 443 ssl;

    ssl_certificate / etc / nginx / ssl / jeedom.chezmoi.fr.crt;

    ssl_certificate_key / etc / nginx / ssl / jeedom.chezmoi.fr.key;

    

Y finalmente reinicie el servidor .

    servicio reinicio nginx

Renovación 
==============

La renovación se realiza con el pedido. :

    / opt / letsencrypt / letsencrypt-auto --apache --renew-by-default -d mondomaine.fr

Recibirá un correo electrónico automáticamente cuando expire el plazo.
certificado que le recordará que inicie este comando.

Método automático 
-------------------

Todavía es mejor cuando es automático. Para hacer esto, aquí están los
pasos a seguir :

-   Instalar ****, utilizado en la secuencia de comandos le-renovar :

<!-- -->

    

-   Cree un archivo para escribir el script (su ubicación es gratuita)
    :

<!-- -->

    

-   Ingrese las líneas a continuación en el archivo creado previamente.
    Copiar / pegar funciona a través de masilla. Este script verifica
    el certificado caduca y lo renueva automáticamente si el
    la fecha de vencimiento es dentro de los 30 días. Debes reemplazar el
    iguración de dominio.com por tu valor :

<!-- -->

    curl -L -o /usr/local/sbin/le-renew http://do.co/le-renew
    chmod + x / usr / local / sbin / le -new
    le-renovar domaine.com

-   Guarde el archivo y salga del editor de texto, por ejemplo,
    con nano :

<!-- -->

    ctrl + o -> Enter (permite guardar)
    ctrl + x -> Enter (salir)

-   Edite el crontab. Debe iniciar sesión como root :

<!-- -->

    

-   Agregamos la siguiente línea :

<!-- -->

    

> **Importante**
>
> Tenga cuidado de adaptar la ruta al guión.

> **Punta**
>
> Para comprender la planificación 0 5 \* \* 1, consulte aquí y
> ajústelo a sus necesidades si es necesario :
> <https://crontab.guru/#0_5_*_*_1>

-   Guarde el archivo y luego salga del editor de texto
    copia de seguridad :

<!-- -->

    ctrl + o -> Entrar
    ctrl + x -> Entrar
