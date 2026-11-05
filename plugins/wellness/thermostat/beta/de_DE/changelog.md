# Änderungsprotokoll Thermostat

>**WICHTIG**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

# 05/11/2026

- Korrektur der Anzeige von `undefined` vor den Namen der Termine im Kalender ohne Symbol, auf der Registerkarte **Terminplanung**

# 02/11/2026

- Unterscheidung zwischen Fühlerfehlern (Empfangsverzögerung, unterer/oberer Schwellenwert und ungültiger Wert) in den Benachrichtigungen über `#failure_message#`.
- Behebung des Problems, dass Warnmeldungen bei gleichzeitigen oder aufeinanderfolgenden Störungen ausgeblendet oder wiederholt angezeigt wurden, sowie der Hilfe bei Fühler-/Heizungsfehlern.

# 10/09/2026

- Fehlerbehebung: Ein leerer oder nicht numerischer Sollwert führte zum Absturz des Plugins (PHP 8 TypeError bei der Berechnung der Hysterese) und unterbrach die Verarbeitung der folgenden Thermostate [LINK](https://github.com/jeedom/plugin-thermostat/issues/68)

# 22/11/2025

- Korrektur bei der Eingabe von Datumsangaben und beim Abrufen von Verlaufsdaten über das Bedienfeld *(Jeedom v4.4 mini)*

# 14/10/2024

- Der Smartstart hält nun den Mindestheizanteil ein [LINK](https://github.com/jeedom/plugin-thermostat/issues/60)

# 30/09/2024

- Unterstützung benutzerdefinierter Gerätebilder (Jeedom 4.5)
- Ein Fehler bei der Unterstützung von Dezimalanweisungen wurde behoben

# 22/07/2024

- Ein Fehler in Debian 12 wurde behoben

# 13/06/2024

- Bessere Verwaltung deaktivierter Thermostate

# 19/02/2024

- Es wurde ein Fehler behoben, der ungültige Crons erstellte
- Behebung eines Fehlers, der auftrat, wenn zwei Befehle gleichzeitig ausgeführt wurden (danke @phpvarious)

# 03/01/2024

- Vorbereitung auf Jeedom 4.4

# 19/12/2023

- Möglichkeit der Eingabe negativer Werte für Offset-Befehle in Bezug auf interne Beiträge

# 27/04/2023

- Verbesserung beim Wechsel zwischen den Betriebsmodi *(Klimatisierung, Heizung oder beides)*
- Entfernen veralteten Codes für Imperihome

# 20/04/2023

- Verbesserte Verwaltung von Öffnungen

# 03/10/2022

- Der Smartstart kann die Thermostatsperre nicht mehr aufheben

# 29/07/2022

- Korrektur bei der Befüllung bestimmter Gerätekonfigurationsfelder über die Auftragsauswahlliste

# 21/10/2021

- Ergänzung der Präsentation der Thermostatausrüstung im Tabellenmodus
- Positive Hysterese jetzt auch im Kühlbetrieb möglich

# 14/12/2020

- Modernisierung der Schnittstelle
- Hinzufügen einer Option, bei der nur die positive Hysterese zum Erhitzen verwendet werden kann
- Es wurde die Möglichkeit hinzugefügt, einen Befehl Ihrer Wahl im Thermostat-Widget anzuzeigen
- Aktualisierung der Dokumentation

# 11/11/2020

- Allgemeine Optimierungen
- Entfernung des Befehls „Luftfeuchtigkeit“
- Neue Darstellung der Objektliste
- Hinzufügen des Tags „V4-Kompatibilität“

# 01/06/2020

- Hinzufügung des Delta-Sollwertparameters - Außentemperatur zur Berechnung der Heiß- / Kaltrichtung

# 07/04/2020

- Fehlerbehebungen

# 21/12/2019

- Hinzufügen einer Option für die Heißzyklusschwelle, damit die Trägheit berücksichtigt werden kann

# 17/12/2019

- Anzeigeproblem behoben
- Hinzufügen einer Option „Schwellenwert für den Zyklus, ab dem die Heizung als warm gilt“

# 16/12/2019

- Fehlerkorrektur im Thermostat-Aus-Modus
- Hinzufügen einer Option zur Begrenzung der Dauer eines zweiten Zyklus auf 100 % der Zeit (berücksichtigt, dass die Heizkörper bereits warm sind)

# 03/11/2019

- Ein Fehler bei verwaisten Bestellungen wurde behoben

# 23/10/2019

- Korrektur eines Fehlers im Off

# 23/10/2019

- Fehlerbehebungen

# 06/10/2019

- Aktualisierung der FAQ zu den Bedenken, dass Aktionen / Modi nicht angezeigt werden

# 01/10/2019

- Fehlerbehebungen

# 15/08/2019

- Aktualisieren des Dokuments
- Unterstützung für PHP 7.3

# 02/07/2019

- Fehlerbehebungen

# 30/04/2019

- Verbesserte Oberfläche

# 29/04/2019

- Hinzufügung einer Option „Begrenzt die Ein-/Ausschaltzyklen (Pellets, Gas, Heizöl) und PID“. Danke, @Pierrick

# 11/03/2019

- Möglichkeit, eine Warnmeldung hinzuzufügen, wenn der Thermostat länger als XX Minuten angehalten wurde
- Hinzufügen eines Sollwertdeltas im Zeitmodus
- Fehlerbehebungen

# 04/01/2019

- Ein Fehler beim Smartstart wurde behoben, wenn die Agenda nach der Planung deaktiviert wurde

# 28/12/2018

- Fehlerkorrektur auf dem mobilen Panel

# 27/11/2018

- Fehlerbehebung

# 20/11/2018

- Hinzufügen einer Leistungsberechnung (kWh / DJU), wenn dem Plugin ein Verbrauchsbefehl gegeben wird
- Behebung eines Fehlers bei der Verwaltung von Temperatursensor-Fehlerwarnungen
- Hinzufügen eines Feldes für die Feuchtigkeitsregelung (nur für das Google Smarthome-Plugin relevant)

# 01/07/2018

- Korrektur eines Fehlers an der Aufhängung des Thermostats beim Öffnen eines Fensters

# 06/06/2018

- Fehlerbehebung

# 23/02/2018

- Korrektur einer Warnung im Code

# 29/01/2018

- Fehlerbehebung beim Öffnen / Schließen von Fenstern
