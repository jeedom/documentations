# Description

Este complemento te permite :

- usar la implementación nativa de Google para la gestión de objetos conectados

Puede funcionar de 2 maneras. :

- Independiente : crea las aplicaciones en modo de desarrollo en el lado de Google y luego conecta su Jeedom al servicio de Google
- Nube : a través de un servicio en la nube proporcionado por Jeedom

> **Important**
>
> El modo en la nube requiere una suscripción a los servicios de voz (3 meses gratis al comprar el complemento). Puedes gestionar tu suscripción [aquí](https://market.jeedom.com/index.php?v=d&p=profils#services)

> **Important**
>
> Independientemente del modo que utilice, DEBE ABSOLUTAMENTE tener su Jeedom accesible en HTTPS (el complemento no funciona en HTTP)

> **Important**
>
> El complemento no es compatible con equipos con funciones duales (2 salidas como cierto módulo zwave Fibaro). Absolutamente tienes que pasar por 2 virtuales para descomponerlo.

# Modo nube

> **IMPORTANT**
>
> Es importante realizar los siguientes pasos en el orden indicado !!!

> **IMPORTANT**
>
> Si tiene un mensaje de error que le indica que su contraseña de usuario o no es correcta, debe :
> - compruebe que Amazon Alexa esté activa en el mercado
> - Si este es el caso, asegúrese de sus credenciales (atención debe respetar mayúsculas / minúsculas) ?
> - si este es el caso, cambie su contraseña en el mercado y en la configuración del servicio de asistente de voz (pestaña de página de perfiles de mercado mis servicios) guarde

Después de instalar el complemento, solo necesita ir a la configuración del complemento, seleccionar el modo Cloud y luego hacer clic en "Enviar" (esto enviará la información de conexión a la API del complemento en el mercado)

Luego, en Jeedom in Communication / Google Smarthome debe hacer clic en Guardar para enviar su configuración inicial, necesita al menos un dispositivo en Aceptar (de lo contrario, al conectar Google Home <-> Jeedom tendrá un error)

Luego, en la aplicación de inicio de Google, debe ir a la primera pestaña y hacer clic en Agregar (el +) :

![gsh](../images/gsh29.png)

Luego configura un dispositivo :

![gsh](../images/gsh30.png)

En "Funciona con Google" :

![gsh](../images/gsh31.png)

Luego, en la lista con el botón de búsqueda (lupa en la parte superior derecha), busque "Jeedom Smarthome" y haga clic en él :

![gsh](../images/gsh32.png)

Rellene sus identificadores de mercado (bueno, esos mercados no son los de su Jeedom).

![gsh](../images/gsh6.png)

En el complemento -> comunicación -> Google Smarthome puede configurar sus diferentes equipos (consulte el capítulo Configuración del complemento)

>**NOTE**
>
>Para cambiar del modo independiente al modo nube, debe :
>- en el complemento ir a la nube y luego guardar
>- espera 24h
>- en la aplicación de inicio de Google debe disociar testsmarthome (su aplicación independiente)
>- en Comunicación / Google Smarthome, haga clic en Guardar para enviar su configuración inicial
>- Enlace Jeedom Smarthome en Google Home


> **IMPORTANT**
>
>Cualquier modificación a la configuración del equipo enviado a Google Home (adición de equipo, eliminación de equipo, cambio de un tipo de orden genérico) necesariamente requiere ir a Complemento -> Comunicación -> Googme Smarthome y luego guardar

# Modo independiente

> **IMPORTANT**
>
> Si ha utilizado el modo nube, no debe hacer esta parte !!! Vaya directamente al capítulo "Configuración del complemento"

> **IMPORTANT**
>
> El modo independiente es una "estafa" porque te hace crear una aplicación en Google en modo de desarrollo que permite la sincronización solo durante 3 días después de la activación del modo de prueba. Entonces, al agregar o modificar equipos, reactive el modo de prueba cada 3 días para poder sincronizar. Atención, estamos hablando de una modificación de la configuración si no agrega o modifica equipos, no hay nada que hacer, la aplicación funcionará sin límite de tiempo

> **IMPORTANT**
>
> Dado que la aplicación es una aplicación de desarrollo en el lado de Google, pueden cortarla, eliminarla o cambiar las reglas en cualquier momento.. En este caso, Jeedom no se hace responsable en caso de mal funcionamiento..

> **IMPORTANT**
>
> Para que las aplicaciones funcionen, es esencial que su libertad esté en https con un certificado válido (si tiene un paquete de servicio, el acceso DNS está ahí para eso)

Como recordatorio, el complemento te permite :

- usar la implementación nativa de Google para la gestión de objetos conectados
- usar interacciones de jeedom usando "Talk to ..."

Por lo tanto, hay 2 aplicaciones que figuran en Google : uno para la parte de Google Smarthome y otro para la parte de interacción (por supuesto, solo puede hacer uno de los 2)

## Aplicación Google Smarthome

Vamos [aquí](https://console.actions.google.com) luego haga clic en "Agregar / importar proyecto"

![gsh](../images/gsh7.png)

Dé un nombre al proyecto, cambie el idioma y la región predeterminados y valide :

![gsh](../images/gsh8.png)

Seleccione "Control de inicio" :

![gsh](../images/gsh9.png)

Haga clic en "Smarthome" :

![gsh](../images/gsh10.png)

Haga clic en "Nombra tu acción de Smart Home" :

![gsh](../images/gsh11.png)

Ponga "prueba smarthome" y valide (botón Guardar en la esquina superior derecha) :

![gsh](../images/gsh12.png)

Luego, a la izquierda, haga clic en "Acciones" :

![gsh](../images/gsh13.png)

Luego "Agregue su primera acción" :

![gsh](../images/gsh14.png)

Tendremos que dar aquí la url para llegar desde Jeedom. Para tenerlo es muy simple, en Jeedom tienes que ir a la página de administración de complementos, elegir el modo "Independiente" (y guardar de pasada), la URL es la llamada "URL de cumplimiento"

![gsh](../images/gsh15.png)

Luego vaya a "Enlace de cuenta" (menú izquierdo) :

![gsh](../images/gsh13.png)

Seleccione "No, solo quiero permitir la creación de cuentas en mi sitio web" y haga "Siguiente" :

![gsh](../images/gsh16.png)


Seleccione "OAuth", luego "Código de autorización" y haga "Siguiente" :

![gsh](../images/gsh17.png)

Luego complete los 4 campos de acuerdo con la página de configuración del complemento, luego haga clic en "Siguiente" :

![gsh](../images/gsh18.png)

> **NOTE**
>
> Los campos son :
> - ID del cliente primero
> - entonces el cliente secreto
> - luego "URL de autorización" (tenga cuidado de tomar el de la sección "Smarthome")
> - luego "Token URL" (tenga cuidado de tomar el de la sección "Smarthome")

No hay nada que hacer simplemente "Siguiente" :

![gsh](../images/gsh19.png)

Escribe "Toto" y luego haz "Guardar" :

![gsh](../images/gsh20.png)

Ahora configure la clave API de homegraph, para eso vaya [aquí](https://console.developers.google.com/apis/dashboard), luego haga clic derecho en "Biblioteca" :

![gsh](../images/gsh21.png)

> **NOTE**
>
> Si no tiene un proyecto, necesita crear uno

Y busque "Homegraph" :

![gsh](../images/gsh22.png)

Haga clic en homegraphapi, luego active la API y haga clic en administrar :

![gsh](../images/gsh23.png)

Haga clic en el identificador a la izquierda. :

![gsh](../images/gsh24.png)

Luego en "Identificadores de API y servicios" :

![gsh](../images/gsh25.png)

Haga clic en "Crear identificadores" y luego en "Clave API"" :

![gsh](../images/gsh26.png)

Copie la clave API generada y péguela en la página de administración del complemento de Google Smarthome en "Google API Homegraph"

Último paso para darle a Jeedom la identificación del proyecto para administrar la conexión, vaya [aquí](https://console.actions.google.com) luego haga clic en su proyecto. Recuperez l'url de la forme "https://console.actions.google.com / u / 0 / project / myproject-31023 / overview ", la identificación del proyecto está entre project / y / overview, en el ejemplo aquí es" myproject-31023 ", copie esta identificación en la página de administración el complemento de Google Smarthome en "ID del proyecto Smarthome".

Aquí puede hacer clic a la izquierda en "Acción" :

![gsh](../images/gsh27.png)

Luego en la prueba :

![gsh](../images/gsh28.png)

Entonces lo necesitas en un teléfono inteligente **android** (no debe funcionar en un iphone) conéctese a su Jeedom por **la url externa** de este. Luego debe ir a la aplicación de inicio, luego "configurar o agregar", luego "Configurar un dispositivo" y finalmente hacer clic en "Funciona con Google" y agregarlo a su servicio creado anteriormente (comienza con [prueba])

## Configuración Jwt

JWT le permite informar automáticamente cualquier cambio en el estado de un elemento del equipo enviado a Google, lo que le permite tener el estado más rápidamente cuando lo solicita desde Google Home o la aplicación Google Home.. No es obligatorio configurarlo, sin embargo, si marca la casilla "Volver al estado", es absolutamente necesario haberlo hecho para que funcione.

Para hacer la configuración necesitas

* ir [aquí](https://console.developers.google.com/iam-admin/serviceaccounts), si Google le pide que elija el proyecto (el creado justo arriba).
* Haga clic en crear una cuenta de servicio
  * Dale un nombre (puedes poner lo que quieras, evitar)
  * Recupere el correo electrónico generado justo debajo para copiarlo en la configuración del complemento en Jeedom (campos : Correo del cliente (JWT))
  * Haga clic en crear
  * Haga clic en continuar sin modificar nada
  * Haga clic en "Crear una clave"
    * Deje JSON y haga clic en Aceptar
  * Haga clic en Aceptar
  * Abra el archivo descargado y copie la parte 'private_key' (comienza con "----- BEGIN PRIVATE KEY -----", incluido y termina con "----- END PRIVATE KEY ----- \ n ", incluido sin") en la configuración del complemento en Jeedom (campos : Clave privada (JWT))

# Configuración del plugin

En su Jeedom, vaya a Complemento -> Comunicación -> Google Smarthome y en la sección de equipos seleccione el equipo que se transmitirá a Google, así como el tipo de equipo.

![gsh](../images/gsh2.png)

> **IMPORTANT**
>
> El complemento se basa en los tipos genéricos de comandos Jeedom para controlar la automatización de su hogar.. Por lo tanto, es muy importante configurarlos correctamente.

> **NOTE**
>
> Para el tipo de "cámara" debe configurar absolutamente la URL de la transmisión (probamos solo el RTSP) para que funcione.
> Tenga en cuenta que el soporte de la cámara está actualmente en versión beta y consume muchos recursos

## Equipement

En el equipo puede configurar :

* Opciones :
  * Transmitir : envíe el equipo a Google Home para que pueda controlarlo (tenga en cuenta que la configuración de los créditos genéricos está bien)
  * Elevar el estado : enviar cualquier cambio de información de estado a Google directamente (esto evita que durante una solicitud de información Google Home cuestione Jeedom). Consulte la sección "Configuración de JWT"
  * Desafío [Ninguno, Código] : si está en modo de código, Google le pedirá un código (el que se indica a continuación) para cada acción en el equipo
* Estado : indica si la transmisión está bien, si es NOK, entonces proviene del tipo genérico. Si hace clic en NOK, puede obtener la información sobre el tipo genérico necesario
* Tipo : indica el tipo de equipo
* Apodo : apodo del dispositivo, si está vacío, se usa el nombre del dispositivo
* Acción :
  * Permite la configuración avanzada de equipos para Google Home (depende del tipo utilizado)
  * Configuración avanzada de equipos, permite el acceso a la configuración avanzada de comandos y, por lo tanto, a modificar tipos genéricos.
  * Le permite ir directamente a la página de configuración del equipo.

### Type

Los tipos de equipos son importantes, esto le permite a Google reaccionar de acuerdo con las oraciones que dices.

> **IMPORTANT**
>
> El soporte de Jeedom para los tipos "beta" aún no está documentado en Google, por lo que puede o no funcionar dependiendo de las actualizaciones en Google

* Iluminación : admite encendido / apagado, cambio de color, atenuación....
* Termostato : admite cambio de punto de ajuste y modos (de forma limitada, Google solo autoriza ciertos nombres de modos, tenga cuidado de hacer la configuración avanzada)
* Salida : encendido / apagado
* Cámara : en beta, puede mostrar la transmisión en un Android TV en la red local
* Tienda : permite abrir / cerrar una persiana (puede invertir la dirección en la configuración avanzada)
* Persiana : abre / cierra un obturador (puede invertir la dirección en la configuración avanzada)
* [Ventana beta] : normalmente admite el estado abierto / cerrado de una ventana (para obtener información solo si hago la pregunta en inglés de que funciona)
* Puerta [beta] : normalmente admite el estado abierto / cerrado de una puerta (para obtener información solo si hago la pregunta en inglés de que funciona)
* Alarma [beta] : le permite armar / desarmar la alarma (tenga cuidado de usar el término arma / desarmar para que Google realice la acción)
* Bloquear [beta] : equipo cerrado / abierto
* TV [beta] : le permite cambiar el volumen y los canales
* Embarazada [beta] : le permite cambiar el volumen y detener, pausar, siguiente, anterior, reanudar

## Escenario

También puede crear escenas en la pestaña de escena, con acciones de entrada y salida..

![gsh](../images/gsh3.png)

> **NOTE**
>
> Para comenzar un escenario simplemente diga "Activo #nom du scénario#" o "Desactivar #nom du scénario#

> **NOTE**
>
> Al guardar Jeedom solicitará automáticamente la sincronización con Google. Atención en modo independiente si tiene un error (escriba "No se encontró la entidad solicitada") intente reactivar la prueba de la aplicación ([aquí](https://console.actions.google.com)) luego haga clic nuevamente en el botón de conexión en la página de la página de configuración del complemento. También verifique la configuración (especialmente la parte oauth) de su aplicación de Google (a veces Google borra los campos)

Todo lo que tiene que hacer es asignar el equipo a las habitaciones en la aplicación Google Home

# FAQ

>**No puedo hacer la asociación en modo nube ?**
>
> Debemos verificar que :
> - está bien en https (si tiene un paquete de servicio, use jeeodm DNS, estos son seguros de forma predeterminada)
> - ha activado el asistente de Google en el mercado (página de perfiles, pestaña de mis servicios y luego configuración en la sección de asistente de voz)
> - se ha suscrito a la suscripción de servicios de voz y aún es válida (necesaria desde el 01/06/2019). Esto se puede ver en su página de perfiles de mercado, pestaña mis servicios
> - es necesario en el complemento -> comunicación -> Google Smarthome selecciona el equipo "transmitir" y configura el tipo y finalmente guarda
> - usa bien tus credenciales de mercado

>**Durante la asociación tengo un error (pero no en un problema de contraseña / nombre de usuario)**
>
>Si tiene un error durante la asociación con Jeedom, probablemente se deba al hecho de que no agregó / transmitió equipo antes de realizar la asociación. Para corregir, vaya a Complementos -> Comunicación -> Alexa luego marcó al menos un equipo para transmitir y guardar (verifique que el equipo esté en buen estado, si está en NOK, haga clic en el NOK para ver por qué o preguntar sobre tipo genérico en libertad). Luego rehaga la asociación

>**¿Cuáles son los posibles pedidos? ?**
>
>Los comandos de voz (así como las devoluciones) son administrados solo por Google, aquí está el [Documentación](https://support.google.com/googlehome/answer/7073578?hl=fr)

>**El asistente me pide que asigne las partes pero no sé a qué corresponde el equipo.**
>
>Sí, el asistente no muestra el nombre real del equipo, solo el apodo. Por lo tanto, debe salir del asistente y volver a la página de inicio de control de inicio.. Al hacer clic en el equipo tendrá su nombre y luego puede asignarlo a una habitación

>**¿Por qué necesita asignar partes a cada equipo? ?**
>
>Debido a que Google no le permite hacerlo a través de la API, entonces absolutamente debe hacerlo manualmente.

>**Aparece el mensaje de error "OpenSSL no puede firmar datos"**
>
>Debe marcar la casilla "Volver al estado" sin hacer la configuración JWT

>**Aparece el mensaje de error "No puedo encontrar el recurso 404" al guardar**
>
>Así que no te preocupes, todo está guardado, es solo una sincronización automática que no se hace. Para hacerlo, diga "Sincronizar mis dispositivos" a su asistente. Para tratar de corregir esta preocupación :
> ir a la página siguiente [aquí](https://console.cloud.google.com/cloud-resource-manager). En esta página verá la lista de todos los proyectos, incluso los invisibles en la página de acciones de Google.. Eliminar todos los proyectos no utilizados.
> Luego, vuelva a hacer el tutorial desde el paso de configurar la clave API Homegraph (activación, generación de clave, luego disocie jeedom de su cuenta de Google y vuelva a hacer el enlace)


>**Tiene un error de enlace o no puede actualizar el parámetro, verifique su conexión en modo nube**
>
>Es necesario en jeedom, en el complemento agregar equipo, guardar y rehacer la asociación de Jeedom Smarthome en la aplicación Google Home

>**Aparece el error "Aparentemente, Jeedom Smart Home no está disponible en este momento". o "Lo siento, no puedo conectarme a Jeedom Smart Home."**
>
>Intente desasociar / volver a asociar la aplicación Google smarthome. Tenga cuidado de tomar la aplicación oficial y no una aplicación [TEST] si ha utilizado el modo independiente antes.

>**Cuando agrego equipo tengo NOK**
>
>Simplemente haga clic en NOK, una ventana le indicará el tipo genérico que debe tener en los controles del equipo para que funcione

>**El demonio / dependencias están en NOK**
>
>No importa que no se deba cuidar, no se usa en ningún caso para el funcionamiento del complemento por el momento (es útil para nosotros solo pasar la validación de Google)
