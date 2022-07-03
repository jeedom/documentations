# Uso de synology vpn

Desde un navegador web en una computadora conectada a la misma red que Synology

Vaya a la interfaz de DSM e inicie sesión con una cuenta de administrador, luego vaya al menú principal y seleccione Centro de paquetes

En la parte superior izquierda de la ventana haz una búsqueda con la palabra VPN. Debería aparecer el servidor VPN, luego haga clic en instalar.

![synology.utilisation vpn1](images/synology.utilisation_vpn1.png)

Vuelva al menú principal y seleccione Servidor VPN

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

Cuando se abra la ventana, vaya a L2TP/IPSEC

Elija la opción Habilitar servidor VPN L2TP/IPsec

En Dirección IP Dinámica, ingresa un número que corresponderá a la subred de asignación de las IPs de tus dispositivos en VPN en la red interna de tu hogar. Nótese bien : no debe elegir lo mismo que la subred predeterminada de su caja, por ejemplo, gratis, la subred de las máquinas es 192.168.1.0 entonces en el ejemplo ponemos 2

Luego ingrese la cantidad máxima de conexiones que desea permitir en el servidor VPN, luego la cantidad máxima de conexiones simultáneas para un usuario

Finalmente ingrese una clave compartida NB : esta es una contraseña que hay que introducir al configurar la VPN en el móvil o tablet.

Entonces aplica

![synology.utilisation vpn3](images/synology.utilisation_vpn3.png)

Luego, un mensaje indica los puertos que se deben redirigir en su Internet Box a su NAS.

![synology.utilisation vpn4](images/synology.utilisation_vpn4.png)

# Permitir a los usuarios usar el servicio VPN en el NAS

Vuelva al menú principal y seleccione Servidor VPN

![synology.utilisation vpn2](images/synology.utilisation_vpn2.png)

En la parte izquierda seleccione Privilegio

Desmarque todas las casillas bajo PPTP Open VPN y L2TP

Solo marque la casilla frente al usuario al que desea permitir que use la VPN .

> **Consejo**
>
> Es recomendable crear un usuario solo para la VPN y sin más derechos/autorizaciones que hacer la VPN.

![synology.utilisation vpn5](images/synology.utilisation_vpn5.png)

# Reenvía los puertos de tu BOX 

En el navegador ingrese 192.168.1.1. Haga clic en Configuración de Freebox

![synology.utilisation vpn6](images/synology.utilisation_vpn6.png)

Seleccionar modo avanzado

![synology.utilisation vpn7](images/synology.utilisation_vpn7.png)

Seleccione Gestión de puertos

![synology.utilisation vpn8](images/synology.utilisation_vpn8.png)

Agregar una redirección

![synology.utilisation vpn9](images/synology.utilisation_vpn9.png)

Ingrese los parámetros de la siguiente manera.

> **Consejo**
>
> Destination ID es lo único que depende de tu instalación, tienes que poner ahí la IP de tu Synology NAS

Ahorrar

![synology.utilisation vpn10](images/synology.utilisation_vpn10.png)

Se observa entonces que se tiene en cuenta la parametrización

![synology.utilisation vpn11](images/synology.utilisation_vpn11.png)

Repita la operación con los puertos UDP 500 y 4500

# Configura la VPN en tu móvil

Vaya a la aplicación y seleccione Configuración

![synology.utilisation vpn12](images/synology.utilisation_vpn12.png)

Haga clic en … más

![synology.utilisation vpn13](images/synology.utilisation_vpn13.png)

Haga clic en VPN

![synology.utilisation vpn14](images/synology.utilisation_vpn14.png)

Haga clic en el + en la parte superior derecha

![synology.utilisation vpn15](images/synology.utilisation_vpn15.png)

Asigne un nombre al acceso VPN, establezca el tipo en L2TP/IPSec PSK, ingrese la dirección pública de su caja de Internet (o un nombre DNS si tiene uno) e ingrese la clave compartida ingresada en la sección Configurar un servidor VPN :

![synology.utilisation vpn16](images/synology.utilisation_vpn16.png)

Ahora para iniciar la VPN, simplemente haga clic en la nueva línea que apareció con el nombre de su túnel VPN

![synology.utilisation vpn17](images/synology.utilisation_vpn17.png)

Luego ingrese el nombre de usuario y la contraseña del usuario que se configuró en la sección Configurar un servidor VPN

![synology.utilisation vpn18](images/synology.utilisation_vpn18.png)

Y eso es todo lo que haces en tu teléfono, es como si estuvieras en Wifi en casa !
