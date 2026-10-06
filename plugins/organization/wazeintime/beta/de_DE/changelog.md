# Changelog Waze in der Zeit

>**WICHTIG**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

# 06/10/2026

- Umfangreiches Update zur Umgehung der Waze-Sperre (Fehler 403)
- Es werden neue Abhängigkeiten benötigt, diese werden beim Update installiert.
- Das Plugin verfügt über einen Daemon, der gestartet werden muss, damit die Routen aktualisiert werden können.
- Aufhebung der „Nordamerika“-Kompatibilität
- Debian 12 und Python 3.11 erforderlich
- Jeedom v4.5 erforderlich

# 20/12/2025

- Korrektur für die Strecken „Nordamerika“

# 29/11/2025

- Korrektur der verwendeten URL aufgrund einer Änderung bei Waze
- Jeedom-Version 4.4 oder höher erforderlich
- Debian 11 oder höher erforderlich

# 29/06/2025

- Optimierung der Anfragen an Waze zur Verringerung der Latenz

# 17/10/2022

- Befehlsliste für Jeedom v4.3 aktualisieren

# 17/03/2022

- Jeedom v4.2-Kompatibilität

# 08/12/2021

- Hinzufügen einer Option zur Konfiguration der Abonnements, die bei der Routenberechnung aktiviert werden sollen (siehe Dokumentation)
- Option hinzugefügt, um jeden Befehl von jedem Plugin als Start- oder Endposition zu verwenden
- Das Extrahieren von Reiseinformationen aufgrund einer Waze-API-Änderung behoben

# 18/10/2021

- Verbesserungen an den Konfigurationsseiten für Version 4:
  - Hinzufügen des Suchfelds
  - Hinzufügen der tabellarischen Darstellung der Geräte (Jeedom v4.2)
  - Neue Darstellung der Konfigurationsseite
  - Neue Darstellung der Objektliste auf der Ausrüstungsseite
  - Neue Darstellung der Auftragsliste
- Unterstützung für die im Jeedom-Kern konfigurierte Geolokalisierung hinzugefügt
- Fügen Sie in der Gerätekonfiguration einen benutzerdefinierten Cron-Job zur automatischen Aktualisierung hinzu; bitte beachten Sie, dass Sie Ihre Geräte neu konfigurieren müssen, da der Cron-Job „cron30“ deaktiviert ist; andernfalls erfolgt die Aktualisierung der Routen nicht mehr automatisch.
- Info-Extraktion aufgrund von Waze-API-Änderung behoben

# 23/10/2019

- Verbesserung des Widgets für jeedom v4

# 05/09/2019

- Fehlerkorrektur auf dem Widget in jeedom v4
- Fehlerbehebung für PHP 7.3
