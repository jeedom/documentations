# Bestellwert

Diese Dokumentation enthält die Empfehlungen für die Werte der Befehle (Aktion oder Info) entsprechend den Typen. Es ist nicht zwingend erforderlich, sie zu befolgen, aber für eine bessere Integration mit Jeedom wird dies dringend empfohlen.

## Licht

|  |  |
|---------------|-------------|
|Info/Leuchtenstatus|Lass Helligkeit<br/>0-100 oder 0-99 oder 0-255<br/>(abhängig vom maximalen Aktions-/Lichtregler)<br/>oder entweder binär<br/>0 = Aus<br/> anders als 0 = Ein<br/>**Obligatorisch**| 
|Info/Lichthelligkeit|Luminosité<br/>0-100 oder 0-99 oder 0-255<br/>(abhängig vom maximalen Aktions-/Lichtregler)<br/>Immer mit Lichtzustand auf dem Binärbefehl verwenden|
|Aktions-/Lichtschieber|Helligkeitsdimmer<br/>Min&Max obligatorisch|
|Aktions-/Licht-Ein-Taste|Licht einschalten (Zustand ändern))|
|Aktions-/Licht-Aus-Taste|Licht ausschalten (Zustand ändern))|
|Info/Lichtfarbe|#RRGGBB-Format|
|Aktion/Lichtfarbe|Farbänderung, Format #RRGGBB|
|Info/Lichtfarbtemperatur|Mired-Format (<=500) oder Kelvin-Format (>500))|
|Aktion/Lichtfarbtemperatur|Ändern der Farbtemperatur<br/>Min&Max obligatorisch|
|Aktions-/Lichtschalter|Zustandsumkehrung bei Binärzahl|
|Aktions-/Lichtmodus|Voreinstellung/Lichtszene, kann mehrere sein|

## Prise

|  |  |
|----------------|------------|
|Info/Stecker<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Take<br/>Ein-Taste|Schalten Sie die Steckdose ein| 
|Aktion/Take<br/>Aus-Taste|Schalten Sie die Steckdose aus|

## Interrupteurs

|  |  |
|----------------|------------|
|Info/Schalter<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Schalter<br/>Ein-Taste|Schalten Sie den Schalter ein| 
|Aktion/Schalter<br/>Aus-Taste|Schalten Sie den Schalter aus|

## Ventilateur

|  |  |
|----------------|------------|
|Info/Fan<br/>Etat|0 = Aus<br/>1 = Ein<br/>oder Abstufung, wenn Geschwindigkeit|
|Aktion/Fan<br/>Ein-Taste|Allumer| 
|Aktion/Fan<br/>Aus-Taste|Eteindre|
|Aktion/Fan<br/>Vitesse<br/>Rotation|Min. Max. Obligatorisch|

## Volet

|  |  |
|---------------|----------------|
|Info-/Statusfeld|Wenn Binär :<br/><br/>1 = Offen<br/>Wenn Digital :<br/>min des Schieberegler-Buttons (sonst min des Status, sonst 0) = Geschlossen <br/>Max des Slider-Buttons (sonst Max des Status, sonst 100) = Offen<br/>Wenn keine Silder-Taste : Min und Max im Staat vorgeschrieben !|
|Aktions-/Schwenktaste nach oben|Öffnen des Verschlusses<br/>Öffnen starten oder maximalen Schiebereglerwert oder Status oder 100 festlegen| 
|Aktions-/Fenster-nach-unten-Schaltfläche|Schließen des Verschlusses<br/>Starten Sie das Schließen oder legen Sie den Mindestwert oder Status des Schiebereglers oder 0 fest|
|Aktions-/Stopp-Taste Auslöser|Stoppen der Rollladenbewegung|
|Schieberegler für Aktions-/Bereichsschaltflächen|Gibt den Öffnungsanteil des Verschlusses an<br/>Falls vorhanden:<br/>Min. und Max. erforderlich|

optional :

|  |  |
|---------------|----------------|
|Info/Horizontale Neigungsstatusfenster|Winkel 0->90° (über Schieberegler)|
|Aktions-/Schiebereglerbereich horizontal neigen|Winkel 0->90°<br/>veränderbar über Min-Max des Schiebereglers|
|Info/Schwenkstatus Vertikale Neigung|Winkel 0->90° (über Schieberegler)|
|Aktions-/Schiebereglerbereich, vertikale Neigung|Winkel 0->90°<br/>veränderbar über Min-Max des Schiebereglers|

## Valves

|  |  |
|---------------|----------------|
|Info/Tippen<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Tippen<br/>Ein-Taste|Allumer| 
|Aktion/Tippen<br/>Aus-Taste|Eteindre|

|  |  |
|---------------|----------------|
|Info/Bewässerung<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Bewässerung<br/>Ein-Taste|Allumer| 
|Aktion/Bewässerung<br/>Aus-Taste|Eteindre|

|  |  |
|---------------|----------------|
|Info/Ventil<br/>Generisch<br/>Etat|0 = Aus<br/>1 = Ein|
|Aktion/Ventil<br/>Generisch<br/>Ein-Taste|Allumer| 
|Aktion/Ventil<br/>Generisch<br/>Aus-Taste|Eteindre|

einen Dimmer hinzufügen ? und fügen Sie der Aktion Digitales hinzu ? es existiert ?

## Serrures

|  |  |
|---------------|----------------|
|Info/Sperrstatus|0 = Nicht sicher (Nicht gesperrt))<br/>1 = Sicher (Gesperrt))|
|Aktions-/Sperrtaste geöffnet|Entsperren| 
|Aktion/Schaltfläche „Schließen“ sperren|Verrouillage| 

## Mouvement

|  |  |
|---------------|----------------|
|Info/Präsenz|0 = Keine Bewegung<br/>1 = Bewegung|

##  

|  |  |
|---------------|----------------|
|Info/Tür<br/>Info/Fenster<br/>()|0 = Kontakt (Geschlossen)<br/>1 = Kein Kontakt (Offen)| 

## Sirenen

|  |  |
|---------------|----------------|
|Info/Staat Sirene|0 = Klingelt nicht<br/>1 = Ringe|

## Alarme

|  |  |
|---------------|----------------|
|Info-/Alarmstatus|1 = Ausgelöst<br/>(Priorität auf aktivierte und Modi)|
|Info/Alarmstatus aktiviert|0 = Unscharf<br/>(Priorität auf Modi)|
|Info-/Alarmmodus|Beschriftungsanzeige **genau** der Name eines Aktions-/Alarmmodusbefehls|
|Aktion/Alarm scharfgeschaltet|Alarmanlage aktivieren|
|Aktion/Alarm ausgelöst|Deaktivieren Sie den Alarm|
|Aktions-/Alarmmodus|Alarmmodus, kann mehrere sein|

## Thermostats

|  |  |
|---------------|----------------|
|Info/Thermostatstatus (BINÄR)|0 = Aus<br/>1 = Ein|
|Info/Thermostatstatus (MENSCH)|'aus' oder 'gestoppt' oder 'Stopp'<br/>'Hitze‘ oder ‚Heizung‘'<br/>'kühlen‘ oder ‚Klimaanlage‘'<br/><br/>| 
||'<br/>'„Keine“ oder „Thermostat“ = Sollwertmodus<br/>Beschriftungsanzeige **genau** |
|||
|||
||| 
||| 
||| 
||<br/>| 
|||
|||

## Tore oder Garagen

|  |  |
|---------------|----------------|
|<br/>Info/Garage-Öffnungsstatus<br/>()|<br/>252 = Schließung läuft<br/>253 = Gestoppt<br/>254 = Öffnung läuft<br/>255 = Offen<br/>( ?)|

mit entweder :

|  |  |
|---------------|----------------|
||<br/>)| 

oder entweder :

|  |  |
|---------------|----------------|
||Ouverture|
||Fermeture|

## Electricité

|  |  |
|---------------|----------------|
||Watts| 
||KWh| 

## Divers

|  |  |
|---------------|----------------|
||<br/>|
|)||
|)||
||<br/>|
||| 
|||
|)| ?|
||-| 
||| 
||<br/><br/>| 
||<br/>| 
||<br/>| 
|<br/>|<br/>| 
||<br/>| 
||<br/>| 
||bar|
|)|dB|

## Gerätestatus

|  |  |
|---------------|----------------|
||<br/>|
||<br/>|
||<br/>|
