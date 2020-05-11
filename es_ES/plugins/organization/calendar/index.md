# Complemento de calendario

Complemento para crear una agenda y activar acciones (comando o escenario).

# Configuración del plugin

La configuración es muy simple, después de descargar el complemento, solo necesita activarlo y listo.

# Configuración del equipo

Se puede acceder a la configuración del equipo de Agenda desde el menú Complementos y luego Organización.

Una vez allí, encontrará la lista de su Agenda.

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo** : nombre de tu calendario.
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo.
-   **Categoría** : categorías de equipos (puede pertenecer a varias categorías).
-   **Activar** : activa su equipo.
-   **Visible** : lo hace visible en el tablero.
-   **Widget, número de días** : establece el número de días de evento para mostrar en el widget.
-   **Numero maximo de eventos** : define el número máximo de eventos para mostrar en el tablero.
-   **No mostrar el estado y los comandos de activación / desactivación** : le permite ocultar el estado del calendario, así como los comandos para activarlo o no.
-   **Lista de eventos del calendario** : se muestra debajo de la lista de todos los eventos del calendario (haga clic en él para editar el evento directamente).
-   **Agregar evento** : agregar un evento al calendario.
-   **Calendario** : Visualización de una vista de tipo de agenda con todos los eventos en los que puede moverse, elija mostrarla por semana o día, mover eventos (arrastrar y soltar) y un clic en un evento abrirá su ventana de edición.

# Editar un evento

La parte más importante del complemento, aquí es donde podrá configurar su evento.

## Evento

Aqui encuentras :

-   **Nombre del evento** : Nombre de tu evento.
-   **Icono** : le permite agregar un ícono delante del nombre de su equipo (para hacer esto, haga clic en "Elegir un ícono").
-   **Color** : le permite elegir el color de su evento (una marca de verificación también le permite hacerlo transparente).
-   **Color du texte** : le permite elegir el color del texto de su evento.
-   **No mostrar en el tablero** : permite no mostrar este evento en el widget.

## Inicia acción

Le permite elegir las acciones a realizar al iniciar el evento.

Para agregar una acción, simplemente haga clic en el botón + al final de la línea, luego tendrá un botón para buscar un pedido una vez que se encuentre, tendrá la opción de elegir si tiene alguna. Puedes agregar tanta acción como quieras.

> **Punta**
>
> Es posible modificar el orden de las acciones manteniéndolo / arrastrándolo


> **Punta**
>
>Es posible realizar las mismas acciones que en los escenarios (ver [aquí](https://jeedom.github.io/core/es_ES/scenario))

## Acción final

Igual que la acción de inicio pero esta vez son las acciones a realizar al final del evento.

## Programmation

Aquí es donde se encuentra todo el tiempo de gestión de su evento :

-   **Inicio** : Fecha de inicio del evento.
-   **Final** : Fecha de finalización del evento.
-   **Todo el día** : permite definir el evento durante todo el día.
-   **Incluir par un autre agenda** : Le permite incluir otro evento en su evento actual. Por ejemplo, si tiene un evento A repetido todos los lunes e incluye este evento A en su evento actual, entonces este evento se repetirá automáticamente todos los lunes.
-   **Incluir** : permite forzar una fecha de ocurrencia, puede poner varios separándolos con, (comas), también puede definir un rango con : (dos puntos).
-   **Repetido** : Digamos que su evento se repite (si esta casilla no está marcada, no tendrá las siguientes opciones).
-   **Modo de repetición** : permite especificar el modo de repetición, ya sea simple : todos los días, cada X días ... o la repetición cada 1er, 2do ... para repetir un evento cada 3er lunes del mes, por ejemplo (las siguientes opciones pueden ser diferentes según esta opción).
-   **Repite cada** : \ [solo modo de repetición simple \] permite definir la frecuencia de repetición del evento (por ejemplo, cada 3 días o cada 2 meses ...).
-   **El** : \ [modo de repetición el primero, el segundo ... solo \] le permite elegir una repetición cada 2º lunes del mes, por ejemplo.
-   **Solo el** : le permite restringir la repetición a ciertos días de la semana.
-   **Restricción** : permite restringir el evento solo en días festivos o excluir días festivos.
-   **Hasta** : da la fecha final de ocurrencia del evento.
-   **Excluir par un autre agenda** : permite excluir este evento de acuerdo con otro calendario (para evitar, por ejemplo, que 2 eventos contradictorios se reúnan).
-   **Excluir** : igual que "Incluir" pero esta vez para excluir fechas.

> **Nota**
>
> Los días festivos son franceses y solo franceses, esto no funciona para otros países

> **Nota**
>
> En la parte superior derecha tiene 3 botones, uno para eliminar, uno para guardar y otro para duplicar. Al hacer clic en este último, se muestra el evento resultante de la duplicación para que pueda cambiar el nombre, por ejemplo.Así que no olvide guardar después de hacer clic en el botón duplicar

## Diario, pedidos y escenario

Una agenda tiene controles :

-   **En curso** : da una lista de eventos actuales separados por comas, para usarlo en el escenario más simple y para usar el operador contiene (coincide) o no contiene (no coincide), por ejemplo *\ [Apartamento \] \ [prueba \] \ [En progreso \]* coincide con "/ Anniv /", será verdadero si en la lista de eventos actuales hay un "Anniv"
- **Agregar una fecha** : permite que un escenario agregue una fecha a un evento (tenga cuidado si cambia el nombre del evento, también deberá corregirlo en el escenario). Puedes poner varios eventos separados por ,
- **Eliminar una fecha** : permite que un escenario excluya una fecha de un evento (tenga cuidado si cambia el nombre del evento, también deberá corregirlo en el escenario). Puedes poner varios eventos separados por ,

> **Nota**
>
> Es posible utilizar el comando "En progreso" como desencadenante en un escenario, cada actualización de la información desencadenará la ejecución del escenario. Sin embargo, es preferible usar este comando en un escenario programado con una prueba del valor.
