# Installing Letsencrypt

Here are the commands to run to install letsencrypt before the generation :

````
apt-gand install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

To apply for a certificate you must have a domain name for which it will be generated.

# Apache Setup

In order for the letsEncrypt process to complete successfully, it is necessary to perform the three steps below beforehand :

Attention it is necessary to open port 80 on the router (ISP) !

-   Activate the Apache SSL module of the Jeedom box.
-   Activate the Apache VirtualHost HTTPS of the Jeedom box .
-   Configure a portForwarding of HTTPS requests on your Internet Box to redirect them to your Jeedom Box.

## Enabling virtualHost and SSL module

> **Note**
>
> Connect in SSH on the Jeedom box.

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> **Note**
>
> No certificate will be issued by LetsEncrypt until your site in HTTPS is reachable from the outside.

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

You need to override the settings <email@domaine.com> and domain.com by your values. Normally the parameters for adding the HTTPS protocol are added by the script in Apache.

> **Note**
>
> If you use the auto-renewal method below, you can disable the virtualHost ``default-ssl.conf`` with the order ``a2dissite default-ssl.conf`` Remember to report the default code below in the virtualHost created by the renewal script ``/etc/apache2/sites-available/000-default-le-ssl.conf``

````
<FilesMatch "\.(cgi|shtml|phtml|php)$">
   SSLOptions +StdEnvVars
</FilesMatch>
<Directory /usr/lib/cgi-bin>
   SSLOptions +StdEnvVars
</Directory>
</VirtualHost>
````

# Configuring Nginx

This command is only to be used if you have an Nginx web server.

``./letsencrypt-auto certonly --email email@domaine.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/``

You must replace the email and domain parameters with your values, as well as the path to the server root. You must add the two HTTPS configuration lines in the nginx configuration :

``vi /etc/nginx/sites-enabled/default``

Add the following lines, between the lines ``server {`` and ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

And finally restart the Nginx server.

``service nginx restart``

# Renouvellement

The renewal is done with the order :

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

You will automatically receive an email when the certificate expires which will remind you to launch this command.

## Automatic method

It's still better when it's automatic. To do this, here are the steps to follow :

-   Install **bc**, used in le-renew script : ``apt-gand install -y bc``
-   Create a file to write the script in (its location is free) : ``nano /bin/certletsencryptrenew.sh``
-   Enter the lines below in the file created previously. Copy/paste works via putty. This script checks the expiration of the certificate and automatically renews it if the expiration date is less than 30 days away. You must override the domain parameter.com by your value :
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-   Save the file then exit the text editor, for example, with nano :
````
    ctrl+o -> Entrée     (permand de sauvegarder)
    ctrl+x -> Entrée     (permand de quitter)
````
-   Edit the crontab. You must be logged in as root ``crontab -e``
-   Add the following line : ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> **Important**
>
> Be careful to adapt the path to the script.

> **Tip**
>
> To understand planning ``0 5 * * 1``, go see here and adjust it to your needs if necessary :
-   Save the file then exit the text editor by saving :
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````
