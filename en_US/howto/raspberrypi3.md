Goal 
========

Here you will find the documentation to install Jeedom on a
 **without  card.**

PI3 indeed offers the possibility of booting directly on a
USB device and therefore free yourself from the  card sometimes
generating problems (corruption).

**The installation procedure is strictly identical to that on a
 card, but make sure you have firmware
Day.**

To do this, open an SSH connection. (if you don't know how,
watch the installation on  :
[Here](https://doc.jeedom.com/en_US/installation/index.html)
)

     | :

You have to get back :

    17:

If so, your PI3 is properly configured to boot from
USB. If it finds nothing, it will start normally on a card
.

If the return is different, you just need to update
Day.

    

then

    

Then restart PI3

    

> **IMPORTANT**
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

> **IMPORTANT**
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

-   Change the value of CONF \ _SWAPSIZE to 1024, for example, then
    restart :

<!-- -->

    

-   **Change the swap call value.**

By default, the system calls the swap when there is less than 40% of
.

-   Open the file to change this setting :

<!-- -->

    

-   Add this line, to ask Pi3 to use the swap only
    when there is 10% of available memory (100 MB of
     available) :

<!-- -->

    

-   Then restart :

<!-- -->

    

-   **Disable built-in bluetooth because incompatible with the card
    **

    -   Open the file concerned :

<!-- -->

    

-   add line :

<!-- -->

    dtoverlay = pi3-disable-bt

-   Make a clean stop

<!-- -->

    

-   Disconnect reconnect (no !).


