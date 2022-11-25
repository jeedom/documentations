# Changelog Z-Wave JS

>**IMPORTANT**
>
>If there is no information on the update, it means that it concerns only the update of documentation, translation or text.

# XX/11/2022

**Configuration Changes**

- Change settings for *Hank Smart Plug (HKZW-SO08)* (display issue)

*If you are affected by a configuration change or addition, reload the commands of the equipment by "recreating all commands" after the update.*

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

*If you are affected by a configuration change or addition, reload the commands of the equipment by "recreating all commands" after the update.*

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

*If you are affected by one of its configurations, reload the commands of the equipment by "recreating all commands" after the update.*

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
