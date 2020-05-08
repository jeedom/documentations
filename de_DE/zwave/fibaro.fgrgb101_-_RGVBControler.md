Fibaro RGVB Controler - FGRGB-101 
=================================

\.

-   **Das Modul**

\.

![module](images/fibaro.fgrgb101/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![Visuel jeedom](images/fibaro.fgrgb101/Visuel_jeedom.png)

\.

Zusammenfassung 
------

Mit dem Mikromodul Z-Wave Fibaro FGRGB-101 können Sie wählen
12 / 24V Niederspannungslichter (Halogen oder LED), ein RGB-LED-Streifen
oder RGB + weiß oder sogar zum Anschließen von analogen Sonden mit
0-10V Standard.

-   4 analoge Eingänge 0 bis 10 V zum Anschluss an viele Sensoren
    kompatibel, Potentiometer, Druckknöpfe (monostabil)
    oder Schalter (bistabil).

-   4 Dimmerausgänge (PWM) zur Steuerung :

-   \* oder 1 Kanal RGB + weiße LED (RGBW) 12 / 24V

-   \* oder 4 Kanäle mit weißen LEDs 12 / 24V

-   \* oder 4 Kanäle von 12 / 24V-Halogenlampen (144W 12V / 288W 24V max.)

-   \* oder 12 / 24V-Lüfter.

-   Benötigt separate 12 / 24V Stromversorgung.

-   Globale oder sofortige oder kumulative Verbrauchsmessung.

-   Repeater-Funktion (Router) zur Erweiterung des Z-Wave-Netzwerks.

\.

Funktionen 
---------

-   12 / 24V-Niederspannungsleuchten (Halogen oder LED) steuern

-   Wird hinter einem vorhandenen Switch installiert

-   Zuvor programmierte Lichtsimulation

-   EIN / AUS und Variationsfunktion

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation

\.

Technische Daten 
---------------------------

-   Essen : 12 V oder 24 V DC

-   Maximale Ausgangsleistung :

-   \* 12A insgesamt (Addition aller Kanäle),

-   \* 6A max. pro Kanal

-   Maximale Leistung mit Halogenlampen :

-   \* 12V - 144W insgesamt (alle Kanäle),

-   \* 24V - 288W insgesamt (alle Kanäle)

-   PWM-Modulationsfrequenz : 244 Hz

-   Verbrauch : 0,3W

-   Funkprotokoll : Z-Wave bei 868,4 MHz (EU)

-   Z-Wave Sendeleistung : 1mW

-   Betriebstemperatur : 0 - 40 C.

-   Zur Installation in Boxen : Ø ≥ 50 mm

-   Abmessungen : 42 x 37 x 17 mm

-   Europäische Standards : EMV 2004/108 / EG R & TTE 199/5 / WE

-   Für dieses Modul ist ein Z-Wave-Controller erforderlich.

\.

Moduldaten 
-----------------

-   Machen Sie : Fibar Group

-   Nachname : Fibaro FGRGB-101 RGBW

-   Hersteller ID : 271

-   Produkttyp : 2304

-   Produkt-ID : 4096

\.

Konfiguration 
-------------

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Important**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste dreimal
> Einschlussknopf gemäß seiner Papierdokumentation.

\.

![vue bp inclusion](images/fibaro.fgrgb101/vue_bp_inclusion.png)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/fibaro.fgrgb101/configuration.png)

\.

### Bestellungen 

Sobald das Modul erkannt wurde, lauten die dem Modul zugeordneten Befehle
disponibles.

\.

![Bestellungen](images/fibaro.fgrgb101/commande_1.png)

![Bestellungen](images/fibaro.fgrgb101/commande_2.png)

\.

Hier ist die Liste der Befehle :

-   Farbe: : Mit diesem Befehl können Sie den Farbcode auf einstellen
    afficher

-   Schornstein : Es ist der Befehl, der eine Atmosphäre von simuliert
    Kamin

-   Gewitter : Dies ist der Befehl, der eine Sturmatmosphäre simuliert

-   Morgendämmerung : Es ist der Befehl, der eine Aude-Atmosphäre simuliert
    (progressiver Sonnenaufgang)

-   Verblassen : Dies ist der Befehl, der das gesamte simuliert
    Farbspektrum

-   RBB : Dies ist der Befehl, der eine Cop-Atmosphäre simuliert

-   Kaltes Weiß : Dies ist der Befehl, der simuliert, dass a
    kühle weiße Farbe, wenn der Farbstreifen es erlaubt. (das
    Befehl ist standardmäßig nicht sichtbar)

-   Warmes Weiß : Dies ist der Befehl, der simuliert, dass a
    warmweiße Farbe, wenn der Farbstreifen dies zulässt. (das
    Befehl ist standardmäßig nicht sichtbar)

-   Wir : Dies ist der Befehl, der den Streifen auf dem Bildschirm einschaltet
    letzte Farbe wählt vor

-   Aus : Dies ist der Befehl, der das Banner ausschaltet

-   Intensität : Mit diesem Befehl können Sie die Intensität einstellen
    lumineuse

Beachten Sie, dass sich im Dashboard alle Informationen auf derselben befinden
icone

\.

### Konfiguration des Moduls 

Sie können das Modul entsprechend Ihrer Konfiguration konfigurieren
Installation. Gehen Sie dazu auf die Schaltfläche "Konfiguration" der
Jeedom OpenZwave Plugin.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/fibaro.fgrgb101/parametres.png)

\.

Parameterdetails :

Bitte beachten Sie den vorherigen Screenshot, die Einstellungen
ins Französische übersetzt werden.

\.

### Gruppen 

Dieses Modul hat fünf Assoziationsgruppen, nur die fünfte ist
indispensable.

\.

![Groupe](images/fibaro.fgrgb101/groupes.png)

Gut zu wissen 
------------

### Besonderheiten 

Verwendung von 0-10V Sensoren.

\.

> **Caution**
>
> Die Standardkonfiguration von jeedom erlaubt dies derzeit nicht
> nicht, aber eine bestimmte Konfiguration kann berücksichtigt werden.

### Alternative visuelle 

\.

![Alternative visuelle](images/fibaro.fgrgb101/Visuel_alternatif.png)

\.

Aufwachen 
------

Keine Vorstellung von Aufwecken auf diesem Modul.

\.

Faq. 
------

Die Standardkonfiguration von jeedom erlaubt dies derzeit nicht,
Es kann jedoch eine bestimmte Konfiguration in Betracht gezogen werden.

\.

