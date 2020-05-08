Goal 
========



".



 . 

garantie.

> **Important**
>
> 
> .

> **Important**
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

    

"
==============================================

You must first edit the "/ etc / network / interfaces" file with the
next order :

    sudo nano / etc / network / interfaces

Here is the content of the operational file with me :

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

Editing of the file "/etc/wpa\_supplicant.conf" 
==============================================

Now you just have to insert your WiFi settings (name of
your SSID and WPA key). This is done by editing the file
/etc/wpa\_supplicant.conf with the command :

    sudo nano /etc/wpa_supplicant.conf

Here is my operational file at home :

    ctrl_interface = / var / run / wpa_supplicant
    update_config = 1
    eapol_version = 1
    ap_scan = 2
    network={
            ssid = "NOM_DE_TON_RESEAU_SSID"
            scan_ssid = 1
            mode=0
            proto = WPA2
            pairwise = CCMP
            group = CCMP
            key_mgmt = WPA-PSK
            # choose one of the following
            psk = "TA_CLE_WIFI"
     }
     ----

     Be careful to replace the parameters indicated below with yours :

    * NOM_DE_TON_RESEAU_SSID by the name of your own network, keeping the quotes ("")
    * TA_CLE_WIFI by the name of your own network, keeping the quotes ("")

    I also draw your attention that your WiFi key will appear in clear in the file. If you want more security, you can encrypt your key beforehand via the command "sudo wpa_passphrase" then insert your encrypted key (without putting the quotes in this case).

    == WiFi activation

    Once the files are completed, it only remains to start the WiFi connection, by typing the following command :

sudo ifup wlan0

    Normally, your WiFi should be operational on your Mini.
