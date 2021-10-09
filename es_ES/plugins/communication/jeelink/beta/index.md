# Complemento Jeelink 

Plugin utilizado para vincular 2 Jeedoms

# Principio de funcionamiento 

El complemento *Enlace de libertad* (también llamado jeelink) permite el ascenso de uno o más equipos de un Jeedom a otro.

![jeelink1](../images/jeelink1.png)

> **Importante**
>
> El complemento debe estar instalado en todos los Jeedoms, Source y Target.

> **Punta**
>
> Para una buena comprensión, es importante comprender los siguientes términos : **Fuente de la libertad** : Servidor Jeedom en el que se volverá a montar el equipo en el **Jeedom Target** **Jeedom Target** : Servidor Jeedom que recibirá el equipo reensamblado por el) **Jeedom (s) Fuente (s))** El **Jeedom Target** centralizar este equipo y el de todos) **Jeedom (s) Fuente (s))** configurado).**Cesión** : configuración realizada en el **Fuente de la libertad** para incluir el equipo que se volverá a montar en el **Jeedom Target**

> **Nota**
>
> Para una mejor lectura y comprensión de este tutorial : Las capturas de pantalla en un fondo negro corresponden a la **Jeedom Target**.Las capturas de pantalla en un fondo blanco corresponden a **Fuente de la libertad**.\

# Configuración del plugin 

Después de la instalación, solo necesita activar el complemento. Esto no requiere ninguna configuración específica.

# Configuración de jeedoms objetivo 

A partir de **Fuente de la libertad**, una vez en la página de complementos (yendo a Administración de complementos → Comunicación → Enlace de libertad), solo tiene que hacer clic en "Configurar los Jeedoms de destino".

Aparecerá una ventana y desde allí puede configurar o agregar **Jeedom (s) Target (s))**.

Para agregar un **Jeedom Target**, solo dame :

-   El nombre de **Jeedom Target**.
-   La dirección IP o el nombre DNS del **Jeedom Target**.
-   La clave API de **Jeedom Target**.
-   Indique si la comunicación es interna o externa (utilizada para retroalimentación, de **Fuente de la libertad** hacia **Jeedom Target**). Y guarda la configuración.

![jeelink2](../images/jeelink2.png)

> **Importante**
>
> Hay que **ABSOLUTAMENTE** las configuraciones de red de todos los Jeedoms (origen y destino) están bien, de lo contrario el complemento no funcionará.

# Asignación de equipos 

Después de realizar la configuración de la **Jeedom Target** En su **Fuente de la libertad**, tienes que ir a la pestaña *Cesión* para especificar el equipo a transmitir **Jeedom Target**. Todos los pedidos de equipos se crearán y configurarán automáticamente en el **Jeedom Target**.

En la pestaña *Cesión*, agregue el equipo que desea volver al **Jeedom Target**.

![jeelink3](../images/jeelink3.png)

Haga clic en *Agregar equipo* Seleccione el objeto y el equipo para agregar :

![jeelink5](../images/jeelink5.png)

> **Punta**
>
> Atención : los complementos con un widget específico no lo tendrán en el **Jeedom Target** (cámara, plugin de red).

> **Importante**
>
> La eliminación del equipo en la página de configuración del **Jeedoms objetivo** no lo elimina automáticamente en el **Fuente de la libertad**, esto es voluntario y no es un error (es una seguridad).

# Equipo "Mis jeelinks"" 

Después de actualizar la página *Mis enlaces* del **Jeedom Target**, deberías ver la creación automática del equipo :

![jeelink4](../images/jeelink4.png)

Al igual que todos los equipos Jeedom, puede activar / desactivar y mostrar o no el equipo, sus controles, ... o cambiar la categoría. Pero también

![jeelink6](../images/jeelink6.png)

En la pestaña *Comandos*, accede a todos los parámetros de los controles del equipo :

![jeelink7](../images/jeelink7.png)

# Modificación de la fuente Jeedom de un JeeLink 

Los siguientes 3 parámetros le permiten cambiar la fuente Jeedom, por ejemplo, al reemplazar un Jeedom sin perder datos (por ejemplo, el historial). Para eso, solo tiene que poner la nueva dirección y la clave API de Jeedom Source y cambiar los identificadores del equipo y los comandos (los encontrará en la configuración avanzada de estos haciendo clic en la rueda dentada).

-   Dirección de la fuente Jeedom;
-   Clave API de Jeedom Source;
-   Equipo de origen e ID de pedido.

# Vieja migración de modo esclavo

Un tutorial esta disponible, [aquí](https://jeedom.github.io/documentation/howto/es_ES/jeelink.migration.html) especificando el procedimiento a seguir para migrar un Jeedom Slave al nuevo modo operativo Jeedom Link.

# Preguntas frecuentes 

>**Al eliminar equipos en la fuente de libertad, estos no se eliminan de la libertad de destino**
>
>Normalmente, esta sincronización de origen / destino solo crea creación, nunca eliminación
