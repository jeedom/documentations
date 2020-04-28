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
        Sie möchten wiederherstellen.

    -   Klicken Sie abschließend auf die Schaltfläche * Schreiben *, um dies wiederherzustellen
        Bild auf microSD-Karte.

![save restore10](Bilds/save-restore10.jpg)

Unter MacOSX 
-----------

Um Ihre Aufgabe zu vereinfachen, können Sie die Software herunterladen
[ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](Bilds/save-restore11.jpg)

1.  **Schutz**

    -   Mit ApplePi-Baker : Wählen Sie die richtige Karte aus der Liste
        *Pi-Crust * und klicken Sie auf * Backup erstellen *, um ein zu erstellen
        Bilddatei Ihrer microSD-Karte.

    -   Im Shell-Befehl :

        -   Öffnen Sie, um die der Karte entsprechende Festplatte zu finden
            ein Terminal und geben Sie den Befehl ein : `diskutil list`
            Bild::Bilds / save-restore12.jpg \ [align = "center" \]

        -   Beginnen Sie mit der Erstellung des Bildes, indem Sie den Befehl eingeben :
            `sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`
            *Bemerkung: In diesem Beispiel der Name der Karte
            ist `/ dev / disk1`, also geben Sie den Befehl ein
            Schutz \`/dev/disk1\`*

2.  ****

    -   Mit ApplePi-Baker : Wählen Sie die richtige Karte aus der Liste
        *Pi-Crust *, geben Sie den Pfad zur wiederherzustellenden Image-Datei ein
        im Feld * IMG-Datei * des Abschnitts * Pi-Ingredients * und
        Klicken Sie auf * Backup wiederherstellen *, um das Image auf dem wiederherzustellen
        microSD-Karte.

    -   Im Shell-Befehl :

        -   Öffnen Sie, um die der Karte entsprechende Festplatte zu finden
            ein Terminal und geben Sie den gleichen Befehl wie für die
            Schutz : `diskutil list`

        -   Hängen Sie die Partitionen der Karte aus, indem Sie den Befehl eingeben :
            `sudo diskutil unmountDisk /dev/disk1`

        -   Stellen Sie das Bild auf der microSD-Karte wieder her, indem Sie den Befehl eingeben
            :
            `sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`
            *Bemerkung : In diesem Beispiel der Name der Karte
            ist `/ dev / disk1`, also geben Sie den Befehl ein
            Schutz \`/dev/disk1\`*

Unter Linux 
----------

1.  **Schutz**

    -   Öffnen Sie a, um die der Karte entsprechende Festplatte zu finden
        Terminal und geben Sie den Befehl ein : `sudo fdisk -l | grep Dis`

        ``` {.bash}
        $ sudo fdisk -l | grep Dis
        Disk / dev / sda: 320.1 GB, 320072933376 Byte
        Disk / dev / sdb: 16.0 GB, 16012804096 Bytes
        Disk / dev / sdc: 8.0 GB, 8006402048 Byte
        ```

    -   Beginnen Sie mit der Erstellung des Bildes, indem Sie den Befehl eingeben :
        `sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m` *Bemerkung: Dans
        In diesem Beispiel lautet der Name der Festplatte / dev / sdc.*

2.  ****

    -   Öffnen Sie a, um die der Karte entsprechende Festplatte zu finden
        Terminal und geben Sie den Befehl ein : `sudo fdisk -l | grep Dis`

    -   Hängen Sie die Partitionen der Karte aus, indem Sie den Befehl eingeben (in
        Ersetzen des X durch die Partitionsnummern) :
        `sudo umount /dev/sdcX`

    -   Stellen Sie das Bild auf der microSD-Karte wieder her, indem Sie den Befehl eingeben :
        `sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m` *Bemerkung: Dans
        In diesem Beispiel lautet der Name der Festplatte / dev / sdc.*


