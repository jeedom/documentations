# 

-   
-    .
-   )
-   .

# 

-   )
-   .

> **Wichtig**
>
> . .

> **Wichtig**
>
> .

# 

## 

. ).

````
systemctl stop cron
systemctl stop nginx
systemctl stop mysql
````

## 

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

> **Notiz**
>
>  : "".

## 

````
cp -R /usr/share/nginx/www/jeedom/* /var/www/html/
cp -R /usr/share/nginx/www/jeedom/.[^.]* /var/www/html/
rm /var/www/html/log/nginx.error
chmod 775 -R /var/www/html
chown www-data:www-data -R /var/www/html
````

## 

``systemctl start mysql``

. .

## 

 :

``crontab -e``

 :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /usr/share/nginx/www/jeedom/core/php/jeeCron.php' >> /dev/null 2>&1``

 :

``* * * * * su --shell=/bin/bash - www-data -c '/usr/bin/php /var/www/html/core/php/jeeCron.php' >> /dev/null 2>&1``

## 

````
apt-get remove nginx*
rm -rf cp -R /usr/share/nginx
apt-get autoremove
systemctl disable nginx
````

## 

````
systemctl enable apache2
systemctl start cron
````

. .

> **Wichtig**
>
> ).
