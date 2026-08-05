# How to make backups

There are two ways to save Jeedom and each has advantages and disadvantages.

It is possible to save from the Jeedom interface. This only concerns Jeedom software and its data. It has the advantage of being able to be made hot and the backup file can be exported to other media.

It is also possible to make a backup by making a disk image of the microSD card (mini and mini +). This way has the advantage of being a full backup of the system as well as of Jeedom and its data. By cons it must be done by turning off Jeedom and connecting the microSD card to another computer.

The best way to be quiet is to use both : Make a backup of the microSD card from time to time and schedule a regular backup of Jeedom.

> **Tip**
>
> The procedure for restoring the microSD card may be useful for restoring a default Jeedom from the image provided by the team see [here](https://doc.jeedom.com/en_US/installation/).

# Jeedom Backup / Restore

Documentation is already present to explain the Administration → Backups page. You will find it [here](https://doc.jeedom.com/en_US/core/3.3/backup).

# Backup / Restore microSD card

## Preparations

These backups / restores are carried out from another computer in order to make a "clean image" of the SD card. We must first stop the mini +. To do this, switch Jeedom to expert mode in the user menu at the top right.

![save restore06](images/save-restore06.jpg)

And click on Turn off

![save restore07](images/save-restore07.jpg)

Then, you have to take the microSD card out of the mini + and connect it to your computer via an adapter / card reader /…

![save restore08](images/save-restore08.jpg)

## Windows

You will have to start by downloading third-party software for example : [Win32 Disk Imager](http://sourceforge.net/projects/win32diskimager/)

### Sauvegarde

-   Launch the software and check that the letter below *Device* matches that of your card / card reader.
-   In the field *Image File*, specify the name of the image file you want to create and where it will be saved.
-   Finally click on the button *Read*, in order to create the image.
    image::images / save-restore09.jpg

### Restauration

-   Launch the software and check that the letter below *Device* matches that of your card / card reader.
-   In the field *Image File*, find the image file you want to restore.
-   Finally click on the button *Write*, to restore this image to the microSD card.

![save restore10](images/save-restore10.jpg)

## Under MacOSX

To make your task easier, you can download the software [ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](images/save-restore11.jpg)

### Sauvegarde

-   With ApplePi-Baker : Select the correct card from the list *Pi-Crust*, and click *Create backup* to create an image file of your microSD card.

-   In shell command :
 -   In order to find the disk corresponding to the card, open a terminal and enter the command : ``diskutil list``  
 ![save restore12](images/save-restore12.jpg)
 -   Start creating the image by entering the command : ``sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`` *Remarque: In this example, the name of the card disk is `/ dev / disk1`, so you must enter in the backup command \` / dev / disk1 \ `*

### Restauration

-   With ApplePi-Baker : Select the correct card from the list *Pi-Crust*, put the path to the image file to restore in the field *IMG file* of the section *Pi-Ingredients*, and click *Restore Backup* to restore the image on the microSD card.
-   In shell command :
    -   In order to find the disk corresponding to the card, open a terminal and enter the same command as for the backup : ``diskutil list``
 -   Unmount the partitions of the card by typing the command : ``sudo diskutil unmountDisk /dev/disk1``
 -   Restore the image on the microSD card by typing the command : ``sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`` *Note : In this example, the name of the card disk is `/ dev / disk1`, so you must enter in the backup command \` / dev / disk1 \ `*

## Under Linux

### Sauvegarde

-   In order to find the disk corresponding to the card, open a terminal and enter the command : ``sudo fdisk -l | grep Dis``
    ````
    $ sudo fdisk -l | grep Dis
    Disk /dev/sda: 320.1 GB, 320072933376 bytes
    Disk /dev/sdb: 16.0 GB, 16012804096 bytes
    Disk /dev/sdc: 8.0 GB, 8006402048 bytes
    ````
-   Start creating the image by entering the command : ``sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m`` *Remarque: In this example, the name of the card disk is / dev / sdc.*

### Restauration

-   In order to find the disk corresponding to the card, open a terminal and enter the command : ``sudo fdisk -l | grep Dis``
-   Remove the partitions from the card by typing the command (replacing the X with the partition numbers) : ``sudo umount /dev/sdcX``
-   Restore the image on the microSD card by typing the command : ``sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m`` *Remarque: In this example, the name of the card disk is / dev / sdc.*
