# Restoring a backup

The procedure will allow you to connect in SFTP to your box in order to retrieve the daily backups made by it.

> **Tip**
>
> Please note, for this procedure to work, the box's SSH server must still be functional.

## Installing Filezilla

Filezilla is freeware and available on all platforms. It allows files to be transferred via different protocols (FTP, FTPS, SFTP, etc.) It can be downloaded via this [link](https://filezilla-project.org/download.php?type=client)

## Connection to the box

To connect to your box, simply fill in the information fields at the top of the Filezilla window :

![restore filezilla01](images/restore-filezilla01.jpg)

-   Host : Jeedom IP address (``sftp://`` is added automatically)
-   ID : ``jeedom``
-   Password : ``Mjeedom96``
-   Port : 22

Then click on "Quick connection"

## Navigating to Backup Directory

Once the connection is established, it is necessary to go to the Jeedom backup directory.

2 scenarios :

-   Apache Server (Jeedom Smart Box) : ``/var/www/html/backup``
-   Nginx server :  ``/usr/share/nginx/www/jeedom/backup``

The access path is entered in the remote site section.

![restore filezilla02](images/restore-filezilla02.jpg)

## Backup Download

On the list of backups, by right-clicking, it is possible to start downloading it.

![restore filezilla03](images/restore-filezilla03.jpg)
