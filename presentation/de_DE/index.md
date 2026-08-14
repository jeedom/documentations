# Übersicht

Jeedom ist eine kostenlose Open-Source-Software, die auf jedem Linux-System installiert werden kann. Sie basiert auf einem Kern mit zahlreichen Funktionen: Szenarienverwaltung, Interaktion mit der Hausautomationsanlage über Text- und Sprachbefehle, Anzeige von Verlaufsdaten sowie Erstellung von Kurven und Diagrammen, Vernetzung aller Geräte und vernetzten Objekte, Anpassung der Benutzeroberfläche... Dank der übersichtlichen und intuitiven Benutzeroberfläche lässt sich eine Komplettlösung auch ohne Programmierkenntnisse einrichten.

Jeedom benötigt für den Betrieb keinen Zugriff auf externe Server. Ihre gesamte Anlage wird lokal verwaltet, sodass nur Sie Zugriff darauf haben und somit vollständige Vertraulichkeit gewährleistet ist.

Dank seiner Flexibilität und der zahlreichen Anpassungsmöglichkeiten kann jeder Nutzer sein eigenes Jeedom-Hausautomationssystem erstellen. Mithilfe von Widgets, Ansichten und Designs haben Sie die völlige Freiheit, Ihre eigene Benutzeroberfläche zu gestalten, wenn Sie dies wünschen.

Jeedom bietet zahlreiche Möglichkeiten, darunter:

- Sicherheit von Personen und Eigentum gewährleisten,
- Die Heizung automatisieren – für mehr Komfort und Energieeinsparungen,
- Den Energieverbrauch anzeigen und verwalten, um Kosten zu prognostizieren und den Verbrauch zu senken,
- Kommunikation per Sprache, SMS, E-Mail oder über mobile Apps,
- Alle Automatisierungen im Haus steuern: Rollläden, Tor, Beleuchtung usw.,
- Verwaltung von Audio- und Video-Multimedia-Geräten sowie vernetzten Objekten.


Jeedom basiert auf dem Core (dem Kern), der die zentrale Struktur und die Kernfunktionen enthält.

Verschiedenes [Plugins](https://market.jeedom.com) können dann neue Funktionen bieten.

Der Core umfasst unter anderem:

## Dashboard / Übersicht

*Die Geräte, darunter Aktoren und Sensoren, sind nach Objekten gegliedert. Die Objekte können beispielsweise physische Räume darstellen.*

[Zusammenfassung](/core/overview)

![Zusammenfassung](../images/doc-presentation-synthese.jpg)

[Dashboard](/core/dashboard)

![Dashboard](../images/doc-presentation-dashboard.jpg)


## Verlauf

*Alle Informationen können protokolliert werden (Temperaturkurven, Verbrauchswerte, Türöffnungen usw.) und sind unter „Analyse“ → „Verlauf“ oder über die Kacheln auf dem Dashboard abrufbar.*

[Geschichte](/core/history)

[Zeitleiste](/core/timeline)

![Verlaufsseite](../images/doc-presentation-historique.jpg)

## Szenarien

*Mit Szenarien können Sie Ihre Geräte ganz oder teilweise automatisieren. Sie bestehen aus verschiedenen Bausteinen: Bedingungsbausteine („Wenn“, „Dann“, „Sonst“), Aktionsbausteine, Programmierbausteine („IN x Minuten“ oder „Um hhmm“), Schleifenbausteine, Kommentarbausteine oder PHP-Code-Bausteine. Alle Bausteine lassen sich miteinander verknüpfen und bieten so unendliche Möglichkeiten.*

[Mein erstes Szenario](/concept/#tocAnchor-4)

![Seite „Szenario“](../images/doc-presentation-scenario.jpg)

## Erstellung von Widgets

*Jeedom bietet eine Widget-Erstellungsfunktion für die Steuerung von Geräten. So können Sie zusätzlich zu den Standard-Widgets Ihre eigenen Widgets erstellen. Für fortgeschrittene Nutzer ist die Erstellung von Widgets auch direkt über den Code möglich.*

![Widgets](../images/doc-presentation-widgets.jpg)

## Interaktionen

*Das Interaktionssystem in Jeedom ermöglicht es, Aktionen anhand von Text- oder Sprachbefehlen auszuführen.*

![Seite „Interaktion“](../images/doc-presentation-interaction.jpg)

## Update-Center

*Über das Update-Center können alle Funktionen von Jeedom aktualisiert werden, einschließlich der Kernsoftware (Core) und ihrer Plugins. Weitere Funktionen zur Verwaltung der Erweiterungen stehen zur Verfügung (löschen, neu installieren, überprüfen usw.).*

![Seite „Sicherung“](../images/doc-presentation-update.jpg)


# Markt

Um diesen Kern herum werden Plugins integriert, die unterschiedlichster Art sein können:

-   Hausautomationsprotokolle (Z-Wave, RFXcom, EnOcean…),
-   IP-Protokoll (KNX, xPL…),
-   vernetztes Objekt (Nest, Netatmo…),
-   Übergeordnete Ebene (Alarm, Thermostat…),
-   Organisation (Kalender, Google Kalender),
-   Entwicklung (Skript).

Diese Plugins können über den Market installiert werden und erweitern die Möglichkeiten von Jeedom.

![Market-Seite](../images/doc-presentation-market.jpg)

Jeedom ermöglicht es jedem Plugin, auf einer standardisierten Basis mit einem anderen Plugin zu kommunizieren. So lassen sich beispielsweise Thermostat- oder Alarm-Plugins mit jedem beliebigen Hausautomationsprotokoll oder sogar mit einem IP-Plugin oder einem vernetzten Objekt verwenden…
