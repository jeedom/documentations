# Plugin de alarma

El complemento de alarma le permite a Jeedom tener un sistema de alarma real para su domótica, muy fácil de usar y configurar.

## Configuración del plugin

Después de descargar el complemento, solo necesita activarlo, no hay configuración adicional en este nivel.

## Concepto inmediato

Esta es una noción muy importante del plugin de alarma y es muy importante entenderlo bien. Para simplificar es como si tuvieras 2 alarmas, la primera : la alarma inmediata que no tiene en cuenta los tiempos de activación (tenga en cuenta que tiene en cuenta los tiempos de activación) y una segunda alarma que tiene en cuenta los tiempos de activación.

**¿Por qué esta noción inmediata? ?**

Esta noción inmediata permite activar acciones muy específicas. Por ejemplo : cuando regresa a casa y no ha desactivado la alarma, antes de activar la sirena puede ser bueno transmitir un mensaje que le recuerde desactivar la alarma y si no se hace 1 minuto después (demora d '' activación de 1 minuto) para activar la sirena.

Esta noción se encuentra en diferentes tipos de acciones, cada vez que se detallará su principio.

## Equipements

Se puede acceder a la configuración del equipo de alarma desde el menú Complemento => Seguridad.

Una vez que se agrega una alarma, terminas con :

-   **Nombre del equipo de alarma** : nombre de tu alarma,
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo,
-   **Categoría** : La categoría del equipo (seguridad en general para una alarma),
-   **Activar** : activa su equipo,
-   **Visible** : hace que su equipo sea visible en el tablero,
-   **Activo todo el tiempo** : indica que la alarma estará permanentemente activa (por ejemplo, para una alarma de detección de incendios),
-   **Armamento visible** : permite hacer visible o no el comando de armado de alarma en el widget,
-   **Estado visible inmediato** : le permite hacer visible el estado inmediato de la alarma (consulte la explicación a continuación),
-   **Registrar estado de alarma y estado** : permite registrar o no el estado y el estado de la alarma.
-   **Zonas separadas** : hace que las zonas sean independientes en términos de alertas. Normalmente, si una zona está en alerta, el complemento ignorará las otras zonas. Al separar las zonas, repetirá las acciones para las otras zonas que entrarían en alerta
-   **Reinicio automático** : cuando se dispara, la alarma completa se rearma para evitar disparadores posteriores (en tiempos normales no se rearma hasta que haya habido un escenario / acción humana para hacerlo))
-   **No tome medidas inmediatas si el sensor no tiene retraso** : le dice a la alarma que no tome acciones inmediatas si el sensor no tiene un retraso de activación, por lo tanto, la alarma solo realizará las acciones

> **Punta**
>
> Para cada acción es posible especificar el modo en el que debe ejecutarse o en todos los modos

## Zones

Parte principal de la alarma. Aquí es donde configura las diferentes zonas y las acciones (inmediatas y diferidas por zona, tenga en cuenta que también es posible configurarlas globalmente) en caso de activación. Un área puede ser volumétrica (para el día, por ejemplo) o perimetral (para la noche) o también áreas de la casa (garaje, dormitorio, dependencias ...).).

Un botón en la parte superior derecha le permite agregar tantos como desee.

> **Punta**
>
> Es posible editar el nombre del área haciendo clic en el nombre del área (frente a la etiqueta "Nombre del área"").

Un área está compuesta de diferentes elementos : - disparador, - acción inmediata, - acción.

## Disparador

Un activador es un comando binario que, cuando se establece en 1, activará la alarma. Es posible revertir el disparador, de modo que es el estado 0 del sensor el que dispara la alarma, poniendo "revertir" en SÍ. Una vez que haya elegido su disparador, puede especificar un retraso de activación en minutos (no es posible descender por debajo del minuto). Este retraso permite, por ejemplo, si activa la alarma antes de salir de casa, no activar la alarma por un minuto (el tiempo para dejarlo salir). En otros casos, algunos detectores de movimiento permanecen en modo disparado (valor 1) durante cierto tiempo, incluso si no hay detección, por ejemplo 4 minutos, por lo que es bueno retrasar la activación de estos sensores en 4 o 5 min para que la alarma no suene inmediatamente después de la activación. Luego tiene el retraso de activación, a diferencia del retraso de activación que solo se produce una vez cuando se activa la alarma, se configura después de cada activación de un sensor. La cinemática es la siguiente cuando se activa el sensor (apertura de puerta, detección de presencia), si los tiempos de activación han pasado, la alarma activará las acciones inmediatas pero esperará hasta que termine el tiempo de activación antes de activar las acciones. Finalmente tiene el botón "invertir" que le permite invertir el estado de activación del sensor (0 en lugar de 1).

También tienes un parámetro **Mantiene** que le permite especificar un tiempo de espera de activación antes de activar la alarma. Por ejemplo, si tiene un detector de humo que a veces genera falsas alarmas, puede especificar un retraso de 2 segundos. Cuando se activa la alarma, Jeedom esperará 2 segundos y comprobará que el detector de humo todavía está alerta si no es el caso, no activará la alarma.  

Pequeño ejemplo para entender : en el primer disparador (*\ [Salon \] \ [Eye \] \ [Presence \]*) Tengo aquí un tiempo de activación de 5 minutos y un tiempo de activación de 1 minuto. Esto significa que cuando activo la alarma, durante los primeros 5 minutos no se puede activar la alarma debido a este sensor. Después de este retraso de 5 minutos, si el sensor detecta un movimiento, la alarma esperará 1 minuto (el tiempo para permitirme desactivar la alarma) antes de activar las acciones. Si hubiera tenido acciones inmediatas, estas se habrían disparado inmediatamente sin esperar el final del período de activación, las acciones no inmediatas habrían tenido lugar después (1 minuto después de las acciones inmediatas).

### Acción inmediata

Como se describió anteriormente, estas son acciones que se activan al disparar sin tener en cuenta el retraso del disparador (pero aún teniendo en cuenta el retraso de activación). Solo tiene que seleccionar el comando de acción deseado y luego, de acuerdo con él, completar los parámetros de ejecución.

> **Nota**
>
> Cuando se activan varias zonas sucesivamente, solo se ejecutan las acciones inmediatas de la primera zona activada.

## Modes

Los modos son bastante simples de configurar, solo tiene que indicar las zonas activas de acuerdo con el modo.

> **Punta**
>
> Es posible cambiar el nombre del modo haciendo clic en su nombre (opuesto a la etiqueta "Nombre del modo""). Atención durante el cambio de nombre de un modo es absolutamente necesario revisar los escenarios / equipos que usan el nombre antiguo para pasarlos al nuevo

> **Nota**
>
> Al cambiar el nombre de un modo, debe hacer clic en el widget de alarma en el modo en cuestión para una consideración completa (de lo contrario, Jeedom permanece en el modo anterior)

> **Importante**
>
> Es absolutamente necesario crear al menos un modo y asignarle zonas, de lo contrario su alarma no funcionará.

## Activación OK

Esta parte define las acciones a tomar luego de la activación de la alarma. Aquí nuevamente, encontrará la noción inmediata que representa las acciones que se realizarán inmediatamente después de armar la alarma, luego vendrán las acciones de activación que se ejecutan después de los tiempos de activación.

En el ejemplo, aquí enciendo, por ejemplo, una lámpara roja para indicar que se ha tenido en cuenta el armado y lo apago una vez que se completa el armado (porque normalmente no queda nadie en el perímetro de la alarma, de lo contrario lo activa).

> **Importante**
>
> Las acciones de activación OK no tienen en cuenta los tiempos de activación. Si tiene un retraso en la activación de un sensor de apertura, incluso si su puerta está abierta, las acciones de activación se ejecutarán.

## Activación KO

Estas acciones se ejecutan si se activa un sensor después de la activación de la alarma o después del retraso de activación de un sensor si está en alerta

Aquí también puede agregar acciones al reanudar la supervisión de un sensor

## Liberación

Le permite configurar las acciones globales que se tomarán cuando se active una alarma. No tiene que agregar más si ha configurado acciones específicas por zona.

## Desactivación OK

Estas acciones se ejecutan cuando la alarma está desactivada y no se activa. Ejemplo, cuando va a su casa, al abrir la puerta se activa la alarma, pero ha configurado un retraso de activación en el sensor y corta la alarma antes del final del retraso, se ejecutarán las acciones de desactivación OK. Si, por otro lado, hubiera detenido la alarma después del final del retraso de activación, este no hubiera sido el caso.

## Restablecer

Esta parte le permite definir las acciones que se realizarán cuando se active la alarma y luego se desactive. Aquí también hay acciones inmediatas y diferidas. Aquí un ejemplo : cuando vuelves a casa, los tiempos de activación han pasado, pero abrir la puerta activa la alarma. Si lo desactiva (antes de los tiempos de activación), se ejecutarán las acciones de reinicio inmediatas, pero no las acciones de reinicio normales. Si lo desactiva después de los tiempos de activación, se ejecutarán las acciones de reinicio inmediatas y normales.

## FAQ

>**¿Cuáles son las posibles etiquetas? ?**
>
> Las posibles etiquetas son :
>
> - #mode# : nombre del modo actual
> - #alarm_trigger# : nombre del comando que activó la alerta
> - #zone# : nombre del área del comando que activó la alerta

>**Cómo restablecer una alarma permanente ?**
>
>Simplemente haga clic en uno de los modos de alarma (incluso el activo)).

>**¿Podemos poner los retrasos en segundos? ?**
>
>Es posible para el "Retraso de activación" (debe poner números decimales, ej : 0.5 durante 30 segundos) pero no para el "Retraso de activación" (no utilice dígitos decimales para este parámetro).

>**No entiendo mi alarma no hace nada**
>
>Verifique que la alarma tenga un modo activo
