# Complemento de calendario

El complemento **Calendario** le permite administrar calendarios y activar acciones al inicio y / o al final de un evento.

# Configuration

## Configuración del plugin

Este complemento no requiere ninguna configuración especial y simplemente debe activarse después de la instalación.

## Configuración del equipo

El equipo es accesible desde el menú **Complementos → Organización → Agenda**.

En esta página encontrará la lista de sus agendas. Haga clic en una agenda para acceder a la configuración del equipo correspondiente :

- **Nombre del calendario** : Calendario de nombres de equipos.
- **Objeto padre** : Indica el objeto padre al que pertenece el equipo.
- **Categoría** : Permite elegir la categoría del equipo.
- **Opciones** :
    - **Activar** : Permite activar el equipo.
    - **Visible** : Hace que el equipo sea visible.

- **Widget** :
    - **Número de días** : establecer el número máximo de días que se mostrarán en el widget.
    - **Numero de eventos** : establecer el número máximo de eventos que se mostrarán en el widget.

- **Lista de eventos del calendario** : muestra la lista de todos los eventos del calendario *(un clic en el nombre le permite editar el evento)*.

La tabla **Calendario** le permite mostrar una vista de tipo de agenda que incluye todos los eventos. Puede moverse por el calendario y elegir mostrarlo por año, mes, semana, día o horario semanal. Al hacer clic en un evento, se abre la ventana de edición del evento en cuestión.

# Eventos

## Creación de un evento

Para crear un nuevo evento, haga clic en el botón **Agregar evento** desde la página de configuración de la agenda a la que se debe adjuntar el evento o en el botón **Duplicar** desde la ventana de configuración de un evento perteneciente a la misma agenda.

## Configuración de eventos

La ventana de creación / configuración de eventos le permite definir los parámetros, acciones y recurrencia específicos de cada evento. En la primera pestaña, encontrará :

-   **Nombre del evento** : Nombre de tu evento.
-   **Ocultar en widget** : permite no mostrar este evento en el widget.
-   **Icono** : le permite agregar un icono delante del nombre del evento *(haga clic en el botón "Elija un icono")*.
-   **Color de fondo** : te permite elegir el color de fondo del evento *(marque la casilla para un fondo transparente)*.
-   **Color del texto** : te permite elegir el color del texto del evento.

En la parte superior derecha de la ventana de edición de eventos hay 3 botones:

- **Duplicar** : te permite duplicar el evento para crear uno nuevo *(recuerde guardar el nuevo evento así generado)*.
- **Ahorrar** : te permite guardar el evento.
- **Borrar** : le permite eliminar todo el evento o solo una ocurrencia.

## Acciones de inicio / finalización

En esta pestaña podrás definir las acciones a realizar al inicio y / o al final del evento. Para agregar una acción, simplemente haga clic en el botón **+ Acción de inicio / fin**, puedes agregar tantas acciones como quieras.

![Ajouter des actions](../images/calendar_addActions.png)

Las acciones pueden ser comandos estándar de Jeedom o [comandos específicos del escenario](https://doc.jeedom.com/es_ES/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques).

>**TRUCO**
>
>Es posible cambiar el orden de las acciones arrastrando y soltando.

## Programación de eventos

Es en esta pestaña donde puedes encontrar toda la gestión del tiempo de tu evento :

- **Fechas** :
    - **Inicio** : Fecha de inicio del evento.
    - **Final** : Fecha de finalización del evento *(el icono al final de la línea se utiliza para definir el evento durante todo el día)*.
- **Incluir por fecha** : le permite agregar una fecha de ocurrencia. Puede definir varios separándolos por ``, (virgules)`` *(exemple: AAAA-MM-DD, AAAA-MM-DD)*. También es posible definir un rango de fechas con ``: (deux points)`` *(exemple: AAAA-MM-JJ:AAAA-MM-JJ)*.
- **Incluir por calendario** : permite incluir ocurrencias de acuerdo con las de otra agenda o de otro evento. Por ejemplo, tienes un evento ``A``, repetido todos los lunes, que incluye en su evento actual : entonces su evento actual también se repetirá todos los lunes.
- **Excluir por fecha** : igual que **Incluir por fecha** pero para ignorar ocurrencias.
- **Excluir por calendario** : le permite excluir este evento de acuerdo con otra agenda o evento *(para evitar que 2 eventos contradictorios se encuentren juntos por ejemplo)*.

>**INFORMACIÓN**
>
>Las opciones **Excluir por fecha** y **Excluir por calendario** solo son accesibles si la repetición de eventos está activada.

## Repetición de eventos

La repetición le permitirá configurar las ocurrencias de sus eventos exactamente como lo desee :

- **Activar** : marque la casilla para activar la repetición y mostrar las opciones correspondientes.
- **Modo - Repetición única** :
    - **Repite cada** : le permite definir la frecuencia de repetición del evento *(cada 3 días, cada 2 meses, etc)*.
    - **Solo el** : le permite restringir la repetición a ciertos días de la semana.
- **Modo: repetición avanzada** :
    - **Frecuencia** : le permite elegir una repetición cada segundo lunes del mes, por ejemplo...
- **Restricción** : permite excluir días festivos o restringir el evento a días festivos / semanas pares / semanas impares solamente.
- **Hasta** : última fecha de ocurrencia del evento.

>**INFORMACIÓN**
>
>Los días festivos solo conciernen a la Francia metropolitana.

# Diario, pedidos y escenario

Un diario tiene varios comandos :

- **En curso** : da la lista de eventos actuales separados por comas. Para usarlo en un escenario, la forma más fácil es usar el operador *"contient"* (``matches``) Dónde *"no contiene"* (``not matches``) *(ejemplo : ``[Appartement][test][En curso] matches "/Anniv/"`` será verdadero si en la lista de eventos actuales hay "Anniv")*.
- **Agregar una fecha** : permite, desde un escenario, agregar una fecha a un evento. Puede agregar varias fechas separándolas con comas *(tenga cuidado si cambia el nombre del evento, tendrá que cambiarse en el escenario)*.
- **Eliminar una fecha** : permite, de un escenario, eliminar una fecha de un evento. Puede eliminar varias fechas separándolas con comas *(tenga cuidado si cambia el nombre del evento, tendrá que cambiarse en el escenario)*.

>**INFORMACIÓN**
>
>Es posible utilizar el comando "En curso" como desencadenante de escenario. Cada actualización de información desencadenará la ejecución del escenario, por lo que es preferible utilizar este comando en un escenario programado con una prueba sobre el valor.

>**IMPORTANTE**
>
>Atención, es importante no hacer eventos repetidos que se superponen a sí mismos, este tipo de casos no son administrados por el complemento. Ejemplo un evento que dura 48 horas y se repite todos los días.

# API
La api se basa en la api jsonrpc, ofrece los siguientes métodos para el complemento:

- **event::getAllCalendarAndEvents** le permite recuperar todos los calendarios y eventos
- **event::getAllEvents** le permite recuperar todos los eventos de un calendario
- **event::byId** permite recuperar un evento según su ID
- **event::save** le permite crear / modificar un evento
- **event::remove** le permite eliminar un evento

## event::getAllCalendarAndEvents
**Parámetros de entrada**
/Aucun/
```json
{
    "jsonrpc": "2.0",
    "method": "event::getAllCalendarAndEvents",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcbombaAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
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
      "tipo genérico": null,
      "id_objeto": null,
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
            "eventName": "Mi evento",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "color de texto": "#ffffff",
            "start": [],
            "end": [],
            "en curso": 1
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
            "eventName": "Mi evento 2",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "color de texto": "#ffffff",
            "start": [],
            "end": [],
            "en curso": 0
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
            "eventName": "Mi evento",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "color de texto": "#ffffff",
            "start": [],
            "end": [],
            "en curso": 0
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
            "eventName": "Mi evento",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "color de texto": "#ffffff",
            "start": [],
            "end": [],
            "en curso": 0
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
        "apikey": "0EVJcR8UyTBlhUFYbcbombaAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
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
        "eventName": "Mi evento",
        "noDisplayOnDashboard": "0",
        "icon": "",
        "color": "#2980b9",
        "transparent": "0",
        "color de texto": "#ffffff",
        "start": [],
        "end": [],
        "en curso": 0
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
        "eventName": "Mi evento 2",
        "noDisplayOnDashboard": "0",
        "icon": "",
        "color": "#2980b9",
        "transparent": "0",
        "color de texto": "#ffffff",
        "start": [],
        "end": [],
        "en curso": 0
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
        "apikey": "0EVJcR8UyTBlhUFYbcbombaAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "evento_id": 5
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
      "eventName": "Mi evento cambió de nuevo",
      "noDisplayOnDashboard": "0",
      "icon": "",
      "color": "#2980b9",
      "transparent": "0",
      "color de texto": "#ffffff",
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
      "en curso": 0
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
        "apikey": "0EVJcR8UyTBlhUFYbcbombaAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "event":    {
  "eqLogic_id": "641",
  "id": "5",
  "cmd_param": {
    "eventName": "Mi evento cambió de nuevo",
    "noDisplayOnDashboard": "0",
    "icon": "",
    "color": "#2980b9",
    "transparent": "0",
    "color de texto": "#ffffff",
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
      "eventName": "Mi evento cambió de nuevo",
      "noDisplayOnDashboard": "0",
      "icon": "",
      "color": "#2980b9",
      "transparent": "0",
      "color de texto": "#ffffff",
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
      "en curso": 0
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
**Parámetros de entrada**
- evento_id /int/
```json
{
    "jsonrpc": "2.0",
    "method": "event::remove",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcbombaAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "evento_id": 5
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
