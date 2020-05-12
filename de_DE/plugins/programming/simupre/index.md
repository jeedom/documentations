# Präsenzsimulations-Plugin

Mit diesem Plugin können Sie auf einfache Weise eine Präsenz im Haus simulieren, wenn Sie glaubwürdig abwesend sind (Zeit und zufällige Dauer von Ereignissen)

Sie können finden [hier](https://blog.jeedom.com/4266-simulation-de-presence/) Ein Artikel mit einer Beispielkonfiguration des Plugins

# Plugins Konfiguration

Hier gibt es nichts Besonderes, nur um das Plugin zu installieren und zu aktivieren

# Konfiguration von Simulationen

Auf der ersten Registerkarte finden Sie die gesamte Konfiguration Ihrer Geräte :

- Name der Ausrüstung : Name Ihrer Simulationsausrüstung,
- Übergeordnetes Objekt : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
- Aktivieren : macht Ihre Ausrüstung aktiv,
- Sichtbar : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar.

Dann müssen Sie zwei weitere Parameter konfigurieren :

- Breite und Länge Ihres Hauses, wodurch das Plugin die Sonnenauf- und -untergangszeiten lokal berechnen kann

Auf der zweiten Registerkarte finden Sie die Konfiguration der Simulationen :

- Sie haben einen Namen (um sie leichter zu finden)
- eine Startbedingung, wenn die Bedingung falsch ist, wird die Simulation nicht durchgeführt (wenn Sie nichts eingeben, wird die Konfiguration notwendigerweise gestartet)
- Eingabeaktionen : werden beim Starten der Simulation ausgeführt
- Ausgabeaktionen (optional) : werden am Ende der Simulation durchgeführt
- Startzeiten und -dauern :
  - Die Startzeit kann zwischen 2 Terminals festgelegt werden (zwischen 18:30 Uhr und 19:30 Uhr wählt das Plugin beispielsweise jeden Tag eine zufällige Zeit zwischen den beiden Terminals)
  - Die Startzeit kann relativ zum Sonnenaufgang sein (z. B. von -20 für 20 Minuten vor bis 30 für 30 Minuten danach)
  - Die Startzeit kann relativ zum Sonnenuntergang sein (z. B. von -10 für 10 Minuten vor bis 15 für 15 Minuten danach)
- eine Dauer oder eine Endstunde
  - Wenn es sich um eine Dauer handelt, müssen Sie für eine zufällige Dauer zwischen 20 und 40 Minuten nur mindestens 20 und maximal 40 eingeben
  - Für eine feste Endzeit zwischen 19:05 und 19:35 ist es notwendig, 19 zu setzen:05 in min und 19:35 max
- Probe : Mit dieser Option können Sie die Start- / Endaktion über den Zeitraum X-mal wiederholen (beachten Sie, dass der Zeitraum größer als 2 Minuten sein muss. Sie können beispielsweise bei einer Simulation mit einer Dauer von 5 Minuten keine 5 Wiederholungen durchführen.). Es wird empfohlen, nicht mehr als 5 zu wiederholen, da das System sie möglicherweise nicht ausführt

>**Notiz**
>
> Das Format für die Stunden ist wie folgt hh:mm, für 12:30 Uhr, also setzen Sie 12:30

>**Wichtig**
>
> Das Plugin zeigt die prognostizierten Stunden der Simulation für den nächsten Zeitraum an (wenn Sie mehrere haben, sehen Sie Folgendes nicht)
