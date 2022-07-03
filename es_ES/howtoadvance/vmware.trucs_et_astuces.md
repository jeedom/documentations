# Consejos y trucos de Vmware

No es realmente un instructivo aquí, sino más bien una colección de consejos y trucos sobre VMware

# Agrega tu licencia

Una vez conectado a la interfaz web ``IP_ESXI/ui`` tienes que ir a "Administrar" :

![vmware.tips](images/vmware.tips.PNG)

Luego en "Asignación de licencia" y haga clic en "Asignar una licencia"

![vmware.tips2](images/vmware.tips2.PNG)

E ingrese su clave de licencia

![vmware.tips3](images/vmware.tips3.PNG)

> **Nota**
>
> Como recordatorio, si no hace esto, es posible que su ESXi ya no funcione después de 60 días

# Monte un almacén de datos NFS con Synology

Veremos aquí cómo montar un recurso compartido NFS desde un Synology en VMware. Esto permite, por ejemplo, colocar las máquinas virtuales en Synology (que puede tener más espacio que ESXi) o enviar las copias de seguridad de las máquinas en Synology

## Configuración de Synology

Tienes que ir al panel de configuración luego "Servicios de archivo" y marcar la casilla "Habilitar NFS" :

![vmware.tips4](images/vmware.tips4.PNG)

Luego tienes que hacer clic en "Carpeta compartida", luego elegir la carpeta para compartir (aquí Copia de seguridad), hacer clic en modificar luego "Autorización NFS" y finalmente en crear (aquí ya tengo una, tu lista debería estar vacía) :

![vmware.tips5](images/vmware.tips5.PNG)

Luego pones la IP de tu ESXi y en "Squash" pones "Mapeo de todos los usuarios en admin" luego validas :

![vmware.tips6](images/vmware.tips6.PNG)

A continuación, debe recuperar la ruta al recurso compartido (aquí ``/volume2/Backup``) :

![vmware.tips7](images/vmware.tips7.PNG)

Eso es todo, se acabó en el lado de Synology, ahora pasaremos al lado de ESXi

## Configuración de ESXi

Ir a "Almacenamiento" :

![vmware.tips8](images/vmware.tips8.PNG)

Luego haga clic en "Nueva base de datos" :

![vmware.tips9](images/vmware.tips9.PNG)

Allí, seleccione "Montar una base de datos NFS" y luego haga lo siguiente :

![vmware.tips10](images/vmware.tips10.PNG)

Ingrese el nombre del almacén de datos a crear (tenga cuidado de evitar espacios y caracteres especiales), coloque la IP de nuestro Synology y coloque la ruta al recurso compartido (ver arriba) y finalmente valide :

![vmware.tips11](images/vmware.tips11.PNG)

Haga clic en finalizar :

![vmware.tips12](images/vmware.tips12.PNG)

Y ahora debería aparecer su nuevo almacén de datos (de lo contrario, haga clic en "Actualizar").

# Se agregó el complemento VAAI Synology para montaje NFS

Agregar este complemento habilita la aceleración de hardware en montajes NFS (para una explicación, consulte [aquí](http://www.virtual-sddc.ovh/exploiter-les-vaai-nfs-avec-un-nas-synology/))

Para ver si lo tienes, tienes que conectarte con el cliente grueso (no pude encontrar la información en el cliente web) e ir a configuración → almacenamiento :

![vmware.tips13](images/vmware.tips13.PNG)

La implementación es bastante simple, primero debe activar el servicio SSH del ESXi (en la interfaz web debe ir a acción ⇒ servicios ⇒ Activar Secure Shell), luego conectarse en SSH en él (los identificadores son los mismos que para acceder a la interfaz). Entonces solo tienes que hacer :

``esxcli software vib install -v https://global.download.synology.com/download/Tools/NFSVAAIPlugin/1.0-0001/VMware_ESXi/esx-nfsplugin.vib -f``

Usted debe tener :

![vmware.tips14](images/vmware.tips14.PNG)

Luego debe reiniciar el ESXi, para verificar que esté bien, debe regresar con el cliente pesado en configuración → almacenamiento :

![vmware.tips15](images/vmware.tips15.PNG)

# Instalar o actualizar ESXi Embedded Host Client

ESXi Embedded Host Client es una interfaz web (en HTML5) de ESXi que permite en el 95% de los casos prescindir del cliente pesado. Está presente por defecto en la versión 6.0 actualización 2, pero en la versión 1.0, se recomienda encarecidamente actualizarlo.

Encontrarás toda la información
[aquí](https://labs.vmware.com/flings/esxi-embedded-host-client)

Para ver si tiene la interfaz web, simplemente vaya con su navegador a ``IP_ESXI/ui`` si no tienes nada tienes que instalarlo primero debes conectarte en SSH al ESXI luego hacer :

``esxcli software vib install -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib``

Si ya lo tienes, para actualizarlo tienes que hacer :

``esxcli software vib update -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib``

# Instalación del cliente pesado

Esta parte es opcional si no necesita administrar USB.

Debe ir, con su navegador de Internet, a la IP del ESXi y luego hacer clic en el enlace ``Download vSphere Client for Windows`` :

![vmware.createvm](images/vmware.createvm.PNG)

Una vez descargado solo hay que lanzar la instalación (Yo paso voluntariamente esta parte porque es suficiente para validar todo).

Luego inicie VMware vSphere Client, debe tener :

![vmware.createvm1](images/vmware.createvm1.PNG)

Solo tienes que introducir la IP de tu ESXi, el usuario y la contraseña y aquí estás conectado en él :

![vmware.createvm2](images/vmware.createvm2.PNG)

# Actualización de ESXi

El procedimiento es bastante sencillo, primero debes recoger el parche yendo [aquí](https://my.vmware.com/group/vmware/patch#search) (probablemente necesitará iniciar sesión con su cuenta de VMware). En la lista ``Select a Product`` poner ``ESXi (Embedded and Installable)``, enfrente deje la última versión de VMware y haga ``Search``. Luego descargue el parche deseado (generalmente el último). El número de compilación (el primer número, no el que comienza con KB) le brinda la versión del parche que puede comparar con su número de compilación.

Luego transfiera el zip a uno de sus almacenes de datos y haga :

``esxcli software vib update -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip``

> **Nota**
>
> Sustituye bien la ruta y el nombre del zip según tu configuración

> **Importante**
>
> Tenga cuidado de poner la ruta completa al zip, de lo contrario no funcionará

El comando anterior solo actualiza las vibraciones que lo necesitan, pero puede forzar la instalación de todas las vibraciones en el paquete (así que tenga cuidado, esto puede degradar) haciendo :

``esxcli software vib install -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip``

# Configuración de NTP

Por defecto el ESXi no usa NTP lo que quiere decir que no esta a tiempo y que las VMs no estan a tiempo, corregirlo es muy sencillo. Tienes que ir desde la versión web a Administrar → Sistema → Fecha y hora, ahí le das a “Cambiar configuración" :

![vmware.tips16](images/vmware.tips16.PNG)

Y en la casilla "Servidor NTP" debes poner : ``0.debian.pool.n, 1.debian.pool.n, 2.debian.pool.n, 3.debian.pool.n, time.nist.gov``

![vmware.tips17](images/vmware.tips17.PNG)

Luego en Acciones → Servicio NTP → Estrategia haga clic en "Iniciar y detener con el host" :

![vmware.tips18](images/vmware.tips18.PNG)

Todavía en Acciones → Servicio NTP, haga clic en "Iniciar"

Aquí está su ESXi que debería tomarse un buen tiempo por sí solo ahora.

# Acceso externo al ESXi

Para acceder al ESXi desde el exterior necesita :

-   abra el puerto 443 al 443 de ESXi
-   abra el puerto 902 al 902 de ESXi

Y eso es todo. Un pequeño truco que puede hacer si tiene un Synology NAS (tenga cuidado de seguir) :

-   abra el 443 al 5001 del Synology NAS
-   abra el 80 al 80 del NAS (útil solo para generar los certificados let's encrypt)
-   abra el puerto 902 al 902 de ESXi

Luego, en el NAS en el panel de control, luego en el portal de la aplicación y el proxy inverso (tenga cuidado, necesita absolutamente DSM 6) :

![vmware.tips19](images/vmware.tips19.PNG)

Haga clic en crear y poner :

![vmware.tips20](images/vmware.tips20.PNG)

En "Nombre de host" (a nivel de fuente) debe poner el DNS deseado (por ejemplo monesxi.mondsn.synology.yo) y en "Host name" (a nivel de destino) debe poner la IP del ESXi

> **Nota**
>
> También puedes hacer lo mismo para acceder a jeedom pero esta vez poniendo la IP de jeedom (de la vm si estas virtualizada) y el puerto 80

> **Nota**
>
> Una vez que haya hecho esto y si su DNS apunta correctamente al NAS, puede generar un certificado SSL válido de forma gratuita con Let's encrypt, yendo a Seguridad ⇒ certificado y agregando. Entonces no olvide hacer clic en configurar para asignarlo a su proxy inverso

Luego para acceder a tu ESXi solo tienes que ir a tu DNS o IP externa con tu navegador agregando /ui al final y listo.

> **Importante**
>
> Si pasas por el proxy inverso del NAS no funciona la consola en modo web de las VMs (porque pasa por el websocket), en cambio si pasas por VMware Remote Console todo debería estar bien (pasa por puerto 902)

> **Nota**
>
> También hay una aplicación Vmware Watchlist en Android para acceder a ESXi y a las consolas de VM

# Certificado SSL

Es posible importar certificados de vmware directamente a su pc para no tener más la alerta.

En orden debes :

-   tiene una url (dns) para acceder a su esxi, aquí tomaremos ``esxi1.lan``
-   configura el nombre de tu esxi, en ssh on it do : ``esxcli system hostname set --host=esxi1``
-   configurar el fqdn : ``esxcli system hostname set --fqdn=esxi1.lan``
-   Recuperar el certificado raíz del esxi, se encuentra en ``/etc/vmware/ssl/castore.pem``

En la estación de trabajo, haga clic con el botón derecho y luego instale el certificado, colóquelo en "Autoridad de certificación raíz de confianza""
