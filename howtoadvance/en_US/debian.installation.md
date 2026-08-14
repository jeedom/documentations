# Debian Installation

Here, we'll look at how to install Debian, either as a VM or directly on a physical machine

# Retrieving sources

You can find the latest Debian version as a netinstall (minimal size, but requires an internet connection for installation) [here](https://www.debian.org/CD/netinst) (you need to download the amd64 image) or click directly [here](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) to download the ISO.

# Starting the installation

## On a physical machine

You must either burn the ISO to a CD and insert the CD into the computer (though CD drives are becoming increasingly rare these days) or create a bootable USB drive.

To create a bootable USB drive, you need to download Rufus [there](http://rufus.akeo.ie/downloads/rufus-2.9.exe), launch it and configure it as follows:

![Debian installation](../images/debian.installation.PNG)

> **Note**
>
> Be sure to select the ISO file you downloaded just before

All you have to do is click "Start," then insert the USB drive into the computer and boot from it.

## On a VM

The process is fairly simple: create a new virtual machine, connect it, set up a virtual CD drive that points to the ISO file (be sure to connect it), and start the machine. See [here](vmware.creer_une_vm) for more details.

# Installation

Press Enter to start the installation:

![debian.installation1](../images/debian.installation1.PNG)

Select "French" and press Enter

![debian.installation2](../images/debian.installation2.PNG)

Here, you need to select "French" (Français)

![debian.installation3](../images/debian.installation3.PNG)

Same as above:

![debian.installation4](../images/debian.installation4.PNG)

Enter the name of your device (here it's "nabaztag," but if it's a Jeedom, enter "jeedom")

![debian.installation5](../images/debian.installation5.PNG)

Just press Enter:

![debian.installation6](../images/debian.installation6.PNG)

Set a password; I recommend a simple one here (such as oooo). It can be changed later (using the `passwd` command):

![debian.installation7](../images/debian.installation7.PNG)

Just put it back:

![debian.installation8](../images/debian.installation8.PNG)

Enter the name of the primary user (here, "nabaztag," but if it's a Jeedom, enter "jeedom")

![debian.installation9](../images/debian.installation9.PNG)

Enter the same thing:

![debian.installation10](../images/debian.installation10.PNG)

Set a password; I recommend a simple one here (such as oooo). It can be changed later (using the `passwd` command):

![debian.installation11](../images/debian.installation11.PNG)

Enter the same thing:

![debian.installation12](../images/debian.installation12.PNG)

Confirm by pressing Enter:

![debian.installation13](../images/debian.installation13.PNG)

Same as above:

![debian.installation14](../images/debian.installation14.PNG)

Confirm again by pressing Enter:

![debian.installation15](../images/debian.installation15.PNG)

We're still validating:

![debian.installation16](../images/debian.installation16.PNG)

And also:

![debian.installation17](../images/debian.installation17.PNG)

Select "France" and confirm:

![debian.installation18](../images/debian.installation18.PNG)

Confirm by pressing Enter:

![debian.installation19](../images/debian.installation19.PNG)

Same as above:

![debian.installation20](../images/debian.installation20.PNG)

And more (yes, there’s a lot to configure on a Debian installation):

![debian.installation21](../images/debian.installation21.PNG)

Now it gets a little more complicated: you need to deselect "Debian desktop environment" by pressing the spacebar and select "SSH server" by pressing the spacebar (use the arrow keys to navigate), then confirm by pressing Enter:

![debian.installation22](../images/debian.installation22.PNG)

Let's confirm again:

![debian.installation23](../images/debian.installation23.PNG)

Select /dev/sda and then confirm:

![debian.installation24](../images/debian.installation24.PNG)

Now all you have to do is remove the USB drive, CD-ROM, or virtual CD-ROM and press Enter:

![debian.installation25](../images/debian.installation25.PNG)

That's it—your Debian installation is complete. You can stop the tutorial here if you'd like, or follow the next steps to make a few system changes (especially useful for Jeedom).

# Optimization for Jeedom

To prepare for the Jeedom installation, you can make a few optimizations:

## Add vim and sudo

``sudo apt-get install -y vim sudo``

## Add fail2ban

Fail2ban is a program that helps secure access to your Debian system; if there are too many failed login attempts, it blocks access from the IP address in question (so not everyone, just the attacker) for a certain amount of time.

``sudo apt-get install -y fail2ban``

## Add Open VMware Tools

Open VMware Tools installs drivers specific to the installed operating system and provides optimizations for that OS running on an ESXi hypervisor.

``sudo apt-get install -y open-vm-tools``

All you have to do now is install Jeedom by following [this](/installation/cli)
