# So veröffentlichen Sie das Plugin auf dem Markt

## Voraussetzungen

- Habe mich als dev registriert, siehe [hier](https://www.jeedom.com/site/fr/dev.html).
- Habe als Entwickler auf die Validierung des Marktkontos gewartet.
- Überprüfen Sie in der Community, ob Sie Zugriff auf die "Developers' Lounge" haben".
- Haben Sie Ihr Plugin auf GitHub gestellt (privates Repository oder nicht)).
- Präsentieren Sie Ihr Plugin in der "Entwicklershow" und "Präsentation des Plugins""

## Plug-in-Präsentation

Warum präsentieren Sie Ihr Plugin !

Um zu vermeiden, in Ihrer Ecke zu arbeiten und zu sehen, wie ein anderer Entwickler am Ende dasselbe herausbringt.  
Für Hilfe bei der Gestaltung.  
Damit das Jeedom-Team während eines ToStable wissen kann, wofür Ihr Plugin ist und wie es codiert ist.  
Um Ihre Ideen und Kommentare zu teilen :wink:  

Wir bitten Sie nicht um eine Abhandlung über Ihre Plugins, sondern nur um Informationen :

- Name und ID > Z-Wave (openzwave) // Sie können dies in Ihren Thementitel einfügen.
- was dein Plugin macht
- Art der verwendeten Sprachen
- Benutzt er einen Dämon ? spezifische Abhängigkeiten ? Kronen ?
- Hat es ein dediziertes Panel ?
- Bezahlt || frei ? (wenn du schon eine idee hast)
- GitHub-Link oder andere Repository-Site (falls gewünscht)
- Link zur Dokumentation
Von dort wird Ihrem Plugin von einem Moderator ein Tag zugewiesen

Sie haben auch mehrere Tags zur Verfügung, damit das Jeedom-Team Sie leichter warnen kann :

Dämon (wenn du einen Dämon hast)  
dependency_intall (wenn Sie Abhängigkeitsinstallationen haben)  
nodejs oder python (Sprache, die in Ihrem Daemon verwendet wird)  
cron (wenn Sie die Cron-Engine von Jeedom verwenden)  
jsonrpc (wenn Sie die jsonrpc-API von Jeedom verwenden)  
Idee, Beta, Stable, Private (je nachdem, wie Ihr Plugin ist)  
kostenlos, bezahlt  
Panel-Dash, Panel-Mob (wenn Sie ein Panel in Ihrem Plugin haben)  

## Configuration

Sobald Sie mit Ihrem Entwicklerkonto auf dem Markt verbunden sind, müssen Sie :

- Klicken Sie auf Markt und dann auf Hinzufügen
- Geben Sie die Informationen zu Ihrem Plugin ein :
  - Allgemein :
    - Preis.
    - ID (diejenige in der Datei info.json).
    - Nachname.
    - Kategorie.
    - Egal ob privat oder nicht.
  - Dokumentation und Links
    - Die Beschreibung (stellen Sie die wichtigen Punkte gut dar, die meisten Benutzer werden die Dokumentation vor dem Kauf nicht sehen).
    - Sprachen.
    - Kompatible Hardware
    - Hinweis zur Verwendung ggf.
  - GitHub : Hier werden Sie die Informationen zwischen dem Markt und Github platzieren.
    - Das Token (nur zu platzieren, wenn sich Ihr Plugin in einem privaten Repository befindet).
    - Ihr Github-Benutzername.
    - Der Name des Repositorys auf Github.
    - Aktivieren Sie das Kontrollkästchen, damit der Markt die Übersetzung Ihres Plugins und Ihrer Dokumentation verwaltet (achten Sie in diesem Fall darauf, dem „jeedom-market“-Benutzer von GitHub alle Rechte in Ihrem GitHub-Repository zu erteilen).

   Nach dem Speichern können Sie durch Zurückkehren zum Github-Tab die Zweige Ihres Githubs angeben, die den Marktversionen entsprechen :

   - Beta (zB: beta)
   - Stabil (zB: master)
   - V3 (nur wenn Sie einen anderen Zweig für Jeedom v3-Unterstützung haben).

   Die Synchronisierung erfolgt entweder automatisch jeden Tag um 12:10 Uhr (Vorsicht angesichts der Anzahl der Plugins und API-Aufrufbeschränkungen, das Update beginnt um 12:10 Uhr)). Sie können auch eine manuelle Synchronisierung eines Zweigs aus der Plugin-Datei starten.
   
   
   > **Notiz**
   > Sie haben ein Market-Konto mit einem anderen Namen als Community und möchten unter dem Namen Community veröffentlichen.
   > Gehen Sie zu Ihrem Marktkonto in „Mein Profil“".  Im Bereich „Für Entwickler“ können Sie im Autorenfeld Ihren Community-Namen angeben. 
