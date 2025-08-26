# Bestellwert

Diese Dokumentation enthält die Empfehlungen für die Werte der Befehle (Aktion oder Info) entsprechend den Typen. Es ist nicht zwingend erforderlich, sie zu befolgen, aber für eine bessere Integration mit Jeedom wird dies dringend empfohlen.

## Licht

|  |  |
|---------------|-------------|
|Info/Leuchtenstatus|Lass Helligkeit<br/>0-100 oder 0-99 oder 0-255<br/>(abhängig vom maximalen Aktions-/Lichtregler)<br/>oder entweder binär<br/><br/> anders als 0 = Ein<br/>**Obligatorisch**| 
|Info/Lichthelligkeit|Luminosité<br/>0-100 oder 0-99 oder 0-255<br/>(abhängig vom maximalen Aktions-/Lichtregler)<br/>|
||<br/>|
||)|
||)|
|||
|||
||)|
||<br/>|
|||
|||

## Prise

|  |  |
|----------------|------------|
|<br/>Etat|<br/>|
|<br/>|| 
|<br/>||

## Interrupteurs

|  |  |
|----------------|------------|
|<br/>Etat|<br/>|
|<br/>|| 
|<br/>||

## Ventilateur

|  |  |
|----------------|------------|
|<br/>Etat|<br/><br/>|
|<br/>|Allumer| 
|<br/>|Eteindre|
|<br/>Vitesse<br/>Rotation||

## Volet

|  |  |
|---------------|----------------|
|| :<br/><br/>1 = Offen<br/>Wenn Digital :<br/>min des Schieberegler-Buttons (sonst min des Status, sonst 0) = Geschlossen <br/>Max des Slider-Buttons (sonst Max des Status, sonst 100) = Offen<br/>Wenn keine Silder-Taste : Min und Max im Staat vorgeschrieben !|
||<br/>| 
||<br/>|
|||
||<br/>Falls vorhanden:<br/>|

optional :

|  |  |
|---------------|----------------|
||)|
||<br/>|
||)|
||<br/>|

## Valves

|  |  |
|---------------|----------------|
|<br/>Etat|<br/>|
|<br/>|Allumer| 
|<br/>|Eteindre|

|  |  |
|---------------|----------------|
|<br/>Etat|<br/>|
|<br/>|Allumer| 
|<br/>|Eteindre|

|  |  |
|---------------|----------------|
|<br/>Generisch<br/>Etat|<br/>|
|<br/>Generisch<br/>|Allumer| 
|<br/>Generisch<br/>|Eteindre|

einen Dimmer hinzufügen ? und fügen Sie der Aktion Digitales hinzu ? es existiert ?

## Serrures

|  |  |
|---------------|----------------|
||)<br/>)|
||| 
||Verrouillage| 

## Mouvement

|  |  |
|---------------|----------------|
||<br/>|

##  

|  |  |
|---------------|----------------|
|<br/>Info/Fenster<br/>()|)<br/>)| 

## Sirenen

|  |  |
|---------------|----------------|
||<br/>|

## Alarme

|  |  |
|---------------|----------------|
||<br/>()|
||<br/>()|
|| **genau** |
|||
|||
|||

## Thermostats

|  |  |
|---------------|----------------|
|)|<br/>|
|)|''<br/>'Hitze‘ oder ‚Heizung‘'<br/>'kühlen‘ oder ‚Klimaanlage‘'<br/><br/>| 
||'<br/>'„Keine“ oder „Thermostat“ = Sollwertmodus<br/> **genau** |
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
