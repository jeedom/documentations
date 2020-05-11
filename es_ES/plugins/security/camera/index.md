# Plugin de cámara

Complemento para crear y administrar cámaras wifi (visualización y grabación)

# Configuración del plugin

Después de instalar el complemento, solo necesita activarlo, sin embargo, hay algunos parámetros de configuración avanzados :

-   **Ruta de registro** : indica la ruta donde Jeedom debe almacenar las imágenes que captura de sus cámaras (no se recomienda tocarlo). Si su ruta no está en la ruta de instalación de Jeedom, entonces no podrá ver las capturas en Jeedom.
-   **Tamaño máximo de carpeta de grabación (MB)** : indica el tamaño máximo autorizado para la carpeta donde se guardan las capturas (no se recomienda tocarlo). Si se alcanza esta cuota, Jeedom eliminará las capturas más antiguas.
-   **El complemento de la cámara debe reaccionar a las interacciones** : palabras clave / frases a las que reaccionará el complemento a través de las interacciones de Jeedom.
-   **Panel** : Le permite visualizar el panel (Menú de inicio -&gt; Cámara) y tener una vista de todas sus cámaras (ver más abajo). No olvide activar el panel en la configuración del complemento para acceder a él más tarde.


# Configuración del equipo

## Equipement

Aquí tienes la información principal de tu cámara :

-   **Nombre del equipo de la cámara** : nombre de su equipo de cámara
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo
-   **Activar** : activa su equipo
-   **Visible** : lo hace visible en el tablero
-   **IP** : la dirección IP local de su cámara
-   **Puerto** : el puerto para el que se conecta la cámara
-   **Protocolo** : El protocolo de comunicación de su cámara (http o https)
-   **Nombre de usuario** : nombre de usuario para iniciar sesión en la cámara (si es necesario). Tenga en cuenta que el complemento no admite caracteres especiales (por lo tanto, debe limitarse a números, letras minúsculas / mayúsculas)
-   **Contraseña** : contraseña para conectarse a la cámara (si es necesario).Tenga en cuenta que el complemento no admite caracteres especiales (por lo tanto, debe limitarse a números, letras minúsculas / mayúsculas)
-   **URL de instantánea** : URL de instantánea de cámara. Cambiar según las cámaras. Tenga cuidado de no poner una url de flujo bajo pena de estrellar Jeedom. Puedes agregar las etiquetas \#username\# y \#password\#, que será reemplazado automáticamente por el nombre de usuario y la contraseña al usar este comando
-   **URL del feed** : url de flujo de video de la cámara rtsp://#username#:#password#@#ip#:554 / videoMain (ejemplo para cámaras Foscam)
-   **Modelo** : permite elegir el modelo de cámara. Tenga cuidado si cambia esto, sobrescribirá su configuración

## Images

Esta parte le permite configurar la calidad de la imagen. De hecho, Jeedom disminuye el tamaño de la imagen o la compresa antes de enviarla a su navegador. Esto permite que las imágenes sean más fluidas (porque son más claras). También es en esta parte que puede configurar el número de fotogramas por segundo para mostrar. Todos los ajustes están disponibles en : móvil / escritorio y miniatura / normal.

-   Refresco (s) : retraso en segundos entre la visualización de 2 imágenes (aquí puede poner números menores que 1)
-   Compresión (%) : cuanto más bajo es, menos se comprime la imagen, al 100% no se realiza compresión
-   Tamaño (% - 0 : automático) : cuanto mayor sea el%, más cerca estamos del tamaño original de la imagen. Al 100%, no se cambia el tamaño de la imagen

> **Nota**
>
> Si pones una compresión del 0% y un tamaño del 100%, Jeedom no tocará la imagen en modo normal. Esto no es válido en modo miniatura donde hay un tamaño máximo de imagen de 360px.

## Capture

-   Duración máxima de una grabación : duración máxima de grabaciones
-   Siempre haz un video : obliga a Jeedom a convertir siempre las grabaciones de video antes de grabar
-   Número de fotogramas por segundo del video : cantidad de cuadros por segundo de videos
-   Umbral de detección de movimiento (0-100) : umbral de detección de movimiento (es recomendable establecer 2). Cuanto mayor sea el valor, mayor será la sensibilidad.
-   Eliminar todas las capturas de cámara : eliminar todas las capturas y grabaciones de la cámara

## Alimentation

-   Comando ON : Control de potencia de la cámara
-   Comando OFF : Control para cortar la alimentación de la cámara

## Commandes

-   ID de pedido (usar con comandos de tipo de información para, por ejemplo, llevar la información de movimiento de la cámara a Jeedom a través de la API, ver más abajo)
-   Nombre del comando con la posibilidad de poner un icono en su lugar (para eliminarlo debe hacer doble clic en el icono en cuestión)
-   Tipo de orden y subtipo
-   Solicitud para enviar a la cámara para realizar una acción (cambiar al modo nocturno, ptz, etc.). Puedes usar las etiquetas \#username\# y \#password\#, que será reemplazado automáticamente por el nombre de usuario y la contraseña al usar este comando
-   Comando de parada : para cámaras PTZ, a menudo hay un comando que detiene el movimiento, aquí es donde debe especificarse
-   Mostrar : permite mostrar el pedido o no en el tablero
-   Configuración avanzada (ruedas con muescas pequeñas) : muestra la configuración avanzada del comando (método de registro, widget, etc.)
-   Probar : Se usa para probar el comando
-   Eliminar (firmar -) : permite eliminar el comando

# El widget

Encontramos en esta la imagen de la cámara, los comandos definidos en la configuración, el comando para tomar una captura, el comando para comenzar a tomar múltiples capturas de imagen y el comando para explorar estas capturas.

> **Punta**
>
> En el tablero y el panel, es posible cambiar el tamaño del widget para adaptarlo a sus necesidades

Haga clic en la imagen para mostrarla en una ventana y en un formato más grande.

Un clic en el último comando para explorar las capturas de pantalla mostrará este.

Encontrarás aquí todas las capturas organizadas por día y luego por fecha, puedes para cada una de ellas :

-   verlo más grande haciendo clic en la imagen
-   descárgalo
-   bórralo

En dispositivos móviles, el widget es un poco diferente : si haces clic en la imagen de la cámara, obtienes esta más grande con los posibles comandos.

# Los paneles

El complemento de la cámara también proporciona un panel que le permite ver todas sus cámaras a la vez, es accesible desde Inicio → Cámara.

> **Nota**
>
> Para tenerlo, debes activarlo en la página de configuración del complemento

Por supuesto, también está disponible en dispositivos móviles con Plugin → Cámara :

# Guardar y enviar captura

Este comando algo específico permite que la captura lo envíe (compatible con el complemento de holgura, correo y transferencia).

La configuración es bastante simple, se llama acción de envío de captura (llamada &quot;Grabación&quot;) en un escenario. En la parte del título pasas las opciones.

De forma predeterminada, simplemente coloque el número de capturas que desea en el campo &quot;número de capturas u opciones&quot;, pero puede ir más allá con las opciones (consulte los detalles a continuación &quot;opciones avanzadas de capturas&quot;). En la parte del mensaje, solo tiene que completar el orden del complemento (actualmente flojo, correo electrónico o transferencia) que envía las capturas. Puedes poner varios separados por &amp;&amp;.

## Opciones de captura avanzadas

-   ``nbSnap`` : número de capturas, si no se especifica, las capturas se realizan hasta una solicitud para detener la grabación o detener la cámara
-   ``delay`` : retraso entre 2 capturas, si no se especifica, el retraso es de 1 s
-   ``wait`` : tiempo de espera antes de comenzar a atrapar, si no se especifica, no se realiza ningún envío
-   ``sendPacket`` : cantidad de capturas que desencadenan el envío de un paquete de captura, si no se especifica, las capturas solo se enviarán al final
-   ``detectMove=1`` : enviar capturas solo si hay un cambio por encima del umbral de detección (ver configuración de la cámara)
-   ``movie=1`` : Una vez finalizada la grabación, las imágenes se convierten en video
-   ``sendFirstSnap=1`` : enviar la primera captura de la grabación

> **Ejemplos**
>
> nbSnap = 3 delay = 5 ==&gt; envía 3 capturas realizadas a intervalos de 5 segundos (envío activado a través del escenario) película = 1 sendFirstSnap = 1 detectMove = 1 ==&gt; envía la primera captura, luego envía una captura a cada detección de movimiento y grabar un video hasta el comando &quot;Detener grabación&quot; para insertar en el escenario. La película se almacenará en tu Jeedom.

# Enviar detección de movimiento a Jeedom

Si tiene una cámara que tiene detección de movimiento y desea transmitirla a Jeedom, esta es la url para poner en su cámara :

``http://#IP_JEEDOM#/core/api/jeeApi.php?apikey=#APIKEY#&type=camera&id=#ID#&value=#value#``

Obviamente, antes de crear un comando de tipo de información en su cámara

# FAQ

>**Donde estan los registros ?**
>
>Los registros se encuentran por defecto en plugins / camera / data / records /*ID\_CAM*, tenga cuidado, esto puede variar si le pide a Jeedom que los guarde en otro lugar

>**Las adicciones no logran asentarse ?**
>
>En ssh o en administración -&gt; OS / DB -&gt; Sistema hacer : dpkg --configure -a

>**¿Cuáles son las condiciones para que mi cámara sea compatible con Jeedom (si no está en la lista de compatibilidad) ?**
>
> La única condición es que la cámara tenga una URL que envíe una imagen (bueno, una imagen, no una transmisión de video)
