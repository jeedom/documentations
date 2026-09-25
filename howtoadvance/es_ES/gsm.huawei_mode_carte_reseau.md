# Modo de tarjeta de red GSM de Huawei

Para utilizar el módem Huawei E3372 en modo tarjeta de red, es necesario cambiar el modo de funcionamiento del dispositivo. Por defecto, está configurado en modo módem para que sea compatible con el complemento de SMS.

# Eliminación de la configuración predeterminada

``sudo rm /etc/udev/rules.d/40-modemswitch.rules``

# Añadir la configuración

``sudo nano /etc/usb_modeswitch.conf``

y, a continuación, añade esto:

````
TargetVendor=0x12d1
TargetProductList=“14db,14dc”
HuaweiNewMode=1
NoDriverLoading=1
````

A continuación, guarda pulsando Ctrl+x

# Reinicio

``sudo reboot``

A continuación, puedes comprobar que la tarjeta se ha reconocido correctamente ejecutando el comando «ifconfig»; debería aparecer una clave «usbnet».
