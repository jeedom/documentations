# Changelog Calendar

>**IMPORTANT**
>
>If there is no information about the update, it means that the update only involves documentation, translations, or text.

# 12/08/2026

- Fixed two fatal errors that could occur when restoring a backup
- New method for translating documentation and the changelog

# 09/06/2026

- Update the `fullcalendar` library from 6.1.9 to 6.1.20

# 08/06/2026

- Replacing jQuery with native JavaScript in desktop views
- Locking and Confirming the Closure of the Event Edit Window While an Event Is Being Edited
- Fixed several display issues in the event list
- Translation support for the widget
- Minimum required Jeedom core version: 4.4.12

# 26/08/2024

- Fixed a bug on the repetition of an event every hour
- Support for custom device images (Jeedom 4.5)

# 23/01/2024

- Fixed a bug when deleting an occurrence of a recurring event

# 08/01/2024

- Preparing for jeedom 4.4
- Users with limited rights can now make changes from the widget

# 01/12/2023

- Optimization of the **Include/Exclude by Date** occurrence calculation

# 27/11/2023

- Update the `fullcalendar` library from 6.0.1 to 6.1.9
- Add a **Year** view
- The selected view is saved when saving the equipment

# 17/03/2023

- Providing an API to list, add, modify, and delete an event.

# 22/12/2022

- Update the `fullcalendar` library from 3.10.5 to 6.0.1
- Added a **Schedule** view listing all events for the week
- Minimum required Jeedom core version: 4.2

# 25/01/2022

- Fixed a bug that could shift repeated events with a start or end date between 2 a.m. and 3 a.m
- V4.2 optimizations

# 02/12/2021

- Bugfix
- Preparation for Jeedom 4.2
- Switch to stable version

# 08/11/2021

- Possibility to include / exclude dates according to all the events of a diary

# 21/10/2021

- Addition of the layout of equipment in table mode

# 11/12/2020

- Update to the calendar display library *(fixes a display bug in week mode)*

# 07/12/2020

- Fixed a bug on the color of events in the agenda in V4

# 29/10/2020

- Fixed a bug on annual repetitions and 32bits OS

# 20/03/2020

- Bug fix in Spanish

# 15/11/2019

- Bugfix

# 23/10/2019

- Widget improvement

# 14/10/2019

- Improved interface

# 03/06/2019

- Bugfix

# 13/05/2019

- Bugfix

# 09/05/2019

- Bugfix

# 28/04/2019

- Bugfix

# 08/04/2019

- Bugfix
- Improved interface

# 18/03/2019

- When deleting an event the end actions are no longer executed
- Improved interface
- Bugfix

# 08/01/2018

- Fixed a bug when including/excluding dates if they are excluded/included

# 14/10/2018

- Bug correction on unrepeated events

# 12/10/2018

- Adding a reprogramming of all events every day at 00:00

# 16/10/2018

- Minor interface fix
- Addition of order for the inclusion / exclusion of date from the scenarios

# 15/10/2018

- Correction of a bug on the inclusion of date

# 29/03/2018

- Correction of a bug on "until" if the repetition is not a simple repetition

# 26/03/2018

- Correction of a bug on the images of the configuration page
- Fixed a bug that occurred when calculating event recurrence if no time range was defined.

# 02/03/2018

- If an event is in progress when the agenda is reactivated, the start actions are launched

# 27/02/2018

- Removal of activation/deactivation commands *(to deactivate a schedule from a scenario, you must now use the device deactivation function)*
