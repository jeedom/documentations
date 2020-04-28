Shellinabox is a console accessible from a browser.

This is in the form of a listening service on port 4200 in
https. We will describe its installation and then the configurations of


Shellinabox installation 
===========================

Here is the command to launch to install Shellinabox :

    

Apache Reverse Proxy 
====================

You have to create a file in
/etc/apache2/sites-enabled/shellinabox.conf with the content below
and then restart Apache

    <Location /jeedom/shellinabox>
    Proxypass  http://localhost:4200/
    #ProxyPassReverse  http://localhost:4200/
    
    </Location>

 
===================

You must create a file in /etc/nginx/sites-enabled/shellinabox.conf
with the content below and then restart Nginx

    location / jeedom / shellinabox / {
    proxy_pass http://127.0.0.1:4200;
    proxy_set_header Host $ host;
    
    
    
    }
