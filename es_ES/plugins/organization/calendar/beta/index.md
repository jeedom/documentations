# Complemento de calendario

El complemento **Calendario** le permite administrar calendarios y activar acciones al inicio y / o al final de un evento.

# Configuration

## Configuración del plugin

Este complemento no requiere ninguna configuración especial y simplemente debe activarse después de la instalación.

## Configuración del equipo

El equipo es accesible desde el menú **Complementos → Organización → Agenda**.

En esta página encontrará la lista de sus agendas. Haga clic en una agenda para acceder a la configuración del equipo correspondiente :

- **Nombre de la agenda** : nombre de tu calendario.
- **Objeto padre** : indica el objeto padre al que pertenece el equipo.
- **Categoría** : categorías de equipos *(puede pertenecer a varias categorías)*.
- **Activar** : permite activar el equipo.
- **Visible** : permite hacer visible el equipo en el salpicadero.


- **Widget** :
    - **Número de días** : establecer el número máximo de días que se mostrarán en el widget.
    - **Numero de eventos** : establecer el número máximo de eventos que se mostrarán en el widget.


- **Lista de eventos del calendario** : muestra la lista de todos los eventos del calendario *(un clic en el nombre le permite editar el evento)*.

La tabla **Calendario** le permite mostrar una vista de tipo de agenda que incluye todos los eventos. Puede moverse por el calendario, elegir mostrarlo por día, semana o mes e incluso mover eventos arrastrando y soltando. Al hacer clic en un evento, se abre la ventana de edición del evento en cuestión.

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
