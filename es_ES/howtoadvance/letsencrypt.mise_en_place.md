 
===========================


 :

    
    
    git clone https://github.com/letsencrypt/letsencrypt
    
    .


.

Configuración de Apache 
======================


 :

 ! 

-   .

-    .

-   
    .

 
------------------------------------------

> **Note**
>
> .

    
    
    

> **Note**
>
> 
> .

    .

.
. 
.

> **Note**
>
> ,
>  **** 
>  **** 
> 
>  :
> 

    <FilesMatch "\.(cgi|shtml|phtml|php)$">
       
    </FilesMatch>
    <Directory /usr/lib/cgi-bin>
       
    </Directory>
    </VirtualHost>

Configuración de Nginx 
======================


Nginx.

    .. -a webroot --webroot-path /usr/share/nginx/www/

,
. 
 :

    


 :

    

    

    

    

    

.

    

 
==============

 :

    


.

 
-------------------

. 
 :

-    **bc**,  :

<!-- -->

    

-   
    :

<!-- -->

    

-   .
    . 
    
    . 
    . :

<!-- -->

    curl -L -o /usr/local/sbin/le-renew http://do.co/le-renew
    
    

-   ,
     :

<!-- -->

    
    

-   .  :

<!-- -->

    crontab -e

-    :

<!-- -->

     * * 

> **Important**
>
> .

> **Tip**
>
> * \* 
>  :
> <https://crontab.guru/#05**>

-   
     :

<!-- -->

    
    
