Description
===========

The procedure will allow you to connect to your box in SFTP in order to
to go and recover the daily backups made by it.

> **Tip**
>
> Attention, in order for this procedure to work, it is necessary that
> the box's SSH server is still functional.

Installation of Filezilla 
=========================

Filezilla is free software and available on all
platforms. It allows you to transfer files via different
protocols (FTP, FTPS, SFTP…) It can be downloaded via this link :
<https://filezilla-project.org/download.php?type=client>

Connection to the box 
==================

To connect to your box, simply complete the fields
information at the top of the Filezilla window :

![restore filezilla01](images/restore-filezilla01.jpg)

-   Hostname : Jeedom IP address (sftp:// is added automatically)

-   Login: jeedom

-   Password : Mjeedom96

-   Harbor: 22

Then click on "Quick Connection"

Navigation to the backup directory 
===========================================

Once the connection is established, it is necessary to go to the
Jeedom backup directory.

2 scenarios :

-   Apache Server (Jeedom Smart Box) : / var / www / html / backup

-   Nginx Server (Jeedom Mini + Box) :
    / usr / share / nginx / www / jeedom / backup

The path is displayed in the remote site section.

![restore filezilla02](images/restore-filezilla02.jpg)

Backup download 
===============================

On the list of backups, by right-clicking, it is possible
to start downloading.

![restore filezilla03](images/restore-filezilla03.jpg)
