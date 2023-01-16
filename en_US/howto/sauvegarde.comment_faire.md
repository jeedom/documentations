# 

.

. . .

). . .

 : .

> ****
>
>  [](https://doc.jeedom.com/en_US/installation/).

# 

.  [](https://doc.jeedom.com/en_US/core/3.3/backup).

# 

## 

. .

![save restore06](images/save-restore06.jpg)



![save restore07](images/save-restore07.jpg)



![save restore08](images/save-restore08.jpg)

## 

 : [](http://sourceforge.net/projects/win32diskimager/)

### Sauvegarde

-    ** .
-    **, .
-    **, .
    image::

### Restauration

-    ** .
-    **, .
-    **, .

![save restore10](images/save-restore10.jpg)

## X

 [](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](images/save-restore11.jpg)

### Sauvegarde

-    :  **,  ** .

-    :
 -    : ``diskutil list``  
 ![save restore12](images/save-restore12.jpg)
 -    : ``sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`` *Remarque: *

### Restauration

-    :  **,  **  **,  ** .
-    :
    -    : ``diskutil list``
 -    : ``sudo diskutil unmountDisk /dev/disk1``
 -    : ``sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`` * : *

## 

### Sauvegarde

-    : ``sudo fdisk -l | grep Dis``
    ````
    $ sudo fdisk -l | grep Dis
    Disk /dev/sda: 320.1 GB, 320072933376 bytes
    Disk /dev/sdb: 16.0 GB, 16012804096 bytes
    Disk /dev/sdc: 8.0 GB, 8006402048 bytes
    ````
-    : ``sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m`` *Remarque: .*

### Restauration

-    : ``sudo fdisk -l | grep Dis``
-   ) : ``sudo umount /dev/sdcX``
-    : ``sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m`` *Remarque: .*
