# 

. .

# 

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# 

``sudo nano /etc/usb_modeswitch.conf``

 :

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````



# Reboot

``sudo reboot``

.
