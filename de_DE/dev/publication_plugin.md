# So veröffentlichen Sie das Plugin auf dem Markt

## Voraussetzungen

- Nachdem Sie sich als Entwickler registriert haben, siehe [Hier](https://www.jeedom.com/site/fr/dev.html).
- Ich habe auf die Validierung des Marktkontos als Entwickler gewartet.
- Überprüfen Sie in der Community, ob Sie Zugriff auf die „Developer Lounge“ haben".
- Habe dein Plugin auf Github gestellt (privates Repository oder nicht)).
- Präsentieren Sie Ihr Plugin in der „Developer Lounge“ und „Plugin-Präsentation“"

## Plugin-Präsentation

Warum Ihr Plugin präsentieren? !

Um zu vermeiden, dass Sie in Ihrer eigenen Ecke arbeiten und sehen, wie am Ende ein anderer Entwickler das Gleiche herausbringt.  
Für Hilfe beim Entwerfen dieses.  
Damit das Jeedom-Team während eines ToStable weiß, wofür Ihr Plugin verwendet wird und wie es codiert ist.  
Um Ihre Ideen und Kommentare zu teilen :wink:  

Wir bitten Sie nicht um einen Aufsatz über Ihre Plugins, sondern lediglich um Informationen :

- Name und ID > Z-Wave (openzwave) // Sie können dies in den Titel Ihres Betreffs einfügen.
- was Ihr Plugin macht
- Art der verwendeten Sprachen
- Benutzt er einen Dämon? ? besondere Abhängigkeiten ? Crons ?
- Verfügt es über ein spezielles Panel? ?
- Bezahlt | frei ? (wenn du schon eine Idee hast)
- GitHub-Link oder eine andere Repository-Site (falls gewünscht))
- Link zur Dokumentation
Von dort aus wird Ihrem Plugin von einem Moderator ein Tag zugewiesen

Ihnen stehen außerdem mehrere Tags zur Verfügung, sodass das Jeedom-Team Sie einfacher benachrichtigen kann :

Dämon (wenn du einen Dämon hast)  
dependance_intall (wenn Sie Abhängigkeitsinstallationen haben)  
nodejs oder python (in Ihrem Daemon verwendete Sprache))  
cron (wenn Sie die Jeedom-Cron-Engine verwenden)  
jsonrpc (wenn Sie die jsonrpc-API von Jeedom verwenden)  
Idee, Beta, stabil, privat (je nachdem, wo sich Ihr Plugin befindet)  
kostenlos, bezahlt  
Panel-Dash, Panel-Mob (wenn Sie ein Panel in Ihrem Plugin haben)  

## Configuration

Sobald Sie mit Ihrem Entwicklerkonto auf dem Markt verbunden sind, müssen Sie dies tun :

- Klicken Sie auf „Markt“ und dann auf „Hinzufügen“
- Geben Sie Informationen zu Ihrem Plugin ein :
  - Allgemein :
    - Preis.
    - ID (die in der Datei info.json)).
    - Name.
    - Kategorie.
    - Ob privat oder nicht.
  - Dokumentation und Links (Diese Informationen basieren auf der Infodatei.json Ihres Plugins)
    - Die Beschreibung (formulieren Sie die wichtigen Punkte gut, die meisten Benutzer werden die Dokumentation vor dem Kauf nicht sehen).
    - Sprachen.
    - Kompatible Hardware
    - Gegebenenfalls ein Hinweis zur Nutzung.
  - Github : Hier stellen Sie die Informationen zwischen dem Markt und Github her.
    - Das Token (damit können Sie die Plugin-Informationen in der Jeedom-Dokumentation abrufen). Vous pouvez le créer sur la page Github suivante : https://github.com/settings/tokens, wählen Sie „token classic“, „no expiration“ und überprüfen Sie den „repo“-Teil.
    - Ihr Github-Benutzername.
    - Der Name des Repositorys auf Github.
    - Aktivieren Sie das Kontrollkästchen, damit der Markt die Übersetzung Ihres Plugins und der Dokumentation verwaltet (achten Sie in diesem Fall darauf, dem Github-Benutzer „jeedom-market“ alle Rechte in Ihrem Github-Repository zu erteilen)).

   Nach dem Speichern können Sie durch Rückkehr zur Github-Registerkarte die Zweige Ihres Githubs angeben, die den Marktversionen entsprechen (denken Sie daran, auf „Validieren“ zu klicken, bevor Sie auf „Testen/Synchronisieren“ klicken)) :

   - Beta (z. B: beta)
   - Stabil (z.B: master)
   - V3 (nur wenn Sie einen anderen Zweig für die Unterstützung von Jeedom v3 haben).

   Die Synchronisierung erfolgt entweder automatisch jeden Tag um 12:10 Uhr (Vorsicht aufgrund der Anzahl der Plugins und API-Aufrufbeschränkungen, das Update beginnt um 12:10 Uhr, kann aber mehrere zehn Stunden dauern) oder über die manuelle Synchronisierung eines Zweigs aus der Plugin-Datei.
   
   
   > **Notiz**
   > Sie haben ein Marktkonto mit einem anderen Namen als „Community“ und möchten unter dem Community-Namen veröffentlichen.
   > Gehen Sie zu Ihrem Marktkonto unter „Mein Profil“".  Im Bereich „Für Entwickler“ können Sie im Feld „Autor“ Ihren Community-Namen angeben. 
