Fibaro FGSD-002 "Rauchsensor 2" 
================================

\.

-   **Das Modul**

\.

![module](images/fibaro.fgsd102/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/fibaro.fgsd102/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Mit weichen Linien, einer polierten Oberfläche und einer geringen Größe
Mit dem Rauchmelder können Sie auf eine Bedrohung mit aufmerksam gemacht werden
Mehrfarbige RGB-LEDs und eine integrierte Sirene. Das große Format der
Gitter kann so die kleinste Rauchmenge erkennen
schnell reagieren. Es wird also sehr leicht seine finden
Platzieren Sie es in Ihrem Haus, um die Sicherheit des Ganzen zu gewährleisten
famille.

Der Rauchmelder Fibaro FGSD-002 ist ein Alarmmelder
Autonomer Rauch (DAAF) gemäß Norm EN 14604:2005. Gut
So autonom kommuniziert es auch dank der Z-Wave-Technologie
Plus.

Einige Materialien brennen ohne zu rauchen. Deshalb die Ingenieure bei
Fibaro hat beschlossen, zusätzlichen Schutz in ihre aufzunehmen
Rauchmelder in Form eines Temperatursensors. Wenn die
Nicht genug Rauch, um Alarm zu schlagen,
Das Gerät kann weiterhin eine Bedrohung durch Erkennen erkennen
eine schnelle Änderung der Temperatur durch Feuer verursacht. Eine Veränderung
Ein schneller Temperaturanstieg oder -anstieg auf 54 ° C ist ausreichend
damit der Rauchsensor eine Bedrohung erkennt und an meldet
Bewohner des Hauses. Nur diese Art von Rauchsensor bietet
hohe Effizienz, unabhängig davon, was brennt.

\.

Funktionen 
---------

\.

-   Z-Wave Rauchmelder

-   Batteriebetrieben

-   Einstellbare Sensorempfindlichkeit (3 Stufen)

-   Manipulationsschutz

-   Alarm durch Ton, LED-Licht und Z-Wave-Signal

-   Branderkennung durch Messung der Lufttemperatur

-   Automatischer Effizienztest, alle 5 Sekunden durchgeführt

-   Integrierter Z-Wave-Netzabdeckungstester

-   Entspricht der Norm EN 14604:2005

-   Z-Wave Plus kompatibel

-   Sehr einfache Installation - installieren Sie es einfach an einem Ort
    oder es besteht Brandgefahr

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Sender

-   Versorgung : 3V CR123A Lithiumbatterie

-   Akkulaufzeit : 3 Jahre

-   Frequenz : 868,42 MHz

-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen

-   Abmessungen : 65 x 28 mm (Durchmesser x Höhe)

-   Betriebstemperatur : 0-55 ° C.

-   Betriebsfeuchtigkeit : 0% - 93%

-   Temperaturmessbereich : -20 bis 100 ° C.

-   Rauchempfindlichkeit : 1. Stufe - 1,20 +/- 0,5% obs / m; 2 ..
    Niveau - 1,80 +/- 0,5% obs / m; 3. Stufe - 2,80 +/- 0,5% obs / m

-   Geräuschpegel: 85 dB bei 3 m

-   Messgenauigkeit : 0,5 ° C (in einem Bereich von 0 bis 55 ° C)

-   Standards : EMC 2004/108 / EC und R & TTE 199/5 / WE

-   Zertifizierungen : EN 14604:2005

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Fibar Group

-   Name : Fibaro Rauchsensor FGSD-002

-   Hersteller ID : 271

-   Produkttyp : 3074

-   Produkt-ID : 4098

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
> zentraler Einschlussknopf gemäß Papierdokumentation.

\.

![inclusion](images/fibaro.fgsd102/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/fibaro.fgsd102/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
disponibles.

\.

![Befehle](images/fibaro.fgsd102/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Rauch : Dies ist der Modul-Alarmbefehl (für Rauch,
    Hitze…)

-   Temperatur : Es ist der Temperaturmessbefehl

-   Sabotage : Dies ist der Sabotagebefehl. Es signalisiert die Öffnung
    des Falles

-   Testalarm : Es ist der Befehl, der die Tatsache aufzeigt, dass das Modul
    ist im Testmodus

-   Hitzealarm : Es ist die Steuerung, die einen Wärmealarm auslöst
    (noch nicht zuverlässig)

-   Batterie : Es ist der Batteriebefehl

\.

### Konfiguration des Moduls 

\.

> **Important**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer gleich danach auf
> Einbeziehung.

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

![Config1](images/fibaro.fgsd102/config1.jpg)

![Config2](images/fibaro.fgsd102/config2.jpg)

\.

Parameterdetails :

\.

-   Aufwachen : Dies ist das Modul-Aufweckintervall (Wert
    empfohlen 21600)

-   1: Passt die Empfindlichkeit der Raucherkennung an

-   2: Hier können Sie auswählen, welche Benachrichtigungen an Jeedom gesendet werden sollen
    (Rat : toutes)

-   3: Hier können Sie auswählen, welche Benachrichtigungen von einem begleitet werden sollen
    visuelle Anzeige

-   4: Hier können Sie auswählen, welche Benachrichtigungen von einem begleitet werden sollen
    akustische Anzeige (in allen Fällen die Wärmemelder und
    das Modul klingelt)

-   10: Ändern Sie diese Einstellung nur, wenn Sie wissen, was Sie tun
    faites

-   11: idem

-   12: idem

-   13: ermöglicht das Benachrichtigen anderer zwave-Module (zum Deaktivieren, es sei denn
    Sie wissen, warum Sie es aktivieren)

-   20: Zeit zwischen zwei Temperaturberichten

-   21: Temperaturunterschied von dem, auch wenn die Dauer
    von oben nicht erreicht wird, wird die Temperatur an Jeedom gesendet

-   30: Temperatur des Wärmealarmauslösers

-   31: Berichtsintervall für Temperaturspitzen

-   32: Signalintervall bei Verlust von Zwave

\.

### Gruppen 

\.

Für einen optimalen Betrieb Ihres Moduls. Jeedom muss sein
zumindest mit den Gruppen 1 4 und 5 verbunden:

\.

![Groupe](images/fibaro.fgsd102/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

\.

### Alternative visuelle 

\.

![widget1](images/fibaro.fgsd102/widget1.jpg)

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

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird sein
beim nächsten Aufwachen berücksichtigt.

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

**@sarakha63**
