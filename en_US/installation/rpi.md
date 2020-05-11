# Installation on Raspberry Pi

You will find here the documentation to install Jeedom on a raspberry PI **with an SD card.**

> **Important**
>
> Debian 10 (Buster) is the officially supported distribution.

## Download the latest "lite" image"

[here](https://downloads.raspberrypi.org/raspbian_lite_latest)

## Burn this image on a SD with etcher for example

[here](https://etcher.io/)

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
> Under windows, in the explorer you must therefore check your configuration in display / options / modify the folder and search options /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Start the PI

Insert your SD card, connect the network cable, connect the power.

## Connect in SSH

Identify your Pi on the network

You need to know the IP address of your PI. Many solutions :

-   Consult the DHCP configuration in your router
-   Use an angyipscanner type port scanner" [here](http://angryip.org/download/#windows)

Establish connection

Then use for example putty to establish your connection [Here](http://www.putty.org/)

Enter the IP address of your PI (here 192.168.0.10) and click on open. Accept the default security message when logging in for the first time.

Log in with credentials **pi / raspberry**

> **Important**
>
> For security reasons, it is imperative to change the default password. Cases of hacking based on the use of the default login / password pair of the Raspberry are particularly widespread. (passwd and sudo passwd command)

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

If you use your Raspberry for Jeedom without a screen connected, it is recommended to carry the minimum RAM at the video part.

Just log in **SSH** and modify the config file : ``sudo nano /boot/config.txt``

Add **and or** De-comment (by removing the #) **and or** Edit the lines :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

Quit by saving : ``CTRL+X`` then ``O`` then ``ENTER``

Reboot your RPI

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
