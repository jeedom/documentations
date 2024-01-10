# Changelog jeeZigbee

>**IMPORTANT**
>
>If there is no information on the update, it means that it concerns only the update of documentation, translation or text.

- Improved firmware update on Luna
- Better port management on Luna
- Simplifying the port list
- Possibility of sending a message on a subtopic of the set command : arm_mode/mode::arming_stay

# 12/26/2023

- Improved zigbee2mqtt daemon shutdown
- Bugfix

# 12/21/2023

- Removal of the notion of instance
- Possibility of launching an inclusion directly on a router module
- Added conbee 3 support
- Added raspbee 2 support

# 08/12/2023

- Added an option "Do not allow messages if the equipment has not been seen for more than (s)" (Reserved for advanced users)

# 05/12/2023

- Support for zigbee firmware update on Luna (beta)
- Support for long logicalId on commands
- Possibility of creating a refresh command (you must add a command then type action/default and in the logical id field put refresh)
- Possibility of adding a cron which requests the updating of the values (be careful, nothing guarantees that the module will really update them, it must support it)
- Fixed a bug with the latest version of zigbee2mqtt


# 06/11/2023

- Fixed a bug in group management
- Code Optimization
- Fixed bugs during plugin installation (error 500)

# 09/22/2023

- Possibility to choose the version of zigbee2mqtt

>**IMPORTANT**
>
>For those having problems with an unreachable module following previous updates, you must restore a jeedom backup from before the update then redo the update. I sincerely apologize for this bug which occurs to some of you, it comes from an unexpected function of Zigbee2MQTT which I do not have on my different labs.

# 09/20/2023

- Fixed a bug on the zigbee2mqtt version

# 09/19/2023

- Fixed a bug when updating dependencies (Zigbee2MQTT) if you restored jeedom

# 08/09/2023

- Fixed a bug that prevented orders from being created correctly

# 04/09/2023

- Ability to configure the listening port of zigbee2mqtt
- Fixed an issue with color type commands
- Correction on the generation of commands which could not work in certain cases
- Improved command naming
- Possibility for Atlas boxes with Elelabs type controllers to update the firmware from jeedom

# 03/07/2023

- Fixed a problem when sending a positioning command (shutter type)

# 06/27/2023

- Fixed a problem with detecting certain modules (including profalux)

# 05/30/2023

- Initial version
