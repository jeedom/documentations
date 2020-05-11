# Installation on a VM

If you want to discover Jeedom without risk, you can also virtualize it on your PC, here is the procedure to follow. You take no risk in a VM, the integrity of your PC is protected :

## Download and install VMware Player

You must download the Virtual Box software [Here](https://download.virtualbox.org/virtualbox/6.1.6/VirtualBox-6.1.6-137129-Win.exe)

## Downloading a Debian strecht image - netinstall

Download a minimalist debian 9 Stretch image [Here](https://cdimage.debian.org/debian-cd/current/amd64/bt-cd/debian-10.3.0-amd64-netinst.iso.torrent)

## Configuring the VM environment

Click on new and fill in the fields as below :

![VirtualBox1](images/VirtualBox1.PNG)

-   Click on next, adapt the memory size in relation to your system (1024 are sufficient)
-   Click next, create a virtual disk now
-   Click Create, choose VDI
-   Click on next, dynamically allocated
-   Click on next, Choose a size for the space (4GB is enough)
-   Click on create

## VM launch

-   Click on configuration
-   Select storage
-   Add an optical drive
-   Choose a disc
![VirtualBox2](images/VirtualBox2.PNG)
-   Indicate the image previously downloaded
-   Then select network and choose "bridge access" in network access mode.

![VirtualBox3](images/VirtualBox3.PNG)

-   Click OK \ * Click start

## Debian 9 installation

It's classic…

![VirtualBox4](images/VirtualBox4.PNG)

-   Choose Graphical install
-   Install the debian preferably without graphical interface because useless. Username doesn't matter. In most screens, you just have to validate the default choice. You can leave empty fields, it is not blocking.
-   For software selection :
![VirtualBox5](images/VirtualBox5.PNG)
-   For Grub, do not worry, the boot sector is that of the VM, not that of your PC. No risk of breaking anything.

## Jeedom installation

-   Launch your VM
-   Identify yourself with the user and password chosen during installation
-   Go root

``su -``

-   Enter the root password set during installation
-   Get the jeedom script, make it executable, launch it

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

-   and let it go

## Jeedom launch

-   To know the Ip Lan address of the VM

````
ip -s -c -h a
````

Your IP address, type 192.168.0.XX appears in red. Just enter it in your browser.

> **Warning**
>
> If this does not work, you have not configured your network card as Network Bridge as indicated at the start.

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
