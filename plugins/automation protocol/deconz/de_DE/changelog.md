# Änderungsprotokoll Deconz

>**WICHTIG**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

# 15/10/2026

- Behebung eines „Division by Zero“-Fehlers bei den Farblampen, bei denen im Weißmodus keine Farbangaben angezeigt werden

# 17/02/2026

- Debian 12-Kompatibilität
- Erforderliche Mindestversion von Jeedom: 4.4.8

# 03/01/2024

- Vorbereitung auf Jeedom 4.4

# 19/12/2023

- Verbesserte Unterstützung für die interne Netzwerkkonfiguration von jeedom
- Fehlerbehebungen

# 15/02/2023

- Verbesserung der Bestellseite (Hinzufügen des Status)

# 11/10/2022

- Fehlerbehebung
- Neuer Typ hinzugefügt

# 03/02/2022

- Versuch, den Fehler „cannot import name 'collections_abc' from 'six.moves'“ zu beheben; erfordert Jeedom 4.2 und einen Neustart der Installation der Abhängigkeiten

# 16/12/2021

- Fehlerbehebungen

# 04/12/2021

- Unterstützung neuer Typen

# 29/11/2021

- Möglichkeit Deconz zu deinstallieren, danke @Benjamin
- ZHAAirQualit hinzugefügt, meric @sagitaz
- Es wurde ein Fehler mit der neuesten Version von deconz bei der Rückgabe von Attribut-Updates behoben
- Ergänzung um Gruppen- und Bindungsverwaltung

# 08/02/2021

- Unterdrückung des Sendens von Helligkeit während eines Farbwechsels für RGB-Lampen
- ZHACarbonMonoxid hinzugefügt, danke @sagitaz

# 28/10/2020

- Es wurde ein Hinweis hinzugefügt, dass Sie auf keinen Fall das Firmware-Update für den Stick durchführen sollten, wenn Sie eine VM oder Freebox Delta verwenden, da dies zu einem Ausfall des Sticks führen kann.

# 23/09/2020

- Unterstützung für das Danfoss Ally-Ventil (erfordert Deconz 2.05.79)
- Änderung der Installationsmethode für RPI und x86_64 (Umstellung auf die deconz-Repos)

# 01/07/2020

- Verbesserter Start von deCONZ

# 08/06/2020

- Hinzufügen des Typs „ZGPSwitch“ (Button „Friend of Hue“)

# 25/05/2020

- Behebung eines Problems mit den generischen Typen für farbige Leuchten (es wird empfohlen, den generischen Typ für den Befehl „Farbaktion“ anzupassen, da es sonst zu Problemen bei Alexa oder Google Home kommen kann, z. B. dass sich die Leuchte beim Befehl „EIN“ ausschaltet)

# 12/05/2020

- Hinzufügen eines automatischen Neustarts der Verbindung zu deconz im Falle eines Verlusts

# 27/02/2019

- Möglichkeit zum Deaktivieren von Knotenwarnungen, die vom Gerät nicht erreicht werden können
- Aktualisierungen der Dokumentation und Übersetzung

# 27/12/2019

- Inversion des Widgets für Ikea-Stores zum Einfügen im realen Zustand

# 26/12/2019

- Behebung eines Fehlers beim Firmware-Update

# 24/12/2019

- Hinzufügen von Warngeräte- und ZHAAlarm-Typen
- Unterstützung für IKEA-Jalousien (Beta)
- Probleme beim Finden der Firmware für den Schlüssel behoben

# 15/11/2019

- Ich bin wieder auf Deconz 2.0.69 zurückgegangen, da Version 70 zu viele Fehler hat; man muss die lokale Deconz-Installation neu starten.

# 14/11/2019

- Ein Problem mit der Installation von deconz wurde behoben

# 08/11/2019

- Aktualisierung der Dokumentation (Hinzufügen der Deaktivierung der seriellen Schnittstelle auf dem RPI, da der Daemon sonst instabil ist)
- Verbesserung der Ventilunterstützung

# 03/11/2019

- Installationsunterstützung auf RPI1

# 27/10/2019

- Fehlerbehebungen
- Thermostatventilhalterung

# 14/10/2019

- Möglichkeit, die Firmware eines Conbee 2-Schlüssels von jeedom zu aktualisieren
- Starten einer erzwungenen Synchronisierung beim Starten des Dämons
- Behebung eines Fehlers bei der Installation von Abhängigkeiten

# 23/09/2019

- Aktualisieren des Dokuments

# 23/09/2019

- Fehlerbehebungen
- Aktualisieren des Dokuments

# 09/09/2019

- Korrektur eines Fehlers auf der Protokollebene von deconz in der lokalen Installation
- Aktualisierung der lokalen Version von Deconz auf 2.5.69 (Achtung: Um diese Version zu erhalten, muss in der Plugin-Konfiguration die Installation von Deconz neu gestartet und anschließend der Daemon neu gestartet werden)

# 28/08/2019

- Aktualisierung der lokalen Version von Deconz auf 2.5.67 (Achtung: Um diese zu erhalten, muss in den Plugin-Einstellungen die Installation von Deconz neu gestartet werden)

# 13/08/2019

- Verbesserung der Unterstützung für den Xiaomi-Cube (Danke an @kaktusatomik)
- Hinzufügen des Knotenstatus in ZigBee-Netzwerken
- Tägliche Analyse der Netzwerke mit Berichterstellung, wenn ein Problem mit einem Modul vorliegt

# 24/07/2019

- Behebung eines Fehlers bei der Deaktivierung von Geräten

# 22/07/2019

- Möglichkeit, einen Knoten zu löschen
- Fügen Sie eine Link-Schaltfläche direkt zur Deconz-Oberfläche hinzu
- Hinzufügen des Namens des Jeedom-Geräts in der Tabelle mit den Knoten
- Hinzufügen der Temperatur bei einigen Xiaomi-Modulen
- Unterstützung für Doppelrelaismodule
- Verbesserte Unterstützung für Sensor- und Aktormodule

Achtung: Wir haben Fälle festgestellt, in denen Bestellungen doppelt aufgegeben wurden (falls dies bei Ihnen der Fall sein sollte, wenden Sie sich bitte an den Support).

# 08/07/2019

- Unterstützung des Xiaomi-Vibrationserkennungsmoduls

# 04/07/2019

- Fehlerbehebungen

# 30/06/2019

- Korrektur eines Fehlers bei der Installation von Abhängigkeiten, der den Start des Dämons verhindert
