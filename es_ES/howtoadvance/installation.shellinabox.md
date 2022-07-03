# Instalación Shellinabox

Shellinabox es una consola accesible desde un navegador.

Esto viene en forma de un servicio de escucha en el puerto 4200 en https. Describiremos su instalación y luego las configuraciones del proxy inverso

Aquí está el comando para ejecutar para instalar Shellinabox :

``sudo apt-get -y shellinabox``

# Proxy inverso de Apache

Tienes que crear un archivo en ``/etc/apache2/sites-enabled/shellinabox.conf`` con el contenido a continuación y luego reinicie apache

````
<Location /jeedom/shellinabox>
Proxypass  http://localhost:4200/
#ProxyPassReverse  http://localhost:4200/
Allow from all
</Location>
````

# Proxy inverso Nginx

Tienes que crear un archivo en ``/etc/nginx/sites-enabled/shellinabox.conf`` con el contenido a continuación y luego reinicie Nginx

````
location /jeedom/shellinabox/ {
proxy_pass http://127.0.0.1:4200;
proxy_set_header Host $host;
proxy_buffering off;
tcp_nodelay on;
access_log off;
}
````
