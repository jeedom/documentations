# 

. .

## 

|Generic type  | Values / Action |
|---------------|-------------|
||<br/><br/>()<br/><br/>0 = Off<br/> <br/>****| 
||Luminosité<br/><br/>()<br/>Always use with Light State on the binary command|
|Action/Light Slider|Brightness dimmer<br/>Min & Max Mandatory|
|Action/Light On Button|Turning on the light (Changing the state))|
|Action/Light Off Button|Turning off the light (Changing the state))|
|Info/Light Color|#RRGGBB Format|
|Action/Light Color|Color Change, Format #RRGGBB|
|Info/Light Color Temperature|Mired (<=500) or Kelvin (>500) format)|
|Action/Light Color Temperature|Changing the color temperature<br/>Min & Max Mandatory|
|Action/Light Toggle|Inversion of the state if binary|
|Action/Light Mode|Preset/Light scene, can be multiple|

## Prise

|Generic type  | Values / Action |
|----------------|------------|
|Info/Plug<br/>Etat|0 = Off<br/>1 = On|
|Action/Take<br/>On button|Turn on the socket| 
|Action/Take<br/>Off button|Turn off the socket|

## Interrupteurs

|Generic type  | Values / Action |
|----------------|------------|
|Info/Switch<br/>Etat|0 = Off<br/>1 = On|
|Action/Switch<br/>On button|Turn on the switch| 
|Action/Switch<br/>Off button|Turn off the switch|

## Ventilateur

|Generic type  | Values / Action |
|----------------|------------|
|Info/Fan<br/>Etat|0 = Off<br/>1 = On<br/>or gradation if speed|
|Action/Fan<br/>On button|Allumer| 
|Action/Fan<br/>Off button|Eteindre|
|Action/Fan<br/>Vitesse<br/>Rotation|Min Max Mandatory|

## Volet

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Status Panel|If Binary :<br/>0 = Closed<br/><br/> :<br/> <br/><br/> :  !|
|Action/Pan Up Button|Opening the shutter<br/>Start opening or set max slider value or state or 100| 
|Action/Pane Down Button|Closing the shutter<br/>Start closing or set min slider value or state or 0|
|Action/Stop Button Shutter|Stopping the shutter movement|
|Action/Pane Button Slider|Gives the opening proportion of the shutter<br/>:<br/>Min and Max mandatory|

 :

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Horizontal Tilt Status Pane|Angle 0->90° (via slider)|
|Action/Slider Pane Horizontal Tilt|Angle 0->90°<br/>modifiable via min-max of the slider|
|Info/Vertical Tilt Status Pane|Angle 0->90° (via slider)|
|Action/Slider Pane Vertical Tilt|Angle 0->90°<br/>modifiable via min-max of the slider|

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
|Info/Valve<br/><br/>Etat|0 = Off<br/>1 = On|
|Action/Valve<br/><br/>On button|Allumer| 
|Action/Valve<br/><br/>Off button|Eteindre|

 ?  ?  ?

## Serrures

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Lock Status|0 = Not Secure (Not Locked))<br/>1 = Secure (Locked))|
|Action/Lock Open Button|Unlocking| 
|Action/Lock Close Button|Verrouillage| 

## Mouvement

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Presence|0 = No movement<br/>1 = Movement|

## Opening 

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Door<br/><br/>(same treatment)|0 = Contact (Closed)<br/>1 = No contact (Open)| 

## 

|Generic type  | Values / Action |
|---------------|----------------|
|Info/State Siren|0 = Does not ring<br/>1 = Rings|

## Alarme

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Alarm status|1 = Triggered<br/>(priority on activated and modes)|
|Info/Alarm status activated|0 = Disarmed<br/>(priority on modes)|
|Info/Alarm mode|Label displaying **** the name of an Action/Alarm Mode command|
|Action/Alarm armed|Arm the alarm|
|Action/Alarm Released|Disarm the alarm|
|Action/Alarm Mode|Alarm mode, can be multiple|

## Thermostats

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Thermostat Status (BINARY)|0 = Off<br/>1 = On|
|Info/Thermostat Status (HUMAN)|'off' or 'stopped' or 'stop'<br/>''<br/>''<br/><br/>Prefer English| 
|Info/Thermostat Mode|''Off' or 'Stop' = OFF<br/>'<br/>Label displaying **** the name of an Action/Thermostat Mode command|
|Action/Thermostat Mode|Thermostat mode, can be multiple|
|Info/Outdoor Temperature Thermostat|Degrees Celsius|
|Info/Thermostat Room temperature|Degrees Celsius| 
|Info/Thermostat Setpoint|Value between Min and Max of the Action/Thermostat Setpoint| 
|Action/Thermostat Setpoint|Min & Max Mandatory| 
|Info/Thermostat Lock|0 = Not Locked<br/>1 = Locked| 
|Action/Thermostat Lock|Lock the thermostat|
|Action/Thermostat Unlock|Unlock the thermostat|

## 

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Portal status open<br/><br/>(same treatment)|0 = Closed<br/><br/><br/><br/><br/>(Based on z-wave equipment, could be either binary or labeled ?)|

 :

|Generic type  | Values / Action |
|---------------|----------------|
|Action/Gate or Garage toggle button|Switch opens when closed and closes when open<br/>Opening if blocked (for safety))| 

 :

|Generic type  | Values / Action |
|---------------|----------------|
|Action/Gate or garage opening button|Ouverture|
|Action/Gate or garage close button|Fermeture|

## Electricité

|Generic type  | Unit |
|---------------|----------------|
|Info/Electric Power|Watts| 
|Info/Electricity Consumption|KWh| 

## Divers

|Generic type  | Values / Unit |
|---------------|----------------|
|Info/Presence Occupation|0 = Nobody<br/>1 = Someone|
|Info/Air Quality (AQI Index)|AQI index|
|Info/Air Quality (Customizable Index)|ppb or µg/m3|
|Info/CO Detector|0 = normal CO<br/>1 = abnormal CO|
|Info/Brightness|0 → 100000 lux| 
|Info/Humidity|%|
|Info/CO2 (ppm)|PPM or binary ?|
|Info/Temperature|-50 → 300 °C| 
|Info/Battery|%| 
|Info/Battery charging|0 = NO<br/>1 = YES<br/>Not present = Not rechargeable| 
|Info/Low Battery|0 = NO<br/>1 = YES| 
|Info/Smoke Detection|0 = No smoke<br/>1 = Smoke detected| 
|Info/Flood<br/>Info/Water leak|0 = No leak detected<br/>1 = Leak detected| 
|Info/Sabotage|0 = No sabotage<br/>1 = Sabotage| 
|Info/Shock|0 = No shock<br/>1 = Shock| 
|Info/Pressure|bar|
|Info/Sound (dB)|dB|

## 

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Status Active|0 = inactive<br/>1 = active|
|Online Info/Connectivity|0 = offline<br/>1 = online|
|Info/Status Defective|0 = no<br/>1 = yes|
