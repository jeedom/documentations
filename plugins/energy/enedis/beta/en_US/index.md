# Enedis plugin

Plugin that retrieves electricity consumption data from smart meters *(such as Linky)* by querying the [**Enedis** customer account](https://mon-compte.enedis.fr/auth/XUI/#login/&realm=/enedis&forward=true){:target="\_blank"}.

You can access data on **consumption**, **production**, or both types of measurements directly from a device.

5 data points are reported for consumption, and the same 4 without the maximum power for production:
- **Hourly consumption** by half-hour *(in kW)*.
- **daily consumption** *(in kWh)*.
- **monthly consumption** *(in kWh)*.
- **annual consumption** *(in kWh)*.
- the **maximum power** *(in kVA)*.

Since Enedis does not provide data in real time, the plugin retrieves the previous day's data each day. Until it has retrieved all of the data, it queries the Enedis servers again every 30 minutes until 7:00 p.m., then resumes the next morning.

Each time data is retrieved, the day, month, year, and maximum power data are queried starting from January 1 of the current year, along with hourly data for the past 7 days. Previously recorded historical data is realigned with Enedis data: if Enedis provides data late or corrects it, the relevant values are updated.

# Setup

Like any Jeedom plugin, the **Enedis** plugin must be enabled after installation.

## Plugin configuration

If you haven't already done so, start by authorizing the sharing of Enedis data with Jeedom by clicking the **Authorize access to Enedis servers: Access my Enedis customer portal** button on the plugin's configuration page:

![Link to the Enedis customer portal](../images/link_enedis.png)

You will then be redirected to this page, where you must enter **your Jeedom Market credentials** and then click the **Validate** button:

![Jeedom Market Account Authentication](../images/Auth_Jeedom.png)

You will be redirected to the Enedis consent page, where you must **check the box** and click **Submit**:

![Enedis Authorization](../images/Auth_Enedis.png)

Once data sharing has been approved, this page appears:

![Success](../images/Auth_Enedis_success.png)

>**IMPORTANT**
>
>If you are unable to access one of these pages, disable your browser's ad blocker.

## Equipment configuration

To access the various **Enedis** devices, go to the **Plugins → Energy → Enedis** menu. The **+ Add** button lets you add a new meter/PDL.

Once data sharing has been authorized on the plugin's configuration page, all that's left to do is enter **the identification number of the relevant Delivery Point** *(PDL)* and the **type of measurement** to be retrieved.

When you first back up an active and configured device, the plugin will automatically create the necessary commands and import the historical data available on the Enedis website dating back to January 1 of the current year. This process may take several minutes; you can track its progress from the **Analysis → Logs** menu *(logs in ``debug``)*.

If you have not enabled **recording and collection of hourly consumption** in your Enedis account, you will need to check the **Hourly Data: Disable** box so that the corresponding commands are not created.

# Adding data

You can import historical data from previous years from the Enedis servers upon request. To do so, simply click the blue **Add Historical Data** button on the **Commands** tab for a device, in the **Action** column for the relevant command:

![Adding History](../images/enedis_addHistory.png)

For daily and maximum power commands, select the start year from the previous 3 years: the data for day, month, year, and maximum power will be included from January 1 of that year through January 1 of the current year.

For scheduled commands, select a start date within the last 3 years: the data will be integrated over the following 7 days, which is the maximum duration set by Enedis.

Then click **OK** to start the integration.

# Widget template

The plugin allows you to display consumption and/or production data in a widget template that mimics the appearance of a *Linky* meter, on both the desktop and mobile versions. Clicking the "**- \| +**" button lets you switch between consumption and production for those who have access to both types of measurements. An indicator also shows whether the data is up to date or not *(green = all data is up to date, orange = some data is not up to date, red = none of the data is up to date)*.

![Widget template](../images/enedis_screenshot1.png)

The widget template is enabled by default. To revert to the standard Jeedom widget, simply uncheck the **Widget Template** box in the **Information** tab of the device's advanced settings.

The template colors can be adjusted in the **Display** tab of the device's advanced settings, separately for the desktop and mobile versions:
- background color *(`Template : background-color`)*, green on the meter *(163, 204, 40)* when the **Default** checkbox is selected.
- the color of the title bar *(`Template : titlebar-color`)*, which is transparent when the device is created.

![Customize the widget](../images/enedis_customizeWidget.png)

# Faq

>**I'm getting data retrieval errors in the logs, even though the data is visible on the Enedis website**
>
>Sometimes you may need to go directly to the Enedis website to accept the most recent Terms of Service in order to regain access to your data. It may also be necessary to re-establish the Jeedom/Enedis connection from the plugin's configuration page.
