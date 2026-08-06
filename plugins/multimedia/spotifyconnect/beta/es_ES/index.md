# Complemento de Spotify Connect

Este complemento le permite recuperar el estado de los reproductores de Spotify Connect y controlarlos a través de Jeedom.

# Configuration

## Configuración del complemento

Como cualquier complemento de Jeedom, el complemento **Spotify Connect** debe activarse después de la instalación. Una vez activado debes vincular jeedom con tu cuenta de Spotify para hacer esto debes ir a complemento -> administración de complementos -> Spotify y luego hacer clic en el botón para vincular con una cuenta de usuario.

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
>Esta función no está autorizada por Spotify ni documentada por Google, por lo que no puede ser admitida oficialmente por Jeedom SAS. Funciona para menos del 50% de los usuarios (depende de un parámetro externo que lamentablemente no podemos definir)).

>**IMPORTANTE**
>
>Estas cookies son específicas de cada usuario. Por tanto, será necesario repetir la operación para cada uno de ellos conectándose cada vez a la cuenta de Spotify correspondiente.

## Configuración del equipo

Los equipos **Spotify Connect** no tienen parámetros específicos excepto para equipos del tipo **Chromecast** que, recuerde, son los únicos capaces de controlar la reproducción de un medio.

Para este equipo, por lo tanto, será necesario ingresar su dirección IP después de asegurarse de haber ingresado correctamente las cookies esperadas en la configuración del complemento (ver párrafo **Caso especial de Chromecast**).

El equipo tiene dos controles para reproducir listas de reproducción : "reproducir lista de reproducción "y" reproducir URI" :

- Play Playlist permite que el equipo reproduzca una lista de reproducción de su biblioteca personal. El pedido consta de dos partes : el título de la lista de reproducción deseada (coloque el nombre exacto allí sin comillas) y la opción (solo se tiene en cuenta el aleatorio para reproducir las canciones de forma aleatoria).
- Play Playlist URI permite que el equipo reproduzca una lista de reproducción, un artista o una canción disponible en Spotify gracias a su URI (un código único vinculado a este elemento). Para encontrarlo debes en la interfaz web de Spotify hacer clic derecho en el elemento deseado (pista, artista, lista de reproducción ...), seleccionar "compartir", mantener presionada la tecla Ctrl (Windows) o Alt (MAC) y luego "Copiar URI de Spotify". Pegue la línea obtenida en el cuadro URI del comando.

>**IMPORTANTE**
>
>El equipo Chromecast debe estar en la misma red local que Jeedom.
