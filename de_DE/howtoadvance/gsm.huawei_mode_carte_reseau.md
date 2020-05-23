# GSM Huawei Netzwerkkartenmodus

Um den Huawei E3372-Schlüssel im Netzwerkkartenmodus zu verwenden, muss der Betriebsmodus des Schlüssels geändert werden. Standardmäßig ist dies im Modem-Modus konfiguriert, um mit dem SMS-Plugin kompatibel zu sein.

# Löschen der Standardkonfiguration

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# Konfiguration hinzufügen

``sudo nano /etc/usb_modeswitch.conf``

dann füge dies hinzu :

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````

Speichern Sie dann durch Drücken von Strg + x

# Reboot

``sudo reboot``

Sie können dann überprüfen, ob die Karte gut erkannt wird, indem Sie eine ifconfig ausführen. Es sollte ein USB-Schlüssel angezeigt werden.
