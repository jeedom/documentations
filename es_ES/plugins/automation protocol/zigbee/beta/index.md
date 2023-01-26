# Complemento de Zigbee

**El complemento Zigbee para Jeedom** se basa en el excelente trabajo realizado en torno a **la biblioteca Zigpy de código abierto** para ofrecer un **compatibilidad general con diferentes hardware Zigbee**. Permite la comunicación con los siguientes controladores Zigbee :

-	**deCONZ (clave Conbee/Conbee 2/Raspbee/Raspbee 2)** : Probado y validado por el equipo de Jeedom. *(No es necesario instalar la aplicación deCONZ)*
-	**EZSP (laboratorios de silicio)** : Probado, validado y recomendado por el equipo de Jeedom (presta atención a la tecla Sonoff que no parece funcionar muy bien).
-	**XBee** : No probado por el equipo de Jeedom.
-	**Zigate** : No probado por el equipo.
-	**ZNP (Texas Instruments)** : No probado por el equipo.

>**Importante**
>
> En primer lugar, debe actualizar el firmware de su clave (especialmente para EZSP, clave popp en particular) de lo contrario, el demonio no puede funcionar. Para la clave Popp la actualización se gestiona directamente desde el complemento para el otro tipo de clave es necesario consultar la documentación del fabricante.

Además, el complemento está equipado con muchas herramientas que permiten :

- hacerse cargo de **varios controladores al mismo tiempo**,
- la **copia de seguridad y restaurar** un controlador,
- la **Actualización de firmware** un controlador,
- la **actualización de módulos** en OTA,
- visualización de nodos y **gráfico de red**,
- administración de **grupos**,
- la administración de **Unión**,
- hacerse cargo de **Touchlink**,
- o incluso para integrar sus propias configuraciones para los más experimentados...

>**MUY IMPORTANTE**
>
> Debido al vals del lado del fabricante del firmware / hardware y posibles bugs en su firmware (sin necesariamente tener la posibilidad de actualizarlo desde Jeedom porque la mayoría de los fabricantes no los comunican) es posible que un módulo marcado como compatible tampoco lo haga solo parcialmente (un botón que no funciona, o no hay diferencia entre el botón arriba y no, no hay aumento de CO2 o un sensor del módulo...). Desafortunadamente, no podemos advertirle con anticipación en la lista porque : 
>- no necesariamente tenemos el módulo en cuestión, muchos módulos se agregan por comentarios de los usuarios
>- de una semana a otra el módulo puede haber cambiado (nuevo hardware, nuevo firmware o incluso nuevo módulo que no ha cambiado de nombre)
>En ningún caso Jeedom se hace responsable en el caso de que falte una función (o incluso un módulo que no funcione) cuando se indique como compatible, como lo hace, estamos sujetos a los cambios impuestos por el fabricante

# Configuration

## Configuración del plugin

**El complemento Zigbee** utiliza dependencias que deberán instalarse primero. Una vez instaladas las dependencias, puede configurar uno o más controladores Zigbee ingresando **el tipo de controlador, el puerto del controlador y el canal a utilizar**, luego (re) iniciar el demonio.     

![Configuración contrôleur Zigbee](../images/zigbee_controllerConfig.png)

>**Importante**
>
>Cualquier cambio de canal requerirá un reinicio del demonio. Un cambio de canal también puede requerir la reincorporación de ciertos módulos.

## Compatibilité

Puedes encontrar [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=zigbee) la lista de módulos compatibles con el complemento

### Configuración avanzada de Zigpy

>**Reservado para expertos !**

Es posible configurar parámetros específicos para el subsistema Zigbee *(Zigpy)*. Esta parte está estrictamente reservada para expertos, por lo que el equipo de Jeedom no proporciona la lista de posibles parámetros *(hay cientos de ellos dependiendo del tipo de controlador)*.

El campo de entrada acepta código en formato `json` de este tipo :

''''''''
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
''''''''

>**Importante**
>
>Cualquier solicitud de soporte será rechazada automáticamente si se completa este campo.

## Configuración del equipo

### Inclusión de un módulo Zigbee

La inclusión es la parte más compleja de Zigbee. Aunque simple, la operación a menudo se repite varias veces para lograr. El lado del complemento Jeedom es fácil, solo haga clic en el botón **Modo de inclusión** después de lo cual tienes 3 minutos para incluir el equipo.

El procedimiento de inclusión es específico para cada módulo. Consulte la documentación del fabricante para lograrlo.

>**TRUCO**
>
>No olvides hacer un reinicio *(reset)* del módulo antes de cualquier inclusión.

### Configurar un módulo Zigbee

Una vez incluido, se supone que Jeedom reconoce automáticamente el módulo y crea los comandos correspondientes. Si este no es el caso, consulte el siguiente párrafo : **Módulo no reconocido**.

>**Importante**
>
>Debido a un error en algún firmware *(Ikea, Sonoff, etc)*, a veces es necesario elegir el tipo de módulo directamente de la lista **Dispositivos** luego guarde para que los pedidos se creen correctamente.

En las acciones (arriba a la derecha) puedes activar **Comandos de autodescubrimiento de información**, una vez activado, jeedom creará automáticamente un pedido para cualquier información reportada por el módulo durante 3 minutos. Permite, por ejemplo, en un control remoto que Jeedom aún no reconoce, crear automáticamente los comandos de información correspondientes a la presión de los botones (que se realizarán durante los 3 minutos, por lo tanto)

Como de costumbre, puede darle un nombre a su equipo, ingresar una categoría o un objeto principal y activarlo o hacerlo visible.

También se pueden acceder a otros parámetros más específicos :

- **Identificación** : identificador único del equipo. Incluso durante una reincorporación o si cambia el tipo de controlador Zigbee.
- **Controlador Zigbee** : utilizado para seleccionar el controlador Zigbee en comunicación con el equipo.
- **Control de comunicación** : le permite seleccionar el modo de verificación de la buena comunicación entre el controlador y el módulo.
- **Ignorar la confirmación de ejecución** : marque la casilla para ignorar la ejecución correcta del comando. Esto le permite recuperar el control más rápidamente, pero no garantiza que el pedido esté bien colocado.
- **Permitir hacer cola** : marque la casilla para permitir la cola de pedidos. Esto permite volver a ejecutar el comando en caso de que el módulo no haya tenido en cuenta la orden.
- **Actualización automática (cron)** : permite forzar la actualización de atributos, no se recomienda poner nada aquí, un mal valor y satura todas tus redes zigbee...

La parte **Información** permite la selección manual de fabricante y equipo. También existe la visual del equipo así como dos botones que permiten la **regeneración de órdenes** o acceso a opciones **Configuración del módulo**.

En la pestaña **Pedidos**, encontramos, como es habitual, los comandos que permiten interactuar con el módulo.

### Módulo no reconocido

Si su módulo está incluido pero Jeedom no lo reconoce automáticamente *(no se crearon pedidos)*, así que tienes que pedir que se añada al equipo de Jeedom.

>**INFORMACIÓN**
>
>El equipo de Jeedom se reserva el derecho a rechazar cualquier solicitud de integración. Siempre es preferible optar por equipos cuya compatibilidad ya esté confirmada.

Para solicitar la incorporación de nuevos equipos, es necesario aportar los siguientes elementos :

- **el modelo exacto** del módulo con un enlace al sitio de compra y una imagen representativa sobre un fondo transparente (`png`),
- En la página del equipo, haga clic en el botón azul **Configuración del módulo** luego tabula **Información en bruto**. Copia el contenido para transmitirlo al equipo de Jeedom,
- Ponga el demonio en `debug` desde la página de configuración del complemento y reinícielo. Realizar acciones en el equipo *(si es un sensor de temperatura, variar la temperatura, si es una válvula, variar el setpoint, etc...)* y envía el registro `zigbee` *(no `zigbeed`)*.

>**Importante**
>
>Antes de cualquier solicitud para agregar un módulo, verifique que su complemento esté actualizado y que el módulo no esté ya en la lista. A veces sucede que el reconocimiento automático no funciona (porque el módulo no da su identificación a tiempo) y que es necesario indicar manualmente a Jeedom el tipo de módulo

>**INFORMACIÓN**
>
>Cualquier solicitud incompleta será rechazada sin una respuesta del equipo de Jeedom.

### Operación de controles
>**Reservado para expertos !**

Explicamos a continuación cómo funcionan los comandos en el complemento para los usuarios más avanzados :

- ''''attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE'''' te permite escribir el valor de un atributo *(tenga cuidado, no se pueden cambiar todos los atributos)* con :
  - ''''ENDPOINT'''' : número de punto final,
  - ''''CLUSTER_TYPE'''' : tipo de clúster *(EN \| OUT)*,
  - ''''CLUSTER'''' : número de grupo,
  - ''''ATTRIBUT'''' : número de atributo,
  - ''''VALUE'''' : valor para escribir.

**Ejemplo** : ''''attributes::1::in::513::18::#slider#*100'''' escribirá el atributo en el punto final `1`, clúster entrante (''''in'''') `513`, atributo` 18` con el valor del ''''slider*100''''.

- ''''ENDPOINT::CLUSTER:COMMAND::PARAMS'''' le permite ejecutar un comando de servidor con :
  - ''''ENDPOINT'''' : número de punto final,
  - ''''CLUSTER'''' : nombre del clúster,
  - ''''COMMAND'''' : Nombre de la orden,
  - ''''PARAMS'''' parámetro en el orden correcto separado por `::''.

**Ejemplo** : ''''1::on_off::on'''', ejecutar el comando ''''on'''' en el punto final "1" del clúster ''''on_off'''' sin parámetros.        
**Ejemplo** : ''''1::level::move_to_level::#slider#::0'''', ejecutar el comando ''''move_to_level'''' en el punto final "1" del clúster ''''level'''' Con parámetros ''''#slider#'''' y ''''0''''.

# Outils

Se puede acceder a diferentes herramientas que ofrecen una mejor interactividad con su red Zigbee desde la página de configuración del complemento :

![Herramientas contrôleur Zigbee](../images/zigbee_controllerTools.png)

>**Importante**
>
> En llaves de tipo EZSP *(Elelabs)*, solo es posible realizar una única restauración de copia de seguridad en todos y para todos durante toda la vida útil de la clave.

La copia de seguridad no contiene la lista de módulos sino solo la información básica de la red Zigbee. Por lo tanto, no es necesario realizarlo con regularidad, una sola copia de seguridad suele ser suficiente porque esta información no cambia durante la vida útil del controlador.

>**INFORMACIÓN**
>
>Los demonios de Zigbee se detienen durante el proceso de copia de seguridad o restauración.

## Actualización del firmware del controlador

Es posible actualizar el firmware del controlador Zigbee desde Jeedom *(actualmente solo se aplica a los controladores Elelabs)*. Siendo el firmware imprescindible en Zigbee porque gestiona el enrutamiento entre otras cosas, es importante actualizarlo.

>**INFORMACIÓN**
>
>Los demonios de Zigbee se detienen durante una actualización de firmware.

## Actualización de módulos OTA

Actualizaciones de OTA *(Over-The-Air)* son las actualizaciones de firmware de los módulos. El proceso puede llevar un tiempo determinado (varias horas dependiendo de la cantidad de módulos) pero permite una mayor confiabilidad de la red Zigbee en general. Para poder actualizar un módulo, el fabricante debe comunicar su firmware :

- Con respecto a **Ikea** y **El avance**, los firmwares están disponibles directamente en línea donde el complemento los recuperará.
- Para otros (ver [aquí](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), el fabricante proporciona informalmente una actualización en algunos casos.
- Para todos los demás, no es posible actualizar el módulo desde el complemento.

Para beneficiarse de las actualizaciones de OTA, debe marcar la casilla correspondiente en la página de configuración del complemento y luego guardar. Luego debe hacer clic en el botón **Actualizar archivos de módulo** para recuperar los últimos archivos actualizados y finalmente reiniciar el demonio Zigbee.

Las actualizaciones se realizan automáticamente en caso de disponibilidad o si el módulo lo solicita. Es posible forzar la actualización de un módulo desde la pestaña **Comportamiento** desde la ventana de configuración del módulo en la página del dispositivo.

Desafortunadamente, no existe un indicador simple para seguir el progreso de la actualización, la única solución es consultar los registros de `zigbeed_X` en la depuración y buscar el término` OTA`. Podrá ver este tipo de registro cuando se actualice un módulo :

''''''''
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0
''''''''

# Touchlink / Lightlink

**Touchlink** *(o Lightlink)* es una función particular de Zigbee que permite al controlador enviar órdenes de gestión a un módulo con la condición de estar muy cerca de él *(menos de 50 centímetros)*. Esto es útil, por ejemplo, para restablecer bombillas que no tienen botón físico.

Esta función está disponible en bombillas tipo Zigbee **Philips Hue, Ikea, Osram, Icasa y muchos más...** El principio es muy simple, para poder asociar este tipo de módulo con una red Zigbee, primero debes realizar un reset. Al reiniciar, el módulo intentará asociarse automáticamente con la primera red Zigbee disponible.

## Restablecer en Touchlink

Como suele ocurrir en Zigbee, pueden surgir dificultades durante el proceso de reinicio o asociación. Hay varios métodos disponibles para lograr esto :

- **Realice rápidamente 5 o 6 ciclos de encendido / apagado** *(encendido apagado)*. La bombilla debe parpadear al final del procedimiento para indicar el reconocimiento correcto.
- **Usa un control remoto zigbee**, y :
  - **para mandos a distancia Philips Hue**, presione simultáneamente los botones de ENCENDIDO y APAGADO durante 5 a 10 segundos cerca de la bombilla encendida *(a veces tienes que apagar / encender la bombilla justo antes en algunos modelos)*,
  - **para mandos a distancia de Ikea**, presione el botón de reinicio" *(al lado de la batería)* durante 5 a 10 segundos cerca de la bombilla encendida *(a veces tienes que apagar / encender la bombilla justo antes en algunos modelos)*.
- Acerca de **Bombillas Philips Hue**, también puede incluirlos en Hue Bridge y luego eliminarlos de él.

# Greenpower

La tecnología Greenpower es compatible con el complemento (parche zigpy que aún no lo admite de forma nativa...).

>**Importante**
>
>Por el momento, Greenpower solo funciona con llaves tipo EZSP (Elelabs, popp...). El soporte de Deconz llegará más tarde

Para agregar un módulo Greenpower 2 posibilidades :

- cambiar al modo de inclusión, presione un botón en el módulo. Tenga en cuenta que esto corresponde a una adición no segura (cualquiera que intercepte el marco del módulo puede enviarlo de vuelta a su Jeedom)
- lea el código QR del módulo y copie la cadena en la parte "Puesta en servicio" de Jeedom. Esto corresponde a una adición segura (la clave de cifrado y en el código QR)


>**Importante**
>
>Por defecto, los interruptores están en el canal 11. Es absolutamente necesario tener la llave y el interruptor en el mismo canal. Te dejo consultar la documentación para cambiar el canal de los interruptores (personalmente me parece que la manipulación no es fácil, el más mínimo error te obliga a empezar de nuevo, en general me lleva una buena hora)

# Manejo de grupo

Un grupo puede relacionarse con una especie de control remoto virtual que permite al controlador actuar sobre varios módulos para que estos realicen las mismas acciones simultáneamente.

El procedimiento es simple : crear un nuevo grupo y agregar o eliminar dispositivos miembros dentro de él.

# Binding

El enlace permite vincular módulos directamente entre sí sin que las órdenes pasen por el controlador. El enlace se hace a partir de un clúster *(entrada salida)* al mismo clúster de otro módulo. El enlace siempre debe realizarse desde el control (tipo de control remoto) al actuador.

Encontrará los elementos de gestión de enlaces, si es compatible con su módulo, en la pestaña **INFORMACIÓN** desde la ventana de configuración del módulo.

![Unión Zigbee](../images/zigbee_binding.png)

Algunos módulos no son compatibles con la encuadernación y otros *(como los módulos de Ikea)* solo admite la vinculación del comando a un grupo, por lo tanto, es necesario comenzar creando un nuevo grupo en el que se debe colocar el actuador.

>**Importante**
>
>Al configurar (o eliminar) un enlace, el módulo de origen (control remoto, por ejemplo) debe activarse absolutamente para que tenga en cuenta la información de enlace

# Redes Zigbee

La constitución de una red Zigbee de buena calidad es de gran ayuda gracias a las herramientas disponibles en el complemento. Vaya a la página general del complemento que enumera todos los equipos y haga clic en el botón **Redes Zigbee** para acceder a diversas informaciones y acciones en torno a la red Zigbee así como a la gráfica representativa de la misma.

## Gráfico de red

El gráfico de red proporciona una descripción general de la red Zigbee y la calidad de las comunicaciones con los diferentes módulos.

>**INFORMACIÓN**
>
>El gráfico de la red Zigbee es indicativo y se basa en los vecinos que declaran los módulos. Esto no representa necesariamente el enrutamiento real sino las rutas posibles.

## Optimizando la red

Para optimizar la confiabilidad de su red Zigbee, **es más que recomendable tener al menos 3 módulos de enrutador permanentemente alimentados y evitar desenchufarlos**. De hecho, durante nuestras pruebas notamos una clara mejora en la confiabilidad y resistencia de la red Zigbee al agregar módulos de enrutador. También es recomendable incluirlos primero, de lo contrario tendrá que esperar de 24 a 48 horas para que aparezcan los "dispositivos finales" *(módulos sin enrutador)* descúbrelos.

Otro punto importante, es posible, al retirar un módulo de enrutador, que parte del "dispositivo final" *(módulos sin enrutador)* ya sea perdido por un tiempo más largo o más corto *(en diez horas o más)* o incluso definitivamente y tienes que volver a incluirlos.
Desafortunadamente, esto se debe a la forma en que el fabricante ha planeado la integración de su equipo dentro de una red Zigbee y, por lo tanto, no puede ser corregido por el complemento que no gestiona la parte de enrutamiento.

Finalmente, e incluso si puede parecer obvio para algunos, te recordamos que las pasarelas Zigbee en Wifi o remotas son por definición menos confiables que las pasarelas USB. Por lo tanto, el equipo de Jeedom recomienda el uso de una puerta de enlace Zigbee en USB.  

# Cambio de clave Zigbee

Si para un demonio determinado (1, 2 o 3) cambia la clave Zigbee, debe eliminar los datos al nivel del demonio ("botón Eliminar datos"). Esto no elimina el equipo de Jeedom, solo vacía la base de datos Zigbee del demonio. Tenga en cuenta que esta operación es irreversible

# FAQ

>**LQI o RSSI es N / A**
>
>Los valores normalmente se vacían después de reiniciar el demonio zigbee. Tienes que esperar a que el módulo se comunique nuevamente para que se ingresen los valores.

>**Tengo problemas de inclusión o errores en los registros de tipos ''''TXStatus.MAC_CHANNEL_ACCESS_FAILURE''''**
>
>Debe intentar quitar o cambiar la extensión USB si está usando una o instalar una si no está usando una.

>**Tengo errores ''''can not send to device'''' o ''''send error'''' o ''''Message send failure''''**
>
>Por lo general, esto se debe a un problema de enrutamiento. el enrutamiento es más o menos fijo en Zigbee pero no simétrico, un módulo puede usar una ruta diferente para responder a la que se usa para hablar con él. A menudo, el corte eléctrico *(quitar las pilas, por ejemplo)* y enciende la energía *(o reemplazo de baterías)* es suficiente para solucionar el problema. También se puede corregir :
>- poner o reemplazar la extensión USB,
>- usando otro puerto USB (especialmente los puertos USB en Raspberry Pi que parecen tener dificultades),
>- poner un hub usb alimentado,
>- moviendo la llave para evitar interferencias *(el Zigbee es muy sensible a las interferencias, en particular porque usa la misma frecuencia que el wifi)*.

>**Tengo errores extraños en los módulos de batería o problemas de inclusión**
>
>Notamos que buena parte de los problemas de los módulos en batería se deben a las baterías o posiblemente problemas de resetear los módulos a cero antes de su inclusión. Aunque parezcan nuevas, es recomendable probarlas con baterías nuevas para descartar esta hipótesis.

>**Me preocupa actualizar los valores del equipo**
>
> 2 posibilidades :
> - es un módulo ZLL *(ver la configuración del equipo Jeedom que indica si es ZHA o ZLL)*. En este caso, es absolutamente necesario un comando "Actualizar" para que usted o Jeedom fuercen la actualización de los valores. Si este comando no existe en el equipo, debe comunicarse con el soporte de Jeedom para que se agregue en la próxima versión estable. Una vez fuera, haga clic en el botón **Recrear comandos** sin borrar.
> -	el módulo está en ZHA, por lo que es una preocupación de inclusión. En la pestaña **Acción** de la configuración del módulo, hay un botón **Restablecer módulo** permitiendo forzar acciones posteriores a la inclusión. Se debe tener cuidado para mantener el módulo activo si está en batería.

>**Mi módulo agota sus baterías muy rápidamente**
>
>Comprueba que tienes un firmware actualizado en tu zigbee key. En el 90% de los casos, el consumo excesivo de batería proviene del firmware de la clave que tiene un problema.

>**No puedo incluir nuevos módulos**
>
>Varias posibilidades para esto :
>- Ya tienes muchos mods y has excedido el límite del número de mods en vivo (31 en general). Debe poner otra clave Zigbee (el complemento administra hasta 3) o intentar agregar nodos de enrutador (tenga cuidado de que no haya un estándar claro en los nodos de enrutador, por lo que hay incompatibilidades entre los fabricantes...)
>- Estás bajo Conbee : intente desconectar la clave durante 2 minutos, vuelva a colocarla y reinicie el demonio, es una enfermedad conocida de la clave Conbee (incluso bajo deconz) o necesita un reinicio en frío para que la inclusión funcione
>- Tiene un SSD conectado a USB3, intente conectarlo a un puerto USB2

>**Veo errores "No hay ID de clúster" en los registros XXXXX"**
>
>Esta es una inclusión incompleta, hay que quitar el módulo de las redes zigbee (usando el botón de redes zigbee => Nodos), resetear el módulo y luego volver a incluirlo, teniendo cuidado de mantenerlo despierto durante todos los procesos de la 'inclusión

>**Mi comando de sensor de movimiento / apertura / interruptor siempre permanece en 1**
>
>Es común que en el modo zigbee el módulo envíe el valor uno durante una acción (movimiento, apertura, presionar el botón) pero no devuelve 0 cuando finaliza (fin de movimiento por ejemplo). Puede configurar un retorno de estado a 0 después de 1 minuto (por ejemplo) en la configuración de la pestaña de comando del equipo y luego en la línea de comando en cuestión.

>**No tengo tantos comandos como botones en mi control remoto**
>
>En mi control remoto tengo por ejemplo 2 botones pero en la lista de comandos de Jeedom solo tengo 1 comando !!! Es normal que el comando en jeedom tome un valor diferente dependiendo del botón físico presionado. La forma más fácil de verlo es ir a "Configuración avanzada" (arriba a la derecha) luego a "Registros" (arriba a la derecha también) y presionar los botones en el control remoto para ver los diferentes valores de los comandos.

>**Tengo un error estándar "base.timeout" al iniciar el daemon en una tecla de tipo EZSP**
>
>Es posible que la clave esté bloqueada en el modo de cargador de arranque, para salir de ella, puede ir a la configuración del complemento, luego hacer clic en "Actualizar el firmware", seleccionar su tipo de clave (en Smart/Atlas es Elelabs/Popp ), en puerto Zigbee selecciona tu puerto y en firmware selecciona "Corrección bootloader"
> Importante : esta manipulación solo debe realizarse con teclas de tipo Elelabs, Jeedom Atlas o Jeedom Smart. En cualquier otra llave debes contactar con el fabricante para que te den el procedimiento.

>**No puedo instalar dependencias**
>
>Esto puede deberse a un problema con la versión de pip3, para corregirlo, debe ir a la configuración de Jeedom, pestaña OS / DB, luego iniciar la consola del sistema operativo y hacer : `sudo pip3 install --upgrade pip` luego reinicie la instalación de dependencias. Si eso no funciona, puede intentar hacer `sudo apt remove -y python3-openssl; sudo pip3 install --upgrade pip` y reiniciar la instalación de dependencias.
