# Edisio

Plugin para usar el protocolo Edisio con Jeedom

# Configuration

El complemento edisio le permite comunicarse con todos los periféricos compatibles con el módulo edisio USB.

## Configuración del plugin

Después de descargar el complemento, solo necesita activarlo y configurar el puerto en automático. Después de salvar al demonio debería lanzar. El complemento ya está configurado de manera predeterminada; no tienes que hacer nada más. Sin embargo, puede modificar esta configuración. Aquí está el detalle (algunos parámetros solo pueden ser visibles en modo experto) :

![edisio1](../images/edisio1.JPG)

-   **Dependencias** : Esta parte le proporciona el estado de las dependencias. Si no están bien, puede iniciarlas manualmente o esperar 5 minutos, Jeedom las iniciará por sí mismo.
-   **Demonio** : Esta parte le da el estado del demonio (tanto local como remoto), si no está bien, puede iniciarlo a mano o esperar 5 minutos, Jeedom lo iniciará solo.
-   **Configuración** : Esta parte le permite configurar los parámetros generales del complemento.
    -   *Prohibir las siguientes identificaciones* : permite dar una lista de identificadores de edición a Jeedom para que no cree el equipo correspondiente. Los identificadores deben estar separados por espacios. Ejemplo : "1356AD87 DB54AF".
-   **Demonio local** : parámetros de configuración locales (o remotos, según el título) del demonio.
    -   *Puerto EDISIO* : el puerto USB en el que está conectada su interfaz edisio.
        > **Punta**
        >
        > Si no sabe qué puerto USB se utiliza, simplemente puede indicar "Auto".
    -   *Puerto de socket interno (modificación peligrosa, debe ser el mismo valor en todos los Jeedoms deportados edisio)* : permite modificar el puerto de comunicación interna del demonio.

> **Importante**
>
> Cambie solo si sabe lo que está haciendo.

Para iniciar el demonio en depuración es suficiente a nivel de la configuración de los registros del complemento para poner en depuración, guardar y volver a iniciar el demonio.

> **Importante**
>
> En este modo, el demonio es muy hablador. Una vez que finalice la depuración, no olvide hacer clic en "Reiniciar" para salir del modo de depuración !!

## Configuración del equipo

Se puede acceder a la configuración del equipo edisio desde el menú de complementos :

![edisio10](../images/edisio10.JPG)

Así es como se ve la página del complemento edisio (aquí con 4 dispositivos ya) :

![edisio2](../images/edisio2.JPG)

> **Punta**
>
> Como en muchos lugares de Jeedom, al colocar el mouse en el extremo izquierdo aparece un menú de acceso rápido (desde tus perfiles siempre puedes dejarlo visible)

Lo encuentras aqui :

-   un botón para crear equipos manualmente
-   un botón para cambiar a inclusión
-   un botón para mostrar la configuración del complemento
-   un botón que le brinda el estado de salud de todos sus equipos Edisio
-   finalmente a continuación encontrará la lista de su equipo

Una vez que haces clic en uno de ellos, obtienes :

![edisio3](../images/edisio3.JPG)

Aquí encontrarás toda la configuración de tu equipo :

-   Nombre del dispositivo EDISIO : nombre de su equipo edisio
-   Identificación : La identificación de su sonda (se debe cambiar solo con pleno conocimiento de los hechos))
-   Activar : activa su equipo
-   Visible : lo hace visible en el tablero
-   Objeto padre : indica el objeto padre al que pertenece el equipo
-   Categoría : categorías de equipos (puede pertenecer a varias categorías)
-   No comprobar la batería : le dice a Jeedom que no le avise si el equipo envía un marco de batería baja (algunos módulos no manejan esta información correctamente y generan alertas falsas)
-   Tiempo máximo permitido entre 2 mensajes (min) : El tiempo máximo permitido entre 2 mensajes antes de que Jeedom declare el equipo como tiempo de espera". Atención, este parámetro requiere haber configurado la opción "Forzar la repetición de mensajes cada (min)" y debe ser mayor que este valor
-   Comentario : le permite poner comentarios en el equipo (ej : batería cambiada en XX / XX /XXXX)
-   Dispositivos : le permite definir el modelo de su equipo (para ser configurado solo para la creación manual de equipos, en Jeedom automático configura este campo solo)
-   Creación : le da la fecha de creación del equipo
-   Comunicación : le da la fecha de la última comunicación con el equipo (por ejemplo, puede estar vacío en el caso de un enchufe))
-   Batería : nivel de batería del equipo
-   Estado : estado del equipo (puede ser tiempo de espera, por ejemplo)

A continuación encontrará la lista de pedidos :

-   el nombre que se muestra en el tablero
-   tipo y subtipo
-   la clave de información si es una información, o el código hexadecimal para enviar cuando es una acción. Las configuraciones permiten que estos campos se completen automáticamente (debe crear el equipo, elegir la configuración y luego guardar)
-   "Valor de retroalimentación de estado "y" Duración antes de la retroalimentación de estado" : permite indicar a Jeedom que después de un cambio en la información, su valor debe volver a Y, X min después del cambio. Ejemplo : en el caso de un detector de presencia que emite solo durante una detección de presencia, es útil establecer, por ejemplo, 0 en valor y 4 en duración, de modo que 4 minutos después de una detección de movimiento (y s ' no ha habido noticias desde entonces) Jeedom restablece el valor de la información a 0 (no se detecta más movimiento)
-   Guardar historial : permite historizar los datos
-   Mostrar : permite mostrar los datos en el tablero
-   Evento : en el caso de edisio, esta casilla siempre debe estar marcada porque no puede consultar un módulo edisio
-   Unidad : unidad de datos (puede estar vacía)
-   min / max : límites de datos (pueden estar vacíos)
-   Configuración avanzada (ruedas pequeñas con muescas) : muestra la configuración avanzada del comando (método de registro, widget, etc.))
-   Probar : Se usa para probar el comando
-   Eliminar (firmar -) : permite eliminar el comando

## Operación en equipos edisio

En la parte superior de la página de configuración de su equipo, tiene 3 botones que le permiten realizar ciertas opciones :

-   Duplicar : equipo duplicado
-   configurar (ruedas dentadas pequeñas) : mismo principio que para los comandos, permite una configuración avanzada del equipo

## Inclusión de equipos edisio

Agregar el equipo Edisio es muy simple, solo tiene que pasar al modo de inclusión y esperar a que el equipo envíe un mensaje, cuando ese sea el caso, Jeedom le dirá que ha incluido un nuevo equipo y lo creará. automáticamente.

# Lista de módulos compatibles

Encontrará la lista de módulos compatibles [aquí](https://doc.jeedom.com/es_ES/edisio/equipement.compatible)
