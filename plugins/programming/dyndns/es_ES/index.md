# Complemento DynDNS

Este complemento le permite actualizar un servicio DNS dinámico (dyndns, noip, duckdns,)

# Configuración del plugin 

Después de descargar el complemento, solo necesita activarlo, no hay configuración en este nivel.

![dyndns](../images/dyndns.PNG)

# Configuración del equipo 

Se puede acceder a la configuración del equipo Dyndns desde el menú de complementos :

![dyndns2](../images/dyndns2.PNG)

Así es como se ve la página del complemento Dyndns (aquí con 1 dispositivo ya) :

![dyndns3](../images/dyndns3.PNG)

Una vez que haces clic en uno de ellos, obtienes :

![dyndns4](../images/dyndns4.PNG)

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo dyndns** : nombre de su equipo DynDns,
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo,
-   **Categoría** : categorías de equipos (puede pertenecer a varias categorías),
-   **Activar** : activa su equipo,
-   **Visible** : hace que su equipo sea visible en el tablero,
-   **Servicio** : El nombre del servicio utilizado (dyndns.org, noip.com)
-   **Nombre de host** : nombre completo del DNS para actualizar (por ejemplo, toto.ddns.net)
-   **Nombre de usuario** : nombre de usuario en el servicio en cuestión
-   **Contraseña** : contraseña en el servicio en cuestión
-   **Simbólico** : ficha utilizada para duckdns
-   **IPv6** : Tu **Servicio** soporta IPv6. Seleccione si desea actualizar su entrada **Nombre de host** tipo AAAA.

A continuación encontrará la lista de pedidos :

-   **Nombre** : el nombre que se muestra en el tablero,
-   **Mostrar** : permite mostrar los datos en el tablero,
-   **Probar** : Se usa para probar el comando

> **Nota**
>
> Jeedom verificará la ip externa cada 15 minutos, si ha cambiado, el DNS se actualizará

> **Importante**
>
> El complemento proporciona un comando para forzar la actualización. Tenga cuidado de no abusar de él porque puede ser expulsado temporalmente del servicio DNS

> **Nota**
>
> Si usa OVH, tenga cuidado de que el nombre de usuario esté en forma mundial.com-identificador mientras el dominio tiene la forma my-dynHost.mmondomaine.com

> **IPv6**
>
> Debes tener configurado en tu **Servicio** una entrada DNS tipo AAAA para su **Nombre de host**.
> Todos los **Servicio** no admite ni proporciona información para IPv6.