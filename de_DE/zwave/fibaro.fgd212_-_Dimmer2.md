# Fibaro Dimmer2 - FGD-212

-   **Das Modul**

![module](images/fibaro.fgd212/module.jpg)

-   **Das Jeedom-Visual**

![vuedefaut1](images/fibaro.fgd212/vuedefaut1.jpg)

Zusammenfassung 
------

Mit dem Dimmer-Mikromodul FGD-212 können Sie a
Remote-Lampe oder Deckenleuchte dank des Z-Wave-Protokolls während
Beibehaltung Ihres vorhandenen Schalters.

So können Sie die angeschlossene Leuchte bedienen und variieren
Intensität über den vorhandenen Schalter, einen Z-Wave-Sender oder
direkt über die Taste auf dem Mikromodul.

Der neue Fibaro FGD-212 Dimmer ist mit einem Algorithmus von ausgestattet
Intelligente Erkennung der Lichtquelle, die das erleichtert
Konfiguration und gewährleistet eine hohe Gerätekompatibilität. Er
hat Selbstüberlastungsschutz und die Funktion von
weicher Start. Für nicht dimmbare Lichtquellen,
nur die EIN/AUS-Funktion ist möglich (bei 3-Leiter-Anschluss)).

Es ist mit allen Arten von Lampen kompatibel, die Dimmen oder Dimmen unterstützen
nö. Neben der Dimmfunktion kann dieses Mikromodul auch
Messen Sie den Stromverbrauch der angeschlossenen Last. Werte
Momentanverbrauch (in W) und der Gesamtstromverbrauch
(in kWh) eingesehen werden.

Fonctions
---------

-   Steuern Sie die Beleuchtung aus der Ferne

-   Wird hinter einem vorhandenen Switch installiert

-   EIN/AUS- und Dimmfunktion

-   Verwendung im 2-Draht-Modus (Nullleiter nicht erforderlich)

-   Integriert den Chip der Z-Wave 500-Serie

-   250 % schnellere Kommunikation im Vergleich zu Z-Wave-Geräten
    standard

-   Automatische Lasterkennung

-   Geschützt gegen Überlastung

-   Kompatibel mit allen Z-Wave- und Z-Wave+-Controllern

-   Wirkleistungs- und Energiemessfunktion

-   Funktioniert mit verschiedenen Arten von Schaltern - Druckknopf,
    Knebel, Dreiweg usw.

-   Soft-Start-Funktion)

-   Statusanzeige LED-Diode von Aufnahme, Kalibrierung und
    MENÜ-Ebenen

-   Integrierter Z-Wave-Reichweitentester

-   Erkennt automatisch Verdrahtungsfehler, hohe Temperatur,
    Glühbirne durchgebrannt, Überspannungen und Überlastungen

-   Erweiterte Setup-Optionen

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation

Technische Eigenschaften
---------------------------

-   Mod-Typ : Z-Wave-Empfänger

-   Einspeisung : 230 V +/- 10 %, 50 Hz

-   Verbrauch : 1,3 W

-   Verdrahtung : neutral nicht notwendig

-   Tragfähigkeit : 50-250 W (ohmsche Last) oder 0,25-1,1 A
    (induktive Last)

-   Kompatibler Lampentyp (dimmbar) : Glühlampen, Kompaktleuchtstofflampen,
    Halogen (230VAC und 12VDC mit elektronischem Trafo), LED

-   Kompatibler Lampentyp (nicht dimmbar) : Kompaktleuchtstoff, LED

-   Frequenz : 868,42 MHz

-   Signalstärke : 1mW

-   Übertragungsdistanz : 50m Freifeld, 30m drinnen

-   Maße : 42.5x38.25 x 20,3 mm

-   Betriebstemperatur : 0-35 °C

-   Temperatur begrenzen : 105°C

-   Normen : RoHS 2011/65/EU, LVD 2006/95/EG, EMV 2004/108/EG, R&TTE
    1999/5/EC

Moduldaten
-----------------

-   Markieren : Fibar-Gruppe

-   Nachname : FGD212 Dimmer 2

-   Hersteller-ID : 271

-   Geben Sie Produkt ein : 258

-   Produkt ID : 4096

Configuration
-------------

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einfügt
Inklusion beziehen sich darauf
[Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie dreimal auf drücken
> Opt-in-Schaltfläche gemäß der Papierdokumentation. Wenn die
> Modul nicht bereits enthalten ist, wird es enthalten sein
> automatisch beim Einschalten.

![inclusion](images/fibaro.fgd212/inclusion.jpg)

> **Tipp**
>
> Wenn Sie Ihr Modul bereits in die Wand integriert haben, können Sie es einbinden
> durch viele Rundfahrten auf der Weiche oder
> viele Pressen, wenn Sie einen Druckknopfschalter haben.

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgd212/information.jpg)

### Commandes

Sobald das Modul erkannt wird, werden die den Modulen zugeordneten Befehle angezeigt
disponibles.

![Aufträge](images/fibaro.fgd212/commandes.jpg)

Hier ist die Liste der Befehle :

-   Intensität : Dies ist der Regler, mit dem Sie die Intensität des einstellen können
    hell

-   Wir : Dies ist der Befehl, der das Licht einschaltet

-   Aus : Dies ist der Befehl, der das Licht ausschaltet

-   Bundesland : Dies ist der Befehl, der Sie über den Status der informiert
    hell

-   Verbrauch : Dies ist der Befehl, mit dem Sie die erhöhen können
    Modulverbrauch

-   Mächtig : Dies ist der Befehl, mit dem die Leistung erhöht werden kann
    Modul-Snapshot

Beachten Sie, dass auf dem Dashboard alle Informationen auf demselben zu finden sind
icone

### Modulkonfiguration

Sie können die Modulkonfiguration nach Ihren Wünschen vornehmen
Einrichtung. Gehen Sie dazu über die Schaltfläche "Konfiguration" auf der
OpenZwave-Plugin von Jeedom.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
die Einstellungen)

![Config1](images/fibaro.fgd212/config1.jpg)

![Config2](images/fibaro.fgd212/config2.jpg)

![Config3](images/fibaro.fgd212/config3.jpg)

![Config3](images/fibaro.fgd212/config4.jpg)

![Config3](images/fibaro.fgd212/config5.jpg)

Parameterdetails :

LAUFENDE SCHWÄRZUNG

### Groupes

Dieses Modul hat fünf Assoziationsgruppen, nur die erste ist
indispensable.

![Groupe](images/fibaro.fgd212/groupe.jpg)

Gut zu wissen
------------

### Besonderheiten

> **Kaution**
>
> Der wichtigste Parameter der Konfiguration ist 20. It
> ermöglicht die Auswahl des verwendeten Schaltertyps. Standardmäßig der Typ
> ist auf monostabil eingestellt.

Wenn Sie das Modul ausschließen/einschließen möchten, ohne Ihre
Schalter, Sie können Ihren Schalter mehrmals drücken
(oder bei einem bistabilen Schalter hin und her gehen)

### Alternative Optik

![vuewidget](images/fibaro.fgd212/vuewidget.jpg)

Wakeup
------

Keine Vorstellung von Aufwachen bei diesem Modul.

Häufig gestellte Fragen.
------

Nein. Dieses Modul kann durch mehrmaliges Drücken ein- oder ausgeschlossen werden
am Schalter.


**@sarakha63**
