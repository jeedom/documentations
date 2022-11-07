# Complemento de SMS

El complemento de SMS le permite interactuar con Jeedom a través de SMS. También permite a Jeedom enviarte un SMS en caso de alerta (complemento de alarma, escenario, etc).

> **Importante**
>
> Para interactuar con Jeedom, debes tener interacciones configuradas.

# Configuración del plugin

Después de descargar el complemento, simplemente actívelo y configure el puerto. Después de salvar al demonio debería lanzar.
El complemento ya está configurado de forma predeterminada, por lo que no tiene que hacer nada más. Sin embargo, puede modificar esta configuración, aquí está el detalle :

- **Puerto de SMS** : el puerto USB en el que está conectada su llave GSM (por ejemplo, puede ser /dev/ttyUSB0, para verlo simplemente ejecute `dmesg` y luego conecte el módem).

> **CONSEJO**
>
> Si no sabe qué puerto USB se utiliza, simplemente puede indicar "Auto". Tenga en cuenta que el modo automático solo funciona con las teclas Huawei E220.

> **Importante**
>
> Tenga en cuenta que algunas teclas 3G están en modo módem por defecto y no GSM. Debe, utilizando el software del fabricante de su clave, cambiar el modo de la clave a GSM (o texto, o serial).

- **Velocidad de comunicación** : teclas recientes funcionan a 115200 baudios. Tiene la opción de cambiar a 9600 baudios en caso de que su equipo lo requiera.
- **Código PIN** : Le permite indicar el código PIN de la tarjeta SIM, dejar en blanco si no tiene una.
- **Modo de texto** : Modo de compatibilidad extendida, para usar solo si enviar y / o recibir mensajes no funciona.
- **Cortar mensajes por paquete de caracteres** : Indica el número máximo de caracteres por mensaje de texto.
- **SMS / SMS Gateway (modificar en caso de error : CMS 330 Número SMSC no establecido)** : Solo cámbielo si tiene el error `CMS 330 SMSC number not set`, en este caso debe indicar el número de puerta de enlace SMS de su operador telefónico.
- **Fuerza de la señal** : Intensidad de la señal de su clave GSM.
- **Red** : Red telefónica de su clave GSM (puede ser "Ninguna" si Jeedom no puede recuperarla)).
- **Puerto de enchufe interno (modificación peligrosa)** : permite modificar el puerto de comunicación interna del demonio.
- **Ciclo (s))** : ciclo de escaneo de demonios para enviar y recibir SMS. Un número demasiado bajo puede provocar inestabilidad.

# Configuración del equipo

La configuración de dispositivos SMS es accesible desde el menú Complementos → Comunicación.

Aquí encontrarás toda la configuración de tu equipo :

- **Nombre del equipo** : nombre de su equipo de SMS.
- **Objeto padre** : indica el objeto padre al que pertenece el equipo.
- **Activar** : activa su equipo.
- **Visible** : hace que su equipo sea visible en el tablero.

A continuación encontrará algunos parámetros específicos:

- **Deshabilitar interacciones**: te permite prohibir interacciones para todos los números de este equipo (si quieres prohibir interacciones para ciertos números y no para otros, puedes crear varios equipos)
- **Permitir mensajes de números desconocidos**: Le permite aceptar mensajes de números desconocidos. El mensaje recibido así como el número del remitente estarán disponibles a través de los comandos como para cualquier otro mensaje. Las interacciones siempre están deshabilitadas para estos números
- **Añadir números desconocidos**: le permite agregar automáticamente el número a la lista de pedidos (por lo tanto, para crear un nuevo pedido) cuando recibe un mensaje de un número desconocido

> **ATENCIÓN**
>
> Esta opción puede ser peligrosa de usar porque agregará automáticamente un comando correspondiente al número cuando reciba un mensaje de un número desconocido.
> Si en el mismo equipo activa interacciones, esto significa que cualquiera puede comenzar a interactuar con su Jeedom.
> Active esta opción solo si está seguro de aceptar este riesgo.

## Las órdenes

- **Nombre** : el nombre que se muestra en el tablero.
- **Usuario** : usuario correspondiente en Jeedom (le permite restringir ciertas interacciones a ciertos usuarios).
- **Número** : número de teléfono al que enviar mensajes. Puede poner varios números separándolos con; *(exemple: +33612345678;+33698765432)*. Importante : es necesario poner los números en formato internacional (+33 para Francia por ejemplo)

> **Importante**
>
> Solo los números de teléfono declarados en un dispositivo podrán utilizar las interacciones porque solo ellos estarán autorizados.

# Usando el complemento

Este es bastante estándar en su funcionamiento, por lo que debe agregar nuevos equipos y luego configurar:

- El nombre,
- Si está activo o no,

Luego debe agregar los comandos que estarán compuestos por un nombre y un número, solo los números enumerados en la lista de comandos pueden recibir una respuesta de Jeedom (esto hace posible asegurar, al tiempo que evita establecer una contraseña para cada inicio de un SMS enviado a Jeedom). También puede indicar qué usuario está vinculado a este número (para la gestión de derechos a nivel de interacción).

Para comunicarse con Jeedom, será suficiente enviarle un mensaje desde un número autorizado, todas las interacciones provienen del sistema de interacción.

>**EJEMPLO DE INTERACCION** :
>
> - Pregunta : *"¿Cuál es la temperatura de la habitación? ?"*
> - Respuesta : *"16,3 ° C"*

# Lista de claves compatibles

- HUAWEI E220
- Alcatel one touch X220L
- HSDPA 7.2MBPS 3G inalámbrico
- HUAWEI E3372
- USB SIM800C (velocidad 9600)

# FAQ

> **No consigo nada con una llave huwaei e160.**
>
>Tienes que instalar minicom (`sudo apt-get install -y minicom`), ejecutarlo y conectarte al módem, luego haz :
>
>`` `{.bash}
>AT ^ CURC = 0
>AT ^ u2diag = 0
>`` ''
>
>Y en el complemento hacer :
>
>- Elija el primer puerto USB y no el segundo
>- Velocidad : 9600
>- Modo de texto desactivado

> **No puedo ver el puerto USB en mi llave**
>
>Asegúrate de no tener brltty instalado (`sudo apt-get remove brltty` para eliminarlo).

> **Después de unas pocas horas / días ya no recibo un SMS y ya no puedo enviar uno, un recordatorio del demonio corrige**
>
>Verifique su cable USB (un cable USB defectuoso a menudo causa este tipo de problema, tampoco debería ser demasiado largo), también verifique su fuente de alimentación, se recomienda encarecidamente un concentrador USB.

> **Tengo un error de CME XX**
>
>Puedes encontrar [aquí](https://support.micromedia-int.com/hc/fr/articles/360010426299-Modem-GSM-CME-ERRORS-Erreurs-GSM-li%C3%A9es-%C3%A0-l-%C3%A9quipement-) descripción de los diferentes errores de CME.

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
>Una de las causas probables es la configuración de red incorrecta. En "Configuración" → "Sistema" → "Configuración" → "Redes", verifique el contenido del campo "URL o dirección IP"". Este último no debe ser localhost o 127.0.0.1 pero la dirección IP de su Jeedom o su nombre DNS.

> **En modo de depuración tengo el error "timeout" que aparece**
>
>Este error ocurre cuando la clave no responde dentro de los 10 segundos de una solicitud. Las causas conocidas pueden ser :
>
>- incompatibilidad de la clave GSM,
>- problema con la versión de firmware del stick.

> **Al comenzar en modo de depuración tengo : "zócalo ya en uso"**
>
>Esto significa que el demonio se inicia pero que Jeedom no puede detenerlo. Puede reiniciar todo el sistema o en SSH hacer ``killall -9 refxcmd.py``.

> **El demonio se niega a comenzar**
>
>Intenta iniciarlo en modo de depuración para ver el error.

> **Tengo varios puertos USB para mi llave GSM mientras que solo tengo uno**
>
>Esto es normal, por alguna razón desconocida, las claves GSM crean 2 *(ver más)* puertos USB de nivel de sistema. Solo elige uno, no importa cuál.

> **Jeedom ya no envía ni recibe SMS**
>
>Esto suele suceder si la clave GSM ya no puede conectarse a la red. Intente moverlo para ver si vuelve después de unos minutos.

>**Tengo problemas de recepción que funcionan durante unas horas y luego nada**
>
>Coloque la tarjeta SIM en un teléfono móvil y vacíe todos los mensajes de texto de la tarjeta (enviados y recibidos).
