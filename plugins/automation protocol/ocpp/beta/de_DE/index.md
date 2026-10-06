# OCPP-Plugin

Das **OCPP**-Plugin ermöglicht es, Jeedom als zentrales OCPP-System *(Open Charge Point Protocol)* zu nutzen. Es bietet die Möglichkeit, eine oder mehrere mit diesem Protokoll kompatible Ladestationen für Elektrofahrzeuge zu überwachen.

# Konfiguration

## Konfiguration des Terminals

Damit das Plugin mit dem Gerät kommunizieren kann, muss dieses korrekt konfiguriert werden. Dieser Konfigurationsschritt ist je nach Modell/Hersteller unterschiedlich, wobei Folgendes zu beachten ist:

- **Protokollversion**: OCPP-Verbindung in Version 1.6 aktivieren.
- **IP-Adresse/URL/Endpunkt**: Geben Sie die Adresse des OCPP-Zentralsystems ein *(ws://``IP_LOCALE_JEEDOM``:9000)*.
- **Gerätekennung**: Jedes Gerät muss über eine eindeutige Kennung verfügen, damit es von Jeedom erkannt wird *(ws://``IP_LOCALE_JEEDOM``:9000/``ID_BORNE``)*.

## Einrichtung des Plugins

Wie jedes Jeedom-Plugin muss auch das **OCPP**-Plugin nach der Installation aktiviert werden. Nach der Installation der Abhängigkeiten kann der Daemon gestartet werden.

In den Minuten nach dem Start des Daemons verbinden sich die korrekt konfigurierten Ladestationen mit dem Jeedom-Zentralsystem. Die entsprechenden Geräte werden automatisch angelegt.

>**INFORMATION**
>
>Die Kommunikation erfolgt standardmäßig über den Port `9000`. Bei Konflikten kann dieser Port geändert werden, wobei die Konfiguration des Geräts entsprechend angepasst werden muss.

## Konfiguration der Geräte

### Berechtigungen

Standardmäßig lässt jede neu erstellte Klemme keine Last *(Transaktion)* zu.

Über ein Dropdown-Menü können Sie alle Transaktionen zulassen oder auswählen [eine Berechtigungsgruppe](#berechtigungsgruppen).

>**WICHTIG**
>
>Im Modus „Alles zulassen“ wird jede am Terminal vorgelegte Identifikation akzeptiert. Der Befehl **Ladevorgang starten** zeigt dann die Liste der Jeedom-Benutzer an.

### Klemmenparameter

Über die Registerkarte **Einstellungen** haben Sie Zugriff auf alle Konfigurationseinstellungen des Geräts. Einige davon sind veränderbar, andere nicht. Sie lassen sich in zwei große Gruppen unterteilen: die für das OCPP-Protokoll spezifischen und die herstellerspezifischen Einstellungen.

>**INFORMATION**
>
>Um die nicht bearbeitbaren Felder anzuzeigen, klicken Sie auf das Augensymbol. Klicken Sie auf das durchgestrichene Auge, um sie wieder auszublenden.

Jede Klemme kann daher direkt über die Jeedom-Software konfiguriert werden, indem Sie auf die Schaltfläche **Einstellungen auf der Klemme speichern** klicken. Es erscheint ein Fenster mit einer Liste aller vorgenommenen Änderungen. Wählen Sie die Einstellungen aus, die Sie übernehmen möchten, und klicken Sie dann auf **Speichern**, um sie an die Klemme zu senden.

>**WICHTIG**
>
>Jede Änderung an einer Konfigurationseinstellung des Geräts sollte nur in voller Kenntnis der Sachlage vorgenommen werden. Ein Fehler kann zu Funktionsstörungen führen.

# Berechtigungsgruppen

Klicken Sie auf die Schaltfläche **Berechtigungen**, um das Fenster zur Verwaltung der Berechtigungsgruppen anzuzeigen. Klicken Sie auf **Gruppe hinzufügen**, um eine neue Gruppe hinzuzufügen, oder wählen Sie eine vorhandene Gruppe aus, um sie zu bearbeiten.

## Berechtigungen hinzufügen

In jeder Gruppe können Berechtigungen manuell hinzugefügt oder die Berechtigungsdatei im CSV-Format hochgeladen bzw. gesendet werden.

Um eine Berechtigungsgruppe hinzuzufügen, klicken Sie einfach auf die Schaltfläche **Gruppe hinzufügen** und geben Sie dann den Namen der Gruppe ein.

>**INFORMATION**
>
>Durch Doppelklicken auf den Namen einer Gruppe können Sie diese umbenennen.

Eine Berechtigung setzt sich wie folgt zusammen:
- **einer Kennung**: einzigartig für jeden Benutzer *(z. B. RFID-Ausweis – Groß-/Kleinschreibung spielt keine Rolle)*.
- **eines Namens**: lesbare Identifikation des Benutzers *(optional)*.
- **eines Status**: Zugelassen, Gesperrt, Abgelaufen oder Ungültig.
- **ein Ablaufdatum**: Datum, an dem die Berechtigung endet *(optional, außer z. B. bei Hager-Terminals)*
- **Berechtigung für konkurrierende Transaktionen**: Aktivieren Sie das Kontrollkästchen, um mehrere parallele Belastungen für diese Kennung zuzulassen.

Klicken Sie auf die Schaltfläche **Berechtigungen speichern**, um die Berechtigungsgruppen zu speichern.

# Transaktionen

Die Transaktionsdaten *(Kosten)* für jeden Kontext *(alle, nach Gerät, nach Berechtigung)* sind über die Schaltfläche **Transaktionen** abrufbar:
- **ID**: Transaktions-ID.
- **Gerät**: Name des Jeedom-Geräts.
- **Benutzer**: Benutzername oder Name des Benutzers.
- **Start**: Startdatum.
- **Ende**: Enddatum.
- **Dauer**: Gesamtdauer des Ladevorgangs.
- **Verbrauch (Wh)**: Gesamtverbrauch in Wattstunden.
- **Anschluss**: Nummer des Anschlusses/der Buchse.

>**INFORMATION**
>
>Unabhängig davon, welche Transaktionsliste angefordert wird *(alle, nach Terminal oder nach Benutzer)*, werden diese bei der Erstellung oder beim Abschluss in Echtzeit aktualisiert.

# Steuerungen

## Anschluss

- **Klemmenstatus** *(Info/Binär)*: Aktivierungsstatus der Klemme.
- **Terminal aktivieren/deaktivieren** *(Aktion/Sonstiges)*: Verfügbarkeit des Terminals.
- **Status des Geräts** *(info/string)*: Allgemeiner Status des Geräts.
- **Klemmenfehler** *(info/string)*: Letzte Meldung/Fehlercode.
- **Terminal-Info** *(info/string)*: zusätzliche Informationen.
- **Max. Strom an der Klemme** *(Info/numerisch)*: Maximaler Strom *(SmartCharging)*.
- **Klemmstrom** *(Schaltfläche/Schieberegler)*: Legen Sie den maximalen Strom der Klemme fest *(SmartCharging)*.
- **Max. Leistung an der Ladestation** *(info/numeric)*: maximale Leistung *(SmartCharging)*.
- **Leistung der Ladestation** *(Schaltfläche/Schieberegler)*: Legen Sie die maximale Leistung der Ladestation fest *(SmartCharging)*.
- **Neustart der Software/Hardware des Geräts** *(Aktion/Sonstiges)*: Das Gerät neu starten.

## Anschluss(e)

- **Status des Konnektors** *(Info/Binär)*: Aktivierungsstatus des Konnektors.
- **Konnektor aktivieren/deaktivieren** *(Aktion/Sonstiges)*: Verfügbarkeit des Konnektors.
- **Konnektorstatus** *(info/string)*: Status des Konnektors.
- **Anschlussfehler** *(info/string)*: Letzte Meldung/Fehlercode.
- **Anschlussinfo** *(info/string)*: zusätzliche Informationen.
- **Benutzer-Connector** *(info/string)*: Kennung des aktuellen Benutzers.
- **Ladevorgang am Konnektor starten** *(action/select)*: Eine Transaktion am Konnektor starten.
- **Ladevorgang am Anschluss beenden** *(action/other)*: Den laufenden Vorgang beenden.

## Maßnahmen

Die Messwerte werden vom Plugin automatisch anhand der am Anschluss definierten Konfiguration **MeterValuesSampledData** erstellt.
Jeder empfangene Messwert erzeugt einen Befehl vom Typ **info/numeric**, der standardmäßig protokolliert wird und die entsprechende Einheit enthält *(Wh, W, A, V, Hz, °C, %, RPM)*.
Wenn die Klemme Werte pro Phase liefert, werden die Befehle mit **L1**, **L2** oder **L3** ergänzt.

### Beispiele für Maßnahmen

- **Current.Import – Stromverbrauch** *(A)*: Stromstärke *(pro Phase, sofern verfügbar)*.
- **Current.Export – Eingespeiste Stromstärke** *(A)*: Stromstärke, die ins Netz zurückgespeist wird.
- **Current.Offered – Maximalstrom** *(A)*: maximal zulässiger Strom.
- **Energy.Active.Import.Register – Energieverbrauch** *(Wh)*: Gesamtenergieverbrauch.
- **Energy.Active.Export.Register – Eingespeiste Energie** *(Wh)*: Gesamtenergie, die ins Netz zurückgespeist wurde.
- **Power.Active.Import – Leistungsaufnahme** *(W)*: aktuell verbrauchte Leistung.
- **Power.Active.Export – Eingespeiste Leistung** *(W)*: Momentane Leistung, die ins Netz zurückgespeist wird.
- **Power.Offered – Maximale Leistung** *(W)*: zulässige Höchstleistung.
- **Spannung** *(V)*: gemessene Spannung *(pro Phase, sofern verfügbar)*.
- **Frequenz – Fréquence** *(Hz)*: Netzfrequenz.
- **Power.Factor – Leistungsfaktor**: Verhältnis zwischen Wirkleistung und Scheinleistung.
- **SoC – Ladezustand** *(%)*: Ladezustand der Batterie des Fahrzeugs.
- **Temperatur – Température** *(°C)*: Innentemperatur der Klemme.
- **Drehzahl – Lüfterdrehzahl** *(RPM)*: Drehzahl des Lüfters.
