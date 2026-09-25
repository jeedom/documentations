# MyhomeSCS 

Complemento para usar la puerta de enlace F454

# Configuración 

El complemento MyHomeSCS le permite comunicarse con todos los dispositivos MyHomeSCS de Legrand a través de la puerta de enlace F454

>**Atención**
>
>Para usar el complemento, es necesario desactivar la autenticación de la puerta de enlace MyHome y autorizar la dirección IP de JEEDOM en la lista blanca de la puerta de enlace.

Después de haberlo descargado del Market, será necesario configurar la ip y los puertos utilizados para conectarse a la puerta de enlace F454. Puerto de enchufe interno : 55005 es el puerto predeterminado utilizado por el daemon MyHomeSCS. Es mejor evitar cambiarlo sin saber cómo funciona el demonio.

![myhomescs1](../images/myhomescs1.png)

Una vez configurado, accede a la página del complemento MyHomeSCS.

A la izquierda, la lista de módulos MyHomeSCS, y en el centro las pestañas General, Información y Pedidos.

![myhomescs2](../images/myhomescs2.png)

El menú de la izquierda presenta todos los módulos MyHomeSCS detectados y / o configurados en su instalación de domótica. Por el momento, el complemento detecta módulos Legrand, pero no los reconoce automáticamente. Una vez que Jeedom haya detectado el nuevo módulo, lo creará, pero sin asignarle un comando. Para eso, será necesario elegir un módulo en la lista desplegable completamente a la derecha (si el módulo existe en la base de datos) o crear los comandos uno por uno.

El botón "Agregar equipo" le permite agregar equipos específicos de MyHomeSCS, generalmente para pruebas u órdenes de la "Administración" o "Especial"".

![myhomescs3](../images/myhomescs3.png)

Cuando cambia al modo experto, tiene acceso a otras opciones : Tipo de comando, unidad, tipo de comunicación, marco sin formato.

El campo de tipo se usa para elegir entre un comando de tipo de acción o un comando de tipo de información, el tipo de acción o información (Acción, cursor, mensaje, etc.) y la acción (ON, OFF, etc.). El campo de unidad se usa para ingresar la unidad utilizada para el comando o para la retroalimentación de estado. El campo de comunicación le permite elegir el tipo de comunicación (Multicast, Unicast o Broadcast). El campo de comando LogicalID o raw se usa para nombrar la información o completar el marco "raw"".

![myhomescs4](../images/myhomescs4.png)

La pestaña Información especifica el tipo de equipo.

![myhomescs6](../images/myhomescs6.png)

La pestaña general le permite elegir el nombre del equipo, su destino en la estructura de árbol de su domótica, la categoría del módulo (en la jerga de Legrand : OMS), la posibilidad de hacer que el módulo esté inactivo en Jeedom, o de hacer que el módulo sea visible o invisible en la interfaz.

![myhomescs7](../images/myhomescs7.png)

La pestaña Pedidos detalla todos los comandos (algunos elementos solo están disponibles en modo experto).

Estos comandos se completan automáticamente si elige el tipo de módulo en el campo "Equipo"". Los parámetros útiles son Log, Display (el comando), Event (utilizado para forzar la solicitud de información sobre el módulo).

![myhomescs8](../images/myhomescs8.png)

En una próxima versión y con la ayuda de todos, podríamos imaginar que los módulos se reconocen automáticamente

## Lista de módulos probados 

- Persianas enrollables : F401
- DALI : F429
- Dimmer : F418
- Interruptor 4x : F411
- Detector de movimiento : 0 672 26

## Agregar equipo 

La mayoría del equipo se agrega al complemento MyHomeSCS tan pronto como se detecta

Una vez que el módulo creado en el complemento, hay dos soluciones disponibles para usted.

El módulo existe en el menú desplegable : Equipo y allí es suficiente para elegirlo, luego guardar para que los pedidos se agreguen automáticamente.

O el módulo no existe (todavía) en el complemento y luego deberá crear los comandos uno por uno.

Los comandos de información son necesarios para recuperar el estado del equipo. Ejemplo para módulos de luz, se crea una información de "botón" y permite conocer el estado del botón del módulo (ON u OFF, por ejemplo). Esta información se usa en particular para administrar widgets o para desencadenar escenarios

Los comandos de acciones le permiten realizar acciones en el equipo. Dependiendo de la categoría del equipo, tendrá diferentes opciones.

Los marcos de Legrand están orientados alrededor de 3 variables y tienen la forma (para un marco del tipo BUS-COMMAND) \*QUIEN*QUE \* DONDE \#\#

La OMS corresponde a la categoría (luz, automatización, etc.)). Si en el marco sin formato ingresas \#WHO\\\#, esto será reemplazado por la ID de categoría de equipo.

QUÉ corresponde a la ID de acción. Si ingresas \#WHAT\\\#, esta variable será reemplazada por el código correspondiente del comando elegido.

Finalmente, el WHERE corresponde a la concatenación del modo de comunicación (unicast, multicast, broadcast), de la ID.UNIDAD y medios (* 9 para Zigbee). En mi plugin, puedes escribir \\\#WHERE* qui sera remplacé par le code correspondant au type de communication choisi et vous pouvez saisir \#IDUNIT \# que será reemplazado por la UNIDAD correspondiente a los últimos 4 dígitos de la dirección MAC del módulo se convierte a decimal seguido de la ID en dos dígitos.

Básicamente, da ``\*\#WHO\\\#\\\*\#WHAT\\\#\*\#WHERE\\\#\#IDUNIT\\\#\#\#``

Además de estas variables, puede ingresar el marco sin procesar directamente, por ejemplo : ``\*2\*2\*\#121301\#9\#\#``

Para conocer todos los tipos de marcos, QUIEN, QUÉ, DÓNDE valor, tipos de comunicación o códigos de medios, puede consultar el documento de Legrand : Open Web Net Zigbee

Una vez que haya creado todos los pedidos para su equipo, es posible crear un archivo "Equipo" en formato JSON. Para esto, puedes inspirarte en los módulos existentes.

Luego puedes compartirlo con la comunidad (gracias a la función : Enviar una configuración). Esto agregará comandos automáticos para los próximos usuarios del complemento MyHomeSCS.

Gracias a usted.

# Preguntas frecuentes 

Intenta iniciarlo en modo de depuración para ver el error

Espere un minuto para ver si el problema persiste, si es así
En SSH hacer : "sudo rm /tmp/myhomescscmd.pid"

Esto significa que se inicia el deamon pero que Jeedom no puede
detenlo. Puede reiniciar todo el sistema o en ssh
do "killall -9 myhomescs.py"

Asegúrese de haber marcado la casilla para la creación automática de
equipo, verifique que el demonio esté funcionando. Usted puede
también reinícielo en depuración para ver si recibe mensajes de
tu equipo
