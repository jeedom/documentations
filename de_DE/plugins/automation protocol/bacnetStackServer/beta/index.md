# BACnet Stack Server-Plugin

## Description

Das Plugin **** verwandelt Ihr Jeedom in **Bidirektionales BACnet-Gateway**. Es funktioniert in beiden Modi **** ((Stellen Sie Ihre Jeedom-Geräte im BACnet-Netzwerk ein) und im Modus **** (Werte auf externen BACnet-Geräten lesen und schreiben).

### Bibliothek verwendet

Das Plugin ist abhängig von **[](https://bacnet.sourceforge.net/)**, eine Open-Source-Implementierung des BACnet-Protokolls. Während der Installation der Abhängigkeiten wird automatisch eine kompilierte Binärdatei heruntergeladen.

### Funktionsprinzip


  Jeedom BACnet-Netzwerk
  ┌─────────────────────┐ ┌──────────────────┐
  │ │ ←→ │ GTB / Automaton │
  │ Servermodus │ │ (liest/schreibt die │
  │ (angezeigte Objekte) │ │ Jeedom-Objekte) │
  │ │ └─────────────────┘
  │ Client-Modus │ ←→ ┌──────────────────┐
  │ (liest/schreibt │ │ BACnet-Gerät │
  │ externe Geräte) │ │ (Sensor, HLK…) │
  └──────────────────────┘ └──────────────────┘


### Typische Anwendungsfälle

- Integration von Jeedom in eine bestehende BMS-Installation (Gebäudemanagementsystem, Siemens Desigo usw.).)
- Jeedom-Sensoren (Temperatur, Verbrauch usw.) werden an ein Gebäudemanagementsystem (BMS) angeschlossen, um die Messwerte auszulesen
- Aktivierung eines Gebäudemanagementsystems (BMS) zur Steuerung von Jeedom-Geräten (Thermostate, Rollläden usw.))
- Lesen Sie die Werte von einer BACnet-SPS oder einem Sensor von Jeedom aus
- Anweisungen auf einem externen BACnet-Gerät (z. B. HLK-Steuerung, Dimmer) schreiben)

---

## Installation

1. Installieren Sie das Plugin vom Jeedom Market
2. Aktivieren Sie das Plugin
3. Die Abhängigkeiten werden automatisch gestartet und die kompilierte bacnet-stack-Binärdatei heruntergeladen
4. Der BACnet-Daemon startet
5. Konfigurieren Sie die **Servermodus** (Kartierung) und/oder erstellen **Kundengeräte**

---

## Servermodus – Jeedom im BACnet-Netzwerk verfügbar machen

### Jeedom-Zuordnungsseite → BACnet

Sie können die Konfigurationsseite über das Plugin-Menü aufrufen. Diese Schnittstelle ermöglicht Ihnen **Verknüpfen Sie Ihre Jeedom-Befehle mit BACnet-Objekten** im Netzwerk sichtbar.

#### Suchen und Filtern

Eine Suchleiste am oberen Rand der Tabelle filtert die Zeilen sofort nach Typ, Instanz, Name oder zugehörigem Befehl. Nützlich bei großen Konfigurationen.

#### Konfigurationstabelle

|  |  |
|---------|-------------|
| **Typ BACnet** | BACnet-Objekttyp (`analog-value`, `analog-input`, `binary-value`, etc.).) |
| **** | Eindeutige Instanznummer für diesen Objekttyp (≥ 1, außer schedule/trendlog ≥ 0)) |
| **Name BACnet** | Name des im BACnet-Netzwerk sichtbaren Objekts |
| **Jeedom-Befehl verknüpft** | Reihenfolge der anzuzeigenden Informationen oder Aktionen |
| **Anfangswert** | Startwert des BACnet-Objekts |
| **Automatische Synchronisierung** | Automatische Aktualisierung von Jeedom (cron)) |
| **Aktionen** | Objekt löschen oder Aktion konfigurieren |

#### Fügen Sie ein BACnet-Objekt hinzu

1. Klicken Sie auf **"Fügen Sie ein BACnet-Objekt hinzu"**
2. Füllen Sie die Felder aus :
   - **Typ BACnet** :
     -  : Numerische Werte (Temperatur, Verbrauch…))
     -  : EIN/AUS-Zustände
     -  : mehrere Staaten
   - **** : eindeutige Nummer (z.B : )
   - **Name BACnet** : beschreibender Name (z.B : "Wohnzimmertemperatur")

3. **Verknüpfe einen Jeedom-Befehl** (optionnel) :
   - Wählen Sie eine Reihenfolge aus der Dropdown-Liste aus
   - **Typinformationen** : Der Jeedom-Wert wird für das BACnet-Lesen freigegeben
   - **Aktionstyp** : Dieser Befehl wird von einem BACnet-Schreibvorgang ausgeführt

4. **Anfangswert** :
   - **Automatikmodus** (falls verknüpfte Bestellung) : verwendet den aktuellen Wert des Befehls
   - **Manueller Modus** : Geben Sie einen festen Startwert ein

5. **Automatische Synchronisierung** (Bestellinformationen) : Jeedom aktualisiert den BACnet-Wert entsprechend der konfigurierten Cron-Frequenz

#### Aktionsbefehle konfigurieren

Wenn eine Bestellung **** ist mit einem BACnet-Objekt verknüpft, klicken Sie auf **"Config"** um das Verhalten während eines BACnet-Schreibvorgangs zu definieren :

- **Verwenden Sie den empfangenen Wert** : Der vom BACnet-Client geschriebene Wert wird an den Jeedom-Befehl übermittelt
  * : BACnet-Client schreibt `22.5` → Thermostat empfängt `22,5`*
- **Verwenden Sie einen festen Wert** : Es wird immer ein vordefinierter Wert gesendet, unabhängig vom empfangenen BACnet-Wert
  * : Jeder Schreibbefehl erhält immer `1` (zur Aktivierung))*

#### Echtzeitwerte

Der Knopf **"Live-Werte"** Die Tabellenüberschrift fragt sofort den BACnet-Daemon ab, um den aktuellen Wert jedes Objekts direkt in der entsprechenden Spalte anzuzeigen.

#### Aktionsschaltflächen

|  |  |
|--------|-------|
| **** | Speichert die Konfiguration in einer temporären Datei, ohne sie auf den Server anzuwenden |
| **Speichern und Anwenden** | Erstellt automatisch eine Datensicherung und wendet die Konfiguration anschließend im laufenden Betrieb an (kein Neustart erforderlich)) |
| **Jetzt synchronisieren** | Leitet eine sofortige manuelle Synchronisierung aller verknüpften Werte ein |

#### Automatische Synchronisierung

**1. Cron (Automatische Synchronisierung))**
- Kontrollkästchen ankreuzen **"Automatische Synchronisierung"** auf die gewünschten Artikel
- Stellen Sie die Frequenz im Auswahlfeld oben auf der Seite ein (standardmäßig 15 Minuten))
- Nur Bestellungen ****  **Automatische Synchronisierung** Die ausgewählten Elemente werden aktualisiert

**2. Echtzeit-Rückruf**
- BACnet-Schreibvorgänge, die auf dem Server eingehen, werden sofort verarbeitet
- Wenn ein Aktionsbefehl verknüpft ist, wird er automatisch ausgeführt
- Für diese Kommunikationsrichtung ist keine automatische Synchronisierung erforderlich

---

## Client-Modus – Externe BACnet-Geräte lesen und beschreiben

Das Plugin kann sich wie folgt verhalten **BACnet-Kunde** : Es verbindet sich mit einem BACnet-Gerät im Netzwerk (SPS, Sensor, HLK-Regler usw.), um dessen Werte auszulesen und/oder Anweisungen an dieses zu senden.

### Erstellen Sie ein Kundengerät

1. Erstellen Sie im Plugin-Menü ein **neue Ausrüstung**
2. Geben Sie die Informationen in der Konfiguration ein :
   - **Geräte-ID** : BACnet-Kennung des Remote-Geräts (z.B : )
   - **IP:Port** : Geräteadresse (z.B : 192.168.1.100:). Port 47808 wird automatisch hinzugefügt, falls er nicht vorhanden ist.
3. Aktivieren Sie das Gerät und speichern Sie es

### Wiedergabebefehle (Info))

Jede Bestellung **** eines Clientgeräts entspricht einem BACnet-Objekt des Remotegeräts :

| Einstellung |  |
|-----------|-------------|
| **Objekttyp** | . |
| **** | Objektinstanznummer auf dem Gerät |
| **Eigentum** | Zu lesende Eigenschaft (Standard) : `present-value`) |

Die Werte werden bei jedem Cron-Zyklus automatisch ausgelesen. Die Maßeinheit wird vom Gerät abgerufen und automatisch auf den Jeedom-Befehl angewendet.

### Schreibbefehle (Aktion))

Jede Bestellung **** ermöglicht das Schreiben eines Werts in ein BACnet-Objekt auf dem Remote-Gerät :

| Einstellung |  |
|-----------|-------------|
| **Objekttyp** | `analog-value`, `analog-output`, `binary-value` usw. |
| **** | Zielobjektinstanznummer |
| **Eigentum** | Zu schreibende Eigenschaft (Standard) : `present-value`) |
| **Schreibpriorität** | BACnet-Priorität (1–16, Standard) : 8) |

### Verbindungsverfolgung

Das Plugin überwacht automatisch die Verfügbarkeit jedes Clientgeräts :

- Nach **3 aufeinanderfolgende Zyklen** Wenn keine Reaktion erfolgt, wird das Gerät als markiert ****
-  **Befehlsinformationen "Konnektivität""** (0 = offline, 1 = online) wird automatisch auf jedem Gerät erstellt
- Sobald eine Messung wieder erfolgreich ist, kehrt das Gerät zurück **online**
- Bei jedem Übergang wird ein Ereignis in der Historie aufgezeichnet

---

## Supervision

Die Seite **** ((Zugriff über die orangefarbene Kachel auf der Homepage des Plugins) bietet eine zentrale Übersicht über den Status des Plugins.

### Dashboard

- **Zustand des Dämons** : zeigt an, ob der BACnet-Daemon aktiv ist
- **Online-/Offline-Geräte** : Echtzeitzähler
- **Geräteübersicht** : Für jedes Clientgerät werden die IP-Adresse, der Status, die Anzahl aufeinanderfolgender Fehler und das Datum des letzten erfolgreichen Lesevorgangs angezeigt

Der Knopf **Aktualisieren** aktualisiert die gesamte Seite.

### Geschichte der Ereignisse

Der Abschnitt **Aktuelle Ereignisse** Listet die letzten 200 vom Plugin aufgezeichneten Ereignisse auf, sortiert vom neuesten zum ältesten.

**Arten von Ereignissen :**

|  |  |
|------|-------------|
| **** | Gerät, das offline geht oder wieder online geht |
| **** | BACnet-Schreibvorgänge werden auf dem Server empfangen oder vom Client gesendet |
| **** | Überschreiten der Wartezeit während einer Kundenlesung |
| **** | Fehler beim Verbinden mit dem Daemon |

**Verfügbare Filter :**
- Nach Typ (Konnektivität, Schreiben, Timeout, Verbindung))
- Pro Gerät (Auswahlliste))
-  **Verlauf löschen** von Grund auf neu beginnen

---

## Dämonenstatusanzeige

 **buntes Abzeichen** wird dauerhaft im Plugin-Header angezeigt :
-  **** : Der BACnet-Daemon läuft und antwortet
-  **** : Der Dienst ist gestoppt oder reagiert nicht mehr

Es aktualisiert sich automatisch alle 30 Sekunden.

---

## Konfigurationsimport/-export

Auf der Kartenseite können Sie :
- **** die aktuelle Konfiguration im JSON-Format (zum Speichern oder Übertragen))
- **** eine JSON-Datei zum Laden einer bestehenden Konfiguration

---

## Anwendungsbeispiele

### Beispiel 1 : Temperaturanzeige im Nur-Lese-Modus (Servermodus))

**** : Anzeige der Wohnzimmertemperatur an ein Gebäudeleitsystem

1. Fügen Sie ein BACnet-Objekt hinzu :
   -  : `analog-input` — Instanz : `3001` — Name : "Wohnzimmertemperatur"
2. Verknüpfen Sie den Befehl **** von Ihrem Temperatursensor
3. Aktivieren **"Automatische Synchronisierung"**
4. Klicken Sie auf **"Speichern und Anwenden"**

➜ Das BMS kann die Temperatur über BACnet an Instanz 3001 auslesen

---

### Beispiel 2 : Steuerung eines Thermostats über BACnet (Servermodus))

**** : Ermöglichung der Änderung des Heizungssollwerts durch ein Gebäudemanagementsystem

1. Fügen Sie ein BACnet-Objekt hinzu :
   -  : `analog-value` — Instanz : `3002` — Name : "Heizungsanleitung für das Wohnzimmer"
2. Verknüpfen Sie den Befehl **** "„Anweisungen“ Ihres Thermostats
3. Klicken Sie auf **"Config"** → "Verwende den empfangenen Wert zum Schreiben"
4. Definieren Sie einen Anfangswert (z. B : 20.0)
5. Klicken Sie auf **"Speichern und Anwenden"**

➜ Wenn das BMS in Instanz 3002 schreibt, wird der Jeedom-Thermostat gesteuert

---

### Beispiel 3 : Einen externen BACnet-Sensor lesen (Client-Modus))

**** : Anzeige der Temperatur eines BACnet-Sensors (Geräte-ID 100, IP 192.168.1.50) in Jeedom)

1. Erstellen Sie ein Clientgerät mit der Geräte-ID „100“ und der IP-Adresse „192.168.1.50“:
2. Einen Befehl hinzufügen **** :
   - Objekttyp : `analog-input` — Instanz : 
3. Speichern – der Wert wird bei jedem Cron-Zyklus ausgelesen

---

### Beispiel 4 : Sende einen Befehl an einen HLK-Controller (Client-Modus))

**** : Ändern des Sollwerts eines BACnet-Controllers aus einem Jeedom-Szenario

1. Erstellen Sie ein Clientgerät mit den Reglerparametern
2. Einen Befehl hinzufügen **** :
   - Objekttyp : `analog-value` — Instanz : `3` — Priorität : 
3. Verwenden Sie diesen Befehl in Ihren Jeedom-Szenarien

---

## Protokolle und Diagnosen

Das Plugin generiert Protokolle auf der Jeedom-Protokollseite :

|  |  |
|-------|---------|
|  | Client liest/schreibt, Konnektivität, Cronjob |
|  | Vom BACnet-Netzwerk auf dem Server empfangene Nachrichten |

** :**
- **** : Erkannte Schreibvorgänge, Befehlsausführung, Online-/Offline-Übergänge
- **** : Synchronisierungsdetails, gelesene Werte, empfangene Einheiten
- **** : Objekte nicht gefunden, Befehle fehlen, Daemon nicht gestartet
- **** : Verbindungsfehler, nicht zugängliche Dateien, Zeitüberschreitungen

---

## FAQ

** : Worin besteht der Unterschied zwischen Analogwert und Analogeingang? ?**
 : `analog-input` ist gemäß BACnet-Konvention schreibgeschützt, `analog-value` ist les- und schreibbar. Um über BACnet zu bestellen, verwenden Sie `analog-value`.

** : Warum ist mein Kontrollkästchen „Automatische Synchronisierung“ ausgegraut? ?**
 : Die automatische Synchronisierung ist nur für Befehle verfügbar ****. Die Befehle **** Reagiert in Echtzeit auf BACnet-Schreibvorgänge, ohne dass eine automatische Synchronisierung erforderlich ist.

** : Was passiert, wenn ich einen Jeedom-Befehl nicht mit einem Serverobjekt verknüpfe? ?**
 : Das BACnet-Objekt existiert mit einem statischen Wert, der unter "Anfangswert" definiert ist". Es wird nicht automatisch aktualisiert.

** : Kann ich dieselbe Instanz für mehrere Objekte verwenden? ?**
 : Nein, jedes Typ-Instanz-Paar muss auf dem BACnet-Server eindeutig sein.

** : Benötigt die Datensicherung Speicherplatz? ?**
 : Das Plugin behält automatisch die letzten 10 Backups und löscht die ältesten.

** : Was bedeutet „hot apply“?" ?**
 : Der BACnet-Server aktualisiert seine Konfiguration, ohne neu gestartet zu werden – aktive Verbindungen werden nicht unterbrochen.

** : Wie man feststellt, ob ein Clientgerät zugänglich ist ?**
 : Besuchen Sie die Seite **** → Statusspalte der Gerätetabelle. Der Befehl „Konnektivität“ des Geräts steht auch für Szenarien und Warnmeldungen zur Verfügung. Ein Gerät wird nach drei aufeinanderfolgenden Zyklen ohne Antwort als offline markiert.

** : Welche BACnet-Bibliothek wird verwendet? ?**
 : Das Plugin verwendet **[](https://bacnet.sourceforge.net/)**, eine Open-Source- und portable Implementierung des BACnet/IP-Protokolls.
