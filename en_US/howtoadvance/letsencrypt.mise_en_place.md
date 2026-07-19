> ****
>
> .



# 

 :

````
apt-g install -y git
cd /opt
git clone https://github.com/letsencrypt/letsencrypt
cd letsencrypt
./letsencrypt-auto --help
````

.

# 

 :

) !

-   .
-    .
-   .

## 

> ****
>
> .

````
a2enmod ssl
a2ensite default-ssl.conf
service apache2 restart
````

> ****
>
> .

``/opt/letsencrypt/letsencrypt-auto --apache --email email@domaine.com -d domaine.com``

... .

> ****
>
>  ``default-ssl.conf``  ``a2dissite default-ssl.conf``  ``/etc/apache2/sites-available/000-default-le-ssl.conf``

````
<FilesMatch "\.(cgi|shtml|phtml|php)$">
   SSLOptions +StdEnvVars
</FilesMatch>
<Directory /usr/lib/cgi-bin>
   SSLOptions +StdEnvVars
</Directory>
</VirtualHost>
````

# 

.

``./letsencrypt-auto certonly --email email@domaine.com -d domaine.com -a webroot --webroot-path /usr/share/nginx/www/``

.  :

``vi /etc/nginx/sites-enabled/default``

 ``server {``  ``root /usr/share/nginx/www ;`` :

````
listen 80;
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/ jeedom.chezmoi.fr.crt;
ssl_certificate_key /etc/nginx/ssl/ jeedom.chezmoi.fr.key;
ssl_session_timeout 5m;
````

.

``service nginx restart``

# Renouvellement

 :

``/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d mondomaine.fr``

.

## 

.  :

-    ****,  : ``apt-g install -y bc``
-   ) : ``nano /bin/certletsencryptrenew.sh``
-   . . . . :
````
    curl -L -o /usr/local/sbin/le-renew https://raw.githubusercontent.com/frixo3190/le-renew/main/le-renew
    chmod +x /usr/local/sbin/le-renew
    le-renew domaine.com
````
-    :
````
    ctrl+o -> Entrée     (perm de sauvegarder)
    ctrl+x -> Entrée     (perm de quitter)
````
-   .  ``crontab -e``
-    : ``0 5 * * 1 /bin/certletsencryptrenew.sh``
> ****
>
> .

> ****
>
>  ``0 5 * * 1``,  :
-    :
````
    ctrl+o -> Entrée
    ctrl+x -> Entrée
````
