# Frambuesa pi 3

Aquí encontrará la documentación para instalar Jeedom en una raspberry PI 3 **sin tarjeta microSD.**

De hecho, el PI3 ofrece la posibilidad de arrancar directamente en un dispositivo USB y, por lo tanto, liberarlo de la tarjeta microSD que a veces genera problemas (corrupción).

**El procedimiento de instalación es estrictamente idéntico al de una tarjeta microSD, pero deberá asegurarse de tener el firmware actualizado.**

Para hacer esto, abra una conexión SSH. (si no sabes como hacerlo mira la instalacion en microSD : [Aquí](https://doc.jeedom.com/es_ES/installation/index.html)

``vcgencmd otp_dump | grep 17:``

Debes volver :

``17:3020000a``

Si es así, su PI3 está correctamente configurado para arrancar desde USB. Si no encuentra nada, se iniciará normalmente en una tarjeta microSD.

Si la devolución es diferente, solo necesita actualizar.

``sudo apt-get update; sudo apt-get install rpi-update``

puis

``sudo rpi-update``

Luego reinicie el PI3

``sudo reboot``

> **Importante**
>
> Para evitar problemas de energía, opte por un SSD mSATA de bajo consumo.

> **Consejo**
>
> Ahora puede instalar Jeedom siguiendo exactamente el mismo procedimiento que con una tarjeta SD. [Aquí](https://doc.jeedom.com/es_ES/installation/index.html)

## Posibles ajustes

**Deben entonces tenerse en cuenta las siguientes observaciones :**

> **Importante**
>
> Los siguientes cambios son el resultado de problemas encontrados por los usuarios. Debes adaptarlos a tu caso. El soporte de Jeedom no interviene por problemas relacionados con su configuración.

-   **Si encuentra problemas de intercambio, debe modificarlo.**
    -   **Aumentar su tamaño** :
        -   Cambie el tamaño de intercambio abriendo este archivo :
            ``sudo nano /etc/dphys-swapfile``
-   Encuentre el parámetro correcto :
    ``CONF_SWAPSIZE=100``
-   Cambiar el valor de ``CONF_SWAPSIZE`` a 1024, por ejemplo, luego reinicie :
    ``sudo reboot``
-   **Cambiar el valor de la llamada de intercambio.** De forma predeterminada, el sistema llama al intercambio cuando queda menos del 40% de RAM.
-   Abra el archivo para cambiar esta configuración :
    ``sudo nano /etc/sysctl.conf``
-   Agregue esta línea para pedirle al Pi3 que use el intercambio solo cuando le quede el 10% de la memoria disponible (es decir, 100 MB de RAM disponible)) :
    ``vm.swappiness = 10``
-   Luego reinicia :
    ``sudo reboot``
-   **Deshabilitar el bluetooth integrado porque es incompatible con la tarjeta zwave.me GPIO**
    -   Abre el archivo afectado :
    ``sudo nano /boot/config.txt``
-   añadir línea :
    ``dtoverlay=pi3-disable-bt``
-   Hacer una parada limpia
    ``sudo halt``
-   Desenchufe, vuelva a enchufar (sin reinicio sudo) !).
