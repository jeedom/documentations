# Jeedom Smart System Restore

## Jeedom Backup

First of all, **It is essential to make a backup of Jeedom** which can be restored at the end of the procedure.

1. Go to the Jeedom interface then click on the menu **Settings > System > Backups**.

2. Click the button **Start a backup**.

3. When the backup is complete, click on **Download Backup**.

4. Once the Jeedom backup is downloaded, turn off the system via the menu **Settings > System > Power off**.

## System Restore by eMMC

The following procedure explains how to update the system environment of the Jeedom Smart box under **Debian 11 Bullseye**.

>**Important**
>
>System restore via USB drive could not be maintained on this new environment, so it is necessary to burn the internal storage media directly *(eMMC)* by following the following steps.
>
>**Before you start, don't hesitate to watch the eMMC replacement video detailing the disassembly and reassembly of the Jeedom Smart box** *(2 minutes)* :
>
>[![Smart disassembly/reassembly in video](https://img.youtube.com/vi/lUhtP687s2E/hqdefault.jpg)](https://youtu.be/lUhtP687s2E){:target="_blank"}

### Prerequisites

In order to perform the system update, it is necessary :

- Equip yourself with'**a small crosshead screwdriver** to open the box

---

- Acquire [**a replacement eMMC card**](https://www.domadoo.fr/fr/controleurs-adaptateurs/5539-jeedom-carte-memoire-emmc-16go-de-remplacement-pour-jeedom-smart.html){:target="_blank"}

	**OR**

- Download the file [**JeedomSmart_Debian11.img.xz**](https://images.jeedom.com/smart/JeedomSmart_Debian11.img.xz)
- Equip yourself with'**an eMMC>USB/SD/µSD adapter** to burn the image from a computer, for example:

	![Exemple d'adaptateur eMMC](./images/emmc_adapter.jpg)

### Disassembly of the Jeedom Smart box

1. Disconnect all external devices connected to the Smart *(power, ethernet, USB, HDMI...)* and unscrew the antenna from the internal controller.

2. Unscrew the 2 screws at the front of the box at the level of the plexiglass plate ***(Caution fragile !)***  :

	 ![Dévisser Smart](./images/smart_unscrew.jpg)

3. Slide the motherboard towards the back of the case :

	 ![Ouvrir la Smart](./images/smart_open.jpg)

### Burning the eMMC

1. Unclip the eMMC storage located under the motherboard :

	 ![Déclipser eMMC](./images/smart_emmc.jpg)

>**INFORMATION**
>
>**In case of replacement of the original eMMC** by an eMMC with Jeedom preinstalled under Debian 11, **clip the new eMMC** instead of the old one **then go directly to the step of [reassembly](#Remontage%20de%20la%20box%20Jeedom%20Smart)**.

2. Clip the eMMC onto the adapter and plug it into a computer :

	 ![eMMC sur PC](./images/emmc_to_pc.jpg)

3. Open the burning software *(balenaEtcher for example)*.

4. Select **the JeedomSmart_Debian11.img file.xz as source**, **eMMC support as target** then start burning.

5. After engraving, disconnect the adapter from the computer then unclip the eMMC and reclip it under the motherboard of the Smart.

### Reassembling the Jeedom Smart box

1. Slide the motherboard from back to front through the case.

2. Put the plexiglass back in place then screw the 2 screws back in at the front of the box without forcing it.

3. Screw the antenna back in and reconnect the external devices, ending with the power cable.

## System Restore by USB Key *(obsolete)*

### Prerequisites

In order to perform the system update, it is necessary :

- Equip yourself with'**a USB key (minimum 8GB)**
- Download the file [**backupJeedom.tar.gz**](https://images.jeedom.com/smart/backupJeedom.tar.gz)

### USB Restore

1. Copy the file **backupJeedom.tar.gz** on the USB stick formatted in FAT32.

2. Unplug the power cable and then plug the USB stick into the Smart.

3. Reconnect the power cord and wait about 30 minutes *(the box must not be restarted during system restore)*.

4. At the end of the procedure the box reappears on the network.

## Getting started with the new system

### First start

On first boot, the file system is resized to take all available space before the box automatically reboots.

>**INFORMATION**
>
>This step can take up to 2 minutes.

### Access to Jeedom

The system having been reinstalled, the first access to the Jeedom interface must be made with the identifiers `admin`/`admin`.

### Restoration of Jeedom

1. Go to the menu **Settings > System > Backups**.

2. Click on **Add a backup** and select the backup made previously.

3. Click on **Restore Backup**.

### Changing the internal controller port

**Under Debian 11 it is necessary to change the internal controller port** which is no longer `/dev/ttyS1` but `/dev/ttyAML1` on this new system.
