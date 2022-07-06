# GSM Huawei network card mode

In order to use the Huawei E3372 key in network card mode, it is necessary to change the operating mode of the key. By default, this is configured in Modem mode in order to be compatible with the SMS plugin.

# Deleting the default configuration

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# Adding configuration

``sudo nano /etc/usb_modeswitch.conf``

then add this :

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````

Then save by pressing Ctrl + x

# Reboot

``sudo reboot``

You can then check that the card is well recognized by doing an ifconfig, you should see a usbnet key appear.
