Goal 
========

Here you will find the documentation to install Jeedom on a
raspberry PI 3 **without microSD card.**

PI3 indeed offers the possibility of booting directly on a
USB device and therefore free yourself from the microSD card sometimes
generating problems (corruption).

**The installation procedure is strictly identical to that on a
microSD card, but make sure you have firmware
jour.**

To do this, open an SSH connection. (if you don't know how,
watch the installation on microSD :
[Here](https://doc.jeedom.com/en_US/installation/index.html)
)

    vcgencmd otp_dump | grep 17:

You have to get back :

    17:3020000a

If so, your PI3 is properly configured to boot from
USB. If it finds nothing, it will start normally on a card
microSD.

If the return is different, you just need to update
jour.

    sudo apt-get update; sudo apt-get install rpi-update

puis

    sudo rpi-update

Then restart PI3

    sudo reboot

> **Important**
>
> To avoid power issues, choose an mSATA SSD
> low consumption.

> **Tip**
>
> You can now install Jeedom by following exactly the same
> procedure with an SD card.
> [Here](https://doc.jeedom.com/en_US/installation/index.html)

Possible adjustments 
=====================

**The following remarks must then be taken into account :**

> **Important**
>
> The following changes are the result of problems encountered by
> the users. You must adapt them to your case. The support
> Jeedom does not intervene for problems related to your configuration.

-   **If you encounter swap problems, you should modify it.**

    -   **Increase its size** :

        -   Change the size of the swap by opening this file :

<!-- -->

    sudo nano / etc / dphys-swapfile

-   Find the right setting :

<!-- -->

    CONF_SWAPSIZE = 100

-   Change the value of CONF\_SWAPSIZE to 1024, for example, then
    restart :

<!-- -->

    sudo reboot

-   **Change the swap call value.**

By default, the system calls the swap when there is less than 40% of
Ram.

-   Open the file to change this setting :

<!-- -->

    sudo nano /etc/sysctl.conf

-   Add this line, to ask Pi3 to use the swap only
    when there is 10% of available memory (100 MB of
    Ram available) :

<!-- -->

    vm.swappiness = 10

-   Then restart :

<!-- -->

    sudo reboot

-   **Disable built-in bluetooth because incompatible with the card
    GPIO zwave.me**

    -   Open the file concerned :

<!-- -->

    sudo nano /boot/config.txt

-   add line :

<!-- -->

    dtoverlay = pi3-disable-bt

-   Make a clean stop

<!-- -->

    sudo halt

-   Disconnect reconnect (no sudo reboot!).


