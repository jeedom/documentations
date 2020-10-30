# Calendar plugin

Plugin allowing to create an agenda and trigger actions (command or scenario).

# Plugin configuration

The configuration is very simple, after downloading the plugin, you just need to activate it and that's it.

# Equipment configuration

The configuration of the Agenda equipment is accessible from the Plugins menu then Organization.

Once on it you will find the list of your Agenda.

Here you find all the configuration of your equipment :

-   **Name of equipment** : name of your calendar.
-   **Parent object** : indicates the parent object to which the equipment belongs.
-   **Category** : equipment categories (it can belong to several categories).
-   **Activate** : makes your equipment active.
-   **Visible** : makes it visible on the dashboard.
-   **Widget, number of days** : sets the number of event days to display on the widget.
-   **Maximum number of events** : defines the maximum number of events to display on the dashboard.
-   **Do not display status and activation / deactivation commands** : allows you to hide the status of the calendar as well as the commands for activating or not activating it.
-   **List of calendar events** : display below the list of all calendar events (clicking on it allows you to edit the event directly).
-   **Add event** : add an event to the calendar.
-   **Agenda** : Display of an agenda type view with all the events you can move in, choose to display it by week or day, move events (drag and drop) and a click on an event will open its editing window.

# Editing an event

The most important part of the plugin, this is where you will be able to configure your event.

## Event

Here you find :

-   **Name of the event** : Name of your event.
-   **Icon** : allows you to add an icon in front of the name of your equipment (to do this you must click on "Choose an icon").
-   **Color** : allows you to choose the color of your event (a checkmark also allows you to make it transparent).
-   **Text color** : allows you to choose the color of your event text.
-   **Do not show in the dashboard** : allows not to display this event on the widget.

## Start action

Allows you to choose the action (s) to do when launching the event.

To add an action just click on the + button at the end of the line then you will have a button to search for an order once it is found you will have the choice of options if it has any. You can add as much action as you want.

> **Tip**
>
> It is possible to modify the order of actions by holding / dragging it


> **Tip**
>
>It is possible to do the same actions as in the scenarios (see [here](https://jeedom.github.io/core/en_US/scenario))

## End action

Same as the start action but this time it is the action (s) to perform at the end of the event.

## Programmation

This is where all the time management of your event is located :

-   **Start** : Event start date.
-   **End** : Event end date.
-   **All day** : allows to define the event over the whole day.
-   **Include by another calendar** : Allows you to include another event in your current event. For example, if you have an event A repeated every Monday, and you include this event A in your current event, then this event will be automatically repeated every Monday.
-   **Include** : allows to force an occurrence date, you can put several by separating them with, (commas), you can also define a range with : (two points).
-   **Say again** : allows you to say that your event is repeated (if this box is not checked you will not have the following options).
-   **Repeat mode** : allows to specify the repeat mode, either simple : every day, every X days ... or repeat every 1st, 2nd ... to repeat an event every 3rd Monday of the month for example (the following options may be different depending on this choice).
-   **Repeat every** : \ [single repeat mode only \] allows you to define how often the event will repeat (eg every 3 days or every 2 months).
-   **The** : \ [repeat mode the first, the second… only \] allows you to choose a repeat every 2nd Monday of the month for example.
-   **Only the** : allows you to restrict repetition to certain days of the week.
-   **Restriction** : allows to restrict the event only on public holidays or to exclude public holidays.
-   **Until** : gives the end date of occurrence of the event.
-   **Exclude by another calendar** : allows you to exclude this event according to another agenda (for example to avoid that 2 contradictory events are found together).
-   **Exclude** : same as "Include" but this time to exclude dates.

> **NOTE**
>
> Public holidays are French and only French this does not work for other countries

> **NOTE**
>
> At the top right you have 3 buttons, one to delete, one to save and one to duplicate. When clicking on this last jeedom displays the event resulting from the duplication so that you can change the name for example.So don't forget to save following a click on the duplicate button

## Diary, orders and scenario

An agenda has controls :

-   **Running** : gives a list of current events separated by commas, to use it in the simplest scenario and to use the operator contains (matches) or does not contain (not matches), for example *\ [Apartment \] \ [test \] \ [In progress \]* matches "/ Anniv /", will be true if in the list of current events there is a "Anniv"
- **Add a date** : allows from a scenario to add a date to an event (be careful if you change the name of the event you will have to correct it in the scenario as well). You can put several events separated by ,
- **Remove a date** : allows from a scenario to exclude a date from an event (be careful if you change the name of the event you will have to correct it in the scenario as well). You can put several events separated by ,

> **NOTE**
>
> It is possible to use the "In progress" command as a trigger in a scenario, each update of the information will trigger the execution of the scenario. However, it is preferable to use this command in a programmed scenario with a test on the value.
