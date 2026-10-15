# Deconz Changelog

>**IMPORTANT**
>
>As a reminder, if there is no information about the update, it means that the update only involves documentation, translations, or text changes.

# 15/10/2026

- Fixed a "Division by zero" error affecting color lights that do not return to white mode

# 17/02/2026

- Debian 12 Compatibility
- Minimum required Jeedom version: 4.4.8

# 03/01/2024

- Preparing for jeedom 4.4

# 19/12/2023

- Improved support for jeedom internal network configuration
- Bugfix

# 15/02/2023

- Improvements to the command page (addition of status)

# 11/10/2022

- Bug fix
- Added new type

# 03/02/2022

- Attempt to fix the error "cannot import name 'collections_abc' from 'six.moves'"; requires Jeedom 4.2 and re-running the dependency installation

# 16/12/2021

- Bugfix

# 04/12/2021

- Support of new types

# 29/11/2021

- Possibility to uninstall Deconz, thank you @Benjamin
- Added ZHAAirQualit, meric @sagitaz
- Fixed a bug with the latest version of deconz on returning attribute updates
- Addition of group and binding management

# 08/02/2021

- Suppression of the sending of brightness during a color change for RGB bulbs
- Added ZHACarbonMonoxide, thanks @sagitaz

# 28/10/2020

- Added a message warning users not to update the dongle's firmware if they are using a VM or Freebox Delta, as doing so may damage the dongle.

# 23/09/2020

- Support for the Danfoss Ally valve (requires Deconz 2.05.79)
- Change in the installation method for RPI and x86_64 (now via the deconz repositories)

# 01/07/2020

- Improved launch of deCONZ

# 08/06/2020

- Added the ZGPSwitch type (Hue-compatible button)

# 25/05/2020

- Fixed an issue with the generic types for colored lights (it is recommended to correct the generic type for the "color action" command; otherwise, this may cause issues with Alexa or Google Home, such as the light turning off when the "ON" command is given)

# 12/05/2020

- Addition of an automatic restart of the connection to deconz in case of loss

# 27/02/2019

- Ability to deactivate node alerts that cannot be reached by device
- Documentation and translation updates

# 27/12/2019

- Inversion of the widget for ikea stores to paste in the real state

# 26/12/2019

- Correction of a bug on the firmware update

# 24/12/2019

- Addition of Warning device and ZHAAlarm types
- Support for IKEA blinds (beta)
- Fixed issues with finding firmware for the key

# 15/11/2019

- Rolling back to Deconz 2.0.69 because version 70 has too many bugs; I need to reinstall the local Deconz installation

# 14/11/2019

- Fixed a problem with the installation of deconz

# 08/11/2019

- Documentation update (added instructions for disabling the serial port on the RPI; otherwise, the daemon is unstable)
- Valve support improvement

# 03/11/2019

- Installation support on RPI1

# 27/10/2019

- Bugfix
- Thermostatic valve support

# 14/10/2019

- Possibility to update the firmware of a Conbee 2 key from jeedom
- Launching a forced synchronization when the daemon starts
- Correction of a bug on the installation of dependencies

# 23/09/2019

- Updating the doc

# 23/09/2019

- Bugfix
- Updating the doc

# 09/09/2019

- Correction of a bug on the log level of deconz in local installation
- Updated the local version of Deconz to 2.5.69 (note: to get this update, you must restart the Deconz installation in the plugin settings and then restart the daemon)

# 28/08/2019

- Updated the local version of Deconz to 2.5.67 (note: to get this update, you must restart the Deconz installation in the plugin settings)

# 13/08/2019

- Improved support for the Xiaomi cube (thanks @kaktusatomik)
- Addition of node status in Zigbee networks
- Daily analysis of the networks with reporting if there is a problem on a module

# 24/07/2019

- Correction of a bug on deactivation of equipment

# 22/07/2019

- Ability to delete a node
- Add a link button directly to the deconz interface
- Adding the name of the Jeedom device in the table listing the nodes
- Adding the temperature on some xiaomi modules
- Support for double relay modules
- Improved support for sensor and actuator modules

Please note: We have detected instances of duplicate commands (if you encounter this issue, please don't hesitate to contact support).

# 08/07/2019

- Support of the Xiaomi vibration detection module

# 04/07/2019

- Bugfix

# 30/06/2019

- Correction of a bug on the installation of dependencies preventing the launch of the daemon
