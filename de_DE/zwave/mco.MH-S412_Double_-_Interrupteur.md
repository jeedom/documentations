# MCO MH-S412 Dual

**Das Modul**

![module](images/mco.mhs412/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/mco.mhs412/vuedefaut1.jpg)

## Zusammenfassung

Der Schalter MH-S412-EU ermöglicht das Schalten der 2 angeschlossenen Lasten, entweder manuell wie ein herkömmlicher Schalter oder aus der Ferne über das Z-Wave-Funkprotokoll.

Seine Glasoberfläche und sein Design bringen einen modernen Stil.

Der Schalter MH-S412-EU kann jede Art von Last, Beleuchtung oder elektrischem Gerät steuern.

Der Schalter ist außerdem mit einer LED-Anzeige ausgestattet, die seinen Status anzeigt.

## Fonctions

-   Steuern Sie zwei Lampen oder Geräte aus der Ferne
-   Wird anstelle eines vorhandenen Schalters installiert (passt perfekt in eine 40-mm-Unterputzdose)
-   EIN/AUS-Funktion
-   Unterstützt Zuordnungsbefehle (Gruppe 1 und Gruppe 2)
-   Steuerung beider Lasten vor Ort
-   Status-LEDs
-   Glasoberfläche, modernes Design
-   Taktile Tasten

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Farbe : Blanc
-   Einspeisung : 230V, 50Hz
-   Verdrahtung : 3 Adern, Neutralleiter erforderlich
-   Maximale Kraft : 5A (1100W) für jeden Kanal
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis zu 30m
-   Maße : 86 x 86 x 43 mm
-   Affichage: Blaue/rote LED

## Moduldaten

-   Markieren : MC-HAUS
-   Nachname : MH-S412 Dual
-   Hersteller-ID : 351
-   Geben Sie Produkt ein : 16642
-   Produkt ID : 514

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie gemäß seiner Papierdokumentation nur eine der 2 Tasten auf der Vorderseite 3 Sekunden lang.

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/mco.mhs412/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/mco.mhs412/commandes.jpg)

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/mco.mhs412/config1.jpg)

Parameterdetails :

-   1: Speicherzustand vor Stromausfall : enable (ermöglicht es Ihnen, den letzten Zustand der Schalter kurz vor dem Stromausfall zu finden) disable (die Schalter befinden sich im AUS-Zustand, wenn der Strom zurückkehrt )

### Groupes

Dieses Modul hat 3 Assoziationsgruppen. Nur der dritte ist wesentlich.

![Groupe](images/mco.mhs412/groupe.jpg)

## Gut zu wissen

### Besonderheiten

- Die Berührungstasten haben einen blauen Heiligenschein, wenn die Last gefahren wird
- Die Berührungstasten haben einen orangefarbenen Heiligenschein, wenn die Last nicht angetrieben wird
- die Berührung ist ziemlich angenehm und die Bedienelemente sind reaktionsschnell
- Dieser Switch kann seine Last im autonomen Modus steuern (nicht an einen Z-Wave-Controller angeschlossen)

## Wakeup

Da dieses Modul an das Stromnetz (220 V) angeschlossen ist, ist der Wecker unverzögert und erfordert daher keine besondere Aktion, wenn Parameter geändert werden

## Häufig gestellte Fragen.

Um dieses Modell auszuschließen, versetzen Sie Openzwave in den Ausschlussmodus und drücken Sie gemäß der Papierdokumentation nur eine der 2 Tasten auf der Vorderseite 3 Sekunden lang.

Um die Werkseinstellungen wiederherzustellen, drücken Sie gemäß der Papierdokumentation nur eine der 2 Tasten auf der Vorderseite für 10 Sekunden.
