No es realmente un tutorial aquí, sino más bien una colección de consejos y trucos sobre
VMware

Agrega tu licencia 
==================

Una vez conectado en la interfaz web (IP\_ESXI / ui) debe ir a
"Gestionar" :

![vmware.tips](images/vmware.tips.PNG)

Luego en "Licencias" y haga clic en "Asignar una licencia"

![vmware.tips2](images/vmware.tips2.PNG)

E ingrese su clave de licencia

![vmware.tips3](images/vmware.tips3.PNG)

> **Note**
>
> Como recordatorio, si no lo hace, es posible que su ESXi ya no sea
> operar después de 60 días

Montar un almacén de datos NFS con Synology 
========================================

Veremos aquí cómo montar un recurso compartido NFS desde Synology en
VMware Esto permite, por ejemplo, poner máquinas virtuales en el
Synology (que puede tener más espacio que el ESXi) o enviar el
copias de seguridad de la máquina en Synology

Configuración de Synology 
-------------------------

Tienes que ir al panel de control y luego "Servicios de
archivos "y marque la casilla" Habilitar NFS" :

![vmware.tips4](images/vmware.tips4.PNG)

Luego haga clic en "Carpeta compartida", luego elija la carpeta para
compartir (aquí Copia de seguridad), haga clic en modificar y luego en "Autorización NFS" y
finalmente en crear (aquí ya tengo uno, tu lista debería ser
vacio) :

![vmware.tips5](images/vmware.tips5.PNG)

Luego pones la IP de tu ESXi y en "Squash" pones
"Asigne todos los usuarios al administrador "y luego valide :

![vmware.tips6](images/vmware.tips6.PNG)

Luego debemos recuperar la ruta compartida (aquí / volumen2 / Copia de seguridad) :

![vmware.tips7](images/vmware.tips7.PNG)

Aquí está terminado en el lado de Synology, ahora cambiaremos al lado de ESXi

Configuración de ESXi 
-----------------------

Vaya a "Almacenamiento" :

![vmware.tips8](images/vmware.tips8.PNG)

Luego haga clic en "Nueva base de datos" :

![vmware.tips9](images/vmware.tips9.PNG)

Allí selecciona "Montar una base de datos NFS" y luego
Próximo :

![vmware.tips10](images/vmware.tips10.PNG)

Ingrese el nombre del almacén de datos para crear (tenga cuidado de evitar espacios y
caracteres especiales), coloque la IP de nuestra Synology y coloque la ruta
compartir (ver arriba) y finalmente validar :

![vmware.tips11](images/vmware.tips11.PNG)

Haga clic en finalizar :

![vmware.tips12](images/vmware.tips12.PNG)

Y ahora debería aparecer su nuevo almacén de datos (de lo contrario, haga clic en
"Actualiser").

Complemento VAAI Synology agregado para montaje NFS 
==============================================

Agregar este complemento habilita la aceleración de hardware en
Montajes NFS (para una explicación, vea
[aquí](http://www.virtual-sddc.ovh/exploiter-les-vaai-nfs-avec-un-nas-synology/))

Para ver si lo tiene, debe conectarse con el cliente grueso
(No encontré la información en el cliente web) y vaya a configuración →
almacenamiento :

![vmware.tips13](images/vmware.tips13.PNG)

La instalación es bastante simple, primero debes activar el servicio
ESXi SSH (en la interfaz web, vaya a la acción ⇒ servicios
⇒ Active Secure Shell), luego conéctese en SSH arriba (el
los identificadores son los mismos que para acceder a la interfaz). Entonces el
solo lo haces :

    esxcli software vib install -v https://global.download.synology.com/download/Tools/NFSVAAIPlugin/1.0-0001/VMware_ESXi/esx-nfsplugin.vib -f

Usted debe tener :

![vmware.tips14](images/vmware.tips14.PNG)

Luego debe reiniciar el ESXi, para verificar que está bien, debe
luego regrese con el cliente grueso a configuración → almacenamiento :

![vmware.tips15](images/vmware.tips15.PNG)

Instalar / actualizar ESXi Embedded Host Client 
===================================================

ESXi Embedded Host Client es una interfaz web (en HTML5) de ESXi que
permite en el 95% de los casos prescindir del cliente pesado. Ella esta presente
predeterminado en la versión 6.0 actualización 2, pero en la versión 1.0 es
Se recomienda encarecidamente actualizarlo.

Encontrarás toda la información
[aquí](https://labs.vmware.com/flings/esxi-embedded-host-client)

Para ver si tiene la interfaz web, simplemente vaya con
su navegador en IP\_ESXI / ui si no tiene nada que necesita
instálelo, primero debe conectarse en SSH en el ESXI y luego :

    esxcli software vib install -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib

Si ya lo tienes, para actualizarlo debes hacer :

    esxcli software vib update -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib

Instalación del cliente grueso 
============================

Esta parte es opcional si no necesita administrar el USB.

Debe ir, con su navegador de internet, a la IP del ESXi
luego haga clic en el enlace "Descargar vSphere Client para Windows" :

![vmware.createvm](images/vmware.createvm.PNG)

Una vez descargado solo tienes que comenzar la instalación (paso
voluntariamente en esta parte porque es suficiente para validar todo).

Luego, inicie VMware? vSphere Client, debería tener :

![vmware.createvm1](images/vmware.createvm1.PNG)

Solo tiene que ingresar la IP de su ESXi, el nombre de usuario y el
contraseña y estás conectado a ella :

![vmware.createvm2](images/vmware.createvm2.PNG)

Actualización de ESXi 
=====================

El procedimiento es bastante fácil, primero debes recuperar el parche
yendo [aquí](https://my.vmware.com/group/vmware/patch#search) (Él?
probablemente tendrá que iniciar sesión con su cuenta de VMware?). En la
La lista "Seleccione un producto" ponga "ESXi (Embebido e Instalable)", en
Deje la última versión de VMware? y haga "Buscar". Después
descargar el parche deseado (generalmente el último). El número de compilación (el
primer problema, no el que comienza con KB) le da la versión del
parche que puedes comparar con tu número de compilación.

Luego transfiere el zip a una de tus tiendas de datos y crea :

    Actualización de vib del software esxcli -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip

> **Note**
>
> Reemplace la ruta y el nombre postal de acuerdo con su
> Configuración?

> **Important**
>
> Tenga cuidado de poner el camino completo al zip, de lo contrario no
> no funciona

El comando anterior solo actualiza las vibraciones que lo necesitan pero
puedes forzar la instalación de todas las vibraciones del paquete (entonces
tenga cuidado, esto puede ser degradado) haciendo :

    instalación de vib del software esxcli -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip

Configuración NTP 
====================

Por defecto, ESXi no utiliza NTP, por lo que no está en
el tiempo y las máquinas virtuales no están a tiempo, corregirlo es muy
sencillo. Desde la versión web, vaya a Administrar → Sistema →
Fecha y hora, haga clic en "Cambiar configuración" :

![vmware.tips16](images/vmware.tips16.PNG)

Y en el cuadro "Servidor NTP" tienes que poner : 0.debian.pool.n,
1.debian.pool.n, 2.debian.pool.n, 3.debian.pool.n, time.nist.gov

![vmware.tips17](images/vmware.tips17.PNG)

Luego, en Acciones → Servicio NTP → Estrategia, haga clic en "Iniciar y
parar con el anfitrión" :

![vmware.tips18](images/vmware.tips18.PNG)

Aún en Acciones → Servicio NTP, haga clic en "Iniciar"

Este es tu ESXi ya debería tomarse el tiempo solo.

Acceso externo a ESXi 
========================

Para acceder al ESXi desde el exterior, necesita :

-   abra el puerto 443 a ESXi 443

-   abra el puerto 902 a ESXi 902

Y eso es todo. Pequeño consejo si tiene un Synology NAS que
puede hacer (tenga cuidado de seguir) :

-   abra 443 a 5001 en Synology NAS

-   abra los 80 hacia los 80 del NAS (útil solo para generar el
    encriptemos certificados)

-   abra el puerto 902 a ESXi 902

Luego en el NAS en el panel de control y luego en el portal
aplicación y proxy inverso (cuidado con DSM 6 es esencial) :

![vmware.tips19](images/vmware.tips19.PNG)

Haga clic en crear y poner :

![vmware.tips20](images/vmware.tips20.PNG)

En "Nombre de host" (en el nivel de origen) debe poner el DNS deseado
(por ejemplo, monesxi.mondsn.synology.yo) y en "Nombre de host" (en el nivel
del destino) debe poner la IP del ESXi

> **Note**
>
> También puede hacer lo mismo para acceder a jeedom pero por
> esta vez poniendo la IP de la libertad (desde el vm si estás en
> virtualizado) y el puerto 80

> **Note**
>
> Una vez que hayas hecho eso y tu DNS esté apuntando correctamente
> en el NAS puede generar un certificado SSL válido de forma gratuita
> con Encriptemos, yendo a Secrity ⇒ certificado y haciendo
> Añadir?. Entonces no olvides hacer clic en configurar para
> asignarlo a su proxy inverso

Luego para acceder a su ESXi solo necesita con su navegador
vaya a su DNS o IP externo agregando / ui al final y eso es
bon.

> **Important**
>
> Si utiliza el proxy inverso de NAS, la consola en modo web de
> Sin embargo, las máquinas virtuales no funcionan (porque pasa por websocket)
> si pasa por VMware? Remote Console, todo debería estar bien (esto
> pasa por el puerto 902)

> **Note**
>
> También hay una aplicación Vmware Watchlist en Android para
> tener acceso a ESXi y a las consolas VM

Certificado SSL 
==============

Es posible importar certificados vmware directamente en
tu pc ya no tiene la alerta.

Para que sea necesario :

-   tener una url (dns) para acceder a su esxi, aquí tomaremos
    esxi1.lan

-   configura el nombre de tu esxi, en ssh arriba haz :

<!-- -->

    conjunto de nombres de host del sistema esxcli --host = esxi1

-   configurar el fqdn :

<!-- -->

    conjunto de nombres de host del sistema esxcli --fqdn = esxi1.lan

-   Recupere el certificado raíz de esxi, está en
    /etc/vmware/ssl/castore.pem

Haga clic derecho en la computadora, luego instale el certificado, póngalo en
"Autoridad de certificación raíz de confianza"
