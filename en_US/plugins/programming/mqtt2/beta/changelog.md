# Changelog MQTT Manager

>**IMPORTANT**
>
>As a reminder, if there is no information on the update, it is because it concerns only the update of documentation, translation or text.

- Fixed a problem under php8

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
