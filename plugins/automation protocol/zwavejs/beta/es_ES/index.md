# Complemento Z-Wave JS

El complemento Z-Wave JS permite **el control total del protocolo de domótica Z-Wave en Jeedom** basándose en el trabajo realizado en torno a la reconocida biblioteca **Z-Wave JS UI**.

El complemento Z-Wave JS mejora la fiabilidad y la seguridad de las transmisiones mediante el uso del **protocolo MQTT**, al tiempo que ofrece a los usuarios más expertos posibilidades de gestión avanzada de su red Z-Wave.

>**IMPORTANTE**
>
>Este complemento es compatible con Debian 11 «Bullseye» y, por lo tanto, es el complemento oficial recomendado para gestionar tu red Z-Wave en Jeedom.

# Configuración

Tras instalar y activar el complemento, debería iniciarse la instalación de las dependencias, salvo que se haya desactivado previamente la gestión automática. En ese caso, habrá que hacer clic en el botón **Reiniciar** para iniciar esta fase de instalación. Dado que el complemento oficial **MQTT Manager** forma parte de las dependencias necesarias, se instalará y activará automáticamente durante el proceso, si aún no lo está.

El resto de los pasos consisten en descargar, compilar y configurar la biblioteca **Z-Wave JS UI**.

>**INFORMACIÓN**
>
>La primera instalación de las dependencias incluye una fase de compilación, por lo que puede tardar varias decenas de minutos, dependiendo de tu configuración de hardware. Las actualizaciones de las dependencias se instalan mucho más rápido a partir de entonces.

## Configuración del complemento

En cuanto a la configuración del complemento, lo más importante es seleccionar correctamente el **puerto del controlador Z-Wave** correspondiente a la interfaz física a la que está conectado el controlador.

Otras opciones de configuración posibles son:

- **Aplicar la configuración recomendada**: aplica directamente el conjunto de ajustes recomendado por el equipo de Jeedom al añadir un nuevo módulo *(recomendado)*.

- **Eliminación de dispositivos excluidos**: si se marca esta casilla, permite eliminar automáticamente los dispositivos excluidos de la red Z-Wave. De lo contrario, los dispositivos se conservan en Jeedom aunque hayan sido excluidos de la red. En ese caso, el dispositivo deberá eliminarse manualmente o reutilizarse asignándole un nuevo identificador Z-Wave.

- **Prefijo MQTT**: permite especificar el prefijo que se va a utilizar en MQTT *(`zwave` (por defecto)*.

### Llaves de seguridad

Las claves de seguridad deben guardarse con mucho cuidado. Si las pierdes, habrá que volver a emparejar los dispositivos incluidos en modo seguro. Las claves se pueden especificar; si los campos están vacíos o no son válidos, el complemento generará unas nuevas y podrás verlas posteriormente.

>**IMPORTANTE**
>
>Si has utilizado tu controlador con el complemento Openzwave y has incluido módulos en modo seguro, la clave S0 es: `0102030405060708090A0B0C0D0E0F10`.

## Administrador de MQTT

Como se ha explicado en la introducción, el complemento Z-Wave JS requiere compatibilidad con el protocolo MQTT para comunicarse, por lo que el complemento oficial **MQTT Manager** servirá de soporte para estas comunicaciones.

Se pueden plantear varios casos:

- **Si aún no utilizas un broker MQTT**: en ese caso, no tienes que hacer nada. Los complementos **Z-Wave JS** y **MQTT Manager** intercambiarán automáticamente la información y las configuraciones necesarias *(un broker `Mosquitto` se instalará, entre otras cosas, localmente en el equipo)*.

- **Si ya utilizas el complemento MQTT Manager**: no es necesario hacer nada, el complemento Z-Wave JS recuperará automáticamente los datos de conexión al servidor MQTT.

<!-- - **Ya utilizas un broker MQTT a través de otro complemento que no sea MQTT Manager**: En este caso, debes seleccionar el modo **broker remoto** e indicar los datos de conexión *(dirección y autenticación)* en la configuración del complemento MQTT Manager.

- **Si quieres utilizar un broker MQTT en Docker**: solo tienes que seleccionar el modo **broker local de Docker** en la configuración del complemento MQTT Manager antes de instalarlo. `Mosquitto`. -->

En cualquier caso, es necesario iniciar el demonio del complemento MQTT Manager antes de poder continuar. De lo contrario, aparecerá un mensaje de aviso que impedirá el inicio del demonio Z-Wave JS.

## Abrir el complemento Zwave

También es importante abordar el caso en el que el complemento OpenZwave se utilice en paralelo al complemento Z-Wave JS, por ejemplo, durante el tiempo que se tarda en cambiar de uno a otro *(Véase el apartado [**Migración desde OpenZwave**](#Migration%20depuis%20OpenZwave))*.

En primer lugar, hay que saber que no existe absolutamente ningún riesgo al utilizar los complementos Z-Wave JS y OpenZwave en paralelo. Incluso en caso de que surja algún problema con el complemento Z-Wave JS, bastará con detener su servicio y reiniciar el del complemento OpenZwave para recuperar una red Z-Wave exactamente idéntica y operativa.

Por lo tanto, hay que desactivar la gestión automática y, a continuación, detener el demonio del complemento OpenZwave para poder iniciar el demonio del complemento Z-Wave JS. De nuevo, si no se hace así, aparecerá un mensaje de aviso que impedirá el inicio del demonio Z-Wave JS.

>**IMPORTANTE**
>
>¡No elimines ningún dispositivo del complemento OpenZwave antes de tiempo, aunque esté desactivado durante las pruebas!

## 1er inicio del daemon

Salvo que se indique lo contrario, ya se puede iniciar el demonio Z-Wave JS. De lo contrario, debería aparecer un mensaje en la página de configuración del complemento para identificar el motivo del bloqueo.

Si utilizas el plugin Z-Wave JS con un controlador sin configurar, la red Z-Wave se inicia inmediatamente y queda disponible, lista para añadir módulos.

En caso de utilizarlo con un controlador que ya forme parte de una red Z-Wave, hay que dejar que el complemento haga su trabajo, ya que registrará automáticamente los dispositivos en Jeedom a medida que se detecten los módulos. Por lo tanto, el primer escaneo completo de una red Z-Wave puede tardar bastante tiempo, dependiendo del tipo de módulos utilizados y de su frecuencia de comunicación.

Los módulos se van incorporando en dos fases:
- En primer lugar, con su `node id` sin imagen y sin identificación.
- A continuación, se identifican en una segunda fase.

Una vez que todos los módulos conectados a la red eléctrica se han inicializado y, por lo tanto, identificado, es importante activar los módulos que funcionan con pilas o esperar a que se activen por sí mismos. Solo a partir de ese momento se puede considerar que la red está totalmente en funcionamiento.

>**INFORMACIÓN**
>
>A diferencia del complemento OpenZwave, tras esta primera fase de configuración, los reinicios de la red se producen de forma instantánea a partir de ese momento.

Si, al finalizar esta fase *(que, recordemos, puede ser larga)*, comprueba que un módulo que era compatible con el complemento Openzwave no lo es con el complemento Z-Wave JS, le invitamos a consultar el apartado [**Módulo no reconocido o reconocido incorrectamente**](#Module%20non%20ou%20mal%20reconnu).

## Configuración del módulo

A diferencia del complemento Openzwave, no hay una sección dedicada a la configuración de los módulos. De hecho, la configuración de un módulo se realiza a través del comando de clase «Configuración». Por lo tanto, este comando aparece entre los demás comandos de clase del módulo en **Valores**.

### Nodo

Este botón, que aparece en la página de un dispositivo, permite visualizar la información del módulo a través de varias pestañas:

- **Resumen**: Muestra toda la información de identificación del módulo, así como la información de estado.

- **Acciones**: Permite ejecutar acciones técnicas en un nodo. Cada acción se describe de forma concisa.
>**INFORMACIÓN**
>
>Normalmente, no deberías tener que modificar estas funciones, ya que el complemento se encarga de ello por sí solo.

- **Estadísticas**: como su nombre indica, permite consultar las estadísticas de comunicación del módulo.

- **Árbol**: agrupa toda la información anterior en formato JSON técnico.

### Valores

Este botón, que aparece en la página de un dispositivo, permite obtener la lista de todos los comandos de clase Z-Wave gestionados por el módulo.

Cada una de ellas se puede desplegar haciendo clic sobre ella para ver el conjunto de comandos *(útiles o no)* relacionados con esa clase de comando.

Esta ventana ofrece numerosas posibilidades:

- Visualizar los valores de los datos,
- Cambiar el valor de una acción,
- Cambiar la configuración del módulo,
- Crear automáticamente un comando «info» en Jeedom *(si lo necesitas o si no aparece en la configuración de Jeedom)*,
- Crear automáticamente un comando de acción en Jeedom *(si lo necesitas o si falta en la configuración de Jeedom)*,
- Configurar un sondeo *(comunicación forzada)*. Utilizarlo únicamente en caso de que el comportamiento predeterminado del módulo no permita hacerlo de otra forma, es decir, prácticamente nunca.

### Banda

Este botón, que aparece en la página de un dispositivo, permite gestionar las asociaciones del módulo y ofrece las siguientes funciones:

- Ver las asociaciones actualmente activas,
- Eliminarlos,
- Añadir más.

## Inclusiones/Exclusiones

El botón **Inclusiones** que aparece en la página donde se agrupan todos los dispositivos Z-Wave JS permite cambiar el controlador al modo **Inclusión** *(por defecto, S0, S2)* o al modo **Exclusión**.

>**INFORMACIÓN**
>
>Por el momento, no es posible realizar inclusiones S2 directamente desde el complemento. Esta funcionalidad se implementará en una próxima actualización, ya que el motor del complemento ya es totalmente compatible con S2.

## Sincronizar

Recordemos que, en Z-Wave, todos los módulos que componen la red están asociados directamente al controlador. Algunos controladores con batería *(como el Aeon-labs Z-Stick GEN5)* permiten incluso incluir módulos sin necesidad de conectarlos a un router.

El botón **Sincronizar** permitirá entonces crear automáticamente en Jeedom los dispositivos detectados por el controlador. Del mismo modo, los dispositivos correspondientes a periféricos excluidos del controlador se eliminarán automáticamente si se activa la opción **Eliminación de periféricos excluidos** en la configuración general del complemento.

## Red Z-Wave

### Resumen

### Comparte

### Estadísticas

### Gráfico de red

### Tabla de ruteo

## Salud

## Estadísticas

# Compatibilidad

# Solución de problemas y diagnóstico

## Migración desde OpenZwave

Antes de plantearse cambiar definitivamente del complemento OpenZwave al complemento Z-Wave JS, es imprescindible asegurarse de que todos los módulos de la red sean totalmente compatibles. Este paso puede llevar fácilmente varios días, el tiempo necesario para comprobar todas las posibilidades y situaciones.

A continuación, una vez que estés seguro de que el complemento OpenZwave ya no es imprescindible, puedes utilizar la herramienta de [**sustitución de equipos y sistemas de control**](https://doc.jeedom.com/es_ES/core/4.3/replace){:target="\_blank"} del núcleo para migrar de forma rápida y sencilla tus equipos actuales al nuevo complemento.

## Módulo no o mal reconocido

Si observas que el plugin Z-Wave JS no reconoce un módulo o lo reconoce incorrectamente **, aunque el plugin OpenZwave sí lo admitía**, lo primero que debes hacer es asegurarte de que los datos que aparecen en la ventana **Valores** *(a la que se accede desde la página del dispositivo)* se actualizan correctamente cuando se acciona físicamente el módulo.

A continuación, una vez que estés seguro de que el módulo en sí mismo se reconoce correctamente y de que sus valores se actualizan, si algunos comandos siguen sin funcionar, será necesario[abrir una solicitud de soporte de Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/#Les%20demandes%20de%20support%20(ou%20tickets)){:target="\_blank"} indicando obligatoriamente los siguientes datos:
- Fabricante y referencia exacta del módulo en cuestión,
- Descripción de los comandos no funcionales,
- Captura de pantalla de **Información del nodo** en la ventana del mismo nombre,
- Capturas de pantalla de **cada bloque** de la ventana **Valores del nodo**

Si quieres profundizar más, puedes activar físicamente el módulo y realizar capturas de pantalla de los cambios consecutivos en los valores, siempre en la ventana «Valores del nodo».

>**INFORMACIÓN**
>
>La tramitación de una solicitud de asistencia técnica puede requerir un cierto tiempo.
Si desea crear el archivo de integración por su cuenta, puede seguir las instrucciones detalladas en el [Guía de integración](procedure_integration.md).


>**IMPORTANTE**
>
>Insistimos en que, en un primer momento, el equipo solo tramitará las solicitudes de configuración de módulos que incluyan todos los elementos indicados anteriormente y que ya funcionen con el complemento Openzwave. Es posible que no puedas añadir tus capturas de pantalla al crear el ticket, pero no te preocupes, podrás enviarlas más adelante como respuesta a tu solicitud.

>**INFORMACIÓN**
>
>Al accionar físicamente el módulo, podrás identificar la línea cuyos valores cambian en consecuencia en la ventana «Valores del nodo» y cuyo comando no se haya creado o no funcione. Al final de la línea hay un botón con un icono en forma de bolígrafo que permite crear automáticamente el comando correspondiente, lo que te ofrece la posibilidad de utilizar tu módulo a pesar de que la configuración falte o sea errónea.

<!-- ## Remplacer un module défaillant -->

# Preguntas frecuentes

>**¿Es posible utilizar Z-Wave JS UI en modo remoto?**
>
>La hoja de ruta del equipo de Jeedom relativa al complemento Z-Wave JS prevé, efectivamente, la incorporación de esta posibilidad en los próximos meses, sin que haya urgencia alguna, ya que no se trata de una funcionalidad esencial para el correcto funcionamiento del complemento.

>**¿Es posible activar el servidor WebSocket de Z-Wave JS UI?**
>
>Para que el complemento y Jeedom en general funcionen correctamente, no es posible activar el servidor WebSocket de Z-Wave JS UI; sin embargo, el modo remoto, que se incorporará próximamente, permitirá los mismos casos de uso.
