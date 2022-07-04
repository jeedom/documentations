# Installation on a physical machine

The purpose of this documentation is to describe the installation of jeedom on an x86-64 physical machine (Intel NUC type)

# Automatic installation

Download jeedom iso [here](https://images.jeedom.com/x86-64/).

## Engraving on USB key

You can use the UNetbootin tool (downloadable [here](https://unetbootin.github.io/) ).

Once launch : 

- Select "Diskimage" (at the bottom)
- Click on the ... and select the Jeedom iso file downloaded in the previous step
- Select your USB key in "Drive"
- Click OK

Then you just have to ``booter`` on the USB key. Motherboards usually have 2 boot modes : UEFI (newer, the default choice) and BIOS (the history). We recommend that you take BIOS (the option changes according to each motherboard and is not always easy to find, so we cannot give you a general procedure)

## Installation in Bios mode (recommended)

- Select "Install Jeedom"
- And finally "yes"

## Installation in UEFI mode (not recommended)

- Select "Advanced options"
- And finally "Install in text mode"

>**NOTE**
>
>All the other options will come out in error only the one described in this documentation and valid

Wait the installation should proceed by itself until the end

>**NOTE**
>
>You absolutely need an internet connection during the installation

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)

# Manual installation

Once the OS is installed (Latest version of Debian preferably) follow this [documentation](https://doc.jeedom.com/en_US/installation/cli)



