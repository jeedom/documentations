# Añadir una llave wifi en Jeedom Mini

A continuación, por si acaso, te ofrecemos un procedimiento completo para instalar un adaptador WiFi del tipo «Edimax ew-7811n» en un Jeedom Mini, utilizando un método de autenticación WiFi del tipo «WPA 2 + AES».

Atención: este procedimiento solo funciona tal cual en el entorno concreto indicado anteriormente (mismo modelo, mismo dispositivo Jeedom, misma autenticación Wi-Fi). Por supuesto, también puede funcionar con otros componentes (o no), pero sin ninguna garantía.

> **Importante**
>
> Atención: este procedimiento no debe realizarse bajo ningún concepto en mini+, ya que se podría perder el acceso al sistema y habría que reinstalarlo todo.

> **Importante**
>
> Esta documentación debe utilizarse bajo tu propia responsabilidad; en caso de problemas, el equipo de Jeedom no se hará responsable en ningún caso.

## Comprobación de que la clave de WiFi se reconoce correctamente

Solo tienes que introducir, mediante SSH, el siguiente comando:

``sudo lsusb | grep Edimax``

Si la llave se reconoce correctamente, debería aparecer el siguiente mensaje:

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

Es posible que los identificadores del bus y del dispositivo sean diferentes en tu caso, dependiendo del puerto USB al que hayas conectado la memoria USB.

## Comprobación de la carga del controlador

El adaptador WiFi de Edimax tiene la ventaja de que ya lleva un controlador integrado en tu Mini; solo tienes que comprobarlo introduciendo el siguiente comando en SSH:

``sudo lsmod | grep 8192cu``

Si el comando devuelve un valor, significa que todo va bien. Por ejemplo, en mi caso, obtengo esta respuesta:

``8192cu                550797  0``

## Edición del archivo ``/etc/network/interfaces``

En primer lugar, debes editar el archivo «/etc/network/interfaces» con el siguiente comando:

``sudo nano /etc/network/interfaces``

Este es el contenido del archivo operativo que tengo en casa:

````
auto lo
iface lo inet loopback
iface eth0 inet dhcp
#wlan
#=============
auto wlan0
allow-hotplug wlan0
iface wlan0 inet dhcp
pre-up wpa_supplicant -Dwext -i wlan0 -c /etc/wpa_supplicant.conf -B
iface default inet dhcp
````

## Edición del archivo ``/etc/wpa\_supplicant.conf``

Ahora solo queda introducir tus parámetros de WiFi (nombre de tu SSID y clave WPA). Para ello, edita el archivo /etc/wpa\_supplicant.conf con el comando:

``sudo nano /etc/wpa_supplicant.conf``

Este es el archivo que utilizo en mi casa:

````
ctrl_interface=/var/run/wpa_supplicant
update_config=1
eapol_version=1
ap_scan=2
network={
        ssid="NOM_DE_TON_RESEAU_SSID"
        scan_ssid=1
        mode=0
        proto=WPA2
        pairwise=CCMP
        group=CCMP
        key_mgmt=WPA-PSK
        # choose one of the following
        psk="TA_CLE_WIFI"
 }
````

Asegúrate de sustituir los parámetros que se indican a continuación por los tuyos:

- NOMBRE_DE_TU_RED_SSID por el nombre de tu propia red, sin olvidar las comillas (" ")
- TA_CLE_WIFI por el nombre de tu propia red, sin olvidar las comillas (« »)

También quiero señalar que tu clave WiFi aparecerá sin cifrar en el archivo. Si deseas mayor seguridad, puedes cifrar previamente tu clave mediante el comando «sudo wpa_passphrase» y, a continuación, introducir tu clave cifrada (sin comillas en este caso).

## Activación del WiFi

Una vez rellenados los archivos, solo queda iniciar la conexión Wi-Fi introduciendo el siguiente comando:

``sudo ifup wlan0``

Normalmente, tu red WiFi debería funcionar en tu Mini.
