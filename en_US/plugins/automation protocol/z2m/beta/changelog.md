# Changelog jeeZigbee

>**IMPORTANT**
>
>If there is no information on the update, it means that it concerns only the update of documentation, translation or text.

# 

- 

>**IMPORTANT**
>
>Il est maintenant possible de mettre zigbee2mqtt 2.X (2.6.0 actuellement) sur une Luna maintenant mais il faut bien mettre le firmware a jour avant (depuis la configuration du plugin puis le bouton de mise à jour du firmware) et ensuite il faut passer de ezsp en ember (toujours depuis la configuration du plugin jeezigbee). .

# 22/10/2025

- Correction d'un soucis de mise à jour du firmware pour certaine Luna

# 17/09/2025

- Correction d'un soucis lors de la mise a jour du firmware de la luna

# 16/09/2025

- Meilleurs gestion des droits lors du lancement du demon
- Ajout d'un nouveau firmware (8.0.3.0) pour la Luna

>**IMPORTANT**
>
>Il est maintenant possible de mettre zigbee2mqtt 2.X (2.6.0 actuellement) sur une Luna maintenant mais il faut bien mettre le firmware a jour avant (depuis la configuration du plugin puis le bouton de mise à jour du firmware) et ensuite il faut passer de ezsp en ember (toujours depuis la configuration du plugin jeezigbee)

# 24/06/2025

- Version de zigbee2mqtt par defaut 2.4 (sauf pour les luna)
- Correction d'un soucis visuel sur l'inclusion en z2m 2.3 ou plus

# 14/01/2025

- Mise à jour de la doc

# 07/01/2025

- La version par defaut de zigbee2mqtt est maintenant 1.42.0
- Support de l'installation de la version de zigbee2mqtt 2.0.X (attention pour l'instant l'installation est possible mais on ne garantie pas que tout marche meme si les 1er tests sont encourageant)
- Bug fix

# 16/12/2024

- Documentation update
- The firmware update button is hidden if you are in remote mode
- Improved daemon startup
- By default the plugin is in local mode (instead of waiting for configuration)
- The default version of zigbee2mqtt is 1.41 (temporary until the release of 2.0))
- Removed firmware update button on Luna (temporary))

# 09/27/2024

- Changed minimum versions, core 4.4 and OS Debian 11 minimum

# 09/24/2024

- Added a link on the equipment page that redirects to the zigbee2mqtt page of the equipment for more information

# 10/09/2024

- Possibility on boxes with elelabs dongles to flash the Ember firmware (experimental this can completely break your dongle and will not be covered by the warranty or support)
- Fixed bug if root topic is not zigbee2mqtt

# 05/08/2024

- Improved image management
- Baudrate correction on deconz
- Fixed a bug displaying the configuration window of a node if a piece of equipment is deleted while it is used in binding in another

# 07/16/2024

- Fixed an error indicating an update of zigbee2mqtt when the version is already up to date
- Added Ember key type
- Fixed a problem when starting the daemon for the first time regarding rights to the log file
- Fixed a problem on some images

# 04/22/2024

- Fixed a bug on command duplication (on scenes)
- Fixed a bug on sliders with negative value

# 03/04/2024

- Fixed a bug on the image of the latest version of zigbee2mqtt

# 03/20/2024

- Fixed a bug with the refresh command

# 03/13/2024

- Limitation of updating the Zigbee firmware to Luna on Luna boxes (avoids breaking the Zigbee chip in the event of a wrong choice)

# 02/26/2024

- Fixed a problem with the installation of mqtt
- Modification on the subtopic (it is now a configuration field specific to the command), be careful to update your commands if you have used them.
- Modification of the syntax of the logicalId field for actions (change to json mode::). To find out the news, please consult the plugin documentation.
- Adding the /dev/ttyAMA0 port for raspbee2 on rpi
- Bug fix
- Added a button to deactivate inclusion mode
- Improved inclusion mode detection
- Bug fix (plugin now ignores empty values for commands)

# 02/19/2024

- Fixed a problem with the installation of mqtt


# 01/17/2024

- Improved firmware update on Luna
- Better port management on Luna
- Simplifying the port list
- Possibility of sending a message on a subtopic of the set command : arm_mode/mode::arming_stay
- Bugfix
- Management of status feedback on groups

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
