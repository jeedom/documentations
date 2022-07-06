# Restoring a backup

The procedure will allow you to connect to your box in SFTP in order to retrieve the daily backups made by it.

> **Tip**
>
> Attention, for this procedure to work, it is necessary that the SSH server of the box is still functional.

## Installation of Filezilla

Filezilla is free software and available on all platforms. It allows you to transfer files via different protocols (FTP, FTPS, SFTP…) It can be downloaded via this [Link](https://filezilla-project.org/download.php?type=client)

## Connection to the box

To connect to your box, simply complete the information fields at the top of the Filezilla window :

![restore filezilla01](images/restore-filezilla01.jpg)

-   Hostname : Jeedom IP address (``sftp://`` is added automatically)
-   Login : ``jeedom``
-   Password : ``Mjeedom96``
-   Harbor : 22

Then click on "Quick Connection"

## Navigation to the backup directory

Once the connection is established, it is necessary to go to the backup directory of Jeedom.

2 scenarios :

-   Apache Server (Jeedom Smart Box) : ``/var/www/html/backup``
-   Nginx server :  ``/usr/share/nginx/www/jeedom/backup``

The path is displayed in the remote site section.

![restore filezilla02](images/restore-filezilla02.jpg)

## Backup download

On the list of backups, by right-clicking, it is possible to start its download.

![restore filezilla03](images/restore-filezilla03.jpg)
