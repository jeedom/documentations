# MCO MH-S412 Double

**Das Modul**

![module](images/mco.mhs412/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/mco.mhs412/vuedefaut1.jpg)

## Zusammenfassung

Mit dem MH-S412-EU-Switch können Sie die beiden angeschlossenen Lasten entweder manuell wie ein herkömmlicher Switch oder remote über das Z-Wave-Funkprotokoll umschalten.

Die Glasoberfläche und das Design bringen einen modernen Stil.

Der Schalter MH-S412-EU kann jede Art von Last, Beleuchtung oder Elektrogerät steuern.

Der Schalter ist außerdem mit einer LED-Anzeige ausgestattet, die seinen Status anzeigt.

## Fonctions

-   Steuern Sie zwei Lampen oder Geräte fern
-   Wird anstelle eines vorhandenen Schalters installiert (passt perfekt in eine 40-mm-Unterputzdose)
-   EIN / AUS-Funktion
-   Unterstützungszuordnungsbefehle (Gruppe 1 und Gruppe 2))
-   Kontrolle der beiden Ladungen vor Ort
-   Status-LED
-   Glasoberfläche, modernes Design
-   Berühren Sie die Tasten

## Technische Daten

-   Modultyp : Z-Wave Empfänger
-   Farbe : Blanc
-   Versorgung : 230 V, 50 Hz
-   Verkabelung : 3 Draht, Neutralleiter erforderlich
-   Maximale Leistung : 5A (1100 W) für jeden Kanal
-   Frequenz : 868,42 MHz
-   Geltungsbereich : bis zu 30 m
-   Abmessungen : 86 x 86 x 43 mm
-   Affichage: Blaue / rote LED

## Moduldaten

-   Machen Sie : MC HOME
-   Name : MH-S412 Double
-   Hersteller ID : 351
-   Produkttyp : 16642
-   Produkt-ID : 514

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie eine der beiden Tasten auf der Vorderseite gemäß der Papierdokumentation 3 Sekunden lang.

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/mco.mhs412/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/mco.mhs412/commandes.jpg)

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Parameter geklickt haben)

![Config1](images/mco.mhs412/config1.jpg)

Parameterdetails :

-   1: Speicherzustand vor Stromausfall : enable (ermöglicht das Auffinden des letzten Status der Schalter kurz vor dem Stromausfall) deaktivieren )

### Groupes

Dieses Modul hat 3 Zuordnungsgruppen. Nur der dritte ist wesentlich.

![Groupe](images/mco.mhs412/groupe.jpg)

## Gut zu wissen

### Besonderheiten

- Die Touch-Tasten haben einen blauen Heiligenschein, wenn die Last gesteuert wird
- Die Touch-Tasten haben einen orangefarbenen Heiligenschein, wenn die Last nicht gesteuert wird
- Die Berührung ist eher angenehm und die reaktionsschnelle Steuerung
- Dieser Schalter kann seine Last im autonomen Modus steuern (nicht an einen Z-Wave-Controller angeschlossen))

## Wakeup

Da dieses Modul an das Stromnetz (220 V) angeschlossen ist, ist der Wecker sofort verfügbar und erfordert daher keine besonderen Maßnahmen beim Ändern von Parametern

## Faq.

Um dieses Modell auszuschließen, versetzen Sie Openzwave in den Ausschlussmodus und drücken Sie eine der beiden Tasten auf der Vorderseite gemäß der Papierdokumentation 3 Sekunden lang.

Um die Werkseinstellungen wiederherzustellen, drücken Sie gemäß der Papierdokumentation 10 Sekunden lang eine der beiden Tasten auf der Vorderseite.
