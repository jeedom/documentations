# Enphase Envoy plugin

Plugin to collect photovoltaic information from Envoy gateways

# Configuration

In order to configure the plugin, it is necessary to fill in the following information :

- Gateway IP address sent
- Sender password (if it has not been changed, these are the last 6 characters of the serial number.)

Then, by clicking on the "Synchronize" button, all equipment will be automatically created.

# Information reported

The plugin allows you to upload the following information (if you have an Envoy-s Metered) :

- General (shift every minute)
    - Number of microinverters
    - Number of batteries
    - Battery status (charging / discharging / idle)
    - % of battery charge
    - Battery production (in W)
    - Instantaneous production (in W)
    - Production of the day (in Wh)
    - Production of the last 7 days (in Wh)
    - Production since commissioning (in Wh)
    - Total instantaneous power (in W)
    - Consumption of the day (in Wh)
    - Consumption of the last 7 days (in Wh)
    - Consumption since commissioning (in Wh)
    - Instantaneous net power (in W)
    - Daily net consumption (in Wh)
    - Net consumption for the last 7 days (in Wh)
    - Net consumption since commissioning (in Wh)
- For each microinverter (shift every 5 minutes)
    - Provisioned (Yes / No)
    - Communication (Yes / No)
    - Production (Yes / No)
    - Power (in W)
    - Max power (in W)
- For each battery (shift every 5 minutes)
    - Provisioned (Yes / No)
    - Communication (Yes / No)
    - Production (Yes / No)
    - Power (in W)
    - Max power (in W)
    - % dump
    - Maximum temperature (in ° C)
