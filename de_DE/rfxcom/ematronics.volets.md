Suchen der Fernbedienungs-ID 
====================================

Gehen Sie zu "Plugins", "Plugins-Verwaltung", "RFX COM"" 
------------------------------------------------------

![image07](images/volet.ematronic/image07.png)

In "Verwaltung von RFXcom-Protokollen", 
-------------------------------------

![image04](images/volet.ematronic/image04.png)

Überprüfen Sie Protokoll 8, BlindsT1, Speichern und beenden.

![image08](images/volet.ematronic/image08.png)

Aktivieren Sie "Im Debug-Modus starten"" 
-------------------------------

![image03](images/volet.ematronic/image03.png)

Warten Sie, bis sich das Fenster öffnet, und drücken Sie dann die Taste Öffnen
Ihre Ematronic-Fernbedienung.

    :2765 - DEBUG - Testnachricht: 
    :2805 - DEBUG - Meldung OK
    :328 - DEBUG - Verifiziert OK
    :: 19
    :: 03
    :: 01
    :: 
    :: 84
    :359 - DEBUG - Überprüfen Sie die korrekte Paketlänge
    :556 - DEBUG - Paket in log_msgfile speichern

Suchen Sie nach der Fernbedienungs-ID 
-------------------------------------

Bemerkung: Ematronic-Fernbedienungen beginnen immer mit : 
Der Bereich, der uns interessiert, beginnt also mit "Testnachricht"" : .

Spot : Id1 und Id2 und fügen Sie das folgende Hexadezimal hinzu : in meinem Beispiel
Id1 =  und Id2 = 84. Sie sollten sie also in der Zeile "Test
message "und extrahiere Id3, hier Id3 = B9, Unsere Fernbedienung hat
als ID ⇒ 84B9.

Stoppen Sie den Debug-Modus mit der Schaltfläche "Stop / Restart the Daemon"" 
-----------------------------------------------------------------

![image06](images/volet.ematronic/image06.png)

Erstellung der Fernbedienung unter JeeDom 
=======================================

Gehen Sie zu Plugins, Home Protocol, RFXcom.

![image10](images/volet.ematronic/image10.png)

Klicken Sie auf "Hinzufügen" und geben Sie einen Namen für Ihre Fernbedienung ein
virtuell.

![image00](images/volet.ematronic/image00.png)

Wählen Sie die Vorlage aus der Liste der Geräte : "Ematronischer Verschluss -
Standard".

Ersetzen Sie die automatische ID durch die zuvor extrahierte
und aktivieren Sie "Aktivieren" und "Sichtbar"" :

![image11](images/volet.ematronic/image11.png)

Klicken Sie auf "Speichern", um Ihre Konfiguration zu speichern und
Laden Sie die Vorlage "Ematronic-Komponente - Standard".

![image02](images/volet.ematronic/image02.png)

Hier ist Ihre Fernbedienung fertig, sie sollte so aussehen :

![image05](images/volet.ematronic/image05.png)

Verknüpfen Sie Ihre virtuell JeeDom-Fernbedienung mit Ihrer Ematronic-Engine: 
======================================================================

Motor zurückgesetzt: 
---------------------------

-   Den Motor elektrisch abklemmen.

-   Lassen Sie auf der Originalfernbedienung die Taste "Auf" 3 oder 4 gedrückt
    Sekunden leuchtet die LED rot.

-   Den Motor elektrisch anschließen.

-   Lassen Sie die Taste auf der Fernbedienung los.

-   Der Motor piept 5 Mal.

-   Drücken Sie schnell den "Mikroknopf" mit einer Büroklammer a
    die Rückseite der Fernbedienung.

-   Der Motor piept dreimal.

Zuordnung der virtuelln JeeDom-Fernbedienung zum Ematronic-Motor: 
====================================================================

-   Den Motor elektrisch abklemmen.

-   Lassen Sie auf der Originalfernbedienung die Taste "Auf" gedrückt. Drücken Sie 3 oder 4
    Sekunden leuchtet die LED rot.

-   Den Motor elektrisch anschließen.

-   Lassen Sie die Taste auf der Fernbedienung los.

-   Der Motor piept 5 Mal.

-   Drücken Sie den Befehl "Mount" auf der virtuelln Fernbedienung von
    JeeDom. Bild::images / shutter.ematronic / image09.png \ [\]

-   Die Engine piept dreimal, um anzuzeigen, dass Ihr JeeDoom zugeordnet ist
    !!


