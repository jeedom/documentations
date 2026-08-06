# Complemento flojo

Este complemento le permite establecer una conexión entre Slack y Jeedom para enviar alertas desde Jeedom o chatear con Jeedom (mediante interacciones).

# Configuración del plugin 

Después de descargar el complemento, debe activarlo, no requiere ninguna otra configuración.

![slack1](../images/slack1.PNG)

# Configuración del equipo 

Se puede acceder a la configuración del equipo de Slack desde el menú Complementos :

![slack2](../images/slack2.PNG)

Así es como se ve la página del complemento Slack (aquí con 1 dispositivo ya) :

![slack3](../images/slack3.PNG)

Una vez que haces clic en uno de ellos, obtienes :

![slack4](../images/slack4.PNG)

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo** : nombre de su equipo Slack
-   **Activar** : activa su equipo
-   **Visible** : lo hace visible en el tablero
-   **Dominio** : nombre de dominio de su Slack (especialmente si tiene varios Slacks para diferenciarlos)
-   **Autenticación de token** : Token API de Slack, útil solo para enviar archivos (por ejemplo, capturar una cámara), consulte a continuación el método para recuperarlo
-   **URL de retorno** : esta es la URL que debe darse en el webhook de Slack (tenga cuidado, su Jeedom debe ser accesible desde el exterior)

A continuación encontrará la configuración de los comandos :

-   **Nombre** : Nombre de la orden
-   **Web hook** : URL para llamar para enviar un mensaje en Slack
-   **Destino** : no obligatorio, permite forzar el envío de un mensaje a un canal o usuario
-   Configuración avanzada (ruedas pequeñas con muescas) : se utiliza para mostrar la configuración avanzada del comando (método de registro, widget, etc)
-   Probar : Se usa para probar el comando
-   Eliminar (firmar -) : permite eliminar el comando

> **Punta**
>
> Por defecto hay 2 comandos : El remitente que le da el nombre del último remitente del mensaje y el mensaje que le da el mensaje, se puede usar, si desea hacer algo que no es posible con las interacciones para desencadenar un escenario a la llegada de uno nuevo mensaje, por ejemplo, y recuperar su valor (podemos imaginar, por ejemplo, que se lea el mensaje en Sonos o Karotz)

Creación de cuenta floja 

Nada más solo vete [aquí](:https://slack.com/), e ingrese una dirección de correo electrónico y un nombre de dominio / empresa, por ejemplo :

![slack5](../images/slack5.PNG)

Solo tiene que validar, recibirá un correo electrónico, debe hacer clic en el enlace para activar su cuenta y está bien

Entonces llegarás en tu Slack :

![slack6](../images/slack6.PNG)

Desde allí encontrará a la izquierda los canales y los usuarios, en el centro puede descargar la aplicación Slack para iOS, Android, Mac o Windows

# Agregar webhook saliente 

Los wekhooks le permiten a Slack informar a Jeedom de la llegada de un mensaje y esperar la respuesta de Jeedom para retransmitirlo, para ello debe ir a la configuración :

![slack7](../images/slack7.PNG)

Luego haga clic en integración :

![slack8](../images/slack8.PNG)

En la parte inferior encontrará "WebHooks salientes" :

![slack9](../images/slack9.PNG)

Haga clic en "Agregar" :

![slack10](../images/slack10.PNG)

Luego "Agregar integración de WebHooks salientes" :

![slack11](../images/slack11.PNG)

Encontrará los diferentes parámetros en la parte inferior de la página :

-   **Canal** : no es obligatorio, digamos a Slack que envíe todo en este canal a Jeedom. Por ejemplo, podemos crear un canal solo para Jeedom (más práctico que poner una palabra de activación)
-   **Desencadenar palabra (s))** : no es obligatorio si ha puesto un canal, de lo contrario es absolutamente necesario. Este campo le permite definir una palabra activadora para enviar a Jeedom, por ejemplo, si coloca Jeedom todas sus solicitudes deben comenzar con Jeedom (ej : Jeedom cuanto cuesta en el dormitorio)
-   **URL (s))** : URL para llamar, la encontrará en la página de su equipo en Jeedom bajo el nombre de "URL de retorno"

Los otros campos no son útiles, excepto quizás el "Personalizar nombre" que permite definir el nombre del bot Jeedom (nombre con el que responde Jeedom), también puede cambiar el icono de Jeedom con el "Personalizar icono".

Luego haga clic en "Guardar configuración" y está bien

![slack12](../images/slack12.PNG)

Allí, puedes hablar con Jeedom a través de Slack

> **Importante**
>
> No olvide en Jeedom ingresar su nombre de dominio (nombre de la compañía), de lo contrario, Jeedom se negará a responderle (tenga en cuenta que este campo es sensible a la casilla).

> **Punta**
>
> Como Jeedom separa los equipos por dominio, es posible si tiene varios dominios para separar los equipos y, por lo tanto, los escenarios detrás.

# Adición de webhook entrante 

Los webhooks entrantes permiten que Jeedom comunique un mensaje en un canal o directamente a una persona. Sin estos webhooks, Jeedom no podrá tomar la iniciativa de enviarle un mensaje.

Para hacer esto tienes que ir a la configuración :

![slack7](../images/slack7.PNG)

Luego haga clic en integración :

![slack8](../images/slack8.PNG)

En la parte inferior encontrará "WebHooks entrantes" :

![slack13](../images/slack13.PNG)

Luego, debe elegir un canal o un usuario de destino predeterminado (luego puede especificar uno por comando en Jeedom) :

![slack14](../images/slack14.PNG)

Luego haga clic en "Agregar integración de WebHooks entrantes".

![slack15](../images/slack15.PNG)

En la parte inferior de la página encontrará la información del webhook, solo necesita recuperar el valor del campo "URL de Webhook" y copiarlo en el campo Webhook de su pedido.

> **Punta**
>
> En el campo de destino del comando en Jeedom puede especificar un canal (ex \#monchannel) o un usuario (ex @toto).

Aquí, bajo Jeedom solo tienes que guardar y desde Jeedom puedes enviar mensajes en Slack

# Recuperación de tokens 

Aquí le mostramos cómo recuperar su token para que Jeedom pueda enviar archivos a Slack, y en particular capturas de cámaras, por ejemplo. Primero tienes que irte [aquí](https://api.slack.com/custom-integrations/legacy-tokens), luego en la parte inferior continuar :

![slack17](../images/slack17.PNG)

Aquí, frente a su equipo, solicite a Slack que genere el token, le pedirá su contraseña y luego lo enviará de vuelta a la misma página, en la parte inferior solicite nuevamente el token. Después de unos segundos aparecerá, solo cópielo en el campo de token en Jeedom

> **Punta**
>
> Este paso es opcional, solo es útil para enviar capturas de su cámara por Slack, por ejemplo.

# Cual es el resultado ? 

Aquí hay un ejemplo de lo que es posible hacer una vez que el complemento está configurado correctamente y las interacciones creadas :

![slack16](../images/slack16.PNG)

> **Importante**
>
> Si utiliza la función "preguntar" de los escenarios, debe enviar la solicitud en un canal en el que Jeedom escucha las respuestas; de lo contrario, su solicitud "preguntar" caerá en "tiempo de espera""
