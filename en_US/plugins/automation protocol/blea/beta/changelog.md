# Changelog Bluetooth Advertisement

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 06/29/2024

- Fixed a bug on the ajax exception function.

# 04/06/2021

- Removed bluepy version check

# 20/11/2020

- General optimizations
- New presentation of the list of objects
- Addition of the tag "V4 compatibility"

# 08/30/2019
- Addition of exceptional management

# 08/22/2019
- Addition of Tivoo Divoom
- Minor improvements

# 08/19/2019
- Addition of a message to think of changing the level of the API in Jeedom if you use antennas
- Addition of some DIVOOM devices (note that they require a relaunch of dependencies). I do not add it in dependency control because these are just specific dependencies for them, so no need to force everyone to relaunch the dependencies)
- Addition of battery level on cleargrass
- Minor improvements

# 07/30/2019
- Correction of a bug on the dotti linked to the transition to python3

# 07/29/2019
- Fixed minor
- Separation of unknown devices on the equipment page
- Ability to delete all unknown devices in one click (only those not assigned to an object)
- Correction of a bug on the selective scan "Unknown"
- Overall improvements

# 07/20/2019
- Change of method for the entire playbulb range (only one conf and visuals) more dependencies compared to the different versions (now at inclusion we recover the addresses of the different methods)
- Addition of miscal V2 with weight and impedance (and a whole bunch of calculated measures). User management for calculations (in the advanced config button)
- Change of miscal V1 (it will be necessary to recreate the users) but we gain some more info
- For playbulbs I recommend a reinclusion of all devices
- Correction of a bug on the network graph in localless mode
- Correction of a bug on the regeneration of orders on request
- On inclusion the transmitting and receiving antennas are automatically filled in by the antenna that has enabled inclusion
- Change of the notion of presence (no need for repetition always, no need for return state and return state time) now a presence command by antenna and local and a presence command depending on the others
- Adjustment possible now of the scan interval and the number of scans or a device is not visible to declare it absent (gain detection presence and especially absence)
- Possibility to update all antennas in one click
- Possibility to restart all antennas in one click
- During an update of the plugin the antennas are updated and restart (can sometimes fail)
- Passive scan except learn (with memory of the Jeedom conf to know who is who)
- Switching to Python3
- Personal modification of bluepy, with better error handling (maybe more blocking on proxmow, vmware)
- Addition of a connection timeout within bluepy itself to prevent a connection attempt from looping
- If the Local daemon is in NOK status then the local presences are set to 0
- If an antenna has not communicated for more than a minute then the presence of this antenna is set to 0
- Addition of the possibility of retrieving new configurations without updating the plugin
- Addition of a passive or active mode for the scan
- Reorganization of the equipment page
- Addition of a number of scan option to consider absent specific to the equipment (if defined will replace the global for this equipment)
- Addition of the possibility to define in one click all the equipment on an antenna or on local
- Ability to choose exactly the type of product to include during a scan (with the possibility of choosing all)

# 06/26/2019
- Adding the xiaomi cleargrass
- Addition of Xiaomi lywsd02
- Beginning of dynamic model management
- Start rewriting playbulb range to have more difference depending on the firmwares
- Bug fix on demon status in some cases
- Unlocking refresh / delay functions : each user does what he wants (be careful though)
- NB : no more need for refresh for xiaomi HT miflora : battery gain, better range, more data. I recommend not activating the forced refresh which is no longer necessary unless your device seems not to advertise correctly

# 05/22/2019

- Change from equipment page to compliant V4.
- Improvement of xiaomi hygrothermograph (no need for connection for data) thank you @kipk
- Improvement of miflora (no need for connection for data)

# 03/09/2019

- Addition of the automatic management of the daemon on the antennas.
- Negative temp management
- Correction on the refresh of the nuts (battery info)

# 01/16/2019

- Correction of a concern about the maximum possible order

# 06/07/2018

- Improved dependency script.
- Removal of the dependencies check which will remain green anyway while waiting (remember during installation to launch the dependencies)

# 04/06/2018

- Probable correction of a refresh notification bug on Hygrothermograph and Miflora (probably requires relaunching dependencies for people affected)

# 03/28/2018

- add conf dreamscreen
- modification of the daemon to specify the logs
- modification of the recognition of MI_SCALE V1
- Watchdog bluepy-helper (in trial)

# 02/10/2018

- Correction of a bug on the network graph modal if any equipment had no object

# 03/01/2018

- Addition of the conf for the thermometer / hygrometer with Xiaomi screen
- Addition of some awox mesh confs
