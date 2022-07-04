# 

 **.**.  :

- ) : 
-  : 

> **Importante**
>
> .

# Instalación automática

## 

 [aquí](https://images.jeedom.com/rpi/)

> **IMPORTANTE**
>
> : jeedom-debian-XXXX-rpi-X.X.XX.-X.X.XX.).

.

## 

 [aquí](https://www.raspberrypi.org/downloads/)

## 

.

> **Importante**
>
> . .

Il vous suffit ensuite, de votre navigateur, de saisir : http://IP_RPI/ (en remplaçant IP_RPI par l'ip de votre Raspberry Pi).

> ****
>
>  :  

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)

# Instalación de la línea de comandos

## "

[aquí](https://downloads.raspberrypi.org/raspbian_lite_latest)

.

## 

[aquí](https://www.raspberrypi.org/downloads/)

> **Nota**
>
> ).

## 

> **Advertencia**
>
> . .

.

 : " ****

> **Importante**
>
> 

![ExtensionFichier](images/ExtensionFichier.PNG)

## 

.

## 



 :

-   
-   " [aquí](http://angryip.org/download/#windows)



 [](http://www.putty.org/)

.. .

 ****

> **Importante**
>
> . . ( : )

## 

``wget -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash``

****

> **Nota**
>
> . . .



> **Nota**
>
> Las credenciales predeterminadas son admin/admin

> **Nota**
>
> Se pueden usar los siguientes argumentos : -w = carpeta del servidor web -z = instalar las dependencias de z-wave -m = contraseña raíz de mysql deseada

````
./install.sh -w /var/www/html -z
````

## 

.

 ****  : ``sudo nano /boot/config.txt``

 ****  #) ****  :

````
gpu_mem=16
disable_l2cache=0
gpu_freq=250
````

 : ``CTRL+X``  ``O``  ``ENTER``



Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
