# Shellinabox installation

Shellinabox is a console accessible from a browser.

This is in the form of a service listening on port 4200 in https. We will describe its installation and then the reverse proxy configurations

Here is the command to launch to install Shellinabox :

``sudo apt-get -y shellinabox``

# Apache Reverse Proxy

You have to create a file in ``/etc/apache2/sites-enabled/shellinabox.conf`` with the content below and then restart Apache

````
<Location /jeedom/shellinabox>
Proxypass  http://localhost:4200/
#ProxyPassReverse  http://localhost:4200/
Allow from all
</Location>
````

# Reverse Proxy Nginx

You have to create a file in ``/etc/nginx/sites-enabled/shellinabox.conf`` with the content below and then restart Nginx

````
location /jeedom/shellinabox/ {
proxy_pass http://127.0.0.1:4200;
proxy_set_header Host $host;
proxy_buffering off;
tcp_nodelay on;
access_log off;
}
````
