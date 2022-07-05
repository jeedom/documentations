# Raspberry pi 3

You will find here the documentation to install Jeedom on a raspberry PI 3 **without microSD card.**

The PI3 indeed offers the possibility of booting directly on a USB device and therefore freeing you from the microSD card sometimes generating problems (corruption).

**The installation procedure is strictly identical to that on a microSD card, but you will need to make sure you have up-to-date firmware.**

To do this, open an SSH connection. (if you don't know how to do it, watch the installation on microSD : [Here](https://doc.jeedom.com/en_US/installation/index.html)

``vcgencmd otp_dump | grep 17:``

You must get back :

``17:3020000a``

If so, your PI3 is correctly configured to boot from USB. If it finds nothing, it will boot normally on a microSD card.

If the return is different, you just need to update.

``sudo apt-get update; sudo apt-get install rpi-update``

puis

``sudo rpi-update``

Then restart the PI3

``sudo reboot``

> **Important**
>
> To avoid power issues, opt for a low-power mSATA SSD.

> **Tip**
>
> You can now install Jeedom by following exactly the same procedure as with an SD card. [Here](https://doc.jeedom.com/en_US/installation/index.html)

## Possible adjustments

**The following remarks must then be taken into account :**

> **Important**
>
> The following changes are the result of issues encountered by users. You must adapt them to your case. Jeedom support does not intervene for problems related to your configuration.

-   **If you encounter swap problems, you must modify it.**
    -   **Increase its size** :
        -   Change the swap size by opening this file :
            ``sudo nano /etc/dphys-swapfile``
-   Find the right parameter :
    ``CONF_SWAPSIZE=100``
-   Change the value of ``CONF_SWAPSIZE`` to 1024, for example, then restart :
    ``sudo reboot``
-   **Change the swap call value.** By default, the system calls the swap when less than 40% of Ram remains.
-   Open the file to change this setting :
    ``sudo nano /etc/sysctl.conf``
-   Add this line, to ask the Pi3 to use the swap only when it has 10% of available memory left (i.e. 100 MB of available Ram) :
    ``vm.swappiness = 10``
-   Then restart :
    ``sudo reboot``
-   **Disable the integrated bluetooth because incompatible with the zwave.me GPIO card**
    -   Open the affected file :
    ``sudo nano /boot/config.txt``
-   add line :
    ``dtoverlay=pi3-disable-bt``
-   Make a clean stop
    ``sudo halt``
-   Unplug replug (no sudo reboot !).
