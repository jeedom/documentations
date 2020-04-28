Descripción 
===========


.


.

.


. 


.

 : 

.

> **Punta**
>
> 
> 
> 
> [ici](https:.

 
=================================



[ici](https://jeedom.github.io/core/es_ES/backup).

 
===========================================

 
-----------



. 
.

![save restore06](Imagens/save-restore06.jpg)



![save restore07](Imagens/save-restore07.jpg)




![save restore08](Imagens/save-restore08.jpg)

 
------------

 :
[Win32 Disk Imager](http://sourceforge.net/projects/win32diskImagenr/)

1.  **Salvaguardia**

    -   
        *
        .

    -   
        .

    -   .
        Imagen::]

2.  ****

    -   
        *
        .

    -   
        .

    -   
        .

![save restore10](Imagens/save-restore10.jpg)

X 
-----------


[ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](Imagens/save-restore11.jpg)

1.  **Salvaguardia**

    -    : 
        *
        .

    -    :

        -   
             : `diskutil list`
            Imagen::]

        -    :
            `sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`
            *Observación: 
            
            Salvaguardia \`/dev/disk1\`*

2.  ****

    -    : 
        *
        
        
        .

    -    :

        -   
            
            Salvaguardia : `diskutil list`

        -    :
            `sudo diskutil unmountDisk /dev/disk1`

        -   
            :
            `sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`
            *Observación : 
            
            Salvaguardia \`/dev/disk1\`*

 
----------

1.  **Salvaguardia**

    -   
         : `sudo fdisk -l | grep Dis`

        ``` {.bash}
        $ sudo fdisk -l | grep Dis
        : 320.
        : 16.
        : 8.
        ```

    -    :
        `sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m` *Observación: Dans
        .*

2.  ****

    -   
         : `sudo fdisk -l | grep Dis`

    -   
         :
        `sudo umount /dev/sdcX`

    -    :
        `sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m` *Observación: Dans
        .*


