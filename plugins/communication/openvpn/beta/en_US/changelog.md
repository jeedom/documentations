# OpenVPN Changelog

>**IMPORTANT**
>
>As a reminder, if there is no information about the update, it means that the update only involves documentation, translations, or text changes.

# 26/09/2026

- Set mtu to a fixed value
- Translation Review
- Add the *Status* column to the list of commands
- Dynamic management of Apache's `remoteip` module for enhanced security:
  - When the Jeedom DNS service starts, the Apache "remoteip" module will be automatically enabled and configured
  - Conversely, when the system is shut down, the module will be deactivated as a safety measure
- Jeedom v4.5 required

# 26/08/2024

- Better PHP8 support
- Support for custom device images (Jeedom 4.5)

# 08/01/2024

- Preparing for jeedom 4.4

# 06/11/2023

- Bug fixes and optimization
- Ability to use certificate, password or both

# 13/01/2023

- Reduced load for DNS infrastructure

# 15/02/2021

- Beginning of high availability support for the new DNS system

# 16/11/2020

- New presentation of the list of objects
- Added the "V4 Compatibility" tag

# 14/11/2019

- Bugfix

# 28/04/2019

- Bugfix

# 16/04/2019

- Optimizations

# 16/01/2019

- Fixed an issue with dependencies

# 23/11/2018

- Optimizations

# 09/11/2018

- Possibility to add options on the openvpn configuration
- Ability to execute commands after the DNS starts up (the #interface# tag is used to obtain the interface name)

# 30/10/2018

- Improvement of the calculation of the installation or not of the dependencies

# 29/05/2018

- Optimization of the plugin for Jeedom DNS

# 20/04/2018

- Correction of a bug on the plugin startup

# 15/04/2018

- The VPN status check is now done every 5 minutes instead of 15 minutes

# 01/03/2018

- Fixed a bug related to file uploads (CA and others)
