# Bestellwert

Diese Dokumentation fasst Empfehlungen für Befehlswerte (Aktion oder Info) je nach Typ zusammen. Es ist nicht verpflichtend, sie zu befolgen, aber für eine bessere Integration in Jeedom wird dies dringend empfohlen.

## Licht

|Allgemeiner Typ  | Werte / Handeln |
|---------------|-------------|
|Info/Lichtstatus|Oder Helligkeit<br/>0-100 Oder 0-99 oder 0-255<br/>(abhängig vom maximalen Aktions-/Licht-Schieberegler)<br/>oder Binär<br/>0 = Aus<br/> außer 0 = Ein<br/>**Obligatorisch**| 
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

## Interrupteurs

|Allgemeiner Typ  | Werte / Handeln |
|----------------|------------|
|Info/Schalter<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Schalter<br/>Ein-Taste|Schalten Sie den Schalter ein| 
|Aktion/Schalter<br/>Aus-Taste|Schalten Sie den Schalter aus|

## Ventilateur

|Allgemeiner Typ  | Werte / Handeln |
|----------------|------------|
|Info/Fan<br/>Etat|0 = Aus<br/>1 = Ein<br/>oder Dimmen bei Geschwindigkeit|
|Aktion/Fan<br/>Ein-Taste|Allumer| 
|Aktion/Fan<br/>Aus-Taste|Eteindre|
|Aktion/Fan<br/>Vitesse<br/>Rotation|Min. Max. Obligatorisch|

## Volet

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info-/Statusbereich|Wenn binär :<br/>0 = Geschlossen<br/>1 = Offen<br/>Wenn digital :<br/>Min. des Button-Schiebereglers (sonst Min. des Zustands, sonst 0) = Geschlossen <br/>max. Button-Slider (sonst max. Status, sonst 100) = Offen<br/>Wenn keine Silder-Taste vorhanden ist : Obligatorische Mindest- und Höchstwerte im Bundesstaat !|
|Aktions-/Schildtaste nach oben|Den Verschluss öffnen<br/>Start der Öffnung oder Festlegen des maximalen Schiebereglerwerts oder -zustands oder 100| 
|Aktion/Auslöser gedrückt|Schließen des Verschlusses<br/>Beginn des Abschlusses oder stellen Sie den minimalen Schiebereglerwert oder -status oder 0 ein|
|Aktions-/Auslöser-Stopp-Taste|Stoppen der Verschlussbewegung|
|Aktions-/Bedienfeldschaltflächen-Schieberegler|Gibt den Öffnungsanteil des Verschlusses an<br/>Falls vorhanden:<br/>Obligatorische Mindest- und Höchstwerte|

optional :

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Statusbereich „Info/horizontale Neigung“|Winkel 0->90° (über Schieberegler))|
|Aktion/Auslöser-Schieberegler, horizontale Neigung|Winkel 0->90°<br/>veränderbar über Min-Max des Schiebereglers|
|Info-/Vertikalneigungsstatusbereich|Winkel 0->90° (über Schieberegler))|
|Vertikale Neigung des Aktions-/Auslöserschiebers|Winkel 0->90°<br/>veränderbar über Min-Max des Schiebereglers|

## Valves

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Tippen<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Tippen<br/>Ein-Taste|Allumer| 
|Aktion/Tippen<br/>Aus-Taste|Eteindre|

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Bewässerung<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Bewässerung<br/>Ein-Taste|Allumer| 
|Aktion/Bewässerung<br/>Aus-Taste|Eteindre|

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Ventil<br/>Generisch<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Ventil<br/>Generisch<br/>Ein-Taste|Allumer| 
|Aktion/Ventil<br/>Generisch<br/>Aus-Taste|Eteindre|

einen Dimmer hinzufügen ? und digital zur Aktion hinzufügen ? es existiert ?

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

## Meerjungfrauen

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Sirenenstatus|0 = Klingelt nicht<br/>1 = Ringe|

## Alarme

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info-/Alarmstatus|1 = Ausgelöst<br/>(Priorität auf aktivierten und Modi)|
|Info-/Statusalarm aktiviert|0 = Unscharf<br/>(Priorität auf Modi)|
|Info-/Alarmmodus|Etikett wird angezeigt **genau** der Name eines Aktions-/Alarmmodusbefehls|
|Aktion/scharfer Alarm|Schalten Sie den Alarm ein|
|Aktion/Alarm ausgelöst|Deaktivieren Sie den Alarm|
|Aktions-/Alarmmodus|Der Alarmmodus kann mehrfach sein|

## Thermostats

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Thermostatstatus (BINÄR))|0 = Aus<br/>1 = Ein|
|Info/Thermostatstatus (MENSCH)|'„aus“ oder „gestoppt“ oder „verhaftet“'<br/>'Hitze“ oder „Heizung“'<br/>'„kühl“ oder „Klimaanlage“'<br/><br/>Bevorzugen Sie Englisch| 
|Info/Thermostatmodus|'„Off“ oder „Arret“ = AUS<br/>'„Keine“ oder „Thermostat“ = Sollwertmodus<br/>Etikett wird angezeigt **genau** der Name eines Aktions-/Thermostatmodusbefehls|
|Aktion/Thermostatmodus|Thermostatmodus, kann mehrere sein|
|Info/Thermostat Außentemperatur|Grad Celsius|
|Info/Thermostat Raumtemperatur|Grad Celsius| 
|Info/Thermostat-Sollwert|Wert zwischen Min und Max des Aktions-/Thermostat-Sollwerts| 
|Aktion/Thermostat-Sollwert|Obligatorisches Min. und Max| 
|Info/Thermostatsperre|0 = Nicht gesperrt<br/>1 = Gesperrt| 
|Aktion/Thermostatsperre|Sperren Sie den Thermostat|
|Aktion/Thermostat entsperren|Entriegeln Sie den Thermostat|

## Tore oder Garagen

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Portal-Öffnungsstatus<br/>Info/Garageneröffnungsstatus<br/>(gleiche Behandlung)|0 = Geschlossen<br/>252 = Abschluss wird ausgeführt<br/>253 = Gestoppt<br/>254 = Öffnung läuft<br/>255 = Offen<br/>(Basierend auf Z-Wave-Geräten, könnte auch binär oder beschriftet sein ?)|

mit entweder :

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Aktions-/Tor- oder Garagen-Umschalttaste|Der Schalter öffnet, wenn er geschlossen ist, und schließt, wenn er geöffnet ist<br/>Öffnung bei Blockierung (zur Sicherheit))| 

oder entweder :

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Aktions-/Tor- oder Garagenöffnungstaste|Ouverture|
|Aktions-/Tor- oder Garagen-Schließtaster|Fermeture|

## Electricité

|Allgemeiner Typ  | Einheit |
|---------------|----------------|
|Info/Strom|Watts| 
|Info/Stromverbrauch|KWh| 

## Divers

|Allgemeiner Typ  | Werte / Einheit |
|---------------|----------------|
|Info/Anwesenheitsbelegung|0 = Niemand<br/>1 = Jemand|
|Info/Luftqualität (AQI-Index)|AQI-Index|
|Info/Luftqualität (Anpassbarer Index)|ppb oder µg/m3|
|Info/CO-Melder|0 = normales CO<br/>1 = abnormales CO|
|Info/Helligkeit|0 → 100000 Lux| 
|Info/Luftfeuchtigkeit|%|
|Info/CO2 (ppm)|PPM oder binär ?|
|Info/Temperatur|-50 → 300°C| 
|Info/Batterie|%| 
|Info/Akkuladung|0 = NEIN<br/>1 = JA<br/>Nicht vorhanden = Nicht wiederaufladbar| 
|Info/Batterie schwach|0 = NEIN<br/>1 = JA| 
|Info/Raucherkennung|0 = Kein Rauch<br/>1 = Rauch erkannt| 
|Info/Überschwemmung<br/>Info/Wasserleck|0 = Kein Leck erkannt<br/>1 = Leck erkannt| 
|Info/Sabotage|0 = Keine Sabotage<br/>1 = Sabotage| 
|Info/Schock|0 = Kein Schock<br/>1 = Schock| 
|Info/Druck|bar|
|Info/Ton (dB)|dB|

## Gerätestatus

|Allgemeiner Typ  | Werte / Handeln |
|---------------|----------------|
|Info/Aktivstatus|0 = inaktiv<br/>1 = aktiv|
|Online-Info/Konnektivität|0 = offline<br/>1 = online|
|Defekte Informationen/Status|0 = nein<br/>1 = ja|
