# Änderungsprotokoll MQTT-Manager

>**WICHTIG**
>
>Zur Erinnerung: Wenn keine Informationen über die Aktualisierung vorliegen, liegt dies daran, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt.


- Eine Warnung beim Starten des Daemons wurde behoben
- Ein Fehler mit NodeJS 20 wurde behoben
- Wenn ein Befehl vom binären oder numerischen Typ ist und jeedom ein Array oder Objekt empfängt, wird der Wert ignoriert (behebt ein Problem mit Shelly 2.5)

# 09.09.2024

- Implementierung einer Optimierung der Verwaltung übertragener Geräte mit jeedom 4.5
- Es wurde Sicherheit hinzugefügt, um zu verhindern, dass ein von einem Plugin verwendetes Thema als Stammthema festgelegt wird
- Es wurde ein Assistent hinzugefügt, um die Mücke zweier Jeedoms einfach zu verknüpfen
- Es wurde die Möglichkeit hinzugefügt, Informationen an die Jeedom-Cloud zu senden, um zwischen zwei Jeedoms über das Internet zu kommunizieren (derzeit für Benutzer nicht verfügbar))
- Standardmäßige Aktivierung der automatischen Erkennung (kann über Plugin -> Programmierung -> Mqtt-Manager deaktiviert werden))
- Es wurde ein Fehler beim Erstellen des Befehls behoben, der den Status eines Remote-Jeedoms anzeigt (über die Jeeodm-Monitorausrüstung des virtuellen Plugins))
- Hinzufügung des SYS-Themas (um interne MQTT-Informationen zu erhalten))
- Hinzufügen einer Mosquito-Vorlage.sys, das den Abruf von Informationen aus dem Brocker ermöglicht (Gesamt empfangene/gesendete Nachrichten/1 Min./5 Min./15 Min., Speicherauslastung)...)
- Überprüfung des Listeners bei jedem Start des Daemons

# 20.08.2024

- Hinzufügen einer Online- und Offline-Meldung beim Starten und Stoppen (gewollt oder nicht) des Daemons in topic_racine/state
- Wenn Sie Jeedom-Ausrüstung haben::Wenn Sie über das virtuelle Plugin überwachen, fügt das Plugin automatisch den Statusbefehl hinzu (online oder offline). Wenn Sie dieses Gerät bereits haben, müssen Sie die Erkennung neu starten
- Es wurde ein Fehler bei der Übertragung des echten Ausrüstungstyps behoben (bei der Übertragung von Ausrüstung zwischen Jeedom))
- Ein Fehler bei der Duplizierung der Ereignisüberwachungsaufgabe wurde behoben
- Wenn auf exportierten Geräten das Quell-Plugin auf dem Ziel-Jeedom vorhanden ist, zeigt Jeedom das Plugin-Symbol an
- Kein Fehler in den Protokollen während der Befehlsübertragung (vermeidet die Zerstörung von Jeedom, wenn der Daemon unterbrochen wird))
- Bestes Management verwaister Bestellungen
- Ein Fehler beim Ausführen von Nachrichtentypbefehlen wurde behoben

# 12.08.2024

- Ein Fehler beim Senden von Ausrüstung aus dem Konfigurationsfenster wurde behoben
- Es wurde eine Schaltfläche zum Anzeigen von Mückenprotokollen hinzugefügt (sofern es sich im lokalen Brocker-Modus befindet))
- Die Dokumentation wurde aktualisiert, um besser zu erklären, wie Themen zwischen zwei Moskitos synchronisiert werden

# 10.08.2024

- Ein Fehler beim Senden von Batterien wurde behoben (nicht statische Anrufmethode))

# 08.09.2024

- Verbesserte Darstellung des Konfigurationsfensters für übertragene Geräte
- Ein Fehler bei verwaisten Befehlen bei der Übertragung über mqtt wurde behoben

# 08.08.2024

- Für Geräte, die über Mqtt übertragen werden, sendet das Plugin jetzt jede Nacht den Batteriestand
- Das Plugin zur Verwaltung des zwischen Jeedom übertragenen Batteriestands
- Korrekte Verwaltung von Aktualisierungsbefehlen für Widgets auf Geräten, die zwischen Jeedom übertragen werden
- Beim Senden der Entdeckung zwischen Jeedom werden auch die Werte der Befehle übertragen (Sie müssen nicht auf eine Aktualisierung des Werts warten, um ihn auf dem Ziel zu haben). Erfordert erneutes Senden der Erkennung
- Bei der Übertragung von Geräten zwischen Jeedom verwaltet das Plugin nun den tatsächlichen Gerätetyp, um mit mobilen Anwendungen kompatibel zu sein. Erfordert erneutes Senden der Erkennung
- Ein globales Konfigurationsfenster für die Übertragung von Geräten zwischen Jeedom hinzugefügt

# 08.05.2024

- Mit Jeedom 4.4.8 oder mehr Möglichkeit, nicht mehr alle Geräte auf dem MQTT-Brocker zu senden, sondern nur noch bestimmte (in der erweiterten Konfiguration der zu übertragenden Geräte zu konfigurieren))
- Fehlerbehebungen (insbesondere für PHP8-Kompatibilität))
- Entdeckung zwischen Jeedom (um zwei Jeedoms durch mqtt miteinander kommunizieren zu lassen)
- Möglichkeit auf der Plugin-Konfigurationsseite, das Abonnement eines Plugins zu löschen

# 22.03.2024

- Ein Problem unter PHP8 wurde behoben
- Ein Fehler unter Debian 12 wurde behoben

# 23.02.2024

- Löschen einer startbaren Daemon-Prüfung (wird in jedem Fall beim Starten des Daemons durchgeführt))

# 15.01.2024

- Vorbereitung auf Jeedom 4.4
- Verbessertes Mückenmanagement unter Docker

# 27.10.2023

- Es wurde ein Fehler im Status des Daemons behoben (gestartet, wenn nicht))

# 10.05.2023

- Ein Fehler im Brocker-Status wurde behoben

# 10.02.2023

- Möglichkeit zur Korrektur des Standard-QOS
- Bug-Fix
- Beginn des Hinzufügens des automatischen Erkennungssystems
- Verbesserte Handhabung von Mücken im lokalen Modus

# 22.03.2023

- Bug-Fix

# 03.07.2023

- Hinzufügen eines Autodiscovery-Systems für einige Beta-Module (esphome, tasmota und shelly)
- Bild der Module hinzugefügt
- Fehler bei der Client-ID behoben (wenn mehrere jeedom auf demselben Broker)
- Unterstützung auf untergeordneter Ebene in Ausrüstungsthemen
- Bug-Fix

# 23.12.2022

- Es wurde ein Fehler bei der maximal zulässigen Zeit für die Installation von Abhängigkeiten behoben
- Ausrüstungsvorlagensystem hinzugefügt (beta)

# 18.11.2022

- Es wurde eine Meldung hinzugefügt, die dazu auffordert, die Berechtigungen für Ordner wiederherzustellen, bevor Mosquitto im Fehlerfall installiert wird **Kein SSL-Ordner gefunden**

# 13.11.2022

- Auf der allgemeinen Plugin-Konfigurationsseite wurde eine Schaltfläche zum Deinstallieren eines lokalen Mosquitto-Brokers hinzugefügt
