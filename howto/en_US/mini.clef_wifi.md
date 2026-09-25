# Adding a Wi-Fi key to Jeedom Mini

Here is, just in case, a step-by-step guide for installing an "Edimax ew-7811n" Wi-Fi adapter type "WPA2 + AES" on a Jeedom Mini.

Please note that this procedure works as is only within the specific environment described above (same model, same Jeedom box, same Wi-Fi authentication). Of course, it may also work for other components (or it may not), but there is no guarantee.

> **Important**
>
> Warning: Under no circumstances should you perform this procedure on mini+, as doing so may result in losing access to it and requiring a complete reinstallation.

> **Important**
>
> Use this documentation at your own risk; the Jeedom team cannot be held liable for any issues that may arise.

## Verify that the Wi-Fi key is recognized

Simply enter the following command via SSH:

``sudo lsusb | grep Edimax``

If the key is recognized correctly, the following message should appear:

``Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]``

The bus and device IDs may be different on your system, depending on which USB port you plugged in your USB drive.

## Checking if the driver is loaded

The Edimax WiFi dongle has the advantage of having a driver already built into your Mini; all you need to do is verify this by entering the following command via SSH:

``sudo lsmod | grep 8192cu``

If the command returns a value, that means everything is OK. For example, at my house, I get this in response:

``8192cu                550797  0``

## Editing the file ``/etc/network/interfaces``

First, you need to edit the "/etc/network/interfaces" file using the following command:

``sudo nano /etc/network/interfaces``

Here is the contents of the operational file on my computer:

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

Now all you have to do is enter your Wi-Fi settings (your SSID name and WPA key). To do this, edit the /etc/wpa_supplicant.conf file using the following command:

``sudo nano /etc/wpa_supplicant.conf``

Here is the file I use at home:

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

Be sure to replace the settings listed below with your own:

- REPLACE_YOUR_NETWORK_SSID with the name of your own network, making sure to keep the quotation marks (" ")
- Replace TA_CLE_WIFI with the name of your own network, making sure to include the quotation marks (" ")

I would also like to point out that your Wi-Fi password will appear in plain text in the file. If you want greater security, you can encrypt your password beforehand using the "sudo wpa_passphrase" command, then enter your encrypted password (without the quotation marks in this case).

## Enabling Wi-Fi

Once the files have been configured, all that's left to do is start the Wi-Fi connection by entering the following command:

``sudo ifup wlan0``

Normally, your Wi-Fi should be working on your Mini.
