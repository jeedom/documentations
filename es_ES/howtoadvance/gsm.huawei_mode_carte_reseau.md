# Modo de tarjeta de red GSM Huawei

Para utilizar la llave Huawei E3372 en modo tarjeta de red es necesario cambiar el modo de funcionamiento de la llave. Por defecto viene configurado en modo Módem para ser compatible con el plugin SMS.

# Eliminación de la configuración predeterminada

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# Configuración añadida

``sudo nano /etc/usb_modeswitch.conf``

entonces agrega esto :

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````

Luego guarda presionando Ctrl+x

# Reboot

``sudo reboot``

A continuación, puede comprobar que la tarjeta está bien reconocida haciendo un ifconfig, debería ver aparecer una clave usbnet.
