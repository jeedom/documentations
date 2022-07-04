# Command line installation

# Automatic installation

For an automatic installation, please follow the documentation corresponding to your type of system : 

- On a [VM](https://doc.jeedom.com/en_US/installation/vm)
- On the [bearemetal (Intel Nuc-like)](https://doc.jeedom.com/en_US/installation/baremetal)

# Manual setup

You will find here the documentation to install Jeedom on Debian

> **Important**
>
> Debian 10 (Buster) is the officially supported distribution for version 3.3.X or more from Jeedom (but Stretch remains perfectly functional). If you do not have a minimum knowledge of Linux environments, we advise you to start with a Smart.

> **Important**
>
> The installation script can be dangerous, because it assumes that your system is clean. If not, please read the script and install manually.

>**TIPS**
>
>To know the ip of the vm (once connected to it, the identifiers are displayed on the connection screen) made ``ip -s -c -h a``

SSH into your system and do :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

Then just go to ``IP_JEEDOM`` from your web browser.

> **Note**
>
> Default credentials are admin/admin

> **Note**
>
> The following arguments can be used : -w = webserver folder -z = install z-wave dependencies -m = desired mysql root password

````
./install.sh -w /var/www/html -z -m Jeedom
````

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index).
