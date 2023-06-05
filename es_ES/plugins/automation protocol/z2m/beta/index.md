# Plugin jeezigbee

>**IMPORTANTE**
>
>Documentación en proceso, no dudes en volver a ver de vez en cuando para saber más sobre este plugin


**El complemento Jeezigbee para Jeedom** se basa en el excelente trabajo realizado alrededor **la biblioteca de código abierto zigbee2mqtt** para ofrecer un **compatibilidad generalizada con diferentes hardware Zigbee**. Permite la comunicación con los siguientes controladores Zigbee :

-	**deCONZ (clave Conbee/Conbee 2/Raspbee/Raspbee 2)** : Probado y validado por el equipo de Jeedom. *(No es necesario instalar la aplicación deCONZ)*
-	**EZSP (Laboratorios de silicio)** : Probado, validado
-	**XBee** : No probado por el equipo de Jeedom.
-	**Zigate** : No probado por el equipo.
-	**ZNP (Texas Instruments)** : Probado, validado

>**IMPORTANTE**
>
> En primer lugar, debe actualizar el firmware de su clave (especialmente para EZSP, clave popp en particular) de lo contrario, el demonio no puede funcionar, debe consultar la documentación del fabricante.

Además, el complemento está equipado con muchas herramientas que permiten :

- allá **actualización de mods** en OTA,
- visualización de nodos y **gráfico de red**,
- la administración de **grupos**,
- el apoyo de **vinculante**,
- el cuidado de **Enlace táctil**

>**MUY IMPORTANTE**
>
> Debido al vals de firmware/hardware del lado del fabricante y posibles errores en su firmware (sin tener necesariamente la posibilidad de actualizarlo desde Jeedom porque la mayoría de los fabricantes no los comunican), es posible que un módulo marcado como compatible solo parcialmente (un botón que no funciona, o no hay diferencia entre el botón arriba y abajo, no hay aumento de CO2 o un sensor de módulo...). Lamentablemente, no podemos avisarle con antelación en la lista porque : 
>- no necesariamente tenemos el módulo en cuestión, muchos módulos se agregan por comentarios de los usuarios
>- de una semana a otra el módulo puede haber cambiado (nuevo hardware, nuevo firmware o incluso un nuevo módulo que no ha cambiado de nombre))
>Bajo ninguna circunstancia, Jeedom se hace responsable en caso de que falte una función (o incluso que un módulo no funcione) cuando se indica como compatible, estamos sujetos a los cambios impuestos por el fabricante como usted

# Configuration

## Configuración del complemento

**Plugin jeezigbee** usa dependencias que deben instalarse primero (dependiendo de su sistema, esto puede llevar varias horas)). 

El complemento utiliza el protocolo MQTT para chatear con Jeedom; por lo tanto, es necesario tener el complemento del administrador MQTT instalado y configurado correctamente (en la práctica, si este no es el caso, Jeedom debería hacer todo por su cuenta).

Una vez instaladas las dependencias, puede configurar un controlador Zigbee ingresando **tipo de controlador, puerto de controlador**, luego (re)iniciar el demonio.    

>**IMPORTANTE**
>
> Hay 2 modos para el plugin : local, todo está en su Jeedom, este es el modo recomendado. Para usuarios avanzados, es posible utilizar el modo remoto; en este caso, Jeedom no administra Zigbee2mqtt, debe instalarlo usted (generalmente en una ventana acoplable en Jeedom o en otra máquina)). Atención en modo remoto es necesario que Mqtt manager y Zigbee2mqtt estén conectados al mismo brocker mqtt (mosquitto)

## Compatibilité

Puedes encontrar [aquí](https://www.zigbee2mqtt.io/supported-devices/) la lista de módulos compatibles con el plugin

>**IMPORTANTE**
>
>Por el momento el plugin hace autoconfiguración, es decir que no contiene ninguna configuración específica para un módulo dado, recupera la información de zigbee2mqtt para generar automáticamente los comandos. Esto implica que cualquier módulo compatible con zigbee2mqtt debería funcionar inmediatamente con el complemento. Por otro lado, esto tiene como consecuencia generar muchos comandos que no siempre son todos útiles. Estamos en proceso de agregar un sistema de configuración específico para ciertos módulos y así mejorar los comandos y la presentación de estos

## Configuración del equipo

### Incluir un módulo Zigbee

La inclusión es la parte más compleja de Zigbee. Aunque simple, la operación a menudo tiene que repetirse varias veces para lograr. En el lado del complemento Jeedom es fácil, solo haga clic en el botón **Incluir modo** después de lo cual tienes 3 minutos para incluir el equipo.

El procedimiento de inclusión es específico para cada módulo. Consulte la documentación del fabricante para lograrlo.

>**TRUCO**
>
>No olvides reiniciar *(reset)* del módulo antes de cualquier inclusión. También hay que pensar, el momento de la inclusión, para mantener el módulo despierto (cuidado de no mantenerlo demasiado despierto y de lanzar un reset sin hacerlo a propósito))

Como de costumbre, puedes darle un nombre a tu equipo, darle una categoría o un objeto padre y activarlo o hacerlo visible.

También se puede acceder a otros parámetros más específicos :

- **Identificación** : identificador único de dispositivo. Incluso durante una reinclusión o si cambia el tipo de controlador Zigbee.
- **Controlador Z2m** : permite seleccionar el controlador Zigbee en comunicación con el equipo (por el momento el plugin no soporta múltiples controladores)

La parte **Información** permite ver el modelo del equipo. También está la visual del equipo y el acceso a la configuración del módulo

En la pestaña **Pedidos**, encontramos, como de costumbre, los comandos que permiten interactuar con el módulo.

### Configuración del módulo

Esta es una ventana importante que encontrará aquí : 

- Información : contiene toda la información útil sobre su módulo (modelo, fabricante, estado, fuente de alimentación, OTA, descripción, puntos finales....)
- Configuración : contiene los parámetros de configuración de su módulo, si los hay (a menudo no hay ninguno, por lo que está vacío)
- Vinculante : Encontrará aquí el enlace existente (enlace) (en general, siempre tiene una línea para vincular su módulo a su coordinador). También puede agregar un enlace (enlace) entre dos módulos, tenga cuidado de activar los módulos con la batería cuando haga binge. Importante, el enlace depende de los fabricantes (y no del complemento), algunos fabricantes no admiten el enlace directo y es absolutamente necesario tener un grupo, también hay incompatibilidades entre fabricantes (lamentablemente no podemos enumerarlas))
- Informes : si el módulo lo admite, puede configurar aquí la frecuencia de envío de información del módulo al coordinador (Jeedom por lo tanto)
- Información sin procesar : es solo para soporte, se le preguntará si tiene un problema con un módulo

### Módulo no reconocido

Si el complemento no reconoce el módulo (sin comando), debe buscar [aquí](https://www.zigbee2mqtt.io/supported-devices/), si es compatible, debe ponerse en contacto con el soporte de Jeedom (o escribir en la comunidad) para ver por qué. Si su módulo no está en la lista de módulos compatibles con zigbee2mqtt, debe esperar a que se agregue.

>**INFORMACIÓN**
>
>El equipo de Jeedom se reserva el derecho de rechazar cualquier solicitud de integración. Siempre es mejor optar por equipos cuya compatibilidad ya está confirmada.

## Actualización de mods OTA

Actualizaciones OTA *(Over-The-Air)* son las actualizaciones de firmware de los modulos. El proceso puede tomar algún tiempo (varias horas dependiendo de la cantidad de módulos) pero permite una mejor confiabilidad de la red Zigbee en general. Para poder actualizar un módulo, el fabricante debe comunicar su firmware :

- Re **Ikea** Y **Avance**, los firmwares están directamente disponibles en línea donde el complemento los recuperará.
- Para otros (ver [aquí](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), el fabricante proporciona extraoficialmente una actualización en algunos casos.
- Para todos los demás, no es posible actualizar el módulo desde el complemento.

Puede desde la configuración del módulo solicitar una verificación de firmware, así como iniciar la actualización OTA.

# Greenpower

La tecnología Greenpower normalmente es compatible con el complemento; está siendo calificado por Jeedom SAS

# Redes zigbee

Las herramientas disponibles en el complemento ayudan mucho a la constitución de una red Zigbee de buena calidad. Vaya a la página general del complemento que enumera todos los equipos y haga clic en el botón **Redes zigbee** para acceder a diversa información y acciones en torno a la red Zigbee así como a la gráfica representativa de la misma.

## Configuration

Aquí es donde encuentras todas las configuraciones avanzadas de Zigbee2mqtt, ojo que es una lista generada desde Zigbee2mqtt (de ahí que todo esté en inglés)

## Gráfico de red

El gráfico de red proporciona una visión general de la red Zigbee y la calidad de las comunicaciones con los diferentes módulos. Recuerde lanzar una actualización de vez en cuando (tarda unos diez minutos y puede ralentizar su red zigbee), una vez realizada la actualización, debe cerrar la ventana **Redes zigbee** y vuelve a abrirlo.

>**IMPORTANTE**
>
>El gráfico de red es solo de referencia y puede no ser exacto (especialmente en los módulos de batería que a menudo o a veces no devuelven su enrutamiento))

## Optimizar la red

Para optimizar la confiabilidad de su red Zigbee, **es más que recomendable tener al menos 3 módulos router alimentados permanentemente y evitar desconectarlos**. De hecho, durante nuestras pruebas notamos una marcada mejora en la confiabilidad y resistencia de la red Zigbee al agregar módulos de enrutador. También es recomendable incluirlos primero, de lo contrario tendrás que esperar de 24 a 48 horas para que el "dispositivo final" *(módulos no enrutadores)* descúbrelos.

Otro punto importante, es posible, durante la eliminación de un módulo de enrutador, que parte del "dispositivo final" *(módulos no enrutadores)* se pierde por un tiempo más o menos largo *(en diez horas o más)* o incluso de forma permanente y hay que volver a incluirlos.
Desafortunadamente, esto se debe a la forma en que el fabricante ha planificado la integración de su equipo dentro de una red Zigbee y, por lo tanto, no puede corregirse con el complemento que no administra la parte de enrutamiento.

Por último, y aunque a algunos les parezca una obviedad, os recordamos que las pasarelas Zigbee en Wifi o remotas son por definición menos fiables que las pasarelas USB. Por lo tanto, el equipo de Jeedom recomienda el uso de una puerta de enlace Zigbee en USB.  

# FAQ

>**Tengo muchos mensajes de información (azul) abajo a la derecha y no entiendo nada**
>
>Actualmente estamos clasificando los mensajes útiles o no que devuelve Zigbee2mqtt; pero por defecto preferimos mostrar todo.

>**Tengo errores extraños en los módulos de las baterías o problemas con la inclusión**
>
>Hemos notado que buena parte de los problemas de los módulos en batería se deben a las baterías o posiblemente problemas de reseteo de los módulos antes de su inclusión. Aunque estos parezcan nuevos, es recomendable probar con pilas nuevas para descartar esta hipótesis.

>**Mi módulo agota sus baterías muy rápido**
>
>Compruebe que tiene un firmware actualizado en su clave zigbee. En el 90% de los casos, el consumo excesivo de batería proviene del firmware que tiene un problema.

>**No puedo incluir nuevos módulos**
>
>Varias posibilidades para esto :
>- Ya tiene muchos módulos y ha excedido el límite de la cantidad de módulos en vivo (31 en general). Debe intentar agregar nodos de enrutador (tenga cuidado, no hay un estándar claro en los nodos de enrutador, por lo que hay incompatibilidades entre fabricantes...)
>- Estás en Conbee : intente desconectar la llave durante 2 minutos, volver a colocarla y reiniciar el daemon; es una enfermedad conocida por las claves de Conbee (incluso bajo deconz), se necesita un reinicio en frío para que la inclusión vuelva a funcionar
>- Tiene un SSD conectado a USB3, intente conectarlo a un puerto USB2

>**No tengo tantos comandos como botones en mi control remoto**
>
>En mi control remoto tengo por ejemplo 2 botones pero en la lista de comandos de Jeedom solo tengo un comando !!! Es normal; el comando en jeedom toma un valor diferente dependiendo del botón físico presionado. La forma más fácil de verlo es ir a "Configuración avanzada" (arriba a la derecha) luego a "Registros" (arriba a la derecha también) y presionar los botones del control remoto para ver los diferentes valores de los comandos.

>**No tengo la imagen de mi modulo**
>
>Nada grave, no quiere decir que no sea usable o reconocido, la imagen es solo ilustrativa. Si realmente lo desea, debe ponerse en contacto con el soporte para ver por qué no lo tiene (generalmente se debe a un carácter no estándar en el nombre del modelo del módulo))
