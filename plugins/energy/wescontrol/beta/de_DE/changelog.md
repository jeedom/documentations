# Änderungsprotokoll Wes Control

>**WICHTIG**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

# 05/06/2026

- Unterstützung benutzerdefinierter Bilder für Geräte
- Mindestanforderung an die Jeedom-Version: **4.4**

# 01/06/2026

- Korrektur der Verwaltung von CGX-Update-Meldungen: automatische Erstellung, Aktualisierung und Löschung entsprechend dem tatsächlichen Status des Wes-Servers

# 25/05/2026

- Neue Version der CGX-Datei V1.0.6
- Unterstützung für Modbus-Variablen hinzugefügt *(WES-Firmware >= V0.9b05)*
- Aktualisierung des Plugin-Symbols

# 22/05/2026

- Neue stabile Version
- Erforderliche Mindestversion der Wes-Firmware: **V0.84A10** *(für ältere Versionen wechseln Sie bitte zum Zweig „less-than-V0.84A10“)*
- Verschiedene Korrekturen für Debian 12/PHP 8

# 10/01/2024

- Neue Version der CGX-Datei V1.0.5
- „Verbrauch/Erzeugung“ wurde zur IKT-Liste hinzugefügt
- Hinzufügen eines Befehls „Erzeuger“ *(1, wenn die Erzeugung durch Enedis aktiviert ist, andernfalls 0)*
- Hinzufügen des Einspeiseindexes *(wird nicht gemeldet, wenn der Erzeuger auf 0 steht)*
- Hinzufügen der eingespeisten Scheinleistung *(wird nicht gemeldet, wenn der Erzeuger auf 0 steht)*

# 13/12/2022

- Neue stabile Version
- Überprüfung der vollständigen Kompatibilität des Plugins in Abhängigkeit von dessen Version und der Firmware-Version des Wes *(``< V0.84A10`` = stabiles Plugin / ``>= V0.84A10`` = Beta-Plugin)*
- Hinzufügen der tabellarischen Ansicht der untergeordneten Geräte.

# 13/06/2022

- Neue CGX-Dateiversion V1.0.3

# 10/05/2021

- Neue Version der CGX-Datei V1.0.2
- Hinzufügung des Parameters "Art der Messung" für Zähler und TIC
- Hinzufügen der Zählertypen **Wärme, Strom und Heizöl**
- Hinzufügen einer Option für automatische Updates und eines Befehls zum Aktualisieren der CGX-Datei sowie einer Schaltfläche zum Aktualisieren aller aktiven Server
- Optimierung der Benutzeroberfläche.

# 28/04/2021

- Bereitstellung des Plugins
