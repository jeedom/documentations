# Add wifi key on jeedom mini

Here, in case, an end-to-end procedure to install a WiFi key of type "Edimax ew-7811n" on a Jeedom Mini, and considering a wifi authentication of type "WPA 2 + AES".

Please note, this procedure only works as is only in the strict context of the environment indicated above (same model, same Jeedom box, same WiFi authentication) . Of course it can also work for other components (or not) but without any guarantee.

> **IMPORTANT**
>
> Attention this procedure is especially not to do on mini + under penalty of losing access to it and having to reinstall everything.

> **IMPORTANT**
>
> This doc is to be applied at your own risk in the event of problems. The Jeedom team can in no way be held responsible.

## Verification that the WiFi key is well recognized

Just enter the following command in SSH :

``sudo lsusb | grep Edimax``

If the key is recognized correctly, the message below should appear :

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

The identifiers of the Bus and the Device may be different for you, depending on the USB port on which you have connected your key.

## Driver loading check

The Edimax WiFi key has the advantage of having a driver already integrated in your Mini and you just have to check it by entering the following command in SSH :

``sudo lsmod | grep 8192cu``

If the command returns a value, it means that everything is OK. For example at home, I get that back :

``8192cu                550797  0``

## Editing the file ``/etc/network/interfaces``

You must first edit the "/ etc / network / interfaces" file with the following command :

``sudo nano /etc/network/interfaces``

Here is the content of the operational file with me :

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

## Editing the file ``/etc/wpa\_supplicant.conf``

Now you just have to enter your WiFi settings (name of your SSID and WPA key). This is done by editing the file / etc / wpa\_supplicant.conf with command :

``sudo nano /etc/wpa_supplicant.conf``

Here is my operational file at home :

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

Be careful to replace the parameters indicated below with yours :

- NOM_DE_TON_RESEAU_SSID by the name of your own network, keeping the quotes well (" ")
- TA_CLE_WIFI by the name of your own network, keeping the quotes well (" ")

I also draw your attention that your WiFi key will appear in clear in the file. If you want more security, you can encrypt your key beforehand via the command "sudo wpa_passphrase" then insert your encrypted key (without putting the quotes in this case).

## WiFi activation

Once the files are completed, it only remains to start the WiFi connection, by typing the following command :

``sudo ifup wlan0``

Normally, your WiFi should be operational on your Mini.
