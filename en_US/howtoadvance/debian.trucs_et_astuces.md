# Debian tips and tricks

# Useful packages

Here are some useful packages to put on a blank installation :

-   **fail2ban** : Allows you to ban IPs who are trying to connect to the machine.
-   **vim** : It is a command line text editor, we can also replace it with nano or many others.
-   **net-tools** : collection of programs to manage the network
-   **dos2unix** : text conversion tool

``apt-get install -y vim fail2ban net-tools dos2unix``

If you are on VMware, you can add additional tools:

``apt-get install -y open-vm-tools``

# Colorize the console

If you want your console (bash) to use colors :

````
rm -rf /root/.bashrc
wget https://raw.githubusercontent.com/jeedom/core/master/install/bashrc -O /root/.bashrc
dos2unix /root/.bashrc
````

# Allow root login in SSH

Edit the file ``/etc/ssh/sshd_config`` and change :

``PermitRootLogin without-password``

By :

``PermitRootLogin yes``

> **IMPORTANT**
>
> Be sure to use a strong root password ! The use of fail2ban is also recommended.

# Mount a Samba share

Installation of the cifs package

``apt-get install -y cifs-utils``

Create the mount point :

``mkdir /mnt/mon_partage``

> **NOTE**
>
> You have to adapt my share according to your needs

Added mount in / etc / fstab

    // IP_SERVER_SAMBA / my_sharing / mnt / my_sharing cifs uid = 0, rw, user = TODO, password = TODO 0 0

> **NOTE**
>
> You must change the TODOs with your linux username and password

# Transition from Jessie to Stretch

For having tested the upgrade and the Stretch installation with restoration of a backup, I confirm that the installation of Stretch by overwriting will save you time.

-   **Method 1 : Stretch installation :** 1 to 2 hours maximum, and above all a clean operating system.
-   **Method 2 : update from Jessie to Stretch :** half a day to wipe the bugs.

## Method 1 : Installation of Stretch and backup restore

Before starting, make a full backup via Jeedom of your installation under Jessie, then export the backup to another storage medium.

> **Tip**
>
> Download the backup other than through the web interface (SSH, FTP, SAMBA, others of your choice), because if your archive is large it can easily get corrupted via an HTTP download. However, if it is less than 100MB, it is playable.

-   Install Debian Stretch on your box.
-   Reconfigure your local network, check that your machine is operational and up to date.
-   Install Jeedom by following the [Doc](https://github.com/jeedom/documentation/blob/master/installation/en_US/other.asciidoc)

>**Be careful**
>
>MariaDB no longer allows access to the 'root' profile, which can block the restoration of a database whose name you would have changed (like me) so we do not immediately restore the backup. If the user 'jeedom' does not have the correct permissions, the restoration will fail.

Référence : <http://jc.etiemble.free.fr/abc/index.php / realizations / tips-tricks / deb9php7> (chapter 5a)

In short, 2 command lines to authorize the user 'root' in MYSQL, under Stretch :

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
> Replace 'monpass' with your MYSQL password used for the root account under "Debian 8 - Jessie". I give root rights in particular to manage my databases with 'PHPMYADMIN', but giving them to the MYSQL user 'jeedom' should suffice.

> **Tip**
>
> You will find the password for the MYSQL jeedom user here : Administration → Configuration → OS / DB → Database

It's up to you to adapt this command according to your previous configuration :

``GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';``

ou

``GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';``

-   Copy your backup to the folder ``/var/www/html/backup``
-   Give the rights to www-data : ``chown -R www-data: /var/www/html/backup/*``
-   Launch the restoration via the Jeedom interface (Administration → Backups → Local Backups : Choose the right backup and click **Restore** just below)
-   Wait during the restoration
-   Restore rights to www-data on all Jeedom : ``chown -R www-data: /var/www/html/``
-   Restart the box : `reboot`
-   Connect to Jeedom with your old identifiers via the web interface
-   Go to each plugin to reinstall the dependencies (especially those where the daemon is "NOK" KO).

## Method 1 : Upgrade (less chance of success)

OS update in Jessie version.

````
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
````

Edit the / etc / apt / sources file.list and replace all Jessie with Stretch, with prior saving of the file, by doing :

````
cp /etc/apt/sources.list /etc/apt/sources.list_backup
sed -i 's/jessie/stretch/g' /etc/apt/sources.list
````

OS update in Stretch version.

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

NOTE : If when you open your Jeedom page you get a php code, activate it by running the following commands :

````
a2enmod php7.0
systemctl restart apache2.service
````
