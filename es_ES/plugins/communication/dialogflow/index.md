# Presentación 

El plugin dialogflow permite conectar Jeedom a Google Home / Assistant mediante una aplicación nativa e interacciones

> **Nota**
>
> También está el complemento Google Smarthome que le permite conectar Jeedom a Google Home / Assistant, pero esta vez mediante la integración de la integración Smarthome de Google, por lo tanto, no utiliza interacciones.

> **Importante**
>
> El complemento requiere una suscripción a los servicios de voz.. Puede administrar su suscripción [aquí] (https://www.jeedom.com/market/index.php?v=d&p=profils#services)

## Sincronización y retraso

En modo de nube (y solo en modo de nube), hay retrasos de sincronización durante las siguientes acciones :

- Activacion de cuenta
- Compra del año en el servicio Voice Assistant
- Cambio de clave API API del complemento smarthome
- Cambio de url de Jeedom
- Cambiar mercado de contraseñas

# Configuración

Instala el complemento y actívalo. Luego, siempre en la página de configuración del complemento, haga clic en "Enviar" para enviar su configuración al mercado.

![dialogflow](../images/dialogflow1.png)

> **Importantee**
>
> No tiene que crear ningún equipo para este complemento.. Solo sigue las instrucciones a continuación.

En el mercado, debe activar "Google Smarthome" en la pestaña "Mis servicios" y luego "Configurar" en la línea "Asistente de voz" de sus perfiles y esperar hasta que el estado cambie a activo (se tarda unas 6 horas).

> **Importantee**
>
> La url de acceso de su libertad debe estar absolutamente en https

> **Nota**
>
> Solo puede conectar un Jeedom a Google por cuenta de mercado

> **Importantee**
>
> Después de la activación y / o modificación de la información de Google Smarthome, debe **espera 24h** para que esto se tenga en cuenta

En un teléfono con el Asistente de Google, di "Habla con Jeedom", Google te dirá que vincules tu cuenta de Jeedom y Google haga clic en sí : 

![dialogflow](../images/dialogflow2.png)

Indique sus identificadores de mercado : 

![dialogflow](../images/dialogflow3.png)

Google le dirá que la configuración se ha creado / actualizado correctamente : 

![dialogflow](../images/dialogflow4.png)

Aquí, se realiza el enlace entre su Jeedom y Google Home / Assistant.

Ahora puede hablar con su Jeedom y usar todas las interacciones de su Jeedom directamente desde su Google Home / Assistant.
Desde su Google Home / Assistant, simplemente diga "Talk to Jeedom", "Ask Jeedom" o incluso "Say to Jeedom" para iniciar la interacción con Jeedom y "Thank you" cuando haya terminado para finalizar la conversación..

# Modo seguro

El modo seguro agrega una capa de autorización en Jeedom. De forma predeterminada, solo la clave API es necesaria en modo seguro, hay una segunda cadena de caracteres única por usuario (no almacenada completamente en la base de datos) que debe ser válida.

Para usarlo de manera más simple, debe ir a la página de configuración del complemento y activar el modo seguro, luego solicitar a Google por Jeedom. Finalmente, vaya a la página Complemento -> Comunicación -> Dialogflow. Verá una solicitud de aceptación de un identificador, solo valídelo..

> **Nota**
>
> El modo seguro no está activo de forma predeterminada para poder pasar la validación de Google, pero se recomienda encarecidamente activarlo

# Restablecer configuración

Si ha introducido una URL o clave API incorrecta o un cambio de URL o clave API, debe restablecer la configuración y rehacer el procedimiento de conexión..

Luego, en la aplicación Asistente de Google, diga "Talk to Jeedom" y luego "Eliminar configuración". La aplicación debería decirle que la configuración se eliminó correctamente. Luego repita el procedimiento de conexión.

# Preguntas frecuentes

>**Tengo el error ESOCKETTIMEDOUT**
>
>¿Es que su URL o clave API configurada en el mercado no es buena?. También preste atención al tiempo de respuesta definido en las interacciones, Google impone un tiempo de respuesta antes del tiempo de espera de 4 segundos.

>**Durante una "conversación con Jeedom", INMEDIATAMENTE recibe un "Error que su servidor de configuración no respondió correctamente. Vaya al código de documentación 500"**
>
>Ve a esta [url] (https://gala-demo.appspot.com), en esta página seleccione su cuenta de Google (la utilizada por Google Home / Assistant) en "ID de servicio", coloque jeedom-183212 y haga clic en "Desvincular mi cuenta" (botón a la derecha). Luego, en Google Assistant, vuelva a hacer la configuración (excepto la parte del mercado)

>**Error su Jeedom no respondió correctamente Código ETIMEDOUT. Otra cosa**
>
>Esto proviene de su Jeedom que no respondió dentro del límite de tiempo (impuesto por Google). Puede provenir de 2 cosas, una conexión lenta a Internet o acciones que toman demasiado tiempo..

>**En cada solicitud, Google indica que su configuración ha sido actualizada**
>
>Es que Google no reconoce tu voz, por lo que te considera como un nuevo usuario. Para corregir puede intentar reconfigurar la coincidencia de voz.
