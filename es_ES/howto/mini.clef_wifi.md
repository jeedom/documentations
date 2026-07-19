# 

".

) . .

> ****
>
> .

> ****
>
> .

## 

 :

``sudo lsusb | grep Edimax``

 :

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

.

## 

 :

``sudo lsmod | grep 8192cu``

 :

``8192cu                550797  0``

##  ``/etc/network/interfaces``

 :

``sudo nano /etc/network/interfaces``

 :

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

##  ``/etc/wpa\_supplicant.conf``

). . :

``sudo nano /etc/wpa_supplicant.conf``

 :

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

 :

-  (" ")
-  (" ")

. ).

## 

 :

``sudo ifup wlan0``

.
