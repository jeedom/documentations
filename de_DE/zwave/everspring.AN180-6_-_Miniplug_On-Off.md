Everspring Miniplug Ein / Aus - AN180-6 
====================================

\.

-   **Das Modul**

\.

![module](images/everspring.AN180-6/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Der Mini-Ein / Aus-Stecker dient zur Steuerung der Zündung und
Ausschalten der Lichter und elektrischen Geräte Ihres
Haus. Mit einer Spannung von 220 - 240 V kann dieser Stecker a
Last bis 1500 W (Widerstand), 800 W (Glühlampe), 200 W (Motor),
fluoreszierend, LED).

Der Mini-Ein / Aus-Stecker ist ein Z-Wave ™ -kompatibles Gerät
für die Arbeit mit allen Z-Wave ™ -kompatiblen Netzwerken. Sie kann
von einer Fernbedienung, einer PC-Software oder einer anderen gesteuert werden
Z-Wave-Controller in Ihrem Netzwerk.

\.

Funktionen 
---------

\.

-   Steuern Sie eine Lampe oder ein Gerät fern

-   Steckermodul direkt zwischen Steckdose und integriert
    die Ladung auf Bestellung

-   EIN / AUS-Funktion zur Steuerung von Lampen oder Geräten (nicht
    Variation)

-   Lokale Ladesteuerung über integrierte Taste

-   Z-Wave Plus-Technologie

-   Reduzierte Abmessungen bleiben fast unbemerkt

-   Status-LED an der integrierten Taste

-   Z-Wave-Repeater-Funktion

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Z-Wave Empfänger

-   Essen : 230 V, 50 Hz

-   Verbrauch : 0.6W

-   Maximale Leistung : Widerstandslast : 1500W, Glühlampe
    : 800W, Kompaktleuchtstofflampe : 200W, LED-Lampe (nicht dimmbar) :
    200W

-   Frequenz : 868,42 MHz

-   Geltungsbereich : bis zu 70 m im Freien, bis zu 30 m in Gebäuden

-   Affichage: LED auf der Taste

-   Abmessungen : Länge (Stecker enthalten) : 74mm Durchmesser : 52mm

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Everspring

-   Nachname : Ministecker ein / aus

-   Hersteller ID : 96

-   Produkttyp : 4

-   Produkt-ID : 7

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
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie dreimal auf das Modul
> Knopf, entsprechend seiner Papierdokumentation. Es ist wichtig zu
> Beachten Sie, dass dieses Modul direkt in die Aufnahme geht, wenn
> gehört zu keinem Netzwerk und wird mit Strom versorgt

\.

![inclusion](images/everspring.AN180-6/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

\.

### Bestellungen 

\.

Sobald das Modul erkannt wurde, werden die den Modulen zugeordneten Befehle ausgeführt
disponibles.

\.

![Bestellungen](images/everspring.AN180-6/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Staat : Es ist der Befehl, mit dem der Status des
    Steckdose (Ein / Aus)

-   Wir : Dies ist der Befehl, der die Steckdose einschaltet

-   Aus : Es ist der Befehl, der es ermöglicht, den Fang zu löschen

\.

Beachten Sie, dass im Dashboard die Statusinformationen ON / OFF auf angezeigt werden
das gleiche Symbol.

\.

### Konfiguration des Moduls 

\.

Sie können das Modul entsprechend Ihrer Konfiguration konfigurieren
Installation. Gehen Sie dazu auf die Schaltfläche "Konfiguration" der
Jeedom OpenZwave Plugin.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/everspring.AN180-6/config1.jpg)

\.

Parameterdetails :

\.

-   1 : Dieser Parameter definiert den Statuswertbefehl, ist es nicht
    empfohlen, diesen Wert zu ändern.

-   2 : Dieser Parameter definiert die Verzögerung beim Senden der Statusänderung an
    Gruppe 1 (Wert zwischen 3 und 25 Sekunden)

-   3 : Mit diesem Parameter wird festgelegt, ob der Socket seinen Status wieder aufnehmen soll
    (EIN oder AUS) nach einer Wiederherstellung der Stromversorgung.

### Gruppen 

\.

Dieses Modul hat 2 Zuordnungsgruppen.

\.

![Groupe](images/everspring.AN180-6/groupe.jpg)

\.

> **Important**
>
> Jeedom sollte mindestens in Gruppe 1 landen

Gut zu wissen 
------------

\.

### Besonderheiten 

\.

-   Die Statusrückmeldung kann nicht unter 3 konfiguriert werden
    Sekunden. \.

Aufwachen 
------

\.

Keine Vorstellung von Aufwecken auf diesem Modul.

\.

Faq. 
------

\.

Ja, es ist Parameter 2 und kann nicht unter 3 eingestellt werden
secondes.

\.

**@sarakha63**
