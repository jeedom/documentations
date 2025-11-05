# Apache migration

-   Apache will gradually become the norm with Jeedom
-   Allows you to have the latest security updates in file access (thanks to .htaccess) during Jeedom updates
-   Corrects some access and stability concerns (especially for those who have a lot of cameras)
-   Improves overall performance of Jeedom.

# Prerequisites

-   Know how to connect in SSH on the box (you will find the identifiers on the installation documentation)
-   Being connected to the internet.

> **IMPORTANT**
>
> In case of concerns, the Jeedom team cannot be held responsible and may refuse any request for support. Handling is at your own risk.

> **IMPORTANT**
>
> Please note that some unofficial plugins are not Apache compatible, please inquire well before.

# How to do

## Deactivation of Jeedom and nginx services

In Jeedom, you have to go to each plugin with a daemon, then deactivate the automatic management of the daemon and cut it. Then, in the task engine, deactivate all tasks (there is a general deactivation button) and in the scenarios, deactivate all scenarios (there is a general deactivation button).

````
systemctl stop cron
systemctl stop nginx
systemctl stop mysql
````

## Installation and configuration of Apache

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

> **NOTE**
>
> If during installation the system asks you whether or not you want to keep a modified version of a file, do : "Keep the local version currently installed".

## Jeedom copy

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## Access test

``systemctl start mysql``

You should now be able to access Jeedom from the same URL as before. If it is good you can continue OTHERWISE YOU MUST NOT TAKE THE FOLLOW-UP.

## Crontab update

MAKE :

``crontab -e``

Then update the path to Jeedom, replace :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

By :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## Cleaning and removing nginx

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

Then connect to your Jeedom and reactivate the task engine and the scenarios. You can also revive the demons.

> **IMPORTANT**
>
> It is advisable after migration to launch an update of Jeedom (even if it does not offer anything).
