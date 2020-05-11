Es ist wichtig, Backups Ihrer VMs zu haben, und es ist ein Punkt, dies nicht zu tun
Vor allem nicht zu vernachlässigen, ganz zu schweigen von Hardwarefehlern, die Sie können
Eines Tages muss ich nach einem Fehler zu einem Backup zurückkehren
Manipulation oder ein Problem nach einem Update. Sei vorsichtig hier wir
spricht über das vollständige Image von VMs, es ist nicht nur eine Anwendungssicherung,
es wird daher eine ziemlich große Größe haben.

Eine der Einschränkungen beim Erstellen eines Backups unter VMware ist das Vorhandensein von
absolut 2 Datenspeicher. Dafür haben Sie mehrere Möglichkeiten :

-   2 Festplatten / SSD mit jeweils einem Datenspeicher

-   ein NAS (Synology-Typ), der einen NFS-Mount gemeinsam nutzt. In diesem Fall ist es
    Sie müssen VMware ein Netzwerkdateisystem hinzufügen, damit es angezeigt wird
    Dieser ist wie ein Datenspeicher

Für dieses Tutorial werde ich die ESXi-Weboberfläche verwenden
verfügbar entweder durch Installation einer Vib oder von der Version
6.0 Update 2. Zur Erinnerung, um einfach auf diese Schnittstelle zuzugreifen
Gehen Sie zu IP\_ESXI / ui

> **Note**
>
> Für dieses Tutorial werde ich die ESXi-Weboberfläche verwenden
> verfügbar entweder durch Installation einer Vib oder von der
> Version 6.0 Update 2. Damit Erinnerungen auf diese Schnittstelle zugreifen können
> Gehen Sie einfach zu IP\_ESXI / ui

GhettoVCB Installation 
=========================

Wir müssen das wiederherstellen
[Skript](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh)
und übertragen Sie es auf den ESXi (im selben Datenspeicher wie der, der sich befindet
willkommene Backups zum Beispiel).

> **Note**
>
> Im Rest dieses Tutorials denke ich, dass Sie das Skript eingefügt haben
>ghettoVCBsh in /vmfs/volumes/Backup/ghettoVCB.sh. Es liegt an Ihnen, sich anzupassen
> Abhängig von Ihrer Konfiguration werden die Befehle / Skripte bereitgestellt.

Verbindung in ssh 
================

Sie müssen eine SSH-Verbindung auf dem ESXi herstellen, um dies zu tun
von der Schnittstelle

![vmware.backup](images/vmware.backup.PNG)

Dann mit Kitt oder Kätzchen verbinden, indem Sie die IP von setzen
Ihr ESXi und verwenden Sie Ihre Anmeldeinformationen daraus

Erstellung der Konfigurationsdatei 
====================================

> **Note**
>
> Für den Rest dieses Tutorials halte ich Ihren Datenspeicher für
> Backup hat den Pfad / vmfs / volume / Backup. Achten Sie darauf, wenn zu ändern
> Dies ist bei Ihnen nicht der Fall

Im Sicherungsdatenspeicher müssen Sie eine ghettoVCB-Datei erstellen.conf who
enthält:

    VM_BACKUP_VOLUME = / vmfs / volume / Backup /
    DISK_BACKUP_FORMAT = dünn
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

Die Parameter, die Sie anpassen müssen, sind :

-   **VM\_BACKUP\_VOLUME** ⇒ Speicherort Ihres Sicherungsdatenspeichers

-   **VM\_BACKUP\_ROTATION\_COUNT** ⇒ Anzahl der Sicherungen pro VM, die aufbewahrt werden sollen

> **Note**
>
> Sie können konsultieren
> [hier](https://communities.vmware.com/docs/DOC-8760) Dokumentation
> komplett von ghettoVCB mit einer Beschreibung jedes Parameters

> **Important**
>
> Achten Sie darauf, das / final für den Parameter einzugeben
> VM\_BACKUP\_VOLUME, andernfalls ist das Skript fehlerhaft

Backup-Test 
==============

Hier starten wir eine erste erste Sicherung aller VMs für
sehen, ob alles in Ordnung ist. Danach planen wir es automatisch.
Kehren Sie in SSH zum ESXi zurück (stellen Sie gegebenenfalls die Verbindung wieder her) und tun Sie dies :

    /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf

Dies startet eine Sicherung aller Ihrer VMs (und kann daher viel Zeit in Anspruch nehmen
Zeit). Am Ende sollten Sie auf Ihrem Backup-Datenspeicher a haben
Ordner nach VM und in jedem VM-Ordner ein Unterordner nach Datum
mit 4 Dateien :

![vmware.backup2](images/vmware.backup2.PNG)

-  \* - flachvmdk ⇒ die virtuelle Festplatte Ihres Computers

-   \*.vmdk ⇒ der Deskriptor der Disc

-   \*.vmx ⇒ die Datei, die die Konfiguration Ihres Computers enthält

-  STATUSok ⇒ zeigt an, dass das Backup in Ordnung ist

Hier ist eine weitere Möglichkeit für die Befehlszeile :

-   Backup-Simulation :

<!-- -->

    /vmfs/volumes/Backup/ghettoVCB.sh -d dryrun -a -g /vmfs/volumes/Backup/ghettoVCB.conf

-   Starten Sie im Debug-Modus :

<!-- -->

    /vmfs/volumes/Backup/ghettoVCB.sh -d debug -a -g /vmfs/volumes/Backup/ghettoVCB.conf

-   Sichern Sie nur die VM "toto"

<!-- -->

    /vmfs/volumes/Backup/ghettoVCB.sh -m toto -a -g /vmfs/volumes/Backup/ghettoVCB.conf

Automatischer Start der Sicherung 
=================================

Sie müssen die Befehlszeile zur crontab hinzufügen, aber unter VMware die
crontab ist etwas Besonderes und wird bei jedem Start besonders überschrieben. Für
Vermeiden Sie dies, damit Sie ein kleines Skript hinzufügen müssen, das das aktualisiert
crontab beim Booten (keine Sorge, es ist ziemlich einfach und schnell), in
SSH auf dem ESXi tun :

    vi /etc/rc.local.d/local.sh

Und vor "exit 0" fügen Sie die folgenden Zeilen hinzu :

    / bin / kill $ (cat /var/run/crond.pid)
    / bin / echo "0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1" >> /var/spool/cron/crontabs/root
    / usr / lib / vmware / Busybox / Bin / Busybox Crond

> **Note**
>
> Hier fordere ich jeden 1. des Monats ein Backup an, das Sie ändern können
> dies durch Ändern : 0 0 1 \* \*

> **Note**
>
> Hier mache ich ein Backup aller VMs, Sie können dies anpassen, indem Sie
> Ersetzen Sie -a durch -m ma\_vm. Seien Sie vorsichtig, wenn Sie setzen möchten
> Bei mehreren VMs müssen Sie die Zeile "/ bin / echo" 0 0 1 \ duplizieren* \*
> / vmfs / volume / Backup / ghettoVCB.sh -a -g
> /vmfs/volumes/Backup/ghettoVCB.conf &gt;/dev/null 2&gt;&1" &gt;&gt;
> / var / spool / cron / crontabs / root "und legen Sie eine pro VM für die Sicherung ab

> **Important**
>
> Vergessen Sie nicht, den Pfad an die Konfigurationsdatei von anzupassen
> ghettoVCB entsprechend Ihrer Konfiguration :
> /vmfs/volumes/Backup/ghettoVCB.conf

Letzter Schritt: Sie müssen Ihr ESXi neu starten, damit der Cron genommen werden kann
In Anbetracht dessen können Sie das Ergebnis sehen, indem Sie (immer in SSH) :

    cat / var / spool / cron / crontabs / root

Hier müssen Sie eine Linie haben :

    0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1
