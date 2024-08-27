# Alarm Plugin

The Alarm plugin allows Jeedom to have a real alarm system for its home automation, very simple to use and configure.

## Plugin configuration

After downloading the plugin, you just need to activate it, there is no additional configuration at this level.

## Immediate concept

This is a very important notion of the Alarm plugin and it is very important to understand it well. To simplify it is as if you had 2 alarms, the first : the immediate alarm which does not take into account the triggering times (note that it takes into account the activation times) and a second alarm which takes into account the triggering times.

**Why this immediate notion ?**

This immediate notion makes it possible to trigger very specific actions. For example : you go home and you have not deactivated the alarm, before activating the siren it may be good to broadcast a message reminding you to deactivate the alarm and if it is not done 1 minute later (delay d '' activation of 1 minute) to activate the siren.

This notion is found in different types of actions, each time its principle will be detailed.

## Equipements

The configuration of the Alarm equipment is accessible from the Plugin => Security menu.

Once an alarm is added you end up with :

-   **Name of the alarm equipment** : name of your alarm,
-   **Parent object** : indicates the parent object to which the equipment belongs,
-   **Category** : the category of the equipment (security in general for an alarm),
-   **Enable** : makes your equipment active,
-   **Visible** : makes your equipment visible on the dashboard,
-   **Active all the time** : indicates that the alarm will be permanently active (for example for a fire detection alarm),
-   **Arming Visible** : allows to make visible or not the alarm arming command on the widget,
-   **Immediate Status Visible** : allows you to make the immediate status of the alarm visible (see below for the explanation),
-   **Historize alarm status and status** : allows to log or not the state and the status of the alarm.
-   **Separate zones** : makes the zones independent in terms of alerts. Normally if a zone is on alert the plugin will ignore the other zones. By separating the zones it will repeat the actions for the other zones which would enter in alert
-   **Automatic reset** : when triggered the full alarm is rearmed to prevent subsequent triggers (in normal times it does not rearm until there has been a scenario / human action to do so)
-   **Do not take immediate actions if the sensor has no delay** : tells the alarm not to do immediate actions if the sensor does not have a trigger delay, the alarm will therefore only do the actions

> **Tip**
>
> For each action it is possible to specify the mode in which it should be executed or in all modes

## Zones

Main part of the alarm. This is where you configure the different zones and the actions (immediate and deferred by zone, note that it is also possible to configure them globally) to be done in the event of triggering. An area can either be volumetric (for the day for example) or perimeter (for the night) or also areas of the house (garage, bedroom, outbuildings…).).

A button at the top right allows you to add as many as you want.

> **Tip**
>
> It is possible to edit the name of the area by clicking on the name of the area (opposite the "Area name" label").

A zone is made up of different elements : - trigger, - immediate action, - action.

## Trigger

A trigger is a binary command, which when set to 1 will trigger the alarm. It is possible to reverse the trigger, so that it is the state 0 of the sensor which triggers the alarm, by putting "reverse" on YES. Once you have chosen your trigger, you can specify an activation delay in minutes (it is not possible to descend below the minute). This delay allows for example, if you activate the alarm before leaving home, not to trigger the alarm for a minute (the time to let you go out). In other cases, some motion detectors remain in triggered mode (value 1) for a certain time even if there is no detection, for example 4 minutes, so it is good to delay the activation of these sensors by 4 or 5 min so that the alarm does not go off immediately after activation. Then you have the trigger delay, unlike the activation delay which only takes place once when the alarm is activated, it is set up after each trigger of a sensor. The kinematics are as follows when the sensor is triggered (door opening, presence detection), if the activation times have passed, the alarm will trigger the immediate actions but will wait until the triggering time is over before triggering the actions. Finally you have the "reverse" button which allows you to reverse the triggering state of the sensor (0 instead of 1).

You also have a parameter **Maintain** which allows you to specify a trigger hold time before triggering the alarm. Ex if you have a smoke detector which sometimes raises false alarms you can specify a delay of 2s. When the alarm is triggered Jeedom will wait 2s and check that the smoke detector is still on alert if it is not the case it will not trigger the alarm.  

Little example to understand : on the first trigger (*\ [Salon \] \ [Eye \] \ [Presence \]*) I have here an activation time of 5 minutes and a trigger time of 1 minute. This means that when I activate the alarm, during the first 5 minutes no triggering of the alarm can take place because of this sensor. After this delay of 5 minutes, if a movement is detected by the sensor, the alarm will wait 1 minute (the time to let me deactivate the alarm) before triggering the actions. If I had had immediate actions these would have been triggered immediately without waiting for the end of the activation period, the non-immediate actions would have taken place after (1 minute after the immediate actions).

### Immediate action

As described above, these are actions that are triggered upon triggering without taking into account the trigger delay (but still taking into account the activation delay). You just have to select the desired action command and then according to it fill the execution parameters.

> **NOTE**
>
> When several zones are triggered successively, only the immediate actions of the 1st zone triggered are executed.

## Modes

The modes are quite simple to configure, you just have to indicate the active zones according to the mode.

> **Tip**
>
> It is possible to rename the mode by clicking on its name (opposite the "Mode name" label"). Attention during the renaming of a mode it is absolutely necessary to review the scenarios / equipment which use the old name to pass them on the new

> **NOTE**
>
> When renaming a mode, you must click on the alarm widget on the mode in question for a full consideration (otherwise Jeedom remains on the old mode)

> **Important**
>
> It is absolutely necessary to create at least one mode and assign zones to it otherwise your alarm will not work.

## Activation OK

This part defines the actions to be taken following an activation of the alarm. Here again, you will find the immediate notion which represents the actions to be done immediately after arming the alarm, then come the activation actions which are executed after the triggering times.

In the example, here I light a red lamp for example to indicate that the arming has been taken into account and I turn it off once the arming is complete (because normally there is no longer anyone in the perimeter of the alarm, otherwise it triggers it).

> **Important**
>
> Activation actions OK do not take into account activation times. If you have a delay on the activation of an opening sensor, even if your door is open the activation actions will be executed.

## Acitvation KO

These actions are executed if a sensor is triggered following the activation of the alarm or after the activation delay of a sensor if it is in alert

Here you can also add actions when resuming a sensor monitoring

## Trigger

Allows you to configure the global actions to be taken when an alarm is triggered. You do not have to add more if you have configured specific actions by zone.

## Deactivation OK

These actions are executed when the alarm is deactivated and it is not triggered. Example you go home, by opening the door it triggers the alarm, but you have set a trigger delay on the sensor and you cut the alarm before the end of the delay, the deactivation actions OK will be executed. If, on the other hand, you had stopped the alarm after the end of the triggering delay, this would not have been the case.

## Reset

This part allows you to define the actions to be done when the alarm is triggered and then deactivated. Here too there are immediate and deferred actions. Here is an example : you go home, the activation times have passed, but opening the door triggers the alarm. If you disable it (before trigger times) then immediate reset actions will be executed, but not normal reset actions. If you deactivate it after the trigger times, then the immediate and normal reset actions will be executed.

## FAQ

>**What are the possible tags ?**
>
> Possible tags are :
>
> - #mode# : name of the current mode
> - #alarm_trigger# : name of the command that triggered the alert
> - #zone# : name of the zone of ​​the command that triggered the alert

>**How to rearm a permanent alarm ?**
>
>Just click on one of the alarm modes (even the active one).

>**Can we put the delays in seconds ?**
>
>It is possible for the "Trigger delay" (you have to put decimal numbers, ex : 0.5 for 30 seconds) but not for the "Activation delay" (do not use decimal digits for this parameter).

>**I don't understand my alarm does nothing**
>
>Check that the alarm has an active mode
