# Calendar plugin

The plugin **Agenda** allows you to manage calendars and trigger actions at the start and / or end of an event.

# Configuration

## Plugin configuration

This plugin does not require any special configuration and must simply be activated after installation.

## Equipment configuration

The equipment is accessible from the menu **Plugins → Organization → Agenda**.

On this page you will find the list of your Agendas. Click on an agenda to access the configuration of the corresponding equipment :

- **Calendar name** : Equipment Name Calendar.
- **Parent object** : Indicates the parent object to which the equipment belongs.
- **Category** : Allows you to choose the category of the equipment.
- **Options** :
    - **Activate** : Allows to make the equipment active.
    - **Visible** : Makes equipment visible.

- **Widget** :
    - **Number of days** : set the maximum number of days to display on the widget.
    - **Number of events** : set the maximum number of events to display on the widget.

- **List of calendar events** : displays the list of all calendar events *(a click on the name allows you to edit the event)*.

The tab **Agenda** allows you to display an agenda type view including all events. You can move around the calendar, choose to display it by day, week or month and even move events by drag and drop. Clicking on an event opens the editing window for the event concerned.

# Events

## Creation of an event

To create a new event, click on the button **Add event** from the configuration page of the agenda to which the event must be attached or on the button **Duplicate** from the configuration window of an event belonging to the same agenda.

## Event configuration

The event creation / configuration window allows you to define the parameters, actions and recurrence specific to each event. On the first tab, you find :

-   **Name of the event** : Name of your event.
-   **Hide on Widget** : allows not to display this event on the widget.
-   **Icon** : allows you to add an icon in front of the name of the event *(click on the button "Choose an icon")*.
-   **Background color** : allows you to choose the background color of the event *(check the box for a transparent background)*.
-   **Text color** : allows you to choose the color of the event text.

At the top right of the event editing window are 3 buttons:

- **Duplicate** : allows you to duplicate the event to create a new one *(remember to save the new event thus generated)*.
- **Save** : allows you to save the event.
- **To delete** : allows you to delete the entire event or only one occurrence.

## Start / end actions

In this tab, you will be able to define the actions to be performed at the start and / or at the end of the event. To add an action, just click on the button **+ Start / end action**, you can add as many actions as you want.

![Ajouter des actions](../images/calendar_addActions.png)

The actions can be standard Jeedom commands or [scenario specific commands](https://doc.jeedom.com/en_US/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques).

>**TRICK**
>
>It is possible to change the order of actions by dragging and dropping.

## Programming of events

It is in this tab that you can find all the time management of your event :

- **Dates** :
    - **Start** : Event start date.
    - **End** : Event end date *(the icon at the end of the line is used to define the event over the whole day)*.
- **Include by date** : allows you to add a date of occurrence. You can define several by separating them by ``, (virgules)`` *(exemple: YYYY-MM-DD, YYYY-MM-DD)*. It is also possible to define a date range with ``: (deux points)`` *(exemple: AAAA-MM-JJ:AAAA-MM-JJ)*.
- **Include by calendar** : allows you to include occurrences according to those of another agenda or of another event. For example, you have an event ``A``, repeated every Monday, which you include in your current event : then your current event will also be repeated every Monday.
- **Exclude by date** : same as **Include by date** but to ignore occurrences.
- **Exclude by calendar** : allows you to exclude this event according to another agenda or event *(to avoid that 2 contradictory events are found together for example)*.

>**INFORMATION**
>
>The options **Exclude by date** and **Exclude by calendar** are only accessible if event repetition is activated.

## Repetition of events

The repetition will allow you to configure the occurrences of your events exactly as you wish :

- **Activate** : check the box to activate the repetition and display the corresponding options.
- **Mode - Single repeat** :
    - **Repeat every** : allows you to define the repetition frequency of the event *(every 3 days, every 2 months, etc)*.
    - **Only the** : allows you to restrict repetition to certain days of the week.
- **Mode - Advanced repeat** :
    - **Frequency** : allows you to choose a repetition every 2nd Monday of the month for example...
- **Restriction** : allows to exclude public holidays or to restrict the event to public holidays / even weeks / odd weeks only.
- **Until** : last date of occurrence of the event.

>**INFORMATION**
>
>Public holidays only concern metropolitan France.

# Diary, orders and scenario

A diary has several commands :

- **Running** : gives the list of current events separated by commas. To use it in a scenario, the easiest way is to use the operator *"contient"* (``matches``) Where *"does not contain"* (``not matches``) *(example : ``[Appartement][test][Running] matches "/Anniv/"`` will be true if in the list of current events there is "Anniv")*.
- **Add a date** : allows, from a scenario, to add a date to an event. You can add multiple dates by separating them with commas *(be careful if you change the name of the event, it will have to be changed in the scenario)*.
- **Remove a date** : allows, from a scenario, to remove a date from an event. You can remove multiple dates by separating them with commas *(be careful if you change the name of the event, it will have to be changed in the scenario)*.

>**INFORMATION**
>
>It is possible to use the "In progress" command as a scenario trigger. Each information update will trigger the execution of the scenario, so it is preferable to use this command in a scenario programmed with a test on the value.

>**IMPORTANT**
>
>Attention it is important not to make repeated event that overlaps itself, this kind of case is not managed by the plugin. Example an event that lasts 48 hours and repeats every day.
