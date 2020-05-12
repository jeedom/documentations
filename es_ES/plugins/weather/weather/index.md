# Plugin meteorológico

El complemento Weather le permite recuperar datos meteorológicos para una o más ciudades. Entre otras cosas, proporciona información sobre el amanecer y el atardecer, la temperatura, el pronóstico, el viento, etc. La información recuperada proviene del sitio web openweathermap.

# Configuración del plugin

Después de instalar el complemento, debe activarlo y luego ingresar su clave API.

Para obtener su clave API, debe ir [aquí](https://home.openweathermap.org), cree una cuenta y luego copie su clave API en el área provista en la página de configuración del complemento.

> **Importante**
>
> Debe esperar algunas horas hasta que la clave esté activa antes de poder recuperar información

# Configuración del equipo

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del dispositivo meteorológico** : nombre de su equipo meteorológico
-   **Activar** : activa su equipo
-   **Visible** : hace que su equipo sea visible en el tablero
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo
-   **Ciudad** : Debe poner el nombre de su ciudad seguido del código del país, ej : Paris, fr
-   **Visualización completa en móvil** : muestra toda la información meteorológica o no en el móvil

A continuación encontrará todos los comandos disponibles, así como la posibilidad de historizar o no los valores numéricos. El código (número) según las condiciones está disponible [aquí](https://openweathermap.org/weather-conditions)

Los datos meteorológicos se actualizan cada 30 minutos.

> **Punta**
>
> Te aconsejamos que vayas [aquí](https://openweathermap.org/find?) para verificar si su ciudad, pueblo es conocido o no. En ese caso, tendrá que encontrar la ciudad conocida más cercana e ingresarla en la configuración de su equipo para poder recuperar la información.

> **Punta**
>
> Une fois la recherche de votre ville réussie le site openweathermap vous montre les informations disponibles et vous devriez avoir dans votre navigateur une url du type <https://openweathermap.org/city/2988507>. Este número al final de la url también se puede ingresar en el equipo Jeedom en lugar de París, por ejemplo, fr

>**Importante**
>OpenWeather proporciona una lista de información para las próximas 120 horas; por lo tanto, según la hora actual, solo conocemos parte de la información sobre D + 4. Por lo tanto, esta predicción en D + 4 se refina para ser más precisa a medida que avanza el día actual. Por esta razón, cierta información, como la temperatura MÁX alcanzada en D + 4, solo puede tener sentido al final del día.
