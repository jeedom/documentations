# Uso de VPN en Synology

Desde un navegador web en un ordenador conectado a la misma red que el Synology

Accede a la interfaz de DSM e inicia sesión con una cuenta de administrador; a continuación, ve al menú principal y selecciona «Package Center».

En la parte superior izquierda de la ventana, busca la palabra «VPN». Debería aparecer «VPN Server»; haz clic en «Instalar».

![Synology. Uso de VPN1](../images/synology.utilisation_vpn1.png)

Vuelve al menú principal y selecciona «Servidor VPN».

![Synology. Uso de VPN2](../images/synology.utilisation_vpn2.png)

Al abrir la ventana, ve a L2TP/IPSEC

Selecciona la opción «Habilitar servidor VPN L2TP/IPsec»

En «Dirección IP dinámica», introduce un número que se corresponda con la subred asignada a las direcciones IP de tus dispositivos conectados mediante VPN a la red interna de tu hogar. Nota: no debes elegir la misma subred que la predeterminada de tu router; por ejemplo, en Free, la subred de los dispositivos es 192.168.1.0, por lo que en el ejemplo ponemos 2.

A continuación, introduce el número máximo de conexiones que deseas permitir en el servidor VPN y, después, el número máximo de conexiones simultáneas por usuario

Por último, introduce una clave compartida. Nota: se trata de una contraseña que deberás introducir al configurar la VPN en el móvil o la tableta.

A continuación, haz clic en «Apply»

![Synology. Uso de VPN3](../images/synology.utilisation_vpn3.png)

A continuación, aparecerá un mensaje indicando los puertos que deben redirigirse desde tu router a tu NAS.

![Synology. Uso de VPN4](../images/synology.utilisation_vpn4.png)

# Permitir a los usuarios utilizar el servicio VPN en el NAS

Vuelve al menú principal y selecciona «Servidor VPN».

![Synology. Uso de VPN2](../images/synology.utilisation_vpn2.png)

En la parte izquierda, selecciona «Privilégio».

Desmarca todas las casillas de PPTP OpenVPN y L2TP

Marca únicamente la casilla situada junto al usuario al que quieras autorizar a utilizar la VPN.

> **Consejo**
>
> Se recomienda crear una cuenta de usuario exclusivamente para la VPN, sin otros derechos ni permisos más allá del uso de la VPN.

![Synology. Uso de VPN5](../images/synology.utilisation_vpn5.png)

# Redirigir los puertos de tu router

En el navegador, escribe 192.168.1.1. Haz clic en «Configuración» de la Freebox.

![Synology. Uso de VPN6](../images/synology.utilisation_vpn6.png)

Seleccionar el modo avanzado

![Synology. Uso de VPN7](../images/synology.utilisation_vpn7.png)

Seleccionar «Gestión de puertos»

![Synology. Uso de VPN8](../images/synology.utilisation_vpn8.png)

Añadir una redirección

![Synology. Uso de VPN9](../images/synology.utilisation_vpn9.png)

Introduce los parámetros de la siguiente manera.

> **Consejo**
>
> El ID de destino es lo único que depende de tu instalación; debes introducir ahí la dirección IP de tu NAS Synology

Hacer una copia de seguridad

![Synology. Uso de VPN10](../images/synology.utilisation_vpn10.png)

Se observa entonces que se tiene en cuenta la configuración

![Synology. Uso de VPN11](../images/synology.utilisation_vpn11.png)

Repite la operación con los puertos UDP 500 y 4500

# Configurar la VPN en tu móvil

Ve a la aplicación y selecciona «Ajustes»

![Synology. Uso de VPN12](../images/synology.utilisation_vpn12.png)

Haz clic en… Más

![Synology. Uso de VPN13](../images/synology.utilisation_vpn13.png)

Haz clic en VPN

![Synology. Uso de VPN14](../images/synology.utilisation_vpn14.png)

Haz clic en el signo «+» de la esquina superior derecha

![Synology. Uso de VPN15](../images/synology.utilisation_vpn15.png)

Asigna un nombre al acceso VPN, selecciona como tipo L2TP/IPSec PSK, introduce la dirección pública de tu router (o un nombre DNS si dispones de uno) e introduce la clave compartida indicada en la sección «Configurar un servidor VPN»:

![Synology. Uso de VPN16](../images/synology.utilisation_vpn16.png)

Ahora, para iniciar la VPN, solo tienes que hacer clic en la nueva línea que ha aparecido con el nombre de tu túnel VPN

![Synology. Uso de VPN17](../images/synology.utilisation_vpn17.png)

Introduce entonces el nombre de usuario y la contraseña del usuario que se ha configurado en la sección «Configurar un servidor VPN».

![Synology. Uso de VPN18](../images/synology.utilisation_vpn18.png)

¡Y ya está! Todo lo que hagas desde tu móvil será como si estuvieras conectado a la red wifi de tu casa.
