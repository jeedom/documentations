# Complemento de SMS

El complemento de SMS le permite dialogar con Jeedom a través de SMS, también le permite a Jeedom enviarle un SMS en caso de alerta (complemento de alarma, escenario)

> **Importante**
>
> Para interactuar con Jeedom debe haber configurado interacciones.

# Configuración del plugin 

Después de descargar el complemento, solo necesita activarlo y configurar el puerto. Después de salvar al demonio debería lanzar. El complemento ya está configurado de manera predeterminada; no tienes que hacer nada más. Sin embargo, puede modificar esta configuración. Aquí está el detalle (algunos parámetros solo pueden ser visibles en modo experto) :

-   *Puerto de SMS* : el puerto USB en el que está conectada su llave GSM.

> **Punta**
>
> Si no sabe qué puerto USB se utiliza, simplemente puede indicar "Auto". Tenga en cuenta que el modo automático solo funciona con las teclas Huawai E220.

> **Importante**
>
> Tenga en cuenta que algunas teclas 3G están por defecto en modo módem y no GSM. Usando el software del fabricante de la llave, debe cambiar el modo de la llave a GSM (o texto, o serial). 

-   **Código PIN** : Le permite indicar el código PIN de la tarjeta SIM, dejar en blanco si no tiene una. 
-   **Modo de texto** : Modo de compatibilidad extendida, para ser usado solo si enviar y / o recibir mensajes no funciona.
-   **Cortar mensajes por paquete de caracteres** : Indica el número máximo de caracteres por texto.
-   **SMS / SMS Gateway (modificar en caso de error : CMS 330 Número SMSC no establecido)** : Tenga en cuenta que si tiene el error "Número de SMSC CMS 330 no establecido", en este caso debe indicar el número de puerta de enlace de SMS de su operador telefónico. 
-   **Fuerza de la señal** : Intensidad de recepción de señal de su clave GSM.
-   **Red** : Red telefónica de su clave GSM (puede ser "Ninguna" si Jeedom no puede recuperarla)). 
-   **toma interna (modificación peligrosa)** : permite modificar el puerto de comunicación interna del demonio.
-   **Ciclo (s))** : ciclo de escaneo de demonios para enviar y recibir SMS. Un número demasiado bajo puede causar inestabilidad

# Configuración del equipo 

Se puede acceder a la configuración del equipo de SMS desde el menú del complemento y luego por la comunicación

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo SMS** : nombre de su equipo de SMS,
-   **Activar** : activa su equipo,
-   **Visible** : hace que su equipo sea visible en el tablero,
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo.

A continuación encontrará la lista de pedidos :

-   **Nombre** : el nombre que se muestra en el tablero,
-   **Usuario** : usuario correspondiente en Jeedom (le permite restringir ciertas interacciones a ciertos usuarios),
-   **Número** : número de teléfono al que enviar mensajes. Puede poner varios números separándolos con; (ex: 0612345678; 0698765432).
    > **Importante**
    >
    > Solo los números de teléfono declarados en un dispositivo podrán usar las interacciones porque solo ellos estarán autorizados.
-   **Mostrar** : permite mostrar los datos en el tablero,
-   **Configuración avanzada** (ruedas con muescas pequeñas) : muestra la configuración avanzada del comando (método de registro, widget, etc.)),
-   **Probar** : Se usa para probar el comando,
-   **Borrar** (signo -) : permite eliminar el comando.

# Usando el complemento 

Esto es bastante estándar en su funcionamiento, en la página General → Complemento y luego seleccionando el complemento de SMS :

-   El puerto (ruta) al dispositivo que sirve como módem (por ejemplo, puede ser / dev / ttyUSB0, para verlo simplemente iniciar ``dmesg`` luego conecte el módem)
-   El código pin de la tarjeta sim

Por lo tanto, debe agregar nuevo equipo y luego configurarlo :

-   El nombre,
-   Si está activo o no,

Luego debe agregar los comandos que estarán compuestos por un nombre y un número, solo los números enumerados en la lista de comandos pueden recibir una respuesta de Jeedom (esto hace posible asegurar, al tiempo que evita establecer una contraseña para cada inicio de un SMS enviado a Jeedom). También puede indicar qué usuario está vinculado a este número (para la gestión de derechos a nivel de interacción).

Para comunicarse con Jeedom, será suficiente enviarle un mensaje desde un número autorizado, todas las interacciones provienen del sistema de interacción.

Pequeño ejemplo de interacción : Pregunta : "¿Cuál es la temperatura de la habitación? ?" Respuesta : "16.3 C"

# Lista de claves compatibles 

-   HUAWEI E220
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G inalámbrico
-   HUAWEI E3372

# Preguntas frecuentes 

> **No consigo nada con una llave huwaei e160.**
>
>Debe instalar minicom (sudo apt-get install -y minicom), ejecutarlo y conectarse al módem, luego hacer :
>
>`` `{.bash}
>AT ^ CURC = 0
>AT ^ u2diag = 0
>`` ''
>
>Y en el complemento hacer :
>
>-   Elija el primer puerto USB y no el segundo
>-   Velocidad : 9600
>-   Modo de texto desactivado

> **No puedo ver el puerto USB en mi llave**
>
>Asegúrese de que no tiene que instalar brltty (`sudo apt-get remove brltty` para eliminarlo)

> **Después de unas pocas horas / días ya no recibo un SMS y ya no puedo enviar uno, un recordatorio del demonio corrige**
>
>Verifique su cable USB (un cable USB defectuoso a menudo causa este tipo de problema, tampoco debería ser demasiado largo), también verifique su fuente de alimentación, se recomienda encarecidamente un concentrador USB

> **Tengo un error de CME XX**
>
>Puedes encontrar [aquí](:http://www.micromedia-int.com/fr/gsm-2/669-cme-error-gsm-equipment-related-errors) descripción de los diferentes errores de CME

> **Configuración de la tecla Alcatel one touch X220L**
>
>Cuando insertamos la clave, tenemos esto :
>
>`` ''`
>root @ jeedom:# lsusb
>Bus 002 Dispositivo 003: ID 1bbb:Teléfonos móviles f000 T&A
>`` ''`
>
>Ten cuidado si no tienes ``1bbb:f000`` sobre todo, no siga esta documentación, agregue las siguientes líneas al final del archivo ``/etc/usb\_modeswitch.conf`` :
>
>`` ''`
>########################################################
># Alcatel X220L
>DefaultVendor = 0x1bbb
>DefaultProduct = 0xf000
>MessageContent = "55534243123456788000000080000606f50402527000000000000000000000"
>########################################################
>`` ''`
>
>Luego ejecute el siguiente comando para probar :
>
>`` ''`
>/ usr / sbin / usb_modeswitch -c
>/etc/usb_modeswitch.conf
>`` ''`
>
>Entendemos esto :
>
>`` ''`
>root @ jeedom:~ # lsusb
>Bus 002 Dispositivo 003: ID 1bbb:0017 T & A Teléfonos móviles
>`` ''`
>
>y se agregan los enlaces bajo / dev :
>
>`` ''`
>root @ jeedom:~ # ls / dev / ttyUSB*
>/ dev / ttyUSB0 / dev / ttyUSB1 / dev / ttyUSB2 / dev / ttyUSB3 / dev / ttyUSB4
>`` ''`
>
>Ahora tiene que automatizar el lanzamiento del comando anterior a través de udev :
>
>`` ''`
>root @ jeedom:# vi /etc/udev/rules.d99-usb_modeswitch.rules
>SUBSISTEMA == "usb", ATTRS {idVendor} == "1bbb", ATTRS {idProduct} == "f000", RUN + = "/ usr / sbin / usb_modeswitch -c /etc/usb_modeswitch.conf"
>`` ''`
>
>Bajo libertad en el complemento de SMS, debe (en mi caso) utilizar el siguiente "puerto de SMS" : ``/dev/ttyUSB3``. Básicamente tienes que probar cada puerto para encontrar el correcto

> **El daemon de SMS se inicia, pero no recibe ningún SMS**
>
>Una de las causas probables es la configuración de red incorrecta. En "General" -> "Configuración" -> "Administración" -> "Configuración de red", verifique el contenido del campo "URL o dirección IP". Este último no debe ser localhost o 127.0.0.1 pero la dirección IP de su Jeedom o su nombre DNS.

> **En modo de depuración tengo el error "timeout" que aparece**
>
>Este error ocurre cuando la clave no responde dentro de los 10 segundos de una solicitud. Las causas conocidas pueden ser :
>
>-   incompatibilidad de la clave GSM,
>-   problema con la versión de firmware del stick.

> **Al comenzar en modo de depuración tengo : "zócalo ya en uso"**
>
>Esto significa que el demonio se inicia pero que Jeedom no puede detenerlo. Puede reiniciar todo el sistema o en SSH hacer "killall -9 refxcmd.py".

> **El demonio se niega a comenzar**
>
>Intenta iniciarlo en modo de depuración para ver el error.

> **Tengo varios puertos USB para mi llave GSM, mientras que solo tengo uno**
>
>Esto es normal, por alguna razón desconocida, las claves GSM crean 2 (e incluso más) puertos USB a nivel del sistema. Solo elige uno, no importa cuál.

> **Jeedom ya no envía ni recibe SMS**
>
>Esto suele suceder si la clave GSM ya no puede conectarse a la red. Intente moverlo y vea si vuelve> después de unos minutos.

>**Tengo problemas de recepción que funcionan durante unas horas y luego nada**
>
>Coloque la tarjeta SIM en un teléfono móvil y vacíe todos los sms (enviados y recibidos) de la tarjeta.
