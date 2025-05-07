# Änderungsprotokoll jeeZigbee

>**WICHTIG**
>
>Wenn es keine Informationen über die Aktualisierung gibt, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt.

- Possibilité de mettre a jour le firmware de la luna en 8.0.2.0
- Version de zigbee2mqtt par defaut 2.2.1
- .

>**WICHTIG**
>
>SUr les luna il faut mettre a jour votre firmware en 8.0.2.0 pour avoir un zigbee2mqtt qui marche en 2.2.1

# 14/01/2025

- Mise à jour de la doc

# 07/01/2025

- La version par defaut de zigbee2mqtt est maintenant 1.42.0
- Support de l'installation de la version de zigbee2mqtt 2.0.X (attention pour l'instant l'installation est possible mais on ne garantie pas que tout marche meme si les 1er tests sont encourageant)
- Bug-Fix

# 16.12.2024

- Aktualisierung der Dokumentation
- Die Schaltfläche zur Firmware-Aktualisierung ist ausgeblendet, wenn Sie sich im Remote-Modus befinden
- Verbesserter Daemon-Start
- Standardmäßig befindet sich das Plugin im lokalen Modus (anstatt auf die Konfiguration zu warten))
- Die Version von zigbee2mqtt ist standardmäßig 1.41 (vorübergehend bis zur Veröffentlichung von 2.0)
- Firmware-Update-Schaltfläche auf Luna entfernt (vorübergehend))

# 27.09.2024

- Änderung der Mindestversionen, Core 4.4 und OS Debian 11 mindestens

# 24.09.2024

- Auf der Geräteseite wurde ein Link hinzugefügt, der für weitere Informationen auf die Geräteseite von zigbee2mqtt verweist

# 10.09.2024

- Bei Boxen mit elelabs-Dongles besteht die Möglichkeit, die Ember-Firmware zu flashen (experimentell). Dies kann Ihren Dongle vollständig beschädigen und wird weder von der Garantie noch vom Support abgedeckt)
- Es wurde ein Fehler behoben, der auftrat, wenn das Stammthema nicht zigbee2mqtt lautete

# 08.05.2024

- Verbesserte Bildverwaltung
- Baudratenkorrektur bei Deconz
- Es wurde ein Fehler behoben, der dazu führte, dass das Konfigurationsfenster eines Knotens angezeigt wurde, wenn ein Ausrüstungsgegenstand gelöscht wurde, während er für die Bindung an einen anderen Knoten verwendet wurde

# 16.07.2024

- Es wurde ein Fehler behoben, der auf ein Update von zigbee2mqtt hinweist, wenn die Version bereits auf dem neuesten Stand ist
- Ember-Schlüsseltyp hinzugefügt
- Beim ersten Start des Daemons wurde ein Problem bezüglich der Rechte an der Protokolldatei behoben
- Ein Problem bei einigen Bildern wurde behoben

# 22.04.2024

- Ein Fehler bei der Befehlsduplizierung (in Szenen) wurde behoben)
- Ein Fehler bei Schiebereglern mit negativem Wert wurde behoben

# 03.04.2024

- Ein Fehler im Image der neuesten Version von zigbee2mqtt wurde behoben

# 20.03.2024

- Ein Fehler mit dem Aktualisierungsbefehl wurde behoben

# 13.03.2024

- Beschränkung der Aktualisierung der Zigbee-Firmware auf Luna-auf-Luna-Boxen (vermeidet die Beschädigung des Zigbee-Chips im Falle einer falschen Wahl))

# 26.02.2024

- Ein Problem bei der Installation von mqtt wurde behoben
- Änderung am Unterthema (es ist jetzt ein befehlsspezifisches Konfigurationsfeld). Achten Sie darauf, Ihre Befehle zu aktualisieren, wenn Sie sie verwendet haben.
- Änderung der Syntax des Feldes logicalId für Aktionen (Wechsel in den JSON-Modus)::). Um die Neuigkeiten zu erfahren, konsultieren Sie bitte die Plugin-Dokumentation.
- Hinzufügen des /dev/ttyAMA0-Ports für raspbee2 auf RPI
- Bug-Fix
- Es wurde eine Schaltfläche zum Deaktivieren des Inklusionsmodus hinzugefügt
- Verbesserte Erkennung des Einschlussmodus
- Fehlerbehebung (Plugin ignoriert jetzt leere Werte für Befehle)

# 19.02.2024

- Ein Problem bei der Installation von mqtt wurde behoben


# 17.01.2024

- Verbessertes Firmware-Update auf Luna
- Bessere Hafenverwaltung auf Luna
- Vereinfachung der Portliste
- Möglichkeit, eine Nachricht zu einem Unterthema des Set-Befehls zu senden : arm_mode/mode::arming_stay
- Bug-Fix
- Verwaltung von Statusrückmeldungen zu Gruppen

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
