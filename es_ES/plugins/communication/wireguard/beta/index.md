# Complemento Wireguard

Este complemento le permite conectar Jeedom a un servidor Wireguard.

También puede ser utilizado por el servicio de DNS de Jeedom para reemplazar el **Complemento Openvpn** para acceder a su Jeedom desde Internet.

# Configuration

## Configuración del plugin

Una vez que el complemento se ha descargado y activado, debe asegurarse de que las dependencias estén instaladas correctamente en la página de configuración general.

## Configuración del cliente

Se puede acceder a los clientes de Wireguard desde el menú **Complementos → Comunicación → Wireguard**.

Haga clic en un dispositivo para acceder a su página de configuración :

- **Nombre del cliente de Wireguard** : nombre de su equipo Wireguard.
- **Objeto padre** : indica el objeto padre al que pertenece el equipo.
- **Categoría** : categorías de equipos *(puede pertenecer a varias categorías)*.
- **Activar** : permite activar el equipo.
- **Visible** : permite hacer visible el equipo en el salpicadero.

Si solo usa el **Complemento Wireguard** para conectarse al DNS de Jeedom, simplemente vaya a la configuración general de Jeedom (**Configuración → Sistema → Configuración**), pestaña **Redes**. Seleccione **Wireguard** en el menú desplegable del juego **Gestión del mercado DNS** después **Iniciar / reiniciar** Conexión VPN.

>**INFORMACIÓN**
>
>En cuanto al acceso al DNS de Jeedom, no tienes nada más que hacer a tu nivel. El plugin se encargará automáticamente de crear el equipo, generar la configuración del túnel VPN y luego iniciar el servicio.

Si desea configurar el acceso a un servidor Wireguard personal, aquí está la lista de configuraciones de cliente disponibles en el complemento :

- **[Interfaz]** :
    - **Dirección** (`Address`) : Dirección de la interfaz de cliente de Wireguard.
    - **Llave privada** (`PrivateKey`) : Clave privada del cliente Wireguard.
    - **Post-up** (`PostUp`) : comandos que se ejecutarán al iniciar la interfaz del cliente Wireguard *(facultatif)*.
    - **Post-Down** (`PostDown`) : comandos que se ejecutarán cuando se detenga la interfaz del cliente Wireguard *(facultatif)*.

>**TRUCO**
>
>Puedes usar la etiqueta ``#interface#`` en los campos **Post-up** y **Post-Down** para recuperar el nombre de la interfaz utilizada por el cliente Wireguard.

- **[Mirar]** :
    - **Llave pública** (`PublicKey`) : Clave pública del servidor Wireguard.
    - **Punto final** (`Endpoint`) : dirección IP pública del servidor : puerto de escucha *(ip:port)*.
    - **IP autorizadas** (`AllowedIPs`) : lista de direcciones IP autorizadas.
    - **Clave previamente compartida** (`PresharedKey`) : clave precompartida *(facultatif)*.
    - **Mantener la conexión** (`PersistentKeepalive`) : Retraso de verificación de enlace en segundos *(facultatif)*.

>**IMPORTANTE**
>
>El equipo solo proporciona soporte relacionado con el acceso al DNS de Jeedom.

# Commandes

Haciendo clic en la pestaña **Pedidos**, encontrará la lista de pedidos de clientes de Wireguard :

- **Activo** : Estado de la interfaz del cliente Wireguard.
- **IP** : Dirección IP de la interfaz de cliente Wireguard.
- **Empezado** : Estado de conexión del servidor Wireguard.
- **Comenzar** : inicia la interfaz del cliente Wireguard.
- **Parar** : permite detener la interfaz del cliente Wireguard.

>**INFORMACIÓN**
>
>Jeedom comprobará cada 5 minutos si la VPN está iniciada o detenida y actuará en consecuencia si no lo está.
