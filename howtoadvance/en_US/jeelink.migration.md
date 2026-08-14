# Jeelink Migration

Here, we’ll look at how to migrate a Jeedom installation running in slave mode to a Jeedom system using the “Jeedom Link” plugin. Since Jeedom’s slave mode was discontinued with the release of Jeedom version 3.0, it’s necessary to complete this migration before switching to the new operating mode.

# Preparation Before Migration

> **Warning**
>
> It is important to read this entire documentation before  beginning the migration. Important information regarding  update prerequisites, backup, and data recovery  is essential for a proper understanding of  the process ahead. Failing to read this documentation may result in actions that could damage your system. If you do not understand any part of it, please feel free to ask questions on the forum before beginning the procedure!

> **Important**
>
> Be very careful not to create a loop of devices when configuring the "Jeedom Link" plugin. For example, do not set up Device-X in Jeedom1, which is then linked to Jeedom2, and then linked back to Jeedom1. This could cause your Jeedom devices to crash!

> **Note**
>
> To help you read and understand this tutorial more easily, here are the terms used:
>
> - **Target Jeedom**: Server (your former Jeedom Master) that centralizes the devices from the **Source Jeedom(s)**. Screenshots with a black background correspond to the **Target Jeedom**.
>
> - **Jeedom Source**: Server (your old Jeedom slave(s)) that reports your devices to the **Jeedom Target**.
>
> - The concepts of **Jeedom Master** and **Jeedom Slave** are no longer relevant. The new synchronization mode for devices across multiple Jeedom systems can be bidirectional. A Jeedom server can now act as both a **Source** and a **Target**, whereas the old mode only allowed devices to be reported from the **Slave** to the **Master**. With the new mode, it is also possible to have multiple **Jeedom Targets** for a single **Jeedom Source**. Communication between Jeedom systems can now also take place remotely via the Internet (Jeedom DNS or other).

![jeelink.migration9](../images/jeelink.migration9.png)

## Updates and Configuration Check

-   Update the **Jeedom Master** to the latest version (even if no update is offered).
-   Update the plugins on the **Jeedom Master** to the latest available versions.
-   On the Health page, verify that the internal network configuration of the **Jeedom Master** is OK (and the external configuration if your **Jeedom Sources** will be remote).

## Compilation of Useful Information

Depending on the plugins installed on your **Jeedom Slave**, you’ll need to retrieve the following information:

### Z-Wave Plugin

-   On the "Health" page of the Z-Wave plugin on the **Jeedom Master**, select your **Slave** from the drop-down menu and take a screenshot to obtain a list of the devices associated with it.
-   For each device from **l’Esclave**, note the parent object, the name, the ID (Node), and the model.
-   Retrieve the Zwcfg file: *Plugins ⇒ Plugin Management ⇒ Z-Wave*. Click the red *Zwcfg* button and copy the contents to a text file on your computer.

### RFXcom Plugin

-   For each device from **l’Esclave**, note the parent object, name, ID (Logical), type, and model.

> **Note**
>
> A non-exhaustive list of information to note for the migration is available [here](../images/MemoMigration.xls)

## Preventive backups

-   Create a [Jeedom backup](/core/backup) from your **Jeedom Master** and your **Jeedom Slave(s)** and retrieve them on your PC/NAS…​.
-   Create a [SD card/hard drive backup](/howto/sauvegarde.comment_faire#_sauvegarde_restauration_de_la_carte_microsd) from your **Jeedom Master** and your **Jeedom Slave(s)** and retrieve them on your PC/NAS…​.

# Migration

> **Note**
>
> Do not remove the old **Slave** devices from **the Master** for now.

## Install and activate the "Jeedom Link" plugin on the **Target Jeedom** (formerly Master).

On your **Jeedom Target**, *Plugins ⇒ Plugin Management*:

![jeelink.migration1](../images/jeelink.migration1.png)

## Installing **Jeedom Source**

> **Note**
>
> If you have an extra Raspberry Pi and another SD card, you can migrate one protocol at a time by installing a new **Jeedom Source** in parallel without having to touch your existing **Jeedom Slave**. Of course, you’ll need to gradually move any controllers from one to the other as you go.

> **Warning**
>
> If you are using your existing Raspberry Pi, please make sure you have followed the backup section of this documentation.

> **Note**
>
> If you are using your existing Raspberry Pi, which is currently a **Jeedom Slave**, we recommend using a new SD/microSD card. This will allow you to easily revert to the previous setup if necessary.

-   Install a new Jeedom on a new SD card (whether to use with your existing **Jeedom Slave** or for a new Raspberry Pi) by following the [installation documentation](/installation).
-   Update the **Jeedom Source** to the latest version (even if no update is offered).
-   Check the Health page to ensure that the internal (and external, if necessary) network configuration of **Jeedom Source** is OK.

## Jeedom Source Configuration

-   Change the admin user's password and/or set up a new user.
-   Set up your Jeedom Market account (*Settings ⇒ Updates and Files ⇒ "Market" tab*). Click "Test" after saving to verify that your Jeedom Market credentials were entered correctly.
-   Installing and activating the "Jeedom Link" plugin on the new **Jeedom Source**.
![jeelink.migration2](../images/jeelink.migration2.png)
-   Install and activate the plugins you want to use. (It is recommended that you do this one at a time, making sure each time that any dependencies and daemons are working properly.)
-   Recreate the object tree (only the objects you’ll need) from the **Target Jeedom** (formerly the Master) on your new **Source Jeedom** (formerly the Slave).

## Configuring devices on **Jeedom Source**

To send a device from the **Jeedom Source** to the **Jeedom Target** using the "Jeedom Link" plugin, the plugin must already be up and running on your new **Jeedom Source**.

> **Note**
>
> As you go along, remember to disable command logging for each device on the **Jeedom Source** to save space on its SD card (logging will be done on the **Jeedom Target**).

> **Note**
>
> You can also gradually assign devices to the objects recreated on the **Jeedom Source** so that they are later automatically placed in the correct object on the **Jeedom Target** when declared in the "Jeedom Link" plugin. If there is a name conflict with a device already present in the **Jeedom Target** objects, the plugin will add "remote XXXX" to the device’s name.

### Z-Wave Plugin

-   Click the "Synchronize" button to retrieve the modules associated with your controller. (They are stored in the controller's memory.)
-   Replace the *Zwcfg* file: *Plugins ⇒ Plugin Management ⇒ Z-Wave*. Click the red *Zwcfg* button and paste the contents of the text file you previously created on your computer. *Save the changes*.
-   Rename your modules and place them in the desired objects using your migration checklist as a guide.

### Rfxcom plugin:

#### Probes, sensors, detectors, etc.

-   Set the plugin to inclusion mode.
-   Repeat the pairing process until all your devices of this type are added.
-   Rename your devices and place them in the desired objects using your migration checklist.

#### Actuators, outlets, …​

-   Add a new device.
-   Define the name, ID, parent object, device type, and model using your migration checklist.
-   Repeat this process for all your devices of this type.

## Configuring the "Jeedom Link" plugin

The "Jeedom Link" plugin installed on the **Jeedom Source** will allow devices to be reported to the **Jeedom Target** (your old master).

> **Note**
>
> Reminder, for easier reading and understanding of this tutorial:
>
> - Screenshots with a black background correspond to **Jeedom Cible**.
> - The screenshots on a white background are from **Jeedom Source**.

On **Jeedom Source**,
[set up](/plugins/communication/jeelink)
the "Jeedom Link" plugin, specifying:

-   The name of the **Jeedom Target**.
-   The IP address or DNS name of the **Jeedom Target**.
-   The API key for **Jeedom Target**.

And save the configuration.

![jeelink.migration3](../images/jeelink.migration3.png)

In the *Assignment* tab, add the devices you want to report to the **Target Jeedom**.

![jeelink.migration4](../images/jeelink.migration4.png)

Click *Add Device* Select the object and device to add:

![jeelink.migration5](../images/jeelink.migration5.png)

After refreshing the *My JeeLinks* page on the **Jeedom Target**, you should see that the device has been automatically created:

![jeelink.migration6](../images/jeelink.migration6.png)

Like any Jeedom device, you can enable or disable it, choose whether to display it or not, view its commands, etc., or change its category:

![jeelink.migration7](../images/jeelink.migration7.png)

In the *Controls* tab, you can access all the settings for the device commands:

![jeelink.migration8](../images/jeelink.migration8.png)

## Retrieving History Data

> **Note**
>
> To be done on the **Jeedom Target** (formerly Master) for each command: retrieve device information from the former **Slave** for which you want to retrieve the history.

-   Go to the command settings (*Right-hand gear wheel*).
-   Go to the *Advanced Settings* tab.
-   Click the *Copy this command's history to another command* button.
-   Find the corresponding command for the new JeeLink device and confirm.

## Replacing old slave devices in Scenarios/Virtuals/…​

> **Note**
>
> To be done on the **Jeedom Target** (formerly Master) for each info/action command for devices from the former **Slave** whose instances you want to replace in scenarios/virtuals/…

-   Go to the command settings (*Right-hand gear wheel*).
-   Go to the *Information* tab.
-   Click the *Replace this command with the command* button.
-   Find the corresponding command for the new JeeLink device and confirm.

## Retrieving advanced display settings for commands

> **Note**
>
> To be done on the **Jeedom Target** (formerly Master) for each info/action command for devices from the former **Slave** for which you want to retrieve the advanced display settings.

-   Go to the command settings (*Right-hand gear wheel*).
-   Click the *Apply to* button.
-   Search for and select the corresponding command for the new JeeLink device, then confirm.

## Copying Advanced Command Configurations

> **Note**
>
> To be done on the **Jeedom Target** (formerly Master) for each info/action command for devices from the former **Slave** whose advanced configuration you want to retrieve.

-   There's no easy solution here; you'll need to have two tabs or windows open in your browser.
-   Open the commands for the devices from the old **Slave** in a tab (Jeedom Target).
-   Open the jeeLink device commands in the other tab (Jeedom Target).
-   And copy the desired settings by hand.

> **Note**
>
> To avoid having to repeat the same command multiple times, steps 2.6 through 2.9 can be performed consecutively using the same command before moving on to the next ones.

> **Warning**
>
> Interactions on the **Jeedom Target** cannot be initiated  via devices from a **Jeedom Source** transferred through the  "Jeedom Link" plugin.

# Household tasks on the **Jeedom Cible**

> **Note**
>
> Once you have confirmed with certainty that your devices, scenarios, interactions, virtual elements, etc., are working correctly with the new Jeelink system, you can proceed with the cleanup.

-   Remove any remaining devices from the old **Jeedom Slave**.
-   Disable and remove plugins that you no longer need (those for which you only had devices on the Slave).
-   In the "Jeedom Link" plugin, rename any devices whose names end with "remote XXXX."
-   On the Jeedom Network page, delete the old **Jeedom Slave**.
