# Modo de tarjeta de red GSM Huawei

Para usar la clave Huawei E3372 en modo de tarjeta de red, es necesario cambiar el modo operativo de la clave. Por defecto, esto está configurado en modo Módem para ser compatible con el complemento de SMS.

# Eliminar la configuración predeterminada

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# Agregar configuración

``sudo nano /etc/usb_modeswitch.conf``

luego agrega esto :

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````

Luego guarde presionando Ctrl + x

# Reboot

``sudo reboot``

Luego puede verificar que la tarjeta esté bien reconocida haciendo un ifconfig, debería ver aparecer una clave usbnet.
