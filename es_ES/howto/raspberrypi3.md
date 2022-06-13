# 

 **.**

).

**.**

. ( : [](https://doc.jeedom.com/es_ES/installation/index.html)

``vcgencmd otp_dump | grep 17:``

 :

``17:3020000a``

. .

.

``sudo apt-get update; sudo apt-get install rpi-update``

puis

``sudo rpi-update``



``sudo reboot``

> ****
>
> .

> ****
>
> . [](https://doc.jeedom.com/es_ES/installation/index.html)

## 

** :**

> ****
>
> . . .

-   **.**
    -   **** :
        -    :
            ``sudo nano /etc/dphys-swapfile``
-    :
    ``CONF_SWAPSIZE=100``
-    ``CONF_SWAPSIZE``  :
    ``sudo reboot``
-   **.** .
-    :
    ``sudo nano /etc/sysctl.conf``
-   ) :
    ``vm.swappiness = 10``
-    :
    ``sudo reboot``
-   ****
    -    :
    ``sudo nano /boot/config.txt``
-    :
    ``dtoverlay=pi3-disable-bt``
-   
    ``sudo halt``
-    !).
