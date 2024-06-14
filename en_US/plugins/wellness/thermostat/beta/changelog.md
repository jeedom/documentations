# Changelog Thermostat

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 06/13/2024

- Better management of disabled thermostats

# 02/19/2024

- Fixed a bug that creates invalid crons
- Bug fix if there were 2 orders at the same time (thanks @phpvarious)

# 03/01/2024

- Preparing for jeedom 4.4

# 12/19/2023

- Possibility of entering negative values for Offsets commands relating to internal contributions

# 04/27/2023

- Improvement when changing modes *(air conditioning, heating or both)*
- Removing obsolete code for Imperihome

# 04/20/2023

- Improved management of openings

# 03/10/2022

- The smartstart can no longer override the thermostat lock

# 07/29/2022

- Correction on the filling of certain equipment configuration fields via the order selection list

# 10/21/2021

- Addition of the presentation of thermostats equipment in table mode
- Positive hysteresis is now also possible in cooling mode

# 12/14/2020

- Modernization of the interface
- Addition of an option allowing to use only the positive hysteresis for heating
- Added the ability to display a command of your choice on the thermostat widget
- Documentation update

# 11/11/2020

- General optimizations
- Removal of the "Humidity"
- New presentation of the list of objects
- Addition of the tag "V4 compatibility"

# 06/01/2020

- Addition of delta setpoint parameter - outside temperature for calculating the hot / cold direction

# 04/07/2020

- Bugfix

# 12/21/2019

- Addition of an option for the hot cycle threshold to allow the inertia to be taken into account

# 12/17/2019

- Fixed display issue
- Addition of an option "Cycle threshold or heating is considered hot"

# 12/16/2019

- Bug correction on thermostat off mode
- Addition of an option to limit the duration of a second cycle to 100% of the time (allows to take into account the fact that the radiators are already hot)

# 11/03/2019

- Fixed a bug on orphaned orders

# 10/23/2019

- Correction of a bug on the off

# 10/23/2019

- Bugfix

# 10/06/2019

- Update of the FAQ on the concerns of non display of actions / modes

# 10/01/2019

- Bugfix

# 08/15/2019

- Updating the doc
- Support for PHP 7.3

# 07/02/2019

- Bugfix

# 04/30/2019

- Improved interface

# 04/29/2019

- Addition of an option "Limits on / off cycles (pellet, gas, fuel oil) and PID". Thank you @Pierrick

# 03/11/2019

- Possibility to add an alert message if the thermostat has been suspended for more than XX minutes
- Adding a set point delta in time mode
- Bugfix

# 01/04/2019

- Fixed a bug on the Smartstart if the agenda is deactivated after scheduling

# 12/28/2018

- Bug correction on the mobile panel

# 11/27/2018

- Bug fix

# 11/20/2018

- Adding a performance calculation (kWh / DJU) if a consumption command is given to the plugin
- Correction of a bug on the management of temperature sensor failure alerts
- Addition of a field for a humidity control (useful only for the Google Smarthome plugin)

# 07/01/2018

- Correction of a bug on the suspension of the thermostat when opening a window

# 06/06/2018

- Bug fix

# 02/23/2018

- Correction of a warning in the code

# 01/29/2018

- Bug fix on window openings / closings
