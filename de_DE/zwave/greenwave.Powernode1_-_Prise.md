Greenwave PowerNode - 1 Stecker 
=============================



-   **Das Modul**



![module](images/greenwave.Powernode1/module.jpg)



-   **Das Jeedom Visual**



![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)



Zusammenfassung 
------



Das PowerNode-Steckermodul von GreenWave ist ein intelligentes Gerät, das
verbindet sich mit einem Ihrer Haushaltsgeräte und Elektronik zu
Mit dieser Funktion können Sie den Stromverbrauch bei überwachen und steuern
Entfernung über Webbrowser oder Smartphone.

Unter Verwendung der Z-Wave-Technologie ist die PowerNode-gesteuerte Steckdose
Kompatibel mit den meisten Hausautomationsboxen auf dem Markt wie Fibaro
Home Center 2, Eedomus oder Zipabox.

Das PowerNode-Steckermodul sammelt Verbrauchsdaten
Energie vom angeschlossenen Gerät und überträgt sie an die Hausautomationsbox.
Mit dieser kontrollierten Steckdose können Sie auch aktivieren oder deaktivieren
das Gerät aus der Ferne über einen Webbrowser oder ein Smartphone oder ein Gerät
einen Kalender zum automatischen Aktivieren oder Deaktivieren Ihres Geräts
zu vordefinierten Zeiten.

Mit einem kleinen Rad an der Seite der Steckdose können Sie eine Farbe auswählen
Dies wird den Raum darstellen, dem es zugewiesen ist. Zum Beispiel "
blau für das schlafzimmer ". Mit diesem Tipp können Sie Ihre unterscheiden
verschiedene PowerNode-Sockets und mehrere Sockets. Wir können uns auch anpassen
Dieses Rad auf einem Vorhängeschloss. Mit dieser Funktion können Sie die sperren
genommen, um ein versehentliches Ausschalten zu vermeiden, aber steuern von
Heimautomationsboxen ist nicht mehr möglich.

Die PowerNode-gesteuerte Steckdose verfügt auch über eine Statusanzeige
hell, was je nach Farbe unterschiedliche Informationen liefert :
Steckdosen ein oder aus, begrenzte Funkreichweite, Einschlussmodus und
exclusion.

Das PowerNode-Steckermodul ist mit einem Schutz gegen ausgestattet
Überströme zum Schutz des angeschlossenen Geräts. Die PowerNode-Buchse wird
bei defektem Gerät deaktiviert oder
Kurzschluss. Zusätzlichen Schutz bietet die Sicherung
intern befindet sich in der Steckdose.



Funktionen 
---------



-   Steuern Sie eine Lampe oder ein Gerät fern

-   Steckermodul direkt zwischen Steckdose und integriert
    die Ladung auf Bestellung

-   Ermöglicht die Überwachung des Verbrauchs des angeschlossenen Geräts

-   EIN / AUS-Funktion

-   Möglichkeit, ihm eine Nummer und eine Farbe zuzuweisen, um
    Unterscheiden Sie zwischen den verschiedenen PowerNodes derselben Installation

-   Ein / Aus-Taste direkt an der Steckdose

-   Überstromschutz

-   Lichtstatusanzeige



Technische Daten 
---------------------------



-   Versorgung : 250 V AC, 50 Hz

-   Maximaler Ladestrom : 10A

-   Maximale Lastleistung : 2400 W (bei 240 V)

-   Standby-Verbrauch : 0,4 W.

-   Messgenauigkeit : ± 0,1 W.

-   Überstromschutz : 10A interne Sicherung

-   Steckertyp : DIN49440 / EWG 7/7 (Schuko)

-   Z-Wave-Radiofrequenz : 868,42 MHz

-   Maximale Reichweite Z-Wave : 30m

-   Betriebstemperatur : 0 ° C bis + 25 ° C

-   Lagertemperatur : -20 ° C bis + 60 ° C

-   Maximale Luftfeuchtigkeit : 5% bis 90%

-   IP-Klasse (Feuchtigkeitstoleranz) : IP20



Moduldaten 
-----------------



-   Machen Sie : GreenWave

-   Name : GreenWave \ [1 x Stecker \]

-   Hersteller ID : 153

-   Produkttyp : 2

-   Produkt-ID : 2



Konfiguration 
-------------



So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).



> **Wichtig**
>
> Drücken Sie die Taste, um dieses Modul in den Einschlussmodus zu versetzen
> Einschluss unter der Steckdose vorhanden.



![inclusion](images/greenwave.Powernode1/inclusion.jpg)



Einmal enthalten, sollten Sie dies erhalten :



![Plugin Zwave](images/greenwave.Powernode1/information.jpg)



### Befehle 



Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
disponibles.



![Befehle](images/greenwave.Powernode1/commandes.jpg)



Hier ist die Liste der Befehle :



-   Zustand : Es ist der Befehl, mit dem der Status des
    prise

-   Ein : Dies ist der Befehl, der die Steckdose einschaltet

-   Aus : Es ist der Befehl, der es ermöglicht, den Fang zu löschen

-   Macht : Es ist die Steuerung, die die momentane Kraft erhöht
    verbraucht

-   Verbrauch : Es ist die Bestellung, die den Gesamtverbrauch angibt



Beachten Sie, dass im Dashboard die Befehle ON / OFF / STATUS zusammengefasst sind
in einer Taste.



### Konfiguration des Moduls 



Sie können das Modul entsprechend Ihrer Konfiguration konfigurieren
Installation. Dies erfordert das Durchlaufen der Schaltfläche "Konfiguration" des
Jeedom OpenZwave Plugin.



![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)



Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)



![Config1](images/greenwave.Powernode1/config1.jpg)



Wie Sie sehen, gibt es nicht viel Konfiguration
für dieses Modul.



Parameterdetails :



-   1 : Verzögerung, bevor die Taste blinkt : Anzahl der Sekunden
    Minimum zwischen zwei Kommunikationen (wenn diese Verzögerung überschritten wird, die Taste
    der Steckdose blinkt)

-   2 : Ausgewählte Radfarbe (automatisch erkannt)



### Gruppen 



Dieses Modul hat vier Zuordnungsgruppen, nur die 3. Gruppe
indispensable.



![Groupe](images/greenwave.Powernode1/groupe.jpg)



Gut zu wissen 
------------



Im Gegensatz zu seiner großen Schwester Mehrfachsteckdose benötigt diese Steckdose nicht
Umfragen zur Steigerung des Verbrauchs.



### Zurücksetzen 



![Config2](images/greenwave.Powernode1/config2.jpg)



Sie können Ihre Verbrauchsanzeige zurücksetzen, indem Sie auf klicken
auf dieser Schaltfläche auf der Registerkarte System verfügbar. Du musst wählen
PressButton.



### Besonderheiten 



Aufwachen 
------



Keine Vorstellung von Aufwecken auf diesem Modul.



Faq. 
------



Haben Sie Gruppe 3 des Moduls mit Jeedom verknüpft? ?



Nein, nein. Das Modul erlaubt es nicht. Legen Sie ein kleines Stück Band darauf
schwarzer Kleber.



**@sarakha63**
