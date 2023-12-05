# Änderungsprotokoll jeeZigbee

>**WICHTIG**
>
>Wenn es keine Informationen über die Aktualisierung gibt, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt.

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
>Wenn Sie nach dem vorherigen Update Probleme mit einem nicht erreichbaren Modul haben, müssen Sie ein Jeedom-Backup von vor dem Update wiederherstellen und dann das Update wiederholen. Ich entschuldige mich aufrichtig für diesen Fehler, der bei einigen von Ihnen auftritt. Er kommt von einer unerwarteten Funktion von zigbee2mqtt, die ich in meinen verschiedenen Laboren nicht habe.

# 20.09.2023

- Ein Fehler in der zigbee2mqtt-Version wurde behoben

# 19.09.2023

- Ein Fehler beim Aktualisieren von Abhängigkeiten (zigbee2mqtt) wurde behoben, wenn Sie jeedom wiederhergestellt haben

# 08.09.2023

- Es wurde ein Fehler behoben, der verhinderte, dass Bestellungen korrekt erstellt wurden

# 04.09.2023

- Möglichkeit, den Überwachungsport von zigbee2mqtt zu konfigurieren
- Ein Problem mit Farbtypbefehlen wurde behoben
- Korrektur bei der Generierung von Befehlen, die in bestimmten Fällen nicht funktionieren konnten
- Verbesserte Befehlsbenennung
- Möglichkeit für Atlas-Boxen oder Elelabs-Controller, die Firmware von Jeedom aus zu aktualisieren

# 07.03.2023

- Ein Problem beim Senden eines Positionierungsbefehls (Verschlusstyp) wurde behoben)

# 27.06.2023

- Ein Problem bei der Erkennung bestimmter Module (einschließlich Profalux) wurde behoben)

# 30.05.2023

- Erste Version
