Fibaro FGFS-101? "Hochwassersensor" 
==============================

\.

-   **Das Modul**

\.

![module](images/fibaro.fgfs101/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/fibaro.fgfs101/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Der FGFS-101?-Sensor ist kompakt und verfügt über eine Vielzahl von
Funktionen. Mit seiner fortschrittlichen Technologie und Präzision ist der Sensor
Flood Fibaro warnt Sie vor einer drohenden Flut oder einem Anstieg
oder schneller Temperaturabfall.

Es ist mit einem Neigungssensor ausgestattet, der einen Alarm sendet
sofort zum Z-Wave-Netzwerk, wenn der Detektor bewegt oder gestohlen wird
(gibt die Neigung oder Rückmeldung an den Z-Wave-Controller zurück
mouvement).

Dieser universelle Hochwasser- und Temperaturdetektor kann mit Strom versorgt werden
durch Batterie? oder durch eine externe 12 oder 24 VDC Stromversorgung. Wenn er ist
An eine externe Stromquelle angeschlossen, dient die Batterie? als Quelle
Notstromversorgung.

Dank seines Temperatursensors können Sie die Temperatur von steuern
dein Boden. Es ist wasserdicht, im Hochwasser schwimmt es auf der Oberfläche von
l'eau.

Es hat auch einen Sirenenalarm, der im Falle von ertönen kann
Problem. Sie können den Trockenkontaktausgang an ein System anschließen
vorhandener Alarm. Eine Front-LED zur Überprüfung des Status der
FGFS-101.

Dieser Sensor enthält einen Z-Wave-Netzwerkbereichstester, mit dem Sie
stellt die korrekte Funktion des Sensors während seiner Installation sicher.

\.

Funktionen 
---------

\.

-   Hochwassermelder (Vorhandensein von Wasser über Kontakte)

-   Temperaturdetektor

-   Neigungsdetektor

-   Akustischer und visueller Alarm

-   Z-Wave-Entfernungsmesser

-   Z-Wave Repeater ?? (siehe Abschnitt "Gut zu wissen")

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Sender

-   Das Modul kann extern mit Strom versorgt werden : 12 - 24 VDC

-   Batterie?typ : CR123A

-   Akkulaufzeit : 2 Jahre

-   Verbrauch an externer Stromversorgung : 0,4 W.?

-   Maximal am Ausgang unterstützter Strom (ALARM NC, TAMP NC) :25mA

-   Maximale am Ausgang unterstützte Spannung : 40 V (AC oder DC)

-   Frequenz : 868,42 MHz

-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen

-   Abmessungen : 72 x 28 mm (Durchmesser x Höhe)

-   Betriebstemperatur : 0-40 ° C (-20 ° C bis 70 ° C, wenn
    externe Stromversorgung)

-   Temperaturmessbereich : -20 bis 100 ° C.

-   Messgenauigkeit : 0,5 ° C (in einem Bereich von 0 bis 40 ° C)

-   Standards : EMC 2004/108 / EC und R & TTE 199/5 / WE

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Fibar Group

-   Modell : Hochwassersensor FGFS101

-   Hersteller? : FIBARO-System

-   Hersteller ID : 271

-   Produkttyp : 2816

-   Produkt-ID : 4097

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Important**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste dreimal
> zentraler Einschlussknopf, identifiziert TMP, gemäß seiner Dokumentation
> Papier (die schwarze Lasche).

\.

![Vue interieur](images/fibaro.fgfs101/Vue_interieur.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/fibaro.fgfs101/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
disponibles.

\.

![Befehle](images/fibaro.fgfs101/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Leck? : Dies ist der Modulalarmbefehl (für die Anwesenheit
    Wasser, Überschwemmungen ...)

-   Temperatur : Es ist der Temperaturmessbefehl

-   Sabotage? : Dies ist der Sabotage?befehl. Es signalisiert die Öffnung
    des Falles

-   Batterie? : Es ist der Batterie?befehl

\.

### Konfiguration des Moduls 

\.

> **Important**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer gleich danach auf
> Einbeziehung?.

\.

Dann muss das Modul in konfiguriert werden
abhängig von Ihrer Installation. Dies erfordert das Durchgehen der Schaltfläche
"Konfiguration "des OpenZwave-Plugins von Jeedom.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/fibaro.fgfs101/config1.jpg)

![Config2](images/fibaro.fgfs101/config2.jpg)

\.

Parameterdetails :

\.

-   Aufwachen : Dies ist das Modul-Aufweckintervall (Wert
    empfohlen 21600)

-   1 \. Verzögerung der Alarmstornierung nach Erkennung einer Überschwemmung :
    valeur de 0 à 3600 s (0 par défaut/ dès qu‘il n'y a plus de détection il
    stoppt sofort)

-   2 \. Wahl des Alarmtyps. Wert :

        0 : Akustischer und optischer Alarm deaktiviert
        1 : Akustischer Alarm deaktiviert und visueller Alarm aktiviert
        2 : Akustischer Alarm ein und visueller Alarm aus
        3 : Akustischer und visueller Alarm aktiviert.

-   10 \. Übertragungszeit zwischen zwei Temperaturmesswerten : 1 bis 65.535 s
    (Standardmäßig 300). Achten Sie darauf, keinen Übertragswert zu setzen
    nahe beieinander unter der Strafe, dass die Batterie? des Moduls überhaupt schmilzt
    Geschwindigkeit? ! (1800 wird empfohlen)

-   12 \. Temperaturunterschied zwischen zwei Berichten : von 1 bis 1000 (standardmäßig 50
    = 0,5 °). Gemäß Parameter 10 ist dies auch möglich
    Verwalten Sie die Temperaturübertragung entsprechend der Variation von
    diese letzten.

-   50 \. Einstellen des Niedertemperaturalarms : von -10000 bis + 10000
    (Standardmäßig 1500 = 15 ° C) Wird verwendet, um einen Alarm auszulösen, wenn die
    Temperatur fällt unter einen bestimmten Schwellenwert.

-   51.Hochtemperaturalarm einstellen : von -10000 bis + 10000
    (Standardmäßig 3500 = 35 ° C) Wird verwendet, um einen Alarm auszulösen, wenn die
    Temperatur überschreitet einen bestimmten Schwellenwert.

-   73 \. Temperaturkompensation : von -10000 bis + 10000 (standardmäßig 0)
    = 0 ° C) Wird verwendet, um einen Versatz zwischen der Sensortemperatur und zu definieren
    die tatsächliche Temperatur

-   75 \. Einstellen der Dauer des Alarms : von 0 bis 65535s (standardmäßig 0,
    Der Alarm stoppt, sobald kein Fehler mehr erkannt wird.)

\.

### Gruppen? 

\.

Für einen optimalen Betrieb Ihres Moduls. Jeedom muss sein
zumindest mit den Gruppen 1, 4 und 5 verbunden:

\.

![Groupe](images/fibaro.fgfs101/groupe.jpg)

\.

Gut zu wissen 
------------

Dieses von außen betriebene Modul kann als Repeater verwendet werden
Z-Welle (Informationen derzeit nicht bestätigt)

Die Verkabelung für eine externe Stromversorgung. \.

![Alim Exterieur](images/fibaro.fgfs101/Alim_Exterieur.jpg)

\.

Aufwachen 
------

\.

Um dieses Modul zu aktivieren, drücken Sie dreimal die zentrale Taste

\.

Faq. 
------

\.

Dieses Modul wird durch dreimaliges Drücken der Einschlusstaste aktiviert.

\.

Dieses Modul ist standardmäßig ein Batterie?modul, das neue
Die Konfiguration wird beim nächsten Aufwecken berücksichtigt.

\.

Wichtiger Hinweis 
---------------

\.

> **Important**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung
> der Konfiguration, nach einer Änderung des Aufweckens, nach a
> Änderung der Assoziationsgruppen

\.

\.
Verwendungsdetails :
<http://blog.domadoo.fr/2014/12/18/jeedom-guide-dutilisation-du-detecteur-dinondation-fibaro-fgfs-001/>
Fibaro-Dokumentation :
<http://www.fibaro.com/manuals/en/FGFS-101-Flood-Sensor/FGFS-101-Flood-Sensor-en-2.1-2.3.pdf>

\.

