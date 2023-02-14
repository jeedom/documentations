# Haga clic en el complemento de enlace

Este complemento permite la gestión de enlaces y eventos directamente en la interfaz de Jeedom. Puede, por ejemplo, crear un comando que abra un modal (ventana de diálogo) con una vista que contenga sus cámaras. Esto permite que cuando alguien toca el timbre de la puerta se muestre la cámara de entrada en su Jeedom.

# Configuración del plugin

Después de descargar el complemento, simplemente actívelo, no hay configuración en este nivel.

![clink1](../images/clink1.PNG)

# Configuración del equipo

La configuración del equipo Clink es accesible desde el menú **Plugins** :

![clink2](../images/clink2.PNG)

Así es como se ve la página del complemento **Tintinar** (ya con 1 equipo) :

![clink3](../images/clink3.PNG)

Una vez que haces clic en uno de ellos, obtienes :

![clink4](../images/clink4.PNG)

Aquí encontrarás toda la configuración de tu equipo :

-   **Clink nombre del equipo** : nombre de su equipo Clink.
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo.
-   **Activar** : activa su equipo.
-   **Visible** : hace que su equipo sea visible en el tablero.

A continuación encontrará la lista de pedidos :

-   **Nombre** : el nombre que se muestra en el tablero,
-   **Modo** : El modo de visualización del elemento (en un modal, en una nueva ventana o en la ventana actual)

   > **Nota**
   >
   > En el móvil, "nueva ventana" y "ventana actual" hacen lo mismo : abrir enlace en la ventana actual.

-   **Tipo** : tipo de elemento para abrir (vista, diseño, panel o URL).
-   **Nombre** : opción según el elemento seleccionado para abrir.
-   **Filtro de usuario** : permite filtrar para abrir el elemento solo si es este usuario el que está conectado.

-   **Filtro de página** : le permite filtrar para abrir el elemento solo si está en la página mencionada.

    > **Nota**
    >
    > En la versión móvil, esta opción no hace nada

-   **Filtro de interfaz** : permite filtrar para abrir el elemento solo en la versión móvil / de escritorio o en ambos.
-   **Mostrar** : permite mostrar los datos en el tablero.
-   **Probar** : Se usa para probar el comando.
-   **Borrar** (signo -) : permite eliminar el comando.

> **Importante**
>
> Es importante no abrir la misma vista sobre sí mismo, lo mismo para los diseños !

> **Importante**
>
> En los dispositivos móviles, la apertura de una URL no se puede realizar de manera modal como en los diseños.

> **Importante**
>
> No todas las URL se pueden abrir en modal, depende del sitio *(ex : google.fr no se puede abrir en un modal)*. Atención también si está en https, es absolutamente necesario que el sitio para abrir en modal esté en https.
