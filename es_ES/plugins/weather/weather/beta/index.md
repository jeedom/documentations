# Complemento meteorológico

El complemento **Clima** le permite recuperar datos meteorológicos de una o más ciudades. La información proviene del sitio web **Openweathermap** que da acceso, entre otras cosas, a previsiones, información de salida y puesta del sol, temperatura, humedad, viento, etc...

Estos datos se actualizan cada 30 minutos.

>**INFORMACIÓN**
>
>OpenWeather proporciona una lista de información para las próximas 120 horas. Por lo tanto, dependiendo de la hora actual, solo conocemos parte de la información en D+4. Por lo tanto, esta predicción en D + 4 se refina para ser más precisa a medida que avanza el día actual. Por esta razón, cierta información, como la temperatura MÁX alcanzada en D + 4, solo puede tener sentido al final del día.

# Configuration

## Configuración del complemento

Este complemento no requiere ninguna configuración especial y simplemente debe activarse después de la instalación.

## Configuración del equipo

Se puede acceder al equipo meteorológico desde el menú **Complementos → Tiempo → Tiempo**.

>**INFORMACIÓN**
>
>El botón **+ Agregar** le permite agregar un nuevo equipo meteorológico.

Hacer clic en un dispositivo lo lleva directamente a su página de configuración :

- **Nombre del equipo** : Nombre del dispositivo meteorológico.
- **Objeto padre** : Indica el objeto padre al que pertenece el equipo.
- **Categoría** : Permite elegir la categoría del equipo.
- **Opciones** :
    - **Activar** : Permite activar el equipo.
    - **Visible** : Hace que el equipo sea visible.
    - **Pantalla móvil completa** : Marcar la casilla le permite mostrar toda la información meteorológica en los móviles.
    - **Modo imagen** : Marque la casilla para mostrar imágenes en lugar de iconos en el widget.

A continuación, deberá introducir las coordenadas GPS del lugar desde el que desea recuperar la información meteorológica :

- **Latitud** : Latitud del lugar cuyo clima desea recuperar *(bajo la forma XX.XXXXXXX)*.
- **Longitud** : Longitud del lugar cuyo clima desea recuperar *(bajo la forma XX.XXXXXXX)*.

Haciendo clic en la pestaña **Comandos**, encontramos la lista de todos los comandos disponibles así como la posibilidad de registrar los valores numéricos.

El comando **Número** da un código relacionado con la condición actual de la que puede encontrar más información [a esta dirección](https://openweathermap.org/weather-conditions).
