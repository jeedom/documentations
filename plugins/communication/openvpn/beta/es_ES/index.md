# Complemento Openvpn

Este complemento permite conectar Jeedom a un servidor OpenVPN. También se utiliza, y por lo tanto es obligatorio, para el servicio DNS de Jeedom, que te permite acceder a tu Jeedom desde Internet.

# Configuración del plugin

Una vez descargado el complemento, solo tienes que activar e instalar las dependencias de OpenVPN (haz clic en el botón **Instalar/Actualizar**).

# Configuración del equipo

Aquí encontrarás toda la configuración de tu equipo:

-   **Nombre del dispositivo OpenVPN**: nombre de tu dispositivo OpenVPN,
-   **Objeto principal**: indica el objeto principal al que pertenece el equipo,
-   **Categoría**: las categorías del equipo (puede pertenecer a varias categorías),
-   **Activar**: permite poner en marcha tu equipo,
-   **Visible**: hace que tu equipo aparezca en el panel de control,

> **Nota**
>
> El resto de opciones no se detallarán aquí; para obtener más información, consulte la [documentación openvpn](https://openvpn.net/index.php/open-source/documentation.html)

> **Nota**
>
> En cuanto a los comandos de shell que se ejecutan tras el arranque, existe la etiqueta `#interface#` que permite obtener el nombre de la interfaz activa.

A continuación encontrarás la lista de comandos:

-   **Nombre**: el nombre que aparece en el panel de control,
-   **Mostrar**: permite mostrar los datos en el panel de control,
-   **Probar**: permite probar el comando

> **Nota**
>
> Jeedom comprobará cada 5 minutos si la VPN está activa o desactivada y actuará en consecuencia si no es así.
