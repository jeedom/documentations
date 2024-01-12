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

## Interrupteurs

|Generic type  | Values / Action |
|----------------|------------|
|Info/Switch<br/>Etat|0 = Off<br/>1 = On|
|Action/Switch<br/>On button|Turn on the switch| 
|Action/Switch<br/>Off button|Turn off the switch|

## Ventilateur

|Generic type  | Values / Action |
|----------------|------------|
|Info/Fan<br/>Etat|0 = Off<br/>1 = On<br/>or dimming if speed|
|Action/Fan<br/>On button|Allumer| 
|Action/Fan<br/>Off button|Eteindre|
|Action/Fan<br/>Vitesse<br/>Rotation|Min Max Mandatory|

## Volet

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Status Pane|If Binary :<br/>0 = Closed<br/>1 = Open<br/>If Digital :<br/>min of Button Slider(otherwise min of State, otherwise 0) = Closed <br/>max of Button Slider(otherwise max of State, otherwise 100) = Open<br/>If no Silder button : Mandatory Min and Max in the State !|
|Action/Shield Button Up|Opening the shutter<br/>Launch of opening or set max slider value or state or 100| 
|Action/Shutter Button Down|Closing the shutter<br/>Start of closure or set min slider value or state or 0|
|Action/Shutter Stop Button|Stopping shutter movement|
|Action/Panel Button Slider|Gives the opening proportion of the shutter<br/>If present:<br/>Mandatory Min and Max|

optional :

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Horizontal Tilt Status Pane|Angle 0->90° (via slider)|
|Action/Shutter Slider Horizontal Tilt|Angle 0->90°<br/>modifiable via min-max of the slider|
|Info/Vertical Tilt Status Pane|Angle 0->90° (via slider)|
|Action/Shutter Slider Vertical Tilt|Angle 0->90°<br/>modifiable via min-max of the slider|

## Valves

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Tap<br/>Etat|0 = Off<br/>1 = On|
|Action/Tap<br/>On button|Allumer| 
|Action/Tap<br/>Off button|Eteindre|

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Irrigation<br/>Etat|0 = Off<br/>1 = On|
|Action/Irrigation<br/>On button|Allumer| 
|Action/Irrigation<br/>Off button|Eteindre|

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Valve<br/>Generic<br/>Etat|0 = Off<br/>1 = On|
|Action/Valve<br/>Generic<br/>On button|Allumer| 
|Action/Valve<br/>Generic<br/>Off button|Eteindre|

add a dimmer ? and add digital to the action ? it exists ?

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

## Mermaids

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Siren Status|0 = Does not ring<br/>1 = Rings|

## Alarme

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Alarm status|1 = Triggered<br/>(priority on activated and modes)|
|Info/Status alarm activated|0 = Disarmed<br/>(priority on modes)|
|Info/Alarm mode|Label showing **Exactly** the name of an Action/Alarm Mode command|
|Action/Armed Alarm|Arm the alarm|
|Action/Alarm released|Disarm the alarm|
|Action/Alarm Mode|Alarm mode, can be multiple|

## Thermostats

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Thermostat Status (BINARY)|0 = Off<br/>1 = On|
|Info/Thermostat Status (HUMAN)|'off' or 'stopped' or 'arrest'<br/>'heat' or 'heating'<br/>'cool' or 'air conditioning'<br/><br/>Prefer English| 
|Info/Thermostat Mode|'Off' or 'Arret' = OFF<br/>'None' or 'Thermostat' = Setpoint Mode<br/>Label showing **Exactly** the name of an Action/Thermostat Mode command|
|Action/Thermostat Mode|Thermostat mode, can be multiple|
|Info/Thermostat Exterior Temperature|Degrees Celsius|
|Info/Thermostat Room temperature|Degrees Celsius| 
|Info/Thermostat Setpoint|Value between Min and Max of the Action/Thermostat Setpoint| 
|Action/Thermostat Setpoint|Mandatory Min&Max| 
|Info/Thermostat Lock|0 = Not Locked<br/>1 = Locked| 
|Action/Thermostat Lock|Lock the thermostat|
|Action/Thermostat Unlock|Unlock the thermostat|

## Gates or Garages

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Portal opening status<br/>Info/Garage opening status<br/>(same treatment)|0 = Closed<br/>252 = Closing in progress<br/>253 = Stopped<br/>254 = Opening in progress<br/>255 = Open<br/>(Based on z-wave equipment, could also be binary or labeled ?)|

with either :

|Generic type  | Values / Action |
|---------------|----------------|
|Action/Gate or garage toggle button|Switch opens if closed and closes if open<br/>Opening if blocked (for safety)| 

or either :

|Generic type  | Values / Action |
|---------------|----------------|
|Action/Gate or garage opening button|Ouverture|
|Action/Gate or garage close button|Fermeture|

## Electricité

|Generic type  | Unit |
|---------------|----------------|
|Info/Electric Power|Watts| 
|Info/Electric Consumption|KWh| 

## Divers

|Generic type  | Values / Unit |
|---------------|----------------|
|Info/Presence Occupancy|0 = Nobody<br/>1 = Someone|
|Info/Air quality (AQI Index)|AQI index|
|Info/Air quality (Customizable Index)|ppb or µg/m3|
|Info/CO detector|0 = normal CO<br/>1 = abnormal CO|
|Info/Brightness|0 → 100000 lux| 
|Info/Humidity|%|
|Info/CO2 (ppm)|PPM or binary ?|
|Info/Temperature|-50 → 300°C| 
|Info/Battery|%| 
|Info/Battery charging|0 = NO<br/>1 = YES<br/>Not present = Not Rechargeable| 
|Info/Low Battery|0 = NO<br/>1 = YES| 
|Info/Smoke detection|0 = No smoke<br/>1 = Smoke detected| 
|Info/Flood<br/>Info/Water leak|0 = No leak detected<br/>1 = Leak detected| 
|Info/Sabotage|0 = No sabotage<br/>1 = Sabotage| 
|Info/Shock|0 = No shock<br/>1 = Shock| 
|Info/Pressure|bar|
|Info/Sound (dB)|dB|

## Equipment statuses

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Active Status|0 = inactive<br/>1 = active|
|Online Info/Connectivity|0 = offline<br/>1 = online|
|Defective Info/Status|0 = no<br/>1 = yes|
