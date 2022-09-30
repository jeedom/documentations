# Broadlink

Complemento para interactuar con equipos de enlace ancho

# Configuración del plugin

Después de instalar el complemento, debe activarse y garantizar la correcta instalación de las dependencias.

> **Importante**
>
> No se recomienda cambiar el puerto

# Inclusión de equipos

Vaya al menú Complementos => Protocolo de automatización del hogar => Broadlink. Una vez en la página haga clic en MODO DE INCLUSIÓN. Lógicamente, todos los productos Broadlink de tu red serán reconocidos.

# Configuración del equipo

Selecciona uno de tus equipos. Si se trata de productos de tipo infrarrojo, aparece un botón de comando de aprendizaje en la parte superior. Simplemente haga clic en él, luego tiene 5 segundos para aprender un comando infrarrojo o 433 para su enlace amplio. Después de esto, el complemento confirmará el éxito de la operación y creará el comando asociado que simplemente debe nombrar.

> **Punta**
>
> Para evitar aprender lo que podría provenir del entorno (control remoto de un vecino u otro), el broadlink en modo de aprendizaje se pone VOLUNTARIAMENTE en un nivel de recepción muy bajo, por lo tanto, debe estar MUY cerca del broadlink para aprender un comando, especialmente si es un mando de 433Mhz.

# Synchroniser

En la pestaña Comandos de un equipo encuentras el botón Sincronizar. Si tiene varios enlaces amplios, puede transferir los comandos aprendidos de un enlace ancho a otro.

> **Punta**
>
> Funciona desde un rm-pro a un mini o viceversa.

Puede elegir los pedidos a transferir, así como los enlaces amplios a los que desea transferirlos. (Por supuesto, el nombre del comando se convertirá (TV ON, fan off, etc.).)

> **Punta**
>
> Si agregó manualmente su dispositivo porque no se detectó automáticamente. La MAC a ingresar es la dirección MAC inversa en paquetes de dos en minúsculas sin la : ejemplo AA:BB:CC:DD:EE se convierte en eeddccbbaa
