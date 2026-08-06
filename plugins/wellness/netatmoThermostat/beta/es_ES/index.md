# Plugin de termostato Netatmo

# Description

Complemento para controlar termostatos Netatmo.

# Configuración del plugin

Una vez que el complemento está instalado, debe ingresar su información de conexión Netatmo :

-   **ID del cliente** : su ID de cliente *(ver parte de configuración)*.
-   **Client secret** : tu cliente secreto *(ver parte de configuración)*.
-   **Nombre de usuario** : nombre de usuario de su cuenta netatmo.
-   **Contraseña** : contraseña para su cuenta de Netatmo.
-   **Usa un diseño alternativo** : permite utilizar otro diseño *(ver parte del widget)*.
-   **Sincronizar** : le permite sincronizar Jeedom con su cuenta de Netamo para descubrir automáticamente su equipo Netamo. Para hacer después de guardar la configuración anterior.

# Recuperando información de conexión

Pour intégrer votre station, vous devez posséder un client\_id et un client\_secret généré sur le site <http://dev.netatmo.com>.

Pour créer un compte > https://auth.netatmo.com/fr-fr/access/signup?next_url=https%3A%2F%2Fdev.netatmo.com%2Fnegocio-exhibición

Una vez en él, haga clic en "INICIAR" :

![netatmoWeather10](../images/netatmoWeather10.png)

Luego en "crear una aplicación" :

![netatmoWeather11](../images/netatmoWeather11.png)

Identificarse con su correo electrónico y contraseña :

![netatmoWeather12](../images/netatmoWeather12.png)

Complete los campos "Nombre" y "Descripción" (no importa lo que ponga, no importa) :

![netatmoWeather13](../images/netatmoWeather13.png)

Luego, en la parte inferior de la página, marque la casilla "Acepto los términos de uso" y luego haga clic en "Crear" :

![netatmoWeather14](../images/netatmoWeather14.png)

Recupere la información de "Identificación del cliente" y "Secreto del cliente" y cópielos en la parte de configuración del complemento en Jeedom *(ver capítulo anterior)*.

![netatmoWeather15](../images/netatmoWeather15.png)

# Configuración del equipo

Se puede acceder a la configuración del equipo Netatmo desde el menú de complementos.

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del dispositivo Netatmo** : nombre de su equipo Netatmo.
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo.
-   **Activar** : activa su equipo.
-   **Visible** : lo hace visible en el tablero.
-   **Identificador** : identificador de equipo único.
-   **Tipo** : tipo de su equipo (estación, sensor interior, sensor exterior, etc).

A continuación encontrará la lista de pedidos :

-   el nombre que se muestra en el tablero
-   Guardar historial : permite historizar los datos
-   Configuración avanzada (ruedas pequeñas con muescas) : se utiliza para mostrar la configuración avanzada del comando (método de registro, widget, etc)
-   Probar : Se usa para probar el comando

> **CONSEJO**
>
> Al cambiar el modo del widget, es recomendable hacer clic en sincronizar para ver el resultado inmediatamente.

# FAQ

>**¿Cuál es la frecuencia de actualización? ?**
>
>El sistema recupera información cada 15 minutos.
