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

Para comenzar a configurar el complemento, es necesario seleccionar el modo de conexión al broker entre las 3 opciones posibles :

- **Corredor local** : El corredor Mosquitto se instala directamente en la máquina que aloja Jeedom *(modo por defecto)*.

- **Agente local de Docker** : El bróker Mosquitto se instala y configura automáticamente en un contenedor Docker usando el plugin oficial **Gestión de Docker**.

  >**INFORMACIÓN**
  >
  >En este modo, la instalación puede tardar varios minutos.

- **Corredor remoto** : En el caso del uso de un corredor ya existente, es suficiente completar su dirección *(ejemplo : ''mqtt://192.168.1.10:1883`)*.

Una vez instalado el bróker Mosquitto *(si es necesario)*, puedes continuar con la configuración :

- **Autenticación**: Puede especificar usuarios / contraseña para la conexión :

  - En modo local puede ingresar un `nombre de usuario:password` por línea, cada par de identificadores tendrá acceso válido al corredor. Si no hay un identificador, Jeedom crea uno automáticamente.

  - En modo standalone es suficiente poner en la primera línea el identificador de pareja `:contraseña` para Jeedom (ejemplo : si el nombre de usuario es `jeedom` y la contraseña `mqtt`, debes ingresar `jeedom`:mqtt'').

  >**IMPORTANTE**
  >
  > La autenticación es obligatoria en modo local. Después de la adición, se debe reiniciar Jeedom para que esto surta efecto.

- **Tema raíz de Jeedom** : Asunto raíz para enviar un comando a Jeedom o al que devuelve eventos. Atención, solo es posible poner 1 o 2 niveles como máximo.

- **Transmitir todos los eventos** : Marque la casilla para enviar todos los eventos de comando de Jeedom en MQTT.

- **Plantilla de publicación** : Formateo de la publicación de eventos de Jeedom * (etiquetas posibles : ''#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#'')*.

- **Complementos de suscriptor** : Lista de complementos suscritos al complemento MQTT Manager en el formulario `complemento (tema)`.

## Configuración del equipo

Es posible crear equipos MQTT directamente en el complemento.

Debe indicar el tema raíz del equipo *(`prueba` por ejemplo)*, tenga cuidado, el tema raíz no puede tener más de 2 niveles (exe `nivel1/nivel2`), dependiendo del tipo de comandos :

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

El complemento puede descubrir automáticamente varios tipos de módulos. Para hacer esto, solo necesita autorizar el descubrimiento automático en la página principal del complemento y reiniciar el demonio.

>**IMPORTANTE**
>
>Para los módulos tipo tasmota es absolutamente necesario que la configuración completa del tema sea `%topic%/%prefix%/`


# Transmitir información entre dos jeedoms por MQTT

Es posible gracias al complemento transmitir comandos entre dos Jeedom (este sistema está dedicado a reemplazar jeelink), aquí se explica cómo configurarlo : 

- **En la fuente jeedom que necesitas** :
  - En la configuración del complemento mqtt manager, configure el campo "Tema raíz de Jeedom", por defecto es jeedom, se recomienda poner un valor único por Jeedom (p. ej : jeedom_salon)
  - Luego puedes marcar la casilla "Transmitir todos los eventos" (aún en la configuración del complemento mqtt manager), esto no es lo más recomendado porque enviará todo el equipo al destino. Lo mejor es ir al equipo que deseas transmitir, en la configuración avanzada del equipo (botón arriba a la derecha en la página de configuración del equipo) luego en "Información adicional" para marcar "Transmitir el equipo MQTT"
- **En el objetivo jeedom es necesario** : 
  - Sin configurar el complemento del administrador mqtt, configure el campo “Tema de Jeedom vinculado” estableciendo el valor de “Tema raíz de Jeedom” del jeedom fuente. Puedes poner varias fuentes de Jeedom separándolas con ,. Tenga cuidado, debe tener mucho cuidado aquí, definitivamente no debería tener lo mismo para el "tema raíz de Jeedom" en jeedoms. Este campo es el identificador único del jeedom por lo que es absolutamente necesario tener valores diferentes.
  - En complemento -> programación -> Mqtt manager activar el descubrimiento automático (inactivo por defecto)

Luego solo tienes que regresar al jeedom aún en la configuración del complemento y hacer "Enviar descubrimiento"

>**IMPORTANTE**
>
>Esta configuración supone que los jeedoms están conectados al mismo mosquito brocker. Si no puedes hacer esto, entonces deberás configurar uno de los dos mosquittos para que envíe los valores de los temas deseados a otro mosquitto (ver siguiente capítulo)

>**IMPORTANTE**
>
>Si cambia el valor del campo "Plantilla de publicación" (vacío de forma predeterminada), la detección automática no creará los pedidos correctos; en este caso, depende de usted adaptar la configuración


# Vinculados dos mosquitos diferentes 

Es posible vincular temas entre varios mosquitto, aquí está la configuración para agregar en mosquitto. La configuración sólo debe realizarse en uno de los brocker mosquitto :

''''''''
connection #NOM_CONNEXION#
address #REMOTE_ADDRESS#:#REMOTE_PORT#
topic # both 0 #LOCAL_TOPIC#/ #REMOTE_TOPIC#/
cleansession true
notifications false
remote_clientid #REMOTE_CLIENT_ID#
remote_username #REMOTE_USERNAME#
remote_password #REMOTE_PASSWORD#
local_username #LOCAL_USERNAME#
local_password #LOCAL_PASSWORD#
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
''''''''

Ejemplo: desea enviar equipo de jeedom_2 a jeedom_1 teniendo : 
- aflicción_1 : 
  - IP : 192.168.1.45
  - tema raíz : jeedom_1
  - tema relacionado : jeedom_2
  - Autenticación : jeedom:password_1
- jeedom_2
  - tema raíz : jeedom_1
  - Autenticación : jeedom:password_2

Aquí está la configuración que se debe agregar en jeedom_2 (parámetro mosquito) : 

''''''''
connection jeedom_1
address 192.168.1.45:1883
topic # both 0 jeedom_2/ jeedom_2/
cleansession true
notifications false
remote_clientid jeedom_2
remote_username jeedom
remote_password password_1
local_username jeedom
local_password password_2
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
''''''''

>**NOTA**
>
> - ''#NOM_CONNEXION#'' : puede ser lo que quieras y no importa. Puedes, por ejemplo, hacer name_jeedom_source-name_jeedom_target
> - ''#REMOTE_CLIENT_ID#'' : tampoco importa, solo tienes que poner una cadena unica
> - ''#LOCAL_TOPIC#'' : nombre del tema local a menudo será "tema raíz de Jeedom" del jeedom local
> - ''#REMOTE_TOPIC#'' : El nombre del tema local a menudo será "tema raíz de Jeedom" del jeedom remoto

>**IMPORTANTE**
>
> Por desgracia, los identificadores ("nombre de usuario" y "contraseña") están disponibles en la página de configuración del complemento en "Autenticación" en el formato "nombre de usuario":''password''

# FAQ

>**Después de una actualización de los paquetes del sistema (apt) o de una actualización desatendida, ya nada funciona**
>
>La actualización del paquete mosquitto restablece el archivo de servicio a los valores predeterminados y, por lo tanto, mosquitto ya no apunta al archivo de configuración correcto. Para corregir esto, es muy simple, simplemente reinicie la instalación de mosquitto desde la página de configuración del complemento.
