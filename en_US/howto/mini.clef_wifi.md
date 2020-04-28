Goal 
========

Here, in case, an end-to-end procedure for installing a key
WiFi type "Edimax ew-7811n" on a Jeedom Mini, and considering
WPA 2 + AES wifi authentication".

Please note, this procedure only works as it is in the
strict framework of the environment indicated previously (same model, same
Jeedom box, same WiFi authentication) . Of course this can
also work for other components (or not) but without any
guarantee.

> **IMPORTANT**
>
> Attention this procedure is especially not to do on mini + under
> trouble losing access to it and having to reinstall everything.

> **IMPORTANT**
>
> This doc is to be applied at your own risk in case of concerns
> the Jeedom team can in no way be held responsible.

Verification that the WiFi key is well recognized 
==============================================

Just enter the following command in SSH :

    sudo lsusb | grep Edimax

If the key is recognized correctly, the message below should appear
:

    Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811A 802.11n Wireless Adapter [Realtek RTL8188CUS]

The identifiers of the Bus and the Device may be different at
you, depending on the USB port to which you connected your key.

Driver loading check 
====================================

The Edimax WiFi key has the advantage of having a driver already integrated in
your Mini and just check it by entering the command
next in SSH :

    sudo lsmod | grep 8192cu

If the command returns a value, everything is OK. for example
at home I get it back :

    8192cu 550797 0

==Editing the file "/ etc / network / interfaces"

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

" 
==============================================


. 
 :

    

 :

    
    
    
    
    network={
            "
            
            
            
            
            
            
            # 
            "
     }
     ----

      :

    * 
    * 

    . .

    == 

     :



    .
