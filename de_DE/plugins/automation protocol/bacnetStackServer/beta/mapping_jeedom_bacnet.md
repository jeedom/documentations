# Jeedom-zu-BACnet-Zuordnung

## Description

Diese Funktion ermöglicht es Ihnen, Jeedom-Info-Befehle (von beliebigen Plugins) als BACnet-Objekte auf dem BACnet-Server bereitzustellen. Die Werte werden automatisch in einem konfigurierbaren Rhythmus synchronisiert.

## Zugang

Klicken Sie auf der Hauptseite des Plugins auf die Schaltfläche **"Jeedom→BACnet-Mapping"**.

## Configuration

### 1. Synchronisationsfrequenz

Wählen Sie die Frequenz aus, mit der die Werte synchronisiert werden sollen :
- **Jede Minute** : * * * * *
- **Alle 5 Minuten** : * * * * *
- **Alle 10 Minuten** : * * * * *
- **Alle 15 Minuten** : * * * * *` (Standardwert)
- **Alle 30 Minuten** : * * * * *
- **Stündlich** :  * * * *
- **** : Ermöglicht das Definieren eines benutzerdefinierten Cronjobs

Sie können die automatische Synchronisierung mithilfe des Kontrollkästchens aktivieren oder deaktivieren **"Automatische Synchronisierung aktivieren"**.

### 2. Füge eine Zuordnung hinzu

1. Klicken Sie auf die Schaltfläche **"Füge eine Zuordnung hinzu"**
2. Wählen Sie eine **Jeedom-Info-Befehl** in der Dropdown-Liste
   - Alle Info-Befehle aller aktiven Plugins sind verfügbar
   - Das angezeigte Format ist : `Gerätename [Plugin] - Befehlsname`
3. Wählen Sie die **BACnet-Objekttyp** :
   - **Analogwert** : Für numerische Werte (Temperatur, Prozentwert usw.).)
   - **Analoger Eingang** : Für analoge Eingänge
   - **Binärwert** : Für Binärwerte (0/1, wahr/falsch))
   - **Binärer Eingang** : Für binäre Eingaben
   - **Mehrzustandswert** : Für Mehrzustandswerte
4. Definieren Sie ein **BACnet-Instanz** eindeutig (Zahl > 0))
   - Jedes BACnet-Objekt muss eine eindeutige Instanznummer für seinen Typ haben
5. Gib einen **Name des BACnet-Objekts**
   - Dieser Name wird im BACnet-Netzwerk sichtbar sein

### 3. Kartenverwaltung

- **** : Ändern Sie die Einstellungen einer bestehenden Zuordnung
- **** : Eine Zuordnung mithilfe der Papierkorb-Schaltfläche löschen
- BACnet-Instanzen werden bei Hinzufügung automatisch inkrementiert

### 4. Speichern

- **** : Speichert die Konfiguration, ohne sie auf den Server anzuwenden
- **Speichern und Anwenden** : Speichert und wendet es sofort auf den BACnet-Server an
- **Jetzt synchronisieren** : Erzwinge eine sofortige Synchronisierung der Werte

## Fonctionnement

### Wertumrechnung

Jeedom-Werte werden automatisch gemäß dem BACnet-Typ konvertiert :

- **** : `0` oder `1` (numerische Werte))
- **** : Dezimalzahlen (Gleitkommazahlen))
- **** : Ganze Zahlen (int))

### Generiertes JSON-Format

Die Konfiguration wird in das vom BACnet-Server erwartete Format konvertiert :

json
{
  "deviceId": 123,
  "deviceName": "bacnetStackServer",
  "objects": 
    {
      "type": "analog-value",
      "instance": 1,
      "name": "Wohnzimmertemperatur",
      "presentValue": 21.5,
      "units": "no-units",
      "": 0.5
    },
    {
      "type": "binary-value",
      "instance": 1,
      "name": "Haustür",
      "presentValue": 1,
      "aktiver_Text": "Active",
      "inaktiver Text": "Inactive"
    }
  ]
}


### Automatische Synchronisierung

Ein Jeedom-Cronjob wird automatisch erstellt und kümmert sich um :
1. Lesen Sie die aktuellen Werte der zugeordneten Jeedom-Befehle
2. Konvertieren Sie die Werte entsprechend dem BACnet-Typ
3. Senden Sie Aktualisierungen an den BACnet-Server

Der Cronjob wird nur ausgeführt, wenn :
- Die automatische Synchronisierung ist aktiviert
- Der BACnet-Daemon wird gestartet
- Es ist mindestens eine Zuordnung konfiguriert

### Logs

Synchronisierungsprotokolle sind in den Plugin-Protokollen verfügbar :

Synchronisierung abgeschlossen : X Aktualisiert, Y-Fehler


## Anwendungsbeispiel

### Anwendungsfälle : Die Temperatur eines Sensors freilegen

1. Sie haben einen Temperatursensor über das ZigBee-Plugin angeschlossen
2. Wählen Sie in der Zuordnung den Befehl „Temperatur“ für diesen Sensor aus
3. Wählen Sie den Datentyp „Analoger Wert“"
4. Instanz : 1
5. Name : "Wohnzimmertemperatur"
6. Die Temperatur wird auf dem BACnet-Server automatisch alle 15 Minuten (oder gemäß Ihrer Konfiguration) aktualisiert

### Anwendungsfälle : Den Zustand eines Detektors anzeigen

1. Sie haben einen Türöffnungsmelder
2. Wählen Sie in der Zuordnung den Befehl „Status“ des Detektors aus
3. Wählen Sie den Eingabetyp „Binär“"
4. Instanz : 1
5. Name : "Haustür"
6. Der Status (offen/geschlossen) wird mit BACnet synchronisiert

## Generierte Dateien

Die Konfiguration wird gespeichert in :
- . : BACnet-Konfiguration generiert
- Jeedom-Konfiguration : 

## Fehlerbehebung

### Der Cronjob startet nicht

Einchecken **** dass der Cron-Job `bacnetStackServer::Der Cron-Prozess `cronJeedomBacnetSync` existiert und ist aktiviert.

### Die Werte werden nicht aktualisiert

1. Überprüfen Sie, ob der BACnet-Daemon gestartet ist
2. Überprüfen Sie die Plugin-Protokolle, um die Fehler anzuzeigen
3. Überprüfen Sie, ob die Jeedom-Befehle noch gültig sind
4. Testen Sie eine manuelle Synchronisierung mithilfe der Schaltfläche „Jetzt synchronisieren“"

### Doppelte BACnet-Instanz

Jedes BACnet-Objekt muss eine eindeutige Instanznummer haben **für seine Art**. Du kannst haben :
- Analogwertinstanz 1
- Binärwertinstanz 1
Aber nicht :
- Analogwertinstanz 1
- Analogwertinstanz 1

## Technische Hinweise

### Unterrichtsmethoden

-  : Wendet die Konfiguration auf den Server an
-  : Werte synchronisieren
-  : Cron-Synchronisierungsfunktion
-  : Werte umrechnen

### AJA-AktionenX

-  : Alle verfügbaren Info-Befehle abrufen
-  : Gespeicherte Konfiguration laden
-  : Speichert die Konfiguration
-  : Erzwinge sofortige Synchronisierung
