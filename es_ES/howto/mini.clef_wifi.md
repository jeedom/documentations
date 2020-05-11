Objetivo 
========

Aquí, en el caso, un procedimiento de extremo a extremo para instalar una clave
WiFi tipo "Edimax ew-7811n" en un Jeedom Mini, y considerando
Autenticación wifi WPA 2 + AES".

Tenga en cuenta que este procedimiento solo funciona como está en el
Marco estricto del entorno indicado anteriormente (mismo modelo, mismo
Jeedom box, misma autenticación WiFi) . Por supuesto que esto puede
También funciona para otros componentes (o no) pero sin ningún
garantía.

> **Importante**
>
> Atención, este procedimiento es especialmente para no hacer en mini + bajo
> problemas para perder el acceso y tener que reinstalar todo.

> **Importante**
>
> Este documento debe aplicarse bajo su propio riesgo en caso de inquietudes
> el equipo de Jeedom no puede ser considerado responsable.

Verificación de que la clave WiFi es bien reconocida 
==============================================

Simplemente ingrese el siguiente comando en SSH :

    sudo lsusb | grep Edimax

Si la clave se reconoce correctamente, debería aparecer el siguiente mensaje
:

    Bus 001 Dispositivo 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811A 802.Adaptador inalámbrico 11n [Realtek RTL8188CUS]

Los identificadores del bus y el dispositivo pueden ser diferentes en
usted, dependiendo del puerto USB al que conectó su llave.

Comprobación de carga del conductor 
====================================

La clave WiFi Edimax tiene la ventaja de tener un controlador ya integrado en
su Mini y simplemente verifíquelo ingresando el comando
siguiente en SSH :

    sudo lsmod | grep 8192cu

Si el comando devuelve un valor, todo está bien. Por ejemplo
en casa lo recupero :

    8192cu 550797 0

Edición del archivo "/ etc / network / interfaces"
==============================================

Primero debe editar el archivo "/ etc / network / interfaces" con el
orden siguiente :

    sudo nano / etc / network / interfaces

Aquí está el contenido del archivo operativo conmigo :

    auto lo
    iface lo inet loopback
    iface eth0 inet dhcp
    #wlan
    #=============
    auto wlan0
    allow-hotplug wlan0
    iface wlan0 inet dhcp
    pre-up wpa_supplicant -Dwext -i wlan0 -c / etc / wpa_supplicant.conf -B
    iface default inet dhcp

Edición del archivo "/etc/wpa\_supplicant.conf" 
==============================================

Ahora solo tiene que ingresar su configuración WiFi (nombre de
su SSID y clave WPA). Esto se hace editando el archivo
/etc/wpa\_supplicant.conf con el comando :

    sudo nano /etc/wpa_supplicant.conf

Aquí está mi archivo operativo en casa :

    ctrl_interface = / var / run / wpa_supplicant
    update_config = 1
    eapol_version = 1
    ap_scan = 2
    red={
            ssid = "NOM_DE_TON_RESEAU_SSID"
            scan_ssid = 1
            modo = 0
            proto = WPA2
            pairwise = CCMP
            grupo = CCMP
            key_mgmt = WPA-PSK
            # elige uno de los siguientes
            psk = "TA_CLE_WIFI"
     }
     ----

     Tenga cuidado de reemplazar los parámetros indicados a continuación con los suyos :

    * NOM_DE_TON_RESEAU_SSID por el nombre de su propia red, manteniendo las comillas ("")
    * TA_CLE_WIFI por el nombre de su propia red, manteniendo las comillas ("")

    También llamo su atención para que su clave WiFi aparezca clara en el archivo. Si desea más seguridad, puede cifrar su clave de antemano mediante el comando "sudo wpa_passphrase" y luego insertar su clave cifrada (sin poner las comillas en este caso).

    == Activación WiFi

    Una vez que se completan los archivos, solo queda iniciar la conexión WiFi, escribiendo el siguiente comando :

sudo ifup wlan0

    Normalmente, su WiFi debería estar operativo en su Mini.
