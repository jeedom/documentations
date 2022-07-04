# Instalación de Letsencrypt

Aquí están los comandos a ejecutar para instalar letsencrypt antes de la generación :

````
apt-gy install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

Para solicitar un certificado debe tener un nombre de dominio para el cual se generará.

# Configuración de Apache

Para que el proceso de letsEncrypt se complete con éxito, es necesario realizar los tres pasos a continuación de antemano :

Atención, es necesario abrir el puerto 80 en el enrutador (ISP) !

-   Active el módulo Apache SSL de la caja Jeedom.
-   Active Apache VirtualHost HTTPS del cuadro Jeedom .
-   Configure un reenvío de puertos de solicitudes HTTPS en su Internet Box para redirigirlas a su Jeedom Box.

## Habilitación de virtualHost y módulo SSL

> **Nota**
>
> Conéctese en SSH en la caja Jeedom.

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> **Nota**
>
> LetsEncrypt no emitirá ningún certificado hasta que su sitio en HTTPS sea accesible desde el exterior.

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

Necesitas anular la configuración <email@domaine.com> y dominio.com por tus valores. Normalmente, los parámetros para agregar el protocolo HTTPS los agrega el script en Apache.

> **Nota**
>
> Si usa el método de renovación automática a continuación, puede deshabilitar virtualHost ``default-ssl.conf`` con la orden ``a2dissite default-ssl.conf`` Recuerde informar el código predeterminado a continuación en el virtualHost creado por el script de renovación ``/etc/apache2/sites-available/000-default-le-ssl.conf``

````
<FilesMatch "\.(cgi|shtml|phtml|php)$">
   SSLOptions +StdEnvVars
</FilesMatch>
<Directory /usr/lib/cgi-bin>
   SSLOptions +StdEnvVars
</Directory>
</VirtualHost>
````

# Configuración de Nginx

Este comando solo se debe usar si tiene un servidor web Nginx.

``./letsencrypt-auto certonly --email email@domaine.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/``

Debe reemplazar los parámetros de correo electrónico y dominio con sus valores, así como la ruta a la raíz del servidor. Debe agregar las dos líneas de configuración de HTTPS en la configuración de nginx :

``vi /etc/nginx/sites-enabled/default``

Agregue las siguientes líneas, entre líneas ``server {`` y ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

Y finalmente reiniciar el servidor Nginx.

``service nginx restart``

# Renouvellement

La renovación se hace con el pedido :

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

Recibirá automáticamente un correo electrónico cuando caduque el certificado que le recordará que debe ejecutar este comando.

## Método automático

Todavía es mejor cuando es automático. Para ello, estos son los pasos a seguir :

-   Instalar **antes de Cristo**, utilizado en el script le-renew : ``apt-gy install -y bc``
-   Cree un archivo para escribir el script (su ubicación es gratuita) : ``nano /bin/certletsencryptrenew.sh``
-   Ingrese las líneas a continuación en el archivo creado anteriormente. Copiar/pegar trabajos a través de PuTTY. Este script verifica la caducidad del certificado y lo renueva automáticamente si faltan menos de 30 días para la fecha de caducidad. Debe anular el parámetro de dominio.com por tu valor :
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-   Guarde el archivo y luego salga del editor de texto, por ejemplo, con nano :
````
    ctrl+o -> Entrée     (permy de sauvegarder)
    ctrl+x -> Entrée     (permy de quitter)
````
-   Editar el crontab. Debe iniciar sesión como root ``crontab -e``
-   Agrega la siguiente línea : ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> **Importante**
>
> Tenga cuidado de adaptar la ruta al script.

> **Consejo**
>
> Para entender la planificación ``0 5 * * 1``, ve a ver aquí y ajústalo a tus necesidades si es necesario :
-   Guarde el archivo y luego salga del editor de texto guardando :
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````
