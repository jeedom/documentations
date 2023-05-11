# Luna-plugin

# since 03/27/2023 new image Jeedom Luna
You can make an update without loss of backup etc by clicking on "Update Recovery module". this will restart your jeedom Luna but you will not lose your configuration. this will make changes in the recovery and boot module of the box which will allow a better stability of this one.

# Attention concern of Luna flashing

We got feedback on a flashing error of some Lunas. (only those shipped before 2023)
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

> USB Fixed

In the Luna plugin of 05/02/2023 the zigbee has been fixed, you must use the ttyUSBLUNA-Zigbee port. for external usb this is also fixed automatically with the name and or serial number.

> Recovery module update

The update brings the latest image into place on the Luna; it will use this image during a recovery (reset button on the box or recovery button on the plugin).
Click on the recovery button; the Luna will download the latest version of its image and restart, the green LEDs on the Luna box will flash. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; the recovery software will be up to date.

> Recovery (Reset Factory)

During a factory reset the box is restored to factory configuration according to the updated image via the button given above. WARNING : you must make a backup of your box before this operation because you will lose the data of your box (except backup on the SD).

> LED

You can via the select type command change the color and animation of the led (can be turned off).

> Batterie

You can, via two feedbacks, have the battery percentage as well as the type of power supply of your box. (charging, decharging, Full etc…).

> SD

Allows the management (formatting) of the micro-SD card that you can add to the box, as well as the transfer to this SD card of Jeedom backups.

> The Power and Reset buttons (v1)

- Reset : less than 1 seconds reboot force box.
- Reset : more than 10 seconds Reset Factory of the box.
- Food : more than 10 seconds shutdown of the fox force with shutdown of the battery (you must have removed the power supply to do so)

> Power and Reset buttons (v2 new image)

- Reset : hard reboot of the Luna
- Food : more than 5 seconds battery shutdown or on (Orange > Off, Green On)
- Food : more than 15 seconds restarting the box. (blue flash on release)
- Food : more than 40 seconds Stop of the box. (Orange flash on release)
- Food : more than 60 seconds factory reset of the box. (Red flash on release)

> Lora (only for luna sold with me Lodule lora from Jeedom)

- automatic detection of the module and launch of the packet forwarder, on the localhost of the jeedom. use the LNS plugin to install the application. (nothing has to be done from the Luna plugin everything is automatic)

# Coming soon : Hotspot, 4G (for Luna 4G), LORA (for Luna Lora)

> Hotspot (ALPHA))

In the Wifi part of the plugin you can check the Hotspot box which will allow you to create a wifi access point on your Box luna. (DNS and IP forwarding (bridge between ethernet and wifi) functional on it).

> The luna plugin allows you to connect from your luna to a Wifi network (with or without a password).

To do this, go to the luna plugin, then select the Luna equipment. Here you can activate and then select the wifi you want (2.4Ghz and 5Ghz), then type the password and save.

For the moment, the plugin only takes into account access with DHCP.

> 4G (only compatible with Luna 4G)

Automatic detection of 4G internal to the box please go through the plugin to click on detect the LTE module if you do not see the parameters in the configuration part, request pin code and APN in the configuration of the Luna plugin.
if 4G detect launch of a connection module in the background which automatically switches from ethernet to 4G if necessary (ping to 8.8.8.8), the SMS plugin works at the same time as 4G on the Luna 4G.
The settings are made in the configuration of the plugin.
