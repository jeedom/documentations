# 

.

. 

 :

``sudo apt-get -y shellinabox``

# 

 ``/etc/apache2/sites-enabled/shellinabox.conf`` 

````
<Location /jeedom/shellinabox>
Proxypass  http://localhost:4200/
#ProxyPassReverse  http://localhost:4200/
Allow from all
</Location>
````

# 

 ``/etc/nginx/sites-enabled/shellinabox.conf`` 

````
location /jeedom/shellinabox/ {
proxy_pass http://127.0.0.1:4200;
proxy_set_header Host $host;
proxy_buffering off;
tcp_nodelay on;
access_log off;
}
````
