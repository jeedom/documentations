El plugin de alarma permite a Jeedom de tener un sistema de alarma real
para su domotica, muy fácil de utilizar y configurar.

Configuración del plugin
=======================

Después de descargar el plugin, solo necesitas activarlo,
No hay configuración adicional en este nivel.

Concepto inmediato
================

Es una noción muy importante del plugin de Alarma y es
muy importante entenderlo bien. Para esquematizar es como si
tuvieras 2 alarmas, la primera: la alarma inmediata que no tiene en
cuenta los tiempos de activación (ten cuidado, tiene en cuenta
los tiempos de activación) y una segunda alarma que tiene en cuenta
los tiempos de disparo.

**¿Por qué esta noción inmediata?**

Esta noción inmediata permite desencadenar acciones
específicas. Por ejemplo: vas a casa y no tienes
desactivado la alarma, antes de activar la sirena puede ser bueno
emitir un mensaje recordatorio de deshabilitar la alarma y si esto
no se realiza 1 minuto más tarde (tiempo de activación de 1 minuto)
se activa la sirena.

Este concepto se encuentra en diferentes tipos de acciones, cada vez se detallará su modo.

Equipos
===========

La configuración de un sistema de alarma está disponible en el menú
Plugin Seguridad

Una vez añadido una alarma te encuentras con : 

-   **Nombre del dispositivo de la alarma** Nombre de la alarma,

-   **Objeto padre** : especifica el objeto padre al que pertenece
    el dispositivo,

-   **Categoría** : la categoría del equipo (seguridad en general
    para una alarma),

-   **Activar** : permite poner su dispositivo en modo activo,

-   **Visible** : hace que su equipo sea visible en el dashboard,

-   **Permanentemente activo** : indica que la alarma estará permanentemente
    activo (por ejemplo una alarma de detección de incendios),

-   **Armamento visible**: permite hacer visible o no el comando
    Conectar la alarma en el widget,

-   **Estado inmediatamente visible**: permite convertir el estado inmediato de
    la alarma visible (ver más abajo para la explicación),

-   **Historial y estado de la alarma**: le permite tener un historial o
    no el estado y el estado de la alarma.

-   **Zonas separadas**: hace que las zonas sean independientes en términos de alerta. Normalmente, si un área está en alerta, el plugin ignorará las otras zonas. Al separar las zonas, se repetirán las acciones para las otras zonas que se pondrían en alerta.

-   **Restablecimiento automático**: cuando se activa, la alarma completa se restablece para evitar activaciones posteriores (normalmente no se volverá a armar hasta que haya un escenario / acción humana para hacerlo) 

-   **No realice las acciones inmediatas si el sensor no tiene demora**: le indica a la alarma que no realice las acciones inmediatas si el sensor no tiene un tiempo de activación, por lo que la alarma solo hara las acciones

> **Consejo**
>
> Para cada acción es posible especificar el modo en que
> debe ejecutarse o en todos los modos.

Zonas
=====

Parte principal de la alarma. Aquí es donde se configura
diferentes zonas y acciones (inmediatas y diferidas por zona,
tenga en cuenta que también es posible configurarlas de forma global) para hacer
cuando se activa. Una zona puede ser o bien volumétrico (por
día, por ejemplo) que perimetral (por la noche) o también
zonas de la casa (garaje, dormitorio, dependencias....).

Un botón de arriba a la derecha le permite añadir todas las que
desee.

> **Tip**
>
> Puede editar el nombre de la zona haciendo clic en el nombre de
> esta (frente a la etiqueta de "Nombre de la zona").

Una zona se compone de diferentes elementos: - disparador, - acción
inmediata, - acción.

Disparador
-----------

Un disparador es un comando binario, que cuando vale 1, va a
activar la alarma. Es posible invertir el disparador, de modo que
este es el estado 0 del sensor que dispara la alarma, poniendo
"Invertir" en SÍ. Una vez que haya seleccionado su disparador, puede
especificar un tiempo de activación en minutos (no es posible
ir por debajo del minuto). Este retraso permite, por ejemplo, si
activa la alarma antes de salir de tu casa, para no disparar.
la alarma antes de un minuto (el tiempo para dejarte salir). Otro caso,
algunos detectores de movimiento permanecen en modo activado (valor 1)
por un tiempo aunque no hay detección, por ejemplo
4 minutos, por lo que es bueno cambiar la activación de estos sensores de 4
o 5 min para que la alarma no suene inmediatamente después de la
activación. Luego tiene el tiempo de disparo, que a la
diferencia del retraso de activación, se produce una sola vez cuando
se activa la alarma, se configura después de cada
disparo de un sensor. La cinemática es la siguiente, durante la
activación del sensor (apertura de la puerta, detección de presencia), si
se pasaron los tiempos de activación, la alarma activará las acciones inmediatamente, pero esperará hasta que el retraso de activación termine antes de activar las acciones. Finalmente tienes el botón "invertir" que permite invertir el estado de activación del sensor (0 en lugar de 1).

También tiene un ajuste **Mantener** que le permite especificar un tiempo de espera antes de activar la alarma. Por ejemplo, si tiene un detector de humo que a veces tiene falsas alarmas, puede especificar un retraso de 2 s. Al activar la alarma, Jeedom esperará 2 segundos y comprobará que el detector de humo aún esté en alerta. Si no es así, no activará la alarma.

Pequeño ejemplo para comprender: el primer disparo
(*\[Salon\]\[Oeil\]\[Présence\]*) aqui tengo un periodo de activación de 5
minuto y el disparador de 1 minuto. Esto significa que cuando activo la alarma, durante los primeros 5 minutos, la alarma no se dispara debido a este sensor. Después de este tiempo de 5 minutos, si el movimiento es detectado por el sensor, la alarma espera 1 minuto (el tiempo para dejarme desactivar la alarma) antes de desencadenar acciones. Si tuviera acciones inmediatas, comenzarían inmediatamente sin esperar el final del tiempo limite de activación, las acciones no inmediatas habrian tenido lugar después (1 minuto después de las acciones inmediatas).

Acción inmediata
----------------

Como se describió anteriormente, se trata de acciones que se desencadenan a partir de la
activación ignorando el tiempo definido de disparo (pero aun teniendo en cuenta el tiempo de activación). Sólo tienes que seleccionar el control de la acción deseada y función de la misma, completar los parámetros de ejecución.

> **Nota**
>
> Cuando se activan varias zonas sucesivamente, solamente las
> acciones inmediatas de la zona 1 se ejecutaran.

Modos
=====

Los modos son bastante fáciles de configurar, sólo hay que indicar
las zonas activas en función del modo.

> **Tip**
>
> Il est possible de renommer le mode en cliquant sur le nom de celui-ci
> (en face du label "Nom du mode"). Attention lors du renommage d'un mode il faut absoluement revoir les scénarios/équipement qui utiliser l'ancien nom pour les passer sur le nouveau

> **Note**
>
> Lors du renommage d’un mode, il faut sur le widget de l’alarme
> recliquer sur le mode en question pour une prise en compte complète
> (sinon Jeedom reste sur l’ancien mode)

> **Important**
>
> Il faut absolument créer au moins un mode et lui affecter des zones
> sinon votre alarme ne marchera pas.

Activacion OK
=============

En esta parte se definen las acciones a realizar despues de la
activación de la alarma. Aquí nuevamente, encontrarás la noción inmediata que representa las acciones a realizar inmediatamente después del armamento de la alarma, luego vienen las acciones de activación que se ejecutaran después de los tiempos de activación.

En el ejemplo, aquí enciendo por ejemplo una lámpara en rojo para
señalar de que el armamento ha sido realizado y apago una vez el armamento completo (porque normalmente no hay nadie en el perímetro de la alarma, de lo contrario lo dispara).

> **Importante**
>
> Las acciones de activación OK no tienen en cuenta el tiempo de activación. 
> Si tiene un retraso en la activación de un sensor
> de apertura, incluso si su puerta está abierta las medidas de activación
> seran ejecutadas.

Activación KO
=============

Estas acciones se ejecutan si un sensor se activa después de la activación de la alarma o después del retraso de activación de un sensor si está en alerta

También puede agregar acciones aquí cuando un sensor vuelve a vigilar

Activación
=============

Permite configurar las acciones globales que se realizarán durante la activación
de la alarma. No tiene la obligación de agregar si tiene
acciones específicas configuradas por zona.

Desactivación OK
================

Estas acciones se ejecutan cuando la alarma esta desactivada y que no esta funcionando. Por ejemplo,  cuando llegue a su casa, abriendo la puerta se activa la alarma, pero hay un tiempo de activacion configurado en el sensor y usted corta la alarma antes del tiempo definido, las acciones de desactivacion OK seran ejecutadas. Sin embargo, si ha detenido la alarma despues del final de este tiempo definido de activacion, no habría sido el caso.

Reinicio
================

Esta parte le permite definir las acciones a realizar cuando se activa la alarma esta funcionando y se desactiva. Aquí también hay acciones inmediatas y diferidas. Por ejemplo: te vas a casa, el tiempo definido de activacion se acabo, pero al abrir la puerta se dispara la alarma. Si lo desactivas (antes de los tiempos de activación), se ejecutarán las acciones de reinicio inmediato, pero
no los reinicios normales. Si lo desactivas después despues del tiempo de activacion, las acciones de reinicio inmediato y normal serán ejecutadas.

Preguntas frecuentes
===

> **¿Cuáles son las etiquetas posibles?**
>
> Las posibles etiquetas son:
>
> - # modo #: nombre del modo actual
> - # trigger #: nombre del comando que activó la alerta
> - # zone #: nombre de la área de comando que activó la alerta

> **¿Cómo reiniciar una alarma permanente?**
>
> Simplemente haga clic en uno de los modos de alarma (incluso
> el que esta activado).

> **¿Puedo establecer tiempo definido en segundos?**
>
> Es posible para el "tiempo de activación" (es necesario poner
> números decimales, por ejemplo, 0.5 durante 30 segundos) pero no para el
> "Tiempo de espera de activación" (no ponga dígitos decimales para
> este parámetro).

> **No entiendo mi alarma no hace nada**
>
> Comprobar que la alarma tiene un modo activo
