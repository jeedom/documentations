# 

 : )

.

)

. 

# 



.



 :

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

 :

-    : 
-    : 
-    :  ** 
-    : 

# 

 :

-   .  ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   . 

# 

 [](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

)

.  :

````
git clone https://github.com/emoncms/event.git # C'est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C'est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# 

. 

````
location /emoncms {
       alias /var/www/emoncms/;
       index index.php;
        try_files = $uri $uri/ @missing;

   location ~ [^/]\.php(/|$) {
           fastcgi_split_path_info ^(.+?\.php)(/.*)$;
           fastcgi_pass unix:/var/run/php5-fpm.sock;
           fastcgi_index index.php;
           include fastcgi_params;
           fastcgi_param   REMOTE_USER   $remote_user;
           fastcgi_param  PATH_INFO $fastcgi_path_info;
           fastcgi_param SCRIPT_FILENAME /var/www/emoncms/index.php;
       }

}

location @missing {
        rewrite ^/emoncms/(.*)$ /emoncms/index.php?q=$1&$args last;
}
````
