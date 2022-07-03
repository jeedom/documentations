# Debian tips and tricks

# Useful packages

Here are some useful packages to put on a clean install :

-   **fail2ban** : Allows you to ban IPs that try to connect to the machine.
-   **vim** : It is a command line text editor, we can also replace it with nano or many others.
-   **net-tools** : collection of programs to manage the network
-   **dos2unix** : text converter tool

``apt-get install -y vim fail2ban net-tools dos2unix``

If you are on VMware you can add additional tools:

``apt-get install -y open-vm-tools``

# Colorize the console

If you want your console (bash) to use the colors :

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Allow root login in SSH

You have to edit the file ``/etc/ssh/sshd_config`` and change :

``PermitRootLogin without-password``

By :

``PermitRootLogin yes``

> **Important**
>
> Be sure to use a strong root password ! Using fail2ban is also recommended.

# Mount a Samba share

Installing the cifs package

``apt-get install -y cifs-utils``

Create the mount point :

``mkdir /mnt/mon_partage``

> **Note**
>
> You have to adapt my sharing according to your needs

Added mounting in /etc/fstab

    //IP_SERVER_SAMBA/my_share /mnt/my_share cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Note**
>
> You need to change the TODOs to your linux username and password

# Going from Jessie to Stretch

Having tested the upgrade and installing Stretch with restoring from a backup, I confirm that installing Stretch by overwriting will save you time.

-   **Method 1 : installing Stretch :** 1 to 2 hours max, and above all a clean operating system.
-   **Method 2 : updated Jessie to Stretch :** half a day wiping bugs.

## Method 1 : Installing Stretch and restoring backup

Before starting, make a full backup via Jeedom of your installation under Jessie, then export the backup to another storage medium.

> **Tip**
>
> Download the backup other than through the web interface (SSH, FTP, SAMBA, others of your choice), because if your archive is large it can easily get corrupted via an HTTP download. However, if it is less than 100MB, it is playable.

-   Install Debian Stretch on your box.
-   Reconfigure your local network, check that your machine is operational and up to date.
-   Install Jeedom by following the [document](https://github.com/jeedom/documentation/blob/master/installation/en_US/other.asciidoc)

>**WARNING**
>
>MariaDB no longer allows access to the 'root' profile, which can block the restoration of a database whose name you have changed (like me) so the backup is not restored immediately. If the 'jeedom' user does not have the correct permissions, the restore will fail.

Référence : <http://jc.etiemble.free.fr/abc/index.php/realizations/tips-tricks/deb9php7> (chapter 5a)

Briefly, 2 lines of commands to allow user 'root' in MYSQL, under Stretch :

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

> **Tip**
>
> Replace 'mypass' with your MYSQL password used for the root account under "Debian 8 - Jessie". I give the rights to root in particular to manage my databases with 'PHPMYADMIN', but giving them to the MYSQL user 'jeedom' must be enough.

> **Tip**
>
> You will find the password mode of the MYSQL jeedom user here : Administration → Configuration → OS/DB → Database

It's up to you to adapt this command according to your previous configuration :

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

ou

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Copy your backup to the folder ``/var/www/html/backup``
-   Give rights to www-data : ``chown -R www-data: /var/www/html/backup/*``
-   Launch the restoration via the Jeedom interface (Administration → Backups → Local Backups : Choose the correct backup and click **Restore** just below)
-   Wait while restoring
-   Restore the rights to www-data on all Jeedom : ``chown -R www-data: /var/www/html/``
-   Restart the box : `reboot`
-   Connect to Jeedom with your old credentials via the web interface
-   Pass on each plugin to reinstall the dependencies (especially on those where the daemon is "NOK" KO).

## Method 1 : Upgrade (less chance of success)

OS update to Jessie version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

You have to edit the file /etc/apt/sources.list and replace all Jessie with Stretch, with prior saving of the file, by doing :

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

Update of the OS in Stretch version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Switch to MariaDB.

``apt-get -y install mariadb-server mariadb-client mariadb-common``

Jeedom update

````
sh /var/www/html/install/install.sh -s 2
sh /var/www/html/install/install.sh -s 5
sh /var/www/html/install/install.sh -s 7
sh /var/www/html/install/install.sh -s 10
````

Removal of unnecessary libraries

````
apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
apt -y remove `aptitude -F %p search '~o'`----
````

Note : If when you open your Jeedom page you get a php code, activate it by running the following commands :

````
a2enmod php7.0
systemctl restart apache2.service
````
