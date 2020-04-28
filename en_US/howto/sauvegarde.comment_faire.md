Description 
===========


.


.

.


. 


.

 : 

.

> **Tip**
>
> 
> 
> 
> [ici](https:.

 
=================================



[ici](https://jeedom.github.io/core/en_US/backup).

 
===========================================

 
-----------



. 
.

![save restore06](Pictures/save-restore06.jpg)



![save restore07](Pictures/save-restore07.jpg)




![save restore08](Pictures/save-restore08.jpg)

 
------------

 :
[Win32 Disk Imager](http://sourceforge.net/projects/win32diskPicturer/)

1.  **Safeguard**

    -   
        *
        .

    -   
        .

    -   .
        Picture::]

2.  ****

    -   
        *
        .

    -   
        .

    -   
        Picture on microSD card.

![save restore10](Pictures/save-restore10.jpg)

Under MacOSX 
-----------

To make your task easier, you can download the software
[ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](Pictures/save-restore11.jpg)

1.  **Safeguard**

    -   With ApplePi-Baker : Select the correct card from the list
        *Pi-Crust *, and click on * Create Backup * to create a
        Picture file of your microSD card.

    -   In shell command :

        -   In order to find the disk corresponding to the card, open
            a terminal and enter the command : `diskutil list`
            Picture::Pictures / save-restore12.jpg \ [align = "center" \]

        -   Start creating the Picture by entering the command :
            `sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`
            *Note: In this example, the name of the card disk
            is `/ dev / disk1`, so enter in the command
            Safeguard \`/dev/disk1\`*

2.  ****

    -   With ApplePi-Baker : Select the correct card from the list
        *Pi-Crust *, put the path to the Picture file to restore
        in the * IMG file * field of the * Pi-Ingredients * section, and
        click on * Restore Backup * to restore the Picture on the
        microSD card.

    -   In shell command :

        -   In order to find the disk corresponding to the card, open
            a terminal and enter the same command as for the
            Safeguard : `diskutil list`

        -   Unmount the partitions of the card by typing the command :
            `sudo diskutil unmountDisk /dev/disk1`

        -   Restore the Picture on the microSD card by typing the command
            :
            `sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`
            *Note : In this example, the name of the card disk
            is `/ dev / disk1`, so enter in the command
            Safeguard \`/dev/disk1\`*

Under Linux 
----------

1.  **Safeguard**

    -   In order to find the disk corresponding to the card, open a
        terminal and enter the command : `sudo fdisk -l | grep Dis`

        ``` {.bash}
        $ sudo fdisk -l | grep Dis
        Disk / dev / sda: 320.1 GB, 320072933376 bytes
        Disk / dev / sdb: 16.0 GB, 16012804096 bytes
        Disk / dev / sdc: 8.0 GB, 8006402048 bytes
        ```

    -   Start creating the Picture by entering the command :
        `sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m` *Note: Dans
        this example, the name of the card disk is / dev / sdc.*

2.  ****

    -   In order to find the disk corresponding to the card, open a
        terminal and enter the command : `sudo fdisk -l | grep Dis`

    -   Unmount the partitions of the card by typing the command (in
        replacing the X with the partition numbers) :
        `sudo umount /dev/sdcX`

    -   Restore the Picture on the microSD card by typing the command :
        `sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m` *Note: Dans
        this example, the name of the card disk is / dev / sdc.*


