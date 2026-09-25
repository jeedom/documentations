> **IMPORTANT**
>
> This tutorial was not created by Jeedom SAS but by a community user, so we cannot guarantee that it works or that it is still up to date.



# Installing Let's Encrypt

Here are the commands to run to install Let's Encrypt before generating the certificate:

````
apt-get install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

To request a certificate, you must own a domain name for which it will be generated.

# Apache Configuration

To ensure that the Let's Encrypt process completes successfully, you must first complete the three steps below:

Please note that you must open port 80 on your router (ISP)!

-   Enable the Apache SSL module on the Jeedom box.
-   Enable the Apache HTTPS VirtualHost on the Jeedom box.
-   Set up port forwarding for HTTPS requests on your internet router to redirect them to your Jeedom box.

## Enabling the virtual host and the SSL module

> **Note**
>
> Connect to the Jeedom box via SSH.

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> **Note**
>
> LetsEncrypt will not issue a certificate until your HTTPS site is accessible from the outside.

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

You need to replace the settings <email@domaine.com> and domain.com using your values. Normally, the settings for adding the HTTPS protocol are added by the script in Apache.

> **Note**
>
> If you use the automatic renewal method below, you can disable the virtual host ``default-ssl.conf`` with the command ``a2dissite default-ssl.conf`` Be sure to copy the default code below into the virtual host created by the renewal script ``/etc/apache2/sites-available/000-default-le-ssl.conf``

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

This command should only be used if you have an Nginx web server.

``./letsencrypt-auto certonly --email email@domaine.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/``

You must replace the email and domain settings with your own values, as well as the path to the server root. You must add the two HTTPS configuration lines to the nginx configuration:

``vi /etc/nginx/sites-enabled/default``

Add the following lines between the lines ``server {`` and ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

And finally, restart the Nginx server.

``service nginx restart``

# Renewal

Renewal is done using the following command:

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

You will automatically receive an email when your certificate is about to expire, reminding you to place this command.

## Automatic method

It’s definitely better when it’s automatic. To set it up, follow these steps:

-   Install **bc**, which is used in the le-renew script: ``apt-get install -y bc``
-   Create a file to write the script in (you can choose any location): ``nano /bin/certletsencryptrenew.sh``
-   Enter the lines below into the file you created earlier. You can copy and paste them using PuTTY. This script checks the certificate’s expiration date and automatically renews it if the expiration date is less than 30 days away. You must replace the parameter “domain.com” with your own value:
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-   Save the file and then exit the text editor—for example, with nano:
````
    ctrl+o -> Entrée     (permet de sauvegarder)
    ctrl+x -> Entrée     (permet de quitter)
````
-   Edit the crontab. You must be logged in as root. ``crontab -e``
-   Add the following line: ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> **Important**
>
> Be sure to adjust the path to the script correctly.

> **Tip**
>
> Understanding Planning ``0 5 * * 1``, check here and adjust it to suit your needs if necessary:
-   Save the file, then exit the text editor by saving:
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````
