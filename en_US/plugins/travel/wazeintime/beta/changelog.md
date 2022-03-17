# Changelog Waze in Time

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 03/17/2022

- Jeedom v4.2 compatibility

# 12/08/2021

- Addition of an option to configure the subscriptions to be activated when calculating routes (see documentation)
- Added option to use any command from any plugin as start or end position
- Fixed extracting trip info due to a Waze API change

# 10/18/2021

- Improved configuration pages for v4:
  - Adding the search box
  - Addition of the presentation in equipment table mode (Jeedom v4.2)
  - New presentation of the configuration page
  - New presentation of the list of objects in the equipment page
  - New presentation of the list of orders
- Added support for geolocation configured in the Jeedom core
- Addition of a personalized auto-update cron in the equipment config; attention you must reconfigure your equipment because the cron30 is disabled; Otherwise, the refresh of journeys will no longer be carried out automatically.
- Fixed info extraction due to Waze API change

# 10/23/2019

- Improvement of the widget for jeedom v4

# 09/05/2019

- Bug correction on the widget in jeedom v4
- Bug fix for php 7.3
