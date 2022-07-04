# Upgrading the Debian environment of a Smart

We will detail the procedure for **migration of the Debian environment of the Smart box** so that you can have an overview of the different steps before putting it into practice. Be aware that all steps are also explained on screen as the migration progresses.

## Prerequisites

The migration of the Debian environment and the kernel of the Smart is a long and complex process, several essential prerequisites are therefore to be taken into account before starting the operation.

In particular, it is necessary :

- power **stay on migration page** during the whole process *(it takes about 1h30)*,
- to prepare [a USB key formatted in **FAT32**](https://fr.wikihow.com/formater-en-FAT32){:target="\_blank"} and having **more than 8 GB of free space**,
- be on the **same local network** than the Smart box and access it from its **internal address**.

>**IMPORTANT**
>
>As usual, it is strongly recommended to keep a **recent backup** of your Jeedom beforehand.

## Migration

### Initiate Migration

You have the possibility to initiate the migration procedure in 2 ways :

- By heading to the menu **Settings → System → Image Restore** :     
![Menu Restauration Image](images/migrateos-smart01.png)

- By being invited to the **update center** when necessary :     
![Mettre à niveau centre de MAJ](images/migrateos-smart02.png)

### Step 1

The first step in the migration is to prepare and verify the hardware. The prerequisites mentioned above are recalled in a pop-up window and you are prompted to insert a USB key *(formatted in FAT32)* with more than 8GB of free space in the Smart box.

Once the USB drive is inserted, you can click on the arrow to start the process :

![Insérer clé USB](images/migrateos-smart03.png)

When the prerequisites are validated, we can go to step 2 :

![Clé USB vérifiée](images/migrateos-smart04.png)

>**INFORMATION**
>
>It is not necessary to stay in front of the screen during the whole process. This will run automatically until it offers to restore a backup.

### 2nd step

The second step will generate a backup of your Jeedom, a copy of which will be saved on the USB key. This backup will be restored at the end of the migration process if desired. If needed, the backup is in a directory named ``Backup`` on the USB key.

We still recommend that you make sure you have a recent backup of Jeedom available elsewhere.

![Sauvegarde de Jeedom](images/migrateos-smart05.png)

The duration of the backup phase will depend on the size of your installation and the remote backup options implemented. You have the option to speed up the process by disabling the sending of Market and/or Samba backups beforehand.

![Copie de la sauvegarde on the USB key](images/migrateos-smart06.png)

### Step 3

The third step will allow you to download the image containing the new version of the Debian environment and to check its validity after downloading :

![Téléchargement de l'image](images/migrateos-smart07.png)

This step may take some time and will depend on the speed of your internet connection as well as the read/write performance of the USB key :

![Vérification de l'image](images/migrateos-smart08.png)

### Step 4

By far the most important step as it involves the actual hardware migration. Above all, do not unplug the USB key or cut the power supply to the Smart during this phase !

![Migration de la Smart](images/migrateos-smart09.png)

This step lasts about thirty minutes after which the Smart box will restart. This first reboot is likely to last a while :

![Redémarrage de la Smart](images/migrateos-smart10.png)

### Completing the migration

At the end of the migration process, the Smart box is now on an up-to-date environment but with a blank Jeedom. The finalization of the procedure will therefore consist either in starting from a clean installation or in restoring the backup generated during the first step :

![Finalisation migration](images/migrateos-smart11.png)

>**IMPORTANT**
>
>**Be sure to remove the USB key from the Smart box at the end of the operation.**

Congratulation, **your Smart box is now up to date and operational** !

## Frequently Asked Questions

>**The migration process is going well, however no changes seem to have taken place after restarting the box ?**    
>This means that the USB key used is not correctly recognized by the migration tool. Please repeat the operation with another USB key or [repartition your usb drive](https://fr.wikihow.com/partitionner-une-cl%C3%A9-USB){:target="\_blank"} taking care of **create only one partition** *(Single score)*.

>**I can no longer authenticate on Jeedom following the migration of the environment.**    
>Jeedom having been reinstalled following the update of the Debian environment, as long as you have not restored a backup or created a new user, the default identifiers are ***admin/admin***.

>**My box is no longer reachable following the migration of the environment.**    
>Check the presence and the ip address of the Jeedom box from the interface of your router in case it has changed its ip address.

>**Some plugins no longer work after migration.**    
>Make sure you have reinstalled dependencies for plugins that require them *(consult the configuration page of the plugin)*.
