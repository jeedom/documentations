# Complemento IFTTT

Este complemento permite enviar un evento a IFTTT

# Configuración del plugin 

Después de descargar el complemento, debe activarlo, no requiere ninguna otra configuración.

![ifttt7](./images/ifttt7.PNG)

# Configuración del equipo 

Se puede acceder a la configuración del equipo IFTTT desde el menú de complementos :

![ifttt8](./images/ifttt8.PNG)

Así es como se ve la página del complemento IFTTT (aquí con 1 dispositivo ya) :

![ifttt9](./images/ifttt9.PNG)

Una vez que haces clic en uno de ellos, obtienes :

![ifttt10](./images/ifttt10.PNG)

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo** : nombre de su equipo IFTTT
-   **Activar** : activa su equipo
-   **Visible** : lo hace visible en el tablero
-   **Clave** : Clave IFTTT que encontrará en la configuración del servicio Webhooks (que reemplaza al creador de canales)

A continuación encontrará la configuración de los comandos :

-   **Nombre** : Nombre de la orden
-   **Sub-tipo** : subtipo de equipo
-   **Evento** : nombre del evento configurado en IFTTT
-   **Valor** : valor para enviar a IFTTT, 3 distinciones posibles, dependiendo del subtipo, puede usar las etiquetas : \#color\#, \#slider\#, \#message\# y \#title\#
-   Configuración avanzada (ruedas pequeñas con muescas) : se utiliza para mostrar la configuración avanzada del comando (método de registro, widget, etc)
-   Probar : Se usa para probar el comando
-   Eliminar (firmar -) : permite eliminar el comando

# Creación de una cuenta IFTTT 

Cree una cuenta IFTTT si aún no lo ha hecho, vaya a [IFTTT](:https://ifttt.com) :

![ifttt1](./images/ifttt1.png)

Ingrese su dirección de correo electrónico, luego su nombre de usuario y haga que se cree :

![ifttt2](./images/ifttt2.PNG)

Una pequeña guía le explicará las posibilidades, una vez que haya terminado, haga clic en la esquina superior derecha de la búsqueda :

![ifttt3](./images/ifttt3.PNG)

Luego, en la búsqueda, escriba webhooks y haga clic en webhooks :

![ifttt4](./images/ifttt4.PNG)

Luego en conectar :

![ifttt5](./images/ifttt5.png)

Y ahí tienes que recoger tu llave :

![ifttt6](./images/ifttt6.png)

Esta clave debe copiarse en el campo "Clave" de su equipo bajo Jeedom

![ifttt11](./images/ifttt11.PNG)

# Creación de tu primer "Applet"

Nada podría ser más simple, en IFTTT haga clic en "Mis applets" y luego en "Nuevo applet"

![ifttt12](./images/ifttt12.png)

Luego haga clic en "Nuevo applet" :

![ifttt13](./images/ifttt13.PNG)

Haga clic en "esto" :

![ifttt14](./images/ifttt14.png)

Luego busque "Webhooks" y haga clic en él :

![ifttt15](./images/ifttt15.png)

Haga clic en "Recibir una solicitud web"

![ifttt16](./images/ifttt16.png)

Dé un nombre a su "evento", la atención debe corresponder al nombre del evento en el comando Jeedom, por lo tanto, debe ser memorizado y luego validar :

![ifttt17](./images/ifttt17.png)

Luego haga clic en eso :

![ifttt18](./images/ifttt18.png)

Luego verá, por ejemplo, enviaré una notificación en mi teléfono (primero debe instalar la aplicación IFTTT), así que hago clic en Notificaciones :

![ifttt19](./images/ifttt19.png)

Confirme haciendo clic en "Enviar una notificación" (puede cambiar según el canal) :

![ifttt20](./images/ifttt20.png)

Luego debe escribir el mensaje de la notificación, aquí hay etiquetas (ingrediente) posibles :

-   **{{EventName}}** : nombre del evento, aquí el clima
-   **{{Value1}}** : valor 1 enviado en el canal, esto se configura en el comando en Jeedom
-   **{{Value2}}** : valor 2 enviado en el canal, esto se configura en el comando en Jeedom
-   **{{Value3}}** : valor 3 enviado en el canal, esto se configura en el comando en Jeedom
-   **{{OccurredAt}}** : fecha de ocurrencia

Esto es lo que da aquí (quiero recibir la notificación del clima en mi casa), valide haciendo clic en "Crear acción" :

![ifttt21](./images/ifttt21.PNG)

Dé un nombre a su applet (receta) y valide haciendo clic en "Crear acción" :

![ifttt22](./images/ifttt22.PNG)

Aquí ha creado sus "applets" enumerados IFTTT :

![ifttt23](./images/ifttt23.PNG)

Sigue siendo más que crear el pedido en el lado de Jeedom, es bastante simple :

![ifttt24](./images/ifttt24.PNG)

Nada especial aquí, debe poner el nombre del evento IFTTT en Jeedom y luego poner los valores para pasar a IFTTT, aquí las condiciones climáticas en el valor del ingrediente1

> **Punta**
>
> En el lado de Jeedom, si solicita un subtipo de mensaje, por ejemplo, coloque la etiqueta \#message\# en uno o más campos de "Valor"". Entonces, en su escenario, el valor del mensaje se pasará a IFTTT. Lo mismo es posible con \#title\#, \#color\#, \#slider\#

# Envío de información de IFTTT a Jeedom 

También es posible hacer lo contrario, enviando información de IFTTT a Jeedom. Así es como, por ejemplo, enviar información cuando el teléfono ingresa a un área determinada. Lo primero que debe hacer es crear un nuevo applet :

![ifttt25](./images/ifttt25.png)

Luego haga clic en "esto" :

![ifttt26](./images/ifttt26.png)

Seleccione "Ubicación" :

![ifttt27](./images/ifttt27.png)

Elija su disparador (aquí lo tomaré al ingresar a una zona) :

![ifttt28](./images/ifttt28.png)

Marque su área y luego haga "Crear disparador" :

![ifttt29](./images/ifttt29.png)

Haga clic en "eso" :

![ifttt30](./images/ifttt30.png)

Busque "Webhooks" y haga clic en él :

![ifttt31](./images/ifttt31.png)

Haga clic en "Hacer una solicitud web" :

![ifttt32](./images/ifttt32.png)

En el lado de Jeedom, en su equipo IFTTT, cree un comando de información / otro tipo (o binario si solo quiere saber si está en el área), como este :

![ifttt33](./images/ifttt33.PNG)

Muy importante aquí : obtener la identificación del comando (aquí 5369).

Luego volvemos a IFTTT y en nuestros webhooks le daremos la url para llamar. Este es el paso más complicado, encuentra tu URL de acceso externo :

-   Está utilizando jeedom DNS, así que esto es : ``https://XXXXX.dns.jeedom.com/core/api/jeeApi.php?apikey=\#APIKEY\#&type=ifttt&id=\#IDCMD\#&value=\#VALEUR\#``. Atención, si tiene una dirección en / jeedom, debe recordar agregarla antes de / core
-   Tienes tu propio DNS, entonces la url tiene la forma ``http://\#VOTRE\_DNS\#/core/api/jeeApi.php?apikey=\#APIKEY\#&type=ifttt&id=\#IDCMD\#&value=\#VALEUR\#``. Atención, si tiene una dirección en / jeedom, debe recordar agregarla antes de / core

Recuerde reemplazar :

-   \#APIKEY\# : por su clave API JEEDOM (se puede encontrar en General → Administración → Configuración)
-   \#IDCMD\# : por la identificación de su pedido previamente creado
-   \#VALEUR\# : por el valor que desea dar a su pedido. Atención aquí los espacios deben ser reemplazados por% 20 (y es mejor evitar caracteres especiales), ej : Excluyendo% 20zone

Esto es lo que da :

![ifttt34](./images/ifttt34.png)

Recuerde poner el método en Get, luego haga clic en "Crear acción".

Dé un título a sus applets y luego haga clic en "Crear acción". Y listo, tan pronto como ingrese al área de Jeedom será notificado.

> **Importante**
>
> También debe hacer una receta para abandonar el área, de lo contrario, Jeedom no
> no se le notificará cuando salga del área

> **Nota**
>
> Para obtener la URL del webhook si tienes que ir a [aquí](https://ifttt.com/maker_webhooks) luego haga clic en la documentación
