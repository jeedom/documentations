# Complemento del administrador de MQTT

## Description

El complemento **Administrador de MQTT** le permite conectar Jeedom a un corredor MQTT existente o instalar uno localmente o bajo Docker usando el complemento **Gestión de Docker**.

Este complemento es capaz de combinar varias funciones :

- Servir de base para otros complementos para todo lo relacionado con MQTT.

- Sirva en modo "independiente" creando comandos de acción/información para enviar/recibir mensajes en MQTT.

- Controla Jeedom desde otro equipo MQTT *(Nodado por ejemplo)*. El complemento puede impulsar comandos y retransmitir todos los eventos de Jeedom en MQTT.

# Configuration

Después de instalar y activar el complemento, la instalación de dependencias debería comenzar a menos que la administración automática haya sido deshabilitada de antemano. En este caso, tendrás que hacer clic en el botón **Reanimar** para iniciar esta fase de instalación.

## Configuración del complemento

Para iniciar la configuración del plugin, es necesario seleccionar el modo de conexión al broker entre las 3 opciones posibles :

- **Corredor local** : El corredor Mosquitto se instala directamente en la máquina que aloja Jeedom *(modo por defecto)*.

- **Agente local de Docker** : El bróker Mosquitto se instala y configura automáticamente en un contenedor Docker usando el plugin oficial **Gestión de Docker**.

  >**INFORMACIÓN**
  >
  >En este modo, la instalación puede tardar varios minutos.

- **Corredor remoto** : En el caso del uso de un corredor ya existente, es suficiente completar su dirección *(ejemplo : ''mqtt://192.168.1.10:1883`)*.

Una vez instalado el bróker Mosquitto *(si es necesario)*, puedes continuar con la configuración :

- **Autenticación**: Puede especificar usuarios / contraseña para la conexión :

  - en modo local puede ingresar un `nombre de usuario:password` por línea, cada par de identificadores tendrá acceso válido al corredor. Si no hay un identificador, Jeedom crea uno automáticamente.

  - en modo standalone es suficiente poner en la primera línea el identificador de pareja `:contraseña` para Jeedom (ejemplo : si el nombre de usuario es `jeedom` y la contraseña `mqtt`, debe completar `jeedom`:mqtt'').

  >**IMPORTANTE**
  >
  >La autenticación es obligatoria en modo local. También es necesario después de la adición reiniciar jeedom para que se tenga en cuenta.

- **Tema raíz de Jeedom** : Tema raíz para enviar un comando a Jeedom o sobre el que envía los eventos. Atención, solo es posible poner 1 o 2 niveles como máximo.

- **Transmitir todos los eventos** : Marque la casilla para enviar todos los eventos de comando de Jeedom en MQTT.

- **Plantilla de publicación** : Formateo de la publicación de eventos de Jeedom * (etiquetas posibles : ''#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#'')*.

- **Complementos de suscriptor** : Lista de complementos suscritos al complemento MQTT Manager en el formulario `complemento (tema)`.

## Configuración del equipo

Es posible crear equipos MQTT directamente en el complemento.

Debe indicar el tema raíz del equipo *(`prueba` por ejemplo)*, entonces de acuerdo al tipo de comandos :

- **Comandos de información** : solo indica el tema completo.
  >Por ejemplo, si pones `toto/1`, todos los mensajes sobre el tema `test/toto/1` se escribirán automáticamente en el comando en cuestión. El sistema es capaz de gestionar campos tipo json, en este caso hay que poner `toto/1/key1` o `toto/1/key1/key2` para bajar un nivel.

- **Comandos de acción** : solo indica el tema y el mensaje.
  >Por ejemplo, si coloca `toto/2` con el mensaje `plop`, cada clic en el comando enviará el mensaje `plop` al tema `test/toto/2`.

  >**INFORMACIÓN**
  >
  >En los comandos de tipo acción, puede usar las etiquetas `#slider#`, `#color#`, `#message#` o `#select#` que se reemplazará automáticamente por su valor al ejecutar el comando *(según su subtipo)*. Por otro lado, si el mensaje es del tipo `json`, debes agregarle el prefijo `json`::''.

>**IMPORTANTE**
>
>El tema `jeedom` está reservado (esto se puede cambiar en la configuración), así que no envíe nada más que comandos para conducir jeedom


# Jeedom a través de MQTT

Es posible pilotar Jeedom a través de MQTT. Aquí están los diferentes temas posibles asumiendo que el tema raíz es `jeedom` *(para adaptar si ha modificado la configuración por defecto)* :

- `jeedom / cmd / set /#cmd_id#'' : le permite ejecutar el comando con el id `#cmd_id#`. Puede pasar los parámetros en el mensaje como campos `json` dependiendo del subtipo del comando, por ejemplo:
  - **defecto** : sin parámetros.
  - **cursor** : `{control deslizante : 50}`.
  - **mensaje** : `{título : "hola "mensaje : "Hola, todo bien ?"}''.
  - **color** : `{color : "#96c927"}''.
  - **listado** : `{seleccionar : 1}`.
  - **Comandos de información** : puede enviar directamente un valor o también especificar una fecha de actualización *(facultatif)* `{valor : "cuco ", fecha y hora : "12/12/2021 10:30:00" }`.

- `jeedom / cmd / get /#cmd_id#'' : solicitar el valor del comando con id `#cmd_id#`. Jeedom devolverá `jeedom/cmd/value/#cmd_id#`con el valor de comando en el mensaje.

- `jeedom / cmd / event /#cmd_id#'' : evento bajo comando con id `#cmd_id#` con un mensaje `json` que contiene información diferente, incluido el valor del comando.

# Desinstalar el corredor de Mosquitto

2 opciones posibles para desinstalar el broker Mosquitto presente localmente en la máquina :

- **Corredor bajo Docker** : Primero, usa el comando **Borrar** Equipo `mqtt2_mosquitto` del complemento **Gestión de Docker** *(Complementos > Programación > Gestión de Docker)*. A continuación, puede eliminar todo este equipo.

- **Corredor local** : A continuación, debe utilizar el botón rojo **Desinstalar Mosquito** desde la página de configuración general del plugin.


# Autodescubrimiento)

El complemento puede realizar el descubrimiento automático de varios tipos de módulos. Para hacer esto, solo necesita autorizar el descubrimiento automático en la página principal del complemento y reiniciar el demonio.

>**IMPORTANTE**
>
>Para los módulos tipo tasmota es absolutamente necesario que la configuración completa del tema sea `%topic%/%prefix%/`