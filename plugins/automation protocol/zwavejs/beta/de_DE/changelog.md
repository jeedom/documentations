# Änderungsprotokoll Z-Wave JS

>**WICHTIG**
>
>Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

# 21/10/2026

**Konfigurationen hinzufügen**

- Konfiguration *Neo Coolcam Light Switch 2 Channel (EU-2)* hinzugefügt (Eigenschaften: Switch x2)

**Änderungen an den Einstellungen**

- Korrektur der Konfiguration des *Kaipule PIR Ceiling Sensor* (Eigenschaften „Motion“ und „Tamper“ von Z-Wave JS anstelle der alten OpenZWave-Syntax)
- Korrektur der Konfiguration *Nice IBT4ZWAVE* (ungültige Datei nicht geladen, Typ „Portal“)

# 06/09/2026

- Umstellung auf die Version *11.21.1* von ZwaveJsUI (Stable)
- Umstellung auf die Version *11.23.0* von ZwaveJsUI (Beta)
- Korrektur der Anzeige von Gruppennamen

**Konfigurationen hinzufügen**

- Konfiguration des Controllers *Home Assistant Connect ZWA-2* hinzufügen
- Konfiguration der *NeoCoolCam NAS-DS01Z v2* hinzugefügt (Eigenschaften: Öffnen, Akku)
- Konfiguration der *NeoCoolCam NAS-PD07Z* hinzugefügt (Eigenschaften: Bewegung, Helligkeit, Temperatur, Luftfeuchtigkeit, Manipulation, Akku)
- Hinzufügen der Konfiguration *Philio PSE04* (Eigenschaften: Temperatur, Akku, Sabotage, Ton)
- Konfiguration des *Shelly Qubino Wave Dimmer* hinzugefügt (Eigenschaften: Multilevel, Leistung, Energie, Benachrichtigung bei Wärmesensor, Benachrichtigung bei Überstrom, Benachrichtigung bei Netzausfall)
- Konfiguration von *Shelly Qubino Wave H&T* hinzugefügt (Eigenschaften: Temperatur, Luftfeuchtigkeit, Akku)
- Konfiguration *Shelly Qubino Wave Motion* hinzugefügt (Eigenschaften: Bewegung, Helligkeit, Akku)
- Konfiguration von *Heatit Z-Water2* hinzugefügt (9 potentialfreie Relais und 2 NTC-Temperatursensoreingänge)
- Konfiguration *Zooz ZEN37 800LR Wall Remote* hinzugefügt (Eigenschaften: Central Scene x4, Battery)

**Änderungen an den Einstellungen**

- Korrektur der Konfiguration des *Fibaro FGCD001* (Hinzufügen der Firmware 4098)
- Änderung der Konfiguration des *Shelly Qubino Wave Door/Window (QNDW-002C)* (Hinzufügen des Befehls „Tilt“)
- Korrektur der Konfiguration des *Shelly Qubino Wave Shutter* (Hinzufügen der productId 131)
- Änderung der Konfiguration des *Heatit Z-TEMP3* (Hinzufügen des Modus *Energy Heat* zum Thermostatmodus)

# 17/07/2026

- Umstellung auf die Version *11.19.0* von ZwaveJsUI (Stable)
- Umstellung auf die Version *11.21.1* von ZwaveJsUI (Beta)

# 01/06/2026

- Umstellung auf die Version *11.15.1* von ZwaveJsUI (Stable)
- Umstellung auf die Version *11.19.0* von ZwaveJsUI (Beta)

# 31/03/2026

- Umstellung auf die Version *11.12.0* von ZwaveJsUI (stabil)
- Umstellung auf die Version *11.15.1* von ZwaveJsUI (Beta)

# 16/03/2026

- Automatische Konfiguration des Plugins auf den offiziellen Boxen *(Jeedom 4.5.3 mini)*

# 09/03/2026

**Konfigurationen hinzufügen**

- Konfiguration für *Shelly Qubino Wave Door/Window (QNDW-002C)* hinzugefügt (Eigenschaften: Öffnung, Helligkeit, Richtung, Batterie)
- Konfiguration des *Shelly Qubino Wave Plug (QNPL-0A112)* hinzugefügt (Eigenschaften: Schalter, Strom, Energie)
- Konfiguration des *Zooz ZEN58 Low Voltage XS Relay* hinzugefügt (Eigenschaften: Schalter, Leistung, Energie, Spannung, Strom)

**Änderungen an den Einstellungen**

- Korrektur der Konfiguration des *Aeotec ZWA001* (Standardwert für den Farb-Temperatur-Parameter)

# 02/03/2026

- Kleine Korrektur auf der Seite *Statistiken*

# 24/02/2026

- Unterstützung benutzerdefinierter Gerätebilder *(Jeedom 4.5 mini)*
- Fehlenende Übersetzungen für Benachrichtigungen im Benachrichtigungscenter wurden hinzugefügt

# 21/02/2026

- Umstellung auf die Version *11.12.0* von ZwaveJsUI (Beta) *(behebt unerwünschte „Dead“-Warnmeldungen)*

# 11/02/2026

- Umstellung auf die Version *11.6.1* von ZwaveJsUI (Stable)
- Umstellung auf die Version *11.11.0* von ZwaveJsUI (Beta)
- Hinzufügen einer Option auf der Konfigurationsseite des Plugins zur Einrichtung eines Fernsteuerungs-Ports über einen TCP-Socket (nützlich für Steuerungen wie den SLZB-MR1U)

# 04/11/2025

- Umstellung auf die Version *11.2.1* von ZwaveJsUI (Stable)
- Umstellung auf die Version *11.6.1* von ZwaveJsUI (Beta)

# 16/09/2025

- Umstellung auf die Version *10.5.1* von ZwaveJsUI (stabil)
- Umstellung auf die Version *11.2.1* von ZwaveJsUI (Beta)

# 24/06/2025

- Behebung eines Fehlers, der unter PHP 8 beim Erstellen fehlender Befehle auftrat.

# 10/06/2025

- Konfigurationsaktualisierung *Mco Home MH-S412 Double*

# 05/06/2025

**Verbesserungen**

- Hinzufügen des Integrationsverfahrens

**Konfigurationen hinzufügen**

- Konfiguration *Shelly Qubino WAVE_PM_MINI – WAVE PM Mini – Relais* hinzugefügt (Eigenschaften: Leistung, Energie, Benachrichtigung bei Überstrom, Benachrichtigung bei Überspannung, Benachrichtigung über Wärmesensor, Benachrichtigung bei Alarmpegel, Benachrichtigung über Netzstrom, Anzeige)
- Konfiguration *Zooz ZAC38 – ZAC38 – Range Extender* hinzugefügt (Eigenschaften: Switch, Benachrichtigung bei Alarmstufe, Benachrichtigung bei Netzausfall, Anzeige, Akku)

# 04/06/2025

**Konfigurationen hinzufügen**

- Hinzufügen der Konfiguration *Mco Home MH-S411 Simple* (Eigenschaften: Schalter, Szene, zentrale Szene)
- Konfiguration des *Remotec ZXT-800* hinzugefügt (Eigenschaften: Lufttemperatur, Thermostatmodus, Betriebszustand des Thermostats, Sollwert des Thermostats, Lüftermodus des Thermostats, Anzeige)
- Konfiguration *Shelly Qubino Wave 1PM Mini QMSW-0A1P8* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Hitzesensor, Benachrichtigung bei Alarmschwelle)
- Konfiguration *Shelly Qubino Wave 1 Mini QMSW-0A1X8* hinzugefügt (Eigenschaften: Schalter, Benachrichtigung „Strom“, Benachrichtigung „Wärmesensor“, Benachrichtigung „Alarmstufe“)
- Konfiguration des *Heatit Thermostat Z-TEMP3* hinzugefügt (Eigenschaften: Lufttemperatur, Luftfeuchtigkeit, Thermostatmodus, Betriebszustand des Thermostats, Sollwert des Thermostats, Batterie, Anzeige)
- Konfiguration *Zooz ZEN15 – Power Switch* hinzugefügt (Eigenschaften: Schalter, Benachrichtigung bei Alarmstufe, Benachrichtigung bei Stromstatus, Szene, Anzeige, Spannung, Leistung, Energie, Strom)
- Konfiguration *Zooz ZEN54_LR – 0–10-V-Dimmer* hinzugefügt (Eigenschaften: Multilevel, Anzeige)
- Konfiguration *Zooz ZES11 – ZSE 11 – Q SENSOR* hinzugefügt (Eigenschaften: Bewegung, Temperatur, Helligkeit, Luftfeuchtigkeit, Akku, Benachrichtigung bei Alarmstufe, Benachrichtigung zum Stromstatus, Benachrichtigung bei Bewegung, Benachrichtigung zur Akkuwartung, Anzeige)
- Konfiguration *Zooz ZES18 – ZSE 18 – BEWEGUNGSSENSOR* hinzugefügt (Eigenschaften: Bewegung, Batterie, Benachrichtigung Alarmstufe, Benachrichtigung Stromstatus, Benachrichtigung Bewegung, Benachrichtigung Magnetfeld, Anzeige)

# 15/11/2024

- Umstellung auf die Version *9.26.0* von ZwaveJsUI
- Korrigieren Sie die Abhängigkeitsinstallationsmethode

# 10/11/2024

- Unterstützung des mqtts-Protokolls

# 27/09/2024

- Änderung der Mindestversionen: Core 4.4 und Debian 11

# 26/09/2024

**Verbesserungen**

- Umstellung auf die Version *9.20.0* von ZwaveJsUI
- Codebereinigung

**Konfigurationen hinzufügen**

- Hinzufügen der Konfiguration *Neo Signal Repeater +* (Eigenschaften: Temperatur, Luftfeuchtigkeit)
- Konfiguration des *Fibaro FGR224* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Überstrom, Benachrichtigung bei Überspannung)

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Fibaro Fgrgbwm442* zur Nutzung der Eigenschaften
- Änderung der Konfiguration des *Fibaro FGD212* – Verbesserung der Benachrichtigungseigenschaften

# 20/05/2024

**Verbesserungen**

- Umstellung auf die Version *9.12.0* von ZwaveJsUI
- Ergänzung und Verwaltung der beiden neuen S2 Long Range Sicherheitsschlüssel

**Konfigurationen hinzufügen**

- Hinzufügen der Konfiguration *Neo Signal Repeater* (Eigenschaften: Temperatur, Luftfeuchtigkeit)
- Konfiguration für *Shelly Qubino Wave 1* hinzugefügt (Eigenschaften: Schalter, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung durch Wärmesensor)
- Konfiguration *Shelly Qubino Wave 1 PM* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Wärmesensor)
- Konfiguration des *Shelly Qubino Wave Pro 1* hinzugefügt (Eigenschaften: Schalter, Benachrichtigung „Mains“, Benachrichtigung „Heat-Sensor“)
- Konfiguration *Shelly Qubino Wave Pro 1 PM* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Überspannung, Benachrichtigung bei Hitzesensor)
- Konfiguration *Shelly Qubino Wave 2 PM* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Hitzesensor)
- Konfiguration des *Shelly Qubino Wave Pro 2* hinzufügen (Eigenschaften: Schalter)
- Konfiguration des *Shelly Qubino Wave Pro 2 PM* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Überstrom, Benachrichtigung bei Überspannung)
- Konfiguration *Shelly Qubino Wave I4* hinzugefügt (Eigenschaften: Central Scene)
- Konfiguration für *Shelly Qubino Wave Shutter* hinzugefügt (Eigenschaften: Shutter, Power, Energy, Benachrichtigung „Mains“, Benachrichtigung „Over-Current“, Benachrichtigung „Heat-Sensor“)
- Hinzufügen einer Untereigenschaft *notification-overvoltage* zur Eigenschaft *Notification*

**Änderungen an den Einstellungen**

- Änderung der *Neo Plug*-Konfiguration zur Nutzung der Eigenschaften (*Achtung: Bei einigen Modellen wird versucht, sie in S2 einzubinden, obwohl der Hersteller kein DSK bereitstellt. Wählen Sie in diesem Fall „Unsecured“ anstelle des automatischen Modus*)

# 27/02/2024

**Verbesserungen**

- Hinzufügung einer zusätzlichenDependancyCheck-Funktion für den Kern

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration *MCOhome Mh7h* zur Nutzung der Eigenschaften

# 26/12/2023

**Verbesserungen**

- Hinzufügen einer Option zum Aktivieren oder Deaktivieren des *Soft-Resets*
- Umstellung auf die Version *9.6.2* von ZwaveJsUI

**Konfigurationen hinzufügen**

- Konfiguration *HeatIt Z-TRM6* hinzugefügt (Eigenschaften: Temperature, ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Notification Heat-Sensor, Notification Over-Load)
- Konfiguration *Sunricher Remote Control 12 Button* hinzugefügt (Eigenschaften: CentralScene x12, Batterie)

# 11/12/2023

**Verbesserungen**

- Umstellung auf die Version *9.5.1* von ZwaveJsUI (um auf bestimmten VMs einen Port im erforderlichen Pfadformat auswählen zu können, muss der Core aktualisiert werden)

**Korrekturen**

- Behebung des *S2*-Inklusionsfehlers auf der Seite der ZwaveJS-Benutzeroberfläche nach einer Meldung (tatsächlich wurden die Callbacks nur ausgeführt, wenn ein Fenster der ZwaveJS-Benutzeroberfläche geöffnet war)

**Konfigurationen hinzufügen**

- Konfiguration *Shelly Qubino Wave 1PM* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Hitzesensor)
- Konfiguration für *Shelly Qubino Wave 1* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Hitzesensor)
- Konfiguration für *Shelly Qubino Wave Shutter* hinzugefügt (Eigenschaften: Shutter, Power, Energy, Benachrichtigung „Mains“, Benachrichtigung „Over-Current“, Benachrichtigung „Heat-Sensor“)
- Konfiguration *Shelly Qubino Wave 2PM* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Hitzesensor)
- Konfiguration von *Shelly Qubino Wave 1* hinzugefügt (Eigenschaften: Schalter, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Hitzesensor)  *Ich bin mir nicht sicher, ob „Power“ und „Energy“ hinzugefügt werden sollten (bitte ein Ticket erstellen, falls das Gerät den Verbrauch melden soll, aber ich glaube nicht)*
- Hinzufügen einer Eigenschaft *WindowsCovering*

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Benext Keypad*, um die Funktionen zu nutzen (Kopie des Zipato, jedoch in der Benext-Version)
- Anpassung der Konfiguration des *MCOhome Mh8FC* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *MCOhome Mh8FC-4* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration von *Qubino ZMNKID – Flush OnOff Thermostat 2*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Widom Meta Wired Motor* zur Nutzung der Windows-Eigenschaft „Covering“
- Änderung der Konfiguration *Wenzhou TZ78*: Verwendung von Endpunkt 0 anstelle von Endpunkt 1 (gemäß den Rückmeldungen der Nutzer)
- Bearbeitung des Bildes *MCOhome Mh8FC* (Freistellen)
- Bearbeitung des Bildes *MCOhome Mh8FC-4* (Freistellen)

# 27/10/2023

**Konfigurationen hinzufügen**

- Hinzufügen einer Untereigenschaft *notification-door* zur Eigenschaft *Tilt*

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Aeotec Zwa012* zur Nutzung der Eigenschaften
- Änderung einer Untereigenschaft *notification-simple* für die Eigenschaft *Opening*

**Verbesserungen**

- Umstellung auf die Version *9.1.2* von ZwaveJsUI

# 11/10/2023

**Korrekturen**

- Vorübergehende Umstellung auf die Version *8.26.0* von ZwaveJsUI

# 09/10/2023

**Korrekturen**

- Korrektur, die in bestimmten Sonderfällen bestimmte Meldungen im Protokoll *http.error* verhindert

**Verbesserungen**

- Umstellung auf die Version *9.1.0* von ZwaveJsUI
- Hinzufügen einer Option zur Verwaltung von *Benachrichtigungen* im Nachrichtencenter *von aktiven und inaktiven Knoten*
- Hinzufügen einer Option zur Verwaltung von *Benachrichtigungen* im Nachrichtencenter *über verpasste Weckzeiten und Rückmeldungen*

**Konfigurationen hinzufügen**

- Konfiguration *Aeotec ZW187 Recessed Door* hinzugefügt (Eigenschaften: Einfaches Öffnen, Batterie, Software-Benachrichtigung, Benachrichtigung zum Stromstatus)
- Konfiguration *Thermofloor Heat It ZM Relay High Power* hinzugefügt (Eigenschaften: Schalter, Leistung, Energie, Benachrichtigung Wärmesensor, Benachrichtigung Überlastung, Centra-Szene)
- Hinzufügen einer Untereigenschaft *notification-simple* zur Eigenschaft *Opening*

# 11/09/2023

**Korrekturen**

- Korrektur des *OTA*-Firmware-Updates für ein Modul nach einer Änderung an ZwaveJSUI

**Verbesserungen**

- Umstellung auf die Version *8.25.1* von ZwaveJsUI.
- Hinzufügung der Möglichkeit, ein *OTW*-Update eines Controllers durchzuführen (sofern kompatibel)
- Hinzufügen einer Option zur Verwaltung von *Benachrichtigungen* im Nachrichtencenter *von aktiven und inaktiven Knoten*
- Hinzufügen einer Option zur Verwaltung von *Benachrichtigungen* im Nachrichtencenter *über verpasste Weckzeiten und Rückmeldungen*

**Konfigurationen hinzufügen**

- Konfiguration *Shelly Qubino Wave 1PM* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Hitzesensor)
- Konfiguration für *Shelly Qubino Wave 1* hinzugefügt (Eigenschaften: Schalter, Stromversorgung, Energie, Benachrichtigung bei Netzausfall, Benachrichtigung bei Überstrom, Benachrichtigung bei Hitzesensor)
- Hinzufügen einer Untereigenschaft *binary-water* zur Eigenschaft *Flood*
- Hinzufügen einer Untereigenschaft *onlevel-barrier* zur Eigenschaft *Multilevel*

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration *MCOhome Mh8FC* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration der *NeoCoolCam WS02Z* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Kaipule IM20* zur Nutzung der Funktionen
- Änderung der Konfiguration *HRT4_SRT321* zur besseren Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Benext Plug-In-Dimmers* zur besseren Nutzung der Funktionen
- Anpassung der Konfiguration *Dome On Off Plug In Switch Plug In Dimmer*, um die Eigenschaften besser zu nutzen
- Anpassung der Konfiguration des *Domux Dx2skz* zur besseren Nutzung der Funktionen
- Anpassung der *Swiid Plug*-Konfiguration zur besseren Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Everspring SM810*, um die Eigenschaften besser nutzen zu können
- Anpassung der Konfiguration des *Zipato PD01z*, um die Funktionen besser nutzen zu können
- Anpassung der Konfiguration des *Vision Security ZS5101*, um die Funktionen besser nutzen zu können

# 02/08/2023

**Verbesserungen**

- Umstellung auf die Version *8.22.0* von ZwaveJsUI.
- Alle *tty*-Ports zur Portliste hinzufügen (dies wird mit dem neuen Core überflüssig sein, da dort ein Port direkt über die ID ausgewählt werden kann)
- Hinzufügen der letzten Route auf der Statistikseite eines Knotens (abhängig vom SDK des Controllers)
- Hinzufügen der aktuellen Baudrate auf der Statistikseite eines Knotens (abhängig vom SDK des Controllers)
- Hinzufügen der aktuellen Baudrate auf der Seite „Gesamtstatistik“ (abhängig vom SDK des Controllers)
- Hinzufügen der letzten Route auf der Seite „Gesamtstatistik“ (abhängig vom SDK des Controllers)
- Hinzufügen des letzten RSSI-Werts auf der Seite „Gesamtstatistik“ (abhängig vom SDK des Controllers)
- Hinzufügen des letzten RSSI-Werts auf der Statistikseite eines Knotens (abhängig vom SDK des Controllers)
- Hinzufügen eines Diagramms „Netzwerkroute“, das die zuletzt genutzten Routen darstellt (wird weiterentwickelt und deckt möglicherweise nicht alle Fälle ab, abhängig vom SDK des Controllers)
- Hinzufügen einer Meldung im Meldungscenter, wenn ein Knoten den Status „Dead“ annimmt (zusätzlich zum Befehl „Gerätestatus“)
- Hinzufügen einer Meldung im Meldungscenter, wenn ein Knoten nach einem „Dead“-Zustand wieder „Alive“ wird (zusätzlich zum Befehl „Gerätestatus“)
- Hinzufügen einer Nachricht im Nachrichtencenter, wenn ein Knoten nach dem 4-fachen seines Weckintervalls nicht aufgewacht ist

**Konfigurationen hinzufügen**

- Hinzufügen einer Eigenschaft *ThermostatFanState*
- Hinzufügen eines Unterbefehls *Label State* zur Eigenschaft „Barrier Operator“ (um zusätzlich zum numerischen Befehl einen Befehl mit Textbeschriftung zu erhalten)
- Konfiguration *MCOhome Mh8FC* hinzugefügt (Eigenschaften: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature)
- Konfiguration *Heltun HE-FT01* hinzugefügt (Eigenschaften: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature, Illuminance, Humidity, Power, Energy)
- Hinzufügen der Konfiguration *MCOhome MH3901* (Eigenschaften: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatOperatingState, Temperature)
- Hinzufügen eines Unterbefehls *Label State* zur Eigenschaft „Thermostat Operating State“ (um zusätzlich zum numerischen Befehl einen Befehl mit Textbeschriftung zu erhalten)

**Änderungen an den Einstellungen**

- Änderung der Konfiguration *HRT4_SRT321* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration *SRT323* zur Nutzung der Eigenschaften
- Bearbeitung des Bildes *HRT4_SRT321* (Freistellen)
- Bearbeitung des Bildes *SRT323* (Freistellen)
- Bearbeitung des Bildes *SSR303* (Freistellen)
- Bearbeitung des Bildes *SIR321* (Freistellen)
- Bearbeitung des Bildes *SES303* (Freistellen)
- Bearbeitung des Bildes *SES302* (Freistellen)
- Bearbeitung des Bildes *SCSC17* (Freistellen)

# 26/06/2023

**Verbesserungen**

- Umstellung auf die Version *8.19.0* von ZwaveJsUI.
- Die *FLIRS*-Module werden im Netzwerkgraphen nicht mehr als aktiv im Netzwerk betrachtet

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Aeotec DSB04100 Tür- und Fenstersensors*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec DSC10 Heavy Duty Switch*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec DSC06106 Smart Energy Switch*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec DSC11 Smart Strip*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec DSC08101 Smart Energy Illuminator*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec DSC014104 Blind Control* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Aeotec DSC17103 Micro Double Switch*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec DSC18103 Micro Switch 2nd*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec DSC26103 Micro Switch 2nd*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec DSC27103 Micro Dimmer 2nd*, um die Funktionen zu nutzen
- Anpassung der Konfiguration von *Benext Panic Watch* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Benext Panic Button* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Benext Plug-In Dimmer*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration *Dome On Off Plug In Switch Plug In Dimmer*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Domux Dx2skz* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Everspring AD142* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration *Everspring AN145* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Everspring EH403 LED-Flutlichts* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Heiman Dx2skz* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Philio Smart Dimmer E27*, um die Funktionen zu nutzen
- Anpassung der Konfiguration von *Philio Pan03* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Popp Smart Plug*, um die Funktionen zu nutzen
- Anpassung der Konfiguration *Popp 009105* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration von *Schlage On Wall* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Sigma Power Plug* zur Nutzung der Funktionen
- Anpassung der *Swiid Plug*-Konfiguration zur Nutzung der Eigenschaften

**Konfigurationen hinzufügen**

- Konfiguration *Heat It ZM Dimmer* hinzugefügt (Eigenschaften: Multilevel, Power, Energy, CentralScene, Notification)
- Konfiguration *Sigma PZ701U* hinzugefügt (Eigenschaften: Switch)
- Konfiguration *Neo RC03Z* hinzugefügt (Eigenschaften: Central Scene, Battery)
- Hinzufügen einer Untereigenschaft *Heat-Sensor* zur Eigenschaft *Notification*
- Konfiguration *U-Fairy GR-201N* hinzufügen (Eigenschaften: Switch)

# 10/04/2023

**Verbesserungen**

- Die *Refresh*-Intervalle können nun bis zu 100 Sekunden statt 60 Sekunden betragen
- Umstellung auf die Version *8.13.1* von ZwaveJsUI.
- Änderung der Funktion *pollValue* für Eigenschaften mit *value* (Danke an @superbricolo)

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Aeotec ZWA19 Water Sensor*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Aeotec ZWA24 7in1* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Everspring SM810* zur Nutzung der Eigenschaften
- Änderung einer *Velocity*-Eigenschaft
- Bearbeitung des Bildes *Dlink 510* (Freistellen)
- Bearbeitung des Bildes *Fibaro Fgs-213* (Freistellen)

**Konfigurationen hinzufügen**

- Konfiguration *Sigma PZ701U* hinzugefügt (Eigenschaften: Switch)
- Konfiguration *Neo RC03Z* hinzugefügt (Eigenschaften: Central Scene, Battery)
- Hinzufügen einer Untereigenschaft *Heat-Sensor* zur Eigenschaft *Notification*
- Konfiguration *U-Fairy GR-201N* hinzufügen (Eigenschaften: Switch)

# 14/02/2023

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Aeotec ZWA24 7in1* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Everspring SM810* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Aeotec ZW122* zur Nutzung der Funktionen
- Zusammenfassung von Konfigurationen *Danfoss Living Connect*
- Änderung der Konfiguration des *Fibaro FGR-223* – Änderung der Endpunkte „Power“ und „Energy“
- Änderung der Konfiguration des *Fibaro FGR-223* – Hinzufügen von Hardware- und Überstrom-Benachrichtigungen
- Änderung der Konfiguration des *Fibaro FGS213*: Umstellung auf Endpunkt 1 (Firmware >=3.3) und Hinzufügen von Benachrichtigungen für Wärmesensor und Überstrom
- Bearbeitung des Bildes *Aeotec ZWA24 7in1* (Freistellen)
- Änderung einer *Velocity*-Eigenschaft
- Bearbeitung des Bildes *Dlink 510* (Freistellen)
- Bearbeitung des Bildes *Fibaro Fgs-213* (Freistellen)
- Bearbeitung des Bildes *Fibaro Fgs-221* (Freistellen)
- Bearbeitung des Bildes *Fibaro Fgs-223* (Freistellen)
- Bearbeitung des Bildes *Fibaro Wall Plug* (Freistellen)
- Bearbeitung des Bildes *Fibaro Wall Plug GEN5* (Freistellen)

**Konfigurationen hinzufügen**

- Hinzufügen einer Untereigenschaft *Heat-Sensor* zur Eigenschaft *Notification*
- Konfiguration *U-Fairy GR-201N* hinzufügen (Eigenschaften: Switch)
- Hinzufügen der Konfiguration *Danfoss Boiler Relay* (Eigenschaften: Schalter)
- Hinzufügen der Konfiguration *Benext Alarm Sound* (Eigenschaften: Schalter)

# 24/12/2022

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Aeotec ZWA008 Türsensors* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Qubino ZMNHLAX PWM-Thermostats* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Qubino ZMNHDA2 Dimmers* zur Nutzung der Eigenschaften
- Änderung der Konfiguration des *Fibaro FGR-223* – Änderung der Endpunkte für *Refresh*
- Anpassung der Konfiguration des *Fibaro Fgrgbwm442* zur Nutzung der Eigenschaften
- Änderung der Konfiguration des *Fibaro FGD212* – Hinzufügen der Benachrichtigungseigenschaften
- Anpassung der Konfiguration des *Qubino ZMNHBA2 Flush 2 Relays* zur Nutzung der Eigenschaften
- Änderung der Konfiguration des *Fibaro Walli Switch* – Hinzufügen der Benachrichtigungseigenschaften
- Anpassung der Konfiguration des *Dlink Dchz110* zur Nutzung der Funktionen
- Anpassung der Konfiguration von *Domitech Smart Led Light* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Duwii Switch* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration *Everspring AN157* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Popp Smoke Sensor*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Duwii Edan 300* zur Nutzung der Eigenschaften
- Bearbeitung des Bildes *Duwii Dimmer* (Freistellen)
- Bearbeitung des Bildes *Aeotec ZWA008 Türsensor* (Freistellen)
- Bearbeitung des Bildes *Duwii Switch* (Freistellen)
- Bearbeitung des Bildes *Duwii Edan 300* (Freistellen)
- Bearbeitung des Bildes *Duwii Blind Control* (Freistellen)
- Bearbeitung des Bildes *Duwii Remote* (Freistellen)
- Bearbeitung des Bildes *Duwii Zs3500* (Freistellen)
- Bearbeitung des Bildes *MCO Zipato p210 Dimmer* (Freistellen)

**Konfigurationen hinzufügen**

- Hinzufügen einer Untereigenschaft *Load-error* zur Eigenschaft *Notification*
- Hinzufügen einer Untereigenschaft *Fibaro-effets2* zur Eigenschaft *Color*

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 22/12/2022

**Verbesserungen**

- Hinzufügung einer umfassenden *Refresh-Verwaltung*, die für bestimmte Module nützlich ist, die bestimmte Änderungen nach einer Aktion nicht korrekt übernehmen. Nicht ohne triftigen Grund verwenden. Die Konfigurationsdateien enthalten die entsprechenden Elemente, falls erforderlich.
- Hinzufügen einer Registerkarte *Optionen* auf der Seite eines Geräts. Zum Anzeigen und Konfigurieren der Aktualisierungsintervalle und  eventueller zukünftiger Optionen
- Anzeige der Anzahl der *Aktualisierungen* auf der Seite *Gesundheit*

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Qubino Luxy Smart Light*, um die Eigenschaften zu nutzen
- Anpassung der *Popp RainMeter*-Konfiguration zur Nutzung der Eigenschaften
- Änderung der Konfiguration des *Fibaro FGR-223* – erste Konfiguration, die die Refresh-Engine nutzt (tatsächlich weist dieses Modul einen bekannten Fehler auf: Es meldet Positionen nicht oder nur fehlerhaft, wenn eine Bewegung über Z-Wave ausgelöst wird). Um die Refresh-Befehle abzurufen (gehen Sie dazu in den Befehl „Neu laden“ und wählen Sie „Ohne Befehle neu zu erstellen“), sollten Sie die „Refreshs“ im Reiter „Optionen“ sehen.
- Änderung der Konfiguration des *Fibaro FGR-223* – Änderung der Endpunkte „Power“ und „Energy“
- Änderung der Konfiguration des *Fibaro FGR-223* – Hinzufügen von Hardware- und Überstrom-Benachrichtigungen
- Änderung der Konfiguration *Fibaro FGR-223*: Ersetzung der Eigenschaft „scene“ durch „centralscene“

**Konfigurationen hinzufügen**

- Konfiguration des *Qubino Luxy Smart Switch* hinzugefügt (Eigenschaften: Switch, Multilevel, Power, Energy, Color, Notification, NotificationEvent)
- Bild *Qubino Luxy Smart Switch* hinzugefügt
- Konfiguration *Abus Security Center SHSG10000* hinzugefügt (Eigenschaften: Switch, Battery)
- Bild *Abus Security Center SHSG10000* hinzugefügt
- Hinzufügen einer Untereigenschaft *Global* zur Eigenschaft *Rain*
- Hinzufügen einer Untereigenschaft *Basic* zur Eigenschaft *Rain*
- Hinzufügen einer Untereigenschaft *Over-Load* zur Eigenschaft *Notification*
- Hinzufügen einer Eigenschaft *Waterconsumption*
- Hinzufügen einer Eigenschaft *Notificationevent*

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 21/12/2022

**Verbesserungen**

- Hinzufügen der Verwaltung von Knotenbenachrichtigungen

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Aeotec Range Extender 6* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Zipato PD01z* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration der *NeoCoolCam PD01zt* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration der *NeoCoolCam PD01z* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Philio / Zipato Micromodule Energy Meter*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Fibaro FGS214* zur Nutzung der Eigenschaften
- Änderung der Konfiguration des *Fibaro FGS213* – Umstellung auf Endpunkt 0 (noch zu bestätigen)
- Rückblick auf die Konfiguration des *Fibaro FGD212 mit Firmware 3.5*
- Änderung der Konfiguration des *Zipato Keypad* – Hinzufügen der Eigenschaft *NodeNotification*
- Änderung der Konfiguration des *Schlage Keypad* – Hinzufügen der Eigenschaft *NodeNotification*
- Anpassung der Konfiguration des *Eurotronic Valve Spirit* zur Nutzung der Eigenschaften
- Zusammenfassung von Konfigurationen *Danfoss Living Connect*
- Anpassung der Konfiguration von *Danfoss Devolo Living Connect* zur Nutzung der Eigenschaften
- Anpassung der *Danfoss Living Connect*-Konfiguration zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Danfoss Pop Radiator Thermostat*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Philio PSP05* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Zipato ZP3102* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Vision ZP3102* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Remotec ZXT-120* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Everspring Ad147* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration von *Heatit ThermoFloor Ztemp2* zur Nutzung der Funktionen
- Bearbeitung des Bildes *Horstmann Secure SRT321* (Freistellen)
- Bearbeitung des Bildes *Remotec ZXT-120* (Freistellen)
- Bearbeitung des Bildes *Fibaro FGS 224* (Freistellen)
- Bearbeitung des Bildes *Fibaro FGS 213* (Freistellen)
- Bearbeitung des Bildes *Fibaro Button* (Freistellen)

**Konfigurationen hinzufügen**

- Konfiguration *Cherubini ORA ZRX* hinzugefügt (Eigenschaften: Shutter, Benachrichtigung)
- Bild *Cherubini ORA ZRX* hinzugefügt
- Konfiguration *Heiman HS2WD Sirene* hinzugefügt (Eigenschaften: Schalter, Batterie)
- Bild *Heiman HS2WD Sirene* hinzugefügt
- Hinzufügen einer Untereigenschaft *Power-status* zur Eigenschaft *Notification*
- Hinzufügen einer Eigenschaft *NodeNotification*

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 19/12/2022

**Korrekturen**

- Korrektur einiger *fehlender Attribute* auf der Statusseite bestimmter Knoten, um (harmlose) Fehler im *http.error* zu vermeiden

**Verbesserungen**

- Umstellung von *ZwaveJS UI* auf Version *8.6.1*
- Hinzufügen der *S2-Verwaltung* (ZwaveJS UI hat die erwarteten Änderungen vorgenommen)
- Hinzufügen des *Sicherheitstyps* auf der Seite *Knoteninformationen*

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Heiman CO-Sensors* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Heiman Smoke Detector*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Domux CO-Sensors* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Vision Security ZS5101* zur Nutzung der Funktionen
- Anpassung der Konfiguration von *HomeSeer Ez Motion* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Shenzen Smoke Detector*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Vision Security ZD2102* zur Nutzung der Funktionen
- Bearbeitung des Bildes *Vision Security ZD2102* (Freistellen)
- Anpassung der Konfiguration des *Aeotec Range Extender 7* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Zipato ZD2102* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration der *Qubino Weather Station* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Everspring ST814* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Hank HKZW-SO08* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Hank HKZW-SO01* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration *Hank HKZW-SCN01* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Philio PAT02-B* zur Nutzung der Eigenschaften
- Bearbeitung des Bildes *Philio PAT02-B* (Freistellen)
- Bildbearbeitung *Abus SHWM1000*

**Konfigurationen hinzufügen**

- Hinzufügen der Konfiguration *Zipato Energy Meter* (Eigenschaften: Leistung, Energie, Spannung, Strom)
- Bild für *Zipato Energy Meter* hinzugefügt
- Konfiguration *Airzone Aidoo Zwave* hinzugefügt (Eigenschaften: Temperatur, Thermostatmodus, Thermostatmodus-Aktion, Thermostat-Lüftermodus, Thermostat-Lüftermodus-Aktion, Thermostat-Sollwert, Benachrichtigung)
- Bild für *Airzone Aidoo Zwave* hinzugefügt
- Hinzufügen einer Eigenschaft *Thermostatfanmode*
- Hinzufügen einer Eigenschaft *Thermostatfanmodeaction*
- Hinzufügen einer Eigenschaft *Richtung*
- Hinzufügen einer *Velocity*-Eigenschaft
- Hinzufügen einer *Rain*-Eigenschaft
- Hinzufügen einer *Co*-Eigenschaft
- Hinzufügen einer Untereigenschaft *Basic-motion* zur Eigenschaft *Motion*
- Hinzufügen einer Untereigenschaft *Dust-in-device* zur Eigenschaft *Notification*

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 15/12/2022

**Verbesserungen**

- Es wurde die Möglichkeit hinzugefügt, auf den Seiten bestimmter Geräte *Anleitungen* anzuzeigen (z. B. beim Zipato-Tastenfeld, um die Funktionsweise der Codes zu erklären)

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Aetoec Nanomote Quad* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Fibaro Fgs211* zur Nutzung der Eigenschaften
- Änderung der Konfiguration *Fibaro fgwreu111 Walli Shutter*: Umstellung auf die Eigenschaft „Shutter/Level“ sowie Umstellung von „Power“ und „Energy“ auf Endpunkt 1
- Anpassung der Konfiguration des *Zipato Keypad* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Schlage Keypad*, um die Eigenschaften zu nutzen

**Konfigurationen hinzufügen**

- Konfiguration *Zooz ZEN17* hinzugefügt (Eigenschaften: Schalter)
- Bild für *Zooz ZEN17* hinzugefügt
- Konfiguration des *Abus Flood Sensor* hinzugefügt (Eigenschaften: Flood, Tamper, Battery)
- Bild für *Abus Flood Sensor* hinzugefügt
- Hinzufügen einer Eigenschaft *UserCode*

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 05/12/2022

**Verbesserungen**

- Hinzufügen eines Reiters *NVM-Verwaltung* auf der Netzwerkseite. Speichern, Herunterladen, Senden und Wiederherstellung
- Hinzufügen eines Reiters *Aktualisierung* auf der Seite eines Knotens.
- Hinzufügen der *SDK*-Version auf der Informationsseite eines Controllers oder der Module, die diesem zugeordnet sind

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Cherubini Widom Smart Plug*, um die Funktionen zu nutzen
- Anpassung der Konfiguration des *Qubino 3-Phasen-Zählers* zur Nutzung der Eigenschaften
- Änderung der Eigenschaft *Power Factor* für die Option *production*

**Konfigurationen hinzufügen**

- Konfiguration *Cherubini Widom Meta Double Switch* hinzugefügt (Eigenschaften: Schalter, zentrale Szene)
- Bild für *Cherubini Widom Meta Doppelschalter* hinzugefügt
- Konfiguration *Cherubini Widom Meta kabelgebundener Motor CONTR.7* hinzugefügt (Eigenschaften: Rollladen)
- Bild für *Cherubini Widom Meta kabelgebundener Motor CONTR.7* hinzugefügt

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 01/12/2022

**Verbesserungen**

- Behandlung von *Befehlen ohne Einheiten*, obwohl dies (in der zwaveJS-Rückgabe) eigentlich erforderlich wäre, um das Protokoll nicht zu überladen

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Qubino ZMNHNDX Flush 1D* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Fibaro FGSS101 Smoke*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Smarthome Everspring AN-179* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Aeotec ZWA009 AERQ* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration der *Popp Outdoor Siren*, um die Eigenschaften (teilweise) zu nutzen
- Anpassung der Konfiguration des *Aetoec ZWA080* zur (teilweisen) Nutzung der Eigenschaften und Hinzufügen von Steuerbefehlen für Klangparameter (Lautstärke und Klang)
- Änderung der Eigenschaft *Heat* mit Fallbehandlung der Klasse *ALARM SENSOR*
- Änderung der Eigenschaft *Smoke* mit Fallbehandlung der Klasse *ALARM SENSOR*
- Änderung der Eigenschaft *Thermostat Setpoint*, damit die Sollwerte standardmäßig über das Widget *button* angezeigt werden
- Bearbeitung des Bildes *Popp Outdoor Siren* – Freistellen

**Konfigurationen hinzufügen**

- Hinzufügen der Konfiguration *Secure Hortsmann SRT321* (Eigenschaften: ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Temperature, Battery)
- Bild für *Secure Hortsmann SRT321* hinzugefügt
- Konfiguration des *Hoppe ConnectSense-Schlosses* hinzugefügt (Eigenschaften: Öffnen, Benachrichtigungssensor, Kippsensor, Batterie)
- Bild für *Hoppe ConnectSense-Schloss* hinzugefügt
- Einstellungen für *Hoppe ConnectSense-Schloss* hinzufügen

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 28/11/2022

**Korrekturen**

- Korrektur der *Konfigurationsparameter*, um *zu vermeiden, dass bei einer Listenauswahl (bei einem Parameter, der diese Option bietet) zunächst ein Wert von 0 gesendet wird*

**Verbesserungen**

- Hinzufügen eines erforderlichen *Neustarts* des Motors *bei fehlgeschlagenem Ausschluss*
- Anzeige der Meldung bezüglich des *0-Befehls* nur im Falle eines *initiierten Knotens*

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Aeotec TriSensor* zur Nutzung der Funktionen
- Anpassung der Konfiguration des *Hank HKZW-MS02* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Philio PSM02* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration *Everspring AN158* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Danfoss Room Sensor* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration von *Vision ZS Shock and Vibration* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Fibaro Walli Controller*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Fibaro FGD211* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Fibaro Wall Plug UK* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Fibaro Walli Outlet F* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Fibaro Walli Dimmer*, um die Eigenschaften zu nutzen
- Anpassung der Konfiguration des *Fibaro RGBW441* zur Nutzung der Eigenschaft *fibaro-effects*
- Änderung der Eigenschaft *Luminance* mit Hinzufügen eines Modus in %
- Änderung der Eigenschaft *Thermostat Setpoint*, damit die Sollwerte standardmäßig über das Widget *button* angezeigt werden
- Änderung der Eigenschaft *Color* durch Hinzufügen eines Typs *fibaro-effects* (um die Befehle nicht mehr beschreiben zu müssen)
- Hinzufügen eines *empfohlenen Parameters* für den *Philio PST02*

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 25/11/2022

**Verbesserungen**

- Hinzufügen einer *Versionsverwaltung für ZwaveJS UI*
- Hinzufügen einer Meldung im *Meldungscenter* und auf der Plugin-Seite, wenn die ZwaveJS-Benutzeroberfläche *aktualisiert werden muss*
- Umstellung von der *ZwaveJS UI-Version* auf die Version *8.5.1*

**Änderungen an den Einstellungen**

- Änderung der Einstellungen für den *Hank Smart Plug (HKZW-SO08)* (Anzeigeproblem)

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 23/11/2022

**Verbesserungen**

- Hinzufügen einer Anzeige für einen *Parameter oder Wakeup* in der Warteschlange
- Hinzufügen einer Seite, auf der alle ausstehenden *Einstellungen* angezeigt werden
- Hinzufügen einer Webapp-Seite, auf der alle ausstehenden *Einstellungen* angezeigt werden
- Hinzufügen einer Schaltfläche „Löschen“ auf der Seite *Ausstehend*. Ermöglicht das Löschen einer ausstehenden Zeile. Diese Schaltfläche löscht nicht den Befehl, der an den Controller gesendet wurde, sondern nur die in Jeedom ausstehende Information (nützlich beispielsweise für Kalibrierungsparameter, die den gesendeten Wert nie übernehmen, oder für andere Parameter, bei denen dies unnötig wäre).

**Änderungen an den Einstellungen**

- Änderung der Konfiguration des *Popp Strike Lock* zur Verwendung der Eigenschaft „opening“ (für den Kontakt)
- Änderung der Konfiguration des *Fibaro FGD212* zum Hinzufügen der Differenzverwaltung ab Firmware 3.5 (Endpunkt 1 bei Firmware <= 3.4, ansonsten nur Endpunkt 0 auf dem Zielgerät)
- Änderung der Eigenschaft *Door Lock*, um die Funktion „Entriegeln“ (mit Timeout) für alle Geräte hinzuzufügen, die diese Eigenschaft verwenden

**Konfigurationen hinzufügen**

- Konfiguration des *Hank Smart Plug (HKZW-SO08)* hinzugefügt (Eigenschaften: Schalter, Leistung, Energie, Spannung, Strom, Szene)
- Konfiguration „Idinio Foot Dimmer“ hinzugefügt (Eigenschaften: Multilevel, Power, Energy)
- Einstellungen für den *Hank Smart Plug (HKZW-SO08)* hinzugefügt

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 21/11/2022

**Korrekturen**

- Änderung am *Netzwerkdiagramm*: Beim Überfliegen eines Knotens werden nur die ersten direkten Pfade rot dargestellt, um bei bestimmten Installationen und Browsern den Fehler *Max Stack Size Exceeded* im Zusammenhang mit Rekursionen zu vermeiden

**Verbesserungen**

- Berücksichtigung von *refreshNodeCC* als Eigenschaft eines manuell erstellten Befehls, um eine CC zu aktualisieren
- Hinzufügen eines *horizontalen Bildlaufs* im Netzwerk-Modal / Registerkarte *Routing-Tabelle* (danke @Salvialf)
- Verschiebung des *Bestellzählers* auf die rechte Seite der Ausrüstungsseite

**Änderungen an den Einstellungen**

- Anpassung der Konfiguration des *Fibaro FGR223* zur Nutzung der Leistung der Multilevel-Klasse
- Anpassung der Konfiguration des *Fibaro FGR222* zur Nutzung der Leistung der Multilevel-Klasse
- Anpassung der Konfiguration des *Fibaro FGRM222* zur Nutzung der Leistung der Multilevel-Klasse
- Anpassung der Konfiguration des *Devolo Mt02648* zur Nutzung der Funktionen und Hinzufügung der empfohlenen Einstellungen
- Anpassung der Konfiguration des *Devolo Mt02647* zur Nutzung der Funktionen und Hinzufügung der empfohlenen Einstellungen
- Anpassung der Konfiguration von *Popp Strike Lock* zur Nutzung der Eigenschaften
- Anpassung der Konfiguration des *Aeotec ZWA011* zur Nutzung der Funktionen und Hinzufügen seines Bildes

*Wenn Sie eine Änderung oder Ergänzung an der Konfiguration vorgenommen haben, führen Sie eine Synchronisierung durch und laden Sie anschließend die Befehle für die Geräte neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 18/11/2022

**Verbesserungen**

- Es wurde ein Zugriff auf die ZwaveJS-Benutzeroberfläche hinzugefügt *(im Menü „Z-Wave-Netzwerk“, Registerkarte „Aktionen“)*. Verwenden Sie diesen nicht, um Einstellungen zu ändern!
- Hinzufügen eines Ports für den Sonderfall bestimmter Raspberry Pi-Modelle *(weitere werden bei Bedarf hinzugefügt)*
- Hinzufügen eines Befehlszählers für jedes Gerät *(unter Auslassung der 4 technischen Befehle)*
- Hinzufügen einer dynamischen Hilfe bei fehlenden Befehlen.

# 15/11/2022

- Wechseln Sie zur stabilen Version

# 04/05/2022

- Beta 1. Phase
