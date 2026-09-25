# Modo módem de la tarjeta GSM de Huawei

En el 90 % de los casos no es necesario forzar las llaves GSM al modo «solo GSM» (en lugar de GSM + CD-ROM + lector de tarjetas); el único caso en el que es obligatorio es si quieres utilizar la llave en un Jeedom en una máquina virtual (VMware ESXi). De hecho, si no la configuras en modo «solo GSM», la llave no aparecerá en la lista de dispositivos USB que puedes conectar a la máquina virtual.

> **Importante**
>
> Este tutorial se ha realizado en Windows 10

# Instalación de los controladores

Una vez conectada la llave a un ordenador con Windows 10, debería aparecer una nueva unidad de CD-ROM. Haz doble clic en ella e instala el software que se te propone (no hay que cambiar nada, solo sigue las instrucciones paso a paso).

![gsmonly](../images/gsmonly.PNG)

# Recuperación del puerto COM

A continuación, hay que averiguar el número del puerto de comunicación. Ve al menú «Inicio» y busca «Administrador de dispositivos», ábrelo y despliega la sección «Puertos (COM y LPT)»; deberías ver una entrada con el nombre «HUAWEI». A continuación, solo tienes que anotar el número del puerto COM:

![gsmonly2](../images/gsmonly2.PNG)

# Descarga de Putty

A continuación, descarga PuTTY [aquí](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) y ejecuta el archivo descargado

# Configuración de PuTTY y cambio al modo GSM únicamente

Una vez iniciado, configura Putty de la siguiente manera (asegurándote de introducir tu propio número de puerto COM; consulta el paso anterior):

![gsmonly3](../images/gsmonly3.PNG)

Aparecerá una ventana negra (en ocasiones puede aparecer el mensaje «boot…​», es normal; significa que estás correctamente conectado a la llave GSM). En esta ventana, debes escribir y, a continuación, pulsar la tecla «Intro»:

``AT^u2diag=0``

> **Importante**
>
> Ten en cuenta que, cuando escribas el texto, no verás nada en la pantalla; es normal, pero el texto se tiene en cuenta correctamente.

Normalmente, deberías recibir un «OK» como respuesta.

Ya está. Tu llave está ahora en modo GSM únicamente y ya puedes utilizarla a través de VMware.
