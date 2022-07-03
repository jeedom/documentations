# Jeelink migration

We will see here how to migrate an installation with Jeedom in slave mode to a Jeedom with the plugin "Jeedom Link". The Jeedom slave mode being abandoned when Jeedom moved to version 3.0, it is necessary to proceed before migrating to the new operating mode.

# Preparation before migration

> **Warning**
>
> It is important to read all of this documentation before embarking on the migration. Important information concerning the prerequisites for updating, saving and retrieving information is essential for a good understanding of the operation to be carried out. Failure to read this documentation may result in destructive operations on your installation. If you do not understand a point, do not hesitate to ask questions on the forum before starting the procedure !

> **Important**
>
> Be careful not to make an equipment loop by configuring the plugin "Jeedom Link". For example, do not make an Equipment-X in a Jeedom1 which goes up in a Jeedom2 then goes up again in Jeedom1. It could bring down your Jeedoms !

> **Note**
>
> For a better reading and understanding of this tutorial, here are the terms used :
>
> - **Jeedom Target** : Server (your former Jeedom Master) which centralizes the equipment of the **Jeedom(s) Source(s))**  The screenshots on a black background correspond to the **Jeedom Target**.
>
> - **Jeedom Source** : Server (your old Jeedom Slave(s)) who reassembles your equipment on the **Jeedom Target**.
>
> - The concepts of **Jeedom Master** and **Jeedom Slave** are no longer relevant. The new operating mode for synchronizing equipment between several Jeedoms can be bidirectional. A Jeedom server can now be **Source** and **Target** while the old mode only allowed the ascent of the equipment of  **the Slave** towards **the master**. With the new mode it is also possible to have several **Jeedom Targets** for a same **Jeedom Source**. Communication between Jeedoms can now also be done remotely via the internet (DNS Jeedom or other).

![jeelink.migration9](images/jeelink.migration9.png)

## Configuration Updates and Verification

-   Update the **Jeedom Master** to the latest version (even if no update is offered to you).
-   Update plugins **Jeedom Master** to the latest versions available.
-   Check on the Health page that the internal network configuration of the **Jeedom Master** is OK (And external if your **Jeedoms Sources** will be distant).

## Gathering useful information

Depending on the plugins installed on your **Jeedom Slave**, it is necessary to retrieve the following information :

### Zwave plugin

-   In the health page of the Zwave plugin on the **Jeedom Master**, choose your **Slave** in the drop-down menu and take a screenshot, in order to have a list of the equipment that comes from it.
-   Note for each piece of equipment coming from **the Slave** : parent object, name, ID (Node), model.
-   Recover the Zwcfg File : *Plugins ⇒ Plugin Management ⇒ Z-wave*. Click on the red button *Zwcfg* and copy the contents to a text file on your computer.

### RFXcom plugin

-   Note for each piece of equipment coming from **the Slave** : parent object, name, ID (Logical), type, model.

> **Note**
>
> A non-exhaustive sheet of information to note for the migration is available [here](images/MemoMigration.xls)

## Preventative backups

-   Do a [jeedom backup](https://doc.jeedom.com/en_US/core/doc-core-backup.html) of your **Jeedom Master** and your (your) **Jeedom Slave(s))** and recover it (these) on your PC/NAS…​.
-   Do a [SD/Disc backup](https://doc.jeedom.com/en_US/howto/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd) of your **Jeedom Master** and your (your) **Jeedom Slave(s))** and retrieve them on your PC/NAS…​.

# Migration

> **Note**
>
> Do not delete old equipment from  **the Slave** on **the master**.

## Install and activate the "Jeedom Link" plugin on the **Jeedom Target** (old master).

On your **Jeedom Target**, *Plugins ⇒ Plugin management* :

![jeelink.migration1](images/jeelink.migration1.png)

## Installing the **Jeedom Source**

> **Note**
>
> if you have an extra Raspberry Pi and another SD card, you can migrate protocol after protocol by installing a new one **Jeedom Source** in parallel without having to touch your **Jeedom Slave** existing. By obviously moving any controllers from one to the other.

> **Warning**
>
> If you are using your existing RaspberryPi, please make sure you have followed the backup chapter of this documentation.

> **Note**
>
> if you are using the existing Raspberry Pi which is currently a  **Jeedom Slave**, we advise you to use a new SD/microSD card. This will allow you to easily backtrack if needed.

-   Install a new Jeedom on a new SD card (Whether to put in your **Jeedom Slave** existing or for a new Raspberry Pi) by following the [installation documentation](https://doc.jeedom.com/en_US/installation/doc-installation.html).
-   Update the **Jeedom Source** to the latest version (even if no update is offered to you).
-   Check on the Health page that the internal network configuration (and external if necessary) of the **Jeedom Source** is OK.

## Configuring Jeedom Source

-   Change the password of the admin user or/and configure a new user.
-   Configure your Jeedom Market account (*Configuration ⇒ Updates and files ⇒ "Market" tab"*). Click on test after saving, to validate the entry of your Jeedom Market identifiers).
-   Installation and activation of the "Jeedom Link" plugin on the new one **Jeedom Source**.
![jeelink.migration2](images/jeelink.migration2.png)
-   Installation and activation of the plugins you want to use. (It is advisable to do them one by one, checking well each time that the dependencies and possible daemons are OK).
-   Recreate the tree structure of the objects (just those which will be useful to you) of the **Jeedom Target** (Old Master) on your new **Jeedom Source** (Former Slave).

## Configuration of equipment on the **Jeedom Source**

To send equipment present on the **Jeedom Source** to the **Jeedom Target** via the "Jeedom Link" plugin, it is necessary that the latter is already operational on your new **Jeedom Source**.

> **Note**
>
> Gradually think about deactivating the logging of info commands for each piece of equipment on the **Jeedom Source** in order to save the SD card of this one (The historization will be done on the  **Jeedom Target**).

> **Note**
>
> You can also gradually assign equipment to recreated objects on the **Jeedom Source** so that they are later automatically put into the correct object on the **Jeedom Target** when declaring in the "Jeedom Link" plugin". In the event of a duplicate name with equipment already present in the objects of the **Jeedom Target**,  the plugin will add "remote XXXX" to the equipment name.

### Zwave plugin

-   Click on the "Synchronize" button to retrieve the modules associated with your controller. (They are kept in memory of it)
-   Replace File *Zwcfg* : *Plugins ⇒ Plugin Management ⇒ Z-wave*. Click on the red button *Zwcfg* and paste the contents of the text file previously created on your computer. *Save changes*.
-   Rename your modules and place them in the desired objects using your migration memo.

### Rfxcom plugin :

#### Probes, sensors, detectors,…​

-   Put the plugin in inclusion mode.
-   Repeat the inclusion until you get all your equipment of this type.
-   Rename your equipment and place it in the desired objects using your migration memo.

#### Actuators, sockets, …​

-   Add new equipment.
-   Define name, ID, parent object, equipment type and model using your migration memo.
-   Repeat for all your equipment of this type.

## Configuration of the "Jeedom Link" plugin"

The "Jeedom Link" plugin installed on the **Jeedom Source** will allow the lifting of equipment on the **Jeedom Target** (Your former Master).

> **Note**
>
> Reminder, for a better reading and understanding of this tutorial :
>
> - The screenshots on a black background correspond to the **Jeedom Target**.
> - The screenshots on a white background correspond to the **Jeedom Source**.

On the **Jeedom Source**,
[configure](https://doc.jeedom.com/en_US/plugins/jeelink/jeelink)
the "Jeedom Link" plugin by specifying :

-   The name of **Jeedom Target**.
-   The IP address or DNS name of the **Jeedom Target**.
-   The API key of the **Jeedom Target**.

And save the configuration.

![jeelink.migration3](images/jeelink.migration3.png)

In the tab *Assignment*, add the equipment you want to upload to the **Jeedom Target**.

![jeelink.migration4](images/jeelink.migration4.png)

Click on *Add Equipment* Select the object and equipment to add :

![jeelink.migration5](images/jeelink.migration5.png)

After refreshing the page *My JeeLinks* from **Jeedom Target**, you should see the automatic creation of the equipment :

![jeelink.migration6](images/jeelink.migration6.png)

Like any Jeedom equipment, you can activate/deactivate and display or not the equipment, its controls,... or change the category :

![jeelink.migration7](images/jeelink.migration7.png)

In the tab *Orders*, you access all the parameters of the controls of the equipment :

![jeelink.migration8](images/jeelink.migration8.png)

## History recovery

> **Note**
>
> To do on the **Jeedom Target** (Old Master) for each info command of the equipment of the old **Slave** whose history we want to retrieve.

-   Go to order configuration (*Right toothed wheel*).
-   Go to tab *Advanced Setup*.
-   Click on the button *Copy the history of this command to another command*.
-   Look for the corresponding command of the new corresponding JeeLink equipment and validate.

## Replacement of old slave equipment in Scenarios/virtual/…​

> **Note**
>
> To do on the **Jeedom Target** (Former Master) for each info/action command of the equipment of the former **Slave** whose occurrences we want to replace in the scenarios/virtual/…

-   Go to order configuration (*Right toothed wheel*).
-   Go to tab *Information*.
-   Click on the button *Replace this command with the command*.
-   Look for the corresponding command of the new corresponding JeeLink equipment and validate.

## Retrieving advanced command display configurations

> **Note**
>
> To do on the **Jeedom Target** (Former Master) for each info/action command of the equipment of the former **Slave** whose advanced display settings we want to retrieve.

-   Go to order configuration (*Right toothed wheel*).
-   Click on the button *to apply to*.
-   Search and select the corresponding command of the corresponding new JeeLink equipment and validate.

## Copy advanced command configurations

> **Note**
>
> To do on the **Jeedom Target** (Former Master) for each info/action command of the equipment of the former **Slave** whose advanced configuration we want to retrieve.

-   No easy solution at this level, you will need to have two tabs/windows open on your browser.
-   Open Old Equipment Orders **Slave** in a tab (Jeedom Target).
-   Open the orders for jeeLink equipment in the other tab (Jeedom Target).
-   And copy the desired parameters by hand.

> **Note**
>
> In order to avoid returning several times to the same command, operations 2.6→2.9 can be made in a row on the same order before moving on to the following ones.

> **Warning**
>
> The interactions on the **Jeedom Target** cannot be launched through equipment of a **Jeedom Source** transferred via the "Jeedom Link" plugin".

# Household on the **Jeedom Target**

> **Note**
>
> After confirming with certainty that your equipment/scenarios/interactions/virtual/…​. work properly with the new jeelink system, you can clean up.

-   Remove residual equipment from the old **Jeedom Slave**.
-   Disable and delete plugins that are no longer useful to you (Those you only had equipment on the Slave).
-   In the "Jeedom Link" plugin, rename the equipment that could have a name ending with "remote XXXX".
-   In the Jeedom Network page, delete the old **Jeedom Slave**.
