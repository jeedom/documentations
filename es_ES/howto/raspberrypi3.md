Objetivo 
========

Aquí encontrará la documentación para instalar Jeedom en un
frambuesa PI 3 **sin tarjeta microSD.**

PI3 de hecho ofrece la posibilidad de arrancar directamente en un
Dispositivo USB y, por lo tanto, libérese de la tarjeta microSD a veces
generando problemas (corrupción).

**El procedimiento de instalación es estrictamente idéntico al de un
tarjeta microSD, pero asegúrese de tener firmware
Día.**

Para hacer esto, abra una conexión SSH. (si no sabes cómo,
mira la instalación en microSD :
[Aquí](https://doc.jeedom.com/es_ES/installation/index.html)
)

    vcgencmd otp_dump | grep 17:

Tienes que volver :

    17:3020000a

Si es así, su PI3 está configurado correctamente para arrancar desde
USB Si no encuentra nada, comenzará normalmente en una tarjeta
microSD.

Si la devolución es diferente, solo necesita actualizar
Día.

    sudo apt-get update; sudo apt-get install rpi-update

después

    sudo rpi-update

Luego reinicie PI3

    reinicio de sudo

> **Importante**
>
> Para evitar problemas de alimentación, elija un SSD mSATA
> bajo consumo.

> **Punta**
>
> Ahora puede instalar Jeedom siguiendo exactamente lo mismo
> procedimiento con una tarjeta SD.
> [Aquí](https://doc.jeedom.com/es_ES/installation/index.html)

Posibles ajustes 
=====================

**Deben tenerse en cuenta las siguientes observaciones :**

> **Importante**
>
> Los siguientes cambios son el resultado de problemas encontrados por
> los usuarios. Debes adaptarlos a tu caso. El apoyo
> Jeedom no interviene por problemas relacionados con su configuración.

-   **Si encuentra problemas de intercambio, debe modificarlo.**

    -   **Aumentar su tamaño** :

        -   Cambie el tamaño del intercambio abriendo este archivo :

<!-- -->

    sudo nano / etc / dphys-swapfile

-   Encuentra la configuración correcta :

<!-- -->

    CONF_SWAPSIZE = 100

-   Cambie el valor de CONF \ _SWAPSIZE a 1024, por ejemplo, luego
    reiniciar :

<!-- -->

    reinicio de sudo

-   **Cambiar el valor de la llamada de intercambio.**

Por defecto, el sistema llama al intercambio cuando hay menos del 40% de
Carnero.

-   Abra el archivo para cambiar esta configuración :

<!-- -->

    sudo nano /etc/sysctl.conf

-   Agregue esta línea, para pedirle a Pi3 que use solo el intercambio
    cuando hay un 10% de memoria disponible (100 MB de
    Ram disponible) :

<!-- -->

    vm.swappiness = 10

-   Luego reinicie :

<!-- -->

    reinicio de sudo

-   **Desactiva el bluetooth incorporado porque es incompatible con la tarjeta
    GPIO zwave.me**

    -   Abra el archivo en cuestión :

<!-- -->

    sudo nano /boot/config.txt

-   agregar línea :

<!-- -->

    dtoverlay = pi3-disable-bt

-   Hacer una parada limpia

<!-- -->

    alto de sudo

-   Desconecte la reconexión (¡sin reinicio de sudo!).


