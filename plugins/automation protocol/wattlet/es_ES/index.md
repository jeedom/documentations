# Complemento Wattcube

Este complemento le permite controlar los módulos Wattcubes de Wattlet a través de la Web de Wattcube.

# Configuración del plugin

Después de descargar el complemento, simplemente actívelo y configure la dirección IP de Wattcube Web.

![wattlet](../images/wattlet.png)

# Configuración del equipo

La sincronización de los equipos Wattlets es accesible desde el menú **Plugins** :

![wattlet2](../images/wattlet2.png)

Una vez que haces clic en uno de ellos, obtienes :

![wattlet3](../images/wattlet3.png)

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo de wattlet** : nombre de su equipo Wattlet en el tablero.
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo.
-   **Activar** : activa su equipo.
-   **Visible** : hace que su equipo sea visible en el tablero.
-   **Categoría** : categoría de su equipo Wattlet.

Así como la siguiente información :

-   **Dirección** : Dirección del módulo.
-   **Tipo** : Tipo de módulo Wattlet.
-   **Versión de software** : Versión de software interno del módulo Wattlet.
-   **Versión de hardware** : Versión de hardware.

>**Nota**
>
> Los pedidos se crean automáticamente, no es necesario agregarlos manualmente.

# Configuración web de Wattcube

Para recuperar devoluciones de estado, es necesario configurar notificaciones push en la Web de Wattcube.

En la interfaz web de Wattcube, vaya a la pestaña "Preferencias" y luego al menú "Personalización del pedido".

![wattlet4](../images/wattlet4.png)

En el área "Notificación PUSH", ingrese la dirección Jeedom en el formulario :

``IP\_JEEDOM/plugins/wattlet/core/php/jeeWattlet.php?id=~id~&cmd=~cmd~&state=~state~``

luego guardar.

![wattlet5](../images/wattlet5.png)
