# Apache Migration

-   Apache will gradually become the standard with Jeedom
-   Allows you to have the latest security updates in terms of file access (thanks to the .htaccess) during Jeedom updates
-   Fixes some access and stability issues (especially for those with a lot of cameras)
-   Improves the overall performance of Jeedom.

# Prerequisites

-   Know how to connect in SSH on the box (you will find the identifiers on the installation documentation)
-   Being connected to the internet.

> **Important**
>
> In the event of a problem, the Jeedom team cannot be held responsible and may refuse any request for support. Handling is at your own risk.

> **Important**
>
> Please note that some unofficial plugins are not Apache compatible, find out beforehand.

# How to do

## Disabling Jeedom and nginx services

In Jeedom, you have to go to each plugin having a daemon, then deactivate the automatic management of the daemon and cut it. Then, in the task engine, deactivate all the tasks (there is a general deactivation button) and in the scenarios, deactivate all the scenarios (there is a general deactivation button).

````
systemctl stop cron
systemctl stop nginx
systemctl stop mysql
````

## Installing and configuring Apache

````
mkdir -p /var/www/html/log
apt-get -y install ntp ca-certificates unzip curl sudo
apt-get -y install apache2 php5 mysql-client mysql-server libapache2-mod-php5
apt-get -y install php5-cli php5-common php5-curl php5-fpm php5-json php5-mysql php5-gd
wget https://raw.githubusercontent.com/jeedom/core/stable/install/apache_security -O /etc/apache2/conf-available/security.conf
rm /etc/apache2/conf-enabled/security.conf
ln -s /etc/apache2/conf-available/security.conf /etc/apache2/conf-enabled/
rm /etc/apache2/conf-available/other-vhosts-access-log.conf
rm /etc/apache2/conf-enabled/other-vhosts-access-log.conf
systemctl restart apache2
rm /var/www/html/index.html
````

> **Note**
>
> If during the installation the system asks you whether or not you want to keep a modified version of a file, do : "Keep the local version currently installed".

## Copy of Jeedom

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## Admission test

``systemctl start mysql``

You should now be able to access Jeedom from the same URL as before. If it's good you can continue OTHERWISE YOU MUST NOT DO THE FOLLOWING.

## Crontab update

Do :

``crontab -e``

Then update the path to Jeedom, replace :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

By :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## Nginx cleanup and removal

````
apt-get remove nginx*
rm -rf cp -R /usr/share/nginx
apt-get autoremove
systemctl disable nginx
````

## Restarting services

````
systemctl enable apache2
systemctl start cron
````

Then connect to your Jeedom and reactivate the task engine and scenarios. You can also revive demons.

> **Important**
>
> It is advisable after the migration to launch an update of Jeedom (even if it does not offer you anything).
