# Bestellwert

Diese Dokumentation fasst Empfehlungen für Befehlswerte (Aktion oder Info) je nach Typ zusammen. Es ist nicht verpflichtend, sie zu befolgen, aber für eine bessere Integration in Jeedom wird dies dringend empfohlen.

## Licht

|Allgemeiner Typ  | Werte / Handeln |
|---------------|-------------|
|Info/Lichtstatus|Oder Helligkeit<br/>0-100 Oder 0-99 oder 0-255<br/>(abhängig vom maximalen Aktions-/Licht-Schieberegler)<br/>oder Binär<br/>0 = Aus<br/> anders als 0 = Ein<br/>**Obligatorisch**| 
|Info/Lichthelligkeit|Luminosité<br/>0-100 Oder 0-99 oder 0-255<br/>(abhängig vom maximalen Aktions-/Licht-Schieberegler)<br/>Immer mit Lichtstatus auf Binärbefehl verwenden|
|Aktions-/Licht-Schieberegler|Helligkeitsdimmer<br/>Min. und Max. obligatorisch|
|Aktions-/Licht-Ein-Taste|Das Licht einschalten (Change of State)|
|Aktions-/Licht-Aus-Taste|Das Licht ausschalten (Zustandsänderung)|
|Info/Lichtfarbe|#RRGGBB-Format|
|Aktion/Lichtfarbe|Ändern der Farbe, Format #RRGGBB|
|Info/Lichttemperaturfarbe|Mired-Format (<=500) oder Kelvin-Format (>500))|
|Aktion/Lichttemperaturfarbe|Ändern der Farbtemperatur<br/>Min. und Max. obligatorisch|
|Aktion/Licht umschalten|Zustandsumkehr, wenn binär|
|Aktions-/Lichtmodus|Voreingestellte/Lichtszenen, können mehrere sein|

## Prise

|Allgemeiner Typ  | Werte / Handeln |
|----------------|------------|
|Info/Steckdose<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Ergriffen<br/>Ein-Taste|Schalten Sie die Steckdose ein| 
|Aktion/Ergriffen<br/>Aus-Taste|Schalten Sie die Steckdose aus|

## Volet

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info-/Statusbereich|Wenn binär :<br/>0 = Geschlossen<br/>1 = Offen<br/>Wenn digital :<br/>Min. des Button-Schiebereglers (sonst Min. des Zustands, sonst 0) = Geschlossen <br/>Maximalwert des Button-Schiebereglers (sonst Maximalwert des Status, ansonsten 100) = Offen<br/>Wenn keine Silder-Taste vorhanden ist : Obligatorische Mindest- und Höchstwerte im Bundesstaat !|
|Aktions-/Schildtaste nach oben|Den Verschluss öffnen<br/>Start der Öffnung oder Festlegen des maximalen Schiebereglerwerts oder -zustands oder 100| 
|Aktion/Auslöser gedrückt|Schließen des Verschlusses<br/>Start des Abschlusses oder Festlegen des minimalen Schiebereglerwerts oder -zustands oder 0|
|Aktions-/Auslöser-Stopp-Taste|Stoppen der Verschlussbewegung|
|Aktions-/Bedienfeldschaltflächen-Schieberegler|Gibt den Öffnungsanteil des Verschlusses an<br/>Falls vorhanden:<br/>Obligatorische Mindest- und Höchstwerte|

## Serrures

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Sperrstatus|0 = Nicht sicher (nicht gesperrt))<br/>1 = Sicher (gesperrt)|
|Aktions-/Sperr-Öffnen-Taste|Entsperren| 
|Schaltfläche „Aktion/Schließen sperren“|Verrouillage| 

## Mouvement

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Anwesenheit|0 = Keine Bewegung<br/>1 = Bewegung|

## Öffnung 

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Tür<br/>Info/Fenster<br/>(gleiche Behandlung)|0 = Kontakt (geschlossen)<br/>1 = Kein Kontakt (Offen)| 

## Electricité
|Allgemeiner Typ  | Einheit |
|---------------|----------------|
|Info/Strom|Watts| 
|Info/Stromverbrauch|KWh| 
