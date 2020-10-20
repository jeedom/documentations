# Complemento Philips Hue

Complemento para integrarse en el ecosistema Philips Hue (puede administrar hasta 2 puentes simultáneamente).

# Configuración del plugin

Después de descargar el complemento, deberá ingresar la dirección IP de su (s) puente (s) hue.

# Configuración del equipo

> **Nota**
>
> Siempre tendrá el equipo "Todas las lámparas" que realmente corresponde al grupo 0 que existe todo el tiempo

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo de tono** : nombre de su equipo Hue,
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo,
-   **Categoría** : categorías de equipos (puede pertenecer a varias categorías),
-   **Activar** : activa su equipo,
-   **Visible** : hace que su equipo sea visible en el tablero,
-   **Puente** : indica el puente al que está conectada la lámpara
-   **Siempre en** : dile a libertad que nunca marque la lámpara como inalcanzable

A continuación encontrará la lista de pedidos :

-   **Nombre** : el nombre que se muestra en el tablero,
-   **Configuración avanzada** : muestra la ventana de configuración avanzada del comando,
-   **Opciones** : le permite mostrar u ocultar ciertos comandos y / o registrarlos
-   **Probar** : Se usa para probar el comando

# Grupo 0 (todas las lámparas)

El grupo 0 es un poco especial porque no puede eliminarse ni modificarse, necesariamente controla todas las lámparas y también es el que lleva las escenas.

De hecho, puedes hacer "escenas" en Philips Hue. Estos deben hacerse absolutamente desde la aplicación móvil (imposible hacerlos en Jeedom). Y después de la adición de una escena, debe sincronizar absolutamente Jeedom con la correcta (simplemente guardando la configuración del complemento)

# Tansition

Comando un poco particular que debe usarse en un escenario, permite decir que la transición entre el estado actual y el siguiente comando debe durar X segundos.

Por ejemplo, en la mañana es posible que desee simular el amanecer en 3 minutos. En su escenario, por lo tanto, solo tiene que llamar al comando de transición y en el conjunto de parámetros 180, luego llamar al comando de color hacia el color deseado.

# Animation

Las animaciones son secuencias de transición, actualmente hay :

-   amanecer : para simular un amanecer. Puede tomar como parámetro :
    -   duración : para definir la duración, por defecto 720s, por ejemplo, durante 5 minutos tienes que poner : duration=300
-   puesta de sol : para simular una puesta de sol. Puede tomar como parámetro :
    -   duración : para definir la duración, por defecto 720s, por ejemplo, durante 5 minutos tienes que poner : duration=300

# Botón de control remoto

Aquí está la lista de códigos para los botones :

- 1002 para el botón de encendido
- 2002 para el botón de aumento
- 3002 para el botón minimizar
- 4002 para el botón de apagado

Lo mismo con XXX0 para la tecla presionada, XXX1 para la tecla mantenida y XXX2 para la tecla liberada.

Aquí están las secuencias para el botón On por ejemplo :

- Prensa corta : Cuando lo presionamos vamos a 1000 y cuando lo soltamos vamos a 1002
- Pulsación larga : Durante la prensa pasamos 1000, durante la prensa pasamos 1001, cuando lanzamos pasamos 1002

# FAQ

> **Tengo la impresión de que hay una diferencia en cierto color entre lo que pido y el color de la bombilla.**
>
> Parece que la cuadrícula de color de las bombillas tiene un desplazamiento, estamos buscando cómo corregir

> **¿Cuál es la frecuencia de actualización? ?**
>
> El sistema recupera información cada 2 segundos.

> **Mi equipo (lámpara / interruptor ...) no es reconocido por el complemento, cómo hacerlo ?**
>
> Hay que :
> - escríbanos el equipo que desea agregar con una foto y sus posibilidades; envíenos el registro de depuración de la sincronización con el puente mientras nos contacta con una solicitud de soporte

>**Agregué la historización de un pedido pero no funciona**
>
>Para problemas de rendimiento, debe reiniciar el demonio philips hue para que tenga en cuenta este cambio.
