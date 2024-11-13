# Installation on a VM

If you want to discover Jeedom without risk, you can also virtualize it on your PC, here is the procedure to follow. You take no risk in a VM, the integrity of your PC is protected :

## Download and install VirtualBox

You must download the Virtual Box software [here](https://www.virtualbox.org/wiki/Downloads)

# Automatic installation

Download the jeedom iso [here](https://images.jeedom.com/x86-64/).

## Configuring the VM environment

Click on “New” and fill in the fields as below :

![VirtualBox1](images/VM1.png)

-   Click next, adapt the memory size to your system (1024 Mb is sufficient)

![VirtualBox3](images/VM2.png)

-   Click next
-   Then click on “Create a virtual disk now” (8GB is enough)

![VirtualBox1](images/VM3.png)

-   Click next
-   Click Finish

## VM launch

-   Click on configuration
-   Click + next to controller (1)
-   Indicate the previously downloaded image (2)
-   Click choose (3)

![VirtualBox2](images/VM5.png)


-   Then select network and choose "bridge access" in network access mode.
  
![VirtualBox1](images/VM6.png)

-   Click on OK
-   Click on start

Select "Install on disk" (enter key on the keyboard), confirm with yes (down arrow key then enter). All the rest will be done automatically (10 to 30min), then once the vm restarted waiting 5min and you should have access to Jeedom by simply putting the ip of jeedom in a browser.

>**TIPS**
>
>To find out the IP of the vm (once connected to it, the identifiers are displayed on the connection screen) type the command below respecting the spaces: 
````
ip -s -c -h a
````

> **Information**
>
> The default ssh connection IDs are : jeedom and Mjeedom96 for the password 

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)

# Manual installation

## Downloading a Debian 11 image - netinstall

Download a debian 11 minimalist image [here](https://www.debian.org/releases/bullseye/debian-installer/), by choosing "network install CD images" -> AMD64

## Configuring the VM environment

Click on new and fill in the fields as below :

![VirtualBox1](images/VM1.png)

-   Click on next, adapt the memory size in relation to your system (1024 are sufficient)

![VirtualBox3](images/VM2.png)

-   Click next, create a virtual disk now (8GB is enough)

![VirtualBox1](images/VM3.png)

-   Click next
-   Click Finish

## VM launch

-   Click on configuration
-   Click + next to controller (1)
-   Indicate the previously downloaded image (2)
-   Click choose (3)

![VirtualBox2](images/VM5.png)


-   Then select network and choose "bridge access" in network access mode.
  
![VirtualBox1](images/VM6.png)

-   Click on OK
-   Click on start

## Installing debian 11

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
