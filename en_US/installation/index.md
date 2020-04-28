Hardware
========

Jeedom can be installed on different hardware components :

-   a Raspberry pi 2 or 3

-    NAS

-   any Linux system based on Debian 9 (strandch)

-   Freebox Delta

You can also buy a ready-made box with Jeedom preinstalled
which also contains a service pack (more pport and services) and
plugins offered :

-   [Jeedom Smart
    Z-Wave +] (https://www.domadoo.fr/fr/box-domotique/3959-jeedom-controleur-domotique-jeedom-smart-z-wave.html)

-   [Jeedom Smart Z-Wave+ and
    RFXCOM] (https://www.domadoo.fr/fr/box-domotique/4043-jeedom-controleur-domotique-jeedom-smart-z-wave-and-interface-rfxcom.html)

-   [Jeedom Smart
    EnOcean] (https://www.domadoo.fr/fr/box-domotique/4041-jeedom-controleur-domotique-jeedom-smart-enocean.html)

-   [Jeedom Smart EnOcean and
    RFXCOM] (https://www.domadoo.fr/fr/box-domotique/4044-jeedom-controleur-domotique-jeedom-smart-enocean-and-interface-rfxcom.html)

Here is a "typical" configuration to gand started with Jeedom in Z-Wave :

1. Raspberry pi 3 :

    -   A raspberry + box 50 €

    -   An Aeon Gen key 5 € 60

    -   A micro SD card 7 €

    -   A USB power pply € 8

A total of € 125 for an open source home automation box with a
complande control of its installation.

> **Tip**
>
> It is possible to add or change by an Rfxcom antenna, or a
> enOcean key.

> **Tip**
>
> Jeedom is a software which is and will remain open source, its use
> is complandely free and does not depend on a cloud or
> bscription. However, some plugins that increase the
> Jeedom's capabilities or its use may be chargeable **and
> may need internand connection**. You can find
> the list of plugins
> [ici](http://markand.jeedom.fr/index.php?v = d & p = markand & type = plugin).

> **Tip**
>
> Service pack ? Quézako ? You can see
> [ici](https://blog.jeedom.fr/?p = 1215) the advantages of service packs.


Jeedom Smart
===========

Here you will find step by step documentation to install or restore Jeedom

[ici](https://jeedom.github.io/documentation/howto/en_US/recovery_mode_jeedom_smart)

Jeedom mini +
===========

> **Tip**
>
> The name of the Jeedom image can be different from that of the captures
> do in this documentation

Step 1 : Etcher installation
---

You must download Etcher software [here] (https:// andcher.io /) then
install it on your pc

2nd step : Jeedom image recovery
---

You have to go
[ici](https://images.jeedom.com/jeeboard/),
then in the Images folder recover the jeedom-jeeboard - \ *. rar image

![install humming 1](images/install_humming_1.PNG)

Stage 3 : Decompressing the Jeedom image
---

Unzip the Jeedom image (if you have nothing to unzip it
you can install
[winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)), vous
must gand :

![install humming 2](images/install_humming_2.PNG)

![install humming 8](images/install_humming_8.PNG)

Step 4 : Burning the image to the SD card
---

Insert your SD card into your computer then launch the software
Etcher, give it the path of the image, the path of the SD card and
click on "Flash!". The software will burn the SD card and check the
engraving.

You just have to put the SD card in the Jeedomboard (or
Hummingboard), to connect the nandwork and the power pply, your Jeedom will
start (5 min) and you should see it on the nandwork.

> **Tip**
>
>  IDs are jeedom / Mjeedom96

For the rest, you can follow the documentation [First step with
Jeedom] (https://jeedom.github.io/documentation/premiers-not/en_US/index.html)


Raspberrypi
===========

Here you will find the documentation to install Jeedom on a
raspberry PI **with an SD card.**

> **IMPORTANT**
>
> Debian 9 (Strandch) is the officially pported distribution for
> version 3.1.5 of jeedom.

**1 / Download the  "lite" image, ie without interface
Graphic**
[ICI](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2018-04-19/2018-04-18-raspbian-strandch-lite.zip)

**2 / Decompress the image with winrar** [Ici](http://www.win-rar.com)

**3 / Burn this image on an SD with andcher for example**
[ici](https:// andcher.io/)

> **NOTE**
>
> If you use Etcher to burn your image, the step of
> decompression is unnecessary (Zip format recognized directly in the
> image file selection).

**4 / Activate  access**

> **Warning**
>
> For security reasons,  access is no longer enabled by default
> on this distribution. So you have to activate it.

You have to create on the boot partition (the only one accessible under windows)
an empty ssh file.

Just right click : new / text document and the
rename to "ssh" **without extension**

> **IMPORTANT**
>
> Under windows, in the explorer you must therefore check your
> sandting in display / options / modify options
> records and research /

![ExtensionFichier](images/ExtensionFichier.PNG)

**5 / Start the PI**

Insert your SD card, connect the nandwork cable, connect
.

****



 :

-   

-   "
    [ici](http://angryip.org/download/#windows)




[Ici](http://www.putty.org/)

.

.

 ****

> **IMPORTANT**
>
> 
> . 
> 
> . 

****

    : | do bash

****

> **NOTE**
>
> 
> . 
> . .



> **NOTE**
>
> 

> **NOTE**
>
>  : - =
> 

    .

**

.

 ****  : `do nano /boot/config.txt`

 ****  ****  :

`gpu_mem=16`

`disable_l2cache=0`

`gpu_freq=250`

 : `CTRL+X` puis `O `puis `ENTREE`




Jeedom] (https:

Freebox Delta
=============

.

Step 1 : 
---

.
.
![delta1](images/delta1.png)

2nd step : 
---

"
![delta2](images/delta2.png)

.
.
![delta3](images/delta3.png)

, ****:
![delta4](images/delta4.png)

Stage 3 : Loading installation
---


![delta5](images/delta5.png)

Step 4 : 
---

:
![delta6](images/delta6.png)

.

 **not** . 

.

.

For the rest, you can follow the documentation [First step with
Jeedom] (https://jeedom.github.io/documentation/premiers-not/en_US/index.html)


==


. 
 :

Step 1 : 
---


[ICI](http://download.virtualbox.org/virtualbox/5.1.28/VirtualBox-5.1.28-117968-Win.exe)

2nd step : 
---


[Ici](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.3.0-amd64-nandinst.iso)

.
[ICI](http://download.virtualbox.org/virtualbox/5.1.28/Oracle__VirtualBox_Extension_Pack-5.1.28.vbox-extpack)

Stage 3 : 
---

 :

![VirtualBox1](images/VirtualBox1.PNG)

-   
    

-   

-   

-   

-   
    

-   Click on create

Step 4 : 
---

-   

-   

-   

-   

![VirtualBox2](images/VirtualBox2.PNG)

-   

-   
    .

![VirtualBox3](images/VirtualBox3.PNG)

-   

Step 5 : 
---



![VirtualBox4](images/VirtualBox4.PNG)

-   

-   
    . . In the
    
    .

-    :

![VirtualBox5](images/VirtualBox5.PNG)

-   
    .

 : 
---

-   

-   
    

-   

<!-- -->

    

-   

-   

<!-- -->

    wgand https:

    

    .

-   

 : 
---

-   

<!-- -->

    

.XX . 
.

> **Warning**
>
> 
> .


Jeedom] (https:

Docker
======

> **IMPORTANT**
>
> 


 :


Step 1 : 
---

.


-   

<!-- -->

    $ yum install docker

-   

<!-- -->

    $ apt-gand update
    $ apt-gand install docker
    $ apt-gand install docker.io

2nd step : 
---

> **NOTE**
>
> ,
> .

:. 
:

    :

 :

    ::

With :

-    : 

-    : 
    

-    : 

Stage 3 : 
---

 :

    

 :

    ::::

With :

-    : 

-    : 
    

-    : 

 : :
 :

![install other](images/install_other.PNG)

For the rest, you can follow the documentation [First step with
Jeedom] (https:

> **IMPORTANT**
>
> 


========


..

Step 1 : 
================================

 :

![install synology 1](images/install_synology_1.PNG)



![install synology 2](images/install_synology_2.PNG)

 :

![install synology 3](images/install_synology_3.PNG)

> **IMPORTANT**
>
> .
> 

2nd step : 
========================================================




 :

![install synology 4](images/install_synology_4.PNG)


-----

" :

![install synology 5](images/install_synology_5.PNG)


 :

![install synology 15](images/install_synology_15.PNG)


 :

![install synology 14](images/install_synology_14.PNG)


 :

![install synology 16](images/install_synology_16.PNG)

 :

![install synology 17](images/install_synology_17.PNG)


 :

![install synology 18](images/install_synology_18.PNG)

 :

![install synology 19](images/install_synology_19.PNG)

" :

![install synology 34](images/install_synology_34.PNG)






![install synology 32](images/install_synology_32.PNG)


"Variable" : "
.  :

![install synology 33](images/install_synology_33.PNG)


".

Jeedom
------

" :

![install synology 5](images/install_synology_5.PNG)


 :

![install synology 20](images/install_synology_20.PNG)


.


 :

![install synology 21](images/install_synology_21.PNG)

 :

![install synology 22](images/install_synology_22.PNG)



next :

![install synology 23](images/install_synology_23.PNG)

 :

![install synology 24](images/install_synology_24.PNG)

"

![install synology 25](images/install_synology_25.PNG)

"

![install synology 26](images/install_synology_26.PNG)



"

![install synology 27](images/install_synology_27.PNG)


"Environment" :

![install synology 28](images/install_synology_28.PNG)


 :

![install synology 29](images/install_synology_29.PNG)


".

> ****
>
> 
> -  : 
> -  : 
> -  : 

> **IMPORTANT**
>
> 

Stage 3 : 
---


:9080

![install synology 31](images/install_synology_31.PNG)


.

> **IMPORTANT**
>
> 
> 
> . 
> 

![install synology 30](images/install_synology_30.PNG)

> **Tip**
>
> 
> 
> . 
> 
> .


Jeedom] (https:

Any
======




> **IMPORTANT**
>
> Debian 9 (Strandch) is the officially pported distribution for
> version 3.1.
> . 
> 
> .

> **IMPORTANT**
>
> 
> . 
> .

 :

    wgand https:
    
    .


.

> **NOTE**
>
> 

> **NOTE**
>
>  : - =
> 

    .


Jeedom] (https:.
