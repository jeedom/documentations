# Wes Control Changelog

>**IMPORTANT**
>
>As a reminder, if there is no information about the update, it means that the update only involves changes to the documentation, translations, or text.

# 08/09/2026

- New stable version

# 05/06/2026

- Support for custom images for devices
- Minimum required Jeedom version: **4.4**

# 01/06/2026

- Fixed CGX update message handling: automatic creation, updating, and deletion based on the actual status of the Wes server

# 25/05/2026

- New version of the CGX file, V1.0.6
- Added support for Modbus variables *(WES firmware >= V0.9b05)*
- Plugin icon update

# 22/05/2026

- New stable version
- Minimum required Wes firmware version: **V0.84A10** *(switch to the less-than-V0.84A10 branch for earlier versions)*
- Various fixes for Debian 12/PHP 8

# 10/01/2024

- New version of CGX file V1.0.5
- Add "Consumption/Production" to the ICT list
- Add a "Producer" command *(1 if production is enabled by Enedis, 0 otherwise)*
- Add the feed-in index *(not reported if the producer's value is 0)*
- Add apparent power fed into the grid *(not reported if the producer is at 0)*

# 13/12/2022

- New stable version
- Verify that the plugin is fully compatible based on its version and that of the Wes firmware *(``< V0.84A10`` = stable plugin / ``>= V0.84A10`` = beta plugin)*
- Added a table-style view for child devices.

# 13/06/2022

- New CGX File Version V1.0.3

# 10/05/2021

- New version of CGX file V1.0.2
- Addition of the "Type of measurement" parameter for meters and TIC
- Added meter types: **Calories, Electricity, and Fuel Oil**
- Added an automatic update option, a command to update the CGX file, and a button to update all active servers
- Interface optimization.

# 28/04/2021

- Provision of the plugin
