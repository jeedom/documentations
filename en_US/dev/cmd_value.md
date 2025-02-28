# Order Value

This documentation gathers the recommendations for the values of the commands (action or info) according to the types. It is not mandatory to follow them but for better integration with Jeedom it is strongly recommended to do so.

## Light

|  |  |
|---------------|-------------|
|Info/Light Status|Let Brightness be<br/>0-100 Or 0-99 or 0-255<br/>(depending on the max of Action/Light Slider)<br/>or Either Binary<br/><br/> other than 0 = On<br/>**Mandatory**| 
|Info/Light Brightness|Luminosité<br/>0-100 Or 0-99 or 0-255<br/>(depending on the max of Action/Light Slider)<br/>|
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
|| :<br/><br/>1 = Open<br/>If Digital :<br/>Slider Button min (otherwise State min, otherwise 0) = Closed <br/>max of Slider Button (otherwise max of State, otherwise 100) = Open<br/>If no Silder button : Min and Max mandatory in the State !|
||<br/>| 
||<br/>|
|||
||<br/>If present:<br/>|

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
|<br/>Generic<br/>Etat|<br/>|
|<br/>Generic<br/>|Allumer| 
|<br/>Generic<br/>|Eteindre|

add a dimmer ? and add digital to the action ? it exists ?

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
|<br/>Info/Window<br/>()|)<br/>)| 

## Sirens

|  |  |
|---------------|----------------|
||<br/>|

## Alarme

|  |  |
|---------------|----------------|
||<br/>()|
||<br/>()|
|| **Exactly** |
|||
|||
|||

## Thermostats

|  |  |
|---------------|----------------|
|)|<br/>|
|)|''<br/>'heat' or 'heating''<br/>'cool' or 'air conditioning''<br/><br/>| 
||'<br/>''None' or 'Thermostat' = Setpoint Mode<br/> **Exactly** |
|||
|||
||| 
||| 
||| 
||<br/>| 
|||
|||

## Gates or Garages

|  |  |
|---------------|----------------|
|<br/>Info/Garage opening status<br/>()|<br/>252 = Closing in progress<br/>253 = Stopped<br/>254 = Opening in progress<br/>255 = Open<br/>( ?)|

with either :

|  |  |
|---------------|----------------|
||<br/>)| 

or either :

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

## Equipment statuses

|  |  |
|---------------|----------------|
||<br/>|
||<br/>|
||<br/>|
