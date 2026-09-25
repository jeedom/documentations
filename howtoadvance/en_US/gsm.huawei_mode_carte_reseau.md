# Huawei GSM Network Card mode

To use the Huawei E3372 dongle in network adapter mode, you must change the dongle's mode. By default, it is configured in Modem mode to be compatible with the SMS plugin.

# Removing the default configuration

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# Adding the configuration

``sudo nano /etc/usb_modeswitch.conf``

then add this:

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````

Then save by pressing Ctrl+X

# Reboot

``sudo reboot``

You can then verify that the card is recognized by running `ifconfig`; you should see a `usbnet` key appear.
