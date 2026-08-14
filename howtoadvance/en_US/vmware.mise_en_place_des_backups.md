# Setting up a VMware backup

It’s important to have backups of your VMs, and this is something you absolutely must not overlook. Even setting aside hardware failures, you may one day need to restore from a backup due to user error or an issue caused by an update. Note that we’re talking about full VM images here—not just application backups—so the file size will be quite large.

One of the requirements for performing a backup in VMware is that you must have at least two datastores. To meet this requirement, you have several options:

-   2 hard drives/SSDs, each with a datastore
-   A NAS (type Synology) that shares an NFS mount. In this case, you need to add a network file system to VMware so that it recognizes it as a datastore

For this tutorial, I’ll be using the ESXi web interface, which is available either by installing a VIB or starting with version 6.0 Update 2. As a reminder, to access this interface, simply go to IP\_ESXI/ui

> **Note**
>
> For this tutorial, I’ll be using the ESXi web interface, which is available either by installing a VIB or starting with version 6.0 Update 2. As a reminder, to access this interface, simply go to ``IP_ESXI/ui``

# Installing ghettoVCB

We need to retrieve this [script](https://raw.githubusercontent.com/lamw/ghettoVCB/master/ghettoVCB.sh) and transfer it to the ESXi (to the same datastore that will host the backups, for example).

> **Note**
>
> In the rest of this tutorial, I’ll assume that you’ve placed the ghettoVCB.sh script in /vmfs/volumes/Backup/ghettoVCB.sh. It’s up to you to adapt the provided commands and scripts to your specific configuration.

# SSH connection

You'll need to connect to the ESXi via SSH. To do this, from the interface

![vmware.backup](../images/vmware.backup.PNG)

Next, use PuTTY or Kitty to connect to it by entering your ESXi's IP address and using your ESXi login credentials.

# Creating the configuration file

> **Note**
>
> For the rest of this tutorial, I’ll assume that your backup datastore is located at /vmfs/volumes/Backup. Be sure to change this path if it’s different on your system.

On the backup datastore, you need to create a file ``ghettoVCB.conf`` which contains:

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

The settings you need to adjust are:

-   ``VM_BACKUP_VOLUME`` ⇒ Location of your backup datastore
-   ``VM_BACKUP_ROTATION_COUNT`` ⇒ Number of backups per VM to retain

> **Note**
>
> You can view [here](https://communities.vmware.com/docs/DOC-8760) The complete ghettoVCB documentation, including a description of each parameter

> **Important**
>
> Be sure to set the ``/`` final value for the parameter ``VM_BACKUP_VOLUME`` Otherwise, the script will return an error

# Backup Test

Here, we’ll run an initial backup of all the VMs to make sure everything is working properly. We’ll then schedule it to run automatically. Return to the ESXi via SSH (reconnect if necessary) and run:

``/vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

This will start a backup of all your VMs (and may therefore take quite a while). When it’s finished, you should have one folder per VM on your backup datastore, and within each VM folder, a subfolder for each date containing 4 files:

![vmware.backup2](../images/vmware.backup2.PNG)

-   ``*-flat.vmdk`` ⇒ your machine's virtual disk
-   ``*.vmdk`` ⇒ the disk identifier
-   ``*.vmx`` ⇒ the file containing your machine's configuration
-   ``STATUS.ok`` ⇒ indicates that the backup is successful

Here are some other options for the command line:

-   Backup simulation: ``/vmfs/volumes/Backup/ghettoVCB.sh -d dryrun -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Launch in debug mode: ``/vmfs/volumes/Backup/ghettoVCB.sh -d debug -a -g /vmfs/volumes/Backup/ghettoVCB.conf``
-   Back up only the "toto" VM ``/vmfs/volumes/Backup/ghettoVCB.sh -m toto -a -g /vmfs/volumes/Backup/ghettoVCB.conf``

# Automatic backup initiation

You need to add the command line to the crontab, but in VMware, the crontab works a little differently and, more importantly, gets overwritten at every startup. To prevent this, you need to add a small script that will update the crontab at boot time (don’t worry, it’s pretty simple and quick). Connect to the ESXi via SSH and run:

``vi /etc/rc.local.d/local.sh``

And before the ``exit 0`` Add the following lines:

````
/bin/kill $(cat /var/run/crond.pid)
/bin/echo "0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1" >> /var/spool/cron/crontabs/root
/usr/lib/vmware/busybox/bin/busybox crond
````

> **Note**
>
> Here, I'm setting up a backup for the 1st of every month. You can change this by editing: ``0 0 1 * *``

> **Note**
>
> Here, I'm backing up all the VMs; you can adapt this by replacing the ``-a`` by ``-m ma_vm``, note that if you want to add multiple VMs, you'll need to duplicate the line ``/bin/echo "0 0 1 * *"``
````
/vmfs/volumes/Backup/ghettoVCB.sh -a -g
/vmfs/volumes/Backup/ghettoVCB.conf &gt;/dev/null 2>&1";
/var/spool/cron/crontabs/root" et en mettre une par VM à backuper
````

> **Important**
>
> Don't forget to adjust the path to the ghettoVCB configuration file according to your setup: ``/vmfs/volumes/Backup/ghettoVCB.conf``

Final step: You need to restart your ESXi for the cron job to take effect. You can view the result by running the following command (still via SSH):

``cat /var/spool/cron/crontabs/root``

Here you should have a line:

``0 0 1 * * /vmfs/volumes/Backup/ghettoVCB.sh -a -g /vmfs/volumes/Backup/ghettoVCB.conf >/dev/null 2>&1``
