# Instalación de Shellinabox

Shellinabox es una consola a la que se puede acceder desde un navegador.

Se presenta en forma de un servicio que escucha en el puerto 4200 mediante https. A continuación, describiremos su instalación y, después, la configuración del proxy inverso.

Este es el comando que hay que ejecutar para instalar Shellinabox:

``sudo apt-get -y shellinabox``

# Proxy inverso de Apache

Hay que crear un archivo en ``/etc/apache2/sites-enabled/shellinabox.conf`` con el contenido que aparece a continuación y, a continuación, reinicia Apache

````
<Location /jeedom/shellinabox>
Proxypass  http://localhost:4200/
#ProxyPassReverse  http://localhost:4200/
Allow from all
</Location>
````

# Proxy inverso Nginx

Hay que crear un archivo en ``/etc/nginx/sites-enabled/shellinabox.conf`` con el contenido que aparece a continuación y, a continuación, reinicia Nginx

````
location /jeedom/shellinabox/ {
proxy_pass http://127.0.0.1:4200;
proxy_set_header Host $host;
proxy_buffering off;
tcp_nodelay on;
access_log off;
}
````
