# Changelog Enedis

>**Important**
>
>If there is no information on the update, it means that it concerns only the update of documentation, translation or text.

# 06/11/2023

- transition to stable version

# 04/10/2023

- Updated calls to be compatible with the V5 Enedis Data-Connect API

# 24/10/2022

- Added option to disable hourly data
- Removed dependencies already needed for core
- The widget template color settings are now in the equipment configuration, Display tab, Widget section

# 10/23/2022

- transition to stable version

# 10/18/2022

- Updated command list for Jeedom v4.3

# 08/15/2022

- Fixed a production data display bug in case of multiple widgets on the page

# 02/08/2022

- Optimization of calls to Enedis servers

# 01/24/2022

- Removal of the "Maximum Power Production" command"

# 01/05/2022

- Fixed a bug on data collection on January 1st
- Addition of an indicator on the widget to know if the data is up to date *(green = OK, red = KO, orange = some data KO)*

# 06/03/2021

- Correction to prevent auto-programming from being stopped in rare cases

# 05/18/2021

- Implementation of an auto-programming system
- Possibility of integrating histories on demand
- Better data processing and integration
- Reorganization of configuration settings, files and documentation

# 02/18/2021

- Added dependency management to confirm the presence of `php-mbstring` absent on some installations
- New plugin icon more in line with Enedis prerogatives

# 02/01/2021

- Complete rewrite of the plugin which now uses the Enedis Data-Connect API
- Adding the command **Max power / day**
- Possibility of recovering consumption, production or both measurements at the same time
- Automatic generation of histories for the last 3 years when creating orders
- Rewriting of dashboard & mobile widget templates
- Added the possibility to choose the background color of the widget template *(or transparent)*
- Documentation rewrite

# 09/10/2020

- Fixed a display bug in mobile view without the widget template.

# 06/09/2020

- Addition of the template for dashboard version.
- Addition of the template for mobile version.
- Optimization of the number of calls to Enedis servers.

# 08/21/2020

- Retrieval of information at a random minute so as not to overload the Enedis servers.

# 08/17/2020

- Switching to stable.

# 08/12/2020

- Provision of the plugin in beta version.
