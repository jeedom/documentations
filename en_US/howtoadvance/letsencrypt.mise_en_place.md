Installation of Letsencrypt 
===========================

Here are the commands to launch to install letsencrypt before the
generation :

    
    cd / opt
    git clone https://github.com/letsencrypt/letsencrypt
    
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

    
    
    apache2 restart service

> **NOTE**
>
> No certificate will be issued by LetsEncrypt as long as your site
> in HTTPS will not be reachable from the outside.

    / opt / letsencrypt / letsencrypt-auto --apache --email email @ domaine.

You need to replace the settings <email@domaine.com> and domaine.com
by your values. Normally the parameters for adding the HTTPS protocol
are added by the script in Apache.

> **NOTE**
>
> If you use the automatic renewal method below,
> you can disable virtualHost **.** with the
> Command **.** Remember to report the code by
> default below in the virtualHost created by the script
> renewal :
> /etc/apache2/sites-available/000-default-le-ssl.\`

    <FilesMatch "\.(cgi|shtml|phtml|php)$">
       SSLOptions + StdEnvVars
    </FilesMatch>
    <Directory /usr/lib/cgi-bin>
       SSLOptions + StdEnvVars
    </Directory>
    </VirtualHost>

Configuration of  
======================

This command is only to be used if you have a web server
.

    ./ letsencrypt-auto certonly - email email @ domain. -a webroot --webroot-path / usr / share / nginx / www /

You must replace the email and domain parameters with your values,
as well as the path to the root of the server. You must add the
two HTTPS iguration lines in the nginx iguration :

    vi / etc / nginx / sites-enabled / default

Add the following lines, between the lines `server {` and
`root /usr/share/nginx/www ;` :

    

    

    ssl_certificate / etc / nginx / ssl / jeedom.chezmoi.fr.crt;

    ssl_certificate_key / etc / nginx / ssl / jeedom.chezmoi.fr.key;

    

And finally restart the  server.

    

Renewal 
==============

Renewal is done with the order :

    / opt / letsencrypt / letsencrypt-auto --apache --renew-by-default -d mondomaine.fr

You will receive an email automatically when the deadline expires.
certificate that will remind you to launch this command.

Automatic method 
-------------------

It's still better when it's automatic. To do this, here are the
steps to follow :

-   Install ****, used in the le-renew script :

<!-- -->

    

-   Create a file to write the script (its location is free)
    :

<!-- -->

    

-   Enter the lines below in the file created previously.
    Copy / paste works via putty. This script checks
    the certificate expires and automatically renews it if the
    expiration date is within 30 days. You must replace the
    domain setting.com by your value :

<!-- -->

    curl -L -o /usr/local/sbin/le-renew http://do.co/le-renew
    chmod + x / usr / local / sbin / le-renew
    

-   Save the file then exit the text editor, for example,
    with nano :

<!-- -->

    ctrl + o -> Enter (allows to save)
    ctrl + x -> Enter (exit)

-   Edit the crontab. You must be logged in as root :

<!-- -->

    

-   We add the following line :

<!-- -->

    

> **IMPORTANT**
>
> Be careful to adapt the path to the script.

> **Tip**
>
> To understand the planning 0 5 \* \* 1, see here and
> adjust it to your needs if necessary :
> <https://crontab.guru/#0_5_*_*_1>

-   Save the file then exit the text editor by
    backing up :

<!-- -->

    ctrl + o -> Enter
    ctrl + x -> Enter
