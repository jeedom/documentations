Instalación de Letsencrypt 
===========================

Aquí están los comandos para iniciar la instalación de letsencrypt antes de
generación :

    apt-get install -y git
    cd / opt
    git clone https://github.com/letsencrypt/letsencrypt
    cd letsencrypt
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

Activación de virtualHost y módulo SSL 
------------------------------------------

> **Note**
>
> Conéctese en SSH en el cuadro Jeedom.

    a2enmod ssl
    a2ensite default-ssl.conf
    servicio apache2 reiniciar

> **Note**
>
> LetsEncrypt no emitirá ningún certificado mientras su sitio
> en HTTPS no será accesible desde el exterior.

    / opt / letsencrypt / letsencrypt-auto --apache --email email @ domaine.com -d domaine.com

Necesita reemplazar la configuración <email@domaine.com> y domaine.com
por tus valores. Normalmente los parámetros para agregar el protocolo HTTPS
son agregados por el script en Apache.

> **Note**
>
> Si está utilizando el método de renovación automática a continuación,
> puedes apagar virtualHost **default-ssl.conf** con el
> comando **a2dissite default-ssl.conf** Recuerde informar el código por
> predeterminado a continuación en el VirtualHost creado por el script
> renovación :
> /etc/apache2/sites-available/000-default-le-ssl.conf \ `

    <FilesMatch "\.(cgi|shtml|phtml|php)$">
       
    </FilesMatch>
    <Directory /usr/lib/cgi-bin>
       
    </Directory>
    </VirtualHost>

Configuración de Nginx 
======================


Nginx.

    ..com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/

,
. 
 :

    


 :

    

    

    

    

    

.

    

 
==============

 :

    


.

 
-------------------

. 
 :

-    **bc**,  :

<!-- -->

    

-   
    :

<!-- -->

    

-   .
    . 
    
    . 
    . :

<!-- -->

    curl -L -o /usr/local/sbin/le-renew http://do.co/le-renew
    
    

-   ,
     :

<!-- -->

    
    

-   .  :

<!-- -->

    crontab -e

-    :

<!-- -->

     * * 

> **Important**
>
> .

> **Tip**
>
> * \* 
>  :
> <https://crontab.guru/#05**>

-   
     :

<!-- -->

    
    
