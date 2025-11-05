# VMware-Backup-Setup

Es ist wichtig, Backups Ihrer VMs zu haben, und dieser Punkt sollte nicht vernachlässigt werden; selbst wenn man Hardwareausfälle außer Acht lässt, kann es vorkommen, dass Sie nach einem Fehler oder einem Problem nach einem Update auf ein Backup zurückgreifen müssen. Beachten Sie, dass es sich hierbei um ein vollständiges VM-Image handelt, nicht nur um eine Anwendungssicherung. Es wird daher recht groß sein.

Eine der Einschränkungen bei der Durchführung einer Datensicherung unter VMware ist die absolute Notwendigkeit, über zwei Datenspeicher zu verfügen. Hierfür haben Sie mehrere Möglichkeiten :

-   2 Festplatten/SSDs mit jeweils einem Datenspeicher
-   ein NAS (Synology-Typ), das einen NFS-Einschub gemeinsam nutzt. In diesem Fall müssen Sie VMware ein Netzwerkdateisystem hinzufügen, damit es als Datenspeicher erkannt wird

Für dieses Tutorial werde ich die ESXi-Weboberfläche verwenden, die entweder durch die Installation eines VIB oder ab Version 6 verfügbar ist.Update 2. Zur Erinnerung: Um auf diese Oberfläche zuzugreifen, gehen Sie einfach zu IP_ESXI/ui

> **Notiz**
>
> Für dieses Tutorial werde ich die ESXi-Weboberfläche verwenden, die entweder durch die Installation eines VIB oder ab Version 6 verfügbar ist.Update 2. Zur Erinnerung: Um auf diese Benutzeroberfläche zuzugreifen, gehen Sie einfach zu ``IP_ESXI/ui``

# GhettoVCB-Installation

Wir müssen dies abrufen [Skript](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh) und übertragen Sie es auf den ESXi-Host (zum Beispiel auf denselben Datenspeicher, auf dem auch die Backups gespeichert werden)).

> **Notiz**
>
> Im weiteren Verlauf dieses Tutorials gehe ich davon aus, dass Sie das ghettoVCB-Skript installiert haben.sh in /vmfs/volumes/Backup/ghettoVCB.sh. Sie müssen die bereitgestellten Befehle/Skripte an Ihre Konfiguration anpassen.

# SSH-Verbindung

Sie müssen sich über SSH mit dem ESXi-Host verbinden; dazu müssen Sie auf die Schnittstelle zugreifen

![vmware.backup](images/vmware.backup.PNG)

Stellen Sie anschließend mit PuTTY oder Kitty eine Verbindung her, indem Sie die IP-Adresse Ihres ESXi-Hosts eingeben und Ihre Anmeldeinformationen für diesen Host verwenden

# Erstellen der Konfigurationsdatei

> **Notiz**
>
> Im weiteren Verlauf dieses Tutorials gehe ich davon aus, dass sich Ihr Backup-Datenspeicher unter /vmfs/volumes/Backup befindet. Ändern Sie diesen Pfad bitte, falls er bei Ihnen abweicht

Auf dem Backup-Datenspeicher muss eine Datei erstellt werden ``ghettoVCB.conf`` welches enthält :

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

Die Einstellungen, die Sie anpassen müssen, sind :

-   ``VM_BACKUP_VOLUME`` ⇒ Speicherort Ihres Backup-Datenspeichers
-   ``VM_BACKUP_ROTATION_COUNT`` ⇒ Anzahl der pro VM aufzubewahrenden Backups

> **Notiz**
>
> Sie können sich beraten lassen [Hier](https://communities.vmware.com/docs/DOC-8760) Die vollständige Dokumentation für ghettoVCB mit einer Beschreibung jedes Parameters

> **Wichtig**
>
> Achten Sie darauf, dass Sie ``/`` endgültiger Parameter ``VM_BACKUP_VOLUME`` Andernfalls schlägt das Skript fehl

# Backup-Test

Wir werden nun eine erste Datensicherung aller VMs durchführen, um zu überprüfen, ob alles in Ordnung ist. Wir werden es dann automatisch einplanen. Kehren Sie per SSH zum ESXi-Host zurück (stellen Sie die Verbindung gegebenenfalls wieder her) und führen Sie folgende Schritte aus: :

``/vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

Dadurch wird eine Sicherung all Ihrer VMs gestartet (und kann daher eine Weile dauern)). Letztendlich sollten Sie auf Ihrem Backup-Datenspeicher einen Ordner pro VM haben, und in jedem VM-Ordner einen Unterordner pro Datum, der 4 Dateien enthält :

![vmware.backup2](images/vmware.backup2.PNG)

-   ``*-flat.vmdk`` ⇒ die virtuelle Festplatte Ihres Rechners
-   ``*.vmdk`` ⇒ der Datenträgerdeskriptor
-   ``*.vmx`` ⇒ die Datei, die die Konfiguration Ihres Rechners enthält
-   ``STATUS.ok`` ⇒ zeigt an, dass die Datensicherung in Ordnung ist

Hier sind einige weitere Möglichkeiten für die Kommandozeile :

-   Backup-Simulation : ``/vmfs/volumes/Backup/ghettoVCB.sh -d dryrun -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Start im Debug-Modus : ``/vmfs/volumes/Backup/ghettoVCB.sh -d debug -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Sichern Sie nur die VM "toto" ``/vmfs/volumes/Backup/ghettoVCB.sh -m toto -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

# Automatischer Backup-Start

Die Befehlszeile muss zur Crontab hinzugefügt werden, aber unter VMware ist die Crontab etwas speziell und, was noch wichtiger ist, sie wird bei jedem Start überschrieben. Um dies zu vermeiden, müssen Sie ein kleines Skript hinzufügen, das die Crontab beim Systemstart aktualisiert (keine Sorge, es ist ganz einfach und schnell). Greifen Sie per SSH auf den ESXi-Host zu und führen Sie folgenden Befehl aus: :

``vi /etc/rc.local.d/local.sh``

Und vor dem ``exit 0`` Fügen Sie die folgenden Zeilen hinzu :

````
/bin/kill $(cat /var/run/crond.pid)
/bin/echo "0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1" >> /var/spool/cron/crontabs/root
/usr/lib/vmware/busybox/bin/busybox crond
````

> **Notiz**
>
> Ich bitte hier um ein Backup am 1. jedes Monats; Sie können dies ändern, indem Sie die Einstellungen anpassen : ``0 0 1 * *``

> **Notiz**
>
>  ``-a``  ``-m ma_vm``,  ``/bin/echo "0 0 1 * *"``
````
/vmfs/volumes/Backup/ghettoVCB.sh -a -g
/vmfs/volumes/Backup/ghettoVCB.conf &gt;/dev/null 2>&1";
/var/spool/cron/crontabs/root" et en mettre une  VM à backuper
````

> **Wichtig**
>
>  : ``/vmfs/volumes/Backup/ghettoVCB.conf``

: ) :

``cat /var/spool/cron/crontabs/root``

 :

``0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1``
