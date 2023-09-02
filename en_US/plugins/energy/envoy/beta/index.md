# Enphase Envoy plugin

Plugin to collect photovoltaic information from Envoy gateways

# Configuration

In order to configure the plugin, it is necessary to fill in the following information :

- Gateway IP address sent
- Envoy password (if this has not been changed, it is the last 6 characters of the serial number.)

Then, by clicking on the "Synchronize" button, all equipment will be automatically created.

# Information reported

The plugin allows you to report the following information (if you have an Envoy-s Metered) :

- General (update every minute)
    - Number of microinverters
    - Number of batteries
    - Battery status (charging / discharging / idle)
    - % of battery charge
    - Battery production (in W)
    - Instantaneous production (in W)
    - Daily production (in Wh)
    - Production of the last 7 days (in Wh)
    - Production since commissioning (in Wh)
    - Instantaneous total power (in W)
    - Daily consumption (in Wh)
    - Consumption of the last 7 days (in Wh)
    - Consumption since commissioning (in Wh)
    - Instantaneous net power (in W)
    - Daily net consumption (in Wh)
    - Net consumption of the last 7 days (in Wh)
    - Net consumption since commissioning (in Wh)
- For each microinverter (update every 5 minutes)
    - Provisioned (Yes / No)
    - Communication (Yes / No)
    - Production (Yes / No)
    - Power (in W)
    - Max power (in W)
- For each battery (update every 5 minutes)
    - Provisioned (Yes / No)
    - Communication (Yes / No)
    - Production (Yes / No)
    - Power (in W)
    - Max power (in W)
    - % dump
    - Maximum temperature (in ° C)

# V7 firmware

If you are in firmware v7 you can either retrieve the token yourself by going [there](https://entrez.enphaseenergy.com/), connect then click on "Create access token" and copy the jwt code in the configuration of the jeedom plugin (At the moment we do not know if this code is valid for an unlimited period or only for a few months). **OR** you indicate in your Enphase username in "[v7] Username", your password in "[v7] Password" and finally the serial number of your gateway in "[v7] Serial number of the send", with this information jeedom will automatically retrieve the token as soon as necessary.
