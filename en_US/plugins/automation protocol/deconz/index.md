# Deconz plugin

This plugin allows, via a conbee key (1 or 2), to control the deconz tool which allows you to zigbee (xiaomi module, philips hue, ikea...).

This plugin is completely cloudless, so it makes no communication to the outside (third party server) and functions 100% locally !!!!

Attention the Zigbee does not work at all like the Zwave, the list of modules included is not saved at all in the key (nothing is saved in the key). So it is easy to replace the key (by backup / restore, the backup can be recovered from jeedom but not restored from jeedom, it is necessary for restoration to go through Deconz, if you are in local installation it is IP_JEEDOM:8484). By cons in case of moving the key from one system to another it is also necessary to make a backup / restore.

>**Important**
>
> This plugin requires a USB key [Conbee](http://bit.ly/2n4VyWc)

>**Important**
>
> Debian Strech (debian 9) or higher is absolutely necessary for the plugin to work

>**Important**
>
> The plugin is not compatible with a 32-bit architecture (old hardware). The module is compatible with all Raspberry Pi

>**Important**
>
> On RPI it is necessary to deactivate the serial options so that the conbee key works correctly (it happens in ssh in raspi-config)

# Compatible module

Here you find the list of deconz compatible modules [here](https://phoscon.de/en/conbee/compatible)

>**NOTE**
>
> Adding a module is not managed directly by Jeedom SAS but by the publisher of the Deconz gataway. So we cannot guarantee that a support request for a new module will succeed. It is therefore strongly advised to buy a compatible module

>**NOTE**
>
> In the case of a so-called compatible module that is not supported or partially supported, the Jeedom SAS company cannot be held responsible and has no obligation of result on the correction of concerns

# Plugins configuration

The plugin supports several deconz gateways (1 conbee key per gateway). A conbee gateway can be installed on :

- jeedom himself (smart, rpi and x64_86 supported)
- a remote rpi
- or any other card compatible with deconz.

For remote installation here is the [Documentation](https://phoscon.de/en/conbee/install)

For installation on jeedom you just have to click on the button to install deconz locally.

>**Important**
>
> You MUST NOT do the 2 installation methods on the same system, it is one or the other

>**NOTE**
>
>To update local deconz simply click on the local deconz installation button

## Adding gateways

To add new gateways to the plugin, either on the plugin configuration page (Plugin -&gt; Plugin management then deconz), click on discovery (it does not always work) or by hand add at least the ip of the gateway and the port.

Then in deconz (Phoscon, if you installed it locally you have to go to IPJEEDOM:8484) then in the menu at the top left (the 3 small lines) you have to go to "gateway" then "advanced" and click "Authenticate App" and finally in the 60s go to the configuration of the plugin in Jeedom, save the list of gateways if you have changed it then click on "Recover API key".

# Deconz networks

Attention at the top right you have a selection button to choose the gateway to look at

## Summary

Here you will find the main information of your deconz networks (in particular the version of deconz and firmware).

## Action

There you will be able :

- update the firmware (only works if there is no other USB key connected to the machine)
- do a reset (beware it requires re-associating everything)
- change the source of firmware update (it is not recommended to touch it)
- change the channel

## Noeuds

Here you have a summary of the known nodes of the key, with the date of last communication, the firmware version, the battery level and by clicking on the info button the details of the node.

>**NOTE**
>
>Here the nodes are cut by type, so a module can appear several times depending on the number of type

# Inclusion

For inclusion you just have to click on the inclusion button, the system asks for the gateway once validated you have 3 min to do it.

To switch the module to inclusion mode, you must go to the documentation for the module in question

>**Important**
>
> The Zigbee network is very different from the Zwave network, the zigbee can go through a repeater but it must be the case from the inclusion. It is therefore necessary when including the module to do so as close as possible to the key if you do not want the communication to go through a repeater (be careful you can have a maximum of 32 modules live on the conbee key).Or as close as possible to the repeater (any powered module can be a repeater).

# Synchronisation

Once the inclusion is made Jeedom should send you directly to the page of the new module. If the discovery did not work simply click on synchronize

# Equipement

You will find in the first tab all the configuration of your equipment :

- Name of equipment : name of your Simulation equipment,
- Parent object : indicates the parent object to which the equipment belongs,
- Activate : makes your equipment active,
- Visible : makes your equipment visible on the dashboard.
- A configuration button which, depending on the module, will offer you the possible options (be careful here Jeedom will display the options such as the module offers them sometimes, it doesn't make much sense depending on the module)
- general information about the module
- the choice of visual

>**Important**
>
> Here order management is not at all like the zwave. When including a module there are several possible cases :
> - the module has a specific configuration : in this case you have the visual of the module as well as an adapted configuration (this is rarely the case because may be necessary in zigbee)
> - the module has a generic configuration depending on the types  : you have a generic visual and the commands corresponding to the types of the module (this is the most common case)
> - module and types are unknown from jeedom : in this case you have to open a support request to add it in the next plugin update

# Sauvegarde

The plugin performs a backup of the network contained in the key in a local file, you can download it from the configuration page.

# Restauration

When restoring a Jeedom backup, the equipment is restored but not attached to the key, you may have to reinstall the key. To do this you will need the backup mentioned above. This file is located in ``plugins/deconz/data`` and will be included in Phoscon, but the file extension must first be changed to ``.tar.gz`` In ``.dat``. 

Then go to the Phoscon interface. Menu => Gateway => Backup Option => Load Backup.

You just have to do an API key discovery, Save and finally a synchronization from the plugin page.

# Firmware update

## Conbee II

You can do it directly from jeedom if the key is plugged into it, from the plugin configuration but it is more than strongly recommended to do it from windows by following the official Deconz documentation

## Conbee

Go on [here](https://www.dresden-elektronik.de/rpi/deconz-firmware/?C=M;O=D) and check if there is a new firmware, if yes get it back

````
wget https://www.dresden-elektronik.de/rpi/deconz-firmware/deCONZ_Rpi_0x26300500.bin.GCF
sudo GCFFlasher_internal -d 0 -f deCONZ_Rpi_0x26300500.bin.GCF
````

>**Important**
>
>Attention to be able to flash it is absolutely necessary that all the daemons on a USb key (zwave, enocean, rfxcom ...) be cut and check that the key is in 0 with ``GCFFlasher_internal -l``. It is advisable to disconnect the other keys

# FAQ

>**The demon starts and cuts itself off after a minute**
>
>If you are under RPI the serial should not have been cut (it happens in raspi-config)

>**I have a daylight equipment in the node list but not in Jeedom**
>
>It is normally a non-removable virtual equipment created by Deconz. Since it is not a &quot;real&quot; Jeedom equipment does not reassemble it

>**I have the error &quot;Error during the request : 127.0.0.1:8484 / api / 931559A482 / sensors (POST), data : null error : 1 => unauthorized user"**
>
>You have not authorized Jeedom to connect to Deconz, you must in deconz (Phoscon, if you installed it locally you must go to IPJEEDOM:8484) then in the menu at the top left (the 3 small lines) you have to go to "gateway" then "advanced" and click Authenticate App and finally in the 60s go to the configuration of the plugin in Jeedom, save the list of gateway if you have changed it then click on "Recover API key"

>**My rpi (4) does not see the deconz key**
>
>You have to update the key firmware using another system (windows)

>**I manage to control my equipment but I have no feedback on information orders**
>
>This is probably due to a problem with time zones (deconz is very picky above). It is necessary :
>- check in "Deconz Networks" that the timezone and the time are correct if not you can either configure it in deconz or check the "Time zones" box on the gateway in the configuration of the deconz plugin (if you do this last method you must wait 1 hour before the correction is effective)
>- check the time zone of your OS (especially on the rpi) which must absolutely be good
