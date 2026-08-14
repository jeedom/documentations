# Compatibility

>**INFORMATION**
>
>The Jeedom team strives to keep this information up to date, sometimes at the expense of other developments. The community’s support is invaluable for all aspects of the documentation, and this page is a top priority.

## Official boxes

**Jeedom and Domadoo** develop and market official “turnkey” boxes, with Jeedom preinstalled on an optimized system that includes services, plugins, and enhanced technical support. The official boxes also feature an automatic system restore tool.

{% include lightbox.html src="../images/tableau-comparatif-atlas-et-luna.jpg" data="AtlasLuna" title="Jeedom Atlas & Jeedom Luna" imgstyle="display:block;margin:0 auto;" %}

| Jeedom Atlas | Jeedom Luna |
|-------------------------|-------------------------|
| [Atlas **without protocol**](https://www.domadoo.fr/fr/box-domotique/7329-jeedom-controleur-domotique-jeedom-atlas-sans-protocole.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + Bluetooth**](https://www.domadoo.fr/fr/box-domotique/6280-jeedom-controleur-domotique-jeedom-luna-z-wave700-zigbee30-bt.html){:target="_blank"} |
| [Atlas **EnOcean**](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-atlas-enocean.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + 4G**](https://www.domadoo.fr/fr/box-domotique/6615-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-et-4g.html){:target="_blank"} |
| [Atlas **EnOcean + ZOOZ Z-Wave adapter**](https://www.domadoo.fr/fr/box-domotique/6857-jeedom-controleur-domotique-jeedom-atlas-enocean-dongle-z-wave-zooz.html){:target="_blank"} | [Luna **Z-Wave, Zigbee, LoRaWAN + 4G**](https://www.domadoo.fr/fr/box-domotique/6617-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-lorawan-4g.html){:target="_blank"} |
| [Atlas **Pro DIN rail without protocol**](https://www.domadoo.fr/fr/box-domotique/6567-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-sans-antenne.html){:target="_blank"} |             |
| [Atlas **Pro DIN Rail EnOcean**](https://www.domadoo.fr/fr/box-domotique/6565-jeedom-atlas-pro-enocean.html){:target="_blank"} |             |
| [Atlas **Pro DIN Rail KNX**](https://www.domadoo.fr/fr/box-domotique/6563-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-knx.html){:target="_blank"} |             |

>**INFORMATION**
>
>Although it is no longer widely marketed, the Jeedom Smart box remains a perfectly viable official solution, and the system continues to be maintained by the team.

## Hardware

Our recommendations will depend on various factors:

- **Jeedom Atlas or Luna**: the perfect blend of simplicity, optimization, and advanced compatibility.
- **Nano-computer** *(Odroid C2, Rock Pi, Raspberry Pi, etc.)*: the best value for the price.
- **Mini-PC** *(NUC)*: Extreme performance for a higher budget *(see [the dedicated advanced tutorial](/howtoadvance/vmware.installation_sur_nuc) for more details)*.

### Supported Devices

>**IMPORTANT**
>
>Official support is limited to the Jeedom instance. Only official boxes are also covered by system support *(excluding modifications)*.

| Official Boxes | Nano-computers | Computers | Hypervisors |
|------------------------|------------------------|------------------------|------------------------|
| Smart, Atlas, Luna     | Odroid C2, Rock Pi Series 4, Raspberry Pi 3/4 and similar | 64-bit systems, Mini-PCs *(NUC)*, Intel® N100 processor | 64-bit systems, VirtualBox, VMware, Proxmox, Hyper-V, Freebox |

### Unsupported devices

| Official Boxes | Nano-computers | Computers | Hypervisors |
|------------------------|------------------------|------------------------|------------------------|
| Jeedomboard, Mini+     | Hummingboard, Raspberry Pi 0/1/2 and similar | 32-bit systems | 32-bit systems |

## Software-based

### Debian

| Version | Status |
|--------------------|--------------------|
| Debian 11 Bullseye | Recommended |
| Debian 12 Bookworm | Supported *(4.5)*   |
| Debian 13 Trixie   | Pending validation |
| Debian 10 Buster and earlier | Not supported |

### PHP

| Version | Status |
|--------------------|--------------------|
| PHP 7 | Recommended |
| PHP 8 | Supported *(4.5)*   |
| PHP 5.6 | End of support *(4.1)* |
| PHP 5.5 and earlier | Not supported     |

### MySQL

| Version | Status |
|--------------------|--------------------|
| MySQL 7.4 | Recommended |
| MySQL 5.5/5.6/5.7  | Supported |

### MariaDB

| Version | Status |
|--------------------|--------------------|
| MariaDB 10 | Recommended |

## Official system images

The team develops custom system images for a wide variety of devices, including Debian, Jeedom, and all recommended software dependencies:

| System Overview | Documentation |
|--------------------|--------------------|
| [Luna](https://images.jeedom.com/luna/){:target="_blank"} | [Installation on Luna](/plugins/home%20automation%20protocol/luna) |
| [Atlas](https://images.jeedom.com/atlas/){:target="_blank"} | [Installation on Atlas](/installation/recovery) |
| [Smart](https://images.jeedom.com/smart/){:target="_blank"} | [Setup on Smart](/installation/recovery) |
| [Computers](https://images.jeedom.com/x86-64/){:target="_blank"} | [Installation on a PC/mini-PC](/installation/baremetal) |
| [Hypervisors](https://images.jeedom.com/x86-64/){:target="_blank"} | [Installation on a virtual machine](/installation/vm) |
| [Freebox](https://images.jeedom.com/freebox/){:target="_blank"} | [Setup on Freebox](/installation/freeboxdelta) |

### File verification

The **SHA256 key**, which is used to verify the integrity of the downloaded file, can be found in the file `info.json` located in the download folder.

### First connection

View the documentation related to [**First login**](/premiers-pas/#Première%20connexion) to access the Jeedom interface after installation.

### System console

>**IMPORTANT**
>
>It is neither recommended nor necessary to make changes at the system console level to use Jeedom.\
>Any changes to the system may affect the proper functioning of Jeedom.

The default credentials for accessing the system console *(keyboard/screen or SSH)* are: `jeedom/Mjeedom96`. The password `root` is the same.

## Compatible devices

Depending on the protocols and plugins used, it's not always easy to know whether a module will be supported. To help you determine whether your hardware is compatible, you can visit the website [Jeedom Compatibility](https://compatibility.jeedom.com/){:target="_blank"} whose list is kept up to date by the plugins themselves.

In addition, the information on this site can be cross-referenced with that available on the online store for home automation equipment [Domadoo](https://www.domadoo.fr/){:target="_blank"}.

Below are a few examples of links to consult depending on the protocol in question:

### Bluetooth

- [**Jeedom - Bluetooth Compatibility**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Bluetooth){:target="_blank"}

### Cameras

- [**Jeedom Compatibility - Cameras**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=IP){:target="_blank"}
- [**Domadoo - Cameras**](https://www.domadoo.fr/fr/128-cameras-connectees){:target="_blank"}

### EnOcean

- [**Jeedom - EnOcean Compatibility**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=EnOcean){:target="_blank"}
- [**Domadoo - EnOcean**](https://www.domadoo.fr/fr/225-domotique-enocean){:target="_blank"}

### RFXcom

- [**Jeedom - RFXcom Compatibility**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Rfxcom){:target="_blank"}

### Zigbee

- [**Jeedom - Zigbee Compatibility**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=zigbee){:target="_blank"}
- [**Domadoo - Zigbee**](https://www.domadoo.fr/fr/206-produits-zigbee){:target="_blank"}

### Z-Wave

- [**Jeedom - Z-Wave Compatibility**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Z-Wave){:target="_blank"}
- [**Domadoo - Z-Wave**](https://www.domadoo.fr/fr/210-produits-zwave){:target="_blank"}

## DIY Installation Example

For a DIY (Do It Yourself) setup, here is a "typical" configuration to get started with Jeedom and Z-Wave:

1.  Raspberry Pi 4:

    -   A Raspberry Pi + case ~€50
    -   An Aeotec Gen 5 key ~ €60
    -   A microSD card ~ €7
    -   A USB power adapter ~ €8

That comes to a total of €125 for an open-source home automation hub that gives you complete control over its setup.

>**INFORMATION**
>
>You can add or replace devices with an RFxCom antenna, an enOcean dongle, etc. Generally, you’ll need one USB dongle per additional protocol. Depending on the number of devices and their combined power consumption, you may need an additional USB hub with its own power supply when using a Raspberry Pi.\
>For the Aeotec Gen 5 Z-Wave dongle when used in conjunction with a Raspberry Pi 4 (earlier models are not affected), you must use a recent model if you want to avoid using a USB hub. Check with a home automation equipment retailer for more information and to purchase one.\
>For the RPi 4, it is strongly recommended that you replace the microSD card with an mSATA USB 3.0 hard drive, connected directly to the USB 3.0 port with native boot support. MicroSD cards have a very limited lifespan when subjected to intensive data transfer; they should be used only for short testing periods.
