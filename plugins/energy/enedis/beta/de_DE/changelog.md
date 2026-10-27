# Änderungsprotokoll Enedis

>**WICHTIG**
>
>Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

# 26/10/2026

- Jeedom 4.4 (Mindestanforderung)
- Die Widget-Vorlage lässt sich nun über das Feld **Widget-Vorlage** in den erweiterten Einstellungen des Geräts (Registerkarte **Informationen**) aktivieren oder deaktivieren.
- Hinzufügen eines Feldes **Beschreibung des Zählers** auf der Geräteseite
- Die Erfassung von Datenverläufen nach Tag, Monat, Jahr und maximaler Leistung erfolgt nun für das gesamte Jahr, um korrekte Monats- und Jahresgesamtwerte zu erhalten
- Korrektur der Monats- und Jahresumsätze, wenn Enedis die Daten zum 1. des Monats nicht bereitstellt
- Korrektur der in den Protokollen angezeigten Datumsangaben beim Abruf der stündlichen Daten
- Die bereits gespeicherten Tages-, Monats- und Jahresverläufe sowie die maximale Leistung werden nun korrigiert, wenn Daten von Enedis verspätet eintreffen oder geändert werden

# 06/11/2023

- Übergang zur stabilen Version

# 04/10/2023

- Aktualisierte Aufrufe, um mit der V5 Enedis Data-Connect API kompatibel zu sein

# 24/10/2022

- Option hinzugefügt, um stündliche Daten zu deaktivieren
- Entfernte Abhängigkeiten, die bereits für den Kern benötigt wurden
- Die Farbeinstellungen der Widget-Vorlage befinden sich jetzt in der Gerätekonfiguration, Registerkarte Anzeige, Abschnitt Widget

# 23/10/2022

- Übergang zur stabilen Version

# 18/10/2022

- Aktualisierte Befehlsliste für Jeedom v4.3

# 15/08/2022

- Fehler bei der Anzeige von Produktionsdaten bei mehreren Widgets auf der Seite behoben

# 02/08/2022

- Optimierung von Aufrufen an Enedis-Server

# 24/01/2022

- Entfernung des Befehls „Maximale Leistung“

# 05/01/2022

- Fehler bei der Datenerfassung am 1. Januar behoben
- Hinzufügen einer Kontrollleuchte zum Widget, um anzuzeigen, ob die Daten aktuell sind *(grün = OK, rot = nicht OK, orange = einige Daten nicht OK)*

# 03/06/2021

- Korrektur, um zu verhindern, dass die automatische Programmierung in seltenen Fällen gestoppt wird

# 18/05/2021

- Implementierung eines automatischen Programmiersystems
- Möglichkeit der Integration von Historien nach Bedarf
- Bessere Datenverarbeitung und Integration
- Neuorganisation von Konfigurationseinstellungen, Dateien und Dokumentation

# 18/02/2021

- Hinzufügen der Abhängigkeitsverwaltung, um das Vorhandensein von `php-mbstring` fehlt bei einigen Anlagen
- Neues Plugin-Symbol entspricht mehr den Vorrechten von Enedis

# 01/02/2021

- Vollständiges Umschreiben des Plugins, das jetzt die Enedis Data-Connect-API verwendet
- Hinzufügen des Befehls **Maximale Leistung/Tag**
- Möglichkeit, Verbrauch, Produktion oder beide Messungen gleichzeitig wiederzugewinnen
- Automatische Generierung von Historien für die letzten 3 Jahre beim Erstellen von Aufträgen
- Umschreiben von Dashboard- und mobilen Widget-Vorlagen
- Es wurde die Möglichkeit hinzugefügt, die Hintergrundfarbe der Widget-Vorlage *(oder „transparent“)* auszuwählen
- Dokumentation neu schreiben

# 10/09/2020

- Behebung eines Anzeigefehlers in der mobilen Ansicht ohne Widget-Vorlage.

# 06/09/2020

- Hinzufügen der Vorlage für die Dashboard-Version.
- Hinzufügen der Vorlage für die mobile Version.
- Optimierung der Anzahl der Aufrufe an die Enedis-Server.

# 21/08/2020

- Abruf der Informationen zu einer zufälligen Minute, um die Enedis-Server nicht zu überlasten.

# 17/08/2020

- Wechsel in den Stall.

# 12/08/2020

- Das Plugin wird als Beta-Version zur Verfügung gestellt.
