Beschreibung 
===========


.


.

.


. 


.

 : 

.

> **Spitze**
>
> 
> 
> 
> [ici](https:.

 
=================================



[ici](https://jeedom.github.io/core/de_DE/backup).

 
===========================================

 
-----------



. 
.

![save restore06](Bilds/save-restore06.jpg)



![save restore07](Bilds/save-restore07.jpg)




![save restore08](Bilds/save-restore08.jpg)

 
------------

 :
[Win32 Disk Imager](http://sourceforge.net/projects/win32diskBildr/)

1.  **Schutz**

    -   
        *
        .

    -   
        .

    -   .
        Bild::]

2.  ****

    -   
        *
        .

    -   
        .

    -   
        .

![save restore10](Bilds/save-restore10.jpg)

X 
-----------


[ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](Bilds/save-restore11.jpg)

1.  **Schutz**

    -    : 
        *
        .

    -    :

        -   
             : `diskutil list`
            Bild::]

        -    :
            `sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`
            *Bemerkung: 
            
            Schutz \`/dev/disk1\`*

2.  ****

    -    : 
        *
        
        
        .

    -    :

        -   
            
            Schutz : `diskutil list`

        -    :
            `sudo diskutil unmountDisk /dev/disk1`

        -   
            :
            `sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`
            *Bemerkung : 
            
            Schutz \`/dev/disk1\`*

 
----------

1.  **Schutz**

    -   
         : `sudo fdisk -l | grep Dis`

        ``` {.bash}
        $ sudo fdisk -l | grep Dis
        : 320.
        : 16.
        : 8.
        ```

    -    :
        `sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m` *Bemerkung: Dans
        .*

2.  ****

    -   
         : `sudo fdisk -l | grep Dis`

    -   
         :
        `sudo umount /dev/sdcX`

    -    :
        `sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m` *Bemerkung: Dans
        .*


