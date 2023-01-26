# Changelog Zigbee

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text.

>**Important**
>
>To know the new compatible module you have to go [the](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (it is sorted by date added / modified)

# 01/25/2023

- Removal of the backup/restore part of the zigbee chips (the protocol does not support it, it is too unstable)

# 01/23/2023

- added new configuration
- Bugfix

# 10/19/2022

- Remove rustc folder after installing dependencies to free up space
- Improved support for some modules
- Bugfix

# 03/10/2022

- Zigpy versions are now fixed to avoid issues with installing dependencies


# 09/13/2022

- Fixed a bug on installing dependencies on RPI
- Support for new modules

# 02/09/2022

- Bug fix
- Ability to fix the bootloader error (base.TimeoutError) from the firmware update screen (in beta at the moment)
- Fixed a bug on the button to force OTA mod updates
- Fixed a bug on the YARL lib by forcing version 1.4.2

# 08/12/2022

- Fixed bugs on the execution of certain commands if the equipment is in "Ignore execution confirmation"

# 08/12/2022

- Bugfix

# 07/27/2022

- Fixed inclusion issues for GreenPower equipment (only compatible with EZSP keys)
- Fixed an issue with the color feedback of some zigbee remotes

# 27/06/2022

- Attempt to fix problems with the daemon

# 06/23/2022

- Attempt to fix problems with the daemon

# 06/20/2022

- Added option to automatically exclude deleted devices
- Fixed a bug when forcing an OTA update
- Support for new modules
- fixed a problem with zigpy 0.47.0 (back to version 0.46.0)

# 05/20/2022

- Correcting the error :  AttributeError: module 'specifics' has no attribute 'init'

# 05/05/2022

- Bug fix
- New module support 
- Fixed a bug on adding a module to a group
- Added sending timezone when sending time to modules
- Bug fixes on dependencies installation

# 03/31/2022

- Fixed an issue preventing the daemon from starting due to the new version of zigpy

# 03/22/2022

- New module support
- Documentation update
- Bug fix

# 02/16/2022

- New module support
- Update of the doc for the "base timeout" error"

# 02/03/2022

- Attempt to fix "cannot import name 'collections_abc' from 'six" error.moves'", requires jeedom 4.2 and relaunching the installation of dependencies

# 02/01/2022

- Fixed a problem with managing ezsp firmware versions
- Implementation of an automatic order generation system if no configuration exists (as far as possible)
- Implementation of an automatic discovery system for information type orders
- Possibility of having the current json configuration of the module (will allow you to integrate the modules more quickly)

# 01/21/2022

- Bugfix
- New module support

# 01/10/2022

- Correction of a bug on the direct binding between 2 modules

# 01/06/2022

- Fixed a bug on the list of modules that can be bound
- Improved battery recovery

# 12/20/2021

- Fixed a bug when restarting the daemon when the sub daemons are configured but disabled
- Fixed an issue when requesting a refresh of more than 7 attribute values, thanks @kaktusatomik
- Added new equipment (thanks @ cstan77)

# 12/02/2021

- Addition of new equipment
- Correction of a problem on the "Report configuration" of the modules

# 22/11/2021

- Optimization of the loading speed of the plugin pages
- Addition of new equipment
- Update dependencies automatically when updating the plugin


# 07/11/2021

- Addition of new equipment
- Fixed a bug on Tuya roller shutter modules

# 25/10/2021

- Adding new configuration
- Possibility to define a cron to force the update of the attributes (be careful not to put anything it can break all your zigbee networks)
- Bug fix
- Addition of the number of neighbors on the zigbee chart page when hovering

# 09/19/2021

- Bugfix

# 09/15/2021

- Fixed a bug on inclusion
- Improved log levels
- Addition of new modules

>**Important**
>
>It is ABSOLUTELY necessary to launch an installation of dependencies even if it is OK (we are working in jeedom 4.2 has this to be automatically but for the moment you have to launch them by hand)

# 03/09/2021

- Fixed a problem with group creation in some cases
- Fixed group list display

# 08/27/2021

- Fixed issue with Nodon firmware
- Correction of the "\_ext_pan_id" error due to an update of the Zigpy code with the Deconz keys

>**Important**
>
>Following this update it is ABSOLUTELY necessary to update the dependencies of the plugin even if it tells you that everything is OK

# 08/23/2021

- Deletion of the OTA update file for Nodon modules at their request
- Addition of new modules 
- Fixed an issue with the configuration of Hue bulbs settings

# 08/17/2021

- Correction of a reporting issue on AnalogInput and AnalogInput clusters
- Xiaomi Aqara TVOC Air Quality Monitor Full Support
- Addition of many modules

# 08/06/2021

- Fixed a bug on group management

# 08/02/2021

- Addition of new compatible module
- Addition of a button to delete all the data of a daemon (see documentation)
- Fixed a bug on group management when multiple zigbee keys


# 07/01/2021

- Addition of new compatible module
- Optimization of existing configurations on the management of repetitions

# 06/09/2021

- Change of the OTA update source for Ikea (switch to the stable branch)
- Addition of new compatible module
- Bug fix

# 05/18/2021

- GreenPower support in beta for EZSP type keys (Elelabs, Popp ...), requires restart of the installation of dependencies
- Addition of new compatible module
- Bug fix

# 05/03/2021

- Documentation update
- Bugfix
- Integration of new modules
- Optimization of module images

# 04/29/2021

- Integration of new modules
- Optimization of module images

# 04/21/2021

- Integration of new modules
- Support for binding *(between groups or modules)*
- Documentation redesign
- Bugfix

# 04/07/2021

- Fixed a problem on the button to force the OTA update of certain modules

# 04/06/2021

- Switching to stable

# 09/25/2020

- 1st release in beta
