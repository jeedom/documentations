# 

. .

.  :

-   
-   . 

.. 

> ****
>
> ..  ``IP_ESXI/ui``

# 

 [](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh) ).

> ****
>
> .. .

# 



![vmware.backup](images/vmware.backup.PNG)



# 

> ****
>
> 

 ``ghettoVCB.conf``  :

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

 :

-   ``VM_BACKUP_VOLUME`` 
-   ``VM_BACKUP_ROTATION_COUNT`` 

> ****
>
>  [](https://communities.vmware.com/docs/DOC-8760) 

> ****
>
>  ``/``  ``VM_BACKUP_VOLUME`` 

# 

. .  :

``/vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

).  :

![vmware.backup2](images/vmware.backup2.PNG)

-   ``*-flat.vmdk`` 
-   ``*.vmdk`` 
-   ``*.vmx`` 
-   ``STATUS.ok`` 

 :

-    : ``/vmfs/volumes/Backup/ghettoVCB.sh -d dryrun -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-    : ``/vmfs/volumes/Backup/ghettoVCB.sh -d debug -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   " ``/vmfs/volumes/Backup/ghettoVCB.sh -m toto -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

# 

.  :

``vi /etc/rc.local.d/local.sh``

 ``exit 0``  :

````
/bin/kill $(cat /var/run/crond.pid)
/bin/echo "0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1" >> /var/spool/cron/crontabs/root
/usr/lib/vmware/busybox/bin/busybox crond
````

> ****
>
>  : ``0 0 1 * *``

> ****
>
>  ``-a``  ``-m ma_vm``,  ``/bin/echo "0 0 1 * *"``
````
/vmfs/volumes/Backup/ghettoVCB.sh -a -g
/vmfs/volumes/Backup/ghettoVCB.conf &gt;/dev/null 2>&1";
/var/spool/cron/crontabs/root" et en mettre une  VM à backuper
````

> ****
>
>  : ``/vmfs/volumes/Backup/ghettoVCB.conf``

: ) :

``cat /var/spool/cron/crontabs/root``

 :

``0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1``
