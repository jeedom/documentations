 :




.




. Usted puede


 
=========================================



Información


.





 :

[https://serveur/emoncms/input/post.json?json={:\#valor\#}&apikey=xxx](https://serveur/emoncms/input/post.json?json={:#valor#}&apikey=xxx)

 :

-   Identificación : 

-   apikey : 

-   valor : 
    

-    : 

 
======================================================


:

-   
    . 
    
    

        https://serveur/emoncms/feed/valor.json?Identificación=1&apikey=xxx

-   
    . 
    
    
    
    
    

 
================================

 :

<https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md>




. ,
 :

:.



:.


:>

:>

://github.com/elyobelyob/mqtt.git>

Configuración de Nginx 
===================

Aquí hay un ejemplo de configuración para Nginx. Para Apache no hay
conf especial necesita un repertorio clásico

    ubicación / emoncms {
           alias / var / www / emoncms /;
           index index.php;
            try_files = $ uri $ uri / @missing;

       ubicación ~ [^ /] \.|$) {
               fastcgi_split_path_info ^ (. +?\ .php) (/.*) $;
               fastcgi_pass unix:/var/run/php5-fpm.sock;
               fastcgi_index index.php;
               incluir fastcgi_params;
               fastcgi_param REMOTE_USER $ remote_user;
               fastcgi_param PATH_INFO $ fastcgi_path_info;
               fastcgi_param SCRIPT_FILENAME /var/www/emoncms/index.php;
           }

    }

    ubicación @missing {
            reescribir ^ / emoncms / (.*) $ /emoncms/index.php?q = $ 1 y $ args últimos;
    }
