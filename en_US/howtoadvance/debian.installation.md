We will see here how to install a Debian, as well as
as VM or in direct installation on a physical machine

Source recovery 
========================

You can find the latest Debian version in netinstall (size
minimal but need internet for installation)
[here](https://www.debian.org/CD/netinst) (you have to take the image in
amd64) or click directly
[here](http://cdimage.debian.org/debian-cd/9.1.0/amd64/iso-cd/debian-9.1.0-amd64-netinst.iso)
to download the ISO.

Installation launch 
===========================

On a physical machine 
------------------------

You must either burn the ISO on a CD and put the CD in the machine
(but nowadays CD players are more and more rare) or so
create a bootable USB key.

For the bootable USB key download rufus
[the](http://rufus.akeo.ie/downloads/rufus-2.9.exe), launch and
configure like this :

![debian.installation](images/debian.installation.PNG)

> **Note**
>
> Remember to select the ISO file that you downloaded
> just before

You just have to click on start, then put the USB key
on the machine and boot it up.

On a VM 
----------

The handling is quite simple, you create a new machine
virtual, you plug in, put a virtual CD player on it that points
to the ISO (remember to connect it) and you start the machine. See
[here](https://doc.jeedom.com/en_US/howto/doc-howto-vmware.creer_une_vm.html)
for more details.

Setup 
============

Press enter to start the installation :

![debian.installation1](images/debian.installation1.PNG)

Choose "French" and confirm with the enter key

![debian.installation2](images/debian.installation2.PNG)

Here you have to choose "French"

![debian.installation3](images/debian.installation3.PNG)

Same :

![debian.installation4](images/debian.installation4.PNG)

Enter the name of your machine (here nabaztag but if it is a jeedom
put jeedom)

![debian.installation5](images/debian.installation5.PNG)

Just hit enter :

![debian.installation6](images/debian.installation6.PNG)

Put a password, I recommend a simple one here (like oooo),
it can be changed later (passwd command) :

![debian.installation7](images/debian.installation7.PNG)

Put it back the same :

![debian.installation8](images/debian.installation8.PNG)

Give the name of the main user (here nabaztag but if it is a
jeedom put jeedom)

![debian.installation9](images/debian.installation9.PNG)

Put back the same :

![debian.installation10](images/debian.installation10.PNG)

Put a password, I recommend a simple one here (like oooo),
it can be changed later (passwd command) :

![debian.installation11](images/debian.installation11.PNG)

Put back the same :

![debian.installation12](images/debian.installation12.PNG)

Confirm by pressing enter :

![debian.installation13](images/debian.installation13.PNG)

Same :

![debian.installation14](images/debian.installation14.PNG)

Again confirm by pressing enter :

![debian.installation15](images/debian.installation15.PNG)

We still validate :

![debian.installation16](images/debian.installation16.PNG)

And even :

![debian.installation17](images/debian.installation17.PNG)

Choose "France" and validate :

![debian.installation18](images/debian.installation18.PNG)

Confirm by pressing enter :

![debian.installation19](images/debian.installation19.PNG)

Same :

![debian.installation20](images/debian.installation20.PNG)

And again (yes we validate a lot on a debian installation) :

![debian.installation21](images/debian.installation21.PNG)

Now more complicated, you must deselect "environment of
Debian desktop "by pressing the space key and selecting" server
SSH "by pressing space (move with the arrows on the
keyboard), then confirm by pressing enter :

![debian.installation22](images/debian.installation22.PNG)

We validate again :

![debian.installation23](images/debian.installation23.PNG)

You must choose / dev / sda then validate :

![debian.installation24](images/debian.installation24.PNG)

There you just have to remove the USB key, the cdrom or the virtual cdrom
and press enter :

![debian.installation25](images/debian.installation25.PNG)

Here is your debian installation is finished. You can stop the
tutorial there if you want or follow the next steps for a few
system modifications (useful especially for jeedom).

Optimization for Jeedom 
========================

To prepare the installation of Jeedom you can do some
Optimizations :

Add vim and sudo 
-------------------

    sudo apt-get install -y vim sudo

Add fail2ban 
----------------

Fail2ban is software that allows you to secure access to your debian,
in the event of too many connection failures it blocks access to
the IP in question (therefore not to everyone, only to the attacker) a
time.

    sudo apt-get install -y fail2ban

Add the Open VMware Tools 
-----------------------------

Open VMware Tools install system-specific drivers
installed and bring the optimizations of this hosted OS
on an ESXi hypervisor.

    sudo apt-get install -y open-vm-tools

You just have to install Jeedom by following
[this](https://doc.jeedom.com/en_US/installation/index#tocAnchor-1-27)
