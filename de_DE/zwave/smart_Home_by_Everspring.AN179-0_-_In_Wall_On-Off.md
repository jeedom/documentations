# SmartHome von Everspring In Wall On Off - AN179-0

**Das Modul**

![module](images/smarthomebyeverspring.AN179-0/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/smarthomebyeverspring.AN179-0/vuedefaut1.jpg)

## Zusammenfassung

Das ON/OFF Wall Micromodule von SmartHome Europe by Everspring wurde entwickelt, um das Ein- und Ausschalten von Licht und Elektrogeräten in Ihrem Zuhause zu steuern. Zwei Sätze Trockenkontakte ermöglichen den Anschluss von zwei Schaltern.

Aus Sicherheitsgründen kann das Gerät eine Überhitzung erkennen und schaltet das Relais direkt aus, um Schäden zu vermeiden. Bei einer Spannung von 230 V kann dieses Modul bis zu 11 A Widerstandslast, 1200 Watt Glühlampe, 700 Watt Motor oder 320 Watt (8 x 40 Watt) Leuchtstofflast unterstützen.

Das ON/OFF Wall Micromodule ist ein Z-Wave™-kompatibles Gerät, das mit allen Z-Wave™-kompatiblen Netzwerken funktionieren soll. Es kann per Fernbedienung, PC-Software oder einem beliebigen Z-Wave-Controller in Ihrem Netzwerk gesteuert werden.

## Fonctions

-   Steuern Sie ein Licht/Gerät aus der Ferne
-   Wird hinter einem vorhandenen Switch installiert
-   EIN/AUS-Funktion
-   Energieeffizient
-   Sehr kleine, reduzierte Abmessungen
-   Antenne mit großer Reichweite
-   Z-Wave Plus-Technologie
-   Einfache Installation in einer Standard-Backbox
-   Schaltfläche zum Einschließen/Ausschließen/Zuordnen des Moduls
-   Z-Wave-Repeater-Funktion

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Verbrauch : 0,5 W
-   Maximale Kraft : Ohmsche Last : 2500W Glühlampe : 1200 W Kompaktleuchtstofflampe : 320W
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis 70 m im Freien, bis 30 m im Innenbereich
-   Affichage: LED auf der Taste
-   Maße : 42 mm x 43 mm x 16 mm

## Moduldaten

-   Markieren : SmartHome von Everspring
-   Nachname : In Wand Ein Aus
-   Hersteller-ID : 96
-   Geben Sie Produkt ein : 4
-   Produkt ID : 8

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie gemäß seiner Papierdokumentation dreimal auf seine Taste drücken. Es ist wichtig zu beachten, dass dieses Modul direkt in die Einbeziehung geht, wenn es zu keinem Netzwerk gehört und mit Strom versorgt wird

![inclusion](images/smarthomebyeverspring.AN179-0/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/smarthomebyeverspring.AN179-0/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/smarthomebyeverspring.AN179-0/commandes.jpg)

Hier ist die Liste der Befehle :

-   Wir : Dies ist der Befehl, der das Licht einschaltet
-   Aus : Dies ist der Befehl, der das Licht ausschaltet
-   Bundesland : Dies ist der Befehl, mit dem Sie den Status des Lichts erfahren können

Beachten Sie, dass auf dem Dashboard die Status-, EIN/AUS-Informationen auf demselben Symbol zu finden sind.

### Modulkonfiguration

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/smarthomebyeverspring.AN179-0/config1.jpg)

Parameterdetails :

-   1 : Dieser Parameter definiert den Statuswertbefehl, es ist nicht ratsam, diesen Wert zu ändern.
-   2 : Dieser Parameter definiert die Verzögerung für das Senden der Statusänderung an Gruppe 1 (Wert zwischen 3 und 25 Sekunden)
-   3 : Dieser Parameter wird verwendet, um zu definieren, ob der Schalter seinen Status (EIN oder AUS) nach einer Spannungswiederkehr wieder aufnimmt.
-   4 : Mit diesem Parameter wird die Art des Schalters (Taster/Bistabil) festgelegt)

### Groupes

Dieses Modul hat 2 Assoziationsgruppen.

![Groupe](images/smarthomebyeverspring.AN179-0/groupe.jpg)

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Statusrückmeldungen können nicht unter 3 Sekunden konfiguriert werden.

## Wach auf

Kein Weckkonzept für dieses Modul.
