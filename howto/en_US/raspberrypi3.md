# Raspberry PI 3

You will find here the documentation to install Jeedom on a raspberry PI 3 **without microSD card.**

The PI3 indeed offers the possibility of booting directly onto a USB device and therefore freeing yourself from the microSD card that sometimes generates problems (corruption).

**The installation procedure is strictly identical to that on a microSD card, but you will need to make sure you have up-to-date firmware.**

To do this, open an SSH connection. (if you don't know how, watch the installation on microSD : [Here](https://doc.jeedom.com/en_US/installation/index.html)

``vcgencmd otp_dump | grep 17:``

You have to get back :

``17:3020000a``

If so, your PI3 is properly configured to boot from USB. If it finds nothing, it will boot normally on a microSD card.

If the return is different, you just need to update.

``sudo apt-get update; sudo apt-get install rpi-update``

puis

``sudo rpi-update``

Then restart PI3

``sudo reboot``

> **IMPORTANT**
>
> To avoid power issues, choose a low-consumption mSATA SSD.

> **Tip**
>
> You can now install Jeedom by following exactly the same procedure as with an SD card. [Here](https://doc.jeedom.com/en_US/installation/index.html)

## Possible adjustments

**The following remarks must then be taken into account :**

> **IMPORTANT**
>
> The following changes are the result of problems encountered by users. You must adapt them to your case. Jeedom support does not intervene for problems related to your configuration.

-   **If you encounter swap problems, you should modify it.**
    -   **Increase its size** :
        -   Change the size of the swap by opening this file :
            ``sudo nano /etc/dphys-swapfile``
-   Find the right setting :
    ``CONF_SWAPSIZE=100``
-   Change the value of ``CONF_SWAPSIZE`` to 1024, for example, then restart :
    ``sudo reboot``
-   **Change the swap call value.** By default, the system calls the swap when there is less than 40% of Ram.
-   Open the file to change this setting :
    ``sudo nano /etc/sysctl.conf``
-   Add this line, to ask Pi3 to use the swap only when it has 10% of available memory (100 MB of available RAM) :
    ``vm.swappiness = 10``
-   Then restart :
    ``sudo reboot``
-   **Disable built-in bluetooth because incompatible with the GPIO card zwave.me**
    -   Open the file concerned :
    ``sudo nano /boot/config.txt``
-   add line :
    ``dtoverlay=pi3-disable-bt``
-   Make a clean stop
    ``sudo halt``
-   Disconnect reconnect (no sudo reboot !).
