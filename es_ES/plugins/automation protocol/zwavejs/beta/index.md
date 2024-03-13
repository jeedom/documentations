# Complemento Z-Wave JS

El complemento Z-wave JS permite **control total del protocolo de automatización del hogar Z-Wave en Jeedom** a partir del trabajo realizado en torno a la famosísima biblioteca **Interfaz de usuario de Z-Wave JS**.

El complemento Z-wave JS hace que las transmisiones sean más confiables y seguras al usar el **Protocolo MQTT**, ofreciendo, al mismo tiempo, posibilidades avanzadas de gestión de su red Z-Wave a los usuarios más expertos.

>**IMPORTANTE**
>
>Este complemento es compatible con Debian 11 "Bullseye" y, por lo tanto, es el complemento oficial preferido para administrar su red Z-Wave en Jeedom.

# Configuration

Después de instalar y activar el complemento, la instalación de dependencias debería comenzar a menos que la administración automática haya sido deshabilitada de antemano. En este caso, tendrás que hacer clic en el botón **Reanimar** para iniciar esta fase de instalación. El complemento oficial **Administrador de MQTT** siendo parte de las dependencias necesarias, se instalará y activará automáticamente durante la operación si aún no es el caso.

El resto de dependencias consiste en descargar, compilar y configurar la librería **Interfaz de usuario de Z-Wave JS**.

>**INFORMACIÓN**
>
>La primera instalación de dependencias que incluye una fase de compilación, es probable que dure varias decenas de minutos dependiendo de la configuración de su hardware. Las actualizaciones de dependencia son mucho más rápidas de instalar después.

## Configuración del complemento

Respecto a la configuración del plugin, el punto esencial es la correcta selección del **Puerto del controlador Z-Wave** correspondiente a la interfaz física en la que está conectado el controlador.

Otros ajustes posibles son :

- **Aplicar la configuración recomendada** : aplica directamente el conjunto de configuración recomendado por el equipo de Jeedom al incluir un nuevo módulo *(conseillé)*.

- **Eliminación de dispositivos excluidos** : elimina automáticamente los dispositivos excluidos de la red Z-Wave si está marcado. De lo contrario, el equipo se mantiene en Jeedom incluso si se ha excluido de la red. El equipo deberá entonces ser borrado manualmente o reutilizado asignándole un nuevo identificador Z-Wave.

- **Prefijo MQTT** : permite especificar el prefijo a usar en MQTT *(por defecto `zwave`)*.

### Llaves de seguridad

Las llaves de seguridad deben guardarse en un lugar seguro. Si pierde estas claves, los dispositivos incluidos en el modo seguro deberán emparejarse nuevamente. Las claves se pueden especificar, si los campos están vacíos o no son válidos, el complemento los generará y podrá verlos más tarde.

>**IMPORTANTE**
>
>Si su controlador se usó con el complemento Openzwave y había incluido módulos en modo seguro, la clave S0 es : `0102030405060708090A0B0C0D0E0F10`.

## Administrador de MQTT

Como se explica en el preámbulo, el complemento Z-Wave JS requiere compatibilidad con el protocolo MQTT para comunicarse, el complemento oficial **Administrador de MQTT** servirá pues de soporte a estas comunicaciones.

Varios escenarios son posibles :

- **Todavía no está utilizando un corredor MQTT** : En este caso no tienes nada que hacer. Complementos **Z-Wave JS** y **Administrador de MQTT** intercambiará la información necesaria y las configuraciones automáticamente *(se instalará localmente un agente `Mosquitto` en la máquina)*.

- **Ya está utilizando el complemento MQTT Manager** : No es necesaria ninguna intervención, el complemento Z-Wave JS recuperará automáticamente la información de conexión al corredor MQTT.

- **Ya está utilizando un corredor MQTT a través de un complemento que no es MQTT Manager** : En esta situación, debe seleccionar el modo **corredor remoto** y proporcionar información de inicio de sesión *(dirección y autenticación)* en la configuración del complemento MQTT Manager.

- **Quiere usar un corredor MQTT bajo Docker** : Todo lo que tienes que hacer es seleccionar el modo **ventana acoplable de intermediario local** en la configuración del complemento MQTT Manager antes de instalar `Mosquitto`.

En cualquier caso, el daemon del complemento MQTT Manager debe iniciarse antes de poder continuar. De lo contrario, un mensaje le advertirá, impidiendo el inicio del demonio Z-Wave JS.

## Abrir el complemento Zwave

También es importante abordar el caso de la presencia del complemento OpenZwave en paralelo con el complemento Z-Wave JS, el momento de cambiar de uno a otro por ejemplo *(Ver párrafo [**Migración desde OpenZwave**](#Migration%20depuis%20OpenZwave))*.

En primer lugar, debe saber que no existe absolutamente ningún riesgo al usar los complementos Z-Wave JS y OpenZwave en paralelo. Incluso en caso de dificultad con el complemento Z-Wave JS, bastará con detener su daemon y reiniciar el del complemento OpenZwave para encontrar una red Z-Wave exactamente idéntica y funcional.

Por lo tanto, es necesario detener la gestión automática y luego detener el demonio del complemento OpenZwave para poder iniciar el demonio del complemento Z-Wave JS. Nuevamente, si no, un mensaje le advertirá, impidiendo el inicio del demonio Z-Wave JS.

>**IMPORTANTE**
>
>No elimine ningún equipo del complemento OpenZwave prematuramente, incluso si está deshabilitado durante la prueba!

## 1er inicio del daemon

A menos que se indique lo contrario, ahora se puede iniciar el demonio Z-Wave JS. De lo contrario, debería aparecer un mensaje en la página de configuración del complemento para identificar el motivo del bloqueo.

Si usa el complemento Z-Wave JS con un controlador en blanco, la red Z-Wave se inicia inmediatamente y está disponible, lista para las inclusiones de módulos.

En el caso de uso con un controlador ya incluido en una red Z-Wave, se debe dejar funcionando el plugin, el cual irá cargando automáticamente el equipo en Jeedom a medida que se entrevisten los módulos. Por lo tanto, es probable que el primer descubrimiento total de una red Z-Wave lleve mucho tiempo, según el tipo de módulos utilizados y su frecuencia de comunicación.

Los módulos aparecen en dos etapas :
- Primero con su `nodo id` sin imagen y sin identificación.
- Luego son identificados en una segunda vez.

Una vez que todos los módulos de la red eléctrica están iniciados y, por lo tanto, identificados, es importante despertar los módulos de las baterías o esperar a que se despierten. Solo a partir de este momento podemos considerar que la red está completamente iniciada.

>**INFORMACIÓN**
>
>A diferencia del complemento OpenZwave, después de esta primera fase de entrevista, los reinicios de la red son instantáneos a partir de entonces.

Si al final de esta fase *(que puede ser largo recordemos)*, encuentra que un módulo que era bien compatible con el complemento Openzwave no sería compatible con el complemento Z-Wave JS, lo invitamos a consultar el párrafo [**Módulo no o mal reconocido**](#Module%20non%20ou%20mal%20reconnu).

## Configuración del módulo

A diferencia del complemento Openzwave, no hay una sección dedicada para configurar módulos. De hecho, la configuración de un módulo se realiza a través de la clase de comando Configuración. Por lo tanto, esto es visible entre los otros comandos de clase del módulo en **Valores**.

### Nodo

Este botón presente en la página de un dispositivo le permite ver la información del módulo a través de varias pestañas :

- **Resumen** : Muestra toda la información de identificación del módulo, así como la información de estado.

- **Comparte** : Permite realizar acciones técnicas sobre un nodo. Cada acción se describe sucintamente.
	>**INFORMACIÓN**
	>
	>Normalmente, nunca debería tener que tocar estas funciones, el complemento maneja esto por sí solo.

- **Estadísticas** : como su nombre lo indica, permite ver las estadísticas de comunicación del módulo.

- **Árbol** : reúne toda la información anterior en forma de un json técnico.

### Valeurs

Este botón en la página del equipo le permite obtener la lista de todos los comandos de clase Z-Wave administrados por el módulo.

Cada uno se puede desplegar haciendo clic en él para ver todos los controles *(útil o no)* relacionado con este comando de clase.

Muchas posibilidades ofrece esta ventana :

- Ver valores de información,
- Cambiar el valor de una acción,
- Cambiar la configuración del módulo,
- Crear automáticamente un comando de información en Jeedom *(si lo necesita o si falta en la configuración de Jeedom)*,
- Crear automáticamente un comando de acción en Jeedom *(si lo necesita o si falta en la configuración de Jeedom)*,
- Configurar sondeo *(comunicación forzada)*. Para usarse solo en el caso en que el comportamiento predeterminado del módulo no permita hacer lo contrario, es decir, casi nunca.

### Groupe

Este botón en la página de un dispositivo se utiliza para administrar las asociaciones del módulo y para :

- Ver asociaciones actualmente activas,
- Borra los,
- Añadir más.

## Inclusiones/Exclusiones

El botón **Inclusiones** presente en la página que agrupa todos los equipos Z-Wave JS le permite cambiar el controlador al modo **Inclusión** *(predeterminado, S0, S2)* o de moda **Exclusión**.

>**INFORMACIÓN**
>
>Por el momento, las inclusiones de S2 no son posibles directamente desde el complemento. Esta función se implementará en una actualización futura, el motor del complemento ya es compatible con S2.

## Synchroniser

Recuerda, en Z-Wave, todos los módulos que componen la red están directamente asociados al controlador. Algunos controladores con batería *(como el Aeon-labs Z-Stick GEN5)* incluso le permite incluir módulos sin estar enchufado en una caja.

El botón **Sincronizar** luego permitirá crear automáticamente en Jeedom el equipo identificado por el controlador. En la misma idea, los equipos correspondientes a periféricos excluidos del controlador se eliminarán automáticamente si la opción **Eliminación de dispositivos excluidos** se activa en la configuración general del plugin.

## Red Z-Wave

### Resumen

### Actions

### Statistiques

### Gráfico de red

### Tabla de ruteo

## Santé

## Statistiques

# Compatibilité

# Solución de problemas y diagnóstico

## Migración desde OpenZwave

Antes de considerar cambiar permanentemente del complemento OpenZwave al complemento Z-Wave JS, es esencial asegurarse de que todos los módulos de red sean totalmente compatibles. Este paso puede tomar fácilmente varios días para validar todas las posibilidades y escenarios.

Luego, una vez que esté seguro de que el complemento OpenZwave ya no es esencial, puede usar el [**reemplazo de equipos y controles**](https://doc.jeedom.com/es_ES/core/4.3/replace){:target="\_blank"} del núcleo para migrar rápida y fácilmente su equipo existente al nuevo complemento.

## Módulo no o mal reconocido

Si encuentra que un módulo no es o es mal reconocido por el complemento Z-Wave JS **mientras que fue bien soportado por el complemento OpenZwave**, primero debe asegurarse de que los datos presentes en la ventana **Valores** *(accesible desde la página del equipo)* actualizar bien cuando el módulo se acciona físicamente.

Luego, una vez que esté seguro de que el módulo en sí es bien reconocido y que sus valores están actualizados, si ciertos comandos siguen sin funcionar, será necesario'[abrir una solicitud de soporte de Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/#Les%20demandes%20de%20support%20(ou%20tickets)){:target="\_blank"} proporcionando imperativamente los siguientes elementos :
- Fabricante y referencia exacta del módulo en cuestión,
- Descripción de los comandos no funcionales,
- Captura de pantalla de **Información del nodo** en la ventana del mismo nombre,
- Capturas de pantalla de **cada bloque** desde la ventana de **Valores de nodo**

Para ir más allá, puede activar físicamente el módulo y tomar capturas de pantalla de los cambios de valores consecutivos, aún en la ventana Valores del nodo.

>**IMPORTANTE**
>
>Insistimos en el hecho de que el equipo inicialmente solo procesará solicitudes de configuraciones de módulos que incluyan todos los elementos solicitados anteriormente y que ya funcionen con el complemento Openzwave. Es posible que no pueda agregar sus capturas de pantalla al crear el ticket, no se preocupe, podrá enviarlas más tarde en respuesta a su solicitud.

>**INFORMACIÓN**
>
>Al operar físicamente el módulo, podrá identificar la línea cuyos valores cambian en consecuencia en la ventana Valores de nodo y cuyo comando no se crearía ni funcionaría. Al final de la línea hay un botón con un icono en forma de bolígrafo que le permite crear automáticamente el comando correspondiente, lo que le brinda la posibilidad de poder usar su módulo a pesar de una configuración ausente o errónea.

<!-- ## Remplacer un module défaillant -->

# FAQ

>**¿Es posible utilizar la interfaz de usuario de Z-Wave JS en modo remoto? ?**
>
>La hoja de ruta del equipo de Jeedom sobre el complemento Z-wave JS prevé la incorporación de esta posibilidad en los próximos meses sin ningún sentido de urgencia porque no es una funcionalidad esencial para el correcto funcionamiento del complemento.

>**¿Es posible habilitar el servidor websocket Z-Wave JS UI? ?**
>
>Para el correcto funcionamiento del complemento y de Jeedom en general, no es posible activar el servidor websocket Z-Wave JS UI, sin embargo, el próximo modo remoto permitirá los mismos casos de uso.
