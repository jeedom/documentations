SmartHome von Everspring  - AN179-0 
================================================

\.

-   **Das Modul**

\.

![module](images/smarthomebyeverspring.AN179-0/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/smarthomebyeverspring.AN179-0/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

SmartHome Europe von Everspring Marke ON / OFF Wandmikromodul,
dient zum Ein- und Ausschalten der Beleuchtung und
Elektrogeräte in Ihrem Haus. Zwei Sätze trockener Kontakte
erlauben den Anschluss von zwei Schaltern.

Aus Sicherheitsgründen kann das Gerät eine Überhitzung erkennen und schaltet sich aus
das Relais direkt, um Schäden zu vermeiden. Bei einer Spannung von 230
V, dieses Modul kann bis zu 11 A ohmsche Last von 1200 Watt tragen
Glühlampe, 700 Watt Motor oder 320 Watt (8 x 40 Watt) von
fluoreszierende Ladung.

Das Micromodule Mural ON / OFF ist ein Z-Wave ™ -kompatibles Gerät
Entwickelt für alle Z-Wave ™ -kompatiblen Netzwerke. Er
kann per Fernbedienung, PC-Software oder einem anderen Gerät gesteuert werden
welcher Z-Wave-Controller in Ihrem Netzwerk.

\.

Funktionen 
---------

\.

-   Steuern Sie ein Licht / Gerät fern

-   Wird hinter einem vorhandenen Switch installiert

-   EIN / AUS-Funktion

-   Geringer Energieverbrauch

-   Sehr kleine, reduzierte Abmessungen

-   Langstreckenantenne

-   Z-Wave Plus-Technologie

-   Einfache Installation in einer Standard-Unterputzdose

-   Schaltfläche zum Einschließen / Ausschließen / Zuordnen des Moduls

-   Z-Wave-Repeater-Funktion

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Empfänger

-   Versorgung : 230 V, 50 Hz

-   Verbrauch : 0,5 W.

-   Maximale Leistung : Widerstandslast : 2500W Glühlampe
    : 1200W Kompaktleuchtstofflampe : 

-   Frequenz : 868,42 MHz

-   Geltungsbereich : bis zu 70 m im Freien, bis zu 30 m in Gebäuden

-   Anzeigen: LED auf der Taste

-   Abmessungen : 42 mm x 43 mm x 16 mm

\.

Moduldaten 
-----------------

\.

-   Machen Sie : SmartHome von Everspring

-   Name : 

-   Hersteller ID : 96

-   Produkttyp : 4

-   Produkt-ID : 8

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie dreimal auf das Modul
> Knopf, entsprechend seiner Papierdokumentation. Es ist wichtig zu
> Beachten Sie, dass dieses Modul direkt in die Aufnahme geht, wenn
> gehört zu keinem Netzwerk und wird mit Strom versorgt

\.

![inclusion](images/smarthomebyeverspring.AN179-0/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/smarthomebyeverspring.AN179-0/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/smarthomebyeverspring.AN179-0/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Ein : Es ist die Steuerung, die das Licht einschaltet

-   Aus : Es ist der Befehl, der das Licht ausschaltet

-   Zustand : Es ist der Befehl, mit dem der Status des
    Licht

\.

Beachten Sie, dass im Dashboard die Statusinformationen ON / OFF auf angezeigt werden
das gleiche Symbol.

\.

### Konfiguration des Moduls 

\.

Sie können das Modul entsprechend Ihrer Konfiguration konfigurieren
Installation. Dies erfordert das Durchlaufen der Schaltfläche "Konfiguration" des
Jeedom OpenZwave Plugin.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/smarthomebyeverspring.AN179-0/config1.jpg)

\.

Parameterdetails :

\.

-   1 : Dieser Parameter definiert den Statuswertbefehl, dies ist jedoch nicht der Fall
    empfohlen, diesen Wert zu ändern.

-   2 : Dieser Parameter definiert die Verzögerung beim Senden der Statusänderung an
    Gruppe 1 (Wert zwischen 3 und 25 Sekunden)

-   3 : Mit diesem Parameter können Sie festlegen, ob der Switch seine Funktion wieder aufnehmen soll
    Status (EIN oder AUS) nach einer Wiederherstellung der Stromversorgung.

-   4 : Dieser Parameter definiert den Typ
    Schalter (Push / Bistable)

### Gruppen 

\.

Dieses Modul hat 2 Zuordnungsgruppen.

\.

![Groupe](images/smarthomebyeverspring.AN179-0/groupe.jpg)

\.

> **Wichtig**
>
> Jeedom sollte mindestens in Gruppe 1 landen

Gut zu wissen 
------------

\.

### Besonderheiten 

\.

-   Die Statusrückmeldung kann nicht unter 3 konfiguriert werden
    Sekunden. \.

### Alternative visuelle 

\.

![vuewidget](images//smarthomebyeverspring.AN179-0/vuewidget.jpg)

\.

Wach auf 
-------

\.

Keine Vorstellung von Aufwecken auf diesem Modul.

\.

Faq. 
------

\.

Ja, es ist Parameter 2 und kann nicht unter 3 eingestellt werden
Sekunden.

\.

Nein, nein. Dieses Modul kann durch mehrmaliges Drücken ein- oder ausgeschlossen werden
auf dem Schalter.

\.

**@sarakha63**
