Shellinabox es una consola accesible desde un navegador.

Esto es en forma de un servicio de escucha en el puerto 4200 en
https. Describiremos su instalación y luego las configuraciones de
proxy inverso

Instalación de Shellinabox 
===========================

Aquí está el comando para iniciar la instalación de Shellinabox :

    

Proxy inverso de Apache 
====================

Tienes que crear un archivo en
/etc/apache2/sites-enabled/shellinabox.conf con el contenido a continuación
y luego reinicia Apache

    <Location /jeedom/shellinabox>
    Proxypass  http://localhost:4200/
    #ProxyPassReverse  http://localhost:4200/
    Permitir de todos
    </Location>

Proxy inverso Nginx 
===================

Debe crear un archivo en /etc/nginx/sites-enabled/shellinabox.conf
con el contenido a continuación y luego reinicie Nginx

    ubicación / jeedom / shellinabox / {
    proxy_pass http://127.0.0.1:4200;
    proxy_set_header Host $ host;
    proxy_buffering desactivado;
    
    acceso_log desactivado;
    }
