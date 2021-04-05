# IkeaLight Plugin

Mit dem IkeaLight-Plugin kann eine Verbindung zum Ikea Tradfri-Gateway hergestellt werden. Sie können Ihre Lichter steuern und Echtzeit-Status-Feedback erhalten.

# Configuration

## Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie es aktivieren und die IP Ihres Gateways sowie den auf dem Gateway-Etikett verfügbaren Schlüssel (den "Sicherheitscode") eingeben").

## Lampenerkennung

Um Ikea-Geräte zu scannen, starten Sie einfach den Daemon, sobald die Abhängigkeiten korrekt installiert wurden.     
Die vom Gateway angehobenen und von Jeedom erkannten Glühbirnen werden automatisch integriert.     

Wenn eine Glühbirne nicht zurückgeht, setzen Sie bitte das Plugin ein ``Debug``, um die Entdeckung neu zu starten und uns das Protokoll zur Verfügung zu stellen, damit wir die fehlenden Glühbirnen hinzufügen können. (Denken Sie daran, das Modell Ihrer Glühbirne sowie deren Eigenschaften im Ticket anzugeben : Ist es dimmbar, ist es variabel in Weiß, ist es variabel in Farbe?). Das Plugin bringt Ihnen auch die Blinds Sockets

**Einmal entdeckt, wird jede Glühbirne haben :**

-   Die entsprechenden Aktionen
-   Die entsprechenden Infos

>**Symfonisk**
>
>Mit Symfonisk verbundene Lautsprecher werden nicht von diesem Plugin, sondern vom Sonos-Plugin verwaltet.
