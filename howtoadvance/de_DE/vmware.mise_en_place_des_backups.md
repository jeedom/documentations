# Einrichtung eines VMware-Backups

Es ist wichtig, Backups Ihrer VMs zu erstellen, und dies ist ein Punkt, den Sie auf keinen Fall vernachlässigen sollten. Ganz abgesehen von Hardwareausfällen kann es vorkommen, dass Sie eines Tages aufgrund einer Fehlbedienung oder eines Problems nach einem Update auf ein Backup zurückgreifen müssen. Bitte beachten Sie, dass es sich hierbei um ein vollständiges Image der VMs handelt – es ist nicht nur ein Anwendungs-Backup –, weshalb es eine relativ große Dateigröße haben wird.

Eine der Voraussetzungen für die Erstellung eines Backups unter VMware ist, dass unbedingt zwei Datastores vorhanden sein müssen. Hierfür haben Sie mehrere Möglichkeiten:

-   2 Festplatten/SSDs mit je einem Datastore
-   Ein NAS (z. B. von Synology), das eine NFS-Einbindung bereitstellt. In diesem Fall muss ein Netzwerkdateisystem zu VMware hinzugefügt werden, damit dieses den Datenspeicher als Datastore erkennt.

Für diese Anleitung werde ich die Weboberfläche von ESXi verwenden, die entweder durch die Installation eines VIBs oder ab Version 6.0 Update 2 verfügbar ist. Zur Erinnerung: Um auf diese Oberfläche zuzugreifen, rufen Sie einfach IP\_ESXI/ui auf.

> **Hinweis**
>
> Für diese Anleitung werde ich die Weboberfläche von ESXi verwenden, die entweder durch die Installation eines VIBs oder ab Version 6.0 Update 2 verfügbar ist. Zur Erinnerung: Um auf diese Oberfläche zuzugreifen, rufen Sie einfach folgende Adresse auf: ``IP_ESXI/ui``

# Installation von ghettoVCB

Das muss man wiederherstellen [Skript](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh) und es auf den ESXi übertragen (beispielsweise auf denselben Datastore, auf dem auch die Backups gespeichert werden sollen).

> **Hinweis**
>
> Im weiteren Verlauf dieses Tutorials gehe ich davon aus, dass Sie das Skript „ghettoVCB.sh“ in /vmfs/volumes/Backup/ghettoVCB.sh abgelegt haben. Es liegt an Ihnen, die bereitgestellten Befehle und Skripte an Ihre Konfiguration anzupassen.

# SSH-Verbindung

Sie müssen sich per SSH beim ESXi anmelden. Dazu müssen Sie über die Benutzeroberfläche

![vmware.backup](../images/vmware.backup.PNG)

Verbinden Sie sich anschließend mit PuTTY oder Kitty, indem Sie die IP-Adresse Ihres ESXi-Servers eingeben und Ihre Anmeldedaten dafür verwenden.

# Erstellung der Konfigurationsdatei

> **Hinweis**
>
> Im weiteren Verlauf dieses Tutorials gehe ich davon aus, dass der Pfad zu Ihrem Backup-Datastore /vmfs/volumes/Backup lautet. Bitte ändern Sie diesen Pfad entsprechend, falls er bei Ihnen abweicht.

Auf dem Backup-Datenspeicher muss eine Datei erstellt werden ``ghettoVCB.conf`` die Folgendes enthält:

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

Die folgenden Einstellungen müssen Sie anpassen:

-   ``VM_BACKUP_VOLUME`` ⇒ Speicherort Ihres Backup-Datastores
-   ``VM_BACKUP_ROTATION_COUNT`` ⇒ Anzahl der zu speichernden Backups pro VM

> **Hinweis**
>
> Sie können Folgendes einsehen [hier](https://communities.vmware.com/docs/DOC-8760) Die vollständige Dokumentation zu ghettoVCB mit einer Beschreibung aller Parameter

> **Wichtig**
>
> Achten Sie darauf, das ``/`` Endwert für den Parameter ``VM_BACKUP_VOLUME`` Andernfalls kommt es zu einem Fehler im Skript

# Backup-Test

Wir werden hier zunächst ein erstes Backup aller VMs erstellen, um zu überprüfen, ob alles in Ordnung ist. Anschließend werden wir dies automatisch planen. Kehren Sie per SSH zum ESXi zurück (melden Sie sich gegebenenfalls erneut an) und führen Sie folgenden Befehl aus:

``/vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

Dadurch wird ein Backup aller Ihrer VMs gestartet (was daher einige Zeit in Anspruch nehmen kann). Am Ende sollten Sie auf Ihrem Backup-Datastore einen Ordner pro VM haben, und in jedem VM-Ordner einen nach Datum sortierten Unterordner, der vier Dateien enthält:

![vmware.backup2](../images/vmware.backup2.PNG)

-   ``*-flat.vmdk`` ⇒ die virtuelle Festplatte Ihres Computers
-   ``*.vmdk`` ⇒ der Datenträgerbezeichner
-   ``*.vmx`` ⇒ die Datei mit den Einstellungen Ihres Geräts
-   ``STATUS.ok`` ⇒ zeigt an, dass das Backup erfolgreich war

Hier sind weitere Möglichkeiten für die Befehlszeile:

-   Backup-Simulation: ``/vmfs/volumes/Backup/ghettoVCB.sh -d dryrun -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Start im Debug-Modus: ``/vmfs/volumes/Backup/ghettoVCB.sh -d debug -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Nur die VM „toto“ sichern ``/vmfs/volumes/Backup/ghettoVCB.sh -m toto -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

# Automatischer Start von Backups

Man muss den Befehl in die crontab einfügen, aber unter VMware ist die crontab etwas speziell und wird vor allem bei jedem Neustart überschrieben. Um dies zu vermeiden, muss man daher ein kleines Skript hinzufügen, das die crontab beim Systemstart aktualisiert (keine Sorge, das ist recht einfach und schnell). Führen Sie dazu per SSH auf dem ESXi-Server Folgendes aus:

``vi /etc/rc.local.d/local.sh``

Und vor dem ``exit 0`` Fügen Sie die folgenden Zeilen hinzu:

````
/bin/kill $(cat /var/run/crond.pid)
/bin/echo "0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1" >> /var/spool/cron/crontabs/root
/usr/lib/vmware/busybox/bin/busybox crond
````

> **Hinweis**
>
> Hier habe ich ein Backup für den 1. jedes Monats festgelegt. Sie können dies ändern, indem Sie Folgendes anpassen: ``0 0 1 * *``

> **Hinweis**
>
> Hier erstelle ich ein Backup aller VMs. Sie können dies anpassen, indem Sie das ``-a`` von ``-m ma_vm``, Achtung: Wenn Sie mehrere VMs einrichten möchten, müssen Sie die Zeile duplizieren ``/bin/echo "0 0 1 * *"``
````
/vmfs/volumes/Backup/ghettoVCB.sh -a -g
/vmfs/volumes/Backup/ghettoVCB.conf &gt;/dev/null 2>&1";
/var/spool/cron/crontabs/root" et en mettre une par VM à backuper
````

> **Wichtig**
>
> Vergessen Sie nicht, den Pfad zur Konfigurationsdatei von ghettoVCB entsprechend Ihrer Konfiguration anzupassen: ``/vmfs/volumes/Backup/ghettoVCB.conf``

Letzter Schritt: Sie müssen Ihren ESXi neu starten, damit der Cron-Job wirksam wird. Das Ergebnis können Sie (ebenfalls über SSH) wie folgt überprüfen:

``cat /var/spool/cron/crontabs/root``

Hier muss eine Zeile stehen:

``0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1``
