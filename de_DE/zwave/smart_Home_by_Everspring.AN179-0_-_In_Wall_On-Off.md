# SmartHome von Everspring In Wall On Off - AN179-0

**Das Modul**

![module](images/smarthomebyeverspring.AN179-0/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/smarthomebyeverspring.AN179-0/vuedefaut1.jpg)

## Zusammenfassung

Das Wall / ON-Mikromodul von SmartHome Europe von Everspring dient zum Steuern des Ein- und Ausschaltens von Lichtern und Elektrogeräten in Ihrem Zuhause. Zwei Sätze trockener Kontakte ermöglichen den Anschluss von zwei Schaltern.

Aus Sicherheitsgründen kann das Gerät eine Überhitzung erkennen und schaltet das Relais direkt aus, um Schäden zu vermeiden. Bei einer Spannung von 230 V kann dieses Modul bis zu 11 A ohmsche Last, 1200 Watt Glühlampe, 700 Watt Motor oder 320 Watt (8 x 40 Watt) fluoreszierende Last unterstützen.

Das Micromodule Mural ON / OFF ist ein Z-Wave ™ -kompatibles Gerät, das für alle Z-Wave ™ -kompatiblen Netzwerke geeignet ist. Es kann von einer Fernbedienung, einer PC-Software oder einem beliebigen Z-Wave-Controller in Ihrem Netzwerk gesteuert werden.

## Fonctions

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

## Technische Daten

-   Modultyp : Z-Wave Empfänger
-   Versorgung : 230 V, 50 Hz
-   Verbrauch : 0,5 W.
-   Maximale Leistung : Widerstandslast : 2500W Glühlampe : 1200W Kompaktleuchtstofflampe : 320W
-   Frequenz : 868,42 MHz
-   Geltungsbereich : bis zu 70 m im Freien, bis zu 30 m in Gebäuden
-   Affichage: LED auf der Taste
-   Abmessungen : 42 mm x 43 mm x 16 mm

## Moduldaten

-   Machen Sie : SmartHome von Everspring
-   Name : In Wall On Off
-   Hersteller ID : 96
-   Produkttyp : 4
-   Produkt-ID : 8

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste gemäß der Papierdokumentation dreimal. Es ist wichtig zu beachten, dass dieses Modul direkt aufgenommen wird, wenn es zu keinem Netzwerk gehört und mit Strom versorgt wird

![inclusion](images/smarthomebyeverspring.AN179-0/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/smarthomebyeverspring.AN179-0/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/smarthomebyeverspring.AN179-0/commandes.jpg)

Hier ist die Liste der Befehle :

-   Ein : Es ist die Steuerung, die das Licht einschaltet
-   Aus : Es ist der Befehl, der das Licht ausschaltet
-   Zustand : Es ist der Befehl, mit dem der Status des Lichts ermittelt werden kann

Beachten Sie, dass sich im Dashboard die Informationen zu Status, EIN / AUS auf demselben Symbol befinden.

### Konfiguration des Moduls

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Gehen Sie dazu auf die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/smarthomebyeverspring.AN179-0/config1.jpg)

Parameterdetails :

-   1 : Dieser Parameter definiert den Statuswertbefehl. Es ist nicht ratsam, diesen Wert zu ändern.
-   2 : Dieser Parameter definiert die Verzögerung für das Senden der Statusänderung an Gruppe 1 (Wert zwischen 3 und 25 Sekunden)
-   3 : Mit diesem Parameter wird festgelegt, ob der Schalter nach einer Wiederherstellung der Stromversorgung seinen Status (EIN oder AUS) wieder einnimmt.
-   4 : Dieser Parameter definiert den Schaltertyp (Push / Bistable)

### Groupes

Dieses Modul hat 2 Zuordnungsgruppen.

![Groupe](images/smarthomebyeverspring.AN179-0/groupe.jpg)

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Die Statusrückmeldung kann nicht innerhalb von 3 Sekunden konfiguriert werden.

## Wach auf

Keine Vorstellung von Aufwecken auf diesem Modul.
