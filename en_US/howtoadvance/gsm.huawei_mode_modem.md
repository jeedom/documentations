# GSM Huawei modem card mode

In 90% of cases it is not necessary to force GSM keys in GSM mode only (instead of GSM + cdrom + card reader), the only case where it is mandatory is if you want to use the key in a Jeedom on a VM (VMware ESXi). Indeed if you do not pass it in GSM mode only the key will not appear in the list of USB devices that you can pass to the VM.

> **Important**
>
> This tutorial was made on a Windows 10

# Driver installation

Once the key is connected to a Windows 10 PC you must have a new CD-ROM drive. You have to double-click on it and install the proposed software (there is nothing to change, just follow all the way).

![gsmonly](images/gsmonly.PNG)

# COM port recovery

Then you have to get the number of the communication port. Go to the "Start" menu and search for "Device Manager", launch it then unfold the "Ports (COM and LPT)" part, you should have an item containing "HUAWEI", then you just have to remember the number of the COM port :

![gsmonly2](images/gsmonly2.PNG)

# Putty Download

Then download putty [here](https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe) and run the downloaded file

# Configuring putty and switching to GSM-only mode

Once launched, configure putty like this (putting your own COM port number, see step above) :

![gsmonly3](images/gsmonly3.PNG)

A black window will appear (from time to time there may be a "boot…​" message, this is normal, this means that you are correctly connected to the GSM key). In this window, type and press the "Enter" key" :

``AT^u2diag=0``

> **Important**
>
> Be careful when you are going to type the text you will not see anything on the screen, it is normal, the text is still taken into account.

Normally in return you must have an OK.

Here it is finished. Your key is in GSM mode only and you can use it through VMware now.
