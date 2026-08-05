> **Importante**
>
> Este tutorial no está hecho por Jeedom SAS sino por un usuario de la comunidad, por lo que no podemos garantizar que funcione o que aún esté actualizado.



# Instalación de Letsencrypt

Estos son los comandos para iniciar la instalación de letsencrypt antes de la generación :

````
apt-gy install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

Para solicitar un certificado, debe tener un nombre de dominio para el que se generará.

# Configuración de Apache

Para que el proceso letsEncrypt finalice correctamente, es necesario realizar los tres pasos a continuación de antemano :

Atención, es necesario abrir el puerto 80 en el enrutador (ISP) !

-   Active el módulo apache SSL del cuadro Jeedom.
-   Active el Apache VirtualHost HTTPS desde el cuadro Jeedom .
-   Configure un puerto Reenvío de solicitudes HTTPS en su Internet Box para redirigirlas a su Jeedom Box.

## Activación del módulo virtualHost y SSL

> **Nota**
>
> Conéctese en SSH en el cuadro Jeedom.

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> **Nota**
>
> LetsEncrypt no emitirá ningún certificado siempre que no se pueda acceder a su sitio HTTPS desde el exterior.

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

Necesita reemplazar la configuración <email@domaine.com> y dominio.com por tus valores. Normalmente, los parámetros para agregar el protocolo HTTPS los agrega el script en Apache.

> **Nota**
>
> Si utiliza el siguiente método de renovación automática, puede desactivar virtualHost ``default-ssl.conf`` con la orden ``a2dissite default-ssl.conf`` Recuerde llevar el código predeterminado a continuación en el VirtualHost creado por el script de renovación ``/etc/apache2/sites-available/000-default-le-ssl.conf``

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

Debe reemplazar los parámetros de correo electrónico y dominio con sus valores, así como la ruta a la raíz del servidor. Debe agregar las dos líneas de configuración HTTPS en la configuración nginx :

``vi /etc/nginx/sites-enabled/default``

Agregue las siguientes líneas, entre las líneas ``server {`` y ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

Y finalmente reinicie el servidor Nginx.

``service nginx restart``

# Renouvellement

La renovación se realiza con el pedido :

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

Recibirá un correo electrónico automáticamente cuando caduque el certificado que le recordará que inicie este pedido.

## Método automático

Todavía es mejor cuando es automático. Para hacer esto, estos son los pasos a seguir :

-   Instalar **bc**, utilizado en la secuencia de comandos le-renovar : ``apt-gy install -y bc``
-   Cree un archivo para escribir el script (su ubicación es gratuita) : ``nano /bin/certletsencryptrenew.sh``
-   Ingrese las líneas a continuación en el archivo creado previamente. Copiar / pegar funciona a través de masilla. Este script comprueba la caducidad del certificado y lo renueva automáticamente si la fecha de caducidad es inferior a 30 días. Debe reemplazar el parámetro de dominio.com por tu valor :
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-   Guarde el archivo y salga del editor de texto, por ejemplo, con nano :
````
    ctrl+o -> Entrée     (permy de sauvegarder)
    ctrl+x -> Entrée     (permy de quitter)
````
-   Edite el crontab. Debe iniciar sesión como root ``crontab -e``
-   Agregamos la siguiente línea : ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> **Importante**
>
> Tenga cuidado de adaptar la ruta al guión.

> **Punta**
>
> Para entender la planificación ``0 5 * * 1``, marque aquí y ajústelo según sea necesario :
-   Guarde el archivo y salga del editor de texto guardando :
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````
