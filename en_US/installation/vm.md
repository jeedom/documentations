# 

.  :

## 

 [](https://download.virtualbox.org/virtualbox/6.1.6/VirtualBox-6.1.6-137129-Win.exe)

# 

 [](https://images.jeedom.com/x86-64/).

## 

 :

![VirtualBox1](images/VirtualBox1.PNG)

-   )
-   
-   
-   
-   )
-   

## 

-   
-   
-   
-   
![VirtualBox2](images/VirtualBox2.PNG)
-   
-   .
![VirtualBox3](images/VirtualBox3.PNG)
-   
-   

). .

>****
>
> ``ip -s -c -h a``

> ****
>
>  :  

 [](https://doc.jeedom.com/en_US/premiers-pas/index)

# 

## 

 [](https://www.debian.org/CD/http-ftp/), by choosing CD -> AMD64

## 

 :

![VirtualBox1](images/VirtualBox1.PNG)

-   )
-   
-   
-   
-   )
-   

## 

-   
-   
-   
-   
![VirtualBox2](images/VirtualBox2.PNG)
-   
-   .

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

 [](https://doc.jeedom.com/en_US/premiers-pas/index)
