# Complemento Openvpn

Este complemento permite conectar Jeedom a un servidor openvpn. También se usa y, por lo tanto, es obligatorio para el servicio DNS de Jeedom que le permite acceder a su Jeedom desde Internet

# Configuración del plugin

Después de descargar el complemento, solo necesita activar e instalar las dependencias de openvpn (haga clic en el botón Instalar / Actualizar)

# Configuración del equipo

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del dispositivo openvpn** : nombre de su dispositivo Openvpn,
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo,
-   **Categoría** : categorías de equipos (puede pertenecer a varias categorías),
-   **Activar** : activa su equipo,
-   **Visible** : hace que su equipo sea visible en el tablero,

> **Nota**
>
> Las otras opciones no se detallarán aquí; para obtener más información, consulte el [documentación de openvpn](https://openvpn.net/index.php/open-source/documentation.html)

> **Nota**
>
> Para los comandos de shell ejecutados después del inicio, tiene la etiqueta #interface# para el nombre de la interfaz reemplazado automáticamente

A continuación encontrará la lista de pedidos :

-   **Nombre** : el nombre que se muestra en el tablero,
-   **Mostrar** : permite mostrar los datos en el tablero,
-   **Probar** : Se usa para probar el comando

> **Nota**
>
> Jeedom verificará cada 15 minutos si la VPN se inicia o detiene (si es necesario) y actuará en consecuencia si no es así
