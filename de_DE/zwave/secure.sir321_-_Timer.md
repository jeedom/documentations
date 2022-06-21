# SIR 321 "Timer sichern"

**Das Modul**

![module](images/secure.sir321/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/secure.sir321/vuedefaut1.jpg)

## Zusammenfassung

Der digitale Timer SIR321 ist ein einfacher Druckknopfschalter, der sich daran erinnert, Ihre Elektrogeräte für Sie auszuschalten. Durch Hinzufügen dieses einfachen Geräts zu jedem elektrischen Hochleistungsgerät mit Lasten bis zu 3 kW (ohmsche Last) sind große Energieeinsparungen möglich).

Diese Einheiten sind perfekt für den Einsatz an Flächenheizkörpern, Tauchsieder, beheizten Handtuchhaltern und Ölradiatoren geeignet. Der Boost reicht von 30 bis 120 Minuten.

Der SIR 321 unterstützt die externen Temperatursensoren SES001, SES002 und SES003.

## Fonctions

-   Booster für Tauchsieder, Flachheizkörper, Handtuchheizkörper, Ölradiatoren
-   Kesseluhr
-   Zwangsbelüftung in Konferenzräumen
-   Temperaturmessung der Fußbodenheizung (mit optionalen Sensoren))
-   Einfach zu bedienen und zuverlässig
-   Erzielen Sie Energieeinsparungen

## Technische Eigenschaften

-   Type: Elektronische Zeitschaltuhr
-   Relais: 13(3)A, 230V AC, geeignet für Lasten bis 3kW
-   Alimentation: 230 V Wechselstrom, 50 Hz
-   Abmessungen 85 x 85 x 44 mm
-   Schutzzeichen : IP30
-   Betriebstemperatur: 0 °C bis 35 °C

## Moduldaten

-   Markieren : Horstmann
-   Nachname : SIR 321 RF Countdown-Timer
-   Hersteller-ID : 89
-   Geben Sie Produkt ein : 1/2 (abhängig davon, ob es mit einem Temperaturfühler geliefert wird oder nicht)

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).
> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die Taste 1 Sekunde lang (bis sie schnell blinkt) und lassen Sie sie los, gemäß der Papierdokumentation.

![inclusion](images/secure.sir321/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/secure.sir321/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/secure.sir321/commandes.jpg)

Hier ist die Liste der Befehle :

-   Wir : Dies ist der Befehl zum Einschalten des Relais
-   Aus : Dies ist der Befehl zum Ausschalten des Relais
-   Temperatur : dies ist der Temperaturmessbefehl, wenn eine externe Sonde vorhanden ist

### Modul-Setup

Wenn Sie das Modul konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/secure.sir321/config1.jpg)

Parameterdetails :

-   1: Aktiviert oder deaktiviert die Fail-Safe-Timer-Funktion (siehe Moduldokumentation)
-   2: Ermöglicht die Einstellung der Temperatureinheit
-   3: Hier können Sie das Zeitintervall für das Senden der Temperatur an Jeedom festlegen (in Sekunden)
-   4: Hier können Sie einstellen, wie stark die Temperatur variieren muss, damit das Modul sie an Jeedom sendet (in Schritten von 0.1 10-→0,1)
-   5: Ermöglicht die Einstellung einer Abschalttemperatur, bei deren Überschreitung das Modul das Relais abschaltet

### Groupes

Dieses Modul hat zwei Assoziationsgruppen. Ist der erste zwingend erforderlich, ist der zweite aktiv und zwingend erforderlich, wenn ein Temperatursensor angeschlossen ist.

![Groupe](images/secure.sir321/groupe.jpg)
