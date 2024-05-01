# So veröffentlichen Sie das Plugin auf dem Markt

## Voraussetzungen

- Registrieren Sie sich als Entwickler, siehe [hier](https://www.jeedom.com/site/fr/dev.html).
- Warten auf die Validierung des Marktkontos als Entwickler.
- Überprüfen Sie in der Community, ob Sie Zugriff auf die "Developers' Lounge" haben".
- Haben Sie Ihr Plugin auf Github (private Einzahlung oder nicht).
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
- Bezahlt | kostenlos ? (wenn du schon eine idee hast)
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

Sobald Sie mit Ihrem Dev-Konto auf dem Markt verbunden sind, müssen Sie :

- Klicken Sie auf Markt und fügen Sie hinzu
- Füllen Sie die Informationen auf Ihrem Plugin aus :
  - Allgemein :
    - Preis.
    - ID (die in der Datei info.json).
    - Name.
    - Kategorie.
    - Ob privat oder nicht.
  - Dokumentation und Links (Diese Informationen basieren auf der Infodatei.json Ihres Plugins)
    - Beschreibung (Achten Sie darauf, die wichtigen Punkte zu erwähnen. Die meisten Benutzer sehen die Dokumentation vor dem Kauf nicht).
    - Sprachen.
    - Kompatible Hardware
    - Ggf. einen Hinweis zur Verwendung.
  - Github : Hier legen Sie die Informationen zwischen dem Markt und Github ab.
    - Das Token (damit können Sie die Plugin-Informationen in der Jeedom-Dokumentation abrufen). Vous pouvez le créer sur la page Github suivante : https://github.com/settings/tokens, wählen Sie „token classic“, „no expiration“ und überprüfen Sie den „repo“-Teil.
    - Ihr Github-Benutzername.
    - Der Name des Repositorys auf Github.
    - Aktivieren Sie das Kontrollkästchen, damit der Markt die Übersetzung Ihres Plugins und der Dokumentation verwaltet (achten Sie in diesem Fall darauf, dass Sie dem Benutzer "jeedom-market" von github alle Rechte in Ihrem Github-Repository gewähren).

   Nach dem Speichern können Sie durch Zurückkehren zum Github-Tab die Zweige Ihres Githubs angeben, die den Marktversionen entsprechen (denken Sie daran, auf „Validieren“ zu klicken, bevor Sie auf „Testen/Synchronisieren“ klicken) :

   - Beta (zB: beta)
   - Stabil (zB: master)
   - V3 (nur wenn Sie einen anderen Zweig für die Unterstützung von Jeedom v3 haben).

   Die Synchronisierung erfolgt entweder automatisch jeden Tag um 12:10 Uhr (Vorsicht aufgrund der Anzahl der Plugins und API-Aufrufbeschränkungen, das Update beginnt um 12:10 Uhr, kann aber mehrere Dutzend Stunden dauern), oder über die manuelle Synchronisierung eines Zweigs aus dem Plugin-Formular.
   
   
   > **Notiz**
   > Sie haben ein Market-Konto mit einem anderen Namen als Community und möchten unter dem Namen Community veröffentlichen.
   > Gehen Sie zu Ihrem Marktkonto in „Mein Profil“".  Im Bereich „Für Entwickler“ können Sie im Autorenfeld Ihren Community-Namen angeben. 
