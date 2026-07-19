# 

# 

 :

-   **** : .
-   **** : .
-   **** : 
-   **** : 

``apt-get install -y    ``

:

``apt-get install -y open-vm-tools``

# 

 :

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
 /root/.bashrc
````

# 

 ``/etc/ssh/sshd_config``  :

``PermitRootLogin without-password``

 :

``PermitRootLogin yes``

> ****
>
>  ! .

# 



``apt-get install -y cifs-utils``

 :

``mkdir /mnt/mon_partage``

> ****
>
> 



    

> ****
>
> 

# 

.

-   ** :  :** .
-   ** :  :** .

##  : 

.

> ****
>
> . .

-   .
-   .
-    [](https://github.com/jeedom/documentation/blob/master/installation/en_US/other.asciidoc)

>****
>
>. .

Référence : <http://jc.etiemble.free.fr/abc/index.)

 :

````
$ mysql -u root -p mysql
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 2
Server version: 10.1.21-MariaDB-5 Debian 9.0
Copyright (c) 2000, 2016, Oracle, MariaDB Corporation Ab and others.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [mysql]>
MariaDB [mysql]> GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';
Query OK, 0 rows affected (0.00 sec)
MariaDB [mysql]> exit;
Bye
````

> ****
>
> ". .

> ****
>
>  : 

 :

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

ou

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-    ``/var/www/html/backup``
-    : ``chown -R www-data: /var/www/html/backup/*``
-    :  **** )
-   
-    : ``chown -R www-data: /var/www/html/``
-    : `reboot`
-   
-   ).

##  : )

.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

. :

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

.

``apt-get -y install mariadb-server mariadb-client mariadb-common``



````
sh /var/www/html/install/install.sh -s 2
sh /var/www/html/install/install.sh -s 5
sh /var/www/html/install/install.sh -s 7
sh /var/www/html/install/install.sh -s 10
````



````
apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
apt -y remove `aptitude -F %p search '~o'`----
````

 :  :

````
a2enmod php7.0
systemctl restart apache2.service
````
