Objetivo 
========



".



 . 

.

> **Importante**
>
> 
> .

> **Importante**
>
> 
> .

 
==============================================

 :

     | 


:

    : :.]


.

 
====================================



 :

     | 


 :

    

=="


 :

    

 :

    
    
    
    #
    #=============
    
    
    
    .
    

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

     Tenga cuidado de reemplazar los parámetros indicados a continuación con los suyos. :

    * NOM_DE_TON_RESEAU_SSID por el nombre de su propia red, manteniendo las comillas ("")
    * TA_CLE_WIFI por el nombre de su propia red, manteniendo las comillas ("")

    También llamo su atención para que su clave WiFi aparezca clara en el archivo. Si desea más seguridad, puede cifrar su clave de antemano mediante el comando "sudo wpa_passphrase" y luego insertar su clave cifrada (sin poner las comillas en este caso).

    == Activación WiFi

    Una vez que se completan los archivos, solo queda iniciar la conexión WiFi, escribiendo el siguiente comando :

sudo ifup 0

    Normalmente, su WiFi debería estar operativo en su Mini.
