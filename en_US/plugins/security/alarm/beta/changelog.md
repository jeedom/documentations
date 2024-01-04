# Changelog Alarm

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

# 03/01/2024

- Preparing for jeedom 4.4
- Fixed a problem with the "separate zones" option when changing mode
- Interface improvement

# 22/01/2020

- Improved logs in case of multiple alarms

# 21/10/2019

- Fixed a bug during the creation of the equipment

# 10/14/2019

- Fixed a bug when renaming a mode

# 28/04/2019

- Bugfix

# 23/04/2019

- Bugfix

# 01/17/2019

- Possibility of using variables or calculation for the Hold (s), Activation and Trigger times
- Updating the doc

# 18/07/2018

- Updating the doc
- Bug fix on renaming modes
- If the alarm is already active the arming does not reactivate it
- Addition of an option for a multi-zone trip (if another zone goes into alert then the alarm is triggered)
- Addition of action when resuming monitoring of a sensor
- Adding the tag #zone#
- Ad a button to duplicate an alarm

# 06/03/2018

- Addition of orphan order management
- If sensors are disabled then ok activation actions are no longer triggered
- Bugfix
- Detectors with activation delays and being always active after this delay no longer trigger the alarm, but launch a KO activation, with monitoring of this excluded detector until a return to normal

# 02/12/2018

- Fixed a bug on moving actions in trigger

- Possibility of adding a hold delay for a trigger before triggering the alarm

# 12/01/2017

-   Correction of a bug on deactivation of detectors

-   Management of seconds on the activation delay (JEED-63)

-   Backtracking on the non-initiation of immediate actions if
    the activation delay is empty or zero

-   If during activation a sensor is on alert and has no delay
    of activation then the alarm is armed nevertheless by ignoring this sensor
    (unless he comes back to rest)

-   Addition of global trigger action (no longer filtered by zone, it
    is recommended to use this rather than the actions of
    zone trigger)

-   Code optimization

-   Be careful : the alarm no longer performs immediate actions if there is no
    trigger delay !!!!!! ⇒ Canceled

-   Ability to filter the actions in relation to
    alarm mode

-   Add pause / resume command

-   Improvement of the configuration interface
