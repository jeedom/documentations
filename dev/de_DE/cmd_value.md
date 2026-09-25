# Auftragswert

Diese Dokumentation enthält Empfehlungen für die Werte von Befehlen (Aktion oder Info) je nach Typ. Die Befolgung dieser Empfehlungen ist nicht zwingend erforderlich, wird jedoch für eine optimale Integration in Jeedom dringend empfohlen.

## Beleuchtung

|Generischer Typ  | Werte / Aktion |
|---------------|-------------|
|Info/Lichtstatus|Helligkeit<br/>0–100 oder 0–99 oder 0–255<br/>(abhängig vom Maximalwert des Schiebereglers „Aktion/Licht“)<br/>oder „Entweder-oder“<br/>0 = Aus<br/> ungleich 0 = Ein<br/>**Erforderlich**|
|Info/Licht Helligkeit|Helligkeit<br/>0–100 oder 0–99 oder 0–255<br/>(abhängig vom Maximalwert des Schiebereglers „Aktion/Licht“)<br/>Immer in Verbindung mit „Lichtstatus“ auf dem Binärbefehl verwenden|
|Action/Licht-Schieberegler|Helligkeitsregler<br/>Min&Max Erforderlich|
|Aktion/Licht – Schalter „Ein“|Licht einschalten (Zustandsänderung)|
|Aktion/Licht-Taste „Aus“|Licht ausschalten (Zustandsänderung)|
|Info/Farblicht|Format #RRGGBB|
|Aktion/Farblichter|Farbänderung, Format #RRGGBB|
|Info/Licht – Farbtemperatur|Mired-Format (<=500) ou Kelvin (>500)|
|Aktion/Licht – Farbtemperatur|Änderung der Farbtemperatur<br/>Min&Max Erforderlich|
|Aktion/Licht umschalten|Zustand umkehren, wenn binär|
|Aktion/Lichtmodus|Voreinstellung/Lichtszenen, kann mehrfach sein|

## Steckdose

|Generischer Typ  | Werte / Aktion |
|----------------|------------|
|Info/Steckdose<br/>Status|0 = Aus<br/>1 = Ein|
|Aktion/Steckdose<br/>Taste „Ein“ | Steckdose einschalten |
|Aktion/Steckdose<br/>Aus-Taste | Steckdose ausschalten |

## Schalter

|Generischer Typ  | Werte / Aktion |
|----------------|------------|
|Info/Schalter<br/>Status|0 = Aus<br/>1 = Ein|
|Aktion/Schalter<br/>Taste „Ein“ | Schalter einschalten |
|Aktion/Schalter<br/>Aus-Taste | Schalter ausschalten |

## Ventilator

|Generischer Typ  | Werte / Aktion |
|----------------|------------|
|Info/Ventilator<br/>Status|0 = Aus<br/>1 = Ein<br/>oder Dimmung je nach Geschwindigkeit|
|Aktion/Lüfter<br/>Taste „Ein“ | Einschalten |
|Aktion/Lüfter<br/>Aus-Taste | Ausschalten |
|Aktion/Lüfter<br/>Geschwindigkeit<br/>Rotation|Min. Max. Erforderlich|

## Rollladen

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Status-Fenster|Wenn binär:<br/>0 = Geschlossen<br/>1 = Offen<br/>Si Numérique:<br/>Min-Wert des Schiebereglers (ansonsten Min-Wert des Zustands, ansonsten 0) = Geschlossen <br/>Maximalwert des Schiebereglers (sonst Maximalwert des Zustands, sonst 100) = Offen<br/>Wenn kein Schieberegler vorhanden ist: Min und Max müssen im Status angegeben werden!|
|Aktion/Rollladen-Schaltfläche „Hochfahren“|Öffnen des Rollladens<br/>Start der Öffnung oder Maximalwert des Schiebereglers festlegen oder Status oder 100|
|Aktion/Rollladen-Taste „Nach unten“|Rollladen schließen<br/>Schließen starten oder Mindestwert des Schiebereglers festlegen oder Status oder 0|
|Funktion/Rollladen-Stopp-Taste|Bewegung des Rollladens anhalten|
|Aktion/Rollladen-Schieberegler|Gibt den Öffnungsgrad des Rollladens an<br/>Falls vorhanden:<br/>Min und Max sind Pflichtangaben|

optional:

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Rollladen – Status – Horizontale Neigung|Winkel 0–90° (über Schieberegler)|
|Funktion/Fensterladen-Schieberegler – horizontale Neigung|Winkel 0–90°<br/>einstellbar über den Min-Max-Schieberegler|
|Info/Fensterladen – Status – Vertikale Neigung|Winkel 0–90° (über Schieberegler)|
|Funktion/Fensterladen-Schieberegler für vertikale Neigung|Winkel 0–90°<br/>einstellbar über den Min-Max-Schieberegler|

## Ventile

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Wasserhahn<br/>Status|0 = Aus<br/>1 = Ein|
|Aktion/Wasserhahn<br/>Taste „Ein“ | Einschalten |
|Aktion/Wasserhahn<br/>Aus-Taste | Ausschalten |

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Bewässerung<br/>Status|0 = Aus<br/>1 = Ein|
|Steuerung/Bewässerung<br/>Taste „Ein“ | Einschalten |
|Steuerung/Bewässerung<br/>Aus-Taste | Ausschalten |

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Ventil<br/>Allgemeines<br/>Status|0 = Aus<br/>1 = Ein|
|Antrieb/Ventil<br/>Allgemeines<br/>Taste „Ein“ | Einschalten |
|Antrieb/Ventil<br/>Allgemeines<br/>Aus-Taste | Ausschalten |

Einen Dimmer hinzufügen? Und das Ganze digitalisieren? Gibt es so etwas?

## Schlösser

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Schlossstatus|0 = Ungesichert (nicht verriegelt)<br/>1 = Gesichert (gesperrt)|
|Aktion/Schloss-Öffnen-Taste|Entriegelung|
|Aktion/Schloss-Schaltfläche „Schließen“|Verriegelung|

## Bewegung

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Anwesenheit|0 = Keine Bewegung<br/>1 = Bewegung|

## Eröffnung

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Tür<br/>Info/Fenster<br/>(gleiche Verarbeitung)|0 = Kontakt (geschlossen)<br/>1 = Kein Kontakt (offen)|

## Sirenen

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Status der Sirene|0 = Ertönt nicht<br/>1 = Klingeln|

## Alarmanlage

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Statusinfo/Alarm|1 = Ausgelöst<br/>(hat Vorrang vor den Modi „Aktiviert“ und den anderen Modi)|
|Info/Alarmstatus aktiviert|0 = Deaktiviert<br/>(hat Vorrang vor den Modi)|
|Info/Alarmmodus|Bezeichnung, die **genau** den Namen eines Befehls im Aktions-/Alarmmodus anzeigt|
|Aktion/Alarm aktivieren|Alarm aktivieren|
|Aktion/Alarm ausgelöst|Alarm deaktivieren|
|Aktion/Alarmmodus|Alarmmodus, kann mehrfach sein|

## Thermostate

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Thermostat-Status (BINÄR)|0 = Aus<br/>1 = Ein|
|Info/Thermostatstatus (HUMAIN)|„aus“ oder „abgeschaltet“ oder „ausgeschaltet“<br/>„Heat“ oder „Heizung“<br/>„Kühlung“ oder „Klimaanlage“<br/><br/>Englisch bevorzugen|
|Info/Thermostat-Modus|„Off“ oder „Aus“ = AUS<br/>„Keine“ oder „Thermostat“ = Sollwertmodus<br/>Bezeichnung, die **genau** den Namen eines Befehls „Aktion/Thermostat-Modus“ anzeigt|
|Aktion/Thermostat-Modus|Thermostat-Modus, kann mehrfach sein|
|Info/Thermostat Außentemperatur|Grad Celsius|
|Info/Thermostat Raumtemperatur|Grad Celsius|
|Info/Sollwert des Thermostats|Wert zwischen Min und Max der Aktion/Sollwert des Thermostats|
|Aktion/Sollwert des Thermostats|Mindest- und Höchstwerte erforderlich|
|Info/Thermostat-Sperre|0 = Nicht gesperrt<br/>1 = Gesperrt|
|Aktion/Thermostat sperren|Thermostat sperren|
|Aktion/Thermostat entsperren|Thermostat entsperren|

## Tore oder Garagen

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Portal zum Öffnungszustand<br/>Info/Garage: Tür geöffnet<br/>(gleiche Behandlung)|0 = Geschlossen<br/>252 = Schließen läuft<br/>253 = Angehalten<br/>254 = Wird gerade geöffnet<br/>255 = Offen<br/>(Basierend auf Z-Wave-Geräten, könnte es sich auch um binäre oder beschriftete Geräte handeln?)|

entweder:

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Funktion/Tür oder Garagentor – Umschaltknopf|Schalter, der bei geschlossenem Zustand öffnet und bei geöffnetem Zustand schließt<br/>Öffnen, wenn blockiert (aus Sicherheitsgründen)|

oder:

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Funktion/Tür oder Garagentor – Öffnungstaste|Öffnen|
|Funktion/Tür oder Garagentor – Schließen-Taste|Schließen|

## Elektrik

|Allgemeiner Typ  | Einheit |
|---------------|----------------|
|Info/Elektrische Leistung|Watt|
|Info/Stromverbrauch|kWh|

## Verschiedenes

|Allgemeiner Typ  | Werte / Einheit |
|---------------|----------------|
|Info/Anwesenheit/Belegung|0 = Niemand<br/>1 = Jemand|
|Info/Luftqualität (AQI-Index)|AQI-Index|
|Info/Luftqualität (individuell anpassbarer Index)|ppb oder µg/m³|
|Info/CO-Melder|0 = CO-Wert im Normbereich<br/>1 = CO-Wert abnormal|
|Info/Helligkeit|0 → 100.000 Lux|
|Info/Luftfeuchtigkeit|%|
|Info/CO₂ (ppm)|PPM oder binär?|
|Info/Temperatur|-50 → 300 °C|
|Info/Batterie|%|
|Info/Batterie wird geladen|0 = NEIN<br/>1 = JA<br/>Nicht vorhanden = Nicht wiederaufladbar|
|Info/Batterie schwach|0 = NEIN<br/>1 = JA|
|Info/Rauchmelder|0 = Kein Rauch<br/>1 = Rauch erkannt|
|Info/Hochwasser<br/>Info/Wasserleck|0 = Kein Leck erkannt<br/>1 = Leckage erkannt|
|Info/Sabotage|0 = Keine Sabotage<br/>1 = Sabotage|
|Info/Schock|0 = Kein Schock<br/>1 = Schock|
|Info/Druck|bar|
|Info/Geräuschpegel (dB)|dB|

## Gerätestatus

|Generischer Typ  | Werte / Aktion |
|---------------|----------------|
|Info/Status Aktiv|0 = inaktiv<br/>1 = aktiv|
|Info/Online-Verbindung|0 = offline<br/>1 = online|
|Info/Status: Defekt|0 = nein<br/>1 = ja|
