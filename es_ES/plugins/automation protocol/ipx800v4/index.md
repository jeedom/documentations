# Complemento IPX800v4

Este complemento le permite administrar un IPX 800 v4

# Configuración del plugin

Después de descargar el complemento, solo necesita activarlo y marcar las casillas que se aplican a usted para solicitudes a IPX800v4 (por ejemplo, marque X-Dimmer si tiene un X-dimmer). También puede elegir la frecuencia de las solicitudes para aligerar la carga en ipx800v4

> **Importante**
>
> Después de cada modificación de la frecuencia o solicitudes, debe reiniciar el daemon para que se tenga en cuenta

> **Importante**
>
> Para aligerar la carga, se recomienda desmarcar TODAS las solicitudes de tipo y simplemente verificar las API que le conciernen (encontrará detalles en la documentación de la API para IPX800v4)

> **Nota**
>
> Puede ver en esta página el estado del demonio que monitorea el IPX800

# Configuración del equipo

Se puede acceder a la configuración de los dispositivos IPX800 desde el menú
plugin luego protocolo de automatización del hogar :

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo IPX800** : Nombre de vuestro equipo IPX800,
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo,
-   **Activar** : activa su equipo,
-   **Visible** : hace que su equipo sea visible en el tablero,
-   **Categoría** : categorías de equipos (puede pertenecer a varias categorías),
-   **IP** : La ip del IPX800,
-   **Clave API** : Clave API del IPX800 (por defecto, la clave API es apikey)

El complemento predeterminado no crea nada, dependerá de usted hacerlo
dependiendo de tu configuración pero serás guía.

# Commande

## Action

Tienes los tipos de acción :

- Uno : le permite establecer una salida (o entrada virtual) en 1, o asignar un valor a una entrada analógica (o contador)
- Apagado : permite establecer en 0 una salida (o entrada virtual)
- Alternar : permite invertir el estado de una salida (o entrada virtual)
- ...

Tienes los tipos de actuadores :

- Relais
- Salida virtual
- Entrada virtual
- Entrada analógica virtual
- Compteur
- Cable piloto
- ...

> **Nota**
>
> Cierto tipo de actuador puede ocultarse dependiendo del tipo de acción

Luego, dependiendo del tipo de acción y el actuador, tiene varios parámetros que pueden ser :

- número de relevo
- número de salida virtual
- número de entrada virtual
- número de entrada analógica y valor para asignar (déjelo en blanco si desea elegir con el control deslizante)
- Número de contador y operación (ex +200 o -100)
- número de cable piloto y valor de pedido (0 confort, 1 eco, 2 sin escarcha, 3 apagado, 4 confort-1, 5 confort-2)
- ...

## Info

Tienes diferentes tipos (dependiendo de tus extensiones) :

- Relais
- Entrada digital
- Entrada virtual
- Salida virtual
- Watchdog
- EnOcean
- Entrada analógica
- Entrada analógica virtual
- Compteur
- Persiana enrollable : opción en el formulario 1-3 para la parte 3 de la extensión VR 1
- THL : en forma 1-TEMP para la temperatura del sensor 1, 3-HUM para la humedad del sensor 3 o 2-LUM para el brillo del sensor 2
- Extensión 0-10v
- Cable piloto
- Dimmer
- PWM
- Thermostat
- EnOcean
- ...

Para cada tipo, jeedom le preguntará el número de la información deseada

# Enviar información de IPX a Jeedom

Para evitar que la información se actualice en Jeedom o los interrogatorios demasiado frecuentes (que pueden dañar el ipx800) es posible pedirle al IPX800 que empuje la información hacia Jeedom (atención, no es posible para todos tipos de entrada / salida)

Aquí está la sintaxis para usar en una inserción IPX a :

- Actualización de todas las entradas digitales : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allD&data=$D``
- Actualización de todos los relés : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allR&data=$R``
- Actualización de todas las salidas virtuales : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allVO&data=$VO``

Entonces te hará una escena por tipo (entrada, retransmisión ...) con :

- Evento : ``ON EVENT`` y elija el tipo deseado (por ejemplo, salidas físicas)
- Acción : ``ON``
- Resultado : ``PUSH`` y elija el empuje correspondiente (por ejemplo, Jeedom Relais)

# Template

Para ayudarlo, hay una plantilla que le permite crear ciertos tipos de pedidos a la vez y más rápido.
