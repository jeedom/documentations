# Installation on Raspberry Pi

Here you'll find the documentation for installing Jeedom on a Raspberry Pi **with a microSD card.**

# Command-line installation

## Download the latest "lite" image

[Raspberry Pi Imager](https://www.raspberrypi.com/software/)  allows you to download the Raspberry Pi OS installation image and write the image directly to the SD card.

## Enable SSH access

> **Warning**
>
> For security reasons, SSH access is no longer enabled by default on this distribution. You must therefore enable it through the advanced options in Raspberry Pi Imager.

## Start the Raspberry Pi

Insert your MicroSD card, connect the network cable, and plug in the power supply.

## Connect via SSH

Identify your Raspberry Pi on the network

You need to know the IP address of your Raspberry Pi. There are several ways to do this:

-   Check the DHCP settings on your router
-   Use a port scanner type "Angry IP Scanner" [here](http://angryip.org/download/#windows)

Establishing the connection

Next, use PuTTY, for example, to establish your connection [Here](http://www.putty.org/)

Enter the IP address of your Raspberry Pi (in this case, 192.168.0.10) and click "Open." Accept the default security message that appears when you connect for the first time.

Log in using the credentials you set up in Raspberry Pi Imager during the flashing process.

> **Important**
>
> For security reasons, it is essential to change the default password. Hacking incidents involving the exploitation of the Raspberry Pi’s default username and password combination are particularly common. (commands: passwd and sudo passwd)

## Run the Jeedom installation script

```
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
```

> **Note**
>
> Depending on your internet speed, the installation may take between 45 and 90 minutes. It is very important that you do not interrupt the process before it is complete. Otherwise, you will have to start the entire procedure over.

Then simply go to IP\_MACHINE\_JEEDOM

> **Note**
>
> The default login credentials are admin/admin

For more information on installing Jeedom, please see this [documentation](cli)

Next, you can follow the documentation [Getting Started with Jeedom](/premiers-pas)
