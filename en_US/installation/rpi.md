# Installation on Raspberry Pi

You will find here the documentation to install Jeedom on a raspberry Pi **with a MiroSD card.**. There are 2 modes :

- Automatic (beta) : use of the image for Raspberry Pi made by Jeedom with Jeedom preinstalled on it
- Command line : manual installation of Jeedom from Raspberry Pi OS

> **Important**
>
> Debian 10 (Buster) is the officially supported distribution.

# Automatic installation

## Download latest image

You find the pictures [here](https://images.jeedom.com/rpi/)

> **IMPORTANT**
>
>There are 2 pictures : jeedom-debian-XXXX-rpi-X.X.XX.zip which is in 32 bits, it is compatible with Raspberry PI models of generation 2 and 3 and jeedom-debian-XXXX-rpi-64-X.X.XX.zip which is in 64 bits, it is compatible only for Raspberry Pi4 and is in alpha (not recommended).

Raspberry Pi imager allows you to directly download the installation image of Raspberry Pi OS, in its most recent version.

## Burn this image on a MicroSD card with Raspberry Pi Imager for example

You can download it [here](https://www.raspberrypi.org/downloads/)

## Start PI

Insert your MicroSD card, connect the network cable and connect the power supply.

> **Important**
>
> On first boot, the Raspberry Pi may be slow as it resizes the partition to match the size of your MicroSD card. In addition, once the 1st start is done, it is advisable to restart again so that the Swap is of the correct size.

Il vous suffit ensuite, dethen votre navigateur, de saisir : http://IP_RPI/ (en remplaçant IP_RPI par l'ip de votre Raspberry Pi).

> **Information**
>
> The default SSH login credentials are : jeedom and Mjeedom96 for the password 

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)

# Command line installation

## Download latest lite image"

[here](https://downloads.raspberrypi.org/raspbian_lite_latest)

Raspberry Pi Imager allows you to directly download the installation image of Raspberry Pi OS, in its most recent version.

## Burn this image on a MiroSD card with Raspberry Pi Imager for example

[here](https://www.raspberrypi.org/downloads/)

> **Note**
>
> If you use Etcher to burn your image, the decompression step is unnecessary (Zip format recognized directly in the selection of the image file).

## Enable SSH access

> **Warning**
>
> For security reasons, SSH access is no longer enabled by default on this distribution. So you have to activate it.

You must create on the boot partition (the only one accessible under Windows) an empty ssh file.

Just right click : new / text document and rename it to "ssh" **without extension**

> **Important**
>
> Under Windows, in the explorer, you must therefore check your settings in display / options / modify folder and search options /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Start the Raspberry Pi

Insert your MicroSD card, connect the network cable and connect the power supply.

## Login in SSH

Identify your Raspberry Pi on the network

You need to know the IP address of your Raspberry PI. Many solutions :

-   Check the DHCP configuration in your router
-   Use an "Angry IP Scanner" type port scanner" [here](http://angryip.org/download/#windows)

Establish connection

Then use for example PuTTY to establish your connection [Here](http://www.putty.org/)

Enter the IP address of your Raspberry Pi (here 192.168.0.10) and click open. Accept the default security message on first login.

Login with credentials **pi / raspberry**

> **Important**
>
> For security reasons, it is imperative to change the default password. Cases of hacking based on the exploitation of the default login/password couple of the Raspberry Pi are particularly widespread. (ordered : passwd and sudo passwd)

## Launch the jeedom installation script

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

**The sudo password is also raspberry**

> **Note**
>
> Depending on your internet speed, the installation can take from 45 to 90 minutes. You must not interrupt the process before the end. Otherwise, you will have to repeat the entire procedure.

Then just go to IP\_MACHINE\_JEEDOM

> **Note**
>
> Default credentials are admin/admin

> **Note**
>
> The following arguments can be used : -w = webserver folder -z = install z-wave dependencies -m = desired mysql root password

````
./install.sh -w /var/www/html -z
````

## System optimization

If you use your Raspberry Pi for Jeedom without a screen connected, it is recommended to allocate the minimum RAM to the video part.

Just log in **SSH** and modify the config file : ``sudo nano /boot/config.txt``

Add **and or** Uncomment (deleting the #) **and or** Edit the lines :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Exit by saving : ``CTRL+X`` then ``O`` then ``ENTER``

Reboot your Raspberry Pi

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
