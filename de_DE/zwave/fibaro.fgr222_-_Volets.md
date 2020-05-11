Fibaro FGR-222 "Rollladen" 
==============================

\

-   **Das Modul**

\

![module](images/fibaro.fgr222/module.jpg)

\

-   **Das Jeedom Visual**

\

![vuedefaut1](images/fibaro.fgrm222/vuedefaut1.jpg)

\

Zusammenfassung 
------

\

Mit dem Mikromodul FGR-222 können Sie die Motorisierungen von verwalten
Verschluss mit elektronischem Anschlag, Jalousien oder den Türen von
Garage dank des Z-Wave-Protokolls, während Sie Ihren Schalter behalten
vorhanden. Sie können daher den angeschlossenen Motor über aktivieren
mit dem vorhandenen Schalter, einem Z-Wave-Sender oder direkt
von der Taste am Mikromodul.

Darüber hinaus kann dieses Mikromodul den Verbrauch übertragen
Momentane (W) und kumulative (KWh) elektrische Leistung des Geräts
beigefügt.

Ein Z-Wave-Controller (Fernbedienung, Dongle usw.) ist erforderlich, um
Integrieren Sie dieses Modul in Ihr Netzwerk, wenn Sie bereits ein Netzwerk haben
vorhanden.

Jedes Z-Wave-Modul fungiert als drahtloser Repeater mit dem
andere Module, um eine vollständige Abdeckung Ihrer
Wohnung.

Notiz : Dieses Modul benötigt zum Betrieb einen Neutralleiter.

\

Funktionen 
---------

\

-   Steuern Sie Ihre Jalousien oder Rollläden fern

-   Kompatibel mit BSO und Jalousie mit Positionierung von
    Lamellen

-   Wird hinter einem vorhandenen Switch installiert

-   Auf / Ab und Positionierungsfunktion

-   Kompatibel mit Motoren mit mechanischem oder elektronischem Anschlag

-   Messung des momentanen und kumulativen Verbrauchs

-   Drahtloses Update mit der Fibaro Home Center 2-Box

-   Testfunktion für die Z-Wave-Netzabdeckung

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation

\

Technische Daten 
---------------------------

\

-   Modultyp : Z-Wave Empfänger

-   Versorgung : 230 V, 50 Hz

-   Stromverbrauch : &lt; 0,8W

-   Verkabelung : 3 Draht, Neutralleiter erforderlich

-   Maximale Belastung : 1000W

-   Frequenz : 868,42 MHz

-   Signalstärke : 1mW

-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen

-   Abmessungen: 17 x 42 x 37 mm

-   Betriebstemperatur : 0-40 ° C

-   Temperatur begrenzen : 105 ° C

-   Standards : LVD (2006/95 / EG), EMV (2004 / 10B / EG), R & TTE (1999/5 / EG)

\

Moduldaten 
-----------------

\

-   Machen Sie : Fibar Group

-   Name : Fibaro FGR-222

-   Hersteller ID : 271

-   Produkttyp : 770

-   Produkt-ID : 4096

\

Konfiguration 
-------------

\

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://jeedom.fr/doc/Dokumentation/plugins/openzwave/de_DE/openzwave.html).

\

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste dreimal
> Einschlussknopf gemäß seiner Papierdokumentation.

\

![inclusion](images/fibaro.fgrm222/inclusion.jpg)

\

Einmal enthalten, sollten Sie dies erhalten :

\

![Plugin Zwave](images/fibaro.fgrm222/information.jpg)

\

### Befehle 

\

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\

![Befehle](images/fibaro.fgrm222/commandes.jpg)

![Befehle](images/fibaro.fgrm222/commandes2.jpg)

\

Hier ist die Liste der Befehle :

\

-   Zustand : Es ist der Befehl, der es ermöglicht, die Position von zu kennen
    dein Verschluss

-   Positionierung : Es ist der Befehl, der es ermöglicht, das zu definieren
    Öffnungsprozentsatz

-   Auf : Mit diesem Befehl können Sie den Verschluss vollständig öffnen

-   Runter : Es ist der Befehl, der den Verschluss vollständig schließt

-   Aktualisieren : Es ist der Befehl, mit dem die Position erneut abgefragt werden kann
    des Verschlusses

-   Macht : Befehl, der den Verbrauch des Moduls zulässt

-   Verbrauch : Kontrolle, um die Leistung zu kennen
    Sofort vom Modul verwendet

-   STOP : Steuerung, um die Bewegung des Verschlusses zu stoppen

-   STOP BSO : Befehl zum Stoppen der Bewegung (im Modus
    verstellbare Lamelle)

-   Kippen : Ermöglicht das Neigen der Lamellen (einstellbarer Lamellenmodus)

-   Ablehnen : Ermöglicht das Ablehnen der Lamellen (einstellbarer Lamellenmodus)

-   Nicht : Wird verwendet, um den Schritt zum Drücken von Ablehnen oder zu definieren
    Kippen

\

### Konfiguration des Moduls 

\

Dann, wenn Sie das Modul entsprechend konfigurieren möchten
Ihrer Installation müssen Sie durch die Schaltfläche gehen
"Konfiguration "des OpenZwave-Plugins von Jeedom.

\

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\

![Config1](images/fibaro.fgrm222/config1.jpg)

![Config2](images/fibaro.fgrm222/config2.jpg)

![Config3](images/fibaro.fgrm222/config3.jpg)

![Config4](images/fibaro.fgrm222/config4.jpg)

\

Parameterdetails :

\

-   1: ermöglicht das Blockieren des Moduls (um einen Verschluss einzufrieren) (in dem Fall
    Drücken eines Schalters)

-   2: Das Gleiche gilt für zwave-Befehle

-   3: Art der Berichte (klassisch oder faserig)

-   10: Betriebsart (Jalousie, Verschluss usw.)

-   12: Dauer einer vollen Runde (im Jalousiemodus)

-   13: Hier können Sie auswählen, wann die Lamellen zu ihren zurückkehren sollen
    vorherige Position

-   14: ermöglicht die Auswahl des Schaltertyps

-   17: ermöglicht die Auswahl, wie lange nach dem in 18 definierten Grenzwert
    Der Verschluss stoppt

-   18: Motorsicherheitsleistung

-   22: NA

-   29: ermöglicht die Kalibrierung der Klappe

-   30 bis 35: ermöglicht das Definieren des Verhaltens des Moduls
    verschiedene zwave Alarme

-   40: Leistungsdelta, um eine Erhöhung der Informationen auszulösen (auch in
    außerhalb des in 42) definierten Zeitraums

-   42: Info Feedback Zeitraum

-   43: Energiedelta, um einen Informationsanstieg auszulösen (auch in
    außerhalb des in 42) definierten Zeitraums

-   44: ermöglicht die Auswahl, ob Verbrauch und Leistung
    muss das des Moduls selbst enthalten

-   50: Hier können Sie auswählen, ob das Modul die Informationen an die Knoten senden soll
    in Assoziation im Szenenmodus oder im Assoziationsmodus

\

### Gruppen 

\

Dieses Modul hat 3 Assoziationsgruppen, nur die dritte ist
wesentlich.

\

![Groupe](images/fibaro.fgrm222/groupe.jpg)

\

Gut zu wissen 
------------

\

### Zurücksetzen 

\

![Config5](images/fibaro.fgrm222/config5.jpg)

\

Sie können Ihre Verbrauchsanzeige zurücksetzen, indem Sie auf klicken
auf dieser Schaltfläche auf der Registerkarte System verfügbar.

\

### Wichtig 

\

> **Wichtig**
>
> Damit Status-Feedback in Jeedom funktioniert, ist dies erforderlich
> Erzwingen Sie die Gerätekalibrierung (Parameter 29 auf "Ja") und die
> Positionierung muss aktiv sein (Parameter 10 mit Werten "Aktiv
> direkt "," Active Venetian "oder" Active Door ").

\

### Alternative visuelle 

\

![vuewidget](images/fibaro.fgrm222/vuewidget.jpg)

\

Aufwachen 
------

\

Keine Vorstellung von Aufwecken auf diesem Modul.

\

Faq. 
------

\

Lesen Sie den Abschnitt Zurücksetzen in diesem Dokument.

\

**@sarakha63**
