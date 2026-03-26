# Bestellwert

Diese Dokumentation enthält Empfehlungen für Befehlswerte (Aktion oder Information) basierend auf Typen. Die Befolgung dieser Schritte ist nicht zwingend erforderlich, wird aber für eine bessere Integration mit Jeedom dringend empfohlen.

## Licht

|  |  |
|---------------|-------------|
|Info/Lichtstatus|Helligkeit<br/>0-100 oder 0-99 oder 0-255<br/>(abhängig vom maximalen Action/Light Slider)<br/>oder Binär<br/><br/> außer 0 = Ein<br/>**Obligatorisch**| 
|Info/Lichthelligkeit|Luminosité<br/>0-100 oder 0-99 oder 0-255<br/>(abhängig vom maximalen Action/Light Slider)<br/>|
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
|| :<br/><br/>1 = Offen<br/>Wenn Digital :<br/>Minimum des Schiebereglers (ansonsten Minimum des Zustands, ansonsten 0) = Geschlossen <br/>Maximalwert des Schiebereglers (ansonsten Maximalwert des Zustands, ansonsten 100) = Offen<br/>Wenn kein Schieberknopf vorhanden ist : Mindest- und Höchstwerte sind im Bundesstaat vorgeschrieben !|
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

Füge einen Dimmer hinzu ? und fügen Sie der Aktion digitale Technologie hinzu ? Es existiert ?

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
|<br/>Info-/Fenster<br/>()|)<br/>)| 

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
|)|''<br/>'Wärme“ oder „Heizung“'<br/>'„kühl“ oder „Klimaanlage“'<br/><br/>| 
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
|<br/>Informationen/Garagenöffnungsstatus<br/>()|<br/>252 = Schließung im Gange<br/>253 = Angehalten<br/>254 = Eröffnung in Arbeit<br/>255 = Offen<br/>( ?)|

entweder :

|  |  |
|---------------|----------------|
||<br/>)| 

oder :

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
