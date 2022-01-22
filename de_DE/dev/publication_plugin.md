# So veröffentlichen Sie das Plugin auf dem Markt

## Voraussetzungen

- Registrieren Sie sich als Entwickler, siehe [hier](https://www.jeedom.com/site/fr/dev.html).
- Warten auf die Validierung des Marktkontos als Entwickler.
- Überprüfen Sie in der Community, ob Sie Zugriff auf die "Developers' Lounge" haben".
- Haben Sie Ihr Plugin auf Github (private Einzahlung oder nicht).
- Präsentieren Sie Ihr Plugin in der "Entwicklershow" und "Präsentation des Plugins""

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
  - Dokumentation und Links
    - Beschreibung (Achten Sie darauf, die wichtigen Punkte zu erwähnen. Die meisten Benutzer sehen die Dokumentation vor dem Kauf nicht).
    - Sprachen.
    - Kompatible Hardware
    - Ggf. einen Hinweis zur Verwendung.
  - Github : Hier legen Sie die Informationen zwischen dem Markt und Github ab.
    - Das Token (nur um es zu setzen, wenn sich Ihr Plugin auf einer privaten Einzahlung befindet).
    - Ihr Github-Benutzername.
    - Der Name des Repositorys auf Github.
    - Aktivieren Sie das Kontrollkästchen, damit der Markt die Übersetzung Ihres Plugins und der Dokumentation verwaltet (achten Sie in diesem Fall darauf, dass Sie dem Benutzer "jeedom-market" von github alle Rechte in Ihrem Github-Repository gewähren).

   Nach dem Speichern können Sie durch Zurückkehren zur Registerkarte „Github“ die Zweige Ihres Githubs angeben, die den Marktversionen entsprechen :

   - Beta (zB: beta)
   - Stabil (zB: master)
   - V3 (nur wenn Sie einen anderen Zweig für die Unterstützung von Jeedom v3 haben).

   Die Synchronisierung erfolgt entweder automatisch jeden Tag um 12.10 Uhr (Vorsicht angesichts der Anzahl der Plugins und der Anrufbeschränkungen). Das Update beginnt um 12.10 Uhr, dauert jedoch mehrere zehn Stunden). Sie können auch eine manuelle Synchronisierung eines Zweigs über die Plugin-Datei starten.
   
   
   > **Notiz**
   > Sie haben ein Market-Konto mit einem anderen Namen als Community und möchten unter dem Namen Community veröffentlichen.
   > Gehen Sie zu Ihrem Marktkonto in „Mein Profil“".  Im Bereich „Für Entwickler“ können Sie im Autorenfeld Ihren Community-Namen angeben. 
