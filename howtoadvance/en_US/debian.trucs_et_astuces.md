# Debian Tips and Tricks

# Useful packages

Here are some useful packages to install on a fresh system:

-   **fail2ban**: Allows you to block IP addresses that attempt to connect to the machine.
-   **vim**: This is a command-line text editor; you can also use nano or many other alternatives instead.
-   **net-tools**: a collection of programs for managing the network
-   **dos2unix**: text conversion tool

``apt-get install -y vim fail2ban net-tools dos2unix``

If you're using VMware, you can add additional tools:

``apt-get install -y open-vm-tools``

# Add color to the console

If you want your console (bash) to use colors:

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Allow root login via SSH

You need to edit the file ``/etc/ssh/sshd_config`` and change to:

``PermitRootLogin without-password``

By:

``PermitRootLogin yes``

> **Important**
>
> Be sure to use a strong root password! We also recommend using fail2ban.

# Setting Up a Samba Share

Installing the cifs package

``apt-get install -y cifs-utils``

Create the mounting point:

``mkdir /mnt/mon_partage``

> **Note**
>
> You'll need to customize my_share to suit your needs

Add the mount to /etc/fstab

//IP_SERVER_SAMBA/my_share /mnt/my_share cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Note**
>
> You must replace "TODO" with your Linux username and password

# Upgrade from Jessie to Stretch

Having tested the upgrade and the Stretch installation using a backup restoration, I can confirm that installing Stretch via an overwrite will save you time.

-   **Method 1: Installing Stretch:** 1 to 2 hours at most, and most importantly, a clean operating system.
-   **Method 2: Upgrading from Jessie to Stretch:** It took half a day to work through the bugs.

## Method 1: Installing Stretch and Restoration of a Backup

Before you begin, perform a full backup of your Jessie installation via Jeedom, then export the backup to another storage medium.

> **Tip**
>
> Download the backup using a method other than the web interface (SSH, FTP, SAMBA, or another method of your choice), because if your archive is large, it can easily become corrupted during an HTTP download. However, if it’s less than 100 MB, it should be fine.

-   Install Debian Stretch on your set-top box.
-   Reconfigure your local network, and make sure your device is up and running and up to date.
-   Install Jeedom by following the [doc](https://github.com/jeedom/documentation/blob/master/installation/fr_FR/other.asciidoc)

>**WARNING**
>
>MariaDB no longer allows access via the 'root' user, which can prevent you from performing the restoration of a database whose name you've changed (as I did), so don't perform the restoration right away. If the 'jeedom' user doesn't have the proper permissions, the restoration will fail.

Reference: <http://jc.etiemble.free.fr/abc/index.php/realisations/trucs-astuces/deb9php7> (Chapter 5a)

In short, two command lines to grant the 'root' user permission in MySQL, on Stretch:

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
> Replace 'monpass' with your MySQL password used for the root account on "Debian 8 - Jessie." I grant root privileges specifically to manage my databases with 'PHPMyAdmin,' but granting them to the MySQL user 'jeedom' should be sufficient.

> **Tip**
>
> You can find the mode of the MYSQL user for Jeedom here: Administration → Configuration → OS/DB → Database

It’s up to you to adapt this command based on your previous configuration:

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

or

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Copy your backup to the folder ``/var/www/html/backup``
-   Grant permissions to www-data: ``chown -R www-data: /var/www/html/backup/*``
-   Start the restoration process via the Jeedom interface (Administration → Backups → Local Backups: Select the correct backup and click **Restore** just below it)
-   Please wait during the Restoration
-   Restore www-data's permissions on the entire Jeedom system: ``chown -R www-data: /var/www/html/``
-   Restart the router: `reboot`
-   Log in to Jeedom using your existing credentials via the web interface
-   Go through each plugin to reinstall the dependencies (especially those where the daemon is "NOK"—down).

## Method 1: Upgrade (lower chance of success)

OS update to the Jessie version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

You need to edit the /etc/apt/sources.list file and replace all instances of "Jessie" with "Stretch," after first saving the file, by running:

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

OS update to the Stretch version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Switching to MariaDB.

``apt-get -y install mariadb-server mariadb-client mariadb-common``

Jeedom Update

````
sh /var/www/html/install/install.sh -s 2
sh /var/www/html/install/install.sh -s 5
sh /var/www/html/install/install.sh -s 7
sh /var/www/html/install/install.sh -s 10
````

Removing Unnecessary Libraries

````
apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
apt -y remove `aptitude -F %p search '~o'`----
````

Note: If you see PHP code when you open your Jeedom page, enable it by running the following commands:

````
a2enmod php7.0
systemctl restart apache2.service
````
