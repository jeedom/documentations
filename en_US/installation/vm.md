# Installation on a VM

If you want to discover Jeedom without risk, you can also virtualize it on your PC, here is the procedure to follow. You take no risk in a VM, the integrity of your PC is protected :

## Downloading and Installing VirtualBox

You need to download Virtual Box software [here](https://download.virtualbox.org/virtualbox/6.1.6/VirtualBox-6.1.6-137129-Win.exe)

# Automatic installation

Download jeedom iso [here](https://images.jeedom.com/x86-64/).

## Configuring the VM environment

Click on new and fill in the fields as below :

![VirtualBox1](images/VirtualBox1.PNG)

-   Click on next, adapt the memory size to your system (1024 are sufficient)
-   Click next, create a virtual disk now
-   Click Create, choose VDI
-   Click next, dynamically allocated
-   Click next, Choose a size for the space (4GB is enough)
-   Click on create

## Launching the VM

-   Click on setup
-   Select storage
-   Add an optical drive
-   Choose a disc
![VirtualBox2](images/VirtualBox2.PNG)
-   Indicate the previously uploaded image
-   Then select network and choose "bridge access" in the network access mode.
![VirtualBox3](images/VirtualBox3.PNG)
-   Click OK
-   Click start

Select "Install on disk" (keyboard enter key), validate with yes (down arrow key then enter). All the rest will be done automatically (10 to 30min), then once the vm restarted waiting 5min and you should have access to Jeedom by simply putting the jeedom ip in a browser.

>**TIPS**
>
>To know the ip of the vm (once connected to it, the identifiers are displayed on the connection screen) made ``ip -s -c -h a``

> **Information**
>
> The default ssh login credentials are : jeedom and Mjeedom96 for the password 

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)

# Manual setup

## Downloading a Debian strecht image - netinstall

Download a minimalist debian 10 buster image [here](https://www.debian.org/CD/http-ftp/), by choosing CD -> AMD64

## Configuring the VM environment

Click on new and fill in the fields as below :

![VirtualBox1](images/VirtualBox1.PNG)

-   Click on next, adapt the memory size to your system (1024 are sufficient)
-   Click next, create a virtual disk now
-   Click Create, choose VDI
-   Click next, dynamically allocated
-   Click next, Choose a size for the space (4GB is enough)
-   Click on create

## Launching the VM

-   Click on setup
-   Select storage
-   Add an optical drive
-   Choose a disc
![VirtualBox2](images/VirtualBox2.PNG)
-   Indicate the previously uploaded image
-   Then select network and choose "bridge access" in the network access mode.

![VirtualBox3](images/VirtualBox3.PNG)

-   Click OK \*Click Start

## Installing debian 9

It's classic

![VirtualBox4](images/VirtualBox4.PNG)

-   Choose Graphical install
-   Install the debian preferably without a graphical interface because useless. Username doesn't matter. In most screens, all you have to do is validate the default choice. You can leave fields empty, it's not blocking.
-   For software selection :
![VirtualBox5](images/VirtualBox5.PNG)
-   For Grub, don't worry, the boot sector is that of the VM, not that of your PC. No risk of breaking anything.

## Installing jeedom

-   Launch your VM
-   Identify yourself with the user and password chosen during installation
-   Become root

``su -``

-   Enter the root password set during installation
-   Get the jeedom script, make it executable, launch it

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

-   and let it be

## Launch of jeedom

-   To know the Ip Lan address of the VM

````
ip -s -c -h a
````

Your IP address, type 192.168.0.XX appears in red. Just enter it in your browser.

> **Warning**
>
> If this does not work, you have not configured your network card in Network Bridge as indicated at the start.

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
