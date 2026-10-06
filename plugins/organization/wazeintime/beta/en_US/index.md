# Waze in Time plugin

This plugin provides trip information (including traffic conditions) via Waze. This plugin may stop working if Waze no longer allows queries to its website.

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

# Setup

## Plugin configuration

To use the plugin, you must download, install, and activate it just like any other Jeedom plugin.

Next, you'll need to create your route(s). Go to the Plugins/Organization menu, where you'll find the Waze in Time plugin:

![configuration1](../images/configuration1.jpg)

You will then be taken to a page that lists your devices (you may have multiple Routes) and allows you to create new ones by clicking the "Add" button:

![wazeintime screenshot2](../images/eqlogic_list.png)

You will then be taken to the configuration page for your route:

![wazeintime screenshot3](../images/eqlogic_config.png)

On this page, you'll find three sections:

### General settings

In this section, you’ll find all Jeedom configurations. These include the name of your device, the object you want to associate it with, the category, whether you want the device to be active or not, and whether you want it to be visible on the dashboard.

Finally, you can configure auto-refresh if you wish. If you do not configure anything, the trip information will not be updated automatically.

### Trip parameters

This section is one of the most important; it allows you to set the start and end times.

- These infos must be the latitudes and longitudes of the positions
- You can find them by using the website provided—just click the link on the page (simply enter an address and click “Get GPS Coordinates”)

There are several ways to provide them:

- manually, you must then directly encode the latitude and longitude
- via an info command from another Jeedom plugin; you must then select the command that returns the information in the 'latitude,longitude' format
- via the Jeedom settings (see the Jeedom settings menu)
- by directly selecting a command from the geoloc or geoloc_ios plugin, if these plugins exist (this option should no longer be used for new devices; instead, use the command selection option explained above)

You can also select which subscriptions should be activated when calculating the route. Enter a comma-separated list of values, or _*_ to activate all of them.

### Display settings

This setting simply hides the selected routes in the widget on the dashboard; however, they will still be updated when the device is refreshed.

### Commands

![config3](../images/cmd_list.png)

- Duration 1, 2, & 3: one-way travel time for routes 1, 2, & 3
- Route 1, 2, & 3: Route names 1, 2, & 3 (provided by Waze)
- Return trip duration 1, 2, and 3: return trip duration for routes 1, 2, and 3
- Return Trip 1, 2, & 3: Name of Return Trip 1, 2, & 3 (provided by Waze)
- Refresh: Refreshes the information

All these commands are available via scenarios and via the dashboard

# The widget

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

- The button in the upper right corner refreshes the information.
- All information is visible (for routes, if the route is long, it may be truncated, but the full version is visible when you hover over it with the mouse)

# How are routes updated?

The information is refreshed based on the device's auto-refresh settings. If nothing is configured, the routes will never be updated automatically.
You can refresh them on demand using a scenario with the "refresh" command, or via the dashboard using the double arrows.
