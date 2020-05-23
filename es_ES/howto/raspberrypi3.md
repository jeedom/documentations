# Frambuesa PI 3

Encontrará aquí la documentación para instalar Jeedom en una frambuesa PI 3 **sin tarjeta microSD.**

De hecho, el PI3 ofrece la posibilidad de arrancar directamente en un dispositivo USB y, por lo tanto, liberarse de la tarjeta microSD que a veces genera problemas (corrupción).

**El procedimiento de instalación es estrictamente idéntico al de una tarjeta microSD, pero deberá asegurarse de tener el firmware actualizado.**

Para hacer esto, abra una conexión SSH. (si no sabes cómo, mira la instalación en microSD : [Aquí](https://doc.jeedom.com/es_ES/installation/index.html)

``vcgencmd otp_dump | grep 17:``

Tienes que volver :

``17:3020000a``

Si es así, su PI3 está configurado correctamente para arrancar desde USB. Si no encuentra nada, se iniciará normalmente en una tarjeta microSD.

Si la devolución es diferente, solo necesita actualizar.

``sudo apt-get update; sudo apt-get install rpi-update``

puis

``sudo rpi-update``

Luego reinicie PI3

``sudo reboot``

> **Importante**
>
> Para evitar problemas de alimentación, elija una SSD mSATA de bajo consumo.

> **Punta**
>
> Ahora puede instalar Jeedom siguiendo exactamente el mismo procedimiento que con una tarjeta SD. [Aquí](https://doc.jeedom.com/es_ES/installation/index.html)

## Posibles ajustes

**Deben tenerse en cuenta las siguientes observaciones :**

> **Importante**
>
> Los siguientes cambios son el resultado de problemas encontrados por los usuarios. Debes adaptarlos a tu caso. El soporte de Jeedom no interviene por problemas relacionados con su configuración.

-   **Si encuentra problemas de intercambio, debe modificarlo.**
    -   **Aumentar su tamaño** :
        -   Cambie el tamaño del intercambio abriendo este archivo :
            ``sudo nano /etc/dphys-swapfile``
-   Encuentra la configuración correcta :
    ``CONF_SWAPSIZE=100``
-   Cambiar el valor de ``CONF_SWAPSIZE`` a 1024, por ejemplo, luego reiniciar :
    ``sudo reboot``
-   **Cambiar el valor de la llamada de intercambio.** Por defecto, el sistema llama al intercambio cuando hay menos del 40% de RAM.
-   Abra el archivo para cambiar esta configuración :
    ``sudo nano /etc/sysctl.conf``
-   Agregue esta línea para pedirle a Pi3 que use el intercambio solo cuando tenga un 10% de memoria disponible (100 MB de RAM disponible) :
    ``vm.swappiness = 10``
-   Luego reinicie :
    ``sudo reboot``
-   **Deshabilite el bluetooth incorporado porque es incompatible con la tarjeta GPIO zwave.me**
    -   Abra el archivo en cuestión :
    ``sudo nano /boot/config.txt``
-   agregar línea :
    ``dtoverlay=pi3-disable-bt``
-   Hacer una parada limpia
    ``sudo halt``
-   Desconectar reconectar (no reiniciar sudo !).
