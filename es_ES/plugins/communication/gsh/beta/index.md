# Complemento smarthome de Google

Este complemento te permite :

- usar la implementación nativa de Google para la gestión de objetos conectados

Puede funcionar de 2 maneras :

- Independiente : creas las aplicaciones en modo de desarrollo en el lado de Google y luego conectas tu Jeedom al servicio de Google
- Nube : a través de un servicio en la nube proporcionado por Jeedom

> **Importante**
>
> El modo nube requiere una suscripción a servicios de voz (3 meses gratis al comprar el complemento)). Puedes gestionar tu suscripción [aquí](https://market.jeedom.com/index.php?v=d&p=profils#services)

> **Importante**
>
> GOOGLE requiere que su Jeedom sea accesible en HTTPS (el complemento no funciona en HTTP) con un certificado válido (por lo tanto, sin certificado autofirmado)
>
> Gracias a los paquetes de servicio Power o Ultimate, se puede acceder a su Jeedom a través de HTTPS.
> Si tiene un Community Service Pack, debe instalar usted mismo un certificado SSL emitido por una autoridad de certificación (p. Ej: Vamos a cifrar).

> **Importante**
>
> El complemento no admite equipos con funciones duales (2 salidas como ciertos módulos zwave Fibaro). Absolutamente tienes que pasar por 2 virtuales para descomponerlo.

# Modo nube

> **Importante**
>
> Es importante realizar los siguientes pasos en el orden indicado !!!

> **Importante**
>
> Si recibe un mensaje de error que le indica que su contraseña de usuario o contraseña es incorrecta, debe :
> - comprobar que Google Home está activo en el mercado
> - Si este es el caso, ¿estás seguro de tus identificadores (ojo, debes respetar mayúsculas/minúsculas)?) ?
> - si este es el caso, cambia tu contraseña en el mercado y en la configuración del servicio de asistente de voz (página perfil mercado pestaña mis servicios) guardar

Después de instalar el complemento, simplemente vaya a la configuración del complemento, seleccione el modo Cloud y luego haga clic en "Enviar" (esto enviará la información de conexión a la API del complemento en el mercado)

Luego en Jeedom en Comunicación/Google Smarthome debes hacer clic en guardar para enviar tu configuración inicial, necesitas al menos un dispositivo en OK (de lo contrario al conectar Google Home <-> Jeedom tendrás un error)

Luego en la aplicación Google Home tienes que ir a la primera pestaña hacer clic en Agregar (el +) :

![gsh](../images/gsh29.png)

Luego configura un dispositivo :

![gsh](../images/gsh30.png)

En "Funciona con Google" :

![gsh](../images/gsh31.png)

Luego, en la lista con el botón de búsqueda (lupa en la parte superior derecha), busque "Jeedom Smarthome" y haga clic en él :

![gsh](../images/gsh32.png)

Ingrese sus identificadores de mercado (bueno, esos mercados no son los de su Jeedom).

![gsh](../images/gsh6.png)

En complementos -> comunicación -> Google Smarthome podrás configurar tus diferentes equipos (ver capítulo Configuración de complementos)

>**Nota**
>
>Para cambiar del modo independiente al modo nube, debe :
>- en el complemento ir a la nube y luego guardar
>- espera 24h
>- en la aplicación de inicio de Google debe disociar testsmarthome (su aplicación independiente)
>- en Comunicación/Google Smarthome debes hacer clic en guardar para enviar tu configuración inicial
>- Enlace Jeedom Smarthome en Google Home


> **Importante**
>
>Cualquier modificación a la configuración del equipo enviado a Google Home (adición de equipo, eliminación de equipo, cambio de un tipo de orden genérico) necesariamente requiere ir a Complemento -> Comunicación -> Googme Smarthome y luego guardar

# Modo independiente

> **Importante**
>
> Google modifica la interfaz (muy) a menudo, no tenemos los recursos humanos para rehacer todas las capturas de pantalla cada vez. Por tanto, puede haber grandes diferencias entre las capturas y la realidad

> **Importante**
>
> Si ha utilizado el modo nube, no debe hacer esta parte !!! Vaya directamente al capítulo “Configuración del complemento”"

> **Importante**
>
> El modo independiente es una "estafa" porque te hace crear una aplicación en Google en modo de desarrollo que permite la sincronización solo durante 3 días después de la activación del modo de prueba. Entonces, al agregar o modificar equipos, reactive el modo de prueba cada 3 días para poder sincronizar. Atención, estamos hablando de una modificación de la configuración si no agrega o modifica equipos, no hay nada que hacer, la aplicación funcionará sin límite de tiempo

> **Importante**
>
> Dado que la aplicación es una aplicación de desarrollo en el lado de Google, pueden cortarla, eliminarla o cambiar las reglas en cualquier momento. En este caso, Jeedom no se hace responsable en caso de mal funcionamiento.

> **Importante**
>
> Para que las aplicaciones funcionen, es esencial que su libertad esté en https con un certificado válido (si tiene un paquete de servicio, el acceso DNS está ahí para eso)

Como recordatorio, el complemento te permite :

- usar la implementación nativa de Google para la gestión de objetos conectados
- usar interacciones de jeedom usando "Talk to ..."

Por lo tanto, hay 2 aplicaciones que figuran en Google : uno para la parte de Google Smarthome y otro para la parte de interacción (por supuesto, solo puedes hacer una de las 2)

## Aplicación Google Smarthome

Vamos [aquí](https://console.actions.google.com) luego haga clic en "Agregar / importar proyecto"

![gsh](../images/gsh7.png)

Dale un nombre al proyecto, cambia el idioma y la región predeterminados y valida :

![gsh](../images/gsh8.png)

Seleccione "Control de inicio" :

![gsh](../images/gsh9.png)

Haga clic en "Smarthome" :

![gsh](../images/gsh10.png)

Haga clic en "Nombra tu acción de Smart Home" :

![gsh](../images/gsh11.png)

Ponga "smarthome test" y valide (botón Guardar en la parte superior derecha) :

![gsh](../images/gsh12.png)

Luego, a la izquierda, haga clic en "Acciones" :

![gsh](../images/gsh13.png)

Luego "Agregue su primera acción" :

![gsh](../images/gsh14.png)

Tendrás que dar aquí la URL de llegada de Jeedom. Para tenerlo es muy simple, en Jeedom tienes que ir a la página de administración de complementos, elegir el modo "Independiente" (y guardar de pasada), la URL es la llamada "URL de cumplimiento"

![gsh](../images/gsh15.png)

Luego vaya a "Enlace de cuenta" (menú izquierdo) :

![gsh](../images/gsh13.png)

Seleccione "No, solo quiero permitir la creación de cuentas en mi sitio web" y haga "Siguiente" :

![gsh](../images/gsh16.png)


Seleccione "OAuth", luego "Código de autorización" y haga "Siguiente" :

![gsh](../images/gsh17.png)

Luego complete los 4 campos de acuerdo con la página de configuración del complemento, luego haga clic en "Siguiente" :

![gsh](../images/gsh18.png)

> **Nota**
>
> Los campos son :
> - ID del cliente primero
> - entonces el cliente secreto
> - luego "URL de autorización" (tenga cuidado de tomar el de la sección "Smarthome"")
> - luego "Token URL" (tenga cuidado de tomar el de la sección "Smarthome"")

No hay nada que hacer simplemente "Siguiente" :

![gsh](../images/gsh19.png)

Escribe "Toto" y luego haz "Guardar"" :

![gsh](../images/gsh20.png)

Ahora debes configurar la clave API de homegraph, para hacer esto ve [aquí](https://console.developers.google.com/apis/dashboard), luego haga clic derecho en "Biblioteca" :

![gsh](../images/gsh21.png)

> **Nota**
>
> Si no tiene un proyecto, necesita crear uno

Y busque "Homegraph" :

![gsh](../images/gsh22.png)

Haga clic en homegraphapi, luego active la API y haga clic en administrar :

![gsh](../images/gsh23.png)

Haga clic en el identificador a la izquierda :

![gsh](../images/gsh24.png)

Luego en "Identificadores de API y servicios" :

![gsh](../images/gsh25.png)

Haga clic en "Crear identificadores" y luego en "Clave API"" :

![gsh](../images/gsh26.png)

Copie la clave API generada y péguela en la página de administración del complemento Google Smarthome en "Homegraph API Google"

Último paso para darle a Jeedom la identificación del proyecto para administrar la conexión, vaya [aquí](https://console.actions.google.com) luego haga clic en su proyecto. Récuperez l'url de la forme "https://console.actions.google.com / u / 0 / project / myproject-31023 / overview ", la identificación del proyecto está entre project / y / overview, en el ejemplo aquí es" myproject-31023 ", copie esta identificación en la página de administración el complemento de Google Smarthome en "ID del proyecto Smarthome".

Eso es todo, ahora puedes hacer clic a la izquierda en "Acción" :

![gsh](../images/gsh27.png)

Luego en la prueba :

![gsh](../images/gsh28.png)

Entonces lo necesitas en un teléfono inteligente **Androide** (no debe funcionar en un iphone) conéctese a su Jeedom por **la url externa** de este. Luego vaya a la aplicación de inicio, luego "configure o agregue", luego "Configure un dispositivo" y finalmente haga clic en "Funciona con Google" y agregue su servicio creado anteriormente (comienza con [prueba])

## Configuración Jwt

JWT le permite informar automáticamente cualquier cambio en el estado de un elemento del equipo enviado a Google, lo que le permite tener el estado más rápidamente cuando lo solicita desde Google Home o la aplicación Google Home. No es obligatorio configurarlo, sin embargo si marcas la casilla "Estado del informe" es absolutamente necesario haberlo hecho para que funcione.

Para hacer la configuración necesitas

* ir [aquí](https://console.developers.google.com/iam-admin/serviceaccounts), si Google te pregunta, debes elegir el proyecto (el creado justo arriba).
* Haga clic en crear una cuenta de servicio
  * Dale un nombre (puedes poner lo que quieras, evitar )
  * Recupere el correo electrónico generado justo debajo para copiarlo en la configuración del complemento en Jeedom (campos : Cliente de correo (JWT))
  * Haga clic en crear
  * Haga clic en continuar sin modificar nada
  * Haga clic en "Crear una clave"
    * Deje JSON y haga clic en Aceptar
  * Haga clic en Aceptar
  * Abra el archivo descargado y copie la parte 'private_key' (comienza con "-----BEGIN PRIVATE KEY-----", incluida y termina con "-----END PRIVATE KEY-----\n ", incluido sin ") en la configuración del complemento en Jeedom (campos : Clave privada (JWT))

# Configuración del plugin

En tu Jeedom, ve a Complementos -> Comunicación -> Google Smarthome y en la sección de equipos selecciona el equipo a transmitir a Google así como el tipo de equipo.

![gsh](../images/gsh2.png)

> **Importante**
>
> El complemento se basa en los tipos genéricos de comandos Jeedom para controlar la automatización de su hogar. Por lo tanto, es muy importante configurarlos correctamente.Podéis ver [aquí](https://doc.jeedom.com/es_ES/core/4.4/types) documentación sobre genéricos típicos

> **Nota**
>
> Para el tipo de "cámara" debe configurar absolutamente la URL de la transmisión (probamos solo el RTSP) para que funcione.
> Tenga en cuenta que el soporte de la cámara está actualmente en versión beta y consume muchos recursos

## Equipement

En el equipo puede configurar :

* Opciones :
  * Transmitir : envía el equipo a Google Home para que pueda controlarlo (ojo, la configuración de los tipos genéricos debe ser OK))
  * Elevar el estado : enviar cualquier información de cambio de estado a Google directamente (esto evita que Google Home consulte a Jeedom cuando solicita información)). Consulte la sección "Configuración de JWT"
  * Desafío [Ninguno, Código] : si está en modo de código, Google le pedirá un código (el que se indica a continuación) para cada acción en el equipo
* Estado : indica si la transmisión está bien, si es NOK, entonces proviene del tipo genérico. Si haces clic en NOK podrás tener la información de los tipos genéricos necesarios
* Tipo : indica el tipo de equipo
* Apodo : apodo del dispositivo, si está vacío, se usa el nombre del dispositivo
* Acción :
  * Permite la configuración avanzada de equipos para Google Home (depende del tipo utilizado)
  * Configuración avanzada del equipo, permite acceder a configuración avanzada de comandos y por tanto modificación de tipos genéricos
  * Le permite ir directamente a la página de configuración del equipo

### Type

Los tipos de equipos son importantes, esto permite a Google reaccionar en función de las frases que dices.

> **Importante**
>
> Jeedom admite tipos "beta" que aún no están documentados en Google, por lo que pueden funcionar o no dependiendo de las actualizaciones de Google

> **Importante**
>
> El tipo de termostato solo es totalmente compatible a través de equipos que provienen del complemento de termostato; de lo contrario, es posible que la administración de los modos no funcione
> 
> Para gestionar el modo en un tipo de termostato, debe :
> - Información de tipo "otro" que toma el valor "calor", "frío", "apagado", "eco" y le asigna el tipo genérico : Modo termostato
> - Acciones que realizan cambios de modo y les asignan el tipo genérico : Modo termostato
> - También es necesario conectar la acción al modo correspondiente en los parámetros del equipo en el complemento gsh (sección "Configuración de temperatura")")

## Escenario

También puedes crear escenas en la pestaña de escenario, con acciones de entrada y salida.

![gsh](../images/gsh3.png)

> **Nota**
>
> Para comenzar un escenario simplemente diga "Activo #nom du scénario#" o "Desactivar #nom du scénario#

> **Nota**
>
> Al guardar Jeedom solicitará automáticamente la sincronización con Google. Atención en modo independiente si tiene un error (escriba "No se encontró la entidad solicitada") intente reactivar la prueba de la aplicación ([aquí](https://console.actions.google.com)) luego haga clic nuevamente en el botón de conexión en la página de configuración del complemento. También verifique la configuración (especialmente la parte oauth) de su aplicación de Google (a veces Google elimina los campos))

Todo lo que tiene que hacer es asignar el equipo a las habitaciones en la aplicación Google Home

# FAQ

>**No puedo hacer la asociación en modo nube ?**
>
> Debemos verificar que :
> - estás en https (si tienes un paquete de servicio, usa jeedom DNS, estos son seguros de forma predeterminada))
> - Ha activado el Asistente de Google en el mercado (página de perfiles, pestaña Mis servicios y luego configuración en la sección Asistentes de voz))
> - se ha suscrito a la suscripción de servicios de voz y aún es válida (necesaria desde el 01/06/2019). Esto se puede ver en su página de perfiles de mercado, pestaña Mis servicios
> - debes en complementos -> comunicación -> Google Smarthome seleccionar "transmitir" equipo y configurar el tipo y finalmente guardar
> - usa bien tus credenciales de mercado
> - Si tiene un certificado let's encrypt, no olvide poner la raíz y el intermediario en la cadena de certificación
> - ningún módulo OK (debe tener uno, de lo contrario, Google se niega a vincular)
> - si está en su propio dominio, problemas para resolver el nombre de dominio en IP, no tengo idea de por qué. Por el lado de la libertad, los DNS son los proporcionados por defecto por OVH (de todos modos no tenemos control sobre ellos). Incluso tuve el caso de un usuario que tenía el DNS en OVH y aún no podía resolverlo en nuestras máquinas
> - Problema con el teléfono, en algunas marcas el navegador está desactualizado o no es Chrome de forma predeterminada y causa problemas para hacer el enlace
> - Si aún tienes el problema intenta enviar solo un módulo tipo luz


>**¿Cuáles son los posibles pedidos? ?**
>
>Los comandos de voz (así como las devoluciones) son administrados solo por Google, aquí está el [Documentación](https://support.google.com/googlehome/answer/7073578?hl=fr)

>**El asistente me pide que asigne las partes pero no sé a qué corresponde el equipo.**
>
>Sí, el asistente no muestra el nombre real del equipo, solo el apodo. Por lo tanto, debe salir del asistente y volver a la página de inicio de control de inicio. Al hacer clic en el equipo tendrá su nombre y luego puede asignarlo a una habitación

>**¿Por qué necesita asignar partes a cada equipo? ?**
>
>Debido a que Google no le permite hacerlo a través de la API, entonces absolutamente debe hacerlo manualmente.

>**Aparece el mensaje de error "OpenSSL no puede firmar datos"**
>
>Debe marcar la casilla "Empujar el estado" (en la configuración avanzada, botón verde con la rueda dentada) sin hacer la configuración JWT

>**Aparece el mensaje de error "No puedo encontrar el recurso 404" al guardar**
>
>Así que no te preocupes, todo se guarda, solo es la sincronización automática la que no se realiza. Para hacerlo, diga "Sincronizar mis dispositivos" a su asistente. Para intentar corregir este problema :
> ir a la página siguiente [aquí](https://console.cloud.google.com/cloud-resource-manager). En esta página verá la lista de todos los proyectos, incluso los invisibles en la página de acciones de Google. Eliminar todos los proyectos no utilizados.
> Luego, rehaga el tutorial desde el paso configurar la clave API de Homegraph (activación, generación de clave, luego desasociar jeedom de su cuenta de Google y rehacer el enlace))


>**Tiene un error de enlace o no puede actualizar el parámetro, verifique su conexión en modo nube**
>
>Es necesario en jeedom, en el complemento agregar equipo, guardar y rehacer la asociación de Jeedom Smarthome en la aplicación Google Home

>**Aparece el error "Aparentemente, Jeedom Smart Home no está disponible en este momento". o "Lo siento, no puedo conectarme a Jeedom Smart Home."**
>
>Intente desasociar / volver a asociar la aplicación Google smarthome. Tenga cuidado de utilizar la aplicación oficial y no una aplicación [PRUEBA] si ha utilizado el modo independiente antes. Si el problema persiste, compruebe (especialmente en una escena) que el tiempo de ejecución sea inferior a 2 segundos (máximo permitido por Google)

>**Al agregar equipo tengo NOK**
>
>Simplemente haga clic en NOK, una ventana le indicará el tipo de genéricos que debe tener en los controles del equipo para que esto funcione. Podéis ver [aquí](https://doc.jeedom.com/es_ES/concept/generic_type) la documentación sobre tipo genérico

>**Cambiar la velocidad de un ventilador no funciona**
>
>Tras el análisis, Google no envía una orden durante una acción de velocidad. Por lo tanto, debemos esperar a que Google corrija
