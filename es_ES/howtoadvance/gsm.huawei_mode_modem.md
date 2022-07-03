# Modo de tarjeta de módem GSM Huawei

En el 90% de los casos no es necesario forzar claves GSM solo en modo GSM (en lugar de GSM + cdrom + lector de tarjetas), el único caso donde es obligatorio es si se desea utilizar la clave en un Jeedom en una VM ( VMWare ESXi). De hecho, si no lo pasa en modo GSM, solo la clave no aparecerá en la lista de dispositivos USB que puede pasar a la VM.

> **Importante**
>
> Este tutorial fue hecho en un Windows 10

# Instalación del controlador

Una vez que la clave está conectada a una PC con Windows 10, debe tener una nueva unidad de CD-ROM. Debe hacer doble clic en él e instalar el software propuesto (no hay nada que cambiar, solo siga todo el camino).

![gsmonly](images/gsmonly.PNG)

# Recuperación del puerto COM

Luego debe obtener el número del puerto de comunicación. Vaya al menú "Inicio" y busque "Administrador de dispositivos", inícielo y luego despliegue la sección "Puertos (COM y LPT)", debe tener un elemento que contenga "HUAWEI", luego solo tiene que recordar el número del puerto COM :

![gsmonly2](images/gsmonly2.PNG)

# Descargar Masilla

Luego descarga masilla [aquí](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) y ejecuta el archivo descargado

# Configuración de masilla y cambio al modo solo GSM

Una vez lanzado, configure masilla de esta manera (colocando su propio número de puerto COM, vea el paso anterior) :

![gsmonly3](images/gsmonly3.PNG)

Aparecerá una ventana negra (de vez en cuando puede haber un mensaje de "arranque...", esto es normal, esto significa que está correctamente conectado a la llave GSM). En esta ventana, escriba y presione la tecla "Enter"" :

``AT^u2diag=0``

> **Importante**
>
> Ojo cuando vayas a teclear el texto no vas a ver nada en pantalla, es normal, el texto se sigue teniendo en cuenta.

Normalmente a cambio debe tener un OK.

Aqui esta terminado. Su clave está solo en modo GSM y puede usarla a través de VMware ahora.
