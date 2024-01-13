# Changelog Z-Wave JS

>**IMPORTANT**
>
>If there is no information on the update, it means that it concerns only the update of documentation, translation or text.

# XX/01/2024

**Configuration Changes**

- Changing the configuration *MCOhome Mh7h* to use the properties

# 12/26/2023

**Improvements**

- Added an option to enable or disable the *Soft Reset*
- Switch to version *9.6.2* by ZwaveJsUI 

**Configuration Additions**

- Added config *HeatIt Z-TRM6* (properties : Temperature, ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Heat-Sensor Notification, Over-Load Notification)
- Added config *Sunricher Remote Control 12 Button* (properties : CentralScene x12, Battery)

# 11/12/2023

**Improvements**

- Switch to version *9.5.1* of ZwaveJsUI (to be able to choose a port in path format necessary on certain VMs you must update the core)

**Fixes**

- Fix include bug *S2* corrected on the ZwaveJS UI side following went up (in fact the callbacks were not done unless you had a window open on the ZwaveJS UI interface)

**Configuration Additions**

- Added config *Shelly Qubino Wave 1PM* (properties : Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added config *Shelly Qubino Wave 1* (properties : Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added config *Shelly Qubino Wave Shutter* (properties : Shutter, Power, Energy, Hands Notification, Over-Current Notification, Heat-Sensor Notification)
- Added config *Shelly Qubino Wave 2PM* (properties : Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added config *Shelly Qubino Wave 1* (properties : Switch, Hands Notification, Over-Current Notification, Heat-Sensor Notification)  *doubt whether to add Power and Energy (make a ticket if the device is supposed to report consumption but I don't think so)*
- Adding a property *Windows Covering*

**Configuration Changes**

- Changing the configuration *Benext Keypad* to use the properties (copy of Zipato but in benext version)
- Changing the configuration *MCOhome Mh8FC* to use the properties
- Changing the configuration *MCOhome Mh8FC-4* to use the properties
- Changing the configuration *Qubino ZMNKID - Flush OnOff Thermostat 2* to use the properties
- Changing the configuration *Widom Meta Wired Motor* to use the Windows Covering property
- Changing the configuration *Wenzhou TZ78* use of endpoint 0 in place of endpoint 1 (in accordance with feedback from users)
- Editing the image *MCOhome Mh8FC* (clipping)
- Editing the image *MCOhome Mh8FC-4* (clipping)

# 10/27/2023

**Configuration Additions**

- Adding a subproperty *notification-door* for property *Tilt*

**Configuration Changes**

- Changing the configuration *Aeotec Zwa012*  to use the properties
- Modification of a subproperty *simple-notification* for property *Opening*

**Improvements**

- Switch to version *9.1.2* by ZwaveJsUI

# 11/10/2023

**Fixes**

- Switch to version *8.26.0* from ZwaveJsUI temporarily

# 09/10/2023

**Fixes**

- Correction avoiding certain messages in the log *http.error* in certain special cases

**Improvements**

- Switch to version *9.1.0* by ZwaveJsUI
- Added an option to manage *notifications* in the message center *dead and alive nodes*
- Added an option to manage *notifications* in the message center *missed awakenings and return*

**Configuration Additions**

- Added config *Aeotec ZW187 Recessed Door* (properties : Opening Simple, Battery, Notification Software, Notification Power-Status)
- Added config *Thermofloor Heat It ZM Relay High Power* (properties : Switch, Power, Energy, Heat Sensor Notification, Over Load Notification, Centra Scene)
- Adding a subproperty *simple-notification* for property *Opening*


# 09/11/2023

**Fixes**

- Update fix *OTA* of a module firmware following a ZwaveJSUI change

**Improvements**

- Switch to version *8.25.1* by ZwaveJsUI.
- Added the possibility to make an update *OTW* a controller (if compatible)
- Added an option to manage *notifications* in the message center *dead and alive nodes*
- Added an option to manage *notifications* in the message center *missed awakenings and return*

**Configuration Additions**

- Added config *Shelly Qubino Wave 1PM* (properties : Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added config *Shelly Qubino Wave 1* (properties : Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Adding a subproperty *binary-water* for property *Flood*
- Adding a subproperty *onlevel-barrier* for property *Multilevel*

**Configuration Changes**

- Changing the configuration *MCOhome Mh8FC*  to use the properties
- Changing the configuration *NeoCoolCam WS02Z*  to use the properties
- Changing the configuration *Kaipule IM20*  to use the properties
- Changing the configuration *HRT4_SRT321* to better use the properties
- Changing the configuration *Benext Plug In Dimmer* to better use the properties
- Changing the configuration *Dome On Off Plug In Switch Plug In Dimmer* to better use the properties
- Changing the configuration *Domux Dx2skz* to better use the properties
- Changing the configuration *Swiid Plug* to better use the properties
- Changing the configuration *Everspring SM810* to better use the properties
- Changing the configuration *Zipato PD01z* to better use the properties
- Changing the configuration *Vision Security ZS5101* to better use the properties

# 02/08/2023

**Improvements**

- Switch to version *8.22.0* by ZwaveJsUI.
- Addition of all *tty* in the list of ports (this will be useless with the new core which will allow you to choose a port directly by the id)
- Added last route on a node's stats page (depends on controller SDK)
- Added last speed-baud rate on a node's stats page (depends on controller SDK)
- Added last speed-baud rate on global stats page (depends on controller SDK)
- Added last route on global stats page (depends on controller SDK)
- Added latest rssi on global stats page (depends on controller SDK)
- Added latest rssi on a node's stats page (depends on controller SDK)
- Addition of a graph *Network route* representing last routes taken (will scale and may not handle all cases depends on controller SDK)
- Addition of a message in the message center when a node goes Dead (in addition to the equipment status command)
- Addition of a message in the message center when a node goes Alive after being Dead (in addition to the equipment status command)
- Addition of a message in the message center when a node has not woken up after 4 times its wakeup interval


**Configuration Additions**

- Adding a property *ThermostatFanState*
- Adding a sub-command *Label State* to the Barrier Operator property (to have a label command with text in addition to the numeric command)
- Added config *MCOhome Mh8FC* (properties : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature)
- Added config *Heltun HE-FT01* (properties : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature, Illuminance, Humidity, Power, Energy)
- Added config *MCOhome MH3901* (properties : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatOperatingState, Temperature)
- Adding a sub-command *Label State* to the Thermostat Operating State property (to have a label command with text in addition to the numeric command)

**Configuration Changes**

- Changing the configuration *HRT4_SRT321* to use the properties
- Changing the configuration *SRT323* to use the properties
- Editing the image *HRT4_SRT321* (clipping)
- Editing the image *SRT323* (clipping)
- Editing the image *SSR303* (clipping)
- Editing the image *SIR321* (clipping)
- Editing the image *SES303* (clipping)
- Editing the image *SES302* (clipping)
- Editing the image *SCSC17* (clipping)

# 06/26/2023

**Improvements**

- Switch to version *8.19.0* by ZwaveJsUI.
- Modules *FLIRS* are no longer considered active at the mesh on the network graph

**Configuration Changes**

- Changing the configuration *Aeotec DSB04100 door window sensor* to use the properties
- Changing the configuration *Aeotec DSC10 Heavy Duty Switch* to use the properties
- Changing the configuration *Aeotec DSC06106 Smart Energy Switch* to use the properties
- Changing the configuration *Aeotec DSC11 Smart Strip* to use the properties
- Changing the configuration *Aeotec DSC08101 Smart Energy Illuminator* to use the properties
- Changing the configuration *Aeotec DSC014104 Blind Control* to use the properties
- Changing the configuration *Aeotec DSC17103 Micro Double Switch* to use the properties
- Changing the configuration *Aeotec DSC18103 Micro Switch 2nd* to use the properties
- Changing the configuration *Aeotec DSC26103 Micro Switch 2nd* to use the properties
- Changing the configuration *Aeotec DSC27103 Micro Dimmer 2nd* to use the properties
- Changing the configuration *Benext Panic Watch* to use the properties
- Changing the configuration *Benext Panic Button* to use the properties
- Changing the configuration *Benext Plug In Dimmer* to use the properties
- Changing the configuration *Dome On Off Plug In Switch Plug In Dimmer* to use the properties
- Changing the configuration *Domux Dx2skz* to use the properties
- Changing the configuration *Everspring AD142* to use the properties
- Changing the configuration *Everspring AN145* to use the properties
- Changing the configuration *Everspring EH403 Led FloodLight* to use the properties
- Changing the configuration *Heiman Dx2skz* to use the properties
- Changing the configuration *Philio Smart Dimmer E27* to use the properties
- Changing the configuration *Philio Pan03* to use the properties
- Changing the configuration *Popp Smart Plug* to use the properties
- Changing the configuration *Popp 009105* to use the properties
- Changing the configuration *Schlage On Wall* to use the properties
- Changing the configuration *Sigma Power Plug* to use the properties
- Changing the configuration *Swiid Plug* to use the properties

**Configuration Additions**

- Added config *Heat It ZM Dimmer* (properties : Multilevel, Power, Energy, CentralScene, Notification)
- Added config *Sigma PZ701U* (properties : Switch)
- Added config *Neo RC03Z* (properties : Central Scene, Battery)
- Adding a sub-property *Heat sensor* in the property *Notification*
- Added config *U-Fairy GR-201N* (properties : Switch)

# 04/10/2023

**Improvements**

- THE *refresh* can now go up to 100 seconds instead of 60
- Switch to version *8.13.1* by ZwaveJsUI.
- Changing the function *pollValue* for properties at *value* (thank you @superbricolo)

**Configuration Changes**

- Changing the configuration *Aeotec ZWA19 Water Sensor* to use the properties
- Changing the configuration *Aeotec ZWA24 7in1* to use the properties
- Changing the configuration *Everspring SM810* to use the properties
- Editing a property *Velocity*
- Editing the image *Dlink 510* (clipping)
- Editing the image *Fibaro Fgs-213* (clipping)

**Configuration Additions**

- Added config *Sigma PZ701U* (properties : Switch)
- Added config *Neo RC03Z* (properties : Central Scene, Battery)
- Adding a sub-property *Heat sensor* in the property *Notification*
- Added config *U-Fairy GR-201N* (properties : Switch)

# 02/14/2023

**Configuration Changes**

- Changing the configuration *Aeotec ZWA24 7in1* to use the properties
- Changing the configuration *Everspring SM810* to use the properties
- Changing the configuration *Aeotec ZW122* to use the properties
- Grouping of configurations *Danfoss Living Connect*
- Changing the configuration *Fibaro FGR-223* change of power and energy endpoints
- Changing the configuration *Fibaro FGR-223* addition of hardware and over-current notification
- Changing the configuration *Fibaro FGS213* switch to endpoint 1 (firmware >=3.3) and added heat sensor and over-current notification
- Editing the image *Aeotec ZWA24 7in1* (clipping)
- Editing a property *Velocity*
- Editing the image *Dlink 510* (clipping)
- Editing the image *Fibaro Fgs-213* (clipping)
- Editing the image *Fibaro Fgs-221* (clipping)
- Editing the image *Fibaro Fgs-223* (clipping)
- Editing the image *Fibaro Wall Plug* (clipping)
- Editing the image *Fibaro Wall Plug GEN5* (clipping)

**Configuration Additions**

- Adding a sub-property *Heat sensor* in the property *Notification*
- Added config *U-Fairy GR-201N* (properties : Switch)
- Added config *Danfoss Boiler Relay* (properties : Switch)
- Added config *Benext Alarm Sound* (properties : Switch)


# 24/12/2022

**Configuration Changes**

- Changing the configuration *Aeotec ZWA008 Door Sensor* to use the properties
- Changing the configuration *Qubino ZMNHLAX PWM Thermostat* to use the properties
- Changing the configuration *Qubino ZMNHDA2 Dimmer* to use the properties
- Changing the configuration *Fibaro FGR-223* modification of the endpoints of *refresh*
- Changing the configuration *Fibaro Fgrgbwm442* to use the properties
- Changing the configuration *Fibaro FGD212* added Notification properties
- Changing the configuration *Qubino ZMNHBA2 Flush 2 Relays* to use the properties
- Changing the configuration *Fibaro Walli Switch* added Notification properties
- Changing the configuration *Dlink Dchz110* to use the properties
- Changing the configuration *Domitech Smart Led Light* to use the properties
- Changing the configuration *Duwii Switch* to use the properties
- Changing the configuration *Everspring AN157* to use the properties
- Changing the configuration *Popp Smoke Sensor* to use the properties
- Changing the configuration *Duwii Edan 300* to use the properties
- Editing the image *Duwii Dimmer* (clipping)
- Editing the image *Aeotec ZWA008 Door Sensor* (clipping)
- Editing the image *Duwii Switch* (clipping)
- Editing the image *Duwii Edan 300* (clipping)
- Editing the image *Duwii Blind Control* (clipping)
- Editing the image *Duwii Remote* (clipping)
- Editing the image *Duwii Zs3500* (clipping)
- Editing the image *MCO Zipato p210 dimmer* (clipping)

**Configuration Additions**

- Adding a sub-property *Load error* in the property *Notification*
- Adding a sub-property *Fibaro-effects2* in the property *Color*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 22/12/2022

**Improvements**

- Addition of a complete engine *Refresh management*, useful for some modules that do not correctly report some changes after action. Not to be used without a valid reason. The configuration files will carry the elements if necessary
- Adding a tab *Options* on the equipment page. To view and configure Refreshes and possible future options
- Addition of the number of *Refresh* on the page *Health*

**Configuration Changes**

- Changing the configuration *Qubino Luxy Smart Light* to use the properties
- Changing the configuration *Popp Rain Meter* to use the properties
- Changing the configuration *Fibaro FGR-223* first configuration to use the refresh engine (indeed this module has a known bug, it does not go up the positions or in erroneous ways when a movement is initiated by the Z-Wave) to recover the refresh (go to reload command by choosing "without recreating orders") you should see the "refresh" in the options tab.
- Changing the configuration *Fibaro FGR-223* change of power and energy endpoints
- Changing the configuration *Fibaro FGR-223* addition of hardware and over-current notification
- Changing the configuration *Fibaro FGR-223* replace scene property with centralscene

**Configuration Additions**

- Added config *Qubino Luxy Smart Switch* (properties : Switch, Multilevel, Power, Energy, Color, Notification, NotificationEvent)
- Adding the picture *Qubino Luxy Smart Switch*
- Added config *Abus Security Center SHSG10000* (properties : Switch, Battery)
- Adding the picture *Abus Security Center SHSG10000*
- Adding a sub-property *Overall* in the property *Rain*
- Adding a sub-property *Basic* in the property *Rain*
- Adding a sub-property *Overload* in the property *Notification*
- Adding a property *Water consumption*
- Adding a property *Notificationevent*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 21/12/2022

**Improvements**

- Addition of the management of Nodes Notifications

**Configuration Changes**

- Changing the configuration *Aeotec Range Extender 6* to use the properties
- Changing the configuration *Zipato PD01z* to use the properties
- Changing the configuration *NeoCoolCam PD01zt* to use the properties
- Changing the configuration *NeoCoolCam PD01z* to use the properties
- Changing the configuration *Philio/Zipato Micromodule Energy Meter* to use the properties
- Changing the configuration *Fibaro FGS214* to use the properties
- Changing the configuration *Fibaro FGS213* switch to endpoint 0 (to be confirmed)
- Configuration rollback *Fibaro FGD212 firmware 3.5*
- Changing the configuration *Zipato Keypad* addition of property *NodeNotification*
- Changing the configuration *Schlage Keypad* addition of property *NodeNotification*
- Changing the configuration *Eurotronic Valve Spirit* to use the properties
- Grouping of configurations *Danfoss Living Connect*
- Changing the configuration *Danfoss Devolo Living Connect* to use the properties
- Changing the configuration *Danfoss Living Connect* to use the properties
- Changing the configuration *Danfoss Pop Radiator Thermostat* to use the properties
- Changing the configuration *Philio PSP05* to use the properties
- Changing the configuration *Zipato ZP3102* to use the properties
- Changing the configuration *Vision ZP3102* to use the properties
- Changing the configuration *Remotec ZXT-120* to use the properties
- Changing the configuration *Everspring Ad147* to use the properties
- Changing the configuration *Heatit ThermoFloor Ztemp2* to use the properties
- Editing the image *Horstmann Secure SRT321* (clipping)
- Editing the image *Remotec ZXT-120* (clipping)
- Editing the image *Fibaro FGS 224* (clipping)
- Editing the image *Fibaro FGS 213* (clipping)
- Editing the image *Fibaro Button* (clipping)

**Configuration Additions**

- Added config *Cherubini ORA ZRX* (properties : Shutter, Notification)
- Adding the picture *Cherubini ORA ZRX*
- Added config *Heiman HS2WD Siren* (properties : Switch, Battery)
- Adding the picture *Heiman HS2WD Siren*
- Adding a sub-property *Power status* in the property *Notification*
- Adding a property *NodeNotification*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 12/19/2022

**Fixes**

- Fix on some *missing attributes* on the health page on some nodes to avoid errors (without consequences) in the *http.error*

**Improvements**

- Passage of *ZwaveJS UI* to version *8.6.1*
- Addition of the *S2 management* (ZwaveJS UI having made the expected changes)
- Addition of *kind of security* on the page *node information*

**Configuration Changes**

- Changing the configuration *Heiman CO sensor* to use the properties
- Changing the configuration *Heiman Smoke detector* to use the properties
- Changing the configuration *Domux CO sensor* to use the properties
- Changing the configuration *Vision Security ZS5101* to use the properties
- Changing the configuration *HomeSeer Ez Motion* to use the properties
- Changing the configuration *Shenzhen Smoke Detector* to use the properties
- Changing the configuration *Vision Security ZD2102* to use the properties
- Editing the image *Vision Security ZD2102* (clipping)
- Changing the configuration *Aeotec Range Extender 7* to use the properties
- Changing the configuration *Zipato ZD2102* to use the properties
- Changing the configuration *Qubino Weather Station* to use the properties
- Changing the configuration *Everspring ST814* to use the properties
- Changing the configuration *Hank HKZW-SO08* to use the properties
- Changing the configuration *Hank HKZW-SO01* to use the properties
- Changing the configuration *Hank HKZW-SCN01* to use the properties
- Changing the configuration *Philio PAT02-B* to use the properties
- Editing the image *Philio PAT02-B* (clipping)
- Editing the image *Abuse SHWM1000*

**Configuration Additions**

- Added config *Zipato Energy Meter* (properties : Power, Energy, Voltage, Current)
- Added image for *Zipato Energy Meter*
- Added config *Airzone Aidoo Zwave* (properties : Temperature, Thermostatmode, Thermostatmodeaction, Thermostatfanmode, Thermostatfanmodeaction, Thermostatsetpoint, Notification)
- Added image for *Airzone Aidoo Zwave*
- Adding a property *Thermostatfanmode*
- Adding a property *Thermostatfanmodeaction*
- Adding a property *Direction*
- Adding a property *Velocity*
- Adding a property *Rain*
- Adding a property *Co*
- Adding a sub-property *Basic motion* in the property *Motion*
- Adding a sub-property *Dust-in-device* in the property *Notification*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 12/15/2022

**Improvements**

- Added the ability to display *explanatory assistants* on the page of certain equipment (Keypad Zipato for example to explain the operation of the codes)

**Configuration Changes**

- Changing the configuration *Aetoec Nanomote Quad* to use the properties
- Changing the configuration *Fibaro Fgs211* to use the properties
- Changing the configuration *Fibaro fgwreu111 Walli Shutter* passing a Shutter/level property and passing power and energy on endpoint 1
- Changing the configuration *Zipato Keypad* to use the properties
- Changing the configuration *Schlage Keypad* to use the properties

**Configuration Additions**

- Added config *Zooz ZEN17* (properties : Switch)
- Added image for *Zooz ZEN17*
- Added config *Abus Flood Sensor* (properties : Flood, Tamper, Battery)
- Added image for *Abus Flood Sensor*
- Adding a property *User Code*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 05/12/2022

**Improvements**

- Adding a tab *NVM management* on the network page. Backup, Download, Send and Restore
- Adding a tab *Update* on a node page.
- Addition of the version of *SDKs* on the information page of a controller or the modules raising it

**Configuration Changes**

- Changing the configuration *Cherubini Widom Smart Plug* to use the properties
- Changing the configuration *Qubino 3 Phase Meter* to use the properties
- Change of ownership *Power Factor* for option *production*

**Configuration Additions**

- Added config *Cherubini Widom Meta double switch* (properties : Switch, Central Scene)
- Added image for *Cherubini Widom Meta double switch*
- Added config *Cherubini Widom Meta wired motor CONTR.7* (properties : Shutter)
- Added image for *Cherubini Widom Meta wired motor CONTR.7*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 01/12/2022

**Improvements**

- Management *commands without units* while it should (in the zwaveJS return) so as not to pollute the log

**Configuration Changes**

- Changing the configuration *Qubino ZMNHNDX Flush 1D* to use the properties
- Changing the configuration *Fibaro FGSS101 Smoke* to use the properties
- Changing the configuration *Smarthome Everspring AN-179* to use the properties
- Changing the configuration *Aeotec ZWA009 AERQ* to use the properties
- Changing the configuration *Popp Outdoor Siren* to use the properties (partly)
- Changing the configuration *Aetoec ZWA080* to use the properties (in part) and add sound controls (volume and sound)
- Change of ownership *Heat* with class case management *ALARM SENSOR*
- Change of ownership *Smoke* with class case management *ALARM SENSOR*
- Change of ownership *Set point thermostat* to have the instructions with the widget *button* by default
- Editing the image *Popp Outdoor Siren* clipping

**Configuration Additions**

- Added config *Secure Hortsmann SRT321* (properties : ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Temperature, Battery)
- Added image for *Secure Hortsmann SRT321*
- Added config *Hoppe ConnectSense lock* (properties : Opening, Notification Sensor, Tilt, Battery)
- Added image for *Hoppe ConnectSense lock*
- Added parameters for *Hoppe ConnectSense lock*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 28/11/2022

**Fixes**

- Correction on *configuration parameters* in order to *to avoid sending 0 in the first place* during a list-type choice (on a parameter proposing it)

**Improvements**

- Addition of a *RELAUNCH* necessary of the engine *in case of failed exclusion*
- Display of the message concerning the *0 order* that in the case of a *initiated node*

**Configuration Changes**

- Changing the configuration *Aeotec TriSensor* to use the properties
- Changing the configuration *Hank HKZW-MS02* to use the properties
- Changing the configuration *Philio PSM02* to use the properties
- Changing the configuration *Everspring AN158* to use the properties
- Changing the configuration *Danfoss Room Sensor* to use the properties
- Changing the configuration *Vision ZS Shock and Vibration* to use the properties
- Changing the configuration *Fibaro Walli Controller* to use the properties
- Changing the configuration *Fibaro FGD211* to use the properties
- Changing the configuration *Fibaro Wall Plug UK* to use the properties
- Changing the configuration *Fibaro Walli Outlet F* to use the properties
- Changing the configuration *Fibaro Walli Dimmer* to use the properties
- Changing the configuration *Fibaro RGBW441* to use the property *fibaro effects*
- Change of ownership *Luminance* with addition of a mode in %
- Change of ownership *Set point thermostat* to have the instructions with the widget *button* by default
- Change of ownership *Color* with addition of a type *fibaro effects* (to stop describing the commands)
- Addition of a *recommended setting* for the *Philio PST02*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 25/11/2022

**Improvements**

- Addition of a *ZwaveJS UI version management*
- Addition of a message in the *message center* and on the plugin page when ZwaveJS UI *needs to be updated*
- Passage of the *ZwaveJS UI version* to version *8.5.1*

**Configuration Changes**

- Change settings for *Hank Smart Plug (HKZW-SO08)* (display issue)

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 23/11/2022

**Improvements**

- Addition of a visual for a *parameter or wakeup* pending
- Addition of a page allowing to see all the *settings* pending
- Addition of a webapp page allowing to see all the *settings* pending
- Addition of a delete button on the page *Pending*. Allows you to delete a line on hold. This does not delete the order that has been sent to the controller but only the information pending in Jeedom (useful for calibration parameters for example which never take the value sent or any other parameter where it would be useless)


**Configuration Changes**

- Changing the configuration *Popp Strike Lock* to use the opening property (for the contact)
- Changing the configuration *Fibaro FGD212* to add difference management from firmware 3.5 (endpoint 1 on firmware <= 3.4 endpoint 0 on target only otherwise)
- Change of ownership *Door Lock* to add Unlock (with timeout) on all devices using this property

**Configuration Additions**

- Added config *Hank Smart Plug (HKZW-SO08)* (properties : Switch, Power, Energy, Voltage, Current, Scene)
- Added config *Idinio foot dimmer* (properties : Multilevel, Power, Energy)
- Added parameters for *Hank Smart Plug (HKZW-SO08)*

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 21/11/2022

**Fixes**

- Change on the *graphic networks* : only the first direct routes will turn red when hovering over a node to avoid the error on certain installations and certain browsers *Max Stack Size Exceeded* related to recursions

**Improvements**

- To take in consideration *refreshNodeCC* as a property of a manually created command to refresh a CC
- Addition of a *horizontal scroll* on the network modal/tab *routing table* (thx @Salvialf)
- Displacement of *order counter* on the right side of the equipment page

**Configuration Changes**

- Changing the configuration *Fibaro FGR223* to use the power of the multilevel class
- Changing the configuration *Fibaro FGR222* to use the power of the multilevel class
- Changing the configuration *Fibaro FGRM222* to use the power of the multilevel class
- Changing the configuration *Devolo Mt02648* to use properties and add recommended settings
- Changing the configuration *Devolo Mt02647* to use properties and add recommended settings
- Changing the configuration *Popp Strike Lock* to use the properties
- Changing the configuration *Aeotec ZWA011* to use the properties and add its image

*If you are affected by a modification or addition of configuration, make a synchronization then reload the commands of the equipment by "recreating all the commands" after the update.*

# 11/18/2022

**Improvements**

- Added access to the ZwaveJS UI interface *(in the Z-Wave Network menu, Actions tab)*. Do not use it to change settings!
- Addition of a port for the particular case of some Raspberry Pi *(more will be added as needed)*
- Added a command counter for each equipment *(ignoring the 4 technical commands)*
- Added dynamic help in the case of zero commands.

# 11/15/2022

- Switch to stable version

# 04/05/2022

- Beta 1st phase
