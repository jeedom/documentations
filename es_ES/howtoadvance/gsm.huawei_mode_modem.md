# GSM tarjeta de módem Huawei mode

En el 90% de los casos, no es necesario forzar las claves GSM solo en modo GSM (en lugar de GSM + cdrom + lector de tarjetas), el único caso en el que es obligatorio es si desea utilizar la clave en un Jeedom en una VM (VMware ESXi). De hecho, si no lo pasa en modo GSM, solo la clave no aparecerá en la lista de dispositivos USB que puede pasar a la VM.

> **Importante**
>
> Este tutorial se realizó en Windows 10

# Instalación del controlador

Una vez que la clave está conectada a una PC con Windows 10, debe tener una nueva unidad de CD-ROM. Debe hacer doble clic en él e instalar el software propuesto (no hay nada que cambiar, solo haga lo siguiente todo el tiempo).

![gsmonly](images/gsmonly.PNG)

# Recuperación de puerto COM

Luego debe recuperar el número de puerto de comunicación. Vaya al menú "Inicio" y busque "Administrador de dispositivos", ejecútelo y luego despliegue la sección "Puertos (COM y LPT)", debe tener un elemento que contenga "HUAWEI", debe recordar el número de Puerto COM :

![gsmonly2](images/gsmonly2.PNG)

# Descarga de masilla

Luego descarga masilla [aquí](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) e inicie el archivo descargado

# Configuración de masilla y cambio al modo GSM solamente

Una vez iniciado, configure la masilla de esta manera (poniéndose su número de puerto COM, consulte el paso anterior) :

![gsmonly3](images/gsmonly3.PNG)

Aparecerá una ventana negra (de vez en cuando puede haber un mensaje "boot ...", esto es normal, significa que está bien conectado a la clave GSM). En esta ventana tienes que escribir y luego presionar la tecla "Enter"" :

``AT^u2diag=0``

> **Importante**
>
> Tenga cuidado cuando escriba el texto, no verá nada en la pantalla, es normal, el texto aún se tiene en cuenta.

Normalmente a cambio debes tener un OK.

Eso es todo terminado. Su clave está solo en modo GSM y puede usarla a través de VMware ahora.
