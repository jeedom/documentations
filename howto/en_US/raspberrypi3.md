# Raspberry Pi 3

Here you'll find documentation on how to install Jeedom on a Raspberry Pi 3 **without a microSD card.**

The PI3 allows you to boot directly from a USB device, freeing you from the microSD card, which can sometimes cause problems (such as data corruption).

**The installation procedure is exactly the same as for a microSD card, but you’ll need to make sure you have the latest firmware.**

To do this, open an SSH connection. (If you don't know how, see the microSD installation guide: [Here](/installation)

``vcgencmd otp_dump | grep 17:``

You should receive the following in return:

``17:3020000a``

If so, your PI3 is correctly configured to boot from USB. If it doesn't find anything, it will boot normally from a microSD card.

If the return value is different, you simply need to perform an update.

``sudo apt-get update; sudo apt-get install rpi-update``

then

``sudo rpi-update``

Then restart the PI3

``sudo reboot``

> **Important**
>
> To avoid power issues, choose a low-power mSATA SSD.

> **Tip**
>
> You can now install Jeedom by following the exact same procedure as with an SD card. [Here](/installation)

## Possible adjustments

**Next, consider the following points:**

> **Important**
>
> The following changes are the result of issues encountered by users. You must adapt them to your specific situation. Jeedom support does not assist with issues related to your configuration.

-   **If you're experiencing swap issues, you'll need to change it.**
    -   **Increasing its size**:
        -   Change the swap size by opening this file:
``sudo nano /etc/dphys-swapfile``
-   Find the right setting:
``CONF_SWAPSIZE=100``
-   Change the value of ``CONF_SWAPSIZE`` to 1024, for example, then restart:
``sudo reboot``
-   **Change the value for when to trigger the swap.** By default, the system triggers the swap when less than 40% of RAM remains.
-   Open the file to change this setting:
``sudo nano /etc/sysctl.conf``
-   Add this line to instruct the Pi3 to use swap only when it has 10% of its memory remaining (i.e., 100 MB of available RAM):
``vm.swappiness = 10``
-   Then restart:
``sudo reboot``
-   **Disable the built-in Bluetooth, as it is incompatible with the zwave.me GPIO board**
    -   Open the relevant file:
``sudo nano /boot/config.txt``
-   Add the line:
``dtoverlay=pi3-disable-bt``
-   Make a clean stop
``sudo halt``
-   Unplug and plug back in (no "sudo reboot"!).
