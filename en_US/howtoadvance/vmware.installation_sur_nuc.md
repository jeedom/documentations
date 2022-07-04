# Installed vmware on nuc

Here is a tutorial to install VMware on an Intel NUC (gen6). We will see later how to add Jeedom on it

# Equipment 

## Intel NUCs

The Intel NUC is a small PC, not the most powerful, but very energy efficient and small in size. This makes it a perfect little virtualization server based on VMware.

There are currently 2 6th generation NUCs (the others also work for VMware but require additional drivers on the VMware kernel):

-   Intel Core i3-6100U (Dual-Core 2.3 GHz - - 4 threads - 3 MB cache - TDP 15W)
-   Intel Core i5-6260U (Dual-Core 1.8GHz - Turbo 2.9 GHz - 4 threads - 4 MB cache)

The i5 is much more powerful because it has a little more cache memory and above all a turbo mode which allows it to go much higher in frequency.

To this is added 2 types of box :

-   A thin case that can only hold an M2 type disc
-   A thicker case that can hold an M2 type disc and a 2 disc.5 inches

That makes 4 references :

-   i3 M2 : [Intel NUC NUC6I3SYK](http://www.ldlc.com/fiche/PB00203086.html) \~ 320€
-   i3 M2+2.5inches : [Intel NUC NUC6I3SYH](http://www.ldlc.com/fiche/PB00203148.html) \~ 320€
-   i5 M2 : [Intel NUC NUC6I5SYK](http://www.ldlc.com/fiche/PB00203084.html) \~ 460€
-   i5 M2+2.5inches : [Intel NUC NUC6I5SYH](http://www.ldlc.com/fiche/PB00202760.html) \~ 430€

## SSD

You have to add an SSD and memory to this. SSD level I recommend 240GB or more, unless you take the model with a slot 2.5 inches (which allows you to put an extra hard disk) or to have a Synology type NAS to make iSCSI LUNs. Do not forget that a basic VM (no storage) is between 20 to 40 GB, add to that 40 GB for the VMware itself, it fills up quickly.

> **Important**
>
> VMware does not support adding USB disk, so it is difficult to expand the available space

-   [LDLC SSD M.2 2280 F6 PLUS 120 GB](http://www.ldlc.com/fiche/PB00203635.html) \~ 55€
-   [Samsung SSD 850 EVO 120 GB M.2](http://www.ldlc.com/fiche/PB00185923.html) \~ 100€
-   [LDLC SSD M.2 2280 F6 PLUS 240 GB](http://www.ldlc.com/fiche/PB00203636.html) \~ 105€
-   [Samsung SSD 850 EVO 250 GB M.2](http://www.ldlc.com/fiche/PB00185924.html) \~ 120€
-   [LDLC SSD M.2 2280 F6 PLUS 480 GB](http://www.ldlc.com/fiche/PB00207301.html) \~ 190€

## Memory

Be careful for the memory you absolutely need DDR4 in So-DIMM 260 pins, you need at least 4GB for VMware, but from experience I advise you at least 8GB (personally I even went up to 16GB, the NUC supports a maximum 32GB). There, no recommended memory, the cheapest is fine (be careful, I always take packs of 2 bars, this improves performance) :

-   [Crucial SO-DIMM DDR4 8GB (2 x 4GB) 2133MHz CL15 SR X8](http://www.ldlc.com/fiche/PB00204134.html) \~ 35€
-   [Crucial SO-DIMM DDR4 16GB (2 x 8GB) 2133MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204135.html) \~ 65€
-   [Crucial SO-DIMM DDR4 32GB (2 x 16GB) 2133MHz CL15 DR X8](http://www.ldlc.com/fiche/PB00204136.html) \~ 120€

# Preparing for installation

Before starting the installation itself, you will first have to recover VMware and put it on a USB key.

## VMware Download

> **Important**
>
> If you put vmware 6.5, there is a problem with the new management of USB and Zwave keys, for this to work you must apply this [KB](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147650). Attention this manipulation is no longer to be done in vmware 6.7

It's the hardest part in fact I think, to simplify your life you have to :

-   go on [here](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) and register
-   wait for the email to validate the registration
-   flip [here](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) and connect (it may ask you to accept the conditions, you must validate)
-   then go [the](https://my.vmware.com/fr/web/vmware/details?productId=491&downloadGroup=ESXI60U2) and add to your account "ESXi ISO image (Includes VMware Tools)"
-   finally return [here](https://my.vmware.com/en/web/vmware/evalcenter?p=free-esxi6) and there you must have in "Downlaod Packages", an "ESXi ISO image (Includes VMware Tools)" package that you must download

![installation.vmware.nuc](images/installation.vmware.nuc.PNG)

Just above you also have your license key, you can take the opportunity to recover it.

## Rufus download

There it is much simpler you just have to click [the](http://rufus.akeo.ie/downloads/rufus-2.9.exe). You must then launch the .exe

## Creation of the bootable USB key

Again it's easy here's how to configure rufus :

![installation.vmware.nuc2](images/installation.vmware.nuc2.PNG)

Now all you have to do is click start and wait.

# Unpacking and Assembling the NUC

Here are the 3 components for my NUC :

-   Intel NUC NUC6I5SYH
-   Samsung SSD 850 EVO 250 GB M.2
-   CORSAIR VENGEANCE SO-DIMM DDR4 16GB (2 X 8GB) 2400MHZ CL16

![installation.vmware.nuc3](images/installation.vmware.nuc3.jpg)

The NUC box :

![installation.vmware.nuc4](images/installation.vmware.nuc4.jpg)

Opening of it :

![installation.vmware.nuc5](images/installation.vmware.nuc5.jpg)

Components out of their box :

![installation.vmware.nuc6](images/installation.vmware.nuc6.jpg)

Opening the NUC, it's very simple, put it upside down, unscrew the 4 screws under the feet (they don't come out completely, it's normal, you just have to unscrew them), then slightly pull the screws to open the NUC:

![installation.vmware.nuc7](images/installation.vmware.nuc7.jpg)

The SSD installed (on the left), the screw at the end to block it is a bit painful to put back, luckily we only do that once

![installation.vmware.nuc8](images/installation.vmware.nuc8.jpg)

Installing memory (right) :

![installation.vmware.nuc10](images/installation.vmware.nuc10.jpg)

There you go, you can close (unless of course you took an SSD 2.5 inches that must be inserted in the lid in this case).

# Installing VMware

It's very simple, just put the USB key on one of the NUC's USB ports, connect a screen to the HDMI port, a keyboard and the power supply. You turn on the NUC, the installation will start on its own :

![installation.vmware.nuc11](images/installation.vmware.nuc11.jpg)

> **Note**
>
> I forgot to take the captures of the license validation, you just have to agree by following the instructions

Here select the disk corresponding to the SSD (you can locate it either by the name or by the size)

![installation.vmware.nuc13](images/installation.vmware.nuc13.jpg)

Select "French" :

![installation.vmware.nuc14](images/installation.vmware.nuc14.jpg)

Put a password, at the beginning I advise you to put something simple like "oooo" (we will change it later) :

![installation.vmware.nuc15](images/installation.vmware.nuc15.jpg)

Validate by doing F11 :

![installation.vmware.nuc16](images/installation.vmware.nuc16.jpg)

The installation will take 10 to 20min, then you will have to remove the USB key and wait for the system to reboot

![installation.vmware.nuc17](images/installation.vmware.nuc17.jpg)

Once the restart is complete you should have :

![installation.vmware.nuc18](images/installation.vmware.nuc18.jpg)

Here VMware is installed (in addition it is nice it gives you its IP), just to play with !!!

For the continuation here is a [tutorial](https://doc.jeedom.com/en_US/howto/doc-howto-vmware.creer_une_vm.html) for creating your first VM. And you will find [here](https://doc.jeedom.com/en_US/howto/doc-howto-vmware.trucs_et_astuces.html) a tips and tricks tutorial (for example to put your VMware license)
