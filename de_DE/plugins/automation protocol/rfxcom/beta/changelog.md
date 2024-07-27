# Changelog RFXcom

>**Wichtig**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt

# 27.07.2024

- Debian 12-Kompatibilität hinzugefügt (Jeedom 4.4-Version).7 für Debian 12 erforderlich)
- Korrektur der Verwaltung des Daemon-Abschaltens im Falle eines Konfigurations- oder Verbindungsproblems mit rfxcom

# 11.06.2024

- Das Plugin ist weniger streng in Bezug auf die rfxcom-Firmware (Firmware-Autorisierung nicht auf dem neuesten Stand))
- Der Daemon wurde neu gestaltet, um ein Speicherleckproblem unter Debian 11 zu beheben (danke @Mips2648))

# 01.03.2024

- Vorbereitung auf Jeedom 4.4

# 26.09.2022

- Behebung eines Problems, wenn der Benutzer die Aktivierung der Protokolle im rfxcom-ROM fest codiert hat

# 02.07.2022

- Problem beim Installieren von Abhängigkeiten unter Jeedom 4.2 behoben

# 02.03.2022

- Problem beim Installieren von Abhängigkeiten unter Jeedom 4.2 behoben
- Fehlerbehebung bei Modulen vom Typ 0x71 (danke @Doubledom)

# 02/08/2021

- Möglichkeit, nur einen bestimmten Pakettyp bei der Verarbeitung von Geräteinformationen zu autorisieren (seltener Fall))
- Korrektur eines Fehlers auf conf 0x1A : Somfy RTS Motor, der in bestimmten Fällen möglicherweise nicht angezeigt wird.

# 01/07/2020

- Fehlerbehebungen und Optimierung (danke @Doubledom)

# 07/12/2020

- Korrektur eines Fehlers an Somfy-Geräten (ID 8 statt 6)

# 03/12/2020

- Fehler beim Update behoben
- Korrektur der Windrichtung (Division durch 10 zu viel)

# 01.12.2020

- Fehlerbehebungen

# 29.11.2020

- Behebung von Fehlern bei der Wiederherstellung der Batterie
- Fehlerbehebung bei der Steuerung des mcz 2-Lüfterofens
- Fehlerbehebungen

# 26.11.2020

- Vollständige Überarbeitung des Plugin-Daemons
- Passage in Python3
- Volle Unterstützung aller RFXcom-Module

Achtung : Dieses Update ist wichtig und erfordert einen Neustart der Installation von Abhängigkeiten. Es ist auch möglich, dass bestimmte Sensoren wiederholt werden müssen.

# 27.05.2019

- Fehlerbehebungen

# 10/02/2019

- Verbesserung der rfxcom-Porterkennungsfunktion

# 16.05.2019

- Korrekturfehler-Oberfläche

# 05/03/2019

- Entfernen Sie den Lüfter MCZ 3

# 30.04.2019

- Fehlerbehebung

# 29.04.2019

- Korrektur eines Fehlers, wenn die Protokollstufe keine ist
- MCZ 3 Lüfterunterstützung
- Aktualisieren des Dokuments

# 10/08/2018

- Korrigieren Sie die erwarteten und gewünschten Vergleichsprotokolle in Kleinbuchstaben

# 10/08/2018

- Demon Startup Review (von Sarakha)
- Kompatibel mit dem neuesten RFXCOM (von Sarakha)
- Trennung im Thread von Abhörbuchse und RFXCOM-Schlüssel (von Sarakha)

# 14.04.2008

- Die Korrektur eines Fehlers oder des Dämons kann bestimmte Nachrichten übersehen, wenn diese eintreffen, bevor sie gleichzeitig mit demselben Pakettyp an Jeedom gesendet werden

# 17.03.2008

- Aktualisieren des Dokuments

# 28.02.2008

- Behebung eines Fehlers beim Batteriewechsel

# 2017-12-01

- Die Aktionsbefehle für die Fernbedienungsmodule sind
    automatisch erstellt
