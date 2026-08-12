# Kalender-Plugin

Mit dem Plugin **Agenda** können Sie Kalender verwalten und zu Beginn und/oder am Ende eines Termins Aktionen auslösen.

# Aufbau

## Plugin Konfiguration

Dieses Plugin erfordert keine besondere Konfiguration und muss nach der Installation lediglich aktiviert werden.

## Gerätekonfiguration

Die Funktionen sind über das Menü **Plugins → Organisation → Kalender** zugänglich.

Auf dieser Seite finden Sie eine Liste Ihrer Kalender. Klicken Sie auf einen Kalender, um die Konfiguration des entsprechenden Geräts aufzurufen:

- **Name des Terminkalenders**: Name des Terminkalender-Geräts.
- **Übergeordnetes Objekt**: Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
- **Kategorie**: Hier können Sie die Kategorie des Geräts auswählen.
- **Optionen**:
  - **Aktivieren**: Hiermit wird das Gerät aktiviert.
  - **Sichtbar**: Macht das Gerät sichtbar.

- **Widget**:
  - **Anzahl der Tage**: Legt die maximale Anzahl der Tage fest, die im Widget angezeigt werden sollen.
  - **Anzahl der Ereignisse**: Legt die maximale Anzahl der Ereignisse fest, die im Widget angezeigt werden sollen.

- **Liste der Termine im Kalender**: Zeigt die Liste aller Termine im Kalender an *(durch Klicken auf den Namen kann der Termin bearbeitet werden)*.

Über die Registerkarte **Kalender** können Sie eine Kalenderansicht mit allen Terminen anzeigen. Sie können sich im Kalender bewegen und wählen, ob Sie ihn nach Jahr, Monat, Woche, Tag oder Wochenplan anzeigen möchten. Ein Klick auf einen Termin öffnet das Bearbeitungsfenster für den betreffenden Termin.

# Veranstaltungen

## Erstellung einer Veranstaltung

Um einen neuen Termin anzulegen, klicken Sie auf der Konfigurationsseite des Kalenders, dem der Termin zugeordnet werden soll, auf die Schaltfläche **Termin hinzufügen** oder im Konfigurationsfenster eines Termins desselben Kalenders auf die Schaltfläche **Duplizieren**.

## Ereigniskonfiguration

Im Fenster zur Erstellung/Konfiguration von Ereignissen können Sie die Parameter, Aktionen und Wiederholungsintervalle für jedes einzelne Ereignis festlegen. Auf der ersten Registerkarte finden Sie:

- **Name der Veranstaltung**: Name Ihrer Veranstaltung.
- **Im Widget ausblenden**: Damit wird dieses Ereignis im Widget nicht angezeigt.
- **Symbol**: Hiermit können Sie vor dem Namen des Ereignisses ein Symbol einfügen *(klicken Sie auf die Schaltfläche „Symbol auswählen“)*.
- **Hintergrundfarbe**: Hier können Sie die Hintergrundfarbe des Ereignisses auswählen *(aktivieren Sie das Kontrollkästchen für einen transparenten Hintergrund)*.
- **Textfarbe**: Hier können Sie die Farbe des Textes für das Ereignis auswählen.

Oben rechts im Fenster zur Bearbeitung von Ereignissen befinden sich drei Schaltflächen:

- **Duplizieren**: Ermöglicht es, das Ereignis zu duplizieren, um ein neues zu erstellen *(denken Sie daran, das so erstellte neue Ereignis zu speichern)*.
- **Speichern**: Hiermit können Sie das Ereignis speichern.
- **Löschen**: Hiermit können Sie das gesamte Ereignis oder nur eine Instanz davon löschen.

## Aktionen starten / beenden

Auf dieser Registerkarte können Sie die Aktionen festlegen, die zu Beginn und/oder am Ende des Ereignisses ausgeführt werden sollen. Um eine Aktion hinzuzufügen, klicken Sie einfach auf die Schaltfläche **+ Aktion zu Beginn/am Ende**. Sie können so viele Aktionen hinzufügen, wie Sie möchten.

![Aktionen hinzufügen](../images/calendar_addActions.png)

Aktionen können entweder Standardbefehle von Jeedom oder [szenariospezifische Befehle](https://doc.jeedom.com/fr_FR/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques) sein.

>**TIPP**
>
>Die Reihenfolge der Aktionen kann per Drag & Drop geändert werden.

## Programmierung von Veranstaltungen

In diesem Reiter finden Sie die gesamte Zeitplanung für Ihre Veranstaltung:

- **Termine**:
  - **Beginn**: Startdatum der Veranstaltung.
  - **Ende**: Enddatum der Veranstaltung *(mit dem Symbol am Zeilenende können Sie die Veranstaltung auf den ganzen Tag festlegen)*.
- **Nach Datum einbeziehen**: Ermöglicht das Hinzufügen eines Datums. Sie können mehrere Daten angeben, indem Sie diese durch ``, (Kommas)`` trennen *(Beispiel: JJJJ-MM-TT,JJJJ-MM-TT)*. Es ist auch möglich, einen Datumsbereich mit einem „:“ (Doppelpunkt) festzulegen *(Beispiel: JJJJ-MM-TT:JJJJ-MM-TT)*.
- **Nach Kalender einbeziehen**: Ermöglicht es, Termine basierend auf denen eines anderen Kalenders oder eines anderen Ereignisses einzubeziehen. Wenn Sie beispielsweise ein Ereignis „A“ haben, das sich jeden Montag wiederholt, und Sie dieses in Ihr aktuelles Ereignis einbeziehen, wird Ihr aktuelles Ereignis ebenfalls jeden Montag wiederholt.
- **Nach Datum ausschließen**: Wie **Nach Datum einbeziehen**, jedoch zum Ausschluss bestimmter Vorkommen.
- **Nach Kalender ausschließen**: Ermöglicht es, dieses Ereignis basierend auf einem anderen Kalender oder Ereignis auszuschließen *(um beispielsweise zu vermeiden, dass zwei widersprüchliche Ereignisse gleichzeitig stattfinden)*.

>**INFORMATION**
>
>Die Optionen **Nach Datum ausschließen** und **Nach Kalender ausschließen** sind nur verfügbar, wenn die Wiederholung des Ereignisses aktiviert ist.

## Wiederholung von Ereignissen

Mit der Wiederholungsfunktion können Sie die Häufigkeit Ihrer Ereignisse genau nach Ihren Wünschen einstellen:

- **Aktivieren**: Aktivieren Sie das Kontrollkästchen, um die Wiederholung zu aktivieren und die entsprechenden Optionen anzuzeigen.
- **Modus – Einfache Wiederholung**:
  - **Alle**: Hier können Sie die Wiederholungshäufigkeit des Ereignisses festlegen *(alle 3 Tage, alle 2 Monate usw.…)*.
  - **Nur an**: Damit können Sie die Wiederholung auf bestimmte Wochentage beschränken.
- **Modus – Erweiterte Wiederholung**:
  - **Häufigkeit**: Hier können Sie beispielsweise festlegen, dass die Wiederholung jeden zweiten Montag im Monat stattfindet...
- **Einschränkung**: Ermöglicht es, Feiertage auszuschließen oder das Ereignis ausschließlich auf Feiertage / gerade Wochen / ungerade Wochen zu beschränken.
- **Bis**: Spätestes Datum, an dem das Ereignis stattfindet.

>**INFORMATION**
>
>Die Feiertage gelten ausschließlich für das französische Mutterland.

# Tagebuch, Bestellungen und Szenario

Ein Kalender verfügt über mehrere Befehle:

- **Laufend**: Gibt eine durch Kommas getrennte Liste der laufenden Ereignisse aus. Um dies in einem Szenario zu verwenden, ist es am einfachsten, den Operator *„enthält“* (``matches``) oder *„enthält nicht“* (``not matches``) zu verwenden *(Beispiel: ``[Wohnung][Test][Laufend] matches „/Geburtstag/“`` ist wahr, wenn in der Liste der laufenden Ereignisse „Geburtstag“ enthalten ist)*.
- **Datum hinzufügen**: Ermöglicht es, innerhalb eines Szenarios einem Ereignis ein Datum hinzuzufügen. Sie können mehrere Daten hinzufügen, indem Sie diese durch Kommas trennen *(Achtung: Wenn Sie den Namen des Ereignisses ändern, müssen Sie diesen auch im Szenario anpassen)*.
- **Ein Datum entfernen**: Ermöglicht es, innerhalb eines Szenarios ein Datum aus einem Ereignis zu entfernen. Sie können mehrere Daten entfernen, indem Sie diese durch Kommas trennen *(Achtung: Wenn Sie den Namen des Ereignisses ändern, müssen Sie dies auch im Szenario anpassen)*.

>**INFORMATION**
>
>Der Befehl „In Bearbeitung“ kann als Szenarioauslöser verwendet werden. Jede Aktualisierung der Informationen löst die Ausführung des Szenarios aus. Daher empfiehlt es sich, diesen Befehl in einem Szenario zu verwenden, das mit einer Wertprüfung programmiert ist.

>**WICHTIG**
>
>Achtung: Es dürfen auf keinen Fall sich wiederholende Ereignisse erstellt werden, die sich selbst überlappen, da solche Fälle vom Plugin nicht unterstützt werden. Beispiel: Ein Ereignis, das 48 Stunden dauert und sich täglich wiederholt.

# APIs

Die API basiert auf der JSON-RPC-API und bietet für das Plugin folgende Methoden:

- Mit **event::getAllCalendarAndEvents** können alle Kalender und Veranstaltungen abgerufen werden
- Mit **event::getAllEvents** können alle Termine eines Kalenders abgerufen werden
- Mit **event::byId** kann ein Ereignis anhand seiner ID abgerufen werden
- Mit **event::save** kann ein Ereignis erstellt bzw. geändert werden
- Mit **event::remove** kann ein Ereignis gelöscht werden

## event::getAllCalendarAndEvents

**Eingabeparameter**
/Keiner/

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

**Beispiel für ein Ergebnis**

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

**Beispiel für ein Ergebnis**

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

## Ereignis::nach-ID

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

**Beispiel für ein Ergebnis**

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

## Ereignis::Speichern

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

**Beispiel für ein Ergebnis**

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

## Ereignis::Entfernen

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

**Beispiel für ein Ergebnis**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": "success"
}
```
