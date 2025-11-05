# Installation on PC/mini-PC

The following procedure is based on the use of a system image file including Debian and Jeedom pre-installed.

>**INFORMATION**
>
>To manually install Jeedom on a Debian system, refer to the documentation regarding [command-line installation](cli).

## Downloading the system image

The Jeedom team provides optimized system images for 64-bit computers.

The first step is to download the system image you want to install :

- [**Jeedom x86-64 system image(s)**](https://images.jeedom.com/x86-64/){:target="_blank"}

>**INFORMATION**
>
>To consult [**the dedicated documentation**](../compatibility/#Images%20système%20officielles) for more details on Jeedom system images.

## System image engraving

The previously downloaded file must be burned onto a medium from which the machine is capable of booting, such as a USB flash drive.

>**INFORMATION**
>
>If you are not familiar with burning software, you can use [balenaEtcher](https://etcher.balena.io/){:target="_blank"}.

To proceed with the burning, simply follow the procedure described by the publisher of the software you are using.

Once the system image is burned onto the bootable media, all that's left to do is boot from it.

>**IMPORTANT**
>
>If you have trouble booting from the USB drive, consult your hardware documentation for BIOS boot options.

## Installation options

Different installation options are displayed on the screen after booting the computer from the media containing the system image :

{% include lightbox.html src="images/install-menu-amd64.jpg" data="InstallMenuAMD64" title="Menu d'installation Jeedom (AMD64)" imgstyle="width:75%;display:block;margin:0 auto;" %}

- **Install Jeedom (automatic mode)** : **installs the system automatically** without any intervention necessary. The machine is switched off at the end of the operation.
  >**IMPORTANT**
	>
	>This mode is activated by default after 60 seconds, **The installation can therefore be carried out without connecting a screen**.

- **Install Jeedom (manual mode)** : In this mode, you must **Manually enter the system configuration to be installed** *(language, country, network, storage medium, etc.)*.

- **Jeedom Live** : allows **testing Jeedom in a non-persistent environment** without installing the system.
  >**INFORMATION**
	>
	>This feature is available from Debian 12 Bookworm.

## Hardware compatibility

The non-exhaustive list of computers supported by Jeedom can be seen in [the documentation **Compatibility**](../compatibility/#Matériels%20supportés)

## First connection

Consult the documentation relating to the [**first connection**](../premiers-pas/#Première%20connexion) to access the Jeedom interface after installation.
