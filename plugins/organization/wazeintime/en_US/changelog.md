# Waze in Time Changelog

>**IMPORTANT**
>
>As a reminder, if there is no information about the update, it means that the update only involves documentation, translations, or text changes.

# 06/10/2026

- Major update to bypass the Waze block (Error 403)
- New dependencies are required; they will be installed during the update
- The plugin has a daemon that must be started in order to refresh the routes
- Added new route settings: *Vehicle type*, *Avoid toll roads*, *Avoid roads requiring a vignette*, *Avoid ferries*
- Added new info commands for the 3 outbound and return trips: *Distance*
- Removal of "North American" compatibility
- Debian 12 & Python 3.11 required
- Jeedom v4.5 required

# 20/12/2025

- Correction for "North America" routes

# 29/11/2025

- Correction of the URL used following a change to Waze
- Jeedom version 4.4 or later required
- Debian 11 or later required

# 29/06/2025

- Optimizing requests to Waze to reduce latency

# 17/10/2022

- Update command list for Jeedom v4.3

# 17/03/2022

- Jeedom v4.2 compatibility

# 08/12/2021

- Added an option to configure which subscriptions to enable when calculating routes (see documentation)
- Added option to use any command from any plugin as start or end position
- Fixed extracting trip info due to a Waze API change

# 18/10/2021

- Improvements to the configuration pages for v4:
  - Adding the search box
  - Added a table-style view in device mode (Jeedom v4.2)
  - New presentation of the configuration page
  - New presentation of the list of objects in the equipment page
  - New presentation of the list of orders
- Added support for geolocation configured in the Jeedom core
- Add a custom auto-refresh cron job to the device configuration; please note that you must reconfigure your devices because cron30 is disabled; otherwise, routes will no longer be refreshed automatically.
- Fixed info extraction due to Waze API change

# 23/10/2019

- Improvement of the widget for jeedom v4

# 05/09/2019

- Bug correction on the widget in jeedom v4
- Bug fix for php 7.3
