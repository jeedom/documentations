# Changelog IPX 800 v4

>**Wichtig**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt

- EnOcean-Rollladenunterstützung
- Möglichkeit der Konfiguration des Kommunikationsports mit der IP (Standard 80))

# 01.08.2024

- AUFMERKSAMKEIT !!!!!! Verhaltensänderung an den Rollläden, Richtungsumkehr, das Plugin zeigt nicht mehr die %-Schließung, sondern die %-Öffnung an
- Überprüfen des IPX-Rückgabecodes während eines Befehls und wenn ein Fehler auftritt, wird Jeedom den Befehl 150 ms später wiederholen
- Vorbereitung auf Jeedom 4.4

# 07.02.2022

- Update für Jeedom 4.2

# 25.10.2021

- Vorlage hinzufügen
- PulseUP- und pulsDOWN-Unterstützung für das BSO-Blade-Management

# 07/06/2020

- Korrektur eines Fehlers beim Lesen des Werts der 0-10v-Erweiterung

# 05/09/2020

- Unterstützung für 0-10v-Erweiterung hinzugefügt
- Optimisation

# 2019.12.30

- Korrekturfehler Thermostat
- Korrektur eines Fehlers in der Ereignis-URL für den ipx800

# 2019.09.18

- Optimisations

# 2019.08.14

- Fehlerbehebung bei Vorlagen
- Kompatibel mit PHP 7.3

# 2019.06.13

- Hinzufügen eines automatischen täglichen Backup-Systems für ipx800v4
- PWM-Unterstützung nur in einer Farbe
- Unterdrückung des Neustarts des Dämons bei jeder Änderung am Gerät (es ist jetzt erforderlich, wenn Sie ein Gerät ändern, um den Dämon manuell neu zu starten)

# 2018.04.24

-	Unterstützung für THL 9 bis 14 Sonden

# 2018.03.19

-   Nummernkorrektur für enOcean Analoge Sensoren

# 2018.03.05

- 	Hinzufügen des X-Dimmers (vergessen Sie nicht, das Check-Plugin G für X-Dimmer-Anforderungen zu konfigurieren)

#  2018.02.18

-	Hinzufügen einer Option für Anforderungen an das ipx800 (Möglichkeit zur Auswahl des Anforderungstyps zur Reduzierung der Last)

-   Verbesserte enOcean-Unterstützung

-   Korrektur von Fehlern bei der Wiederherstellung von Informationen aus
    extensions

-   Hinzufügung einer VR-Erweiterung

-   Optimierung der Synchronisation mit dem ipx800

-   Unterstützung für THL-Module

-   Hinzufügen einer Template-Engine zur Auftragserstellung
