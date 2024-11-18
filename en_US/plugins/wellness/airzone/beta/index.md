# Airzone plugin


# Description

Plugin to manage and control your Airzone systems


# Prerequisites

 - Jeedom v4.4.2
 - Know the IP addresses of your gateways


# Installation

After downloading the plugin, you must first activate it, like any Jeedom plugin.


# Configuration

Go to the Plugins / Plugins management menu


Choose the desired Cron for the refresh of the values :  5, 10, 15, 30, Hourly or Daily.

Choose the Wait time between requests for each zone; by default 10s if empty field.

Sauvegardez


# Adding equipment

Go to the Plugins / Comfort / AirzoneJeedom menu


Click Add Gateway.

![config](../images/airzoneEquipement.png)

You can configure an IP address there.

After saving, you can click Start Scan

IMPORTANT : If you have an area that contains special characters, this can cause a SystemOut of Range error.



# Page Plugin :

![pluginView](../images/airzoneEqlogics.png)

You can find on the plugin page, the gateways on the left side, as well as their scanned and associated zones on their right side

Note that the Masters zones have a yellow icon, to clearly differentiate them


# Dashboard


After creating your equipment, you will find them on the dashboard.

The mode icons change depending on the selected mode: Cold, Hot, Ventilation, Dry, and Stop.

To benefit from the colored icons, remember to go to the settings of your Jeedom (Settings / System / Configuration / Interface), and check "Colored Widget Icons"

Only the Master zones have the drop-down menu to change the mode in the associated zones configured in your system

The Setpoint and Temperature info icons change according to the value windows : -20 ° c, between 20 and 25 ° C, more than 25 ° C (and the equivalent if the zone is set in Fahrenheit)

The choices available in the modes, or the fan speeds are detected according to the possibilities of your system.



Typical equipment :

![config](../images/airzoneWidgets.png)


Equipment of a master zone; we see an additional command to activate the same mode on all the associated zones of the system


