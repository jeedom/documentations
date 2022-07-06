# Agregar clave wifi en jeedom mini

Aquí, en el caso, un procedimiento de extremo a extremo para instalar una clave WiFi del tipo "Edimax ew-7811n" en un Jeedom Mini, y considerando una autenticación wifi del tipo "WPA 2 + AES".

Tenga en cuenta que este procedimiento solo funciona como es solo en el contexto estricto del entorno indicado anteriormente (mismo modelo, mismo cuadro Jeedom, misma autenticación WiFi) . Por supuesto, también puede funcionar para otros componentes (o no) pero sin ninguna garantía.

> **Importante**
>
> Atención, este procedimiento es especialmente para no hacerlo en mini + bajo pena de perder el acceso a él y tener que reinstalar todo.

> **Importante**
>
> Este documento debe aplicarse bajo su propio riesgo en caso de problemas. El equipo de Jeedom no se hace responsable de ninguna manera.

## Verificación de que la clave WiFi es bien reconocida

Simplemente ingrese el siguiente comando en SSH :

``sudo lsusb | grep Edimax``

Si la clave se reconoce correctamente, debería aparecer el siguiente mensaje :

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

Los identificadores del Bus y el Dispositivo pueden ser diferentes para usted, dependiendo del puerto USB en el que haya conectado su llave.

## Comprobación de carga del conductor

La clave WiFi Edimax tiene la ventaja de tener un controlador ya integrado en su Mini y solo tiene que verificarlo ingresando el siguiente comando en SSH :

``sudo lsmod | grep 8192cu``

Si el comando devuelve un valor, significa que todo está bien. Por ejemplo en casa, me devuelven eso :

``8192cu                550797  0``

## Editando el archivo ``/etc/network/interfaces``

Primero debe editar el archivo "/ etc / network / interfaces" con el siguiente comando :

``sudo nano /etc/network/interfaces``

Aquí está el contenido del archivo operativo conmigo :

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

## Editando el archivo ``/etc/wpa\_supplicant.conf``

Ahora solo tiene que ingresar su configuración WiFi (nombre de su SSID y clave WPA). Esto se hace editando el archivo / etc / wpa\_supplicant.conf con comando :

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

Tenga cuidado de reemplazar los parámetros indicados a continuación con los suyos :

- NOM_DE_TON_RESEAU_SSID por el nombre de su propia red, manteniendo las comillas bien (" ")
- TA_CLE_WIFI por el nombre de su propia red, manteniendo bien las comillas (" ")

También llamo su atención para que su clave WiFi aparezca clara en el archivo. Si desea más seguridad, puede cifrar su clave de antemano mediante el comando "sudo wpa_passphrase" y luego insertar su clave cifrada (sin poner las comillas en este caso).

## Activación WiFi

Una vez que se completan los archivos, solo queda iniciar la conexión WiFi, escribiendo el siguiente comando :

``sudo ifup wlan0``

Normalmente, su WiFi debería estar operativo en su Mini.
