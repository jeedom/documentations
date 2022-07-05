# So erstellen Sie Backups

Es gibt zwei Möglichkeiten, Jeedom zu sichern, und jede hat Vor- und Nachteile.

Es ist möglich, ein Backup über die Jeedom-Schnittstelle zu erstellen. Dies betrifft nur die Jeedom-Software und deren Daten. Es hat den Vorteil, dass es heiß gemacht werden kann und die Sicherungsdatei auf andere Medien exportiert werden kann.

Es ist auch möglich, ein Backup zu erstellen, indem Sie ein Disk-Image der microSD-Karte (mini und mini+). Dieser Weg hat den Vorteil, eine vollständige Sicherung des Systems sowie Jeedom und seiner Daten zu sein. Auf der anderen Seite muss dies durch Ausschalten von Jeedom und Einstecken der microSD-Karte in einen anderen Computer erfolgen.

Der beste Weg, um leise zu sein, ist, beide zu verwenden : Erstellen Sie von Zeit zu Zeit ein Backup der microSD-Karte und planen Sie ein regelmäßiges Jeedom-Backup ein.

> **Tipp**
>
> Das Wiederherstellungsverfahren für microSD-Karten kann nützlich sein, um ein Standard-Jeedom aus dem vom Team bereitgestellten Image wiederherzustellen [hier](https://doc.jeedom.com/de_DE/installation/).

# Jeedom-Sicherung/Wiederherstellung

Es ist bereits eine Dokumentation vorhanden, die die Seite Administration→Backups erklärt. Du wirst es finden [hier](https://doc.jeedom.com/de_DE/core/3.3/backup).

# MicroSD-Kartensicherung/-wiederherstellung

## Vorbereitungen

Diese Backups/Wiederherstellungen werden von einem anderen Computer aus durchgeführt, um ein „sauberes Image“ der SD-Karte zu erstellen. Sie müssen den mini+ zuerst stoppen. Schalten Sie dazu Jeedom im Benutzermenü oben rechts in den Expertenmodus.

![save restore06](images/save-restore06.jpg)

Und klicken Sie auf Ausschalten

![save restore07](images/save-restore07.jpg)

Dann müssen Sie die microSD-Karte aus dem mini+ nehmen und sie über einen Adapter/Kartenleser/…​ an Ihren Computer anschließen

![save restore08](images/save-restore08.jpg)

## Unter Windows

Sie müssen beispielsweise zunächst Software von Drittanbietern herunterladen : [Win32 Disk Imager](http://sourceforge.net/projects/win32diskimager/)

### Sauvegarde

-   Starten Sie die Software und überprüfen Sie, ob der Buchstabe unten steht *Gerät* mit der Ihrer Karte/Ihres Kartenlesers übereinstimmt.
-   Im Feld *Bilddatei*, Geben Sie den Namen der Bilddatei an, die Sie erstellen möchten, und den Speicherort, an dem sie gespeichert werden soll.
-   Klicken Sie abschließend auf die Schaltfläche *Lesen*, um das Bild zu erstellen.
    image::images/save-restore09.jpg

### Restauration

-   Starten Sie die Software und überprüfen Sie, ob der Buchstabe unten steht *Gerät* mit der Ihrer Karte/Ihres Kartenlesers übereinstimmt.
-   Im Feld *Bilddatei*, Suchen Sie die Bilddatei, die Sie wiederherstellen möchten.
-   Klicken Sie abschließend auf die Schaltfläche *Schreiben*, um dieses Image auf der microSD-Karte wiederherzustellen.

![save restore10](images/save-restore10.jpg)

## Unter macOSX

Um es Ihnen einfacher zu machen, können Sie die Software herunterladen [ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![save restore11](images/save-restore11.jpg)

### Sauvegarde

-    :  *Pi-Kruste*,  *Ein Backup erstellen* .

-    :
 -    : ``diskutil list``  
 ![save restore12](images/save-restore12.jpg)
 -    : ``sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`` *Remarque: *

### Restauration

-    :  *Pi-Kruste*,  **  **,  ** .
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
