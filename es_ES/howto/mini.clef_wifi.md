# Agregar clave wifi en jeedom mini

Aquí hay, por si acaso, un procedimiento de extremo a extremo para instalar una clave WiFi tipo "Edimax ew-7811n" en un Jeedom Mini, y considerando una autenticación wifi tipo "WPA 2 + AES"".

Tenga en cuenta que este procedimiento solo funciona como tal solo dentro del marco estricto del entorno indicado anteriormente (mismo modelo, misma caja Jeedom, misma autenticación WiFi) . Por supuesto también puede funcionar para otros componentes (o no) pero sin ninguna garantía.

> **Importante**
>
> Tenga en cuenta que este procedimiento no debe realizarse en mini+ bajo pena de perder el acceso y tener que reinstalar todo.

> **Importante**
>
> Este documento debe aplicarse bajo su propio riesgo. En caso de inquietud, el equipo de Jeedom no se hace responsable de ninguna manera.

## Verificación de que la clave WiFi es bien reconocida

Simplemente ingrese, en SSH, el siguiente comando :

``sudo lsusb | grep Edimax``

Si la llave se reconoce correctamente, se debe mostrar el siguiente mensaje :

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

Los identificadores de Bus y Dispositivo pueden ser diferentes para usted, dependiendo del puerto USB en el que conectó su llave.

## Comprobación de la carga del controlador

La llave WiFi de Edimax tiene la ventaja de tener un driver ya integrado en tu Mini y solo tienes que comprobarlo introduciendo el siguiente comando en SSH :

``sudo lsmod | grep 8192cu``

Si el comando devuelve un valor, todo está bien. Por ejemplo en casa recibo a cambio esto :

``8192cu                550797  0``

## Edición de archivos ``/etc/network/interfaces``

Primero debe editar el archivo "/etc/network/interfaces" con el siguiente comando :

``sudo nano /etc/network/interfaces``

Aquí está el contenido del archivo operativo en mi lugar :

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

## Edición de archivos ``/etc/wpa\_supplicant.conf``

Ahora todo lo que tiene que hacer es insertar su configuración WiFi (nombre de su SSID y clave WPA). Esto se hace editando el archivo /etc/wpa\_supplicant.conf con el comando :

``sudo nano /etc/wpa_supplicant.conf``

Aquí está mi archivo operativo en casa :

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

Tenga cuidado de reemplazar los parámetros indicados a continuación con los suyos propios :

- NOM_DE_TON_RESEAU_SSID por el nombre de su propia red, manteniendo las comillas (" ")
- TA_CLE_WIFI por el nombre de tu propia red, manteniendo las comillas (" ")

También le llamo la atención que su clave WiFi aparecerá en texto claro en el archivo. Si desea más seguridad, primero puede codificar su clave usando el comando "sudo wpa_passphrase" y luego insertar su clave codificada (sin poner las comillas en este caso).

## Habilitar wifi

Una vez rellenados los archivos, solo queda iniciar la conexión WiFi, tecleando el siguiente comando :

``sudo ifup wlan0``

Normalmente, su WiFi debería estar operativa en su Mini.
