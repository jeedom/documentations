# Installation on a physical machine

The purpose of this documentation is to describe the installation of jeedom on a physical x86-64 machine (type Intel NUC)

# Automatic installation

Download the jeedom iso [here](https://images.jeedom.com/x86-64/).

## Burning on USB key

You can use the UNetbootin tool (downloadable [here](https://unetbootin.github.io/) ).

Once launch : 

- Select "Diskimage" (at the bottom)
- Click on the ... and select the Jeedom iso file downloaded in the previous step
- Select your USB key in "Reader"
- Click on OK

## Installation

Insert the USB key into your physical machine, configure the boot on the USB drive, then : 

- Select "Advanced options"
- And finally "Install in text mode"

>**NOTE**
>
>All the other options will result in error only the one described in this documentation and valid

Wait for the installation should take place on its own until the end

>**NOTE**
>
>You absolutely need an internet connection during installation

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)

# Manual installation

Once the OS is installed (Latest version of Debian preferred) follow this [Documentation](https://doc.jeedom.com/en_US/installation/cli)



