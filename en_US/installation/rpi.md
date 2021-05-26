# Installation on Raspberry Pi

You will find here the documentation to install Jeedom on a raspberry PI **with a MiroSD card.**. There are 2 modes :

- Automatic (beta) : use of the image for Raspberry Pi made by Jeedom with Jeedom preinstalled on it
- Command line : manual installation of Jeedom from Raspberry Pi OS

> **Important**
>
> Debian 10 (Buster) is the officially supported distribution.

# Automatic installation

## Download the latest image

You find the images [here](https://images.jeedom.com/rpi/)

> **Important**
>
>There are 2 images : jeedom-debian-XXXX-rpi-X.X.XX.zip which is in 32bits, it is compatible with Raspberry PI models of generation 2 and 3 and jeedom-debian-XXXX-rpi-64-X.X.XX.zip which is in 64bits, it is compatible only for Raspberry Pi4.

Raspberry Pi imager allows you to directly download the installation image of Raspberry Pi OS, in its most recent version.

## Burn this image on a MicroSD card with Raspberry Pi imager for example

You can download it [here](https://www.raspberrypi.org/downloads/)

## Start the PI

Insert your MicroSD card, connect the network cable and connect the power.

> **Important**
>
> On first boot, the Raspberry Pi may be slow as it resizes the partition to match your MicroSD card size. In addition, once the first start is made, it is advisable to restart again so that the Swap is of correct size.

Il vous suffit ensuite, dethen votre navigateur, de saisir : http://IP_RPI/ (en remplaçant IP_RPI par l'ip de votre Raspberry Pi).

> **Information**
>
> The default SSH login credentials are : jeedom and Mjeedom96 for the password 

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)

# Command line installation

## Download the latest "lite" image"

[here](https://downloads.raspberrypi.org/raspbian_lite_latest)

Raspberry Pi imager allows you to directly download the installation image of Raspberry Pi OS, in its most recent version.

## Burn this image on a MiroSD card with Raspberry Pi imager for example

[here](https://www.raspberrypi.org/downloads/)

> **NOTE**
>
> If you use Etcher to burn your image, the decompression step is useless (Zip format recognized directly in the selection of the image file).

## Enable SSH access

> **Warning**
>
> For security reasons, SSH access is no longer enabled by default on this distribution. So you have to activate it.

An empty ssh file must be created on the boot partition (the only one accessible under windows).

Just right click : new / text document and rename it to "ssh" **without extension**

> **Important**
>
> Under Windows, in Explorer, you must therefore check your settings in display / options / modify the folder and search options /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Start the Raspberry Pi

Insert your MicroSD card, connect the network cable and connect the power.

## Connect in SSH

Identify your Raspberry Pi on the network

You need to know the IP address of your Raspberry PI. Many solutions :

-   Consult the DHCP configuration in your router
-   Use a port scanner such as "Angry IP Scanner" [here](http://angryip.org/download/#windows)

Establish connection

Then use for example PuTTY to establish your connection [Here](http://www.putty.org/)

Enter the IP address of your Raspberry Pi (here 192.168.0.10) and click on open. Accept the default security message on first login.

Log in with credentials **pi / raspberry**

> **Important**
>
> For security reasons, it is imperative to change the default password. Cases of hacking based on the use of the default login / password pair of the Raspberry Pi are particularly widespread. (Command : passwd and sudo passwd)

## Launch the jeedom installation script

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

**The sudo password is also raspberry**

> **NOTE**
>
> Depending on your internet speed, the installation can take 45 to 90 minutes. You must not interrupt the process before the end. Otherwise, you will have to repeat the entire procedure.

Then just go to IP\_MACHINE\_JEEDOM

> **NOTE**
>
> The default credentials are admin / admin

> **NOTE**
>
> The following arguments can be used : -w = webserver folder -z = installation dependencies z-wave -m = desired mysql root password

````
./install.sh -w /var/www/html -z
````

## System optimization

If you use your Raspberry Pi for Jeedom without a screen connected, it is recommended to allocate the minimum of RAM to the video part.

Just log in **SSH** and modify the config file : ``sudo nano /boot/config.txt``

Add **and or** De-comment (by removing the #) **and or** Edit the lines :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Quit by saving : ``CTRL+X`` then ``O`` then ``ENTER``

Reboot your Raspberry Pi

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
