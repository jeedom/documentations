# Fibaro RGB-Controller - FGRGB-101

-   **Das Modul**

![module](images/fibaro.fgrgb101/module.jpg)

-   **Das Jeedom-Visual**

![Visuel jeedom](images/fibaro.fgrgb101/Visuel_jeedom.png)

## Zusammenfassung

Das Mikromodul Z-Wave Fibaro FGRGB-101 kann verwendet werden, um eine 12/24-V-Niederspannungsbeleuchtung (Halogen oder LED), einen RGB- oder RGB+weißen LED-Streifen zu steuern oder sogar analoge Sonden mit 0-10 V anzuschließen.

-   4 analoge Eingänge 0 bis 10 V zum Anschluss an viele kompatible Sensoren, Potentiometer, Taster (monostabil) oder Schalter (bistabil)).
-   4 Dimmerausgänge (PWM) zur Steuerung :
-   \* d. h. 1 Kanal RGB + Weiß (RGBW) 12/24 V LED
-   \* oder 4 Kanäle mit 12/24 V weißen LEDs
-   \* oder 4 Kanäle mit 12/24 V Halogenlampen (144 W 12 V / 288 W 24 V max.)
-   \* oder 12/24V-Lüfter.
-   Benötigt separate 12/24V Stromversorgung.
-   Sofortige oder kumulative globale oder Kanalverbrauchsmessung.
-   Repeater (Router)-Funktion zur Erweiterung des Z-Wave-Netzwerks.

## Fonctions

-   Steuerung von 12/24-V-Niederspannungsbeleuchtung (Halogen oder LED))
-   Wird hinter einem vorhandenen Switch installiert
-   Zuvor programmierte Lichtsimulation
-   EIN/AUS- und Dimmfunktion
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Einspeisung : 12 V oder 24 V Gleichstrom
-   Maximale Ausgangsleistung :
-   \* 12A insgesamt (Addition aller Kanäle),
-   \* 6A max. pro Kanal
-   Maximale Leistung mit Halogenlampen :
-   \* 12 V - 144 W insgesamt (alle Kanäle),
-   \* 24 V - 288 W insgesamt (alle Kanäle)
-   PWM-Modulationsfrequenz : 244Hz
-   Verbrauch : 0,3W
-   Funkprotokoll : Z-Wave bei 868,4 MHz (US)
-   Z-Wave-Sendeleistung : 1mW
-   Betriebstemperatur : 0 - 40C
-   Zum Einbau in Dosen : Ø≥50mm
-   Maße : 42 x 37 x 17 mm
-   Europäische Normen : EMV 2004/108/EC R&TTE 199/5/WE
-   Für den Betrieb dieses Moduls ist ein Z-Wave-Controller erforderlich.

## Moduldaten

-   Markieren : Fibar-Gruppe
-   Nachname : Fibaro FGRGB-101 RGBW
-   Hersteller-ID : 271
-   Geben Sie Produkt ein : 2304
-   Produkt ID : 4096

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Inklusionstaste gemäß der Papierdokumentation dreimal drücken.

![vue bp inclusion](images/fibaro.fgrgb101/vue_bp_inclusion.png)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgrgb101/configuration.png)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/fibaro.fgrgb101/commande_1.png)

![Aufträge](images/fibaro.fgrgb101/commande_2.png)

Hier ist die Liste der Befehle :

-   Farbe : Dies ist der Befehl, mit dem Sie den anzuzeigenden Farbcode festlegen können
-   Schornstein : Dies ist der Befehl, mit dem Sie eine Kaminatmosphäre simulieren können
-   Gewitter : Dies ist der Befehl, mit dem Sie eine Sturmatmosphäre simulieren können
-   Dämmerung : Dies ist der Befehl, mit dem Sie eine aude Atmosphäre (progressiver Sonnenaufgang) simulieren können)
-   Fading : Dies ist der Befehl, der das gesamte Farbspektrum simuliert
-   RBB : Dies ist der Befehl, der eine Cop-Atmosphäre simuliert
-   Weiß kalt : Dies ist der Befehl, mit dem Sie eine typische kaltweiße Farbe simulieren können, wenn das Farbband dies zulässt. (Dieser Befehl ist standardmäßig nicht sichtbar)
-   Weiß heiß : Dies ist der Befehl, mit dem Sie eine typische warmweiße Farbe simulieren können, wenn das Farbband dies zulässt. (Dieser Befehl ist standardmäßig nicht sichtbar)
-   Wir : Dies ist der Befehl, der es Ihnen ermöglicht, das Banner in der zuletzt gewählten Farbe zu beleuchten
-   Aus : Dies ist der Befehl, mit dem Sie das Banner ausschalten können
-   Intensität : Dies ist der Regler, mit dem Sie die Lichtintensität einstellen können

Beachten Sie, dass auf dem Dashboard alle Informationen auf demselben Symbol zu finden sind

### Modul-Setup

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgrgb101/parametres.png)

Parameterdetails :

Bitte beachten Sie den vorherigen Screenshot, die Parameter wurden ins Französische übersetzt.

### Groupes

Dieses Modul hat fünf Assoziationsgruppen, nur die fünfte ist wesentlich.

![Groupe](images/fibaro.fgrgb101/groupes.png)

## Gut zu wissen

### Besonderheiten

Verwendung von 0-10V Sensoren.

> **Kaution**
>
> Im Moment erlaubt die Standardkonfiguration von jeedom dies nicht, aber eine bestimmte Konfiguration kann in Betracht gezogen werden.

### Alternative Optik

![Alternative Optik](images/fibaro.fgrgb101/Visuel_alternatif.png)

## Wakeup

Kein Weckkonzept für dieses Modul.
