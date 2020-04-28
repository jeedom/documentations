Why ? 
==========

-   

-   
     .
    Jeedom

-   
    

-   .

Prerequisites 
=========

-   
    

-   .

> **IMPORTANT**
>
> 
> . 
> .

> **IMPORTANT**
>
> 
> .

How to do 
=============

 
------------------------------------------


. It is necessary


.

    
    
    

 
--------------------------------------

    
    
    
    apt-get -y install php5-cli php5-common php5-curl php5-fpm php5-json php5-mysql php5-gd
    wget https://raw.githubusercontent.com / jeedom / core / stable / install / apache_security -O /etc/apache2/conf-available/security.conf
    rm /etc/apache2/conf-enabled/security.conf
    ln -s / etc / apache2 / conf-available / security.conf / etc / apache2 / conf-enabled /
    rm /etc/apache2/conf-available/other-vhosts-access-log.conf
    rm /etc/apache2/conf-enabled/other-vhosts-access-log.conf
    systemctl restart apache2
    rm / var / www / html /index.html

> **NOTE**
>
> If during installation the system asks you if you want or
> not keep a modified version of a file, do : "Keep the local
> currently installed version".

Jeedom copy 
---------------

    cp -R / usr / share / nginx / www / jeedom / * / var / www / html /
    cp -R /usr/share/nginx/www/jeedom/.{.]* / var / www / html /
    rm / var / www / html /log/nginx.error
    chmod 775 -R / var / www / html
    www-data chown:www-data -R / var / www / html

Access test 
------------

    systemctl start mysql

You should now be able to access Jeedom from the same URL
than before. If it is good you can continue ELSE IT IS NOT ESSENTIAL
NOT CONTINUE.

Crontab update 
-------------------------

MAKE :

    crontab -e

Then update the path to Jeedom, replace :

    * * * * * su --shell = / bin / bash - www-data -c '/ usr / bin / php / usr / share / nginx / www / jeedom / core / php / jeeCron.php '>> / dev / null 2> & 1

By :

    * * * * * su --shell = / bin / bash - www-data -c '/ usr / bin / php / var / www / html / core / php / jeeCron.php '>> / dev / null 2> & 1

Cleaning and removing nginx 
---------------------------------

    apt-get remove nginx*
    rm -rf cp -R / usr / share / nginx
    apt-get autoremove
    systemctl disable nginx

Restarting services 
------------------------

    systemctl enable apache2
    systemctl start cron

Then connect to your Jeedom and reactivate the task engine
and the scenarios. You can also revive the demons.

> **IMPORTANT**
>
> It is recommended after migration to launch an update of
> Jeedom (even if it doesn't offer you anything).
