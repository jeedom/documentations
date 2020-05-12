Fibaro Dimmer - REA-211 
=======================



-   **Das Modul**



![module](images/fibaro.fgd211/module.jpg)



-   **Das Jeedom Visual**



![vuedefaut1](images/fibaro.fgd211/vuedefaut1.jpg)



Zusammenfassung 
------



Mit dem Dimmermodul FGD-211 können Sie a steuern
Lampe oder Deckenleuchte aus der Ferne dank des Z-Wave-Protokolls während
Behalten Sie Ihren vorhandenen Schalter.

Sie können daher die angeschlossene Lampe aktivieren und variieren
Intensität mit dem vorhandenen Schalter, einem Z-Wave-Sender oder
direkt von der Taste am Mikromodul. Er ist
Kompatibel mit jeder Art von Lampe, die Variationen unterstützt
(Glühlampe, Fluo-Compact, LED,…). Das Fibaro-Dimmermodul
ist ein Konzentrat der Technologie, es erkennt automatisch die Art von
angeschlossene Last und ist gegen Überspannung geschützt.

Für Leuchtstofflampen, die keine Variation unterstützen, ist die
Das Modul fungiert dann automatisch als Schaltmodul (EIN / AUS)
uniquement).

Es kann im 2-Draht-Modus (ohne Neutralleiter) verwendet werden und ersetzt a
vorhandener Schalter oder drei Drähte mit herkömmlicher Stromversorgung von
Modul (Phase + Neutral).

Für Lampen mit sehr geringem Verbrauch (LED-Lampe von
Beispiel) können Sie die FGB-001-Last (Bypass) verwenden, die dies ermöglicht
korrekter Betrieb des Moduls. Eine Z-Wave-Steuerung (Fernbedienung),
Dongle…) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren
wenn Sie bereits ein vorhandenes Netzwerk haben. Jedes Z-Wave-Modul funktioniert
als drahtloser Repeater mit den anderen Modulen zu gewährleisten
Gesamtabdeckung Ihres Hauses.



Funktionen 
---------



-   Fernbeleuchtung

-   Wird hinter einem vorhandenen Switch installiert

-   EIN / AUS und Variationsfunktion

-   Verwendung im 2-Draht-Modus (Neutralleiter nicht erforderlich)

-   Automatische Lasterkennung

-   Geschützt gegen Überlastung

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation



Technische Daten 
---------------------------



-   Modultyp : Z-Wave Empfänger

-   Versorgung : 230 V, 50 Hz

-   Verkabelung : Neutral nicht erforderlich

-   Maximale Belastung : 25-500W (ohmsche Last) oder 1.5A (induktive Last)

-   Kompatibler Lampentyp (dimmbar) : Glühlampe, Fluocompact,
    Halogen (230VAC und 12VDC mit elektronischem Transformator), LED

-   Kompatibler Lampentyp (nicht dimmbar) : Kompaktleuchtstoff, LED

-   Sicherung : 2.5A

-   Frequenz : 868,42 MHz

-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen

-   Dimensions: 15 x 42 x 36 mm

-   Betriebstemperatur : 0-40 ° C

-   Temperatur begrenzen : 105°C

-   Standards : EN 55015 und EN 60669-2-1



Moduldaten 
-----------------



-   Machen Sie : Fibar Group

-   Name : Fibaro FGMS-001 \ [Bewegungssensor \]

-   Hersteller ID : 271

-   Produkttyp : 256

-   Produkt-ID : 4106



Konfiguration 
-------------



So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).



> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste dreimal
> Einschlussknopf gemäß seiner Papierdokumentation.



![inclusion](images/fibaro.fgd211/inclusion.jpg)



> **Spitze**
>
> Wenn Sie Ihr Modul bereits an der Wand integriert haben, können Sie es einbinden
> durch viele hin und her auf dem Schalter oder viele
> Drücken Sie, wenn Sie einen Druckknopfschalter haben.



Einmal enthalten, sollten Sie dies erhalten :



![Plugin Zwave](images/fibaro.fgd211/information.jpg)



### Befehle 



Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
disponibles.



![Befehle](images/fibaro.fgd211/commandes.jpg)



Hier ist die Liste der Befehle :



-   Intensität : Mit diesem Befehl können Sie die Intensität des einstellen
    Licht

-   Ein : Es ist die Steuerung, die das Licht einschaltet

-   Aus : Es ist der Befehl, der das Licht ausschaltet

-   Zustand : Es ist der Befehl, mit dem der Status des
    Licht

Beachten Sie, dass sich im Dashboard alle Informationen auf derselben befinden
icone



### Konfiguration des Moduls 



Sie können das Modul entsprechend Ihrer Konfiguration konfigurieren
Installation. Dies erfordert das Durchlaufen der Schaltfläche "Konfiguration" des
Jeedom OpenZwave Plugin.



![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)



Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)



![Config1](images/fibaro.fgd211/config1.jpg)

![Config2](images/fibaro.fgd211/config2.jpg)

![Config3](images/fibaro.fgd211/config3.jpg)



Parameterdetails :



-   1: ALL ON / ALL OFF-Funktionen : wird nur verwendet, wenn Sie die zugeordnet haben
    REA-211 zu einem anderen Modul

-   6: Nehmen wir an, wie Informationen an die Gruppe gesendet werden
    Verein 1

-   7: ermöglicht es, den Status des zugeordneten Moduls vorher zu überprüfen oder nicht
    eine Bestellung senden

-   8: ermöglicht die Definition des Prozentsatzes der Variation (auto)

-   9: Dauer der Variation zwischen den beiden Extremen (manuell)

-   10: Dauer der Variation zwischen den beiden Extremen (auto)

-   11: ermöglicht die Definition des Prozentsatzes der Abweichung (manuell)

-   12: ermöglicht die Definition der maximal autorisierten Ebene

-   13: ermöglicht das Definieren der autorisierten Mindeststufe

-   14: WICHTIGE EINSTELLUNG : ermöglicht die Wahl zwischen Schalter
    BISTABLE oder MONOSTABLE (Druckknopf)

-   15: Aktiviert die Option, mit der die Helligkeit auf das Maximum eingestellt werden kann
    bei doppelter Presse (oder zurück auf bistabil)

-   16: Option zum Aktivieren der Speicherung des letzten Status

-   17: Hier können Sie zwischen dem Hin- und Her-Modus und wählen
    Fernbedienungsschalter

-   18: Ermöglicht die Synchronisierung des Variationsgrads mit anderen
    zugehörige Laufwerke

-   19: Betriebsart des bistabilen Schalters (Rückwärtsfahrt)
    oder nicht)

-   20: Ermöglicht die Einstellung des Mindestpegels für LEDS-Lampen
    zum Beispiel dimmbar

-   30: ermöglicht die Definition der Betriebsart des Moduls bei
    Empfang eines Rundfunkalarmsignals

-   39: Alarmdauer definiert in Parameter 30

-   41: Ermöglicht das Aktivieren oder Nicht-Aktivieren der Szenenaktivierungsfunktion



### Gruppen 



Dieses Modul hat drei Assoziationsgruppen, nur die dritte ist
indispensable.



![Groupe](images/fibaro.fgd211/groupe.jpg)



Gut zu wissen 
------------



### Besonderheiten 



> **Kaution**
>
> Der wichtigste Parameter der Konfiguration ist 14. Es
> ermöglicht die Auswahl des verwendeten Schaltertyps. Standardtyp
> ist auf monostabil eingestellt.



Wenn Sie das Modul ausschließen / einschließen möchten, ohne es zu zerlegen
Schalter Sie können Ihren Schalter mehrmals drücken
(oder bei einem bistabilen Schalter hin und her gehen)



### Alternative visuelle 



![vuewidget](images/fibaro.fgd211/vuewidget.jpg)



Aufwachen 
------



Keine Vorstellung von Aufwecken auf diesem Modul.



Faq. 
------



Nein, nein. Dieses Modul kann durch mehrmaliges Drücken ein- oder ausgeschlossen werden
auf dem Schalter.


**@sarakha63**
