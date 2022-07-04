# Add wifi key on jeedom mini

Here is, in case, an end-to-end procedure to install an "Edimax ew-7811n" type WiFi key on a Jeedom Mini, and considering a "WPA 2 + AES" type wifi authentication".

Please note, this procedure only works as such only within the strict framework of the environment indicated above (same model, same Jeedom box, same WiFi authentication) . Of course it can also work for other components (or not) but without any guarantee.

> **Important**
>
> Please note that this procedure is not to be done on mini+ under penalty of losing access to it and having to reinstall everything.

> **Important**
>
> This doc is to be applied at your own risk in case of concern the Jeedom team can in no way be held responsible.

## Verification that the WiFi key is well recognized

Just enter, in SSH, the following command :

``sudo lsusb | grep Edimax``

If the key is correctly recognized, the message below must then be displayed :

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

The Bus and Device identifiers may be different for you, depending on the USB port you plugged your key into.

## Checking driver loading

The Edimax WiFi key has the advantage of having a driver already integrated in your Mini and you just have to check it by entering the following command in SSH :

``sudo lsmod | grep 8192cu``

If the command returns a value, everything is OK. For example at home I get in return this :

``8192cu                550797  0``

## File editing ``/etc/network/interfaces``

You must first edit the "/etc/network/interfaces" file with the following command :

``sudo nano /etc/network/interfaces``

Here is the content of the operational file at my place :

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

## File editing ``/etc/wpa\_supplicant.conf``

Now all you have to do is insert your WiFi settings (name of your SSID and WPA key). This is done by editing the file /etc/wpa\_supplicant.conf with the command :

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

Be careful to replace the parameters indicated below with your own :

- NOM_DE_TON_RESEAU_SSID by the name of your own network, keeping the quotation marks (" ")
- TA_CLE_WIFI by the name of your own network, keeping the quotation marks (" ")

I also draw your attention that your WiFi key will appear in clear text in the file. If you want more security, you can first encode your key using the "sudo wpa_passphrase" command and then insert your encoded key (without putting the quotes in this case).

## Enable Wi-Fi

Once the files are filled in, all that remains is to start the WiFi connection, by typing the following command :

``sudo ifup wlan0``

Normally, your WiFi should be operational on your Mini.
