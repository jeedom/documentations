# Shutter Management Plugin

Este complemento le permite administrar más fácilmente la posición de sus persianas de acuerdo con la posición del sol. Este complemento no tiene nubes

Puedes encontrar [aquí](https://www.jeedom.com/blog/?p=4310) un artículo que muestra un ejemplo de configuración del complemento

# Configuración de complementos

Nada especial aquí solo para instalar y activar el complemento

## Como funciona ?

El complemento ajustará la posición de sus persianas en relación con las posiciones del sol (acimut y altitud) según la condición.

# Configuración de las persianas

La configuración se divide en varias pestañas.

## Equipement

Encontrarás en la primera pestaña toda la configuración de tu equipo :

- Nombre del equipo : nombre de su equipo de simulación,
- Objeto padre : indica el objeto padre al que pertenece el equipo,
- Activar : activa su equipo,
- Visible : hace que su equipo sea visible en el tablero.


## Configuration

### Configuration

- Verificación : frecuencia de verificación de las condiciones y posición de las aletas
- Recuperar el control : prohíbe que el sistema de gestión del obturador cambie su posición si se ha movido manualmente. Por ejemplo, el sistema cierra el obturador, si lo abre, ya no lo tocará hasta que se active el comando "Reanudar administración" o si el tiempo de recuperación ha pasado
- Latitud : la latitud de tu persiana / casa
- Longitud : la longitud de tu persiana / casa
- Altitud : la altura de tu persiana / casa
- Estado del obturador : comando que indica la posición actual de la aleta
- Posición del obturador : control para posicionar la aleta
- Actualizar la posición del obturador (opcional) : comando para actualizar la posición del obturador
- Tiempo maximo para un viaje : tiempo para hacer un movimiento completo (de arriba hacia abajo o de abajo hacia arriba), en segundos

## Condition

- Condición para la acción : Si esta condición no es cierta, el complemento no modificará la posición del obturador
- El cambio de modo cancela las suspensiones pendientes : si está marcada, un cambio de modo del obturador lo devuelve a la gestión automática
- Las acciones inmediatas son sistemáticas y prioritarias : si está marcada, se ejecutan acciones inmediatas incluso si está suspendida y sin tener en cuenta el orden de las condiciones

La tabla de condiciones le permite especificar condiciones de posicionamiento específicas, que se apoderan de la tabla de posición de la aleta :
- Posición : si la condición es verdadera, la posición de las aletas
- Modo : la condición solo funciona si el obturador está en este modo (puede poner varios separados por ,). Si este campo no se llena, la condición se probará independientemente del modo
>**Importante**
>
>Estamos hablando del modo de obturador aquí NO ES NADA VER CON el complemento de modo
- Acción inmediata : actúa inmediatamente tan pronto como la condición sea verdadera (así que no espere a que se verifique el cron)
- Suspender : si la condición es verdadera, suspende la gestión automática del obturador
- Condición : su condicion
- Comentario : campos libres para comentarios

## Positionnement

- % de apertura : el% cuando el obturador está abierto
- % de cierre : el% cuando el obturador está cerrado
- Acción por defecto : la acción predeterminada si ninguna condición y posición es válida

Aquí es donde podrá gestionar la posición del obturador de acuerdo con la posición del sol.

- Acimut : ángulo de posición del sol
- Elevacion : ángulo de altura del sol
- Posición : posición del obturador para tomar si el sol está en el Azimut y los límites de elevación
- Condición : condición adicional para satisfacer para que el obturador tome esta posición (puede estar vacío)
- Comentario : campos libres para comentarios

>**CONSEJO**
>
>Pequeño consejo del sitio [suncalc.org](https://www.suncalc.org) que permite, una vez que ingresó su dirección, ver la posición del sol (y, por lo tanto, los ángulos de acimut y elevación) de acuerdo con las horas del día (simplemente arrastre el pequeño sol en la parte superior)

## Planning

Aquí puede ver los planes de posicionamiento del obturador realizados en la planificación de la Agenda

## Commandes

- Azimut del sol : ángulo azimutal actual del sol
- Salida del sol : ángulo de elevación actual del sol
- Ejecutar acción : obliga a calcular la posición del obturador de acuerdo con la posición del sol y las condiciones y le aplica el resultado independientemente del estado de gestión (en pausa o no))
- Última posición : última posición solicitada desde el obturador por el complemento
- Estado de gestión : estado de gestión (suspendido o no))
- Reanudar : forzar el retorno al modo de administración automática (tenga en cuenta que este comando debe iniciarse para volver a la administración automática si ha cambiado la posición de su obturador manualmente y ha marcado la casilla "No recuperar el control"")
- Suspender : suspende el posicionamiento automático del obturador
- Refrescar : actualizar los valores de los comandos "Acimut del sol" y "Elevación del sol""
- Modo : modo de obturador actual

Puede agregar comandos de "modo", el nombre del comando será el nombre del modo.

# Panel

El complemento tiene un panel de administración de escritorio y móvil para activarlo solo vaya a Complementos -> Administración de complementos, haga clic en el complemento de administración del panel y en la parte inferior derecha de marcar las casillas para mostrar el panel escritorio y móvil
