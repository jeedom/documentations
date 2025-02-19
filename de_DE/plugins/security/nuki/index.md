# Nuki Plugin

Mit diesem Plugin können Sie Nuki-verbundene Schlösser über die Brücke steuern.

## Plugin Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur aktivieren und dann die Bridge-Informationen konfigurieren.

Diese Informationen sind in der mobilen Anwendung verfügbar, wenn die Bridge konfiguriert wird, nachdem der API-Zugriff darauf aktiviert wurde.

![nuki1](./images/nuki1.png)

Es ist dann notwendig, auf die Schaltfläche "Brücke konfigurieren" zu klicken, um der Brücke die Adresse von Jeedom für die Rückmeldung anzuzeigen.

## Gerätekonfiguration

Die Synchronisierung von Schlössern ist über das Menü Plugins > Sicherheit > Nuki zugänglich:

![nuki2](./images/nuki2.png)

> **Notiz**
>
> Bestellungen werden automatisch erstellt und müssen nicht manuell hinzugefügt werden.

## Mögliche Werte für den Befehl *Bundesland*

|     | **intelligentes Schloss**             | **offen**  | **Türsensor** |
|-----|---------------------------|-------------|----------------|
| 0   | Nicht kalibriert               | Nicht kalibriert | -              |
| 1   | Gesperrt               | Online    | Deaktiviert     |
| 2   | Freischalten            | -           | Abgeschlossen         |
| 3   | Entsperrt             | rto aktiv  | Geöffnet        |
| 4   | Ausgangssperre              | -           | Unbekannt       |
| 5   | Entsperrt (Latch)    | Offen      | Kalibrierung      |
| 6   | Entsperrt (lock n go) | -           | -              |
| 7   | Entsperren (Latch)   | Öffnung   | -              |
| 16  | -                         | -           | Nicht kalibriert    |
| 240 | -                         | -           | Gelöscht       |
| 253 | -                         | Anlaufen   | -              |
| 254 | Motor stecken             | -           | -              |
| 255 | Unbekannt                   | Unbekannt     | -              |
