# Changelog Z-Wave JS

>**IMPORTANT**
>
>If there is no information on the update, it means that it concerns only the update of documentation, translation or text.

# XX/12/2022

**Improvements**

- Adding a tab *NVM management* on the network page. Backup, Download, Send and Restore
- Adding a tab *Update* on a node page.
- Addition of the version of the *SDKs* on a controller's information page.

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
