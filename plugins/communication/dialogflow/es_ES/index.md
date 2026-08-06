# Dialogflow

El plugin dialogflow permite conectar Jeedom a Google Home / Assistant mediante una aplicación nativa e interacciones

> **Nota**
>
> También está el complemento Google Smarthome que le permite conectar Jeedom a Google Home / Assistant, pero esta vez mediante la integración de la integración Smarthome de Google, por lo tanto, no utiliza interacciones.

> **Importante**
>
> El complemento requiere una suscripción a los servicios de voz. Puedes gestionar tu suscripción [aquí](https://market.jeedom.com/index.php?v=d&p=profils#services)

# Configuration

Instala el complemento y actívalo. Luego, siempre en la página de configuración del complemento, haga clic en "Enviar" para enviar su configuración al mercado.

![dialogflow](../images/dialogflow1.png)

> **Importante**
>
> No tiene que crear ningún equipo para este complemento. Solo sigue las instrucciones a continuación.

En el Market debe activar "Google Smarthome" en la pestaña "Mis servicios"".

> **Importante**
>
> La url de acceso de su libertad debe estar absolutamente en https

> **Nota**
>
> Solo puede conectar un Jeedom a Google por cuenta de mercado

En un teléfono con el Asistente de Google, di "Habla con Jeedom", Google te dirá que vincules tu cuenta de Jeedom y Google haga clic en sí :

![dialogflow](../images/dialogflow2.png)

Indique sus identificadores de mercado :

![dialogflow](../images/dialogflow3.png)

Google le dirá que la configuración se ha creado / actualizado correctamente :

![dialogflow](../images/dialogflow4.png)

Aquí, se realiza el enlace entre su Jeedom y Google Home / Assistant.

Ahora puede hablar con su Jeedom y usar todas las interacciones de su Jeedom directamente desde su Google Home / Assistant.
Desde su Google Home / Assistant, simplemente diga "Talk to Jeedom", "Ask Jeedom" o incluso "Say to Jeedom" para iniciar la interacción con Jeedom y "Thank you" cuando haya terminado para finalizar la conversación.

# FAQ

>**Tengo el error ESOCKETTIMEDOUT**
>
>¿Es que su URL o clave API configurada en el mercado no es buena?. También preste atención al tiempo de respuesta definido en las interacciones, Google impone un tiempo de respuesta antes del tiempo de espera de 4 segundos.

>**Error su Jeedom no respondió correctamente Código ETIMEDOUT. Otra cosa**
>
>Esto proviene de su Jeedom que no respondió dentro del tiempo asignado (impuesto por Google). Puede provenir de 2 cosas, una conexión lenta a Internet o acciones que toman demasiado tiempo.
