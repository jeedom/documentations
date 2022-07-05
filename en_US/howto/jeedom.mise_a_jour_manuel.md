# Jeedom command line update

We will see here how to update manually on

## Prerequisites

-   know how to connect in SSH to Jeedom
-   know the SSH identifiers (see installation documentation)
-   have Internet access from the Jeedom box

> **Important**
>
> Remember to make and export a backup before any manual update.

## Download and unzip

In SSH, do :

````
sudo su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
unzip master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## Update

Always in SSH:

````
sudo su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Important**
>
> If your Jeedom installation is a bit old, you must replace all the ``/var/www/html`` by ``/usr/share/nginx/www/jeedom``
