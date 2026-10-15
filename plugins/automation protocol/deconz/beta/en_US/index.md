# Deconz plugin

This plugin uses a Conbee key (1 or 2) to control the Deconz tool, which enables Zigbee connectivity (Xiaomi, Philips Hue, IKEA modules, etc.).

This plugin is completely cloud-free, so it does not communicate with any external sources (third-party servers) and operates 100% locally!!!!

Please note that Zigbee works completely differently from Z-Wave; the list of included modules is not saved on the key at all (nothing is saved on the key). So it’s easy to replace the key (via backup/restore; the backup can be retrieved from Jeedom but cannot be restored from Jeedom—you must use Deconz for Restoration; if you’re running a local installation, the address is IP_JEEDOM:8484). However, if you move the key from one system to another, you’ll also need to perform a backup and restore.

>**IMPORTANT**
>
> This plugin requires a USB drive [Conbee](http://bit.ly/2n4VyWc)

>**IMPORTANT**
>
> Debian Strech (debian 9) or higher is absolutely necessary for the plugin to work

>**IMPORTANT**
>
> The plugin is not compatible with 32-bit architecture (older hardware). The module is compatible with all Raspberry Pi models.

>**IMPORTANT**
>
> On the Raspberry Pi, you need to disable the serial options for the Conbee dongle to work properly (this is done via SSH in raspi-config)

# Compatible module

Here you'll find a list of modules compatible with Deconz [here](https://phoscon.de/en/conbee/compatible)

>**NOTE**
>
> The addition of modules is not handled directly by Jeedom SAS but by Deconz, the company that manufactures the gateway. Therefore, we cannot guarantee that a request for support for a new module will be successful. We strongly recommend purchasing a compatible module.

>**NOTE**
>
> In the case of a so-called compatible module that is not supported or partially supported, the Jeedom SAS company cannot be held responsible and has no obligation of result on the correction of concerns

# Plugins configuration

The plugin supports multiple ConBee gateways (1 ConBee key per gateway). A ConBee gateway can be installed on:

- Jeedom itself (Smart, RPi, and x64_86 supported)
- a remote rpi
- or any other card compatible with Deconz.

For remote installation, here is the [Documentation](https://phoscon.de/en/conbee/install)

To install it on Jeedom, simply click the button to install Deconz locally.

>**IMPORTANT**
>
> You MUST NOT do the 2 installation methods on the same system, it is one or the other

>**NOTE**
>
>To update Deconz locally, simply click the Deconz local installation button again

## Adding gateways

To add new gateways to the plugin, you must either go to the plugin's configuration page (Plugins -> Plugin Management, then deconz), click "Discover" (this doesn't always work), or manually enter at least the gateway's IP address and port.

Next, in Deconz (Phoscon; if you’ve installed it locally, go to IPJEEDOM:8484), then in the menu at the top left (the three small lines), go to “Gateway,” then “Advanced,” and click “Authenticate App.” Finally, within 60 seconds, go to the plugin’s settings in Jeedom; be sure to save the gateway list if you’ve changed it, then click “Retrieve API Key.”

# Deconz networks

Attention at the top right you have a selection button to choose the gateway to look at

## Summary

Here you'll find the key information about your Deconz network (specifically, the Deconz and firmware versions).

## Action

Here, you'll be able to:

- Update the firmware (this will only work if no other USB flash drive is plugged into the computer)
- Perform a reset (note: this will require you to re-pair everything)
- Change the firmware update source (it is not recommended to change this)
- change the channel

## Knots

Here is a summary of the known nodes on the key, including the date of the last communication, the firmware version, and the battery level. Click the "Info" button to view the node details.

>**NOTE**
>
>Here, the nodes are grouped by type, so a module may appear multiple times depending on the number of types

# Inclusion

To add a device, simply click the "Add" button. The system will ask you for the gateway; once confirmed, you have 3 minutes to complete the setup.

To switch the module to inclusion mode, you must go to the documentation for the module in question

>**IMPORTANT**
>
> The Zigbee network is very different from the Z-Wave network; Zigbee can use a repeater, but this must be set up at the time of inclusion. Therefore, when including the module, you must do so either as close as possible to the Conbee key if you do not want communication to go through a repeater (note that you can have a maximum of 32 modules connected directly to the Conbee key).Or as close as possible to the repeater (any powered module can act as a repeater).

# Synchronization

Once the module has been added, Jeedom should take you directly to the new module's page. If the discovery process didn't work, simply click "Synchronize."

# Device

In the first tab, you'll find all the settings for your equipment:

- Device name: Name of your Simulation device,
- Parent object: specifies the parent object to which the device belongs,
- Activate: turns your device active,
- Visible: Makes your equipment visible on the dashboard.
- A configuration button that, depending on the module, will display the available options (note that here, Jeedom displays the options exactly as the module provides them; sometimes this doesn't make much sense depending on the module)
- general information about the module
- the choice of visual

>**IMPORTANT**
>
> Here, command handling is completely different from Z-Wave. When adding a module, there are several possible scenarios:
> - The module has a specific configuration: in this case, you have the module's display as well as a customized configuration (this is rarely the case, as it is not necessary with Zigbee)
> - The module has a generic configuration based on its type: you have a generic interface and commands corresponding to the module's type (this is the most common scenario)
> - Jeedom does not recognize the module or types: in this case, you'll need to submit a support request so we can add them in the next plugin update

# Backups

The plugin backs up the network information stored on the USB drive to a local file; you can download it from the configuration page.

# Restoration

When performing a restoration of a Jeedom backup, the devices are restored but not reassigned to the key; you may need to reinstall the key. To do this, you will need the backup mentioned above. This file is located in ``plugins/deconz/data`` and will be included in Phoscon, but you must first change the file extension ``.tar.gz`` in ``.dat``.

Next, go to the Phoscon interface. Menu => Gateway => Backup Option => Load Backup.

All you have to do now is generate an API key, save it, and then sync from the plugin page.

# Firmware update

## Conbee II

You can do it directly from jeedom if the key is plugged into it, from the plugin configuration but it is more than strongly recommended to do it from windows by following the official Deconz documentation

## Conbee

Go to [here](https://www.dresden-elektronik.de/rpi/deconz-firmware/?C=M;O=D) and check if there is new firmware; if so, download it

````
wget https://www.dresden-elektronik.de/rpi/deconz-firmware/deCONZ_Rpi_0x26300500.bin.GCF
sudo GCFFlasher_internal -d 0 -f deCONZ_Rpi_0x26300500.bin.GCF
````

>**IMPORTANT**
>
>Please note: To flash the device, you must ensure that all daemons on the USB dongle (Z-Wave, Enocean, RFxCom, etc.) are turned off, and verify that the dongle is set to 0 with ``GCFFlasher_internal -l``. It is recommended that you unplug the other keys

# Faq

>**The daemon starts up and shuts down on its own after one minute**
>
>If you're using RPI, the serial port shouldn't have been disabled (this is done in raspi-config)

>**I have a Daylight device in the node list but not in Jeedom**
>
>This is normally a non-deletable virtual device created by Deconz. Since it's not a "true" device, Jeedom doesn't report it.

>**I'm getting the error "Error during request: 127.0.0.1:8484/api/931559A482/sensors(POST), data: null, error: 1 => unauthorized user"**
>
>You haven't authorized Jeedom to connect to Deconz. In Deconz (Phoscon—if you've installed it locally, go to IPJEEDOM:8484), click the three dots in the top-left menu (the three small lines), select “Gateway,” then “Advanced,” and click “Authenticate App.” Finally, within 60 seconds, go to the plugin settings in Jeedom, make sure to save the gateway list if you’ve changed it, and then click “Retrieve API Key.”

>**My Raspberry Pi (4) doesn't recognize the Deconz key**
>
>You need to update the dongle's firmware using another system (Windows)

>**I can control my devices, but I don't get any feedback on the commands**
>
>This is probably due to an issue with time zones (deconz is very particular about this). You need to:
>- Check in "Deconz Networks" to make sure the time zone and time are correct. If not, you can either configure them in Deconz or check the "Time Zones" box on the gateway in the Deconz plugin settings (if you use the latter method, you'll need to wait 1 hour for the change to take effect).
>- Check the time zone setting on your OS (especially on RPi devices)—it absolutely must be correct
