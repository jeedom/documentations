# Complemento de seguridad Neatmo

Complemento para recuperar información del equipo de seguridad de Netatmo

# Configuración del plugin

Una vez que se instala el complemento, debe ingresar la información de conexión de Netatmo :

-   **ID del cliente** : su ID de cliente (consulte la sección de configuración)
-   **Client secret** : su cliente secreto (vea la sección de configuración)
-   **Nombre de usuario** : nombre de usuario de su cuenta netatmo
-   **Contraseña** : contraseña para su cuenta de Netatmo
-   **Sincronizar** : le permite sincronizar Jeedom con su cuenta de Netamo para descubrir automáticamente su equipo Netamo. Un
    hacer después de guardar la configuración anterior.

# Recuperando información de conexión

Pour intégrer votre Welcome, vous devez posséder un client\_id et unclient\_secret généré sur le site <http://dev.netatmo.com>.

Una vez que haga clic en Inicio :

![netatmoWelcome10](../images/netatmoWelcome10.png)

Luego en "crear una aplicación"

![netatmoWelcome11](../images/netatmoWelcome11.png)

Identifícate con tu correo electrónico y contraseña

![netatmoWelcome12](../images/netatmoWelcome12.png)

Rellene los campos "Nombre" y "Descripción" (lo que escriba no importa) :

![netatmoWelcome13](../images/netatmoWelcome13.png)

Luego, en la parte inferior de la página, marque la casilla "Acepto los términos de uso" y luego haga clic en "Crear"

![netatmoWelcome14](../images/netatmoWelcome14.png)

Recupere la información "ID de cliente" y "Cliente secreto" y cópielos en la parte de configuración del complemento en Jeedom (consulte el capítulo anterior)

![netatmoWelcome15](../images/netatmoWelcome15.png)

# Configuración del equipo

Se puede acceder a la configuración de los dispositivos Netatmo desde el menú del complemento -> Seguridad -> Seguridad Netatmo

Una vez que haga clic en un dispositivo, encontrará aquí toda la configuración de su equipo :

-   **Nombre del dispositivo Netatmo** : nombre de su equipo Netatmo
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo
-   **Activar** : activa su equipo
-   **Visible** : lo hace visible en el tablero

A continuación encontrará la lista de pedidos :

-   el nombre del comando
-   Guardar historial : permite historizar los datos
-   Configuración avanzada (ruedas pequeñas con muescas) : Muestra
    configuración avanzada del comando (método de registro, widget, etc.))
-   Probar : Se usa para probar el comando

# FAQ

>**No tengo los eventos en tiempo real pero después de 15 minutos**
>
>Para tener un retorno de los eventos en tiempo real (activación de alarma de incendio, persona que pasa frente a la cámara, etc.) DEBE ABSOLUTAMENTE que su libertad tenga una URL externa en https con un certificado válido en el puerto 443 (y solo este puerto el). Es una obligación impuesta por netatmo

>**No puedo desactivar / activar la vigilancia**
>
>Atención, si coloca un código, esta función no es posible mediante el complemento jeedom

>**Tengo un error de tipo "Valor de cadena incorrecto: '\ xF0 \ x9F \ x98 \ x98 "al sincronizar**
>
>Compruebe que no tiene un carácter no estándar (tipo de carita sonriente) en el nombre de una cámara o una persona
