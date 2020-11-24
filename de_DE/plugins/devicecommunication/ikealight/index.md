# IkeaLight Plugin

Mit dem IkeaLight-Plugin kann eine Verbindung zum Ikea Tradfri-Gateway hergestellt werden. Sie können Ihre Lichter steuern und Echtzeit-Status-Feedback erhalten.

# Configuration

## Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie es aktivieren und die IP Ihres Gateways sowie den auf dem Gateway-Etikett verfügbaren Schlüssel (den "Sicherheitscode") eingeben").

## Lampenerkennung

Um Ikea-Geräte zu scannen, starten Sie einfach den Dämon (sobald die Abhängigkeiten gestartet wurden). Die vom Gateway wieder zusammengebauten und von Jeedom erkannten Lampen werden automatisch erstellt. Wenn eine Glühbirne nicht auftaucht, setzen Sie bitte das Debug-Plugin ein, um die Erkennung neu zu starten, und stellen Sie uns das Protokoll zur Verfügung, damit wir die fehlenden Glühbirnen hinzufügen können. (Denken Sie daran, Ihre Glühbirne und ihre Eigenschaften im Ticket anzugeben : Ist es dimmbar, ist es variabel in Weiß, ist es variabel in Farbe?). Das Plugin bringt Ihnen auch die Blinds Sockets

**Einmal entdeckt, wird jede Glühbirne haben :**

-   Die entsprechenden Aktionen
-   Die entsprechenden Infos

>**Symfonisk**
>
>Mit Symfonisk verbundene Lautsprecher werden nicht von diesem Plugin, sondern vom Sonos-Plugin verwaltet
