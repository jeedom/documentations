# So veröffentlichen Sie das Plugin auf dem Markt

## Voraussetzungen

- Registrieren Sie sich als Entwickler, siehe [hier] (https://www.jeedom.com/site/fr/dev.html)
- Warten auf die Validierung des Marktkontos als Entwickler
- Habe dein Plugin auf Github (private Einzahlung oder nicht)

## Konfiguration

Sobald Sie mit Ihrem Dev-Konto auf dem Markt verbunden sind, müssen Sie : 

- Klicken Sie auf Markt und fügen Sie hinzu
- Füllen Sie die Informationen auf Ihrem Plugin aus : 
  - Allgemein : 
    - Preis
    - ID (die in der Datei info.json)
    - Name
    - Kategorie
    - Ob es privat ist oder nicht
  - Dokumentation und Links
    - die Beschreibung (gut ausgedrückt, die meisten Benutzer werden die Dokumentation vor dem Kauf nicht sehen)
    - Sprachen
    - kompatible Hardware
    - ggf. einen Hinweis zur Verwendung
  - Github : Hier legen Sie die Informationen zwischen dem Markt und Github ab
    - das Token (nur setzen, wenn Ihr Plugin auf einer privaten Einzahlung ist)
    - Ihr Github-Benutzername
    - Der Name des Repositorys auf Github
    - Aktivieren Sie das Kontrollkästchen für den Markt, um die Übersetzung Ihres Plugins und Ihrer Dokumentation zu verwalten (achten Sie in diesem Fall darauf, dem Benutzer zoic21 von github alle Rechte in Ihrem Github-Repository zu gewähren)
    
   Nach dem Speichern durch Zurückkehren zur Registerkarte Github haben Sie 3-4 Felder, um die Zweige anzuzeigen : 
   
   - Beta
   - Stabil
   - pro (ist in 99% der Fälle nutzlos)
   - Stablev3 (in Kürze)
   
   Die Synchronisierung erfolgt entweder automatisch jeden Tag um 12:10 Uhr (seien Sie vorsichtig angesichts der Anzahl der Plugins und Anrufbeschränkungen, wenn das Update um 12:10 Uhr beginnt, aber mehrere zehn Stunden dauert). Sie können auch eine manuelle Synchronisierung eines Zweigs über die Plugin-Datei starten
