# Thermostat plugin

# Description

This plugin lets you create and manage thermostats to control your home's heating. It operates in two modes, which you can choose from:

-   **Hysteresis** mode involves turning the heating on and off based on the indoor temperature relative to a threshold corresponding to the setpoint. Hysteresis helps prevent the system from cycling on and off too frequently when the temperature is near the setpoint.
-   The **time-based** mode calculates a heating percentage based on a predefined time cycle, taking into account the differences between the setpoint and the indoor and outdoor temperatures (insulation). This mode is more accurate and features a learning function that automatically adjusts the coefficients, but it may require some manual adjustments to adapt it to your system. Important: For the time-based mode to work, you must have both an indoor AND an outdoor temperature sensor.

# Setup

This plugin is designed to create thermostats in Jeedom. It allows you to control heating, air conditioning, or both at the same time.

The advantage over a traditional thermostat is that it can be fully integrated into your home automation system. In addition to regulating temperature—which is, after all, its primary function—the thermostat can interact with all the devices in your home.

Its features include:

-   taking into account the outdoor temperature, and therefore the home’s insulation coefficient,
-   a control system that learns to optimize control,
-   the ability to control the windows to turn off the thermostat,
-   management of equipment failures, temperature sensors, and heating devices,
-   Comprehensive scheduling with the calendar plugin, including the ability to set the target temperature in advance so that it is reached at the scheduled time (Smartstart)

First, we’ll show you how to set it up, then we’ll go over the various thermostat configuration settings, and finally, using a few use cases, we’ll demonstrate how you can enhance its functionality by combining it with other plugins or using scenarios.

## Configuration in a few clicks

The Jeedom thermostat is very powerful, but for traditional use, setting it up is really quick and easy once you understand the essential steps:

-   Definition of the thermostat control mechanism (hysteresis or time-based). This refers to the choice of control algorithm.
-   Configuration and operating range: heating only, air conditioning, or both; minimum and maximum operating temperatures.
-   Defining the actions the thermostat must perform to heat, cool, or turn off.

Next, you'll find various tabs:

-   Configuring modes sets predetermined target temperatures. For example, Comfort mode at 20°C, Eco mode at 18°C. There may also be Day, Night, Vacation, Away, etc. You’re starting to see the possibilities for customizing the plugin here.
-   To fine-tune the mode of operation of the thermostat, you can also set up triggers that will temporarily pause the temperature control (for example, an open window can turn off the heat). Setting up this pause is easy right here.
-   Failure mode management for temperature sensors or the heating system allows you to define actions to be taken in the event of a degraded operating mode.
-   The Advanced Settings tab allows you to adjust the heating control settings.
-   If you also have the Calendar plugin, you can schedule mode changes directly from the Scheduling tab.

Your thermostat is now up and running, and by using scenarios or combining it with other plugins (calendar, virtual, presence, etc.), it will seamlessly integrate into your home automation system. Here’s what you’ll see by default on the Dashboard:

![View on the Dashboard](./images/thermostat.png)

The lock on the widget allows you to lock the thermostat at a specific setpoint in case of unforeseen circumstances, such as vacations, guests, etc.

## A Detailed Look at Building a Thermostat

To create a new thermostat, go to the configuration page by expanding the **Plugins → Comfort** menu and selecting **Thermostat**. Click the **Add** button in the upper-left corner and enter the name you want for your thermostat.

![General Configuration](./images/thermostat_config_générale.png)

First, we’ll enter the thermostat’s general settings. These can be found in the upper-left corner, under the “General” section. Here, you’ll need to specify the parent object, the activation settings, and the visibility of the thermostat—standard information for any Jeedom user.

## Choosing the Thermostat Algorithm

![Choosing the Algorithm](./images/thermostat31.png)

This image highlights the thermostat's operating mechanism. There are two possible algorithms for temperature control.

When you select **Hysteresis** mode, your heater turns on as soon as the temperature falls below the setpoint minus the hysteresis, and it turns off as soon as the temperature rises above the setpoint plus the hysteresis.

![Principle of Hysteresis Mode](./images/PrincipeHysteresis.png)

For example, if the hysteresis is set to 1°C and the setpoint is 19°C, then the heating is active when the temperature drops below 18°C and turns off as soon as it reaches 20°C.

The parameters to be provided are the hysteresis value in °C and the command used to retrieve the temperature reading. The hysteresis should be adjusted based on the sensor’s accuracy; for example, for a sensor accurate to 0.5°C, a hysteresis of 0.2°C is a good compromise.

You can choose to consider only positive hysteresis by checking the **Positive Hysteresis** box. In "Heating" mode, the thermostat will then turn on as soon as the indoor temperature falls below the setpoint; in "Cooling" mode, it will turn on as soon as the indoor temperature rises above the setpoint.

![Hysteresis](./images/thermostat1.png)

> **INFORMATION**
>
> The settings related to hysteresis are located in the **Advanced** tab.

In **Temporal** mode, the heating or cooling command is set to a predefined cycle, and the duration of the command depends on the difference between the setpoint and the temperature measured by the sensor. The algorithm also calculates the heating (or cooling) time for a cycle based on the room’s thermal inertia and insulation.

![How the timer mode works](./images/PrincipeTemporel.png)

Finally, the longer the cycle time, the slower the control response will be. Conversely, setting the cycle time too short will cause your heating system to cycle on and off frequently, which may not give it enough time to heat the room effectively. It is recommended that you do not set the cycle time too low (acceptable values range from 30 to 60 minutes).

This type of control system is more efficient; it enhances comfort and delivers substantial energy savings.

## The general configuration

In addition to the thermostat’s operating mode, you can choose whether the thermostat is used in heating mode, cooling mode, or both. Then you specify its operating range: the minimum and maximum setpoints will define the possible setpoint values available on the widget.

![Operational Setup](./images/configFonctionnement.png)

Next, you need to specify the commands used to measure temperatures. Note that the Scheduled mode requires the outdoor temperature. If you don’t have an outdoor sensor, this information can be provided by the “Weather” plugin.

![Selecting Sensors](./images/selectionsondes.png)

> **TIP**
>
> The fields `Température minimale` and `Température maximale` define the thermostat's operating range; if the temperature falls outside this range, a sensor failure is triggered *(See the section below on failure actions*).

You can also enter your heating system’s daily energy consumption in kWh *(optional)*, which will display an estimate of your heating system’s performance by calculating **energy consumption/DJU** *(degree-day unit)*. You can also display any command of your choice on the thermostat by entering it in the **Custom Command** field.

## The actions

Everything related to controlling the radiator or air conditioner is described in the **Actions** tab. You can define multiple actions there, which allows our thermostat to control various devices (such as zone-based operation or controlling another thermostat).

![Device Actions](./images/actionssurappareil.png)

Actions are commands that allow you to heat, cool (air conditioning), or stop the system. An additional action can be set to occur whenever the setpoint changes, whether in manual or automatic mode.

## Modes: The Starting Point for Automation

Modes (defined in the **Modes** tab) are preset thermostat settings that match your lifestyle. For example, *Night* or *Eco* mode sets the temperature you want when everyone is asleep. *Day* or *Comfort* mode determines how the thermostat operates to maintain a comfortable temperature when you’re at home. Nothing here is set in stone. You can define as many modes as you like and use them via scenarios (we’ll come back to this later).

In the image below, the *Comfort* mode has a setpoint of 19°C, and for *Eco* mode, the thermostat is set to 17°C. The *Vacation* mode sets the thermostat to 15°C in case of an extended absence. It is not visible on the Dashboard because it is a scenario that sets all devices to *Vacation* mode, thereby setting the thermostat to this mode.

![Defining Modes](./images/Definitionmodes.png)

To set a mode, follow these steps:

-   Click the *Add Mode* button,
-   Give this mode a name, for example `Eco`,
-   Add an action and select the *Thermostat* command for your thermostat device,
-   Set the desired temperature for this mode,
-   Check the **Visible** box to display this mode on the thermostat widget on the Dashboard.

>**IMPORTANT**
>
>Please note: When renaming a mode, you must update any scenarios or devices that use the old name to reflect the new one.

## Openings: to temporarily pause the thermostat

Let’s say you want to temporarily turn off your heater or air conditioner, for example, to ventilate the room where the thermostat is active. To detect when the window is opened, you’ll use a sensor mounted on the window sash, allowing you to set up this interruption by adding it in the “Openings” configuration tab. Two additional settings can be adjusted here: the durations for opening and closing the window, which will trigger the thermostat to pause and resume operation.

![Configuration of Openings](./images/configouvertures.png)

You can set up an alert to be sent if any of the doors or windows listed on this page remain open for more than `XX` minutes.

To configure the operation when the window opens:

-   Select the information from the opening sensor in the field `Ouvrant`
-   Adjust the time before the thermostat shuts off after the window is opened `Éteindre si ouvert plus de (min.) :`
-   Adjust the time after the window closes that allows the thermostat to restart in the field `Rallumer si fermé depuis (min.) :`
-   Click the *Save* button to save the recorded openings

> **TIP**
>
> You can define multiple openings; this is necessary when the thermostat controls a zone consisting of multiple rooms.

## Predict a degraded mode thanks to failure management

Failures can originate either from the temperature sensors or from the heating command system. The thermostat may detect a fault if the temperature deviates from the setpoint for an extended period.

### Temperature probe failure

The thermostat triggers a sensor fault if the last temperature reading is too old, if the indoor temperature is below the minimum or above the maximum setpoint, or if the value is invalid. When the fault occurs, it is possible to set the device to a predetermined mode, such as forcing a pilot-wire radiator to operate. More simply, sending a text message or notification allows you to be alerted and take manual action.

> **IMPORTANT**
>
> The `Délai entre 2 réceptions de T°` is located in the *Advanced* tab. This control uses the date the thermostat's temperature command was collected. Leave this field blank or set it to `0` disables delay control. The limits `Température minimale` and `Température maximale` are located in the *Equipment* tab; an empty limit disables the corresponding control.

![Sensor failure](./images/defaillancesonde.png)

To define a failure action:

-   Click the *Sensor Failure* tab,
-   Click the *Add a failure action* button
-   select an action and fill in the associated fields

You can enter multiple actions, which will be executed in sequence; for more complex actions, you can use a scenario *(type `scenario` (without an accent in the "Action" field, then click elsewhere to enter the scenario name)*.

In the sensor failure action options, the following tags allow you to customize notifications:

| Tag | Content |
| --- | --- |
| `#failure_message#` | Detailed message including the thermostat name, causes, temperature, and relevant limits, or the time and date of the last reception. |
| `#failure_reason#` | Active cause codes, separated by commas: `timeout`, `temperature_low`, `temperature_high`, `invalid_temperature`. |
| `#temperature#` | Last known temperature value. |
| `#last_collect#` | Date of the last command temperature reading. |
| `#slider#` | Thermostat setting, same as before. |

For example, enter `#failure_message#` in the text of a notification results in `[Maison][Salon] : Température intérieure 32 °C supérieure au maximum autorisé 30 °C` or `[Maison][Salon] : Aucune mise à jour de la température depuis 47 minutes (délai maximal : 30 minutes, dernière réception : …)`.

The general status remains `Défaillance sonde`. Details about the error are available in the logs and in the action options via the tags above.

Existing actions are retained. A persistent fault does not trigger the actions again at every check; the occurrence of a new cause triggers them only once, accompanied by a message listing all active faults. A return to normal resets each cause separately. Checks for timeouts and invalid values are shared by the time-based and hysteresis engines; exceeding the min/max limits continues to trigger their actions during periodic checks.

### Heating / air conditioning failure

Proper operation of the heating or air conditioning system depends on accurate setpoint monitoring. The thermostat analyzes temperature changes relative to the setpoint and the hot/cold failure margins over several cycles. The absolute minimum and maximum temperature limits are determined by the sensor failure described above.

> **IMPORTANT**
>
> The settings for detecting a heating/air conditioning failure are located in the *Advanced* tab. These are the `Marge de défaillance chaud` for heating and `Marge de défaillance froid` for air conditioning.

![Heating failure](./images/defaillancechauffage.png)

To define a failure action:

-   Click on the *Heating/Air Conditioning Failure* tab,
-   Click the *Add a failure action* button
-   select an action and fill in the associated fields

You can enter multiple actions, which will be executed in sequence; for more complex actions, you can use a scenario *(type `scenario` (without an accent in the "Action" field, then click elsewhere to enter the scenario name)*.

## Manage special cases with the advanced thermostat configuration

This tab contains all the settings for the thermostat in timer mode. In most cases, it is not necessary to change these values, as the self-learning feature will automatically calculate the coefficients. However, even though the thermostat can adapt to most situations, you can adjust the coefficients to optimize the configuration for your specific setup.

![Advanced Thermostat Settings](./images/configurationavancee.png)

The coefficients are as follows:

-   **Heating Coefficient / Cooling Coefficient**: This represents the gain of the control system. This value is multiplied by the difference between the setpoint and the measured indoor temperature to calculate the heating/cooling time.
-   **Hot Learning / Cold Learning**: This parameter indicates the progress of the learning process. A value of 1 indicates the start of learning, during which the algorithm performs a rough adjustment of the coefficients. As this parameter increases, the adjustment becomes more refined. A value of 50 indicates the end of learning.
-   **Heating/Cooling Insulation**: This coefficient is multiplied by the difference between the setpoint and the measured outdoor temperature to calculate the heating/cooling time. It represents the contribution of the outdoor temperature to the heating/cooling time, and its value is typically lower than the heating/cooling coefficient in the case of a well-insulated room.
-   **Heat Insulation Learning / Cold Insulation Learning**: Same function as above, but for insulation coefficients.
-   **Heating Offset (%) / Cooling Offset (%)**: The heating offset accounts for *internal heat gains*; normally, it should not be a fixed value, but we assume that the learning process incorporates the dynamic component into the other two coefficients. *Internal heat sources* include, for example, a computer that raises the temperature when turned on, but they can also include people (1 person = 80 W on average) and the refrigerator in the kitchen. In a south-facing room, a sunlit facade can provide additional heat. In theory, this coefficient is negative.
- **Offset to apply if the radiator is considered hot (%)**: Use this setting if your heating control system has significant thermal inertia, whether due to the radiators, the room layout (distance between the radiator and the temperature sensor), or the temperature sensor itself (depending on the model, their responsiveness varies). The visible consequence of this thermal inertia is a temporary overshoot of the setpoint during significant temperature increases (for example, when the setpoint changes from 15°C to 19°C). This parameter corresponds to the observed delay between the heating period (= the heater is on) and the period when the temperature measured by the sensor begins to rise, divided by the configured cycle length. For example, if there is a 30-minute delay between the start of heating and the start of the temperature rise, and the heating cycle duration is set to 60 minutes, this parameter can be set to 50%. Thus, when a 100% heating cycle is followed by another heating cycle, this parameter allows the system to account for the heat generated by the radiator during the first cycle—but not yet measured by the sensor—when calculating the second cycle, by reducing its heating power accordingly. The power of the second cycle will then be reduced by 50% compared to the calculation based on the temperature measured by the sensor.
-   **Auto-learning**: checkbox to enable/disable coefficient learning.
-   **Smart Start**: This option adds intelligence to the thermostat by anticipating changes to the setpoint so that the desired temperature is reached at the scheduled time. This option requires the calendar plugin. Please note that for Smart Start to work, the learning value must be greater than 25. Also, it only takes into account the event that is closest in time.
-   **Cycle (min)**: This refers to the thermostat’s calculation cycle. At the end of the cycle, based on the difference between the actual temperatures and the setpoint, the thermostat calculates the heating time for the next cycle.
-   **Minimum heating time (% of cycle)**: If the calculation results in a heating time shorter than this value, the thermostat determines that heating or cooling is not necessary, and the command will defer to the next cycle. This helps prevent damage to certain appliances, such as stoves, and also ensures true energy efficiency.
-   **Heating Failure Margin / Cooling Failure Margin**: This value is used to detect a malfunction in the heating or cooling system. When the temperature deviates from the setpoint by more than this margin for more than 3 consecutive cycles, the thermostat switches to heating failure mode.
- **Limits constant on/off cycling (wood pellets, natural gas, heating oil) and PID**: This option allows for control using different heat levels. The power feedback from the next cycle must provide the new heat level setpoint to the heating unit. Cycles end at 100%, so the cycle time must be short.
- **Delta setpoint - outdoor temperature for heating/cooling mode**: The thermostat selects the mode (heating or cooling) based on the setpoint and the outdoor temperature (for energy-saving purposes, we assume that the indoor temperature tends to match the outdoor temperature). You can use these settings to adjust the threshold. Ex: If you want 25 and it’s 22 outside, by default the thermostat will switch to heating mode (it’s just entering this mode for the calculation—it doesn’t mean it will actually heat), but if you set the heating delta to 4, it will no longer heat because 25–22 = 3 and 3 < 4, so it will switch to cooling mode (provided, of course, that the indoor temperature is higher than the setpoint).

> **GOOD TO KNOW**
>
> Self-learning is always active. However, the initialization phase can be relatively long *(allow about 3 days)*. During this phase, it is important to have sufficiently long periods during which the setpoint remains unchanged.

## Thermostat controls

![List of commands in the home automation summary](./images/thermostatlistecommandes.png)

Not all commands are accessible via programming; some are status updates returned by the plugin. In scenarios, you’ll find:

![List of commands in scenarios](./images/thermostatcommandesscenario.png)

-   **Modes**: You can switch between modes by directly executing the commands (here: Comfort, Morning Comfort, Eco, Vacation).
-   **Off**: This command turns off the thermostat; control is no longer active, and the heating/air conditioning is turned off
-   **Thermostat**: This refers to the thermostat's setpoint.
-   **lock**: lock command; the thermostat’s status cannot be changed (mode change, setpoint)
-   **unlock**: Unlocks the thermostat, allowing you to change its status
-   **Heating only**: the control system operates only for heating
-   **Cooling only**: the control system is active only for cooling
-   **Heating Offset**: Adjusts the heating offset coefficient corresponding to internal heat gains; a scenario can modify this setting based on a presence detector, for example
-   **Cooling offset**: same as above, but for air conditioning
-   **All allowed**: changes the thermostat's behavior so that it operates in both heating and cooling modes
-   **Power**: Available only in timer mode, this command specifies the percentage of heating/cooling time relative to the total cycle time.
-   **Performance**: Available only if you have an outdoor temperature sensor and an energy consumption command (in kWh, reset to 0 every day at 12:00 a.m.). This feature shows you the performance of your heating system relative to the unified degree-day index.
-   **Setpoint Delta**: Available only in timer mode, this command allows you to enter a calculation delta for the setpoint. If the value is greater than 0, the thermostat will check whether it needs to heat to (setpoint - delta/2); if so, it will heat up to (setpoint + delta/2). The benefit is that the system heats for longer periods but less frequently.

> **Tip**
>
> Using the thermostat in mode `Chauffage seulement` requires that you have defined the commands *To turn on the heat, what do I do?* and *To turn everything off, what do I do?* In mode `Climatisation seulement`, you need the commands *To cool down, I need to?* and *To turn everything off, I need to?*. And in mode `Tout autorisé`, you must have entered all three commands.

## A practical example of how to use the thermostat

Once your thermostat is set up, you need to program it. The best way to explain this is to use a real-life example. For instance, let’s say we want to program our thermostat based on the times when people are home.

To start, we’ll use two scenarios to set the heating to **Comfort** mode (setpoint 20°C) every weekday morning between 5:00 a.m. and 7:30 a.m., and then in the evening between 5:00 p.m. and 9:00 p.m. **Comfort** mode will also be activated on Wednesday afternoons from 12:00 PM to 9:00 PM and on weekends from 8:00 AM to 10:00 PM. The rest of the time, the heating system switches to **Eco** mode, with a setpoint of 18°C.

So, create the ***Comfort Heating*** scenario in scheduled mode:

![Scheduled scenario](./images/thermostat11.png)

and the code:

![Comfort Mode Scenario](./images/scenarioconfort.png)

Based on the same principle, the "Eco Heating" scenario:

![Scheduled scenario in Eco mode](./images/thermostat13.png)

and its code:

![Eco Mode Scenario](./images/scenarioeco.png)

Note that in the scenarios, thermostat control is comprehensive, as you can adjust the operating mode (heating or cooling only), the modes, the setpoint, and the lock/unlock status.

While creating scenarios can sometimes be complicated, when it comes to programming a thermostat, combining the thermostat’s actions with the calendar in the agenda plugin makes this easy to do.

The calendar plugin lets you take your scheduling a step further and, most importantly, reduces the risk of making mistakes. Unlike the previous scheduling method, the calendar will be clearly displayed on the screen, allowing you to account for holidays, vacations, and more. In short, you can control the thermostat based on your mode of life.

## Programming with the agenda plugin

We won’t be covering the Calendar plugin here, as the goal is to integrate it with the thermostat’s scheduling feature. Note that if you have the Calendar plugin installed, a *Scheduling* tab will appear in the thermostat’s settings, allowing you to access the associated calendar directly.

So we're going to create a new calendar called **Heating Schedule**, to which we'll add the events for changing the thermostat's mode.
Once the schedule has been created, we’ll add the following events: Morning (Monday through Friday from 5:00 a.m. to 7:30 a.m.), Evening (Monday, Tuesday, Thursday, and Friday from 5:00 p.m. to 9:00 p.m.), Wednesday (Wednesday from 12:00 p.m. to 9:00 p.m.), Weekend (from 8:00 a.m. to 10:00 p.m.), and Holidays. All of these events have the **Comfort** mode on the thermostat as their start action and the **Eco** mode as their end action:

![Calendar Actions](./images/agendaactions.png)

For the "Evening" event schedule:

![Event Schedule](./images/agendaprogrammation.png)

Simply repeat this for each event to create this colorful monthly calendar:

![monthly calendar view](./images/agendamensuel.png)

When you return to the thermostat settings, you can access calendar events directly from the "Scheduling" tab:

![thermostat programming tab](./images/thermostatongletprogrammation.png)

## Visualization of thermostat operation

Once the thermostat is set up, it's important to check how well it's working.

![Thermostat View Menu](./images/menuaccueilthermostats.png)

In the menu `Accueil`, you'll find the submenu `Thermostat`. The window that appears when you select this menu is divided into three sections:

-   The thermostat *widget*, to view the thermostat's current status,
-   a graph showing the cumulative heating time per day (in hours),
-   Another graph showing the setpoint curves, indoor temperature, and heating status.

![cumulative heating time of the thermostat](./images/graphecumultempsdechauffe.png)

*Cumulative Heating Time Chart*

![thermostat curve graph](./images/graphecourbesthermostat.png)

*Thermostat curve graph*

# Faq

>**Can the thermostat be used with underfloor heating, which has high thermal inertia?**
>
>The thermostat can adapt to virtually any situation, but if you have a specific setup, a thorough analysis of your system is required to adjust the coefficients. See the *advanced configuration* section to adjust the coefficients, particularly if you have underfloor heating. Several forum threads discuss using the thermostat with different types of heating systems (stoves, boilers, underfloor heating, etc.).

>**My coefficients keep changing**
>
>   That's normal; the system constantly adjusts its coefficients using the self-learning system.

>**How long does it take, in mode temporel, to learn?**
>
>On average, it takes 7 days for the system to learn and adjust to optimal settings

>**I can't seem to program my thermostat**
>
>You can program the thermostat either using a scenario or by using the Calendar plugin.

>**My thermostat never seems to switch to heating or cooling mode**
>
>If the thermostat does not have a command for heating and/or air conditioning, it cannot switch to those modes.

>**No matter how many times I change the temperature or mode, the thermostat always reverts to its previous setting**
>
>Make sure your thermostat isn't locked

>**In hysteresis mode, my thermostat never changes state**
>
>Since the temperature sensors do not automatically report their readings, it is recommended to set up a "monitoring cron job"

>**The thermostat curves (especially the setpoint) don't seem to be correct**
>
>Take a look at how the history of the commands in question is smoothed out. In fact, to improve efficiency, Jeedom averages the values over 5 minutes and then over an hour.

>**The Mode/Action tab is empty, and when I click the Add buttons, nothing happens**
>
>Try disabling Adblock (or any other ad blocker); for some unknown reason, these programs block the page's JavaScript for no apparent reason.
