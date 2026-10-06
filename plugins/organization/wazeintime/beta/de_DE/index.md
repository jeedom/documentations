# Waze in Time Plugin

Dieses Plugin ermöglicht es, über Waze Routeninformationen (unter Berücksichtigung der Verkehrslage) abzurufen. Dieses Plugin funktioniert möglicherweise nicht mehr, wenn Waze keine Abfragen an seine Website mehr zulässt.

![wazeintime Screenshot1](../images/wazeintime_screenshot1.jpg)

# Konfiguration

## Plugin Konfiguration

Um das Plugin nutzen zu können, müssen Sie es wie jedes andere Jeedom-Plugin herunterladen, installieren und aktivieren.

Anschließend müssen Sie Ihre Route(n) erstellen. Gehen Sie dazu in das Menü „Plugins/Organisation“, dort finden Sie das Plugin „Waze in Time“:

![Konfiguration 1](../images/configuration1.jpg)

Anschließend gelangen Sie auf die Seite, auf der Ihre Geräte aufgelistet sind (Sie können mehrere Routen haben) und auf der Sie durch Klicken auf die Schaltfläche „Hinzufügen“ neue Routen erstellen können:

![wazeintime Screenshot2](../images/eqlogic_list.png)

Anschließend gelangen Sie auf die Konfigurationsseite Ihrer Route:

![wazeintime Screenshot3](../images/eqlogic_config.png)

Auf dieser Seite finden Sie drei Abschnitte:

### Allgemeine Einstellungen

In diesem Abschnitt finden Sie alle Jeedom-Konfigurationen. Dazu gehören der Name Ihres Geräts, das Objekt, mit dem Sie es verknüpfen möchten, die Kategorie, ob das Gerät aktiv sein soll oder nicht und ob es auf dem Dashboard angezeigt werden soll.

Zum Schluss müssen Sie, falls gewünscht, noch die automatische Aktualisierung einrichten. Wenn Sie keine Einstellungen vornehmen, werden die Informationen zu den Routen nicht automatisch aktualisiert.

### Reiseparameter

Dieser Abschnitt ist einer der wichtigsten, da er die Einstellung des Start- und Endpunkts ermöglicht.

- Diese Informationen müssen die Breiten- und Längengrade der Positionen sein
- Sie können über die angegebene Website abgerufen werden, indem Sie auf den Link auf der Seite klicken (geben Sie einfach eine Adresse ein und klicken Sie auf „GPS-Koordinaten abrufen“).

Es gibt verschiedene Möglichkeiten, diese bereitzustellen:

- manuell müssen Sie dann den Breiten- und Längengrad direkt codieren
- über einen Info-Befehl eines anderen Jeedom-Plugins. Wählen Sie in diesem Fall den Befehl aus, der die Informationen im Format „Breitengrad, Längengrad“ zurückgeben soll.
- über die Jeedom-Konfiguration (siehe Menü „Konfiguration“ in Jeedom)
- durch direkte Auswahl eines Befehls aus dem Plugin „geoloc“ oder „geoloc_ios“, sofern diese Plugins vorhanden sind (diese Option sollte für neue Geräte nicht mehr verwendet werden; nutzen Sie stattdessen die oben beschriebene Option zur Befehlsauswahl)

Es ist außerdem möglich, die Abonnements auszuwählen, die bei der Routenberechnung aktiviert werden sollen. Dazu muss eine durch Kommas getrennte Liste von Werten eingegeben werden oder _*_, um alle zu aktivieren.

### Bildschirmeinstellungen

Mit dieser Einstellung können Sie die im Widget auf dem Dashboard ausgewählten Routen einfach ausblenden; diese werden jedoch bei der Aktualisierung der Geräte weiterhin aktualisiert.

### Bedienfeld

![config3](../images/cmd_list.png)

- Dauer 1, 2 & 3: Dauer der Hinfahrt mit den Strecken 1, 2 & 3
- Route 1, 2 & 3: Name der Route 1, 2 & 3 (von Waze angegeben)
- Rückfahrzeit 1, 2 & 3: Rückfahrzeit mit den Routen 1, 2 & 3
- Rückfahrt 1, 2 und 3: Name der Rückfahrt 1, 2 und 3 (von Waze angegeben)
- Aktualisieren: Ermöglicht das Aktualisieren der Informationen

Alle diese Befehle sind über Szenarien und über das Dashboard verfügbar

# Das Widget

![wazeintime Screenshot1](../images/wazeintime_screenshot1.jpg)

- Mit der Schaltfläche oben rechts können Sie die Informationen aktualisieren.
- Alle Informationen sind sichtbar (bei Routen: Bei langen Routen kann der Text abgeschnitten sein, die vollständige Version wird jedoch angezeigt, wenn man mit der Maus darüberfährt).

# Wie werden die Routen aktualisiert?

Die Informationen werden entsprechend der Einstellung zur automatischen Aktualisierung des Geräts aktualisiert. Wenn keine Einstellung vorgenommen wurde, werden die Routen niemals automatisch aktualisiert.
Sie können sie bei Bedarf über ein Szenario mit dem Befehl „Aktualisieren“ oder über das Dashboard mit den Doppelpfeilen aktualisieren.
