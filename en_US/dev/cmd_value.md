# Order value

This documentation brings together recommendations for command values (action or info) depending on the types. It is not obligatory to follow them but for better integration into Jeedom it is strongly recommended to do so.

## Light

|Generic type  | Values / Action |
|---------------|-------------|
|Info/Light Status|Or Brightness<br/>0-100 Or 0-99 or 0-255<br/>(depending on the max Action/Light Slider)<br/>or Binary<br/>0 = Off<br/> other than 0 = On<br/>**Mandatory**| 
|Info/Light Brightness|Luminosité<br/>0-100 Or 0-99 or 0-255<br/>(depending on the max Action/Light Slider)<br/>Always use with Light Status on binary command|
|Action/Light Slider|Brightness dimmer<br/>Min&Max Mandatory|
|Action/Light On Button|Switching on the light (Change of State)|
|Action/Light Off Button|Turning off the light (Change of State)|
|Info/Light Color|#RRGGBB format|
|Action/Light Color|Changing the color, Format #RRGGBB|
|Info/Light Temperature Color|Mired (<=500) or Kelvin (>500) format)|
|Action/Light Temperature Color|Changing the color temperature<br/>Min&Max Mandatory|
|Action/Light Toggle|State inversion if binary|
|Action/Light Mode|Preset/Light scene, can be multiple|

## Prise

|Generic type  | Values / Action |
|----------------|------------|
|Info/Socket<br/>Etat|0 = Off<br/>1 = On|
|Action/Taken<br/>On button|Turn on the socket| 
|Action/Taken<br/>Off button|Turn off the socket|

## Volet

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Status Pane|If Binary :<br/>0 = Closed<br/>1 = Open<br/>If Digital :<br/>min of Button Slider(otherwise min of State, otherwise 0) = Closed <br/>max of Button Slider(otherwise max of State, otherwise 100) = Open<br/>If no Silder button : Mandatory Min and Max in the State !|
|Action/Shield Button Up|Opening the shutter<br/>Launch of opening or set max slider value or state or 100| 
|Action/Shutter Button Down|Closing the shutter<br/>Start of closure or set min slider value or state or 0|
|Action/Shutter Stop Button|Stopping shutter movement|
|Action/Panel Button Slider|Gives the opening proportion of the shutter<br/>If present:<br/>Mandatory Min and Max|

## Serrures

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Lock Status|0 = Not Secure (Not Locked)<br/>1 = Secure (Locked)|
|Action/Lock Open Button|Unlocking| 
|Action/Lock Close Button|Verrouillage| 

## Mouvement

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Presence|0 = No movement<br/>1 = Movement|

## Opening 

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Door<br/>Info/Window<br/>(same treatment)|0 = Contact (Closed)<br/>1 = No contact (Open)| 

## Electricité
|Generic type  | Unit |
|---------------|----------------|
|Info/Electric Power|Watts| 
|Info/Electric Consumption|KWh| 
