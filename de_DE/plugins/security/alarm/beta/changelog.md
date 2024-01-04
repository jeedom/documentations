# Änderungsalarm

>**Wichtig**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt

# 01.03.2024

- Vorbereitung auf Jeedom 4.4
- Es wurde ein Problem mit der Option "Separate Zonen" beim Ändern des Modus behoben
- Schnittstellenverbesserung

# 22.01.2020

- Verbesserte Protokolle bei mehreren Alarmen

# 21.10.2019

- Behebung eines Fehlers bei der Erstellung der Ausrüstung

# 2019.10.14

- Ein Fehler beim Umbenennen eines Modus wurde behoben

# 2019.04.28

- Fehlerbehebungen

# 23.04.2019

- Fehlerbehebungen

# 17.01.2019

- Möglichkeit der Verwendung von Variablen oder Berechnungen für die Halte-, Aktivierungs- und Triggerzeiten
- Aktualisieren des Dokuments

# 18.07.2008

- Aktualisieren des Dokuments
- Fehlerbehebung beim Umbenennen von Modi
- Wenn der Alarm bereits aktiv ist, wird er durch die Scharfschaltung nicht wieder aktiviert
- Hinzufügen einer Option für eine Mehrzonenauslösung (wenn eine andere Zone in Alarmbereitschaft versetzt wird, wird der Alarm ausgelöst)
- Hinzufügung von Maßnahmen bei Wiederaufnahme der Überwachung eines Sensors
- Tag hinzufügen #zone#
- Fügen Sie eine Schaltfläche hinzu, um einen Alarm zu duplizieren

# 03/06/2018

- Hinzufügen von Orphan Order Management
- Wenn die Sensoren deaktiviert sind, werden keine Aktivierungsaktionen mehr ausgelöst
- Fehlerbehebungen
- Detektoren mit Aktivierungsverzögerungen, die nach dieser Verzögerung noch aktiv sind, lösen den Alarm nicht mehr aus, sondern leiten die KO-Aktivierung ein, wobei dieser ausgeschlossene Detektor bis zur Rückkehr zum Normalzustand überwacht wird

# 2018.02.12

- Ein Fehler beim Verschieben von Aktionen im Trigger wurde behoben

- Möglichkeit, eine Halteverzögerung für einen Trigger hinzuzufügen, bevor der Alarm aktiviert wird

# 01.12.2017

-   Korrektur eines Fehlers bei Deaktivierung von Detektoren

-   Verwaltung von Sekunden für die Aktivierungsverzögerung (JEED-63)

-   Rückverfolgung der Nichteinleitung von Sofortmaßnahmen, wenn
    Die Aktivierungsverzögerung ist leer oder Null

-   Wenn während der Aktivierung ein Sensor in Alarmbereitschaft ist und keine Verzögerung hat
    Bei Aktivierung wird der Alarm trotzdem aktiviert, indem dieser Sensor ignoriert wird
    (es sei denn, er kommt zurück, um sich auszuruhen)

-   Hinzufügen einer globalen Triggeraktion (nicht mehr nach Zone gefiltert, es
    wird empfohlen, dies anstelle der Aktionen von zu verwenden
    Zonenauslöser)

-   Codeoptimierung

-   Achtung : Der Alarm führt keine Sofortaktionen mehr aus, wenn keine vorhanden sind
    keine Triggerverzögerung !!!!!! ⇒ Abgebrochen

-   Fähigkeit, die Leistung von Aktionen in Bezug auf zu filtern
    Alarmmodus

-   Befehl Pause / Fortsetzen hinzufügen

-   Verbesserung der Konfigurationsoberfläche
