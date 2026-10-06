# OCPP-Änderungsprotokoll

>**WICHTIG**
>
>Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

## 06/10/2026 ***(1.0.0)***

- Erste stabile Version
- **Berechtigungen**: verschiedene Korrekturen und Optimierungen bei der Registrierung
- **Daemon**: Optimierung der Behandlung möglicher Kommunikationsfehler mit dem Terminal

## 05/07/2026 ***(0.9.6)***

- **Transaktionen**: Echtzeit-Aktualisierung der Transaktionsliste *(Eröffnung/Schließung)*

## 04/07/2026 ***(0.9.5)***

- **Berechtigungen**: Optimierung der Speicherung von Gruppen und Berechtigungslisten

## 03/07/2026 ***(0.9.4)***

- **Transaktionen**: Hinzufügen eines Piktogramms für aktive Transaktionen *(grün = läuft, orange = seit mehr als 24 Stunden, rot = seit mehr als 48 Stunden)*
- **Transaktionen**: Hinzufügen eines Piktogramms für abgeschlossene Transaktionen, das beim Darüberfahren mit der Maus den Grund für den Abschluss der Transaktion anzeigt

## 02/07/2026 ***(0.9.3)***

- **Berechtigungen**: Möglichkeit, einen lesbaren Namen zur Kennung hinzuzufügen *(wird in der Liste der Transaktionen und der Benutzer verwendet, die einen Ladevorgang starten können, sofern angegeben)*
- **Berechtigungen**: Korrektur der Spaltensortierung
- **Steuerung**: Automatische Aktualisierung der Liste der Benutzer, die einen Ladevorgang starten dürfen

## 01/07/2026 ***(0.9.1)***

- **Berechtigungen**: Bei der Autorisierung einer Transaktion wird bei den Anmeldedaten nicht mehr zwischen Groß- und Kleinschreibung unterschieden
- **Berechtigungen**: Behebung eines möglichen Verlusts von Anmeldedaten beim Speichern
- **Transaktionen**: Automatischer Abschluss einer eventuell noch nicht abgeschlossenen Transaktion
- **Knotenpunkt**: Bessere Verwaltung der (Wieder-)Verbindung zum Zentralsystem
- **Terminal**: Optimierung der Berücksichtigung eines Austauschs mit derselben Kennung

## 05/12/2025 ***(0.8.8)***

- **Transaktionen**: Hinzufügen einer Schaltfläche zum Löschen
- **Ereignisse**: Behebung eines Fehlers bei den Kopfhörern einer OCPP-Transaktion
- **Steuerungen**: Bessere Verwaltung der Belastungsgrenzen *(A/W)*

## 24/11/2025 ***(0.8.5)***

- **Befehle**: Es wurden Befehle hinzugefügt, um den Strom und/oder die maximale Leistung während des Ladevorgangs zu steuern *(nur SmartCharging-kompatible Ladestationen)*
- **Befehle**: Befehle zum Neustart des Geräts *(Software/Hardware)* hinzugefügt
- **Steuerung**: Festlegung der Liste der Benutzer, die den Ladevorgang starten dürfen
- **Dokumentation**: Erstellung der Dokumentation

## 20/11/2025 ***(0.6.5)***

- **Abhängigkeiten**: Versions-Upgrade *(OCPP 2.0.0 & WebSockets 15.0.1)*

## 25/06/2025 ***(0.6.2)***

- **Berechtigungen**: Hinzufügen eines Kontrollkästchens pro Identifikator, um gleichzeitige konkurrierende Transaktionen zuzulassen
- **Berechtigungen**: Hinzufügen von Hinweisfeldern
- **Terminal**: Optimierung der bei einer Autorisierungsanfrage gesendeten Statusmeldungen

## 15/04/2025 ***(0.5)***

- **Berechtigungen**: Verwaltung von Berechtigungen nach Gruppen

## 17/05/2024

- Beginn der Entwicklung
