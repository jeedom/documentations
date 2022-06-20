# Greenwave PowerNode – 6 Steckdosen

**Das Modul**

![module](images/greenwave.powernode/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/greenwave.powernode/vuedefaut1.jpg)

## Zusammenfassung

Die PowerNode-Steckdosenleiste von GreenWave ist ein intelligentes Gerät, das sich mit Ihren Haushaltsgeräten und Ihrer Elektronik verbindet, damit Sie den Stromverbrauch Ihrer Geräte aus der Ferne über einen Webbrowser oder ein Smartphone überwachen und steuern können. Durch die Z-Wave-Technologie ist die PowerNode-Steckdosenleiste mit den meisten Heimautomatisierungsboxen auf dem Markt kompatibel, wie z. B. Fibaro Home Center 2, eedomus oder Zipabox. Ausgestattet mit 6 Anschlüssen kann es 6 verschiedene elektrische Geräte mit einer Gesamtleistung von 10 A unabhängig voneinander steuern.

Die PowerNode Steckdosenleiste sammelt Daten über den Energieverbrauch angeschlossener Geräte und übermittelt diese an die Hausautomationsbox. Sie können dann den Energieverbrauch jedes angeschlossenen Geräts steuern. Mit dieser Steckdosenleiste können Sie Geräte auch per Fernzugriff über einen Webbrowser oder ein Smartphone ein- oder ausschalten oder einen Zeitplan festlegen, um Ihre Geräte zu voreingestellten Zeiten automatisch ein- oder auszuschalten. Mit einem kleinen Knopf an der Seite der Steckdosenleiste können Sie eine Farbe auswählen, die den Raum darstellt, dem die Steckdosenleiste zugewiesen ist. Zum Beispiel „Blau fürs Schlafzimmer ". Mit diesem Trick können Sie Ihre verschiedenen PowerNode-Steckdosenleisten unterscheiden. Sie können dieses Rad auch an einem Vorhängeschloss einstellen. Mit dieser Funktion können Sie die Steckdosenleiste sperren, um ein versehentliches Ausschalten zu vermeiden, aber eine Steuerung über die Hausautomationsbox ist dann nicht mehr möglich.

Die PowerNode-Steckdosenleiste verfügt außerdem über eine Lichtstatusanzeige, die je nach Farbe unterschiedliche Informationen gibt : Steckdosen ein oder aus, eingeschränkte Funkreichweite, Inklusions- und Exklusionsmodus.

Die PowerNode-Steckdosenleiste ist mit einem Überstromschutz ausgestattet, um angeschlossene Geräte zu schützen. Der PowerNode deaktiviert Ports im Falle einer fehlerhaften Gerätefehlfunktion oder eines Kurzschlusses. Zusätzlichen Schutz bietet die interne Sicherung in der Steckdosenleiste.

Diese Steckdosenleiste ist ideal für die Steuerung von Multimedia-Geräten in einem Fernsehschrank oder für die Steuerung von Computergeräten in einem Büro und vermeidet so die Verwendung von 6 einzelnen Z-Wave-Steckdosen.

## Fonctions

-   6-Port Z-Wave-Steckdosenleiste
-   Ermöglicht die Überwachung des Verbrauchs angeschlossener Geräte
-   EIN/AUS-Funktion
-   Möglichkeit, ihm eine Nummer und eine Farbe zuzuweisen, um die verschiedenen PowerNodes derselben Installation zu unterscheiden.
-   Ein-/Ausschalter direkt an der Steckdosenleiste
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
-   Nachname : GreenWave\[6 x Steckdosen\]
-   Hersteller-ID : 153
-   Geben Sie Produkt ein : 3
-   Produkt ID : 4

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die Inklusionstaste am Sockel.

![inclusion](images/greenwave.powernode/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/greenwave.powernode/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/greenwave.powernode/commandes.jpg)

![Aufträge](images/greenwave.powernode/commandes2.jpg)

![Aufträge](images/greenwave.powernode/commandes3.jpg)

![Aufträge](images/greenwave.powernode/commandes4.jpg)

![Aufträge](images/greenwave.powernode/commandes5.jpg)

Hier ist die Liste der Befehle :

-   Zustand-1 : Dies ist der Befehl, der Sie über den Status von Socket 1 informiert
-   Auf 1 : Dies ist der Befehl, der Socket 1 einschaltet
-   Aus-1 : Dies ist der Befehl, der Socket 1 ausschaltet
-   Macht-1 : Dies ist der Befehl, der den momentanen Stromverbrauch von Steckdose 1 meldet
-   Conso-1 : Dies ist der Befehl, der den Gesamtverbrauch von Socket 1 meldet
-   Staat-2 : Dies ist der Befehl, der Sie über den Status von Socket 2 informiert
-   Ein-2 : Dies ist der Befehl, der Socket 2 einschaltet
-   Aus-2 : Dies ist der Befehl, der Socket 2 ausschaltet
-   Macht-2 : Dies ist der Befehl, der den momentanen Stromverbrauch von Steckdose 2 meldet
-   Conso-2 : Dies ist der Befehl, der den Gesamtverbrauch von Socket 2 meldet
-   Zustand-3 : Dies ist der Befehl, der Sie über den Status von Socket 3 informiert
-   Auf 3 : Dies ist der Befehl, der Socket 3 einschaltet
-   Aus-3 : Dies ist der Befehl, der Socket 3 ausschaltet
-   Macht-3 : Dies ist der Befehl, der den momentanen Stromverbrauch von Steckdose 3 meldet
-   Conso-3 : Dies ist der Befehl, der den Gesamtverbrauch von Socket 3 meldet
-   Staat-4 : Dies ist der Befehl, der Sie über den Status von Socket 4 informiert
-   Ein-4 : Dies ist der Befehl, der Socket 4 einschaltet
-   Aus-4 : Dies ist der Befehl, der Socket 4 ausschaltet
-   Macht 4 : Dies ist der Befehl, der den momentanen Stromverbrauch von Steckdose 4 meldet
-   Conso-4 : Dies ist der Befehl, der den Gesamtverbrauch von Socket 4 meldet
-   Staat-5 : Dies ist der Befehl, der Sie über den Status von Socket 5 informiert
-   Ein-5 : Dies ist der Befehl, der Socket 5 einschaltet
-   Aus-5 : Dies ist der Befehl, der Socket 5 ausschaltet
-   Macht-5 : Dies ist der Befehl, der den momentanen Stromverbrauch von Steckdose 5 meldet
-   Conso-5 : Dies ist der Befehl, der den Gesamtverbrauch von Socket 5 zurückgibt
-   Staat-6 : Dies ist der Befehl, der Sie über den Status von Socket 6 informiert
-   Ein-6 : Dies ist der Befehl, der Socket 6 einschaltet
-   Aus-6 : Dies ist der Befehl, der Socket 6 ausschaltet
-   Macht-6 : Dies ist der Befehl, der den momentanen Stromverbrauch von Steckdose 6 meldet
-   Conso-6 : Dies ist der Befehl, der den Gesamtverbrauch von Socket 6 meldet

Beachten Sie, dass die EIN/AUS/STATUS-Befehle auf dem Dashboard in einer einzigen Schaltfläche zusammengefasst sind.

### Modul-Setup

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/greenwave.powernode/config1.jpg)

Wie Sie sehen können, gibt es nicht viel Konfiguration für dieses Modul.

Parameterdetails :

-   1 : Verzögerungen, bevor die Taste blinkt : Mindestanzahl von Sekunden zwischen zwei Kommunikationen (wird diese Zeit überschritten, blinkt die Steckdosentaste)
-   2 : Ausgewählte Radfarbe (wird automatisch erkannt)

### Groupes

Dieses Modul hat vier Assoziationsgruppen, nur die 1. Gruppe ist wesentlich.

![Groupe](images/greenwave.powernode/groupe.jpg)

## Gut zu wissen

### Besonderheiten / Umfrage

Anders als ihre kleine Schwester „One socket“ benötigt diese Steckdosenleiste Polling, um den Verbrauch zu erhöhen.
![Config2](images/greenwave.powernode/config2.jpg)

Es muss nur für den Power-Befehl jeder Steckdose aktiviert werden. Dies wird den Effekt haben, dass die beiden (Verbrauch und Leistung) angehoben werden)

### Globaler Konsum

![consocumul](images/greenwave.powernode/consocumul.jpg)

Sie können einen virtuellen verwenden, um einen kumulierten Verbrauch der 6 Steckdosen zu erstellen.

![consocumul2](images/greenwave.powernode/consocumul2.jpg)

### Reset

![Config3](images/greenwave.powernode/config3.jpg)

Sie können Ihren Verbrauchszähler zurücksetzen, indem Sie auf diese Schaltfläche klicken, die auf der Registerkarte System verfügbar ist. (Es gibt einen Reset pro Sockel). Sie müssen PressButton auswählen.

## Wakeup

Kein Weckkonzept für dieses Modul.
