# Changelog Bluetooth Werbung

>**Wichtig**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt

# 29.06.2024

- Ein Fehler in der Ajax-Ausnahmefunktion wurde behoben.

# 04/06/2021

- Bluepy-Versionsprüfung entfernt

# 20/11/2020

- Allgemeine Optimierungen
- Neue Darstellung der Objektliste
- Hinzufügung des Tags "V4-Kompatibilität"

# 30.08.2019
- Hinzufügung eines außergewöhnlichen Managements

# 22.08.2019
- Zugabe von Tivoo Divoom
- Kleinere Verbesserungen

# 19.08.2019
- Hinzufügen einer Nachricht, um zu überlegen, ob die API-Ebene in Jeedom geändert werden soll, wenn Sie Antennen verwenden
- Hinzufügen einiger DIVOOM-Geräte (beachten Sie, dass für sie ein Neustart der Abhängigkeiten erforderlich ist). Ich füge es nicht in die Abhängigkeitssteuerung ein, da es sich nur um bestimmte Abhängigkeiten für sie handelt, sodass nicht jeder gezwungen werden muss, die Abhängigkeiten neu zu starten)
- Hinzufügen von Batteriestand auf Cleargrass
- Kleinere Verbesserungen

# 30.07.2019
- Korrektur eines Fehlers auf dem Dotti im Zusammenhang mit dem Übergang zu Python3

# 29.07.2019
- Moll behoben
- Trennung unbekannter Geräte auf der Geräteseite
- Möglichkeit, alle unbekannten Geräte mit einem Klick zu löschen (nur diejenigen, die keinem Objekt zugewiesen sind)
- Korrektur eines Fehlers im selektiven Scan "Unbekannt"
- Allgemeine Verbesserungen

# 20.07.2019
- Methodenänderung für den gesamten Playbulb-Bereich (nur ein Conf und Visuals) mehr Abhängigkeiten im Vergleich zu den verschiedenen Versionen (jetzt bei der Aufnahme stellen wir die Adressen der verschiedenen Methoden wieder her)
- Zugabe von miscal V2 mit Gewicht und Impedanz (und einer ganzen Reihe berechneter Maße). Benutzerverwaltung für Berechnungen (in der erweiterten Konfigurationsschaltfläche)
- Änderung von miscal V1 (es wird notwendig sein, die Benutzer neu zu erstellen), aber wir erhalten einige weitere Informationen
- Für Glühbirnen empfehle ich die Wiedereinschaltung aller Geräte
- Korrektur eines Fehlers im Netzwerkdiagramm im lokallosen Modus
- Behebung eines Fehlers bei der Regeneration von Bestellungen auf Anfrage
- Beim Einschluss werden die Sende- und Empfangsantennen automatisch von der Antenne ausgefüllt, die den Einschluss aktiviert hat
- Änderung des Anwesenheitsbegriffs (keine Notwendigkeit für Wiederholung immer, keine Notwendigkeit für Rückkehrzustand und Rückkehrzustandszeit) jetzt ein Anwesenheitsbefehl durch Antenne und lokal und ein Anwesenheitsbefehl abhängig von den anderen
- Eine jetzt mögliche Anpassung des Scanintervalls und der Anzahl der Scans oder eines Geräts ist nicht sichtbar, um es als nicht vorhanden zu deklarieren (Anwesenheit und insbesondere Abwesenheit der Verstärkungserkennung))
- Möglichkeit, alle Antennen mit einem Klick zu aktualisieren
- Möglichkeit, alle Antennen mit einem Klick neu zu starten
- Während eines Updates des Plugins werden die Antennen aktualisiert und neu gestartet (kann manchmal ausfallen)
- Passiver Scan außer lernen (mit Erinnerung an die Jeedom conf zu wissen, wer wer ist)
- Wechseln zu Python3
- Persönliche Änderung von Bluepy mit besserer Fehlerbehandlung (möglicherweise mehr Blockierung auf Proxmow, VMware)
- Hinzufügen eines Verbindungszeitlimits innerhalb von bluepy selbst, um zu verhindern, dass ein Verbindungsversuch wiederholt wird
- Wenn sich der lokale Dämon im NOK-Status befindet, werden die lokalen Präsenzen auf 0 gesetzt
- Wenn eine Antenne länger als eine Minute nicht kommuniziert hat, wird das Vorhandensein dieser Antenne auf 0 gesetzt
- Hinzu kommt die Möglichkeit, neue Konfigurationen abzurufen, ohne das Plugin zu aktualisieren
- Hinzufügen eines passiven oder aktiven Modus für den Scan
- Neuordnung der Ausrüstungsseite
- Hinzufügen einer Reihe von Scanoptionen, um zu berücksichtigen, dass das Gerät nicht vorhanden ist (falls definiert, wird das globale für dieses Gerät ersetzt)
- Hinzu kommt die Möglichkeit, mit einem Klick alle Geräte auf einer Antenne oder auf lokaler Ebene zu definieren
- Möglichkeit, genau den Produkttyp auszuwählen, der während eines Scans aufgenommen werden soll (mit der Möglichkeit, alle auszuwählen)

# 26.06.2019
- Hinzufügen des Xiaomi Cleargrass
- Zugabe von Xiaomi lywsd02
- Beginn des dynamischen Modellmanagements
- Beginnen Sie mit dem Umschreiben des Playbulb-Bereichs, um je nach Firmware größere Unterschiede zu erzielen
- Fehlerbehebung beim Dämonenstatus in einigen Fällen
- Aktualisierungs- / Verzögerungsfunktionen entsperren : Jeder Benutzer macht, was er will (seien Sie jedoch vorsichtig)
- NB : Für Xiaomi HT Miflora ist keine Aktualisierung mehr erforderlich : Batteriegewinn, bessere Reichweite, mehr Daten. Ich empfehle, die erzwungene Aktualisierung nicht zu aktivieren, die nicht mehr erforderlich ist, es sei denn, Ihr Gerät scheint nicht richtig zu werben

# 22.05.2019

- Wechseln Sie von der Ausrüstungsseite zu kompatiblem V4.
- Verbesserung des Xiaomi Hygrothermographen (keine Verbindung für Daten erforderlich) Vielen Dank an @kipk
- Verbesserung der Miflora (keine Verbindung für Daten erforderlich)

# 03/09/2019

- Hinzufügung der automatischen Verwaltung des Dämons auf den Antennen.
- Negatives Temperaturmanagement
- Korrektur beim Auffrischen der Muttern (Batterieinfo)

# 16.01.2019

- Korrektur einer Sorge um die maximal mögliche Reihenfolge

# 06/07/2018

- Verbessertes Abhängigkeitsskript.
- Entfernen der Abhängigkeitsprüfung, die während des Wartens ohnehin grün bleibt (denken Sie während der Installation daran, die Abhängigkeiten zu starten)

# 04/06/2018

- Wahrscheinliche Korrektur eines Aktualisierungsfehler-Benachrichtigungsfehlers bei Hygrothermograph und Miflora (erfordert wahrscheinlich einen Neustart der Abhängigkeiten für die betroffenen Personen)

# 28.03.2008

- füge conf dreamscreen hinzu
- Änderung des Dämons zur Angabe der Protokolle
- Änderung der Erkennung von MI_SCALE V1
- Watchdog Bluepy-Helfer (im Prozess)

# 02/10/2018

- Korrektur eines Fehlers im Netzwerkgraphen modal, wenn ein Gerät kein Objekt hatte

# 03/01/2018

- Hinzufügen der Conf für das Thermometer / Hygrometer mit Xiaomi-Bildschirm
- Zugabe von Awox Mesh Confs
