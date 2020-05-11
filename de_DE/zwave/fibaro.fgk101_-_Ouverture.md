Fibaro Öffnungsdetektor - FGK-101 
======================================

\

-   **Das Modul**

\

![Modul](images/fibaro.fgk101-DS18B20/Modul.jpg)

\

-   **Das Jeedom Visual**

\

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

\

Zusammenfassung 
------

\

Dieser batteriebetriebene und Z-Wave-kompatible Detektor verfügt über einen Sensor
Reed, ein Näherungsschalter mit Magnetbetrieb, der
erkennt das Öffnen einer Tür oder eines Fensters, wenn die
Zwei Elemente sind entfernt.

Das Gerät besteht aus einem Teil mit einem Magneten (dem Teil
mobil), an der Tür oder am Fenster sowie am Gerät befestigt
Hauptposition am festen Teil des Fensters / der Tür mit
Schraube oder Kleber. Wenn sich die beiden Teile nicht mehr gegenüberliegen, a
Das Z-Wave-Funksignal wird automatisch gesendet.

Zusätzlich verfügt dieser Detektor über einen analogen Eingang
Schließen Sie einen 1-Draht-Temperaturfühler DS18B20 an. Dieser Detektor hat
auch von einem kabelgebundenen Eingang, so dass es als verwendet werden kann
Universalsender : lassen Sie seinen Magnetkontakt beiseite und
Schließen Sie die Schraubeingänge an einen Detektor (normalerweise geschlossen) Ihres Geräts an
Wahl wie Rauch-, Gas- oder Kohlenmonoxiddetektor,
Usw.

Ein Z-Wave-Controller (Fernbedienung, Dongle usw.) ist erforderlich, um
Integrieren Sie diesen Detektor in Ihr Netzwerk, wenn Sie bereits ein Netzwerk haben
vorhanden.

\

Funktionen 
---------

\

-   Detektor öffnen

-   Taste zum Ein- / Ausschließen des Detektors

-   Erkennung schwacher Batterie

-   Manipulationsschutz

-   1 Potentialfreier verdrahteter Eingang

-   1 analoger 1-Draht-Eingang (zum Anschließen von a
    Temperatur DS18B20)

-   Sehr kleine, reduzierte Abmessungen

-   Benutzerfreundlichkeit und Installation

\

Technische Daten 
---------------------------

\

-   Modultyp : Z-Wave Sender

-   Farbe : Weiß (FGK-101/102/103/104/105/106/107 je nach Farbe)

-   Versorgung : ER14250 (1 / 2AA) 3,6-V-Batterie

-   Frequenz : 868,42 MHz

-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen

-   Abmessungen: 76 x 17 x 19 mm

-   Betriebstemperatur : 0-40 ° C

\

Moduldaten 
-----------------

\

-   Machen Sie : Fibar Group

-   Name : Fibaro FGK-101 mit Temperaturfühler (DS18B20)

-   Hersteller ID : 271

-   Produkttyp : 1792

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

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

\

Einmal enthalten, sollten Sie dies erhalten :

\

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

\

### Befehle 

\

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\

![Befehle](images/fibaro.fgk101-DS18B20/commandes.jpg)

\

Hier ist die Liste der Befehle :

\

-   Zustand : Es ist der Befehl, der den offenen oder geschlossenen Zustand des
    Modul

-   Batterie : es ist der Befehl, der es erlaubt, den Zustand des zu erhöhen
    Batterie

\

Sie können diese Befehle nach Belieben ein- oder ausblenden.

\

### Konfiguration des Moduls 

\

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer gleich danach auf
> Einbeziehung.

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

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

\

Parameterdetails :

\

-   Aufwachen : Dies ist das Aufweckintervall des Moduls (Wert
    7200 empfohlen)

-   1: Legt die Verzögerung für das Aufheben des IN-Eingangsalarms fest
    (trockener Kontakt)

-   2: ermöglicht die Auswahl, ob die blaue LED beim Öffnen blinken soll und
    Zum Beispiel die Tür schließen

-   3: wird verwendet, um den Kontakttyp zu definieren, der an die Klemmenleiste (IN) angeschlossen ist

-   5: Es wird nicht empfohlen, diese Einstellung zu ändern, es sei denn, Sie wissen warum
    (Definiert die Art des an die Assoziationsgruppe 1 gesendeten Signals.)

-   7: Wert an Assoziationsgruppe 1 gesendet

-   9: Mit dieser Option können Sie das Senden des Löschsignals zwischen dem IN-Eingang einstellen
    und Assoziationsgruppe 1

-   12: ermöglicht die Einstellung der Empfindlichkeit gegenüber Temperaturänderungen (wenn
    eine 1-Draht-Sonde ist an das Modul angeschlossen)

-   13: ermöglicht es, das Senden der Signale von im Broadcast-Modus einzustellen
    Temperatur und Manipulation

-   14: Aktiviert die Szenenaktivierungsfunktion

\

### Gruppen 

\

Dieses Modul hat drei Assoziationsgruppen, nur die dritte ist
wesentlich.

\

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

\

Gut zu wissen 
------------

\

### Besonderheiten 

\

> **Spitze**
>
> Dieses Modul ist beim Aufwecken sehr pingelig und erfordert eine sehr
> starke Nähe zum Controller, wenn enthalten

\

### Alternative visuelle 

\

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

\

Aufwachen 
------

\

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Drücken Sie die Einschlusstaste 3/4 Mal. Es kann notwendig sein
    mehrmals hintereinander (2 oder 3)

\

Faq. 
------

\

Dieses Modul wird durch dreimaliges Drücken einer der Manipulationstasten aktiviert. Aber
Die andere Sabotage-Taste muss gedrückt werden.

\

Dieses Modul hat eine sehr geringe Reichweite. Es ist ratsam zu tun
Aufnahme am nächsten zu Ihrer Box.

\

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird sein
beim nächsten Aufwachen berücksichtigt.

\

Wichtiger Hinweis 
---------------

\

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung
> der Konfiguration, nach einer Änderung des Aufweckens, nach a
> Änderung der Assoziationsgruppen

\

**@sarakha63**
