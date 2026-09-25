# Apache Migration

-   Apache will gradually become the standard with Jeedom
-   Ensures you have the latest security updates regarding file access (via .htaccess) during Jeedom updates
-   Fixes some access and stability issues (especially for users with many cameras)
-   Improves Jeedom's overall performance.

# Prerequisites

-   How to connect to the box via SSH (you’ll find the login credentials in the installation documentation)
-   Be connected to the Internet.

> **Important**
>
> In the event of any issues, the Jeedom team cannot be held liable and may refuse any support requests. Use is at your own risk.

> **Important**
>
> Please note that some unofficial plugins are not compatible with Apache; be sure to check beforehand.

# How to

## Disabling Jeedom and nginx services

In Jeedom, you need to go to each plugin that has a daemon, then disable automatic daemon management and stop the daemon. Next, in the task manager, disable all tasks (there is a general disable button), and in the scenarios, disable all scenarios (there is a general disable button).

````
systemctl stop cron
systemctl stop nginx
systemctl stop mysql
````

## Installing and Configuring Apache

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
> If, during installation, the system asks whether or not you want to keep a modified version of a file, select: "Keep the local version currently installed."

## Copy of Jeedom

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## Access Test

``systemctl start mysql``

You should now be able to access Jeedom using the same URL as before. If everything looks good, you can continue; OTHERWISE, DO NOT PROCEED UNDER ANY CIRCUMSTANCES.

## Updating the crontab

To do:

``crontab -e``

Then update the path to Jeedom, replacing:

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

By:

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## Cleaning up and removing nginx

````
apt-get remove nginx*
rm -rf cp -R /usr/share/nginx
apt-get autoremove
systemctl disable nginx
````

## Restarting Services

````
systemctl enable apache2
systemctl start cron
````

Next, log in to your Jeedom and re-enable the task engine and scenarios. You can also restart the daemons.

> **Important**
>
> After the migration, we recommend running a Jeedom update (even if it doesn’t prompt you to do so).
