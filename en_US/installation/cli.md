# Command line installation

# Automatic installation

For automatic installation please follow the documentation corresponding to your system type : 

- On a [VM](https://doc.jeedom.com/en_US/installation/vm)
- On [bare metal (Intel Nuc type)](https://doc.jeedom.com/en_US/installation/baremetal)

# Manual installation

Here you will find the documentation to install Jeedom on Debian

> **Important**
>
> Debian 10 is the officially supported distribution for version 3.3.X from Jeedom (but Stretch remains perfectly functional).  Debian 11 is the official distribution for version 4.xx. If you do not have a minimum understanding of Linux environments, we advise you to opt for a Jeedom box such as Luna, Atlas or Smart.

> **Important**
>
> Installation script can be dangerous because it assumes your system is blank. If not, please read the script and install by hand.

>**TIPS**
>
>To find out the IP of the VM (once connected to it, the identifiers are displayed on the connection screen) ``ip -s -c -h a``

Connect in SSH to your system and do :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install
./install
````

Then just go to ``IP_JEEDOM`` from your internet browser.

> **NOTE**
>
> The default credentials are admin / admin

> **NOTE**
>
> The following arguments can be used : -w = webserver folder -z = installation dependencies z-wave -m = desired mysql root password

````
./install -w /var/www/html -z -m Jeedom
````

>**NOTE**
>
>If you want to install the alpha version of jeedom you must do :
````
wget https://raw.githubusercontent.com/jeedom/core/alpha/install/install.sh
chmod +x install.sh
./install.sh -v alpha
````

Then you can follow the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index).
