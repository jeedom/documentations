# Complemento Netatmo Weather

Plugin para recuperar información de estaciones meteorológicas Netatmo.

# Configuración del plugin

Una vez que se instala el complemento, debe ingresar la información de conexión de Netatmo :

![netatmoWeather2](./images/netatmoWeather2.png)

-   **ID del cliente** : su ID de cliente (consulte la sección de configuración)
-   **Client secret** : su cliente secreto (vea la sección de configuración)
-   **Nombre de usuario** : nombre de usuario de su cuenta netatmo
-   **Contraseña** : contraseña para su cuenta de Netatmo
-   **Sincronizar** : le permite sincronizar Jeedom con su cuenta de Netamo para descubrir automáticamente su equipo Netamo. Para hacer después de guardar los parámetros anteriores.

# Recuperando información de conexión

Pour intégrer votre station, vous devez posséder un client\_id et unclient\_secret généré sur le site <http://dev.netatmo.com>.

Pour créer un compte > https://auth.netatmo.com/fr-fr/access/signup?next_url=https%3A%2F%2Fdev.netatmo.com%2Fnegocio-exhibición

Una vez que haga clic en Inicio :

![netatmoWeather10](./images/netatmoWeather10.png)

Luego en "crear una aplicación"

![netatmoWeather11](./images/netatmoWeather11.png)

Identifícate con tu correo electrónico y contraseña

![netatmoWeather12](./images/netatmoWeather12.png)

Rellene los campos "Nombre" y "Descripción" (lo que escriba no importa) :

![netatmoWeather13](./images/netatmoWeather13.png)

Luego, en la parte inferior de la página, marque la casilla "Acepto los términos de uso" y luego haga clic en "Crear"

![netatmoWeather14](./images/netatmoWeather14.png)

Recupere la información de "Id. Del cliente" y "Secreto del cliente" y cópielos en la parte de configuración del complemento en Jeedom (consulte el capítulo anterior)

![netatmoWeather15](./images/netatmoWeather15.png)

> **Importante**
>
> Tenga en cuenta que la URL de devolución de llamada debe ser "Ninguna", de lo contrario no funcionará.

# Configuración del equipo

La configuración del equipo Netatmo es accesible desde el menuplugin :

![netatmoWeather3](./images/netatmoWeather3.png)

Así es como se ve la página del complemento Netatmo (aquí con ya 2 equipos) :

![netatmoWeather4](./images/netatmoWeather4.png)

> **Punta**
>
> Como en muchos lugares de Jeedom, al colocar el mouse en el extremo izquierdo aparece un menú de acceso rápido (desde su perfil siempre puede dejarlo visible).

Una vez que haces clic en un equipo, obtienes :

![netatmoWeather5](./images/netatmoWeather5.png)

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del dispositivo Netatmo** : nombre de su equipo Netatmo
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo
-   **Activar** : activa su equipo
-   **Visible** : lo hace visible en el tablero
-   **Identificador** : identificador de equipo único
-   **Tipo** : tipo de su equipo (estación, sonda interior, sonda exterior)

A continuación encontrará la lista de pedidos :

-   el nombre que se muestra en el tablero
-   Guardar historial : permite historizar los datos
-   Configuración avanzada (ruedas pequeñas con muescas) : muestra la configuración avanzada del comando (método de registro, widget, etc.))
-   Probar : Se usa para probar el comando

# Widget

Aquí está el widget estándar para una estación en el tablero :

![netatmoWeather6](./images/netatmoWeather6.png)

Y en el móvil :

![netatmoWeather7](./images/netatmoWeather7.png)

# FAQ

>**¿Cuál es la frecuencia de actualización? ?**
>
>El sistema recupera información cada 15 minutos.

>**Tengo mis sondas pero no hay ningún valor que regrese**
>
>Ocurre cuando hay un problema en la actualización de módulos o Netatmo. La forma más fácil es agregar / quitar un módulo y seguir el proceso forzará una actualización de todo y debería corregir el problema.
