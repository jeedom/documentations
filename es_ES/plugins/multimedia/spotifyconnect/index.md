# Complemento de Spotify Connect

Este complemento le permite recuperar el estado de los reproductores de Spotify Connect y controlarlos a través de Jeedom.

# Configuration

## Configuración del complemento

Como cualquier complemento de Jeedom, el complemento **Spotify Connect** debe activarse después de la instalación.

### Descubrimiento de lectores

Los reproductores de Spotify Connect se descubren automáticamente cuando están en uso. Por lo tanto, es suficiente iniciar una reproducción multimedia en el equipo de Spotify Connect y esperar 30 segundos para ver que el reproductor aparece automáticamente en Jeedom.

También puede hacer clic en el botón **Sincronizar la lista de lectores** para forzar este descubrimiento.

### Frecuencia de sondeo

Para ahorrar un máximo de recursos, el complemento utiliza 2 frecuencias de actualización diferentes según el estado del equipo de Spotify Connect :

- **No hay equipo jugando** : el complemento consultará los servidores de Spotify en el **Frecuencia de actualización** estándar 20 segundos por defecto.
- **Se está leyendo al menos un dispositivo** : el complemento luego consultará los servidores de Spotify con una frecuencia más alta (**Frecuencia de actualización durante la reproducción** establecido en 5 segundos por defecto).

>**IMPORTANTE**
>
>Le recomendamos que no modifique esta configuración a riesgo de que su cuenta de Spotify se bloquee durante varias decenas de minutos debido a una frecuencia de sondeo demasiado alta..

### Vincular cuentas de usuario

El complemento le permite conectarse a 2 cuentas de Spotify Connect separadas.

Para hacerlo, todo lo que tiene que hacer es marcar la casilla para activar el usuario y luego guardar. Luego haga clic en el botón **Enlace a Jeedom** en cada usuario para establecer la conexión entre Spotify y Jeedom.

### Caso especial de Chromecast

Normalmente no es posible iniciar una reproducción en un dispositivo Spotify Connect desde el complemento *(esta es una limitación de Spotify)* excepto para equipos de tipo **Chromecast**.

Spotify no permite que las aplicaciones de terceros se reproduzcan en un dispositivo Chromecast, debe seguir este procedimiento para recuperar las 2 cookies necesarias *(con el navegador Google Chrome)* :

- Cita [a esta dirección](https://open.spotify.com/) e inicie sesión si es necesario,
- Presione la tecla F12 en el teclado y luego diríjase a la pestaña **Solicitud** en la ventana que se abrió,
- Comprueba que estás en **Storage → Cookies → https://open.spotify.com** en el menú de la izquierda,
- Buscar a través del campo **Filtro de búsqueda** mientras escribe ``sp_``,
- Finalmente recupere los valores de las cookies ``sp_key`` y ``sp_dc`` e introdúzcalos en los campos previstos a tal efecto en la configuración del plugin.

>**IMPORTANTE**
>
>Estas cookies son específicas de cada usuario. Por tanto, será necesario repetir la operación para cada uno de ellos conectándose cada vez a la cuenta de Spotify correspondiente.

## Configuración del equipo

Los equipos **Spotify Connect** no tienen parámetros específicos excepto para equipos del tipo **Chromecast** que, recuerde, son los únicos capaces de controlar la reproducción de un medio.

Para este equipo, por lo tanto, será necesario ingresar su dirección IP después de asegurarse de haber ingresado correctamente las cookies esperadas en la configuración del complemento (ver párrafo **Caso especial de Chromecast**).

>**IMPORTANTE**
>
>El equipo Chromecast debe estar en la misma red local que Jeedom.
