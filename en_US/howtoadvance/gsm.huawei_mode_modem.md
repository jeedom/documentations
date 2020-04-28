In 90% of cases it is not necessary to force the GSM keys in mode
GSM only (instead of GSM + cdrom + card reader), the only case
where it is mandatory this is if you want to use the key in a
Jeedom on a VM (VMware ESXi). Indeed if you do not pass it in
GSM mode only the key will not appear in the list of
USB devices that you can pass to the VM.

> **IMPORTANT**
>
> This tutorial was done on a Windows 10

Driver installation 
========================

Once the key is connected to a Windows 10 PC you must have a
new CD-ROM drive. You have to double-click on it and install the
proposed software (there is nothing to change just do everything
.

![gsmonly](images/gsmonly.PNG)

COM port recovery 
========================

Then you have to retrieve the communication port number. Go to
the "Start" menu and search for "Device Manager", launch
this one then unfold the part "Ports (COM and LPT)", you should have
an item containing "HUAWEI", you just have to remember the number of the
COM port :

![gsmonly2](images/gsmonly2.PNG)

Putty Download 
=======================

Then download putty
[here](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) et
launch the downloaded file

Putty configuration and switch to GSM mode only 
=======================================================

Once launched configure putty like this (by putting your number
COM port to you, see step above) :

![gsmonly3](images/gsmonly3.PNG)

A black window will appear (there may occasionally be a
message "boot ...", this is normal, it means that you are well
connected to the GSM key). In this window you have to type then press
on the "Enter" key" :

    AT ^ u2diag = 0

> **IMPORTANT**
>
> Be careful when you type the text you will not see anything at
> the screen is normal, the text is still taken into account.

Normally in return you must have an OK.

That's it finished. Your key is in GSM mode only and you
can use it through VMware now.
