# Harmony Hub Plugin

Mit diesem Plugin können Sie alle Geräte steuern und abrufen, die mit einem oder mehreren Harmony Hubs verbunden sind.

Nachdem alle Informationen zu diesen Geräten erfasst wurden, kann das Plugin automatisch alle zugehörigen Befehle erstellen, um eine vollständige Steuerung über Jeedom zu ermöglichen.

# Konfiguration

Wie jedes Jeedom-Plugin muss auch das **Harmony Hub**-Plugin nach der Installation aktiviert werden.

## Plugin Konfiguration

Das Plugin verwendet Abhängigkeiten, die zunächst installiert werden müssen, indem Sie auf die Schaltfläche **Neustart** klicken.

Sobald die Abhängigkeiten installiert sind, können Sie die IP-Adresse eingeben, unter der der Harmony Hub erreichbar ist.

>**TIPP**
>
>Das Plugin kann gleichzeitig mit mehreren Hubs kommunizieren. Dazu muss die IP-Adresse jedes Hubs durch das Symbol getrennt angegeben werden `|`.

Speichern Sie die Konfiguration und starten Sie den Daemon.

## Gerätekonfiguration

Um auf die verschiedenen Geräte zuzugreifen, gehen Sie zum Menü **Plugins → Multimedia → Harmony Hub**.

Wenn das Plugin korrekt konfiguriert ist, wurden alle Ihre Geräte automatisch mit ihren Befehlen angelegt.

Für jedes Gerät finden wir die üblichen allgemeinen Einstellungen sowie ein Dropdown-Menü, über das das Symbol des Geräts ausgewählt werden kann. Diese Konfiguration ist optional und hat keinerlei Einfluss auf das Verhalten des Plugins.

# Wichtige Informationen

Überprüfen Sie, ob Sie in der Harmony-App die **Entwickleroption** aktivieren müssen.

Siehe diesen Link von Logitech:
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
