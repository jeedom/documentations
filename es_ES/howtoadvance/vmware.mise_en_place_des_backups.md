Es importante tener copias de seguridad de sus máquinas virtuales y es un punto para no
especialmente no descuidar, sin mencionar fallas de hardware que pueda
un día necesitando volver a una copia de seguridad después de un mal
manipulación o un problema después de una actualización. Ten cuidado aquí nosotros
está hablando de la imagen completa de las máquinas virtuales, no es solo una copia de seguridad de la aplicación,
por lo tanto tendrá un tamaño bastante grande.

Una de las restricciones para hacer una copia de seguridad en VMware es tener
absolutamente 2 almacenes de datos. Para esto tienes varias opciones :

-   2 discos duros / SSD con un almacén de datos en cada uno

-   un NAS (tipo Synology) que comparte un montaje NFS. En este caso
    necesita agregar un sistema de archivos de red a VMware para que vea
    este como un almacén de datos

Para este tutorial usaré la interfaz web de ESXi que es
disponible ya sea instalando un vib o desde la versión
6.0 actualización 2. Como recordatorio, para acceder a esta interfaz solo
ir a IP \ _ESXI / ui

> **Nota**
>
> Para este tutorial usaré la interfaz web de ESXi que es
> disponible ya sea instalando un vib o desde
> versión 6.0 actualización 2. Para recordatorios para acceder a esta interfaz,
> solo ve a IP \ _ESXI / ui

Instalación de GhettoVCB 
=========================

Debemos recuperar esto
[Guión](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh)
y transferirlo al ESXi (en el mismo almacén de datos que el que va
bienvenidos respaldos por ejemplo).

> **Nota**
>
> En el resto de este tutorial considero que has puesto el Guión
> ghettoVCB.sh en / vmfs / volume / Backup / ghettoVCB.sh. Depende de usted adaptarse
> dependiendo de su configuración, los comandos / Guións provistos.

Conexión en ssh 
================

Tendrá que conectarse en SSH en el ESXi, para hacer esto necesita
desde la interfaz

![vmware.backup](images/vmware.backup.PNG)

Luego, con masilla o gatito, conéctelo poniendo la IP de
su ESXi y usar sus credenciales

Creación de archivo de configuración 
====================================

> **Nota**
>
> Para el resto de este tutorial, considero que su almacén de datos de
> la copia de seguridad tiene ruta / vmfs / volume / Backup, tenga cuidado de cambiar si
> este no es el caso contigo

En el almacén de datos de respaldo debe crear un archivo ghettoVCB.conf quien
contiene :

    VM_BACKUP_VOLUME = / vmfs / volume / Backup /
    DISK_BACKUP_FORMAT = delgado
    VM_BACKUP_ROTATION_COUNT = 2
    POWER_VM_DOWN_BEFORE_BACKUP = 0
    ENABLE_HARD_POWER_OFF = 0
    ITER_TO_WAIT_SHUTDOWN = 3
    POWER_DOWN_TIMEOUT = 5
    ENABLE_COMPRESSION = 0
    VM_SNAPSHOT_MEMORY = 0
    VM_SNAPSHOT_QUIESCE = 0
    ALLOW_VMS_WITH_SNAPSHOTS_TO_BE_BACKEDUP = 0
    ENABLE_NON_PERSISTENT_NFS = 0
    UNMOUNT_NFS = 0
    NFS_SERVER = 172.30.0.195
    NFS_MOUNT = / nfsshare
    NFS_LOCAL_NAME = nfs_storage_backup
    NFS_VM_BACKUP_DIR = mybackups
    SNAPSHOT_TIMEOUT = 15
    EMAIL_LOG = 0
    EMAIL_SERVER = auroa.primp-industries.com
    EMAIL_SERVER_PORT = 25
    EMAIL_DELAY_INTERVAL = 1
    EMAIL_TO=auroa@primp-industries.com
    EMAIL_FROM = root @ ghettoVCB
    WORKDIR_DEBUG = 0
    VM_SHUTDOWN_ORDER=
    VM_STARTUP_ORDER=

Los parámetros que debe adaptar son :

-   **VM \ _BACKUP \ _VOLUME** ⇒ ubicación de su almacén de datos de respaldo

-   **VM \ _BACKUP \ _ROTATION \ _COUNT** ⇒ número de copias de seguridad por VM para mantener

> **Nota**
>
> Puedes consultar
> [aquí](https://communities.vmware.com/docs/DOC-8760) la documentación
> completo de ghettoVCB con una descripción de cada parámetro

> **Importante**
>
> Tenga cuidado de poner / final para el parámetro
> VM \ _BACKUP \ _VOLUME de lo contrario, el Guión tendrá un error

Prueba de respaldo 
==============

Aquí vamos a lanzar una primera copia de seguridad inaquíal de todas las máquinas virtuales para
ver si todo está bien. A partir de entonces lo programaremos automáticamente.
Regrese al ESXi en SSH (vuelva a conectar si es necesario) y haga :

    / vmfs / volume / Backup / ghettoVCB.sh -a -g / vmfs / volume / Backup / ghettoVCB.conf

Esto lanzará una copia de seguridad de todas sus máquinas virtuales (y, por lo tanto, puede tomar mucho
de tiempo). Al final, debe tener en su almacén de datos de respaldo un
carpeta por VM y en cada carpeta de VM una subcarpeta por fecha
que contiene 4 archivos :

![vmware.backup2](images/vmware.backup2.PNG)

-   \* - plano.vmdk ⇒ el disco virtual de su máquina

-   \*.vmdk ⇒ el deGuiónor del disco

-   \*.vmx ⇒ el archivo que contiene la configuración de su máquina

-   Estado.ok ⇒ indica que la copia de seguridad está bien

Aquí hay otra posibilidad para la línea de comando :

-   Simulación de respaldo :

<!-- -->

    / vmfs / volume / Backup / ghettoVCB.sh -d dryrun -a -g / vmfs / volume / Backup / ghettoVCB.conf

-   Inaquíar en modo de depuración :

<!-- -->

    / vmfs / volume / Backup / ghettoVCB.sh -d debug -a -g / vmfs / volume / Backup / ghettoVCB.conf

-   Copia de seguridad solo de la VM "toto"

<!-- -->

    / vmfs / volume / Backup / ghettoVCB.sh -m toto -a -g / vmfs / volume / Backup / ghettoVCB.conf

Lanzamiento automático de respaldo 
=================================

Debe agregar la línea de comando al crontab pero en VMware el
crontab es un poco especial y se sobrescribe especialmente en cada inaquío. Para
evite esto, por lo que debe agregar un pequeño Guión que actualizará el
crontab en el arranque (no te preocupes, es bastante simple y rápido), en
SSH en el ESXi do :

    vi /etc/rc.local.d/local.sh

Y antes de "salir 0" agregue las siguientes líneas :

    / bin / kill $ (cat /var/run/crond.pid)
    / bin / echo "0 0 1 * * / vmfs / volume / Backup / ghettoVCB.sh -a -g / vmfs / volume / Backup / ghettoVCB.conf> / dev / null 2> & 1 ">> / var / spool / cron / crontabs / root
    / usr / lib / vmware / busybox / bin / busybox crond

> **Nota**
>
> Aquí solaquíto una copia de seguridad cada 1 de cada mes, puede cambiar
> esto modificando : 0 0 1 \* \*

> **Nota**
>
> Aquí hago una copia de seguridad de todas las máquinas virtuales, puede adaptar esto
> reemplazando -a con -m ma \ _vm, tenga cuidado si quiere poner
> varias máquinas virtuales debe duplicar la línea "/ bin / echo" 0 0 1 \* \*
> / vmfs / volume / Backup / ghettoVCB.sh -a -g
> / vmfs / volume / Backup / ghettoVCB.conf &gt;/dev/null 2&gt;&1" &gt;&gt;
> / var / spool / cron / crontabs / root "y coloca uno por VM para hacer una copia de seguridad

> **Importante**
>
> No olvide adaptar la ruta al archivo de configuración de
> ghettoVCB según su configuración :
> / vmfs / volume / Backup / ghettoVCB.conf

Ultimo paso: debe reinaquíar su ESXi para que se tome el cron
en cuenta, puede ver el resultado haciendo (siempre en SSH) :

    cat / var / spool / cron / crontabs / root

Aquí debes tener una línea :

    0 0 1 * * / vmfs / volume / Backup / ghettoVCB.sh -a -g / vmfs / volume / Backup / ghettoVCB.conf> / dev / null 2> & 1
