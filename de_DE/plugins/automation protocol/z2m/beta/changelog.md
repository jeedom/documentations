# Änderungsprotokoll jeeZigbee

>**WICHTIG**
>
>Wenn es keine Informationen über die Aktualisierung gibt, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt.

- Verbessertes Firmware-Update auf Luna
- Bessere Hafenverwaltung auf Luna
- Vereinfachung der Portliste
- Möglichkeit, eine Nachricht zu einem Unterthema des Set-Befehls zu senden : arm_mode/mode::arming_stay

# 26.12.2023

- Verbessertes Herunterfahren des zigbee2mqtt-Daemons
- Bug-Fix

# 21.12.2023

- Streichung des Instanzbegriffs
- Möglichkeit, eine Einbindung direkt auf einem Router-Modul zu starten
- Conbee 3-Unterstützung hinzugefügt
- Unterstützung für Raspberry 2 hinzugefügt

# 12.08.2023

- Option „Nachrichten nicht zulassen, wenn das Gerät länger als (s) nicht gesehen wurde“ hinzugefügt (Reserviert für fortgeschrittene Benutzer)

# 12.05.2023

- Unterstützung für ZigBee-Firmware-Update auf Luna (Beta)
- Unterstützung für lange logische IDs bei Befehlen
- Möglichkeit, einen Aktualisierungsbefehl zu erstellen (Sie müssen einen Befehl hinzufügen, dann action/default eingeben und im Feld „Logische ID“ „refresh“ eingeben)
- Möglichkeit, einen Cron hinzuzufügen, der die Aktualisierung der Werte anfordert (Achtung, nichts garantiert, dass das Modul sie wirklich aktualisiert, es muss dies unterstützen))
- Ein Fehler mit der neuesten Version von zigbee2mqtt wurde behoben


# 11.06.2023

- Ein Fehler in der Gruppenverwaltung wurde behoben
- Codeoptimierung
- Fehler während der Plugin-Installation behoben (Fehler 500)

# 22.09.2023

- Möglichkeit, die Version von zigbee2mqtt auszuwählen

>**WICHTIG**
>
>Wenn Sie nach früheren Updates Probleme mit einem nicht erreichbaren Modul haben, müssen Sie ein Jeedom-Backup von vor dem Update wiederherstellen und dann das Update wiederholen. Ich entschuldige mich aufrichtig für diesen Fehler, der bei einigen von Ihnen auftritt. Er kommt von einer unerwarteten Funktion von Zigbee2MQTT, die ich in meinen verschiedenen Laboren nicht habe.

# 20.09.2023

- Ein Fehler in der zigbee2mqtt-Version wurde behoben

# 19.09.2023

- Es wurde ein Fehler beim Aktualisieren von Abhängigkeiten (Zigbee2MQTT) behoben, wenn Sie jeedom wiederhergestellt haben

# 08.09.2023

- Es wurde ein Fehler behoben, der verhinderte, dass Bestellungen korrekt erstellt wurden

# 04.09.2023

- Möglichkeit, den Überwachungsport von zigbee2mqtt zu konfigurieren
- Ein Problem mit Farbtypbefehlen wurde behoben
- Korrektur bei der Generierung von Befehlen, die in bestimmten Fällen nicht funktionieren konnten
- Verbesserte Befehlsbenennung
- Möglichkeit für Atlas-Boxen mit Elelabs-Controllern, die Firmware von Jeedom aus zu aktualisieren

# 07.03.2023

- Ein Problem beim Senden eines Positionierungsbefehls (Verschlusstyp) wurde behoben)

# 27.06.2023

- Ein Problem bei der Erkennung bestimmter Module (einschließlich Profalux) wurde behoben)

# 30.05.2023

- Erste Version
