# Changelog MQTT Manager

>**IMPORTANT**
>
>As a reminder, if there is no information on the update, it is because it concerns only the update of documentation, translation or text.

- Added an online and offline message when starting and stopping (wanted or not) the daemon in topic_racine/state
- If you have jeedom equipment::monitor from the virtual plugin the plugin will automatically add the state command (online or offline), if you already have this equipment you must restart the discovery
- Fixed a bug on the transmission of the real type of equipment (when transmitting equipment between jeedom)
- Fixed bug on duplication of event listening task
- On exported equipment if the source plugin exists on the target jeedom then jeedom will display the plugin icon
- No error in the logs when transmitting the command (avoids breaking jeedom if the daemon is cut off)

# 12/08/2024

- Fixed a bug when sending equipment from the configuration window
- Added a button to see mosquitto logs (if it is in local broker mode))
- Updated the documentation to better explain how to synchronize topics between two mosquitto

# 10/08/2024

- Fixed a bug on sending batteries (non-static method call))

# 09/08/2024

- Improved display of the configuration window for transmitted equipment
- Fixed bug on orphaned commands when transmitting through mqtt

# 08/08/2024

- For equipment transmitted on Mqtt the plugin now sends the battery level every night
- The plugin to manage the battery level transmitted between Jeedom
- Correct management of refresh commands on widgets on equipment transmitted between Jeedom
- When sending the discovery between Jeedom the values of the commands are also transmitted (no need to wait for an update of the value to have it on the target). Requires resend discovery
- When transmitting equipment between Jeedom the plugin now manages the real type of equipment to be compatible with mobile applications. Requires resend discovery
- Added a global configuration window for the transmission of equipment between Jeedom

# 05/08/2024

- With Jeedom 4.4.8 or more possibility of no longer sending all the equipment on the MQTT brocker but only certain ones (to be configured in the advanced configuration of the equipment to be transmitted)
- Bug fixes (especially for php8 compatibility)
- Discovery between Jeedom (to make 2 jeedoms communicate with each other by mqtt)
- Possibility from the plugin configuration page to delete the subscription of a plugin

# 03/22/2024

- Fixed a problem under php8
- Fixed a bug under Debian 12

# 02/23/2024

- Deleting a launchable daemon check (done when launching the daemon in all cases)

# 01/15/2024

- Preparing for jeedom 4.4
- Improved mosquitto management under Docker

# 10/27/2023

- Fixed a bug on the state of the daemon (started when not)

# 05/10/2023

- Fixed a bug on brocker status

# 02/10/2023

- Possibility to correct the default QOS
- Bugfix
- Start of adding the auto discovery system
- Improved mosquitto handling in local mode

# 03/22/2023

- Bugfix

# 07/03/2023

- Addition of an autodiscovery system for some beta modules (esphome, tasmota and shelly)
- Added the image of the modules
- Fixed a bug on the client ID (if several jeedom on the same broker)
- Sub-level support in equipment topics
- Bug fix

# 23/12/2022

- Fixed a bug on the maximum time allowed for installing dependencies
- Added equipment template system (beta)

# 11/18/2022

- Added a message prompting to restore permissions on folders before installing Mosquitto in case of error **No SSL folder found**

# 11/13/2022

- Added a button to uninstall a local Mosquitto broker on the general plugin configuration page
