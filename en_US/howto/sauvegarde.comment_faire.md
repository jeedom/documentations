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
        .

![save restore10](Pictures/save-restore10.jpg)

X 
-----------


[ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](Pictures/save-restore11.jpg)

1.  **Safeguard**

    -    : 
        *
        .

    -    :

        -   
             : `diskutil list`
            Picture::]

        -    :
            `sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`
            *Note: 
            
            Safeguard \`/dev/disk1\`*

2.  ****

    -    : 
        *
        
        
        .

    -    :

        -   
            
            Safeguard : `diskutil list`

        -    :
            `sudo diskutil unmountDisk /dev/disk1`

        -   
            :
            `sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`
            *Note : 
            
            Safeguard \`/dev/disk1\`*

 
----------

1.  **Safeguard**

    -   
         : `sudo fdisk -l | grep Dis`

        ``` {.bash}
        $ sudo fdisk -l | grep Dis
        : 320.
        : 16.
        : 8.
        ```

    -    :
        `sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m` *Note: Dans
        .*

2.  ****

    -   
         : `sudo fdisk -l | grep Dis`

    -   
         :
        `sudo umount /dev/sdcX`

    -    :
        `sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m` *Note: Dans
        .*


