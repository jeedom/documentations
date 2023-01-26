# Changelog Zigbee

>**Wichtig**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt.

>**Wichtig**
>
>Um das neue kompatible Modul zu kennen, müssen Sie gehen [das](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (Es ist nach dem Datum sortiert, an dem es hinzugefügt / geändert wurde)

# 25.01.2023

- Entfernen des Sicherungs-/Wiederherstellungsteils der Zigbee-Chips (das Protokoll unterstützt dies nicht, es ist zu instabil)

# 23.01.2023

- neue Konfiguration hinzugefügt
- Fehlerbehebung

# 19.10.2022

- Entfernen Sie den rustc-Ordner nach der Installation von Abhängigkeiten, um Speicherplatz freizugeben
- Verbesserte Unterstützung für einige Module
- Fehlerbehebung

# 10.03.2022

- Zigpy-Versionen sind jetzt behoben, um Probleme beim Installieren von Abhängigkeiten zu vermeiden


# 13.09.2022

- Fehler beim Installieren von Abhängigkeiten auf RPI behoben
- Unterstützung für neue Module

# 09.02.2022

- Fehlerbehebung
- Möglichkeit, den Bootloader-Fehler zu beheben (base.TimeoutError) aus dem Firmware-Update-Bildschirm (derzeit in Beta)
- Es wurde ein Fehler auf der Schaltfläche behoben, um OTA-Mod-Updates zu erzwingen
- Fehler in der YARL-Bibliothek behoben, indem Version 1.4.2 erzwungen wurde

# 12.08.2022

- Fehler bei der Ausführung bestimmter Befehle behoben, wenn sich das Gerät im Zustand „Ausführungsbestätigung ignorieren“ befindet"

# 12.08.2022

- Fehlerbehebung

# 27.07.2022

- Einschlussprobleme für GreenPower-Geräte behoben (nur kompatibel mit EZSP-Schlüsseln)
- Ein Problem mit dem Farbfeedback einiger Zigbee-Fernbedienungen wurde behoben

# 27/06/2022

- Versuchen Sie, Probleme mit dem Daemon zu beheben

# 23.06.2022

- Versuchen Sie, Probleme mit dem Daemon zu beheben

# 20.06.2022

- Option hinzugefügt, um gelöschte Geräte automatisch auszuschließen
- Fehler beim Erzwingen eines OTA-Updates behoben
- Unterstützung für neue Module
- ein Problem mit zigpy 0.47 behoben.0 (zurück zu Version 0.46.0)

# 20.05.2022

- Korrigieren des Fehlers :  AttributeError: Modul 'specifics' hat kein Attribut 'init'

# 05.05.2022

- Fehlerbehebung
- Neue Modulunterstützung 
- Fehler beim Hinzufügen eines Moduls zu einer Gruppe behoben
- Sendezeitzone hinzugefügt, wenn Zeit an Module gesendet wird
- Fehlerbehebungen bei der Installation von Abhängigkeiten

# 31.03.2022

- Es wurde ein Problem behoben, das den Start des Daemons aufgrund der neuen Version von zigpy verhinderte

# 22.03.2022

- Neue Modulunterstützung
- Aktualisierung der Dokumentation
- Fehlerbehebung

# 16.02.2022

- Neue Modulunterstützung
- Aktualisierung des Dokuments für den Fehler „Basiszeitüberschreitung“"

# 02.03.2022

- Versuchen Sie, den Fehler „Name ‚collections_abc‘ aus ‚sechs‘ kann nicht importiert werden‘ zu beheben.bewegt'", erfordert jeedom 4.2 und Neustart der Installation von Abhängigkeiten

# 01.02.2022

- Ein Problem bei der Verwaltung von ezsp-Firmwareversionen wurde behoben
- Implementierung einer automatischen Auftragsgenerierung falls keine Konfiguration vorhanden ist (soweit möglich)
- Implementierung eines automatischen Erkennungssystems für Informationstypaufträge
- Möglichkeit, die aktuelle json-Konfiguration des Moduls zu haben (ermöglicht Ihnen, die Module schneller zu integrieren)

# 21.01.2022

- Fehlerbehebung
- Neue Modulunterstützung

# 10.01.2022

- Korrektur eines Fehlers bei der direkten Bindung zwischen 2 Modulen

# 06.01.2022

- Fehler in der Liste der Module behoben, die gebunden werden können
- Verbesserte Batteriewiederherstellung

# 20.12.2021

- Fehler beim Neustart des Daemons behoben, wenn die Unter-Daemons konfiguriert, aber deaktiviert sind
- Ein Problem beim Anfordern einer Aktualisierung von mehr als 7 Attributwerten wurde behoben, danke @kaktusatomik
- Neue Ausrüstung hinzugefügt (danke @ cstan77)

# 12.02.2021

- Hinzufügen neuer Geräte
- Behebung eines Problems bei der "Berichtkonfiguration" der Module

# 22.11.2021

- Optimierung der Ladegeschwindigkeit der Plugin-Seiten
- Hinzufügen neuer Geräte
- Aktualisieren Sie Abhängigkeiten automatisch beim Aktualisieren des Plugins


# 07.11.2021

- Hinzufügen neuer Geräte
- Fehler bei Tuya Rollladenmodulen behoben

# 25.10.2021

- Neue Konfiguration hinzufügen
- Möglichkeit, einen Cron zu definieren, um die Aktualisierung der Attribute zu erzwingen (achten Sie darauf, dass Sie nichts eingeben, was alle Ihre Zigbee-Netzwerke zerstören kann)
- Fehlerbehebung
- Hinzufügen der Anzahl der Nachbarn auf der Zigbee-Kartenseite beim Schweben

# 19.09.2021

- Fehlerbehebung

# 15.09.2021

- Fehler bei der Aufnahme behoben
- Verbesserte Protokollebenen
- Hinzufügen neuer Module

>**Wichtig**
>
>Es ist UNBEDINGT notwendig, eine Installation von Abhängigkeiten zu starten, auch wenn es in Ordnung ist (wir arbeiten in jeedom 4.2 muss dies automatisch sein, aber im Moment müssen Sie sie von Hand starten)

# 09.03.2021

- In einigen Fällen ein Problem bei der Gruppenerstellung behoben
- Feste Gruppenlistenanzeige

# 27.08.2021

- Problem mit Nodon-Firmware behoben
- Korrektur des Fehlers "\_ext_pan_id" aufgrund eines Updates des Zigpy-Codes mit den Deconz-Schlüsseln

>**Wichtig**
>
>Nach diesem Update ist es UNBEDINGT notwendig, die Abhängigkeiten des Plugins zu aktualisieren, auch wenn es Ihnen sagt, dass alles in Ordnung ist

# 23.08.2021

- Löschen der OTA-Update-Datei für Nodon-Module auf deren Wunsch
- Hinzufügen neuer Module 
- Ein Problem mit der Konfiguration der Einstellungen für Hue-Lampen wurde behoben

# 17.08.2021

- Korrektur eines Berichtsproblems bei AnalogInput- und AnalogInput-Clustern
- Xiaomi Aqara TVOC Luftqualitätsmonitor Volle Unterstützung
- Ergänzung vieler Module

# 08.06.2021

- Fehler in der Gruppenverwaltung behoben

# 08.02.2021

- Hinzufügung eines neuen kompatiblen Moduls
- Hinzufügen einer Schaltfläche zum Löschen aller Daten eines Daemons (siehe Dokumentation)
- Fehler in der Gruppenverwaltung behoben, wenn mehrere Zigbee-Tasten vorhanden waren


# 01.07.2021

- Hinzufügung eines neuen kompatiblen Moduls
- Optimierung bestehender Konfigurationen auf das Management von Wiederholungen

# 09.06.2021

- Änderung der OTA-Update-Quelle für Ikea (Wechsel in den stabilen Zweig)
- Hinzufügung eines neuen kompatiblen Moduls
- Fehlerbehebung

# 18.05.2021

- Die GreenPower-Unterstützung in der Beta für Schlüssel vom Typ EZSP (Elelabs, Popp ...) erfordert einen Neustart der Installation von Abhängigkeiten
- Hinzufügung eines neuen kompatiblen Moduls
- Fehlerbehebung

# 05/03/2021

- Aktualisierung der Dokumentation
- Fehlerbehebung
- Integration neuer Module
- Optimierung von Modulbildern

# 29.04.2021

- Integration neuer Module
- Optimierung von Modulbildern

# 21.04.2021

- Integration neuer Module
- Unterstützung für die Bindung *(zwischen Gruppen oder Modulen)*
- Neugestaltung der Dokumentation
- Fehlerbehebung

# 04/07/2021

- Es wurde ein Problem auf der Schaltfläche behoben, mit dem die OTA-Aktualisierung bestimmter Module erzwungen wurde

# 04/06/2021

- Umstellung auf Stall

# 25.09.2020

- 1. Veröffentlichung in der Beta
