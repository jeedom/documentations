# 

. .

# 

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# Konfig hinzugefügt

``sudo nano /etc/usb_modeswitch.conf``

dann füge das hinzu :

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````

Speichern Sie dann mit Strg+x

# Reboot

``sudo reboot``

Sie können dann überprüfen, ob die Karte gut erkannt wird, indem Sie eine ifconfig durchführen, Sie sollten einen USB-Schlüssel sehen.
