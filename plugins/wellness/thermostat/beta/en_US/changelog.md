# Thermostat Changelog

>**IMPORTANT**
>
>As a reminder, if there is no information about the update, it means that the update only involves documentation, translations, or text changes.

# 05/11/2026

- Fixed the display of `undefined` next to the names of the Agenda schedules without an icon, in the **Schedule** tab

# 02/11/2026

- Distinguishing between sensor failures (receive delay, low/high threshold, and invalid value) in notifications via `#failure_message#`.
- Fixes for hidden or repeated alerts during simultaneous or successive faults, and assistance with sensor/heating failures.

# 10/09/2026

- Bug fix: An empty or non-numeric setpoint caused the plugin to crash (PHP 8 TypeError in the hysteresis calculation) and interrupted processing of subsequent thermostats [LINK](https://github.com/jeedom/plugin-thermostat/issues/68)

# 22/11/2025

- Fix for date entry and viewing history from the dashboard *(Jeedom v4.4 mini)*

# 14/10/2024

- SmartStart now complies with the minimum heating percentage [LINK](https://github.com/jeedom/plugin-thermostat/issues/60)

# 30/09/2024

- Support for custom device images (Jeedom 4.5)
- Fixed bug on decimal instructions support

# 22/07/2024

- Fixed a bug in debian 12

# 13/06/2024

- Better management of disabled thermostats

# 19/02/2024

- Fixed a bug that creates invalid crons
- Fixed a bug that occurred when two commands were executed at the same time (thanks @phpvarious)

# 03/01/2024

- Preparing for jeedom 4.4

# 19/12/2023

- Possibility of entering negative values for Offsets commands relating to internal contributions

# 27/04/2023

- Improvements when switching modes *(air conditioning, heating, or both)*
- Removing obsolete code for Imperihome

# 20/04/2023

- Improved management of openings

# 03/10/2022

- The smartstart can no longer override the thermostat lock

# 29/07/2022

- Correction on the filling of certain equipment configuration fields via the order selection list

# 21/10/2021

- Addition of the presentation of thermostats equipment in table mode
- Positive hysteresis is now also possible in cooling mode

# 14/12/2020

- Modernization of the interface
- Addition of an option allowing to use only the positive hysteresis for heating
- Added the ability to display a command of your choice on the thermostat widget
- Documentation update

# 11/11/2020

- General optimizations
- Removal of the "Humidity" command
- New presentation of the list of objects
- Added the "V4 Compatibility" tag

# 01/06/2020

- Addition of delta setpoint parameter - outside temperature for calculating the hot / cold direction

# 07/04/2020

- Bugfix

# 21/12/2019

- Addition of an option for the hot cycle threshold to allow the inertia to be taken into account

# 17/12/2019

- Fixed display issue
- Add an option for "Cycle threshold at which the heating is considered hot"

# 16/12/2019

- Bug correction on thermostat off mode
- Added an option to limit the duration of a second cycle to 100% of the time (takes into account the fact that the radiators are already warm)

# 03/11/2019

- Fixed a bug on orphaned orders

# 23/10/2019

- Correction of a bug on the off

# 23/10/2019

- Bugfix

# 06/10/2019

- Update of the FAQ on the concerns of non display of actions / modes

# 01/10/2019

- Bugfix

# 15/08/2019

- Updating the doc
- Support for PHP 7.3

# 02/07/2019

- Bugfix

# 30/04/2019

- Improved interface

# 29/04/2019

- Added an option to "Limit on/off cycles (pellet, gas, oil) and PID." Thanks, @Pierrick

# 11/03/2019

- Possibility to add an alert message if the thermostat has been suspended for more than XX minutes
- Adding a set point delta in time mode
- Bugfix

# 04/01/2019

- Fixed a bug on the Smartstart if the agenda is deactivated after scheduling

# 28/12/2018

- Bug correction on the mobile panel

# 27/11/2018

- Bug fix

# 20/11/2018

- Adding a performance calculation (kWh / DJU) if a consumption command is given to the plugin
- Correction of a bug on the management of temperature sensor failure alerts
- Add a field for a humidity command (only useful for the Google Smart Home plugin)

# 01/07/2018

- Correction of a bug on the suspension of the thermostat when opening a window

# 06/06/2018

- Bug fix

# 23/02/2018

- Correction of a warning in the code

# 29/01/2018

- Bug fix on window openings / closings
