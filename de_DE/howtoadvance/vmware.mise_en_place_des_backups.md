# VMware-Sicherung einrichten

Es ist wichtig, Backups Ihrer VMs zu haben, und dies ist ein Punkt, der nicht übersehen werden sollte, ganz zu schweigen von Hardwarefehlern, die Sie möglicherweise eines Tages nach unsachgemäßer Handhabung oder einem Problem nach einem Update auf ein Backup zurücksetzen müssen. Bitte beachten Sie, dass wir hier über ein vollständiges Image der VMs sprechen, es ist nicht nur ein Anwendungs-Backup, es wird daher ziemlich groß sein.

Eine der Einschränkungen für die Erstellung eines Backups unter VMware besteht darin, absolut 2 Datenspeicher zu haben. Dafür haben Sie mehrere Möglichkeiten :

-   2 Festplatten/SSD mit jeweils einem Datenspeicher
-   ein NAS (Synology-Typ), das einen NFS-Mount teilt. In diesem Fall müssen Sie VMware ein Netzwerkdateisystem hinzufügen, damit es als Datenspeicher betrachtet wird

Für dieses Tutorial verwende ich die ESXi-Weboberfläche, die entweder durch die Installation eines Vib oder ab Version 6 verfügbar ist.0 Aktualisierungen 2. Zur Erinnerung: Um auf diese Schnittstelle zuzugreifen, gehen Sie einfach zu IP\_ESXI/ui

> **Notiz**
>
> Für dieses Tutorial verwende ich die ESXi-Weboberfläche, die entweder durch die Installation eines Vib oder ab Version 6 verfügbar ist.0 Aktualisierungen 2. Um Erinnerungen für den Zugriff auf diese Schnittstelle zu erhalten, gehen Sie einfach zu ``IP_ESXI/ui``

# Installation von ghettoVCB

Das müssen wir nachholen [Skript](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh) und übertragen Sie es auf ESXi (auf demselben Datenspeicher wie dem, der beispielsweise die Sicherungen hosten wird).

> **Notiz**
>
> Im Rest dieses Tutorials gehe ich davon aus, dass Sie das ghettoVCB-Skript eingefügt haben.sh in /vmfs/volumes/Backup/ghettoVCB.sh. Es liegt an Ihnen, die bereitgestellten Befehle/Skripte an Ihre Konfiguration anzupassen.

# Ssh-Verbindung

Sie müssen sich in SSH auf dem ESXi verbinden, dazu müssen Sie von der Schnittstelle aus

![vmware.backup](images/vmware.backup.PNG)

Stellen Sie dann mit Putty oder Kitty eine Verbindung her, indem Sie die IP Ihres ESXi eingeben und Ihre Anmeldeinformationen verwenden

# Erstellen der Konfigurationsdatei

> **Notiz**
>
> Für den Rest dieses Tutorials gehe ich davon aus, dass Ihr Backup-Datenspeicher den Pfad /vmfs/volumes/Backup hat. Achten Sie darauf, ihn zu ändern, wenn dies bei Ihnen nicht der Fall ist

Auf dem Sicherungsdatenspeicher müssen Sie eine Datei erstellen ``ghettoVCB.conf`` was beinhaltet :

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

-   ``VM_BACKUP_VOLUME`` ⇒ Speicherort Ihres Backup-Datenspeichers
-   ``VM_BACKUP_ROTATION_COUNT`` ⇒ Anzahl der aufzubewahrenden Backups pro VM

> **Notiz**
>
> Sie können sich beraten lassen [hier](https://communities.vmware.com/docs/DOC-8760) die vollständige ghettoVCB-Dokumentation mit einer Beschreibung jedes Parameters

> **Wichtig**
>
> Achten Sie darauf, die ``/`` final für den Parameter ``VM_BACKUP_VOLUME`` Andernfalls ist das Skript fehlerhaft

# Sicherungstest

Hier werden wir eine erste Erstsicherung aller VMs starten, um zu sehen, ob alles in Ordnung ist. Dann werden wir es automatisch planen. Kehren Sie in SSH zu ESXi zurück (ggf. erneut verbinden) und tun Sie es :

``/vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

Dadurch wird ein Backup aller Ihrer VMs gestartet (und kann daher viel Zeit in Anspruch nehmen). Am Ende sollten Sie auf Ihrem Backup-Datenspeicher einen Ordner pro VM und in jedem Ordner der VMs einen Unterordner pro Datum mit 4 Dateien haben :

![vmware.backup2](images/vmware.backup2.PNG)

-   ``*-flat.vmdk`` ⇒ die virtuelle Festplatte Ihrer Maschine
-   ``*.vmdk`` ⇒ der Disk-Deskriptor
-   ``*.vmx`` ⇒ die Datei, die die Konfiguration Ihrer Maschine enthält
-   ``STATUS.ok`` ⇒ zeigt an, dass die Sicherung in Ordnung ist

Hier ist eine weitere Möglichkeit für die Kommandozeile :

-   Sicherungssimulation : ``/vmfs/volumes/Backup/ghettoVCB.sh -d dryrun -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Starten Sie im Debug-Modus : ``/vmfs/volumes/Backup/ghettoVCB.sh -d debug -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Sichern Sie nur die „Toto“-VM" ``/vmfs/volumes/Backup/ghettoVCB.sh -m toto -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

# Automatisches Starten von Backups

Die crontab muss man um die Kommandozeile ergänzen, aber unter VMware ist die crontab etwas speziell und wird vor allem bei jedem Start überschrieben. Um dies zu vermeiden, müssen Sie ein kleines Skript hinzufügen, das die Crontab beim Booten aktualisiert (keine Sorge, es ist ziemlich einfach und schnell), in SSH auf dem ESXi tun :

``vi /etc/rc.local.d/local.sh``

Und vor dem ``exit 0`` füge die folgenden Zeilen hinzu :

````
/bin/kill $(cat /var/run/crond.pid)
/bin/echo "0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1" >> /var/spool/cron/crontabs/root
/usr/lib/vmware/busybox/bin/busybox crond
````

> **Notiz**
>
> Hier fordere ich jeden 1. des Monats ein Backup an, Sie können dies durch Ändern ändern : ``0 0 1 * *``

> **Notiz**
>
> Hier mache ich ein Backup aller VMs, diese kannst du anpassen, indem du die austauschst ``-a`` durch ``-m ma_vm``, Seien Sie vorsichtig, wenn Sie mehrere VMs platzieren möchten, müssen Sie die Zeile duplizieren ``/bin/echo "0 0 1 * *"``
````
/vmfs/volumes/Backup/ghettoVCB.sh -a -g
/vmfs/volumes/Backup/ghettoVCB.conf &gt;/dev/null 2>&1";
/var/spool/cron/crontabs/root" et en mettre une durch VM à backuper
````

> **Wichtig**
>
> Vergessen Sie nicht, den Pfad zur ghettoVCB-Konfigurationsdatei entsprechend Ihrer Konfiguration anzupassen : ``/vmfs/volumes/Backup/ghettoVCB.conf``

Letzter Schritt: Sie müssen Ihren ESXi neu starten, damit der Cron berücksichtigt wird, Sie können das Ergebnis sehen, indem Sie (immer noch in SSH) :

``cat /var/spool/cron/crontabs/root``

Hier müssen Sie eine Linie haben :

``0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1``
