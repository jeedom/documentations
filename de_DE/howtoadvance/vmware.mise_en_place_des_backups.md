# VMware-Backup-Implementierung

Es ist wichtig, Sicherungen Ihrer VMs zu haben. Dies ist ein Punkt, den Sie nicht übersehen sollten, ganz zu schweigen von Hardwarefehlern, die Sie möglicherweise eines Tages aufgrund einer unsachgemäßen Behandlung oder eines folgenden Problems zu einer Sicherung zurückkehren müssen ein Update. Bitte beachten Sie, dass es sich hier um das vollständige Image der VMs handelt. Es handelt sich nicht nur um eine Anwendungssicherung, sondern auch um eine relativ große Größe.

Eine der Einschränkungen beim Erstellen einer Sicherung unter VMware besteht darin, absolut zwei Datenspeicher zu haben. Dafür haben Sie mehrere Möglichkeiten :

-   2 Festplatten / SSD mit jeweils einem Datenspeicher
-   ein NAS (Synology-Typ), der einen NFS-Mount gemeinsam nutzt. In diesem Fall müssen Sie VMware ein Netzwerkdateisystem hinzufügen, damit es als Datenspeicher angezeigt wird

Für dieses Tutorial werde ich die ESXi-Weboberfläche verwenden, die entweder durch Installation einer Vib oder ab Version 6 verfügbar ist.0 Update 2. Um auf diese Schnittstelle zuzugreifen, gehen Sie zur Erinnerung einfach zu IP\_ESXI / ui

> **Notiz**
>
> Für dieses Tutorial werde ich die ESXi-Weboberfläche verwenden, die entweder durch Installation einer Vib oder ab Version 6 verfügbar ist.0 Update 2. Für Erinnerungen an den Zugriff auf diese Schnittstelle gehen Sie einfach zu ``IP_ESXI/ui``

# GhettoVCB Installation

Wir müssen das wiederherstellen [Skript](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh) und übertragen Sie es auf das ESXi (im selben Datenspeicher wie der, in dem beispielsweise die Sicherungen gehostet werden).

> **Notiz**
>
> Im Rest dieses Tutorials denke ich, dass Sie das ghettoVCB-Skript eingefügt haben.sh in /vmfs/volumes/Backup/ghettoVCB.sh. Es liegt an Ihnen, die bereitgestellten Befehle / Skripte entsprechend Ihrer Konfiguration anzupassen.

# Verbindung in ssh

Sie müssen eine Verbindung in SSH auf dem ESXi herstellen, um dies zu tun, müssen Sie dies über die Schnittstelle tun

![vmware.backup](images/vmware.backup.PNG)

Stellen Sie dann mit Putty oder Kitty eine Verbindung her, indem Sie die IP Ihres ESXi eingeben und Ihre Kennungen dafür verwenden

# Erstellung der Konfigurationsdatei

> **Notiz**
>
> Für den Rest dieses Tutorials denke ich, dass Ihr Sicherungsdatenspeicher den Pfad / vmfs / volume / Backup hat. Achten Sie darauf, ihn zu ändern, wenn dies bei Ihnen nicht der Fall ist

Im Sicherungsdatenspeicher müssen Sie eine Datei erstellen ``ghettoVCB.conf`` was beinhaltet :

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

Die Parameter, die Sie anpassen müssen, sind :

-   ``VM_BACKUP_VOLUME`` ⇒ Speicherort Ihres Sicherungsdatenspeichers
-   ``VM_BACKUP_ROTATION_COUNT`` ⇒ Anzahl der Sicherungen pro VM, die aufbewahrt werden sollen

> **Notiz**
>
> Sie können konsultieren [hier](https://communities.vmware.com/docs/DOC-8760) die vollständige ghettoVCB-Dokumentation mit einer Beschreibung der einzelnen Parameter

> **Wichtig**
>
> Achten Sie darauf, die zu setzen ``/`` final für den Parameter ``VM_BACKUP_VOLUME`` Andernfalls ist das Skript fehlerhaft

# Backup-Test

Hier starten wir eine erste erste Sicherung aller VMs, um festzustellen, ob alles in Ordnung ist. Danach planen wir es automatisch. Kehren Sie in SSH zum ESXi zurück (stellen Sie gegebenenfalls die Verbindung wieder her) und tun Sie dies :

``/vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

Dadurch wird eine Sicherung aller Ihrer VMs gestartet (und dies kann daher lange dauern). Am Ende sollten Sie in Ihrem Sicherungsdatenspeicher einen Ordner nach VM und in jedem VM-Ordner einen Unterordner nach Datum mit 4 Dateien haben :

![vmware.backup2](images/vmware.backup2.PNG)

-   ``*-flat.vmdk`` ⇒ die virtuelle Festplatte Ihrer Maschine
-   ``*.vmdk`` ⇒ der Deskriptor der Disc
-   ``*.vmx`` ⇒ die Datei mit der Konfiguration Ihres Geräts
-   ``STATUS.ok`` ⇒ zeigt an, dass die Sicherung in Ordnung ist

Hier ist eine weitere Möglichkeit für die Befehlszeile :

-   Backup-Simulation : ``/vmfs/volumes/Backup/ghettoVCB.sh -d dryrun -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Starten Sie im Debug-Modus : ``/vmfs/volumes/Backup/ghettoVCB.sh -d debug -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Sichern Sie nur die VM "toto" ``/vmfs/volumes/Backup/ghettoVCB.sh -m toto -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

# Automatischer Start der Sicherung

Sie müssen die Befehlszeile zur Crontab hinzufügen, aber unter VMware ist die Crontab etwas Besonderes und wird vor allem bei jedem Start überschrieben. Um dies zu vermeiden, müssen Sie daher in SSH unter ESXi ein kleines Skript hinzufügen, das die Crontab beim Booten aktualisiert (keine Sorge, es ist recht einfach und schnell) :

``vi /etc/rc.local.d/local.sh``

Und davor ``exit 0`` Fügen Sie die folgenden Zeilen hinzu :

````
/bin/kill $(cat /var/run/crond.pid)
/bin/echo "0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1" >> /var/spool/cron/crontabs/root
/usr/lib/vmware/busybox/bin/busybox crond
````

> **Notiz**
>
> Hier fordere ich jeden 1. des Monats ein Backup an, das Sie durch Ändern ändern können : ``0 0 1 * *``

> **Notiz**
>
> Hier mache ich ein Backup aller VMs, Sie können dies anpassen, indem Sie die ersetzen ``-a`` Von ``-m ma_vm``, Seien Sie vorsichtig, wenn Sie mehrere VMs platzieren möchten, müssen Sie die Zeile duplizieren ``/bin/echo "0 0 1 * *"``
````
/vmfs/volumes/Backup/ghettoVCB.sh -a -g
/vmfs/volumes/Backup/ghettoVCB.conf &gt;/dev/null 2>&1";
/var/spool/cron/crontabs/root" et en mettre une Von VM à backuper
````

> **Wichtig**
>
> Vergessen Sie nicht, den Pfad zur Konfigurationsdatei ghettoVCB entsprechend Ihrer Konfiguration anzupassen : ``/vmfs/volumes/Backup/ghettoVCB.conf``

Letzter Schritt: Sie müssen Ihr ESXi neu starten, damit cron berücksichtigt wird. Sie können das Ergebnis sehen, indem Sie dies tun (immer in SSH)) :

``cat /var/spool/cron/crontabs/root``

Hier müssen Sie eine Linie haben :

``0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1``
