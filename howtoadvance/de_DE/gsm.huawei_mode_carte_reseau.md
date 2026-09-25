# GSM-Modus von Huawei für Netzkarten

Um den Huawei E3372-Stick im Netzwerkkartenmodus zu verwenden, muss der Betriebsmodus des Sticks geändert werden. Standardmäßig ist dieser im Modem-Modus konfiguriert, um mit dem SMS-Plugin kompatibel zu sein.

# Löschen der Standardkonfiguration

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# Konfiguration hinzufügen

``sudo nano /etc/usb_modeswitch.conf``

und dann Folgendes hinzufügen:

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````

Anschließend mit Strg+x speichern

# Neustart

``sudo reboot``

Anschließend können Sie mit dem Befehl „ifconfig“ überprüfen, ob die Karte erkannt wurde; dabei sollte ein Eintrag „usbnet“ angezeigt werden.
