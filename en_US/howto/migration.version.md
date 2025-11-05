# Migrate from version (V3 → V4)

Let's discover together the main actions to be implemented to migrate from version of Jeedom under the best conditions. This tutorial is based on the concrete case of a V3 to V4 migration.

## Jeedom backup

Before any Jeedom update, it is important to ensure that you have taken the necessary precautions to be able to quickly recover a functional home automation system in the event of difficulties.

### Backup creation

We will first generate the backup file of your current installation.

Let's head to the **gear menu**, present at the top in the navigation bar, on the left of the clock, then click on the sub-menu **Backups** to access the [component that manages backups](https://doc.jeedom.com/en_US/core/3.3/backup):    
![backup menu](images/migrate-version01.png)

To create the backup, we will click on the green button **Run** in the section entitled **Backups** :    
![launch backup](images/migrate-version02.png)

Confirm the message requesting confirmation of your wish to proceed with a backup of Jeedom by clicking on the button **Okay** :    
![agree backup](images/migrate-version03.png)

The backup process starts. It may take some time, you can follow the progress in the named window **Information** :    
![backup logs](images/migrate-version04.png)

If everything goes normally, the end of the process is indicated by the message :      
``***************Fin de la sauvegarde de Jeedom*************** [END BACKUP SUCCESS]``

The backup file was correctly generated in Jeedom.

### Backup download

In the current state, the previously generated backup is only accessible from Jeedom. However, in the event of difficulties during an update, Jeedom or the machine that hosts it may no longer be accessible. So we will see how to recover the backup file on a computer outside of Jeedom.

In the game **Local backups**, make sure that the backup created in the previous paragraph is correctly entered on the line **Available backups** by confirming with the date and time that appear in the file name. If this is the case, we can now click on the green button **Download** :    
![download backup](images/migrate-version05.png)

The backup file is then downloaded to your computer, keep it precisely because it contains a copy of your entire Jeedom at the time of the backup.

## Easy migration tool

Now that we have secured the backup of our Jeedom, we can proceed with the upgrade serenely.

Since V3.3.54, an easy migration tool was implemented in **Update center**. To access it, you must go to the **gear menu**, present at the top in the navigation bar, on the left of the clock, then click on the sub-menu **Update center**.

Once in the update center, click on the orange button titled **Upgrade to V4** to open the migration modal window :    
![migration button](images/migrate-version06.png)

### Prerequisites

The upgrade window will analyze the system and all the plugins installed on your machine from the Jeedom market in order to check the compatibility announced with V4. It breaks down into 2 parts :

- The upper part presents some innovations to discover in V4 with a banner summarizing in general the compatibility of the installed plugins :    
![migration modal up](images/migrate-version07.png)

>**Important**
>
>It will not be possible to migrate to an installation with an environment prior to ``Debian Stretch 9.X`` *(``Debian 8.X Jessie`` or lower)*. You will also be asked to remove any plugins identified as being obsolete.

- The lower part consists of a table detailing all the plugins installed as well as their confirmed compatibility or not with this new version :    
![migration modal down](images/migrate-version08.png)

> **Important**    
>
>This new version of Jeedom brings major changes. As a result, third-party widgets and some design customizations used in V3 may no longer be displayed or react as desired and may require your intervention following the switch to V4.

### Upgrade

Now that we have read all the important information to know before upgrading our Jeedom, we can start the migration by clicking on the orange button **Upgrade to V4** at the top right of the modal window.

> **To know**   
>
>The button **Upgrade to V4** only becomes clickable once the entire window has been viewed. You must therefore make sure to scroll to the bottom of the page.

A pop-up window opens and tells us that a full backup will be performed automatically before migration so that we can quickly and easily go back to V3 if necessary.
To start the migration process, click **Okay** :    
![migration agree](images/migrate-version09.png)

You then switch to the page containing the migration logs which will start by backing up the current installation before updating the plugins and the core.

> **Important**    
>
>Depending on the hardware on which Jeedom is installed, this operation may take several minutes. It is essential to let the migration process run until the end.

Once the migration operation is complete, a green banner is displayed at the top of the screen with the message ***The operation is successful. Please do `F5` for the latest news*** :    
![migration finish](images/migrate-version10.png)

So all you have to do is press the `F5` button on the keyboard *(or refresh the page)* to see the actual transition to V4. It is possible that some plugins need to be updated again after the migration, do not hesitate to update them immediately.
