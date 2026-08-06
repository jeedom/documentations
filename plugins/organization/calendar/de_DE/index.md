# Kalender-Plugin

Das Plugin **Agenda** ermöglicht es Ihnen, Kalender zu verwalten und Aktionen zu Beginn und / oder Ende eines Ereignisses auszulösen.

# Configuration

## Plugin Konfiguration

Dieses Plugin erfordert keine spezielle Konfiguration und muss nach der Installation einfach aktiviert werden.

## Gerätekonfiguration

Die Ausrüstung ist über das Menü zugänglich **Plugins → Organisation → Agenda**.

Auf dieser Seite finden Sie die Liste Ihrer Agendas. Klicken Sie auf eine Agenda, um auf die Konfiguration der entsprechenden Geräte zuzugreifen :

- **Kalendername** : Gerätenamen-Kalender.
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
- **Kategorie** : Ermöglicht die Auswahl der Gerätekategorie.
- **Optionen** :
  - **Aktivieren** : Ermöglicht es, das Gerät aktiv zu machen.
  - **Sichtbar** : Macht Ausrüstung sichtbar.

- **Widget** :
  - **Anzahl der Tage** : Legen Sie die maximale Anzahl von Tagen fest, die auf dem Widget angezeigt werden sollen.
  - **Anzahl der Veranstaltungen** : Legen Sie die maximale Anzahl von Ereignissen fest, die auf dem Widget angezeigt werden sollen.

- **Liste der Kalenderereignisse** : zeigt die Liste aller Kalenderereignisse an *(ein Klick auf den Namen ermöglicht es Ihnen, das Ereignis zu bearbeiten)*.

Die Registerkarte **Agenda** ermöglicht die Anzeige einer Agenda-Typ-Ansicht mit allen Ereignissen. Sie können sich im Kalender bewegen und ihn nach Jahr, Monat, Woche, Tag oder Wochenplan anzeigen lassen. Ein Klick auf ein Ereignis öffnet das Bearbeitungsfenster für das betreffende Ereignis.

# Veranstaltungen

## Erstellung einer Veranstaltung

Um eine neue Veranstaltung zu erstellen, klicken Sie auf die Schaltfläche **Ereignis hinzufügen** von der Konfigurationsseite der Agenda, an die die Veranstaltung angehängt werden muss, oder auf der Schaltfläche **Duplikat** aus dem Konfigurationsfenster einer Veranstaltung, die zur gleichen Agenda gehört.

## Ereigniskonfiguration

Im Fenster zur Ereigniserstellung / -konfiguration können Sie die für jedes Ereignis spezifischen Parameter, Aktionen und Wiederholungen definieren. Auf der ersten Registerkarte finden Sie :

- **Name der Veranstaltung** : Name Ihrer Veranstaltung.
- **Auf Widget ausblenden** : erlaubt, dieses Ereignis nicht im Widget anzuzeigen.
- **Symbol** : ermöglicht das Hinzufügen eines Symbols vor dem Namen des Ereignisses *(Klicken Sie auf den Button "Wählen Sie ein Symbol")*.
- **Hintergrundfarbe** : ermöglicht es Ihnen, die Hintergrundfarbe des Ereignisses auszuwählen *(Aktivieren Sie das Kontrollkästchen für einen transparenten Hintergrund)*.
- **Textfarbe** : ermöglicht Ihnen, die Farbe des Ereignistextes zu wählen.

Oben rechts im Ereignisbearbeitungsfenster befinden sich 3 Schaltflächen:

- **Duplikat** : ermöglicht es Ihnen, das Ereignis zu duplizieren, um ein neues zu erstellen *(Denken Sie daran, das so generierte neue Ereignis zu speichern)*.
- **Speichern** : ermöglicht Ihnen, das Ereignis zu speichern.
- **Löschen** : ermöglicht es Ihnen, das gesamte Ereignis oder nur ein Ereignis zu löschen.

## Aktionen starten / beenden

In dieser Registerkarte können Sie die Aktionen definieren, die zu Beginn und / oder am Ende des Ereignisses ausgeführt werden sollen. Um eine Aktion hinzuzufügen, klicken Sie einfach auf die Schaltfläche **+ Aktion starten / beenden**, Sie können so viele Aktionen hinzufügen, wie Sie möchten.

![Ajouter des actions](../images/calendar_addActions.png)

Die Aktionen können Standardbefehle von Jeedom sein oder [szenariospezifische Befehle](https://doc.jeedom.com/de_DE/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques).

>**TRICK**
>
>Es ist möglich, die Reihenfolge der Aktionen durch Ziehen und Ablegen zu ändern.

## Programmierung von Veranstaltungen

In dieser Registerkarte finden Sie die gesamte Zeitverwaltung Ihrer Veranstaltung :

- **Termine** :
  - **Anfang** : Startdatum des Ereignisses.
  - **Ende** : Ereignisenddatum *(das Symbol am Ende der Zeile wird verwendet, um das Ereignis über den ganzen Tag zu definieren)*.
- **Nach Datum einschließen** : ermöglicht Ihnen das Hinzufügen eines Ereignisdatums. Sie können mehrere definieren, indem Sie sie durch trennen ``, (virgules)`` *(exemple: JJJJ-MM-TT, JJJJ-MM-TT)*. Es ist auch möglich, einen Datumsbereich mit zu definieren ``: (deux points)`` *(exemple: AAAA-MM-JJ:AAAA-MM-JJ)*.
- **Nach Kalender aufnehmen** : ermöglicht Ihnen das Einbeziehen von Ereignissen, die auf denen eines anderen Kalenders oder eines anderen Ereignisses basieren. Sie haben zum Beispiel eine Veranstaltung ``A``, jeden Montag wiederholt, den du in dein aktuelles Event einbeziehst : dann wird dein aktuelles Event auch jeden Montag wiederholt.
- **Ausschließen nach Datum** : gleich wie **Nach Datum einschließen** sondern Vorkommnisse zu ignorieren.
- **Nach Kalender ausschließen** : ermöglicht es Ihnen, diese Veranstaltung gemäß einer anderen Agenda oder Veranstaltung auszuschließen *(um zu vermeiden, dass zum Beispiel 2 widersprüchliche Ereignisse zusammen gefunden werden)*.

>**INFORMATION**
>
>Die Optionen **Ausschließen nach Datum** und **Nach Kalender ausschließen** sind nur zugänglich, wenn Ereigniswiederholung aktiviert ist.

## Wiederholung von Ereignissen

Durch die Wiederholung können Sie das Auftreten Ihrer Ereignisse genau nach Ihren Wünschen konfigurieren :

- **Aktivieren** : Aktivieren Sie das Kontrollkästchen, um die Wiederholung zu aktivieren und die entsprechenden Optionen anzuzeigen.
- **Modus - Einzelwiederholung** :
  - **Wiederholen Sie alle** : ermöglicht Ihnen, die Wiederholungsfrequenz des Ereignisses zu definieren *(alle 3 Tage, alle 2 Monate usw)*.
  - **Nur die** : Mit dieser Option können Sie die Wiederholung auf bestimmte Wochentage beschränken.
- **Modus - Erweiterte Wiederholung** :
  - **Frequenz** : ermöglicht Ihnen zum Beispiel jeden 2. Montag im Monat eine Wiederholung zu wählen...
- **Einschränkung** : erlaubt den Ausschluss von Feiertagen oder die Beschränkung der Veranstaltung auf Feiertage / gerade Wochen / nur ungerade Wochen.
- **Bis zu** : letztes Datum des Auftretens des Ereignisses.

>**INFORMATION**
>
>Feiertage betreffen nur das französische Mutterland.

# Tagebuch, Bestellungen und Szenario

Ein Tagebuch hat mehrere Befehle :

- **In Bearbeitung** : gibt die Liste der aktuellen Ereignisse durch Kommas getrennt. Um es in einem Szenario zu verwenden, verwenden Sie am einfachsten den Operator *"contient"* (``matches``) Woher *"beinhaltet nicht"* (``not matches``) *(Beispiel : ``[Appartement][test][In Bearbeitung] matches "/Anniv/"`` ist wahr, wenn in der Liste der aktuellen Ereignisse "Anniv")*.
- **Fügen Sie ein Datum hinzu** : ermöglicht aus einem Szenario ein Datum zu einem Ereignis hinzuzufügen. Sie können mehrere Daten hinzufügen, indem Sie sie durch Kommas trennen *(Seien Sie vorsichtig, wenn Sie den Namen des Ereignisses ändern, er muss im Szenario geändert werden)*.
- **Entfernen Sie ein Datum** : ermöglicht es, aus einem Szenario ein Datum aus einem Ereignis zu entfernen. Sie können mehrere Datumsangaben entfernen, indem Sie sie durch Kommas trennen *(Seien Sie vorsichtig, wenn Sie den Namen des Ereignisses ändern, er muss im Szenario geändert werden)*.

>**INFORMATION**
>
>Es ist möglich, den Befehl "In Bearbeitung" als Szenario-Trigger zu verwenden. Jede Informationsaktualisierung löst die Ausführung des Szenarios aus, daher ist es vorzuziehen, diesen Befehl in einem Szenario zu verwenden, das mit einem Test auf den Wert programmiert ist.

>**WICHTIG**
>
>Achtung, es ist wichtig, keine wiederholten Ereignisse zu erstellen, die sich überschneiden, diese Art von Fall wird nicht vom Plugin verwaltet. Beispiel ein Ereignis, das 48 Stunden dauert und sich jeden Tag wiederholt.

# API

Die API basiert auf der jsonrpc-API, sie bietet die folgenden Methoden für das Plugin:

- **event::getAllCalendarAndEvents** können Sie alle Kalender und Ereignisse abrufen
- **event::getAllEvents** können Sie alle Ereignisse eines Kalenders abrufen
- **event::byId** ermöglicht das Abrufen eines Ereignisses anhand seiner ID
- **event::save** ermöglicht es Ihnen, ein Ereignis zu erstellen / zu ändern
- **event::remove** ermöglicht Ihnen, ein Ereignis zu löschen

## event::getAllCalendarAndEvents

**Eingabeparameter**
/Aucun/

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

**Ergebnisbeispiel**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": [
    {
      "id": "641",
      "name": "labo",
      "logicalId": "",
      "generischer_typ": null,
      "Objekt Identifikation": null,
      "eqType_name": "calendar",
      "isVisible": "0",
      "isEnable": "1",
      "configuration": {
        "createtime": "16.03.2023 14:40:50",
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
        "lastCommunication": "17.03.2023 11:02:46",
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
            "eventName": "Meine Veranstaltung",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "Textfarbe": "#ffffff",
            "start": [],
            "end": [],
            "im Gange": 1
          },
          "startDate": "17.03.2023 10:30:00",
          "endDate": "17.03.2023 14:30:00",
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
            "eventName": "Meine Veranstaltung 2",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "Textfarbe": "#ffffff",
            "start": [],
            "end": [],
            "im Gange": 0
          },
          "startDate": "17.03.2023 11:30:00",
          "endDate": "17.03.2023 11:45:00",
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
            "eventName": "Meine Veranstaltung",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "Textfarbe": "#ffffff",
            "start": [],
            "end": [],
            "im Gange": 0
          },
          "startDate": "18.03.2023 10:30:00",
          "endDate": "18.03.2023 14:30:00",
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
            "eventName": "Meine Veranstaltung",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "Textfarbe": "#ffffff",
            "start": [],
            "end": [],
            "im Gange": 0
          },
          "startDate": "18.03.2023 10:40:00",
          "endDate": "18.03.2023 14:50:00",
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

**Eingabeparameter**

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

**Ergebnisbeispiel**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": [
    {
      "id": "2",
      "eqLogic_id": "641",
      "cmd_param": {
        "eventName": "Meine Veranstaltung",
        "noDisplayOnDashboard": "0",
        "icon": "",
        "color": "#2980b9",
        "transparent": "0",
        "Textfarbe": "#ffffff",
        "start": [],
        "end": [],
        "im Gange": 0
      },
      "startDate": "17.03.2023 10:30:00",
      "endDate": "17.03.2023 14:30:00",
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
        "eventName": "Meine Veranstaltung 2",
        "noDisplayOnDashboard": "0",
        "icon": "",
        "color": "#2980b9",
        "transparent": "0",
        "Textfarbe": "#ffffff",
        "start": [],
        "end": [],
        "im Gange": 0
      },
      "startDate": "17.03.2023 11:30:00",
      "endDate": "17.03.2023 11:45:00",
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

**Eingabeparameter**

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

**Ergebnisbeispiel**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": {
    "id": "5",
    "eqLogic_id": "641",
    "cmd_param": {
      "eventName": "Meine Veranstaltung hat sich wieder geändert",
      "noDisplayOnDashboard": "0",
      "icon": "",
      "color": "#2980b9",
      "transparent": "0",
      "Textfarbe": "#ffffff",
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
      "im Gange": 0
    },
    "startDate": "18.03.2023 10:19:00",
    "endDate": "18.03.2023 11:50:00",
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

**Eingabeparameter**

- Ereignis /json-Objekt/

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
    "eventName": "Meine Veranstaltung hat sich wieder geändert",
    "noDisplayOnDashboard": "0",
    "icon": "",
    "color": "#2980b9",
    "transparent": "0",
    "Textfarbe": "#ffffff",
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
  "startDate": "18.03.2023 10:19:00",
  "endDate": "18.03.2023 11:50:00",
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

**Ergebnisbeispiel**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": {
    "id": null,
    "eqLogic_id": "641",
    "cmd_param": {
      "eventName": "Meine Veranstaltung hat sich wieder geändert",
      "noDisplayOnDashboard": "0",
      "icon": "",
      "color": "#2980b9",
      "transparent": "0",
      "Textfarbe": "#ffffff",
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
      "im Gange": 0
    },
    "startDate": "18.03.2023 10:19:00",
    "endDate": "18.03.2023 11:50:00",
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

**Eingabeparameter**

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

**Ergebnisbeispiel**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": "success"
}
```
