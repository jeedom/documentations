Afin d'utiliser la clé Huawei E3372 en mode carte réseau, il est nécessaire de modifier le mode de fonctionnement de la clé.
Par défaut, celle-ci est configurée en mode Modem afin d'être compatible avec le plugin SMS.

1.Suppression de la configuration par défaut 
=============================================

> sudo rm /etc/udev/rules.d/40-modemswitch.rules

2.Ajout de la configuration 
============================

> sudo nano /etc/usb_modeswitch.conf

puis ajouter ceci :

> TargetVendor=0x12d1

> TargetProductList=“14db,14dc”

> HuaweiNewMode=1

> NoDriverLoading=1

Puis sauvegarder en faisant Ctrl+x

3.Reboot 
=========

> sudo reboot

Vous pouvez ensuite vérifier que la carte est bien reconnue en faisant un ifconfig, vous devriez voir apparaitre une clé usbnet.


