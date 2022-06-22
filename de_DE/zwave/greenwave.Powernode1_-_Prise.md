# Greenwave PowerNode - 1 Steckdose

**Das Modul**

![module](images/greenwave.Powernode1/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/greenwave.Powernode1/vuedefaut1.jpg)

## Zusammenfassung

Das GreenWave PowerNode-Steckdosenmodul ist ein intelligentes Gerät, das sich mit einem Ihrer Haushaltsgeräte und Ihrer Elektronik verbindet, damit Sie den Stromverbrauch über einen Webbrowser oder ein Smartphone fernüberwachen und steuern können.

Mithilfe der Z-Wave-Technologie ist die PowerNode-gesteuerte Steckdose mit den meisten Heimautomatisierungsboxen auf dem Markt wie Fibaro Home Center 2, eedomus oder Zipabox kompatibel.

Das Steckdosenmodul PowerNode sammelt Daten über den Energieverbrauch des angeschlossenen Geräts und übermittelt diese an die Hausautomationsbox. Über diese kontrollierte Steckdose können Sie das Gerät auch per Fernzugriff über einen Webbrowser oder ein Smartphone ein- oder ausschalten oder einen Zeitplan festlegen, um Ihr Gerät zu vordefinierten Zeiten automatisch ein- oder auszuschalten.

Über ein kleines Rad an der Seite der Steckdose können Sie eine Farbe auswählen, die den Raum darstellt, dem sie zugewiesen ist. Zum Beispiel „Blau fürs Schlafzimmer ". Mit diesem Trick können Sie Ihre verschiedenen PowerNode-Steckdosen und Steckdosenleisten unterscheiden. Sie können dieses Rad auch an einem Vorhängeschloss einstellen. Diese Funktion ermöglicht es, die Steckdose zu sperren, um ein versehentliches Ausschalten zu vermeiden, aber eine Steuerung über die Hausautomationsbox ist dann nicht mehr möglich.

Die PowerNode-gesteuerte Steckdose verfügt außerdem über eine Statusanzeige, die je nach Farbe unterschiedliche Informationen liefert : Steckdosen ein oder aus, eingeschränkte Funkreichweite, Inklusions- und Exklusionsmodus.

Das PowerNode-Steckdosenmodul ist mit einem Überstromschutz ausgestattet, um das angeschlossene Gerät zu schützen. Bei einer fehlerhaften Gerätestörung oder einem Kurzschluss wird die PowerNode-Steckdose gesperrt. Zusätzlichen Schutz bietet die interne Sicherung in der Steckdose.

## Fonctions

-   Steuern Sie eine Lampe oder ein Gerät aus der Ferne
-   Plug-Modul zur direkten Integration zwischen einer Steckdose und der zu steuernden Last
-   Ermöglicht die Verbrauchsüberwachung des angeschlossenen Geräts
-   EIN/AUS-Funktion
-   Möglichkeit, ihm eine Nummer und eine Farbe zuzuweisen, um die verschiedenen PowerNodes derselben Installation zu unterscheiden
-   Ein-/Ausschalter direkt an der Steckdose
-   Überstromschutz
-   Helle Statusanzeige

## Technische Eigenschaften

-   Einspeisung : 250 V\~Wechselstrom, 50 Hz
-   Maximaler Ladestrom : 10A
-   Maximale Ladeleistung : 2400W (@240V)
-   Standby-Verbrauch : 0,4 W
-   Meßgenauigkeit : ±0,1 W
-   Überstromschutz : 10A interne Sicherung
-   Steckertyp : DIN49440 / CEE 7/7 (Schuko)
-   Hochfrequenz-Z-Welle : 868,42MHz
-   Maximale Z-Wave-Reichweite : 30m
-   Betriebstemperatur : 0 °C bis +25 °C
-   Lagertemperatur : -20 °C bis +60 °C
-   Maximale Luftfeuchtigkeit : 5 % bis 90 %
-   IP-Klasse (Feuchtigkeitstoleranz) : IP20

## Moduldaten

-   Markieren : GreenWave
-   Nachname : GreenWave\[1 x Steckdose\]
-   Hersteller-ID : 153
-   Geben Sie Produkt ein : 2
-   Produkt ID : 2

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die Inklusionstaste unter dem Sockel.

![inclusion](images/greenwave.Powernode1/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/greenwave.Powernode1/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/greenwave.Powernode1/commandes.jpg)

Hier ist die Liste der Befehle :

-   Bundesland : Dies ist der Befehl, der Sie über den Status des Sockets informiert
-   Wir : Dies ist der Befehl, mit dem Sie die Steckdose einschalten können
-   Aus : Dies ist der Befehl, mit dem Sie die Steckdose ausschalten können
-   Mächtig : Dies ist der Befehl, der die momentan verbrauchte Leistung zurückgibt
-   Verbrauch : Es ist der Befehl, der den Gesamtverbrauch zurückgibt

Beachten Sie, dass auf dem Dashboard die EIN/AUS/STATUS-Befehle in einer einzigen Schaltfläche zusammengefasst sind.

### Modulkonfiguration

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/greenwave.Powernode1/config1.jpg)

Wie Sie sehen können, gibt es nicht viel Konfiguration für dieses Modul.

Parameterdetails :

-   1 : Verzögerung vor dem Blinken der Taste : Mindestanzahl von Sekunden zwischen zwei Kommunikationen (wird diese Zeit überschritten, blinkt die Steckdosentaste)
-   2 : Ausgewählte Radfarbe (wird automatisch erkannt)

### Groupes

Dieses Modul hat vier Assoziationsgruppen, nur die 3. Gruppe ist wesentlich.

![Groupe](images/greenwave.Powernode1/groupe.jpg)

## Gut zu wissen

Im Gegensatz zu ihrer großen Schwester Multi-Socket benötigt diese Steckdose kein Polling, um den Verbrauch zu erhöhen.

### Reset

![Config2](images/greenwave.Powernode1/config2.jpg)

Sie können Ihren Verbrauchszähler zurücksetzen, indem Sie auf diese Schaltfläche klicken, die auf der Registerkarte System verfügbar ist. Sie müssen PressButton auswählen.

### Besonderheiten

## Wakeup

Kein Weckkonzept für dieses Modul.
