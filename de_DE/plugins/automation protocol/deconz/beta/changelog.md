# Changelog Deconz

>**Wichtig**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt

# 15.02.2023

- Verbesserung der Bestellseite (Hinzufügen der Status)

# 11.10.2022

- Fehlerbehebung
- Neuer Typ hinzugefügt

# 02.03.2022

- Versuchen Sie, den Fehler „Name ‚collections_abc‘ aus ‚sechs‘ kann nicht importiert werden‘ zu beheben.bewegt'", erfordert jeedom 4.2 und Neustart der Installation von Abhängigkeiten

# 16.12.2021

- Fehlerbehebungen

# 12.04.2021

- Unterstützung neuer Typen

# 29.11.2021

- Möglichkeit Deconz zu deinstallieren, danke @Benjamin 
- ZHAAirQualit hinzugefügt, meric @sagitaz
- Es wurde ein Fehler mit der neuesten Version von deconz bei der Rückgabe von Attribut-Updates behoben
- Ergänzung um Gruppen- und Bindungsverwaltung

# 02/08/2021

- Unterdrückung des Sendens von Helligkeit während eines Farbwechsels für RGB-Lampen
- ZHACarbonMonoxid hinzugefügt, danke @sagitaz

# 28.10.2020

- Es wurde eine Meldung hinzugefügt, die angibt, dass die Schlüsselfirmware nicht aktualisiert werden soll, wenn Sie sich auf einer VM oder Freebox Delta befinden und das Risiko besteht, dass der Schlüssel beschädigt wird.

# 23/09/2020

- Danfoss Ally Ventilhalterung (Dekonz 2.05.79 erforderlich)
- Änderung der Installationsmethode für RPI und x86_64 (Durchgang durch die Dekonz-Repositorys)

# 07/01/2020

- Verbesserter Start von deCONZ

# 06.08.2020

- Typ ZGPSwitch (Button Friend of Hue) hinzugefügt)

# 25.05.2020

- Korrektur eines Problems bezüglich des generischen Farbtyps (es ist ratsam, den generischen Typ für den Befehl des Farbtyps zu korrigieren, da dies sonst zu Problemen in Alexa oder Google Home führen kann, wenn das Licht während der EIN-Anforderung erlischt)

# 05/12/2020

- Hinzufügen eines automatischen Neustarts der Verbindung zu deconz im Falle eines Verlusts

# 2019.02.27

- Möglichkeit zum Deaktivieren von Knotenwarnungen, die vom Gerät nicht erreicht werden können
- Aktualisierungen der Dokumentation und Übersetzung

# 2019.12.27

- Inversion des Widgets für Ikea-Stores zum Einfügen im realen Zustand

# 2019.12.26

- Behebung eines Fehlers beim Firmware-Update

# 2019.12.24

- Hinzufügen von Warngeräte- und ZHAAlarm-Typen
- Unterstützung für Ikea Stores (Beta)
- Probleme beim Finden der Firmware für den Schlüssel behoben

# 2019.11.15

- Zurück zu Deconz 2.0.69 Da die 70 zu viele Fehler aufweist, müssen Sie die lokale Deconz-Installation neu starten

# 2019.11.14

- Ein Problem mit der Installation von deconz wurde behoben

# 2019.08.11

- Aktualisierung des Dokuments (Hinzufügung der Deaktivierung der Seriennummer im RPI, andernfalls ist der Dämon instabil)
- Verbesserung der Ventilunterstützung

# 2019.03.11

- Installationsunterstützung auf RPI1

# 2019.10.27

- Fehlerbehebungen
- Thermostatventilhalterung

# 2019.10.14

- Möglichkeit, die Firmware eines Conbee 2-Schlüssels von jeedom zu aktualisieren
- Starten einer erzwungenen Synchronisierung beim Starten des Dämons
- Behebung eines Fehlers bei der Installation von Abhängigkeiten

# 2019.09.23

- Aktualisieren des Dokuments

# 2019.09.23

- Fehlerbehebungen
- Aktualisieren des Dokuments

# 2019.09.09

- Korrektur eines Fehlers auf der Protokollebene von deconz in der lokalen Installation
- Update der lokalen Version von deconz auf 2.5.69 (Achten Sie darauf, dass es in der Plugin-Konfiguration die Installation von Deconz neu startet und starten Sie dann den Dämon neu)

# 2019.08.28

- Update der lokalen Version von deconz auf 2.5.67 (Achten Sie darauf, dass in der Plugin-Konfiguration die Installation von Deconz neu gestartet wird)

# 2019.08.13

- Verbesserte Unterstützung für den Xiaomi-Würfel (merc @kaktusatomik)
- Hinzufügen des Knotenstatus in ZigBee-Netzwerken
- Tägliche Analyse der Netzwerke mit Berichterstellung, wenn ein Problem mit einem Modul vorliegt

# 2019.07.24

- Behebung eines Fehlers bei der Deaktivierung von Geräten

# 2019.07.22

- Möglichkeit, einen Knoten zu löschen
- Fügen Sie eine Link-Schaltfläche direkt zur Deconz-Oberfläche hinzu
- Hinzufügen des Namens des Jeedom-Geräts in der Tabelle mit den Knoten
- Hinzufügen der Temperatur bei einigen Xiaomi-Modulen
- Unterstützung für Doppelrelaismodule
- Verbesserte Unterstützung für Sensor- und Aktormodule

Achtung, wir haben Fälle festgestellt, in denen es zu doppelten Bestellungen kam (wenn Sie diese erfüllen, zögern Sie nicht, den Support zu kontaktieren)

# 2019.07.08

- Unterstützung des Xiaomi-Vibrationserkennungsmoduls

# 2019.04.07

- Fehlerbehebungen

# 2019.06.30

- Korrektur eines Fehlers bei der Installation von Abhängigkeiten, der den Start des Dämons verhindert
