Um den Huawei E3372-Schlüssel im Netzwerkkartenmodus zu verwenden, muss der Betriebsmodus des Schlüssels geändert werden.
Standardmäßig ist es im Modem-Modus konfiguriert, um mit dem SMS-Plugin kompatibel zu sein..

1. Löschen der Standardkonfiguration 
=============================================

> sudo rm /etc/udev/rules.d/40-modemswitch.rules

2. Fügen Sie die Konfiguration hinzu 
============================

> sudo nano /etc/usb_modeswitch.conf

dann füge dies hinzu :

> TargetVendor = 0x12d1

> TargetProductList=“14db,14dc”

> HuaweiNewMode=1

> NoDriverLoading=1

Speichern Sie dann durch Drücken von Strg + x

3.Starten Sie neu 
=========

> sudo neu starten

Sie können dann überprüfen, ob die Karte gut erkannt wird, indem Sie eine ifconfig ausführen. Es sollte ein USB-Schlüssel angezeigt werden.


