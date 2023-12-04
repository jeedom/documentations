# Equipment

Jeedom can be installed on different hardware components :

-   a Raspberry Pi 2, 3 or 4 
-   Synology NAS
-   any Linux system based on Debian 11 (Bullseye)
-   Freebox Delta

You can also buy a ready-made box with Jeedom preinstalled which also contains a service pack (more support and services) and plugins offered :

- [Jeedom Atlas Z-Wave +](https://www.domadoo.fr/fr/box-domotique/5847-jeedom-controleur-domotique-jeedom-atlas-z-wave.html)
- [Jeedom Atlas Zigbee](https://www.domadoo.fr/fr/box-domotique/5878-jeedom-controleur-domotique-jeedom-atlas-zigbee.html)
- [Jeedom Atlas EnOcean](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-controleur-domotique-jeedom-atlas-enocean.html)

{% include lightbox.html src="images/Jeedom-Atlas-infographic-2.jpg" data="Atlas" title="Jeedom Atlas" imgstyle="width:auto;display: block;margin: 0 auto;" %}

In DIY editing (Do It Yourself), here is a "typical" configuration to get started with Jeedom in Z-Wave :

1. Raspberry pi 4 :

-   A raspberry + box 50 €
-   An Aeotec Gen 5 key \ ~ € 60
-   A microSD micro card \ ~ € 7
-   A USB power supply € 8

A total of € 125 for an open source home automation box with complete control over its installation.

> **Tip**
>
> - It is possible to add or change with an Rfxcom antenna, or an enOcean key, etc. 
> - In principle, you need a USB key per additional protocol. Depending on their number and their cumulative consumption, on a Raspberry Pi you may need an additional USB hub with its dedicated power supply. 
> - For the Z-Wave Aeotec Gen 5 key in cumulative use with a Raspberry Pi 4 (previous models not affected), you must use a recent one if you want to do away with a USB hub. Get information and get supplies from a home automation equipment seller.
> - On RPi 4, it is strongly recommended to replace the microSD card with an mSATA USB3 hard disk, directly connected to the USB3 port with native boot. MicroSD cards have a very limited lifespan due to intensive data exchange: only to be reserved for short periods of testing.

> **Tip**
>
> Jeedom is software that is and will remain open source, its use is completely free and does not depend on a cloud or a subscription. However, some plugins that increase the capacity of Jeedom or its use may be chargeable **and may need an internet connection**. You can find the list of plugins [here](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin).

> **Tip**
>
> Service pack ? What is it ? You can see [here](https://blog.jeedom.com/?p=1215) the advantages of service packs.

# Installation

I want to install Jeedom :

- On a [Luna](https://doc.jeedom.com/en_US/plugins/home%20automation%20protocol/luna)
- On a [atlas](https://doc.jeedom.com/en_US/installation/atlas)
- On a [SMART](https://doc.jeedom.com/en_US/installation/smart)
- On a [mini +](https://doc.jeedom.com/en_US/installation/mini)
- On a [Raspberry Pi](https://doc.jeedom.com/en_US/installation/rpi)
- On a [Freebox Delta](https://doc.jeedom.com/en_US/installation/freeboxdelta)
- In [command line](https://doc.jeedom.com/en_US/installation/cli)
- On a [VM](https://doc.jeedom.com/en_US/installation/vm)
- On a [Docker](https://doc.jeedom.com/en_US/installation/docker). NOTE : We do not recommend this installation mode which makes the use of certain equipment complicated because of Docker's network mode
- On a [NAS Synology](https://doc.jeedom.com/en_US/installation/synology). NOTE : We do not recommend this installation mode which makes the use of certain equipment complicated because of Docker's network mode
- On [bare metal (Intel Nuc type)](https://doc.jeedom.com/en_US/installation/baremetal)

Once the installation is done, do not forget to consult the documentation [First step with Jeedom](https://doc.jeedom.com/en_US/premiers-pas/index)
