Installation of Letsencrypt 
===========================

Here are the commands to launch to install letsencrypt before the
generation :

    apt-get install -y git
    cd / opt
    git clone https://github.com/letsencrypt/letsencrypt
    cd letsencrypt
    ./ letsencrypt-auto --help

To request a certificate, you must have a name of
domain for which it will be generated.

Apache iguration 
======================

In order for the letsEncrypt process to complete successfully, it is
necessary to perform the three steps below beforehand :

Attention it is necessary to open port 80 on the router (ISP) ! 

-   Activate the apache SSL module of the Jeedom box.

-   Activate the Apache VirtualHost HTTPS from the Jeedom box .

-   Configure a portForwarding of HTTPS requests on your Box
    internet to redirect them to your Jeedom Box.

Activation of virtualHost and SSL module 
------------------------------------------

> **NOTE**
>
> Connect in SSH on the Jeedom box.

    a2enmod ssl
    a2ensite .
    apache2 restart service

> **NOTE**
>
> No certificate will be issued by LetsEncrypt as long as your site
> in HTTPS will not be reachable from the outside.

    / opt / letsencrypt / letsencrypt-auto --apache --email email @ domaine..com

You need to replace the settings <email@domaine.com> and domaine.com
by your values. Normally the parameters for adding the HTTPS protocol
are added by the script in Apache.

> **NOTE**
>
> If you use the automatic renewal method below,
> you can disable virtualHost **.** 
> Command **.** 
> 
>  :
> /etc/apache2/sites-available/000-default-le-ssl.\`

    <FilesMatch "\.(cgi|shtml|phtml|php)$">
       
    </FilesMatch>
    <Directory /usr/lib/cgi-bin>
       
    </Directory>
    </VirtualHost>

 
======================


.

    ...

,
. 
 :

    


`root /usr/share/nginx/www ;` :

    

    

    

    

    

.

    

 
==============

 :

    


.

 
-------------------

. 
 :

-    ****,  :

<!-- -->

    

-   
    :

<!-- -->

    

-   .
    . 
    
    . 
    . :

<!-- -->

    :
    
    

-   ,
     :

<!-- -->

    
    

-   .  :

<!-- -->

    crontab -e

-    :

<!-- -->

    

> **IMPORTANT**
>
> .

> **Tip**
>
> 
>  :
> <https:>

-   
     :

<!-- -->

    
    
