# So veröffentlichen Sie das Plugin auf dem Markt

## Voraussetzungen

- Als Entwickler angemeldet, siehe [Hier](https://www.jeedom.com/site/fr/dev.html)
- Habe auf die Validierung des Marktkontos als Entwickler gewartet
- Haben Sie Ihr Plugin auf Github gestellt (privates Repository oder nicht)

## Configuration

Sobald Sie mit Ihrem Entwicklerkonto auf dem Markt verbunden sind, müssen Sie : 

- Klicken Sie auf Markt und dann auf Hinzufügen
- Geben Sie die Informationen zu Ihrem Plugin ein : 
  - Allgemeines : 
    - Prix
    - ID (die in der Datei info.json)
    - Nom
    - Kategorie
    - Ob privat oder nicht
  - Dokumentation und Links
    - die Beschreibung (stellen Sie sicher, dass der Punkt ist, die meisten Benutzer werden die Dokumentation vor dem Kauf nicht sehen)
    - Sprachen
    - kompatible Hardware
    - ggf. einen Hinweis zur Verwendung
  - Github : Hier legen Sie die Informationen zwischen dem Markt und Github ab
    - das Token (nur setzen, wenn sich Ihr Plugin in einem privaten Repository befindet)
    - Ihr Github-Benutzername
    - Der Name des Repositorys auf Github
    - Aktivieren Sie das Kontrollkästchen, damit der Markt die Übersetzung Ihres Plugins und der Dokumentation verwaltet (achten Sie in diesem Fall darauf, dem zoic21-Benutzer von github alle Rechte in Ihrem Github-Repository zu erteilen)
    
   Nach dem Speichern, indem Sie zur Registerkarte Github zurückkehren, haben Sie 3-4 Felder, um die Zweige anzuzeigen : 
   
   - beta
   - stable
   - pro (ist in 99% der Fälle nutzlos)
   - Stablev3 (bald)
   
   Die Synchronisierung erfolgt entweder automatisch jeden Tag um 12:10 Uhr (Vorsicht, angesichts der Anzahl der Plugins und der Einschränkungen für API-Aufrufe beginnt das Update um 12:10 Uhr, dauert jedoch mehrere zehn Stunden). Sie können auch eine manuelle Synchronisierung eines Zweigs über die Plugin-Datei starten
