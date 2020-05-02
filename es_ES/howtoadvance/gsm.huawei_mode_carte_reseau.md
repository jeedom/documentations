Para usar la clave Huawei E3372 en modo de tarjeta de red, es necesario cambiar el modo operativo de la clave.
Por defecto, esto está configurado en modo Módem para ser compatible con el complemento de SMS..

1.Eliminar la configuración predeterminada 
=============================================

> sudo rm /etc/udev/rules.d/40-modemswitch.rules

2.Agregue la configuración 
============================

> sudo nano /etc/usb_modeswitch.conf

luego agrega esto :

> TargetVendor = 0x12d1

> TargetProductList=“14db,14dc”

> HuaweiNewMode = 1?

> NoDriverLoading = 1?

Luego guarde presionando Ctrl + x

3. reiniciar 
=========

> reinicio de sudo

Luego puede verificar que la tarjeta esté bien reconocida haciendo un ifconfig, debería ver aparecer una clave usbnet.


