# Enedis Changelog

>**IMPORTANT**
>
>If there is no information about the update, it means that the update only involves documentation, translations, or text.

# 26/10/2026

- Jeedom 4.4 or higher required
- The widget template is now active or disabled from the **Widget Template** field in the device's advanced settings (**Information** tab)
- Added a **Meter Description** field to the device page
- Data history for day, month, year, and maximum power is now recorded on a full-year basis to ensure accurate monthly and annual totals
- Correction of monthly and annual totals when Enedis does not provide data on the 1st of the month
- Fixed the dates displayed in the logs when retrieving hourly data
- The daily, monthly, and annual records, as well as the maximum power records that have already been saved, are now corrected when Enedis data arrives late or is modified

# 06/11/2023

- transition to stable version

# 04/10/2023

- Updated calls to be compatible with the V5 Enedis Data-Connect API

# 24/10/2022

- Added option to disable hourly data
- Removed dependencies already needed for core
- The widget template color settings are now in the equipment configuration, Display tab, Widget section

# 23/10/2022

- transition to stable version

# 18/10/2022

- Updated command list for Jeedom v4.3

# 15/08/2022

- Fixed a production data display bug in case of multiple widgets on the page

# 02/08/2022

- Optimization of calls to Enedis servers

# 24/01/2022

- Removal of the "Max Power Output" command

# 05/01/2022

- Fixed a bug on data collection on January 1st
- Added an indicator light to the widget to show whether the data is up to date *(green = OK, red = not OK, orange = some data not OK)*

# 03/06/2021

- Correction to prevent auto-programming from being stopped in rare cases

# 18/05/2021

- Implementation of an auto-programming system
- Possibility of integrating histories on demand
- Better data processing and integration
- Reorganization of configuration settings, files and documentation

# 18/02/2021

- Added dependency management to confirm the presence of `php-mbstring` not available on some systems
- New plugin icon more in line with Enedis prerogatives

# 01/02/2021

- Complete rewrite of the plugin which now uses the Enedis Data-Connect API
- Added the **Max Power/Day** command
- Possibility of recovering consumption, production or both measurements at the same time
- Automatic generation of histories for the last 3 years when creating orders
- Rewriting of dashboard & mobile widget templates
- Added the option to choose the background color of the widget template *(or transparent)*
- Documentation rewrite

# 10/09/2020

- Fixed a display bug in mobile view when the widget template is not used.

# 06/09/2020

- Added the template for the dashboard version.
- Added the template for the mobile version.
- Optimizing the number of requests to Enedis servers.

# 21/08/2020

- Retrieving information at a random minute to avoid overloading the Enedis servers.

# 17/08/2020

- Switched to stable.

# 12/08/2020

- The plugin is now available in beta.
