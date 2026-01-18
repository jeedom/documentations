# Order value

This documentation compiles recommendations for command values (action or info) based on types. Following these steps is not mandatory, but for better integration with Jeedom it is strongly recommended.

## Light

|Generic type  | Values / Action |
|---------------|-------------|
|Info/Light Status|Brightness<br/>0-100 or 0-99 or 0-255<br/>(depending on the maximum Action/Light Slider)<br/>or Binary<br/>0 = Off<br/> other than 0 = On<br/>**Mandatory**| 
|Info/Light Brightness|Luminosité<br/>0-100 or 0-99 or 0-255<br/>(depending on the maximum Action/Light Slider)<br/>Always use with Light State on binary command|
|Action/Light Slider|Dimmer switch<br/>Minimum and Maximum Mandatory|
|Action/Light Button On|Light on (State change))|
|Action/Light Button Off|Turning off the light (State change))|
|Info/Color Light|Format #RRGGBB|
|Action/Light Color|Color modification, #RRGGBB format|
|Info/Light Temperature Color|Mired (<=500) or Kelvin (>500) format)|
|Action/Light Temperature Color|Color temperature modification<br/>Minimum and Maximum Mandatory|
|Action/Light Toggle|Invert the state if binary|
|Action/Light Mode|Preset/Scene light, can be multiple|

## Prise

|Generic type  | Values / Action |
|----------------|------------|
|Information/Outlet<br/>Etat|0 = Off<br/>1 = On|
|Action/Take<br/>On Button|Turn on the plug| 
|Action/Take<br/>Off Button|Turn off the power outlet|

## Interrupteurs

|Generic type  | Values / Action |
|----------------|------------|
|Info/Switch<br/>Etat|0 = Off<br/>1 = On|
|Action/Switch<br/>On Button|Turn on the switch| 
|Action/Switch<br/>Off Button|Turn off the switch|

## Ventilateur

|Generic type  | Values / Action |
|----------------|------------|
|Info/Fan<br/>Etat|0 = Off<br/>1 = On<br/>or gradation if speed|
|Action/Fan<br/>On Button|Allumer| 
|Action/Fan<br/>Off Button|Eteindre|
|Action/Fan<br/>Vitesse<br/>Rotation|Minimum/Maximum Required|

## Volet

|Generic type  | Values / Action |
|---------------|----------------|
|Information/Status Section|If Binary :<br/>0 = Closed<br/>1 = Open<br/>If Digital :<br/>min of the Slider Button (otherwise min of the State, otherwise 0) = Closed <br/>max of the Slider Button (otherwise max of the State, otherwise 100) = Open<br/>If there is no Silder button : Minimum and maximum minimum values are mandatory in the state !|
|Action/Shutter Button Up|Opening the shutter<br/>Launch the opening or set the maximum slider value or state or 100| 
|Action/Blank Button Down|Shutter closure<br/>Launch the closure or set the minimum slider value or state or 0|
|Action/Shutter Stop Button|Stop the shutter movement|
|Action/Blank Button Slider|Give the proportion of shutter opening<br/>If present:<br/>Minimum and maximum values are mandatory|

optional :

|Generic type  | Values / Action |
|---------------|----------------|
|Info/State Panel Horizontal Tilt|Angle 0->90° (via slider)|
|Action/Slider: Horizontal Tilt|Angle 0->90°<br/>modifiable via min-max of the slider|
|Information/State/Vertical Tilt Panel|Angle 0->90° (via slider)|
|Action/Slider Vertical Tilt|Angle 0->90°<br/>modifiable via min-max of the slider|

## Valves

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Tap<br/>Etat|0 = Off<br/>1 = On|
|Action/Tap<br/>On Button|Allumer| 
|Action/Tap<br/>Off Button|Eteindre|

|Generic type  | Values / Action |
|---------------|----------------|
|Information/Irrigation<br/>Etat|0 = Off<br/>1 = On|
|Action/Irrigation<br/>On Button|Allumer| 
|Action/Irrigation<br/>Off Button|Eteindre|

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Valve<br/>Generic<br/>Etat|0 = Off<br/>1 = On|
|Action/Valve<br/>Generic<br/>On Button|Allumer| 
|Action/Valve<br/>Generic<br/>Off Button|Eteindre|

add a dimmer ? and add digital technology to the action ? it exists ?

## Serrures

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Lock Status|0 = Not Secure (Not Locked))<br/>1 = Secure (Locked))|
|Action/Lock Button Open|Unlocking| 
|Action/Lock Button Close|Verrouillage| 

## Mouvement

|Generic type  | Values / Action |
|---------------|----------------|
|Information/Presence|0 = No movement<br/>1 = Movement|

## Opening 

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Door<br/>Info/Window<br/>(same treatment)|0 = Contact (Closed))<br/>1 = No contact (Open))| 

## Sirens

|Generic type  | Values / Action |
|---------------|----------------|
|State Information/Siren|0 = Doesn't ring<br/>1 = Ring|

## Alarme

|Generic type  | Values / Action |
|---------------|----------------|
|State Information/Alert|1 = Triggered<br/>(priority on activated and modes)|
|Info/Alarm status activated|0 = Disarmed<br/>(priority over modes)|
|Info/Alarm mode|Label displaying **Exactly** the name of an Action/Alarm Mode command|
|Action/Armed Alarm|Arm the alarm|
|Action/Alarm released|Disarm the alarm|
|Action/Alarm Mode|Alarm mode, can be multiple|

## Thermostats

|Generic type  | Values / Action |
|---------------|----------------|
|Info/Thermostat Status (BINARY))|0 = Off<br/>1 = On|
|Information/Thermostat Status (HUMAN))|'off' or 'stopped' or 'stop''<br/>'heat' or 'heating''<br/>'cool' or 'air conditioning''<br/><br/>Prefer English| 
|Info/Thermostat Mode|''Off' or 'Stop' = OFF<br/>''None' or 'Thermostat' = Setpoint Mode<br/>Label displaying **Exactly** the name of a command Action/Thermostat Mode|
|Action/Thermostat Mode|Thermostat mode, can be multiple|
|Outdoor Temperature Information/Thermostat|Degrees Celsius|
|Info/Thermostat Ambient Temperature|Degrees Celsius| 
|Information/Thermostat Instructions|Value between Min and Max of the Action/Thermostat Setpoint| 
|Action/Thermostat Setpoint|Minimum and maximum values are mandatory| 
|Info/Thermostat Lock|0 = Not Locked<br/>1 = Locked| 
|Action/Thermostat Lock|Lock the thermostat|
|Action/Thermostat Unlocking|Unlock the thermostat|

## Gates or Garages

|Generic type  | Values / Action |
|---------------|----------------|
|Information/Portal status open<br/>Info/Garage opening status<br/>(same treatment)|0 = Closed<br/>252 = Closure in progress<br/>253 = Stopped<br/>254 = Opening in progress<br/>255 = Open<br/>(Based on Z-Wave equipment, it could also be binary or labeled ?)|

with either :

|Generic type  | Values / Action |
|---------------|----------------|
|Action/Gate or garage button toggle|Switch opens when closed and closes when open<br/>Opens if blocked (for safety reasons))| 

or :

|Generic type  | Values / Action |
|---------------|----------------|
|Action/Gate or garage door open button|Ouverture|
|Action/Gate or garage door closing button|Fermeture|

## Electricité

|Generic type  | Unit |
|---------------|----------------|
|Electrical Power/Information|Watts| 
|Information/Electricity Consumption|KWh| 

## Divers

|Generic type  | Values / Unit |
|---------------|----------------|
|Information/Presence Occupancy|0 = Person<br/>1 = Someone|
|Air Quality Information (AQI Index))|AQI index|
|Air Quality Information (Customizable Index))|ppb or µg/m3|
|Info/CO Detector|0 = normal CO<br/>1 = abnormal CO|
|Info/Brightness|0 → 100000 lux| 
|Information/Humidity|%|
|Info/CO2 (ppm)|PPM or binary ?|
|Info/Temperature|-50 → 300 °C| 
|Info/Battery|%| 
|Battery charging info|0 = NO<br/>1 = YES<br/>Not present = Not rechargeable| 
|Info/Bass Drums|0 = NO<br/>1 = YES| 
|Smoke detection/information|0 = No smoke<br/>1 = Smoke detected| 
|Flood Information<br/>Information/Water Leak|0 = No leak detected<br/>1 = Leak detected| 
|Information/Sabotage|0 = No sabotage<br/>1 = Sabotage| 
|News/Shock|0 = No shock<br/>1 = Shock| 
|Info/Pressure|bar|
|Info/Sound (dB))|dB|

## Equipment status

|Generic type  | Values / Action |
|---------------|----------------|
|Active Info/Status|0 = inactive<br/>1 = active|
|Online Information/Connectivity|0 = offline<br/>1 = online|
|Info/Status: Defective|0 = no<br/>1 = yes|
