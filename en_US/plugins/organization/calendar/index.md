# Calendar plugin

The **Agenda** plugin lets you manage calendars and trigger actions at the start and/or end of an event.

# Setup

## Plugin configuration

This plugin does not require any special configuration and simply needs to be activated after installation.

## Equipment configuration

You can access the settings from the **Plugins → Organization → Calendar** menu.

On this page, you'll find a list of your schedules. Click on a schedule to access the settings for the corresponding device:

- **Calendar Name**: Name of the Calendar device.
- **Parent Object**: Specifies the parent object to which the device belongs.
- **Category**: Allows you to select the category of the device.
- **Options**:
  - **Activate**: Turns the device active.
  - **Visible**: Makes the device visible.

- **Widget**:
  - **Number of days**: Sets the maximum number of days to display on the widget.
  - **Number of events**: Sets the maximum number of events to display on the widget.

- **Calendar Event List**: Displays a list of all calendar events *(click on a name to edit the event)*.

The **Calendar** tab displays a calendar type view that includes all events. You can navigate through the calendar and choose to view it by year, month, week, day, or weekly schedule. Clicking on an event opens the edit window for that event.

# Events

## Creation of an event

To create a new event, click the **Add Event** button on the calendar configuration page to which the event should be linked, or click the **Duplicate** button in the configuration window for an event belonging to the same calendar.

## Event configuration

The event creation/configuration window allows you to define the settings, actions, and recurrence specific to each event. On the first tab, you’ll find:

- **Event Name**: Name of your event.
- **Hide on the widget**: Prevents this event from being displayed on the widget.
- **Icon**: Allows you to add an icon before the event name *(click the "Choose an icon" button)*.
- **Background Color**: Allows you to choose the background color of the event *(check the box for a transparent background)*.
- **Text Color**: Allows you to choose the color of the event text.

In the upper-right corner of the event editing window, there are three buttons:

- **Duplicate**: allows you to duplicate the event to create a new one *(be sure to save the new event that is created)*.
- **Save**: Saves the event.
- **Delete**: Deletes the entire event or just a single occurrence.

## Start / end actions

In this tab, you can define the actions to be performed at the start and/or end of the event. To add an action, simply click the **+ Start/End Action** button; you can add as many actions as you like.

![Add actions](../images/calendar_addActions.png)

Actions can be standard Jeedom commands or [scenario-specific commands](https://doc.jeedom.com/fr_FR/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques).

>**TIP**
>
>You can change the order of actions using drag-and-drop.

## Programming of events

This tab contains all the scheduling options for your event:

- **Dates**:
  - **Start**: the event's start date.
  - **End**: Event end date *(the icon at the end of the line lets you set the event to last all day)*.
- **Include by Date**: allows you to add a date of occurrence. You can specify multiple dates by separating them with ``, (commas)`` *(example: YYYY-MM-DD,YYYY-MM-DD)*. It is also possible to define a date range using ``: (colon)`` *(example: YYYY-MM-DD:YYYY-MM-DD)*.
- **Include by calendar**: allows you to include occurrences based on those of another calendar or another event. For example, if you have an event ``A`` that repeats every Monday and you include it in your current event, your current event will also repeat every Monday.
- **Exclude by date**: Same as **Include by date**, but used to ignore certain instances.
- **Exclude by calendar**: allows you to exclude this event based on another calendar or event *(to prevent two conflicting events from occurring at the same time, for example)*.

>**INFORMATION**
>
>The **Exclude by Date** and **Exclude by Calendar** options are only available if the event is set to repeat.

## Repetition of events

The "Repeat" feature allows you to configure the frequency of your events exactly as you wish:

- **Enable**: Check the box to enable the repeat function and display the corresponding options.
- **Mode - Single Repeat**:
  - **Repeat every**: allows you to set the frequency at which the event repeats *(every 3 days, every 2 months, etc…​)*.
  - **Only on**: allows you to restrict the repeat to certain days of the week.
- **Mode - Advanced Repeat**:
  - **Frequency**: allows you to set a recurring event, for example, every second Monday of the month...
- **Restriction**: Allows you to exclude holidays or restrict the event to holidays / even weeks / odd weeks only.
- **Until**: the latest date on which the event occurs.

>**INFORMATION**
>
>Public holidays apply only to metropolitan France.

# Diary, orders and scenario

A calendar has several commands:

- **In Progress**: Returns a comma-separated list of events currently in progress. To use this in a scenario, the simplest way is to use the *"contains"* (``matches``) or *"does not contain"* (``not matches``) operator *(example: ``[Apartment][test][In Progress] matches "/Birthday/"`` will be true if "Birthday" is in the list of current events)*.
- **Add a Date**: Allows you to add a date to an event from within a scenario. You can add multiple dates by separating them with commas *(note: if you change the event’s name, you’ll need to update it in the scenario)*.
- **Remove a Date**: Allows you to remove a date from an event within a scenario. You can remove multiple dates by separating them with commas *(note: if you change the event name, you’ll need to update it in the scenario)*.

>**INFORMATION**
>
>You can use the "In Progress" command as a scenario trigger. Each time the information is updated, the scenario will run; therefore, it is best to use this command in a scheduled scenario that includes a value check.

>**IMPORTANT**
>
>Please note: You must not create a repeating event that overlaps with itself, as the plugin does not handle this type of situation. For example, an event that lasts 48 hours and repeats every day.

# APIs

The API is based on the JSON-RPC API and provides the following methods for the plugin:

- **event::getAllCalendarAndEvents** retrieves all calendars and events
- **event::getAllEvents** retrieves all events from a calendar
- **event::byId** retrieves an event based on its ID
- **event::save** allows you to create or modify an event
- **event::remove** removes an event

## event::getAllCalendarAndEvents

**Input Parameters**
/None/

```json
{
    "jsonrpc": "2.0",
    "method": "event::getAllCalendarAndEvents",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar"
    }
}
```

**Example result**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": [
    {
      "id": "641",
      "name": "labo",
      "logicalId": "",
      "generic_type": null,
      "object_id": null,
      "eqType_name": "calendar",
      "isVisible": "0",
      "isEnable": "1",
      "configuration": {
        "createtime": "2023-03-16 14:40:50",
        "nbWidgetDay": 7
      },
      "timeout": null,
      "category": [],
      "display": {
        "backGraph::info": 0
      },
      "order": "9999",
      "comment": null,
      "tags": null,
      "status": {
        "lastCommunication": "2023-03-17 11:02:46",
        "timeout": 0,
        "warning": 0,
        "danger": 0
      },
      "cache": [],
      "events": [
        {
          "id": "2",
          "eqLogic_id": "641",
          "cmd_param": {
            "eventName": "Mon event",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "text_color": "#ffffff",
            "start": [],
            "end": [],
            "in_progress": 1
          },
          "startDate": "2023-03-17 10:30:00",
          "endDate": "2023-03-17 14:30:00",
          "repeat": {
            "includeDate": "",
            "includeDateFromCalendar": "",
            "excludeDate": "",
            "excludeDateFromCalendar": "",
            "enable": "0",
            "mode": "simple",
            "positionAt": "first",
            "day": "monday",
            "freq": 0,
            "unite": "days",
            "excludeDay": {
              "1": "1",
              "2": "1",
              "3": "1",
              "4": "1",
              "5": "1",
              "6": "1",
              "7": "1"
            },
            "nationalDay": "all"
          },
          "until": null
        },
        {
          "id": "3",
          "eqLogic_id": "641",
          "cmd_param": {
            "eventName": "Mon event 2",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "text_color": "#ffffff",
            "start": [],
            "end": [],
            "in_progress": 0
          },
          "startDate": "2023-03-17 11:30:00",
          "endDate": "2023-03-17 11:45:00",
          "repeat": {
            "includeDate": "",
            "includeDateFromCalendar": "",
            "excludeDate": "",
            "excludeDateFromCalendar": "",
            "enable": "0",
            "mode": "simple",
            "positionAt": "first",
            "day": "monday",
            "freq": 0,
            "unite": "days",
            "excludeDay": {
              "1": "1",
              "2": "1",
              "3": "1",
              "4": "1",
              "5": "1",
              "6": "1",
              "7": "1"
            },
            "nationalDay": "all"
          },
          "until": null
        },
        {
          "id": "4",
          "eqLogic_id": "641",
          "cmd_param": {
            "eventName": "Mon event",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "text_color": "#ffffff",
            "start": [],
            "end": [],
            "in_progress": 0
          },
          "startDate": "2023-03-18 10:30:00",
          "endDate": "2023-03-18 14:30:00",
          "repeat": {
            "includeDate": "",
            "includeDateFromCalendar": "",
            "excludeDate": "",
            "excludeDateFromCalendar": "",
            "enable": "0",
            "mode": "simple",
            "positionAt": "first",
            "day": "monday",
            "freq": 0,
            "unite": "days",
            "excludeDay": {
              "1": "1",
              "2": "1",
              "3": "1",
              "4": "1",
              "5": "1",
              "6": "1",
              "7": "1"
            },
            "nationalDay": "all"
          },
          "until": null
        },
        {
          "id": "5",
          "eqLogic_id": "641",
          "cmd_param": {
            "eventName": "Mon event",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "text_color": "#ffffff",
            "start": [],
            "end": [],
            "in_progress": 0
          },
          "startDate": "2023-03-18 10:40:00",
          "endDate": "2023-03-18 14:50:00",
          "repeat": {
            "includeDate": "",
            "includeDateFromCalendar": "",
            "excludeDate": "",
            "excludeDateFromCalendar": "",
            "enable": "0",
            "mode": "simple",
            "positionAt": "first",
            "day": "monday",
            "freq": 0,
            "unite": "days",
            "excludeDay": {
              "1": "1",
              "2": "1",
              "3": "1",
              "4": "1",
              "5": "1",
              "6": "1",
              "7": "1"
            },
            "nationalDay": "all"
          },
          "until": null
        }
      ]
    }
  ]
}
```

## event::getAllEvents

**Input Parameters**

- eqLogic_id /int/

```json
{
    "jsonrpc": "2.0",
    "method": "event::getAllEvents",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "eqLogic_id": 641
    }
}
```

**Example result**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": [
    {
      "id": "2",
      "eqLogic_id": "641",
      "cmd_param": {
        "eventName": "Mon event",
        "noDisplayOnDashboard": "0",
        "icon": "",
        "color": "#2980b9",
        "transparent": "0",
        "text_color": "#ffffff",
        "start": [],
        "end": [],
        "in_progress": 0
      },
      "startDate": "2023-03-17 10:30:00",
      "endDate": "2023-03-17 14:30:00",
      "repeat": {
        "includeDate": "",
        "includeDateFromCalendar": "",
        "excludeDate": "",
        "excludeDateFromCalendar": "",
        "enable": "0",
        "mode": "simple",
        "positionAt": "first",
        "day": "monday",
        "freq": 0,
        "unite": "days",
        "excludeDay": {
          "1": "1",
          "2": "1",
          "3": "1",
          "4": "1",
          "5": "1",
          "6": "1",
          "7": "1"
        },
        "nationalDay": "all"
      },
      "until": null
    },
    {
      "id": "3",
      "eqLogic_id": "641",
      "cmd_param": {
        "eventName": "Mon event 2",
        "noDisplayOnDashboard": "0",
        "icon": "",
        "color": "#2980b9",
        "transparent": "0",
        "text_color": "#ffffff",
        "start": [],
        "end": [],
        "in_progress": 0
      },
      "startDate": "2023-03-17 11:30:00",
      "endDate": "2023-03-17 11:45:00",
      "repeat": {
        "includeDate": "",
        "includeDateFromCalendar": "",
        "excludeDate": "",
        "excludeDateFromCalendar": "",
        "enable": "0",
        "mode": "simple",
        "positionAt": "first",
        "day": "monday",
        "freq": 0,
        "unite": "days",
        "excludeDay": {
          "1": "1",
          "2": "1",
          "3": "1",
          "4": "1",
          "5": "1",
          "6": "1",
          "7": "1"
        },
        "nationalDay": "all"
      },
      "until": null
    }
  ]
}
```

## event::byId

**Input Parameters**

- event_id /int/

```json
{
    "jsonrpc": "2.0",
    "method": "event::byId",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "event_id": 5
    }
}
```

**Example result**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": {
    "id": "5",
    "eqLogic_id": "641",
    "cmd_param": {
      "eventName": "Mon event encore modifié",
      "noDisplayOnDashboard": "0",
      "icon": "",
      "color": "#2980b9",
      "transparent": "0",
      "text_color": "#ffffff",
      "start": [
        {
          "options": {
            "enable": "1",
            "background": "0"
          },
          "cmd": "#2507#"
        },
        {
          "options": {
            "enable": "1",
            "background": "0",
            "level": "success",
            "message": "salut"
          },
          "cmd": "alert"
        }
      ],
      "end": [
        {
          "options": {
            "enable": "1",
            "background": "0"
          },
          "cmd": "#2507#"
        }
      ],
      "in_progress": 0
    },
    "startDate": "2023-03-18 10:19:00",
    "endDate": "2023-03-18 11:50:00",
    "repeat": {
      "includeDate": "",
      "includeDateFromCalendar": "",
      "excludeDate": "",
      "excludeDateFromCalendar": "",
      "enable": "0",
      "mode": "simple",
      "positionAt": "first",
      "day": "monday",
      "freq": 0,
      "unite": "days",
      "excludeDay": {
        "1": "1",
        "2": "1",
        "3": "1",
        "4": "1",
        "5": "1",
        "6": "1",
        "7": "1"
      },
      "nationalDay": "all"
    },
    "until": null
  }
}
```

## event::save

**Input Parameters**

- event /json object/

```json
{
    "jsonrpc": "2.0",
    "method": "event::save",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "event":    {
  "eqLogic_id": "641",
  "id": "5",
  "cmd_param": {
    "eventName": "Mon event encore modifié",
    "noDisplayOnDashboard": "0",
    "icon": "",
    "color": "#2980b9",
    "transparent": "0",
    "text_color": "#ffffff",
    "start": [
      {
        "options": {
          "enable": "1",
          "background": "0"
        },
        "cmd": "#[Aucun][ 00:15:bc:00:31:01:01:79][Sirene Off]#"
      },
      {
        "options": {
          "enable": "1",
          "background": "0",
          "level": "success",
          "message": "salut"
        },
        "cmd": "alert"
      }
    ],
    "end": [
      {
        "options": {
          "enable": "1",
          "background": "0"
        },
        "cmd": "#[Aucun][ 00:15:bc:00:31:01:01:79][Sirene Off]#"
      }
    ]
  },
  "startDate": "2023-03-18 10:19:00",
  "endDate": "2023-03-18 11:50:00",
  "repeat": {
    "includeDate": "",
    "includeDateFromCalendar": "",
    "excludeDate": "",
    "excludeDateFromCalendar": "",
    "enable": "0",
    "mode": "simple",
    "positionAt": "first",
    "day": "monday",
    "freq": "0",
    "unite": "days",
    "excludeDay": {
      "1": "1",
      "2": "1",
      "3": "1",
      "4": "1",
      "5": "1",
      "6": "1",
      "7": "1"
    },
    "nationalDay": "all"
  },
  "until": ""
}
    }
}
```

**Example result**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": {
    "id": null,
    "eqLogic_id": "641",
    "cmd_param": {
      "eventName": "Mon event encore modifié",
      "noDisplayOnDashboard": "0",
      "icon": "",
      "color": "#2980b9",
      "transparent": "0",
      "text_color": "#ffffff",
      "start": [
        {
          "options": {
            "enable": "1",
            "background": "0"
          },
          "cmd": "#2507#"
        },
        {
          "options": {
            "enable": "1",
            "background": "0",
            "level": "success",
            "message": "salut"
          },
          "cmd": "alert"
        }
      ],
      "end": [
        {
          "options": {
            "enable": "1",
            "background": "0"
          },
          "cmd": "#2507#"
        }
      ],
      "in_progress": 0
    },
    "startDate": "2023-03-18 10:19:00",
    "endDate": "2023-03-18 11:50:00",
    "repeat": {
      "includeDate": "",
      "includeDateFromCalendar": "",
      "excludeDate": "",
      "excludeDateFromCalendar": "",
      "enable": "0",
      "mode": "simple",
      "positionAt": "first",
      "day": "monday",
      "freq": 0,
      "unite": "days",
      "excludeDay": {
        "1": "1",
        "2": "1",
        "3": "1",
        "4": "1",
        "5": "1",
        "6": "1",
        "7": "1"
      },
      "nationalDay": "all"
    },
    "until": null
  }
}
```

## event::remove

**Input Parameters**

- event_id /int/

```json
{
    "jsonrpc": "2.0",
    "method": "event::remove",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "event_id": 5
    }
}
```

**Example result**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": "success"
}
```
