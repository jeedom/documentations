# Ematronics-Komponente

## Finden der Remote-ID

### Gehen Sie zu „Plugins“, „Plugin-Verwaltung“, „RFX COM"

![image07](images/volet.ematronic/image07.png)

### Unter „RFXcom-Protokollverwaltung"

![image04](images/volet.ematronic/image04.png)

Überprüfen Sie Protokoll 8, BlindsT1, Speichern und Beenden.

![image08](images/volet.ematronic/image08.png)

### Aktivieren Sie „Im Debug-Modus starten"

![image03](images/volet.ematronic/image03.png)

Warten Sie, bis sich das Fenster öffnet, und drücken Sie dann die Öffnen-Taste auf Ihrer Ematronic-Fernbedienung.

````
MainThread - rfxcmd:2765 - DEBUG - Test message: 09 19 03 01 1F 84 B9 01 01 60
MainThread - rfxcmd:2805 - DEBUG - Message OK
MainThread - rfxcmd:328 - DEBUG - Verified OK
MainThread - rfxcmd:334 - DEBUG - PacketType: 19
MainThread - rfxcmd:338 - DEBUG - SubType: 03
MainThread - rfxcmd:342 - DEBUG - SeqNbr: 01
MainThread - rfxcmd:346 - DEBUG - Id1: 1F
MainThread - rfxcmd:350 - DEBUG - Id2: 84
MainThread - rfxcmd:359 - DEBUG - Verify correct packet length
MainThread - rfxcmd:556 - DEBUG - Save packet to log_msgfile
````

### Finden Sie die Fernbedienungs-ID

Remarque: Ematronic-Fernbedienungen beginnen immer mit : 09 19 03 also beginnt der Bereich der uns interessiert ab "Testmeldung" : 09 19 03.

Stelle : Id1 und Id2 und fügen Sie die folgende Hexadezimalzahl hinzu : in meinem Beispiel Id1=1F und Id2=84. Sie müssen sie also in der Zeile „Testmeldung“ suchen und die Id3 extrahieren, hier Id3=B9. Unsere Fernbedienung hat also die ID ⇒ 1F84B9.

### Beenden Sie den Debug-Modus mit der Schaltfläche „Dämon stoppen/neu starten“"

![image06](images/volet.ematronic/image06.png)

## Erstellung der Fernbedienung unter JeeDom

Gehen Sie zu Plugins, Domotic-Protokoll, RFXcom.

![image10](images/volet.ematronic/image10.png)

Klicken Sie auf „Hinzufügen“ und geben Sie einen Namen für Ihre virtuelle Fernbedienung ein.

![image00](images/volet.ematronic/image00.png)

Wählen Sie die Vorlage aus der Geräteliste aus : "Ematronic-Klappe - Störung".

Ersetzen Sie die automatische ID durch die zuvor extrahierte und aktivieren Sie „Aktivieren“ und „Sichtbar“" :

![image11](images/volet.ematronic/image11.png)

Klicken Sie auf „Speichern“, um Ihre Konfiguration zu speichern und die Vorlage „Volet Ematronic - Default“ zu laden".

![image02](images/volet.ematronic/image02.png)

Hier ist Ihre Fernbedienung fertig, sie sollte so aussehen :

![image05](images/volet.ematronic/image05.png)

## Verknüpfen Sie Ihre virtuelle JeeDom-Fernbedienung mit Ihrem Ematronic-Motor

### Motor zurückgesetzt

-   Trennen Sie den Motor elektrisch.
-   Lassen Sie auf der Original-Fernbedienung die „Up“-Taste 3 oder 4 Sekunden lang gedrückt, die LED leuchtet dauerhaft rot.
-   Schließen Sie den Motor elektrisch an.
-   Lassen Sie die Taste auf der Fernbedienung los.
-   Der Motor piepst 5 mal.
-   Drücken Sie schnell mit einer Büroklammer auf die "Mikrotaste" auf der Rückseite der Fernbedienung.
-   Der Motor piepst 3 Mal.

## Verbindung der virtuellen Fernbedienung JeeDom mit dem Ematronic-Motor

-   Trennen Sie den Motor elektrisch.
-   Lassen Sie auf der Original-Fernbedienung die „Up“-Taste 3 oder 4 Sekunden lang gedrückt, die LED leuchtet dauerhaft rot.
-   Schließen Sie den Motor elektrisch an.
-   Lassen Sie die Taste auf der Fernbedienung los.
-   Der Motor piepst 5 mal.
-   Drücken Sie den Befehl „Mount“ auf der virtuellen JeeDom-Fernbedienung.
[Bild](images/volet.ematronic/image09.png)
-   Der Motor piept dreimal, um anzukündigen, dass Ihr JeeDoom verbunden ist !!
