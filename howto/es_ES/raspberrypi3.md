# Raspberry Pi 3

Aquí encontrarás la documentación para instalar Jeedom en una Raspberry Pi 3 **sin tarjeta microSD.**

De hecho, el PI3 ofrece la posibilidad de arrancar directamente desde un dispositivo USB, lo que te permite prescindir de la tarjeta microSD, que a veces puede dar problemas (corrupción de datos).

**El procedimiento de instalación es exactamente igual que el de una tarjeta microSD, pero hay que asegurarse de tener el firmware actualizado.**

Para ello, abre una conexión SSH. (Si no sabes cómo hacerlo, consulta la guía de instalación en microSD: [Aquí](/installation)

``vcgencmd otp_dump | grep 17:``

Debes obtener a cambio:

``17:3020000a``

Si es así, tu PI3 está correctamente configurado para arrancar desde el USB. Si no encuentra nada, arrancará normalmente desde una tarjeta microSD.

Si el resultado es diferente, solo tienes que actualizarlo.

``sudo apt-get update; sudo apt-get install rpi-update``

y luego

``sudo rpi-update``

A continuación, reinicio del PI3

``sudo reboot``

> **Importante**
>
> Para evitar problemas de consumo, opta por un disco SSD mSATA de bajo consumo.

> **Consejo**
>
> Ahora puedes instalar Jeedom siguiendo exactamente el mismo procedimiento que con una tarjeta SD. [Aquí](/installation)

## Posibles ajustes

**A continuación, hay que tener en cuenta las siguientes observaciones:**

> **Importante**
>
> Las siguientes modificaciones son el resultado de problemas que han tenido los usuarios. Debes adaptarlas a tu caso concreto. El servicio de asistencia de Jeedom no interviene en problemas relacionados con tu configuración.

-   **Si tienes problemas con el swap, debes modificarlo.**
    -   **Aumentar su tamaño**:
        -   Cambia el tamaño del archivo de intercambio abriendo este archivo:
``sudo nano /etc/dphys-swapfile``
-   Encuentra la configuración adecuada:
``CONF_SWAPSIZE=100``
-   Cambia el valor de ``CONF_SWAPSIZE`` a 1024, por ejemplo, y luego reinicia:
``sudo reboot``
-   **Cambia el valor de activación del swap.** Por defecto, el sistema activa el swap cuando queda menos del 40 % de RAM.
-   Abre el archivo para cambiar este parámetro:
``sudo nano /etc/sysctl.conf``
-   Añade esta línea para indicar al Pi3 que utilice el espacio de intercambio solo cuando le quede un 10 % de memoria disponible (es decir, 100 MB de RAM disponible):
``vm.swappiness = 10``
-   A continuación, reinicia:
``sudo reboot``
-   **Desactiva el Bluetooth integrado, ya que es incompatible con la tarjeta GPIO de zwave.me**
    -   Abre el archivo correspondiente:
``sudo nano /boot/config.txt``
-   añadir la línea:
``dtoverlay=pi3-disable-bt``
-   Hacer una parada limpia
``sudo halt``
-   Desconectar y volver a conectar (¡sin «sudo reboot»!).
