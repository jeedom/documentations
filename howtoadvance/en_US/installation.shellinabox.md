# Shellinabox Installation

Shellinabox is a console accessible via a web browser.

This takes the form of a service listening on port 4200 via HTTPS. We’ll describe how to install it and then how to configure the reverse proxy.

Here is the command to run to install Shellinabox:

``sudo apt-get -y shellinabox``

# Apache Reverse Proxy

You need to create a file in ``/etc/apache2/sites-enabled/shellinabox.conf`` with the content below, and then restart Apache

````
<Location /jeedom/shellinabox>
Proxypass  http://localhost:4200/
#ProxyPassReverse  http://localhost:4200/
Allow from all
</Location>
````

# Nginx Reverse Proxy

You need to create a file in ``/etc/nginx/sites-enabled/shellinabox.conf`` with the content below, and then restart Nginx

````
location /jeedom/shellinabox/ {
proxy_pass http://127.0.0.1:4200;
proxy_set_header Host $host;
proxy_buffering off;
tcp_nodelay on;
access_log off;
}
````
