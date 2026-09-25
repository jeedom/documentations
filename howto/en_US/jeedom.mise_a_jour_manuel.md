# Jeedom Command-Line Update

We'll show you how to manually update your Jeedom *(if, for example, you can no longer access the interface)*

## Prerequisites

-   How to connect to Jeedom via SSH
-   Know your SSH credentials *(see installation documentation)*
-   Access the Internet from the Jeedom box

> **Important**
>
> Be sure to export the most recent functional Jeedom backup to a location outside the box before performing any manual updates.

## Download and unzip

In SSH, do the following:

````bash
su -
cd /root
wget https://github.com/jeedom/core/archive/master.zip
unzip master.zip
cp -R core-master/* /var/www/html
cp -R core-master/.[^.]* /var/www/html
````

## Update

Still in SSH:

````bash
su -
php /var/www/html/install/update.php mode=force
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

> **Important**
>
> If your Jeedom installation is a bit outdated, you'll need to replace all the ``/var/www/html`` by ``/usr/share/nginx/www/jeedom``
