# Changelog Deconz

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 08/09/2024

- Debian 12 Compatibility
- Minimum jeedom version required: 4.4.8

# 03/01/2024

- Preparing for jeedom 4.4

# 12/19/2023

- Improved support for jeedom internal network configuration
- Bugfix

# 02/15/2023

- Improvement of the orders page (addition of the status)

# 10/11/2022

- Bug fix
- Added new type

# 02/03/2022

- Attempt to fix "cannot import name 'collections_abc' from 'six" error.moves'", requires jeedom 4.2 and relaunching the installation of dependencies

# 12/16/2021

- Bugfix

# 04/12/2021

- Support of new types

# 11/29/2021

- Possibility to uninstall Deconz, thank you @Benjamin
- Added ZHAAirQualit, meric @sagitaz
- Fixed a bug with the latest version of deconz on returning attribute updates
- Addition of group and binding management

# 02/08/2021

- Suppression of the sending of brightness during a color change for RGB bulbs
- Added ZHACarbonMonoxide, thanks @sagitaz

# 10/28/2020

- Added a message indicating not to update the key firmware if you are on VM or Freebox Delta at the risk of breaking the key.

# 23/09/2020

- Danfoss ally valve support (deconz 2.05.79 required)
- Change of the installation method for RPI and x86_64 (passage through the deconz repositories)

# 07/01/2020

- Improved launch of deCONZ

# 06/08/2020

- Added type ZGPSwitch (button friend of hue)

# 05/25/2020

- Correction of a concern on the generic type of color lights (it is advisable to correct the generic type for the command of color action type otherwise this may cause problems in Alexa or Google home, light which goes out during the ON request)

# 05/12/2020

- Addition of an automatic restart of the connection to deconz in case of loss

# 02/27/2019

- Ability to deactivate node alerts that cannot be reached by device
- Documentation and translation updates

# 12/27/2019

- Inversion of the widget for ikea stores to paste in the real state

# 12/26/2019

- Correction of a bug on the firmware update

# 12/24/2019

- Addition of Warning device and ZHAAlarm types
- Support for ikea stores (beta)
- Fixed issues with finding firmware for the key

# 11/15/2019

- Back to deconz 2.0.69 because the 70 has too many bugs you have to restart the local deconz installation

# 11/14/2019

- Fixed a problem with the installation of deconz

# 11/08/2019

- Update of the doc (addition of the deactivation of the serial on RPI otherwise the daemon is unstable)
- Valve support improvement

# 11/03/2019

- Installation support on RPI1

# 10/27/2019

- Bugfix
- Thermostatic valve support

# 10/14/2019

- Possibility to update the firmware of a Conbee 2 key from jeedom
- Launching a forced synchronization when the daemon starts
- Correction of a bug on the installation of dependencies

# 09/23/2019

- Updating the doc

# 09/23/2019

- Bugfix
- Updating the doc

# 09/09/2019

- Correction of a bug on the log level of deconz in local installation
- Update of the local version of deconz to 2.5.69 (be careful to have it in the plugin configuration restart the installation of Deconz and restart the demon then)

# 08/28/2019

- Update of the local version of deconz to 2.5.67 (be careful to have it in the plugin configuration restart the installation of Deconz)

# 08/13/2019

- Improved support for the Xiaomi cube (merc @kaktusatomik)
- Addition of node status in Zigbee networks
- Daily analysis of the networks with reporting if there is a problem on a module

# 07/24/2019

- Correction of a bug on deactivation of equipment

# 07/22/2019

- Ability to delete a node
- Add a link button directly to the deconz interface
- Adding the name of the Jeedom device in the table listing the nodes
- Adding the temperature on some xiaomi modules
- Support for double relay modules
- Improved support for sensor and actuator modules

Attention we have detected cases where there were duplication of orders (if you meet it do not hesitate to contact support)

# 07/08/2019

- Support of the Xiaomi vibration detection module

# 07/04/2019

- Bugfix

# 06/30/2019

- Correction of a bug on the installation of dependencies preventing the launch of the daemon
