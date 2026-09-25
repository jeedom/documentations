# Consejos y trucos de VMware

No es exactamente un tutorial, sino más bien una recopilación de consejos y trucos sobre VMware

# Añadir su licencia

Una vez que hayas iniciado sesión en la interfaz web ``IP_ESXI/ui`` hay que ir a «Gestionar»:

![vmware.tips](../images/vmware.tips.PNG)

A continuación, ve a «Asignación de licencia» y haz clic en «Asignar una licencia».

![vmware.tips2](../images/vmware.tips2.PNG)

E introduce tu clave de licencia

![vmware.tips3](../images/vmware.tips3.PNG)

> **Nota**
>
> Recuerda que, si no lo haces, tu ESXi podría dejar de funcionar al cabo de 60 días.

# Configurar un almacén de datos NFS con un Synology

Aquí veremos cómo configurar un recurso compartido NFS desde un Synology en VMware. Esto permite, por ejemplo, almacenar las máquinas virtuales en el Synology (que puede tener más espacio que el ESXi) o enviar las copias de seguridad de las máquinas al Synology.

## Configuración de Synology

Hay que ir al panel de control, luego a «Servicios de archivos» y marcar la casilla «Habilitar NFS»:

![vmware.tips4](../images/vmware.tips4.PNG)

A continuación, hay que hacer clic en «Carpeta compartida», seleccionar la carpeta que se desea compartir (en este caso, «Backup»), hacer clic en «Modificar», luego en «Autorización NFS» y, por último, en «Crear» (en este caso, ya tengo una; tu lista debería estar vacía):

![vmware.tips5](../images/vmware.tips5.PNG)

A continuación, introduce la dirección IP de tu ESXi y, en «Squash», selecciona «Asignar todos los usuarios a admin» y, a continuación, confirma:

![vmware.tips6](../images/vmware.tips6.PNG)

A continuación, hay que obtener la ruta del recurso compartido (en este caso ``/volume2/Backup``) :

![vmware.tips7](../images/vmware.tips7.PNG)

Bueno, ya hemos terminado con Synology; ahora vamos a pasar a ESXi.

## Configuración de ESXi

Hay que ir a «Almacenamiento»:

![vmware.tips8](../images/vmware.tips8.PNG)

A continuación, haz clic en «Nueva base de datos»:

![vmware.tips9](../images/vmware.tips9.PNG)

Allí selecciona «Montar una base de datos NFS» y, a continuación, sigue estos pasos:

![vmware.tips10](../images/vmware.tips10.PNG)

Introduce el nombre del almacén de datos que quieres crear (ten cuidado de no usar espacios ni caracteres especiales), introduce la dirección IP de nuestro Synology y la ruta del recurso compartido (véase más arriba) y, por último, confirma:

![vmware.tips11](../images/vmware.tips11.PNG)

Haz clic en «Finalizar»:

![vmware.tips12](../images/vmware.tips12.PNG)

Y ya está, tu nuevo almacén de datos debería aparecer (si no es así, haz clic en «Actualizar»).

# Incorporación del complemento VAAI de Synology para el montaje NFS

Al añadir este complemento, se activa la aceleración por hardware en los montajes NFS (para más información, consulta [aquí](http://www.virtual-sddc.ovh/exploiter-les-vaai-nfs-avec-un-nas-synology/))

Para comprobar si lo tienes, tienes que conectarte con el cliente de escritorio (no he encontrado la información en el cliente web) e ir a configuración → almacenamiento:

![vmware.tips13](../images/vmware.tips13.PNG)

La configuración es bastante sencilla: primero hay que activar el servicio SSH del ESXi (en la interfaz web hay que ir a «Acción» ⇒ «Servicios» ⇒ «Activar Secure Shell») y, a continuación, conectarse a él mediante SSH (las credenciales son las mismas que para acceder a la interfaz). Después, solo tienes que hacer lo siguiente:

``esxcli software vib install -v https://global.download.synology.com/download/Tools/NFSVAAIPlugin/1.0-0001/VMware_ESXi/esx-nfsplugin.vib -f``

Debes tener:

![vmware.tips14](../images/vmware.tips14.PNG)

A continuación, hay que reiniciar el ESXi; para comprobar que todo va bien, hay que volver al cliente pesado y acceder a «Configuración» → «Almacenamiento»:

![vmware.tips15](../images/vmware.tips15.PNG)

# Instalar/actualizar el cliente ESXi Embedded Host Client

ESXi Embedded Host Client es una interfaz web (en HTML5) de ESXi que, en el 95 % de los casos, permite prescindir del cliente pesado. Viene por defecto en la versión 6.0 actualización 2, pero, si se trata de la versión 1.0, se recomienda encarecidamente actualizarla.

Encontrarás toda la información
[aquí](https://labs.vmware.com/flings/esxi-embedded-host-client)

Para comprobar si dispone de la interfaz web, solo tiene que acceder con su navegador a ``IP_ESXI/ui`` Si no tienes nada, hay que instalarlo. Primero hay que conectarse por SSH al ESXI y, a continuación, ejecutar:

``esxcli software vib install -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib``

Si ya la tienes, para actualizarla tienes que hacer lo siguiente:

``esxcli software vib update -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib``

# Instalación del cliente pesado

Esta parte es opcional si no necesitas gestionar el USB.

Debes acceder, con tu navegador de Internet, a la dirección IP del ESXi y, a continuación, hacer clic en el enlace ``Download vSphere Client for Windows`` :

![vmware.createvm](../images/vmware.createvm.PNG)

Una vez descargado, solo tienes que iniciar la instalación (me salto esta parte a propósito, ya que basta con aceptar todo).

A continuación, inicia VMware vSphere Client; deberías ver lo siguiente:

![vmware.createvm1](../images/vmware.createvm1.PNG)

Solo tienes que introducir la dirección IP de tu ESXi, el nombre de usuario y la contraseña, y ya estarás conectado:

![vmware.createvm2](../images/vmware.createvm2.PNG)

# Actualización de ESXi

El procedimiento es bastante sencillo: lo primero que hay que hacer es descargar el parche accediendo a [aquí](https://my.vmware.com/group/vmware/patch#search) (seguramente tendrás que iniciar sesión con tu cuenta de VMware). En la lista ``Select a Product`` pon ``ESXi (Embedded and Installable)``; por otro lado, mantén la última versión de VMware y haz ``Search``. A continuación, descarga el parche que necesites (normalmente el más reciente). El número de compilación (el primer número, no el que empieza por «KB») te indica la versión del parche, que puedes comparar con tu número de compilación.

A continuación, transfiere el archivo zip a uno de tus almacenes de datos y ejecuta:

``esxcli software vib update -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip``

> **Nota**
>
> Modifica la ruta y el nombre del archivo zip según tu configuración

> **Importante**
>
> Asegúrate de indicar la ruta completa al archivo zip; de lo contrario, no funcionará.

El comando anterior solo actualiza los vib que lo necesitan, pero puedes forzar la instalación de todos los vib del paquete (así que ten cuidado, ya que esto puede suponer una versión anterior) ejecutando:

``esxcli software vib install -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip``

# Configuración del NTP

Por defecto, ESXi no utiliza NTP, por lo que no está sincronizado y las máquinas virtuales tampoco lo están. Solucionarlo es muy sencillo. Hay que ir a la interfaz web, a Administrar → Sistema → Fecha y hora, y allí hacer clic en «Modificar la configuración»:

![vmware.tips16](../images/vmware.tips16.PNG)

Y en el campo «Servidor NTP» hay que introducir: ``0.debian.pool.n, 1.debian.pool.n, 2.debian.pool.n, 3.debian.pool.n, time.nist.gov``

![vmware.tips17](../images/vmware.tips17.PNG)

A continuación, en Acciones → Servicio NTP → Estrategia, haz clic en «Iniciar y detener con el host»:

![vmware.tips18](../images/vmware.tips18.PNG)

De nuevo en Acciones → Servicio NTP, haz clic en «Iniciar».

Ya está, tu ESXi debería ajustar la hora correctamente por sí solo a partir de ahora.

# Acceso externo a ESXi

Para acceder al ESXi desde el exterior, necesitas:

-   Abrir el puerto 443 hacia el 443 del ESXi
-   Abrir el puerto 902 hacia el 902 del ESXi

Y eso es todo. Un pequeño consejo: si tienes un NAS de Synology, puedes hacer lo siguiente (presta atención para seguirlo bien):

-   Abrir el puerto 443 hacia el 5001 del NAS de Synology
-   Abrir el puerto 80 hacia el 80 del NAS (útil únicamente para generar los certificados de Let’s Encrypt)
-   Abrir el puerto 902 hacia el 902 del ESXi

A continuación, en el NAS, ve al panel de configuración, luego a «Portal de aplicaciones» y «Proxy inverso» (atención: es imprescindible tener DSM 6):

![vmware.tips19](../images/vmware.tips19.PNG)

Haz clic en «Crear» y introduce:

![vmware.tips20](../images/vmware.tips20.PNG)

En «Nombre de host» (en el campo de origen) hay que introducir el DNS deseado (por ejemplo, monesxi.mondsn.synology.me) y en «Nombre de host» (en el campo de destino) hay que introducir la IP del ESXi

> **Nota**
>
> También puedes hacer lo mismo para acceder a Jeedom, pero esta vez indicando la dirección IP de Jeedom (la de la máquina virtual si estás en un entorno virtualizado) y el puerto 80.

> **Nota**
>
> Una vez hecho esto, y si tu DNS apunta correctamente al NAS, puedes generar un certificado SSL válido de forma gratuita con Let’s Encrypt, yendo a Seguridad ⇒ Certificado y seleccionando «Añadir». A continuación, no olvides hacer clic en «Configurar» para asignarlo a tu proxy inverso.

A continuación, para acceder a tu ESXi, solo tienes que ir con tu navegador a tu DNS o IP externa añadiendo /ui al final y ya está.

> **Importante**
>
> Si utilizas el proxy inverso del NAS, la consola web de las máquinas virtuales no funciona (ya que utiliza WebSocket); sin embargo, si utilizas VMware Remote Console, todo debería funcionar correctamente (ya que utiliza el puerto 902).

> **Nota**
>
> También existe una aplicación llamada VMware Watchlist para Android que permite acceder al ESXi y a las consolas de las máquinas virtuales.

# Certificado SSL

Es posible importar los certificados de VMware directamente a tu ordenador para que deje de aparecer la alerta.

El orden de los pasos es el siguiente:

-   Disponer de una URL (DNS) para acceder a tu ESXi; en este caso, vamos a utilizar ``esxi1.lan``
-   Configura el nombre de tu ESXi; conéctate por SSH y ejecuta lo siguiente: ``esxcli system hostname set --host=esxi1``
-   Configurar el FQDN: ``esxcli system hostname set --fqdn=esxi1.lan``
-   Recuperar el certificado raíz del ESXi; se encuentra en ``/etc/vmware/ssl/castore.pem``

En el equipo, haz clic con el botón derecho del ratón e instala el certificado; añádelo a «Autoridades de certificación raíz de confianza».
