Why ? 
==========

-   Apache will gradually become the norm with Jeedom

-   Allows you to have the latest security updates at
    access to files (thanks to .htaccess) during updates of
    Jeedom

-   Corrects some access and stability concerns (especially for those
    who have a lot of cameras)

-   Improves overall performance of Jeedom.

Prerequisites 
=========

-   Know how to connect in SSH on the box (you will find the
    identifiers on the installation documentation)

-   Being connected to the internet.

> **IMPORTANT**
>
> In case of concerns, the Jeedom team cannot be held responsible and
> may refuse any support request. Handling is yours
> risks and dangers.

> **IMPORTANT**
>
> Please note that some unofficial plugins are not compatible
> Apache, find out well before.

How to do 
=============

Deactivation of Jeedom and nginx services 
------------------------------------------

In Jeedom, you have to go to each plugin with a daemon, then
deactivate the automatic management of the daemon and cut it. It is necessary
then, in the task engine, deactivate all tasks (there is a
general deactivation button) and in the scenarios deactivate all
the scenarios (there is a general deactivation button).

    
    
    

Installation and configuration of Apache 
--------------------------------------

    mkdir -p / var / www / html / log
    
    
    
    wget https://raw.githubusercontent.com / jeedom / core / stable / install / apache_security -O /etc/apache2/conf-available/security.conf
    
    ln -s / etc / apache2 / conf-available / security.conf / etc / apache2 / conf-enabled /
    
    
    
    

> **NOTE**
>
> If during installation the system asks you if you want or
> not keep a modified version of a file, do : "
> currently installed version".

Jeedom copy 
---------------

    cp -R / usr / share / nginx / www / jeedom / * / var / www / html /
    cp -R /usr/share/nginx/www/jeedom/.{.]* / var / www / html /
    
    chmod 775 -R / var / www / html
    www-data chown:www-data -R / var / www / html

Access test 
------------

    

You should now be able to access Jeedom from the same URL
than before. If it is good you can continue ELSE IT IS NOT ESSENTIAL
NOT CONTINUE.

Crontab update 
-------------------------

MAKE :

    

Then update the path to Jeedom, replace :

    * * * * * su --shell = / bin / bash - www-data -c '/ usr / bin / php / usr / share / nginx / www / jeedom / core / php / jeeCron.php '>> / dev / null 2> & 1

By :

    * * * * * su --shell = / bin / bash - www-data -c '/ usr / bin / php / var / www / html / core / php / jeeCron.php '>> / dev / null 2> & 1

Cleaning and removing nginx 
---------------------------------

    *
    rm -rf cp -R / usr / share / nginx
    
    

Restarting services 
------------------------

    
    

Then connect to your Jeedom and reactivate the task engine
and the scenarios. You can also revive the demons.

> **IMPORTANT**
>
> It is recommended after migration to launch an update of
> Jeedom (even if it doesn't offer you anything).
