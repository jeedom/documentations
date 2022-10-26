# Complemento Alexa Smarthome

Este complemento permite hacer el enlace entre su Jeedom y Alexa

Puede operar a través de un servicio en la nube proporcionado por Jeedom.

> **Importante**
>
> El complemento requiere una suscripción a los servicios de voz. Puedes gestionar tu suscripción [aquí](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

> **Importante**
>
> AMAZON requiere que su Jeedom sea accesible en HTTPS (el complemento no funciona en HTTP) con un certificado válido (por lo tanto, sin certificado autofirmado)
>
> Gracias a los paquetes de servicio Power o Ultimate, se puede acceder a su Jeedom a través de HTTPS.
> Si tiene un Community Service Pack, debe instalar usted mismo un certificado SSL emitido por una autoridad de certificación (p. Ej: Vamos a cifrar, ...).

> **Importante**
>
> El complemento no es compatible con equipos con funciones duales (2 salidas como cierto módulo zwave Fibaro). Absolutamente tienes que pasar por 2 virtuales para descomponerlo.

# Establecer la conexión a Alexa

> **Importante**
>
> Es importante realizar los siguientes pasos en el orden indicado !!!

## Mercado de la configuración

Después de instalar el complemento, solo necesita ir a la parte de configuración del complemento y luego hacer clic en enviar la configuración al mercado.

## Configuración de Alexa

Una vez que el servicio está activo, debe hacerlo en la aplicación Alexa o en el [sitio web](https://alexa.amazon.fr/spa/index.html) vaya a la parte de habilidad y busque la habilidad Jeedom, luego actívela, le pedirá identificadores que debe colocar en el mercado (tenga cuidado de poner sus identificadores de mercado y no los de su Jeedom)

> **Importante**
>
> Si tiene un mensaje de error que le indica que su contraseña de usuario o no es correcta, debe :
> - compruebe que Amazon Alexa esté activa en el mercado
> - si este es el caso, asegúrese de sus identificadores (atención debe respetar mayúsculas / minúsculas)) ?
> - si este es el caso, cambie su contraseña en el mercado y en la configuración del servicio de asistente de voz (pestaña de página de perfiles de mercado mis servicios) guarde

> **Importante**
>
>Cualquier modificación a la configuración del equipo transmitido a Alexa (adición de equipo, eliminación de equipo, cambio de un tipo genérico de un pedido) necesariamente requiere ir a Plugin -> Comunicación -> Alexa y luego guardar y en la aplicación Alexa para rehacer un descubrimiento

## Configuración del plugin

En su Jeedom, vaya a Complemento -> Comunicación -> Alexa y en la sección de equipos seleccione el equipo que se transmitirá a Alexa, así como el tipo de equipo.

> **Importante**
>
> El complemento se basa en los tipos genéricos de comandos Jeedom para controlar la automatización de su hogar. Por lo tanto, es muy importante configurarlos correctamente. Podéis ver [aquí](https://doc.jeedom.com/es_ES/core/4.2/types) explicaciones sobre genéricos genéricos

> **Importante**
>
> Para los modos, necesita MINIMO dos; de lo contrario, Amazon rechaza la configuración y nada se sincronizará

También puede crear escenas en la pestaña de escena, con acciones de entrada y salida.

> **Importante**
>
> Si no envía ningún equipo (no está bien en la lista de equipos en el complemento de Alexa), Amazon considera que es un error y utiliza la última configuración conocida. Entonces, si olvida todo y no envía ningún equipo, Amazon tomará la última configuración conocida y, por lo tanto, hará que todo vuelva a aparecer.

# FAQ

>**Leí que el complemento requeriría una suscripción, por qué ?**
>
> Es bastante simple, Jeedom es una solución que no es en la nube (escucha que todo está en casa, no hay un servidor de nuestro lado para tu Jeedom), pero Alexa solo puede enviar solicitudes a un solo servidor por una habilidad. Así que tuvimos que hacer un servidor que reciba todas las solicitudes de Alexa y las retransmita a su Jeedom. Lamentablemente, el servidor (además del costo de desarrollo y mantenimiento) tiene un costo de alquiler de nuestro lado. Es por eso que habrá una suscripción para el servicio "Asistente de voz" que cubrirá tanto Amazon como Google (no se preocupe por el precio, será mínimo, el objetivo es solo amortizar el costo del servidor)

>**Para abrir / cerrar las persianas debo decir encender / apagar ?**
>
> Esto es normal, Alexa no admite equipos de tipo de apertura (por razones de seguridad), por lo que debe hacer que crea que es una luz. Por contra, gracias a las rutinas puedes decir abrir / cerrar

>**Alexa me dice "el dispositivo no responde" mientras la acción está bien hecha**
>
> Mire sus tipos genéricos, Alexa requiere absolutamente un retorno de estado, de lo contrario le dirá que el dispositivo no responde. También preste atención a la demora para realizar la acción si es demasiado largo, recibirá el mensaje de que el dispositivo no responde.

>**Durante la asociación tengo un error (pero no un problema de contraseña / nombre de usuario)**
>
>Si tiene un error durante la asociación con Jeedom, probablemente se deba al hecho de que no agregó / transmitió equipo antes de realizar la asociación. Para corregir, vaya a Complementos -> Comunicación -> Alexa, luego marcó al menos un equipo para transmitir y guardó (verifique que el equipo esté en buen estado, si está en NOK, haga clic en NOK para ver por qué o preguntar sobre tipo genérico en libertad). Luego rehaga la asociación

>**Cuando agrego equipo tengo NOK**
>
>Simplemente haga clic en NOK, una ventana le indicará el tipo genérico que debe tener en los controles del equipo para que funcione. Podéis ver [aquí](https://doc.jeedom.com/es_ES/concept/generic_type) la documentación sobre tipo genérico

>**Agregar equipo / escena no aparece en la aplicación alexa**
>
> Hay que :
> - borré todo mi equipo transmitido (verde OK) del complemento Alexa
> - guardar bien
> - “oublié” tous mes équipement jeedom visibles dans la rubrique Maison connectée de Alexa.amazon.com (o la aplicación)
> - en el complemento -> administración de complementos, luego alexa haga clic en "enviar la configuración al mercado"
> - hacer una detección de Alexa
> - devolver equipo
> - rehacer detección de Alexa
