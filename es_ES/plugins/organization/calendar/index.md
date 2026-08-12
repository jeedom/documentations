# Complemento de calendario

El complemento **Agenda** permite gestionar agendas y activar acciones al inicio y/o al final de un evento.

# Configuración

## Configuración del plugin

Este complemento no requiere ninguna configuración especial y solo hay que activarlo tras la instalación.

## Configuración del equipo

Se puede acceder a los equipos desde el menú **Plugins → Organización → Agenda**.

En esta página encontrarás la lista de tus agendas. Haz clic en una agenda para acceder a la configuración del equipo correspondiente:

- **Nombre de la agenda**: Nombre del equipo «Agenda».
- **Objeto principal**: Indica el objeto principal al que pertenece el equipo.
- **Categoría**: Permite seleccionar la categoría del equipo.
- **Opciones**:
  - **Activar**: Permite activar el equipo.
  - **Visible**: Hace que el equipo sea visible.

- **Widget**:
  - **Número de días**: define el número máximo de días que se mostrarán en el widget.
  - **Número de eventos**: define el número máximo de eventos que se mostrarán en el widget.

- **Lista de eventos del calendario**: muestra la lista de todos los eventos del calendario *(al hacer clic en el nombre se puede editar el evento)*.

La pestaña **Agenda** permite visualizar una vista tipo agenda que incluye todos los eventos. Puedes desplazarte por la agenda y elegir entre visualizarla por año, mes, semana, día o planificación semanal. Al hacer clic en un evento, se abre la ventana de edición del evento en cuestión.

# Eventos

## Creación de un evento

Para crear un nuevo evento, haz clic en el botón **Añadir evento** desde la página de configuración del calendario al que se va a vincular el evento, o en el botón **Duplicar** desde la ventana de configuración de un evento que pertenezca al mismo calendario.

## Configuración de eventos

La ventana de creación/configuración de eventos permite definir los parámetros, las acciones y la periodicidad propios de cada evento. En la primera pestaña encontrarás:

- **Nombre del evento**: nombre de tu evento.
- **Ocultar en el widget**: permite que este evento no se muestre en el widget.
- **Icono**: permite añadir un icono delante del nombre del evento *(haz clic en el botón «Elegir un icono»)*.
- **Color de fondo**: permite elegir el color de fondo del evento *(marca la casilla para un fondo transparente)*.
- **Color del texto**: permite elegir el color del texto del evento.

En la parte superior derecha de la ventana de edición de eventos hay tres botones:

- **Duplicar**: permite duplicar el evento para crear uno nuevo *(no olvides guardar el nuevo evento así generado)*.
- **Guardar**: permite guardar el evento.
- **Eliminar**: permite eliminar el evento completo o solo una instancia.

## Acciones de inicio / finalización

En esta pestaña podrás definir las acciones que se llevarán a cabo al inicio y/o al final del evento. Para añadir una acción, solo tienes que hacer clic en el botón **+ Acción de inicio/fin**; puedes añadir tantas acciones como desees.

![Añadir acciones](../images/calendar_addActions.png)

Las acciones pueden ser comandos estándar de Jeedom o bien [comandos específicos de escenario](https://doc.jeedom.com/fr_FR/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques).

>**CONSEJO**
>
>Es posible modificar el orden de las acciones arrastrando y soltando.

## Programación de eventos

En esta pestaña se encuentra toda la gestión temporal de tu evento:

- **Fechas**:
  - **Inicio**: fecha de inicio del evento.
  - **Fin**: fecha de finalización del evento *(el icono al final de la línea permite configurar el evento para que dure todo el día)*.
- **Incluir por fecha**: permite añadir una fecha de ocurrencia. Puedes definir varias separándolas con ``, (comas)`` *(ejemplo: AAAA-MM-DD,AAAA-MM-DD)*. También es posible definir un intervalo de fechas con «: (dos puntos)» *(ejemplo: AAAA-MM-DD:AAAA-MM-DD)*.
- **Incluir según el calendario**: permite incluir entradas en función de las de otro calendario o de otro evento. Por ejemplo, si tienes un evento «A», que se repite todos los lunes, y lo incluyes en tu evento actual, tu evento actual también se repetirá todos los lunes.
- **Excluir por fecha**: igual que **Incluir por fecha**, pero para ignorar entradas.
- **Excluir por agenda**: permite excluir este evento en función de otra agenda o evento *(por ejemplo, para evitar que dos eventos contradictorios coincidan)*.

>**INFORMACIÓN**
>
>Las opciones **Excluir por fecha** y **Excluir por agenda** solo están disponibles si se ha activado la repetición del evento.

## Repetición de eventos

La repetición te permitirá configurar la frecuencia de tus eventos exactamente como desees:

- **Activar**: marca la casilla para activar la repetición y mostrar las opciones correspondientes.
- **Modo - Repetición simple**:
  - **Repetir cada**: permite definir la frecuencia de repetición del evento *(cada 3 días, cada 2 meses, etc.)*.
  - **Solo los**: permite limitar la repetición a determinados días de la semana.
- **Modo - Repetición avanzada**:
  - **Frecuencia**: permite elegir una repetición, por ejemplo, cada segundo lunes del mes...
- **Restricción**: permite excluir los días festivos o limitar el evento únicamente a los días festivos, las semanas pares o las semanas impares.
- **Hasta**: fecha límite en la que se produce el evento.

>**INFORMACIÓN**
>
>Los días festivos solo se aplican a Francia metropolitana.

# Diario, pedidos y escenario

Una agenda tiene varios comandos:

- **En curso**: muestra la lista de eventos en curso separados por comas. Para utilizarlo en un escenario, lo más sencillo es emplear el operador *«contiene»* (``matches``) o *«no contiene»* (``not matches``) *(ejemplo: ``[Piso][prueba][En curso] matches "/Cumpleaños/"`` será verdadero si en la lista de eventos en curso aparece «Cumpleaños»)*.
- **Añadir una fecha**: permite, desde un escenario, añadir una fecha a un evento. Puedes añadir varias fechas separándolas con comas *(atención: si cambias el nombre del evento, tendrás que modificarlo en el escenario)*.
- **Eliminar una fecha**: permite, desde un escenario, eliminar una fecha de un evento. Puedes eliminar varias fechas separándolas con comas *(atención: si cambias el nombre del evento, tendrás que modificarlo en el escenario)*.

>**INFORMACIÓN**
>
>Es posible utilizar el comando «En curso» como activador de un escenario. Cada actualización de la información activará la ejecución del escenario, por lo que es preferible utilizar este comando en un escenario programado con una comprobación del valor.

>**IMPORTANTE**
>
>Atención: es muy importante que no se creen eventos que se repitan y se solapen entre sí, ya que el complemento no gestiona este tipo de casos. Por ejemplo, un evento que dure 48 horas y se repita todos los días.

# API

La API se basa en la API JSON-RPC y ofrece los siguientes métodos para el complemento:

- **event::getAllCalendarAndEvents** permite recuperar todos los calendarios y eventos
- **event::getAllEvents** permite recuperar todos los eventos de un calendario
- **event::byId** permite recuperar un evento en función de su ID
- **event::save** permite crear o modificar un evento
- **event::remove** permite eliminar un evento

## event::getAllCalendarAndEvents

**Parámetros de entrada**
/Ninguno/

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

**Ejemplo de resultado**

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

**Parámetros de entrada**

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

**Ejemplo de resultado**

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

**Parámetros de entrada**

- evento_id /int/

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

**Ejemplo de resultado**

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

**Parámetros de entrada**

- evento /objeto json/

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

**Ejemplo de resultado**

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

## evento::eliminar

**Parámetros de entrada**

- evento_id /int/

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

**Ejemplo de resultado**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": "success"
}
```
