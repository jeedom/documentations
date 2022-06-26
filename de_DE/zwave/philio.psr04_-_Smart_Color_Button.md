# Philio Smart Color-Taste

**Das Modul**

![module](images/philio.psr04/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/philio.psr04/vuedefaut1.jpg)

## Zusammenfassung

Dieser einzigartig gestaltete Schalter bietet mehrere Funktionen. Sie können damit die Beleuchtung ein-, aus- oder dimmen, die Position Ihrer Rollläden anpassen, die Temperatur des Thermostats einstellen oder ihn als Timer verwenden.

Sobald der Philio PSR04-Switch in Ihr Z-Wave-Netzwerk aufgenommen wurde, muss er mit den Geräten gekoppelt werden, die Sie steuern möchten. Es kann nur durch direkte Verbindung mit Peripheriegeräten funktionieren und kann keine Szenen starten, die in Ihrem Z-Wave-Heimautomatisierungscontroller erstellt wurden.

Als Dimmer verwendet, verhält er sich wie ein herkömmlicher Dimmer. Drehen Sie den Knopf nach rechts, um das Licht zu verstärken, und nach links, um es zu verringern.

Darüber hinaus können Sie diesen Schalter dank seiner magnetischen Halterung leicht verschieben und an der Stelle Ihrer Wahl positionieren. Sein wasserdichtes Design ermöglicht die Installation an Orten mit hoher Luftfeuchtigkeit, wie z. B. einem Badezimmer.

Es verwendet den neuesten Chip der Z-Wave 500-Serie, der eine um 50 % höhere Funkreichweite und eine um 250 % schnellere Kommunikationsgeschwindigkeit im Vergleich zu früheren Z-Wave-Produkten sowie einen geringeren Stromverbrauch bietet und eine größere Autonomie ermöglicht.

## Fonctions

-   Multifunktionsschalter
-   Z-Wave+-Technologie
-   EIN/AUS-Funktion und Dimmen (Beleuchtung oder Jalousien))
-   Integrierte Timerfunktion
-   Etanche
-   Passt zu jedem Einrichtungsstil
-   Wiederaufladbare Batterie
-   Sehr geringer Stromverbrauch
-   Lange Akkulaufzeit (6 Monate pro Ladung)
-   Magnethalter
-   RGBW-Anzeige-LEDs
-   Einfach zu installieren

## Technische Eigenschaften

-   Einspeisung : Lithium-Polymer-Batterie 3.7 V, 220 mA Batterielebensdauer : 6 Monate für 2h Ladung
-   Standby-Verbrauch : 18µA
-   Verbrauch im Betrieb : 45mA
-   Frequenz : 868.42MHz
-   Übertragungsdistanz : 100 m im Freien, 40 m im Innenbereich
-   Maße : Die Unterstützung : 71,16 x 10,94 mm (Durchmesser x Dicke) Knopf : 59,99 x 14,89 mm (Durchmesser x Dicke) Halterung + Knopf : 71,16 x 17,22 mm (Durchmesser x Dicke) Zertifizierungen : EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950 FCC Teil 15 B, FCC Teil 15 C

## Moduldaten

-   Markieren : Philio
-   Nachname : PSR04 Intelligente Farbtaste
-   Hersteller-ID : 316
-   Geben Sie Produkt ein : 9
-   Produkt ID : 34

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, muss es gemäß seiner Papierdokumentation in die niedrige Position (Inklusion) gebracht und die Taste gedrückt werden.

![inclusion](images/philio.psr04/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.psr04/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/philio.psr04/commandes.jpg)

Hier ist die Liste der Befehle :

-   Bundesland : Dies ist der Befehl, der die Position der Schaltfläche von 0 auf 100 % erhöht
-   Batterie : Dies ist der Befehl, der den Batteriestatus des Moduls meldet

### Modul-Setup

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/philio.psr04/config1.jpg)

Parameterdetails :

-   1: definiert die unterste Grenze (ganz linke Position)
-   2 : definiert die obere Grenze (Position ganz rechts)
-   10 : Zeitintervall für die Wiederherstellung der Batterie
-   25 : können Sie festlegen, ob das Modul seine Position automatisch nach der Drehung sendet (1 Sekunde Verzögerung) oder ob Sie die Taste drücken müssen, um das Senden zu bestätigen
-   26 : aktiviert das Senden der Szene oder nicht beim Drücken der mittleren Taste (Parameter wird in Jeedom nicht berücksichtigt)

### Groupes

Dieses Modul hat zwei Assoziationsgruppen, die erste ist die einzig wesentliche. Die zweite erlaubt es, die Position zu Jeedom zurückzuverfolgen

![Groupe](images/philio.psr04/groupe.jpg)

## Gut zu wissen

### Besonderheiten

Um dieses Modul als Fernbedienung zu verwenden, gehen Sie wie folgt vor :

-   Fügen Sie den Controller in Gruppe 2 hinzu

Tatsächlich ist diese Art von Modul nicht dafür gemacht, direkt mit einer Box zu interagieren, sondern direkt mit anderen Modulen. Durch das Hinzufügen von Jeedom zu Gruppe 2 ist es jedoch möglich, die Position der Taste zu erhalten und sie daher zur Steuerung eines Szenarios zu verwenden (z. B. eine Lautstärke anzupassen)

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Bringen Sie das Modul in die untere Position und drücken Sie die Taste

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
