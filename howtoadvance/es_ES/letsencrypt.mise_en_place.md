> **IMPORTANTE**
>
> Este tutorial no lo ha elaborado Jeedom SAS, sino un usuario de la comunidad, por lo que no podemos garantizar que funcione ni que siga estando actualizado.



# Instalación de Let's Encrypt

Estos son los comandos que hay que ejecutar para instalar Let's Encrypt antes de la generación:

````
apt-get install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

Para solicitar un certificado, debes disponer de un nombre de dominio para el que se generará dicho certificado.

# Configuración de Apache

Para que el proceso de Let's Encrypt se complete correctamente, es necesario realizar previamente los tres pasos que se indican a continuación:

¡Atención: es necesario abrir el puerto 80 en el router (proveedor de Internet)!

-   Activar el módulo SSL de Apache del dispositivo Jeedom.
-   Activar el VirtualHost HTTPS de Apache en el dispositivo Jeedom.
-   Configura el reenvío de puertos para las solicitudes HTTPS en tu router de Internet con el fin de redirigirlas a tu Jeedom Box.

## Activación del virtualHost y del módulo SSL

> **Nota**
>
> Conéctate por SSH al dispositivo Jeedom.

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> **Nota**
>
> LetsEncrypt no emitirá ningún certificado mientras tu sitio web con HTTPS no sea accesible desde el exterior.

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

Debes sustituir los parámetros <email@domaine.com> y dominio.com según tus valores. Normalmente, el script añade los parámetros para el protocolo HTTPS en Apache.

> **Nota**
>
> Si utilizas el método de renovación automática que se indica a continuación, puedes desactivar el virtualHost ``default-ssl.conf`` con el mando ``a2dissite default-ssl.conf`` No olvides copiar el código predeterminado que aparece a continuación en el virtualHost creado por el script de renovación ``/etc/apache2/sites-available/000-default-le-ssl.conf``

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

Este comando solo debe utilizarse si dispones de un servidor web Nginx.

``./letsencrypt-auto certonly --email email@domaine.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/``

Debes sustituir los parámetros de correo electrónico y dominio por tus propios valores, así como la ruta a la raíz del servidor. Debes añadir las dos líneas de configuración de HTTPS en la configuración de nginx:

``vi /etc/nginx/sites-enabled/default``

Añade las siguientes líneas, entre las líneas ``server {`` y ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

Y, por último, reinicia el servidor Nginx.

``service nginx restart``

# Renovación

La renovación se realiza mediante el comando:

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

Recibirás automáticamente un correo electrónico cuando se acerque la fecha de vencimiento del certificado, en el que se te recordará que debes realizar este pedido.

## Método automático

Al fin y al cabo, es mejor cuando es automático. Para ello, estos son los pasos que hay que seguir:

-   Instala **bc**, que se utiliza en el script «le-renew»: ``apt-get install -y bc``
-   Crea un archivo para escribir el script (puedes elegir la ubicación que quieras): ``nano /bin/certletsencryptrenew.sh``
-   Introduce las líneas siguientes en el archivo creado anteriormente. Puedes copiarlas y pegarlas a través de PuTTY. Este script comprueba la fecha de caducidad del certificado y lo renueva automáticamente si faltan menos de 30 días para que caduque. Debes sustituir el parámetro «dominio.com» por tu propio valor:
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-   Guarda el archivo y cierra el editor de texto, por ejemplo, con nano:
````
    ctrl+o -> Entrée     (permet de sauvegarder)
    ctrl+x -> Entrée     (permet de quitter)
````
-   Edita el crontab. Debes iniciar sesión como root. ``crontab -e``
-   Se añade la siguiente línea: ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> **Importante**
>
> Asegúrate de ajustar correctamente la ruta de acceso al script.

> **Consejo**
>
> Para entender la planificación ``0 5 * * 1``, échale un vistazo aquí y adáptala a tus necesidades si es necesario:
-   Guarda el archivo y, a continuación, cierra el editor de texto guardando los cambios:
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````
