# Command Value

This documentation provides recommendations for command values (action or info) based on command types. While following these recommendations is not mandatory, doing so is strongly advised for better integration with Jeedom.

## Lighting

|Generic Type  | Values / Action |
|---------------|-------------|
|Info/Light Status|Brightness<br/>0–100, 0–99, or 0–255<br/>(based on the maximum Action/Light Slider setting)<br/>or Binary<br/>0 = Off<br/> non-zero = On<br/>**Required**|
|Info/Lighting Brightness|Brightness<br/>0–100, 0–99, or 0–255<br/>(based on the maximum Action/Light Slider setting)<br/>Always use with "Light Status" on the binary command|
|Action/Light Slider|Dimmer<br/>Min&Max Required|
|Action/Light On Button|Turn on the light (Change state)|
|Action/Light Off Button|Turn off the light (Change state)|
|Info/Color Light|Format #RRGGBB|
|Action/Color Light|Change Color, Format #RRGGBB|
|Info/Light, Temperature, Color|Mired Format (<=500) ou Kelvin (>500)|
|Action/Light, Temperature, Color|Changing the color temperature<br/>Min&Max Required|
|Action/Light Toggle|Invert state if binary|
|Action/Lighting Mode|Preset/Lighting Scene (can be multiple)|

## Outlet

|Generic Type  | Values / Action |
|----------------|------------|
|Info/Outlet<br/>Status|0 = Off<br/>1 = On|
|Action/Outlet<br/>On Button | Turn on the outlet |
|Action/Outlet<br/>Off Button | Turn Off the Outlet |

## Switches

|Generic Type  | Values / Action |
|----------------|------------|
|Info/Switch<br/>Status|0 = Off<br/>1 = On|
|Action/Switch<br/>On Button | Turn on the switch |
|Action/Switch<br/>Off Button | Turn Off the Switch |

## Fan

|Generic Type  | Values / Action |
|----------------|------------|
|Info/Fan<br/>Status|0 = Off<br/>1 = On<br/>or dimming if speed|
|Action/Fan<br/>On Button | Turn On |
|Action/Fan<br/>Off Button|Turn Off|
|Action/Fan<br/>Speed<br/>Rotation|Min Max Required|

## Shutter

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Shutter Status|If Binary:<br/>0 = Closed<br/>1 = Open<br/>Si Numérique:<br/>min from the Slider button (otherwise min from the State, otherwise 0) = Closed <br/>Slider Button max (else State max, else 100) = Open<br/>If there is no slider button: Min and Max are required in the State!|
|Action/Shutter Button: Raise|Open the shutter<br/>Trigger opening, or set slider value to maximum, or state, or 100|
|Action/Shutter Button: Lower|Close the shutter<br/>Initiate closing, or set the slider to its minimum value, or set the status to 0|
|Action/Shutter Stop Button|Stop shutter movement|
|Action/Shutter Slider Button|Returns the shutter's opening percentage<br/>If present:<br/>Min and Max are required|

optional:

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Shutter Status & Horizontal Angle|Angle 0–90° (via slider)|
|Action/Shutter Slider—Horizontal Tilt|Angle 0–90°<br/>adjustable using the slider's min-max values|
|Info/Shutter Status: Vertical Angle|Angle 0–90° (via slider)|
|Action/Shutter Slider Vertical Tilt|Angle 0–90°<br/>adjustable using the slider's min-max values|

## Valves

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Faucet<br/>Status|0 = Off<br/>1 = On|
|Action/Faucet<br/>On Button | Turn On |
|Action/Faucet<br/>Off Button|Turn Off|

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Irrigation<br/>Status|0 = Off<br/>1 = On|
|Action/Irrigation<br/>On Button | Turn On |
|Action/Irrigation<br/>Off Button|Turn Off|

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Valve<br/>General<br/>Status|0 = Off<br/>1 = On|
|Action/Valve<br/>General<br/>On Button | Turn On |
|Action/Valve<br/>General<br/>Off Button|Turn Off|

Add a dimmer? And add digital control to the action? Is that even possible?

## Locks

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Lock Status|0 = Unsecured (Unlocked)<br/>1 = Secure (Locked)|
|Action/Lock Open Button|Unlock|
|Action/Lock Button|Lock|

## Motion

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Presence|0 = No movement<br/>1 = Motion|

## Home

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Port<br/>Info/Window<br/>(same processing)|0 = Contact (Closed)<br/>1 = No contact (Open)|

## Alarms

|Generic Type  | Values / Action |
|---------------|----------------|
|Status Info/Siren|0 = Not sounding<br/>1 = Ring|

## Alarm

|Generic Type  | Values / Action |
|---------------|----------------|
|Status Info/Alarm|1 = Triggered<br/>(takes precedence over "On" and modes)|
|Status Info/Alarm Enabled|0 = Disarmed<br/>(takes precedence over modes)|
|Info/Alarm Mode|Label displaying **exactly** the name of an Action/Alarm Mode command|
|Action/Alarm Armed|Arms the alarm|
|Action/Alarm triggered|Disarm the alarm|
|Action/Alarm Mode|Alarm mode; can be multiple|

## Thermostats

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Thermostat Status (BINARY)|0 = Off<br/>1 = On|
|Info/Thermostat Status (HUMAN)|'off' or 'stopped' or 'off'<br/>"heat" or "heating"<br/>"cooling" or "air conditioning"<br/><br/>Prefer English|
|Info/Thermostat Mode|'Off' or 'Arret' = OFF<br/>'None' or 'Thermostat' = Setpoint Mode<br/>Label displaying **exactly** the name of an Action/Thermostat mode command|
|Action/Thermostat Mode|Thermostat mode; may be multiple|
|Info/Outdoor Temperature Thermostat|Degrees Celsius|
|Info/Thermostat Room Temperature|Degrees Celsius|
|Info/Setpoint Thermostat|Value between Min and Max of the Action/Setpoint Thermostat|
|Action/Setpoint Thermostat|Required Min & Max|
|Info/Thermostat Lock|0 = Unlocked<br/>1 = Locked|
|Action/Thermostat Lock|Lock the thermostat|
|Action/Thermostat Unlock|Unlock the thermostat|

## Gates or Garages

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Door-Opening Status Portal<br/>Info/Garage door status<br/>(same handling)|0 = Closed<br/>252 = Locking in progress<br/>253 = Stopped<br/>254 = Opening in progress<br/>255 = Open<br/>(Based on Z-Wave equipment; could this also be binary or labeled?)|

with either:

|Generic Type  | Values / Action |
|---------------|----------------|
|Action/Portal or garage toggle button|Switch that turns on when closed and turns off when open<br/>Opens if locked (for security)|

or:

|Generic Type  | Values / Action |
|---------------|----------------|
|Action/Portal or garage door opener button|Open|
|Action/Portal or garage door close button|Close|

## Electrical

|Generic Type  | Unit |
|---------------|----------------|
|Info/Electrical Power|Watts|
|Info/Electricity Consumption|kWh|

## Miscellaneous

|Generic Type  | Values / Unit |
|---------------|----------------|
|Info/Occupancy|0 = No one<br/>1 = Someone|
|Info/Air Quality (AQI)|AQI|
|Info/Air Quality (Customizable Index)|ppb or µg/m³|
|Info/CO Detector|0 = CO levels are normal<br/>1 = Abnormal CO |
|Info/Brightness|0 → 100,000 lux|
|Info/Humidity|%|
|Info/CO2 (ppm)|PPM or binary?|
|Info/Temperature|-50 → 300 °C|
|Info/Battery|%|
|Info/Battery Charging|0 = NO<br/>1 = YES<br/>Not listed = Not rechargeable|
|Info/Low Battery|0 = NO<br/>1 = YES|
|Info/Smoke Detection|0 = No smoke<br/>1 = Smoke detected|
|Info/Flooding<br/>Info/Water Leak|0 = No leak detected<br/>1 = Leak detected|
|Info/Tampering|0 = No tampering<br/>1 = Tamper|
|Info/Shock|0 = No shock<br/>1 = Shock|
|Info/Pressure|bar|
|Info/Sound (dB)|dB|

## Device Status

|Generic Type  | Values / Action |
|---------------|----------------|
|Info/Status Active|0 = inactive<br/>1 = active|
|Info/Online Connectivity|0 = offline<br/>1 = online|
|Info/Status: Defective|0 = no<br/>1 = yes|
