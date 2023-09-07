# Luna-plugin

# since 03/27/2023 new image Jeedom Luna
You can make an update without loss of backup etc by clicking on "Update Recovery module". this will restart your Jeedom Luna but you will not lose your configurations. This will make changes to the recovery and boot module of the box which will allow better stability of the box.

# Attention concern of Luna flashing

We received feedback on an error in flashing certain Jeedom Luna boxes. (only those shipped before 2023)
We are sorry for this and have informed our Domadoo reseller.

If you manage to connect to your Jeedom, please launch the Luna plugin (Plugins/Home automation gateway/luna) and go to : 
  - Recovery module update
Then do the recovery in :
  - Recovery (Reset Factory)
This will update your Box completely.

If you do not have access to your box, please leave the box's reset button pressed for more than 10 seconds; when the latter is released, the box should flash; let it finish the process. Jeedom should become operational again. You can do the above procedure for a complete update.

If it doesn't blink : 
 - Please contact Domadoo via the following link; the Domadoo team will provide you with a return label and send you a correctly flashed Luna :
https://www.domadoo.fr/rma

# The features of the Luna plugin :

> USB Fix

In the Luna plugin version of 02/05/2023, the Zigbee port has been fixed, you must use the ttyUSBLUNA-Zigbee port.
For external USBs, this is also fixed automatically with the name and or serial number.

> Recovery module update

The update brings the latest image into place on the Luna; it will use this image during a recovery (reset button on the box or recovery button on the plugin).
Click on the recovery button; the Luna will download the latest version of its image and restart, the green LEDs on the Luna case will flash. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; the recovery software will be up to date.

> Recovery (Reset Factory)

During a factory reset the box is restored to factory configuration according to the updated image via the button given above. 
WARNING : You must make a backup of your box before this operation because you will lose the data from your box (except the backup on the SD card).

> LED

You can via the select type command change the color and animation of the led (can be turned off).

> Batterie

You can, via two pieces of feedback, have the battery percentage as well as the type of power supply of your box. (charging, decharging, Full etc).

> SD

Allows the management (formatting) of the micro-SD card that you can add to the box, as well as the transfer to this SD card of Jeedom backups.

> Power and Reset buttons (v1) Luna plugin not up to date

- Reset : less than 1 second for a forced reboot of the box.
- Reset : more than 10 seconds for a Factory Reset of the box.
- Food : more than 10 seconds for a forced shutdown of the Fox with battery shutdown (you must first remove the power supply to do this).

> Power and Reset buttons (v2 new image)

- Reset button : less than 1 second for a hardware restart of the Luna box.

  
- Button Power : between 1 and 4 seconds for the battery to turn off or on (Orange = off, Green = On).
- Button Power : between 5 and 9 seconds restart of the box (blue flashing when released).
- Button Power : between 10 and 20 seconds for the box to stop (orange flashing when released).
- Button Power : more than 30 seconds to Reset Factory of the box (red flashing when released).

> Lora (only for Jeedom Luna boxes sold with the Jeedom Lora module)

- Automatic detection of the module and launch of the packet forwarder, on the localhost of the jeedom. Use the LNS plugin to install the application; nothing needs to be done from the Luna plugin, everything is automatic.

# Coming soon : Hotspot, 4G (for Luna 4G), LORA (for Luna Lora)

> Hotspot (Luna ALPHA plugin)

In the Wifi part of the plugin you can check the Hotspot box which will allow you to create a wifi access point on your Box luna. (DNS and IP forwarding (bridge between ethernet and wifi) functional on it).

> The luna plugin allows you to connect from your luna to a Wifi network (with or without a password).

To do this, go to the luna plugin, then select the Luna equipment. Here you can activate and then select the wifi you want (2.4Ghz and 5Ghz), then type the password and save.

For the moment, the plugin only takes into account access with DHCP.

> 4G (only compatible with Jeedom Luna 4G boxes)

Automatic detection of 4G internal to the box. Please go through the Luna plugin and click on 'Detect LTE module' if you do not see the parameters in the configuration section, request pin code and APN in the Luna plugin configuration.
if 4G detected, launch of a connection module in the background which automatically switches from Ethernet to 4G if necessary (ping to 8.8.8.8), the SMS plugin works at the same time as 4G on the Luna 4G.
The settings are made in the plugin configuration.
