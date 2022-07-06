# Implementación de respaldo de VMware

Es importante tener copias de seguridad de sus máquinas virtuales y este es un punto que no debe pasarse por alto, sin mencionar fallas de hardware que algún día necesitará volver a una copia de seguridad debido a un manejo incorrecto o un problema posterior una actualización. Tenga en cuenta que aquí estamos hablando de la imagen completa de las máquinas virtuales, no es solo una copia de seguridad de la aplicación, por lo tanto, tendrá un tamaño bastante grande.

Una de las restricciones para hacer una copia de seguridad en VMware es tener absolutamente 2 almacenes de datos. Para esto tienes varias opciones :

-   2 discos duros / SSD con un almacén de datos en cada uno
-   un NAS (tipo Synology) que comparte un montaje NFS. En este caso, debe agregar un sistema de archivos de red a VMware para que lo vea como un almacén de datos

Para este tutorial utilizaré la interfaz web ESXi que está disponible instalando un vib o desde la versión 6.0 actualización 2. Como recordatorio, para acceder a esta interfaz solo vaya a IP\_ESXI / ui

> **Nota**
>
> Para este tutorial utilizaré la interfaz web ESXi que está disponible instalando un vib o desde la versión 6.0 actualización 2. Para recibir recordatorios para acceder a esta interfaz, solo vaya a ``IP_ESXI/ui``

# Instalación de GhettoVCB

Debemos recuperar esto [Guión](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh) y transferirlo al ESXi (en el mismo almacén de datos que el que albergará las copias de seguridad, por ejemplo).

> **Nota**
>
> En el resto de este tutorial, considero que ha puesto el script ghettoVCB.sh en /vmfs/volumes/Backup/ghettoVCB.sh. Depende de usted adaptar los comandos / scripts proporcionados de acuerdo con su configuración.

# Conexión en ssh

Tendrá que conectarse en SSH en el ESXi, para hacerlo debe hacerlo desde la interfaz

![vmware.backup](images/vmware.backup.PNG)

Luego, con masilla o gatito, conéctelo poniendo la IP de su ESXi y usando sus identificadores

# Creación de archivo de configuración

> **Nota**
>
> Para el resto de este tutorial, considero que su almacén de datos de respaldo tiene la ruta / vmfs / volume / Backup, tenga cuidado de cambiar si este no es el caso para usted

En el almacén de datos de respaldo debe crear un archivo ``ghettoVCB.conf`` que contiene :

````
VM_BACKUP_VOLUME=/vmfs/volumes/Backup/
DISK_BACKUP_FORMAT=thin
VM_BACKUP_ROTATION_COUNT=2
POWER_VM_DOWN_BEFORE_BACKUP=0
ENABLE_HARD_POWER_OFF=0
ITER_TO_WAIT_SHUTDOWN=3
POWER_DOWN_TIMEOUT=5
ENABLE_COMPRESSION=0
VM_SNAPSHOT_MEMORY=0
VM_SNAPSHOT_QUIESCE=0
ALLOW_VMS_WITH_SNAPSHOTS_TO_BE_BACKEDUP=0
ENABLE_NON_PERSISTENT_NFS=0
UNMOUNT_NFS=0
NFS_SERVER=172.30.0.195
NFS_MOUNT=/nfsshare
NFS_LOCAL_NAME=nfs_storage_backup
NFS_VM_BACKUP_DIR=mybackups
SNAPSHOT_TIMEOUT=15
EMAIL_LOG=0
EMAIL_SERVER=auroa.primp-industries.com
EMAIL_SERVER_PORT=25
EMAIL_DELAY_INTERVAL=1
EMAIL_TO=auroa@primp-industries.com
EMAIL_FROM=root@ghettoVCB
WORKDIR_DEBUG=0
VM_SHUTDOWN_ORDER=
VM_STARTUP_ORDER=
````

Los parámetros que debe adaptar son :

-   ``VM_BACKUP_VOLUME`` ⇒ ubicación de su almacén de datos de respaldo
-   ``VM_BACKUP_ROTATION_COUNT`` ⇒ número de copias de seguridad por VM para mantener

> **Nota**
>
> Puedes consultar [aquí](https://communities.vmware.com/docs/DOC-8760) la documentación completa de ghettoVCB con una descripción de cada parámetro

> **Importante**
>
> Tenga cuidado de poner el ``/`` final para el parámetro ``VM_BACKUP_VOLUME`` de lo contrario, el script tendrá un error

# Prueba de respaldo

Aquí lanzaremos una primera copia de seguridad inicial de todas las máquinas virtuales para ver si todo está bien. A partir de entonces lo programaremos automáticamente. Regrese al ESXi en SSH (vuelva a conectar si es necesario) y haga :

``/vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

Esto lanzará una copia de seguridad de todas sus máquinas virtuales (y, por lo tanto, puede llevar mucho tiempo)). Al final, debe tener en su almacén de datos de respaldo una carpeta por VM y en cada carpeta de VM una subcarpeta por fecha que contenga 4 archivos :

![vmware.backup2](images/vmware.backup2.PNG)

-   ``*-flat.vmdk`` ⇒ el disco virtual de su máquina
-   ``*.vmdk`` ⇒ el descriptor del disco
-   ``*.vmx`` ⇒ el archivo que contiene la configuración de su máquina
-   ``STATUS.ok`` ⇒ indica que la copia de seguridad está bien

Aquí hay otra posibilidad para la línea de comando :

-   Simulación de respaldo : ``/vmfs/volumes/Backup/ghettoVCB.sh -d dryrun -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Iniciar en modo de depuración : ``/vmfs/volumes/Backup/ghettoVCB.sh -d debug -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Copia de seguridad solo de la VM "toto" ``/vmfs/volumes/Backup/ghettoVCB.sh -m toto -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

# Lanzamiento automático de respaldo

Debe agregar la línea de comando al crontab, pero en VMware el crontab es un poco especial y, sobre todo, se sobrescribe en cada inicio. Para evitar esto, debe agregar un pequeño script que actualizará el crontab en el arranque (no se preocupe, es bastante simple y rápido), en SSH en ESXi do :

``vi /etc/rc.local.d/local.sh``

Y antes ``exit 0`` agregue las siguientes líneas :

````
/bin/kill $(cat /var/run/crond.pid)
/bin/echo "0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1" >> /var/spool/cron/crontabs/root
/usr/lib/vmware/busybox/bin/busybox crond
````

> **Nota**
>
> Aquí solicito una copia de seguridad cada 1 de cada mes, puede cambiar esto modificando : ``0 0 1 * *``

> **Nota**
>
> Aquí hago una copia de seguridad de todas las máquinas virtuales, puede adaptar esto reemplazando el ``-a`` por ``-m ma_vm``, tenga cuidado si desea poner varias máquinas virtuales, debe duplicar la línea ``/bin/echo "0 0 1 * *"``
````
/vmfs/volumes/Backup/ghettoVCB.sh -a -g
/vmfs/volumes/Backup/ghettoVCB.conf &gt;/dev/null 2>&1";
/var/spool/cron/crontabs/root" et en mettre une por VM à backuper
````

> **Importante**
>
> No olvide adaptar la ruta al archivo de configuración ghettoVCB de acuerdo con su configuración : ``/vmfs/volumes/Backup/ghettoVCB.conf``

Ultimo paso: debe reiniciar su ESXi para que se tenga en cuenta cron, puede ver el resultado haciendo (siempre en SSH) :

``cat /var/spool/cron/crontabs/root``

Aquí debes tener una línea :

``0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1``
