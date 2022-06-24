# SmartHome von Everspring Wanddimmer - AD146-0

**Das Modul**

![module](images/smarthomebyeverspring.AD146-0/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

## Zusammenfassung

Dieses Wanddimmer-Mikromodul von SmartHome Europe by Everspring wurde entwickelt, um das Ein- und Ausschalten von Lichtern und elektrischen Geräten in Ihrem Zuhause zu steuern. Es kann auch eine Dimmerfunktion bieten, die nur mit Glühbirnen kompatibel ist. Bei einer Spannung von 230 V kann dieses Modul bis zu 300 Watt Widerstands- oder Glühlast oder 200 Watt Fluoreszenzlast unterstützen.

Es kann im 2-Draht-Modus (ohne Neutralleiter) verwendet werden, wodurch ein vorhandener Schalter ersetzt wird, oder dreiadrig mit einer herkömmlichen Modulstromversorgung (Phase + Neutralleiter)).

Das Wanddimmermodul ist ein Z-Wave™-fähiges Gerät, das mit allen Z-Wave™-fähigen Netzwerken funktionieren soll. Es kann per Fernbedienung, PC-Software oder einem beliebigen Z-Wave-Controller in Ihrem Netzwerk gesteuert werden.

## Fonctions

-   Steuern Sie ein Licht/Gerät aus der Ferne
-   Wird hinter einem vorhandenen Switch installiert
-   EIN/AUS-Funktion und Dimmen
-   Energieeffizient
-   Sehr kleine, reduzierte Abmessungen
-   Antenne mit großer Reichweite
-   Z-Wave Plus-Technologie
-   Lässt sich einfach in einer Standard-Back-Box installieren
-   Verwendung im 2-Draht-Modus (Nullleiter nicht erforderlich)
-   Kompatibel mit dimmbaren LED-Lampen
-   Schaltfläche zum Einschließen/Ausschließen/Zuordnen des Moduls
-   Z-Wave-Repeater-Funktion

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Verbrauch : 0,5 W
-   Maximale Kraft :
-   Ohmsche Last : 300W
-   Glühlampe : 300W
-   Leuchtstofflampe : 200W
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis 70 m im Freien, bis 30 m im Innenbereich
-   Affichage: LED auf der Taste
-   Maße : 42 mm x 43 mm x 16 mm

## Moduldaten

-   Markieren : SmartHome von Everspring
-   Nachname : Im Wanddimmer
-   Hersteller-ID : 96
-   Geben Sie Produkt ein : 3
-   Produkt ID : 2

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie seine Taste gemäß seiner Papierdokumentation dreimal drücken. Es ist wichtig zu beachten, dass dieses Modul direkt in die Einbeziehung geht, wenn es zu keinem Netzwerk gehört und mit Strom versorgt wird

![inclusion](images/smarthomebyeverspring.AD146-0/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/smarthomebyeverspring.AD146-0/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/smarthomebyeverspring.AD146-0/commandes.jpg)

Hier ist die Liste der Befehle :

-   Intensität : Dies ist der Regler, um die Intensität des Lichts einzustellen
-   Wir : Dies ist der Befehl, der das Licht einschaltet
-   Aus : Dies ist der Befehl, der das Licht ausschaltet
-   Bundesland : Dies ist der Befehl, der Sie über den Status des Lichts informiert

Beachten Sie, dass auf dem Dashboard die Status-, EIN/AUS- und Intensitätsinformationen auf demselben Symbol zu finden sind.

### Modul-Setup

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/smarthomebyeverspring.AD146-0/config1.jpg)

Parameterdetails :

-   1 : Dieser Parameter definiert den Statuswertbefehl, es ist nicht ratsam, diesen Wert zu ändern.
-   2 : Dieser Parameter definiert die Verzögerung für das Senden der Statusänderung an Gruppe 1 (Wert zwischen 3 und 25 Sekunden)
-   3 : Dieser Parameter wird verwendet, um zu definieren, ob der Schalter seinen Status (EIN oder AUS) nach einer Spannungswiederkehr wieder aufnimmt.
-   4 : Mit diesem Parameter wird die Art des Schalters (Taster/Bistabil) festgelegt)
-   5 : Mit diesem Parameter wird festgelegt, ob der Schalter im Dimmmodus oder im Ein/Aus-Modus arbeitet

### Groupes

Dieses Modul hat 2 Assoziationsgruppen.

![Groupe](images/smarthomebyeverspring.AD146-0/groupe.jpg)

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Statusrückmeldungen können nicht unter 3 Sekunden konfiguriert werden.

## Wakeup

Kein Weckkonzept für dieses Modul.
