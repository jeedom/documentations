# Z-Wave JS Changelog

>**IMPORTANT**
>
>If there is no information about the update, it means that the update only involves documentation, translations, or text.

# 21/10/2026

**Configuration Additions**

- Added the *Neo Coolcam Light Switch 2 Channel (EU-2)* configuration (properties: Switch x2)

**Configuration Changes**

- Configuration fix for the *Kaipule PIR Ceiling Sensor* (Z-Wave JS "Motion" and "Tamper" properties instead of the old OpenZWave syntax)
- Fixing the *Nice IBT4ZWAVE* configuration (invalid file not loaded, Portal type)

# 06/09/2026

- Upgrade to version *11.21.1* of ZwaveJsUI (stable)
- Upgrade to version *11.23.0* of ZwaveJsUI (beta)
- Fixed the display of group names

**Configuration Additions**

- Adding the *Home Assistant Connect ZWA-2* controller configuration
- Added the *NeoCoolCam NAS-DS01Z v2* configuration (properties: Opening, Battery)
- Added the *NeoCoolCam NAS-PD07Z* configuration (properties: Motion, Luminance, Temperature, Humidity, Tamper, Battery)
- Added the *Philio PSE04* configuration (properties: Temperature, Battery, Tamper, Sound)
- Added the *Shelly Qubino Wave Dimmer* configuration (properties: Multilevel, Power, Energy, Heat Sensor Notification, Over-Current Notification, Mains Notification)
- Added *Shelly Qubino Wave H&T* configuration (properties: Temperature, Humidity, Battery)
- Added the *Shelly Qubino Wave Motion* configuration (properties: Motion, Luminance, Battery)
- Added *Heatit Z-Water2* configuration (9 potential-free relays and 2 NTC temperature sensor inputs)
- Added the *Zooz ZEN37 800LR Wall Remote* configuration (properties: Central Scene x4, Battery)

**Configuration Changes**

- Fibaro FGCD001 Configuration Fix (Firmware 4098 Added)
- Modifying the *Shelly Qubino Wave Door/Window (QNDW-002C)* configuration (adding the Tilt command)
- Fixed the *Shelly Qubino Wave Shutter* configuration (added productId 131)
- Changing the *Heatit Z-TEMP3* configuration (adding *Energy Heat* mode to the thermostat mode)

# 17/07/2026

- Upgrade to version *11.19.0* of ZwaveJsUI (stable)
- Upgrade to version *11.21.1* of ZwaveJsUI (beta)

# 01/06/2026

- Upgrade to version *11.15.1* of ZwaveJsUI (stable)
- Upgrade to version *11.19.0* of ZwaveJsUI (beta)

# 31/03/2026

- Upgrade to version *11.12.0* of ZwaveJsUI (stable)
- Upgrade to version *11.15.1* of ZwaveJsUI (beta)

# 16/03/2026

- Automatic plugin configuration on official boxes *(Jeedom 4.5.3 mini)*

# 09/03/2026

**Configuration Additions**

- Added configuration for *Shelly Qubino Wave Door/Window (QNDW-002C)* (properties: Opening, Luminance, Direction, Battery)
- Added configuration for *Shelly Qubino Wave Plug (QNPL-0A112)* (properties: Switch, Power, Energy)
- Added configuration for the *Zooz ZEN58 Low Voltage XS Relay* (properties: Switch, Power, Energy, Voltage, Current)

**Configuration Changes**

- Fixing the *Aeotec ZWA001* configuration (default value for the color temperature setting)

# 02/03/2026

- Minor correction on the *Statistics* page

# 24/02/2026

- Support for custom device images *(Jeedom 4.5 mini)*
- Added missing translations for messages arriving in the notification center

# 21/02/2026

- Update to version *11.12.0* of ZwaveJsUI (beta) *(fixes false "Dead" alerts)*

# 11/02/2026

- Upgrade to version *11.6.1* of ZwaveJsUI (stable)
- Upgrade to version *11.11.0* of ZwaveJsUI (beta)
- Added an option to the plugin's configuration page to set up a remote controller port via a TCP socket (useful for controllers such as the SLZB-MR1U)

# 04/11/2025

- Upgrade to version *11.2.1* of ZwaveJsUI (stable)
- Upgrade to version *11.6.1* of ZwaveJsUI (beta)

# 16/09/2025

- Upgrade to version *10.5.1* of ZwaveJsUI (stable)
- Upgrade to version *11.2.1* of ZwaveJsUI (beta)

# 24/06/2025

- Fixed a bug that occurred in PHP 8 when creating missing commands.

# 10/06/2025

- Configuration Update *Mco Home MH-S412 Dual*

# 05/06/2025

**Improvements**

- Adding the integration procedure

**Configuration Additions**

- Added the *Shelly Qubino WAVE_PM_MINI - WAVE PM Mini - Relay* configuration (properties: Power, Energy, Over-Current Notification, Over-Voltage Notification, Heat-Sensor Notification, Alarm-Level Notification, Mains Notification, Indicator)
- Added the *Zooz ZAC38 - ZAC38 - Range Extender* configuration (properties: Switch, Alarm-Level Notification, Mains Notification, Indicator, Battery)

# 04/06/2025

**Configuration Additions**

- Added the *Mco Home MH-S411 Simple* configuration (properties: Switch, Scene, Central Scene)
- Added the *Remotec ZXT-800* configuration (properties: Air temperature, Thermostat mode, Thermostat operating state, Thermostat setpoint, Thermostat fan mode, Indicator)
- Added the *Shelly Qubino Wave 1PM Mini QMSW-0A1P8* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification, Alarm-Level Notification)
- Added the *Shelly Qubino Wave 1 Mini QMSW-0A1X8* configuration (properties: Switch, Mains Notification, Heat-Sensor Notification, Alarm-Level Notification)
- Added the *Heatit Thermostat Z-TEMP3* configuration (properties: Air temperature, Humidity, Thermostatmode, Thermostatoperatingstate, Thermostatsetpoint, Battery, Indicator)
- Added the *Zooz ZEN15 - Power Switch* configuration (properties: Switch, Alarm-Level Notification, Power-Status Notification, Scene, Indicator, Voltage, Power, Energy, Current)
- Added the *Zooz ZEN54_LR - 0-10V Dimmer* configuration (properties: Multilevel, Indicator)
- Added the *Zooz ZES11 - ZSE 11 - Q SENSOR* configuration (properties: Motion, Temperature, Luminance, Humidity, Battery, Notification Alarm Level, Notification Power Status, Notification Motion, Notification Battery Maintenance, Indicator)
- Added the *Zooz ZES18 - ZSE 18 - MOTION SENSOR* configuration (properties: Motion, Battery, Notification Alarm Level, Notification Power Status, Notification Motion, Notification Magnetic, Indicator)

# 15/11/2024

- Upgrade to version *9.26.0* of ZwaveJsUI
- Fixed dependency installation method

# 10/11/2024

- Support for mqtts protocol

# 27/09/2024

- Changes to minimum requirements: Core 4.4 and Debian 11 OS

# 26/09/2024

**Improvements**

- Upgrade to version *9.20.0* of ZwaveJsUI
- Code cleaning

**Configuration Additions**

- Added the *Neo Signal Repeater +* configuration (properties: Temperature, Humidity)
- Added the *Fibaro FGR224* configuration (properties: Switch, Power, Energy, Over-Current Notification, Over-Voltage Notification)

**Configuration Changes**

- Modifying the *Fibaro Fgrgbwm442* configuration to use properties
- Configuration changes for the *Fibaro FGD212* to improve notification settings

# 20/05/2024

**Improvements**

- Upgrade to version *9.12.0* of ZwaveJsUI
- Addition and management of the two new S2 Long Range security keys

**Configuration Additions**

- Added the *Neo Signal Repeater* configuration (properties: Temperature, Humidity)
- Added *Shelly Qubino Wave 1* configuration (properties: Switch, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added the *Shelly Qubino Wave 1 PM* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added the *Shelly Qubino Wave Pro 1* configuration (properties: Switch, Mains Notification, Heat-Sensor Notification)
- Added the *Shelly Qubino Wave Pro 1 PM* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Over-Voltage Notification, Heat-Sensor Notification)
- Added the *Shelly Qubino Wave 2 PM* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added the *Shelly Qubino Wave Pro 2* configuration (properties: Switch)
- Added the *Shelly Qubino Wave Pro 2 PM* configuration (properties: Switch, Power, Energy, Over-Current Notification, Over-Voltage Notification)
- Added the *Shelly Qubino Wave I4* configuration (properties: Central Scene)
- Added the *Shelly Qubino Wave Shutter* configuration (properties: Shutter, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added a subproperty *notification-overvoltage* for the *Notification* property

**Configuration Changes**

- Modifying the *Neo Plug* configuration to use the properties (*Note: Some models attempt to enter S2 mode even though the manufacturer does not provide a DSK; to prevent this, select "unsecured" instead of "automatic" mode*)

# 27/02/2024

**Improvements**

- Addition of an additionalDependancyCheck function for the core

**Configuration Changes**

- Modifying the *MCOhome Mh7h* configuration to use properties

# 26/12/2023

**Improvements**

- Added an option to enable or disable the *Soft Reset*
- Upgrade to version *9.6.2* of ZwaveJsUI

**Configuration Additions**

- Added the *HeatIt Z-TRM6* configuration (properties: Temperature, ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Heat-Sensor Notification, Overload Notification)
- Added the *Sunricher Remote Control 12 Button* configuration (properties: CentralScene x12, Battery)

# 11/12/2023

**Improvements**

- Upgrade to version *9.5.1* of ZwaveJsUI (to be able to select a port in the path format required on certain VMs, you must update the core)

**Corrections**

- Fixed the *S2* inclusion bug on the ZwaveJS UI side following a report (in fact, callbacks were not triggered unless a window was open on the ZwaveJS UI interface)

**Configuration Additions**

- Added the *Shelly Qubino Wave 1PM* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added *Shelly Qubino Wave 1* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added the *Shelly Qubino Wave Shutter* configuration (properties: Shutter, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added the *Shelly Qubino Wave 2PM* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added the *Shelly Qubino Wave 1* configuration (properties: Switch, Mains Notification, Over-Current Notification, Heat-Sensor Notification)  *Not sure if I should add Power and Energy (I’ll open a ticket if the device is supposed to report consumption, but I don’t think so)*
- Adding a *WindowsCovering* property

**Configuration Changes**

- Modifying the *Benext Keypad* configuration to use the properties (based on Zipato but in the Benext version)
- Modifying the *MCOhome Mh8FC* configuration to use properties
- Modifying the *MCOhome Mh8FC-4* configuration to use properties
- Modifying the configuration of *Qubino ZMNKID - Flush OnOff Thermostat 2* to use the properties
- Modifying the *Widom Meta Wired Motor* configuration to use the Windows Covering property
- Configuration change for *Wenzhou TZ78*: use endpoint 0 instead of endpoint 1 (based on user feedback)
- Image editing *MCOhome Mh8FC* (cropping)
- Image editing *MCOhome Mh8FC-4* (cropping)

# 27/10/2023

**Configuration Additions**

- Added a *notification-door* subproperty for the *Tilt* property

**Configuration Changes**

- Modifying the *Aeotec Zwa012* configuration to use the properties
- Modifying a subproperty *notification-simple* for the property *Opening*

**Improvements**

- Upgrade to version *9.1.2* of ZwaveJsUI

# 11/10/2023

**Corrections**

- Temporary upgrade to version *8.26.0* of ZwaveJsUI

# 09/10/2023

**Corrections**

- Fix to prevent certain messages from appearing in the *http.error* log in specific cases

**Improvements**

- Upgrade to version *9.1.0* of ZwaveJsUI
- Added an option to manage *notifications* in the message center *for both active and inactive nodes*
- Added an option to manage *notifications* in the message center *for missed alarms and callbacks*

**Configuration Additions**

- Added the *Aeotec ZW187 Recessed Door* configuration (properties: Simple Opening, Battery, Software Notification, Power-Status Notification)
- Added the *Thermofloor Heat It ZM Relay High Power* configuration (properties: Switch, Power, Energy, Heat Sensor Notification, Overload Notification, Centra Scene)
- Added a *notification-simple* subproperty for the *Opening* property

# 11/09/2023

**Corrections**

- Fix for the *OTA* firmware update of a module following a change in ZwaveJSUI

**Improvements**

- Upgrade to version *8.25.1* of ZwaveJsUI.
- Added the ability to perform an *OTW* update on a controller (if compatible)
- Added an option to manage *notifications* in the message center *for both active and inactive nodes*
- Added an option to manage *notifications* in the message center *for missed alarms and callbacks*

**Configuration Additions**

- Added the *Shelly Qubino Wave 1PM* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added *Shelly Qubino Wave 1* configuration (properties: Switch, Power, Energy, Mains Notification, Over-Current Notification, Heat-Sensor Notification)
- Added a *binary-water* subproperty for the *Flood* property
- Added a *onlevel-barrier* subproperty for the *Multilevel* property

**Configuration Changes**

- Modifying the *MCOhome Mh8FC* configuration to use properties
- Modifying the *NeoCoolCam WS02Z* configuration to use the properties
- Modifying the *Kaipule IM20* configuration to use the properties
- Modification of the *HRT4_SRT321* configuration to make better use of properties
- Modifying the *Benext Plug In Dimmer* configuration to make better use of its features
- Modifying the *Dome On Off Plug In Switch Plug In Dimmer* configuration to make better use of its features
- Modifying the *Domux Dx2skz* configuration to make better use of its features
- Modifying the *Swiid Plug* configuration to make better use of its features
- Modifying the *Everspring SM810* configuration to make better use of its features
- Modifying the *Zipato PD01z* configuration to make better use of its features
- Modifying the *Vision Security ZS5101* configuration to make better use of its features

# 02/08/2023

**Improvements**

- Upgrade to version *8.22.0* of ZwaveJsUI.
- Add all *tty* entries to the list of ports (this will be unnecessary with the new core, which will allow you to select a port directly by its ID)
- Add the latest route to a node's statistics page (depends on the controller's SDK)
- Added the latest baud rate to a node's statistics page (depends on the controller's SDK)
- Added the latest baud rate to the overall statistics page (depends on the controller's SDK)
- Added the latest route to the overall statistics page (depends on the controller's SDK)
- Added the latest RSSI to the global statistics page (depends on the controller's SDK)
- Add the latest RSSI to a node's statistics page (depends on the controller's SDK)
- Added a *Network Route* graph showing the most recent routes taken (this feature is a work in progress and may not handle all scenarios, depending on the controller's SDK)
- Add a message to the message center when a node goes "Dead" (in addition to the device status command)
- Add a message to the message center when a node goes "Alive" after being "Dead" (in addition to the device status command)
- Addition of a message in the message center when a node has not woken up after 4 times its wakeup interval

**Configuration Additions**

- Adding a *ThermostatFanState* property
- Add a *Label State* sub-control to the Barrier Operator property (to provide a label command with text in addition to the numeric command)
- Added the *MCOhome Mh8FC* configuration (properties: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature)
- Added the *Heltun HE-FT01* configuration (properties: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature, Illuminance, Humidity, Power, Energy)
- Added the *MCOhome MH3901* configuration (properties: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatOperatingState, Temperature)
- Add a *Label State* sub-command to the Thermostat Operating State property (to provide a label command with text in addition to the numeric command)

**Configuration Changes**

- Modifying the *HRT4_SRT321* configuration to use properties
- Modifying the *SRT323* configuration to use properties
- Editing the *HRT4_SRT321* image (cropping)
- Editing the *SRT323* image (cropping)
- Editing the *SSR303* image (cropping)
- Editing the *SIR321* image (cropping)
- Editing the *SES303* image (cropping)
- Editing the *SES302* image (cropping)
- Editing the *SCSC17* image (cropping)

# 26/06/2023

**Improvements**

- Upgrade to version *8.19.0* of ZwaveJsUI.
- *FLIRS* modules are no longer considered active in the network mesh

**Configuration Changes**

- Modifying the configuration of the *Aeotec DSB04100 door/window sensor* to use its features
- Modifying the configuration of the *Aeotec DSC10 Heavy Duty Switch* to use its features
- Modifying the configuration of the *Aeotec DSC06106 Smart Energy Switch* to use its features
- Modifying the *Aeotec DSC11 Smart Strip* configuration to use the properties
- Modifying the configuration of the *Aeotec DSC08101 Smart Energy Illuminator* to use its features
- Modifying the configuration of the *Aeotec DSC014104 Blind Control* to use the properties
- Modifying the configuration of the *Aeotec DSC17103 Micro Double Switch* to use its features
- Modifying the configuration of the *Aeotec DSC18103 Micro Switch 2nd* to use its features
- Modifying the configuration of the *Aeotec DSC26103 Micro Switch 2nd* to use its features
- Modifying the configuration of the *Aeotec DSC27103 Micro Dimmer 2nd* to use the properties
- Modifying the *Benext Panic Watch* configuration to use the properties
- Modifying the *Benext Panic Button* configuration to use the properties
- Modifying the *Benext Plug In Dimmer* configuration to use the properties
- Modifying the *Dome On Off Plug In Switch Plug In Dimmer* configuration to use the properties
- Modifying the *Domux Dx2skz* configuration to use properties
- Modifying the *Everspring AD142* configuration to use properties
- Modifying the *Everspring AN145* configuration to use properties
- Modifying the configuration of the *Everspring EH403 LED FloodLight* to use the properties
- Modifying the *Heiman Dx2skz* configuration to use properties
- Modifying the *Philio Smart Dimmer E27* configuration to use the features
- Modifying the *Philio Pan03* configuration to use properties
- Modifying the *Popp Smart Plug* configuration to use the properties
- Modifying the *Popp 009105* configuration to use properties
- Modifying the *Schlage On Wall* configuration to use the properties
- Modifying the *Sigma Power Plug* configuration to use the properties
- Modifying the *Swiid Plug* configuration to use the properties

**Configuration Additions**

- Added the *Heat It ZM Dimmer* configuration (properties: Multilevel, Power, Energy, CentralScene, Notification)
- Added the *Sigma PZ701U* configuration (properties: Switch)
- Added the *Neo RC03Z* configuration (properties: Central Scene, Battery)
- Add a *Heat-Sensor* subproperty to the *Notification* property
- Added the *U-Fairy GR-201N* configuration (properties: Switch)

# 10/04/2023

**Improvements**

- *Refresh* intervals can now be up to 100 seconds instead of 60
- Upgrade to version *8.13.1* of ZwaveJsUI.
- Modification of the *pollValue* function for properties with *value* (thanks @superbricolo)

**Configuration Changes**

- Modifying the configuration of the *Aeotec ZWA19 Water Sensor* to use its features
- Modifying the *Aeotec ZWA24 7-in-1* configuration to use properties
- Modifying the *Everspring SM810* configuration to use properties
- Modifying a *Velocity* property
- Editing the *Dlink 510* image (cropping)
- Image editing *Fibaro Fgs-213* (cropping)

**Configuration Additions**

- Added the *Sigma PZ701U* configuration (properties: Switch)
- Added the *Neo RC03Z* configuration (properties: Central Scene, Battery)
- Add a *Heat-Sensor* subproperty to the *Notification* property
- Added the *U-Fairy GR-201N* configuration (properties: Switch)

# 14/02/2023

**Configuration Changes**

- Modifying the *Aeotec ZWA24 7-in-1* configuration to use properties
- Modifying the *Everspring SM810* configuration to use properties
- Modifying the *Aeotec ZW122* configuration to use properties
- Grouping *Danfoss Living Connect* configurations
- Modifying the *Fibaro FGR-223* configuration: changing the power and energy endpoints
- Modifying the *Fibaro FGR-223* configuration: adding hardware and over-current notifications
- Configuration changes for the *Fibaro FGS213*: switching to endpoint 1 (firmware >=3.3) and adding heat sensor and over-current notifications
- Editing the *Aeotec ZWA24 7-in-1* image (cropping)
- Modifying a *Velocity* property
- Editing the *Dlink 510* image (cropping)
- Image editing *Fibaro Fgs-213* (cropping)
- Image modification *Fibaro Fgs-221* (cropping)
- Editing the *Fibaro Fgs-223* image (cropping)
- Editing the *Fibaro Wall Plug* image (cropping)
- Image modification: *Fibaro Wall Plug GEN5* (cropping)

**Configuration Additions**

- Add a *Heat-Sensor* subproperty to the *Notification* property
- Added the *U-Fairy GR-201N* configuration (properties: Switch)
- Added the *Danfoss Boiler Relay* configuration (properties: Switch)
- Added the *Benext Alarm Sound* configuration (properties: Switch)

# 24/12/2022

**Configuration Changes**

- Modifying the configuration of the *Aeotec ZWA008 Door Sensor* to use its features
- Modifying the configuration of the *Qubino ZMNHLAX PWM Thermostat* to use the properties
- Modifying the *Qubino ZMNHDA2 Dimmer* configuration to use the properties
- Changing the *Fibaro FGR-223* configuration: modifying the *refresh* endpoints
- Modifying the *Fibaro Fgrgbwm442* configuration to use properties
- Modifying the *Fibaro FGD212* configuration: adding Notification properties
- Modifying the *Qubino ZMNHBA2 Flush 2 Relays* configuration to use the properties
- Modifying the *Fibaro Walli Switch* configuration—adding Notification properties
- Modifying the *Dlink Dchz110* configuration to use the properties
- Modifying the *Domitech Smart LED Light* configuration to use the features
- Modifying the *Duwii Switch* configuration to use the properties
- Modifying the *Everspring AN157* configuration to use properties
- Modifying the *Popp Smoke Sensor* configuration to use the properties
- Modifying the *Duwii Edan 300* configuration to use the properties
- Editing the *Duwii Dimmer* image (cropping)
- Image editing for *Aeotec ZWA008 Door Sensor* (cropping)
- Editing the *Duwii Switch* image (cropping)
- Image editing: *Duwii Edan 300* (cropping)
- Editing the *Duwii Blind Control* image (cropping)
- Editing the *Duwii Remote* image (cropping)
- Editing the *Duwii Zs3500* image (cropping)
- Editing the image *MCO Zipato p210 dimmer* (cropping)

**Configuration Additions**

- Added a *Load-error* subproperty to the *Notification* property
- Add a subproperty *Fibaro-effects2* to the *Color* property

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 22/12/2022

**Improvements**

- Added a comprehensive *Refresh Management* engine, useful for certain modules that do not correctly reflect certain changes after an action. Do not use without a valid reason. The configuration files will port the necessary elements if needed.
- Added an *Options* tab to the device page. Use this to view and configure refresh settings and any future options
- Added the number of *Refresh*s on the *Health* page

**Configuration Changes**

- Modifying the *Qubino Luxy Smart Light* configuration to use the properties
- Modifying the *Popp RainMeter* configuration to use properties
- Modifying the *Fibaro FGR-223* configuration—first configuration to use the refresh engine (This module has a known bug: it either fails to report positions or reports them incorrectly when a movement is initiated by Z-Wave.) To retrieve the refresh commands (go to "Reload Commands" and select "Without recreating commands"), you should see the "refreshs" in the Options tab.
- Modifying the *Fibaro FGR-223* configuration: changing the power and energy endpoints
- Modifying the *Fibaro FGR-223* configuration: adding hardware and over-current notifications
- Changing the *Fibaro FGR-223* configuration: replacing the "scene" property with "centralscene"

**Configuration Additions**

- Added configuration for the *Qubino Luxy Smart Switch* (properties: Switch, Multilevel, Power, Energy, Color, Notification, NotificationEvent)
- Added the *Qubino Luxy Smart Switch* image
- Added the *Abus Security Center SHSG10000* configuration (properties: Switch, Battery)
- Added the image *Abus Security Center SHSG10000*
- Add a *Global* subproperty to the *Rain* property
- Add a *Basic* subproperty to the *Rain* property
- Add an *Over-Load* subproperty to the *Notification* property
- Adding a *Waterconsumption* property
- Adding a *Notificationevent* property

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 21/12/2022

**Improvements**

- Addition of the management of Nodes Notifications

**Configuration Changes**

- Modifying the *Aeotec Range Extender 6* configuration to use the properties
- Modifying the *Zipato PD01z* configuration to use properties
- Modifying the *NeoCoolCam PD01zt* configuration to use the properties
- Modifying the *NeoCoolCam PD01z* configuration to use the properties
- Modifying the *Philio / Zipato Micromodule Energy Meter* configuration to use the properties
- Modifying the *Fibaro FGS214* configuration to use properties
- Configuration change for *Fibaro FGS213*: switching to endpoint 0 (to be confirmed)
- A Look Back at the *Fibaro FGD212 Firmware 3.5* Setup
- Configuration change for *Zipato Keypad*: addition of the *NodeNotification* property
- Configuration change for *Schlage Keypad*: addition of the *NodeNotification* property
- Modifying the *Eurotronic Valve Spirit* configuration to use the properties
- Grouping *Danfoss Living Connect* configurations
- Modifying the *Danfoss Devolo Living Connect* configuration to use properties
- Modifying the *Danfoss Living Connect* configuration to use properties
- Modifying the *Danfoss Pop Radiator Thermostat* configuration to use the properties
- Modifying the *Philio PSP05* configuration to use properties
- Modifying the *Zipato ZP3102* configuration to use properties
- Modifying the *Vision ZP3102* configuration to use the properties
- Modifying the *Remotec ZXT-120* configuration to use the properties
- Modifying the *Everspring Ad147* configuration to use properties
- Modifying the *Heatit ThermoFloor Ztemp2* configuration to use the properties
- Image modification: *Horstmann Secure SRT321* (cropping)
- Image editing: *Remotec ZXT-120* (cropping)
- Image editing *Fibaro FGS 224* (cropping)
- Image editing *Fibaro FGS 213* (cropping)
- Editing the *Fibaro Button* image (cropping)

**Configuration Additions**

- Added the *Cherubini ORA ZRX* configuration (properties: Shutter, Notification)
- Added the *Cherubini ORA ZRX* image
- Added the *Heiman HS2WD Siren* configuration (properties: Switch, Battery)
- Added the image *Heiman HS2WD Siren*
- Added a *Power-status* subproperty to the *Notification* property
- Adding a *NodeNotification* property

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 19/12/2022

**Corrections**

- Fixed some *missing attributes* on the health page for certain nodes to prevent (harmless) errors in *http.error*

**Improvements**

- Upgrade from *ZwaveJS UI* to version *8.6.1*
- Added *S2 support* (ZwaveJS UI has made the expected changes)
- Add *security type* to the *node information* page

**Configuration Changes**

- Modifying the *Heiman CO sensor* configuration to use the properties
- Modifying the *Heiman Smoke Detector* configuration to use the properties
- Modifying the *Domux CO sensor* configuration to use the properties
- Modifying the *Vision Security ZS5101* configuration to use the properties
- Modifying the *HomeSeer Ez Motion* configuration to use properties
- Modifying the *Shenzen Smoke Detector* configuration to use the properties
- Modifying the *Vision Security ZD2102* configuration to use the properties
- Editing the *Vision Security ZD2102* image (cropping)
- Modifying the *Aeotec Range Extender 7* configuration to use the properties
- Modifying the *Zipato ZD2102* configuration to use properties
- Modifying the *Qubino Weather Station* configuration to use the properties
- Modifying the *Everspring ST814* configuration to use properties
- Modifying the *Hank HKZW-SO08* configuration to use the properties
- Modifying the *Hank HKZW-SO01* configuration to use the properties
- Modifying the *Hank HKZW-SCN01* configuration to use the properties
- Modifying the *Philio PAT02-B* configuration to use properties
- Image modification *Philio PAT02-B* (cropping)
- Image modification *Abus SHWM1000*

**Configuration Additions**

- Added *Zipato Energy Meter* configuration (properties: Power, Energy, Voltage, Current)
- Added image for *Zipato Energy Meter*
- Added the *Airzone Aidoo Zwave* configuration (properties: Temperature, Thermostatmode, Thermostatmodeaction, Thermostatfanmode, Thermostatfanmodeaction, Thermostatsetpoint, Notification)
- Added image for *Airzone Aidoo Z-Wave*
- Adding a *Thermostatfanmode* property
- Adding a *Thermostatfanmodeaction* property
- Adding a *Direction* property
- Adding a *Velocity* property
- Adding a *Rain* property
- Adding a *Co* property
- Addition of a *Basic-motion* subproperty to the *Motion* property
- Added a *Dust-in-device* subproperty to the *Notification* property

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 15/12/2022

**Improvements**

- Added the ability to display *help guides* on the page for certain devices (such as the Zipato Keypad, to explain how codes work)

**Configuration Changes**

- Modifying the *Aetoec Nanomote Quad* configuration to use the properties
- Modifying the *Fibaro Fgs211* configuration to use properties
- Configuration change for *Fibaro fgwreu111 Walli Shutter*: switching to a Shutter/Level property and moving Power and Energy to Endpoint 1
- Modifying the *Zipato Keypad* configuration to use the properties
- Modifying the *Schlage Keypad* configuration to use the properties

**Configuration Additions**

- Added the *Zooz ZEN17* configuration (properties: Switch)
- Added image for *Zooz ZEN17*
- Added *Abus Flood Sensor* configuration (properties: Flood, Tamper, Battery)
- Added image for *Abus Flood Sensor*
- Adding a *UserCode* property

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 05/12/2022

**Improvements**

- Added a *NVM Management* tab to the network page. Save, download, send, and Restoration
- Added an *Update* tab to a node's page.
- Add the *SDK* version to the information page for a controller or the modules connected to it

**Configuration Changes**

- Modifying the *Cherubini Widom Smart Plug* configuration to use the features
- Modifying the *Qubino 3-Phase Meter* configuration to use the properties
- Modifying the *Power Factor* property for the *production* option

**Configuration Additions**

- Added the *Cherubini Widom Meta double switch* configuration (properties: Switch, Central Scene)
- Added image for *Cherubini Widom Meta double switch*
- Added the *Cherubini Widom Meta wired motor CONTR.7* configuration (properties: Shutter)
- Added image for *Cherubini Widom Meta wired motor CONTR.7*

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 01/12/2022

**Improvements**

- Handling *commands without units* when it should (in the Z-WaveJS response) to avoid cluttering the log

**Configuration Changes**

- Modifying the configuration of the *Qubino ZMNHNDX Flush 1D* to use the properties
- Modifying the *Fibaro FGSS101 Smoke* configuration to use properties
- Modifying the *Everspring AN-179 Smarthome* configuration to use properties
- Modifying the configuration of the *Aeotec ZWA009 AERQ* to use the properties
- Modifying the *Popp Outdoor Siren* configuration to use (some of) its features
- Modifying the *Aetoec ZWA080* configuration to use (some of) its properties and adding sound commands (volume and tone)
- Modifying the *Heat* property with *ALARM SENSOR* class handling
- Modifying the *Smoke* property with *ALARM SENSOR* class handling
- Modifying the *Thermostat Setpoint* property to set the setpoints using the default *button* widget
- Editing the *Popp Outdoor Siren* image: cropping

**Configuration Additions**

- Added the *Secure Hortsmann SRT321* configuration (properties: ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Temperature, Battery)
- Added image for *Secure Hortsmann SRT321*
- Added the *Hoppe ConnectSense Lock* configuration (properties: Opening, Notification Sensor, Tilt, Battery)
- Added image for *Hoppe ConnectSense Lock*
- Added settings for *Hoppe ConnectSense Lock*

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 28/11/2022

**Corrections**

- Correction to the *configuration settings* to *prevent 0 from being sent initially* when selecting from a list (for a setting that offers this option)

**Improvements**

- Add a required *retry* of the engine *in case of a failed exclusion*
- Display the message regarding the *0 command* only in the case of an *initiated node*

**Configuration Changes**

- Modifying the *Aeotec TriSensor* configuration to use the properties
- Modifying the *Hank HKZW-MS02* configuration to use the properties
- Modifying the *Philio PSM02* configuration to use properties
- Modifying the *Everspring AN158* configuration to use properties
- Modifying the *Danfoss Room Sensor* configuration to use the properties
- Modifying the *Vision ZS Shock and Vibration* configuration to use the properties
- Modifying the *Fibaro Walli Controller* configuration to use properties
- Modifying the *Fibaro FGD211* configuration to use properties
- Modifying the *Fibaro Wall Plug UK* configuration to use the properties
- Modifying the configuration of the *Fibaro Walli Outlet F* to use properties
- Modifying the *Fibaro Walli Dimmer* configuration to use the properties
- Modifying the *Fibaro RGBW441* configuration to use the *fibaro-effects* property
- Modification of the *Luminance* property with the addition of a percentage mode
- Modifying the *Thermostat Setpoint* property to set the setpoints using the default *button* widget
- Modification of the *Color* property with the addition of a *fibaro-effects* type (to no longer describe the commands)
- Added a *recommended setting* for the *Philio PST02*

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 25/11/2022

**Improvements**

- Addition of *ZwaveJS UI version management*
- Add a message to the *message center* and on the plugin page when ZwaveJS UI *needs to be updated*
- Upgrade from *ZwaveJS UI* to version *8.5.1*

**Configuration Changes**

- Changing settings for *Hank Smart Plug (HKZW-SO08)* (display issue)

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 23/11/2022

**Improvements**

- Add a visual for a pending *setting or wake-up*
- Added a page to view all pending *settings*
- Added a web app page to view all pending *settings*
- Added a "Delete" button to the *Pending* page. This allows you to delete a pending entry. It does not delete the command that was sent to the controller, but only the pending information in Jeedom (useful for calibration parameters, for example, which never take on the sent value, or any other parameter where this would be unnecessary).

**Configuration Changes**

- Modifying the *Popp Strike Lock* configuration to use the "opening" property (for the contact)
- Modifying the *Fibaro FGD212* configuration to add delta management starting with firmware version 3.5 (endpoint 1 on firmware <= 3.4; endpoint 0 on the target only otherwise)
- Modification of the *Door Lock* property to add "Unlock" (with timeout) to all devices using this property

**Configuration Additions**

- Added configuration for the *Hank Smart Plug (HKZW-SO08)* (properties: Switch, Power, Energy, Voltage, Current, Scene)
- Added the *Idinio foot dimmer* configuration (properties: Multilevel, Power, Energy)
- Added settings for *Hank Smart Plug (HKZW-SO08)*

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 21/11/2022

**Corrections**

- Change to the *network graph*: only the first direct paths will turn red when hovering over a node to prevent the *Max Stack Size Exceeded* error caused by recursion on certain systems and browsers

**Improvements**

- Incorporate *refreshNodeCC* as a property of a manually created command to refresh a CC
- Added a *horizontal scroll* to the network modal / *routing table* tab (thanks @Salvialf)
- Move the *command counter* to the right side of the equipment page

**Configuration Changes**

- Modifying the *Fibaro FGR223* configuration to use the power of the multilevel class
- Modifying the *Fibaro FGR222* configuration to use the power of the multilevel class
- Modifying the *Fibaro FGRM222* configuration to use multilevel power class
- Modifying the *Devolo Mt02648* configuration to use the properties and add the recommended settings
- Modifying the *Devolo Mt02647* configuration to use the properties and add the recommended settings
- Modifying the *Popp Strike Lock* configuration to use the properties
- Modifying the *Aeotec ZWA011* configuration to use its properties and adding its image

*If you've made any configuration changes or additions, sync the system and then reload the device commands by "recreating all commands" after the update.*

# 18/11/2022

**Improvements**

- Added access to the ZwaveJS UI *(in the Z-Wave Network menu, Actions tab)*. Do not use this to change settings!
- Added a port for certain Raspberry Pi models *(others will be added if necessary)*
- Add a command counter for each device *(excluding the 4 technical commands)*
- Add dynamic assistance when no command is given.

# 15/11/2022

- Switch to stable version

# 04/05/2022

- Beta 1st phase
