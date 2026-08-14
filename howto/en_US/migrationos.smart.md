# Upgrading the Debian environment on a Smart device

We will walk you through the process of **migrating the Debian environment on the Smart box** so that you can get an overview of the different steps before putting them into practice. Please note that all steps are also explained on-screen as the migration progresses.

## Prerequisites

Migrating the Smart's Debian environment and kernel is a long and complex process, so there are several essential prerequisites to consider before beginning the operation.

In particular, you need to:

- be able to **stay on the migration page** throughout the entire process *(which takes about 1 hour and 30 minutes)*,
- prepare [a USB flash drive formatted in **FAT32**](https://fr.wikihow.com/formater-en-FAT32){:target="\_blank"} and with **more than 8 GB of free space**,
- be on the **same local network** as the Smart box and access it using its **internal address**.

>**IMPORTANT**
>
>As always, we strongly recommend that you have a **recent backup** of your Jeedom on hand beforehand.

## Migration

### Start the migration

You can start the migration process in two ways:

- Go to the **Settings → System → Image Restoration** menu:
![Menu | Dining | Image](../images/migrateos-smart01.png)

- When prompted to do so in the **update center** when necessary:
![Upgrade the update center](../images/migrateos-smart02.png)

### Step 1

The first step in the migration process is to prepare and verify the hardware. The prerequisites mentioned earlier are displayed in a pop-up window, and you are prompted to insert a USB flash drive *(formatted in FAT32)* with more than 8 GB of free space into the Smart box.

Once the USB drive is inserted, you can click the arrow to start the process:

![Insert USB drive](../images/migrateos-smart03.png)

Once the prerequisites have been verified, we can move on to Step 2:

![Verified USB flash drive](../images/migrateos-smart04.png)

>**INFORMATION**
>
>You don't need to stay in front of the screen during the entire process. It will run automatically until it prompts you to restore a backup.

### Step 2

The second step will generate a backup of your Jeedom, a copy of which will be stored securely on the USB drive. This backup can be restored at the end of the migration process if you wish. If needed, the backup can be found in a directory named ``Backup`` on the USB flash drive.

We still recommend that you make sure you have a recent backup of Jeedom available elsewhere.

![Jeedom Backup](../images/migrateos-smart05.png)

The duration of the backup phase will depend on the size of your system and the remote backup options you have set up. You can speed up the process by disabling Market and/or Samba backups beforehand.

![Copy the backup to the USB flash drive](../images/migrateos-smart06.png)

### Step 3

The third step will allow you to download the image containing the new version of the Debian environment and verify that it is valid after the download:

![Download image](../images/migrateos-smart07.png)

This step may take some time and will depend on the speed of your internet connection as well as the read/write performance of the USB drive:

![Image verification](../images/migrateos-smart08.png)

### Step 4

By far the most important step, as it involves the actual migration of the hardware. Under no circumstances should you unplug the USB drive or cut off the Smart’s power supply during this phase!

![Smart Migration](../images/migrateos-smart09.png)

This step takes about 30 minutes, after which the Smart box will restart. This first restart may take some time:

![Restarting the Smart](../images/migrateos-smart10.png)

### Completion of the migration

Once the migration process is complete, the Smart box is now running on an up-to-date environment but with a blank Jeedom installation. The final step of the procedure will therefore involve either starting from a blank installation or restoring the backup generated during the first step:

![Migration completion](../images/migrateos-smart11.png)

>**IMPORTANT**
>
>**Be sure to remove the USB drive from the Smart box once the process is complete.**

Congratulations, **your Smart box is now up to date and ready to use**!

## Frequently Asked Questions

>**The migration process is proceeding normally, but it doesn't seem like anything has changed after restarting the box?**
>This means that the USB drive you are using is not being recognized properly by the migration tool. Please try again with a different USB drive or [Reformat your USB drive](https://fr.wikihow.com/partitionner-une-cl%C3%A9-USB){:target="\_blank"} making sure to **create only one partition** *(Single partition)*.

>**I can no longer log in to Jeedom following the migration of the environment.**
>Since Jeedom was reinstalled following the Debian environment update, the default login credentials are ***admin/admin*** until you restore a backup or create a new user.

>**My box is no longer accessible following the migration of the environment.**
>Check whether the Jeedom box is present and verify its IP address from your router's interface in case its IP address has changed.

>**Some plugins no longer work following the migration.**
>Make sure you have reinstalled the dependencies for any plugins that require them *(see the plugin's configuration page)*.
