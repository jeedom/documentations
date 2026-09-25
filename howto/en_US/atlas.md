# Restoring a Jeedom Atlas in factory mode

## Jeedom Backup

First and foremost, **it is essential to back up Jeedom** so that it can be restored once the procedure is complete.

1. Go to the Jeedom interface, then click on the **Settings > System > Backups** menu.

2. Click the **Start Backup** button.

3. When the backup is complete, click **Download Backup**.

4. Once the Jeedom backup has been downloaded, shut down the system via the **Settings > System > Shut Down** menu.

## Overview

The Jeedom Atlas is equipped with an eMMC drive, which offers greater reliability than an SD card, but this drive is not directly accessible.

USB Recovery Mode covers the system, the OS, and the Jeedom app.

It allows you to:

- Resetting the Jeedom Atlas to its "factory" OS+Jeedom settings.
- Resetting the Jeedom Atlas to its "factory" settings, then restoring its Jeedom backup.

As a reminder, backup and restore management is available in Jeedom under the “Settings” menu in the top-right corner, then “Backups.”

Jeedom offers a subscription service for automatic backups to the Jeedom private cloud, so you don't have to worry about a thing. (On the Market, in your account, select "Backup Cloud" from the menu on the left.)

## How Recovery Mode Works

>**Note**
>
>Be sure to save a backup of your Jeedom configuration (locally)

>**Important**
>
>Running a recovery will change the MAC address of your Jeedom box. You will then need to update your IP reservation in your DHCP server settings, if you have one.

>**Important**
>
>Depending on whether or not you still have access to your router, the procedure will vary.

Required equipment: a USB flash drive (at least 16 GB).

CASE 1: YOU HAVE ACCESS TO YOUR ATLAS BOX

Go to the Atlas plugin (Home Automation Gateway/Atlas Plugin), click on "Recovery," and follow the instructions.

***

CASE 2: YOU CAN'T ACCESS YOUR ATLAS BOX

- Download the Recovery from your profile on the Market: Profile / My Services, then click Download USB Recovery Atlas
![profile recovery](../images/profilrecovery.png)
- Download the software [Balena Etcher](https://www.balena.io/etcher/)
- In the software, select the image you downloaded, then select your USB drive
![balenaetcher](../images/balenaetcher.png)
- Once the USB drive is ready, insert it into the lower USB 2 port (the black USB port), then turn on your Atlas box
- Wait about 5 to 10 minutes
- Then go to http://jeedomatlasrecovery.local/
- Enter the username and password: admin/admin, then change the password. IMPORTANT: Set up a Market account.
- Once that's done, Jeeasy launches and walks you through the recovery process
- Follow the procedure

This Recovery Mode is only compatible with the Jeedom Atlas
