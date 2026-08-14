# So erstellen Sie Backups

Es gibt zwei Möglichkeiten, Jeedom zu sichern, und jede hat ihre Vor- und Nachteile.

Über die Jeedom-Benutzeroberfläche kann ein Backup erstellt werden. Dieses betrifft ausschließlich die Jeedom-Software und deren Daten. Der Vorteil besteht darin, dass es im laufenden Betrieb durchgeführt werden kann und die Backup-Datei auf andere Speichermedien exportiert werden kann.

Es ist auch möglich, ein Backup zu erstellen, indem man ein Disk-Image der microSD-Karte (mini und mini+) erstellt. Diese Methode hat den Vorteil, dass sie ein vollständiges Backup des Systems sowie von Jeedom und dessen Daten liefert. Allerdings muss man dazu Jeedom herunterfahren und die microSD-Karte an einen anderen Computer anschließen.

Am sichersten ist es, beides zu nutzen: Erstellen Sie von Zeit zu Zeit ein Backup der microSD-Karte und richten Sie eine regelmäßige Sicherung von Jeedom ein.

> **Tipp**
>
> Das Verfahren zur Wiederherstellung der microSD-Karte kann nützlich sein, um ein Jeedom anhand des vom Team bereitgestellten Images auf die Werkseinstellungen zurückzusetzen, siehe [hier](/installation).

# Sicherung/Wiederherstellung von Jeedom

Es gibt bereits eine Dokumentation zur Seite „Verwaltung → Sicherungen“. Sie finden sie [hier](/core/backup).

# Sichern/Wiederherstellen der microSD-Karte

## Vorbereitungen

Diese Sicherungen/Wiederherstellungen werden von einem anderen Computer aus durchgeführt, um ein „sauberes Image“ der SD-Karte zu erstellen. Zunächst muss der mini+ heruntergefahren werden. Wechseln Sie dazu im Benutzermenü oben rechts in Jeedom in den Expertenmodus.

![Speichern Wiederherstellen06](../images/save-restore06.jpg)

Und auf „Ausschalten“ klicken

![Speichern, Wiederherstellen 07](../images/save-restore07.jpg)

Anschließend müssen Sie die microSD-Karte aus dem mini+ entnehmen und über einen Adapter/Kartenleser/… an Ihren Computer anschließen​

![Speichern, Wiederherstellen 08](../images/save-restore08.jpg)

## Unter Windows

Zunächst muss eine Software eines Drittanbieters heruntergeladen werden, zum Beispiel: [Win32 Disk Imager](http://sourceforge.net/projects/win32diskimager/)

### Sicherung

- Starten Sie die Software und überprüfen Sie, ob der Buchstabe unter *Device* mit dem Ihrer Karte bzw. Ihres Kartenlesers übereinstimmt.
- Geben Sie im Feld *Bilddatei* den Namen der Bilddatei ein, die Sie erstellen möchten, sowie den Speicherort, an dem sie gespeichert werden soll.
- Klicken Sie abschließend auf die Schaltfläche *Read*, um das Bild zu erstellen.

![Speichern Wiederherstellen09](../images/save-restore09.jpg)

### Wiederherstellung

- Starten Sie die Software und überprüfen Sie, ob der Buchstabe unter *Device* mit dem Ihrer Karte bzw. Ihres Kartenlesers übereinstimmt.
- Wählen Sie im Feld *Bilddatei* die Bilddatei aus, die Sie wiederherstellen möchten.
- Klicken Sie abschließend auf die Schaltfläche *Write*, um dieses Image auf die microSD-Karte zu schreiben.

![Speichern, Wiederherstellen 10](../images/save-restore10.jpg)

## Unter macOS X

Um es Ihnen einfacher zu machen, können Sie die Software herunterladen [ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)

![Speichern, Wiederherstellen11](../images/save-restore11.jpg)

### Sicherung

- Mit ApplePi-Baker: Wählen Sie die richtige Karte aus der Liste *Pi-Crust* aus und klicken Sie auf *Create Backup*, um ein Image Ihrer microSD-Karte zu erstellen.

- In der Shell-Befehlszeile:
 - Um das Laufwerk zu finden, das der Karte entspricht, öffnen Sie ein Terminal und geben Sie folgenden Befehl ein: ``diskutil list``
![Speichern, Wiederherstellen12](../images/save-restore12.jpg)
 - Starten Sie die Erstellung des Images, indem Sie folgenden Befehl eingeben: ``sudo dd if=/dev/disk1 of=~/Desktop/Backup_Jeedom.img bs=1m`` *Hinweis: In diesem Beispiel lautet der Laufwerksname der Karte `/dev/disk1`, daher muss in den Befehl zum Speichern Folgendes eingegeben werden: \`/dev/disk1\`*

### Wiederherstellung

- Mit ApplePi-Baker: Wählen Sie die richtige Karte aus der Liste *Pi-Crust* aus, geben Sie den Pfad zur wiederherzustellenden Image-Datei in das Feld *IMG file* im Abschnitt *Pi-Ingredients* ein und klicken Sie auf *Restore Backup*, um das Image auf der microSD-Karte wiederherzustellen.
- In der Shell-Befehlszeile:
    - Um das Laufwerk zu finden, das der Karte entspricht, öffnen Sie ein Terminal und geben Sie denselben Befehl wie für die Sicherung ein: ``diskutil list``
 - Entfernen Sie die Partitionen von der Karte, indem Sie folgenden Befehl eingeben: ``sudo diskutil unmountDisk /dev/disk1``
 - Stellen Sie das Image auf der microSD-Karte wieder her, indem Sie den folgenden Befehl eingeben: ``sudo dd bs=1m if=~/Desktop/Backup_Jeedom.img of=/dev/disk1`` *Hinweis: In diesem Beispiel lautet der Laufwerksname der Karte `/dev/disk1`, daher muss in den Befehl zum Speichern Folgendes eingegeben werden: \`/dev/disk1\`*

## Unter Linux

### Sicherung

- Um das Laufwerk zu finden, das der Karte entspricht, öffnen Sie ein Terminal und geben Sie folgenden Befehl ein: ``sudo fdisk -l | grep Dis``
    ````
    $ sudo fdisk -l | grep Dis
    Disk /dev/sda: 320.1 GB, 320072933376 bytes
    Disk /dev/sdb: 16.0 GB, 16012804096 bytes
    Disk /dev/sdc: 8.0 GB, 8006402048 bytes
    ````
- Starten Sie die Erstellung des Images, indem Sie folgenden Befehl eingeben: ``sudo dd if=/dev/sdc of=Backup_Jeedom.img bs=1m`` *Hinweis: In diesem Beispiel lautet der Name des Festplattenlaufwerks der Karte /dev/sdc.*

### Wiederherstellung

- Um das Laufwerk zu finden, das der Karte entspricht, öffnen Sie ein Terminal und geben Sie folgenden Befehl ein: ``sudo fdisk -l | grep Dis``
- Entfernen Sie die Partitionen von der Festplatte, indem Sie den folgenden Befehl eingeben (ersetzen Sie dabei das X durch die Nummern der Partitionen): ``sudo umount /dev/sdcX``
- Stellen Sie das Image auf der microSD-Karte wieder her, indem Sie den folgenden Befehl eingeben: ``sudo dd if=Backup_Jeedom.img of=/dev/sdc bs=1m`` *Hinweis: In diesem Beispiel lautet der Name des Festplattenlaufwerks der Karte /dev/sdc.*
