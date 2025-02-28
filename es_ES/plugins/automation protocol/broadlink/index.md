# Complemento de enlace amplio

Complemento para conectar Jeedom con equipos Broadlink.

# Configuración del plugin

Después de instalar el complemento, debe activarse y garantizar la correcta instalación de las dependencias.

>**Importante**
>
>No se recomienda cambiar el puerto del zócalo interno.

# Inclusión de equipos

Vaya al menú Complementos => Protocolo de automatización del hogar => Broadlink. Una vez en la página, haga clic en el botón INCLUIR. Lógicamente, todos los productos Broadlink de tu red serán reconocidos.

# Configuración del equipo

Selecciona uno de tus equipos. Si se trata de productos de tipo infrarrojo, aparece un botón de comando de aprendizaje en la parte superior. Simplemente haga clic en él, luego tiene 5 segundos para aprender un comando infrarrojo o 433 para su enlace amplio. Después de esto, el complemento confirmará el éxito de la operación y creará el comando asociado que simplemente debe nombrar.

>**INFORMACIÓN**
>
>Para evitar aprender lo que podría provenir del entorno *(control remoto de un vecino u otro)*, el Broadlink en modo de aprendizaje va VOLUNTARIAMENTE a un nivel de recepción muy bajo, por lo que hay que estar MUY cerca del Broadlink para aprender un comando, especialmente si es un comando de 433Mhz.

# Synchroniser

En la pestaña Comandos de un equipo encuentras el botón Sincronizar. Si tiene varios enlaces amplios, puede transferir los comandos aprendidos de un enlace ancho a otro.

>**INFORMACIÓN**
>
>Funciona desde un rm-pro a un mini o viceversa.

Puede elegir los pedidos a transferir, así como los enlaces amplios a los que desea transferirlos. (Por supuesto, el nombre del comando se convertirá (TV ON, fan off, etc.).)

>**INFORMACIÓN**
>
>Si agrega manualmente su dispositivo porque no se detectó automáticamente. La dirección MAC que se debe ingresar es la dirección MAC inversa por paquete de dos en minúsculas sin los dos puntos *(ejemplo AA:BB:CC:DD:EE se convierte en eeddccbbaa)*.
